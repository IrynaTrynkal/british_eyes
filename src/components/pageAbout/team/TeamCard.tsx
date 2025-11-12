import { useLocale, useTranslations } from "next-intl";

import { AboutServicesType } from "@/components/assets/aboutData";
import { IconArrow } from "@/components/shared/icons/IconArrow";
import { IconPercent } from "@/components/shared/icons/IconPercent";
import { Link } from "@/i18n/navigation";
import { LocaleType } from "@/types/LocaleType";

export const TeamCard = ({
    ser,
    price,
    discount,
}: {
    ser: AboutServicesType;
    price: number | null;
    discount?: boolean;
}) => {
    const t = useTranslations("HomePage");
    const locale = useLocale();

    return (
        <Link
            href={ser.link as any}
            className="tab:min-h-48 prepc:min-h-[245px] flex min-h-[157px] flex-col justify-between"
        >
            <div className="relative flex justify-between">
                <h4
                    className={`font-oswald prepc:text-2xl prepc:leading-8 group-hover:text-ivory group-focus-within:text-ivory group-active:text-ivory leading-5 font-medium uppercase transition-colors duration-300 ease-in-out ${discount ? "prepc:max-w-[60%] max-w-[49.7%]" : "prepc:max-w-[70%] pc:max-w-[74.7%] max-w-[61.7%]"}`}
                >
                    {ser.data[locale as LocaleType].title}
                </h4>
                {price && (
                    <p className="font-oswald group-hover:text-ivory group-focus-within:text-ivory group-active:text-ivory prepc:text-base text-sm leading-none whitespace-nowrap uppercase transition-colors duration-300 ease-in-out">
                        {t("servicesPrice", {
                            price,
                        })}
                    </p>
                )}
                {discount && (
                    <div className="text-ivory font-oswald pc:text-3xl tab:w-9 tab:h-10 tab:text-xl pc:h-12 pc:w-11 prepc:right-[27%] absolute -top-3 right-[36%] flex h-8 w-8 items-center justify-center bg-black leading-none font-bold uppercase">
                        <IconPercent className="pc:w-4 pc:h-[22px] tab:w-[14px] tab:h-5 h-4 w-3" />
                    </div>
                )}
            </div>
            <div className="flex items-end justify-between">
                <p className="group-hover:text-ivory group-active:text-ivory group-focus-within:text-ivory prepc:text-xl prepc:leading-6 prepc:max-w-[80%] max-w-[83.3%] leading-5 transition-colors duration-300 ease-in-out">
                    {ser.data[locale as LocaleType].text}
                </p>
                <div className="group-hover:bg-ivory group-active:bg-ivory prepc:h-12 prepc:w-12 flex h-6 w-6 items-center justify-center rounded transition-colors duration-300 ease-in-out">
                    <IconArrow className="prepc:h-6 prepc:w-6 h-4 w-4" />
                </div>
            </div>
        </Link>
    );
};
