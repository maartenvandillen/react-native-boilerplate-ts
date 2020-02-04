import i18n from 'i18next';

i18n
  // .use(LanguageDetector)     // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "en",
    // lng: "nl",
    fallbackLng: 'en',
    debug: true,
    // keySeparator: ".",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      "en": require('./en.json'),
      "nl": require('./nl.json'),
    }
  });

export default i18n;
