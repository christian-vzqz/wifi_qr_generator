import QRGenerator from "../components/QRGenerator";
import { useTranslation } from "../hooks/useTranslation";
import { usePageMetadata } from "../hooks/usePageMetadata";

const META_CONTENT = {
  es: {
    title:
      "Generador de QR WiFi Gratis - Comparte tu Red Fácilmente | WiFi QR Connect",
    description:
      "Genera códigos QR para compartir tu WiFi en segundos. Gratis, seguro y sin registro. Compatible con iPhone y Android. Procesamiento 100% local.",
    keywords:
      "generador QR WiFi, código QR WiFi gratis, compartir WiFi QR, WiFi QR generator, crear QR WiFi, generador códigos QR",
    image: "/og-image-es.png",
  },
  en: {
    title:
      "Free WiFi QR Generator - Share Your Network Easily | WiFi QR Connect",
    description:
      "Create WiFi QR codes in seconds. Free, secure, no signup required. Works on iPhone and Android with 100% local processing.",
    keywords:
      "wifi qr generator, wifi qr code, share wifi qr, qr wifi generator, create wifi qr code",
    image: "/og-image-en.png",
  },
};

const Home = () => {
  const { language } = useTranslation();
  const meta = META_CONTENT[language] || META_CONTENT.es;

  usePageMetadata({
    ...meta,
    canonicalPath: "/",
    locale: language === "es" ? "es_MX" : "en_US",
  });

  return <QRGenerator />;
};

export default Home;
