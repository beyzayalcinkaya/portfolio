import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./lang/en.json";
import translationTR from "./lang/tr.json";

const resources = {
  en: { translation: translationEN },
  tr: { translation: translationTR },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lng") || "en",
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
