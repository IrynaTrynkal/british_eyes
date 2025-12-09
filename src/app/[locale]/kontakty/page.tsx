import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";

import {
    breadcrumbsInnerSchema,
    contactPageSchema,
} from "@/components/assets/schemas";
import { ContactsPage } from "@/components/pageContacts/ContactsPage";
import { Booking } from "@/components/shared/booking/Booking";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "Contacts", {
        uk: "/kontakty",
        en: "/en/contacts",
        ru: "/ru/kontakty",
    });
}

export default function ContactPage() {
    const t = useTranslations("Menu");
    const ti = useTranslations("Contacts");
    const tH = useTranslations("HomePage");
    const breadcrumb = [{ name: "kontakty", href: "/kontakty" }];

    const locale = useLocale();
    const webPageSchema = contactPageSchema({
        locale: locale as LocaleType,
        title: ti("titleSEO"),
        description: ti("descriptionSEO"),
        nameOrganization: tH("title"),
        t: ti,
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
                    __html: JSON.stringify(webPageSchema),
                }}
            />
            <Script
                id="breadcrumbs-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbsSchema),
                }}
            />
            <ContactsPage />
            <Booking />
        </>
    );
}
