import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LocaleType } from "@/types/LocaleType";

interface LocalizedPaths {
    uk: string;
    en: string;
    ru: string;
}

export async function generatePageMetadata(
    locale: LocaleType,
    namespace: string,
    paths: LocalizedPaths
): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace });

    const canonical = paths[locale] ?? paths.uk;

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
        alternates: {
            canonical,
            languages: {
                "uk-UA": paths.uk,
                "en-US": paths.en,
                "ru-RU": paths.ru,
            },
        },
        title: t("titleSEO"),
        description: t("descriptionSEO"),
        openGraph: {
            title: t("titleSEO"),
            description: t("descriptionSEO"),
            type: "website",
        },
    };
}
