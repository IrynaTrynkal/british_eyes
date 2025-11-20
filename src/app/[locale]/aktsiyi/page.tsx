import { Hero } from "@/components/pageOffers/Hero";
import { MainOffers } from "@/components/pageOffers/MainOffers";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;
    return generatePageMetadata(locale as LocaleType, "OffersPage", {
        uk: "/akciyi",
        en: "/en/offers",
        ru: "/ru/akcii",
    });
}

export default function OffersPage() {
    const breadcrumb = [{ name: "aktsiyi", href: "/aktsiyi" }];

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] mt-[72px]"
                breadcrumbsList={breadcrumb}
            />
            <Hero />
            <MainOffers />
            <Booking />
        </>
    );
}
