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

let ai;
if (API_KEY) {
  try {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  } catch (e) {
    console.error("Failed to initialize GoogleGenAI. AI features will be disabled.", e);
  }
} else {
    console.error("API_KEY environment variable not set. AI features will be disabled.");
}

// --- START: CENTRALIZED STATE MANAGEMENT (REFACTOR) ---

const PROFESSIONS_PAGE_SIZE = 20;

// 1. Define the Initial State
const initialState = {
  currentView: 'welcome',
  viewHistory: ['welcome'],
  currentLanguage: localStorage.getItem('preferredLanguage') || 'de',
  currentQuestionIndex: 0,
  userName: '',
  userAge: '',
  userAnswers: [],
  professionsSearchTerm: '',
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
    field: '',
    location: '',
  },
  isAdminAuthenticated: false,
  loginError: null,
  activeReport: null,
  isNewReport: false,
  apiKeyCheck: {
    isLoading: false,
    status: 'unchecked', // 'unchecked', 'checking', 'ok', 'invalid', 'not_set'
    message: '',
  },
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
    case 'NAVIGATE_TO_QUIZ_INTRO':
        return {
            ...state,
            currentView: 'quizIntro',
            viewHistory: [...state.viewHistory, 'quizIntro'],
        };
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
            praktikumSearchState: { 
                ...initialState.praktikumSearchState, 
                isLoadingCompany: true,
                field: action.payload.field,
                location: action.payload.location,
                internshipType: action.payload.internshipType,
            }
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
    case 'PRAKTIKUM_DESELECT_COMPANY':
        return {
            ...state,
            praktikumSearchState: { ...state.praktikumSearchState, selectedCompany: null, generatedEmail: null, isLoadingEmail: false, error: null }
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
    case 'UPDATE_PRAKTIKUM_FORM':
        return {
            ...state,
            praktikumSearchState: {
                ...state.praktikumSearchState,
                ...action.payload
            }
        };
    case 'API_KEY_CHECK_START':
        return { ...state, apiKeyCheck: { isLoading: true, status: 'checking', message: '' } };
    case 'API_KEY_CHECK_RESULT':
        return { ...state, apiKeyCheck: { isLoading: false, status: action.payload.status, message: action.payload.message } };
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


// --- START: REVIEW SYSTEM HELPERS ---

const getCompanyId = (company) => {
    // Create a reasonably unique ID from company name and address
    return `${company.name}-${company.address || ''}`.replace(/[\s\W]+/g, '-').toLowerCase();
};

const getReviews = (companyId) => {
    try {
        const allReviews = JSON.parse(localStorage.getItem('companyReviews') || '{}');
        return allReviews[companyId] || [];
    } catch (e) {
        console.error("Failed to load reviews:", e);
        return [];
    }
};

const saveReview = (companyId, review) => {
    try {
        const allReviews = JSON.parse(localStorage.getItem('companyReviews') || '{}');
        if (!allReviews[companyId]) {
            allReviews[companyId] = [];
        }
        allReviews[companyId].unshift(review); // Add new review to the top
        localStorage.setItem('companyReviews', JSON.stringify(allReviews));
        return true;
    } catch (e) {
        console.error("Failed to save review:", e);
        return false;
    }
};

const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        starsHtml += `<span class="star ${i <= roundedRating ? 'filled' : ''}">${i <= roundedRating ? '★' : '☆'}</span>`;
    }
    return starsHtml;
};

// --- END: REVIEW SYSTEM HELPERS ---


// --- RENDER FUNCTIONS (Now receive state as a parameter) ---

const renderLanguageSwitcher = (state) => {
    const currentLangName = translations[state.currentLanguage].langName;
    const otherLangs = Object.keys(translations).filter(lang => lang !== state.currentLanguage);
    
    const chevronIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon"><path d="m6 9 6 6 6-6"/></svg>`;

    langSwitcherContainer.innerHTML = `
        <div class="lang-switcher-dropdown">
            <button class="lang-btn-current">
                ${currentLangName}
                ${chevronIcon}
            </button>
            <div class="lang-dropdown-content">
                <ul>
                    ${otherLangs.map(lang => `
                        <li>
                            <button class="lang-option-btn" data-lang="${lang}">
                                ${translations[lang].langName}
                            </button>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;

    // NOTE: Event listeners are now handled centrally in initEventListeners for performance.
    // This function now only handles rendering the initial HTML.
};

const renderHeaderActions = (state) => {
    if (state.isAdminAuthenticated) {
        headerActionsContainer.innerHTML = `
            <button id="view-reports-btn" class="btn secondary">${t('viewReports')}</button>
            <button id="logout-btn" class="btn">${t('logout')}</button>
        `;
    } else {
        headerActionsContainer.innerHTML = `<button id="admin-login-btn" class="btn">${t('adminLogin')}</button>`;
    }
};

