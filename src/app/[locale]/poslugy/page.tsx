import { Doctors } from "@/components/main/doctors/Doctors";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { HeroServices } from "@/components/pageServices/HeroServices/HeroServices";
import { AllServicesMain } from "@/components/pageServices/Main/AllServicesMain";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { doctorsListQuery } from "@/sanity/lib/queries";

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const doctorsList = await sanityFetch({
        query: doctorsListQuery,
        params: { language: locale },
        tags: [],
    });
    const breadcrumb = [{ name: "poslugy", href: "/poslugy" }];

    return (
        <>
            <HeroServices />
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <AllServicesMain />
            <Doctors doctors={doctorsList} />
            <Feedbacks />
            <Booking />
        </>
    );
}
