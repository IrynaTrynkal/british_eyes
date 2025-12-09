import { notFound } from "next/navigation";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";

import {
    beforeSurgeryInstruction,
    pationtsInstructionsData,
} from "@/components/assets/patientsInstructionData";
import {
    breadcrumbsInnerSchema,
    instructionPageSchema,
} from "@/components/assets/schemas";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BeforeSurgeryCard } from "@/components/someInstructionComponents/BeforeSurgeryCard";
import { BeforeSurgeryMain } from "@/components/someInstructionComponents/BeforeSurgeryMain";
import { HeroInstruction } from "@/components/someInstructionComponents/HeroInstruction";
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
        instr =>
            instr.name.key ===
            "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam"
    );
    if (!data) return notFound();
    const title = data[locale as LocaleType].title;

    return generateInstructionMetadata(
        locale as LocaleType,
        title,
        "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam"
    );
}

export default function PatientsBeforeSurgeryPage() {
    const t = useTranslations("Menu");
    const ti = useTranslations("Instructions");
    const tH = useTranslations("HomePage");
    const breadcrumb = [
        {
            name: "reminders-and-instructions-for-patients",
            href: "/reminders-and-instructions-for-patients",
        },
        {
            name: "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam",
            href: "/informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam",
        },
    ];
    const locale = useLocale();
    const data = pationtsInstructionsData.find(
        instr =>
            instr.name.key ===
            "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam"
    );
    if (!data) return notFound();
    const content = beforeSurgeryInstruction[locale as LocaleType];

    const someInstructionPageSchema = instructionPageSchema({
        locale: locale as LocaleType,
        data,
        nameOrganization: tH("title"),
        t: ti,
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
                    __html: JSON.stringify(someInstructionPageSchema),
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
            <div className="prepc:flex prepc:gap-5">
                <div className="prepc:w-[calc(100%-365px)]">
                    <HeroInstruction
                        title={data[locale as LocaleType].title}
                        width
                    />
                    <BeforeSurgeryMain content={content} />
                </div>
                <BeforeSurgeryCard
                    content={content}
                    className="prepc:pr-6 pc:pr-12 prepc:w-[345px]"
                />
            </div>
            <Booking />
        </>
    );
}
