import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { keySlugPatientsInstruction } from "@/components/assets/patientsInstructionData";
import { LocaleType } from "@/types/LocaleType";

export async function generateInstructionMetadata(
    locale: LocaleType,
    namespace: string,
    instructionKey: string
): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace });

    const slugItem = keySlugPatientsInstruction.find(
        i => i.key === instructionKey
    );

    if (!slugItem) {
        throw new Error(
            `Slug not found for instruction key: ${instructionKey}`
        );
    }

    const paths = {
        uk: `/${slugItem.slug.uk}`,
        en: `/en/${slugItem.slug.en}`,
        ru: `/ru/${slugItem.slug.ru}`,
    };

    const canonical = paths[locale] ?? paths.uk;

    const languages = {
        "uk-UA": paths.uk,
        "en-US": paths.en,
        "ru-RU": paths.ru,
    };

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
        alternates: {
            canonical,
            languages,
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
