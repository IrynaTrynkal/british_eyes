import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

import { IconLogo } from "./icons/IconLogo";
import { LinkAction } from "./LinkAction";

export const CallUs = ({ className }: { className?: string }) => {
    const t = useTranslations("ServicesPage");
    const tA = useTranslations("AboutPage");
    const tH = useTranslations("HomePage");

    return (
        <div
            className={twMerge(
                "cta-green-gradient tab:mr-0 tab:ml-auto tab:max-w-[548px] prepc:p-6 relative mx-auto max-w-[500px] rounded-lg px-4 py-6",
                className
            )}
        >
            <h3 className="title-section-ivory prepc:mb-12 pc:mb-[78px] tab:mb-6 tab:w-[calc(100%-70px)] mb-8">
                {t("callUsTitle")}
            </h3>
            <p className="text-ivory prepc:text-lg prepc:mb-12 pc:mb-20 tab:mb-6 prepc:w-[73.2%] tab:max-w-[366px] prepc:leading-[22px] mb-12 w-[85%] leading-5">
                {t("callUsText")}
            </p>
            <div className="prepc:flex prepc:justify-between">
                <div className="tab:mb-6 prepc:mb-0 mb-14">
                    <p className="text-ivory mb-2 leading-[18px] font-medium uppercase">
                        {tA("ctaWorkHours")}
                    </p>
                    <p className="text-ivory text-sm leading-4 font-medium uppercase">
                        {tA("ctaRest")}
                    </p>
                </div>
                <LinkAction
                    className="tab:mx-0 mx-auto"
                    href="#booking"
                    name={tH("bookingSubtitle")}
                />
            </div>
            <IconLogo className="text-emerald prepc:w-[110px] prepc:top-6 absolute top-2.5 right-6 h-auto w-[55px]" />
        </div>
    );
};
