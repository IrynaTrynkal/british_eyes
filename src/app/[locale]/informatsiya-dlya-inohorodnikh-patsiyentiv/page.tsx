import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

import { pationtsInstructionsData } from "@/components/assets/patientsInstructionData";
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

    return generateInstructionMetadata(
        locale as LocaleType,
        "ForentInstr",
        "informatsiya-dlya-inohorodnikh-patsiyentiv"
    );
}

export default function PatientsNonresidentPage() {
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

    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
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
