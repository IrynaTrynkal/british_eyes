import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PatientsBeforeSurgeryPage() {
    const breadcrumb = [
        {
            name: "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam",
            href: "/informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam",
        },
    ];
    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <p> Інформація для пацієнтів перед мікрохірургічним втручанням</p>
        </>
    );
}
