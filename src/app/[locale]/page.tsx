import Script from "next/script";
import { getTranslations } from "next-intl/server";

import { faqMainList } from "@/components/assets/faqData";
import {
    breadcrumbsMainSchema,
    mainWebPageSchema,
    mainWebSiteSchema,
} from "@/components/assets/schemas";
import { AboutMain } from "@/components/main/about/AboutMain";
import { Advantages } from "@/components/main/advantages/Advantages";
import { Approach } from "@/components/main/approach/Approach";
import { Choice } from "@/components/main/choice/Choice";
import { Discount } from "@/components/main/discount/Discount";
import { Doctors } from "@/components/main/doctors/Doctors";
import { FAQ } from "@/components/main/faq/FAQ";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { HeroMain } from "@/components/main/hero/HeroMain";
import { News } from "@/components/main/news/News";
import { Services } from "@/components/main/services/Services";
import { Booking } from "@/components/shared/booking/Booking";
import { sanityFetch } from "@/sanity/lib/client";
import { blogsListQuery, doctorsOrderQuery } from "@/sanity/lib/queries";

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    const [blogList, doctorsList] = await Promise.all([
        sanityFetch({
            query: blogsListQuery,
            params: { language: locale },
            tags: ["blog"],
        }),
        sanityFetch({
            query: doctorsOrderQuery,
            params: { language: locale },
            tags: ["doctor", "orderDoctors"],
        }),
    ]);
    const [t, tM] = await Promise.all([
        getTranslations("HomePage"),
        getTranslations("Menu"),
    ]);

    const webPageSchema = mainWebPageSchema({
        locale,
        title: t("titleSEO"),
        name: t("title"),
        description: t("descriptionSEO"),
    });
    const breadcrumbsSchema = breadcrumbsMainSchema({
        locale,
        name: tM("home"),
    });

    const webSiteSchema = mainWebSiteSchema({
        locale,
        title: t("titleSEO"),
        description: t("descriptionSEO"),
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
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webSiteSchema),
                }}
            />
            <HeroMain />
            <Discount />
            <Services />
            <Advantages />
            <Choice />
            <Approach />
            <AboutMain />
            <Doctors doctors={doctorsList} />
            <Feedbacks />
            <News blogList={blogList} />
            <FAQ faqList={faqMainList} />
            <Booking />
        </>
    );
}
