import { AdvantageServiceCardProps } from "@/components/assets/servicesData";

import { AdvantageServiceCard } from "./AdvantageServiceCard";

export const AdvantagesListTabService = ({
    list,
}: {
    list: AdvantageServiceCardProps[];
}) => {
    return (
        <ul className="tab:flex tab:flex-wrap tab:justify-center tab:max-w-[1150px] pc:max-w-full tab:gap-4 pc:gap-5 mx-auto hidden">
            {list.map(advantage => (
                <li
                    key={
                        advantage.title
                            ? advantage.title
                            : advantage.videoOnly
                              ? advantage.videoOnly
                              : advantage.imageOnly
                    }
                    className="tab:w-[30%] tab:min-w-[240px] tab:max-w-[260px] pc:max-w-[319px] aspect-square h-auto"
                >
                    <AdvantageServiceCard data={advantage} />
                </li>
            ))}
        </ul>
    );
};
