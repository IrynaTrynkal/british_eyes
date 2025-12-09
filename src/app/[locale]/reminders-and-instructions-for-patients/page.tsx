import { notFound } from "next/navigation";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";

import {
    keySlugPatientsInstructionSchema,
    pationtsInstructionsData,
} from "@/components/assets/patientsInstructionData";
import {
    breadcrumbsInnerSchema,
    innerCollectionPageSchema,
} from "@/components/assets/schemas";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { HeroInstruction } from "@/components/someInstructionComponents/HeroInstruction";
import { MainAllInstrucrions } from "@/components/someInstructionComponents/MainAllInstrucrions";
import { LocaleType } from "@/types/LocaleType";
import { generateInstructionMetadata } from "@/utils/generateInstructionMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;
    const data = pationtsInstructionsData.find(
        instr => instr.name.key === "reminders-and-instructions-for-patients"
    );
    if (!data) return notFound();
    const title = data[locale as LocaleType].title;

    return generateInstructionMetadata(
        locale as LocaleType,
        title,
        "reminders-and-instructions-for-patients"
    );
}

export default function PatientsAllInstructionsPage() {
    const t = useTranslations("Menu");
    const ti = useTranslations("Instructions");
    const breadcrumb = [
        {
            name: "reminders-and-instructions-for-patients",
            href: "/reminders-and-instructions-for-patients",
        },
    ];
    const locale = useLocale();
    const data = pationtsInstructionsData.find(
        instr => instr.name.key === "reminders-and-instructions-for-patients"
    );
    if (!data) return notFound();
    const title = data[locale as LocaleType].title;

    const itemsSchema = keySlugPatientsInstructionSchema.map(instr => {
        return {
            name: t(instr.key),
            url: `/${instr.slug[locale as LocaleType]}`,
            type: "Article",
        };
    });
    const collectionPageSchema = innerCollectionPageSchema({
        locale,
        title: ti("titleSEO", { title }),
        description: ti("descriptionSEO", { title }),
        image: "/images/about.jpg",
        path: "/reminders-and-instructions-for-patients",
        items: itemsSchema,
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
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[176px] prepc:mb-12 mt-30 mb-6"
            />
            <HeroInstruction title={data[locale as LocaleType].title} />
            <MainAllInstrucrions />
            <Booking />
        </>
    );
}
