import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

import { AccentText } from "@/sanity/components/AccentText";
import { MediumText } from "@/sanity/components/MediumText";
import { Subtitle } from "@/sanity/components/Subtitle";

import { BlackText } from "./BlackText";

export interface MyPortableTextBlock extends PortableTextBlock {
    addSpacing?: boolean;
}

const components: PortableTextComponents = {
    marks: {
        bold: ({ children }) => <MediumText>{children}</MediumText>,
        subtitle: ({ children }) => <Subtitle>{children}</Subtitle>,
        emerald: ({ children }) => <AccentText>{children}</AccentText>,
        black: ({ children }) => <BlackText>{children}</BlackText>,
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
            <li className="pc:text-lg text-grey leading-[120%]">{children}</li>
        ),
        number: ({ children }) => (
            <li className="pc:text-lg text-grey leading-[120%]">{children}</li>
        ),
    },
    block: {
        normal: (props: {
            children?: React.ReactNode;
            value: MyPortableTextBlock;
        }) => {
            const { children, value } = props;
            const spacing = value.addSpacing ?? false;
            if (
                !children ||
                (Array.isArray(children) &&
                    children.length === 1 &&
                    typeof children[0] === "string" &&
                    children[0].trim() === "")
            ) {
                return null;
            }

            const spacingClass = spacing ? "mt-2 prepc:mt-4" : "";

            return (
                <p
                    className={`pc:text-lg text-grey leading-[120%] ${spacingClass}`}
                >
                    {children}
                </p>
            );
        },
    },
};

export const PortableTextPriceRenderer = ({ value }: { value: any }) => {
    if (!value) return null;

    const processedValue = [];
    for (let i = 0; i < value.length; i++) {
        const block = value[i];

        if (
            block?._type === "block" &&
            (!block.children ||
                block.children.every(
                    (child: any) => !child.text || !child.text.trim()
                ))
        ) {
            if (value[i + 1]) value[i + 1].addSpacing = true;
            continue;
        }

        processedValue.push(block);
    }

    return <PortableText value={processedValue} components={components} />;
};
