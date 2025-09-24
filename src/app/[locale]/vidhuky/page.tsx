import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function ReviewsPage() {
    const breadcrumb = [{ name: "vidhuky", href: "/vidhuky" }];
    return (
        <>
            <div className="content py-24">
                <h1 className="font-oswald font-bold uppercase">
                    Сторінка Reviews в розробці
                </h1>
                <Breadcrumbs breadcrumbsList={breadcrumb} />
            </div>
            <Booking />
        </>
    );
}
