import { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "../locales/translations";

const SUPPORTED_LANGUAGES = Object.keys(translations);
const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.includes("en")
  ? "en"
  : SUPPORTED_LANGUAGES[0];

const ensureSupportedLanguage = (lang) =>
  SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;

const trackLanguageAnalytics = (lang) => {
  if (
    typeof window !== "undefined" &&
    typeof window.trackLanguageChange === "function"
  ) {
    window.trackLanguageChange(lang);
  }
};

const detectSystemLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split("-")[0];
  return ensureSupportedLanguage(langCode);
};

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("preferred-language");
  if (savedLanguage) {
    return ensureSupportedLanguage(savedLanguage);
  }
  return detectSystemLanguage();
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("preferred-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const currentIndex = SUPPORTED_LANGUAGES.indexOf(prevLang);
      const nextIndex =
        currentIndex === -1
          ? 0
          : (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
      const nextLanguage = SUPPORTED_LANGUAGES[nextIndex];
      trackLanguageAnalytics(nextLanguage);
      return nextLanguage;
    });
  };

  const changeLanguage = (newLanguage) => {
    const nextLanguage = ensureSupportedLanguage(newLanguage);
    trackLanguageAnalytics(nextLanguage);
    setLanguage(nextLanguage);
  };

  const value = {
    language,
    toggleLanguage,
    changeLanguage,
    isSpanish: language === "es",
    isEnglish: language === "en",
    availableLanguages: SUPPORTED_LANGUAGES,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
