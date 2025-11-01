import { HeroPatient } from "@/components/pagePatient/HeroPatient";
import { MainPatients } from "@/components/pagePatient/MainPatients";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PatientsPage() {
    const breadcrumb = [
        {
            name: "informatsiya-dlya-patsiyentiv",
            href: "/informatsiya-dlya-patsiyentiv",
        },
    ];

    return (
        <>
            <HeroPatient />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:mt-5 prepc:mb-12 my-5"
            />
            <MainPatients />
            <Booking />
        </>
    );
}
