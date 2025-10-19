import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

import { feedbacksList } from "@/components/assets/feedbacksData";
import { servicesList, ServicesListProps } from "@/components/assets/menu";
import { servicesData } from "@/components/assets/servicesData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";
import { DoctorsServices } from "@/components/someServiceComponents/Doctors/DoctorsServices";
import { ServicePageContent } from "@/components/someServiceComponents/ServicePage";
import { LocaleType } from "@/types/LocaleType";

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
    const locale = useLocale();

    const serviceData = servicesData.find(
        service => service.name.key === displayedService.key
    );
    if (!serviceData) {
        notFound();
    }

    return (
        <>
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <ServicePageContent
                locale={locale as LocaleType}
                serviceData={serviceData}
            />
            <DoctorsServices service="likuvannya-katarakti" />
            {feedbackList.length > 0 && (
                <FeedbackSection list={feedbackList} slideAmount={4} />
            )}
            <Booking />
        </>
    );
}
