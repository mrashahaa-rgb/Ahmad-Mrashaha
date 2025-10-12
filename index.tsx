/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { GoogleGenAI, Type } from "@google/genai";
import { marked } from 'marked';
import { quizQuestions, translations, professions } from './data.js';

const API_KEY = process.env.API_KEY;

const root = document.getElementById('root');
const headerTitle = document.getElementById('header-title');
const footerText = document.getElementById('footer-text');
const langSwitcherContainer = document.getElementById('lang-switcher');
const headerActionsContainer = document.getElementById('header-actions');

const ai = new GoogleGenAI({ apiKey: API_KEY });

// Application State
const savedLang = localStorage.getItem('preferredLanguage') || 'ar';

let state = {
  currentView: 'welcome', // welcome, quiz, loading, results, professionsList, jobSearch, praktikumSearch, adminLogin, savedResultsList
  viewHistory: ['welcome'],
  currentLanguage: savedLang,
  currentQuestionIndex: 0,
  userName: '',
  userAge: '',
  userAnswers: [],
  professionsSearchTerm: '',
  professionsFilter: 'all', // all, ausbildung, study, job
  professionsCurrentPage: 1,
  savedResults: [],
  jobSearchState: {
    isLoading: false,
    results: null,
    error: null,
  },
  praktikumSearchState: {
    isLoadingCompany: false,
    isLoadingEmail: false,
    companyList: [],
    selectedCompany: null,
    generatedEmail: null,
    error: null,
    internshipType: 'orientation', // Default value
  },
  isAdminAuthenticated: false,
  loginError: null,
  activeReport: null,
  isNewReport: false,
};

const PROFESSIONS_PAGE_SIZE = 20;

const setState = (newState) => {
  const oldView = state.currentView;

  // Simple history tracking for the back button
  // We add to history if the view changes and we are not explicitly navigating back.
  if (newState.currentView && newState.currentView !== oldView && !newState.isNavigatingBack) {
      state.viewHistory.push(newState.currentView);
  }

  // Make a copy of newState and remove the temporary flag so it's not saved in state
  const finalNewState = { ...newState };
  delete finalNewState.isNavigatingBack;

  state = { ...state, ...finalNewState };
  renderApp(oldView);
};


const t = (key) => {
  return translations[state.currentLanguage][key] || key;
};

const loadSavedResults = () => {
    try {
        const saved = localStorage.getItem('careerResults');
        if (saved) {
            setState({ savedResults: JSON.parse(saved) });
        }
    } catch (e) {
        console.error("Could not load saved results.", e);
        localStorage.removeItem('careerResults');
    }
}

// --- RENDER FUNCTIONS ---

const renderLanguageSwitcher = () => {
    langSwitcherContainer.innerHTML = Object.keys(translations).map(lang =>
        `<button class="lang-btn ${state.currentLanguage === lang ? 'active' : ''}" data-lang="${lang}">
            ${translations[lang].langName}
        </button>`
    ).join('');

    langSwitcherContainer.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = (e.currentTarget as HTMLElement).dataset.lang;
            if (lang) {
                localStorage.setItem('preferredLanguage', lang); // Save language preference
                setState({ currentLanguage: lang });
                document.documentElement.lang = lang;
                document.documentElement.dir = translations[lang].dir;
            }
        });
    });
};

const renderHeaderActions = () => {
    if (state.isAdminAuthenticated) {
        headerActionsContainer.innerHTML = `
            <button id="view-reports-btn" class="btn secondary">${t('viewReports')}</button>
            <button id="logout-btn" class="btn">${t('logout')}</button>
        `;
        document.getElementById('view-reports-btn').addEventListener('click', () => setState({ currentView: 'savedResultsList' }));
        document.getElementById('logout-btn').addEventListener('click', () => setState({ currentView: 'welcome', isAdminAuthenticated: false, loginError: null, viewHistory: ['welcome'] }));
    } else {
        headerActionsContainer.innerHTML = `<button id="admin-login-btn" class="btn">${t('responsibleLogin')}</button>`;
        document.getElementById('admin-login-btn').addEventListener('click', () => setState({ currentView: 'adminLogin' }));
    }
};

