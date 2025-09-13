import { useState } from "react";
import { Eye, EyeOff, Wifi, Lock, Settings } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

const WiFiForm = ({ onSubmit, isLoading }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    ssid: "",
    password: "",
    security: "WPA",
    hidden: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const securityOptions = [
    { value: "WPA", label: t("form.securityOptions.WPA") },
    { value: "WEP", label: t("form.securityOptions.WEP") },
    { value: "nopass", label: t("form.securityOptions.nopass") },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.ssid.trim()) {
      newErrors.ssid = t("validation.ssidRequired");
    } else if (formData.ssid.length > 32) {
      newErrors.ssid = t("validation.ssidTooLong");
    }

    if (formData.security !== "nopass") {
      if (!formData.password.trim()) {
        newErrors.password = t("validation.passwordRequired");
      } else if (formData.password.length < 8) {
        newErrors.password = t("validation.passwordTooShort");
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Wifi className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {t("title")}
            </h2>
            <p className="text-sm text-gray-600">{t("subtitle")}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* SSID Field */}
          <div>
            <label
              htmlFor="ssid"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("form.ssidLabel")}
            </label>
            <input
              type="text"
              id="ssid"
              name="ssid"
              value={formData.ssid}
              onChange={handleChange}
              placeholder={t("form.ssidPlaceholder")}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.ssid ? "border-red-300" : "border-gray-300"
              }`}
              disabled={isLoading}
            />
            {errors.ssid && (
              <p className="mt-1 text-sm text-red-600">{errors.ssid}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="security"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <Settings className="w-4 h-4 inline mr-1" />
              {t("form.securityLabel")}
            </label>
            <select
              id="security"
              name="security"
              value={formData.security}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading}
            >
              {securityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {formData.security !== "nopass" && (
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                <Lock className="w-4 h-4 inline mr-1" />
                {t("form.passwordLabel")}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={t("form.passwordPlaceholder")}
                  className={`w-full px-3 py-2 pr-10 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  }`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
          )}

          <div className="flex items-center">
            <input
              type="checkbox"
              id="hidden"
              name="hidden"
              checked={formData.hidden}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              disabled={isLoading}
            />
            <label
              htmlFor="hidden"
              className="ml-2 block text-sm text-gray-700"
            >
              {t("form.hiddenLabel")}
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {t("form.generating")}
              </div>
            ) : (
              t("form.generateButton")
            )}
          </button>
        </form>

        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-xs text-blue-700">{t("form.privacyNote")}</p>
        </div>
      </div>
    </div>
  );
};

export default WiFiForm;
