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
            className={`prepc:grid-cols-1 group relative grid grid-cols-2 gap-2 ${className} `}
        >
            {footerMainMenu.map((item, idx) => {
                return (
                    <li
                        key={idx}
                        className="prepc:leading-[16.8px] group-hover:text-grey-90 hover:!text-ivory text-sm leading-[15px] font-medium transition-colors duration-300"
                    >
                        <Link
                            href={
                                (item.key === "main"
                                    ? "/"
                                    : `/${item.key}`) as any
                            }
                            onClick={onClick}
                            className="block"
                        >
                            {t(item.key)}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
