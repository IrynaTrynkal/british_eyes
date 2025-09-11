import { useLocale } from "next-intl";

import { advantagesList } from "@/components/assets/advantagesData";
import { LocaleType } from "@/types/LocaleType";

import { AdvantageCard } from "./AdvantageCard";

export const AdvantagesListTab = () => {
    const locale = useLocale();
    return (
        <ul className="tab:flex tab:flex-wrap tab:justify-between tab:max-w-[1150px] pc:max-w-full mx-auto hidden gap-5">
            {advantagesList.map((advantage, ind) => (
                <li
                    key={advantage.en.title}
                    className="tab:w-[30%] tab:min-w-[220px] tab:max-w-[260px] pc:max-w-[319px] aspect-square h-auto"
                >
                    <AdvantageCard
                        text={advantage[locale as LocaleType].text}
                        title={advantage[locale as LocaleType].title}
                        ind={ind}
                    />
                </li>
            ))}
        </ul>
    );
};
