import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PatientsAllInstructionsPage() {
    const breadcrumb = [
        {
            name: "reminders-and-instructions-for-patients",
            href: "/reminders-and-instructions-for-patients",
        },
    ];
    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <p> Пам’ятки та інструкції для пацієнтів</p>
        </>
    );
}
