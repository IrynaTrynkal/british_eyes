import { useLocale, useTranslations } from "next-intl";

import { ServicesKeyType } from "@/components/assets/menu";
import { priceList } from "@/components/assets/priceList";
import { PriceSectionProps } from "@/components/assets/servicesData";
import { PriceCard } from "@/components/pagePrice/PriceCard";
import { LinkAction } from "@/components/shared/LinkAction";
import { LocaleType } from "@/types/LocaleType";

import { OfferCard } from "./OfferCard";

export const PriceSection = ({
    data,
    slug,
}: {
    data: PriceSectionProps;
    slug: ServicesKeyType;
}) => {
    const t = useTranslations("ServicesPage");
    const tH = useTranslations("HomePage");

    const locale = useLocale();
    const priceListData = priceList.find(item => item.key === slug);

    return (
        <section className="content tab:pb-12 pc:pb-[120px] relative pb-[60px]">
            <div
                className={`prepc:flex prepc:flex-row-reverse prepc:justify-between ${data.card ? "" : "prepc:hidden"}`}
            >
                <h3 className="subtitle tab:max-w-[318px] tab:mb-4 mb-5">
                    {t("priceSubpage")}
                </h3>
                <h2 className="title-section tab:max-w-[700px] pc:max-w-[890px] tab:mx-auto prepc:mx-0 tab:text-center mb-6 text-left">
                    {data.title}
                </h2>
            </div>
            <div className="prepc:flex prepc:justify-between prepc:items-start">
                <div
                    className={`${data.card ? "prepc:hidden" : "prepc:w-[32%]"}`}
                >
                    <h2 className="title-section tab:max-w-[700px] pc:max-w-[890px] tab:mx-auto prepc:mx-0 text-left">
                        {data.title}
                    </h2>
                </div>
                {priceListData && (
                    <PriceCard
                        someService
                        data={priceListData}
                        locale={locale as LocaleType}
                        className="prepc:w-[66%] prepc:mx-0 prepc:mb-0 mx-auto mb-6 max-w-[889px]"
                    />
                )}
                {data.card && <OfferCard data={data.card} />}
            </div>
            {slug === "lazerna-korekcziya-zoru" && (
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
            )}
        </section>
    );
};
