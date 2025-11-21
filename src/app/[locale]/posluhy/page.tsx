import { Doctors } from "@/components/main/doctors/Doctors";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { HeroServices } from "@/components/pageServices/HeroServices/HeroServices";
import { AllServicesMain } from "@/components/pageServices/Main/AllServicesMain";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { doctorsOrderQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "ServicesPage", {
        uk: "/posluhy",
        en: "/en/services",
        ru: "/ru/uslugi",
    });
}

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const doctorsList = await sanityFetch({
        query: doctorsOrderQuery,
        params: { language: locale },
        tags: [],
    });
    const breadcrumb = [{ name: "posluhy", href: "/posluhy" }];

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
