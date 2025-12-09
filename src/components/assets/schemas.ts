import { urlFor } from "@/sanity/lib/image";
import { LocaleType } from "@/types/LocaleType";
import { getFirstImage } from "@/utils/getFirstImage";
import { toPlainText } from "@/utils/toPlainText";

import { DoctorQueryResult } from "../../../sanity.types";
import { hotLineNumber, phoneList, socialLinks } from "./contacts";
import { departments } from "./doctorsData";
import { LocalizedRouteKey, localizedRoutes } from "./localizedRoutes";
import { servicesList } from "./menu";
import {
    EyeDiseaseType,
    PationtsInstructionType,
} from "./patientsInstructionData";
import { ServicesProps } from "./servicesData";

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
            "@type": "MedicalClinic",
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

export const innerCollectionPageSchema = ({
    locale,
    title,
    description,
    path,
    image,
    items,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: string;
    title: string;
    description: string;
    path: LocalizedRouteKey;
    image: string;
    items?: { name: string; url: string; type?: string }[];
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
        "@type": "CollectionPage",
        "@id": `${fullUrl}#collection`,
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
        ...(items
            ? {
                  hasPart: items.map(item => ({
                      "@type": item.type,
                      name: item.name,
                      url: `https://eyes.ua/${languagePath}/${item.url}`,
                  })),
              }
            : {}),
    };
};

export const newsPageSchema = ({
    locale,
    title,
    description,
    slug,
    image = "/images/megaphone1.jpg",
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: string;
    title: string;
    description: string;
    slug: string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "uk" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";

    const fullUrl = `https://eyes.ua/${languagePath}blog/${slug}`;

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
            url: `https://eyes.ua${image}`,
            contentUrl: `https://eyes.ua${image}`,
        },
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.ua/#website",
        },
        mainEntity: {
            "@type": "NewsArticle",
            headline: title,
            image: `https://eyes.ua${image}`,
            datePublished,
            dateModified: finalDateModified,
            publisher: {
                "@type": "MedicalClinic",
                name: "Британський Офтальмологічний Центр EYES",
                logo: {
                    "@type": "ImageObject",
                    url: "https://eyes.ua/images/logo.jpg",
                },
            },
        },
    };
};

export const instructionPageSchema = ({
    locale,
    data,
    nameOrganization,
    t,
    image = "/images/patients-menu.jpg",
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    data: PationtsInstructionType;
    nameOrganization: string;
    t: (key: string, params?: Record<string, string | number>) => string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "uk" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";

    const localizedSlug = data.name.slug[locale];
    const fullUrl = `https://eyes.ua/${languagePath}${localizedSlug}`;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: t("titleSEO", { title: data[locale].title }),
        description: t("descriptionSEO", { title: data[locale].title }),
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://eyes.ua${image}`,
            contentUrl: `https://eyes.ua${image}`,
        },
        thumbnailUrl: "https://eyes.ua/images/logo.jpg",
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.ua/#website",
        },
        mainEntity: {
            "@type": "Article",
            headline: t("titleSEO", { title: data[locale].title }),
            description: t("descriptionSEO", { title: data[locale].title }),
            inLanguage,
            datePublished,
            dateModified: finalDateModified,
            mainEntityOfPage: fullUrl,
            image: {
                "@type": "ImageObject",
                url: `https://eyes.ua${image}`,
                contentUrl: `https://eyes.ua${image}`,
            },
            publisher: {
                "@type": "MedicalClinic",
                "@id": "https://eyes.ua/#organization",
                name: nameOrganization,
                url: "https://eyes.ua/",
                logo: {
                    "@type": "ImageObject",
                    url: "https://eyes.ua/images/logo.jpg",
                    contentUrl: "https://eyes.ua/images/logo.jpg",
                },
            },
        },
    };
};

export const eyeDiseasePageSchema = ({
    locale,
    data,
    nameOrganization,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    data: EyeDiseaseType;
    nameOrganization: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();

    const languagePath = locale === "uk" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";
    const base = localizedRoutes["/zakhvoryuvannya-ochey"][locale];
    const localizedSlug = data.name.slug[locale];
    const fullUrl = `https://eyes.ua/${languagePath}${base}/${localizedSlug}`;

    const mainImage =
        getFirstImage(data[locale].content) ?? "/images/patients-menu.jpg";

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: data[locale].titleSEO,
        description: data[locale].descriptionSEO,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://eyes.ua${mainImage}`,
            contentUrl: `https://eyes.ua${mainImage}`,
        },
        thumbnailUrl: "https://eyes.ua/images/logo.jpg",

        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.ua/#website",
        },

        mainEntity: {
            "@type": "MedicalCondition",
            "@id": `${fullUrl}#condition`,
            name: data[locale].titleSEO,
            description: data[locale].descriptionSEO,
            inLanguage,
            url: fullUrl,

            associatedAnatomy: {
                "@type": "AnatomicalStructure",
                name: "Eye",
            },

            datePublished,
            dateModified: finalDateModified,

            image: {
                "@type": "ImageObject",
                url: `https://eyes.ua${mainImage}`,
                contentUrl: `https://eyes.ua${mainImage}`,
            },

            publisher: {
                "@type": "MedicalClinic",
                "@id": "https://eyes.ua/#organization",
                name: nameOrganization,
                url: "https://eyes.ua/",
                logo: {
                    "@type": "ImageObject",
                    url: "https://eyes.ua/images/logo.jpg",
                    contentUrl: "https://eyes.ua/images/logo.jpg",
                },
            },
        },
    };
};

