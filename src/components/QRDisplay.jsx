import { useState } from "react";
import { Download, QrCode, Wifi, Check, Copy } from "lucide-react";
import { downloadQRCode } from "../utils/qrUtils";
import { useTranslation } from "../hooks/useTranslation";

const QRDisplay = ({ qrData, wifiData, onReset }) => {
  const { t, formatSecurityType } = useTranslation();
  const [filename, setFilename] = useState("wifi-qr");
  const [isDownloading, setIsDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      await downloadQRCode(qrData, filename || "wifi-qr");
    } catch (error) {
      console.error("Error al descargar:", error);
      alert(t("errors.download"));
    } finally {
      setIsDownloading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      const response = await fetch(qrData);
      const blob = await response.blob();

      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
      alert(t("errors.copy"));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <QrCode className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {t("qrDisplay.title")}
            </h2>
            <p className="text-sm text-gray-600">{t("qrDisplay.subtitle")}</p>
          </div>
        </div>

        {/* QR Code Display */}
        <div className="text-center mb-6">
          <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm">
            <img
              src={qrData}
              alt="WiFi QR Code"
              className="w-48 h-48 mx-auto"
            />
          </div>
        </div>

        {/* WiFi Info Summary */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="flex items-center text-sm font-medium text-gray-700 mb-3">
            <Wifi className="w-4 h-4 mr-2" />
            {t("qrDisplay.networkInfo")}
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">{t("qrDisplay.network")}</span>
              <span className="font-medium text-gray-900">{wifiData.ssid}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t("qrDisplay.security")}</span>
              <span className="font-medium text-gray-900">
                {formatSecurityType(wifiData.security)}
              </span>
            </div>
            {wifiData.security !== "nopass" && (
              <div className="flex justify-between">
                <span className="text-gray-600">Contraseña:</span>
                <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">
                  {"•".repeat(wifiData.password.length)}
                </span>
              </div>
            )}
            {wifiData.hidden && (
              <div className="flex justify-between">
                <span className="text-gray-600">Red oculta:</span>
                <span className="font-medium text-gray-900">Sí</span>
              </div>
            )}
          </div>
        </div>

        {/* Download Section */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="filename"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {t("qrDisplay.filenameLabel")}
            </label>
            <input
              type="text"
              id="filename"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder={t("qrDisplay.filenamePlaceholder")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">
              {t("qrDisplay.filenameSuffix")}{" "}
              {(filename || "wifi-qr").replace(/\.png$/, "")}.png
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  {t("qrDisplay.downloading")}
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  {t("qrDisplay.downloadButton")}
                </>
              )}
            </button>

            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  {t("qrDisplay.copied")}
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  {t("qrDisplay.copyButton")}
                </>
              )}
            </button>
          </div>

          <button
            onClick={onReset}
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            {t("qrDisplay.generateAnotherButton")}
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-3 bg-blue-50 rounded-md">
          <h4 className="text-sm font-medium text-blue-800 mb-1">
            {t("qrDisplay.instructions.title")}
          </h4>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>{t("qrDisplay.instructions.step1")}</li>
            <li>{t("qrDisplay.instructions.step2")}</li>
            <li>{t("qrDisplay.instructions.step3")}</li>
            <li>{t("qrDisplay.instructions.step4")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QRDisplay;
