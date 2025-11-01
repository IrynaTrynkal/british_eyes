import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PatientsIPLInstructionsPage() {
    const breadcrumb = [
        {
            name: "patient-information-before-IPL-therapy",
            href: "/patient-information-before-IPL-therapy",
        },
    ];
    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <p>Памʼятка пацієнта перед IPL-терапією</p>
        </>
    );
}
