import { priceList } from "@/components/assets/priceList";
import { HeroPrice } from "@/components/pagePrice/HeroPrice";
import { PriceList } from "@/components/pagePrice/PriceList";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { pricesPageQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { getUniqueTitles } from "@/utils/getUniqueTitles";

export default async function PricesPage({
    params: paramsPromise,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await paramsPromise;
    const data = await sanityFetch({
        query: pricesPageQuery,
        params: { language: locale },
        tags: [],
    });
    console.log("🚀 ~ PricesPage:", data?.blocks);

    const breadcrumb = [{ name: "tsiny", href: "/tsiny" }];
    const titlesList = getUniqueTitles(priceList, locale as LocaleType);

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] mt-[72px]"
                breadcrumbsList={breadcrumb}
            />
            <HeroPrice list={titlesList} />
            <PriceList />
            <Booking />
        </>
    );
}
