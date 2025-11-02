import { notFound } from "next/navigation";

import {
    eyeDiseaseData,
    EyeDiseaseType,
} from "@/components/assets/patientsInstructionData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TextTypeRender } from "@/components/shared/TextTypeRender";
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
            <section className="tab:pb-12 prepc:pt-10 tab:px-6 pc:px-12 pc:pb-[120px] pt-5 pb-[60px]">
                <div className="bg-green-10 tab:mx-0 tab:max-w-[1117px] prepc:w-[83%] prepc:p-6 prepc:rounded-lg mx-auto max-w-[540px] rounded p-4">
                    {displayedDisease[locale as LocaleType].content.map(
                        (item, ind) => (
                            <TextTypeRender key={ind} data={item.text} />
                        )
                    )}
                </div>
            </section>
            <Booking />
        </>
    );
}
