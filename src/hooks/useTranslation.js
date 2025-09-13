import { useLanguage } from "./useLanguage";
import { translations } from "../locales/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(
          `Translation key not found: ${key} for language: ${language}`
        );
        return key;
      }
    }

    return value || key;
  };

  const formatSecurityType = (security) => {
    return t(`form.securityOptions.${security}`) || security;
  };

  return {
    t,
    formatSecurityType,
    language,
    isSpanish: language === "es",
    isEnglish: language === "en",
  };
};
