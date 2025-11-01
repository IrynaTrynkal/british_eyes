import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Global } from "@/components/shared/global/Global";

export default function PatientsNonresidentPage() {
    const breadcrumb = [
        {
            name: "informatsiya-dlya-inohorodnikh-patsiyentiv",
            href: "/informatsiya-dlya-inohorodnikh-patsiyentiv",
        },
    ];
    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />

            <Global />
        </>
    );
}
