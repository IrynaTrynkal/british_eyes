import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { LocaleType } from "@/types/LocaleType";

import { servicesList } from "../assets/menu";

export const ServicesMenu = ({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) => {
    const t = useTranslations("Menu");
    const locale = useLocale();

    return (
        <ul className={`prepc:gap-9 relative columns-2 gap-3 ${className} `}>
            {servicesList.map((item, idx) => {
                return (
                    <li key={idx}>
                        <div className={""}>
                            <Link
                                href={
                                    {
                                        pathname: `/posluhy/${item.slug[locale as LocaleType]}`,
                                    } as any
                                }
                                onClick={onClick}
                                className="flex-1 transition-all duration-300 ease-in-out hover:underline hover:decoration-1 hover:underline-offset-[3.5px]"
                            >
                                {t(item.key)}
                            </Link>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
