import { useTranslations } from "next-intl";

import { DiscountSlider } from "./DiscountSlider";

export const Discount = () => {
    const t = useTranslations("HomePage");

    return (
        <section className="content pc:pt-[120px] tab:pt-12 pt-[45px]">
            <h3 className="subtitle tab:mb-10 mb-5">{t("discountSubtitle")}</h3>
            <DiscountSlider />
        </section>
    );
};
