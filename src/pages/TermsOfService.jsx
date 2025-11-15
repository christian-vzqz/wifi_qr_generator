import { useTranslation } from "../hooks/useTranslation";
import { Link } from "../components/Link";
import { usePageMetadata } from "../hooks/usePageMetadata";

const META_CONTENT = {
  es: {
    title: "Términos y Condiciones | WiFi QR Connect",
    description:
      "Lee los términos de uso de WiFi QR Connect: responsabilidades, limitaciones y buenas prácticas para compartir tu red WiFi vía QR.",
    keywords: "términos wifi qr, condiciones wifi qr connect, uso wifi qr",
    image: "/og-image-es.png",
  },
  en: {
    title: "Terms of Service | WiFi QR Connect",
    description:
      "Read the WiFi QR Connect terms of use: responsibilities, limitations, and best practices for sharing your WiFi via QR.",
    keywords: "wifi qr terms, wifi qr connect terms of service, wifi qr usage",
    image: "/og-image-en.png",
  },
};

const TermsOfService = () => {
  const { t, language } = useTranslation();
  const meta = META_CONTENT[language] || META_CONTENT.es;
  usePageMetadata({
    ...meta,
    canonicalPath: "/terms",
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

  const section1Paragraphs = t("terms.sections.section1.paragraphs");
  const section2List = t("terms.sections.section2.list");
  const section3List = t("terms.sections.section3.list");
  const section4List = t("terms.sections.section4.list");
  const section5List = t("terms.sections.section5.list");
  const section6Recommendations = t("terms.sections.section6.recommendations");
  const section7Paragraphs = t("terms.sections.section7.paragraphs");
  const section8Paragraphs = t("terms.sections.section8.paragraphs");
  const section9List = t("terms.sections.section9.list");
  const section10Paragraphs = t("terms.sections.section10.paragraphs");
  const section12Paragraphs = t("terms.sections.section12.paragraphs");
  const summaryItems = t("terms.sections.summary.items");

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
          {t("terms.backButton")}
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t("terms.title")}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          {t("terms.lastUpdated")} {formattedDate}
        </p>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section1.title")}
            </h2>
            {Array.isArray(section1Paragraphs) &&
              section1Paragraphs.map((text, index) => (
                <p key={`section1-${index}`}>{text}</p>
              ))}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section2.title")}
            </h2>
            <p>{t("terms.sections.section2.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {Array.isArray(section2List) &&
                section2List.map((item, index) => (
                  <li key={`section2-${index}`}>{item}</li>
                ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section3.title")}
            </h2>
            <p>{t("terms.sections.section3.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {Array.isArray(section3List) &&
                section3List.map((item, index) => (
                  <li key={`section3-${index}`}>{item}</li>
                ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section4.title")}
            </h2>
            <p>{t("terms.sections.section4.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {Array.isArray(section4List) &&
                section4List.map((item, index) => (
                  <li key={`section4-${index}`}>{item}</li>
                ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section5.title")}
            </h2>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section5.highlight")}
            </p>
            <p>{t("terms.sections.section5.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {Array.isArray(section5List) &&
                section5List.map((item, index) => (
                  <li key={`section5-${index}`}>{item}</li>
                ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section6.title")}
            </h2>
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 dark:border-amber-400 p-5 rounded-md">
              <p className="font-semibold text-amber-900 dark:text-amber-200">
                {t("terms.sections.section6.warningTitle")}
              </p>
              <p className="mt-2">
                {t("terms.sections.section6.warningDescription")}
              </p>
            </div>
            <p>{t("terms.sections.section6.recommendationIntro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {Array.isArray(section6Recommendations) &&
                section6Recommendations.map((item, index) => (
                  <li key={`section6-${index}`}>{item}</li>
                ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section7.title")}
            </h2>
            {Array.isArray(section7Paragraphs) &&
              section7Paragraphs.map((text, index) => (
                <p key={`section7-${index}`}>{text}</p>
              ))}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section8.title")}
            </h2>
            {Array.isArray(section8Paragraphs) &&
              section8Paragraphs.map((text, index) => (
                <p key={`section8-${index}`}>{text}</p>
              ))}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section9.title")}
            </h2>
            <p>{t("terms.sections.section9.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {Array.isArray(section9List) &&
                section9List.map((item, index) => (
                  <li key={`section9-${index}`}>{item}</li>
                ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section10.title")}
            </h2>
            {Array.isArray(section10Paragraphs) &&
              section10Paragraphs.map((text, index) => (
                <p key={`section10-${index}`}>{text}</p>
              ))}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section11.title")}
            </h2>
            <p>
              {t("terms.sections.section11.text")}{" "}
              <Link
                to="/privacy"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {t("terms.sections.section11.linkText")}
              </Link>
              {t("terms.sections.section11.afterLink")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section12.title")}
            </h2>
            {Array.isArray(section12Paragraphs) &&
              section12Paragraphs.map((text, index) => (
                <p key={`section12-${index}`}>{text}</p>
              ))}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section13.title")}
            </h2>
            <p>{t("terms.sections.section13.intro")}</p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {t("terms.sections.section13.email")}
            </p>
          </section>

          <section className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-xl p-6 space-y-3">
            <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-200">
              {t("terms.sections.summary.title")}
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-emerald-900 dark:text-emerald-100">
              {Array.isArray(summaryItems) &&
                summaryItems.map((item, index) => (
                  <li key={`summary-${index}`}>{item}</li>
                ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