const renderWelcome = (state) => {
  const mainContentHTML = `
    <h1>${t('welcomeTitle')}</h1>
    <p>${t('welcomeDesc')}</p>
    <div class="welcome-actions">
        <div id="start-quiz-card" class="action-card primary">
            <h3>${t('startQuiz')}</h3>
            <p>${t('startQuizDesc')}</p>
        </div>
        <div id="browse-professions-card" class="action-card ${!state.isAdminAuthenticated ? 'locked' : ''}">
            <h3>
                ${!state.isAdminAuthenticated 
                    ? `<span class="lock-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>` 
                    : ''}
                ${t('browseProfessions')}
            </h3>
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
  `;

  const adminExtraContent = state.isAdminAuthenticated ? `
    <div class="admin-extra-section">
        <div class="admin-extra-content">
            <h3>${t('futureProjectTitle')}</h3>
            <p>${t('futureProjectDesc')}</p>
        </div>
        <div class="admin-extra-content">
            <h3>${t('futureProjectTitle')}</h3>
            <p>${t('futureProjectDesc')}</p>
        </div>
    </div>
  ` : '';

  root.innerHTML = `
    <div class="page-container">
        <div class="container welcome-container">
          ${mainContentHTML}
          ${adminExtraContent}
        </div>
    </div>
  `;
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

const renderAdminLogin = (state) => {
    root.innerHTML = `
        <div class="page-container">
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
        </div>
    `;
}

const renderQuizIntro = (state) => {
    root.innerHTML = `
        <div class="page-container">
            <div class="container quiz-intro-container">
                ${renderTopNav(state)}
                <h1>${t('quizIntroTitle')}</h1>
                <p>${t('quizIntroDesc')}</p>
                <button id="start-quiz-now-btn" class="btn">${t('quizIntroStartBtn')}</button>
            </div>
        </div>
    `;
};

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
    <div class="page-container">
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
    </div>
  `;
};

const renderLoading = (title = t('loadingTitle'), desc = t('loadingDesc')) => {
  root.innerHTML = `
    <div class="page-container">
        <div class="container loader-container">
          <div class="loader"></div>
          <h2>${title}</h2>
          <p>${desc}</p>
        </div>
    </div>
  `;
};

const getFeedbackStore = () => {
    try {
        const store = localStorage.getItem('feedbackStore');
        return store ? JSON.parse(store) : {};
    } catch (e) {
        console.error("Could not load feedback store.", e);
        return {};
    }
};

const saveFeedback = (reportId, sectionKey, wasHelpful) => {
    const store = getFeedbackStore();
    if (!store[reportId]) {
        store[reportId] = {};
    }
    store[reportId][sectionKey] = wasHelpful;
    try {
        localStorage.setItem('feedbackStore', JSON.stringify(store));
    } catch (e) {
        console.error("Could not save feedback.", e);
    }
};

const renderFeedbackUI = (sectionKey, feedbackData) => {
    const feedbackValue = feedbackData[sectionKey]; // will be true, false, or undefined
    if (feedbackValue === undefined) {
        return `
            <span class="feedback-question">${t('wasThisHelpful')}</span>
            <button class="btn feedback-btn" data-feedback="true">${t('yes')}</button>
            <button class="btn feedback-btn" data-feedback="false">${t('no')}</button>
        `;
    } else {
        return `
            <div class="feedback-response">
                <button class="btn feedback-btn ${feedbackValue ? 'selected' : ''}" data-feedback="true" disabled>${t('yes')}</button>
                <button class="btn feedback-btn ${!feedbackValue ? 'selected' : ''}" data-feedback="false" disabled>${t('no')}</button>
                <span class="feedback-thanks">${t('feedbackThanks')}</span>
            </div>
        `;
    }
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
  
  const feedbackStore = getFeedbackStore();
  const reportFeedback = feedbackStore[results.savedDate] || {};

  root.innerHTML = `
    <div class="page-container">
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
            <div class="feedback-controls" data-section-key="personality">
              ${renderFeedbackUI('personality', reportFeedback)}
            </div>
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
             <div class="feedback-controls" data-section-key="paths">
              ${renderFeedbackUI('paths', reportFeedback)}
            </div>
          </div>

          <div id="career-advice" class="result-section">
            <h2>${t('careerAdvice')}</h2>
            <div>${careerAdviceHtml}</div>
            <div class="feedback-controls" data-section-key="advice">
              ${renderFeedbackUI('advice', reportFeedback)}
            </div>
          </div>
          
          <div class="results-actions">
            <button id="print-btn" class="btn secondary">${t('printReport')}</button>
            <button id="email-btn" class="btn secondary">${t('emailReport')}</button>
            ${isNew ? `<button id="save-btn" class="btn secondary" ${isAlreadySaved ? 'disabled' : ''}>${isAlreadySaved ? t('reportSaved') : t('saveReport')}</button>` : ''}
          </div>
        </div>
    </div>
  `;
};

const renderSavedResultsList = (state) => {
    const { isLoading, status, message } = state.apiKeyCheck;

    let statusHtml = '';
    if (status !== 'unchecked') {
        statusHtml = `<p class="api-status-message ${status}">${message}</p>`;
    }

    const apiCheckerHtml = `
        <div class="api-status-checker">
            <h2>${t('apiKeyStatus')}</h2>
            <p>${t('apiKeyStatusDesc')}</p>
            <button id="check-api-key-btn" class="btn secondary" ${isLoading ? 'disabled' : ''}>
                ${isLoading ? t('checkingApiKey') : t('checkApiKey')}
            </button>
            <div id="api-status-result">
                ${statusHtml}
            </div>
        </div>
    `;

    root.innerHTML = `
        <div class="page-container">
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
                ${apiCheckerHtml}
            </div>
        </div>
    `;
};

