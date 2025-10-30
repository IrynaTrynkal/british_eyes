import { BlockType, TextSegment } from "@/components/assets/servicesData";

export const TextColumnsBlock = ({
    block,
    last,
}: {
    block: BlockType;
    last: boolean;
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
        <div className={`${last ? "tab:col-span-2 tab:w-2/3" : "tab:w-full"}`}>
            <h2 className="title-section mb-6">{block.title}</h2>

            {block.text && (
                <div className={"prepc:gap-4 flex flex-col gap-2"}>
                    {block.text.map((contentItem, j) => {
                        if (contentItem.type === "text") {
                            return (
                                <p
                                    key={j}
                                    className={`pc:text-lg pc:leading-[22px] leading-5 ${contentItem.gap ? "prepc:mb-4 mb-2" : ""}`}
                                >
                                    {renderTextSegment(contentItem.text)}
                                </p>
                            );
                        }

                        if (contentItem.type === "list") {
                            const ListTag = contentItem.numeric ? "ol" : "ul";

                            return (
                                <ListTag
                                    key={j}
                                    className={`ml-4 ${
                                        contentItem.numeric
                                            ? "list-decimal"
                                            : "list-disc"
                                    } ${contentItem.gap ? "prepc:mb-4 mb-2" : ""}`}
                                >
                                    {contentItem.list.map((listItem, k) => (
                                        <li
                                            key={k}
                                            className="pc:text-lg pc:leading-[22px] leading-5"
                                        >
                                            {renderTextSegment(listItem)}
                                        </li>
                                    ))}
                                </ListTag>
                            );
                        }

                        return null;
                    })}
                </div>
            )}
        </div>
    );
};
