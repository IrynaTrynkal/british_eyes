import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { servicesList } from "../assets/menu";

export const ServicesMenu = ({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) => {
    const t = useTranslations("Menu");

    return (
        <ul className={`pc:gap-9 relative columns-2 gap-2 ${className} `}>
            {servicesList.map((item, idx) => {
                return (
                    <li
                        key={idx}
                        className="pc:leading-[16.8px] pc:mb-2 mb-4 text-sm font-medium"
                    >
                        <Link
                            href={`/${item.key}`}
                            onClick={onClick}
                            className="flex-1"
                        >
                            {t(item.key)}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
