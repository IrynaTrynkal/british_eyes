import { HeroFB } from "@/components/pageFeedback/hero/HeroFB";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function ReviewsPage() {
    const breadcrumb = [{ name: "vidhuky", href: "/vidhuky" }];
    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:hidden mt-[72px] mb-6"
            />
            <HeroFB />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:block mt-[72px] hidden"
            />

            <Booking />
        </>
    );
}
