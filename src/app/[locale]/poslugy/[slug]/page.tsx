import { notFound } from "next/navigation";

import { feedbacksList } from "@/components/assets/feedbacksData";
import { servicesList, ServicesListProps } from "@/components/assets/menu";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";
import { LocaleType } from "@/types/LocaleType";

interface ServicePageProps {
    params: Promise<{ locale: string; slug: string }>; // params тепер Promise
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { locale, slug } = await params;

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

    return (
        <>
            <div className="content py-24">
                <Breadcrumbs breadcrumbsList={breadcrumb} />
            </div>
            {feedbackList.length > 0 && (
                <FeedbackSection list={feedbackList} slideAmount={4} />
            )}
            <Booking />
        </>
    );
}
