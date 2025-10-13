/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// FIX: Import `Type` enum for defining the response schema.
import { GoogleGenAI, Type } from "@google/genai";
import { marked } from 'marked';
import { quizQuestions, translations, professions } from './data';

const API_KEY = process.env.API_KEY;

const root = document.getElementById('root');
const headerTitle = document.getElementById('header-title');
const footerText = document.getElementById('footer-text');
const langSwitcherContainer = document.getElementById('lang-switcher');
const headerActionsContainer = document.getElementById('header-actions');

const ai = new GoogleGenAI({ apiKey: API_KEY });

// --- START: CENTRALIZED STATE MANAGEMENT (REFACTOR) ---

const PROFESSIONS_PAGE_SIZE = 20;

// 1. Define the Initial State
const initialState = {
  currentView: 'welcome',
  viewHistory: ['welcome'],
  currentLanguage: localStorage.getItem('preferredLanguage') || 'ar',
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
    internshipType: '',
  },
  isAdminAuthenticated: false,
  loginError: null,
  activeReport: null,
  isNewReport: false,
};

// 2. Create the Reducer Function
// This function is the only place where state can be modified.
const appReducer = (state, action) => {
  switch (action.type) {
    case 'NAVIGATE_TO':
      return {
        ...state,
        currentView: action.payload,
        viewHistory: [...state.viewHistory, action.payload],
      };
    case 'NAVIGATE_BACK': {
      if (state.viewHistory.length <= 1) {
        return { ...state, currentView: 'welcome', viewHistory: ['welcome'] };
      }
      const newHistory = [...state.viewHistory];
      newHistory.pop();
      return {
        ...state,
        currentView: newHistory[newHistory.length - 1],
        viewHistory: newHistory,
      };
    }
    case 'NAVIGATE_HOME':
      return {
        ...state,
        currentView: 'welcome',
        viewHistory: ['welcome'],
      };
    case 'SET_LANGUAGE':
      return { ...state, currentLanguage: action.payload };
    case 'START_QUIZ':
      return {
        ...state,
        currentView: 'quiz',
        viewHistory: [...state.viewHistory, 'quiz'],
        currentQuestionIndex: 0,
        userAnswers: new Array(quizQuestions[state.currentLanguage].length).fill(null),
      };
    case 'SET_QUESTION_INDEX':
      return { ...state, currentQuestionIndex: action.payload };
    case 'SET_USER_ANSWERS':
      return {
          ...state,
          userAnswers: action.payload.answers,
          userName: action.payload.name,
          userAge: action.payload.age,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAdminAuthenticated: true,
        loginError: null,
        currentView: 'savedResultsList',
        viewHistory: [...state.viewHistory, 'savedResultsList'],
      };
    case 'LOGIN_FAIL':
      return { ...state, loginError: action.payload };
    case 'LOGOUT':
      return {
        ...state,
        isAdminAuthenticated: false,
        loginError: null,
        currentView: 'welcome',
        viewHistory: ['welcome'],
      };
    case 'LOAD_SAVED_RESULTS':
      return { ...state, savedResults: action.payload };
    case 'SET_SAVED_RESULTS':
        // This action is used for adding/deleting without a full re-render
        return { ...state, savedResults: action.payload };
    case 'SET_ACTIVE_REPORT':
        return {
            ...state,
            activeReport: action.payload.report,
            isNewReport: action.payload.isNew,
            currentView: 'results',
            viewHistory: [...state.viewHistory, 'results'],
        };
    case 'SET_PROFESSIONS_STATE':
        return {
            ...state,
            professionsSearchTerm: action.payload.searchTerm,
            professionsFilter: action.payload.filter,
            professionsCurrentPage: action.payload.page,
        };
    // Job Search Actions
    case 'JOB_SEARCH_START':
      return { ...state, jobSearchState: { isLoading: true, results: null, error: null } };
    case 'JOB_SEARCH_SUCCESS':
      return { ...state, jobSearchState: { isLoading: false, results: action.payload, error: null } };
    case 'JOB_SEARCH_ERROR':
      return { ...state, jobSearchState: { isLoading: false, results: null, error: action.payload } };
    // Praktikum Search Actions
    case 'PRAKTIKUM_COMPANY_SEARCH_START':
        return {
            ...state,
            praktikumSearchState: { ...initialState.praktikumSearchState, internshipType: action.payload, isLoadingCompany: true }
        };
    case 'PRAKTIKUM_COMPANY_SEARCH_SUCCESS':
        return {
            ...state,
            praktikumSearchState: { ...state.praktikumSearchState, isLoadingCompany: false, companyList: action.payload, error: null }
        };
    case 'PRAKTIKUM_COMPANY_SEARCH_ERROR':
        return {
            ...state,
            praktikumSearchState: { ...state.praktikumSearchState, isLoadingCompany: false, error: action.payload }
        };
    case 'PRAKTIKUM_SELECT_COMPANY':
        return {
            ...state,
            praktikumSearchState: { ...state.praktikumSearchState, selectedCompany: action.payload, generatedEmail: null }
        };
    case 'PRAKTIKUM_EMAIL_GEN_START':
        return {
            ...state,
            praktikumSearchState: { ...state.praktikumSearchState, isLoadingEmail: true, generatedEmail: null }
        };
    case 'PRAKTIKUM_EMAIL_GEN_SUCCESS':
        return {
            ...state,
            praktikumSearchState: { ...state.praktikumSearchState, isLoadingEmail: false, generatedEmail: action.payload }
        };
    case 'PRAKTIKUM_EMAIL_GEN_ERROR':
        return {
            ...state,
            praktikumSearchState: { ...state.praktikumSearchState, isLoadingEmail: false, error: action.payload }
        };
    case 'SET_INTERNSHIP_TYPE':
        return {
            ...state,
            praktikumSearchState: { ...state.praktikumSearchState, internshipType: action.payload }
        };
    case 'SET_VIEW_LOADING':
        return { ...state, currentView: 'loading', viewHistory: [...state.viewHistory, 'loading'] };
    default:
      return state;
  }
};

