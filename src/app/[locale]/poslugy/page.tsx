import { Doctors } from "@/components/main/doctors/Doctors";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { HeroServices } from "@/components/pageServices/HeroServices/HeroServices";
import { AllServicesMain } from "@/components/pageServices/Main/AllServicesMain";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function ServicesPage() {
    const breadcrumb = [{ name: "poslugy", href: "/poslugy" }];

    return (
        <>
            <HeroServices />
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <AllServicesMain />
            <Doctors />
            <Feedbacks />
            <Booking />
        </>
    );
}
