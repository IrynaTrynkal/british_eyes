import Image from "next/image";
import { useTranslations } from "next-intl";

import { ButtonAction } from "@/components/shared/ButtonAction";

export const HeroFB = () => {
    const t = useTranslations("FeedbackPage");
    return (
        <div className="tab:mt-12 tab:flex tab:pl-6 pc:pl-12 tab:items-end">
            <div className="tab:max-w-full tab:w-[40%] prepc:w-[44%] pc:w-[45.5%] tab:pr-6 tab:pl-0 tab:mb-0 tab:pb-12 tab:border-b tab:border-grey mx-auto mb-8 max-w-[540px] px-4">
                <h1 className="title-h1 prepc:w-[70%] pc:w-[90%] uppercase">
                    {t("title")}
                </h1>
            </div>
            <div className="green-gradient tab:w-[60%] prepc:w-[56%] pc:w-[54.5%] tab:mb-0 mb-8 pt-4">
                <div className="tab:max-w-full relative mx-auto max-w-[540px]">
                    <div className="text-ivory bg-white-100/10 tab:w-[68%] prepc:w-[70%] pc:w-[74%] tab:absolute tab:bottom-20 prepc:bottom-6 tab:right-4 prepc:right-8 pc:right-12 tab:mx-0 prepc:p-5 pc:px-7 pc:py-5 mx-4 rounded-lg p-3 backdrop-blur-[2px]">
                        <div className="tab:w-[72%] prepc:w-[75%] tab:ml-auto tab:mr-0">
                            <h2 className="font-oswald prepc:text-4xl pc:text-5xl prepc:mb-5 mb-4 text-[28px] leading-none">
                                {t("subtitle")}
                            </h2>
                            <p className="prepc:text-lg prepc:mb-7 prepc:leading-[22px] leading-5">
                                {t("description")}
                            </p>
                            <ButtonAction
                                name={t("leaveFeedbackBtn")}
                                className="prepc:flex hidden"
                            />
                        </div>
                    </div>
                    <Image
                        src="/images/feedback-hero.png"
                        alt={t("subtitle")}
                        width={298}
                        height={413}
                        className="tab:w-[52%] tab:max-w-[298px] tab:mt-0 prepc:mt-[67px] relative z-0 -mt-2.5 h-auto w-[60%] max-w-[250px]"
                    />
                    <ButtonAction
                        name={t("leaveFeedbackBtn")}
                        className="prepc:hidden tab:left-auto tab:right-[8%] tab:translate-x-0 absolute bottom-4 left-1/2 z-[1] -translate-x-1/2"
                    />
                </div>
            </div>
        </div>
    );
};
