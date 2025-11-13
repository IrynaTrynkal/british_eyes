import { useLocale, useTranslations } from "next-intl";

import { Fraction } from "@/components/shared/Fraction";
import { LinkAction } from "@/components/shared/LinkAction";
import { LocaleType } from "@/types/LocaleType";

import { AllServicesList } from "./AllServicesList";

export const AllServicesMain = () => {
    const t = useTranslations("HomePage");
    const tServ = useTranslations("ServicesPage");
    const locale = useLocale();
    return (
        <section className="content pc:pb-[120px] prepc:pt-12 pc:pt-[95px] pt-10 pb-[60px]">
            <div className="prepc:flex prepc:justify-between prepc:items-center prepc:mb-8 pc:mb-12">
                <div className="pc:w-[321px] prepc:mb-0 tab:max-w-full mb-6 flex max-w-[540px] justify-between">
                    <h3 className="subtitle prepc:hidden">
                        {t("servicesSubtitle")}
                    </h3>
                    <Fraction
                        className="w-fit text-center whitespace-pre-line"
                        textUp={t("servicesTextUp")}
                        textDown={t("servicesTextDown")}
                    />
                </div>
                <div className="prepc:max-w-[calc(64.4%+20px)] prepc:w-[calc(64.4%+20px)] tab:max-w-[660px] pc:max-w-[889px] tab:mb-8 prepc:mb-0 mb-5 max-w-[440px]">
                    <h2 className="title-section prepc:w-[510px] pc:w-[776px]">
                        {tServ("sectionTitle")}
                    </h2>
                </div>
            </div>
            <AllServicesList locale={locale as LocaleType} />
            <LinkAction
                className="mx-auto"
                href="#booking"
                name={t("bookingSubtitle")}
            />
        </section>
    );
};
