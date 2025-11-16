import { getLocale, getTranslations } from "next-intl/server";

import { sanityFetch } from "@/sanity/lib/client";
import { offersShortQuery } from "@/sanity/lib/queries";

import { OffersShortQueryResult } from "../../../../sanity.types";
import { DiscountSlider } from "./DiscountSlider";

export const Discount = async () => {
    const t = await getTranslations("HomePage");
    const locale = await getLocale();
    const offersList: OffersShortQueryResult = await sanityFetch({
        query: offersShortQuery,
        params: { language: locale },
        tags: [],
    });

    return (
        <section className="content pc:pt-[120px] tab:pt-12 pt-[45px]">
            <h3 className="subtitle tab:mb-10 mb-5">{t("discountSubtitle")}</h3>
            {offersList && <DiscountSlider list={offersList} />}
        </section>
    );
};