// 3. Create a Simple Store
const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener(state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => { // Returns an unsubscribe function
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  };

  return { getState, dispatch, subscribe };
};

// 4. Instantiate the Store
const store = createStore(appReducer, initialState);

// --- END: CENTRALIZED STATE MANAGEMENT (REFACTOR) ---

const t = (key) => {
  return translations[store.getState().currentLanguage][key] || key;
};

const loadSavedResults = () => {
    try {
        const saved = localStorage.getItem('careerResults');
        if (saved) {
            store.dispatch({ type: 'LOAD_SAVED_RESULTS', payload: JSON.parse(saved) });
        }
    } catch (e) {
        console.error("Could not load saved results.", e);
        localStorage.removeItem('careerResults');
    }
}

// --- RENDER FUNCTIONS (Now receive state as a parameter) ---

const renderLanguageSwitcher = (state) => {
    langSwitcherContainer.innerHTML = Object.keys(translations).map(lang =>
        `<button class="lang-btn ${state.currentLanguage === lang ? 'active' : ''}" data-lang="${lang}">
            ${translations[lang].langName}
        </button>`
    ).join('');

    langSwitcherContainer.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = (e.currentTarget as HTMLButtonElement).dataset.lang;
            if (lang) {
                localStorage.setItem('preferredLanguage', lang);
                store.dispatch({ type: 'SET_LANGUAGE', payload: lang });
                document.documentElement.lang = lang;
                document.documentElement.dir = translations[lang].dir;
            }
        });
    });
};