const renderWelcome = () => {
  root.innerHTML = `
    <div class="container welcome-container">
        <h1>${t('welcomeTitle')}</h1>
        <p>${t('welcomeDesc')}</p>
        <div class="welcome-actions">
            <div id="start-quiz-card" class="action-card primary">
                <h3>${t('startQuiz')}</h3>
                <p>${t('startQuizDesc')}</p>
            </div>
            <div id="browse-professions-card" class="action-card">
                <h3>${t('browseProfessions')}</h3>
                <p>${t('browseProfessionsDesc')}</p>
            </div>
            <div id="job-search-card" class="action-card">
                <h3>${t('searchAvailableJobs')}</h3>
                <p>${t('searchAvailableJobsDesc')}</p>
            </div>
            <div id="praktikum-search-card" class="action-card">
                <h3>${t('searchForPraktikum')}</h3>
                <p>${t('searchForPraktikumDesc')}</p>
            </div>
        </div>
    </div>
  `;
  document.getElementById('start-quiz-card').addEventListener('click', () => setState({ currentView: 'quiz', currentQuestionIndex: 0, userAnswers: new Array(quizQuestions[state.currentLanguage].length).fill(null) }));
  document.getElementById('browse-professions-card').addEventListener('click', () => setState({ currentView: 'professionsList' }));
  document.getElementById('job-search-card').addEventListener('click', () => setState({ currentView: 'jobSearch' }));
  document.getElementById('praktikum-search-card').addEventListener('click', () => setState({ currentView: 'praktikumSearch' }));
};

const renderTopNav = () => {
    const isRTL = translations[state.currentLanguage].dir === 'rtl';

    const backButton = `<button id="top-back-btn" class="btn secondary small-btn">${t('back')}</button>`;
    const homeButton = `<button id="top-home-btn" class="btn secondary small-btn">${t('home')}</button>`;

    // For LTR, the order is Back then Home, which space-between places correctly.
    // For RTL, the flexbox starts on the right. To have the Home button on the right
    // and the Back button on the left, the Home button must come first in the DOM.
    return `
        <div class="top-nav-container">
            ${isRTL ? homeButton : backButton}
            ${isRTL ? backButton : homeButton}
        </div>
    `;
};

const attachTopNavListeners = () => {
    document.getElementById('top-home-btn')?.addEventListener('click', () => {
        setState({ currentView: 'welcome', viewHistory: ['welcome'] });
    });
    document.getElementById('top-back-btn')?.addEventListener('click', () => {
        if (state.viewHistory.length > 1) {
            state.viewHistory.pop(); // Remove current view from history
            const previousView = state.viewHistory[state.viewHistory.length - 1];
            setState({ currentView: previousView, isNavigatingBack: true });
        } else {
            // If history is exhausted, just go to welcome
            setState({ currentView: 'welcome', viewHistory: ['welcome'] });
        }
    });
};

const renderAdminLogin = () => {
    root.innerHTML = `
        <div class="container admin-login-container">
            ${renderTopNav()}
            <h1>${t('adminLogin')}</h1>
            <form id="login-form" class="login-form">
                <input type="text" id="username" placeholder="${t('username')}" required>
                <input type="password" id="password" placeholder="${t('password')}" required>
                <button type="submit" class="btn">${t('login')}</button>
            </form>
            ${state.loginError ? `<p class="error-message">${state.loginError}</p>` : ''}
        </div>
    `;

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const user = (document.getElementById('username') as HTMLInputElement).value;
        const pass = (document.getElementById('password') as HTMLInputElement).value;
        if (user === 'admin' && pass === '12345') {
            setState({ isAdminAuthenticated: true, currentView: 'savedResultsList', loginError: null });
        } else {
            setState({ loginError: t('invalidCredentials') });
        }
    });
    attachTopNavListeners();
}

