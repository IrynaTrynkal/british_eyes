import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

import { pationtsInstructionsData } from "@/components/assets/patientsInstructionData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { HeroInstruction } from "@/components/someInstructionComponents/HeroInstruction";
import { LocaleType } from "@/types/LocaleType";

export default function PatientsPediatricPage() {
    const breadcrumb = [
        {
            name: "reminder-before-a-comprehensive-pediatric-examination",
            href: "/reminder-before-a-comprehensive-pediatric-examination",
        },
    ];
    const locale = useLocale();
    const data = pationtsInstructionsData.find(
        instr =>
            instr.name.key ===
            "reminder-before-a-comprehensive-pediatric-examination"
    );
    if (!data) return notFound();

    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <HeroInstruction title={data[locale as LocaleType].title} />
            <Booking />
        </>
    );
}
