import Script from "next/script";
import { getTranslations } from "next-intl/server";

import {
    breadcrumbsInnerSchema,
    innerWebPageSchema,
} from "@/components/assets/schemas";
import { HeroPrice } from "@/components/pagePrice/HeroPrice";
import { PriceList } from "@/components/pagePrice/PriceList";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { pricesPageQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";
import { getUniqueTitles } from "@/utils/getUniqueTitles";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "PricePage", {
        uk: "/tsiny",
        en: "/en/service-prices",
        ru: "/ru/ceny",
    });
}

export default async function PricesPage({
    params: paramsPromise,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await paramsPromise;
    const pricesList = await sanityFetch({
        query: pricesPageQuery,
        params: { language: locale },
        tags: ["pricesPage"],
    });
    const [t, ti] = await Promise.all([
        getTranslations("Menu"),
        getTranslations("PricePage"),
    ]);

    const breadcrumb = [{ name: "tsiny", href: "/tsiny" }];
    const titlesList = getUniqueTitles(pricesList);

    const webPageSchema = innerWebPageSchema({
        locale,
        title: ti("titleSEO"),
        description: ti("descriptionSEO"),
        image: "/images/green-percent.webp",
        path: "/tsiny",
    });

    const breadcrumbsSchema = breadcrumbsInnerSchema({
        locale,
        items: breadcrumb,
        t,
    });

    return (
        <>
            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webPageSchema),
                }}
            />
            <Script
                id="breadcrumbs-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbsSchema),
                }}
            />
            <Breadcrumbs
                className="prepc:mt-[176px] mt-[120px]"
                breadcrumbsList={breadcrumb}
            />
            <HeroPrice list={titlesList} />
            <PriceList data={pricesList} />
            <Booking />
        </>
    );
}