const renderQuiz = () => {
  const questions = quizQuestions[state.currentLanguage];
  if (!questions) {
      console.error("Quiz questions not loaded for language:", state.currentLanguage);
      root.innerHTML = `<p>${t('errorText')}</p>`;
      return;
  }
  const question = questions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex) / questions.length) * 100;
  
  let questionContent;

  if (question.type === 'text') {
    const value = state.userAnswers[state.currentQuestionIndex] || (question.id === 'name' ? state.userName : '') || '';
    if (question.id === 'name') {
      questionContent = `
          <div class="quiz-input-group">
              <label for="quiz-input">${question.question}</label>
              <input type="text" id="quiz-input" value="${value}" placeholder="${t('answerHere')}">
          </div>
      `;
    } else {
      questionContent = `
          <div class="quiz-input-group">
              <label for="quiz-input">${question.question}</label>
              <textarea id="quiz-input" rows="5" placeholder="${t('answerHere')}">${value}</textarea>
          </div>
      `;
    }
  } else if (question.type === 'number') {
    const value = state.userAnswers[state.currentQuestionIndex] || (question.id === 'age' ? state.userAge : '') || '';
    questionContent = `
      <div class="quiz-input-group">
          <label for="quiz-input">${question.question}</label>
          <input type="number" id="quiz-input" value="${value}" placeholder="${t('answerHere')}">
      </div>
    `;
  } else {
     questionContent = `
        <div class="options-grid">
            ${question.options.map((option) => `
              <button class="option-btn ${state.userAnswers[state.currentQuestionIndex] === option ? 'selected' : ''}" data-option="${option}">
                ${option}
              </button>
            `).join('')}
        </div>
     `;
  }


  root.innerHTML = `
    <div class="container quiz-container">
      ${renderTopNav()}
      <div class="progress-bar">
        <div class="progress-bar-inner" style="width: ${progress}%"></div>
      </div>
      <p class="question-text">${question.type !== 'text' && question.type !== 'number' ? `${state.currentQuestionIndex + 1 - 2}.` : ''} ${question.question}</p>
      ${questionContent}
      <div class="quiz-nav">
        <button id="back-btn" class="btn secondary" ${state.currentQuestionIndex === 0 ? 'disabled' : ''}>${t('back')}</button>
        ${state.currentQuestionIndex === questions.length - 1 
          ? `<button id="finish-btn" class="btn">${t('getResults')}</button>`
          : `<button id="next-btn" class="btn">${t('next')}</button>`
        }
      </div>
    </div>
  `;

  // --- Event Listeners for Smoother UX ---
  const handleAnswer = () => {
    const newAnswers = [...state.userAnswers];
    let newUserName = state.userName;
    let newUserAge = state.userAge;
    
    if (question.type === 'text' || question.type === 'number') {
        const value = (document.getElementById('quiz-input') as HTMLInputElement | HTMLTextAreaElement).value;
        if (!value && question.id !== 'name' && question.id !== 'age') return; // Allow empty name/age for now
        newAnswers[state.currentQuestionIndex] = value;
        if(question.id === 'name') newUserName = value;
        if(question.id === 'age') newUserAge = value;
    } else {
        const selectedButton = document.querySelector('.option-btn.selected');
        if (!selectedButton) return;
        newAnswers[state.currentQuestionIndex] = (selectedButton as HTMLElement).dataset.option;
    }
    
    return { newAnswers, newUserName, newUserAge };
  }

  if (question.type !== 'text' && question.type !== 'number') {
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const clickedButton = e.currentTarget as HTMLElement;
        // Visual selection without re-render
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        clickedButton.classList.add('selected');
        
        // Add animation class for feedback
        clickedButton.classList.add('clicked');
        
        // Remove animation class after it finishes to allow re-triggering
        clickedButton.addEventListener('animationend', () => {
          clickedButton.classList.remove('clicked');
        }, { once: true });
      });
    });
  }

  if (state.currentQuestionIndex > 0) {
    document.getElementById('back-btn').addEventListener('click', () => {
      setState({ currentQuestionIndex: state.currentQuestionIndex - 1 });
    });
  }

  const nextAction = () => {
      const result = handleAnswer();
      if(result) {
          setState({ 
              userAnswers: result.newAnswers,
              userName: result.newUserName,
              userAge: result.newUserAge,
              currentQuestionIndex: state.currentQuestionIndex + 1 
          });
      }
  };
  
  const finishAction = () => {
      const result = handleAnswer();
      if(result) {
          setState({ 
              userAnswers: result.newAnswers,
              userName: result.newUserName,
              userAge: result.newUserAge,
          });
          getAIResults();
      }
  }

  if (state.currentQuestionIndex < questions.length - 1) {
    document.getElementById('next-btn').addEventListener('click', nextAction);
  } else {
    document.getElementById('finish-btn').addEventListener('click', finishAction);
  }
  attachTopNavListeners();
};

const renderLoading = (title = t('loadingTitle'), desc = t('loadingDesc')) => {
  root.innerHTML = `
    <div class="container loader-container">
      <div class="loader"></div>
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  `;
};

