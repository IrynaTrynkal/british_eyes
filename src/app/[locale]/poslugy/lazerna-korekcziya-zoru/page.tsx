import { notFound } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { feedbacksList } from "@/components/assets/feedbacksData";
import { servicesList, ServicesListProps } from "@/components/assets/menu";
import {
    methodsLazerList,
    servicesData,
} from "@/components/assets/servicesData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";
import { DoctorsServices } from "@/components/someServiceComponents/Doctors/DoctorsServices";
import { LaserMethods } from "@/components/someServiceComponents/Methods/LaserMethods";
import { Preview } from "@/components/someServiceComponents/previewSection/Preview";
import { LocaleType } from "@/types/LocaleType";

export default function LazerPage() {
    const displayedService: ServicesListProps | undefined = servicesList.find(
        service => service.key === "lazerna-korekcziya-zoru"
    );

    if (!displayedService) {
        notFound();
    }

    const breadcrumb = [
        { name: "poslugy", href: "/poslugy" },
        {
            name: displayedService.key,
            href: "/poslugy/lazerna-korekcziya-zoru",
        },
    ];
    const feedbackList = feedbacksList.filter(
        fb => fb.service === displayedService.key
    );
    const locale = useLocale();
    const t = useTranslations("AboutPage");
    const tSer = useTranslations("ServicesPage");
    const methodsSectionText = {
        title: tSer("lazerCorectionMethodsTitle"),
        subtitle: t("methodsSubtitle"),
        greenText: t("methodsGreen"),
        text: t("methodsText"),
    };
    const serviceData = servicesData.find(
        service => service.name.key === displayedService.key
    );
    if (!serviceData) {
        notFound();
    }

    return (
        <>
            <div className="content py-24">
                <Breadcrumbs breadcrumbsList={breadcrumb} />
            </div>
            <Preview data={serviceData[locale as LocaleType].preview} />
            <LaserMethods data={methodsSectionText} list={methodsLazerList} />
            <DoctorsServices service="lazerna-korekcziya-zoru" />
            {feedbackList.length > 0 && (
                <FeedbackSection list={feedbackList} slideAmount={4} />
            )}
            <Booking />
        </>
    );
}
