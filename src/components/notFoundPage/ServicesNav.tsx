"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { LocaleType } from "@/types/LocaleType";

import { servicesList } from "../assets/menu";
import { IconArrow } from "../shared/icons/IconArrow";

export const ServicesNav = ({ className }: { className?: string }) => {
    const t = useTranslations("Menu");
    const locale = useLocale();
    return (
        <>
            <ul
                className={`prepc:px-12 prepc:py-8 prepc:gap-5 prepc:flex-wrap prepc:justify-center prepc:flex-row prepc:max-w-[720px] prepc:w-[720px] mx-auto flex max-w-[400px] flex-col gap-2 py-4 ${className}`}
            >
                {servicesList.map((item, idx) => {
                    return (
                        <li
                            key={idx}
                            className={`${item.image ? "prepc:mb-0 prepc:w-[calc(50%-10px)] mb-1" : ""} `}
                        >
                            {item.image && (
                                <Link
                                    href={
                                        {
                                            pathname: `/posluhy/${item.slug[locale as LocaleType]}`,
                                        } as any
                                    }
                                    className={
                                        "hover:bg-green-10 prepc:h-12 flex h-10 items-center justify-between border-b text-black"
                                    }
                                >
                                    <div className="flex h-full items-center gap-2">
                                        <Image
                                            src={`/images/${item.image}`}
                                            alt={t(item.key)}
                                            width={638}
                                            height={360}
                                            className="prepc:h-12 h-10 w-[71px] rounded-tr-xs rounded-br-xs object-cover"
                                        />
                                        <p className="font-oswald prepc:text-base text-sm font-medium uppercase">
                                            {t(item.key)}
                                        </p>
                                    </div>
                                    <div className="prepc:h-12 prepc:w-12 flex h-10 w-10 items-center justify-center">
                                        <IconArrow className="h-4 w-4" />
                                    </div>
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
