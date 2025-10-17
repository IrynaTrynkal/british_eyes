import { RoundImageAndTextProps } from "@/components/assets/servicesData";

import { RoundImageAndTextItem } from "./RoundImageAndTextItem";

export const RoundImageAndTextSection = ({
    data,
}: {
    data: RoundImageAndTextProps[];
}) => {
    return (
        <section className="content flex flex-col gap-[60px]">
            {data.map((item, index) => (
                <RoundImageAndTextItem
                    key={index}
                    index={index + 1}
                    item={item}
                />
            ))}
        </section>
    );
};
