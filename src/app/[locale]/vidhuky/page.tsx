import Script from "next/script";
import { getTranslations } from "next-intl/server";

import { feedbacksList } from "@/components/assets/feedbacksData";
import {
    breadcrumbsInnerSchema,
    innerCollectionPageSchema,
} from "@/components/assets/schemas";
import { FeedbacksPageList } from "@/components/pageFeedback/feedacksList/FeedbacksPageList";
import { HeroFB } from "@/components/pageFeedback/hero/HeroFB";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TopicFilter } from "@/components/shared/TopicFilter";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "FeedbackPage", {
        uk: "/vidhuky",
        en: "/en/reviews",
        ru: "/ru/otzyvy",
    });
}

export default async function ReviewsPage({
    searchParams,
    params,
}: {
    searchParams?: Promise<{ page?: string; category?: string }>;
    params: Promise<{ locale: string }>;
}) {
    const { page, category } = (await searchParams) || {};
    const resolvedParams = await params;
    const { locale } = resolvedParams;
    const [t, ti] = await Promise.all([
        getTranslations("Menu"),
        getTranslations("FeedbackPage"),
    ]);
    const pageNumber = page ? parseInt(page) : 1;
    const selectedCategory = category || "all";
    const breadcrumb = [{ name: "vidhuky", href: "/vidhuky" }];

    const collectionPageSchema = innerCollectionPageSchema({
        locale,
        title: ti("titleSEO"),
        description: ti("descriptionSEO"),
        image: "/images/feedback-default.jpg",
        path: "/vidhuky",
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
                    __html: JSON.stringify(collectionPageSchema),
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
                breadcrumbsList={breadcrumb}
                className="tab:hidden mt-[120px] mb-6"
            />
            <HeroFB />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:block tab:mt-5 prepc:mb-12 pc:mb-[92px] hidden"
            />
            <div className="prepc:flex prepc:flex-row-reverse prepc:justify-between tab:px-6 prepc:overflow-visible tab:pb-12 pc:pb-[120px] relative pb-[60px]">
                <TopicFilter
                    id="feedbacks-list"
                    list={feedbacksList}
                    className="prepc:mb-0 prepc:sticky prepc:top-36 prepc:w-[207px] prepc:mt-0 prepc:h-fit mb-6"
                />
                <FeedbacksPageList
                    idScrollTo="#feedbacks-list"
                    pageNumber={pageNumber}
                    selectedCategory={selectedCategory}
                    className="prepc:w-[calc(100%-227px)]"
                />
            </div>
            <Booking />
        </>
    );
}
