import { useTranslations } from "next-intl";

import { AdvantagesListTab } from "./AdvantagesListTab";
import { AdvantagesSlider } from "./AdvantagesSlider";

export const Advantages = () => {
    const t = useTranslations("HomePage");
    return (
        <section className="content pc:pt-[120px] tab:pt-12 pt-[60px]">
            <h3 className="subtitle tab:max-w-[318px] tab:mx-auto tab:text-center tab:mb-4 mb-5">
                {t("advantagesSubtitle")}
            </h3>
            <h2 className="title-section tab:max-w-[800px] pc:max-w-[890px] tab:mx-auto tab:text-center mb-6">
                {t("advantagesTitle")}
            </h2>
            <p className="tab:max-w-[663px] pc:text-lg pc:leading-[22px] tab:mx-auto tab:text-center tab:mb-10 mb-6 leading-5">
                {t("advantagesText")}
            </p>
            <AdvantagesSlider />
            <AdvantagesListTab />
        </section>
    );
};
