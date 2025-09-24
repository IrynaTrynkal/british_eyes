import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function OffersPage() {
    const breadcrumb = [{ name: "blog", href: "/blog" }];

    return (
        <div className="content py-24">
            <h1 className="font-oswald font-bold uppercase">
                Сторінка Новини в розробці
            </h1>
            <Breadcrumbs breadcrumbsList={breadcrumb} />
        </div>
    );
}
