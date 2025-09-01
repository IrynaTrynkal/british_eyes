"use client";
import { useLocale, useTranslations } from "next-intl";

export const Menu = ({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) => {
    const t = useTranslations("Menu");
    const locale = useLocale();

    const menuList = [
        { name: t("about"), path: "about" },
        { name: t("services"), path: "services" },
        { name: t("prices"), path: "prices" },
        { name: t("offers"), path: "offers" },
        { name: t("doctors"), path: "doctors" },
        { name: t("patients"), path: "patients" },
        { name: t("reviews"), path: "reviews" },
        { name: t("contacts"), path: "contacts" },
    ];

    const handleLinkClick = (id: string) => {
        if (onClick) onClick();

        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <ul className={`${className} `}>
            {menuList.map((content, idx) => {
                return (
                    <li key={idx}>
                        <button
                            onClick={() => handleLinkClick(content.path)}
                            className={
                                "text-title tab:text-sm12 pc:text-base uppercase"
                            }
                        >
                            {content.name}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};
