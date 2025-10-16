import { notFound } from "next/navigation";

import { feedbacksList } from "@/components/assets/feedbacksData";
import { servicesList, ServicesListProps } from "@/components/assets/menu";
import { servicesData } from "@/components/assets/servicesData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";
import { Preview } from "@/components/someServiceComponents/previewSection/Preview";
import { LocaleType } from "@/types/LocaleType";

interface ServicePageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { locale, slug } = await params;

    if (slug === "lazerna-korekcziya-zoru" || slug === "likuvannya-katarakti") {
        notFound();
    }

    const displayedService: ServicesListProps | undefined = servicesList.find(
        service => service.slug[locale as LocaleType] === slug
    );

    if (!displayedService) {
        notFound();
    }
    const breadcrumb = [
        { name: "poslugy", href: "/poslugy" },
        { name: displayedService.key, href: `/${displayedService.key}` },
    ];

    const feedbackList = feedbacksList.filter(
        fb => fb.service === displayedService.key
    );
    const serviceData = servicesData.find(
        service => service.name.key === displayedService.key
    );
    if (!serviceData) {
        notFound();
    }

    return (
        <>
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <Preview
                price={serviceData.price}
                data={serviceData[locale as LocaleType].preview}
            />
            {feedbackList.length > 0 && (
                <FeedbackSection list={feedbackList} slideAmount={4} />
            )}
            <Booking />
        </>
    );
}
