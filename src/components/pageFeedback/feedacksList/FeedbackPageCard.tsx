import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { FeedbackType } from "@/components/assets/feedbacksData";
import { LocaleType } from "@/types/LocaleType";

export const FeedbackPageCard = ({
    feedback,
    isFirst,
}: {
    feedback: FeedbackType;
    isFirst?: boolean;
}) => {
    const t = useTranslations("Menu");
    const locale = useLocale();
    return (
        <div className="border-grey overflow-hidden rounded-sm border">
            <div className="tab:gap-3 flex w-full">
                <div
                    className={`tab:aspect-[321/240] prepc:aspect-[321/330] tab:max-w-[321px] tab:min-w-[321px] flex aspect-[139/143] w-[48.6%] max-w-[160px] min-w-[139px] items-center justify-center overflow-hidden transition-[filter] duration-500 ${
                        !isFirst ? "blur-0" : "blur-xs"
                    }`}
                >
                    <Image
                        src={
                            feedback.photo
                                ? feedback.photo
                                : "/images/feedback-default.jpg"
                        }
                        alt={feedback[locale as LocaleType].name}
                        width={330}
                        height={330}
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className="tab:p-3 tab:w-[calc(100%-333px)] flex w-[51.4%] flex-col justify-between px-[7px] py-3">
                    <div className="tab:flex-row-reverse flex h-full flex-col justify-between">
                        <div className="tab:w-[35%] prepc:w-[25%]">
                            <div className="tab:h-0.5 tab:w-6 tab:mb-4 mb-1 h-[1px] w-2.5 bg-black" />
                            <p className="font-oswald text-grey tab:text-base text-sm leading-none uppercase">
                                {t(feedback.service)}
                            </p>
                        </div>
                        <p className="font-oswald tab:w-[63%] tab:text-2xl tab:leading-7 tab:min-h-[57px] tab:mb-5 text-lg leading-5 font-medium uppercase">
                            {feedback[locale as LocaleType].name}
                        </p>
                    </div>
                    <p className="tab:block tab:leading-5 prepc:text-lg prepc:leading-[22px] hidden text-base">
                        {feedback[locale as LocaleType].text}
                    </p>
                </div>
            </div>
            <div className="tab:hidden px-2 py-3">
                <p className="leading-5">
                    {feedback[locale as LocaleType].text}
                </p>
            </div>
        </div>
    );
};
