import { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

const detectSystemLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split("-")[0];
  return langCode === "es" ? "es" : "en";
};

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("preferred-language");
  return savedLanguage || detectSystemLanguage();
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("preferred-language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  const changeLanguage = (newLanguage) => {
    if (newLanguage === "es" || newLanguage === "en") {
      setLanguage(newLanguage);
    }
  };

  const value = {
    language,
    toggleLanguage,
    changeLanguage,
    isSpanish: language === "es",
    isEnglish: language === "en",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
