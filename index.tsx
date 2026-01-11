import { GoogleGenAI, Type } from "@google/genai";
import { marked } from 'marked';
import { translations, quizQuestions, professions } from './data';

// Guidelines: initialization with process.env.API_KEY directly and using named parameter.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const PROFESSIONS_PAGE_SIZE = 6;

const root = document.getElementById('root');
const headerTitle = document.getElementById('header-title');
const footerText = document.getElementById('footer-text');
const langSwitcherContainer = document.getElementById('lang-switcher');
const headerActionsContainer = document.getElementById('header-actions');

// 1. Define the Initial State
const initialState = {
  currentView: 'welcome',
  viewHistory: ['welcome'],
  currentLanguage: localStorage.getItem('preferredLanguage') || 'ar',
  currentQuestionIndex: 0,
  userName: '',
  userAge: '',
  userAnswers: [], 
  userAnswersMap: {}, 
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
  resumeState: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    skills: '',
    photo: null, 
    selectedTemplate: 'modern',
    experience: [{ id: Date.now(), company: '', position: '', startDate: '', endDate: '', description: '' }],
    education: [{ id: Date.now(), school: '', degree: '', startDate: '', endDate: '' }],
    isOptimizing: false,
    isEnhancingPhoto: false,
  },
  isAdminAuthenticated: false,
  loginError: null,
  activeReport: null,
  isNewReport: false,
  apiKeyCheck: {
    isLoading: false,
    status: 'unchecked', 
    message: '',
  },
};

// 2. Create the Reducer Function
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
      localStorage.setItem('preferredLanguage', action.payload);
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
        userAnswers: [],
        userAnswersMap: {},
      };
    case 'SET_QUESTION_INDEX':
      return { ...state, currentQuestionIndex: action.payload };
    case 'SET_USER_ANSWERS':
      return {
          ...state,
          userAnswers: action.payload.answers,
          userAnswersMap: { ...state.userAnswersMap, ...action.payload.mapUpdate },
          userName: action.payload.name || state.userName,
          userAge: action.payload.age || state.userAge,
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
    case 'JOB_SEARCH_START':
      return { ...state, jobSearchState: { isLoading: true, results: null, error: null } };
    case 'JOB_SEARCH_SUCCESS':
      return { ...state, jobSearchState: { isLoading: false, results: action.payload, error: null } };
    case 'JOB_SEARCH_ERROR':
      return { ...state, jobSearchState: { isLoading: false, results: null, error: action.payload } };
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
    case 'UPDATE_RESUME_FIELD':
        return {
            ...state,
            resumeState: { ...state.resumeState, [action.payload.field]: action.payload.value }
        };
    case 'UPDATE_RESUME_EXPERIENCE':
        const newExperience = state.resumeState.experience.map(item => 
            item.id === action.payload.id ? { ...item, [action.payload.field]: action.payload.value } : item
        );
        return { ...state, resumeState: { ...state.resumeState, experience: newExperience } };
    case 'ADD_RESUME_EXPERIENCE':
        return {
            ...state,
            resumeState: { 
                ...state.resumeState, 
                experience: [...state.resumeState.experience, { id: Date.now(), company: '', position: '', startDate: '', endDate: '', description: '' }] 
            }
        };
    case 'REMOVE_RESUME_EXPERIENCE':
        return {
            ...state,
            resumeState: { ...state.resumeState, experience: state.resumeState.experience.filter(i => i.id !== action.payload) }
        };
    case 'UPDATE_RESUME_EDUCATION':
        const newEducation = state.resumeState.education.map(item => 
            item.id === action.payload.id ? { ...item, [action.payload.field]: action.payload.value } : item
        );
        return { ...state, resumeState: { ...state.resumeState, education: newEducation } };
    case 'ADD_RESUME_EDUCATION':
        return {
            ...state,
            resumeState: { 
                ...state.resumeState, 
                education: [...state.resumeState.education, { id: Date.now(), school: '', degree: '', startDate: '', endDate: '' }] 
            }
        };
    case 'REMOVE_RESUME_EDUCATION':
        return {
            ...state,
            resumeState: { ...state.resumeState, education: state.resumeState.education.filter(i => i.id !== action.payload) }
        };
    case 'SET_RESUME_TEMPLATE':
        return { ...state, resumeState: { ...state.resumeState, selectedTemplate: action.payload } };
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
  const dispatch = (action, options = { silent: false }) => {
    state = reducer(state, action);
    if (!options.silent) {
        listeners.forEach(listener => listener(state));
    }
  };
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => { 
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  };
  return { getState, dispatch, subscribe };
};

const store = createStore(appReducer, initialState);

// Helpers
const stopSpeaking = () => { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); };
const speakText = (text) => {
    stopSpeaking();
    if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        const currentLang = store.getState().currentLanguage;
        let langCode = 'de-DE';
        switch(currentLang) {
            case 'ar': langCode = 'ar-SA'; break;
            case 'en': langCode = 'en-US'; break;
            case 'tr': langCode = 'tr-TR'; break;
            case 'uk': langCode = 'uk-UA'; break;
            case 'de': langCode = 'de-DE'; break;
        }
        msg.lang = langCode;
        window.speechSynthesis.speak(msg);
    } else {
        alert("Sorry, your browser doesn't support text-to-speech.");
    }
};

const renderReadBtn = (text) => {
    const safeText = text.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
    return `<button class="read-text-btn" data-text="${safeText}" aria-label="Read text aloud"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button>`;
};

const renderMicBtn = (targetInputId) => {
    return `<button class="mic-btn" data-target="${targetInputId}" aria-label="Speak answer" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg></button>`;
};

const startDictation = (inputId) => {
    // @ts-ignore
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) { alert("Sorry, your browser doesn't support speech recognition."); return; }
    const recognition = new SpeechRecognition();
    const currentLang = store.getState().currentLanguage;
    let langCode = 'de-DE';
     switch(currentLang) { case 'ar': langCode = 'ar-SA'; break; case 'en': langCode = 'en-US'; break; case 'tr': langCode = 'tr-TR'; break; case 'uk': langCode = 'uk-UA'; break; case 'de': langCode = 'de-DE'; break; }
    recognition.lang = langCode;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    const micBtn = document.querySelector(`.mic-btn[data-target="${inputId}"]`);
    micBtn?.classList.add('listening');
    recognition.start();
    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        const input = document.getElementById(inputId) as HTMLInputElement;
        if (input) { input.value = speechResult; input.dispatchEvent(new Event('input')); }
        micBtn?.classList.remove('listening');
    };
    recognition.onspeechend = () => { recognition.stop(); micBtn?.classList.remove('listening'); };
    recognition.onerror = (event) => { console.error('Speech error', event.error); micBtn?.classList.remove('listening'); };
    // @ts-ignore
    window.currentRecognition = recognition;
};

