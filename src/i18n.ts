import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourceEN from "locales/en/translation.json";
import resourceVI from "locales/vi/translation.json";

const resources = {
  en: {
    translation: { ...resourceEN },
  },
  vi: {
    translation: { ...resourceVI },
  },
};

// const defaultLangue = localStorage.get('locale'); //to do
const defaultLanguage = "vi";
i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
