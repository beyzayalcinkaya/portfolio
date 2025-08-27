import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./lang/en.json";
import translationTR from "./lang/tr.json";

const resources = {
  en: { translation: translationEN },
  tr: { translation: translationTR },
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector) // tarayıcı dilini algılar
  .use(initReactI18next) // react-i18next ile kullanmak için
  .init({
    resources,
    fallbackLng: "en", // desteklenmeyen dil gelirse İngilizce
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        "navigator",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "cookie",
      ],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
