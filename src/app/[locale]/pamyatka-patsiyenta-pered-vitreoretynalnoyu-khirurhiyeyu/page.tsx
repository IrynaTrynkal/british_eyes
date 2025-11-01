import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PatientsVitreoretinalInstructionPage() {
    const breadcrumb = [
        {
            name: "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu",
            href: "/pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu",
        },
    ];
    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <p> Пам’ятка пацієнта перед вітреоретинальною хірургією</p>
        </>
    );
}
