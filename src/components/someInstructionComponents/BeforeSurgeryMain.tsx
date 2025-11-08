import { BeforeSurgeryInstructionType } from "../assets/patientsInstructionData";
import { GreenText } from "../shared/GreenText";
import { IconAttention } from "../shared/icons/IconAttention";
import { IconAttention2 } from "../shared/icons/IconAttention2";
import { BottomLinkButtons } from "./BottomLinkButtons";
import { NoTabbedListTab } from "./NoTabbedListTab";
import { TabbedList } from "./TabbedList";

export const BeforeSurgeryMain = ({
    content,
}: {
    content: BeforeSurgeryInstructionType;
}) => {
    return (
        <section className="tab:pb-12 tab:px-6 prepc:pr-0 pc:pl-12 pc:pb-[120px] pb-[60px]">
            <div className="prepc:mb-10 tab:mx-0 tab:max-w-[1117px] mx-auto mb-8 max-w-[540px]">
                <div className="tab:px-0 px-4">
                    <p className="bg-green-10 tab:p-6 mb-3 rounded-lg p-4 leading-[120%]">
                        {content.firstText}
                    </p>
                    <div className="border-grey prepc:hidden tab:flex-col tab:gap-9 mx-auto mb-5 flex max-w-[321px] gap-3 rounded-lg border p-3">
                        <IconAttention2 className="shrink-0" />
                        <p className="font-oswald text-emerald tab:text-xl leading-[120%] font-medium uppercase">
                            {content.analysisCard}
                        </p>
                    </div>
                    <div className="tab:mb-0 prepc:mb-2 tab:p-6 mb-3">
                        <h2 className="font-oswald mb-3 text-lg leading-[120%] font-medium uppercase">
                            {content.secondTitle}
                        </h2>
                        <p className="leading-[120%]">{content.secondText}</p>
                    </div>
                    <div className="border-grey prepc:hidden mx-auto mb-6 max-w-[321px] rounded-lg border p-3">
                        <div className="prepc:mb-11 mb-3 flex gap-5 p-2">
                            <IconAttention className="shrink-0" />
                            <h3 className="font-oswald tab:text-xl leading-[120%] font-medium uppercase">
                                {content.attentionCardTitle}
                            </h3>
                        </div>
                        <p className="leading-[120%]">
                            {content.attentionCard}
                        </p>
                    </div>
                </div>
                <TabbedList
                    childDepart={content.childDepart}
                    adultDepart={content.adultDepart}
                />
                <NoTabbedListTab
                    childDepart={content.childDepart}
                    adultDepart={content.adultDepart}
                />
                <div className="tab:px-0 tab:w-[80%] prepc:w-[85%] px-4">
                    <GreenText
                        text={content.greenText}
                        className="prepc:text-xl prepc:ml-6"
                    />
                </div>
            </div>
            <BottomLinkButtons text="preparation-for-surgery-for-strabismus" />
        </section>
    );
};
