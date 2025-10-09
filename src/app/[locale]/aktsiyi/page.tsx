import { Hero } from "@/components/pageOffers/HeroOffers/Hero";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function OffersPage() {
    const breadcrumb = [{ name: "aktsiyi", href: "/aktsiyi" }];

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] mt-[72px]"
                breadcrumbsList={breadcrumb}
            />
            <Hero />
            <Booking />
        </>
    );
}