const updateProfessionsContent = (state) => {
    const { professionsSearchTerm, currentLanguage } = state;
    let { professionsCurrentPage } = state;
    
    const professionsGrid = document.getElementById('professions-grid');
    const paginationControls = document.getElementById('pagination-controls');
    if (!professionsGrid || !paginationControls) return;

    const allProfessions = professions.filter(p => {
        const term = (professionsSearchTerm || '').toLowerCase();
        const title = (p.title[currentLanguage] || '').toLowerCase();
        return title.includes(term);
    });

    let totalPages = Math.ceil(allProfessions.length / PROFESSIONS_PAGE_SIZE);
    if (totalPages === 0) totalPages = 1;
    if (professionsCurrentPage > totalPages) professionsCurrentPage = totalPages;
    
    const startIndex = (professionsCurrentPage - 1) * PROFESSIONS_PAGE_SIZE;
    // FIX: The slice method takes 2 arguments (start and end), not 3. The end index is calculated by adding the page size to the start index.
    const paginatedProfessions = allProfessions.slice(startIndex, startIndex + PROFESSIONS_PAGE_SIZE);

    professionsGrid.innerHTML = paginatedProfessions.length > 0 ? paginatedProfessions.map(p => `
        <div class="profession-card">
            <h3>${p.title[currentLanguage]}</h3>
            <div class="profession-card-details">
                <p><strong>${t('duration')}:</strong> ${p.duration[currentLanguage]}</p>
                <p><strong>${t('salary')}:</strong> ${p.salary[currentLanguage]}</p>
                <p><strong>${t('salaryRangeLabel')}:</strong> ${p.salaryRange[currentLanguage]}</p>
                <p><strong>${t('jobOutlookLabel')}:</strong> ${p.jobOutlook[currentLanguage]}</p>
                <p><strong>${t('requirements')}:</strong> ${p.requirements[currentLanguage]}</p>
                <p><strong>${t('duties')}:</strong> ${p.duties[currentLanguage]}</p>
                <p><strong>${t('skillsRequired')}:</strong> ${p.skillsRequired[currentLanguage]}</p>
            </div>
        </div>
    `).join('') : `<p>${t('noJobsFound')}</p>`;

    paginationControls.innerHTML = `
        <button id="prev-page" class="btn secondary" ${professionsCurrentPage <= 1 ? 'disabled' : ''}>${t('back')}</button>
        <span class="page-info">${t('page')} ${professionsCurrentPage} / ${totalPages}</span>
        <button id="next-page" class="btn secondary" ${professionsCurrentPage >= totalPages ? 'disabled' : ''}>${t('next')}</button>
    `;
};

const renderProfessionsList = (state) => {
    root.innerHTML = `
        <div class="page-container">
            <div class="container professions-container">
                ${renderTopNav(state)}
                <h1>${t('browseProfessions')}</h1>
                <p>${t('professionsDesc')}</p>
                <div class="professions-controls">
                    <input type="search" id="search-professions" placeholder="${t('searchPlaceholder')}" value="${state.professionsSearchTerm}">
                </div>
                <div id="professions-grid"></div>
                <div id="pagination-controls" class="pagination-controls"></div>
            </div>
        </div>
    `;
    
    updateProfessionsContent(state);
};

