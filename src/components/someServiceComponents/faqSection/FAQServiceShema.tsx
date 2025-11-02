import {
    FAQServiceListType,
    TextSegment,
    TextType,
} from "@/components/assets/servicesData";

export function FAQServiceSchema({
    faqList,
}: {
    faqList: FAQServiceListType[];
}) {
    const extractText = (seg: TextType): string => {
        if (seg.type === "text") {
            if (typeof seg.text === "string") return seg.text;
            return seg.text.map((t: TextSegment) => t.value).join(" ");
        }

        if (seg.type === "list") {
            return seg.list
                .map(item =>
                    typeof item === "string"
                        ? item
                        : item.map((t: TextSegment) => t.value).join(" ")
                )
                .join(" ");
        }

        // Якщо тип image — нічого не повертаємо
        return "";
    };

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqList.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer.map(extractText).join(" "),
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
