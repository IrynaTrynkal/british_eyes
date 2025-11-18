import { useTranslations } from "next-intl";

import { Fraction } from "../shared/Fraction";

export const HeroDoctors = () => {
    const t = useTranslations("Doctors");
    return (
        <section className="tab:mt-0 tab:h-120 prepc:h-[552px] relative mt-12 h-[calc(60vh-48px)] bg-[url(/images/doctors-hero1.jpg)] bg-cover bg-right-top bg-no-repeat">
            <div className="prepc:hidden about-hero-gradient absolute bottom-0 z-0 h-full w-full" />
            <div className="services-hero-big prepc:block absolute bottom-0 z-0 hidden h-full w-full" />
            <div className="content tab:pt-20 tab:pb-10 prepc:pt-[104px] prepc:pb-[60px] relative z-[1] flex h-full flex-col justify-between pt-7 pb-6">
                <Fraction
                    ivory
                    textUp="20"
                    textDown={t("heroTextDown")}
                    className="w-fit"
                />
                <div>
                    <h1 className="title-h1 text-white-100 tab:mb-5 prepc:mb-6 mb-7 w-[140px] uppercase">
                        {t("title")}
                    </h1>
                    <p className="text-ivory prepc:text-lg prepc:leading-[22px] max-w-[300px] leading-5">
                        {t("heroText")}
                    </p>
                </div>
            </div>
        </section>
    );
};
