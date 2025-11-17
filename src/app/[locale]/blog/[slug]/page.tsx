import { notFound } from "next/navigation";

import { SomeBlog } from "@/components/pageBlog/SomeBlog";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { blogQuery } from "@/sanity/lib/queries";

interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogPage({ params }: PageProps) {
    const { locale, slug } = await params;
    const blog = await sanityFetch({
        query: blogQuery,
        params: { language: locale, slug: slug },
        tags: [],
    });

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

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
                breadcrumbsList={breadcrumb}
                doctors
            />
            <SomeBlog blog={blog} />
        </>
    );
}
