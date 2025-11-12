import { useTranslations } from "next-intl";

export const HeroServices = () => {
    const t = useTranslations("ServicesPage");

    return (
        <section className="tab:mt-0 tab:h-120 prepc:h-[552px] relative mt-12 h-[calc(50vh-48px)] bg-[url(/images/services-hero.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="prepc:hidden about-hero-gradient absolute bottom-0 z-0 h-full w-full" />
            <div className="services-hero-big prepc:block absolute bottom-0 z-0 hidden h-full w-full" />
            <div className="content tab:pt-20 tab:pb-6 prepc:pt-[104px] prepc:pb-14 tab:items-start relative z-[1] flex h-full flex-col items-end pt-7 pb-6">
                <div className="tab:mx-0 mx-auto mt-auto mb-0">
                    <h1 className="title-h1 text-white-100 prepc:max-w-[553px] tab:mb-5 prepc:mb-6 mb-4 max-w-[400px] uppercase">
                        {t("title")}
                    </h1>
                    <p className="text-ivory prepc:text-lg prepc:max-w-[435px] prepc:leading-[22px] max-w-[400px] leading-5">
                        {t("description")}
                    </p>
                </div>
            </div>
        </section>
    );
};
