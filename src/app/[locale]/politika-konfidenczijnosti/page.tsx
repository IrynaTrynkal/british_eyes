import { useLocale, useTranslations } from "next-intl";

import { policyData } from "@/components/assets/policyData";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TextTypeRender } from "@/components/shared/TextTypeRender";
import { HeroInstruction } from "@/components/someInstructionComponents/HeroInstruction";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "PolicyPage", {
        uk: "/politika-konfidenczijnosti",
        en: "/en/privacy-policy",
        ru: "/ru/privacy-policy",
    });
}

export default function Policy() {
    const breadcrumb = [
        {
            name: "politika-konfidenczijnosti",
            href: "/politika-konfidenczijnosti",
        },
    ];
    const locale = useLocale();
    const t = useTranslations("PolicyPage");
    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <HeroInstruction title={t("title")} />
            <section className="tab:pb-12 tab:px-6 pc:px-12 pc:pb-[120px] pb-[60px]">
                <div className="bg-green-10 tab:mx-0 tab:max-w-[1117px] prepc:w-[83%] prepc:p-6 prepc:rounded-lg mx-auto max-w-[540px] rounded p-4">
                    <TextTypeRender
                        data={policyData[locale as LocaleType].content}
                    />
                </div>
            </section>
        </>
    );
}
