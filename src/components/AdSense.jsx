import { useEffect } from "react";

/**
 * AdSense component to display Google ads
 *
 * @param {string} adSlot - Ad slot ID
 * @param {string} adFormat - Ad format (default: "auto")
 * @param {boolean} fullWidthResponsive - Whether the ad is full-width responsive (default: true)
 * @param {object} style - Additional styles for the container
 */
const AdSense = ({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = {},
}) => {
  const isDevelopment = import.meta.env.MODE === "development";

  useEffect(() => {
    if (!isDevelopment) {
      try {
        if (typeof window !== "undefined") {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error("Error loading AdSense:", error);
      }
    }
  }, [isDevelopment]);

  if (isDevelopment) {
    return (
      <div
        style={{
          minHeight: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto",
          maxWidth: "728px",
          ...style,
        }}
        className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg transition-colors"
      >
        <div className="text-center p-4">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            AdSense Placeholder
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Slot: {adSlot}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "block",
        textAlign: "center",
        margin: "20px auto",
        maxWidth: "728px",
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          minHeight: "90px",
        }}
        data-ad-client="ca-pub-7067552437812933"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};

export default AdSense;
