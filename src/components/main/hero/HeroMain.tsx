import { useTranslations } from "next-intl";

import { AdressHero } from "./AdressHero";
import { Feedbacks } from "./Feedbacks";
import { Rayner } from "./Rayner";

export const HeroMain = () => {
    const t = useTranslations("HomePage");
    const raynerText = t.rich("raynerText", {
        bold: chunk => <span className="font-bold">{chunk}</span>,
    });
    const raynerTextPC = t.rich("raynerTextPC", {
        bold: chunk => <span className="font-bold">{chunk}</span>,
    });
    return (
        <section className="pc:bg-[url(/images/main-hero.jpg)] tab:mt-0 mt-12 bg-[url(/images/main-hero-tab.jpg)] bg-cover bg-top-left bg-no-repeat">
            <div className="content tab:flex tab:pb-9 pc:pb-10 tab:pt-[176px] pt-4 pb-7">
                <AdressHero
                    className="tab:max-w-[312px] tab:aspect-[240/84] tab:p-0 tab:rounded-lg tab:mb-0 tab:mt-auto tab:w-1/3"
                    text={t("goToMap")}
                    textAdress={t("adress")}
                />

                <div className="tab:w-[50%] tab:min-w-[444px] pc:w-[662px] mr-0 ml-auto">
                    <div className="tab:w-[444px] pc:w-[544px] tab:mb-[68px] mb-5 w-[289px]">
                        <h1 className="title-h1 text-ivory tab:mb-5 pc:mb-11 mb-3">
                            {t("heroTitle")}
                        </h1>
                        <p className="text-ivory pc:text-[20px] tab:text-lg pc:leading-6 leading-5">
                            {t("slogan")}
                        </p>
                    </div>
                    <div className="pc:flex-row-reverse tab:gap-6 flex gap-2">
                        <Feedbacks
                            className="pc:w-1/3 w-1/2"
                            title={t("feedTitle")}
                            text={t("feedText")}
                        />
                        <Rayner
                            className="pc:w-2/3 w-1/2"
                            text={raynerText}
                            textPC={raynerTextPC}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
