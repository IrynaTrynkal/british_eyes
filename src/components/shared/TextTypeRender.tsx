import Image from "next/image";

import { TextSegment, TextType } from "../assets/servicesData";
import { InfoTable } from "./InfoTable";

export const TextTypeRender = ({ data }: { data: TextType[] }) => {
    const renderTextSegment = (text: string | TextSegment[]) => {
        if (typeof text === "string") return text;
        return text.map((segment, i) => {
            const { value, bold, subtitle } = segment;
            if (bold && subtitle) {
                return (
                    <span
                        key={i}
                        className="font-oswald prepc:text-2xl text-lg font-medium uppercase"
                    >
                        {value}
                    </span>
                );
            }
            if (bold) {
                return (
                    <span key={i} className="font-medium">
                        {value}
                    </span>
                );
            }
            if (subtitle) {
                return (
                    <span key={i} className="font-oswald uppercase">
                        {value}
                    </span>
                );
            }
            return <span key={i}>{value}</span>;
        });
    };

    return (
        <>
            {data.map((block, i) => {
                if (block.type === "text") {
                    return (
                        <p
                            key={i}
                            className={`pc:text-lg pc:leading-[22px] leading-5 ${
                                block.gap ? "prepc:mb-4 mb-2" : ""
                            }`}
                        >
                            {renderTextSegment(block.text)}
                        </p>
                    );
                }

                if (block.type === "list") {
                    const ListTag = block.numeric ? "ol" : "ul";
                    return (
                        <ListTag
                            key={i}
                            className={`ml-4 ${
                                block.numeric ? "list-decimal" : "list-disc"
                            } ${block.gap ? "prepc:mb-4 mb-2" : ""}`}
                        >
                            {block.list.map((item, j) => (
                                <li
                                    key={j}
                                    className="pc:text-lg pc:leading-[22px] leading-5"
                                >
                                    {renderTextSegment(item)}
                                </li>
                            ))}
                        </ListTag>
                    );
                }

                if (block.type === "image") {
                    return (
                        <div
                            key={block.image}
                            className={`mb-4 flex w-full justify-center overflow-hidden ${block.maxH ? block.maxH : "prepc:max-h-[500px] max-h-[200px]"}`}
                        >
                            <Image
                                src={block.image}
                                alt={`content image ${i}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="h-auto w-full object-contain"
                            />
                        </div>
                    );
                }
                if (block.type === "component") {
                    return (
                        <div
                            key={`component-${i}`}
                            className={block.gap ? "prepc:mb-4 mb-2" : ""}
                        >
                            {block.component}
                        </div>
                    );
                }
                if (block.type === "table") {
                    return (
                        <div key={`component-${i}`}>
                            <InfoTable data={block} />
                        </div>
                    );
                }

                return null;
            })}
        </>
    );
};
