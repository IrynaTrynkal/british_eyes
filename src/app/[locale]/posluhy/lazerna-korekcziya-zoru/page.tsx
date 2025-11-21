import { Metadata } from "next";
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

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const displayedService: ServicesListProps | undefined = servicesList.find(
        service => service.key === "lazerna-korekcziya-zoru"
    );
    const serviceData =
        displayedService &&
        servicesData.find(
            service => service.name.key === "lazerna-korekcziya-zoru"
        );
    const langPrefix =
        locale === "en"
            ? "/en/services"
            : locale === "ru"
              ? "/ru/uslugi"
              : "/posluhy";
    const title =
        serviceData &&
        serviceData[locale as LocaleType].sections?.find(
            item => item.type === "meta"
        )?.data.titleSEO;
    const description =
        serviceData &&
        serviceData[locale as LocaleType].sections?.find(
            item => item.type === "meta"
        )?.data.descriptionSEO;

    const end = displayedService?.slug[locale as LocaleType];

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: `${langPrefix}/${end}`,
            languages: {
                "en-US": `/en/services/${displayedService?.slug.en}`,
                "uk-UA": `/posluhy/${displayedService?.slug.uk}`,
                "ru-RU": `/ru/uslugi/${displayedService?.slug.ru}`,
            },
        },
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
        },
    };
}

export default function LazerPage() {
    const displayedService: ServicesListProps | undefined = servicesList.find(
        service => service.key === "lazerna-korekcziya-zoru"
    );

    if (!displayedService) {
        notFound();
    }

    const breadcrumb = [
        { name: "posluhy", href: "/posluhy" },
        {
            name: displayedService.key,
            href: "/posluhy/lazerna-korekcziya-zoru",
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
