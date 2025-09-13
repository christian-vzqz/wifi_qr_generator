export const translations = {
  es: {
    title: "Generador de QR WiFi",
    subtitle: "Introduce los datos de tu red WiFi",

    form: {
      ssidLabel: "Nombre de la red (SSID)",
      ssidPlaceholder: "Mi_WiFi",
      passwordLabel: "Contraseña",
      passwordPlaceholder: "Tu contraseña WiFi",
      securityLabel: "Tipo de seguridad",
      securityOptions: {
        WPA: "WPA/WPA2",
        WEP: "WEP",
        nopass: "Sin contraseña",
      },
      hiddenLabel: "Red oculta (SSID no visible)",
      generateButton: "Generar Código QR",
      generating: "Generando QR...",
      privacyNote:
        "Tus datos no se guardan ni se envían a ningún servidor. Todo el procesamiento se realiza localmente en tu navegador.",
    },

    validation: {
      ssidRequired: "El nombre de la red es obligatorio",
      ssidTooLong: "El nombre no puede exceder 32 caracteres",
      passwordRequired: "La contraseña es obligatoria",
      passwordTooShort: "La contraseña debe tener al menos 8 caracteres",
    },

    qrDisplay: {
      title: "¡Código QR Generado!",
      subtitle: "Escanea para conectarte automáticamente",
      networkInfo: "Información de la red",
      network: "Red (SSID):",
      security: "Seguridad:",
      password: "Contraseña:",
      hiddenNetwork: "Red oculta:",
      yes: "Sí",
      filenameLabel: "Nombre del archivo",
      filenamePlaceholder: "wifi-qr",
      filenameSuffix: "Se guardará como",
      downloadButton: "Descargar",
      downloading: "Descargando...",
      copyButton: "Copiar",
      copied: "¡Copiado!",
      generateAnotherButton: "Generar otro código QR",
      instructions: {
        title: "¿Cómo usar el código QR?",
        step1: "1. Abre la cámara de tu teléfono",
        step2: "2. Apunta a este código QR",
        step3: "3. Toca la notificación que aparece",
        step4: "4. ¡Tu dispositivo se conectará automáticamente!",
      },
    },

    errors: {
      title: "Error",
      qrGeneration:
        "No se pudo generar el código QR. Por favor, inténtalo de nuevo.",
      download: "Error al descargar el archivo. Inténtalo de nuevo.",
      copy: 'No se pudo copiar automáticamente. Haz click derecho en la imagen y selecciona "Copiar imagen".',
      close: "Cerrar",
    },

    language: {
      label: "Idioma",
      spanish: "Español",
      english: "English",
    },
  },

  en: {
    title: "WiFi QR Generator",
    subtitle: "Enter your WiFi network details",

    form: {
      ssidLabel: "Network name (SSID)",
      ssidPlaceholder: "My_WiFi",
      passwordLabel: "Password",
      passwordPlaceholder: "Your WiFi password",
      securityLabel: "Security type",
      securityOptions: {
        WPA: "WPA/WPA2",
        WEP: "WEP",
        nopass: "No password",
      },
      hiddenLabel: "Hidden network (SSID not visible)",
      generateButton: "Generate QR Code",
      generating: "Generating QR...",
      privacyNote:
        "Your data is not saved or sent to any server. All processing is done locally in your browser.",
    },

    validation: {
      ssidRequired: "Network name is required",
      ssidTooLong: "Name cannot exceed 32 characters",
      passwordRequired: "Password is required",
      passwordTooShort: "Password must be at least 8 characters",
    },

    qrDisplay: {
      title: "QR Code Generated!",
      subtitle: "Scan to connect automatically",
      networkInfo: "Network information",
      network: "Network (SSID):",
      security: "Security:",
      password: "Password:",
      hiddenNetwork: "Hidden network:",
      yes: "Yes",
      filenameLabel: "File name",
      filenamePlaceholder: "wifi-qr",
      filenameSuffix: "Will be saved as",
      downloadButton: "Download",
      downloading: "Downloading...",
      copyButton: "Copy",
      copied: "Copied!",
      generateAnotherButton: "Generate another QR code",
      instructions: {
        title: "How to use the QR code?",
        step1: "1. Open your phone's camera",
        step2: "2. Point to this QR code",
        step3: "3. Tap the notification that appears",
        step4: "4. Your device will connect automatically!",
      },
    },

    errors: {
      title: "Error",
      qrGeneration: "Could not generate QR code. Please try again.",
      download: "Error downloading file. Try again.",
      copy: 'Could not copy automatically. Right-click on the image and select "Copy image".',
      close: "Close",
    },

    language: {
      label: "Language",
      spanish: "Español",
      english: "English",
    },
  },
};
