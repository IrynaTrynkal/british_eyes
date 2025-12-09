import { LocaleType } from "@/types/LocaleType";

import { LocalizedRouteKey, localizedRoutes } from "./localizedRoutes";

export const mainWebPageSchema = ({
    locale,
    title,
    name,
    description,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: string;
    title: string;
    name: string;
    description: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "uk" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `https://eyes.ua/${languagePath}#webpage`,
        url: `https://eyes.ua/${languagePath}`,
        name: title,
        description,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        thumbnailUrl: "https://eyes.ua/images/logo.jpg",
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: "https://eyes.ua/images/main-hero.jpg",
            contentUrl: "https://eyes.ua/images/main-hero.jpg",
        },
        publisher: {
            "@type": "Organization",
            "@id": `https://eyes.ua/${languagePath}#organization`,
            name,
            url: `https://eyes.ua/${languagePath}`,
            logo: {
                "@type": "ImageObject",
                url: "https://eyes.ua/images/logo.jpg",
                contentUrl: "https://eyes.ua/images/logo.jpg",
            },
        },
    };
};

export const mainWebSiteSchema = ({
    locale,
    title,
    description,
}: {
    locale: string;
    title: string;
    description: string;
}) => {
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";
    const languagePath = locale === "en" ? "en/" : locale === "ru" ? "ru/" : "";
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `https://eyes.ua/${languagePath}#website`,
        url: `https://eyes.ua/${languagePath}`,
        name: title,
        description,
        inLanguage,
        potentialAction: {
            "@type": "SearchAction",
            target: `https://eyes.ua/${languagePath}?s={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };
};

export const breadcrumbsMainSchema = ({
    locale,
    name,
}: {
    locale: string;
    name: string;
}) => {
    const languagePath = locale === "uk" ? "" : `${locale}/`;
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: {
            "@type": "ListItem",
            position: 1,
            name,
            item: `https://eyes.ua/${languagePath}`,
        },
    };
};

export const breadcrumbsInnerSchema = ({
    locale,
    items,
    t,
}: {
    locale: string;
    items: { name: string; href: string }[];
    t: (key: string) => string;
}) => {
    const languagePath = locale === "uk" ? "" : `${locale}/`;

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: t(item.name),
            item: `https://eyes.ua/${languagePath}/${
                localizedRoutes[item.href]?.[locale as LocaleType] ?? item.href
            }`,
        })),
    };
};

export const innerWebPageSchema = ({
    locale,
    title,
    description,
    path,
    image,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: string;
    title: string;
    description: string;
    path: LocalizedRouteKey;
    image: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();

    const languagePath = locale === "uk" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";
    const localizedPath = localizedRoutes[path]?.[locale as LocaleType] ?? path;

    const fullUrl = `https://eyes.ua/${languagePath}${localizedPath}`;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: title,
        description,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://eyes.ua/${image}`,
            contentUrl: `https://eyes.ua/${image}`,
        },
        thumbnailUrl: "https://eyes.ua/images/logo.jpg",
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.ua/#website",
        },
    };
};
