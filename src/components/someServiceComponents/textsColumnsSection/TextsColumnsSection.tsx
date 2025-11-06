import { TextsColumnsSectionType } from "@/components/assets/servicesData";

import { TextColumnsBlock } from "./TextColumnsBlock";

export const TextsColumnsSection = ({
    data,
}: {
    data: TextsColumnsSectionType;
}) => {
    return (
        <section
            className={`content tab:pb-12 pc:pb-[120px] pb-[60px] ${data.paddingTop ? "tab:pt-12 pc:pt-[120px] pt-[60px]" : ""}`}
        >
            <div className="tab:max-w-[500px] prepc:max-w-[776px] mx-auto">
                <h2 className="title-section tab:max-w-[700px] pc:max-w-[890px] tab:mx-auto mb-6 text-center">
                    {data.title}
                </h2>
                <p className="tab:max-w-[500px] pc:max-w-[660px] pc:text-lg pc:leading-[22px] tab:mx-auto tab:mb-10 mb-6 text-center leading-5">
                    {data.text}
                </p>
            </div>
            <div className="tab:grid tab:grid-cols-2 tab:gap-4 flex flex-col gap-4">
                {data.blocks.map((block, ind) => (
                    <TextColumnsBlock
                        key={ind}
                        last={
                            data.blocks.length % 2 !== 0 &&
                            data.blocks.length === ind + 1
                        }
                        block={block}
                    />
                ))}
            </div>
        </section>
    );
};
