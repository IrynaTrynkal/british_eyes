import { GreenSliderSectionProps } from "@/components/assets/servicesData";
import { IconVision } from "@/components/shared/icons/IconVision";
import { LinkAction } from "@/components/shared/LinkAction";

import { GreenSlider } from "./GreenSlider";

export const GreenSliderSection = ({
    data,
}: {
    data: GreenSliderSectionProps;
}) => {
    return (
        <section className="green-gradient content relative py-10">
            <div className="absolute inset-0 flex items-center justify-center">
                <IconVision className="h-[calc(100%-170px)] w-auto" />
            </div>
            <div className="relative z-[1]">
                <div className="tab:flex tab:justify-between prepc:items-center prepc:mb-12">
                    <div className="prepc:flex prepc:w-[83%] prepc:gap-4 pc:gap-5 prepc:items-center">
                        <h2 className="title-section-ivory tab:max-w-[460px] prepc:mb-0 tab:whitespace-pre-line prepc:max-w-[576px] pc:max-w-[660px] pc:w-[660px] prepc:w-[576px] mb-6 max-w-[460px]">
                            {data.title}
                        </h2>
                        <p className="pc:text-lg text-ivory prepc:max-w-[395px] pc:max-w-[431px] tab:max-w-[460px] pc:leading-[22px] prepc:mb-0 mb-8 leading-5">
                            {data.text}
                        </p>
                    </div>
                    {data.btn && (
                        <div className="tab:flex prepc:w-[17%] hidden">
                            <LinkAction
                                className="mr-0 ml-auto"
                                name={data.btn.btnName}
                                href={data.btn.btnLink}
                                secondary={data.btn.btnSecondary}
                            />
                        </div>
                    )}
                </div>
                <GreenSlider list={data.slider} />
                {data.btn && (
                    <LinkAction
                        className="tab:hidden mx-auto"
                        name={data.btn.btnName}
                        href={data.btn.btnLink}
                        secondary={data.btn.btnSecondary}
                    />
                )}
            </div>
        </section>
    );
};
