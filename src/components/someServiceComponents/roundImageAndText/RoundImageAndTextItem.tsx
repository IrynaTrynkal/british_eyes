import Image from "next/image";

import {
    RoundImageAndTextProps,
    TextSegment,
} from "@/components/assets/servicesData";
import { CallUs } from "@/components/shared/CallUs";
import { GreenText } from "@/components/shared/GreenText";
import { IconEye } from "@/components/shared/icons/IconEye";
import { LinkAction } from "@/components/shared/LinkAction";

export const RoundImageAndTextItem = ({
    item,
    left,
    index,
}: {
    item: RoundImageAndTextProps;
    left?: boolean;
    index: number;
}) => {
    const renderTextSegment = (text: string | TextSegment[]) => {
        if (typeof text === "string") return text;
        return text.map((segment, i) =>
            segment.bold && segment.subtitle ? (
                <span
                    className="font-oswald prepc:text-2xl text-lg font-medium uppercase"
                    key={i}
                >
                    {segment.value}
                </span>
            ) : segment.bold ? (
                <span className="font-medium" key={i}>
                    {segment.value}
                </span>
            ) : segment.subtitle ? (
                <span className="font-oswald uppercase" key={i}>
                    {segment.value}
                </span>
            ) : (
                <span key={i}>{segment.value}</span>
            )
        );
    };

    return (
        <div
            className={`${
                (!left && index % 2 === 0) || (left && index % 2 !== 0)
                    ? "tab:flex-row"
                    : "tab:flex-row-reverse"
            } tab:flex tab:justify-between tab:items-center prepc:items-stretch h-full`}
        >
            <h2 className="title-section tab:hidden tab:max-w-[360px] mb-6 max-w-[440px]">
                {item.title}
            </h2>

            {(item.image || item.cta || item.logo) && (
                <div
                    className={`prepc:w-[calc(50%-12px)] ${item.cta ? "tab:w-[calc(40%-6px)]" : "tab:w-[calc(30%-6px)]"}`}
                >
                    {item.image && (
                        <div className="tab:mx-auto pc:min-w-[477px] prepc:max-w-[477px] tab:aspect-square tab:mb-0 tab:rounded-full mb-5 aspect-[288/164] overflow-hidden rounded">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={652}
                                height={373}
                                className={`h-full w-full object-cover ${
                                    item.imagePosition ?? "object-center"
                                }`}
                            />
                        </div>
                    )}
                    {item.cta && (
                        <CallUs
                            className={`mb-5 ${
                                (!left && index % 2 === 0) ||
                                (left && index % 2 !== 0)
                                    ? "tab:mr-auto tab:ml-0"
                                    : ""
                            }`}
                        />
                    )}
                    {item.logo && (
                        <IconEye className="mx-auto h-auto w-full max-w-[477px]" />
                    )}
                </div>
            )}

            <div
                className={`tab:flex prepc:w-[calc(50%-12px)] tab:flex-col ${item.cta ? "tab:w-[calc(60%-6px)]" : "tab:w-[calc(70%-6px)]"}`}
            >
                <h2 className="title-section tab:block mb-6 hidden">
                    {item.title}
                </h2>

                <div className="tab:flex tab:flex-col prepc:h-full tab:justify-between">
                    {item.text && (
                        <div
                            className={`prepc:gap-4 flex flex-col gap-2 ${
                                item.btn ? "mb-8" : ""
                            }`}
                        >
                            {item.text.map((block, i) => (
                                <div key={i} className="">
                                    {block.content?.map((contentItem, j) => {
                                        if (contentItem.type === "text") {
                                            return (
                                                <p
                                                    key={j}
                                                    className={`pc:text-lg pc:leading-[22px] leading-5 ${contentItem.gap ? "prepc:mb-4 mb-2" : ""}`}
                                                >
                                                    {renderTextSegment(
                                                        contentItem.text
                                                    )}
                                                </p>
                                            );
                                        }

                                        if (contentItem.type === "list") {
                                            const ListTag = contentItem.numeric
                                                ? "ol"
                                                : "ul";

                                            return (
                                                <ListTag
                                                    key={j}
                                                    className={`ml-4 ${
                                                        contentItem.numeric
                                                            ? "list-decimal"
                                                            : "list-disc"
                                                    } ${contentItem.gap ? "prepc:mb-4 mb-2" : ""}`}
                                                >
                                                    {contentItem.list.map(
                                                        (listItem, k) => (
                                                            <li
                                                                key={k}
                                                                className="pc:text-lg pc:leading-[22px] leading-5"
                                                            >
                                                                {renderTextSegment(
                                                                    listItem
                                                                )}
                                                            </li>
                                                        )
                                                    )}
                                                </ListTag>
                                            );
                                        }

                                        return null;
                                    })}
                                    {block.greenText && (
                                        <GreenText text={block.greenText} />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {item.btn && (
                        <div
                            className={`${
                                index % 2 === 0
                                    ? "tab:justify-end"
                                    : "tab:justify-start"
                            } tab:flex-row tab:justify-end prepc:gap-5 flex flex-col justify-center gap-3`}
                        >
                            {item.btn.map(btnItem => (
                                <LinkAction
                                    className="tab:mx-0 mx-auto"
                                    key={btnItem.btnName}
                                    name={btnItem.btnName}
                                    href={btnItem.btnLink}
                                    secondary={btnItem.btnSecondary}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
