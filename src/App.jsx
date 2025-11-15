import QRGenerator from "./components/QRGenerator";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <QRGenerator />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
