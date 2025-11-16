"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { LocaleType } from "@/types/LocaleType";

import { patientsList } from "../assets/menu";
import { IconArrow } from "../shared/icons/IconArrow";

export const PatientsMenu = ({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) => {
    const t = useTranslations("Menu");
    const locale = useLocale();

    return (
        <div className="prepc:mt-8 prepc:px-12 prepc:flex prepc:gap-8">
            <div className="prepc:block hidden h-[225px] w-[437px]">
                <Image
                    src="/images/patients-menu.jpg"
                    alt={t("informatsiya-dlya-patsiyentiv")}
                    width={1024}
                    height={701}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <ul
                className={`prepc:pt-0 prepc:pb-16 prepc:gap-8 flex flex-col gap-2 py-4 ${className}`}
            >
                {patientsList.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <Link
                                href={
                                    `/${item.slug[locale as LocaleType]}` as any
                                }
                                onClick={onClick}
                                className={
                                    "prepc:px-3 prepc:py-1 prepc:justify-between prepc:w-[662px] prepc:leading-7 prepc:border prepc:border-grey font-oswald prepc:text-2xl hover:text-ivory link-gradient flex w-fit items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-black uppercase transition-all duration-300"
                                }
                            >
                                {t(item.key)}
                                <div className="prepc:flex hidden h-11 w-11 items-center justify-center">
                                    <IconArrow className="h-6 w-6" />
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
