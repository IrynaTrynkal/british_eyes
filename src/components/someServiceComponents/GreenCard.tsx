import { GreenCardType } from "../assets/servicesData";
import { IconLogo } from "../shared/icons/IconLogo";

export const GreenCard = ({ data }: { data: GreenCardType }) => {
    const { paddingTop = true, paddingBottom = true } = data;
    return (
        <section
            className={`content ${paddingTop ? "tab:pt-10 pc:pt-14 pt-8" : ""} ${paddingBottom ? "tab:pb-12 pc:pb-[120px] pb-[60px]" : ""}`}
        >
            <div className="green-gradient prepc:min-h-[140px] prepc:rounded-lg tab:max-w-full tab:p-5 tab:gap-3 tab:flex-row tab:items-center mx-auto flex h-full w-full max-w-[321px] flex-col justify-between overflow-hidden rounded px-2 pt-2 pb-5">
                <div className="tab:w-1/2">
                    <h3 className="title-section-ivory tab:w-[85%] tab:text-left tab:mb-0 mb-5 text-center">
                        {data.title}
                    </h3>
                </div>
                <div className="tab:w-1/2 tab:items-center flex items-end justify-between">
                    <p className="text-ivory prepc:text-lg prepc:w-[60%] tab:w-[75%] w-[70%] leading-[120%]">
                        {data.text}
                    </p>
                    <IconLogo className="text-emerald tab:mr-0 tab:w-16 prepc:w-24 tab:mb-0 mr-4 mb-3 h-auto -rotate-45" />
                </div>
            </div>
        </section>
    );
};
