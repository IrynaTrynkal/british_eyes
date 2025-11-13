import { useLocale } from "next-intl";

import { LocaleType } from "@/types/LocaleType";

import { PricesPageQueryResult } from "../../../sanity.types";
import { GiftPayment } from "./GiftPayment";
import { PriceCard } from "./PriceCard";
import { SliderGiftPayment } from "./SliderGiftPayment";

export const PriceList = ({ data }: { data: PricesPageQueryResult }) => {
    const locale = useLocale();
    return (
        <section className="tab:px-6 pc:px-12 prepc:flex prepc:justify-between prepc:items-start prepc:pt-[68px] prepc:pb-[120px] relative pt-6 pb-[60px] pl-4">
            <SliderGiftPayment />
            <div className="tab:flex prepc:flex-col tab:justify-center tab:mb-8 prepc:mb-0 prepc:sticky prepc:top-24 tab:gap-3 prepc:w-[24%] prepc:gap-10 pc:gap-[60px] hidden">
                <GiftPayment />
            </div>
            <div className="prepc:mr-0 prepc:ml-auto prepc:w-[72%] prepc:gap-[60px] tab:max-w-full mx-auto flex max-w-[540px] flex-col gap-6">
                {data &&
                    data.map(item => (
                        <PriceCard
                            key={item.servicesKey}
                            data={item}
                            locale={locale as LocaleType}
                        />
                    ))}
            </div>
        </section>
    );
};
