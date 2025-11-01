import { notFound } from "next/navigation";

import {
    eyeDiseaseData,
    EyeDiseaseType,
} from "@/components/assets/patientsInstructionData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { HeroDisease } from "@/components/someDiseaseComponent/HeroDisease";
import { LocaleType } from "@/types/LocaleType";

interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function EyeDiseasePage({ params }: PageProps) {
    const { locale, slug } = await params;

    const displayedDisease: EyeDiseaseType | undefined = eyeDiseaseData.find(
        disease => disease.name.key === slug
    );

    if (!displayedDisease) {
        notFound();
    }
    const breadcrumb = [
        { name: "zakhvoryuvannya-ochey", href: "/zakhvoryuvannya-ochey" },
        {
            name: displayedDisease.name.key,
            href: `/${displayedDisease.name.key}`,
        },
    ];

    return (
        <>
            <HeroDisease title={displayedDisease[locale as LocaleType].title} />
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <Booking />
        </>
    );
}
