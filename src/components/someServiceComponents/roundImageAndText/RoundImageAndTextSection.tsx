import { RoundBlock } from "@/components/assets/servicesData";

import { RoundImageAndTextItem } from "./RoundImageAndTextItem";

export const RoundImageAndTextSection = ({ data }: { data: RoundBlock }) => {
    const { paddingTop = true, paddingBottom = true } = data;
    return (
        <section
            className={`content flex flex-col gap-[60px] ${
                paddingTop ? "pc:pt-[120px] tab:pt-12 pt-[60px]" : ""
            } ${paddingBottom ? "pc:pb-[120px] tab:pb-12 pb-[60px]" : ""}`}
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
