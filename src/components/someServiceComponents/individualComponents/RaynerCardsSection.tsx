import { raynerCardsList } from "@/components/assets/servicesData";
import { LocaleType } from "@/types/LocaleType";

import { ImageComparison } from "./RaynerLensEffect";

export const RaynerCardsSection = ({ locale }: { locale: LocaleType }) => {
    return (
        <div className="tab:flex-row tab:gap-[14px] flex flex-col gap-8">
            {raynerCardsList.map(card => (
                <div
                    key={card[locale as LocaleType].title}
                    className="tab:w-[calc(50%-7px)] tab:flex tab:flex-col tab:justify-between"
                >
                    <div className="mb-5">
                        <h3 className="font-oswald prepc:text-2xl mb-2 text-lg leading-[120%] uppercase">
                            {card[locale as LocaleType].title}
                        </h3>
                        <p className="prepc:text-lg leading-[120%]">
                            {card[locale as LocaleType].text}
                        </p>
                    </div>
                    <ImageComparison
                        before={card.imageBefore}
                        after={card.imageAfter}
                    />
                </div>
            ))}
        </div>
    );
};