const renderHeaderActions = (state) => {
    if (state.isAdminAuthenticated) {
        headerActionsContainer.innerHTML = `
            <button id="view-reports-btn" class="btn secondary">${t('viewReports')}</button>
            <button id="logout-btn" class="btn">${t('logout')}</button>
        `;
        document.getElementById('view-reports-btn').addEventListener('click', () => store.dispatch({ type: 'NAVIGATE_TO', payload: 'savedResultsList' }));
        document.getElementById('logout-btn').addEventListener('click', () => store.dispatch({ type: 'LOGOUT' }));
    } else {
        headerActionsContainer.innerHTML = `<button id="admin-login-btn" class="btn">${t('responsibleLogin')}</button>`;
        document.getElementById('admin-login-btn').addEventListener('click', () => store.dispatch({ type: 'NAVIGATE_TO', payload: 'adminLogin' }));
    }
};

const renderWelcome = (state) => {
  const mainContentHTML = `
    <h1>${t('welcomeTitle')}</h1>
    <p>${t('welcomeDesc')}</p>
    <div class="welcome-actions">
        <div id="start-quiz-card" class="action-card primary span-2">
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
        <div id="career-videos-card" class="action-card ${!state.isAdminAuthenticated ? 'locked' : ''}">
            <h3>
                ${!state.isAdminAuthenticated ? `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lock-icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                ` : ''}
                ${t('careerPathVideos')}
            </h3>
            <p>${!state.isAdminAuthenticated ? t('underMaintenanceShort') : t('careerPathVideosDesc')}</p>
        </div>
    </div>
  `;

  if (state.isAdminAuthenticated) {
    root.innerHTML = `
      <div class="welcome-wrapper">
          <div class="side-project-box">
              <h3>${t('futureProjectTitle')}</h3>
              <p>${t('futureProjectDesc')}</p>
          </div>
          <div class="container welcome-container main-welcome-card">
              ${mainContentHTML}
          </div>
          <div class="side-project-box">
              <h3>${t('futureProjectTitle')}</h3>
              <p>${t('futureProjectDesc')}</p>
          </div>
      </div>
    `;
  } else {
    root.innerHTML = `
      <div class="container welcome-container main-welcome-card">
        ${mainContentHTML}
      </div>
    `;
  }

  document.getElementById('start-quiz-card').addEventListener('click', () => store.dispatch({ type: 'START_QUIZ' }));
  document.getElementById('browse-professions-card').addEventListener('click', () => store.dispatch({ type: 'NAVIGATE_TO', payload: 'professionsList' }));
  document.getElementById('career-videos-card').addEventListener('click', () => store.dispatch({ type: 'NAVIGATE_TO', payload: 'careerVideos' }));
  document.getElementById('job-search-card').addEventListener('click', () => store.dispatch({ type: 'NAVIGATE_TO', payload: 'jobSearch' }));
  document.getElementById('praktikum-search-card').addEventListener('click', () => store.dispatch({ type: 'NAVIGATE_TO', payload: 'praktikumSearch' }));
};

const renderTopNav = (state) => {
    const isRTL = translations[state.currentLanguage].dir === 'rtl';

    const backButton = `<button id="top-back-btn" class="btn secondary small-btn">${t('back')}</button>`;
    const homeButton = `<button id="top-home-btn" class="btn secondary small-btn">${t('home')}</button>`;

    return `
        <div class="top-nav-container">
            ${isRTL ? homeButton : backButton}
            ${isRTL ? backButton : homeButton}
        </div>
    `;
};

const attachTopNavListeners = () => {
    document.getElementById('top-home-btn')?.addEventListener('click', () => store.dispatch({ type: 'NAVIGATE_HOME' }));
    document.getElementById('top-back-btn')?.addEventListener('click', () => store.dispatch({ type: 'NAVIGATE_BACK' }));
};

