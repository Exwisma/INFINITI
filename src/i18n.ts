import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRU from './locales/ru/translation.json'
import translationUZ from './locales/uz/translation.json'
// Переводы

const resources = {
  ru: { translation: translationRU },
  uz: { translation: translationUZ }
};




// Инициализация
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false // React сам экранирует
    }
  });

export default i18n;
