import { notFound } from "next/navigation";

import { feedbacksList } from "@/components/assets/feedbacksData";
import { servicesList, ServicesListProps } from "@/components/assets/menu";
import { methodsCataractList } from "@/components/assets/servicesData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";
import { DoctorsServices } from "@/components/someServiceComponents/Doctors/DoctorsServices";
import { LaserMethods } from "@/components/someServiceComponents/Methods/LaserMethods";

export default function CataractPage() {
    const displayedService: ServicesListProps | undefined = servicesList.find(
        service => service.key === "likuvannya-katarakti"
    );

    if (!displayedService) {
        notFound();
    }

    const breadcrumb = [
        { name: "poslugy", href: "/poslugy" },
        {
            name: displayedService.key,
            href: "/poslugy/likuvannya-katarakti",
        },
    ];
    const feedbackList = feedbacksList.filter(
        fb => fb.service === displayedService.key
    );

    return (
        <>
            <div className="content py-24">
                <Breadcrumbs breadcrumbsList={breadcrumb} />
            </div>
            <LaserMethods list={methodsCataractList} />
            <DoctorsServices service="likuvannya-katarakti" />
            {feedbackList.length > 0 && (
                <FeedbackSection list={feedbackList} slideAmount={4} />
            )}
            <Booking />
        </>
    );
}
