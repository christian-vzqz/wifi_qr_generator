import { Globe } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "../hooks/useTranslation";

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700 transition-colors">
      <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
        {t("language.label")}:
      </span>
      <div className="flex gap-1">
        <button
          onClick={() => changeLanguage("es")}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            language === "es"
              ? "bg-blue-600 dark:bg-blue-500 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          {t("language.spanish")}
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            language === "en"
              ? "bg-blue-600 dark:bg-blue-500 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          {t("language.english")}
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
