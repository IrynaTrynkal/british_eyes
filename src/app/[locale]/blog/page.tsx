import { HeroBlog } from "@/components/pageBlog/HeroBlog";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default async function NewsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const breadcrumb = [{ name: "blog", href: "/blog" }];

    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
            />
            <HeroBlog />
        </>
    );
}
