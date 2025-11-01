import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PatientsPediatricPage() {
    const breadcrumb = [
        {
            name: "reminder-before-a-comprehensive-pediatric-examination",
            href: "/reminder-before-a-comprehensive-pediatric-examination",
        },
    ];
    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <p>Памʼятка перед дитячим комплексним оглядом</p>
        </>
    );
}
