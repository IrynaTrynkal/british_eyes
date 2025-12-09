import Script from "next/script";
import { getTranslations } from "next-intl/server";

import { localizedRoutes } from "@/components/assets/localizedRoutes";
import {
    eyeDiseaseData,
    eyeDiseases,
    EyeDiseaseSlugType,
    keyEyeDisease,
} from "@/components/assets/patientsInstructionData";
import {
    breadcrumbsInnerSchema,
    innerCollectionPageSchema,
} from "@/components/assets/schemas";
import { EyeDiseaseFilter } from "@/components/pagePatient/EyeDiseaseFilter";
import { MainAllDiseases } from "@/components/pagePatient/MainAllDiseases";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { HeroDisease } from "@/components/someDiseaseComponent/HeroDisease";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "Disease", {
        uk: "/zakhvoryuvannya-ochey",
        en: "/en/eye-diseases",
        ru: "/ru/glaznye-bolezni",
    });
}

export default async function EyesDiseasePage({
    searchParams,
    params,
}: {
    searchParams?: Promise<{ disease?: string }>;
    params: Promise<{ locale: string }>;
}) {
    const { disease } = (await searchParams) || {};
    const { locale } = await params;
    const [t, ti] = await Promise.all([
        getTranslations("Menu"),
        getTranslations("Disease"),
    ]);
    const breadcrumb = [
        {
            name: "zakhvoryuvannya-ochey",
            href: "/zakhvoryuvannya-ochey",
        },
    ];
    const selectedDisease = disease || "glaukoma";
    const data = eyeDiseaseData.find(dis => dis.name.key === selectedDisease);

    const itemsSchema = keyEyeDisease.map(disease => {
        const base =
            localizedRoutes["/zakhvoryuvannya-ochey"][locale as LocaleType];
        return {
            name: t(disease.key),
            url: `${base}/${disease.slug[locale as LocaleType]}`,
        };
    });
    const collectionPageSchema = innerCollectionPageSchema({
        locale,
        title: ti("titleSEO"),
        description: ti("descriptionSEO"),
        image: "/images/dry-eye2.jpg",
        path: "/zakhvoryuvannya-ochey",
        items: itemsSchema,
        hasPartType: "MedicalCondition",
    });

    const breadcrumbsSchema = breadcrumbsInnerSchema({
        locale,
        items: breadcrumb,
        t,
    });

    return (
        <>
            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(collectionPageSchema),
                }}
            />
            <Script
                id="breadcrumbs-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbsSchema),
                }}
            />
            <HeroDisease title={t("zakhvoryuvannya-ochey")} />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:mt-5 prepc:mb-12 my-5"
            />
            <div className="tab:flex tab:flex-row-reverse tab:justify-between tab:px-6 pc:px-12 tab:overflow-visible tab:pb-12 pc:pb-[120px] relative pb-[60px]">
                <EyeDiseaseFilter
                    list={eyeDiseases}
                    className="tab:mb-0 tab:sticky prepc:top-24 tab:w-[207px] tab:mt-0 tab:h-fit mb-5"
                />
                {data && (
                    <MainAllDiseases
                        content={data[locale as LocaleType].content[0]}
                        link={data.name.key as EyeDiseaseSlugType}
                        title={t(selectedDisease)}
                        btnName={t("details")}
                    />
                )}
            </div>
            <Booking />
        </>
    );
}
