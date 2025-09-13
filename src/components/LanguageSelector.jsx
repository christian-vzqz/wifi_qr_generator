import { Globe } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "../hooks/useTranslation";

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <div className="flex items-center gap-2 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
          <Globe className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700 mr-2">
            {t("language.label")}:
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => changeLanguage("es")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === "es"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {t("language.spanish")}
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {t("language.english")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
