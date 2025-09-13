import QRGenerator from "./components/QRGenerator";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <QRGenerator />
    </LanguageProvider>
  );
}

export default App;
