import { getTranslations } from "next-intl/server";

import { HeroPatient } from "@/components/pagePatient/HeroPatient";
import { MainPatients } from "@/components/pagePatient/MainPatients";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;
    const t = await getTranslations({ locale, namespace: "PatientsPage" });

    const paths: Record<string, string> = {
        uk: "/informatsiya-dlya-patsiyentiv",
        en: "/en/patient-information",
        ru: "/ru/informatsiya-dlya-patsiyentov",
    };

    const canonical = paths[locale] || paths.uk;

    const languages: Record<string, string> = {
        "uk-UA": paths.uk,
        "en-US": paths.en,
        "ru-RU": paths.ru,
    };

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
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

export default function PatientsPage() {
    const breadcrumb = [
        {
            name: "informatsiya-dlya-patsiyentiv",
            href: "/informatsiya-dlya-patsiyentiv",
        },
    ];

    return (
        <>
            <HeroPatient />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:mt-5 prepc:mb-12 my-5"
            />
            <MainPatients />
            <Booking />
        </>
    );
}
