import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

import {
    breadcrumbsSlugSchema,
    newsPageSchema,
} from "@/components/assets/schemas";
import { News } from "@/components/main/news/News";
import { SomeBlog } from "@/components/pageBlog/SomeBlog";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { blogQuery, blogShortByServiceQuery } from "@/sanity/lib/queries";

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;

    const blog = await sanityFetch({
        query: blogQuery,
        params: { language: locale, slug },
        tags: ["blog"],
    });

    const langPrefix = locale === "en" ? "/en" : locale === "ru" ? "/ru" : "";

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: `${langPrefix}/blog/${slug}`,
            languages: {
                "en-US": `/en/blog/${slug}`,
                "uk-UA": `/blog/${slug}`,
                "ru-RU": `/ru/blog/${slug}`,
            },
        },
        title: blog?.title || "",
        description: blog?.shortText || "",
        openGraph: {
            title: blog?.title || "",
            description: blog?.shortText || "",
            type: "website",
        },
    };
}
interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogPage({ params }: PageProps) {
    const { locale, slug } = await params;

    const blog = await sanityFetch({
        query: blogQuery,
        params: { language: locale, slug },
        tags: ["blog"],
    });

    const serviceBlog = blog?.service
        ? await sanityFetch({
              query: blogShortByServiceQuery,
              params: {
                  language: locale,
                  service: blog.service,
                  slug: blog.slug,
              },
              tags: ["blog"],
          })
        : [];

    if (!blog) {
        notFound();
    }
    const breadcrumb = [
        { name: "blog", href: "/blog" },
        {
            name: blog.title!,
            href: `/${slug}`,
        },
    ];
    const ti = await getTranslations("Blog");

    const newTitle = ti("moreNews", { service: ti(blog.service as string) });
    const someNewsPageSchema = newsPageSchema({
        locale,
        title: blog.title!,
        description: blog.shortText || "",
        image: blog.image || "/images/megaphone1.jpg",
        slug: `/${slug}`,
    });

    const breadcrumbsSchema = breadcrumbsSlugSchema({
        locale,
        items: breadcrumb,
    });

    return (
        <>
            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(someNewsPageSchema),
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
                className="prepc:mt-[176px] prepc:mb-12 mt-30 mb-6"
                breadcrumbsList={breadcrumb}
                doctors
            />
            <SomeBlog blog={blog} />
            {serviceBlog && serviceBlog.length > 0 && (
                <News title={newTitle} blogList={serviceBlog} />
            )}
        </>
    );
}
