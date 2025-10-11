import { Doctors } from "@/components/main/doctors/Doctors";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { HeroServices } from "@/components/pageServices/HeroServices/HeroServices";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function ServicesPage() {
    const breadcrumb = [{ name: "poslugy", href: "/poslugy" }];

    return (
        <>
            <HeroServices />
            <div className="content py-24">
                <Breadcrumbs breadcrumbsList={breadcrumb} />
            </div>
            <Doctors />
            <Feedbacks />
            <Booking />
        </>
    );
}
