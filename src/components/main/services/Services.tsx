import { useLocale, useTranslations } from "next-intl";

import { Fraction } from "@/components/shared/Fraction";
import { LinkAction } from "@/components/shared/LinkAction";
import { LocaleType } from "@/types/LocaleType";

import { ServicesList } from "./ServicesList";

export const Services = () => {
    const t = useTranslations("HomePage");
    const locale = useLocale();

    return (
        <section className="content pc:pt-[120px] tab:pt-12 pt-[60px]">
            <div className="pc:w-[321px] pc:mb-[18px] mb-6 flex max-w-[540px] justify-between">
                <h3 className="subtitle">{t("servicesSubtitle")}</h3>
                <Fraction
                    className="tab:hidden w-fit text-center whitespace-pre-line"
                    textUp={t("servicesTextUp")}
                    textDown={t("servicesTextDown")}
                />
            </div>
            <div className="pc:flex pc:justify-normal pc:gap-5 tab:mb-8 pc:mb-10 mb-5">
                <h2 className="title-section tab:max-w-[660px] pc:max-w-[889px] tab:mb-5 pc:mb-0 mb-3 max-w-[440px]">
                    {t("servicesTitle")}
                </h2>
                <p className="tab:block pc:text-lg pc:leading-[22px] tab:max-w-[660px] pc:max-w-[434.5px] tab:mb-0 mb-5 leading-5">
                    {t("servicesText")}
                </p>
            </div>
            <ServicesList locale={locale as LocaleType} />
            <LinkAction
                secondary
                className="tab:hidden pc:ml-auto pc:mr-0 mx-auto"
                href="/posluhy"
                name={t("servicesBtn")}
            />
        </section>
    );
};
