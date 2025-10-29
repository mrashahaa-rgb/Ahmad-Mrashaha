// Define high-quality, consistent SVG flags for all languages.
const syrianOppositionFlagImg = `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwN2EzZCIvPjxyZWN0IHk9IjIwMCIgd2lkdGg9IjkwMCIgaGVpZGhtPSIyMDAiIGZpbGw9IiNmZmYiLz48cmVjdCB5PSI0MDAiIHdpZHRoPSI5MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwIi8+PGcgZmlsbD0iI2NlMTEyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUwIDMwMCkgc2NhbGUoMjIpIj48ZyBpZD0icyI+PHBhdGggZD0iTTAtMi4zNzc1bDEuNTQ1IDQuNzU1LTQuMDcyLTIuOTM5aDUuMDU0TC0xLjU0NSAyLjM4eiIvPjwvZz48dXNlIGhyZWY9IiNzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIpIi8+PHVzZSBocmVmPSIjcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiLz48dXNlIGhyZWY9IiNzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMikiLz48L2c+PC9zdmc+" alt="Syrian Flag" loading="lazy">`;
const germanFlagImg = `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1IDMiPjxyZWN0IHdpZHRoPSI1IiBoZWlnaHQ9IjEiIHk9IjAiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSIxIiB5PSIxIiBmaWxsPSIjRDAwIi8+PHJlY3QgeT0iMiIgd2lkdGg9IjUiIGhlaWdodD0iMSIgZmlsbD0iI0ZGQ0UwMCIvPjwvc3ZnPg==" alt="German Flag" loading="lazy">`;
const britishFlagImg = `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJNMCAwdjMwaDYwVjB6Ii8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImIiPjxwYXRoIGQ9Ik0zMCAxNWgzMHYxNWgtMzB6TTAgMTVoMzB2MTVoLTMwek0wIDBoMzB2MTVoLTMwek0zMCAwaDMwdjE1aC0zMHoiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0iTTAgMHYzMGg2MFYweiIgZmlsbD0iIzAxMjE2OSIvPjxwYXRoIGQ9Ik0wIDBsNjAgMzBtMC0zMEwwIDMwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIvPjxwYXRoIGQ9Ik0wIDBsNjAgMzBtMC0zMEwwIDMwIiBjbGlwLXBhdGg9InVybCgjYikiIHN0cm9rZT0iI0M4MTAyRSIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTMwIDB2MzBNMCAxNWg2MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIi8+PHBhdGggZD0iTTMwIDB2MzBNMCAxNWg2MCIgc3Ryb2tlPSIjQzgxMDJFIiBzdHJva2Utd2lkdGg9IjYiLz48L2c+PC9zdmc+" alt="British Flag" loading="lazy">`;
const turkishFlagImg = `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2UzMGExNyIvPjxjaXJjbGUgY3g9IjI3NSIgY3k9IjMwMCIgcj0iMTUwIiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMzEyLjUiIGN5PSIzMDAiIHI9IjEyMCIgZmlsbD0iI2UzMGExNyIvPjxwYXRoIGQ9Ik00MjUgMzAwbDExOS41LTM2LjctNzMuOSA5Ni4xVjI0MC42bC03My45IDk2LjF6IiBmaWxsPSIjZmZmIi8+PC9zdmc+" alt="Turkish Flag" loading="lazy">`;
const ukrainianFlagImg = `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDU3QjciLz48cmVjdCB5PSIxIiB3aWR0aD0iMyIgaGVpZ2h0PSIxIiBmaWxsPSIjRkZENzAwIi8+PC9zdmc+" alt="Ukrainian Flag" loading="lazy">`;