const renderJobSearch = (state) => {
    let resultsContent = '';
    const { isLoading, results, error } = state.jobSearchState;

    if (isLoading) {
        resultsContent = `<div class="inline-loader-container"><div class="loader"></div><p>${t('jobSearchLoading')}</p></div>`;
    } else if (error) {
        resultsContent = `<p class="error-message">${error}</p>`;
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
        <div class="page-container">
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
        </div>
    `;
};

const renderPraktikumIntro = (state) => {
    root.innerHTML = `
        <div class="page-container">
            <div class="container praktikum-intro-container">
                ${renderTopNav(state)}
                <h1>${t('praktikumIntroTitle')}</h1>
                <p>${t('praktikumIntroDesc1')}</p>
                <p>${t('praktikumIntroDesc2')}</p>
                <div class="disclaimer-box">
                    <p>${t('praktikumIntroDisclaimer')}</p>
                </div>
                <button id="start-praktikum-search-btn" class="btn">${t('praktikumIntroStartBtn')}</button>
            </div>
        </div>
    `;
};

const renderPraktikumSearch = (state) => {
    const { isLoadingCompany, isLoadingEmail, companyList, selectedCompany, generatedEmail, error, internshipType, field, location } = state.praktikumSearchState;
    const searchPerformed = field && location && internshipType;

    let companyContent = '';
    if (isLoadingCompany) {
        companyContent = `<div class="inline-loader-container"><div class="loader"></div><p>${t('praktikumCompanyLoading')}</p></div>`;
    } else if (error) {
        companyContent = `<p class="error-message">${error}</p>`;
    } else if (companyList.length > 0) {
        companyContent = `
            <div class="praktikum-results-list">
                <h3>${t('praktikumCompanyResult')}</h3>
                ${companyList.map((company, index) => {
                    const companyId = getCompanyId(company);
                    const reviews = getReviews(companyId);
                    const reviewCount = reviews.length;
                    const avgRating = reviewCount > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount : 0;
                    
                    return `
                    <div class="praktikum-company-card ${selectedCompany === company ? 'selected' : ''}">
                        <div class="company-card-main-content">
                            <div class="praktikum-company-info">
                               <p class="company-name">${company.name}</p>
                               ${company.description ? `<p class="company-description">${company.description}</p>` : ''}
                               <div class="company-details">
                                   ${company.address ? `<div class="detail-item"><span class="detail-label">${t('location')}:</span><span>${company.address}</span></div>` : ''}
                                   ${company.contactPerson ? `<div class="detail-item"><span class="detail-label">${t('contactPerson')}:</span><span>${company.contactPerson}</span></div>` : ''}
                                   ${company.applicationEmail ? `<div class="detail-item"><span class="detail-label">${t('applicationEmail')}:</span><a href="mailto:${company.applicationEmail}">${company.applicationEmail}</a></div>` : ''}
                                   ${company.website ? `<div class="detail-item"><span class="detail-label">${t('companyWebsite')}:</span><a href="${company.website.startsWith('http') ? company.website : `https://${company.website}`}" target="_blank" rel="noopener noreferrer" class="website-link">${company.website}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div>` : ''}
                               </div>
                            </div>
                            <button class="btn secondary select-company-btn" data-index="${index}">${selectedCompany === company ? t('selected') : t('select')}</button>
                        </div>
                        <div class="company-reviews-section">
                            <div class="reviews-summary" data-company-id="${companyId}" role="button" tabindex="0" aria-expanded="false" aria-controls="reviews-content-${companyId}">
                                <span class="rating-display">${renderStars(avgRating)}</span>
                                <span class="review-count">${reviewCount} ${t('reviews')}</span>
                            </div>
                            <div class="reviews-content" id="reviews-content-${companyId}" style="display: none;">
                                 <div class="reviews-list">
                                    ${reviewCount > 0 ? reviews.map(r => `
                                        <div class="review-item">
                                            <div class="review-header">
                                                <strong>${r.name || t('anonymous')}</strong>
                                                <span class="rating-display small">${renderStars(r.rating)}</span>
                                            </div>
                                            <p>${r.text}</p>
                                            <small>${new Date(r.date).toLocaleDateString(store.getState().currentLanguage)}</small>
                                        </div>
                                    `).join('') : `<p class="no-reviews-msg">${t('noReviewsYet')}</p>`}
                                 </div>
                                 <div class="review-form-container">
                                     <h4>${t('leaveReview')}</h4>
                                     <form class="review-form" data-company-id="${companyId}">
                                         <input type="hidden" name="rating" value="0" required>
                                         <div class="form-group">
                                             <label for="reviewer-name-${companyId}">${t('yourName')}</label>
                                             <input type="text" id="reviewer-name-${companyId}" name="name" placeholder="${t('yourNamePlaceholder')}">
                                         </div>
                                         <div class="form-group">
                                             <label>${t('rating')}</label>
                                             <div class="rating-input">
                                                 ${[1, 2, 3, 4, 5].map(i => `<span class="star" data-value="${i}" role="button" aria-label="${i} stars">☆</span>`).join('')}
                                             </div>
                                         </div>
                                         <div class="form-group">
                                             <label for="review-text-${companyId}">${t('reviewText')}</label>
                                             <textarea id="review-text-${companyId}" name="text" required rows="4" placeholder="${t('reviewText')}..."></textarea>
                                         </div>
                                         <button type="submit" class="btn small-btn">${t('submitReview')}</button>
                                     </form>
                                 </div>
                            </div>
                        </div>
                    </div>
                `}).join('')}
            </div>
        `;
    } else if (searchPerformed) {
        companyContent = `<p class="info-message">${t('praktikumNoCompaniesFound')}</p>`;
    }

    let modalContent = '';
    if (isLoadingEmail) {
        modalContent = `<div class="inline-loader-container"><div class="loader"></div><p>${t('praktikumEmailLoading')}</p></div>`;
    } else if (generatedEmail) {
        modalContent = `
            <h3>${t('praktikumYourEmail')}</h3>
            <textarea id="email-output" readonly>${generatedEmail}</textarea>
            <div class="email-generator-actions">
                <button id="copy-email-btn" class="btn secondary">${t('copyEmail')}</button>
            </div>
        `;
    } else if (selectedCompany) {
         modalContent = `
            <h3>${t('praktikumGenerateEmailTitle')}</h3>
            <p>${t('company')}: <strong>${selectedCompany.name}</strong></p>
            <form id="email-gen-form" class="praktikum-search-form">
                <div class="praktikum-search-inputs">
                    <input type="text" id="user-name-email" placeholder="${t('yourNamePlaceholder')}" required>
                </div>
                <button type="submit" class="btn" ${isLoadingEmail ? 'disabled' : ''}>
                    ${isLoadingEmail ? t('loading') : t('praktikumGenerateEmailBtn')}
                </button>
            </form>
        `;
    }

    const emailModal = `
        <div id="email-modal" class="email-modal ${selectedCompany ? 'open' : ''}">
            <div class="email-modal-content">
                <button id="email-modal-close" class="email-modal-close" aria-label="Close">&times;</button>
                ${modalContent}
            </div>
        </div>
    `;

    root.innerHTML = `
        <div class="page-container">
            <div class="container praktikum-search-container">
                ${renderTopNav(state)}
                <h1>${t('searchForPraktikum')}</h1>
                <p>${t('praktikumDesc')}</p>
                <form id="praktikum-search-form" class="praktikum-search-form">
                    <div class="praktikum-search-inputs">
                        <input type="text" id="field-input" placeholder="${t('fieldPlaceholder')}" required value="${field}">
                        <input type="text" id="location-input" placeholder="${t('locationPlaceholder')}" required value="${location}">
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
                </div>
            </div>
        </div>
        ${emailModal}
    `;

    // Note: Most event listeners are now delegated.
    // However, complex, non-bubbling, or stateful UI interactions like the star rating hover
    // effect are kept here for simplicity and reliability.
    document.querySelectorAll('.rating-input').forEach(container => {
        const stars = Array.from(container.querySelectorAll('.star')) as HTMLElement[];
        const ratingInput = (container.closest('form') as HTMLFormElement).querySelector('input[name="rating"]') as HTMLInputElement;

        const updateStars = (rating) => {
            stars.forEach((star, index) => {
                star.textContent = index < rating ? '★' : '☆';
                star.classList.toggle('filled', index < rating);
            });
        };

        container.addEventListener('mouseover', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('star')) {
                const hoverValue = parseInt(target.dataset.value, 10);
                updateStars(hoverValue);
            }
        });

        container.addEventListener('mouseout', () => {
            const selectedValue = parseInt(ratingInput.value, 10);
            updateStars(selectedValue);
        });
    });
}


// --- LOGIC ---

/**
 * A centralized handler for API errors.
 * It checks for common API key-related error messages and provides a more specific,
 * user-friendly error message, guiding the user to check their environment variables.
 * @param {any} error The error object caught.
 * @param {(payload: string) => object} [dispatchActionCreator] An optional function that takes an error message payload and returns a dispatchable action object.
 * @param {string} [defaultErrorKey='errorText'] The default translation key to use if the error is not an API key error.
 */
const handleApiError = (error, dispatchActionCreator, defaultErrorKey = 'errorText') => {
    console.error("API Error:", error);
    let errorMessageKey = defaultErrorKey;
    if (error instanceof Error) {
        const apiKeyErrorMessages = [
            'api key not valid',
            'permission denied',
            'api_key',
            'bad request',
            '[400]',
        ];
        const lowerCaseErrorMessage = (error.message || '').toLowerCase();
        if (apiKeyErrorMessages.some(msg => lowerCaseErrorMessage.includes(msg))) {
            errorMessageKey = 'invalidApiKeyError';
        }
    }
    
    const errorMessage = t(errorMessageKey);

    if (dispatchActionCreator) {
       store.dispatch(dispatchActionCreator(errorMessage));
    } else {
       // Fallback for views without dedicated error state (like the quiz results)
        root.innerHTML = `<div class="container" style="text-align: center;"><p class="error-message">${errorMessage}</p><button id="restart-btn" class="btn">${t('restart')}</button></div>`;
    }
}

const performApiKeyCheck = async () => {
    store.dispatch({ type: 'API_KEY_CHECK_START' });

    if (!API_KEY || !ai) {
        store.dispatch({ type: 'API_KEY_CHECK_RESULT', payload: { status: 'not_set', message: t('apiKeyStatusNotSet') } });
        return;
    }

    try {
        await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: 'test' });
        store.dispatch({ type: 'API_KEY_CHECK_RESULT', payload: { status: 'ok', message: t('apiKeyStatusOK') } });
    } catch (error) {
        console.error("API Key Check Failed:", error);
        let errorMessageKey = 'invalidApiKeyError';
        if (error instanceof Error) {
            const apiKeyErrorMessages = [
                'api key not valid',
                'permission denied',
                'api_key',
                'bad request',
                '[400]',
            ];
            const lowerCaseErrorMessage = (error.message || '').toLowerCase();
            if (apiKeyErrorMessages.some(msg => lowerCaseErrorMessage.includes(msg))) {
                errorMessageKey = 'apiKeyStatusInvalid';
            }
        }
        store.dispatch({ type: 'API_KEY_CHECK_RESULT', payload: { status: 'invalid', message: t(errorMessageKey) } });
    }
};

const getAIResults = async () => {
  if (!ai) {
    const errorMessage = t('apiKeyNotConfiguredError');
    root.innerHTML = `<div class="container" style="text-align: center;"><p class="error-message">${errorMessage}</p><button id="restart-btn" class="btn">${t('restart')}</button></div>`;
    return;
  }

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
    handleApiError(error, null);
  }
};

const getLiveJobs = async (jobTitle, location) => {
    if (!ai) {
        store.dispatch({ type: 'JOB_SEARCH_ERROR', payload: t('apiKeyNotConfiguredError') });
        return;
    }
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
        handleApiError(error, (payload) => ({ type: 'JOB_SEARCH_ERROR', payload }));
    }
}

const getPraktikumOpportunity = async (field, location, internshipType) => {
    if (!ai) {
        store.dispatch({ type: 'PRAKTIKUM_COMPANY_SEARCH_ERROR', payload: t('apiKeyNotConfiguredError') });
        return;
    }
    store.dispatch({ type: 'PRAKTIKUM_COMPANY_SEARCH_START', payload: { field, location, internshipType } });

    // Translate the internship type for a more accurate AI prompt
    const typeKey = `internshipType${internshipType.charAt(0).toUpperCase() + internshipType.slice(1)}`;
    const translatedType = translations['de'][typeKey] || internshipType; // Use German for the search context

    const prompt = t('praktikumSearchPrompt')
        .replace('{field}', field)
        .replace('{location}', location)
        .replace('{internshipType}', translatedType);
    
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
        
        if (!Array.isArray(companyList)) {
             throw new Error("AI returned an invalid data format.");
        }
        
        store.dispatch({ type: 'PRAKTIKUM_COMPANY_SEARCH_SUCCESS', payload: companyList });

    } catch(error) {
        handleApiError(error, (payload) => ({ type: 'PRAKTIKUM_COMPANY_SEARCH_ERROR', payload }), 'praktikumSearchError');
    }
}

const generateInquiryEmail = async (userName, companyName, field, internshipType) => {
    if (!ai) {
        store.dispatch({ type: 'PRAKTIKUM_EMAIL_GEN_ERROR', payload: t('apiKeyNotConfiguredError') });
        return;
    }
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
         handleApiError(error, (payload) => ({ type: 'PRAKTIKUM_EMAIL_GEN_ERROR', payload }));
    }
};

let previousView = undefined;

const renderApp = (state) => {
  document.body.style.paddingTop = '0px'; 
  headerTitle.textContent = t('headerTitle');
  footerText.textContent = t('footerText');
  
  renderLanguageSwitcher(state);
  renderHeaderActions(state);

  switch (state.currentView) {
    case 'quizIntro':
      renderQuizIntro(state);
      break;
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
    case 'jobSearch':
      renderJobSearch(state);
      break;
    case 'praktikumIntro':
      renderPraktikumIntro(state);
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

// --- START: PERFORMANCE OPTIMIZATION - CENTRALIZED EVENT LISTENERS ---

function initEventListeners() {
    // This function sets up delegated event listeners on the root element.
    // This is much more performant than re-attaching listeners on every render.

    // --- CLICK LISTENER ---
    document.body.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const state = store.getState();
        
        // Language Switcher
        const langDropdown = langSwitcherContainer.querySelector('.lang-switcher-dropdown');
        if (target.closest('.lang-btn-current')) {
             e.stopPropagation();
             langDropdown?.classList.toggle('open');
        } else {
            langDropdown?.classList.remove('open');
        }
        
        const langOptionBtn = target.closest('.lang-option-btn');
        if (langOptionBtn) {
            // FIX: Cast Element to HTMLElement to access the dataset property.
            const lang = (langOptionBtn as HTMLElement).dataset.lang;
            if (lang) {
                localStorage.setItem('preferredLanguage', lang);
                store.dispatch({ type: 'SET_LANGUAGE', payload: lang });
                document.documentElement.lang = lang;
                document.documentElement.dir = translations[lang].dir;
            }
            return;
        }

        // Header Actions & Navigation
        if (target.closest('#header-title') && state.currentView !== 'welcome') { store.dispatch({ type: 'NAVIGATE_HOME' }); return; }
        if (target.closest('#view-reports-btn')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'savedResultsList' }); return; }
        if (target.closest('#logout-btn')) { store.dispatch({ type: 'LOGOUT' }); return; }
        if (target.closest('#admin-login-btn')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'adminLogin' }); return; }
        if (target.closest('#top-home-btn')) { store.dispatch({ type: 'NAVIGATE_HOME' }); return; }
        if (target.closest('#top-back-btn')) { store.dispatch({ type: 'NAVIGATE_BACK' }); return; }
        if (target.closest('#restart-btn')) { store.dispatch({ type: 'NAVIGATE_HOME' }); return; }


        // Welcome Page
        if (target.closest('#start-quiz-card')) { store.dispatch({ type: 'NAVIGATE_TO_QUIZ_INTRO' }); return; }
        if (target.closest('#browse-professions-card')) {
            if (state.isAdminAuthenticated) {
                store.dispatch({ type: 'NAVIGATE_TO', payload: 'professionsList' });
            }
            return;
        }
        if (target.closest('#job-search-card')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'jobSearch' }); return; }
        if (target.closest('#praktikum-search-card')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'praktikumIntro' }); return; }

        // Quiz Intro Page
        if (target.closest('#start-quiz-now-btn')) { store.dispatch({ type: 'START_QUIZ' }); return; }

        // Quiz Page
        const optionBtn = target.closest('.option-btn');
        if (optionBtn) {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            optionBtn.classList.add('selected');
            optionBtn.classList.add('clicked');
            optionBtn.addEventListener('animationend', () => optionBtn.classList.remove('clicked'), { once: true });
            return;
        }
        
        const handleQuizAnswer = () => {
            const { userAnswers, userName, userAge, currentQuestionIndex } = state;
            const questions = quizQuestions[state.currentLanguage];
            const question = questions[currentQuestionIndex];
            const newAnswers = [...userAnswers];
            let newUserName = userName;
            let newUserAge = userAge;
            
            if (question.type === 'text' || question.type === 'number') {
                const value = (document.getElementById('quiz-input') as HTMLInputElement).value;
                if (!value && question.id !== 'name' && question.id !== 'age') return;
                newAnswers[currentQuestionIndex] = value;
                if(question.id === 'name') newUserName = value;
                if(question.id === 'age') newUserAge = value;
            } else {
                const selectedButton = document.querySelector('.option-btn.selected');
                if (!selectedButton) return;
                newAnswers[currentQuestionIndex] = (selectedButton as HTMLElement).dataset.option;
            }
            return { answers: newAnswers, name: newUserName, age: newUserAge };
        };

        if (target.closest('#back-btn')) { store.dispatch({ type: 'SET_QUESTION_INDEX', payload: state.currentQuestionIndex - 1 }); return; }
        if (target.closest('#next-btn')) { 
            const result = handleQuizAnswer();
            if(result) {
                store.dispatch({ type: 'SET_USER_ANSWERS', payload: result });
                store.dispatch({ type: 'SET_QUESTION_INDEX', payload: state.currentQuestionIndex + 1 });
            }
            return;
        }
        if (target.closest('#finish-btn')) { 
            const result = handleQuizAnswer();
            if(result) {
                store.dispatch({ type: 'SET_USER_ANSWERS', payload: result });
                getAIResults();
            }
            return;
        }

        // Results Page
        if (target.closest('#print-btn')) { window.print(); return; }
        if (target.closest('#email-btn')) {
            const { activeReport: results } = state;
            if (!results) return;
            const subject = t('emailSubject').replace('{name}', results.userName || t('you'));
            let body = `${t('resultsTitleFor').replace('{name}', results.userName || t('you'))}\n\n`;
            body += `${t('emailSummaryIntro')}\n\n`;
            body += `--- ${t('recommendedPaths')} ---\n`;
            results.jobSuggestions.forEach(job => { body += `\n• ${job.title}`; });
            body += `\n\n---\n${t('footerText')}`;
            window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            return;
        }
        if (target.closest('#save-btn')) {
            const button = target.closest('#save-btn') as HTMLButtonElement;
            const { activeReport: results, savedResults } = state;
            const newSavedResults = [...savedResults, results];
            localStorage.setItem('careerResults', JSON.stringify(newSavedResults));
            store.dispatch({ type: 'SET_SAVED_RESULTS', payload: newSavedResults });
            button.textContent = t('reportSaved');
            button.disabled = true;

            try {
                const adminEmail = 'dr.ahmad1998@hotmail.com';
                const subject = `Neuer Karrierebericht: ${results.userName || 'Anonym'}`;
                let body = `Ein neuer Karrierebericht wurde gespeichert.\n\nName: ${results.userName || 'Nicht angegeben'}\nAlter: ${state.userAge || 'Nicht angegeben'}\nDatum: ${new Date(results.savedDate).toLocaleString('de-DE')}\nSprache des Berichts: ${state.currentLanguage.toUpperCase()}\n\n==============================================\nKI-GENERIERTER BERICHT\n==============================================\n\n--- ${t('personalitySummary')} ---\n${results.personalitySummary}\n\n--- ${t('recommendedPaths')} ---\n`;
                results.jobSuggestions.forEach(job => { body += `\n* ${job.title} *\n${job.description}\n${job.details}\n`; });
                body += `\n--- ${t('careerAdvice')} ---\n${results.careerAdvice}`;
                window.location.href = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            } catch (error) { console.error("Fehler beim Öffnen des E-Mail-Clients:", error); }
            return;
        }
        const feedbackBtn = target.closest('.feedback-btn');
        if (feedbackBtn && !feedbackBtn.hasAttribute('disabled')) {
            const container = feedbackBtn.closest('.feedback-controls') as HTMLElement;
            const sectionKey = container.dataset.sectionKey;
            // FIX: Cast Element to HTMLElement to access the dataset property. The error was reported for the line above, but this is the likely source.
            const feedback = (feedbackBtn as HTMLElement).dataset.feedback === 'true';
            const { activeReport: results } = state;
            if (!results || !sectionKey) return;
            saveFeedback(results.savedDate, sectionKey, feedback);
            const currentFeedback = getFeedbackStore()[results.savedDate] || {};
            container.innerHTML = renderFeedbackUI(sectionKey, currentFeedback);
            return;
        }
        const resultsNavLink = target.closest('.results-nav a');
        if (resultsNavLink) {
            e.preventDefault();
            const href = resultsNavLink.getAttribute('href');
            if (href) {
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        // Saved Reports List
        if (target.closest('#check-api-key-btn')) { performApiKeyCheck(); return; }
        const viewDetailsBtn = target.closest('.view-details-btn');
        if (viewDetailsBtn) {
            // FIX: Cast Element to HTMLElement to access the dataset property.
            const index = parseInt((viewDetailsBtn as HTMLElement).dataset.index, 10);
            store.dispatch({ type: 'SET_ACTIVE_REPORT', payload: { report: state.savedResults[index], isNew: false } });
            return;
        }
        const deleteBtn = target.closest('.delete-btn');
        if (deleteBtn) {
            if (window.confirm(t('confirmDeleteReport'))) {
                // FIX: Cast Element to HTMLElement to access the dataset property.
                const index = parseInt((deleteBtn as HTMLElement).dataset.index, 10);
                const newResults = state.savedResults.filter((_, i) => i !== index);
                localStorage.setItem('careerResults', JSON.stringify(newResults));
                store.dispatch({ type: 'SET_SAVED_RESULTS', payload: newResults });
            }
            return;
        }

        // Professions List
        if (target.closest('#prev-page')) {
            store.dispatch({
                type: 'SET_PROFESSIONS_STATE',
                payload: {
                    searchTerm: state.professionsSearchTerm,
                    page: state.professionsCurrentPage - 1
                }
            });
            return;
        }
        if (target.closest('#next-page')) {
            store.dispatch({
                type: 'SET_PROFESSIONS_STATE',
                payload: {
                    searchTerm: state.professionsSearchTerm,
                    page: state.professionsCurrentPage + 1
                }
            });
            return;
        }

        // Praktikum Intro
        if (target.closest('#start-praktikum-search-btn')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'praktikumSearch' }); return; }
        
        // Praktikum Search
        const selectCompanyBtn = target.closest('.select-company-btn');
        if (selectCompanyBtn) {
            // FIX: Cast Element to HTMLElement to access the dataset property.
            const index = parseInt((selectCompanyBtn as HTMLElement).dataset.index, 10);
            store.dispatch({ type: 'PRAKTIKUM_SELECT_COMPANY', payload: state.praktikumSearchState.companyList[index] });
            return;
        }
        if (target.closest('#email-modal-close') || target.closest('#email-modal') === target) {
            store.dispatch({ type: 'PRAKTIKUM_DESELECT_COMPANY' });
            return;
        }
        if (target.closest('#copy-email-btn')) {
            const emailText = (document.getElementById('email-output') as HTMLTextAreaElement).value;
            navigator.clipboard.writeText(emailText).then(() => {
                const btn = target.closest('#copy-email-btn') as HTMLButtonElement;
                const originalText = t('copyEmail');
                btn.classList.add('copied-success');
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> ${t('copied')}`;
                btn.disabled = true;
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('copied-success');
                    btn.disabled = false;
                }, 2000);
            });
            return;
        }
        const reviewsSummary = target.closest('.reviews-summary');
        if (reviewsSummary) {
            const companyId = (reviewsSummary as HTMLElement).dataset.companyId;
            const contentEl = document.getElementById(`reviews-content-${companyId}`);
            if (contentEl) {
                const isVisible = contentEl.style.display !== 'none';
                contentEl.style.display = isVisible ? 'none' : 'block';
                reviewsSummary.setAttribute('aria-expanded', isVisible ? 'false' : 'true');
            }
            return;
        }
        const ratingStar = target.closest('.rating-input .star');
        if (ratingStar) {
            // FIX: Cast Element to HTMLElement to access the dataset property.
            const clickValue = parseInt((ratingStar as HTMLElement).dataset.value, 10);
            const form = ratingStar.closest('form');
            const ratingInput = form?.querySelector('input[name="rating"]') as HTMLInputElement;
            if (ratingInput) ratingInput.value = clickValue.toString();

            const stars = Array.from(ratingStar.parentElement.querySelectorAll('.star')) as HTMLElement[];
            stars.forEach((star, index) => {
                star.textContent = index < clickValue ? '★' : '☆';
                star.classList.toggle('filled', index < clickValue);
            });
            return;
        }
    });

    // --- SUBMIT LISTENER ---
    root.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const state = store.getState();

        if (form.id === 'login-form') {
            const user = (form.querySelector('#username') as HTMLInputElement).value;
            const pass = (form.querySelector('#password') as HTMLInputElement).value;
            if (user === 'admn' && pass === '12345') { store.dispatch({ type: 'LOGIN_SUCCESS' }); } 
            else { store.dispatch({ type: 'LOGIN_FAIL', payload: t('invalidCredentials') }); }
            return;
        }
        if (form.id === 'job-search-form') {
            const jobTitle = (form.querySelector('#job-title-input') as HTMLInputElement).value;
            const location = (form.querySelector('#location-input') as HTMLInputElement).value;
            getLiveJobs(jobTitle, location);
            return;
        }
        if (form.id === 'praktikum-search-form') {
            const field = (form.querySelector('#field-input') as HTMLInputElement).value;
            const location = (form.querySelector('#location-input') as HTMLInputElement).value;
            const internshipType = (form.querySelector('#internship-type-select') as HTMLSelectElement).value;

            // Dispatch to update state so it's correct for the loading view and if the user navigates back
            store.dispatch({ type: 'UPDATE_PRAKTIKUM_FORM', payload: { field, location, internshipType } });
            
            getPraktikumOpportunity(field, location, internshipType);
            return;
        }
        if (form.id === 'email-gen-form') {
            const userName = (form.querySelector('#user-name-email') as HTMLInputElement).value;
            const { selectedCompany, field, internshipType } = state.praktikumSearchState;
            generateInquiryEmail(userName, selectedCompany.name, field, internshipType);
            return;
        }
        if (form.classList.contains('review-form')) {
            const companyId = form.dataset.companyId;
            const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
            const ratingInput = form.querySelector('input[name="rating"]') as HTMLInputElement;
            const textInput = form.querySelector('textarea[name="text"]') as HTMLTextAreaElement;
            if (parseInt(ratingInput.value) === 0 || !textInput.value.trim()) { alert(t('ratingAndReviewRequired')); return; }

            const newReview = { name: nameInput.value.trim() || t('anonymous'), rating: parseInt(ratingInput.value, 10), text: textInput.value.trim(), date: new Date().toISOString() };
            if (saveReview(companyId, newReview)) {
                // Dynamic UI update
                const reviewsList = form.closest('.reviews-content')?.querySelector('.reviews-list');
                if (reviewsList) {
                    reviewsList.querySelector('.no-reviews-msg')?.remove();
                    const reviewEl = document.createElement('div');
                    reviewEl.className = 'review-item';
                    reviewEl.innerHTML = `<div class="review-header"><strong>${newReview.name}</strong><span class="rating-display small">${renderStars(newReview.rating)}</span></div><p>${newReview.text}</p><small>${new Date(newReview.date).toLocaleDateString(store.getState().currentLanguage)}</small>`;
                    reviewsList.prepend(reviewEl);
                }

                const allReviews = getReviews(companyId);
                const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;
                const summaryEl = document.querySelector(`.reviews-summary[data-company-id="${companyId}"]`);
                if (summaryEl) {
                    summaryEl.querySelector('.rating-display').innerHTML = renderStars(avgRating);
                    summaryEl.querySelector('.review-count').textContent = `${allReviews.length} ${t('reviews')}`;
                }
                form.reset();
                ratingInput.value = "0";
                form.querySelectorAll('.rating-input .star').forEach(s => { (s as HTMLElement).textContent = '☆'; s.classList.remove('filled'); });
            }
            return;
        }
    });

    // --- INPUT/CHANGE LISTENERS ---
    root.addEventListener('input', (e) => {
        const target = e.target as HTMLElement;
        if (target.id === 'search-professions') {
            store.dispatch({ type: 'SET_PROFESSIONS_STATE', payload: { searchTerm: (target as HTMLInputElement).value, page: 1 } });
            return;
        }
    });
}

// --- Initial App Load ---
loadSavedResults();
const initialStateFromStore = store.getState();
document.documentElement.lang = initialStateFromStore.currentLanguage;
document.documentElement.dir = translations[initialStateFromStore.currentLanguage].dir;

// Subscribe the render function to the store
store.subscribe(renderApp);

// Initial render
renderApp(store.getState());

// Initialize the single, performant event listener system
initEventListeners();