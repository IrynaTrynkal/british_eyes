import { useTranslations } from "next-intl";

import { AdvantagesListTab } from "./AdvantagesListTab";
import { AdvantagesSlider } from "./AdvantagesSlider";

export const Advantages = () => {
    const t = useTranslations("AboutPage");
    return (
        <section className="content pc:pb-[120px] tab:pb-12 relative pb-[60px]">
            <h3 className="subtitle tab:max-w-[318px] tab:mb-4 prepc:absolute prepc:top-0 prepc:left-6 pc:left-12 mb-5">
                {t("advantSubtitle")}
            </h3>
            <h2 className="title-section tab:max-w-[700px] pc:max-w-[890px] tab:mx-auto tab:text-center mb-6">
                {t("advantTitle")}
            </h2>
            <p className="tab:max-w-[500px] pc:text-lg pc:leading-[22px] tab:mx-auto tab:text-center tab:mb-10 mb-6 leading-5">
                {t("advantText")}
            </p>
            <AdvantagesSlider />
            <AdvantagesListTab />
        </section>
    );
};
