import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";

import {
    breadcrumbsInnerSchema,
    innerWebPageSchema,
} from "@/components/assets/schemas";
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
    const locale = useLocale();
    const breadcrumb = [{ name: "aktsiyi", href: "/aktsiyi" }];
    const t = useTranslations("Menu");
    const ti = useTranslations("OffersPage");
    const webPageSchema = innerWebPageSchema({
        locale,
        title: ti("titleSEO"),
        description: ti("descriptionSEO"),
        image: "/images/green-percent.webp",
        path: "/aktsiyi",
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
            <Hero />
            <MainOffers />
            <Booking />
        </>
    );
}
