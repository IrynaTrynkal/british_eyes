import { FAQType } from "@/components/assets/faqData";
import { LocaleType } from "@/types/LocaleType";

interface FAQSchemaProps {
    faqList: FAQType;
    locale: LocaleType;
}

export function FAQSchema({ faqList, locale }: FAQSchemaProps) {
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqList.content.map(faq => ({
            "@type": "Question",
            name: faq[locale].question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq[locale].answer
                    .map(a =>
                        Array.isArray(a.text) ? a.text.join(" ") : a.text
                    )
                    .join(" "),
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqStructuredData),
            }}
        />
    );
}
