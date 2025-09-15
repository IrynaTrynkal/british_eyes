import { useTranslations } from "next-intl";

import { Fraction } from "@/components/shared/Fraction";
import { LinkAction } from "@/components/shared/LinkAction";

import { FeedbacksSlider } from "./FeedbacksSlider";
import { FeedbacksSliderTab } from "./FeedbacksSliderTab";

export const Feedbacks = () => {
    const t = useTranslations("HomePage");

    return (
        <section className="content pc:py-[120px] tab:py-12 py-[60px]">
            <div className="tab:hidden pc:w-[321px] mb-6 flex max-w-[540px] justify-between">
                <h3 className="subtitle">{t("feedbacksSubtitle")}</h3>
                <Fraction
                    className="w-fit text-center whitespace-pre-line"
                    textUp={t("feedbacksTextUp")}
                    textDown={t("feedbacksTextDown")}
                />
            </div>
            <div className="tab:flex tab:justify-between pc:justify-normal pc:gap-5 tab:mb-11 mb-5">
                <h3 className="subtitle tab:block pc:w-[321px] hidden">
                    {t("feedbacksSubtitle")}
                </h3>

                <div className="tab:max-w-[376px] tab:w-[47%]">
                    <h2 className="title-section tab:max-w-[560px] tab:mb-5 mb-3 max-w-[440px]">
                        {t("feedbacksTitle")}
                    </h2>
                    <p className="tab:block pc:text-lg tab:mb-0 mb-5 hidden leading-5">
                        {t("feedbacksText")}
                    </p>
                </div>
                <div className="tab:flex tab:flex-col pc:mr-0 pc:ml-auto tab:justify-between hidden">
                    <Fraction
                        className="tab:mx-auto w-fit text-center whitespace-pre-line"
                        textUp={t("feedbacksTextUp")}
                        textDown={t("feedbacksTextDown")}
                    />
                    <LinkAction
                        secondary
                        className="pc:ml-auto pc:mr-0 mx-auto"
                        href="/vidhuky"
                        name={t("feedbacksBtn")}
                    />
                </div>
                <p className="tab:hidden pc:text-lg mb-5 leading-5">
                    {t("feedbacksText")}
                </p>
            </div>
            <FeedbacksSlider />
            <FeedbacksSliderTab />
            <LinkAction
                secondary
                className="tab:hidden pc:ml-auto pc:mr-0 mx-auto"
                href="/vidhuky"
                name={t("feedbacksBtn")}
            />
        </section>
    );
};
