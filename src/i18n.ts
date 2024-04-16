import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import ru from "../public/locales/ru";
import uz from "../public/locales/uz";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    debug: true,
    resources: {
      ru: { translation: ru },
      uz: { translation: uz },
    },
    interpolation: {
      escapeValue: false,
    },
  });

const langFromLocalStorage = localStorage.getItem("lang");

if (langFromLocalStorage && (langFromLocalStorage === "uz" || langFromLocalStorage === "ru")) {
  i18n.changeLanguage(langFromLocalStorage);
} else {
  i18n.changeLanguage("uz");
}

export default i18n;
