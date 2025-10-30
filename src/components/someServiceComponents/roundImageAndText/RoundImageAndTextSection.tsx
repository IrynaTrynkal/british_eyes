import { RoundBlock } from "@/components/assets/servicesData";

import { RoundImageAndTextItem } from "./RoundImageAndTextItem";

export const RoundImageAndTextSection = ({ data }: { data: RoundBlock }) => {
    return (
        <section
            className={`content tab:pb-12 pc:pb-[120px] flex flex-col gap-[60px] pb-[60px] ${data.paddingTop ? "tab:pt-12 pc:pt-[120px] pt-[60px]" : ""}`}
        >
            {data.data.map((item, index) => (
                <RoundImageAndTextItem
                    key={index}
                    index={index + 1}
                    item={item}
                    left={data.firstImageLeft}
                />
            ))}
        </section>
    );
};