export const translations = {
  ar: {
    langName: `${syrianOppositionFlagImg} العربية`,
    dir: "rtl",
    headerTitle: "توجيه مهني مع Ahmad Mrashaha",
    footerText: "© 2025 - تم التطوير بواسطة Ahmad Mrashaha لمساعدتك في العثور على طريقك.",
    welcomeTitle: "اكتشف مسارك المهني المثالي في ألمانيا",
    welcomeDesc: "أجب على 30 سؤالاً دقيقاً حول شخصيتك، مهاراتك، وطموحاتك. سيقوم الذكاء الاصطناعي لدينا بتحليل إجاباتك بعمق لاقتراح أفضل المسارات المهنية، التدريب المهني (Ausbildung)، أو المسارات الدراسية لك.",
    startQuiz: "ابدأ اختبار التوجيه المهني",
    startQuizDesc: "أجب على أسئلتنا المصممة خصيصًا واحصل على تحليل شخصي لمسارك المهني.",
    browseProfessions: "تصفح المهن",
    browseProfessionsDesc: "استكشف قاعدة بياناتنا للمهن والتدريب المهني والمسارات الدراسية.",
    searchAvailableJobs: "ابحث عن وظائف متاحة",
    searchAvailableJobsDesc: "ابحث عن فرص عمل حقيقية متاحة الآن في جميع أنحاء ألمانيا.",
    searchForPraktikum: "ابحث عن تدريب عملي (Praktikum)",
    searchForPraktikumDesc: "اعثر على فرص تدريب عملي وأنشئ رسائل بريد إلكتروني احترافية لتقديم طلبك.",
    professionsDesc: "ابحث وتصفح فرص العمل والتدريب المهني والدراسة الجامعية في ألمانيا.",
    quizIntroTitle: "قبل أن تبدأ",
    quizIntroDesc: "يتكون هذا الاختبار من 30 سؤالاً حول شخصيتك ومهاراتك وطموحاتك. ستساعدنا إجاباتك الصادقة في إنشاء تقرير مفصل مع اقتراحات مهنية مخصصة. لا توجد إجابات صحيحة أو خاطئة، فقط كن على طبيعتك!",
    quizIntroStartBtn: "ابدأ الاختبار",
    back: "الخلف",
    next: "التالي",
    getResults: "احصل على نتائجي",
    loadingTitle: "جاري تحليل شخصيتك...",
    loadingDesc: "يقوم الذكاء الاصطناعي بإعداد تقريرك المهني المفصل. قد يستغرق هذا بضع لحظات.",
    resultsTitleFor: "تقريرك المهني لـ {name}",
    you: "لك",
    personalitySummary: "تحليل شخصيتك المهنية",
    recommendedPaths: "المسارات المهنية الموصى بها",
    careerAdvice: "نصائح مهنية مخصصة",
    restart: "العودة للرئيسية",
    searchPlaceholder: "ابحث عن مهنة...",
    all: "الكل",
    ausbildung: "تدريب مهني",
    study: "دراسة",
    job: "وظيفة",
    duration: "المدة",
    salary: "الراتب",
    requirements: "المتطلبات",
    duties: "الواجبات",
    skillsRequired: "المهارات المطلوبة",
    home: "الرئيسية",
    errorText: "عذراً، حدث خطأ أثناء إنشاء نتائجك. يرجى المحاولة مرة أخرى لاحقاً.",
    answerHere: "اكتب إجابتك هنا...",
    page: "صفحة",
    printReport: "طباعة التقرير",
    emailReport: "إرسال عبر الإيميل",
    saveReport: "حفظ النتائج",
    reportSaved: "تم الحفظ!",
    emailSubject: "تقريري المهني من موقع توجيه مهني",
    jobSearchDesc: "استخدم الذكاء الاصطناعي للبحث عن وظائف أو فرص تدريب مهني متاحة حالياً في ألمانيا. أدخل المسمى الوظيفي والموقع للحصول على نتائج مباشرة.",
    jobTitlePlaceholder: "مثال: مطور برمجيات، ممرض...",
    locationPlaceholder: "مثال: برلين، هامبورغ...",
    search: "بحث",
    jobSearchLoading: "جاري البحث عن وظائف متاحة...",
    jobSearchSources: "عروض العمل المتاحة (المصادر)",
    jobSearchPrompt: "باستخدام بحث جوجل، ابحث عن وظائف أو فرص تدريب مهني (Ausbildung) متاحة حالياً لـ '{jobTitle}' في أو بالقرب من '{location}'، ألمانيا. لا تقدم ملخصًا. قدم فقط روابط المصدر الأصلية التي وجدتها.",
    noJobsFound: "لم يتم العثور على عروض عمل مطابقة.",
    savedReportsTitle: "التقارير المحفوظة",
    anonymousReport: "تقرير بدون اسم",
    viewDetails: "عرض التفاصيل",
    delete: "حذف",
    confirmDeleteReport: "هل أنت متأكد أنك تريد حذف هذا التقرير؟",
    noSavedReports: "لا يوجد تقارير محفوظة بعد.",
    adminLogin: "دخول المسؤول",
    responsibleLogin: "دخول المسؤول",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    login: "تسجيل الدخول",
    invalidCredentials: "اسم المستخدم أو كلمة المرور غير صالحة.",
    logout: "تسجيل الخروج",
    praktikumDesc: "هل تبحث عن تدريب عملي (Praktikum)؟ أدخل المجال الذي تهتم به والمدينة، وسيقوم الذكاء الاصطناعي بالبحث عن شركات مناسبة لك. اختر واحدة، ثم أنشئ مسودة بريد إلكتروني احترافية للاستفسار.",
    fieldPlaceholder: "مثال: تكنولوجيا المعلومات، تسويق، هندسة...",
    yourNamePlaceholder: "اسمك الكامل",
    praktikumSearchBtn: "ابحث عن شركات",
    praktikumCompanyLoading: "جاري البحث عن فرص تدريب...",
    praktikumCompanyResult: "الشركات المقترحة",
    company: "الشركة",
    location: "الموقع",
    select: "اختر",
    selected: "تم الاختيار",
    praktikumGenerateEmailTitle: "أنشئ بريداً إلكترونياً للاستفسار",
    praktikumGenerateEmailBtn: "أنشئ البريد الإلكتروني",
    praktikumEmailLoading: "جاري كتابة بريدك الإلكتروني...",
    praktikumYourEmail: "مسودة بريدك الإلكتروني",
    copyEmail: "نسخ البريد الإلكتروني",
    copied: "تم النسخ!",
    praktikumSearchError: "عذراً، لم نتمكن من العثور على شركات مناسبة. الرجاء محاولة البحث بمصطلحات مختلفة.",
    praktikumNoCompaniesFound: "لم يتم العثور على شركات مطابقة لبحثك. جرب تعديل مصطلحات البحث.",
    praktikumIntroTitle: "طريقك نحو التدريب العملي (Praktikum)",
    praktikumIntroDesc1: "هذه الأداة تستخدم الذكاء الاصطناعي للبحث عن شركات قد توفر فرص تدريب عملي في المجال والموقع الذي تحدده.",
    praktikumIntroDesc2: "بعد اختيار شركة، سنساعدك في إنشاء مسودة بريد إلكتروني احترافية يمكنك إرسالها للاستفسار عن فرصة. أنت من سيقوم بإرسال البريد النهائي.",
    praktikumIntroDisclaimer: "<strong>ملاحظة هامة:</strong> هذه الطريقة هي بمثابة 'طلب غير موجه' (Initiativbewerbung). هذا يعني أن الشركات التي نعثر عليها قد لا تكون قد أعلنت عن وجود شواغر للتدريب. هدفنا هو تمكينك من أخذ زمام المبادرة والتواصل بشكل احترافي، وهو ما يُقدر بشدة في سوق العمل الألماني. الفرصة ليست مضمونة 100%، لكنها خطوة استباقية ممتازة.",
    praktikumIntroStartBtn: "فهمت، لنبدأ البحث",
    praktikumSearchPrompt: "ROLE: High-precision company investigator for the German market.\n\nTASK: Find 5-7 relevant companies in or near '{location}' using Google Search that potentially offer a '{internshipType}' internship in the '{field}' sector. Prioritize official company websites over simple directory listings.\n\nCRITICAL INSTRUCTIONS:\n1.  **ABSOLUTE DATA FIDELITY**: NEVER invent information. If a piece of information (e.g., contact person, email) is NOT EXPLICITLY mentioned in the search results, the value for that field MUST be an empty string `\"\"`.\n2.  **PURE JSON FORMAT**: Your entire response MUST be exclusively a valid JSON array. No introductory text, no comments, no markdown like ```json.\n\nJSON OUTPUT STRUCTURE:\n`[{\"name\": \"Full Official Company Name\", \"address\": \"Street, Postal Code, City\", \"contactPerson\": \"\", \"applicationEmail\": \"\", \"description\": \"A single, concise sentence describing the company's main industry or activity.\", \"website\": \"Official Website URL\"}]`",
    praktikumEmailPrompt: "أنت مساعد مهني ممتاز. اكتب مسودة بريد إلكتروني احترافية ومهذبة باللغة الألمانية. البريد الإلكتروني من '{userName}' إلى '{companyName}' للاستفسار عن تدريب عملي (Praktikum) في مجال '{field}'. الغرض من التدريب هو '{internshipType}'. قم بتكييف المحتوى والنبرة بشكل دقيق جدًا ليتناسب مع نوع التدريب:\n\n- إذا كان النوع 'للمدرسة' (Schülerpraktikum): اكتب كطالب متحمس. اذكر أن هذا تدريب مدرسي إلزامي. اسأل عن الفترة الزمنية الممكنة والمستندات المطلوبة. يجب أن تكون النبرة مهذبة وشبابية.\n- إذا كان النوع 'للتوجيه المهني' (Berufsorientierung): عبر عن اهتمام قوي بالمجال '{field}' وبالشركة. اشرح أن الهدف هو اكتساب رؤى أولية وتسهيل اختيار المهنة. يجب أن تكون النبرة فضولية ومتحمسة.\n- إذا كان النوع 'للأوسبيلدونج' (Ausbildung): اكتب بشكل أكثر رسمية واحترافية. اذكر أن المتقدم يسعى للحصول على تدريب مهني في هذا المجال ويرغب في اكتساب خبرة عملية. أكّد على الدافع لتطبيق المهارات عمليًا.\n\nاستخدم دائمًا تحية مناسبة (Sehr geehrte Damen und Herren,) وصيغة ختامية (Mit freundlichen Grüßen). اسأل عن الشخص المسؤول عن استلام طلبات التقديم.",
    internshipTypeLabel: "نوع التدريب العملي",
    internshipTypePlaceholder: "اختر نوع التدريب...",
    internshipTypeSchool: "للمدرسة",
    internshipTypeAusbildung: "للأوسبيلدونج",
    internshipTypeOrientation: "للتوجيه المهني",
    loading: "جاري التحميل...",
    underMaintenanceShort: "تحت الصيانة",
    underMaintenanceTitle: "هذا القسم تحت الصيانة",
    underMaintenanceDesc: "نحن نعمل حاليًا على تحسين هذا القسم وسيكون متاحًا قريبًا. يمكن للمسؤولين فقط الوصول إليه في الوقت الحالي.",
    systemInstruction: "أنت مستشار مهني خبير ومحلل نفسي متخصص في سوق العمل الألماني. مهمتك هي تحليل إجابات المستخدم {name}، البالغ من العمر {age} عامًا، على 30 سؤالًا لتقديم تقرير مهني مفصل وشخصي للغاية باللغة العربية. يجب أن يكون تحليلك عميقًا، ومشجعًا، وعمليًا. بناءً на الإجابات، قدم تقرير JSON مفصلًا يطابق المخطط. يجب أن يتضمن التقرير تحليلًا دقيقًا للشخصية، و3-4 اقتراحات وظيفية متنوعة جدًا ومناسبة (بما في ذلك Ausbildung والدراسة)، ونصائح مهنية قابلة للتنفيذ. خاطب المستخدم باسمه. يجب أن تكون لهجتك احترافية وداعمة للغاية.",
    promptIntro: "هذه هي بياناتي وإجاباتي على استبيان التوجيه المهني:",
    promptInstruction: "يرجى تقديم تحليلي المهني المفصل بناءً على هذه الإجابات.",
    schemaPersonality: "تحليل عميق ومفصل لشخصية المستخدم المهنية، نقاط القوة، مجالات التطوير، ونمط العمل المثالي، مكتوب بنبرة احترافية ومشجعة باللغة العربية.",
    schemaJobSuggestions: "قائمة من 3-4 اقتراحات مناسبة جدًا لوظائف أو تدريب مهني (Ausbildung) أو دراسة في ألمانيا باللغة العربية.",
    schemaTitle: "اسم الوظيفة أو التدريب المهني أو الدراسة باللغة العربية.",
    schemaDescription: "شرح مفصل ومقنع لماذا يناسب هذا المسار شخصية المستخدم وإجاباته، باللغة العربية.",
    schemaDetails: "تفاصيل رئيسية عملية مثل مدة التدريب، توقعات الراتب، متطلبات اللغة، أو فرص النمو في ألمانيا. باللغة العربية.",
    schemaCompanyName: "اسم الشركة.",
    schemaCompanyAddress: "العنوان الكامل للشركة.",
    schemaCompanyContact: "رقم هاتف الشركة أو البريد الإلكتروني.",
    schemaCompanyWebsite: "الموقع الإلكتروني الرسمي للشركة.",
    viewReports: "عرض التقارير",
    companyWebsite: "الموقع الإلكتروني",
    futureProjectTitle: "مشروع مستقبلي",
    futureProjectDesc: "هذه المساحة محجوزة لميزات جديدة ومثيرة.",
    apiKeyNotConfiguredError: "خطأ في الإعداد: لم يتم العثور على مفتاح API. يرجى التأكد من إضافة متغير بيئة `API_KEY` في إعدادات النشر الخاصة بك.",
    invalidApiKeyError: "عذراً، حدث خطأ. يبدو أن مفتاح API الذي تم إعداده غير صالح أو منتهي الصلاحية. يرجى مراجعة متغيرات البيئة في إعدادات النشر الخاصة بك.",
    apiKeyStatus: "حالة مفتاح API",
    apiKeyStatusDesc: "إذا كنت تواجه مشاكل مع ميزات الذكاء الاصطناعي، استخدم هذا الفحص للتحقق مما إذا كان مفتاح API الخاص بك مهيأً بشكل صحيح ومتصل بخدمات Google.",
    checkApiKey: "فحص المفتاح",
    checkingApiKey: "جاري الفحص...",
    apiKeyStatusOK: "نجاح: مفتاح API صالح ومتصل.",
    apiKeyStatusInvalid: "فشل: مفتاح API غير صالح. يرجى التحقق مرة أخرى من القيمة في متغيرات بيئة Netlify الخاصة بك.",
    apiKeyStatusNotSet: "فشل: مفتاح API غير مهيأ. يرجى إضافة متغير بيئة `API_KEY` في Netlify.",
    wasThisHelpful: "هل كان هذا مفيداً؟",
    yes: "نعم",
    no: "لا",
    feedbackThanks: "شكراً لملاحظاتك!",
    contactPerson: "الشخص المسؤول",
    applicationEmail: "البريد الإلكتروني للتقديم",
    companyDescription: "وصف الشركة",
    notAvailable: "غير متوفر",
    reviews: "تقييمات",
    leaveReview: "اترك تقييمًا",
    rating: "التقييم",
    reviewText: "تقييمك",
    submitReview: "إرسال التقييم",
    noReviewsYet: "لا توجد تقييمات بعد. كن أول من يقيّم!",
    anonymous: "مجهول",
    ratingAndReviewRequired: "التقييم ونص التقييم مطلوبان.",
    emailSummaryIntro: "إليك ملخص لمساراتك المهنية الموصى بها. لعرض التقرير الكامل مع تحليلك الشخصي، يرجى زيارة الموقع أو فتح التقرير المحفوظ.",
    jobOutlookLabel: "الآفاق الوظيفية",
    salaryRangeLabel: "الراتب بعد التدريب",
  },
  de: {
    langName: `${germanFlagImg} Deutsch`,
    dir: "ltr",
    headerTitle: "Berufsberatung mit Ahmad Mrashaha",
    footerText: "© 2025 - Entwickelt von Ahmad Mrashaha, um Ihnen zu helfen, Ihren Weg zu finden.",
    welcomeTitle: "Entdecken Sie Ihren idealen Karriereweg in Deutschland",
    welcomeDesc: "Beantworten Sie 30 präzise Fragen zu Ihrer Persönlichkeit, Ihren Fähigkeiten und Ambitionen. Unsere KI wird Ihre Antworten tiefgehend analysieren, um Ihnen die besten Karrierewege, Ausbildungen oder Studiengänge vorzuschlagen.",
    startQuiz: "Persönlichkeitstest starten",
    startQuizDesc: "Beantworten Sie unsere maßgeschneiderten Fragen und erhalten Sie eine persönliche Analyse Ihres Karrierewegs.",
    browseProfessions: "Berufe durchsuchen",
    browseProfessionsDesc: "Erkunden Sie unsere umfangreiche Datenbank mit Berufen, Ausbildungen und Studiengängen.",
    searchAvailableJobs: "Verfügbare Stellen suchen",
    searchAvailableJobsDesc: "Finden Sie jetzt echte, verfügbare Stellenangebote in ganz Deutschland.",
    searchForPraktikum: "Praktikum suchen",
    searchForPraktikumDesc: "Finden Sie Praktikumsplätze und erstellen Sie professionelle Anfrage-E-Mails.",
    professionsDesc: "Suchen und durchsuchen Sie Hunderte von Stellenangeboten, Ausbildungen und Studiengängen in Deutschland.",
    quizIntroTitle: "Bevor Sie beginnen",
    quizIntroDesc: "Dieses Quiz besteht aus 30 Fragen zu Ihrer Persönlichkeit, Ihren Fähigkeiten und Ihren Zielen. Ihre ehrlichen Antworten helfen uns, einen detaillierten Bericht mit personalisierten Karrierevorschlägen zu erstellen. Es gibt keine richtigen oder falschen Antworten, seien Sie einfach Sie selbst!",
    quizIntroStartBtn: "Quiz starten",
    back: "Zurück",
    next: "Weiter",
    getResults: "Meine Ergebnisse erhalten",
    loadingTitle: "Analysiere deine Persönlichkeit...",
    loadingDesc: "Unsere KI erstellt Ihren personalisierten Karrierebericht. Dies kann einen Moment dauern.",
    resultsTitleFor: "Ihr Karrierebericht für {name}",
    you: "Sie",
    personalitySummary: "Analyse Ihrer beruflichen Persönlichkeit",
    recommendedPaths: "Empfohlene Karrierewege",
    careerAdvice: "Personalisierte Karrieretipps",
    restart: "Zur Startseite",
    searchPlaceholder: "Suche nach einem Beruf...",
    all: "Alle",
    ausbildung: "Ausbildung",
    study: "Studium",
    job: "Job",
    duration: "Dauer",
    salary: "Gehalt",
    requirements: "Voraussetzungen",
    duties: "Aufgaben",
    skillsRequired: "Benötigte Fähigkeiten",
    home: "Startseite",
    errorText: "Entschuldigung, beim Erstellen Ihrer Ergebnisse ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    answerHere: "Geben Sie Ihre Antwort hier ein...",
    page: "Seite",
    printReport: "Bericht drucken",
    emailReport: "Per E-Mail senden",
    saveReport: "Ergebnisse speichern",
    reportSaved: "Gespeichert!",
    emailSubject: "Mein Karrierebericht von Berufsberatung",
    jobSearchDesc: "Nutzen Sie KI, um nach aktuell verfügbaren Jobs oder Ausbildungsplätzen in Deutschland zu suchen. Geben Sie Berufsbezeichnung und Ort ein, um Live-Ergebnisse zu erhalten.",
    jobTitlePlaceholder: "z.B. Softwareentwickler, Pflegefachkraft...",
    locationPlaceholder: "z.B. Berlin, Hamburg...",
    search: "Suchen",
    jobSearchLoading: "Suche nach verfügbaren Stellen...",
    jobSearchSources: "Verfügbare Stellenangebote (Quellen)",
    jobSearchPrompt: "Finde mit Google Search aktuell verfügbare Stellenangebote oder Ausbildungsplätze für '{jobTitle}' in oder bei '{location}', Deutschland. Gib keine Zusammenfassung. Gib nur die originalen Quell-URLs an, die du gefunden hast.",
    noJobsFound: "Keine passenden Stellenangebote gefunden.",
    savedReportsTitle: "Gespeicherte Berichte",
    anonymousReport: "Anonymer Bericht",
    viewDetails: "Details ansehen",
    delete: "Löschen",
    confirmDeleteReport: "Möchten Sie diesen Bericht wirklich löschen?",
    noSavedReports: "Noch keine Berichte gespeichert.",
    adminLogin: "Admin-Login",
    responsibleLogin: "Verantwortlichen-Login",
    username: "Benutzername",
    password: "Passwort",
    login: "Anmelden",
    invalidCredentials: "Ungültiger Benutzername oder Passwort.",
    logout: "Abmelden",
    praktikumDesc: "Suchen Sie ein Praktikum? Geben Sie Ihren Interessenbereich und eine Stadt ein. Die KI findet passende Unternehmen für Sie. Wählen Sie eines aus und erstellen Sie dann einen professionellen E-Mail-Entwurf für Ihre Anfrage.",
    fieldPlaceholder: "z.B. IT, Marketing, Ingenieurwesen...",
    yourNamePlaceholder: "Ihr vollständiger Name",
    praktikumSearchBtn: "Unternehmen suchen",
    praktikumCompanyLoading: "Suche nach Praktikumsplatz...",
    praktikumCompanyResult: "Vorgeschlagene Unternehmen",
    company: "Unternehmen",
    location: "Standort",
    select: "Wählen",
    selected: "Ausgewählt",
    praktikumGenerateEmailTitle: "Anfrage-E-Mail erstellen",
    praktikumGenerateEmailBtn: "E-Mail erstellen",
    praktikumEmailLoading: "Schreibe deine E-Mail...",
    praktikumYourEmail: "Ihr E-Mail-Entwurf",
    copyEmail: "E-Mail kopieren",
    copied: "Kopiert!",
    praktikumSearchError: "Leider konnten wir keine passenden Unternehmen finden. Bitte versuchen Sie es mit anderen Suchbegriffen.",
    praktikumNoCompaniesFound: "Keine passenden Unternehmen für Ihre Suche gefunden. Versuchen Sie, Ihre Suchbegriffe anzupassen.",
    praktikumIntroTitle: "Ihr Weg zum Praktikum",
    praktikumIntroDesc1: "Dieses Tool nutzt KI, um Unternehmen zu finden, die möglicherweise Praktikumsplätze in Ihrem gewünschten Bereich und Ort anbieten.",
    praktikumIntroDesc2: "Nachdem Sie ein Unternehmen ausgewählt haben, helfen wir Ihnen, einen professionellen E-Mail-Entwurf zu erstellen, den Sie zur Anfrage versenden können. Sie selbst senden die endgültige E-Mail.",
    praktikumIntroDisclaimer: "<strong>Wichtiger Hinweis:</strong> Diese Methode ist eine Initiativbewerbung. Das bedeutet, die gefundenen Unternehmen haben möglicherweise keine offenen Praktikumsstellen ausgeschrieben. Unser Ziel ist es, Sie zu befähigen, die Initiative zu ergreifen und professionell Kontakt aufzunehmen, was auf dem deutschen Arbeitsmarkt sehr geschätzt wird. Eine Zusage ist nicht zu 100% garantiert, aber es ist ein exzellenter, proaktiver Schritt.",
    praktikumIntroStartBtn: "Verstanden, Suche starten",
    praktikumSearchPrompt: "ROLLE: Hochpräziser Unternehmens-Ermittler für den deutschen Markt.\n\nAUFGABE: Finde über die Google-Suche 5-7 relevante Unternehmen in oder nahe bei '{location}', die potenziell ein '{internshipType}' im Bereich '{field}' anbieten. Priorisiere offizielle Firmenwebsites gegenüber reinen Verzeichniseinträgen.\n\nKRITISCHE ANWEISUNGEN:\n1.  **ABSOLUTE DATENTREUE**: Erfinde NIEMALS Informationen. Wenn eine Information (z.B. Ansprechpartner, E-Mail) in den Suchergebnissen NICHT EXPLIZIT genannt wird, MUSS der Wert für dieses Feld ein leerer String `\"\"` sein.\n2.  **REINES JSON-FORMAT**: Deine Antwort MUSS ausschließlich ein valides JSON-Array sein. Kein einleitender Text, keine Kommentare, kein Markdown wie ```json.\n\nJSON-AUSGABESTRUKTUR:\n`[{\"name\": \"Vollständiger offizieller Firmenname\", \"address\": \"Straße, PLZ, Ort\", \"contactPerson\": \"\", \"applicationEmail\": \"\", \"description\": \"Ein kurzer Satz, der die Hauptbranche oder Tätigkeit des Unternehmens beschreibt.\", \"website\": \"Offizielle Website-URL\"}]`",
    praktikumEmailPrompt: "Betreff: Anfrage für ein {internshipType} im Bereich {field}\n\nSehr geehrte Damen und Herren,\n\nmein Name ist {userName} und ich habe großes Interesse an einer beruflichen Zukunft im Bereich {field}. Auf der Suche nach praktischen Erfahrungen bin ich auf Ihr Unternehmen, {companyName}, aufmerksam geworden.\n\nHiermit möchte ich höflich anfragen, ob in Ihrem Unternehmen die Möglichkeit besteht, ein {internshipType} zu absolvieren. Ich bin sehr motiviert, von Experten zu lernen und meine Fähigkeiten in einem professionellen Umfeld einzubringen.\n\nÜber eine positive Rückmeldung und Informationen, an wen ich eine formelle Bewerbung richten kann, würde ich mich sehr freuen.\n\nVielen Dank für Ihre Zeit und Mühe.\n\nMit freundlichen Grüßen\n{userName}",
    internshipTypeLabel: "Art des Praktikums",
    internshipTypePlaceholder: "Art des Praktikums wählen...",
    internshipTypeSchool: "Schülerpraktikum",
    internshipTypeAusbildung: "Praktikum zur Berufsausbildung",
    internshipTypeOrientation: "Praktikum zur Berufsorientierung",
    loading: "Wird geladen...",
    underMaintenanceShort: "Wird gewartet",
    underMaintenanceTitle: "Dieser Bereich wird derzeit gewartet",
    underMaintenanceDesc: "Wir arbeiten derzeit an der Verbesserung dieses Bereichs. Er wird in Kürze verfügbar sein. Nur Administratoren können derzeit darauf zugreifen.",
    systemInstruction: "Sie sind ein erfahrener Karriereberater und Psychologe, spezialisiert auf den deutschen Arbeitsmarkt. Ihre Aufgabe ist es, die Antworten von {name}, {age} Jahre alt, auf 30 Fragen zu analysieren, um einen sehr detaillierten und persönlichen Karrierebericht auf Deutsch zu erstellen. Ihre Analyse muss tiefgründig, ermutigend und praktisch sein. Erstellen Sie basierend auf den Antworten einen detaillierten JSON-bericht, der dem Schema entspricht. Der Bericht muss eine genaue Persönlichkeitsanalyse, 3-4 sehr passende und vielfältige Jobvorschläge (einschließlich Ausbildung und Studium) und umsetzbare Karrieretipps enthalten. Sprechen Sie den Benutzer mit seinem Namen an. Ihr Ton muss professionell und sehr unterstützend sein.",
    promptIntro: "Hier sind meine Daten und Antworten auf den Karriere-Fragebogen:",
    promptInstruction: "Bitte erstellen Sie meine detaillierte Karriereanalyse basierend auf diesen Antworten.",
    schemaPersonality: "Eine tiefgehende und detaillierte Analyse der beruflichen Persönlichkeit, Stärken, Entwicklungsbereiche und des idealen Arbeitsstils des Benutzers, in einem professionellen und ermutigenden Ton auf Deutsch verfasst.",
    schemaJobSuggestions: "Eine Liste von 3-4 sehr passenden Vorschlägen für Jobs, Ausbildungen oder Studiengänge in Deutschland auf Deutsch.",
    schemaTitle: "Der Name des Jobs, der Ausbildung oder des Studiums auf Deutsch.",
    schemaDescription: "Eine detaillierte und überzeugende Erklärung, warum dieser Weg zur Persönlichkeit und den Antworten des Benutzers passt, auf Deutsch.",
    schemaDetails: "Wichtige, praktische Details wie Ausbildungsdauer, Gehaltsaussichten, Sprachanforderungen oder Wachstumschancen in Deutschland. Auf Deutsch.",
    schemaCompanyName: "Der Name des Unternehmens.",
    schemaCompanyAddress: "Die vollständige Adresse des Unternehmens.",
    schemaCompanyContact: "Telefonnummer oder E-Mail-Adresse des Unternehmens.",
    schemaCompanyWebsite: "Die offizielle Webseite des Unternehmens.",
    viewReports: "Berichte anzeigen",
    companyWebsite: "Webseite",
    futureProjectTitle: "Zukünftiges Projekt",
    futureProjectDesc: "Dieser Bereich ist für neue und aufregende Funktionen reserviert.",
    apiKeyNotConfiguredError: "Konfigurationsfehler: API-Schlüssel nicht gefunden. Bitte stellen Sie sicher, dass Sie eine `API_KEY`-Umgebungsvariable in Ihren Bereitstellungseinstellungen hinzugefügt haben.",
    invalidApiKeyError: "Entschuldigung, ein Fehler ist aufgetreten. Es scheint, dass der konfigurierte API-Schlüssel ungültig oder abgelaufen ist. Bitte überprüfen Sie Ihre Umgebungsvariablen in den Bereitstellungseinstellungen.",
    apiKeyStatus: "API-Schlüssel-Status",
    apiKeyStatusDesc: "Wenn Sie Probleme mit den KI-Funktionen haben, verwenden Sie diesen Test, um zu überprüfen, ob Ihr API-Schlüssel korrekt konfiguriert und mit den Google-Diensten verbunden ist.",
    checkApiKey: "Schlüssel prüfen",
    checkingApiKey: "Prüfung läuft...",
    apiKeyStatusOK: "Erfolg: API-Schlüssel ist gültig und verbunden.",
    apiKeyStatusInvalid: "Fehler: API-Schlüssel ist ungültig. Bitte überprüfen Sie den Wert in Ihren Netlify-Umgebungsvariablen.",
    apiKeyStatusNotSet: "Fehler: API-Schlüssel nicht konfiguriert. Bitte fügen Sie die `API_KEY`-Umgebungsvariable in Netlify hinzu.",
    wasThisHelpful: "War das hilfreich?",
    yes: "Ja",
    no: "Nein",
    feedbackThanks: "Danke für dein Feedback!",
    contactPerson: "Ansprechpartner",
    applicationEmail: "Bewerbungs-E-Mail",
    companyDescription: "Firmenbeschreibung",
    notAvailable: "Nicht verfügbar",
    reviews: "Bewertungen",
    leaveReview: "Bewertung abgeben",
    rating: "Bewertung",
    reviewText: "Ihre Bewertung",
    submitReview: "Bewertung absenden",
    noReviewsYet: "Noch keine Bewertungen. Seien Sie der Erste!",
    anonymous: "Anonym",
    ratingAndReviewRequired: "Bewertung und Bewertungstext sind erforderlich.",
    emailSummaryIntro: "Hier ist eine Zusammenfassung Ihrer empfohlenen Karrierewege. Um den vollständigen Bericht mit Ihrer persönlichen Analyse einzusehen, besuchen Sie bitte die Website oder öffnen Sie den gespeicherten Bericht.",
    jobOutlookLabel: "Berufsaussichten",
    salaryRangeLabel: "Gehalt nach Ausbildung",
  },
  en: {
    langName: `${britishFlagImg} English`,
    dir: "ltr",
    headerTitle: "Career Guidance with Ahmad Mrashaha",
    footerText: "© 2025 - Developed by Ahmad Mrashaha to help you find your way.",
    welcomeTitle: "Discover Your Ideal Career Path in Germany",
    welcomeDesc: "Answer 30 precise questions about your personality, skills, and ambitions. Our AI will deeply analyze your answers to suggest the best career paths, vocational training (Ausbildung), or university programs for you.",
    startQuiz: "Start Career Quiz",
    startQuizDesc: "Answer our tailor-made questions and get a personal analysis of your career path.",
    browseProfessions: "Browse Professions",
    browseProfessionsDesc: "Explore our database of professions, vocational training, and study paths.",
    searchAvailableJobs: "Search Available Jobs",
    searchAvailableJobsDesc: "Find real, available job opportunities across Germany right now.",
    searchForPraktikum: "Search for Internships (Praktikum)",
    searchForPraktikumDesc: "Find internship opportunities and generate professional inquiry emails.",
    professionsDesc: "Search and browse job opportunities, vocational training, and university studies in Germany.",
    quizIntroTitle: "Before You Begin",
    quizIntroDesc: "This quiz consists of 30 questions about your personality, skills, and ambitions. Your honest answers will help us create a detailed report with personalized career suggestions. There are no right or wrong answers, just be yourself!",
    quizIntroStartBtn: "Start Quiz",
    back: "Back",
    next: "Next",
    getResults: "Get My Results",
    loadingTitle: "Analyzing your personality...",
    loadingDesc: "Our AI is preparing your detailed career report. This might take a moment.",
    resultsTitleFor: "Your Career Report for {name}",
    you: "You",
    personalitySummary: "Your Professional Personality Analysis",
    recommendedPaths: "Recommended Career Paths",
    careerAdvice: "Personalized Career Advice",
    restart: "Back to Home",
    searchPlaceholder: "Search for a profession...",
    all: "All",
    ausbildung: "Vocational Training",
    study: "Study",
    job: "Job",
    duration: "Duration",
    salary: "Salary",
    requirements: "Requirements",
    duties: "Duties",
    skillsRequired: "Skills Required",
    home: "Home",
    errorText: "Sorry, an error occurred while generating your results. Please try again later.",
    answerHere: "Type your answer here...",
    page: "Page",
    printReport: "Print Report",
    emailReport: "Email Report",
    saveReport: "Save Results",
    reportSaved: "Saved!",
    emailSubject: "My Career Report from Career Guidance",
    jobSearchDesc: "Use AI to search for currently available jobs or vocational training opportunities in Germany. Enter the job title and location to get live results.",
    jobTitlePlaceholder: "e.g., Software Developer, Nurse...",
    locationPlaceholder: "e.g., Berlin, Hamburg...",
    search: "Search",
    jobSearchLoading: "Searching for available jobs...",
    jobSearchSources: "Available Job Openings (Sources)",
    jobSearchPrompt: "Using Google Search, find currently available jobs or vocational training (Ausbildung) opportunities for '{jobTitle}' in or near '{location}', Germany. Do not provide a summary. Only provide the original source links you found.",
    noJobsFound: "No matching job openings found.",
    savedReportsTitle: "Saved Reports",
    anonymousReport: "Anonymous Report",
    viewDetails: "View Details",
    delete: "Delete",
    confirmDeleteReport: "Are you sure you want to delete this report?",
    noSavedReports: "No saved reports yet.",
    adminLogin: "Admin Login",
    responsibleLogin: "Responsible Login",
    username: "Username",
    password: "Password",
    login: "Login",
    invalidCredentials: "Invalid username or password.",
    logout: "Logout",
    praktikumDesc: "Looking for an internship (Praktikum)? Enter your field of interest and a city, and the AI will find suitable companies for you. Select one, then generate a professional email draft to inquire.",
    fieldPlaceholder: "e.g., IT, Marketing, Engineering...",
    yourNamePlaceholder: "Your full name",
    praktikumSearchBtn: "Search for Companies",
    praktikumCompanyLoading: "Searching for internship opportunities...",
    praktikumCompanyResult: "Suggested Companies",
    company: "Company",
    location: "Location",
    select: "Select",
    selected: "Selected",
    praktikumGenerateEmailTitle: "Generate an Inquiry Email",
    praktikumGenerateEmailBtn: "Generate Email",
    praktikumEmailLoading: "Writing your email...",
    praktikumYourEmail: "Your Email Draft",
    copyEmail: "Copy Email",
    copied: "Copied!",
    praktikumSearchError: "Sorry, we could not find suitable companies. Please try different search terms.",
    praktikumNoCompaniesFound: "No matching companies found for your search. Try adjusting your search terms.",
    praktikumIntroTitle: "Your Path to an Internship (Praktikum)",
    praktikumIntroDesc1: "This tool uses AI to find companies that might offer internship opportunities in your desired field and location.",
    praktikumIntroDesc2: "After selecting a company, we will help you generate a professional email draft that you can send to inquire about an opportunity. You will send the final email yourself.",
    praktikumIntroDisclaimer: "<strong>Important Note:</strong> This method is an 'unsolicited application' (Initiativbewerbung). This means the companies we find may not have publicly advertised internship vacancies. Our goal is to empower you to take the initiative and make professional contact, which is highly valued in the German job market. An opportunity is not 100% guaranteed, but it is an excellent, proactive step.",
    praktikumIntroStartBtn: "Understood, Let's Start Searching",
    praktikumSearchPrompt: "ROLE: High-precision company investigator for the German market.\n\nTASK: Using Google Search, find 5-7 relevant companies in or near '{location}' that potentially offer a '{internshipType}' in the '{field}' sector. Prioritize official company websites over simple directory listings.\n\nCRITICAL INSTRUCTIONS:\n1.  **ABSOLUTE DATA FIDELITY**: NEVER invent information. If a piece of information (e.g., contact person, email) is NOT EXPLICITLY mentioned in the search results, the value for that field MUST be an empty string `\"\"`.\n2.  **PURE JSON FORMAT**: Your entire response MUST be exclusively a valid JSON array. No introductory text, no comments, no markdown like ```json.\n\nJSON OUTPUT STRUCTURE:\n`[{\"name\": \"Full Official Company Name\", \"address\": \"Street, Postal Code, City\", \"contactPerson\": \"\", \"applicationEmail\": \"\", \"description\": \"A single, concise sentence describing the company's main industry or activity.\", \"website\": \"Official Website URL\"}]`",
    praktikumEmailPrompt: "You are an excellent career assistant. Write a professional and polite draft email in GERMAN. The email is from '{userName}' to '{companyName}' to inquire about an internship (Praktikum) in the '{field}' field. The purpose of the internship is '{internshipType}'. Adapt the content and tone VERY precisely to match the internship type:\n\n- If the type is 'for school' (Schülerpraktikum): Write as a motivated student. Mention this is a mandatory school internship. Ask about possible time frames and required documents. The tone should be polite and youthful.\n- If the type is 'for career orientation' (Berufsorientierung): Express strong interest in the '{field}' area and the company. Explain that the goal is to gain initial insights and facilitate career choice. The tone should be curious and enthusiastic.\n- If the type is 'for vocational training' (Ausbildung): Write more formally and professionally. State that the applicant is seeking vocational training in this field and wants to gain practical experience. Emphasize the motivation to apply skills practically.\n\nAlways use a proper salutation (Sehr geehrte Damen und Herren,) and closing (Mit freundlichen Grüßen). Ask about the right contact person for applications.",
    internshipTypeLabel: "Type of Internship",
    internshipTypePlaceholder: "Select internship type...",
    internshipTypeSchool: "For School",
    internshipTypeAusbildung: "For Vocational Training",
    internshipTypeOrientation: "For Career Orientation",
    loading: "Loading...",
    underMaintenanceShort: "Under Maintenance",
    underMaintenanceTitle: "This Section is Under Maintenance",
    underMaintenanceDesc: "We are currently working on improving this section and it will be available soon. Only administrators can currently access it.",
    systemInstruction: "You are an expert career advisor and psychologist specializing in the German job market. Your task is to analyze the answers of {name}, age {age}, to 30 questions to create a very detailed and highly personal career report in English. Your analysis must be profound, encouraging, and practical. Based on the answers, create a detailed JSON report that matches the schema. The report must include an accurate personality analysis, 3-4 very suitable and diverse job suggestions (including Ausbildung and university studies), and actionable career advice. Address the user by their name. Your tone must be professional and very supportive.",
    promptIntro: "Here is my data and my answers to the career guidance questionnaire:",
    promptInstruction: "Please provide my detailed career analysis based on these answers.",
    schemaPersonality: "A deep and detailed analysis of the user's professional personality, strengths, areas for development, and ideal work style, written in a professional and encouraging tone in English.",
    schemaJobSuggestions: "A list of 3-4 very suitable suggestions for jobs, vocational training (Ausbildung), or university studies in Germany, in English.",
    schemaTitle: "The name of the job, vocational training, or study program, in English.",
    schemaDescription: "A detailed and convincing explanation of why this path fits the user's personality and answers, in English.",
    schemaDetails: "Key, practical details such as training duration, salary expectations, language requirements, or growth opportunities in Germany. In English.",
    schemaCompanyName: "The name of the company.",
    schemaCompanyAddress: "The full address of the company.",
    schemaCompanyContact: "The company's phone number or email address.",
    schemaCompanyWebsite: "The official website of the company.",
    viewReports: "View Reports",
    companyWebsite: "Website",
    futureProjectTitle: "Future Project",
    futureProjectDesc: "This space is reserved for new and exciting features.",
    apiKeyNotConfiguredError: "Configuration Error: API key not found. Please ensure you have added an `API_KEY` environment variable in your deployment settings.",
    invalidApiKeyError: "Sorry, an error occurred. It seems the configured API key is invalid or has expired. Please check your environment variables in your deployment settings.",
    apiKeyStatus: "API Key Status",
    apiKeyStatusDesc: "If you are experiencing issues with the AI features, use this checker to verify if your API key is correctly configured and connected to Google's services.",
    checkApiKey: "Check Key",
    checkingApiKey: "Checking...",
    apiKeyStatusOK: "Success: API key is valid and connected.",
    apiKeyStatusInvalid: "Failure: API key is invalid. Please double-check the value in your Netlify environment variables.",
    apiKeyStatusNotSet: "Failure: API key is not configured. Please add the `API_KEY` environment variable in Netlify.",
    wasThisHelpful: "Was this helpful?",
    yes: "Yes",
    no: "No",
    feedbackThanks: "Thanks for your feedback!",
    contactPerson: "Contact Person",
    applicationEmail: "Application Email",
    companyDescription: "Company Description",
    notAvailable: "Not available",
    reviews: "Reviews",
    leaveReview: "Leave a Review",
    rating: "Rating",
    reviewText: "Your Review",
    submitReview: "Submit Review",
    noReviewsYet: "No reviews yet. Be the first!",
    anonymous: "Anonymous",
    ratingAndReviewRequired: "Rating and review text are required.",
    emailSummaryIntro: "Here is a summary of your recommended career paths. To view the full report with your personal analysis, please visit the website or open the saved report.",
    jobOutlookLabel: "Job Outlook",
    salaryRangeLabel: "Salary (Post-Training)",
  },
  tr: {
    langName: `${turkishFlagImg} Türkçe`,
    dir: "ltr",
    headerTitle: "Ahmad Mrashaha ile Kariyer Rehberliği",
    footerText: "© 2025 - Yolunuzu bulmanıza yardımcı olmak için Ahmad Mrashaha tarafından geliştirildi.",
    welcomeTitle: "Almanya'daki İdeal Kariyer Yolunuzu Keşfedin",
    welcomeDesc: "Kişiliğiniz, becerileriniz ve hedefleriniz hakkında 30 hassas soruyu yanıtlayın. Yapay zekamız, size en iyi kariyer yollarını, mesleki eğitimi (Ausbildung) veya üniversite programlarını önermek için cevaplarınızı derinlemesine analiz edecektir.",
    startQuiz: "Kişilik Testine Başla",
    startQuizDesc: "Size özel hazırlanmış sorularımızı yanıtlayın ve kariyer yolunuzun kişisel bir analizini alın.",
    browseProfessions: "Mesleklere Göz At",
    browseProfessionsDesc: "Geniş meslek, mesleki eğitim ve üniversite programları veritabanımızı keşfedin.",
    searchAvailableJobs: "Mevcut İşleri Ara",
    searchAvailableJobsDesc: "Almanya genelinde şu anda mevcut olan gerçek iş fırsatlarını bulun.",
    searchForPraktikum: "Staj Ara (Praktikum)",
    searchForPraktikumDesc: "Staj yerleri bulun ve profesyonel başvuru e-postaları oluşturun.",
    professionsDesc: "Almanya'daki yüzlerce iş, mesleki eğitim ve üniversite fırsatını arayın ve inceleyin.",
    quizIntroTitle: "Başlamadan Önce",
    quizIntroDesc: "Bu test, kişiliğiniz, becerileriniz ve hedefleriniz hakkında 30 sorudan oluşmaktadır. Dürüst cevaplarınız, kişiselleştirilmiş kariyer önerileri içeren ayrıntılı bir rapor oluşturmamıza yardımcı olacaktır. Doğru ya da yanlış cevap yoktur, sadece kendiniz olun!",
    quizIntroStartBtn: "Teste Başla",
    back: "Geri",
    next: "İleri",
    getResults: "Sonuçlarımı Al",
    loadingTitle: "Kişiliğiniz analiz ediliyor...",
    loadingDesc: "Yapay zeka kişiselleştirilmiş kariyer raporunuzu hazırlıyor. Bu birkaç dakika sürebilir.",
    resultsTitleFor: "{name} için Kariyer Raporun",
    you: "Sizin",
    personalitySummary: "Profesyonel Kişilik Analiziniz",
    recommendedPaths: "Önerilen Kariyer Yolları",
    careerAdvice: "Kişiselleştirilmiş Kariyer Tavsiyeleri",
    restart: "Ana Sayfaya Dön",
    searchPlaceholder: "Bir meslek arayın...",
    all: "Tümü",
    ausbildung: "Mesleki Eğitim",
    study: "Üniversite",
    job: "İş",
    duration: "Süre",
    salary: "Maaş",
    requirements: "Gereksinimler",
    duties: "Görevler",
    skillsRequired: "Gerekli Beceriler",
    home: "Ana Sayfa",
    errorText: "Üzgünüz, sonuçlarınız oluşturulurken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    answerHere: "Cevabınızı buraya yazın...",
    page: "Sayfa",
    printReport: "Raporu Yazdır",
    emailReport: "E-posta ile Gönder",
    saveReport: "Sonuçları Kaydet",
    reportSaved: "Kaydedildi!",
    emailSubject: "Kariyer Rehberliği'nden Kariyer Raporum",
    jobSearchDesc: "Almanya'da mevcut işleri veya mesleki eğitim fırsatlarını aramak için yapay zekayı kullanın. Canlı sonuçlar almak için iş unvanını ve konumu girin.",
    jobTitlePlaceholder: "Örn: Yazılım Geliştirici, Hemşire...",
    locationPlaceholder: "Örn: Berlin, Hamburg...",
    search: "Ara",
    jobSearchLoading: "Mevcut işler aranıyor...",
    jobSearchSources: "Mevcut İş İlanları (Kaynaklar)",
    jobSearchPrompt: "Google Arama'yı kullanarak, Almanya'da '{location}' veya yakınında '{jobTitle}' için mevcut iş veya mesleki eğitim (Ausbildung) ilanlarını bulun. Bir özet sunmayın. Sadece bulduğunuz orijinal kaynak URL'lerini sağlayın.",
    noJobsFound: "Uygun iş ilanı bulunamadı.",
    savedReportsTitle: "Kayıtlı Raporlar",
    anonymousReport: "İsimsiz Rapor",
    viewDetails: "Detayları Görüntüle",
    delete: "Sil",
    confirmDeleteReport: "Bu raporu silmek istediğinizden emin misiniz?",
    noSavedReports: "Henüz kayıtlı rapor yok.",
    adminLogin: "Yönetici Girişi",
    responsibleLogin: "Sorumlu Girişi",
    username: "Kullanıcı Adı",
    password: "Şifre",
    login: "Giriş Yap",
    invalidCredentials: "Geçersiz kullanıcı adı veya şifre.",
    logout: "Çıkış Yap",
    praktikumDesc: "Staj mı arıyorsunuz? İlgilendiğiniz alanı ve bir şehri girin. Yapay zeka sizin için uygun şirketleri bulacaktır. Birini seçin ve ardından profesyonel bir başvuru e-postası taslağı oluşturun.",
    fieldPlaceholder: "Örn: Bilişim, Pazarlama, Mühendislik...",
    yourNamePlaceholder: "Tam adınız",
    praktikumSearchBtn: "Şirketleri Ara",
    praktikumCompanyLoading: "Staj fırsatları aranıyor...",
    praktikumCompanyResult: "Önerilen Şirketler",
    company: "Şirket",
    location: "Konum",
    select: "Seç",
    selected: "Seçildi",
    praktikumGenerateEmailTitle: "Soru E-postası Oluştur",
    praktikumGenerateEmailBtn: "E-posta Oluştur",
    praktikumEmailLoading: "E-postanız yazılıyor...",
    praktikumYourEmail: "E-posta Taslağınız",
    copyEmail: "E-postayı Kopyala",
    copied: "Kopyalandı!",
    praktikumSearchError: "Üzgünüz, uygun şirket bulamadık. Lütfen farklı arama terimleri deneyin.",
    praktikumNoCompaniesFound: "Aramanızla eşleşen şirket bulunamadı. Arama terimlerinizi değiştirmeyi deneyin.",
    praktikumIntroTitle: "Staj Yolunuz (Praktikum)",
    praktikumIntroDesc1: "Bu araç, istediğiniz alanda ve konumda staj imkanı sunabilecek şirketleri bulmak için yapay zekayı kullanır.",
    praktikumIntroDesc2: "Bir şirket seçtikten sonra, başvuru yapmak için gönderebileceğiniz profesyonel bir e-posta taslağı oluşturmanıza yardımcı olacağız. Son e-postayı kendiniz göndereceksiniz.",
    praktikumIntroDisclaimer: "<strong>Önemli Not:</strong> Bu yöntem bir 'talep dışı başvuru' (Initiativbewerbung) niteliğindedir. Bu, bulduğumuz şirketlerin halka açık stajyer ilanları olmayabileceği anlamına gelir. Amacımız, Alman iş piyasasında çok değer verilen inisiyatif almanızı ve profesyonel iletişim kurmanızı sağlamaktır. Bir fırsat %100 garanti edilmez, ancak bu mükemmel ve proaktif bir adımdır.",
    praktikumIntroStartBtn: "Anlaşıldı, Aramaya Başlayalım",
    praktikumSearchPrompt: "ROL: Alman pazarı için yüksek hassasiyetli şirket araştırmacısı.\n\nGÖREV: Google Arama'yı kullanarak '{location}' veya yakınlarında, '{field}' sektöründe potansiyel olarak bir '{internshipType}' sunan 5-7 ilgili şirket bulun. Basit dizin listelemeleri yerine resmi şirket web sitelerine öncelik verin.\n\nKRİTİK TALİMATLAR:\n1.  **MUTLAK VERİ DOĞRULUĞU**: ASLA bilgi uydurmayın. Bir bilgi (örneğin, iletişim kişisi, e-posta) arama sonuçlarında AÇIKÇA belirtilmemişse, o alanın değeri MUTLAKA boş bir dize `\"\"` olmalıdır.\n2.  **SAF JSON FORMATI**: Tüm yanıtınız SADECE geçerli bir JSON dizisi olmalıdır. Giriş metni, yorum veya ```json gibi markdown içermemelidir.\n\nJSON ÇIKTI YAPISI:\n`[{\"name\": \"Tam Resmi Şirket Adı\", \"address\": \"Sokak, Posta Kodu, Şehir\", \"contactPerson\": \"\", \"applicationEmail\": \"\", \"description\": \"Şirketin ana endüstrisini veya faaliyetini tanımlayan tek ve öz bir cümle.\", \"website\": \"Resmi Web Sitesi URL'si\"}]`",
    praktikumEmailPrompt: "Harika bir kariyer asistanısın. ALMANCA dilinde profesyonel ve kibar bir e-posta taslağı yaz. E-posta, '{userName}' tarafından '{companyName}' şirketine '{field}' alanında bir staj (Praktikum) hakkında bilgi almak için yazılmıştır. Stajın amacı '{internshipType}'. İçeriği ve tonu, staj türüne ÇOK hassas bir şekilde uyarlayın:\n\n- Tür 'okul için' (Schülerpraktikum) ise: Motive bir öğrenci olarak yazın. Bunun zorunlu bir okul stajı olduğunu belirtin. Olası zaman dilimlerini ve gerekli belgeleri sorun. Ton kibar ve genç olmalıdır.\n- Tür 'kariyer yönelimi için' (Berufsorientierung) ise: '{field}' alanına ve şirkete güçlü bir ilgi ifade edin. Amacın ilk izlenimleri kazanmak ve kariyer seçimini kolaylaştırmak olduğunu açıklayın. Ton meraklı ve hevesli olmalıdır.\n- Tür 'mesleki eğitim için' (Ausbildung) ise: Daha resmi ve profesyonel bir şekilde yazın. Başvuranın bu alanda mesleki eğitim aradığını ve pratik deneyim kazanmak istediğini belirtin. Becerileri pratik olarak uygulama motivasyonunu vurgulayın.\n\nHer zaman uygun bir selamlama (Sehr geehrte Damen und Herren,) ve kapanış (Mit freundlichen Grüßen) kullanın. Başvurular için doğru iletişim kişisini sorun.",
    internshipTypeLabel: "Staj Türü",
    internshipTypePlaceholder: "Staj türünü seçin...",
    internshipTypeSchool: "Okul İçin",
    internshipTypeAusbildung: "Mesleki Eğitim İçin",
    internshipTypeOrientation: "Kariyer Yönelimi İçin",
    loading: "Yükleniyor...",
    underMaintenanceShort: "Bakımda",
    underMaintenanceTitle: "Bu Bölüm Bakımda",
    underMaintenanceDesc: "Şu anda bu bölümü geliştirmek için çalışıyoruz ve yakında kullanıma sunulacak. Şu anda sadece yöneticiler erişebilir.",
    systemInstruction: "Alman iş piyasasında uzmanlaşmış bir uzman kariyer danışmanı ve psikologsunuz. Göreviniz, {name}, yaş {age}, tarafından 30 soruya verilen cevapları analiz ederek Türkçe dilinde çok detaylı ve son derece kişisel bir kariyer raporu oluşturmaktır. Analiziniz derin, teşvik edici ve pratik olmalıdır. Cevaplara dayanarak, şemaya uygun detaylı bir JSON raporu oluşturun. Rapor, doğru bir kişilik analizi, 3-4 çok uygun ve çeşitli iş önerisi (Ausbildung ve üniversite dahil) ve uygulanabilir kariyer tavsiyeleri içermelidir. Kullanıcıya adıyla hitap edin. Tonunuz profesyonel ve çok destekleyici olmalıdır.",
    promptIntro: "İşte kariyer rehberliği anketine verdiğim verilerim ve cevaplarım:",
    promptInstruction: "Lütfen bu cevaplara dayanarak detaylı kariyer analizimi sağlayın.",
    schemaPersonality: "Kullanıcının profesyonel kişiliğinin, güçlü yönlerinin, gelişim alanlarının ve ideal çalışma tarzının, profesyonel ve teşvik edici bir tonda Türkçe olarak yazılmış derin ve detaylı bir analizi.",
    schemaJobSuggestions: "Almanya'da işler, mesleki eğitim (Ausbildung) veya üniversite çalışmaları için çok uygun 3-4 öneriden oluşan bir liste, Türkçe.",
    schemaTitle: "İşin, mesleki eğitimin veya üniversite programının adı, Türkçe.",
    schemaDescription: "Bu yolun neden kullanıcının kişiliğine ve cevaplarına uyduğunun detaylı ve ikna edici bir açıklaması, Türkçe.",
    schemaDetails: "Eğitim süresi, maaş beklentileri, dil gereksinimleri veya Almanya'daki büyüme fırsatları gibi önemli, pratik detaylar. Türkçe.",
    schemaCompanyName: "Şirketin adı.",
    schemaCompanyAddress: "Şirketin tam adresi.",
    schemaCompanyContact: "Şirketin telefon numarası veya e-posta adresi.",
    schemaCompanyWebsite: "Şirketin resmi web sitesi.",
    viewReports: "Raporları Görüntüle",
    companyWebsite: "Web Sitesi",
    futureProjectTitle: "Gelecek Proje",
    futureProjectDesc: "Bu alan yeni ve heyecan verici özellikler için ayrılmıştır.",
    apiKeyNotConfiguredError: "Yapılandırma Hatası: API anahtarı bulunamadı. Lütfen dağıtım ayarlarınıza bir `API_KEY` ortam değişkeni eklediğinizden emin olun.",
    invalidApiKeyError: "Üzgünüz, bir hata oluştu. Yapılandırılmış API anahtarının geçersiz veya süresi dolmuş gibi görünüyor. Lütfen dağıtım ayarlarınızdaki ortam değişkenlerinizi kontrol edin.",
    apiKeyStatus: "API Anahtarı Durumu",
    apiKeyStatusDesc: "Yapay zeka özellikleriyle ilgili sorunlar yaşıyorsanız, API anahtarınızın doğru yapılandırılıp yapılandırılmadığını ve Google'ın hizmetlerine bağlı olup olmadığını doğrulamak için bu denetleyiciyi kullanın.",
    checkApiKey: "Anahtarı Kontrol Et",
    checkingApiKey: "Kontrol ediliyor...",
    apiKeyStatusOK: "Başarılı: API anahtarı geçerli ve bağlı.",
    apiKeyStatusInvalid: "Başarısız: API anahtarı geçersiz. Lütfen Netlify ortam değişkenlerinizdeki değeri tekrar kontrol edin.",
    apiKeyStatusNotSet: "Başarısız: API anahtarı yapılandırılmamış. Lütfen Netlify'da `API_KEY` ortam değişkenini ekleyin.",
    wasThisHelpful: "Bu yardımcı oldu mu?",
    yes: "Evet",
    no: "Hayır",
    feedbackThanks: "Geri bildiriminiz için teşekkürler!",
    contactPerson: "İlgili Kişi",
    applicationEmail: "Başvuru E-postası",
    companyDescription: "Şirket Açıklaması",
    notAvailable: "Mevcut değil",
    reviews: "Yorumlar",
    leaveReview: "Yorum Bırak",
    rating: "Değerlendirme",
    reviewText: "Yorumunuz",
    submitReview: "Yorumu Gönder",
    noReviewsYet: "Henüz yorum yok. İlk siz olun!",
    anonymous: "Anonim",
    ratingAndReviewRequired: "Değerlendirme ve yorum metni gereklidir.",
    emailSummaryIntro: "İşte önerilen kariyer yollarınızın bir özeti. Kişisel analizinizle tam raporu görüntülemek için lütfen web sitesini ziyaret edin veya kaydedilen raporu açın.",
    jobOutlookLabel: "İş Görünümü",
    salaryRangeLabel: "Maaş (Eğitim Sonrası)",
  },
  uk: {
    langName: `${ukrainianFlagImg} Українська`,
    dir: "ltr",
    headerTitle: "Кар'єрне консультування з Ahmad Mrashaha",
    footerText: "© 2025 - Розроблено Ahmad Mrashaha, щоб допомогти вам знайти свій шлях.",
    welcomeTitle: "Відкрийте свій ідеальний кар'єрний шлях у Німеччині",
    welcomeDesc: "Дайте відповідь на 30 точних запитань про вашу особистість, навички та амбіції. Наш ШІ глибоко проаналізує ваші відповіді, щоб запропонувати найкращі кар'єрні шляхи, професійне навчання (Ausbildung) або університетські програми для вас.",
    startQuiz: "Почати кар'єрний тест",
    startQuizDesc: "Дайте відповідь на наші спеціально розроблені запитання та отримайте особистий аналіз вашого кар'єрного шляху.",
    browseProfessions: "Переглянути професії",
    browseProfessionsDesc: "Досліджуйте нашу базу даних професій, професійного навчання та освітніх програм.",
    searchAvailableJobs: "Пошук доступних вакансій",
    searchAvailableJobsDesc: "Знайдіть реальні, доступні вакансії по всій Німеччині прямо зараз.",
    searchForPraktikum: "Пошук стажування (Praktikum)",
    searchForPraktikumDesc: "Знайдіть можливості для стажування та створюйте професійні запити електронною поштою.",
    professionsDesc: "Шукайте та переглядайте можливості працевлаштування, професійного навчання та навчання в університетах Німеччини.",
    quizIntroTitle: "Перед початком",
    quizIntroDesc: "Цей тест складається з 30 запитань про вашу особистість, навички та амбіції. Ваші чесні відповіді допоможуть нам створити детальний звіт з персоналізованими кар'єрними пропозиціями. Немає правильних чи неправильних відповідей, просто будьте собою!",
    quizIntroStartBtn: "Почати тест",
    back: "Назад",
    next: "Далі",
    getResults: "Отримати мої результати",
    loadingTitle: "Аналізуємо вашу особистість...",
    loadingDesc: "Наш ШІ готує ваш детальний кар'єрний звіт. Це може зайняти деякий час.",
    resultsTitleFor: "Ваш кар'єрний звіт для {name}",
    you: "Вас",
    personalitySummary: "Аналіз вашої професійної особистості",
    recommendedPaths: "Рекомендовані кар'єрні шляхи",
    careerAdvice: "Персоналізовані кар'єрні поради",
    restart: "На головну",
    searchPlaceholder: "Пошук професії...",
    all: "Усі",
    ausbildung: "Професійне навчання",
    study: "Навчання",
    job: "Робота",
    duration: "Тривалість",
    salary: "Зарплата",
    requirements: "Вимоги",
    duties: "Обов'язки",
    skillsRequired: "Необхідні навички",
    home: "Головна",
    errorText: "Вибачте, сталася помилка під час генерації ваших результатів. Будь ласка, спробуйте пізніше.",
    answerHere: "Введіть вашу відповідь тут...",
    page: "Сторінка",
    printReport: "Роздрукувати звіт",
    emailReport: "Надіслати на e-mail",
    saveReport: "Зберегти результати",
    reportSaved: "Збережено!",
    emailSubject: "Мій кар'єрний звіт з сайту кар'єрного консультування",
    jobSearchDesc: "Використовуйте ШІ для пошуку актуальних вакансій або можливостей професійного навчання в Німеччині. Введіть назву посади та місцезнаходження, щоб отримати результати в реальному часі.",
    jobTitlePlaceholder: "напр. Розробник ПЗ, Медсестра...",
    locationPlaceholder: "напр. Берлін, Гамбург...",
    search: "Пошук",
    jobSearchLoading: "Шукаємо доступні вакансії...",
    jobSearchSources: "Доступні вакансії (Джерела)",
    jobSearchPrompt: "За допомогою Пошуку Google знайдіть актуальні вакансії або можливості професійного навчання (Ausbildung) для '{jobTitle}' у місті '{location}' або поблизу, Німеччина. Не надавайте резюме. Надайте лише оригінальні посилання на джерела, які ви знайшли.",
    noJobsFound: "Не знайдено відповідних вакансій.",
    savedReportsTitle: "Збережені звіти",
    anonymousReport: "Анонімний звіт",
    viewDetails: "Переглянути деталі",
    delete: "Видалити",
    confirmDeleteReport: "Ви впевнені, що хочете видалити цей звіт?",
    noSavedReports: "Збережених звітів ще немає.",
    adminLogin: "Вхід для адміністратора",
    responsibleLogin: "Вхід для відповідальних",
    username: "Ім'я користувача",
    password: "Пароль",
    login: "Увійти",
    invalidCredentials: "Неправильне ім'я користувача або пароль.",
    logout: "Вийти",
    praktikumDesc: "Шукаєте стажування (Praktikum)? Введіть сферу ваших інтересів та місто, і ШІ знайде для вас відповідні компанії. Оберіть одну, а потім створіть професійний чернетковий лист для запиту.",
    fieldPlaceholder: "напр. ІТ, маркетинг, інженерія...",
    yourNamePlaceholder: "Ваше повне ім'я",
    praktikumSearchBtn: "Пошук компаній",
    praktikumCompanyLoading: "Шукаємо можливості для стажування...",
    praktikumCompanyResult: "Запропоновані компанії",
    company: "Компанія",
    location: "Місцезнаходження",
    select: "Вибрати",
    selected: "Вибрано",
    praktikumGenerateEmailTitle: "Створити запит електронною поштою",
    praktikumGenerateEmailBtn: "Створити лист",
    praktikumEmailLoading: "Пишемо ваш лист...",
    praktikumYourEmail: "Ваша чернетка листа",
    copyEmail: "Скопіювати лист",
    copied: "Скопійовано!",
    praktikumSearchError: "На жаль, ми не змогли знайти відповідні компанії. Будь ласка, спробуйте інші пошукові терміни.",
    praktikumNoCompaniesFound: "За вашим запитом не знайдено відповідних компаній. Спробуйте змінити умови пошуку.",
    praktikumIntroTitle: "Ваш шлях до стажування (Praktikum)",
    praktikumIntroDesc1: "Цей інструмент використовує ШІ для пошуку компаній, які можуть пропонувати стажування у вашій бажаній галузі та місці.",
    praktikumIntroDesc2: "Після вибору компанії ми допоможемо вам створити професійну чернетку листа, яку ви зможете надіслати для запиту про можливість стажування. Ви самі надішлете остаточний лист.",
    praktikumIntroDisclaimer: "<strong>Важлива примітка:</strong> Цей метод є 'незапрошеною заявкою' (Initiativbewerbung). Це означає, що знайдені нами компанії могли не оголошувати про відкриті вакансії для стажерів. Наша мета - надати вам можливість проявити ініціативу та встановити професійний контакт, що високо цінується на німецькому ринку праці. Можливість не гарантована на 100%, але це чудовий, проактивний крок.",
    praktikumIntroStartBtn: "Зрозуміло, почати пошук",
    praktikumSearchPrompt: "РОЛЬ: Високоточний дослідник компаній для німецького ринку.\n\nЗАВДАННЯ: За допомогою Пошуку Google знайдіть 5-7 релевантних компаній у місті '{location}' або поблизу, які потенційно пропонують '{internshipType}' у секторі '{field}'. Надавайте перевагу офіційним веб-сайтам компаній перед простими каталогами.\n\nКРИТИЧНІ ІНСТРУКЦІЇ:\n1.  **АБСОЛЮТНА ТОЧНІСТЬ ДАНИХ**: НІКОЛИ не вигадуйте інформацію. Якщо частина інформації (наприклад, контактна особа, електронна пошта) НЕ вказана ЯВНО в результатах пошуку, значення для цього поля ПОВИННО бути порожнім рядком `\"\"`.\n2.  **ЧИСТИЙ ФОРМАТ JSON**: Ваша відповідь ПОВИННА бути виключно валідним масивом JSON. Без вступного тексту, коментарів чи розмітки, як-от ```json.\n\nСТРУКТУРА ВИВОДУ JSON:\n`[{\"name\": \"Повна офіційна назва компанії\", \"address\": \"Вулиця, поштовий індекс, місто\", \"contactPerson\": \"\", \"applicationEmail\": \"\", \"description\": \"Одне коротке речення, що описує основну галузь або діяльність компанії.\", \"website\": \"URL офіційного веб-сайту\"}]`",
    praktikumEmailPrompt: "Ви чудовий кар'єрний асистент. Напишіть професійну та ввічливу чернетку листа НІМЕЦЬКОЮ мовою. Лист від '{userName}' до '{companyName}' для запиту про стажування (Praktikum) у галузі '{field}'. Мета стажування - '{internshipType}'. Дуже точно адаптуйте зміст і тон відповідно до типу стажування:\n\n- Якщо тип 'для школи' (Schülerpraktikum): Пишіть як мотивований учень. Згадайте, що це обов'язкове шкільне стажування. Запитайте про можливі терміни та необхідні документи. Тон має бути ввічливим та молодіжним.\n- Якщо тип 'для професійної орієнтації' (Berufsorientierung): Виразіть сильну зацікавленість у галузі '{field}' та компанії. Поясніть, що мета - отримати первинне уявлення та полегшити вибір професії. Тон має бути допитливим та захопленим.\n- Якщо тип 'для професійного навчання' (Ausbildung): Пишіть більш формально та професійно. Вкажіть, що заявник шукає професійне навчання в цій галузі та хоче отримати практичний досвід. Підкресліть мотивацію застосовувати навички на практиці.\n\nЗавжди використовуйте належне привітання (Sehr geehrte Damen und Herren,) та завершення (Mit freundlichen Grüßen). Запитайте про відповідальну контактну особу для подання заяв.",
    internshipTypeLabel: "Тип стажування",
    internshipTypePlaceholder: "Виберіть тип стажування...",
    internshipTypeSchool: "Для школи",
    internshipTypeAusbildung: "Для професійного навчання",
    internshipTypeOrientation: "Для професійної орієнтації",
    loading: "Завантаження...",
    underMaintenanceShort: "На обслуговуванні",
    underMaintenanceTitle: "Цей розділ на технічному обслуговуванні",
    underMaintenanceDesc: "Наразі ми працюємо над покращенням цього розділу, і він незабаром буде доступний. На даний момент доступ мають лише адміністратори.",
    systemInstruction: "Ви - експертний кар'єрний консультант і психолог, що спеціалізується на німецькому ринку праці. Ваше завдання - проаналізувати відповіді {name}, віком {age} років, на 30 запитань, щоб створити дуже детальний та особистий кар'єрний звіт українською мовою. Ваш аналіз має бути глибоким, підбадьорливим і практичним. На основі відповідей створіть детальний JSON-звіт, що відповідає схемі. Звіт повинен містити точний аналіз особистості, 3-4 дуже підходящі та різноманітні пропозиції роботи (включаючи Ausbildung та навчання в університеті) та дієві кар'єрні поради. Звертайтеся до користувача на ім'я. Ваш тон має бути професійним і дуже підтримуючим.",
    promptIntro: "Ось мої дані та відповіді на анкету з профорієнтації:",
    promptInstruction: "Будь ласка, надайте мій детальний кар'єрний аналіз на основі цих відповідей.",
    schemaPersonality: "Глибокий і детальний аналіз професійної особистості користувача, сильних сторін, областей для розвитку та ідеального стилю роботи, написаний професійним та підбадьорливим тоном українською мовою.",
    schemaJobSuggestions: "Список з 3-4 дуже підходящих пропозицій щодо роботи, професійного навчання (Ausbildung) або навчання в університеті в Німеччині, українською мовою.",
    schemaTitle: "Назва роботи, професійного навчання або навчальної програми, українською мовою.",
    schemaDescription: "Детальне та переконливе пояснення, чому цей шлях відповідає особистості та відповідям користувача, українською мовою.",
    schemaDetails: "Ключові практичні деталі, такі як тривалість навчання, очікувана зарплата, мовні вимоги або можливості зростання в Німеччині. Українською мовою.",
    schemaCompanyName: "Назва компанії.",
    schemaCompanyAddress: "Повна адреса компанії.",
    schemaCompanyContact: "Телефонний номер або електронна адреса компанії.",
    schemaCompanyWebsite: "Офіційний веб-сайт компанії.",
    viewReports: "Переглянути звіти",
    companyWebsite: "Веб-сайт",
    futureProjectTitle: "Майбутній проект",
    futureProjectDesc: "Це місце зарезервовано для нових та захоплюючих функцій.",
    apiKeyNotConfiguredError: "Помилка конфігурації: ключ API не знайдено. Будь ласка, переконайтеся, що ви додали змінну середовища `API_KEY` у налаштуваннях розгортання.",
    invalidApiKeyError: "Вибачте, сталася помилка. Схоже, налаштований ключ API недійсний або термін його дії минув. Будь ласка, перевірте змінні середовища в налаштуваннях розгортання.",
    apiKeyStatus: "Статус ключа API",
    apiKeyStatusDesc: "Якщо у вас виникають проблеми з функціями ШІ, використовуйте цю перевірку, щоб переконатися, що ваш ключ API налаштований правильно та підключений до служб Google.",
    checkApiKey: "Перевірити ключ",
    checkingApiKey: "Перевірка...",
    apiKeyStatusOK: "Успіх: ключ API дійсний і підключений.",
    apiKeyStatusInvalid: "Помилка: ключ API недійсний. Будь ласка, ще раз перевірте значення у ваших змінних середовища Netlify.",
    apiKeyStatusNotSet: "Помилка: ключ API не налаштований. Будь ласка, додайте змінну середовища `API_KEY` в Netlify.",
    wasThisHelpful: "Чи було це корисно?",
    yes: "Так",
    no: "Ні",
    feedbackThanks: "Дякуємо за ваш відгук!",
    contactPerson: "Контактна особа",
    applicationEmail: "Електронна пошта для заявок",
    companyDescription: "Опис компанії",
    notAvailable: "Недоступно",
    reviews: "Відгуки",
    leaveReview: "Залишити відгук",
    rating: "Рейтинг",
    reviewText: "Ваш відгук",
    submitReview: "Надіслати відгук",
    noReviewsYet: "Відгуків ще немає. Будьте першим!",
    anonymous: "Анонім",
    ratingAndReviewRequired: "Рейтинг та текст відгуку є обов'язковими.",
    emailSummaryIntro: "Ось короткий опис рекомендованих вам кар'єрних шляхів. Щоб переглянути повний звіт з вашим особистим аналізом, будь ласка, відвідайте веб-сайт або відкрийте збережений звіт.",
    jobOutlookLabel: "Перспективи працевлаштування",
    salaryRangeLabel: "Зарплата (після навчання)",
  },
};

