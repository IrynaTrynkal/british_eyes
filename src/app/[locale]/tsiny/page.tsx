import { HeroPrice } from "@/components/pagePrice/HeroPrice";
import { PriceList } from "@/components/pagePrice/PriceList";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { pricesPageQuery } from "@/sanity/lib/queries";
import { getUniqueTitles } from "@/utils/getUniqueTitles";

export default async function PricesPage({
    params: paramsPromise,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await paramsPromise;
    const pricesList = await sanityFetch({
        query: pricesPageQuery,
        params: { language: locale },
        tags: [],
    });

    const breadcrumb = [{ name: "tsiny", href: "/tsiny" }];
    const titlesList = getUniqueTitles(pricesList);

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] mt-[72px]"
                breadcrumbsList={breadcrumb}
            />
            <HeroPrice list={titlesList} />
            <PriceList data={pricesList} />
            <Booking />
        </>
    );
}