const t = (key) => translations[store.getState().currentLanguage][key] || key;

const loadSavedResults = () => {
    try { const saved = localStorage.getItem('careerResults'); if (saved) store.dispatch({ type: 'LOAD_SAVED_RESULTS', payload: JSON.parse(saved) }); } 
    catch (e) { console.error("Could not load results.", e); }
}

const getFeedbackStore = () => { try { const store = localStorage.getItem('feedbackStore'); return store ? JSON.parse(store) : {}; } catch (e) { return {}; } };
const saveFeedback = (reportId, sectionKey, wasHelpful) => { const store = getFeedbackStore(); if (!store[reportId]) { store[reportId] = {}; } store[reportId][sectionKey] = wasHelpful; localStorage.setItem('feedbackStore', JSON.stringify(store)); };
const renderFeedbackUI = (sectionKey, feedbackData) => { const feedbackValue = feedbackData[sectionKey]; if (feedbackValue === undefined) { return `<span class="feedback-question">${t('wasThisHelpful')}</span><button class="btn feedback-btn" data-feedback="true">${t('yes')}</button><button class="btn feedback-btn" data-feedback="false">${t('no')}</button>`; } else { return `<div class="feedback-response"><button class="btn feedback-btn ${feedbackValue ? 'selected' : ''}" data-feedback="true" disabled>${t('yes')}</button><button class="btn feedback-btn ${!feedbackValue ? 'selected' : ''}" data-feedback="false" disabled>${t('no')}</button><span class="feedback-thanks">${t('feedbackThanks')}</span></div>`; } };

// Render Functions
const renderLanguageSwitcher = (state) => {
    const currentLangName = translations[state.currentLanguage].langName;
    const otherLangs = Object.keys(translations).filter(lang => lang !== state.currentLanguage);
    const chevronIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon"><path d="m6 9 6 6 6-6"/></svg>`;
    langSwitcherContainer.innerHTML = `<div class="lang-switcher-dropdown"><button class="lang-btn-current">${currentLangName}${chevronIcon}</button><div class="lang-dropdown-content"><ul>${otherLangs.map(lang => `<li><button class="lang-option-btn" data-lang="${lang}">${translations[lang].langName}</button></li>`).join('')}</ul></div></div>`;
};

const renderHeaderActions = (state) => {
    if (state.isAdminAuthenticated) {
        headerActionsContainer.innerHTML = `<button id="view-reports-btn" class="btn secondary">${t('viewReports')}</button><button id="logout-btn" class="btn">${t('logout')}</button>`;
    } else {
        headerActionsContainer.innerHTML = `<button id="admin-login-btn" class="btn">${t('adminLogin')}</button>`;
    }
};

const renderWelcome = (state) => {
  const titleText = t('welcomeTitle');
  const descText = t('welcomeDesc');
  const mainContentHTML = `<h1>${titleText} ${renderReadBtn(titleText)}</h1><p>${descText} ${renderReadBtn(descText)}</p><div class="welcome-actions"><div id="start-quiz-card" class="action-card primary"><h3>${t('startQuiz')}</h3><p>${t('startQuizDesc')}</p></div><div id="browse-professions-card" class="action-card ${!state.isAdminAuthenticated ? 'locked' : ''}"><h3>${!state.isAdminAuthenticated ? `<span class="lock-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>` : ''}${t('browseProfessions')}</h3><p>${t('browseProfessionsDesc')}</p></div><div id="job-search-card" class="action-card"><h3>${t('searchAvailableJobs')}</h3><p>${t('searchAvailableJobsDesc')}</p></div><div id="praktikum-search-card" class="action-card"><h3>${t('searchForPraktikum')}</h3><p>${t('searchForPraktikumDesc')}</p></div></div>`;
  const adminExtraContent = state.isAdminAuthenticated ? `<div class="admin-extra-section"><div class="admin-extra-content"><h3>${t('futureProjectTitle')}</h3><p>${t('futureProjectDesc')}</p></div><div class="admin-extra-content"><h3>${t('futureProjectTitle')}</h3><p>${t('futureProjectDesc')}</p></div></div>` : '';
  root.innerHTML = `<div class="page-container"><div class="container welcome-container">${mainContentHTML}${adminExtraContent}</div></div>`;
};

const renderTopNav = (state) => {
    const isRTL = translations[state.currentLanguage].dir === 'rtl';
    const backButton = `<button id="top-back-btn" class="btn secondary small-btn">${t('back')}</button>`;
    const homeButton = `<button id="top-home-btn" class="btn secondary small-btn">${t('home')}</button>`;
    return `<div class="top-nav-container">${isRTL ? homeButton : backButton}${isRTL ? backButton : homeButton}</div>`;
};

const renderAdminLogin = (state) => {
    root.innerHTML = `<div class="page-container login-page-wrapper"><div class="container admin-login-container">${renderTopNav(state)}<h1>${t('login')}</h1><form id="login-form" class="login-form"><div class="input-group-glass"><input type="text" id="username" required autocomplete="off"><label for="username">${t('username')}</label></div><div class="input-group-glass"><input type="password" id="password" required><label for="password">${t('password')}</label></div><div class="login-extras"><label class="remember-me"><input type="checkbox"> <span>${state.currentLanguage === 'de' ? 'Erinnere dich an mich' : 'Remember me'}</span></label><a href="#" class="forgot-pass">${state.currentLanguage === 'de' ? 'Passwort vergessen?' : 'Forgot Password?'}</a></div><button type="submit" class="btn login-btn">${t('login')}</button><div class="register-link"><p>${state.currentLanguage === 'de' ? 'Haben Sie kein Konto?' : "Don't have an account?"} <a href="#" id="register-link">${state.currentLanguage === 'de' ? 'Registrieren' : 'Register'}</a></p></div></form>${state.loginError ? `<p class="error-message glass-error">${state.loginError}</p>` : ''}</div></div>`;
};

