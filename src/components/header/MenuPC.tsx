"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Link } from "@/i18n/navigation";

import { menuList } from "../assets/menu";
import { IconChevron } from "../shared/icons/IconChevron";
import { PatientsMenu } from "./PatientsMenu";
import { ServicesMenu } from "./ServicesMenu";

export const MenuPC = ({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) => {
    const t = useTranslations("Menu");
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
        services: false,
        "patient-information": false,
    });

    const toggleSubmenu = (key: string) => {
        setOpenMenus(prev => {
            const newState: { [key: string]: boolean } = Object.keys(
                prev
            ).reduce(
                (acc, k) => {
                    acc[k] = false;
                    return acc;
                },
                {} as { [key: string]: boolean }
            );
            newState[key] = !prev[key];
            return newState;
        });
    };

    return (
        <ul className={`${className}`}>
            {menuList.map((item, idx) => {
                const hasSubmenu =
                    item.key === "services" ||
                    item.key === "patient-information";
                return (
                    <li key={idx}>
                        <div
                            className={`pc:px-3 flex items-center justify-center ${(item.key === "services" && openMenus.services) || (item.key === "patient-information" && openMenus["patient-information"]) ? "text-ivory bg-black" : "hover:text-ivory text-black hover:bg-black"}`}
                        >
                            <Link
                                href={`/${item.key}`}
                                onClick={onClick}
                                className={
                                    "font-oswald pc:text-base pc:h-[72px] flex h-12 items-center text-xs font-medium uppercase"
                                }
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
                        <AnimatePresence initial={false}>
                            {item.key === "services" && openMenus.services && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                    className="bg-ivory absolute top-full left-0 z-10 w-full overflow-hidden"
                                >
                                    <ServicesMenu onClick={onClick} />
                                </motion.div>
                            )}

                            {item.key === "patient-information" &&
                                openMenus["patient-information"] && (
                                    <motion.div
                                        key="patients"
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="bg-ivory absolute top-full left-0 z-10 w-full overflow-hidden"
                                    >
                                        <PatientsMenu onClick={onClick} />
                                    </motion.div>
                                )}
                        </AnimatePresence>
                    </li>
                );
            })}
        </ul>
    );
};