const renderAdminLogin = (state) => {
    root.innerHTML = `
        <div class="container admin-login-container">
            ${renderTopNav(state)}
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
            store.dispatch({ type: 'LOGIN_SUCCESS' });
        } else {
            store.dispatch({ type: 'LOGIN_FAIL', payload: t('invalidCredentials') });
        }
    });
    attachTopNavListeners();
}

const renderQuiz = (state) => {
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
      ${renderTopNav(state)}
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

  const handleAnswer = () => {
    const { userAnswers, userName, userAge } = state;
    const newAnswers = [...userAnswers];
    let newUserName = userName;
    let newUserAge = userAge;
    
    if (question.type === 'text' || question.type === 'number') {
        const value = (document.getElementById('quiz-input') as HTMLInputElement).value;
        if (!value && question.id !== 'name' && question.id !== 'age') return; // Allow empty
        newAnswers[state.currentQuestionIndex] = value;
        if(question.id === 'name') newUserName = value;
        if(question.id === 'age') newUserAge = value;
    } else {
        const selectedButton = document.querySelector('.option-btn.selected');
        if (!selectedButton) return;
        newAnswers[state.currentQuestionIndex] = (selectedButton as HTMLElement).dataset.option;
    }
    
    return { answers: newAnswers, name: newUserName, age: newUserAge };
  }

  if (question.type !== 'text' && question.type !== 'number') {
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const clickedButton = e.currentTarget as HTMLButtonElement;
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        clickedButton.classList.add('selected');
        clickedButton.classList.add('clicked');
        clickedButton.addEventListener('animationend', () => clickedButton.classList.remove('clicked'), { once: true });
      });
    });
  }

  if (state.currentQuestionIndex > 0) {
    document.getElementById('back-btn').addEventListener('click', () => {
      store.dispatch({ type: 'SET_QUESTION_INDEX', payload: state.currentQuestionIndex - 1 });
    });
  }

  const nextAction = () => {
      const result = handleAnswer();
      if(result) {
          store.dispatch({ type: 'SET_USER_ANSWERS', payload: result });
          store.dispatch({ type: 'SET_QUESTION_INDEX', payload: state.currentQuestionIndex + 1 });
      }
  };
  
  const finishAction = () => {
      const result = handleAnswer();
      if(result) {
          store.dispatch({ type: 'SET_USER_ANSWERS', payload: result });
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

const renderResults = async (state) => {
  const { activeReport: results, isNewReport: isNew, savedResults } = state;

  if (!results) {
    store.dispatch({ type: 'NAVIGATE_HOME' });
    return;
  }
  
  const personalitySummaryHtml = await marked.parse(results.personalitySummary);
  const careerAdviceHtml = await marked.parse(results.careerAdvice);
  const isAlreadySaved = savedResults.some(r => r.savedDate === results.savedDate);

  root.innerHTML = `
    <div class="container results-container">
      ${renderTopNav(state)}
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
          const newSavedResults = [...savedResults, results];
          localStorage.setItem('careerResults', JSON.stringify(newSavedResults));
          store.dispatch({ type: 'SET_SAVED_RESULTS', payload: newSavedResults });
          button.textContent = t('reportSaved');
          button.disabled = true;
      });
  }

  document.querySelectorAll('.results-nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
  });
};