export const quizQuestions = {
  ar: [
    { type: 'text', id: 'name', question: 'أولاً، ما هو اسمك؟' },
    { type: 'number', id: 'age', question: 'كم عمرك؟' },
    { type: 'options', question: 'أي بيئة عمل تفضلها؟', options: ['مكتب هادئ ومنظم', 'بيئة ديناميكية ومتغيرة', 'في الهواء الطلق أو ورشة عمل', 'العمل من المنزل بمرونة'] },
    { type: 'options', question: 'ما هو مستوى تفاعلك الاجتماعي المفضل في العمل؟', options: ['العمل بمفردي على المهام', 'العمل ضمن فريق صغير', 'التفاعل المستمر مع العملاء والجمهور', 'قيادة وتوجيه الفرق الكبيرة'] },
    { type: 'options', question: 'كيف تتعامل مع المهام الصعبة؟', options: ['أحللها إلى خطوات صغيرة', 'أبحث عن حلول إبداعية', 'أطلب المساعدة من الزملاء', 'أواجهها مباشرة بحماس'] },
    { type: 'options', question: 'ما الذي يحفزك أكثر؟', options: ['تحقيق نتائج ملموسة', 'تعلم مهارات جديدة', 'مساعدة الآخرين', 'الحصول على تقدير وترقية'] },
    { type: 'options', question: 'ما هي المواد الدراسية التي كنت تفضلها في المدرسة؟', options: ['الرياضيات والعلوم', 'اللغات والفنون', 'الرياضة والأعمال اليدوية', 'التاريخ والجغرافيا'] },
    { type: 'options', question: 'كيف تصف أسلوبك في اتخاذ القرارات؟', options: ['تحليلي ומבוסס على البيانات', 'حدسي وسريع', 'تعاوني وآخذ بآراء الآخرين', 'حذر ومدروس'] },
    { type: 'options', question: 'ما مدى أهمية الراتب والاستقرار المادي لك؟', options: ['الأهم على الإطلاق', 'مهم ولكنه ليس كل شيء', 'أقل أهمية من الرضا الوظيفي', 'غير مهم على المدى القصير'] },
    { type: 'options', question: 'هل تفضل العمل الروتيني أم المهام المتنوعة؟', options: ['أفضل الروتين والاستقرار', 'أحب التنوع والتحديات الجديدة', 'مزيج من الاثنين جيد', 'لا أهتم طالما أنجز العمل'] },
    { type: 'options', question: 'ما هو دور التكنولوجيا في عملك المثالي؟', options: ['أساسي وحيوي، أعمل مع أحدث التقنيات', 'أداة مساعدة، ولكن ليست المحور', 'أفضل الأعمال التي لا تعتمد كثيرًا على التكنولوجيا', 'لا يوجد تفضيل معين'] },
    { type: 'options', question: 'كيف تتعامل مع الضغط والمواعيد النهائية؟', options: ['أعمل بشكل أفضل تحت الضغط', 'أشعر بالتوتر ولكني أنجز المهام', 'أحاول تجنب الضغط قدر الإمكان', 'أخطط مسبقًا لتجنب الضغط'] },
    { type: 'options', question: 'ما هو مدى استعدادك للسفر من أجل العمل؟', options: ['مستعد للسفر باستمرار', 'موافق على السفر أحيانًا', 'أفضل عدم السفر', 'فقط داخل المدينة'] },
    { type: 'options', question: 'أي من هذه الأنشطة تستمتع به أكثر في وقت فراغك؟', options: ['القراءة وحل الألغاز', 'الرسم أو العزف على آلة موسيقية', 'ممارسة الرياضة أو الأنشطة الخارجية', 'التطوع ومساعدة الآخرين'] },
    { type: 'options', question: 'ما مدى أهمية التطور والتعلم المستمر في مهنتك؟', options: ['ضروري للغاية، أريد أن أتعلم دائمًا', 'مهم للحفاظ على مواكبة التطورات', 'أفضل الاستقرار في المهارات الحالية', 'لست مهتمًا بالتعلم بعد انتهاء التدريب الأساسي'] },
    { type: 'options', question: 'هل تفضل العمل بيديك أم بعقلك؟', options: ['أفضل استخدام يدي في صنع الأشياء', 'أفضل حل المشكلات والتفكير الاستراتيجي', 'أستمتع بمزيج من الاثنين', 'لا فرق لدي'] },
    { type: 'options', question: 'كيف تصف قدرتك على التكيف مع التغيير؟', options: ['أتأقلم بسرعة وسهولة', 'أحتاج بعض الوقت للتكيف', 'أجد صعوبة في التغيير', 'أقاوم التغيير'] },
    { type: 'options', question: 'ما هو مستوى المسؤولية الذي تطمح إليه؟', options: ['إدارة مشاريع أو فرق', 'مسؤول عن عملي الخاص فقط', 'جزء من فريق دون مسؤولية قيادية', 'أطمح لامتلاك عملي الخاص'] },
    { type: 'options', question: 'ما مدى أهمية التأثير الإيجابي على المجتمع في عملك؟', options: ['مهم جدًا، أريد أن أحدث فرقًا', 'أمر جيد ولكنه ليس أولوية', 'أركز على مسيرتي المهنية الشخصية', 'لا أفكر في هذا الأمر'] },
    { type: 'options', question: 'هل تستمتع بالعمل الذي يتطلب دقة وانتباهًا للتفاصيل؟', options: ['نعم، أستمتع بذلك كثيرًا', 'إلى حد ما', 'لا، أفضل الصورة الكبيرة', 'يمكنني القيام به إذا لزم الأمر'] },
    { type: 'options', question: 'ما هو موقفك من المخاطرة في العمل؟', options: ['أحب المخاطرة المحسوبة', 'أفضل البقاء في منطقة الأمان', 'أتجنب المخاطر تمامًا', 'أنا جريء وأتحمل مخاطر كبيرة'] },
    { type: 'options', question: 'كيف تتعامل مع النقد؟', options: ['أتقبله وأتعلم منه', 'أشعر بالإحباط في البداية ثم أتعلم', 'أجد صعوبة في تقبل النقد', 'أميل إلى اتخاذ موقف دفاعي'] },
    { type: 'options', question: 'ما مدى أهمية الإبداع في وظيفتك؟', options: ['أساسي، أحتاج إلى التعبير عن إبداعي', 'ميزة إضافية لطيفة', 'ليس مهمًا على الإطلاق', 'أفضل اتباع إجراءات محددة'] },
    { type: 'options', question: 'ما نوع المشاكل التي تستمتع بحلها؟', options: ['مشاكل منطقية ورياضية', 'مشاكل إنسانية واجتماعية', 'مشاكل عملية وتقنية', 'مشاكل استراتيجية وتجارية'] },
    { type: 'options', question: 'ما هو توازن العمل والحياة المثالي بالنسبة لك؟', options: ['ساعات عمل مرنة والعمل عن بعد', 'ساعات عمل منتظمة من 9 إلى 5', 'لا أمانع العمل لساعات طويلة لتحقيق أهدافي', 'أفضل العمل بدوام جزئي'] },
    { type: 'options', question: 'هل تفضل العمل في شركة كبيرة أم شركة صغيرة/ناشئة؟', options: ['شركة كبيرة ومستقرة', 'شركة صغيرة وديناميكية', 'العمل لحسابي الخاص', 'لا فرق لدي'] },
    { type: 'options', question: 'ما هو مستوى شهادتك الدراسية الحالية أو التي تخطط للحصول عليها؟', options: ['أقل من الثانوية العامة', 'شهادة ثانوية عامة', 'شهادة تدريب مهني (Ausbildung)', 'شهادة جامعية (بكالوريوس أو أعلى)'] },
    { type: 'options', question: 'ما هو مستواك في اللغة الألمانية؟', options: ['مبتدئ (A1/A2)', 'متوسط (B1/B2)', 'متقدم (C1/C2)', 'اللغة الأم'] },
    { type: 'options', question: 'هل لديك خبرة عملية سابقة في أي مجال؟', options: ['نعم، خبرة واسعة', 'نعم، بعض الخبرة', 'لا، ليس لدي خبرة عملية', 'تدريب عملي (Praktikum) فقط'] },
    { type: 'text', question: 'أخيرًا، هل هناك أي شغف أو اهتمام معين تود أن نأخذه في الاعتبار؟' },
  ],
  de: [
    { type: 'text', id: 'name', question: 'Wie ist Ihr Name?' },
    { type: 'number', id: 'age', question: 'Wie alt sind Sie?' },
    { type: 'options', question: 'Welche Arbeitsumgebung bevorzugen Sie?', options: ['Ruhiges und organisiertes Büro', 'Dynamisches und wechselhaftes Umfeld', 'Im Freien oder in einer Werkstatt', 'Flexibles Homeoffice'] },
    { type: 'options', question: 'Welches Maß an sozialer Interaktion bevorzugen Sie bei der Arbeit?', options: ['Alleine an Aufgaben arbeiten', 'In einem kleinen Team arbeiten', 'Ständiger Kontakt mit Kunden und der Öffentlichkeit', 'Führung und Leitung großer Teams'] },
    { type: 'options', question: 'Wie gehen Sie mit schwierigen Aufgaben um?', options: ['Ich zerlege sie in kleine Schritte', 'Ich suche nach kreativen Lösungen', 'Ich bitte Kollegen um Hilfe', 'Ich stelle mich ihnen direkt mit Begeisterung'] },
    { type: 'options', question: 'Was motiviert Sie am meisten?', options: ['Greifbare Ergebnisse erzielen', 'Neue Fähigkeiten erlernen', 'Anderen helfen', 'Anerkennung und Beförderung erhalten'] },
    { type: 'options', question: 'Welche Schulfächer mochten Sie am liebsten?', options: ['Mathematik und Naturwissenschaften', 'Sprachen und Kunst', 'Sport und handwerkliche Fächer', 'Geschichte und Geografie'] },
    { type: 'options', question: 'Wie beschreiben Sie Ihren Entscheidungsstil?', options: ['Analytisch und datenbasiert', 'Intuitiv und schnell', 'Kollaborativ und andere Meinungen einholend', 'Vorsichtig und überlegt'] },
    { type: 'options', question: 'Wie wichtig sind Ihnen Gehalt und finanzielle Stabilität?', options: ['Absolut am wichtigsten', 'Wichtig, aber nicht alles', 'Weniger wichtig als Arbeitszufriedenheit', 'Kurzfristig nicht wichtig'] },
    { type: 'options', question: 'Bevorzugen Sie Routinearbeit oder abwechslungsreiche Aufgaben?', options: ['Ich bevorzuge Routine und Stabilität', 'Ich liebe Abwechslung und neue Herausforderungen', 'Eine Mischung aus beidem ist gut', 'Es ist mir egal, solange die Arbeit erledigt wird'] },
    { type: 'options', question: 'Welche Rolle spielt Technologie in Ihrer idealen Arbeit?', options: ['Zentral und entscheidend, ich arbeite mit den neuesten Technologien', 'Ein Hilfsmittel, aber nicht der Fokus', 'Ich bevorzuge Arbeiten, die nicht stark von Technologie abhängen', 'Keine besondere Präferenz'] },
    { type: 'options', question: 'Wie gehen Sie mit Druck und Fristen um?', options: ['Unter Druck arbeite ich am besten', 'Ich fühle mich gestresst, erledige aber die Aufgaben', 'Ich versuche, Druck so weit wie möglich zu vermeiden', 'Ich plane im Voraus, um Druck zu vermeiden'] },
    { type: 'options', question: 'Wie bereit sind Sie, für die Arbeit zu reisen?', options: ['Bereit, ständig zu reisen', 'Einverstanden, gelegentlich zu reisen', 'Ich reise lieber nicht', 'Nur innerhalb der Stadt'] },
    { type: 'options', question: 'Welche dieser Aktivitäten genießen Sie in Ihrer Freizeit am meisten?', options: ['Lesen und Rätsel lösen', 'Malen oder ein Instrument spielen', 'Sport oder Outdoor-Aktivitäten', 'Ehrenamtliche Arbeit und anderen helfen'] },
    { type: 'options', question: 'Wie wichtig ist Ihnen kontinuierliche Weiterentwicklung und Lernen in Ihrem Beruf?', options: ['Absolut unerlässlich, ich möchte immer lernen', 'Wichtig, um auf dem Laufenden zu bleiben', 'Ich bevorzuge Stabilität in meinen aktuellen Fähigkeiten', 'Ich bin nicht am Lernen interessiert, nachdem die Grundausbildung abgeschlossen ist'] },
    { type: 'options', question: 'Arbeiten Sie lieber mit den Händen oder mit dem Kopf?', options: ['Ich benutze lieber meine Hände, um Dinge herzustellen', 'Ich löse lieber Probleme und denke strategisch', 'Ich genieße eine Mischung aus beidem', 'Kein Unterschied für mich'] },
    { type: 'options', question: 'Wie beschreiben Sie Ihre Fähigkeit, sich an Veränderungen anzupassen?', options: ['Ich passe mich schnell und einfach an', 'Ich brauche etwas Zeit, um mich anzupassen', 'Veränderungen fallen mir schwer', 'Ich widersetze mich Veränderungen'] },
    { type: 'options', question: 'Welches Verantwortungsniveau streben Sie an?', options: ['Projekte oder Teams leiten', 'Nur für meine eigene Arbeit verantwortlich sein', 'Teil eines Teams ohne Führungsverantwortung', 'Ich strebe an, mein eigenes Unternehmen zu haben'] },
    { type: 'options', question: 'Wie wichtig ist es Ihnen, mit Ihrer Arbeit einen positiven Einfluss auf die Gesellschaft zu haben?', options: ['Sehr wichtig, ich möchte einen Unterschied machen', 'Schön, aber keine Priorität', 'Ich konzentriere mich auf meine persönliche Karriere', 'Darüber denke ich nicht nach'] },
    { type: 'options', question: 'Macht Ihnen Arbeit Spaß, die Genauigkeit und Liebe zum Detail erfordert?', options: ['Ja, das macht mir sehr viel Spaß', 'Bis zu einem gewissen Grad', 'Nein, ich bevorzuge das große Ganze', 'Ich kann es tun, wenn es nötig ist'] },
    { type: 'options', question: 'Was ist Ihre Haltung zum Risiko bei der Arbeit?', options: ['Ich mag kalkulierte Risiken', 'Ich bleibe lieber in meiner Komfortzone', 'Ich vermeide Risiken komplett', 'Ich bin mutig und gehe große Risiken ein'] },
    { type: 'options', question: 'Wie gehen Sie mit Kritik um?', options: ['Ich nehme sie an und lerne daraus', 'Zuerst bin ich entmutigt, aber dann lerne ich', 'Es fällt mir schwer, Kritik anzunehmen', 'Ich neige dazu, in die Defensive zu gehen'] },
    { type: 'options', question: 'Wie wichtig ist Kreativität in Ihrem Job?', options: ['Unerlässlich, ich muss meine Kreativität ausleben', 'Ein nettes Extra', 'Überhaupt nicht wichtig', 'Ich befolge lieber festgelegte Verfahren'] },
    { type: 'options', question: 'Welche Art von Problemen lösen Sie gerne?', options: ['Logische und mathematische Probleme', 'Menschliche und soziale Probleme', 'Praktische und technische Probleme', 'Strategische und geschäftliche Probleme'] },
    { type: 'options', question: 'Was ist Ihre ideale Work-Life-Balance?', options: ['Flexible Arbeitszeiten und Remote-Arbeit', 'Regelmäßige Arbeitszeiten von 9 bis 17 Uhr', 'Es macht mir nichts aus, lange zu arbeiten, um meine Ziele zu erreichen', 'Ich bevorzuge Teilzeitarbeit'] },
    { type: 'options', question: 'Arbeiten Sie lieber in einem großen Unternehmen oder einem kleinen/Startup?', options: ['Großes und stabiles Unternehmen', 'Kleines und dynamisches Unternehmen', 'Selbstständig arbeiten', 'Kein Unterschied für mich'] },
    { type: 'options', question: 'Was ist Ihr aktueller oder geplanter Bildungsabschluss?', options: ['Weniger als Hauptschulabschluss', 'Abitur oder Fachabitur', 'Berufsausbildung', 'Hochschulabschluss (Bachelor oder höher)'] },
    { type: 'options', question: 'Wie ist Ihr Deutschniveau?', options: ['Anfänger (A1/A2)', 'Mittelstufe (B1/B2)', 'Fortgeschritten (C1/C2)', 'Muttersprache'] },
    { type: 'options', question: 'Haben Sie bereits Berufserfahrung in irgendeinem Bereich?', options: ['Ja, umfangreiche Erfahrung', 'Ja, etwas Erfahrung', 'Nein, keine Berufserfahrung', 'Nur Praktika'] },
    { type: 'text', question: 'Gibt es eine bestimmte Leidenschaft oder ein Interesse, das wir berücksichtigen sollten?' },
  ],
  en: [
    { type: 'text', id: 'name', question: 'First, what is your name?' },
    { type: 'number', id: 'age', question: 'How old are you?' },
    { type: 'options', question: 'Which work environment do you prefer?', options: ['Quiet and organized office', 'Dynamic and changing environment', 'Outdoors or in a workshop', 'Flexible remote work'] },
    { type: 'options', question: 'What is your preferred level of social interaction at work?', options: ['Working alone on tasks', 'Working in a small team', 'Constant interaction with clients and the public', 'Leading and directing large teams'] },
    { type: 'options', question: 'How do you handle difficult tasks?', options: ['I break them down into small steps', 'I look for creative solutions', 'I ask colleagues for help', 'I face them head-on with enthusiasm'] },
    { type: 'options', question: 'What motivates you the most?', options: ['Achieving tangible results', 'Learning new skills', 'Helping others', 'Receiving recognition and promotion'] },
    { type: 'options', question: 'What were your favorite subjects in school?', options: ['Math and Science', 'Languages and Arts', 'Sports and Crafts', 'History and Geography'] },
    { type: 'options', question: 'How would you describe your decision-making style?', options: ['Analytical and data-driven', 'Intuitive and quick', 'Collaborative and seeking others\' opinions', 'Cautious and deliberate'] },
    { type: 'options', question: 'How important are salary and financial stability to you?', options: ['The most important thing', 'Important, but not everything', 'Less important than job satisfaction', 'Not important in the short term'] },
    { type: 'options', question: 'Do you prefer routine work or varied tasks?', options: ['I prefer routine and stability', 'I love variety and new challenges', 'A mix of both is good', 'I don\'t care as long as the work gets done'] },
    { type: 'options', question: 'What role does technology play in your ideal job?', options: ['Central and vital, I work with the latest technologies', 'A helpful tool, but not the focus', 'I prefer jobs that don\'t rely heavily on technology', 'No particular preference'] },
    { type: 'options', question: 'How do you handle pressure and deadlines?', options: ['I work best under pressure', 'I get stressed but I get the tasks done', 'I try to avoid pressure as much as possible', 'I plan ahead to avoid pressure'] },
    { type: 'options', question: 'How willing are you to travel for work?', options: ['Willing to travel constantly', 'Okay with occasional travel', 'I prefer not to travel', 'Only within the city'] },
    { type: 'options', question: 'Which of these activities do you enjoy most in your free time?', options: ['Reading and solving puzzles', 'Painting or playing an instrument', 'Sports or outdoor activities', 'Volunteering and helping others'] },
    { type: 'options', question: 'How important is continuous development and learning in your career?', options: ['Absolutely essential, I always want to learn', 'Important to keep up with developments', 'I prefer stability in my current skills', 'Not interested in learning after basic training is complete'] },
    { type: 'options', question: 'Do you prefer to work with your hands or your mind?', options: ['I prefer using my hands to make things', 'I prefer solving problems and thinking strategically', 'I enjoy a mix of both', 'No difference to me'] },
    { type: 'options', question: 'How do you describe your ability to adapt to change?', options: ['I adapt quickly and easily', 'I need some time to adjust', 'I find change difficult', 'I resist change'] },
    { type: 'options', question: 'What level of responsibility do you aspire to?', options: ['Managing projects or teams', 'Responsible only for my own work', 'Part of a team without leadership responsibility', 'I aspire to own my own business'] },
    { type: 'options', question: 'How important is making a positive impact on society in your work?', options: ['Very important, I want to make a difference', 'A good thing, but not a priority', 'I focus on my personal career', 'I don\'t think about that'] },
    { type: 'options', question: 'Do you enjoy work that requires precision and attention to detail?', options: ['Yes, I enjoy it very much', 'To some extent', 'No, I prefer the big picture', 'I can do it if necessary'] },
    { type: 'options', question: 'What is your attitude towards risk at work?', options: ['I like calculated risks', 'I prefer to stay in my comfort zone', 'I avoid risks completely', 'I am bold and take big risks'] },
    { type: 'options', question: 'How do you handle criticism?', options: ['I accept it and learn from it', 'I feel discouraged at first but then I learn', 'I find it difficult to accept criticism', 'I tend to get defensive'] },
    { type: 'options', question: 'How important is creativity in your job?', options: ['Essential, I need to express my creativity', 'A nice bonus', 'Not important at all', 'I prefer to follow set procedures'] },
    { type: 'options', question: 'What kind of problems do you enjoy solving?', options: ['Logical and mathematical problems', 'Human and social problems', 'Practical and technical problems', 'Strategic and business problems'] },
    { type: 'options', question: 'What is your ideal work-life balance?', options: ['Flexible hours and remote work', 'Regular 9-to-5 hours', 'I don\'t mind working long hours to achieve my goals', 'I prefer part-time work'] },
    { type: 'options', question: 'Do you prefer working in a large corporation or a small company/startup?', options: ['Large and stable corporation', 'Small and dynamic company', 'Working for myself', 'No difference to me'] },
    { type: 'options', question: 'What is your current or planned level of education?', options: ['Less than high school diploma', 'High school diploma', 'Vocational training certificate (Ausbildung)', 'University degree (Bachelor\'s or higher)'] },
    { type: 'options', question: 'What is your level of German?', options: ['Beginner (A1/A2)', 'Intermediate (B1/B2)', 'Advanced (C1/C2)', 'Native speaker'] },
    { type: 'options', question: 'Do you have any prior work experience in any field?', options: ['Yes, extensive experience', 'Yes, some experience', 'No, no work experience', 'Only internships (Praktikum)'] },
    { type: 'text', question: 'Finally, is there any particular passion or interest you would like us to consider?' },
  ],
  tr: [
    { type: 'text', id: 'name', question: 'Öncelikle, adınız nedir?' },
    { type: 'number', id: 'age', question: 'Kaç yaşındasınız?' },
    { type: 'options', question: 'Hangi çalışma ortamını tercih edersiniz?', options: ['Sessiz ve düzenli bir ofis', 'Dinamik ve değişken bir ortam', 'Açık havada veya bir atölyede', 'Esnek evden çalışma'] },
    { type: 'options', question: 'İşte tercih ettiğiniz sosyal etkileşim düzeyi nedir?', options: ['Görevler üzerinde tek başıma çalışmak', 'Küçük bir ekipte çalışmak', 'Müşteriler ve halkla sürekli etkileşim', 'Büyük ekiplere liderlik etmek ve yönlendirmek'] },
    { type: 'options', question: 'Zor görevlerle nasıl başa çıkarsınız?', options: ['Onları küçük adımlara ayırırım', 'Yaratıcı çözümler ararım', 'İş arkadaşlarımdan yardım isterim', 'Onlarla doğrudan ve hevesle yüzleşirim'] },
    { type: 'options', question: 'Sizi en çok ne motive eder?', options: ['Somut sonuçlar elde etmek', 'Yeni beceriler öğrenmek', 'Başkalarına yardım etmek', 'Takdir ve terfi almak'] },
    { type: 'options', question: 'Okulda en sevdiğiniz dersler hangileriydi?', options: ['Matematik ve Fen Bilimleri', 'Diller ve Sanat', 'Spor ve El Sanatları', 'Tarih ve Coğrafya'] },
    { type: 'options', question: 'Karar verme tarzınızı nasıl tanımlarsınız?', options: ['Analitik ve veriye dayalı', 'Sezgisel ve hızlı', 'İşbirlikçi ve başkalarının görüşlerini alan', 'Dikkatli ve düşünceli'] },
    { type: 'options', question: 'Maaş ve finansal istikrar sizin için ne kadar önemli?', options: ['Kesinlikle en önemlisi', 'Önemli, ama her şey değil', 'İş tatmininden daha az önemli', 'Kısa vadede önemli değil'] },
    { type: 'options', question: 'Rutin işleri mi yoksa çeşitli görevleri mi tercih edersiniz?', options: ['Rutin ve istikrarı tercih ederim', 'Çeşitliliği ve yeni zorlukları severim', 'İkisinin bir karışımı iyidir', 'İş yapıldığı sürece umrumda değil'] },
    { type: 'options', question: 'İdeal işinizde teknolojinin rolü nedir?', options: ['Merkezi ve hayati, en son teknolojilerle çalışırım', 'Yardımcı bir araç, ama odak noktası değil', 'Teknolojiye fazla dayanmayan işleri tercih ederim', 'Belirli bir tercihim yok'] },
    { type: 'options', question: 'Baskı ve son teslim tarihleriyle nasıl başa çıkarsınız?', options: ['Baskı altında en iyi şekilde çalışırım', 'Stres olurum ama görevleri tamamlarım', 'Baskıdan mümkün olduğunca kaçınmaya çalışırım', 'Baskıdan kaçınmak için önceden plan yaparım'] },
    { type: 'options', question: 'İş için seyahat etmeye ne kadar isteklisiniz?', options: ['Sürekli seyahat etmeye istekliyim', 'Ara sıra seyahat etmeyi kabul ederim', 'Seyahat etmemeyi tercih ederim', 'Sadece şehir içinde'] },
    { type: 'options', question: 'Boş zamanlarınızda bu aktivitelerden en çok hangisini yapmaktan hoşlanırsınız?', options: ['Okumak ve bulmaca çözmek', 'Resim yapmak veya bir enstrüman çalmak', 'Spor veya açık hava etkinlikleri', 'Gönüllülük ve başkalarına yardım etmek'] },
    { type: 'options', question: 'Kariyerinizde sürekli gelişim ve öğrenme ne kadar önemli?', options: ['Kesinlikle gerekli, her zaman öğrenmek isterim', 'Gelişmeleri takip etmek için önemli', 'Mevcut becerilerimde istikrarı tercih ederim', 'Temel eğitim tamamlandıktan sonra öğrenmekle ilgilenmiyorum'] },
    { type: 'options', question: 'Ellerinizle mi yoksa zihninizle mi çalışmayı tercih edersiniz?', options: ['Bir şeyler yapmak için ellerimi kullanmayı tercih ederim', 'Problem çözmeyi ve stratejik düşünmeyi tercih ederim', 'İkisinin bir karışımından hoşlanırım', 'Benim için fark etmez'] },
    { type: 'options', question: 'Değişime uyum sağlama yeteneğinizi nasıl tanımlarsınız?', options: ['Hızlı ve kolay bir şekilde uyum sağlarım', 'Uyum sağlamak için biraz zamana ihtiyacım var', 'Değişimi zor buluyorum', 'Değişime direnirim'] },
    { type: 'options', question: 'Hangi sorumluluk seviyesini hedefliyorsunuz?', options: ['Projeleri veya ekipleri yönetmek', 'Sadece kendi işimden sorumlu olmak', 'Liderlik sorumluluğu olmayan bir ekibin parçası olmak', 'Kendi işimi kurmayı hedefliyorum'] },
    { type: 'options', question: 'İşinizde topluma olumlu bir etki yaratmak ne kadar önemli?', options: ['Çok önemli, bir fark yaratmak istiyorum', 'İyi bir şey, ama bir öncelik değil', 'Kişisel kariyerime odaklanırım', 'Bunu düşünmüyorum'] },
    { type: 'options', question: 'Hassasiyet ve detaylara dikkat gerektiren işlerden hoşlanır mısınız?', options: ['Evet, bundan çok hoşlanırım', 'Bir dereceye kadar', 'Hayır, büyük resmi tercih ederim', 'Gerekirse yapabilirim'] },
    { type: 'options', question: 'İşte riske karşı tutumunuz nedir?', options: ['Hesaplanmış riskleri severim', 'Konfor alanımda kalmayı tercih ederim', 'Risklerden tamamen kaçınırım', 'Cesurum ve büyük riskler alırım'] },
    { type: 'options', question: 'Eleştiriyle nasıl başa çıkarsınız?', options: ['Kabul eder ve ondan öğrenirim', 'Başta cesaretim kırılır ama sonra öğrenirim', 'Eleştiriyi kabul etmekte zorlanırım', 'Savunmacı olma eğilimindeyim'] },
    { type: 'options', question: 'İşinizde yaratıcılık ne kadar önemli?', options: ['Gerekli, yaratıcılığımı ifade etmeliyim', 'Hoş bir bonus', 'Hiç önemli değil', 'Belirlenmiş prosedürleri takip etmeyi tercih ederim'] },
    { type: 'options', question: 'Ne tür problemler çözmekten hoşlanırsınız?', options: ['Mantıksal ve matematiksel problemler', 'İnsani ve sosyal problemler', 'Pratik ve teknik problemler', 'Stratejik ve iş problemleri'] },
    { type: 'options', question: 'İdeal iş-yaşam dengeniz nedir?', options: ['Esnek saatler ve uzaktan çalışma', 'Düzenli 9-5 saatleri', 'Hedeflerime ulaşmak için uzun saatler çalışmaktan çekinmem', 'Yarı zamanlı çalışmayı tercih ederim'] },
    { type: 'options', question: 'Büyük bir şirkette mi yoksa küçük bir şirkette/startupta mı çalışmayı tercih edersiniz?', options: ['Büyük ve istikrarlı bir şirket', 'Küçük ve dinamik bir şirket', 'Kendi işimi yapmak', 'Benim için fark etmez'] },
    { type: 'options', question: 'Mevcut veya planladığınız eğitim seviyeniz nedir?', options: ['Lise diplomasından daha az', 'Lise diploması', 'Mesleki eğitim sertifikası (Ausbildung)', 'Üniversite derecesi (Lisans veya üstü)'] },
    { type: 'options', question: 'Almanca seviyeniz nedir?', options: ['Başlangıç (A1/A2)', 'Orta (B1/B2)', 'İleri (C1/C2)', 'Ana dil'] },
    { type: 'options', question: 'Herhangi bir alanda önceden iş deneyiminiz var mı?', options: ['Evet, geniş deneyim', 'Evet, biraz deneyim', 'Hayır, iş deneyimi yok', 'Sadece stajlar (Praktikum)'] },
    { type: 'text', question: 'Son olarak, dikkate almamızı istediğiniz özel bir tutkunuz veya ilginiz var mı?' },
  ],
  uk: [
    { type: 'text', id: 'name', question: 'Для початку, як вас звати?' },
    { type: 'number', id: 'age', question: 'Скільки вам років?' },
    { type: 'options', question: 'Якому робочому середовищу ви віддаєте перевагу?', options: ['Тихий та організований офіс', 'Динамічне та мінливе середовище', 'На відкритому повітрі або в майстерні', 'Гнучка віддалена робота'] },
    { type: 'options', question: 'Який рівень соціальної взаємодії на роботі ви віддаєте перевагу?', options: ['Працювати над завданнями самостійно', 'Працювати в невеликій команді', 'Постійна взаємодія з клієнтами та громадськістю', 'Керувати великими командами'] },
    { type: 'options', question: 'Як ви справляєтеся зі складними завданнями?', options: ['Я розбиваю їх на маленькі кроки', 'Я шукаю творчі рішення', 'Я прошу допомоги у колег', 'Я зустрічаю їх з ентузіазмом'] },
    { type: 'options', question: 'Що вас найбільше мотивує?', options: ['Досягнення відчутних результатів', 'Вивчення нових навичок', 'Допомога іншим', 'Отримання визнання та підвищення'] },
    { type: 'options', question: 'Які предмети вам найбільше подобалися в школі?', options: ['Математика та природничі науки', 'Мови та мистецтво', 'Спорт та ремесла', 'Історія та географія'] },
    { type: 'options', question: 'Як би ви описали свій стиль прийняття рішень?', options: ['Аналітичний та на основі даних', 'Інтуїтивний та швидкий', 'Спільний та з урахуванням думок інших', 'Обережний та продуманий'] },
    { type: 'options', question: 'Наскільки для вас важливі зарплата та фінансова стабільність?', options: ['Найважливіше', 'Важливо, але не все', 'Менш важливо, ніж задоволення від роботи', 'Не важливо в короткостроковій перспективі'] },
    { type: 'options', question: 'Ви віддаєте перевагу рутинній роботі чи різноманітним завданням?', options: ['Я віддаю перевагу рутині та стабільності', 'Я люблю різноманітність та нові виклики', 'Добре, коли є поєднання обох', 'Мені все одно, аби робота була виконана'] },
    { type: 'options', question: 'Яку роль відіграє технологія у вашій ідеальній роботі?', options: ['Центральну та життєво важливу, я працюю з новітніми технологіями', 'Допоміжний інструмент, але не в центрі уваги', 'Я віддаю перевагу роботі, яка не сильно залежить від технологій', 'Немає особливих переваг'] },
    { type: 'options', question: 'Як ви справляєтеся з тиском та дедлайнами?', options: ['Я найкраще працюю під тиском', 'Я відчуваю стрес, але виконую завдання', 'Я намагаюся уникати тиску, наскільки це можливо', 'Я планую наперед, щоб уникнути тиску'] },
    { type: 'options', question: 'Наскільки ви готові подорожувати по роботі?', options: ['Готовий подорожувати постійно', 'Згоден на періодичні поїздки', 'Я віддаю перевагу не подорожувати', 'Тільки в межах міста'] },
    { type: 'options', question: 'Яким з цих занять ви найбільше насолоджуєтеся у вільний час?', options: ['Читання та розгадування головоломок', 'Малювання або гра на музичному інструменті', 'Спорт або активний відпочинок на природі', 'Волонтерство та допомога іншим'] },
    { type: 'options', question: 'Наскільки важливим є постійний розвиток та навчання у вашій кар\'єрі?', options: ['Абсолютно необхідно, я завжди хочу вчитися', 'Важливо, щоб бути в курсі подій', 'Я віддаю перевагу стабільності у своїх поточних навичках', 'Не зацікавлений у навчанні після закінчення базової підготовки'] },
    { type: 'options', question: 'Ви віддаєте перевагу працювати руками чи головою?', options: ['Я віддаю перевагу використовувати руки для створення речей', 'Я віддаю перевагу вирішенню проблем та стратегічному мисленню', 'Мені подобається поєднання обох', 'Для мене немає різниці'] },
    { type: 'options', question: 'Як ви описуєте свою здатність адаптуватися до змін?', options: ['Я адаптуюся швидко і легко', 'Мені потрібен час, щоб пристосуватися', 'Мені важко звикати до змін', 'Я чиню опір змінам'] },
    { type: 'options', question: 'До якого рівня відповідальності ви прагнете?', options: ['Керування проектами або командами', 'Відповідальність лише за власну роботу', 'Бути частиною команди без керівної відповідальності', 'Я прагну мати власний бізнес'] },
    { type: 'options', question: 'Наскільки важливо для вас, щоб ваша робота мала позитивний вплив на суспільство?', options: ['Дуже важливо, я хочу щось змінити', 'Це добре, але не пріоритет', 'Я зосереджуюся на своїй особистій кар\'єрі', 'Я про це не думаю'] },
    { type: 'options', question: 'Чи подобається вам робота, що вимагає точності та уваги до деталей?', options: ['Так, мені це дуже подобається', 'Певною мірою', 'Ні, я віддаю перевагу загальній картині', 'Я можу це робити, якщо необхідно'] },
    { type: 'options', question: 'Яке ваше ставлення до ризику на роботі?', options: ['Мені подобаються прораховані ризики', 'Я віддаю перевагу залишатися в зоні комфорту', 'Я повністю уникаю ризиків', 'Я сміливий і йду на великі ризики'] },
    { type: 'options', question: 'Як ви ставитеся до критики?', options: ['Я приймаю її і вчуся на ній', 'Спочатку я засмучуюся, але потім вчуся', 'Мені важко приймати критику', 'Я схильний захищатися'] },
    { type: 'options', question: 'Наскільки важлива творчість у вашій роботі?', options: ['Дуже важлива, мені потрібно виражати свою творчість', 'Приємний бонус', 'Зовсім не важлива', 'Я віддаю перевагу дотриманню встановлених процедур'] },
    { type: 'options', question: 'Які проблеми вам подобається вирішувати?', options: ['Логічні та математичні проблеми', 'Людські та соціальні проблеми', 'Практичні та технічні проблеми', 'Стратегічні та бізнес-проблеми'] },
    { type: 'options', question: 'Який ваш ідеальний баланс між роботою та особистим життям?', options: ['Гнучкий графік та віддалена робота', 'Регулярний графік з 9 до 17', 'Я не проти працювати довго, щоб досягти своїх цілей', 'Я віддаю перевагу неповній зайнятості'] },
    { type: 'options', question: 'Ви віддаєте перевагу працювати у великій корпорації чи в невеликій компанії/стартапі?', options: ['Велика та стабільна корпорація', 'Маленька та динамічна компанія', 'Працювати на себе', 'Для мене немає різниці'] },
    { type: 'options', question: 'Який ваш поточний або запланований рівень освіти?', options: ['Нижче середньої освіти', 'Атестат про повну загальну середню освіту', 'Свідоцтво про професійне навчання (Ausbildung)', 'Вища освіта (бакалавр або вище)'] },
    { type: 'options', question: 'Який ваш рівень володіння німецькою мовою?', options: ['Початковий (A1/A2)', 'Середній (B1/B2)', 'Просунутий (C1/C2)', 'Рідна мова'] },
    { type: 'options', question: 'Чи маєте ви попередній досвід роботи в будь-якій галузі?', options: ['Так, великий досвід', 'Так, невеликий досвід', 'Ні, досвіду роботи немає', 'Тільки стажування (Praktikum)'] },
    { type: 'text', question: 'Нарешті, чи є у вас якась особлива пристрасть або інтерес, який ми повинні врахувати?' },
  ]
};

