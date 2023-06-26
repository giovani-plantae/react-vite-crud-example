import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import i18nMenuEN from './locales/en/menu.json';
import i18nPageEN from './locales/en/page.json';
import i18nCountriesEN from './locales/en/countries.json';
import i18nValidationEN from './locales/en/validation.json';
import i18nFormEN from './locales/en/form.json';

import i18nMenuPTBR from './locales/pt-BR/menu.json';
import i18nPagePTBR from './locales/pt-BR/page.json';
import i18nCountriesPTBR from './locales/pt-BR/countries.json';
import i18nValidationPTBR from './locales/pt-BR/validation.json';
import i18nFormPTBR from './locales/pt-BR/form.json';

const resources = {
    en: {
        countries: i18nCountriesEN,
        menu: i18nMenuEN,
        page: i18nPageEN,
        validation: i18nValidationEN,
        form: i18nFormEN,
    },
    'pt-BR': {
        countries: i18nCountriesPTBR,
        menu: i18nMenuPTBR,
        page: i18nPagePTBR,
        validation: i18nValidationPTBR,
        form: i18nFormPTBR,
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt-BR',
        fallbackLng: 'en',
        ns: ['menu', 'page', 'validation', 'form'],
        defaultNS: 'page',
        detection: {
            order: ['localStorage', 'navigator'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
