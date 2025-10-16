import { useTranslations } from "next-intl";

import { MethodType } from "@/components/assets/aboutData";
import { MethodCard } from "@/components/pageAbout/methods/MethodCard";
import { GreenText } from "@/components/shared/GreenText";

export const LaserMethods = ({ list }: { list: MethodType[] }) => {
    const t = useTranslations("AboutPage");
    const tSer = useTranslations("ServicesPage");

    return (
        <section id="methods" className="content pc:pb-30 relative pb-[60px]">
            <div className="prepc:mb-0 mb-6 flex w-full justify-between">
                <h3 className="subtitle prepc:absolute prepc:top-0 prepc:left-6 pc:left-12">
                    {t("methodsSubtitle")}
                </h3>
                <GreenText
                    grey
                    text={t("methodsGreen")}
                    className="prepc:absolute prepc:top-0 prepc:right-6 pc:right-12 w-[202px]"
                />
            </div>
            <div className="tab:max-w-[500px] prepc:mb-10 pc:max-w-[750px] tab:text-center tab:mx-auto mb-5">
                <h2 className="title-section prepc:mb-7 tab:max-w-[560px] prepc:max-w-full mb-6 max-w-[440px]">
                    {tSer("lazerCorectionMethodsTitle")}
                </h2>
                <p className="pc:text-lg pc:mx-auto pc:max-w-[611px] leading-5">
                    {t("methodsText")}
                </p>
            </div>
            <div className="tab:flex-row tab:gap-3 prepc:gap-5 flex flex-col gap-2">
                {list.map(item => (
                    <MethodCard key={item.data.en.title} data={item} />
                ))}
            </div>
        </section>
    );
};
