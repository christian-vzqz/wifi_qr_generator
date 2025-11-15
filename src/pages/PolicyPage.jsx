import { useTranslation } from "../hooks/useTranslation";
import { Link } from "../components/Link";
import { usePageMetadata } from "../hooks/usePageMetadata";

const META_CONTENT = {
  es: {
    title: "Política de Privacidad | WiFi QR Connect",
    description:
      "Conoce cómo WiFi QR Connect protege tu información. No guardamos tus redes ni contraseñas; todo se procesa en tu navegador.",
    keywords:
      "política de privacidad wifi qr, datos wifi qr connect, seguridad wifi qr",
    image: "/og-image-es.png",
  },
  en: {
    title: "Privacy Policy | WiFi QR Connect",
    description:
      "Learn how WiFi QR Connect protects your WiFi data. We never store your networks or passwords; everything runs locally in your browser.",
    keywords:
      "wifi qr privacy policy, wifi qr data security, wifi qr connect privacy",
    image: "/og-image-en.png",
  },
};

const PolicyPage = () => {
  const { t, language } = useTranslation();
  const meta = META_CONTENT[language] || META_CONTENT.es;

  usePageMetadata({
    ...meta,
    canonicalPath: "/privacy",
    locale: language === "es" ? "es_MX" : "en_US",
  });

  const formattedDate = new Date().toLocaleDateString(
    language === "es" ? "es-MX" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 sm:p-10 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {t("privacy.backButton")}
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t("privacy.title")}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          {t("privacy.lastUpdated")} {formattedDate}
        </p>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section1.title")}
            </h2>
            <p>{t("privacy.sections.section1.content1")}</p>
            <p>
              <strong className="text-gray-900 dark:text-gray-100">
                {t("privacy.sections.section1.content2")}
              </strong>
            </p>
            <p>{t("privacy.sections.section1.content3")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section2.title")}
            </h2>
            <p>{t("privacy.sections.section2.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-900 dark:text-gray-100">
                  {t("privacy.sections.section2.localStorage.title")}
                </strong>{" "}
                {t("privacy.sections.section2.localStorage.description")}
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100">
                  {t("privacy.sections.section2.analytics.title")}
                </strong>{" "}
                {t("privacy.sections.section2.analytics.description")}
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-100">
                  {t("privacy.sections.section2.adsense.title")}
                </strong>{" "}
                {t("privacy.sections.section2.adsense.description")}{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t("privacy.sections.section2.adsense.link")}
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section3.title")}
            </h2>
            <p>{t("privacy.sections.section3.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("privacy.sections.section3.item1")}</li>
              <li>{t("privacy.sections.section3.item2")}</li>
              <li>{t("privacy.sections.section3.item3")}</li>
            </ul>
            <p>
              {t("privacy.sections.section3.outro")}{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t("privacy.sections.section3.link")}
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section4.title")}
            </h2>
            <p>{t("privacy.sections.section4.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("privacy.sections.section4.item1")}</li>
              <li>{t("privacy.sections.section4.item2")}</li>
              <li>{t("privacy.sections.section4.item3")}</li>
              <li>{t("privacy.sections.section4.item4")}</li>
            </ul>
            <p>
              {t("privacy.sections.section4.outro")}{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t("privacy.sections.section4.link")}
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section5.title")}
            </h2>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 dark:border-emerald-400 p-5 rounded-md">
              <p className="font-semibold text-emerald-900 dark:text-emerald-200">
                {t("privacy.sections.section5.strong")}
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>{t("privacy.sections.section5.item1")}</li>
                <li>{t("privacy.sections.section5.item2")}</li>
                <li>{t("privacy.sections.section5.item3")}</li>
                <li>{t("privacy.sections.section5.item4")}</li>
                <li>{t("privacy.sections.section5.item5")}</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section6.title")}
            </h2>
            <p>{t("privacy.sections.section6.content")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section7.title")}
            </h2>
            <p>{t("privacy.sections.section7.content")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section8.title")}
            </h2>
            <p>{t("privacy.sections.section8.content1")}</p>
            <p>
              {t("privacy.sections.section8.content2")}{" "}
              {t("privacy.sections.section8.content3")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section9.title")}
            </h2>
            <p>{t("privacy.sections.section9.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("privacy.sections.section9.item1")}</li>
              <li>{t("privacy.sections.section9.item2")}</li>
              <li>{t("privacy.sections.section9.item3")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section10.title")}
            </h2>
            <p>{t("privacy.sections.section10.intro")}</p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {t("privacy.sections.section10.email")}
            </p>
          </section>

          <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6 space-y-3">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200">
              {t("privacy.summary.title")}
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-blue-900 dark:text-blue-100">
              <li>{t("privacy.summary.item1")}</li>
              <li>{t("privacy.summary.item2")}</li>
              <li>{t("privacy.summary.item3")}</li>
              <li>{t("privacy.summary.item4")}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