const renderSavedResultsList = (state) => {
    root.innerHTML = `
        <div class="container saved-reports-container">
            ${renderTopNav(state)}
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
            const index = parseInt((e.currentTarget as HTMLButtonElement).dataset.index, 10);
            store.dispatch({ type: 'SET_ACTIVE_REPORT', payload: { report: state.savedResults[index], isNew: false } });
        });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (window.confirm(t('confirmDeleteReport'))) {
                const index = parseInt((e.currentTarget as HTMLButtonElement).dataset.index, 10);
                const newResults = state.savedResults.filter((_, i) => i !== index);
                localStorage.setItem('careerResults', JSON.stringify(newResults));
                store.dispatch({ type: 'SET_SAVED_RESULTS', payload: newResults });
            }
        });
    });
    
    attachTopNavListeners();
};

const updateProfessionsContent = (state) => {
    const { professionsSearchTerm, professionsFilter, currentLanguage } = state;
    let { professionsCurrentPage } = state;
    
    const professionsGrid = document.getElementById('professions-grid');
    const paginationControls = document.getElementById('pagination-controls');
    if (!professionsGrid || !paginationControls) return;

    const allProfessions = professions.filter(p => {
        const term = professionsSearchTerm.toLowerCase();
        const title = p.title[currentLanguage]?.toLowerCase() || '';
        const matchesTerm = title.includes(term);
        const matchesFilter = professionsFilter === 'all' || p.type === professionsFilter;
        return matchesTerm && matchesFilter;
    });

    let totalPages = Math.ceil(allProfessions.length / PROFESSIONS_PAGE_SIZE);
    if (totalPages === 0) totalPages = 1;
    if (professionsCurrentPage > totalPages) professionsCurrentPage = totalPages;
    
    const startIndex = (professionsCurrentPage - 1) * PROFESSIONS_PAGE_SIZE;
    const paginatedProfessions = allProfessions.slice(startIndex, startIndex + PROFESSIONS_PAGE_SIZE);

    professionsGrid.innerHTML = paginatedProfessions.length > 0 ? paginatedProfessions.map(p => `
        <div class="profession-card">
            <h3>${p.title[currentLanguage]}</h3>
            <div class="profession-card-details">
                <p><strong>${t('duration')}:</strong> ${p.duration[currentLanguage]}</p>
                <p><strong>${t('salary')}:</strong> ${p.salary[currentLanguage]}</p>
                <p><strong>${t('requirements')}:</strong> ${p.requirements[currentLanguage]}</p>
                <p><strong>${t('duties')}:</strong> ${p.duties[currentLanguage]}</p>
            </div>
        </div>
    `).join('') : `<p>${t('noJobsFound')}</p>`;

    paginationControls.innerHTML = `
        <button id="prev-page" class="btn secondary" ${professionsCurrentPage <= 1 ? 'disabled' : ''}>${t('back')}</button>
        <span class="page-info">${t('page')} ${professionsCurrentPage} / ${totalPages}</span>
        <button id="next-page" class="btn secondary" ${professionsCurrentPage >= totalPages ? 'disabled' : ''}>${t('next')}</button>
    `;
    
    const updatePage = (newPage) => {
         store.dispatch({ type: 'SET_PROFESSIONS_STATE', payload: {
            searchTerm: professionsSearchTerm,
            filter: professionsFilter,
            page: newPage
        }});
    }

    if (professionsCurrentPage > 1) {
        document.getElementById('prev-page').addEventListener('click', () => updatePage(professionsCurrentPage - 1));
    }
    if (professionsCurrentPage < totalPages) {
        document.getElementById('next-page').addEventListener('click', () => updatePage(professionsCurrentPage + 1));
    }
};

const renderProfessionsList = (state) => {
    root.innerHTML = `
        <div class="container professions-container">
            ${renderTopNav(state)}
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
            <div id="professions-grid"></div>
            <div id="pagination-controls" class="pagination-controls"></div>
        </div>
    `;
    
    updateProfessionsContent(state);

    const updateSearch = (newFilter = state.professionsFilter, newSearchTerm = state.professionsSearchTerm) => {
        store.dispatch({ type: 'SET_PROFESSIONS_STATE', payload: {
            searchTerm: newSearchTerm,
            filter: newFilter,
            page: 1
        }});
    }

    document.getElementById('search-professions').addEventListener('input', (e) => {
        updateSearch(state.professionsFilter, (e.target as HTMLInputElement).value);
    });
    
    document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const button = e.currentTarget as HTMLButtonElement;
            updateSearch(button.dataset.filter, state.professionsSearchTerm);
        });
    });

    attachTopNavListeners();
};

const renderCareerVideos = (state) => {
    if (!state.isAdminAuthenticated) {
        root.innerHTML = `
            <div class="container maintenance-container">
                ${renderTopNav(state)}
                <div class="maintenance-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h1>${t('underMaintenanceTitle')}</h1>
                <p>${t('underMaintenanceDesc')}</p>
            </div>
        `;
        attachTopNavListeners();
        return;
    }

    root.innerHTML = `
        <div class="container career-videos-container">
            ${renderTopNav(state)}
            <h1>${t('careerPathVideosTitle')}</h1>
            <p>${t('careerPathVideosDescPage')}</p>
            <div class="video-grid">
                ${professions.map(p => `
                    <div class="video-card">
                        <h3>${p.title[state.currentLanguage]}</h3>
                        <div class="video-embed-container">
                            <iframe 
                                src="${p.videoUrl}" 
                                title="${p.title[state.currentLanguage]}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <p class="video-card-duties">${p.duties[state.currentLanguage]}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    attachTopNavListeners();
};

const renderJobSearch = (state) => {
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
            ${renderTopNav(state)}
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

const renderPraktikumSearch = (state) => {
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
            ${renderTopNav(state)}
            <h1>${t('searchForPraktikum')}</h1>
            <p>${t('praktikumDesc')}</p>
            <form id="praktikum-search-form" class="praktikum-search-form">
                <div class="praktikum-search-inputs">
                    <input type="text" id="field-input" placeholder="${t('fieldPlaceholder')}" required>
                    <input type="text" id="location-input" placeholder="${t('locationPlaceholder')}" required>
                    <div class="form-input-group">
                        <label for="internship-type-select">${t('internshipTypeLabel')}</label>
                        <select id="internship-type-select" required>
                            <option value="" disabled ${!internshipType ? 'selected' : ''}>${t('internshipTypePlaceholder')}</option>
                            <option value="orientation" ${internshipType === 'orientation' ? 'selected' : ''}>${t('internshipTypeOrientation')}</option>
                            <option value="school" ${internshipType === 'school' ? 'selected' : ''}>${t('internshipTypeSchool')}</option>
                            <option value="ausbildung" ${internshipType === 'ausbildung' ? 'selected' : ''}>${t('internshipTypeAusbildung')}</option>
                        </select>
                    </div>
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
    
    document.getElementById('internship-type-select').addEventListener('change', (e) => {
        const type = (e.target as HTMLSelectElement).value;
        store.dispatch({ type: 'SET_INTERNSHIP_TYPE', payload: type });
    });

    document.getElementById('praktikum-search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const field = (document.getElementById('field-input') as HTMLInputElement).value;
        const location = (document.getElementById('location-input') as HTMLInputElement).value;
        const type = (document.getElementById('internship-type-select') as HTMLSelectElement).value;
        getPraktikumOpportunity(field, location, type);
    });
    
    document.querySelectorAll('.select-company-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt((e.currentTarget as HTMLButtonElement).dataset.index, 10);
            store.dispatch({ type: 'PRAKTIKUM_SELECT_COMPANY', payload: companyList[index] });
        });
    });

    if (selectedCompany && !generatedEmail) {
         document.getElementById('email-gen-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const userName = (document.getElementById('user-name-email') as HTMLInputElement).value;
            generateInquiryEmail(userName, selectedCompany.name, (document.getElementById('field-input') as HTMLInputElement).value, internshipType);
        });
    }

    if (generatedEmail) {
        document.getElementById('copy-email-btn').addEventListener('click', (e) => {
            const emailText = (document.getElementById('email-output') as HTMLTextAreaElement).value;
            navigator.clipboard.writeText(emailText).then(() => {
                const btn = e.target as HTMLButtonElement;
                const originalText = t('copyEmail');
                
                btn.classList.add('copied-success');
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg> ${t('copied')}`;
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
  store.dispatch({ type: 'SET_VIEW_LOADING' });
  const state = store.getState();

  const schema = {
    type: Type.OBJECT,
    properties: {
      userName: { type: Type.STRING },
      personalitySummary: { type: Type.STRING, description: t('schemaPersonality') },
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
      careerAdvice: { type: Type.STRING, description: t('schemaCareerAdvice') },
    },
    required: ["userName", "personalitySummary", "jobSuggestions", "careerAdvice"],
  };
  
  const userPrompt = `${t('promptIntro')}\n${quizQuestions[state.currentLanguage].map((q, i) => `${q.question}: ${state.userAnswers[i]}`).join('\n')}\n\n${t('promptInstruction')}`;
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

    const resultJson = JSON.parse(response.text.trim());
    resultJson.savedDate = new Date().toISOString();
    store.dispatch({ type: 'SET_ACTIVE_REPORT', payload: { report: resultJson, isNew: true } });

  } catch(error) {
    console.error("Error fetching AI results:", error);
    root.innerHTML = `<div class="container" style="text-align: center;"><p>${t('errorText')}</p><button id="restart-btn" class="btn">${t('restart')}</button></div>`;
    document.getElementById('restart-btn').addEventListener('click', () => store.dispatch({ type: 'NAVIGATE_HOME' }));
  }
};

const getLiveJobs = async (jobTitle, location) => {
    store.dispatch({ type: 'JOB_SEARCH_START' });

    const prompt = t('jobSearchPrompt').replace('{jobTitle}', jobTitle).replace('{location}', location);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: { tools: [{googleSearch: {}}] },
        });
        
        const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];
        store.dispatch({ type: 'JOB_SEARCH_SUCCESS', payload: { sources } });

    } catch(error) {
        console.error("Error fetching live jobs:", error);
        store.dispatch({ type: 'JOB_SEARCH_ERROR', payload: t('errorText') });
    }
}

