import { useTranslations } from "next-intl";
import { useMemo } from "react";

import { FeedbackType } from "@/components/assets/feedbacksData";
import { Fraction } from "@/components/shared/Fraction";
import { LinkAction } from "@/components/shared/LinkAction";
import { shuffleArray } from "@/utils/shuffleArray";

import { FeedbacksSliderShared } from "./FeedbacksSliderShared";

export const FeedbackSection = ({
    list,
    slideAmount,
    className,
}: {
    list: FeedbackType[];
    slideAmount: number;
    className?: string;
}) => {
    const t = useTranslations("HomePage");
    const shuffledFeedbacks = useMemo(() => shuffleArray(list), [list]);
    const feedbacksToShow = shuffledFeedbacks.slice(0, slideAmount);

    return (
        <section
            className={`content pc:py-[120px] tab:py-12 prepc:flex prepc:flex-row-reverse prepc:justify-between prepc:gap-2 py-[60px] ${className}`}
        >
            <div className="tab:hidden pc:w-[321px] mb-6 flex max-w-[540px] justify-between">
                <h3 className="subtitle">{t("feedbacksSubtitle")}</h3>
                <Fraction
                    className="w-fit text-center whitespace-pre-line"
                    textUp={t("feedbacksTextUp")}
                    textDown={t("feedbacksTextDown")}
                />
            </div>
            <div className="tab:flex prepc:flex-col tab:justify-between pc:gap-5 tab:mb-11 prepc:mb-0 mb-5">
                <h3 className="subtitle prepc:hidden tab:block pc:w-[321px] hidden">
                    {t("feedbacksSubtitle")}
                </h3>

                <div className="tab:max-w-[376px] tab:w-[47%] prepc:w-full pc:max-w-[440px] prepc:text-left">
                    <Fraction
                        className="prepc:flex prepc:mb-5 mr-0 ml-auto hidden w-fit text-center"
                        textUp={t("feedbacksTextUp")}
                        textDown={t("feedbacksTextDown")}
                    />
                    <h2 className="title-section pc:mr-[60px] tab:max-w-[560px] tab:mb-5 mb-3 max-w-[440px]">
                        {t("feedbacksTitle")}
                    </h2>
                    <p className="tab:block pc:text-lg pc:leading-[22px] tab:mb-0 mb-5 hidden leading-5">
                        {t("feedbacksText")}
                    </p>
                </div>
                <div className="tab:flex tab:flex-col pc:mr-0 pc:ml-auto tab:justify-between hidden">
                    <Fraction
                        className="tab:mx-auto prepc:hidden w-fit text-center whitespace-pre-line"
                        textUp={t("feedbacksTextUp")}
                        textDown={t("feedbacksTextDown")}
                    />
                    <LinkAction
                        secondary
                        className="prepc:ml-auto prepc:mr-0 mx-auto"
                        href="/vidhuky"
                        name={t("feedbacksBtn")}
                    />
                </div>
                <p className="tab:hidden pc:text-lg pc:leading-[22px] mb-5 leading-5">
                    {t("feedbacksText")}
                </p>
            </div>
            <div className="prepc:w-[898px]">
                <h3 className="subtitle prepc:block prepc:mb-16 pc:mb-[104px] pc:w-[321px] hidden">
                    {t("feedbacksSubtitle")}
                </h3>
                <FeedbacksSliderShared
                    className="prepc:mb-0"
                    list={feedbacksToShow}
                    slideAmount={slideAmount}
                />
            </div>
            <LinkAction
                secondary
                className="tab:hidden pc:ml-auto pc:mr-0 mx-auto"
                href="/vidhuky"
                name={t("feedbacksBtn")}
            />
        </section>
    );
};
