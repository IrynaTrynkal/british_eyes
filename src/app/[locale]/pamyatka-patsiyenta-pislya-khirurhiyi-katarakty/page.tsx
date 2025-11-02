import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

import { pationtsInstructionsData } from "@/components/assets/patientsInstructionData";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { HeroInstruction } from "@/components/someInstructionComponents/HeroInstruction";
import { LocaleType } from "@/types/LocaleType";

export default function PatientsCataractInstructionPage() {
    const breadcrumb = [
        {
            name: "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
            href: "/pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
        },
    ];
    const locale = useLocale();
    const data = pationtsInstructionsData.find(
        instr =>
            instr.name.key === "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty"
    );
    if (!data) return notFound();

    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <HeroInstruction title={data[locale as LocaleType].title} />
        </>
    );
}
