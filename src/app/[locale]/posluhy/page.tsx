import Script from "next/script";
import { getTranslations } from "next-intl/server";

import { localizedRoutes } from "@/components/assets/localizedRoutes";
import { servicesList } from "@/components/assets/menu";
import {
    breadcrumbsInnerSchema,
    innerCollectionPageSchema,
} from "@/components/assets/schemas";
import { Doctors } from "@/components/main/doctors/Doctors";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { HeroServices } from "@/components/pageServices/HeroServices/HeroServices";
import { AllServicesMain } from "@/components/pageServices/Main/AllServicesMain";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { doctorsOrderQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "ServicesPage", {
        uk: "/posluhy",
        en: "/en/services",
        ru: "/ru/uslugi",
    });
}

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const doctorsList = await sanityFetch({
        query: doctorsOrderQuery,
        params: { language: locale },
        tags: ["doctor", "orderDoctors"],
    });
    const breadcrumb = [{ name: "posluhy", href: "/posluhy" }];
    const [t, ti] = await Promise.all([
        getTranslations("Menu"),
        getTranslations("ServicesPage"),
    ]);
    const itemsSchema = servicesList.map(service => {
        const base = localizedRoutes["/posluhy"][locale as LocaleType];
        return {
            name: t(service.key),
            url: `${base}/${service.slug[locale as LocaleType]}`,
        };
    });
    const collectionPageSchema = innerCollectionPageSchema({
        locale,
        title: ti("titleSEO"),
        description: ti("descriptionSEO"),
        image: "/images/services-hero.jpg",
        path: "/posluhy",
        items: itemsSchema,
        hasPartType: "MedicalProcedure",
    });

    const breadcrumbsSchema = breadcrumbsInnerSchema({
        locale,
        items: breadcrumb,
        t,
    });
    return (
        <>
            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(collectionPageSchema),
                }}
            />
            <Script
                id="breadcrumbs-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbsSchema),
                }}
            />
            <HeroServices />
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <AllServicesMain />
            <Doctors doctors={doctorsList} />
            <Feedbacks />
            <Booking />
        </>
    );
}
