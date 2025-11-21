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
        posluhy: false,
        "informatsiya-dlya-patsiyentiv": false,
    });

    const handleOpen = (key: string) => {
        setOpenMenus({
            posluhy: key === "posluhy",
            "informatsiya-dlya-patsiyentiv":
                key === "informatsiya-dlya-patsiyentiv",
        });
    };

    const closeSubmenus = () => {
        setOpenMenus({
            posluhy: false,
            "informatsiya-dlya-patsiyentiv": false,
        });
    };

    return (
        <ul className={`${className}`}>
            {menuList.map((item, idx) => {
                const hasSubmenu =
                    item.key === "posluhy" ||
                    item.key === "informatsiya-dlya-patsiyentiv";
                return (
                    <li
                        key={idx}
                        onMouseEnter={() => hasSubmenu && handleOpen(item.key)}
                        onMouseLeave={() => hasSubmenu && closeSubmenus()}
                    >
                        <div
                            className={`prepc:px-2 flex items-center justify-center ${(item.key === "posluhy" && openMenus.posluhy) || (item.key === "informatsiya-dlya-patsiyentiv" && openMenus["informatsiya-dlya-patsiyentiv"]) ? "text-ivory bg-black" : "hover:text-ivory text-black hover:bg-black"}`}
                        >
                            <Link
                                href={`/${item.key}` as any}
                                onClick={hasSubmenu ? closeSubmenus : onClick}
                                className={
                                    "font-oswald prepc:text-base prepc:h-[72px] flex h-12 items-center text-xs font-medium uppercase"
                                }
                            >
                                {t(item.key)}
                            </Link>
                            {hasSubmenu && (
                                <button
                                    type="button"
                                    className="flex h-6 w-6 items-center justify-center"
                                >
                                    <IconChevron />
                                </button>
                            )}
                        </div>
                        <AnimatePresence initial={false}>
                            {item.key === "posluhy" && openMenus.posluhy && (
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
                                    <ServicesMenu onClick={closeSubmenus} />
                                </motion.div>
                            )}

                            {item.key === "informatsiya-dlya-patsiyentiv" &&
                                openMenus["informatsiya-dlya-patsiyentiv"] && (
                                    <motion.div
                                        key="informatsiya-dlya-patsiyentiv"
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="bg-ivory absolute top-full left-0 z-10 w-full overflow-hidden"
                                    >
                                        <PatientsMenu onClick={closeSubmenus} />
                                    </motion.div>
                                )}
                        </AnimatePresence>
                    </li>
                );
            })}
        </ul>
    );
};
