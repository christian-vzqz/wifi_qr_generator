import { useState } from "react";
import WiFiForm from "./WiFiForm";
import QRDisplay from "./QRDisplay";
import { generateQRCode } from "../utils/qrUtils";

const QRGenerator = () => {
  const [qrData, setQrData] = useState(null);
  const [wifiData, setWifiData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateQR = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const qrDataURL = await generateQRCode(
        formData.ssid,
        formData.password,
        formData.security,
        formData.hidden
      );

      setQrData(qrDataURL);
      setWifiData(formData);
    } catch (err) {
      console.error("Error generando QR:", err);
      setError(
        "No se pudo generar el código QR. Por favor, inténtalo de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setQrData(null);
    setWifiData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <p className="mt-1 text-sm text-red-700">{error}</p>
              </div>
              <div className="ml-auto pl-3">
                <button
                  onClick={() => setError(null)}
                  className="inline-flex text-red-400 hover:text-red-600"
                >
                  <span className="sr-only">Cerrar</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {!qrData ? (
          <WiFiForm onSubmit={handleGenerateQR} isLoading={isLoading} />
        ) : (
          <QRDisplay
            qrData={qrData}
            wifiData={wifiData}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default QRGenerator;
