import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

import { pationtsInstructionsData } from "@/components/assets/patientsInstructionData";
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

    return generateInstructionMetadata(
        locale as LocaleType,
        "Instructions",
        "reminders-and-instructions-for-patients"
    );
}

export default function PatientsAllInstructionsPage() {
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

    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <HeroInstruction title={data[locale as LocaleType].title} />
            <MainAllInstrucrions />
            <Booking />
        </>
    );
}
