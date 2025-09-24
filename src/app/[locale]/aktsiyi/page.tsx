import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function OffersPage() {
    const breadcrumb = [{ name: "aktsiyi", href: "/aktsiyi" }];

    return (
        <>
            <div className="content py-24">
                <h1 className="font-oswald font-bold uppercase">
                    Сторінка Акцій в розробці
                </h1>
                <Breadcrumbs breadcrumbsList={breadcrumb} />
            </div>
            <Booking />
        </>
    );
}
