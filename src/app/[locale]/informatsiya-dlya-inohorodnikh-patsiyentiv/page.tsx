import { notFound } from "next/navigation";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";

import { pationtsInstructionsData } from "@/components/assets/patientsInstructionData";
import {
    breadcrumbsInnerSchema,
    instructionPageSchema,
} from "@/components/assets/schemas";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Global } from "@/components/shared/global/Global";
import { TextTypeRender } from "@/components/shared/TextTypeRender";
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
        instr => instr.name.key === "informatsiya-dlya-inohorodnikh-patsiyentiv"
    );
    if (!data) return notFound();
    const title = data[locale as LocaleType].title;

    return generateInstructionMetadata(
        locale as LocaleType,
        title,
        "informatsiya-dlya-inohorodnikh-patsiyentiv"
    );
}

export default function PatientsNonresidentPage() {
    const t = useTranslations("Menu");
    const ti = useTranslations("Instructions");
    const tH = useTranslations("HomePage");
    const breadcrumb = [
        {
            name: "informatsiya-dlya-inohorodnikh-patsiyentiv",
            href: "/informatsiya-dlya-inohorodnikh-patsiyentiv",
        },
    ];
    const locale = useLocale();
    const data = pationtsInstructionsData.find(
        instr => instr.name.key === "informatsiya-dlya-inohorodnikh-patsiyentiv"
    );
    if (!data) return notFound();

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
            <HeroInstruction title={data[locale as LocaleType].title} />
            <section className="tab:pb-12 tab:px-6 pc:px-12 pc:pb-[120px] pb-[60px]">
                <div className="bg-green-10 tab:mx-0 tab:max-w-[1117px] prepc:w-[83%] prepc:p-6 prepc:rounded-lg mx-auto max-w-[540px] rounded p-4">
                    {data[locale as LocaleType].content.map((item, ind) => (
                        <TextTypeRender key={ind} data={item.text} />
                    ))}
                </div>
            </section>
            <Global />
        </>
    );
}
