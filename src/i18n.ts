import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourceEN from "locales/en/translation.json";
import resourceVI from "locales/vi/translation.json";
import resourcePHI from "locales/phi/translation.json";
import resourceHI from "locales/hi/translation.json";
import resourceJA from "locales/ja/translation.json";
import resourceKO from "locales/ko/translation.json";
import { DEFAULT_LANGUAGE } from "constants/language";

const resources = {
  en: {
    translation: { ...resourceEN },
  },
  vi: {
    translation: { ...resourceVI },
  },
  phi: {
    translation: { ...resourcePHI}
  },
  hi: {
    translation: { ...resourceHI}
  },
  ja: {
    translation: { ...resourceJA}
  },
  ko: {
    translation: { ...resourceKO}
  }
};

// const defaultLangue = localStorage.get('locale'); //to do
const defaultLanguage = DEFAULT_LANGUAGE;
i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
