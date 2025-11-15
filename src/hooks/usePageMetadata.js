import { useEffect } from "react";

const DEFAULT_IMAGE = "https://wifiqrconnect.netlify.app/og-image-en.png";
const FALLBACK_ORIGIN = "https://wifiqrconnect.netlify.app";

const upsertMeta = (key, value, attr = "name") => {
  if (!value) return;
  const head = document.head || document.getElementsByTagName("head")[0];
  if (!head) return;

  let element = head.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    head.appendChild(element);
  }
  element.setAttribute("content", value);
};

const upsertLink = (rel, href) => {
  if (!href) return;
  const head = document.head || document.getElementsByTagName("head")[0];
  if (!head) return;

  let link = head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const buildAbsoluteUrl = (value, origin) => {
  if (!value) return undefined;
  if (value.startsWith("http")) return value;
  const normalized = value.startsWith("/") ? value : `/${value}`;
  return `${origin}${normalized}`;
};

export const usePageMetadata = ({
  title,
  description,
  keywords,
  canonicalPath = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  locale = "es_MX",
} = {}) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (title) {
      document.title = title;
      upsertMeta("twitter:title", title);
      upsertMeta("og:title", title, "property");
    }

    if (description) {
      upsertMeta("description", description);
      upsertMeta("twitter:description", description);
      upsertMeta("og:description", description, "property");
    }

    if (keywords) {
      upsertMeta("keywords", keywords);
    }

    const origin =
      typeof window !== "undefined" && window.location.origin
        ? window.location.origin
        : FALLBACK_ORIGIN;
    const normalizedPath = canonicalPath.startsWith("/")
      ? canonicalPath
      : `/${canonicalPath}`;
    const canonicalUrl = `${origin}${normalizedPath}`;
    const absoluteImage = buildAbsoluteUrl(image, origin);

    upsertLink("canonical", canonicalUrl);
    upsertMeta("twitter:url", canonicalUrl);
    upsertMeta("og:url", canonicalUrl, "property");

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("og:type", type, "property");
    upsertMeta("og:image", absoluteImage, "property");
    upsertMeta("twitter:image", absoluteImage);
    upsertMeta("og:locale", locale, "property");
  }, [title, description, keywords, canonicalPath, image, type, locale]);
};
