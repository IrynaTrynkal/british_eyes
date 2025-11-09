import { DiscountType } from "@/components/assets/servicesData";

export const hasCardDiscountData = (card?: DiscountType) => {
    if (!card) return false;

    const hasTextFields =
        card.text &&
        (card.text.icon ||
            card.text.bgimage ||
            card.text.cost ||
            card.text.period);

    const hasLocaleText =
        card.textLocal &&
        (card.textLocal.title ||
            card.textLocal.text ||
            card.textLocal.premiumText);

    return Boolean(hasTextFields || hasLocaleText);
};
