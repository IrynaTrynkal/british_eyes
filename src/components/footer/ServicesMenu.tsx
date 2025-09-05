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
        <ul className={`relative flex flex-col gap-4 ${className} `}>
            {servicesList.map((item, idx) => {
                return (
                    <li key={idx}>
                        <div className={""}>
                            <Link
                                href={`/${item.key}`}
                                onClick={onClick}
                                className="flex-1"
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
