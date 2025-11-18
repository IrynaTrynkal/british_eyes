import {
    PortableText,
    PortableTextBlock,
    PortableTextComponents,
} from "@portabletext/react";
import Image from "next/image";

import { InfoTable } from "@/components/shared/InfoTable";
import { Link } from "@/i18n/navigation";
import { AccentText } from "@/sanity/components/AccentText";
import { MediumText } from "@/sanity/components/MediumText";

import { urlFor } from "../lib/image";
import { BlackText } from "./BlackText";
import { GreyText } from "./GreyText";
import { MyPortableTextBlock } from "./PortableTextPriceComponents";
import { SubtitleWithGap } from "./SubtitleWithGap";

const components: PortableTextComponents = {
    marks: {
        bold: ({ children }) => <MediumText>{children}</MediumText>,
        subtitle: ({ children }) => (
            <SubtitleWithGap>{children}</SubtitleWithGap>
        ),
        emerald: ({ children }) => <AccentText>{children}</AccentText>,
        black: ({ children }) => <BlackText>{children}</BlackText>,
        grey: ({ children }) => <GreyText>{children}</GreyText>,
        bottomSpace: ({ children }) => (
            <span className="prepc:mb-5 mb-3 block">{children}</span>
        ),
        link: ({
            children,
            value,
        }: {
            children: React.ReactNode;
            value?: { href: string; openInNewTab: boolean };
        }) => {
            if (!value) return null;
            const { href, openInNewTab } = value;
            const isAbsoluteUrl = /^https?:\/\//i.test(href);
            if (isAbsoluteUrl) {
                return (
                    <a
                        href={href}
                        target={openInNewTab ? "_blank" : "_self"}
                        rel={openInNewTab ? "noopener noreferrer" : ""}
                        className="underline"
                    >
                        {children}
                    </a>
                );
            }
            return (
                <Link href={href as any} className="underline">
                    {children}
                </Link>
            );
        },
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
            <li className="pc:text-lg leading-[120%]">{children}</li>
        ),
        number: ({ children }) => (
            <li className="pc:text-lg leading-[120%]">{children}</li>
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

            const spacingClass = spacing ? "mb-2 prepc:mb-4" : "";

            return (
                <p className={`pc:text-lg mb-1 leading-[120%] ${spacingClass}`}>
                    {children}
                </p>
            );
        },
    },
    types: {
        image: ({ value }) => {
            const maxH = value?.maxH || "prepc:max-h-[500px] max-h-[200px]";
            const imageUrl = urlFor(value.asset).url();
            return (
                <div
                    className={`mb-4 flex w-full justify-center overflow-hidden ${maxH}`}
                >
                    <Image
                        src={imageUrl}
                        alt={value.alt || "content image"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-full object-contain"
                    />
                </div>
            );
        },
        table: ({ value }) => <InfoTable data={value} />,
    },
};

export const PortableTextRenderer = ({ value }: { value: any }) => {
    if (!value) return null;

    const processedValue: PortableTextBlock[] = [];

    for (let i = 0; i < value.length; i++) {
        const block = value[i];

        const isEmpty =
            block?._type === "block" &&
            (!block.children ||
                block.children.every(
                    (child: any) => !child.text || child.text.trim() === ""
                ));

        if (isEmpty) {
            const next = value[i + 1];

            if (next) {
                processedValue.push({
                    ...next,
                    addSpacing: true,
                });
                i++;
            }

            continue;
        }

        processedValue.push(block);
    }

    return <PortableText value={processedValue} components={components} />;
};
