import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import i18nMenuEN from './locales/en/menu.json';
import i18nPageEN from './locales/en/page.json';
import i18nCountriesEN from './locales/en/countries.json';

import i18nMenuPTBR from './locales/pt-BR/menu.json';
import i18nPagePTBR from './locales/pt-BR/page.json';
import i18nCountriesPTBR from './locales/pt-BR/countries.json';

const resources = {
    en: {
        menu: i18nMenuEN,
        page: i18nPageEN,
        countries: i18nCountriesEN,
    },
    'pt-BR': {
        menu: i18nMenuPTBR,
        page: i18nPagePTBR,
        countries: i18nCountriesPTBR,
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt-BR',
        fallbackLng: 'en',
        ns: ['menu', 'page'],
        defaultNS: 'page',
        detection: {
            order: ['localStorage', 'navigator'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
