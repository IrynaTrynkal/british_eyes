import { useTranslations } from "next-intl";

import { PriceSectionProps } from "@/components/assets/servicesData";
import { PriceCard } from "@/components/pagePrice/PriceCard";
import { LocaleType } from "@/types/LocaleType";
import { hasCardDiscountData } from "@/utils/hasCardDiscountData";

import {
    OffersShortQueryResult,
    PricesPageQueryResult,
} from "../../../../sanity.types";
import { OfferCard } from "./OfferCard";

export const PriceSection = ({
    data,
    locale,
    pricesList,
    offersShortList,
}: {
    data: PriceSectionProps;
    locale: LocaleType;
    pricesList: NonNullable<PricesPageQueryResult>[number] | undefined;
    offersShortList: NonNullable<OffersShortQueryResult>[number] | undefined;
}) => {
    const t = useTranslations("ServicesPage");

    if (!pricesList) return null;

    return (
        <section className="content tab:pb-12 pc:pb-[120px] relative pb-[60px]">
            <div
                className={`prepc:flex prepc:flex-row-reverse prepc:justify-between ${hasCardDiscountData(offersShortList) ? "" : "prepc:hidden"}`}
            >
                <h3 className="subtitle tab:max-w-[318px] tab:mb-4 mb-5">
                    {t("priceSubpage")}
                </h3>
                <h2
                    className={
                        "title-section tab:max-w-[700px] pc:max-w-[890px] tab:mx-auto prepc:mx-0 tab:text-center mb-6 text-left"
                    }
                >
                    {data.title}
                </h2>
            </div>
            <div className="prepc:flex prepc:justify-between prepc:items-start">
                <div
                    className={`${hasCardDiscountData(offersShortList) ? "hidden" : "prepc:block prepc:w-[32%] hidden"}`}
                >
                    <h2 className="title-section tab:max-w-[700px] pc:max-w-[890px] tab:mx-auto prepc:mx-0 text-left">
                        {data.title}
                    </h2>
                </div>
                {pricesList && (
                    <PriceCard
                        someService
                        data={pricesList}
                        locale={locale as LocaleType}
                        className="prepc:w-[66%] prepc:mx-0 prepc:mb-0 mx-auto mb-6 max-w-[889px]"
                    />
                )}
                {hasCardDiscountData(offersShortList) && offersShortList && (
                    <OfferCard data={offersShortList} />
                )}
            </div>
            {/* {slug === "lazerna-korekcziya-zoru" && (
                <div className="prepc:block pc:right-12 pc:bottom-[120px] absolute right-6 bottom-12 hidden w-[230px]">
                    <p className="mb-8 text-lg leading-[22px]">
                        {t("lazerEditionPriceText")}
                    </p>
                    <LinkAction
                        className="tab:mx-0 mx-auto"
                        href="#booking"
                        name={tH("bookingSubtitle")}
                    />
                </div>
            )} */}
        </section>
    );
};
