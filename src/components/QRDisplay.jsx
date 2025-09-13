import { useState } from "react";
import { Download, QrCode, Wifi, Check, Copy } from "lucide-react";
import { downloadQRCode } from "../utils/qrUtils";

const QRDisplay = ({ qrData, wifiData, onReset }) => {
  const [filename, setFilename] = useState("wifi-qr");
  const [isDownloading, setIsDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      await downloadQRCode(qrData, filename || "wifi-qr");
    } catch (error) {
      console.error("Error al descargar:", error);
      alert("Error al descargar el archivo. Inténtalo de nuevo.");
    } finally {
      setIsDownloading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      // Convertir data URL a blob y luego copiar al clipboard
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
      // Fallback: mostrar mensaje para copiar manualmente
      alert(
        'No se pudo copiar automáticamente. Haz click derecho en la imagen y selecciona "Copiar imagen".'
      );
    }
  };

  const formatSecurityType = (security) => {
    const types = {
      WPA: "WPA/WPA2",
      WEP: "WEP",
      nopass: "Sin contraseña",
    };
    return types[security] || security;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <QrCode className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              ¡Código QR Generado!
            </h2>
            <p className="text-sm text-gray-600">
              Escanea para conectarte automáticamente
            </p>
          </div>
        </div>

        {/* QR Code Display */}
        <div className="text-center mb-6">
          <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm">
            <img
              src={qrData}
              alt="Código QR WiFi"
              className="w-48 h-48 mx-auto"
            />
          </div>
        </div>

        {/* WiFi Info Summary */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="flex items-center text-sm font-medium text-gray-700 mb-3">
            <Wifi className="w-4 h-4 mr-2" />
            Información de la red
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Red (SSID):</span>
              <span className="font-medium text-gray-900">{wifiData.ssid}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Seguridad:</span>
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
              Nombre del archivo
            </label>
            <input
              type="text"
              id="filename"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder="wifi-qr"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">
              Se guardará como {(filename || "wifi-qr").replace(/\.png$/, "")}
              .png
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
                  Descargando...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Descargar
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
                  ¡Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar
                </>
              )}
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={onReset}
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            Generar otro código QR
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-3 bg-blue-50 rounded-md">
          <h4 className="text-sm font-medium text-blue-800 mb-1">
            ¿Cómo usar el código QR?
          </h4>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>1. Abre la cámara de tu teléfono</li>
            <li>2. Apunta a este código QR</li>
            <li>3. Toca la notificación que aparece</li>
            <li>4. ¡Tu dispositivo se conectará automáticamente!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QRDisplay;
