import Script from "next/script";
import { getTranslations } from "next-intl/server";

import {
    breadcrumbsInnerSchema,
    innerCollectionPageSchema,
} from "@/components/assets/schemas";
import { BlogList } from "@/components/pageBlog/BlogList";
import { HeroBlog } from "@/components/pageBlog/HeroBlog";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TopicFilter } from "@/components/shared/TopicFilter";
import { sanityFetch } from "@/sanity/lib/client";
import { blogsListQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

import { BlogsListQueryResult } from "../../../../sanity.types";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "Blog", {
        uk: "/blog",
        en: "/en/blog",
        ru: "/ru/blog",
    });
}

export default async function NewsPage({
    params,
    searchParams,
}: {
    params: Promise<{ locale: string }>;
    searchParams?: Promise<{ page?: string; category?: string }>;
}) {
    const { locale } = await params;
    const { page, category } = (await searchParams) || {};

    const blogsList = await sanityFetch({
        query: blogsListQuery,
        params: { language: locale },
        tags: ["blog"],
    });
    const pageNumber = page ? parseInt(page) : 1;
    const selectedCategory = category || "all";
    const breadcrumb = [{ name: "blog", href: "/blog" }];
    const [t, ti] = await Promise.all([
        getTranslations("Menu"),
        getTranslations("Blog"),
    ]);
    const collectionPageSchema = innerCollectionPageSchema({
        locale,
        title: ti("titleSEO"),
        description: ti("descriptionSEO"),
        image: "/images/blog.jpg",
        path: "/blog",
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
                className="prepc:mt-[176px] prepc:mb-12 mt-30 mb-6"
            />
            <HeroBlog />
            <div className="prepc:flex prepc:flex-row-reverse prepc:justify-between tab:px-6 pc:px-12 prepc:overflow-visible tab:pb-12 pc:pb-[120px] relative pb-[60px]">
                <TopicFilter
                    list={blogsList as BlogsListQueryResult}
                    className="prepc:mb-0 prepc:sticky prepc:top-36 prepc:w-[207px] prepc:mt-0 prepc:h-fit mb-6"
                />
                <BlogList
                    blogList={blogsList}
                    pageNumber={pageNumber}
                    selectedCategory={selectedCategory}
                />
            </div>
        </>
    );
}