export const doctorPageSchema = ({
    locale,
    data,
    nameOrganization,
    t,
}: {
    locale: LocaleType;
    data: DoctorQueryResult;
    nameOrganization: string;
    t: (key: string) => string;
}) => {
    if (!data) return null;

    const languagePath = locale === "uk" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";
    const basePath = localizedRoutes["/oftalmolohy"][locale];

    const slug = data.slug!;
    const fullUrl = `https://eyes.ua/${languagePath}${basePath}/${slug}`;

    const imageUrl = data.photo
        ? urlFor(data.photo)
        : "https://eyes.ua/images/doctors-hero2.jpg";

    const specialization = toPlainText(data.specialization || []) || undefined;

    const about =
        toPlainText(data.about || []) ||
        toPlainText(data.position || []) ||
        specialization ||
        "";

    const departmentsList =
        data.departments
            ?.map(dep => {
                const found = departments.find(item => item.key === dep);
                return found ? found.translations[locale] : null;
            })
            .filter(Boolean) ?? [];

    const servicesList =
        data.services?.map(serv => t(serv)).filter(Boolean) ?? [];

    const yearsOfExperience = (() => {
        if (!data.experience) return undefined;

        const match = data.experience.match(/^(\d{4})$/);
        if (match) {
            const startYear = Number(match[1]);
            const currentYear = new Date().getFullYear();
            const experience = currentYear - startYear;
            return experience > 0 ? experience : undefined;
        }
        return undefined;
    })();

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: data.name,
        description: about.slice(0, 160), // SEO-summary
        inLanguage,

        primaryImageOfPage: {
            "@type": "ImageObject",
            url: imageUrl,
            contentUrl: imageUrl,
        },

        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.ua/#website",
        },

        mainEntity: {
            "@type": "Physician",
            "@id": `${fullUrl}#physician`,
            name: data.name,
            url: fullUrl,
            image: imageUrl,
            description: about,
            inLanguage,

            medicalSpecialty: specialization,
            department: departmentsList,
            availableService: servicesList,
            yearsOfExperience,
            employer: {
                "@type": "MedicalClinic",
                "@id": "https://eyes.ua/#organization",
                name: nameOrganization,
                url: "https://eyes.ua/",
                logo: {
                    "@type": "ImageObject",
                    url: "https://eyes.ua/images/logo.jpg",
                },
            },
        },
    };
};

export const contactPageSchema = ({
    locale,
    title,
    description,
    nameOrganization,
    t,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    title: string;
    description: string;
    nameOrganization: string;
    t: (key: string) => string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "uk" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";

    const base = localizedRoutes["/kontakty"][locale];
    const fullUrl = `https://eyes.ua/${languagePath}${base}`;

    return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: title,
        description,
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.ua/#website",
        },
        publisher: {
            "@type": "MedicalClinic",
            "@id": "https://eyes.ua/#organization",
            name: nameOrganization,
            url: "https://eyes.ua/",
            logo: {
                "@type": "ImageObject",
                url: "https://eyes.ua/images/logo.jpg",
                contentUrl: "https://eyes.ua/images/logo.jpg",
            },
            contactPoint: [
                ...phoneList.map(phone => ({
                    "@type": "ContactPoint",
                    telephone: phone,
                    contactType: "customer service",
                    areaServed: "UA",
                    availableLanguage: ["Ukrainian", "English", "Russian"],
                })),
                {
                    "@type": "ContactPoint",
                    telephone: hotLineNumber,
                    contactType: "hotline",
                    areaServed: "UA",
                    availableLanguage: ["Ukrainian", "English", "Russian"],
                },
            ],
            sameAs: socialLinks.map(link => link.link),
            address: {
                "@type": "PostalAddress",
                streetAddress: t("adressMap"),
                addressCountry: "UA",
            },
        },
    };
};

