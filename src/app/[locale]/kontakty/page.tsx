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
    return (
        <>
            <ContactsPage />
            <Booking />
        </>
    );
}
