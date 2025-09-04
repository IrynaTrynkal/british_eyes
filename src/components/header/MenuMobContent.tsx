"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Link } from "@/i18n/navigation";

import { menuList } from "../assets/menu";
import { IconChevron } from "../shared/icons/IconChevron";
import LanguageSwitcherMob from "../shared/LanguageSwitcherMob";
import { PatientsMenu } from "./PatientsMenu";
import { ServicesMenu } from "./ServicesMenu";
import { SocialLinks } from "./SocialLinks";

export const MenuMobContent = ({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) => {
    const t = useTranslations("Menu");

    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
        services: true,
        "patient-information": false,
    });

    const toggleSubmenu = (key: string) => {
        setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <ul className={`relative flex flex-col gap-4 ${className} `}>
            {menuList.map((item, idx) => {
                const hasSubmenu =
                    item.key === "services" ||
                    item.key === "patient-information";

                return (
                    <li
                        key={idx}
                        className={` ${item.key === "service-prices" ? "relative" : ""}`}
                    >
                        <div
                            className={`${item.key === "services" ? "w-full" : "w-1/3"} font-oswald flex items-center justify-between ${item.key === "services" ? "h-10 px-2 text-sm" : "text-base"} font-medium uppercase ${(item.key === "services" && openMenus.services) || (item.key === "patient-information" && openMenus["patient-information"]) ? "text-ivory bg-black" : "hover:text-ivory text-black hover:bg-black"}`}
                        >
                            <Link
                                href={`/${item.key}`}
                                onClick={onClick}
                                className="flex-1"
                            >
                                {t(item.key)}
                            </Link>

                            {hasSubmenu && (
                                <button
                                    type="button"
                                    onClick={() => toggleSubmenu(item.key)}
                                    className="flex h-6 w-6 items-center justify-center rounded-sm transition-all duration-300 ease-in-out hover:border"
                                >
                                    <IconChevron />
                                </button>
                            )}
                        </div>
                        {item.key === "service-prices" && (
                            <div className="absolute top-0 right-0">
                                <LanguageSwitcherMob />
                            </div>
                        )}

                        <AnimatePresence initial={false}>
                            {item.key === "services" && openMenus.services && (
                                <motion.div
                                    key="services"
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeInOut",
                                    }}
                                    className="overflow-hidden"
                                >
                                    <ServicesMenu onClick={onClick} />
                                </motion.div>
                            )}

                            {item.key === "patient-information" &&
                                openMenus["patient-information"] && (
                                    <motion.div
                                        key="patients"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <PatientsMenu onClick={onClick} />
                                    </motion.div>
                                )}
                        </AnimatePresence>
                    </li>
                );
            })}
            <li className="absolute right-0 bottom-[96px] w-[72px] text-center">
                <h3 className="font-oswald mb-2 text-sm font-medium uppercase">
                    {t("socialMedia")}
                </h3>
                <SocialLinks />
            </li>
        </ul>
    );
};