const renderResults = async (results, isNew) => {
  if (!results) {
    renderWelcome(); // Fallback if no report data
    return;
  }
  
  const personalitySummaryHtml = await marked.parse(results.personalitySummary);
  const careerAdviceHtml = await marked.parse(results.careerAdvice);

  // Check if this specific report is already saved
  const isAlreadySaved = state.savedResults.some(r => r.savedDate === results.savedDate);

  root.innerHTML = `
    <div class="container results-container">
      ${renderTopNav()}
      <h1>${t('resultsTitleFor').replace('{name}', results.userName || t('you'))}</h1>
      
      <nav class="results-nav">
        <a href="#personality-summary">${t('personalitySummary')}</a>
        <a href="#recommended-paths">${t('recommendedPaths')}</a>
        <a href="#career-advice">${t('careerAdvice')}</a>
      </nav>

      <div id="personality-summary" class="result-section">
        <h2>${t('personalitySummary')}</h2>
        <div>${personalitySummaryHtml}</div>
      </div>

      <div id="recommended-paths" class="result-section">
        <h2>${t('recommendedPaths')}</h2>
        ${results.jobSuggestions.map(job => `
          <div class="job-suggestion-card">
            <h3>${job.title}</h3>
            <p>${job.description}</p>
            <p class="details">${job.details}</p>
          </div>
        `).join('')}
      </div>

      <div id="career-advice" class="result-section">
        <h2>${t('careerAdvice')}</h2>
        <div>${careerAdviceHtml}</div>
      </div>
      
      <div class="results-actions">
        <button id="print-btn" class="btn secondary">${t('printReport')}</button>
        <button id="email-btn" class="btn secondary">${t('emailReport')}</button>
        ${isNew ? `<button id="save-btn" class="btn secondary" ${isAlreadySaved ? 'disabled' : ''}>${isAlreadySaved ? t('reportSaved') : t('saveReport')}</button>` : ''}
      </div>
    </div>
  `;
  attachTopNavListeners();

  document.getElementById('print-btn').addEventListener('click', () => window.print());
  
  document.getElementById('email-btn').addEventListener('click', () => {
      // Force German for the email template
      const de = translations['de'];
      const subject = de.emailSubject.replace('{name}', results.userName || de.you);
      let body = `${de.resultsTitleFor.replace('{name}', results.userName || de.you)}\n\n`;
      body += `--- ${de.personalitySummary} ---\n${results.personalitySummary}\n\n`;
      body += `--- ${de.recommendedPaths} ---\n`;
      results.jobSuggestions.forEach(job => {
          body += `\n* ${job.title} *\n${job.description}\n${job.details}\n`;
      });
      body += `\n--- ${de.careerAdvice} ---\n${results.careerAdvice}`;
      
      window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
  
  if (isNew && !isAlreadySaved) {
      document.getElementById('save-btn').addEventListener('click', (e) => {
          const button = e.target as HTMLButtonElement;
          const newSavedResults = [...state.savedResults, results];
          localStorage.setItem('careerResults', JSON.stringify(newSavedResults));
          
          // FIX: Directly update state array and button to avoid re-render bug
          state.savedResults = newSavedResults;
          button.textContent = t('reportSaved');
          button.disabled = true;
      });
  }

  // Add smooth scrolling for nav links
  document.querySelectorAll('.results-nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
};

const renderSavedResultsList = () => {
    root.innerHTML = `
        <div class="container saved-reports-container">
            ${renderTopNav()}
            <div class="saved-reports-header">
                <h1>${t('savedReportsTitle')}</h1>
            </div>
            ${state.savedResults.length > 0 ? `
                <ul>
                    ${state.savedResults.map((result, index) => `
                        <li class="report-item">
                            <div class="report-item-info">
                                <span class="name">${result.userName || t('anonymousReport')}</span>
                                <span class="date">${new Date(result.savedDate).toLocaleDateString(state.currentLanguage)}</span>
                            </div>
                            <div class="report-item-actions">
                                <button class="btn view-details-btn" data-index="${index}">${t('viewDetails')}</button>
                                <button class="btn delete delete-btn" data-index="${index}">${t('delete')}</button>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            ` : `<p>${t('noSavedReports')}</p>`}
        </div>
    `;

    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt((e.currentTarget as HTMLElement).dataset.index);
            setState({ currentView: 'results', activeReport: state.savedResults[index], isNewReport: false });
        });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (window.confirm(t('confirmDeleteReport'))) {
                const index = parseInt((e.currentTarget as HTMLElement).dataset.index);
                const newResults = state.savedResults.filter((_, i) => i !== index);
                localStorage.setItem('careerResults', JSON.stringify(newResults));
                setState({ savedResults: newResults });
            }
        });
    });
    
    attachTopNavListeners();
};

const renderProfessionsList = () => {
    const allProfessions = professions.filter(p => {
        const term = state.professionsSearchTerm.toLowerCase();
        const title = p.title[state.currentLanguage]?.toLowerCase() || '';
        const matchesTerm = title.includes(term);
        const matchesFilter = state.professionsFilter === 'all' || p.type === state.professionsFilter;
        return matchesTerm && matchesFilter;
    });

    const totalPages = Math.ceil(allProfessions.length / PROFESSIONS_PAGE_SIZE);
    const startIndex = (state.professionsCurrentPage - 1) * PROFESSIONS_PAGE_SIZE;
    const endIndex = startIndex + PROFESSIONS_PAGE_SIZE;
    const paginatedProfessions = allProfessions.slice(startIndex, endIndex);

    root.innerHTML = `
        <div class="container professions-container">
            ${renderTopNav()}
            <h1>${t('browseProfessions')}</h1>
            <p>${t('professionsDesc')}</p>
            <div class="professions-controls">
                <input type="search" id="search-professions" placeholder="${t('searchPlaceholder')}" value="${state.professionsSearchTerm}">
                <div class="filter-buttons">
                    <button class="btn secondary ${state.professionsFilter === 'all' ? 'active' : ''}" data-filter="all">${t('all')}</button>
                    <button class="btn secondary ${state.professionsFilter === 'ausbildung' ? 'active' : ''}" data-filter="ausbildung">${t('ausbildung')}</button>
                    <button class="btn secondary ${state.professionsFilter === 'study' ? 'active' : ''}" data-filter="study">${t('study')}</button>
                    <button class="btn secondary ${state.professionsFilter === 'job' ? 'active' : ''}" data-filter="job">${t('job')}</button>
                </div>
            </div>
            <div id="professions-grid">
                ${paginatedProfessions.map(p => `
                    <div class="profession-card">
                        <h3>${p.title[state.currentLanguage]}</h3>
                        <div class="profession-card-details">
                            <p><strong>${t('duration')}:</strong> ${p.duration[state.currentLanguage]}</p>
                            <p><strong>${t('salary')}:</strong> ${p.salary[state.currentLanguage]}</p>
                            <p><strong>${t('requirements')}:</strong> ${p.requirements[state.currentLanguage]}</p>
                            <p><strong>${t('duties')}:</strong> ${p.duties[state.currentLanguage]}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
             <div class="pagination-controls">
                <button id="prev-page" class="btn secondary" ${state.professionsCurrentPage === 1 ? 'disabled' : ''}>${t('back')}</button>
                <span class="page-info">${t('page')} ${state.professionsCurrentPage} / ${totalPages}</span>
                <button id="next-page" class="btn secondary" ${state.professionsCurrentPage === totalPages ? 'disabled' : ''}>${t('next')}</button>
            </div>
        </div>
    `;

    document.getElementById('search-professions').addEventListener('input', (e) => {
        setState({ professionsSearchTerm: (e.target as HTMLInputElement).value, professionsCurrentPage: 1 });
    });
    
    document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setState({ professionsFilter: (e.currentTarget as HTMLElement).dataset.filter, professionsCurrentPage: 1 });
        });
    });

    if (state.professionsCurrentPage > 1) {
        document.getElementById('prev-page').addEventListener('click', () => setState({ professionsCurrentPage: state.professionsCurrentPage - 1 }));
    }
    if (state.professionsCurrentPage < totalPages) {
        document.getElementById('next-page').addEventListener('click', () => setState({ professionsCurrentPage: state.professionsCurrentPage + 1 }));
    }

    attachTopNavListeners();
}

const renderJobSearch = async () => {
    let resultsContent = '';
    const { isLoading, results, error } = state.jobSearchState;

    if (isLoading) {
        resultsContent = `<div class="inline-loader-container"><div class="loader"></div><p>${t('jobSearchLoading')}</p></div>`;
    } else if (error) {
        resultsContent = `<p class="error-text">${error}</p>`;
    } else if (results) {
        resultsContent = `
            <div class="job-search-results">
                <h3>${t('jobSearchSources')}</h3>
                ${results.sources.length > 0 ? `
                    <ul class="sources-list">
                        ${results.sources.map(source => `
                            <li><a href="${source.web.uri}" target="_blank" rel="noopener noreferrer">${source.web.title}</a></li>
                        `).join('')}
                    </ul>
                ` : `<p>${t('noJobsFound')}</p>`}
            </div>
        `;
    }

    root.innerHTML = `
        <div class="container job-search-container">
            ${renderTopNav()}
            <h1>${t('searchAvailableJobs')}</h1>
            <p>${t('jobSearchDesc')}</p>
            <form id="job-search-form" class="job-search-form">
                <div class="job-search-inputs">
                    <input type="text" id="job-title-input" placeholder="${t('jobTitlePlaceholder')}" required>
                    <input type="text" id="location-input" placeholder="${t('locationPlaceholder')}" required>
                </div>
                <button type="submit" class="btn">${t('search')}</button>
            </form>
            <div id="job-search-results-container">
                ${resultsContent}
            </div>
        </div>
    `;

    document.getElementById('job-search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const jobTitle = (document.getElementById('job-title-input') as HTMLInputElement).value;
        const location = (document.getElementById('location-input') as HTMLInputElement).value;
        getLiveJobs(jobTitle, location);
    });
    attachTopNavListeners();
};

const renderPraktikumSearch = () => {
    const { isLoadingCompany, isLoadingEmail, companyList, selectedCompany, generatedEmail, error, internshipType } = state.praktikumSearchState;

    let companyContent = '';
    if (isLoadingCompany) {
        companyContent = `<div class="inline-loader-container"><div class="loader"></div><p>${t('praktikumCompanyLoading')}</p></div>`;
    } else if (error) {
        companyContent = `<p class="error-message">${error}</p>`;
    } else if (companyList.length > 0) {
        companyContent = `
            <div class="praktikum-results-list">
                <h3>${t('praktikumCompanyResult')}</h3>
                ${companyList.map((company, index) => `
                    <div class="praktikum-company-card ${selectedCompany === company ? 'selected' : ''}">
                        <div class="praktikum-company-info">
                           <p><strong>${company.name}</strong></p>
                           <p>${company.address}</p>
                           <p>${company.contact}</p>
                           ${company.website ? `<p><a href="${company.website.startsWith('http') ? company.website : `https://${company.website}`}" target="_blank" rel="noopener noreferrer" class="website-link">${t('companyWebsite')}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></p>` : ''}
                        </div>
                        <button class="btn secondary select-company-btn" data-index="${index}">${selectedCompany === company ? t('selected') : t('select')}</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    let emailGeneratorContent = '';
    if (selectedCompany) {
        emailGeneratorContent = `
            <div class="email-generator">
                <h3>${t('praktikumGenerateEmailTitle')}</h3>
                <form id="email-gen-form" class="praktikum-search-form">
                    <div class="praktikum-search-inputs">
                        <input type="text" id="user-name-email" placeholder="${t('yourNamePlaceholder')}" required>
                    </div>
                    <button type="submit" class="btn" ${isLoadingEmail ? 'disabled' : ''}>
                        ${isLoadingEmail ? t('loading') : t('praktikumGenerateEmailBtn')}
                    </button>
                </form>
            </div>
        `;
    }
    
    let emailDisplayContent = '';
    if(isLoadingEmail) {
        emailDisplayContent = `<div class="inline-loader-container"><div class="loader"></div><p>${t('praktikumEmailLoading')}</p></div>`;
    } else if (generatedEmail) {
        emailDisplayContent = `
             <div class="email-generator">
                <h3>${t('praktikumYourEmail')}</h3>
                <textarea id="email-output" readonly>${generatedEmail}</textarea>
                <div class="email-generator-actions">
                    <button id="copy-email-btn" class="btn secondary">${t('copyEmail')}</button>
                </div>
            </div>
        `;
    }

    root.innerHTML = `
        <div class="container praktikum-search-container">
            ${renderTopNav()}
            <h1>${t('searchForPraktikum')}</h1>
            <p>${t('praktikumDesc')}</p>
            <form id="praktikum-search-form" class="praktikum-search-form">
                <div class="praktikum-search-inputs">
                    <input type="text" id="field-input" placeholder="${t('fieldPlaceholder')}" required>
                    <input type="text" id="location-input" placeholder="${t('locationPlaceholder')}" required>
                    <select id="internship-type-select">
                        <option value="orientation" ${internshipType === 'orientation' ? 'selected' : ''}>${t('internshipTypeOrientation')}</option>
                        <option value="school" ${internshipType === 'school' ? 'selected' : ''}>${t('internshipTypeSchool')}</option>
                        <option value="ausbildung" ${internshipType === 'ausbildung' ? 'selected' : ''}>${t('internshipTypeAusbildung')}</option>
                    </select>
                </div>
                <button type="submit" class="btn" ${isLoadingCompany ? 'disabled' : ''}>
                     ${isLoadingCompany ? t('loading') : t('praktikumSearchBtn')}
                </button>
            </form>

            <div id="praktikum-results-container">
                ${companyContent}
                ${selectedCompany && !generatedEmail ? emailGeneratorContent : ''}
                ${emailDisplayContent}
            </div>
        </div>
    `;
    
    document.getElementById('praktikum-search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const field = (document.getElementById('field-input') as HTMLInputElement).value;
        const location = (document.getElementById('location-input') as HTMLInputElement).value;
        const type = (document.getElementById('internship-type-select') as HTMLSelectElement).value;
        // Save the type to state before searching
        state.praktikumSearchState.internshipType = type;
        getPraktikumOpportunity(field, location);
    });
    
    document.querySelectorAll('.select-company-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt((e.currentTarget as HTMLElement).dataset.index, 10);
            setState({ 
                praktikumSearchState: {
                    ...state.praktikumSearchState,
                    selectedCompany: state.praktikumSearchState.companyList[index],
                    generatedEmail: null, // Reset email when new company is selected
                }
            });
        });
    });

    if (selectedCompany && !generatedEmail) {
         document.getElementById('email-gen-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const userName = (document.getElementById('user-name-email') as HTMLInputElement).value;
            generateInquiryEmail(userName, selectedCompany.name, (document.getElementById('field-input') as HTMLInputElement).value, state.praktikumSearchState.internshipType);
        });
    }

    if (generatedEmail) {
        document.getElementById('copy-email-btn').addEventListener('click', (e) => {
            const emailText = (document.getElementById('email-output') as HTMLTextAreaElement).value;
            navigator.clipboard.writeText(emailText).then(() => {
                const btn = e.target as HTMLButtonElement;
                const originalText = t('copyEmail');
                
                btn.classList.add('copied-success');
                btn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                    ${t('copied')}
                `;
                btn.disabled = true;

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('copied-success');
                    btn.disabled = false;
                }, 2000);
            });
        });
    }

    attachTopNavListeners();
}


// --- LOGIC ---

const getAIResults = async () => {
  setState({ currentView: 'loading' });

  const schema = {
    type: Type.OBJECT,
    properties: {
      userName: { type: Type.STRING },
      personalitySummary: {
        type: Type.STRING,
        description: t('schemaPersonality'),
      },
      jobSuggestions: {
        type: Type.ARRAY,
        description: t('schemaJobSuggestions'),
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: t('schemaTitle') },
            description: { type: Type.STRING, description: t('schemaDescription') },
            details: { type: Type.STRING, description: t('schemaDetails') },
          },
          required: ["title", "description", "details"],
        },
      },
      careerAdvice: {
        type: Type.STRING,
        description: t('schemaCareerAdvice'),
      },
    },
    required: ["userName", "personalitySummary", "jobSuggestions", "careerAdvice"],
  };
  
  const userPrompt = `
    ${t('promptIntro')}
    ${quizQuestions[state.currentLanguage].map((q, i) => `${q.question}: ${state.userAnswers[i]}`).join('\n')}
    
    ${t('promptInstruction')}
  `;
  
  const systemInstruction = t('systemInstruction').replace('{name}', state.userName).replace('{age}', state.userAge);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        systemInstruction: systemInstruction
      },
    });

    const resultJson = JSON.parse(response.text);
    resultJson.savedDate = new Date().toISOString(); // Add timestamp for unique ID
    setState({ currentView: 'results', activeReport: resultJson, isNewReport: true });

  } catch(error) {
    console.error("Error fetching AI results:", error);
    root.innerHTML = `<div class="container" style="text-align: center;"><p>${t('errorText')}</p><button id="restart-btn" class="btn">${t('restart')}</button></div>`;
    document.getElementById('restart-btn').addEventListener('click', () => {
       setState({ currentView: 'welcome' });
    });
  }
};

const getLiveJobs = async (jobTitle, location) => {
    setState({ 
        jobSearchState: { isLoading: true, results: null, error: null }
    });

    const prompt = t('jobSearchPrompt')
        .replace('{jobTitle}', jobTitle)
        .replace('{location}', location);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                tools: [{googleSearch: {}}],
            },
        });
        
        const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];

        setState({
            jobSearchState: {
                isLoading: false,
                results: { sources },
                error: null
            }
        });

    } catch(error) {
        console.error("Error fetching live jobs:", error);
        setState({
            jobSearchState: {
                isLoading: false,
                results: null,
                error: t('errorText')
            }
        });
    }
}

const getPraktikumOpportunity = async (field, location) => {
    setState({
        praktikumSearchState: { ...state.praktikumSearchState, isLoadingCompany: true, error: null, companyList: [], selectedCompany: null, generatedEmail: null }
    });

    const prompt = t('praktikumSearchPrompt').replace('{field}', field).replace('{location}', location);
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                tools: [{googleSearch: {}}],
            },
        });
        
        let jsonString = response.text.trim();
        const jsonMatch = jsonString.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch && jsonMatch[1]) {
            jsonString = jsonMatch[1];
        }

        let companyList = [];
        if (jsonString) {
           try {
              companyList = JSON.parse(jsonString);
           } catch (parseError) {
               console.error("Failed to parse AI response as JSON:", parseError, "Raw text:", response.text);
               throw new Error("AI returned an invalid data format.");
           }
        }
        
        if (!Array.isArray(companyList) || companyList.length === 0) {
             throw new Error("No companies found or invalid format.");
        }
        
        setState({
            praktikumSearchState: {
                ...state.praktikumSearchState,
                isLoadingCompany: false,
                companyList: companyList,
            }
        });

    } catch(error) {
        console.error("Error fetching Praktikum opportunity:", error);
        setState({
            praktikumSearchState: {
                ...state.praktikumSearchState,
                isLoadingCompany: false,
                error: t('praktikumSearchError'),
            }
        });
    }
}

const generateInquiryEmail = async (userName, companyName, field, internshipType) => {
     setState({
        praktikumSearchState: { ...state.praktikumSearchState, isLoadingEmail: true, generatedEmail: null }
    });
    
    const typeKey = `internshipType${internshipType.charAt(0).toUpperCase() + internshipType.slice(1)}`;
    const translatedType = translations['de'][typeKey] || internshipType;
    
    // Force German prompt for email generation
    const prompt = translations['de']['praktikumEmailPrompt']
        .replace('{userName}', userName)
        .replace('{companyName}', companyName)
        .replace('{field}', field)
        .replace('{internshipType}', translatedType);
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        setState({
            praktikumSearchState: {
                ...state.praktikumSearchState,
                isLoadingEmail: false,
                generatedEmail: response.text,
            }
        });

    } catch (error) {
         console.error("Error generating inquiry email:", error);
         setState({
            praktikumSearchState: {
                ...state.praktikumSearchState,
                isLoadingEmail: false,
                error: t('errorText'),
            }
        });
    }
};

const renderApp = (oldView?: string) => {
  // Update static text elements
  headerTitle.textContent = t('headerTitle');
  footerText.textContent = t('footerText');
  
  // Render dynamic header elements
  renderLanguageSwitcher();
  renderHeaderActions();

  // Render current view
  switch (state.currentView) {
    case 'quiz':
      renderQuiz();
      break;
    case 'loading':
      renderLoading();
      break;
    case 'results':
      renderResults(state.activeReport, state.isNewReport);
      break;
    case 'professionsList':
      renderProfessionsList();
      break;
    case 'jobSearch':
      renderJobSearch();
      break;
    case 'praktikumSearch':
        renderPraktikumSearch();
        break;
    case 'adminLogin':
        renderAdminLogin();
        break;
    case 'savedResultsList':
        if (state.isAdminAuthenticated) {
            renderSavedResultsList();
        } else {
            renderAdminLogin();
        }
        break;
    case 'welcome':
    default:
      renderWelcome();
      break;
  }

  // Only scroll to top if the main view has actually changed.
  if (oldView !== undefined && state.currentView !== oldView) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// --- Initial App Load ---
loadSavedResults();
document.documentElement.lang = state.currentLanguage;
document.documentElement.dir = translations[state.currentLanguage].dir;

// Add global navigation listener to the header title
headerTitle.addEventListener('click', () => {
    // Don't do anything if we are already on the welcome page
    if (state.currentView !== 'welcome') {
        setState({ currentView: 'welcome', viewHistory: ['welcome'] });
    }
});

renderApp();