export const aboutClinicPageSchema = ({
    locale,
    title,
    description,
    nameOrganization,
    t,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    title: string;
    description: string;
    nameOrganization: string;
    t: (key: string) => string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "uk" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";

    const base = localizedRoutes["/pro-kliniku"][locale];
    const fullUrl = `https://eyes.ua/${languagePath}${base}`;

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
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.ua/#website",
        },
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: "https://eyes.ua/images/about-hero.jpg",
            contentUrl: "https://eyes.ua/images/about-hero.jpg",
        },
        publisher: {
            "@type": "MedicalClinic",
            "@id": "https://eyes.ua/#organization",
            name: nameOrganization,
            url: "https://eyes.ua/",
            logo: {
                "@type": "ImageObject",
                url: "https://eyes.ua/images/logo.jpg",
                contentUrl: "https://eyes.ua/images/logo.jpg",
            },
            contactPoint: [
                ...phoneList.map(phone => ({
                    "@type": "ContactPoint",
                    telephone: phone,
                    contactType: "customer service",
                    areaServed: "UA",
                    availableLanguage: ["Ukrainian", "English", "Russian"],
                })),
                {
                    "@type": "ContactPoint",
                    telephone: hotLineNumber,
                    contactType: "hotline",
                    areaServed: "UA",
                    availableLanguage: ["Ukrainian", "English", "Russian"],
                },
            ],
            sameAs: socialLinks.map(link => link.link),
            address: {
                "@type": "PostalAddress",
                streetAddress: t("adressMap"),
                addressCountry: "UA",
            },
        },
    };
};

export const servicePageSchema = ({
    locale,
    data,
    nameOrganization,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    data: ServicesProps;
    nameOrganization: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "uk" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";

    const base = localizedRoutes["/posluhy"][locale];
    const localizedSlug = data.name.slug[locale];
    const fullUrl = `https://eyes.ua/${languagePath}${base}/${localizedSlug}`;

    const hero = data[locale].sections?.find(
        section => section.type === "hero"
    )?.data;
    const imageUrl = hero?.image ?? "/images/services-hero.jpg";

    const meta = data[locale].sections?.find(
        section => section.type === "meta"
    )?.data;

    const serviceType = servicesList.find(
        service => service.key === data.name.key
    )?.type;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: meta?.titleSEO || "",
        description: meta?.descriptionSEO || "",
        inLanguage,
        datePublished,
        dateModified: finalDateModified,
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `https://eyes.ua${imageUrl}`,
            contentUrl: `https://eyes.ua${imageUrl}`,
        },
        thumbnailUrl: "https://eyes.ua/images/logo.jpg",
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.ua/#website",
        },
        publisher: {
            "@type": "MedicalClinic",
            "@id": "https://eyes.ua/#organization",
            name: nameOrganization,
            url: "https://eyes.ua/",
            logo: {
                "@type": "ImageObject",
                url: "https://eyes.ua/images/logo.jpg",
                contentUrl: "https://eyes.ua/images/logo.jpg",
            },
        },
        mainEntity: {
            "@type": serviceType,
            "@id": `${fullUrl}#service`,
            name: meta?.titleSEO || "",
            description: meta?.descriptionSEO || "",
            url: fullUrl,
            inLanguage,
            provider: {
                "@type": "MedicalClinic",
                "@id": "https://eyes.ua/#organization",
                name: nameOrganization,
                url: "https://eyes.ua/",
            },
            image: {
                "@type": "ImageObject",
                url: `https://eyes.ua${imageUrl}`,
                contentUrl: `https://eyes.ua${imageUrl}`,
            },
        },
    };
};

export const raynerPageSchema = ({
    locale,
    title,
    description,
    nameOrganization,
    datePublished = "2020-01-01T00:00:00+00:00",
    dateModified,
}: {
    locale: LocaleType;
    title: string;
    description: string;
    nameOrganization: string;
    datePublished?: string;
    dateModified?: string;
}) => {
    const finalDateModified = dateModified ?? new Date().toISOString();
    const languagePath = locale === "uk" ? "" : `${locale}/`;
    const inLanguage =
        locale === "en" ? "en-US" : locale === "ru" ? "ru-RU" : "uk-UA";

    const base = localizedRoutes["/rayner-galaxy-ua"][locale];
    const fullUrl = `https://eyes.ua/${languagePath}${base}`;

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
            url: "https://eyes.ua/images/hero-galaxy.jpg",
            contentUrl: "https://eyes.ua/images/hero-galaxy.jpg",
        },
        thumbnailUrl: "https://eyes.ua/images/logo.jpg",
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://eyes.ua/#website",
        },
        publisher: {
            "@type": "MedicalClinic",
            "@id": "https://eyes.ua/#organization",
            name: nameOrganization,
            url: "https://eyes.ua/",
            logo: {
                "@type": "ImageObject",
                url: "https://eyes.ua/images/logo.jpg",
                contentUrl: "https://eyes.ua/images/logo.jpg",
            },
        },
        mainEntity: {
            "@type": "Service",
            "@id": `${fullUrl}#service`,
            name: title,
            description,
            url: fullUrl,
            inLanguage,
            provider: {
                "@type": "MedicalClinic",
                "@id": "https://eyes.ua/#organization",
                name: nameOrganization,
                url: "https://eyes.ua/",
            },
            image: {
                "@type": "ImageObject",
                url: "https://eyes.ua/images/hero-galaxy.jpg",
                contentUrl: "https://eyes.ua/images/hero-galaxy.jpg",
            },
        },
    };
};
