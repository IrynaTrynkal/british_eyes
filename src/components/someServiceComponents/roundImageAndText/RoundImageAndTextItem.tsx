import Image from "next/image";

import { RoundImageAndTextProps } from "@/components/assets/servicesData";
import { GreenText } from "@/components/shared/GreenText";
import { LinkAction } from "@/components/shared/LinkAction";

export const RoundImageAndTextItem = ({
    item,
    index,
}: {
    item: RoundImageAndTextProps;
    index: number;
}) => {
    return (
        <div
            className={`${
                index % 2 === 0 ? "tab:flex-row" : "tab:flex-row-reverse"
            } tab:flex tab:justify-between tab:items-center prepc:items-stretch h-full`}
        >
            <h2 className="title-section tab:hidden tab:max-w-[360px] mb-6 max-w-[440px]">
                {item.title}
            </h2>
            {item.image && (
                <div className="tab:w-[calc(30%-6px)] prepc:w-[calc(50%-12px)]">
                    <div className="tab:mx-auto pc:min-w-[477px] prepc:max-w-[477px] tab:aspect-square tab:mb-0 tab:rounded-full mb-5 aspect-[288/164] overflow-hidden rounded">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={652}
                            height={373}
                            className={`h-full w-full object-cover ${item.imagePosition ? item.imagePosition : "object-center"} `}
                        />
                    </div>
                </div>
            )}
            <div className="tab:w-[calc(70%-6px)] prepc:w-[calc(50%-12px)] prepc:min-h-[477px] tab:flex tab:flex-col">
                <h2 className="title-section tab:block mb-6 hidden">
                    {item.title}
                </h2>
                <div className="tab:flex tab:flex-col prepc:h-full tab:justify-between">
                    {item.text && (
                        <div
                            className={`prepc:gap-4 flex flex-col gap-2 ${item.btn ? "mb-8" : ""}`}
                        >
                            {item.text.map((block, index) => {
                                if (block.list && block.content) {
                                    return (
                                        <div key={block.textBeforeList}>
                                            {block.textBeforeList && (
                                                <p className="pc:text-lg leading-5">
                                                    {block.textBeforeList}
                                                </p>
                                            )}
                                            <ul className="ml-4 list-disc">
                                                {block.content.map(
                                                    (item, i) => (
                                                        <li
                                                            key={i}
                                                            className="pc:text-lg leading-5"
                                                        >
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    );
                                }
                                if (block.greenText) {
                                    return (
                                        <GreenText
                                            key={block.greenText}
                                            text={block.greenText}
                                        />
                                    );
                                }
                                if (block.content) {
                                    return (
                                        <div
                                            key={index}
                                            className="prepc:gap-4 flex flex-col gap-2"
                                        >
                                            {block.content.map(
                                                (paragraph, i) => (
                                                    <p
                                                        key={i}
                                                        className="pc:text-lg leading-5"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    )}
                    {item.btn && (
                        <div
                            className={`${
                                index % 2 === 0
                                    ? "tab:justify-end"
                                    : "tab:justify-start"
                            } tab:flex-row tab:justify-end prepc:gap-5 gap-3" flex flex-col justify-center`}
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
