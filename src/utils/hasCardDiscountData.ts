import { OffersShortQueryResult } from "../../sanity.types";

export const hasCardDiscountData = (
    offersShortList?: NonNullable<OffersShortQueryResult>[number]
) => {
    if (!offersShortList) return false;

    const hasTextFields =
        offersShortList.discountShortData &&
        (offersShortList.discountShortData.icon ||
            offersShortList.discountShortData.bgimage ||
            offersShortList.discountShortData.cost ||
            offersShortList.discountShortData.period);

    const hasLocaleText = offersShortList.title;

    return Boolean(hasTextFields || hasLocaleText);
};
