import QRCode from "qrcode";

/**
 * Generates a WiFi QR format text string
 * @param {string} ssid - WiFi network name
 * @param {string} password - WiFi network password
 * @param {string} security - Security type (WPA, WEP, nopass)
 * @param {boolean} hidden - Whether the network is hidden
 * @returns {string} WiFi QR formatted text string
 */
export const generateWiFiString = (
  ssid,
  password,
  security = "WPA",
  hidden = false
) => {
  const escapedSSID = ssid.replace(/([";,\\:])/g, "\\$1");
  const escapedPassword = password.replace(/([";,\\:])/g, "\\$1");

  return `WIFI:T:${security};S:${escapedSSID};P:${escapedPassword};H:${
    hidden ? "true" : "false"
  };;`;
};

/**
 * Generates a QR code from WiFi data
 * @param {string} ssid - WiFi network name
 * @param {string} password - WiFi network password
 * @param {string} security - Security type
 * @param {boolean} hidden - Whether the network is hidden
 * @returns {Promise<string>} QR code data URL
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
    console.error("Error generating QR code:", error);
    throw new Error("Could not generate QR code");
  }
};

/**
 * Downloads a QR code as PNG file
 * @param {string} dataURL - QR code data URL
 * @param {string} filename - File name (without extension)
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
    console.error("Error downloading file:", error);
    throw new Error("Could not download file");
  }
};

/**
 * Validates WiFi input data
 * @param {string} ssid - WiFi network name
 * @param {string} password - WiFi network password
 * @returns {Object} Object with validation and error messages
 */
export const validateWiFiData = (ssid, password) => {
  const errors = [];

  if (!ssid || ssid.trim().length === 0) {
    errors.push("Network name (SSID) is required");
  }

  if (ssid && ssid.length > 32) {
    errors.push("Network name cannot exceed 32 characters");
  }

  if (!password || password.trim().length === 0) {
    errors.push("Password is required");
  }

  if (password && password.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
