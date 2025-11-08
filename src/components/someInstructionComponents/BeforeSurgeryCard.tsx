import { BeforeSurgeryInstructionType } from "../assets/patientsInstructionData";
import { IconAttention } from "../shared/icons/IconAttention";
import { IconAttention2 } from "../shared/icons/IconAttention2";

export const BeforeSurgeryCard = ({
    content,
    className,
}: {
    content: BeforeSurgeryInstructionType;
    className?: string;
}) => {
    return (
        <div className={`prepc:flex hidden flex-col gap-26 ${className}`}>
            <div className="border-grey tab:flex-col tab:gap-9 mx-auto mb-5 flex max-w-[321px] gap-3 rounded-lg border p-3">
                <IconAttention2 className="shrink-0" />
                <p className="font-oswald text-emerald tab:text-xl leading-[120%] font-medium uppercase">
                    {content.analysisCard}
                </p>
            </div>
            <div className="border-grey mx-auto mb-6 max-w-[321px] rounded-lg border p-3">
                <div className="prepc:mb-11 mb-3 flex gap-5 p-2">
                    <IconAttention className="shrink-0" />
                    <h3 className="font-oswald tab:text-xl leading-[120%] font-medium uppercase">
                        {content.attentionCardTitle}
                    </h3>
                </div>
                <p className="leading-[120%]">{content.attentionCard}</p>
            </div>
        </div>
    );
};
