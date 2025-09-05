import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { footerMainMenu } from "../assets/menu";

export const MenuMain = ({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) => {
    const t = useTranslations("Menu");

    return (
        <ul
            className={`pc:grid-cols-1 relative grid grid-cols-2 gap-2 ${className} `}
        >
            {footerMainMenu.map((item, idx) => {
                return (
                    <li
                        key={idx}
                        className="pc:leading-[16.8px] text-sm leading-[15px] font-medium"
                    >
                        <Link
                            href={item.key === "main" ? "/" : `/${item.key}`}
                            onClick={onClick}
                        >
                            {t(item.key)}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
