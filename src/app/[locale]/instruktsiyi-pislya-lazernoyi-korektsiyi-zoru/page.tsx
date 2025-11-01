import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PatientsLazerInstructionPage() {
    const breadcrumb = [
        {
            name: "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru",
            href: "/instruktsiyi-pislya-lazernoyi-korektsiyi-zoru",
        },
    ];
    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <p> Інструкції після лазерної корекції зору</p>
        </>
    );
}
