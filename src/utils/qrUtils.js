import QRCode from "qrcode";

/**
 * Genera una cadena de texto en formato WiFi QR
 * @param {string} ssid - Nombre de la red WiFi
 * @param {string} password - Contraseña de la red WiFi
 * @param {string} security - Tipo de seguridad (WPA, WEP, nopass)
 * @param {boolean} hidden - Si la red está oculta
 * @returns {string} Cadena de texto formateada para QR WiFi
 */
export const generateWiFiString = (
  ssid,
  password,
  security = "WPA",
  hidden = false
) => {
  // Escapar caracteres especiales en SSID y password
  const escapedSSID = ssid.replace(/([";,\\:])/g, "\\$1");
  const escapedPassword = password.replace(/([";,\\:])/g, "\\$1");

  return `WIFI:T:${security};S:${escapedSSID};P:${escapedPassword};H:${
    hidden ? "true" : "false"
  };;`;
};

/**
 * Genera un código QR a partir de datos WiFi
 * @param {string} ssid - Nombre de la red WiFi
 * @param {string} password - Contraseña de la red WiFi
 * @param {string} security - Tipo de seguridad
 * @param {boolean} hidden - Si la red está oculta
 * @returns {Promise<string>} Data URL del código QR generado
 */
export const generateQRCode = async (
  ssid,
  password,
  security = "WPA",
  hidden = false
) => {
  try {
    const wifiString = generateWiFiString(ssid, password, security, hidden);

    const qrCodeDataURL = await QRCode.toDataURL(wifiString, {
      errorCorrectionLevel: "M",
      type: "image/png",
      quality: 0.92,
      margin: 1,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
      width: 256,
    });

    return qrCodeDataURL;
  } catch (error) {
    console.error("Error generando código QR:", error);
    throw new Error("No se pudo generar el código QR");
  }
};

/**
 * Descarga un código QR como archivo PNG
 * @param {string} dataURL - Data URL del código QR
 * @param {string} filename - Nombre del archivo (sin extensión)
 */
export const downloadQRCode = (dataURL, filename = "wifi-qr") => {
  try {
    const link = document.createElement("a");
    link.download = `${filename}.png`;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error descargando archivo:", error);
    throw new Error("No se pudo descargar el archivo");
  }
};

/**
 * Valida los datos de entrada para WiFi
 * @param {string} ssid - Nombre de la red WiFi
 * @param {string} password - Contraseña de la red WiFi
 * @returns {Object} Objeto con validación y mensajes de error
 */
export const validateWiFiData = (ssid, password) => {
  const errors = [];

  if (!ssid || ssid.trim().length === 0) {
    errors.push("El nombre de la red (SSID) es obligatorio");
  }

  if (ssid && ssid.length > 32) {
    errors.push("El nombre de la red no puede exceder 32 caracteres");
  }

  if (!password || password.trim().length === 0) {
    errors.push("La contraseña es obligatoria");
  }

  if (password && password.length < 8) {
    errors.push("La contraseña debe tener al menos 8 caracteres");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