const renderQuizIntro = (state) => {
    const introTitle = t('quizIntroTitle');
    const introDesc = t('quizIntroDesc');
    root.innerHTML = `<div class="page-container"><div class="container quiz-intro-container">${renderTopNav(state)}<h1>${introTitle} ${renderReadBtn(introTitle)}</h1><p>${introDesc} ${renderReadBtn(introDesc)}</p><button id="start-quiz-now-btn" class="btn">${t('quizIntroStartBtn')}</button></div></div>`;
};

// Quiz Logic
const checkCondition = (question, userAnswersMap) => {
    if (!question.trigger) return true;
    const { questionId, values } = question.trigger;
    const previousAnswer = userAnswersMap[questionId];
    if (!previousAnswer) return false;
    return values.includes(previousAnswer);
};

const getNextValidIndex = (currentIndex, questions, userAnswersMap) => {
    let nextIndex = currentIndex + 1;
    while (nextIndex < questions.length) {
        if (checkCondition(questions[nextIndex], userAnswersMap)) return nextIndex;
        nextIndex++;
    }
    return -1;
};

const getPrevValidIndex = (currentIndex, questions, userAnswersMap) => {
    let prevIndex = currentIndex - 1;
    while (prevIndex >= 0) {
        if (checkCondition(questions[prevIndex], userAnswersMap)) return prevIndex;
        prevIndex--;
    }
    return -1;
};

const renderQuiz = (state) => {
  const questions = quizQuestions[state.currentLanguage];
  if (!questions) { root.innerHTML = `<p>${t('errorText')}</p>`; return; }
  const question = questions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex) / questions.length) * 100;
  const nextIndex = getNextValidIndex(state.currentQuestionIndex, questions, state.userAnswersMap);
  const isLastQuestion = nextIndex === -1;
  let questionContent;
  const value = state.userAnswersMap[question.id] || '';

  if (question.type === 'text') {
      questionContent = `<div class="quiz-input-group"><label>${question.question}</label><div class="input-wrapper">${question.id === 'name' ? `<input type="text" id="quiz-input" value="${value}" placeholder="${t('answerHere')}">` : `<textarea id="quiz-input" rows="5" placeholder="${t('answerHere')}">${value}</textarea>`}${renderMicBtn('quiz-input')}</div></div>`;
  } else if (question.type === 'number') {
    questionContent = `<div class="quiz-input-group"><label>${question.question}</label><div class="input-wrapper"><input type="number" id="quiz-input" value="${value}" placeholder="${t('answerHere')}">${renderMicBtn('quiz-input')}</div></div>`;
  } else {
     questionContent = `<div class="options-list">${question.options.map((option) => `<button class="option-text-row ${value === option ? 'selected' : ''}" data-option="${option}"><span class="radio-circle"></span><span class="option-text">${option}</span></button>`).join('')}</div>`;
  }

  root.innerHTML = `<div class="page-container"><div class="container quiz-container">${renderTopNav(state)}<div class="progress-bar"><div class="progress-bar-inner" style="width: ${progress}%"></div></div><p class="question-text">${question.question} ${renderReadBtn(question.question)}</p>${questionContent}<div class="quiz-nav"><button id="back-btn" class="btn secondary" ${state.currentQuestionIndex === 0 ? 'disabled' : ''}>${t('back')}</button>${isLastQuestion ? `<button id="finish-btn" class="btn">${t('getResults')}</button>` : `<button id="next-btn" class="btn">${t('next')}</button>`}</div></div></div>`;
};

// New Helper for Hourglass Loader
const getLoaderHtml = () => `
<div class="hourglass-animation" role="status" aria-label="Loading">
    <div class="cap-top"></div>
    <div class="top-half">
        <div class="sand-top"></div>
    </div>
    <div class="stream-line"></div>
    <div class="bottom-half">
        <div class="sand-bottom"></div>
    </div>
    <div class="cap-bottom"></div>
</div>`;

const renderLoading = (title = t('loadingTitle'), desc = t('loadingDesc')) => {
  root.innerHTML = `
    <div class="page-container">
        <div class="container loader-container">
            ${getLoaderHtml()}
            <h2 class="loading-title">${title}</h2>
            <p class="loading-desc">${desc}</p>
        </div>
    </div>`;
};