export const professions = [
  {
    title: {
      ar: 'مطور برمجيات',
      de: 'Softwareentwickler/in',
      en: 'Software Developer',
      tr: 'Yazılım Geliştirici',
      uk: 'Розробник програмного забезпечення',
    },
    category: 'job',
    duration: {
      ar: 'يختلف (عادةً يتطلب درجة جامعية أو تدريبًا مكثفًا)',
      de: 'Variiert (meist Studium oder intensive Ausbildung)',
      en: 'Varies (usually requires a degree or intensive training)',
      tr: 'Değişir (genellikle bir derece veya yoğun eğitim gerektirir)',
      uk: 'Різниться (зазвичай вимагає вищої освіти або інтенсивного навчання)',
    },
    salary: {
      ar: '€45,000 - €75,000 سنويًا',
      de: '€45.000 - €75.000/Jahr',
      en: '€45,000 - €75,000/year',
      tr: '€45.000 - €75.000/yıl',
      uk: '€45,000 - €75,000/рік',
    },
    salaryRange: {
      ar: '€3,500 - €6,000 شهرياً',
      de: '€3.500 - €6.000/Monat',
      en: '€3,500 - €6,000/month',
      tr: '€3.500 - €6.000/ay',
      uk: '€3,500 - €6,000/місяць',
    },
    jobOutlook: {
      ar: 'ممتازة',
      de: 'Ausgezeichnet',
      en: 'Excellent',
      tr: 'Mükemmel',
      uk: 'Відмінні',
    },
    requirements: {
      ar: 'مهارات برمجية قوية، تفكير منطقي، شهادة في علوم الحاسوب أو مجال ذي صلة.',
      de: 'Starke Programmierkenntnisse, logisches Denken, Abschluss in Informatik oder verwandtem Feld.',
      en: 'Strong programming skills, logical thinking, degree in Computer Science or related field.',
      tr: 'Güçlü programlama becerileri, mantıksal düşünme, Bilgisayar Bilimleri veya ilgili alanda bir derece.',
      uk: 'Сильні навички програмування, логічне мислення, диплом у галузі комп\'ютерних наук або суміжній галузі.',
    },
    duties: {
      ar: 'تصميم وتطوير واختبار وصيانة تطبيقات البرمجيات.',
      de: 'Entwurf, Entwicklung, Test und Wartung von Softwareanwendungen.',
      en: 'Designing, developing, testing, and maintaining software applications.',
      tr: 'Yazılım uygulamaları tasarlamak, geliştirmek, test etmek ve bakımını yapmak.',
      uk: 'Проектування, розробка, тестування та підтримка програмних додатків.',
    },
    skillsRequired: {
      ar: 'حل المشكلات، الاهتمام بالتفاصيل، التعاون الجماعي، التعلم المستمر',
      de: 'Problemlösung, Detailgenauigkeit, Teamarbeit, kontinuierliches Lernen',
      en: 'Problem-solving, attention to detail, teamwork, continuous learning',
      tr: 'Problem çözme, detaylara dikkat, takım çalışması, sürekli öğrenme',
      uk: 'Вирішення проблем, увага до деталей, командна робота, безперервне навчання',
    },
  },
  {
    title: {
      ar: 'ممرض/ممرضة',
      de: 'Pflegefachmann/Pflegefachfrau',
      en: 'Nurse',
      tr: 'Hemşire',
      uk: 'Медсестра/Медбрат',
    },
    category: 'ausbildung',
    duration: {
      ar: '3 سنوات',
      de: '3 Jahre',
      en: '3 years',
      tr: '3 yıl',
      uk: '3 роки',
    },
    salary: {
      ar: '€1,100 - €1,300 شهريًا (أثناء التدريب)',
      de: '€1.100 - €1.300/Monat (während der Ausbildung)',
      en: '€1,100 - €1,300/month (during training)',
      tr: '€1.100 - €1.300/ay (eğitim sırasında)',
      uk: '€1,100 - €1,300/місяць (під час навчання)',
    },
    salaryRange: {
      ar: '€2,800 - €3,800 شهرياً',
      de: '€2.800 - €3.800/Monat',
      en: '€2,800 - €3,800/month',
      tr: '€2.800 - €3.800/ay',
      uk: '€2,800 - €3,800/місяць',
    },
    jobOutlook: {
      ar: 'ممتازة',
      de: 'Ausgezeichnet',
      en: 'Excellent',
      tr: 'Mükemmel',
      uk: 'Відмінні',
    },
    requirements: {
      ar: 'شهادة Realschulabschluss، تعاطف، مرونة جسدية ونفسية.',
      de: 'Realschulabschluss, Empathie, körperliche und psychische Belastbarkeit.',
      en: 'Intermediate school certificate, empathy, physical and psychological resilience.',
      tr: 'Ortaokul diploması, empati, fiziksel ve psikolojik dayanıklılık.',
      uk: 'Атестат про середню освіту, емпатія, фізична та психологічна стійкість.',
    },
    duties: {
      ar: 'رعاية المرضى، إعطاء الأدوية، توثيق الإجراءات الطبية، دعم الأطباء.',
      de: 'Pflege von Patienten, Verabreichung von Medikamenten, Dokumentation von medizinischen Maßnahmen, Unterstützung von Ärzten.',
      en: 'Caring for patients, administering medication, documenting medical procedures, assisting doctors.',
      tr: 'Hastaların bakımı, ilaçların uygulanması, tıbbi prosedürlerin belgelenmesi, doktorlara yardımcı olmak.',
      uk: 'Догляд за пацієнтами, введення ліків, документування медичних процедур, допомога лікарям.',
    },
    skillsRequired: {
      ar: 'مهارات تواصل، تعاطف، مسؤولية، قدرة على العمل تحت الضغط',
      de: 'Kommunikationsfähigkeit, Empathie, Verantwortungsbewusstsein, Belastbarkeit',
      en: 'Communication skills, empathy, responsibility, ability to work under pressure',
      tr: 'İletişim becerileri, empati, sorumluluk, baskı altında çalışabilme becerisi',
      uk: 'Комунікативні навички, емпатія, відповідальність, здатність працювати під тиском',
    },
  },
  {
    title: {
      ar: 'ميكانيكي سيارات (ميكاترونيك)',
      de: 'KFZ-Mechatroniker/in',
      en: 'Automotive Mechatronics Technician',
      tr: 'Otomotiv Mekatronik Teknisyeni',
      uk: 'Автомобільний технік-мехатронік',
    },
    category: 'ausbildung',
    duration: {
      ar: '3.5 سنوات',
      de: '3,5 Jahre',
      en: '3.5 years',
      tr: '3.5 yıl',
      uk: '3,5 роки',
    },
    salary: {
      ar: '€800 - €1,100 شهريًا (أثناء التدريب)',
      de: '€800 - €1.100/Monat (während der Ausbildung)',
      en: '€800 - €1,100/month (during training)',
      tr: '€800 - €1.100/ay (eğitim sırasında)',
      uk: '€800 - €1,100/місяць (під час навчання)',
    },
    salaryRange: {
      ar: '€2,500 - €3,500 شهرياً',
      de: '€2.500 - €3.500/Monat',
      en: '€2,500 - €3,500/month',
      tr: '€2.500 - €3.500/ay',
      uk: '€2,500 - €3,500/місяць',
    },
    jobOutlook: {
      ar: 'جيدة',
      de: 'Gut',
      en: 'Good',
      tr: 'İyi',
      uk: 'Хороші',
    },
    requirements: {
      ar: 'شهادة Hauptschulabschluss أو Realschulabschluss، فهم تقني، مهارات يدوية.',
      de: 'Hauptschulabschluss oder Realschulabschluss, technisches Verständnis, handwerkliches Geschick.',
      en: 'Basic or intermediate school certificate, technical understanding, manual skills.',
      tr: 'Temel veya ortaokul diploması, teknik anlayış, el becerileri.',
      uk: 'Базова або середня шкільна освіта, технічне розуміння, ручні навички.',
    },
    duties: {
      ar: 'صيانة وإصلاح وتشخيص المركبات، بما في ذلك الأنظمة الميكانيكية والإلكترونية.',
      de: 'Wartung, Reparatur und Diagnose von Fahrzeugen, einschließlich mechanischer und elektronischer Systeme.',
      en: 'Maintaining, repairing, and diagnosing vehicles, including mechanical and electronic systems.',
      tr: 'Mekanik ve elektronik sistemler dahil olmak üzere araçların bakımı, onarımı ve teşhisi.',
      uk: 'Технічне обслуговування, ремонт та діагностика транспортних засобів, включаючи механічні та електронні системи.',
    },
    skillsRequired: {
      ar: 'مهارات تحليلية، دقة، عمل موجه للعملاء، تعلم مستمر',
      de: 'Analytische Fähigkeiten, Genauigkeit, kundenorientiertes Arbeiten, ständiges Lernen',
      en: 'Analytical skills, precision, customer-oriented work, continuous learning',
      tr: 'Analitik beceriler, hassasiyet, müşteri odaklı çalışma, sürekli öğrenme',
      uk: 'Аналітичні навички, точність, клієнтоорієнтована робота, безперервне навчання',
    },
  },
  {
    title: {
      ar: 'دراسة إدارة الأعمال (BWL)',
      de: 'Betriebswirtschaftslehre (BWL) Studium',
      en: 'Business Administration Studies',
      tr: 'İşletme Yönetimi Eğitimi',
      uk: 'Вивчення ділового адміністрування',
    },
    category: 'study',
    duration: {
      ar: '3 سنوات (بكالوريوس)',
      de: '3 Jahre (Bachelor)',
      en: '3 years (Bachelor)',
      tr: '3 yıl (Lisans)',
      uk: '3 роки (бакалавр)',
    },
    salary: {
      ar: 'لا يوجد راتب (ممكن الحصول على وظيفة طالب)',
      de: 'Kein Gehalt (Werkstudentenjobs möglich)',
      en: 'No salary (student jobs possible)',
      tr: 'Maaş yok (öğrenci işleri mümkün)',
      uk: 'Без зарплати (можлива робота для студентів)',
    },
    salaryRange: {
      ar: '€3,500 - €5,500 شهرياً (بعد التخرج)',
      de: '€3.500 - €5.500/Monat (nach Abschluss)',
      en: '€3,500 - €5,500/month (after graduation)',
      tr: '€3.500 - €5.500/ay (mezuniyet sonrası)',
      uk: '€3,500 - €5,500/місяць (після закінчення)',
    },
    jobOutlook: {
      ar: 'جيدة جداً',
      de: 'Sehr gut',
      en: 'Very good',
      tr: 'Çok iyi',
      uk: 'Дуже хороші',
    },
    requirements: {
      ar: 'شهادة Abitur أو ما يعادلها، مهارات تحليلية، اهتمام بالاقتصاد.',
      de: 'Abitur oder gleichwertiger Abschluss, analytische Fähigkeiten, Interesse an Wirtschaft.',
      en: 'High school diploma (Abitur) or equivalent, analytical skills, interest in economics.',
      tr: 'Lise diploması (Abitur) veya eşdeğeri, analitik beceriler, ekonomiye ilgi.',
      uk: 'Атестат про повну загальну середню освіту (Abitur) або еквівалент, аналітичні навички, інтерес до економіки.',
    },
    duties: {
      ar: 'فهم وتحليل العمليات التجارية، وتولي مهام في مجالات مثل التسويق، والتمويل، والموارد البشرية.',
      de: 'Verständnis und Analyse von Geschäftsprozessen, Übernahme von Aufgaben in Bereichen wie Marketing, Finanzen, Personal.',
      en: 'Understanding and analyzing business processes, taking on tasks in areas like marketing, finance, human resources.',
      tr: 'Pazarlama, finans, insan kaynakları gibi alanlarda görevler alarak iş süreçlerini anlama ve analiz etme.',
      uk: 'Розуміння та аналіз бізнес-процесів, виконання завдань у таких сферах, як маркетинг, фінанси, управління персоналом.',
    },
    skillsRequired: {
      ar: 'تفكير استراتيجي، مهارات تواصل، قدرة على التنظيم، مهارات قيادية',
      de: 'Strategisches Denken, Kommunikationsfähigkeit, Organisationstalent, Führungskompetenz',
      en: 'Strategic thinking, communication skills, organizational talent, leadership skills',
      tr: 'Stratejik düşünme, iletişim becerileri, organizasyon yeteneği, liderlik becerileri',
      uk: 'Стратегічне мислення, комунікативні навички, організаторські здібності, лідерські якості',
    },
  },
  {
    title: {
      ar: 'مصمم جرافيك',
      de: 'Grafikdesigner/in',
      en: 'Graphic Designer',
      tr: 'Grafik Tasarımcı',
      uk: 'Графічний дизайнер',
    },
    category: 'ausbildung',
    duration: {
      ar: '3 سنوات (تدريب مدرسي)',
      de: '3 Jahre (schulische Ausbildung)',
      en: '3 years (school-based training)',
      tr: '3 yıl (okul tabanlı eğitim)',
      uk: '3 роки (шкільне навчання)',
    },
    salary: {
      ar: 'غير مدفوع الأجر (قد يتم تطبيق رسوم مدرسية)',
      de: 'Unvergütet (ggf. Schulgeld)',
      en: 'Unpaid (school fees may apply)',
      tr: 'Ücretsiz (okul ücretleri uygulanabilir)',
      uk: 'Неоплачуване (може стягуватися плата за навчання)',
    },
    salaryRange: {
      ar: '€2,400 - €3,800 شهرياً',
      de: '€2.400 - €3.800/Monat',
      en: '€2,400 - €3,800/month',
      tr: '€2.400 - €3.800/ay',
      uk: '€2,400 - €3,800/місяць',
    },
    jobOutlook: {
      ar: 'متوسطة',
      de: 'Mittel',
      en: 'Moderate',
      tr: 'Orta',
      uk: 'Помірні',
    },
    requirements: {
      ar: 'شهادة Realschulabschluss، إبداع، مهارات في برامج التصميم (Adobe Creative Suite).',
      de: 'Realschulabschluss, Kreativität, Kenntnisse in Design-Software (Adobe Creative Suite).',
      en: 'Intermediate school certificate, creativity, skills in design software (Adobe Creative Suite).',
      tr: 'Ortaokul diploması, yaratıcılık, tasarım yazılımı becerileri (Adobe Creative Suite).',
      uk: 'Атестат про середню освіту, творчість, навички роботи з дизайнерським програмним забезпеченням (Adobe Creative Suite).',
    },
    duties: {
      ar: 'إنشاء مفاهيم بصرية للشركات، بما في ذلك الشعارات والمواقع الإلكترونية والمواد التسويقية.',
      de: 'Erstellung von visuellen Konzepten für Unternehmen, einschließlich Logos, Websites und Marketingmaterialien.',
      en: 'Creating visual concepts for companies, including logos, websites, and marketing materials.',
      tr: 'Logolar, web siteleri ve pazarlama materyalleri dahil olmak üzere şirketler için görsel konseptler oluşturmak.',
      uk: 'Створення візуальних концепцій для компаній, включаючи логотипи, веб-сайти та маркетингові матеріали.',
    },
    skillsRequired: {
      ar: 'إبداع، اهتمام بالتفاصيل، مهارات تواصل، إدارة الوقت',
      de: 'Kreativität, Liebe zum Detail, Kommunikationsfähigkeit, Zeitmanagement',
      en: 'Creativity, attention to detail, communication skills, time management',
      tr: 'Yaratıcılık, detaylara dikkat, iletişim becerileri, zaman yönetimi',
      uk: 'Творчість, увага до деталей, комунікативні навички, управління часом',
    },
  },
  {
    title: {
      ar: 'كهربائي/كهربائية',
      de: 'Elektroniker/in',
      en: 'Electrician',
      tr: 'Elektrikçi',
      uk: 'Електрик',
    },
    category: 'ausbildung',
    duration: {
      ar: '3.5 سنوات',
      de: '3,5 Jahre',
      en: '3.5 years',
      tr: '3.5 yıl',
      uk: '3,5 роки',
    },
    salary: {
      ar: '€850 - €1,200 شهريًا (أثناء التدريب)',
      de: '€850 - €1.200/Monat (während der Ausbildung)',
      en: '€850 - €1,200/month (during training)',
      tr: '€850 - €1.200/ay (eğitim sırasında)',
      uk: '€850 - €1,200/місяць (під час навчання)',
    },
    salaryRange: {
      ar: '€2,800 - €3,800 شهرياً',
      de: '€2.800 - €3.800/Monat',
      en: '€2,800 - €3,800/month',
      tr: '€2.800 - €3.800/ay',
      uk: '€2,800 - €3,800/місяць',
    },
    jobOutlook: {
      ar: 'جيدة جداً',
      de: 'Sehr gut',
      en: 'Very good',
      tr: 'Çok iyi',
      uk: 'Дуже хороші',
    },
    requirements: {
      ar: 'شهادة Hauptschulabschluss أو Realschulabschluss، فهم تقني، عمل دقيق.',
      de: 'Hauptschulabschluss oder Realschulabschluss, technisches Verständnis, sorgfältiges Arbeiten.',
      en: 'Basic or intermediate school certificate, technical understanding, careful work.',
      tr: 'Temel veya ortaokul diploması, teknik anlayış, dikkatli çalışma.',
      uk: 'Базова або середня шкільна освіта, технічне розуміння, акуратна робота.',
    },
    duties: {
      ar: 'تركيب وصيانة وإصلاح الأنظمة والتركيبات الكهربائية.',
      de: 'Installation, Wartung und Reparatur von elektrischen Anlagen und Installationen.',
      en: 'Installing, maintaining, and repairing electrical systems and installations.',
      tr: 'Elektrik sistem ve tesisatlarının kurulumu, bakımı ve onarımı.',
      uk: 'Монтаж, технічне обслуговування та ремонт електричних систем та установок.',
    },
    skillsRequired: {
      ar: 'مهارات يدوية، وعي بالسلامة، تفكير منطقي، دقة',
      de: 'Handwerkliches Geschick, Sicherheitsbewusstsein, logisches Denken, Genauigkeit',
      en: 'Manual dexterity, safety awareness, logical thinking, precision',
      tr: 'El becerisi, güvenlik bilinci, mantıksal düşünme, hassasiyet',
      uk: 'Ручні навички, усвідомлення безпеки, логічне мислення, точність',
    },
  },
  {
    title: {
      ar: 'طباخ/طباخة',
      de: 'Koch/Köchin',
      en: 'Cook/Chef',
      tr: 'Aşçı',
      uk: 'Кухар/Шеф-кухар',
    },
    category: 'ausbildung',
    duration: {
      ar: '3 سنوات',
      de: '3 Jahre',
      en: '3 years',
      tr: '3 yıl',
      uk: '3 роки',
    },
    salary: {
      ar: '€700 - €1,000 شهريًا (أثناء التدريب)',
      de: '€700 - €1.000/Monat (während der Ausbildung)',
      en: '€700 - €1,000/month (during training)',
      tr: '€700 - €1.000/ay (eğitim sırasında)',
      uk: '€700 - €1,000/місяць (під час навчання)',
    },
    salaryRange: {
      ar: '€2,200 - €3,200 شهرياً',
      de: '€2.200 - €3.200/Monat',
      en: '€2,200 - €3,200/month',
      tr: '€2.200 - €3.200/ay',
      uk: '€2,200 - €3,200/місяць',
    },
    jobOutlook: {
      ar: 'جيدة',
      de: 'Gut',
      en: 'Good',
      tr: 'İyi',
      uk: 'Хороші',
    },
    requirements: {
      ar: 'شهادة Hauptschulabschluss، إبداع، قدرة على التحمل، عمل جماعي.',
      de: 'Hauptschulabschluss, Kreativität, Belastbarkeit, Teamfähigkeit.',
      en: 'Basic school certificate, creativity, resilience, teamwork.',
      tr: 'Temel okul diploması, yaratıcılık, dayanıklılık, takım çalışması.',
      uk: 'Базова шкільна освіта, творчість, стійкість, командна робота.',
    },
    duties: {
      ar: 'تحضير وطهي الأطباق، تخطيط القوائم، تنظيم عمليات المطبخ.',
      de: 'Zubereitung und Kochen von Speisen, Planung von Menüs, Organisation von Küchenabläufen.',
      en: 'Preparing and cooking dishes, planning menus, organizing kitchen operations.',
      tr: 'Yemeklerin hazırlanması ve pişirilmesi, menülerin planlanması, mutfak operasyonlarının organize edilmesi.',
      uk: 'Приготування страв, планування меню, організація роботи кухні.',
    },
    skillsRequired: {
      ar: 'إبداع، إدارة الوقت، قدرة على العمل تحت الضغط، اهتمام بالجودة',
      de: 'Kreativität, Zeitmanagement, Belastbarkeit, Qualitätsbewusstsein',
      en: 'Creativity, time management, ability to work under pressure, quality awareness',
      tr: 'Yaratıcılık, zaman yönetimi, baskı altında çalışabilme becerisi, kalite bilinci',
      uk: 'Творчість, управління часом, здатність працювати під тиском, усвідомлення якості',
    },
  },
  {
    title: {
      ar: 'معلم/معلمة رياض أطفال',
      de: 'Erzieher/in',
      en: 'Kindergarten Teacher/Educator',
      tr: 'Anaokulu Öğretmeni/Eğitimci',
      uk: 'Вихователь/Вихователька дитячого садка',
    },
    category: 'ausbildung',
    duration: {
      ar: '3-5 سنوات (تدريب مدرسي)',
      de: '3-5 Jahre (schulische Ausbildung)',
      en: '3-5 years (school-based training)',
      tr: '3-5 yıl (okul tabanlı eğitim)',
      uk: '3-5 років (шкільне навчання)',
    },
    salary: {
      ar: 'يختلف (قد يكون غير مدفوع الأجر أو مدفوعًا)',
      de: 'Variiert (kann unvergütet oder vergütet sein)',
      en: 'Varies (can be unpaid or paid)',
      tr: 'Değişir (ücretsiz veya ücretli olabilir)',
      uk: 'Різниться (може бути неоплачуваним або оплачуваним)',
    },
    salaryRange: {
      ar: '€2,800 - €3,800 شهرياً',
      de: '€2.800 - €3.800/Monat',
      en: '€2,800 - €3,800/month',
      tr: '€2.800 - €3.800/ay',
      uk: '€2,800 - €3,800/місяць',
    },
    jobOutlook: {
      ar: 'ممتازة',
      de: 'Ausgezeichnet',
      en: 'Excellent',
      tr: 'Mükemmel',
      uk: 'Відмінні',
    },
    requirements: {
      ar: 'شهادة Realschulabschluss، صبر، إبداع، مسؤولية.',
      de: 'Realschulabschluss, Geduld, Kreativität, Verantwortungsbewusstsein.',
      en: 'Intermediate school certificate, patience, creativity, responsibility.',
      tr: 'Ortaokul diploması, sabır, yaratıcılık, sorumluluk.',
      uk: 'Атестат про середню освіту, терпіння, творчість, відповідальність.',
    },
    duties: {
      ar: 'رعاية وتعليم الأطفال، تخطيط الأنشطة التربوية، التواصل مع أولياء الأمور.',
      de: 'Betreuung und Erziehung von Kindern, Planung von pädagogischen Aktivitäten, Kommunikation mit Eltern.',
      en: 'Caring for and educating children, planning educational activities, communicating with parents.',
      tr: 'Çocukların bakımı ve eğitimi, eğitici faaliyetlerin planlanması, ebeveynlerle iletişim.',
      uk: 'Догляд та виховання дітей, планування освітніх заходів, спілкування з батьками.',
    },
    skillsRequired: {
      ar: 'تعاطف، مهارات تواصل، صبر، قدرة على التنظيم',
      de: 'Empathie, Kommunikationsfähigkeit, Geduld, Organisationstalent',
      en: 'Empathy, communication skills, patience, organizational skills',
      tr: 'Empati, iletişim becerileri, sabır, organizasyon becerileri',
      uk: 'Емпатія, комунікативні навички, терпіння, організаторські здібності',
    },
  },
  {
    title: {
      ar: 'صيدلي/صيدلانية',
      de: 'Apotheker/in',
      en: 'Pharmacist',
      tr: 'Eczacı',
      uk: 'Фармацевт',
    },
    category: 'study',
    duration: {
      ar: '5 سنوات (دراسة جامعية)',
      de: '5 Jahre (Studium)',
      en: '5 years (University study)',
      tr: '5 yıl (Üniversite eğitimi)',
      uk: '5 років (Університетське навчання)',
    },
    salary: {
      ar: 'لا يوجد راتب أثناء الدراسة',
      de: 'Kein Gehalt während des Studiums',
      en: 'No salary during study',
      tr: 'Eğitim sırasında maaş yok',
      uk: 'Немає зарплати під час навчання',
    },
    salaryRange: {
      ar: '€4,000 - €5,500 شهرياً',
      de: '€4.000 - €5.500/Monat',
      en: '€4,000 - €5,500/month',
      tr: '€4.000 - €5.500/ay',
      uk: '€4,000 - €5,500/місяць',
    },
    jobOutlook: {
      ar: 'جيدة جداً',
      de: 'Sehr gut',
      en: 'Very good',
      tr: 'Çok iyi',
      uk: 'Дуже хороші',
    },
    requirements: {
      ar: 'شهادة الثانوية العامة (Abitur)، دراسة الصيدلة، ترخيص مزاولة المهنة',
      de: 'Abitur, Pharmaziestudium, Approbation',
      en: 'High school diploma (Abitur), pharmacy studies, license to practice',
      tr: 'Lise diploması (Abitur), eczacılık eğitimi, çalışma izni',
      uk: 'Атестат про повну загальну середню освіту (Abitur), фармацевтична освіта, ліцензія на практику',
    },
    duties: {
      ar: 'صرف الأدوية، تقديم المشورة للمرضى حول الأدوية، تصنيع بعض الأدوية، إدارة الصيدلية.',
      de: 'Abgabe von Medikamenten, Beratung von Patienten über Arzneimittel, Herstellung von Rezepturen, Verwaltung der Apotheke.',
      en: 'Dispensing medications, advising patients on drugs, manufacturing certain pharmaceuticals, managing the pharmacy.',
      tr: 'İlaçları hazırlamak, hastalara ilaçlar hakkında danışmanlık yapmak, belirli ilaçları üretmek, eczaneyi yönetmek.',
      uk: 'Видача ліків, консультування пацієнтів щодо ліків, виготовлення деяких лікарських засобів, управління аптекою.',
    },
    skillsRequired: {
      ar: 'دقة عالية، معرفة علمية، مهارات تواصل، حس بالمسؤولية',
      de: 'Hohe Genauigkeit, wissenschaftliches Wissen, Kommunikationsfähigkeit, Verantwortungsbewusstsein',
      en: 'High accuracy, scientific knowledge, communication skills, sense of responsibility',
      tr: 'Yüksek doğruluk, bilimsel bilgi, iletişim becerileri, sorumluluk duygusu',
      uk: 'Висока точність, наукові знання, комунікативні навички, почуття відповідальності',
    }
  },
  {
    title: {
        ar: 'فني تدفئة وتكييف وصرف صحي',
        de: 'Anlagenmechaniker/in für Sanitär-, Heizungs- und Klimatechnik',
        en: 'Plumber/Heating and Air Conditioning Technician',
        tr: 'Sıhhi Tesisat, Isıtma ve Klima Teknisyeni',
        uk: 'Технік із санітарних, опалювальних та кондиціонерних систем'
    },
    category: 'ausbildung',
    duration: {
        ar: '3.5 سنوات',
        de: '3,5 Jahre',
        en: '3.5 years',
        tr: '3.5 yıl',
        uk: '3,5 роки'
    },
    salary: {
        ar: '€750 - €1,150 شهريًا (أثناء التدريب)',
        de: '€750 - €1.150/Monat (während der Ausbildung)',
        en: '€750 - €1,150/month (during training)',
        tr: '€750 - €1.150/ay (eğitim sırasında)',
        uk: '€750 - €1,150/місяць (під час навчання)'
    },
    salaryRange: {
        ar: '€2,900 - €3,900 شهرياً',
        de: '€2.900 - €3.900/Monat',
        en: '€2,900 - €3,900/month',
        tr: '€2.900 - €3.900/ay',
        uk: '€2,900 - €3,900/місяць'
    },
    jobOutlook: {
        ar: 'ممتازة',
        de: 'Ausgezeichnet',
        en: 'Excellent',
        tr: 'Mükemmel',
        uk: 'Відмінні'
    },
    requirements: {
        ar: 'شهادة Hauptschulabschluss، مهارات يدوية، فهم تقني.',
        de: 'Hauptschulabschluss, handwerkliches Geschick, technisches Verständnis.',
        en: 'Basic school certificate, manual skills, technical understanding.',
        tr: 'Temel okul diploması, el becerileri, teknik anlayış.',
        uk: 'Базова шкільна освіта, ручні навички, технічне розуміння.'
    },
    duties: {
        ar: 'تركيب وصيانة أنظمة التدفئة والتكييف والصرف الصحي.',
        de: 'Installation und Wartung von Heizungs-, Klima- und Sanitäranlagen.',
        en: 'Installing and maintaining heating, air conditioning, and plumbing systems.',
        tr: 'Isıtma, klima ve sıhhi tesisat sistemlerinin kurulumu ve bakımı.',
        uk: 'Монтаж та обслуговування систем опалення, кондиціонування та сантехніки.'
    },
    skillsRequired: {
        ar: 'مهارات حل المشكلات، دقة، توجه نحو العملاء، وعي بالسلامة.',
        de: 'Problemlösungsfähigkeit, Sorgfalt, Kundenorientierung, Sicherheitsbewusstsein.',
        en: 'Problem-solving skills, diligence, customer focus, safety awareness.',
        tr: 'Problem çözme becerileri, özen, müşteri odaklılık, güvenlik bilinci.',
        uk: 'Навички вирішення проблем, старанність, клієнтоорієнтованість, усвідомлення безпеки.'
    }
  },
  {
      title: {
          ar: 'مصرفي',
          de: 'Bankkaufmann/Bankkauffrau',
          en: 'Bank Clerk',
          tr: 'Bankacı',
          uk: 'Банківський службовець'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€1,050 - €1,200 شهريًا (أثناء التدريب)',
          de: '€1.050 - €1.200/Monat (während der Ausbildung)',
          en: '€1,050 - €1,200/month (during training)',
          tr: '€1.050 - €1.200/ay (eğitim sırasında)',
          uk: '€1,050 - €1,200/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€3,000 - €4,500 شهرياً',
          de: '€3.000 - €4.500/Monat',
          en: '€3,000 - €4,500/month',
          tr: '€3.000 - €4.500/ay',
          uk: '€3,000 - €4,500/місяць'
      },
      jobOutlook: {
          ar: 'متوسطة',
          de: 'Mittel',
          en: 'Moderate',
          tr: 'Orta',
          uk: 'Помірні'
      },
      requirements: {
          ar: 'شهادة Realschulabschluss أو Abitur، اهتمام بالأمور المالية، مهارات تواصل.',
          de: 'Realschulabschluss oder Abitur, Interesse an Finanzen, Kommunikationsstärke.',
          en: 'Intermediate or high school certificate, interest in finance, communication skills.',
          tr: 'Ortaokul veya lise diploması, finansa ilgi, iletişim becerileri.',
          uk: 'Середня або вища шкільна освіта, інтерес до фінансів, комунікативні навички.'
      },
      duties: {
          ar: 'تقديم المشورة للعملاء بشأن المنتجات المالية، معالجة المعاملات، إدارة الحسابات.',
          de: 'Kundenberatung zu Finanzprodukten, Abwicklung von Transaktionen, Kontoführung.',
          en: 'Advising customers on financial products, processing transactions, managing accounts.',
          tr: 'Finansal ürünler hakkında müşterilere danışmanlık yapmak, işlemleri yürütmek, hesapları yönetmek.',
          uk: 'Консультування клієнтів щодо фінансових продуктів, обробка транзакцій, ведення рахунків.'
      },
      skillsRequired: {
          ar: 'مهارات بيع، دقة، جدارة بالثقة، مهارات عددية.',
          de: 'Verkaufstalent, Genauigkeit, Vertrauenswürdigkeit, Zahlenverständnis.',
          en: 'Sales skills, accuracy, trustworthiness, numeracy.',
          tr: 'Satış becerileri, doğruluk, güvenilirlik, sayısal yetenek.',
          uk: 'Навички продажів, точність, надійність, вміння рахувати.'
      }
  },
  {
      title: {
          ar: 'عالم أحياء',
          de: 'Biologe/Biologin',
          en: 'Biologist',
          tr: 'Biyolog',
          uk: 'Біолог'
      },
      category: 'study',
      duration: {
          ar: '5 سنوات (بكالوريوس + ماجستير)',
          de: '5 Jahre (Bachelor + Master)',
          en: '5 years (Bachelor + Master)',
          tr: '5 yıl (Lisans + Yüksek Lisans)',
          uk: '5 років (бакалавр + магістр)'
      },
      salary: {
          ar: 'لا يوجد راتب (ممكن الحصول على وظيفة طالب)',
          de: 'Kein Gehalt (Werkstudentenjobs möglich)',
          en: 'No salary (student jobs possible)',
          tr: 'Maaş yok (öğrenci işleri mümkün)',
          uk: 'Без зарплати (можлива робота для студентів)'
      },
      salaryRange: {
          ar: '€3,800 - €5,500 شهرياً',
          de: '€3.800 - €5.500/Monat',
          en: '€3,800 - €5,500/month',
          tr: '€3.800 - €5.500/ay',
          uk: '€3,800 - €5,500/місяць'
      },
      jobOutlook: {
          ar: 'جيدة',
          de: 'Gut',
          en: 'Good',
          tr: 'İyi',
          uk: 'Хороші'
      },
      requirements: {
          ar: 'شهادة Abitur، دراسة علم الأحياء، شغف بالبحث العلمي.',
          de: 'Abitur, Biologiestudium, Leidenschaft für Forschung.',
          en: 'High school diploma (Abitur), biology studies, passion for research.',
          tr: 'Lise diploması (Abitur), biyoloji eğitimi, araştırma tutkusu.',
          uk: 'Атестат про повну загальну середню освіту (Abitur), вивчення біології, пристрасть до досліджень.'
      },
      duties: {
          ar: 'إجراء أبحاث في المختبر أو الميدان، تحليل البيانات، نشر النتائج العلمية.',
          de: 'Forschung im Labor oder Feld durchführen, Daten analysieren, wissenschaftliche Ergebnisse veröffentlichen.',
          en: 'Conducting research in labs or in the field, analyzing data, publishing scientific findings.',
          tr: 'Laboratuvarda veya sahada araştırma yapmak, verileri analiz etmek, bilimsel bulguları yayınlamak.',
          uk: 'Проведення досліджень у лабораторіях або в польових умовах, аналіз даних, публікація наукових результатів.'
      },
      skillsRequired: {
          ar: 'تفكير تحليلي، صبر، دقة، فضول علمي.',
          de: 'Analytisches Denken, Geduld, Genauigkeit, wissenschaftliche Neugier.',
          en: 'Analytical thinking, patience, accuracy, scientific curiosity.',
          tr: 'Analitik düşünme, sabır, doğruluk, bilimsel merak.',
          uk: 'Аналітичне мислення, терпіння, точність, наукова допитливість.'
      }
  },
  {
      title: {
          ar: 'نجار',
          de: 'Tischler/in (Schreiner/in)',
          en: 'Carpenter/Joiner',
          tr: 'Marangoz',
          uk: 'Столяр'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€700 - €950 شهريًا (أثناء التدريب)',
          de: '€700 - €950/Monat (während der Ausbildung)',
          en: '€700 - €950/month (during training)',
          tr: '€700 - €950/ay (eğitim sırasında)',
          uk: '€700 - €950/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,500 - €3,400 شهرياً',
          de: '€2.500 - €3.400/Monat',
          en: '€2,500 - €3,400/month',
          tr: '€2.500 - €3.400/ay',
          uk: '€2,500 - €3,400/місяць'
      },
      jobOutlook: {
          ar: 'جيدة',
          de: 'Gut',
          en: 'Good',
          tr: 'İyi',
          uk: 'Хороші'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، مهارات يدوية، إدراك مكاني.',
          de: 'Hauptschulabschluss, handwerkliches Geschick, räumliches Vorstellungsvermögen.',
          en: 'Basic school certificate, manual skills, spatial awareness.',
          tr: 'Temel okul diploması, el becerileri, mekansal farkındalık.',
          uk: 'Базова шкільна освіта, ручні навички, просторове уявлення.'
      },
      duties: {
          ar: 'صناعة وإصلاح الأثاث والنوافذ والأبواب والمكونات الخشبية الأخرى.',
          de: 'Herstellung und Reparatur von Möbeln, Fenstern, Türen und anderen Holzbauteilen.',
          en: 'Making and repairing furniture, windows, doors, and other wooden components.',
          tr: 'Mobilya, pencere, kapı ve diğer ahşap bileşenleri yapmak ve onarmak.',
          uk: 'Виготовлення та ремонт меблів, вікон, дверей та інших дерев\'яних компонентів.'
      },
      skillsRequired: {
          ar: 'دقة، إبداع، فهم رياضي، قوة بدنية.',
          de: 'Präzision, Kreativität, mathematisches Verständnis, körperliche Fitness.',
          en: 'Precision, creativity, mathematical understanding, physical fitness.',
          tr: 'Hassasiyet, yaratıcılık, matematiksel anlayış, fiziksel uygunluk.',
          uk: 'Точність, творчість, математичне розуміння, фізична підготовка.'
      }
  },
  {
      title: {
          ar: 'مهندس معماري',
          de: 'Architekt/in',
          en: 'Architect',
          tr: 'Mimar',
          uk: 'Архітектор'
      },
      category: 'study',
      duration: {
          ar: '5 سنوات (بكالوريوس + ماجستير)',
          de: '5 Jahre (Bachelor + Master)',
          en: '5 years (Bachelor + Master)',
          tr: '5 yıl (Lisans + Yüksek Lisans)',
          uk: '5 років (бакалавр + магістр)'
      },
      salary: {
          ar: 'لا يوجد راتب (ممكن الحصول على وظيفة طالب)',
          de: 'Kein Gehalt (Werkstudentenjobs möglich)',
          en: 'No salary (student jobs possible)',
          tr: 'Maaş yok (öğrenci işleri mümkün)',
          uk: 'Без зарплати (можлива робота для студентів)'
      },
      salaryRange: {
          ar: '€3,500 - €6,000 شهرياً',
          de: '€3.500 - €6.000/Monat',
          en: '€3,500 - €6,000/month',
          tr: '€3.500 - €6.000/ay',
          uk: '€3,500 - €6,000/місяць'
      },
      jobOutlook: {
          ar: 'متوسطة',
          de: 'Mittel',
          en: 'Moderate',
          tr: 'Orta',
          uk: 'Помірні'
      },
      requirements: {
          ar: 'شهادة Abitur، دراسة الهندسة المعمارية، إبداع، فهم تقني.',
          de: 'Abitur, Architekturstudium, Kreativität, technisches Verständnis.',
          en: 'High school diploma (Abitur), architecture studies, creativity, technical understanding.',
          tr: 'Lise diploması (Abitur), mimarlık eğitimi, yaratıcılık, teknik anlayış.',
          uk: 'Атестат про повну загальну середню освіту (Abitur), вивчення архітектури, творчість, технічне розуміння.'
      },
      duties: {
          ar: 'تصميم وتخطيط والإشراف على بناء المباني.',
          de: 'Entwerfen, Planen und Überwachen des Baus von Gebäuden.',
          en: 'Designing, planning, and supervising the construction of buildings.',
          tr: 'Binaların tasarımını, planlamasını ve inşaatını denetlemek.',
          uk: 'Проектування, планування та нагляд за будівництвом будівель.'
      },
      skillsRequired: {
          ar: 'تفكير مكاني، مهارات تصميم، معرفة بالبناء، مهارات تنظيمية.',
          de: 'Räumliches Denken, Designfähigkeiten, Baukenntnisse, organisatorische Fähigkeiten.',
          en: 'Spatial thinking, design skills, construction knowledge, organizational skills.',
          tr: 'Mekansal düşünme, tasarım becerileri, inşaat bilgisi, organizasyon becerileri.',
          uk: 'Просторове мислення, дизайнерські навички, знання будівництва, організаторські здібності.'
      }
  },
  {
      title: {
          ar: 'مساعد طبيب أسنان',
          de: 'Zahnmedizinische/r Fachangestellte/r (ZFA)',
          en: 'Dental Assistant',
          tr: 'Diş Hekimi Asistanı',
          uk: 'Асистент стоматолога'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€800 - €1,000 شهريًا (أثناء التدريب)',
          de: '€800 - €1.000/Monat (während der Ausbildung)',
          en: '€800 - €1,000/month (during training)',
          tr: '€800 - €1.000/ay (eğitim sırasında)',
          uk: '€800 - €1,000/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,200 - €2,900 شهرياً',
          de: '€2.200 - €2.900/Monat',
          en: '€2,200 - €2,900/month',
          tr: '€2.200 - €2.900/ay',
          uk: '€2,200 - €2,900/місяць'
      },
      jobOutlook: {
          ar: 'جيدة جداً',
          de: 'Sehr gut',
          en: 'Very good',
          tr: 'Çok iyi',
          uk: 'Дуже хороші'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، مهارات يدوية دقيقة، تعاطف.',
          de: 'Hauptschulabschluss, feines handwerkliches Geschick, Einfühlungsvermögen.',
          en: 'Basic school certificate, fine motor skills, empathy.',
          tr: 'Temel okul diploması, ince motor becerileri, empati.',
          uk: 'Базова шкільна освіта, дрібна моторика, емпатія.'
      },
      duties: {
          ar: 'المساعدة في علاجات الأسنان، تنظيم المواعيد، إدارة شؤون المرضى.',
          de: 'Assistenz bei Zahnbehandlungen, Terminorganisation, Patientenverwaltung.',
          en: 'Assisting with dental treatments, organizing appointments, managing patient affairs.',
          tr: 'Diş tedavilerinde asistanlık yapmak, randevuları organize etmek, hasta işlerini yönetmek.',
          uk: 'Асистування при стоматологічних процедурах, організація прийомів, ведення справ пацієнтів.'
      },
      skillsRequired: {
          ar: 'مهارات تنظيمية، دقة، مهارات تواصل، هدوء.',
          de: 'Organisationsgeschick, Sorgfalt, Kommunikationsfähigkeit, ruhige Art.',
          en: 'Organizational skills, diligence, communication skills, calm demeanor.',
          tr: 'Organizasyon becerileri, özen, iletişim becerileri, sakin mizaç.',
          uk: 'Організаторські здібності, старанність, комунікативні навички, спокійний характер.'
      }
  },
  {
      title: {
          ar: 'أخصائي علاج طبيعي',
          de: 'Physiotherapeut/in',
          en: 'Physiotherapist',
          tr: 'Fizyoterapist',
          uk: 'Фізіотерапевт'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات (تدريب مدرسي)',
          de: '3 Jahre (schulische Ausbildung)',
          en: '3 years (school-based training)',
          tr: '3 yıl (okul tabanlı eğitim)',
          uk: '3 роки (шкільне навчання)'
      },
      salary: {
          ar: 'غير مدفوع الأجر (قد يتم تطبيق رسوم مدرسية)',
          de: 'Unvergütet (ggf. Schulgeld)',
          en: 'Unpaid (school fees may apply)',
          tr: 'Ücretsiz (okul ücretleri uygulanabilir)',
          uk: 'Неоплачуване (може стягуватися плата за навчання)'
      },
      salaryRange: {
          ar: '€2,800 - €3,800 شهرياً',
          de: '€2.800 - €3.800/Monat',
          en: '€2,800 - €3,800/month',
          tr: '€2.800 - €3.800/ay',
          uk: '€2,800 - €3,800/місяць'
      },
      jobOutlook: {
          ar: 'ممتازة',
          de: 'Ausgezeichnet',
          en: 'Excellent',
          tr: 'Mükemmel',
          uk: 'Відмінні'
      },
      requirements: {
          ar: 'شهادة Realschulabschluss، اهتمام بالطب، لياقة بدنية.',
          de: 'Realschulabschluss, Interesse an Medizin, körperliche Fitness.',
          en: 'Intermediate school certificate, interest in medicine, physical fitness.',
          tr: 'Ortaokul diploması, tıbba ilgi, fiziksel uygunluk.',
          uk: 'Атестат про середню освіту, інтерес до медицини, фізична підготовка.'
      },
      duties: {
          ar: 'علاج المرضى الذين يعانون من قيود حركية من خلال التمارين والتدليك.',
          de: 'Behandlung von Patienten mit Bewegungseinschränkungen durch Übungen und Massagen.',
          en: 'Treating patients with mobility restrictions through exercises and massages.',
          tr: 'Egzersizler ve masajlarla hareket kısıtlılığı olan hastaları tedavi etmek.',
          uk: 'Лікування пацієнтів з обмеженнями рухливості за допомогою вправ та масажу.'
      },
      skillsRequired: {
          ar: 'تعاطف، مهارات تحفيزية، معرفة تشريحية، صبر.',
          de: 'Empathie, Motivationsfähigkeit, anatomische Kenntnisse, Geduld.',
          en: 'Empathy, motivational skills, anatomical knowledge, patience.',
          tr: 'Empati, motivasyon becerileri, anatomi bilgisi, sabır.',
          uk: 'Емпатія, мотиваційні навички, знання анатомії, терпіння.'
      }
  },
  {
      title: {
          ar: 'أخصائي لوجستيات المستودعات',
          de: 'Fachkraft für Lagerlogistik',
          en: 'Warehouse Logistics Specialist',
          tr: 'Depo Lojistiği Uzmanı',
          uk: 'Спеціаліст зі складської логістики'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€850 - €1,100 شهريًا (أثناء التدريب)',
          de: '€850 - €1.100/Monat (während der Ausbildung)',
          en: '€850 - €1,100/month (during training)',
          tr: '€850 - €1.100/ay (eğitim sırasında)',
          uk: '€850 - €1,100/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,400 - €3,200 شهرياً',
          de: '€2.400 - €3.200/Monat',
          en: '€2,400 - €3,200/month',
          tr: '€2.400 - €3.200/ay',
          uk: '€2,400 - €3,200/місяць'
      },
      jobOutlook: {
          ar: 'جيدة جداً',
          de: 'Sehr gut',
          en: 'Very good',
          tr: 'Çok iyi',
          uk: 'Дуже хороші'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، مهارات تنظيمية، فهم أساسي للحاسوب.',
          de: 'Hauptschulabschluss, Organisationstalent, grundlegende PC-Kenntnisse.',
          en: 'Basic school certificate, organizational skills, basic computer knowledge.',
          tr: 'Temel okul diploması, organizasyon becerileri, temel bilgisayar bilgisi.',
          uk: 'Базова шкільна освіта, організаторські здібності, базові знання комп\'ютера.'
      },
      duties: {
          ar: 'استلام وتخزين وشحن البضائع، تحسين عمليات المستودعات.',
          de: 'Annahme, Lagerung und Versand von Gütern, Optimierung von Lagerprozessen.',
          en: 'Receiving, storing, and shipping goods, optimizing warehouse processes.',
          tr: 'Malları teslim almak, depolamak ve göndermek, depo süreçlerini optimize etmek.',
          uk: 'Приймання, зберігання та відвантаження товарів, оптимізація складських процесів.'
      },
      skillsRequired: {
          ar: 'مهارات تنظيمية، دقة، لياقة بدنية، عمل جماعي.',
          de: 'Organisationsfähigkeit, Genauigkeit, körperliche Fitness, Teamarbeit.',
          en: 'Organizational skills, accuracy, physical fitness, teamwork.',
          tr: 'Organizasyon becerileri, doğruluk, fiziksel uygunluk, takım çalışması.',
          uk: 'Організаторські здібності, точність, фізична підготовка, командна робота.'
      }
  },
  {
      title: {
          ar: 'بائع تجزئة',
          de: 'Kaufmann/Kauffrau im Einzelhandel',
          en: 'Retail Salesperson',
          tr: 'Perakende Satış Elemanı',
          uk: 'Продавець-консультант у роздрібній торгівлі'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€800 - €1,000 شهريًا (أثناء التدريب)',
          de: '€800 - €1.000/Monat (während der Ausbildung)',
          en: '€800 - €1,000/month (during training)',
          tr: '€800 - €1.000/ay (eğitim sırasında)',
          uk: '€800 - €1,000/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,100 - €2,800 شهرياً',
          de: '€2.100 - €2.800/Monat',
          en: '€2,100 - €2,800/month',
          tr: '€2.100 - €2.800/ay',
          uk: '€2,100 - €2,800/місяць'
      },
      jobOutlook: {
          ar: 'جيدة',
          de: 'Gut',
          en: 'Good',
          tr: 'İyi',
          uk: 'Хороші'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، الاستمتاع بالتواصل مع العملاء، مظهر أنيق.',
          de: 'Hauptschulabschluss, Freude am Kundenkontakt, gepflegtes Erscheinungsbild.',
          en: 'Basic school certificate, enjoyment of customer contact, neat appearance.',
          tr: 'Temel okul diploması, müşteriyle iletişimden keyif alma, düzgün görünüm.',
          uk: 'Базова шкільна освіта, задоволення від спілкування з клієнтами, охайний вигляд.'
      },
      duties: {
          ar: 'بيع البضائع، تقديم المشورة للعملاء، إدارة عمليات الدفع، ترتيب المتجر.',
          de: 'Verkauf von Waren, Kundenberatung, Kassiertätigkeiten, Warenpräsentation.',
          en: 'Selling goods, advising customers, cashier duties, product presentation.',
          tr: 'Mal satmak, müşterilere danışmanlık yapmak, kasada çalışmak, ürün sunumu yapmak.',
          uk: 'Продаж товарів, консультування клієнтів, робота на касі, презентація товарів.'
      },
      skillsRequired: {
          ar: 'مهارات تواصل، توجه نحو العملاء، مرونة، مهارات عددية.',
          de: 'Kommunikationsstärke, Kundenorientierung, Flexibilität, Rechenkenntnisse.',
          en: 'Communication skills, customer focus, flexibility, numeracy skills.',
          tr: 'İletişim becerileri, müşteri odaklılık, esneklik, aritmetik becerileri.',
          uk: 'Комунікативні навички, клієнтоорієнтованість, гнучкість, навички лічби.'
      }
  },
  {
      title: {
          ar: 'مهندس ميكانيكي',
          de: 'Maschinenbauingenieur/in',
          en: 'Mechanical Engineer',
          tr: 'Makine Mühendisi',
          uk: 'Інженер-механік'
      },
      category: 'study',
      duration: {
          ar: '5 سنوات (بكالوريوس + ماجستير)',
          de: '5 Jahre (Bachelor + Master)',
          en: '5 years (Bachelor + Master)',
          tr: '5 yıl (Lisans + Yüksek Lisans)',
          uk: '5 років (бакалавр + магістр)'
      },
      salary: {
          ar: 'لا يوجد راتب (ممكن الحصول على وظيفة طالب)',
          de: 'Kein Gehalt (Werkstudentenjobs möglich)',
          en: 'No salary (student jobs possible)',
          tr: 'Maaş yok (öğrenci işleri mümkün)',
          uk: 'Без зарплати (можлива робота для студентів)'
      },
      salaryRange: {
          ar: '€4,500 - €7,000 شهرياً',
          de: '€4.500 - €7.000/Monat',
          en: '€4,500 - €7,000/month',
          tr: '€4.500 - €7.000/ay',
          uk: '€4,500 - €7,000/місяць'
      },
      jobOutlook: {
          ar: 'ممتازة',
          de: 'Ausgezeichnet',
          en: 'Excellent',
          tr: 'Mükemmel',
          uk: 'Відмінні'
      },
      requirements: {
          ar: 'شهادة Abitur، دراسة الهندسة الميكانيكية، فهم تقني عميق.',
          de: 'Abitur, Maschinenbaustudium, tiefes technisches Verständnis.',
          en: 'High school diploma (Abitur), mechanical engineering studies, deep technical understanding.',
          tr: 'Lise diploması (Abitur), makine mühendisliği eğitimi, derin teknik anlayış.',
          uk: 'Атестат про повну загальну середню освіту (Abitur), вивчення машинобудування, глибоке технічне розуміння.'
      },
      duties: {
          ar: 'تطوير وتصميم وبناء الآلات والأنظمة.',
          de: 'Entwicklung, Konstruktion und Bau von Maschinen und Anlagen.',
          en: 'Developing, designing, and constructing machines and systems.',
          tr: 'Makinelerin ve sistemlerin geliştirilmesi, tasarlanması ve inşası.',
          uk: 'Розробка, проектування та конструювання машин і систем.'
      },
      skillsRequired: {
          ar: 'تفكير تحليلي، إبداع، معرفة بالمواد، مهارات برامج التصميم بمساعدة الحاسوب (CAD).',
          de: 'Analytisches Denken, Kreativität, Materialkenntnisse, CAD-Kenntnisse.',
          en: 'Analytical thinking, creativity, knowledge of materials, CAD skills.',
          tr: 'Analitik düşünme, yaratıcılık, malzeme bilgisi, CAD becerileri.',
          uk: 'Аналітичне мислення, творчість, знання матеріалів, навички роботи з CAD.'
      }
  },
  {
      title: {
          ar: 'أخصائي تكنولوجيا المعلومات - تكامل الأنظمة',
          de: 'Fachinformatiker/in für Systemintegration',
          en: 'IT Specialist - System Integration',
          tr: 'Bilişim Uzmanı - Sistem Entegrasyonu',
          uk: 'ІТ-спеціаліст - Системна інтеграція'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€950 - €1,150 شهريًا (أثناء التدريب)',
          de: '€950 - €1.150/Monat (während der Ausbildung)',
          en: '€950 - €1,150/month (during training)',
          tr: '€950 - €1.150/ay (eğitim sırasında)',
          uk: '€950 - €1,150/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€3,200 - €4,500 شهرياً',
          de: '€3.200 - €4.500/Monat',
          en: '€3,200 - €4,500/month',
          tr: '€3.200 - €4.500/ay',
          uk: '€3,200 - €4,500/місяць'
      },
      jobOutlook: {
          ar: 'ممتازة',
          de: 'Ausgezeichnet',
          en: 'Excellent',
          tr: 'Mükemmel',
          uk: 'Відмінні'
      },
      requirements: {
          ar: 'شهادة Realschulabschluss، تفكير منطقي، اهتمام بالشبكات والأجهزة.',
          de: 'Realschulabschluss, logisches Denken, Interesse an Netzwerken und Hardware.',
          en: 'Intermediate school certificate, logical thinking, interest in networks and hardware.',
          tr: 'Ortaokul diploması, mantıksal düşünme, ağlara ve donanıma ilgi.',
          uk: 'Атестат про середню освіту, логічне мислення, інтерес до мереж та апаратного забезпечення.'
      },
      duties: {
          ar: 'تخطيط وتركيب وإدارة أنظمة وشبكات تكنولوجيا المعلومات.',
          de: 'Planung, Installation und Verwaltung von IT-Systemen und Netzwerken.',
          en: 'Planning, installing, and managing IT systems and networks.',
          tr: 'BT sistemleri ve ağlarının planlanması, kurulması ve yönetilmesi.',
          uk: 'Планування, встановлення та управління ІТ-системами та мережами.'
      },
      skillsRequired: {
          ar: 'مهارات تحليلية، توجه نحو الخدمة، تعلم مستمر، صبر.',
          de: 'Analytische Fähigkeiten, Serviceorientierung, ständiges Lernen, Geduld.',
          en: 'Analytical skills, service orientation, continuous learning, patience.',
          tr: 'Analitik beceriler, hizmet odaklılık, sürekli öğrenme, sabır.',
          uk: 'Аналітичні навички, сервісна орієнтація, безперервне навчання, терпіння.'
      }
  },
  {
      title: {
          ar: 'مساعد قانوني',
          de: 'Rechtsanwaltsfachangestellte/r',
          en: 'Paralegal',
          tr: 'Hukuk Asistanı',
          uk: 'Помічник юриста'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€700 - €1,000 شهريًا (أثناء التدريب)',
          de: '€700 - €1.000/Monat (während der Ausbildung)',
          en: '€700 - €1,000/month (during training)',
          tr: '€700 - €1.000/ay (eğitim sırasında)',
          uk: '€700 - €1,000/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,400 - €3,300 شهرياً',
          de: '€2.400 - €3.300/Monat',
          en: '€2,400 - €3,300/month',
          tr: '€2.400 - €3.300/ay',
          uk: '€2,400 - €3,300/місяць'
      },
      jobOutlook: {
          ar: 'جيدة',
          de: 'Gut',
          en: 'Good',
          tr: 'İyi',
          uk: 'Хороші'
      },
      requirements: {
          ar: 'شهادة Realschulabschluss، مهارات لغوية جيدة، دقة.',
          de: 'Realschulabschluss, gute Sprachkenntnisse, Sorgfalt.',
          en: 'Intermediate school certificate, good language skills, diligence.',
          tr: 'Ortaokul diploması, iyi dil becerileri, özen.',
          uk: 'Атестат про середню освіту, добрі мовні навички, старанність.'
      },
      duties: {
          ar: 'دعم المحامين في المهام التنظيمية والإدارية، إعداد المستندات، التواصل مع العملاء.',
          de: 'Unterstützung von Anwälten bei organisatorischen und administrativen Aufgaben, Erstellung von Dokumenten, Kommunikation mit Mandanten.',
          en: 'Supporting lawyers with organizational and administrative tasks, preparing documents, communicating with clients.',
          tr: 'Avukatlara organizasyonel ve idari görevlerde destek olmak, belgeler hazırlamak, müvekkillerle iletişim kurmak.',
          uk: 'Підтримка юристів у організаційних та адміністративних завданнях, підготовка документів, спілкування з клієнтами.'
      },
      skillsRequired: {
          ar: 'مهارات تنظيمية، تقدير، اهتمام بالتفاصيل، مهارات تواصل.',
          de: 'Organisationstalent, Diskretion, Detailgenauigkeit, Kommunikationsfähigkeit.',
          en: 'Organizational skills, discretion, attention to detail, communication skills.',
          tr: 'Organizasyon becerileri, gizlilik, detaylara dikkat, iletişim becerileri.',
          uk: 'Організаторські здібності, обачність, увага до деталей, комунікативні навички.'
      }
  },
  {
      title: {
          ar: 'مصفف شعر',
          de: 'Friseur/in',
          en: 'Hairdresser',
          tr: 'Kuaför',
          uk: 'Перукар'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€550 - €800 شهريًا (أثناء التدريب)',
          de: '€550 - €800/Monat (während der Ausbildung)',
          en: '€550 - €800/month (during training)',
          tr: '€550 - €800/ay (eğitim sırasında)',
          uk: '€550 - €800/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€1,800 - €2,500 شهرياً (بالإضافة إلى البقشيش)',
          de: '€1.800 - €2.500/Monat (zzgl. Trinkgeld)',
          en: '€1,800 - €2,500/month (plus tips)',
          tr: '€1.800 - €2.500/ay (artı bahşiş)',
          uk: '€1,800 - €2,500/місяць (плюс чайові)'
      },
      jobOutlook: {
          ar: 'جيدة',
          de: 'Gut',
          en: 'Good',
          tr: 'İyi',
          uk: 'Хороші'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، إبداع، مهارات تواصل.',
          de: 'Hauptschulabschluss, Kreativität, Kommunikationsstärke.',
          en: 'Basic school certificate, creativity, communication skills.',
          tr: 'Temel okul diploması, yaratıcılık, iletişim becerileri.',
          uk: 'Базова шкільна освіта, творчість, комунікативні навички.'
      },
      duties: {
          ar: 'تقديم المشورة للعملاء، قص وتلوين وتصفيف الشعر، العناية بفروة الرأس.',
          de: 'Kundenberatung, Schneiden, Färben und Stylen von Haaren, Kopfhautpflege.',
          en: 'Advising customers, cutting, coloring, and styling hair, scalp care.',
          tr: 'Müşterilere danışmanlık yapmak, saç kesmek, boyamak ve şekillendirmek, saç derisi bakımı yapmak.',
          uk: 'Консультування клієнтів, стрижка, фарбування та укладання волосся, догляд за шкірою голови.'
      },
      skillsRequired: {
          ar: 'مهارات يدوية، حس جمالي، توجه نحو العملاء، ودود.',
          de: 'Handwerkliches Geschick, Sinn für Ästhetik, Kundenorientierung, Freundlichkeit.',
          en: 'Manual dexterity, sense of aesthetics, customer focus, friendliness.',
          tr: 'El becerisi, estetik anlayışı, müşteri odaklılık, güler yüzlülük.',
          uk: 'Ручні навички, почуття естетики, клієнтоорієнтованість, дружелюбність.'
      }
  },
  {
      title: {
          ar: 'طبيب',
          de: 'Arzt/Ärztin',
          en: 'Doctor/Physician',
          tr: 'Doktor/Hekim',
          uk: 'Лікар'
      },
      category: 'study',
      duration: {
          ar: '6 سنوات (دراسة) + 5-6 سنوات (تخصص)',
          de: '6 Jahre (Studium) + 5-6 Jahre (Facharzt)',
          en: '6 years (study) + 5-6 years (specialization)',
          tr: '6 yıl (eğitim) + 5-6 yıl (uzmanlık)',
          uk: '6 років (навчання) + 5-6 років (спеціалізація)'
      },
      salary: {
          ar: 'لا يوجد راتب أثناء الدراسة',
          de: 'Kein Gehalt während des Studiums',
          en: 'No salary during study',
          tr: 'Eğitim sırasında maaş yok',
          uk: 'Без зарплати під час навчання'
      },
      salaryRange: {
          ar: '€5,000 - €10,000+ شهرياً',
          de: '€5.000 - €10.000+/Monat',
          en: '€5,000 - €10,000+/month',
          tr: '€5.000 - €10.000+/ay',
          uk: '€5,000 - €10,000+/місяць'
      },
      jobOutlook: {
          ar: 'ممتازة',
          de: 'Ausgezeichnet',
          en: 'Excellent',
          tr: 'Mükemmel',
          uk: 'Відмінні'
      },
      requirements: {
          ar: 'شهادة Abitur بتقدير ممتاز (Numerus Clausus)، دراسة الطب، ترخيص مزاولة المهنة.',
          de: 'Abitur mit exzellentem Notendurchschnitt (Numerus Clausus), Medizinstudium, Approbation.',
          en: 'High school diploma (Abitur) with excellent grades (Numerus Clausus), medical studies, license to practice.',
          tr: 'Mükemmel not ortalamasına sahip lise diploması (Abitur) (Numerus Clausus), tıp eğitimi, çalışma izni.',
          uk: 'Атестат про повну загальну середню освіту (Abitur) з відмінними оцінками (Numerus Clausus), медична освіта, ліцензія на практику.'
      },
      duties: {
          ar: 'تشخيص وعلاج الأمراض، تقديم الرعاية للمرضى، إجراء الفحوصات.',
          de: 'Diagnose und Behandlung von Krankheiten, Betreuung von Patienten, Durchführung von Untersuchungen.',
          en: 'Diagnosing and treating illnesses, caring for patients, conducting examinations.',
          tr: 'Hastalıkları teşhis etmek ve tedavi etmek, hastaların bakımını yapmak, muayeneler yapmak.',
          uk: 'Діагностика та лікування захворювань, догляд за пацієнтами, проведення обстежень.'
      },
      skillsRequired: {
          ar: 'حس بالمسؤولية، قدرة على التحمل، تعاطف، مهارات اتخاذ القرار.',
          de: 'Verantwortungsbewusstsein, Belastbarkeit, Empathie, Entscheidungsfähigkeit.',
          en: 'Sense of responsibility, resilience, empathy, decision-making skills.',
          tr: 'Sorumluluk duygusu, dayanıklılık, empati, karar verme becerileri.',
          uk: 'Почуття відповідальності, стійкість, емпатія, навички прийняття рішень.'
      }
  },
  {
      title: {
          ar: 'مدير فندق',
          de: 'Hotelfachmann/Hotelfachfrau',
          en: 'Hotel Specialist',
          tr: 'Otelcilik Uzmanı',
          uk: 'Готельний спеціаліст'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€750 - €1,000 شهريًا (أثناء التدريب)',
          de: '€750 - €1.000/Monat (während der Ausbildung)',
          en: '€750 - €1,000/month (during training)',
          tr: '€750 - €1.000/ay (eğitim sırasında)',
          uk: '€750 - €1,000/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,300 - €3,100 شهرياً',
          de: '€2.300 - €3.100/Monat',
          en: '€2,300 - €3,100/month',
          tr: '€2.300 - €3.100/ay',
          uk: '€2,300 - €3,100/місяць'
      },
      jobOutlook: {
          ar: 'جيدة',
          de: 'Gut',
          en: 'Good',
          tr: 'İyi',
          uk: 'Хороші'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، توجه نحو الخدمة، مرونة.',
          de: 'Hauptschulabschluss, Serviceorientierung, Flexibilität.',
          en: 'Basic school certificate, service orientation, flexibility.',
          tr: 'Temel okul diploması, hizmet odaklılık, esneklik.',
          uk: 'Базова шкільна освіта, сервісна орієнтація, гнучкість.'
      },
      duties: {
          ar: 'العمل في جميع أقسام الفندق (الاستقبال، المطعم، خدمة الغرف)، تنظيم الفعاليات.',
          de: 'Arbeit in allen Hotelbereichen (Rezeption, Restaurant, Zimmerservice), Organisation von Veranstaltungen.',
          en: 'Working in all hotel departments (reception, restaurant, room service), organizing events.',
          tr: 'Tüm otel departmanlarında (resepsiyon, restoran, oda servisi) çalışmak, etkinlikler düzenlemek.',
          uk: 'Робота у всіх відділах готелю (рецепція, ресторан, обслуговування номерів), організація заходів.'
      },
      skillsRequired: {
          ar: 'مهارات تنظيمية، مهارات تواصل، تعدد المهام، ودود.',
          de: 'Organisationstalent, Kommunikationsfähigkeit, Multitasking, Freundlichkeit.',
          en: 'Organizational skills, communication skills, multitasking, friendliness.',
          tr: 'Organizasyon becerileri, iletişim becerileri, çoklu görev yeteneği, güler yüzlülük.',
          uk: 'Організаторські здібності, комунікативні навички, багатозадачність, дружелюбність.'
      }
  },
  {
      title: {
          ar: 'مزارع',
          de: 'Landwirt/in',
          en: 'Farmer',
          tr: 'Çiftçi',
          uk: 'Фермер'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€700 - €900 شهريًا (أثناء التدريب)',
          de: '€700 - €900/Monat (während der Ausbildung)',
          en: '€700 - €900/month (during training)',
          tr: '€700 - €900/ay (eğitim sırasında)',
          uk: '€700 - €900/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,200 - €3,000 شهرياً',
          de: '€2.200 - €3.000/Monat',
          en: '€2,200 - €3,000/month',
          tr: '€2.200 - €3.000/ay',
          uk: '€2,200 - €3,000/місяць'
      },
      jobOutlook: {
          ar: 'مستقرة',
          de: 'Stabil',
          en: 'Stable',
          tr: 'İstikrarlı',
          uk: 'Стабільні'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، حب الطبيعة، قوة بدنية.',
          de: 'Hauptschulabschluss, Liebe zur Natur, körperliche Belastbarkeit.',
          en: 'Basic school certificate, love of nature, physical resilience.',
          tr: 'Temel okul diploması, doğa sevgisi, fiziksel dayanıklılık.',
          uk: 'Базова шкільна освіта, любов до природи, фізична витривалість.'
      },
      duties: {
          ar: 'زراعة المحاصيل، تربية الحيوانات، تشغيل الآلات الزراعية.',
          de: 'Anbau von Pflanzen, Aufzucht von Tieren, Bedienung von Landmaschinen.',
          en: 'Cultivating crops, raising animals, operating agricultural machinery.',
          tr: 'Ekin yetiştirmek, hayvan yetiştirmek, tarım makinelerini kullanmak.',
          uk: 'Вирощування сільськогосподарських культур, розведення тварин, робота з сільськогосподарською технікою.'
      },
      skillsRequired: {
          ar: 'مهارات تنظيمية، فهم تقني، معرفة بيولوجية، مرونة.',
          de: 'Organisationsfähigkeit, technisches Verständnis, biologisches Wissen, Flexibilität.',
          en: 'Organizational skills, technical understanding, biological knowledge, flexibility.',
          tr: 'Organizasyon becerileri, teknik anlayış, biyolojik bilgi, esneklik.',
          uk: 'Організаторські здібності, технічне розуміння, біологічні знання, гнучкість.'
      }
  },
  {
      title: {
          ar: 'دهان',
          de: 'Maler/in und Lackierer/in',
          en: 'Painter and Varnisher',
          tr: 'Boya ve Vernik Ustası',
          uk: 'Маляр та лакувальник'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€700 - €900 شهريًا (أثناء التدريب)',
          de: '€700 - €900/Monat (während der Ausbildung)',
          en: '€700 - €900/month (during training)',
          tr: '€700 - €900/ay (eğitim sırasında)',
          uk: '€700 - €900/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,500 - €3,300 شهرياً',
          de: '€2.500 - €3.300/Monat',
          en: '€2,500 - €3,300/month',
          tr: '€2.500 - €3.300/ay',
          uk: '€2,500 - €3,300/місяць'
      },
      jobOutlook: {
          ar: 'جيدة',
          de: 'Gut',
          en: 'Good',
          tr: 'İyi',
          uk: 'Хороші'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، مهارات يدوية، عدم وجود حساسية من الألوان والمذيبات.',
          de: 'Hauptschulabschluss, handwerkliches Geschick, keine Allergien gegen Farben und Lösungsmittel.',
          en: 'Basic school certificate, manual skills, no allergies to paints and solvents.',
          tr: 'Temel okul diploması, el becerileri, boya ve solventlere alerjisi olmamak.',
          uk: 'Базова шкільна освіта, ручні навички, відсутність алергії на фарби та розчинники.'
      },
      duties: {
          ar: 'تجهيز الأسطح، دهن الجدران والواجهات، تطبيق الطلاءات والورق الجدراني.',
          de: 'Untergründe vorbereiten, Wände und Fassaden streichen, Lacke und Tapeten anbringen.',
          en: 'Preparing surfaces, painting walls and facades, applying varnishes and wallpapers.',
          tr: 'Yüzeyleri hazırlamak, duvarları ve cepheleri boyamak, vernik ve duvar kağıdı uygulamak.',
          uk: 'Підготовка поверхонь, фарбування стін та фасадів, нанесення лаків та шпалер.'
      },
      skillsRequired: {
          ar: 'دقة، حس بالألوان، عمل نظيف، لياقة بدنية.',
          de: 'Sorgfalt, Farbgefühl, sauberes Arbeiten, körperliche Fitness.',
          en: 'Diligence, color sense, clean work, physical fitness.',
          tr: 'Özen, renk anlayışı, temiz çalışma, fiziksel uygunluk.',
          uk: 'Старанність, відчуття кольору, акуратна робота, фізична підготовка.'
      }
  },
  {
      title: {
          ar: 'عامل اجتماعي',
          de: 'Sozialarbeiter/in',
          en: 'Social Worker',
          tr: 'Sosyal Hizmet Uzmanı',
          uk: 'Соціальний працівник'
      },
      category: 'study',
      duration: {
          ar: '3 سنوات (بكالوريوس)',
          de: '3 Jahre (Bachelor)',
          en: '3 years (Bachelor)',
          tr: '3 yıl (Lisans)',
          uk: '3 роки (бакалавр)'
      },
      salary: {
          ar: 'لا يوجد راتب (ممكن الحصول على تدريب عملي مدفوع الأجر)',
          de: 'Kein Gehalt (bezahlte Praktika möglich)',
          en: 'No salary (paid internships possible)',
          tr: 'Maaş yok (ücretli stajlar mümkün)',
          uk: 'Без зарплати (можливі оплачувані стажування)'
      },
      salaryRange: {
          ar: '€3,300 - €4,500 شهرياً',
          de: '€3.300 - €4.500/Monat',
          en: '€3,300 - €4,500/month',
          tr: '€3.300 - €4.500/ay',
          uk: '€3,300 - €4,500/місяць'
      },
      jobOutlook: {
          ar: 'جيدة جداً',
          de: 'Sehr gut',
          en: 'Very good',
          tr: 'Çok iyi',
          uk: 'Дуже хороші'
      },
      requirements: {
          ar: 'شهادة Abitur أو Fachabitur، دراسة العمل الاجتماعي، تعاطف.',
          de: 'Abitur oder Fachabitur, Studium der Sozialen Arbeit, Empathie.',
          en: 'High school or specialized diploma, social work studies, empathy.',
          tr: 'Lise veya meslek lisesi diploması, sosyal hizmetler eğitimi, empati.',
          uk: 'Атестат про повну або фахову середню освіту, вивчення соціальної роботи, емпатія.'
      },
      duties: {
          ar: 'تقديم المشورة والدعم للأشخاص في المواقف الصعبة (مثل الإدمان، الديون، مشاكل الأسرة).',
          de: 'Beratung und Unterstützung von Menschen in schwierigen Lebenslagen (z.B. Sucht, Schulden, Familienprobleme).',
          en: 'Advising and supporting people in difficult life situations (e.g., addiction, debt, family problems).',
          tr: 'Zor yaşam durumlarındaki (ör. bağımlılık, borç, aile sorunları) insanlara danışmanlık ve destek sağlamak.',
          uk: 'Консультування та підтримка людей у складних життєвих ситуаціях (напр., залежність, борги, сімейні проблеми).'
      },
      skillsRequired: {
          ar: 'مهارات تواصل، تعاطف، قدرة على التحمل النفسي، معرفة قانونية.',
          de: 'Kommunikationsfähigkeit, Empathie, psychische Belastbarkeit, rechtliche Kenntnisse.',
          en: 'Communication skills, empathy, psychological resilience, legal knowledge.',
          tr: 'İletişim becerileri, empati, psikolojik dayanıklılık, yasal bilgi.',
          uk: 'Комунікативні навички, емпатія, психологічна стійкість, юридичні знання.'
      }
  },
  {
      title: {
          ar: 'خبير ضرائب',
          de: 'Steuerfachangestellte/r',
          en: 'Tax Clerk',
          tr: 'Vergi Danışmanı Asistanı',
          uk: 'Податковий консультант'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€850 - €1,100 شهريًا (أثناء التدريب)',
          de: '€850 - €1.100/Monat (während der Ausbildung)',
          en: '€850 - €1,100/month (during training)',
          tr: '€850 - €1.100/ay (eğitim sırasında)',
          uk: '€850 - €1,100/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,700 - €3,800 شهرياً',
          de: '€2.700 - €3.800/Monat',
          en: '€2,700 - €3,800/month',
          tr: '€2.700 - €3.800/ay',
          uk: '€2,700 - €3,800/місяць'
      },
      jobOutlook: {
          ar: 'ممتازة',
          de: 'Ausgezeichnet',
          en: 'Excellent',
          tr: 'Mükemmel',
          uk: 'Відмінні'
      },
      requirements: {
          ar: 'شهادة Realschulabschluss، فهم جيد للأرقام، دقة.',
          de: 'Realschulabschluss, gutes Zahlenverständnis, Genauigkeit.',
          en: 'Intermediate school certificate, good understanding of numbers, accuracy.',
          tr: 'Ortaokul diploması, iyi sayısal anlayış, doğruluk.',
          uk: 'Атестат про середню освіту, добре розуміння чисел, точність.'
      },
      duties: {
          ar: 'إعداد الإقرارات الضريبية، المحاسبة، كشوف المرتبات للعملاء.',
          de: 'Erstellung von Steuererklärungen, Buchführung und Lohnabrechnungen für Mandanten.',
          en: 'Preparing tax returns, bookkeeping, and payroll accounting for clients.',
          tr: 'Müvekkiller için vergi beyannameleri, defter tutma ve maaş bordroları hazırlamak.',
          uk: 'Підготовка податкових декларацій, ведення бухгалтерського обліку та розрахунок заробітної плати для клієнтів.'
      },
      skillsRequired: {
          ar: 'دقة، فهم للقوانين، جدارة بالثقة، مهارات تنظيمية.',
          de: 'Sorgfalt, Gesetzesverständnis, Vertrauenswürdigkeit, Organisationstalent.',
          en: 'Diligence, understanding of laws, trustworthiness, organizational skills.',
          tr: 'Özen, yasa bilgisi, güvenilirlik, organizasyon becerileri.',
          uk: 'Старанність, розуміння законів, надійність, організаторські здібності.'
      }
  },
  {
      title: {
          ar: 'مصور فوتوغرافي',
          de: 'Fotograf/in',
          en: 'Photographer',
          tr: 'Fotoğrafçı',
          uk: 'Фотограф'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€600 - €850 شهريًا (أثناء التدريب)',
          de: '€600 - €850/Monat (während der Ausbildung)',
          en: '€600 - €850/month (during training)',
          tr: '€600 - €850/ay (eğitim sırasında)',
          uk: '€600 - €850/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,200 - €3,500 شهرياً (يمكن أن يختلف بشكل كبير)',
          de: '€2.200 - €3.500/Monat (stark variierend)',
          en: '€2,200 - €3,500/month (can vary greatly)',
          tr: '€2.200 - €3.500/ay (büyük ölçüde değişebilir)',
          uk: '€2,200 - €3,500/місяць (може сильно відрізнятися)'
      },
      jobOutlook: {
          ar: 'متوسطة',
          de: 'Mittel',
          en: 'Moderate',
          tr: 'Orta',
          uk: 'Помірні'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، عين فنية، فهم تقني للكاميرات.',
          de: 'Hauptschulabschluss, kreatives Auge, technisches Verständnis für Kameras.',
          en: 'Basic school certificate, creative eye, technical understanding of cameras.',
          tr: 'Temel okul diploması, yaratıcı göz, kameralar hakkında teknik bilgi.',
          uk: 'Базова шкільна освіта, творчий погляд, технічне розуміння камер.'
      },
      duties: {
          ar: 'التقاط الصور في مختلف المجالات (صور شخصية، منتجات، فعاليات)، معالجة الصور.',
          de: 'Aufnahme von Fotos in verschiedenen Bereichen (Porträt, Produkt, Event), Bildbearbeitung.',
          en: 'Taking photos in various fields (portrait, product, event), image editing.',
          tr: 'Çeşitli alanlarda (portre, ürün, etkinlik) fotoğraf çekmek, görüntü düzenleme.',
          uk: 'Фотографування у різних сферах (портрет, продукт, подія), обробка зображень.'
      },
      skillsRequired: {
          ar: 'إبداع، مهارات تواصل، صبر، مهارات في برامج التحرير.',
          de: 'Kreativität, Kommunikationsfähigkeit, Geduld, Kenntnisse in Bildbearbeitungsprogrammen.',
          en: 'Creativity, communication skills, patience, skills in editing software.',
          tr: 'Yaratıcılık, iletişim becerileri, sabır, düzenleme yazılımı becerileri.',
          uk: 'Творчість, комунікативні навички, терпіння, навички роботи з програмами для редагування.'
      }
  },
  {
      title: {
          ar: 'ميكانيكي صناعي',
          de: 'Industriemechaniker/in',
          en: 'Industrial Mechanic',
          tr: 'Endüstriyel Mekanik',
          uk: 'Промисловий механік'
      },
      category: 'ausbildung',
      duration: {
          ar: '3.5 سنوات',
          de: '3,5 Jahre',
          en: '3.5 years',
          tr: '3.5 yıl',
          uk: '3,5 роки'
      },
      salary: {
          ar: '€950 - €1,200 شهريًا (أثناء التدريب)',
          de: '€950 - €1.200/Monat (während der Ausbildung)',
          en: '€950 - €1,200/month (during training)',
          tr: '€950 - €1.200/ay (eğitim sırasında)',
          uk: '€950 - €1,200/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€3,200 - €4,200 شهرياً',
          de: '€3.200 - €4.200/Monat',
          en: '€3,200 - €4,200/month',
          tr: '€3.200 - €4.200/ay',
          uk: '€3,200 - €4,200/місяць'
      },
      jobOutlook: {
          ar: 'جيدة جداً',
          de: 'Sehr gut',
          en: 'Very good',
          tr: 'Çok iyi',
          uk: 'Дуже хороші'
      },
      requirements: {
          ar: 'شهادة Realschulabschluss، فهم تقني، مهارات يدوية.',
          de: 'Realschulabschluss, technisches Verständnis, handwerkliches Geschick.',
          en: 'Intermediate school certificate, technical understanding, manual skills.',
          tr: 'Ortaokul diploması, teknik anlayış, el becerileri.',
          uk: 'Атестат про середню освіту, технічне розуміння, ручні навички.'
      },
      duties: {
          ar: 'صناعة وصيانة وإصلاح الآلات والأنظمة الصناعية.',
          de: 'Herstellung, Wartung und Reparatur von Industriemaschinen und -anlagen.',
          en: 'Manufacturing, maintaining, and repairing industrial machines and systems.',
          tr: 'Endüstriyel makinelerin ve sistemlerin üretimi, bakımı ve onarımı.',
          uk: 'Виробництво, технічне обслуговування та ремонт промислових машин і систем.'
      },
      skillsRequired: {
          ar: 'دقة، تفكير تحليلي، وعي بالسلامة، عمل جماعي.',
          de: 'Präzision, analytisches Denken, Sicherheitsbewusstsein, Teamarbeit.',
          en: 'Precision, analytical thinking, safety awareness, teamwork.',
          tr: 'Hassasiyet, analitik düşünme, güvenlik bilinci, takım çalışması.',
          uk: 'Точність, аналітичне мислення, усвідомлення безпеки, командна робота.'
      }
  },
  {
      title: {
          ar: 'مدرس',
          de: 'Lehrer/in',
          en: 'Teacher',
          tr: 'Öğretmen',
          uk: 'Вчитель'
      },
      category: 'study',
      duration: {
          ar: '5-7 سنوات (دراسة + تدريب عملي)',
          de: '5-7 Jahre (Studium + Referendariat)',
          en: '5-7 years (study + practical training)',
          tr: '5-7 yıl (eğitim + staj)',
          uk: '5-7 років (навчання + практика)'
      },
      salary: {
          ar: 'حوالي €1,500 شهريًا (أثناء التدريب العملي)',
          de: 'ca. 1.500 €/Monat (im Referendariat)',
          en: 'approx. €1,500/month (during practical training)',
          tr: 'yaklaşık 1.500 €/ay (staj sırasında)',
          uk: 'прибл. €1,500/місяць (під час практики)'
      },
      salaryRange: {
          ar: '€4,000 - €5,500 شهرياً (كموظف حكومي)',
          de: '€4.000 - €5.500/Monat (als Beamter)',
          en: '€4,000 - €5,500/month (as a civil servant)',
          tr: '€4.000 - €5.500/ay (memur olarak)',
          uk: '€4,000 - €5,500/місяць (як державний службовець)'
      },
      jobOutlook: {
          ar: 'جيدة (تعتمد على المادة الدراسية)',
          de: 'Gut (fächerabhängig)',
          en: 'Good (subject-dependent)',
          tr: 'İyi (derse bağlı)',
          uk: 'Хороші (залежно від предмета)'
      },
      requirements: {
          ar: 'شهادة Abitur، دراسة تخصصين دراسيين وعلم التربية.',
          de: 'Abitur, Studium von zwei Unterrichtsfächern und Pädagogik.',
          en: 'High school diploma (Abitur), study of two teaching subjects and pedagogy.',
          tr: 'Lise diploması (Abitur), iki öğretim dalı ve pedagoji eğitimi.',
          uk: 'Атестат про повну загальну середню освіту (Abitur), вивчення двох предметів та педагогіки.'
      },
      duties: {
          ar: 'تخطيط وتنفيذ الدروس، تقييم أداء الطلاب، التواصل مع أولياء الأمور.',
          de: 'Planung und Durchführung von Unterricht, Bewertung von Schülerleistungen, Elternkommunikation.',
          en: 'Planning and conducting lessons, assessing student performance, parent communication.',
          tr: 'Dersleri planlamak ve yürütmek, öğrenci performansını değerlendirmek, veli iletişimi.',
          uk: 'Планування та проведення уроків, оцінювання успішності учнів, спілкування з батьками.'
      },
      skillsRequired: {
          ar: 'مهارات تربوية، صبر، مهارات تنظيمية، معرفة متخصصة.',
          de: 'Pädagogisches Geschick, Geduld, Organisationstalent, Fachwissen.',
          en: 'Pedagogical skills, patience, organizational skills, subject knowledge.',
          tr: 'Pedagojik beceriler, sabır, organizasyon becerileri, konu bilgisi.',
          uk: 'Педагогічні навички, терпіння, організаторські здібності, знання предмета.'
      }
  },
  {
      title: {
          ar: 'صانع أسقف',
          de: 'Dachdecker/in',
          en: 'Roofer',
          tr: 'Çatı Ustası',
          uk: 'Покрівельник'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€750 - €1,000 شهريًا (أثناء التدريب)',
          de: '€750 - €1.000/Monat (während der Ausbildung)',
          en: '€750 - €1,000/month (during training)',
          tr: '€750 - €1.000/ay (eğitim sırasında)',
          uk: '€750 - €1,000/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,800 - €3,800 شهرياً',
          de: '€2.800 - €3.800/Monat',
          en: '€2,800 - €3,800/month',
          tr: '€2.800 - €3.800/ay',
          uk: '€2,800 - €3,800/місяць'
      },
      jobOutlook: {
          ar: 'جيدة جداً',
          de: 'Sehr gut',
          en: 'Very good',
          tr: 'Çok iyi',
          uk: 'Дуже хороші'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، عدم الخوف من المرتفعات، لياقة بدنية.',
          de: 'Hauptschulabschluss, Schwindelfreiheit, körperliche Fitness.',
          en: 'Basic school certificate, no fear of heights, physical fitness.',
          tr: 'Temel okul diploması, yükseklik korkusu olmamak, fiziksel uygunluk.',
          uk: 'Базова шкільна освіта, відсутність страху висоти, фізична підготовка.'
      },
      duties: {
          ar: 'تغطية وعزل وإصلاح الأسطح والواجهات.',
          de: 'Eindecken, Abdichten und Reparieren von Dächern und Fassaden.',
          en: 'Covering, sealing, and repairing roofs and facades.',
          tr: 'Çatıları ve cepheleri kaplamak, yalıtmak ve onarmak.',
          uk: 'Покриття, герметизація та ремонт дахів і фасадів.'
      },
      skillsRequired: {
          ar: 'مهارات يدوية، عمل جماعي، وعي بالسلامة، مقاومة للعوامل الجوية.',
          de: 'Handwerkliches Geschick, Teamfähigkeit, Sicherheitsbewusstsein, Wetterfestigkeit.',
          en: 'Manual dexterity, teamwork, safety awareness, weather resistance.',
          tr: 'El becerisi, takım çalışması, güvenlik bilinci, hava koşullarına dayanıklılık.',
          uk: 'Ручні навички, командна робота, усвідомлення безпеки, стійкість до погодних умов.'
      }
  },
  {
      title: {
          ar: 'عالم نفس',
          de: 'Psychologe/Psychologin',
          en: 'Psychologist',
          tr: 'Psikolog',
          uk: 'Психолог'
      },
      category: 'study',
      duration: {
          ar: '5 سنوات (بكالوريوس + ماجستير)',
          de: '5 Jahre (Bachelor + Master)',
          en: '5 years (Bachelor + Master)',
          tr: '5 yıl (Lisans + Yüksek Lisans)',
          uk: '5 років (бакалавр + магістр)'
      },
      salary: {
          ar: 'لا يوجد راتب أثناء الدراسة',
          de: 'Kein Gehalt während des Studiums',
          en: 'No salary during study',
          tr: 'Eğitim sırasında maaş yok',
          uk: 'Без зарплати під час навчання'
      },
      salaryRange: {
          ar: '€4,000 - €6,000 شهرياً',
          de: '€4.000 - €6.000/Monat',
          en: '€4,000 - €6,000/month',
          tr: '€4.000 - €6.000/ay',
          uk: '€4,000 - €6,000/місяць'
      },
      jobOutlook: {
          ar: 'جيدة',
          de: 'Gut',
          en: 'Good',
          tr: 'İyi',
          uk: 'Хороші'
      },
      requirements: {
          ar: 'شهادة Abitur بتقدير جيد (Numerus Clausus)، دراسة علم النفس.',
          de: 'Abitur mit gutem Notendurchschnitt (Numerus Clausus), Psychologiestudium.',
          en: 'High school diploma (Abitur) with good grades (Numerus Clausus), psychology studies.',
          tr: 'İyi not ortalamasına sahip lise diploması (Abitur) (Numerus Clausus), psikoloji eğitimi.',
          uk: 'Атестат про повну загальну середню освіту (Abitur) з добрими оцінками (Numerus Clausus), вивчення психології.'
      },
      duties: {
          ar: 'تشخيص ومعالجة الاضطرابات النفسية، تقديم المشورة، إجراء البحوث.',
          de: 'Diagnose und Behandlung von psychischen Störungen, Beratung, Durchführung von Forschung.',
          en: 'Diagnosing and treating mental disorders, providing counseling, conducting research.',
          tr: 'Zihinsel bozuklukları teşhis etmek ve tedavi etmek, danışmanlık yapmak, araştırma yapmak.',
          uk: 'Діагностика та лікування психічних розладів, надання консультацій, проведення досліджень.'
      },
      skillsRequired: {
          ar: 'تعاطف، مهارات تحليلية، مهارات تواصل، استقرار نفسي.',
          de: 'Empathie, analytische Fähigkeiten, Kommunikationsfähigkeit, psychische Stabilität.',
          en: 'Empathy, analytical skills, communication skills, psychological stability.',
          tr: 'Empati, analitik beceriler, iletişim becerileri, psikolojik istikrar.',
          uk: 'Емпатія, аналітичні навички, комунікативні навички, психологічна стійкість.'
      }
  },
  {
      title: {
          ar: 'أخصائي إعلام وتكنولوجيا معلومات',
          de: 'Mediengestalter/in Digital und Print',
          en: 'Media Designer for Digital and Print',
          tr: 'Dijital ve Basılı Medya Tasarımcısı',
          uk: 'Медіа-дизайнер для цифрових та друкованих видань'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€900 - €1,100 شهريًا (أثناء التدريب)',
          de: '€900 - €1.100/Monat (während der Ausbildung)',
          en: '€900 - €1,100/month (during training)',
          tr: '€900 - €1.100/ay (eğitim sırasında)',
          uk: '€900 - €1,100/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,600 - €3,600 شهرياً',
          de: '€2.600 - €3.600/Monat',
          en: '€2,600 - €3,600/month',
          tr: '€2.600 - €3.600/ay',
          uk: '€2,600 - €3,600/місяць'
      },
      jobOutlook: {
          ar: 'جيدة',
          de: 'Gut',
          en: 'Good',
          tr: 'İyi',
          uk: 'Хороші'
      },
      requirements: {
          ar: 'شهادة Realschulabschluss، إبداع، فهم تقني.',
          de: 'Realschulabschluss, Kreativität, technisches Verständnis.',
          en: 'Intermediate school certificate, creativity, technical understanding.',
          tr: 'Ortaokul diploması, yaratıcılık, teknik anlayış.',
          uk: 'Атестат про середню освіту, творчість, технічне розуміння.'
      },
      duties: {
          ar: 'تصميم وتطوير المنتجات الإعلامية مثل المواقع الإلكترونية، النشرات، مقاطع الفيديو.',
          de: 'Gestaltung und Entwicklung von Medienprodukten wie Webseiten, Flyern, Videos.',
          en: 'Designing and developing media products such as websites, flyers, videos.',
          tr: 'Web siteleri, broşürler, videolar gibi medya ürünleri tasarlamak ve geliştirmek.',
          uk: 'Розробка та створення медіа-продуктів, таких як веб-сайти, флаєри, відео.'
      },
      skillsRequired: {
          ar: 'حس جمالي، مهارات برامج التصميم، توجه نحو العملاء، عمل جماعي.',
          de: 'Sinn für Ästhetik, Softwarekenntnisse, Kundenorientierung, Teamarbeit.',
          en: 'Aesthetic sense, software skills, customer focus, teamwork.',
          tr: 'Estetik anlayışı, yazılım becerileri, müşteri odaklılık, takım çalışması.',
          uk: 'Естетичний смак, навички роботи з програмним забезпеченням, клієнтоорієнтованість, командна робота.'
      }
  },
  {
      title: {
          ar: 'سائق حافلة',
          de: 'Berufskraftfahrer/in (Personenverkehr)',
          en: 'Bus Driver',
          tr: 'Otobüs Şoförü',
          uk: 'Водій автобуса'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€800 - €1,000 شهريًا (أثناء التدريب)',
          de: '€800 - €1.000/Monat (während der Ausbildung)',
          en: '€800 - €1,000/month (during training)',
          tr: '€800 - €1.000/ay (eğitim sırasında)',
          uk: '€800 - €1,000/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,500 - €3,200 شهرياً',
          de: '€2.500 - €3.200/Monat',
          en: '€2,500 - €3,200/month',
          tr: '€2.500 - €3.200/ay',
          uk: '€2,500 - €3,200/місяць'
      },
      jobOutlook: {
          ar: 'جيدة جداً',
          de: 'Sehr gut',
          en: 'Very good',
          tr: 'Çok iyi',
          uk: 'Дуже хороші'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، رخصة قيادة سيارة، حس بالمسؤولية.',
          de: 'Hauptschulabschluss, PKW-Führerschein, Verantwortungsbewusstsein.',
          en: 'Basic school certificate, car driving license, sense of responsibility.',
          tr: 'Temel okul diploması, araba ehliyeti, sorumluluk duygusu.',
          uk: 'Базова шкільна освіта, водійське посвідчення категорії B, почуття відповідальності.'
      },
      duties: {
          ar: 'نقل الركاب بأمان، بيع التذاكر، تقديم المعلومات.',
          de: 'Sichere Beförderung von Fahrgästen, Ticketverkauf, Auskunftserteilung.',
          en: 'Safely transporting passengers, selling tickets, providing information.',
          tr: 'Yolcuları güvenli bir şekilde taşımak, bilet satmak, bilgi vermek.',
          uk: 'Безпечне перевезення пасажирів, продаж квитків, надання інформації.'
      },
      skillsRequired: {
          ar: 'تركيز، ودود، هدوء، فهم تقني.',
          de: 'Konzentrationsfähigkeit, Freundlichkeit, Gelassenheit, technisches Verständnis.',
          en: 'Concentration, friendliness, composure, technical understanding.',
          tr: 'Konsantrasyon, güler yüzlülük, soğukkanlılık, teknik anlayış.',
          uk: 'Концентрація, дружелюбність, спокій, технічне розуміння.'
      }
  },
  {
      title: {
          ar: 'محاسب',
          de: 'Buchhalter/in',
          en: 'Accountant',
          tr: 'Muhasebeci',
          uk: 'Бухгалтер'
      },
      category: 'job',
      duration: {
          ar: 'يتطلب تدريبًا مهنيًا (مثل خبير ضرائب) أو دراسة جامعية',
          de: 'Erfordert kaufmännische Ausbildung (z.B. Steuerfachangestellte/r) oder Studium',
          en: 'Requires commercial training (e.g., tax clerk) or university studies',
          tr: 'Ticari eğitim (ör. vergi danışmanı asistanı) veya üniversite eğitimi gerektirir',
          uk: 'Вимагає комерційної освіти (напр., податковий консультант) або вищої освіти'
      },
      salary: {
          ar: 'لا ينطبق',
          de: 'N/A',
          en: 'N/A',
          tr: 'Uygulanamaz',
          uk: 'Н/Д'
      },
      salaryRange: {
          ar: '€3,000 - €4,800 شهرياً',
          de: '€3.000 - €4.800/Monat',
          en: '€3,000 - €4,800/month',
          tr: '€3.000 - €4.800/ay',
          uk: '€3,000 - €4,800/місяць'
      },
      jobOutlook: {
          ar: 'جيدة جداً',
          de: 'Sehr gut',
          en: 'Very good',
          tr: 'Çok iyi',
          uk: 'Дуже хороші'
      },
      requirements: {
          ar: 'تدريب مهني في التجارة، دقة، فهم جيد للأرقام.',
          de: 'Kaufmännische Ausbildung, Genauigkeit, gutes Zahlenverständnis.',
          en: 'Commercial vocational training, accuracy, good understanding of numbers.',
          tr: 'Ticari mesleki eğitim, doğruluk, iyi sayısal anlayış.',
          uk: 'Комерційна професійна освіта, точність, добре розуміння чисел.'
      },
      duties: {
          ar: 'تسجيل المعاملات التجارية، إعداد الميزانيات السنوية، إدارة الحسابات الدائنة والمدينة.',
          de: 'Verbuchung von Geschäftsvorfällen, Erstellung von Jahresabschlüssen, Debitoren- und Kreditorenbuchhaltung.',
          en: 'Recording business transactions, preparing annual financial statements, accounts receivable and payable management.',
          tr: 'İşlemleri kaydetmek, yıllık mali tabloları hazırlamak, alacak ve borç hesaplarını yönetmek.',
          uk: 'Облік господарських операцій, підготовка річної фінансової звітності, ведення дебіторської та кредиторської заборгованості.'
      },
      skillsRequired: {
          ar: 'اهتمام بالتفاصيل، تفكير تحليلي، جدارة بالثقة، معرفة ببرامج المحاسبة.',
          de: 'Detailgenauigkeit, analytisches Denken, Vertrauenswürdigkeit, Kenntnisse in Buchhaltungssoftware.',
          en: 'Attention to detail, analytical thinking, trustworthiness, knowledge of accounting software.',
          tr: 'Detaylara dikkat, analitik düşünme, güvenilirlik, muhasebe yazılımı bilgisi.',
          uk: 'Увага до деталей, аналітичне мислення, надійність, знання бухгалтерського програмного забезпечення.'
      }
  },
  {
      title: {
          ar: 'فني مختبر طبي',
          de: 'Medizinische/r Technologe/Technologin für Laboratoriumsanalytik (MTLA)',
          en: 'Medical Laboratory Technologist',
          tr: 'Tıbbi Laboratuvar Teknoloğu',
          uk: 'Медичний лаборант'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات (تدريب مدرسي)',
          de: '3 Jahre (schulische Ausbildung)',
          en: '3 years (school-based training)',
          tr: '3 yıl (okul tabanlı eğitim)',
          uk: '3 роки (шкільне навчання)'
      },
      salary: {
          ar: 'يختلف (قد يكون غير مدفوع الأجر أو مدفوعًا)',
          de: 'Variiert (kann unvergütet oder vergütet sein)',
          en: 'Varies (can be unpaid or paid)',
          tr: 'Değişir (ücretsiz veya ücretli olabilir)',
          uk: 'Різниться (може бути неоплачуваним або оплачуваним)'
      },
      salaryRange: {
          ar: '€3,000 - €4,000 شهرياً',
          de: '€3.000 - €4.000/Monat',
          en: '€3,000 - €4,000/month',
          tr: '€3.000 - €4.000/ay',
          uk: '€3,000 - €4,000/місяць'
      },
      jobOutlook: {
          ar: 'ممتازة',
          de: 'Ausgezeichnet',
          en: 'Excellent',
          tr: 'Mükemmel',
          uk: 'Відмінні'
      },
      requirements: {
          ar: 'شهادة Realschulabschluss، اهتمام بالعلوم، دقة.',
          de: 'Realschulabschluss, Interesse an Naturwissenschaften, Genauigkeit.',
          en: 'Intermediate school certificate, interest in natural sciences, accuracy.',
          tr: 'Ortaokul diploması, doğa bilimlerine ilgi, doğruluk.',
          uk: 'Атестат про середню освіту, інтерес до природничих наук, точність.'
      },
      duties: {
          ar: 'تحليل عينات الدم والأنسجة وسوائل الجسم الأخرى، تشغيل أجهزة المختبر.',
          de: 'Analyse von Blut-, Gewebe- und anderen Körperflüssigkeitsproben, Bedienung von Laborgeräten.',
          en: 'Analyzing blood, tissue, and other body fluid samples, operating laboratory equipment.',
          tr: 'Kan, doku ve diğer vücut sıvısı örneklerini analiz etmek, laboratuvar ekipmanlarını kullanmak.',
          uk: 'Аналіз зразків крові, тканин та інших рідин організму, робота з лабораторним обладнанням.'
      },
      skillsRequired: {
          ar: 'دقة، حس بالمسؤولية، فهم تقني، عمل دقيق.',
          de: 'Sorgfalt, Verantwortungsbewusstsein, technisches Verständnis, präzises Arbeiten.',
          en: 'Diligence, sense of responsibility, technical understanding, precise work.',
          tr: 'Özen, sorumluluk duygusu, teknik anlayış, hassas çalışma.',
          uk: 'Старанність, почуття відповідальності, технічне розуміння, точна робота.'
      }
  },
  {
      title: {
          ar: 'لحام',
          de: 'Schweißer/in',
          en: 'Welder',
          tr: 'Kaynakçı',
          uk: 'Зварювальник'
      },
      category: 'job',
      duration: {
          ar: 'يتطلب دورة تدريبية (عدة أشهر)',
          de: 'Erfordert Weiterbildungskurs (mehrere Monate)',
          en: 'Requires a training course (several months)',
          tr: 'Bir eğitim kursu gerektirir (birkaç ay)',
          uk: 'Вимагає навчального курсу (кілька місяців)'
      },
      salary: {
          ar: 'لا ينطبق',
          de: 'N/A',
          en: 'N/A',
          tr: 'Uygulanamaz',
          uk: 'Н/Д'
      },
      salaryRange: {
          ar: '€2,800 - €3,900 شهرياً',
          de: '€2.800 - €3.900/Monat',
          en: '€2,800 - €3,900/month',
          tr: '€2.800 - €3.900/ay',
          uk: '€2,800 - €3,900/місяць'
      },
      jobOutlook: {
          ar: 'جيدة',
          de: 'Gut',
          en: 'Good',
          tr: 'İyi',
          uk: 'Хороші'
      },
      requirements: {
          ar: 'مهارات يدوية، فهم تقني، شهادات لحام صالحة.',
          de: 'Handwerkliches Geschick, technisches Verständnis, gültige Schweißerpässe.',
          en: 'Manual dexterity, technical understanding, valid welding certificates.',
          tr: 'El becerisi, teknik anlayış, geçerli kaynak sertifikaları.',
          uk: 'Ручні навички, технічне розуміння, дійсні зварювальні сертифікати.'
      },
      duties: {
          ar: 'ربط المكونات المعدنية باستخدام عمليات اللحام المختلفة.',
          de: 'Verbinden von Metallteilen durch verschiedene Schweißverfahren.',
          en: 'Joining metal components using various welding processes.',
          tr: 'Çeşitli kaynak işlemleriyle metal bileşenleri birleştirmek.',
          uk: 'З\'єднання металевих компонентів за допомогою різних зварювальних процесів.'
      },
      skillsRequired: {
          ar: 'دقة، وعي بالسلامة، قوة بدنية، تركيز.',
          de: 'Präzision, Sicherheitsbewusstsein, körperliche Belastbarkeit, Konzentration.',
          en: 'Precision, safety awareness, physical resilience, concentration.',
          tr: 'Hassasiyet, güvenlik bilinci, fiziksel dayanıklılık, konsantrasyon.',
          uk: 'Точність, усвідомлення безпеки, фізична витривалість, концентрація.'
      }
  },
  {
      title: {
          ar: 'مساعد إداري',
          de: 'Kaufmann/Kauffrau für Büromanagement',
          en: 'Office Management Clerk',
          tr: 'Ofis Yönetimi Asistanı',
          uk: 'Клерк з офісного менеджменту'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€850 - €1,100 شهريًا (أثناء التدريب)',
          de: '€850 - €1.100/Monat (während der Ausbildung)',
          en: '€850 - €1,100/month (during training)',
          tr: '€850 - €1.100/ay (eğitim sırasında)',
          uk: '€850 - €1,100/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,500 - €3,400 شهرياً',
          de: '€2.500 - €3.400/Monat',
          en: '€2,500 - €3,400/month',
          tr: '€2.500 - €3.400/ay',
          uk: '€2,500 - €3,400/місяць'
      },
      jobOutlook: {
          ar: 'جيدة جداً',
          de: 'Sehr gut',
          en: 'Very good',
          tr: 'Çok iyi',
          uk: 'Дуже хороші'
      },
      requirements: {
          ar: 'شهادة Realschulabschluss، مهارات تنظيمية، معرفة جيدة باللغة الألمانية.',
          de: 'Realschulabschluss, Organisationstalent, gute Deutschkenntnisse.',
          en: 'Intermediate school certificate, organizational skills, good German language skills.',
          tr: 'Ortaokul diploması, organizasyon becerileri, iyi Almanca dil becerileri.',
          uk: 'Атестат про середню освіту, організаторські здібності, добре знання німецької мови.'
      },
      duties: {
          ar: 'تنظيم مهام المكتب، التواصل الكتابي والشفهي، تخطيط المواعيد.',
          de: 'Organisation von Büroaufgaben, schriftliche und mündliche Kommunikation, Terminplanung.',
          en: 'Organizing office tasks, written and oral communication, appointment scheduling.',
          tr: 'Ofis görevlerini organize etmek, yazılı ve sözlü iletişim, randevu planlaması.',
          uk: 'Організація офісних завдань, письмова та усна комунікація, планування зустрічей.'
      },
      skillsRequired: {
          ar: 'مهارات تواصل، تعدد المهام، معرفة ببرامج مايكروسوفت أوفيس، توجه نحو الخدمة.',
          de: 'Kommunikationsfähigkeit, Multitasking, MS-Office-Kenntnisse, Serviceorientierung.',
          en: 'Communication skills, multitasking, MS Office knowledge, service orientation.',
          tr: 'İletişim becerileri, çoklu görev, MS Office bilgisi, hizmet odaklılık.',
          uk: 'Комунікативні навички, багатозадачність, знання MS Office, сервісна орієнтація.'
      }
  },
  {
      title: {
          ar: 'مزارع كروم',
          de: 'Winzer/in',
          en: 'Winemaker/Vintner',
          tr: 'Şarap Üreticisi',
          uk: 'Винороб'
      },
      category: 'ausbildung',
      duration: {
          ar: '3 سنوات',
          de: '3 Jahre',
          en: '3 years',
          tr: '3 yıl',
          uk: '3 роки'
      },
      salary: {
          ar: '€700 - €950 شهريًا (أثناء التدريب)',
          de: '€700 - €950/Monat (während der Ausbildung)',
          en: '€700 - €950/month (during training)',
          tr: '€700 - €950/ay (eğitim sırasında)',
          uk: '€700 - €950/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,400 - €3,500 شهرياً',
          de: '€2.400 - €3.500/Monat',
          en: '€2,400 - €3,500/month',
          tr: '€2.400 - €3.500/ay',
          uk: '€2,400 - €3,500/місяць'
      },
      jobOutlook: {
          ar: 'متوسطة',
          de: 'Mittel',
          en: 'Moderate',
          tr: 'Orta',
          uk: 'Помірні'
      },
      requirements: {
          ar: 'شهادة Hauptschulabschluss، اهتمام بالطبيعة والنبيذ، قوة بدنية.',
          de: 'Hauptschulabschluss, Interesse an Natur und Wein, körperliche Belastbarkeit.',
          en: 'Basic school certificate, interest in nature and wine, physical resilience.',
          tr: 'Temel okul diploması, doğa ve şaraba ilgi, fiziksel dayanıklılık.',
          uk: 'Базова шкільна освіта, інтерес до природи та вина, фізична витривалість.'
      },
      duties: {
          ar: 'العناية بكروم العنب، حصاد العنب، إنتاج وتعتيق النبيذ.',
          de: 'Pflege der Weinberge, Lese der Trauben, Herstellung und Ausbau von Wein.',
          en: 'Caring for vineyards, harvesting grapes, producing and aging wine.',
          tr: 'Bağların bakımı, üzüm hasadı, şarap üretimi ve eskitilmesi.',
          uk: 'Догляд за виноградниками, збір врожаю, виробництво та витримка вина.'
      },
      skillsRequired: {
          ar: 'مهارات حسية (تذوق، شم)، معرفة بالنباتات، دقة، صبر.',
          de: 'Sensorische Fähigkeiten (Schmecken, Riechen), Pflanzenkenntnisse, Sorgfalt, Geduld.',
          en: 'Sensory skills (tasting, smelling), plant knowledge, diligence, patience.',
          tr: 'Duyusal beceriler (tatma, koklama), bitki bilgisi, özen, sabır.',
          uk: 'Сенсорні навички (смак, нюх), знання рослин, старанність, терпіння.'
      }
  },
  {
      title: {
          ar: 'شرطي',
          de: 'Polizeivollzugsbeamter/beamtin',
          en: 'Police Officer',
          tr: 'Polis Memuru',
          uk: 'Поліцейський'
      },
      category: 'ausbildung',
      duration: {
          ar: '2.5 - 3 سنوات (تدريب في أكاديمية الشرطة)',
          de: '2,5 - 3 Jahre (Ausbildung an Polizeiakademie)',
          en: '2.5 - 3 years (training at police academy)',
          tr: '2.5 - 3 yıl (polis akademisinde eğitim)',
          uk: '2,5 - 3 роки (навчання в поліцейській академії)'
      },
      salary: {
          ar: 'حوالي €1,300 شهريًا (أثناء التدريب)',
          de: 'ca. 1.300 €/Monat (während der Ausbildung)',
          en: 'approx. €1,300/month (during training)',
          tr: 'yaklaşık 1.300 €/ay (eğitim sırasında)',
          uk: 'прибл. €1,300/місяць (під час навчання)'
      },
      salaryRange: {
          ar: '€2,900 - €4,500 شهرياً (كموظف حكومي)',
          de: '€2.900 - €4.500/Monat (als Beamter)',
          en: '€2,900 - €4,500/month (as a civil servant)',
          tr: '€2.900 - €4.500/ay (memur olarak)',
          uk: '€2,900 - €4,500/місяць (як державний службовець)'
      },
      jobOutlook: {
          ar: 'جيدة جداً',
          de: 'Sehr gut',
          en: 'Very good',
          tr: 'Çok iyi',
          uk: 'Дуже хороші'
      },
      requirements: {
          ar: 'شهادة Realschulabschluss، الجنسية الألمانية (أو جنسية الاتحاد الأوروبي)، لياقة بدنية، سجل جنائي نظيف.',
          de: 'Realschulabschluss, deutsche (oder EU-) Staatsbürgerschaft, körperliche Fitness, einwandfreies Führungszeugnis.',
          en: 'Intermediate school certificate, German (or EU) citizenship, physical fitness, clean criminal record.',
          tr: 'Ortaokul diploması, Alman (veya AB) vatandaşlığı, fiziksel uygunluk, temiz sabıka kaydı.',
          uk: 'Атестат про середню освіту, німецьке (або ЄС) громадянство, фізична підготовка, відсутність судимостей.'
      },
      duties: {
          ar: 'الحفاظ على النظام العام، مكافحة الجريمة، تنظيم حركة المرور.',
          de: 'Aufrechterhaltung der öffentlichen Ordnung, Verbrechensbekämpfung, Verkehrsregelung.',
          en: 'Maintaining public order, crime fighting, traffic control.',
          tr: 'Kamu düzenini sağlamak, suçla mücadele etmek, trafiği düzenlemek.',
          uk: 'Підтримання громадського порядку, боротьба зі злочинністю, регулювання дорожнього руху.'
      },
      skillsRequired: {
          ar: 'قدرة على التحمل النفسي، عمل جماعي، مهارات اتخاذ القرار، حزم.',
          de: 'Psychische Belastbarkeit, Teamfähigkeit, Entscheidungsfreude, Durchsetzungsvermögen.',
          en: 'Psychological resilience, teamwork, decision-making skills, assertiveness.',
          tr: 'Psikolojik dayanıklılık, takım çalışması, karar verme becerileri, iddialılık.',
          uk: 'Психологічна стійкість, командна робота, навички прийняття рішень, напористість.'
      }
  }
];
