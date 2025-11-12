import { PortableText, PortableTextComponents } from "@portabletext/react";

import { AccentText } from "@/sanity/components/AccentText";
import { MediumText } from "@/sanity/components/MediumText";
import { Subtitle } from "@/sanity/components/Subtitle";

const components: PortableTextComponents = {
    marks: {
        emerald: ({ children }) => <AccentText>{children}</AccentText>,
        bold: ({ children }) => <MediumText>{children}</MediumText>,
        subtitle: ({ children }) => <Subtitle>{children}</Subtitle>,
    },
    list: {
        bullet: ({ children }) => (
            <ul className="prepc:mb-4 mb-2 ml-4 list-disc">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="prepc:mb-4 mb-2 ml-4 list-decimal">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="pc:text-lg pc:leading-[22px] leading-5">
                {children}
            </li>
        ),
        number: ({ children }) => (
            <li className="pc:text-lg pc:leading-[22px] leading-5">
                {children}
            </li>
        ),
    },
    block: {
        normal: ({ children }) => (
            <p className="pc:text-lg pc:leading-[22px] prepc:mb-4 mb-2 leading-5">
                {children}
            </p>
        ),
    },
};

export const PortableTextRenderer = ({ value }: { value: any }) => {
    if (!value) return null;
    return <PortableText value={value} components={components} />;
};