const renderResults = async (state) => {
  const { activeReport: results, isNewReport: isNew, savedResults } = state;
  if (!results) { store.dispatch({ type: 'NAVIGATE_HOME' }); return; }
  const personalitySummaryHtml = await marked.parse(results.personalitySummary);
  const careerAdviceHtml = await marked.parse(results.careerAdvice);
  const isAlreadySaved = savedResults.some(r => r.savedDate === results.savedDate);
  const feedbackStore = getFeedbackStore();
  const reportFeedback = feedbackStore[results.savedDate] || {};
  const cleanPersonality = results.personalitySummary.replace(/[*#]/g, '');
  const cleanAdvice = results.careerAdvice.replace(/[*#]/g, '');

  root.innerHTML = `<div class="page-container"><div class="container results-container">${renderTopNav(state)}<div class="results-header-section"><h1>${t('resultsTitleFor').replace('{name}', results.userName || t('you'))}</h1><p class="results-subtitle">${t('quizIntroDesc')}</p></div><div class="creative-card animate-delay-1"><h2><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${t('personalitySummary')} ${renderReadBtn(cleanPersonality)}</h2><div class="creative-card-content">${personalitySummaryHtml}</div><div class="feedback-controls" data-section-key="personality">${renderFeedbackUI('personality', reportFeedback)}</div></div><section class="creative-jobs-section animate-delay-2"><h2>${t('recommendedPaths')}</h2><div class="creative-jobs-grid">${results.jobSuggestions.map(job => `<div class="creative-job-card"><div class="job-card-header"><h3>${job.title} ${renderReadBtn(`${job.title}. ${job.description}`)}</h3></div><div class="job-card-body"><p>${job.description}</p></div><div class="job-card-footer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><span>${job.details.length > 60 ? job.details.substring(0, 60) + '...' : job.details}</span></div></div>`).join('')}</div></section><div class="creative-card creative-advice-card animate-delay-3" style="margin-top: 3rem;"><h2><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> ${t('careerAdvice')} ${renderReadBtn(cleanAdvice)}</h2><div class="card-content">${careerAdviceHtml}</div><div class="feedback-controls" data-section-key="advice">${renderFeedbackUI('advice', reportFeedback)}</div></div><div class="results-actions-bar"><button id="print-btn" class="btn secondary">${t('printReport')}</button><button id="email-btn" class="btn secondary">${t('emailReport')}</button>${isNew ? `<button id="save-btn" class="btn" ${isAlreadySaved ? 'disabled' : ''}>${isAlreadySaved ? t('reportSaved') : t('saveReport')}</button>` : ''}</div></div></div>`;
};

const renderSavedResultsList = (state) => {
    root.innerHTML = `<div class="page-container"><div class="container saved-reports-container">${renderTopNav(state)}<h1>${t('savedReportsTitle')}</h1><button id="create-cv-btn" class="btn small-btn" style="margin-bottom: 1.5rem; width: 100%; justify-content: center;">${t('createResume')}</button><ul>${state.savedResults.map((result, index) => `<li class="report-item"><div class="report-item-info"><span class="name">${result.userName || t('anonymousReport')}</span><span class="date">${new Date(result.savedDate).toLocaleDateString(state.currentLanguage)}</span></div><div class="report-item-actions"><button class="btn view-details-btn" data-index="${index}">${t('viewDetails')}</button><button class="btn delete delete-btn" data-index="${index}">${t('delete')}</button></div></li>`).join('')}</ul>${state.savedResults.length === 0 ? `<p>${t('noSavedReports')}</p>` : ''}</div></div>`;
};

const renderProfessionsList = (state) => {
    const lang = state.currentLanguage;
    const filtered = professions.filter(p => 
        p.title[lang].toLowerCase().includes(state.professionsSearchTerm.toLowerCase())
    );
    const page = state.professionsCurrentPage;
    const paginated = filtered.slice((page - 1) * PROFESSIONS_PAGE_SIZE, page * PROFESSIONS_PAGE_SIZE);
    
    let html = `<div class="page-container"><div class="container professions-container">${renderTopNav(state)}<h1>${t('browseProfessions')}</h1><div class="professions-controls"><input type="search" id="search-professions" placeholder="${t('searchPlaceholder')}" value="${state.professionsSearchTerm}"></div><div id="professions-grid" class="creative-jobs-grid">`;
    
    if (paginated.length > 0) {
        html += paginated.map(p => `
            <div class="creative-job-card">
                <div class="job-card-header"><h3>${p.title[lang]}</h3></div>
                <div class="job-card-body"><p>${p.description[lang]}</p><br><strong>${t('type')}:</strong> ${p.type}</div>
            </div>
        `).join('');
    } else {
        html += `<p>${t('noJobsFound')}</p>`;
    }
    
    html += `</div><div class="pagination-controls" style="margin-top:2rem; display:flex; justify-content:center; gap:1rem;">`;
    if (page > 1) html += `<button class="btn secondary prev-page-btn">${t('back')}</button>`;
    if (paginated.length === PROFESSIONS_PAGE_SIZE) html += `<button class="btn secondary next-page-btn">${t('next')}</button>`;
    html += `</div></div></div>`;
    
    root.innerHTML = html;
};

const renderJobSearch = (state) => {
    const { isLoading, results, error } = state.jobSearchState;
    let resultsHtml = '';
    if (isLoading) {
        resultsHtml = `${getLoaderHtml()}<p>${t('jobSearchLoading')}</p>`;
    } else if (error) {
        resultsHtml = `<p class="error-message">${error}</p>`;
    } else if (results) {
        resultsHtml = `<h3>${t('jobSearchSources')}</h3><ul>${results.length > 0 ? results.map(r => `<li><a href="${r.url}" target="_blank">${r.title}</a></li>`).join('') : t('noJobsFound')}</ul>`;
    }

    root.innerHTML = `
        <div class="page-container">
            <div class="container job-search-container">
                ${renderTopNav(state)}
                <h1>${t('searchAvailableJobs')}</h1>
                <p>${t('jobSearchDesc')}</p>
                <div class="job-search-form" style="display:flex; flex-direction:column; gap:1rem; margin-bottom:2rem;">
                    <input type="text" id="job-title-input" placeholder="${t('jobTitlePlaceholder')}">
                    <input type="text" id="job-location-input" placeholder="${t('locationPlaceholder')}">
                    <button id="perform-job-search-btn" class="btn">${t('search')}</button>
                </div>
                <div id="job-search-results-container">${resultsHtml}</div>
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
                <div style="background:rgba(255,255,0,0.1); padding:1rem; border-radius:8px; margin:1rem 0;">${t('praktikumIntroDisclaimer')}</div>
                <button id="start-praktikum-search-btn" class="btn">${t('praktikumIntroStartBtn')}</button>
            </div>
        </div>
    `;
};

const renderPraktikumSearch = (state) => {
    const { isLoadingCompany, companyList, selectedCompany, generatedEmail, isLoadingEmail } = state.praktikumSearchState;
    
    let content = `
        <div class="form-group" style="margin-bottom:1rem;">
            <label>${t('fieldPlaceholder')}</label>
            <input type="text" id="praktikum-field" value="${state.praktikumSearchState.field}" placeholder="IT, Marketing...">
        </div>
        <div class="form-group" style="margin-bottom:1rem;">
            <label>${t('location')}</label>
            <input type="text" id="praktikum-location" value="${state.praktikumSearchState.location}" placeholder="Berlin...">
        </div>
        <div class="form-group" style="margin-bottom:1rem;">
            <label>${t('internshipTypeLabel')}</label>
            <select id="praktikum-type">
                <option value="Schülerpraktikum">${t('internshipTypeSchool')}</option>
                <option value="Ausbildung">${t('internshipTypeAusbildung')}</option>
                <option value="Berufsorientierung">${t('internshipTypeOrientation')}</option>
            </select>
        </div>
        <button id="find-companies-btn" class="btn">${t('praktikumSearchBtn')}</button>
    `;

    if (isLoadingCompany) {
        content += `<div class="praktikum-search-container" style="margin-top:2rem;">${getLoaderHtml()}</div><p>${t('praktikumCompanyLoading')}</p>`;
    } else if (companyList.length > 0) {
        content += `<div class="company-list" style="margin-top:2rem;"><h3>${t('praktikumCompanyResult')}</h3>`;
        content += companyList.map((c, idx) => `
            <div class="action-card" style="margin-bottom:1rem; text-align:left; border:1px solid #ddd;">
                <h4>${c.name}</h4>
                <p>${c.address}</p>
                <a href="${c.website}" target="_blank" style="color:var(--primary-color); display:block; margin-bottom:0.5rem;">${t('companyWebsite')}</a>
                <button class="btn small-btn select-company-btn" data-index="${idx}">${t('select')}</button>
            </div>
        `).join('');
        content += `</div>`;
    }

    if (selectedCompany) {
        content = `
            <h3>${t('selected')}: ${selectedCompany.name}</h3>
            <div class="email-gen-section">
                <p>${t('praktikumGenerateEmailTitle')}</p>
                <input type="text" id="user-fullname" placeholder="${t('yourNamePlaceholder')}" value="${state.userName}" style="margin-bottom:1rem;">
                <button id="generate-email-btn" class="btn">${t('praktikumGenerateEmailBtn')}</button>
            </div>
        `;
        if (isLoadingEmail) {
            content += `<div class="loader-container">${getLoaderHtml()}</div><p>${t('praktikumEmailLoading')}</p>`;
        } else if (generatedEmail) {
            content += `
                <div class="email-result" style="background:#f9f9f9; padding:1rem; border-radius:8px; margin-top:1rem; white-space:pre-wrap;">${generatedEmail}</div>
                <button id="copy-email-btn" class="btn secondary" style="margin-top:1rem;">${t('copyEmail')}</button>
                <button id="reset-praktikum-btn" class="btn secondary" style="margin-top:1rem;">${t('back')}</button>
            `;
        }
    }

    root.innerHTML = `<div class="page-container"><div class="container">${renderTopNav(state)}<h1>${t('searchForPraktikum')}</h1>${content}</div></div>`;
};

const renderResumeCreator = (state) => {
    const { resumeState } = state;
    root.innerHTML = `
        <div class="page-container">
            <div class="container resume-builder-container">
                ${renderTopNav(state)}
                <h1>${t('resumeTitle')}</h1>
                <p>${t('resumeDesc')}</p>
                
                <div class="resume-section">
                    <h3>${t('resumeSelectTemplate')}</h3>
                    <div class="template-selector">
                        ${['modern', 'classic', 'creative'].map(tpl => `
                            <button class="template-option ${resumeState.selectedTemplate === tpl ? 'selected' : ''}" data-template="${tpl}">
                                <div class="template-preview ${tpl}"></div>
                                <span>${t('template' + tpl.charAt(0).toUpperCase() + tpl.slice(1))}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="resume-section">
                    <h3>${t('resumePersonalInfo')}</h3>
                    <div class="form-row">
                        <input type="text" class="resume-input" data-field="fullName" placeholder="${t('resumeFullName')}" value="${resumeState.fullName}">
                        <input type="text" class="resume-input" data-field="jobTitle" placeholder="${t('resumeJobTitle')}" value="${resumeState.jobTitle}">
                    </div>
                    <div class="form-row">
                        <input type="email" class="resume-input" data-field="email" placeholder="${t('resumeEmail')}" value="${resumeState.email}">
                        <input type="text" class="resume-input" data-field="phone" placeholder="${t('resumePhone')}" value="${resumeState.phone}">
                    </div>
                    <input type="text" class="resume-input" data-field="address" placeholder="${t('resumeAddress')}" value="${resumeState.address}">
                    <textarea class="resume-input" data-field="summary" placeholder="${t('resumeSummary')}" rows="3">${resumeState.summary}</textarea>
                </div>

                <div class="resume-section">
                    <h3>${t('resumeExperience')}</h3>
                    <div id="experience-list">
                        ${resumeState.experience.map((exp, idx) => `
                            <div class="experience-item card-like">
                                <input type="text" placeholder="${t('resumeCompany')}" value="${exp.company}" class="resume-exp-input" data-id="${exp.id}" data-field="company">
                                <input type="text" placeholder="${t('resumePosition')}" value="${exp.position}" class="resume-exp-input" data-id="${exp.id}" data-field="position">
                                <div class="date-row">
                                    <input type="text" placeholder="${t('resumeDateStart')}" value="${exp.startDate}" class="resume-exp-input" data-id="${exp.id}" data-field="startDate">
                                    <input type="text" placeholder="${t('resumeDateEnd')}" value="${exp.endDate}" class="resume-exp-input" data-id="${exp.id}" data-field="endDate">
                                </div>
                                <textarea placeholder="${t('resumeDescription')}" class="resume-exp-input" data-id="${exp.id}" data-field="description">${exp.description}</textarea>
                                <button class="btn secondary remove-exp-btn" data-id="${exp.id}">${t('remove')}</button>
                            </div>
                        `).join('')}
                    </div>
                    <button id="add-exp-btn" class="btn secondary small-btn">${t('resumeAddExperience')}</button>
                </div>

                <div class="resume-section">
                    <h3>${t('resumeEducation')}</h3>
                    <div id="education-list">
                        ${resumeState.education.map((edu, idx) => `
                            <div class="education-item card-like">
                                <input type="text" placeholder="${t('resumeSchool')}" value="${edu.school}" class="resume-edu-input" data-id="${edu.id}" data-field="school">
                                <input type="text" placeholder="${t('resumeDegree')}" value="${edu.degree}" class="resume-edu-input" data-id="${edu.id}" data-field="degree">
                                <div class="date-row">
                                    <input type="text" placeholder="${t('resumeDateStart')}" value="${edu.startDate}" class="resume-edu-input" data-id="${edu.id}" data-field="startDate">
                                    <input type="text" placeholder="${t('resumeDateEnd')}" value="${edu.endDate}" class="resume-edu-input" data-id="${edu.id}" data-field="endDate">
                                </div>
                                <button class="btn secondary remove-edu-btn" data-id="${edu.id}">${t('remove')}</button>
                            </div>
                        `).join('')}
                    </div>
                    <button id="add-edu-btn" class="btn secondary small-btn">${t('resumeAddEducation')}</button>
                </div>

                <div class="resume-section">
                    <h3>${t('resumeSkills')}</h3>
                    <textarea class="resume-input" data-field="skills" placeholder="${t('resumeSkillsPlaceholder')}" rows="3">${resumeState.skills}</textarea>
                </div>

                <button id="generate-resume-btn" class="btn">${t('resumeGenerateBtn')}</button>
            </div>
        </div>
    `;
};

const renderResumePreview = (state) => {
    const { resumeState } = state;
    
    // Generate HTML based on template
    let resumeHtml = '';
    const expHtml = resumeState.experience.map(e => `
        <div class="resume-item">
            <h4>${e.position} <span class="at-company">@ ${e.company}</span></h4>
            <div class="resume-meta">${e.startDate} - ${e.endDate}</div>
            <p>${e.description}</p>
        </div>
    `).join('');
    
    const eduHtml = resumeState.education.map(e => `
        <div class="resume-item">
            <h4>${e.degree}</h4>
            <div class="resume-meta">${e.school}, ${e.startDate} - ${e.endDate}</div>
        </div>
    `).join('');

    const templateClass = `template-${resumeState.selectedTemplate}`;

    resumeHtml = `
        <div class="resume-paper ${templateClass}">
            <div class="resume-sidebar">
                <div class="resume-avatar">
                    <img src="${resumeState.photo || 'https://via.placeholder.com/150'}" alt="Profile">
                </div>
                <div class="resume-contact">
                    <h3>${t('resumePersonalInfo')}</h3>
                    <p>📧 ${resumeState.email}</p>
                    <p>📱 ${resumeState.phone}</p>
                    <p>📍 ${resumeState.address}</p>
                </div>
                <div class="resume-skills-section">
                    <h3>${t('resumeSkills')}</h3>
                    <p>${resumeState.skills}</p>
                </div>
            </div>
            <div class="resume-main">
                <div class="resume-header">
                    <h1>${resumeState.fullName}</h1>
                    <h2>${resumeState.jobTitle}</h2>
                    <p class="resume-summary">${resumeState.summary}</p>
                </div>
                <div class="resume-body-section">
                    <h3>${t('resumeExperience')}</h3>
                    ${expHtml}
                </div>
                <div class="resume-body-section">
                    <h3>${t('resumeEducation')}</h3>
                    ${eduHtml}
                </div>
            </div>
        </div>
    `;

    root.innerHTML = `
        <div class="page-container">
            <div class="container resume-preview-wrapper">
                ${renderTopNav(state)}
                <div class="preview-toolbar" style="margin-bottom: 1rem; display: flex; gap: 1rem;">
                    <button id="download-pdf-btn" class="btn">${t('resumeDownloadPDF')}</button>
                    <button id="edit-resume-btn" class="btn secondary">${t('resumeEdit')}</button>
                </div>
                ${resumeHtml}
            </div>
        </div>
    `;
};

// AI Logic
const getLiveJobs = async (jobTitle, location) => {
    store.dispatch({ type: 'JOB_SEARCH_START' });
    try {
        const prompt = t('jobSearchPrompt').replace('{jobTitle}', jobTitle).replace('{location}', location);
        // Fix: Use gemini-3-flash-preview for Search Grounding as recommended in guidelines.
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: { tools: [{ googleSearch: {} }] }
        });
        
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        const results = chunks.map(c => c.web ? { title: c.web.title, url: c.web.uri } : null).filter(Boolean);
        
        store.dispatch({ type: 'JOB_SEARCH_SUCCESS', payload: results });
    } catch (error) {
        store.dispatch({ type: 'JOB_SEARCH_ERROR', payload: error.message });
    }
};

const getPraktikumOpportunity = async (field, location, internshipType) => {
    store.dispatch({ type: 'PRAKTIKUM_COMPANY_SEARCH_START', payload: { field, location, internshipType } });
    try {
        const prompt = t('praktikumSearchPrompt').replace('{field}', field).replace('{location}', location).replace('{internshipType}', internshipType);
        // Fix: Use gemini-3-flash-preview as recommended.
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });
        const companies = JSON.parse(response.text);
        store.dispatch({ type: 'PRAKTIKUM_COMPANY_SEARCH_SUCCESS', payload: companies });
    } catch (e) {
        store.dispatch({ type: 'PRAKTIKUM_COMPANY_SEARCH_ERROR', payload: e.message });
    }
};

const generateInquiryEmail = async (userName, companyName, field, internshipType) => {
    store.dispatch({ type: 'PRAKTIKUM_EMAIL_GEN_START' });
    try {
        const prompt = t('praktikumEmailPrompt')
            .replace('{userName}', userName)
            .replace('{companyName}', companyName)
            .replace('{field}', field)
            .replace('{internshipType}', internshipType);
            
        // Fix: Use gemini-3-flash-preview for text generation.
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt
        });
        store.dispatch({ type: 'PRAKTIKUM_EMAIL_GEN_SUCCESS', payload: response.text });
    } catch (e) {
        store.dispatch({ type: 'PRAKTIKUM_EMAIL_GEN_ERROR', payload: e.message });
    }
};

const getAIResults = async () => {
  store.dispatch({ type: 'SET_VIEW_LOADING' });
  const state = store.getState();
  const schema = {
    type: Type.OBJECT,
    properties: {
      userName: { type: Type.STRING },
      personalitySummary: { type: Type.STRING, description: t('schemaPersonality') },
      jobSuggestions: { type: Type.ARRAY, description: t('schemaJobSuggestions'), items: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, description: { type: Type.STRING }, details: { type: Type.STRING } }, required: ["title", "description", "details"] } },
      careerAdvice: { type: Type.STRING, description: t('schemaCareerAdvice') },
    },
    required: ["userName", "personalitySummary", "jobSuggestions", "careerAdvice"],
  };
  
  const questions = quizQuestions[state.currentLanguage];
  let formattedAnswers = '';
  Object.keys(state.userAnswersMap).forEach(key => {
      const q = questions.find(q => q.id === key);
      if (q) formattedAnswers += `${q.question}: ${state.userAnswersMap[key]}\n`;
  });

  try {
    // Fix: Use gemini-3-pro-preview for complex reasoning task as per guidelines.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `${t('promptIntro')}\n${formattedAnswers}\n\n${t('promptInstruction')}`,
      config: { responseMimeType: "application/json", responseSchema: schema, systemInstruction: t('systemInstruction').replace('{name}', state.userName).replace('{age}', state.userAge) },
    });
    const resultJson = JSON.parse(response.text);
    resultJson.savedDate = new Date().toISOString();
    store.dispatch({ type: 'SET_ACTIVE_REPORT', payload: { report: resultJson, isNew: true } });
  } catch(error) {
    console.error(error);
    store.dispatch({ type: 'NAVIGATE_HOME' }); 
    alert(t('errorText'));
  }
};

const renderApp = (state) => {
  stopSpeaking(); 
  if ((window as any).currentRecognition) { (window as any).currentRecognition.stop(); }
  document.body.style.paddingTop = '0px'; 
  headerTitle.textContent = t('headerTitle');
  footerText.textContent = t('footerText');
  renderLanguageSwitcher(state);
  renderHeaderActions(state);

  switch (state.currentView) {
    case 'quizIntro': renderQuizIntro(state); break;
    case 'quiz': renderQuiz(state); break;
    case 'loading': renderLoading(); break;
    case 'results': renderResults(state); break;
    case 'savedResultsList': renderSavedResultsList(state); break;
    case 'professionsList': renderProfessionsList(state); break;
    case 'jobSearch': renderJobSearch(state); break;
    case 'praktikumIntro': renderPraktikumIntro(state); break;
    case 'praktikumSearch': renderPraktikumSearch(state); break;
    case 'adminLogin': renderAdminLogin(state); break;
    case 'resumeCreator': renderResumeCreator(state); break;
    case 'resumePreview': renderResumePreview(state); break;
    default: renderWelcome(state); break;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function initEventListeners() {
    document.body.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const state = store.getState();

        // Language Switcher
        if (target.closest('.lang-btn-current')) {
            document.querySelector('.lang-switcher-dropdown').classList.toggle('open');
            return;
        }
        if (target.closest('.lang-option-btn')) {
            const lang = (target.closest('.lang-option-btn') as HTMLElement).dataset.lang;
            store.dispatch({ type: 'SET_LANGUAGE', payload: lang });
            return;
        }
        if (!target.closest('.lang-switcher-dropdown')) {
            document.querySelector('.lang-switcher-dropdown')?.classList.remove('open');
        }

        // Navigation
        if (target.closest('#header-title') || target.closest('#top-home-btn')) { store.dispatch({ type: 'NAVIGATE_HOME' }); return; }
        if (target.closest('#top-back-btn')) { store.dispatch({ type: 'NAVIGATE_BACK' }); return; }
        
        // Welcome Cards
        if (target.closest('#start-quiz-card')) { 
            store.dispatch({ type: 'NAVIGATE_TO_QUIZ_INTRO' }); 
            return; 
        }
        if (target.closest('#start-quiz-now-btn')) { 
            store.dispatch({ type: 'START_QUIZ' }); 
            return; 
        }
        
        if (target.closest('#browse-professions-card') && !target.closest('.locked')) { 
            store.dispatch({ type: 'NAVIGATE_TO', payload: 'professionsList' }); 
            return; 
        }
        if (target.closest('#job-search-card')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'jobSearch' }); return; }
        if (target.closest('#praktikum-search-card')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'praktikumIntro' }); return; }
        if (target.closest('#start-praktikum-search-btn')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'praktikumSearch' }); return; }

        // Quiz Logic
        const optionBtn = target.closest('.option-text-row');
        if (optionBtn) {
            document.querySelectorAll('.option-text-row.selected').forEach(b => b.classList.remove('selected'));
            optionBtn.classList.add('selected');
            return;
        }
        
        const handleQuizAnswer = () => {
            const { userAnswersMap, currentQuestionIndex } = state;
            const questions = quizQuestions[state.currentLanguage];
            const question = questions[currentQuestionIndex];
            let answerValue = '';
            if (question.type === 'text' || question.type === 'number') {
                const value = (document.getElementById('quiz-input') as HTMLInputElement).value;
                if (!value && question.id !== 'name' && question.id !== 'age' && question.type !== 'text') return null;
                answerValue = value;
            } else {
                const selectedButton = document.querySelector('.option-text-row.selected') as HTMLElement;
                if (!selectedButton) return null;
                answerValue = selectedButton.dataset.option || '';
            }
            const newMap = { ...userAnswersMap, [question.id]: answerValue };
            let name = state.userName; let age = state.userAge;
            if (question.id === 'name') name = answerValue;
            if (question.id === 'age') age = answerValue;
            return { mapUpdate: newMap, name, age };
        };

        if (target.closest('#back-btn') && state.currentView === 'quiz') { 
            const questions = quizQuestions[state.currentLanguage];
            const prevIndex = getPrevValidIndex(state.currentQuestionIndex, questions, state.userAnswersMap);
            if (prevIndex !== -1) store.dispatch({ type: 'SET_QUESTION_INDEX', payload: prevIndex });
            return; 
        }

        if (target.closest('#next-btn')) { 
            const result = handleQuizAnswer();
            if(result) {
                store.dispatch({ type: 'SET_USER_ANSWERS', payload: result });
                const questions = quizQuestions[state.currentLanguage];
                const nextIndex = getNextValidIndex(state.currentQuestionIndex, questions, result.mapUpdate);
                if (nextIndex !== -1) store.dispatch({ type: 'SET_QUESTION_INDEX', payload: nextIndex });
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

        // Job Search
        if (target.closest('#perform-job-search-btn')) {
            const title = (document.getElementById('job-title-input') as HTMLInputElement).value;
            const loc = (document.getElementById('job-location-input') as HTMLInputElement).value;
            if (title && loc) getLiveJobs(title, loc);
            return;
        }

        // Praktikum
        if (target.closest('#find-companies-btn')) {
            const field = (document.getElementById('praktikum-field') as HTMLInputElement).value;
            const loc = (document.getElementById('praktikum-location') as HTMLInputElement).value;
            const type = (document.getElementById('praktikum-type') as HTMLInputElement).value;
            if (field && loc) getPraktikumOpportunity(field, loc, type);
            return;
        }
        if (target.closest('.select-company-btn')) {
            const index = (target.closest('.select-company-btn') as HTMLElement).dataset.index;
            store.dispatch({ type: 'PRAKTIKUM_SELECT_COMPANY', payload: state.praktikumSearchState.companyList[index] });
            return;
        }
        if (target.closest('#generate-email-btn')) {
            const userName = (document.getElementById('user-fullname') as HTMLInputElement).value;
            if (!userName) { alert("Please enter your name"); return; }
            generateInquiryEmail(userName, state.praktikumSearchState.selectedCompany.name, state.praktikumSearchState.field, state.praktikumSearchState.internshipType);
            return;
        }
        if (target.closest('#reset-praktikum-btn')) {
            store.dispatch({ type: 'PRAKTIKUM_SELECT_COMPANY', payload: null });
            return;
        }
        if (target.closest('#copy-email-btn')) {
            navigator.clipboard.writeText(state.praktikumSearchState.generatedEmail);
            alert(t('copied'));
            return;
        }

        // Admin & Login
        if (target.closest('#admin-login-btn')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'adminLogin' }); return; }
        if (target.closest('#view-reports-btn')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'savedResultsList' }); return; }
        if (target.closest('#logout-btn')) { store.dispatch({ type: 'LOGOUT' }); return; }
        
        // Saved Results
        if (target.closest('#create-cv-btn')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'resumeCreator' }); return; }
        if (target.closest('.view-details-btn')) {
            const index = (target.closest('.view-details-btn') as HTMLElement).dataset.index;
            const result = state.savedResults[parseInt(index)];
            store.dispatch({ type: 'SET_ACTIVE_REPORT', payload: { report: result, isNew: false } });
            return;
        }
        if (target.closest('.delete-btn')) {
            if(confirm(t('confirmDeleteReport'))) {
                const index = (target.closest('.delete-btn') as HTMLElement).dataset.index;
                const newResults = [...state.savedResults];
                newResults.splice(parseInt(index), 1);
                localStorage.setItem('careerResults', JSON.stringify(newResults));
                store.dispatch({ type: 'SET_SAVED_RESULTS', payload: newResults });
            }
            return;
        }

        // Professions Pagination
        if (target.closest('.prev-page-btn')) {
            store.dispatch({ type: 'SET_PROFESSIONS_STATE', payload: { searchTerm: state.professionsSearchTerm, page: Math.max(1, state.professionsCurrentPage - 1) } });
            return;
        }
        if (target.closest('.next-page-btn')) {
            store.dispatch({ type: 'SET_PROFESSIONS_STATE', payload: { searchTerm: state.professionsSearchTerm, page: state.professionsCurrentPage + 1 } });
            return;
        }

        // Resume Builder
        if (target.closest('.template-option')) {
            const template = (target.closest('.template-option') as HTMLElement).dataset.template;
            store.dispatch({ type: 'SET_RESUME_TEMPLATE', payload: template });
            return;
        }
        if (target.closest('#add-exp-btn')) { store.dispatch({ type: 'ADD_RESUME_EXPERIENCE' }); return; }
        if (target.closest('#add-edu-btn')) { store.dispatch({ type: 'ADD_RESUME_EDUCATION' }); return; }
        if (target.closest('.remove-exp-btn')) {
            const id = (target.closest('.remove-exp-btn') as HTMLElement).dataset.id;
            store.dispatch({ type: 'REMOVE_RESUME_EXPERIENCE', payload: parseInt(id) });
            return;
        }
        if (target.closest('.remove-edu-btn')) {
            const id = (target.closest('.remove-edu-btn') as HTMLElement).dataset.id;
            store.dispatch({ type: 'REMOVE_RESUME_EDUCATION', payload: parseInt(id) });
            return;
        }
        if (target.closest('#generate-resume-btn')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'resumePreview' }); return; }
        if (target.closest('#edit-resume-btn')) { store.dispatch({ type: 'NAVIGATE_TO', payload: 'resumeCreator' }); return; }
        if (target.closest('#download-pdf-btn')) { window.print(); return; }

        // Results Actions
        if (target.closest('#print-btn')) { window.print(); return; }
        if (target.closest('#save-btn')) {
            const newResults = [...state.savedResults, state.activeReport];
            localStorage.setItem('careerResults', JSON.stringify(newResults));
            store.dispatch({ type: 'SET_SAVED_RESULTS', payload: newResults });
            // Refresh view to show saved state
            store.dispatch({ type: 'SET_ACTIVE_REPORT', payload: { report: state.activeReport, isNew: false } }); 
            alert(t('reportSaved'));
            return;
        }
        if (target.closest('#email-btn')) {
            const subject = encodeURIComponent(t('emailSubject'));
            const body = encodeURIComponent(t('emailSummaryIntro') + "\n\n" + window.location.href);
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
            return;
        }

        // Feedback
        if (target.closest('.feedback-btn')) {
            const btn = target.closest('.feedback-btn') as HTMLButtonElement;
            const section = btn.closest('.feedback-controls') as HTMLElement;
            const sectionKey = section.dataset.sectionKey;
            const isHelpful = btn.dataset.feedback === 'true';
            if (state.activeReport) {
                saveFeedback(state.activeReport.savedDate, sectionKey, isHelpful);
                renderResults(state);
            }
            return;
        }

        // TTS & Mic
        if (target.closest('.read-text-btn')) {
            const text = (target.closest('.read-text-btn') as HTMLElement).dataset.text;
            speakText(text);
            return;
        }
        if (target.closest('.mic-btn')) {
            const inputId = (target.closest('.mic-btn') as HTMLElement).dataset.target;
            startDictation(inputId);
            return;
        }
    });

    document.body.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        
        // Professions Search
        if (target.id === 'search-professions') {
            store.dispatch({ type: 'SET_PROFESSIONS_STATE', payload: { searchTerm: target.value, page: 1 } });
        }

        // Resume Builder Inputs
        if (target.classList.contains('resume-input')) {
            const field = target.dataset.field;
            store.dispatch({ type: 'UPDATE_RESUME_FIELD', payload: { field, value: target.value } });
        }
        if (target.classList.contains('resume-exp-input')) {
            const id = parseInt(target.dataset.id);
            const field = target.dataset.field;
            store.dispatch({ type: 'UPDATE_RESUME_EXPERIENCE', payload: { id, field, value: target.value } });
        }
        if (target.classList.contains('resume-edu-input')) {
            const id = parseInt(target.dataset.id);
            const field = target.dataset.field;
            store.dispatch({ type: 'UPDATE_RESUME_EDUCATION', payload: { id, field, value: target.value } });
        }
    });

    document.body.addEventListener('submit', (e) => {
        const target = e.target as HTMLElement;
        if (target.id === 'login-form') {
            e.preventDefault();
            const username = (document.getElementById('username') as HTMLInputElement).value;
            const password = (document.getElementById('password') as HTMLInputElement).value;
            if (username === 'admin' && password === 'admin') {
                store.dispatch({ type: 'LOGIN_SUCCESS' });
            } else {
                store.dispatch({ type: 'LOGIN_FAIL', payload: t('invalidCredentials') });
            }
        }
    });
}

loadSavedResults();
initEventListeners();
store.subscribe(renderApp);
renderApp(store.getState());