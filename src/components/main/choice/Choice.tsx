import Image from "next/image";
import { useTranslations } from "next-intl";

import { GreenText } from "@/components/shared/GreenText";
import { LinkAction } from "@/components/shared/LinkAction";

export const Choice = () => {
    const t = useTranslations("HomePage");
    return (
        <section className="content tab:flex tab:items-center tab:justify-center pc:justify-start tab:gap-4 pc:py-[120px] tab:py-12 py-[60px]">
            <div className="tab:w-[65%] tab:max-w-[810px] pc:mt-10">
                <h2 className="title-section tab:max-w-[500px] pc:max-w-[664px] pc:mb-7 mb-6">
                    {t("choiceTitle")}
                </h2>
                <Image
                    src="/images/choice.jpg"
                    alt="Choosing an eye clinic is important for everyone"
                    width={1024}
                    height={743}
                    className="tab:hidden mb-5 rounded-sm"
                />
                <p className="pc:text-lg pc:leading-[22px] tab:max-w-[434px] pc:mb-[14px] mb-2 leading-5">
                    {t("choiceText1")}
                </p>
                <p className="pc:text-lg pc:leading-[22px] tab:max-w-[434px] pc:mb-7 mb-3 leading-5">
                    {t("choiceText2")}
                </p>
                <div className="pc:flex pc:gap-5">
                    <GreenText
                        text={t("choiceGreen")}
                        className="pc:max-w-[320px] pc:mb-0 mb-8 max-w-[370px]"
                    />
                    <LinkAction
                        href="#booking"
                        className="pc:mx-0 mx-auto"
                        name={t("onlineButton")}
                    />
                </div>
            </div>
            <div className="tab:block tab:w-[30%] tab:mr-16 pc:max-w-[434px] tab:max-w-[290px] mx-auto hidden aspect-square overflow-hidden rounded-full">
                <Image
                    src="/images/choice.jpg"
                    alt="Choosing an eye clinic is important for everyone"
                    width={1024}
                    height={743}
                    className="h-full w-full object-cover"
                />
            </div>
        </section>
    );
};