const getPraktikumOpportunity = async (field, location, internshipType) => {
    store.dispatch({ type: 'PRAKTIKUM_COMPANY_SEARCH_START', payload: internshipType });

    const prompt = t('praktikumSearchPrompt').replace('{field}', field).replace('{location}', location);
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: { tools: [{googleSearch: {}}] },
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
        
        store.dispatch({ type: 'PRAKTIKUM_COMPANY_SEARCH_SUCCESS', payload: companyList });

    } catch(error) {
        console.error("Error fetching Praktikum opportunity:", error);
        store.dispatch({ type: 'PRAKTIKUM_COMPANY_SEARCH_ERROR', payload: t('praktikumSearchError') });
    }
}

const generateInquiryEmail = async (userName, companyName, field, internshipType) => {
    store.dispatch({ type: 'PRAKTIKUM_EMAIL_GEN_START' });
    
    const typeKey = `internshipType${internshipType.charAt(0).toUpperCase() + internshipType.slice(1)}`;
    const translatedType = translations['de'][typeKey] || internshipType;
    
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
        store.dispatch({ type: 'PRAKTIKUM_EMAIL_GEN_SUCCESS', payload: response.text });
    } catch (error) {
         console.error("Error generating inquiry email:", error);
         store.dispatch({ type: 'PRAKTIKUM_EMAIL_GEN_ERROR', payload: t('errorText') });
    }
};

