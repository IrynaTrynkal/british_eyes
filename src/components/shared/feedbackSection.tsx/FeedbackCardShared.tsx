import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { FeedbackType } from "@/components/assets/feedbacksData";
import { LocaleType } from "@/types/LocaleType";

export const FeedbackCardShared = ({
    feedback,
    isFirst,
}: {
    feedback: FeedbackType;
    isFirst?: boolean;
}) => {
    const t = useTranslations("Menu");
    const locale = useLocale();
    return (
        <div className="border-grey tab:h-[330px] tab:max-w-[660px] h-[340px] overflow-hidden rounded-sm border">
            <div className="tab:gap-3 flex w-full">
                <div
                    className={`tab:aspect-[321/330] tab:max-w-[321px] tab:min-w-[321px] flex aspect-[139/143] w-[48.6%] max-w-[160px] min-w-[139px] items-center justify-center overflow-hidden transition-[filter] duration-500 ${
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

                <div className="tab:justify-normal tab:p-3 flex w-[51.4%] flex-col justify-between px-[7px] py-3">
                    <div className="tab:flex tab:items-center tab:justify-between tab:mb-5">
                        <div className="tab:h-0.5 tab:w-6 tab:mb-0 mb-1 h-[1px] w-2.5 bg-black" />
                        <p className="font-oswald text-grey tab:text-base text-xs leading-none uppercase">
                            {t(feedback.service)}
                        </p>
                    </div>
                    <p className="font-oswald tab:text-2xl tab:leading-7 tab:min-h-[57px] tab:mb-5 leading-5 font-medium uppercase">
                        {feedback[locale as LocaleType].name}
                    </p>
                    <p className="tab:[display:-webkit-box] tab:text-base tab:leading-5 tab:line-clamp-[9] line-clamp-[8] hidden overflow-hidden text-sm break-words">
                        {feedback[locale as LocaleType].text}
                    </p>
                </div>
            </div>
            <div className="tab:hidden px-2 py-3">
                <p className="line-clamp-[8] [display:-webkit-box] overflow-hidden text-sm break-words">
                    {feedback[locale as LocaleType].text}
                </p>
            </div>
        </div>
    );
};
