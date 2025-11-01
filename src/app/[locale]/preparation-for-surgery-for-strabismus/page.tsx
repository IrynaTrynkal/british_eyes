import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PatientsStrabismusInstructionPage() {
    const breadcrumb = [
        {
            name: "preparation-for-surgery-for-strabismus",
            href: "/preparation-for-surgery-for-strabismus",
        },
    ];
    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <p> підготовка до операціїї з приводу косоокості</p>
        </>
    );
}
