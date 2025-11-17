import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { News } from "@/components/main/news/News";
import { SomeBlog } from "@/components/pageBlog/SomeBlog";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { blogQuery, blogShortByServiceQuery } from "@/sanity/lib/queries";

interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogPage({ params }: PageProps) {
    const { locale, slug } = await params;

    const blog = await sanityFetch({
        query: blogQuery,
        params: { language: locale, slug },
        tags: [],
    });

    const serviceBlog = blog?.service
        ? await sanityFetch({
              query: blogShortByServiceQuery,
              params: {
                  language: locale,
                  service: blog.service,
                  slug: blog.slug,
              },
              tags: [],
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
    const t = await getTranslations("Blog");
    const newTitle = t("moreNews", { service: t(blog.service as string) });

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
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