let previousView = undefined;

const renderApp = (state) => {
  headerTitle.textContent = t('headerTitle');
  footerText.textContent = t('footerText');
  
  renderLanguageSwitcher(state);
  renderHeaderActions(state);

  switch (state.currentView) {
    case 'quiz':
      renderQuiz(state);
      break;
    case 'loading':
      renderLoading();
      break;
    case 'results':
      renderResults(state);
      break;
    case 'professionsList':
      renderProfessionsList(state);
      break;
    case 'careerVideos':
      renderCareerVideos(state);
      break;
    case 'jobSearch':
      renderJobSearch(state);
      break;
    case 'praktikumSearch':
      renderPraktikumSearch(state);
      break;
    case 'adminLogin':
      renderAdminLogin(state);
      break;
    case 'savedResultsList':
      if (state.isAdminAuthenticated) {
        renderSavedResultsList(state);
      } else {
        renderAdminLogin(state);
      }
      break;
    case 'welcome':
    default:
      renderWelcome(state);
      break;
  }

  if (previousView !== undefined && state.currentView !== previousView) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  previousView = state.currentView;
};

// --- Initial App Load ---
loadSavedResults();
const initialStateFromStore = store.getState();
document.documentElement.lang = initialStateFromStore.currentLanguage;
document.documentElement.dir = translations[initialStateFromStore.currentLanguage].dir;

headerTitle.addEventListener('click', () => {
    if (store.getState().currentView !== 'welcome') {
        store.dispatch({ type: 'NAVIGATE_HOME' });
    }
});

// Subscribe the render function to the store
store.subscribe(renderApp);

// Initial render
renderApp(store.getState());