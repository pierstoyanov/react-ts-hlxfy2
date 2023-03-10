import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationsInEng from './locales/en/translation.json';
import translationsInBulgarian from './locales/bg/translation.json';

// the translations
const resources = {
  en: {
    translation: translationsInEng,
  },
  bg: {
    translation: translationsInBulgarian,
  },
};

i18n
  // detect usr language
  .use(LanguageDetector)
  // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    resources, // translation files
    lng: 'bg', // default language when the site loads
    debug: true, // TODO
    fallbackLng: 'en', // use if selected language is not available
    interpolation: {
      escapeValue: false,
    },
    ns: 'translation', // namespaces help to divide huge translations into multiple small files.
    defaultNS: false,
    supportedLngs: ['en', 'bg'],
  });

export default i18n;
