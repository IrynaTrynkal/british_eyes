import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

import { feedbacksList } from "@/components/assets/feedbacksData";
import { servicesList, ServicesListProps } from "@/components/assets/menu";
import { servicesData } from "@/components/assets/servicesData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";
import { FAQService } from "@/components/someServiceComponents/faqSection/FAQService";
import { HeroSomeService } from "@/components/someServiceComponents/HeroSomeService";
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
    const heroData = serviceData[locale as LocaleType].sections?.find(
        item => item.type === "hero"
    )?.data;

    const faqList = serviceData[locale as LocaleType].sections?.find(
        item => item.type === "faq"
    )?.data;

    return (
        <>
            {heroData && <HeroSomeService data={heroData} />}
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <ServicePageContent
                locale={locale as LocaleType}
                serviceData={serviceData}
            />
            {feedbackList.length > 0 && (
                <FeedbackSection list={feedbackList} slideAmount={4} />
            )}
            {faqList && faqList.content.length > 0 && (
                <FAQService faqList={faqList} />
            )}
            <Booking />
        </>
    );
}
