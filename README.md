# 📱 WiFi QR Generator

A modern and simple web application for generating QR codes that allow automatic connection to WiFi networks.

## ✨ Features

- 🔒 **Completely private**: All processing is done locally in your browser
- 📱 **Responsive**: Works perfectly on any device
- 🎨 **Modern UI**: Elegant interface with Tailwind CSS
- ⚡ **Fast**: Instant QR code generation
- 📥 **Easy download**: Save QR code as PNG image
- 📋 **Copy to clipboard**: Copy image directly
- 🔧 **Flexible**: Supports different WiFi security types
- 🌍 **Multilingual**: Available in English and Spanish with automatic language detection

## 🚀 Technologies used

- **Vite**: Fast and modern build tool
- **React 19**: UI framework
- **Tailwind CSS**: Utility-first CSS framework
- **qrcode**: Library for generating QR codes
- **Lucide React**: Modern icons

## 📦 Installation and usage

### Prerequisites
- Node.js (version 18 or higher)
- pnpm

### Installation steps

1. **Clone the repository**
   ```bash
   git clone [repo-url]
   cd wifi_qr_generator
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   - Visit `http://localhost:5173`

### Available scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build application for production
- `pnpm run preview` - Preview production build

## 🖥️ How to use the application

1. **Enter your WiFi data**:
   - Network name (SSID)
   - Password (if applicable)
   - Security type (WPA/WPA2, WEP, or no password)
   - Mark if it's a hidden network (optional)

2. **Generate the QR code**:
   - Click "Generate QR Code"
   - The code is generated instantly

3. **Download or share**:
   - Customize the file name
   - Download as PNG image
   - Or copy to clipboard

4. **Use the QR code**:
   - Scan with any mobile device
   - WiFi connection will be made automatically

5. **Language selection**:
   - The app automatically detects your system language
   - You can manually switch between English and Spanish using the language selector in the top-right corner

## 🔧 Customization

### Colors and theme
Colors can be modified in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### QR configuration
Modify QR options in `src/utils/qrUtils.js`:

```javascript
const qrCodeDataURL = await QRCode.toDataURL(wifiString, {
  errorCorrectionLevel: 'M', // L, M, Q, H
  width: 256,                // Size in pixels
  margin: 1,                 // Margin around QR
  color: {
    dark: '#000000',         // QR color
    light: '#FFFFFF'         // Background color
  }
});
```

## 🏗️ Project structure

```
wifi_qr_generator/
├── src/
│   ├── components/
│   │   ├── QRGenerator.jsx       # Main component
│   │   ├── WiFiForm.jsx          # Form for WiFi data
│   │   ├── QRDisplay.jsx         # Display and download QR
│   │   └── LanguageSelector.jsx  # Language switcher
│   ├── contexts/
│   │   └── LanguageContext.jsx   # i18n context provider
│   ├── hooks/
│   │   └── useTranslation.js     # Translation hook
│   ├── locales/
│   │   └── translations.js       # Translation dictionaries
│   ├── utils/
│   │   └── qrUtils.js            # QR generation utilities
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Base styles (Tailwind)
├── index.html                 # Base HTML
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
└── vite.config.js             # Vite configuration
```

## 🔒 Privacy and security

- ✅ **No server**: Everything works locally
- ✅ **No data collection**: No data is saved or sent
- ✅ **No analytics**: No user tracking
- ✅ **Open source**: You can review all the code

## 🌍 Internationalization

The application supports multiple languages with automatic detection:

- **Automatic detection**: Detects your browser/system language on first visit
- **Manual selection**: Use the language selector in the top-right corner
- **Supported languages**: English (en) and Spanish (es)
- **Fallback**: Defaults to English if your system language is not supported
- **Persistence**: Your language preference is saved in localStorage

### Adding new languages

To add a new language:

1. Add translations to `src/locales/translations.js`
2. Update the language detection logic in `src/contexts/LanguageContext.jsx`
3. Add the new language option to `src/components/LanguageSelector.jsx`

## 🌍 Deployment

### Netlify, Vercel, or GitHub Pages

1. **Production build**:
   ```bash
   pnpm run build
   ```

2. **Upload the `dist/` folder** to your preferred hosting service

### Using Netlify CLI

```bash
pnpm run build
npx netlify deploy --prod --dir=dist
```

## 🤝 Contributions

Contributions are welcome! If you find any bugs or have ideas to improve the application:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## ❓ FAQ

**Is it safe to enter my WiFi password?**
Yes, completely. All QR generation happens in your browser and nothing is sent to external servers.

**What devices can scan these QR codes?**
Any modern smartphone with iOS or Android can scan and connect automatically.

**Can I use this in my company?**
Yes, being completely local and without external dependencies, it's perfect for business use.

**Does it work without internet?**
Once the page is loaded, the application works completely offline.