"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { LocaleType } from "@/types/LocaleType";
import { toIconComponentName } from "@/utils/toIconComponentName";

import { servicesList } from "../assets/menu";
import { IconArrow } from "../shared/icons/IconArrow";

export const ServicesMenu = ({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) => {
    const t = useTranslations("Menu");
    const locale = useLocale();
    return (
        <>
            <ul
                className={`border-grey prepc:px-12 prepc:border-0 prepc:py-8 prepc:gap-5 prepc:flex-wrap prepc:justify-center prepc:flex-row flex flex-col gap-2 rounded-br-sm rounded-bl-sm border border-t-0 py-4 ${className}`}
            >
                {servicesList.map((item, idx) => {
                    const IconComponent = toIconComponentName(item.key);
                    return (
                        <li
                            key={idx}
                            className={`${item.image ? "prepc:mb-0 prepc:w-[calc(50%-10px)] mb-1" : ""} `}
                        >
                            {item.image ? (
                                <Link
                                    href={
                                        {
                                            pathname: `/posluhy/${item.slug[locale as LocaleType]}`,
                                        } as any
                                    }
                                    onClick={onClick}
                                    className={
                                        "prepc:px-0 prepc:h-[180px] prepc:rounded-lg prepc:overflow-hidden prepc:border border-grey hover:bg-green-10 flex h-10 items-center justify-between border-b pl-2 text-black"
                                    }
                                >
                                    <div className="prepc:justify-between prepc:w-full prepc:flex-row-reverse flex h-full items-center gap-2">
                                        <Image
                                            src={`/images/${item.image}`}
                                            alt={t(item.key)}
                                            width={638}
                                            height={360}
                                            className="prepc:aspect-[319/180] prepc:h-full prepc:w-auto h-10 w-[71px] rounded-tr-xs rounded-br-xs object-cover"
                                        />
                                        <div className="prepc:p-3 prepc:w-[calc(100%-319px)] prepc:h-full prepc:flex prepc:flex-col prepc:justify-between">
                                            <p className="font-oswald prepc:text-2xl text-sm font-medium uppercase">
                                                {t(item.key)}
                                            </p>
                                            <p className="prepc:[display:-webkit-box] line-clamp-3 hidden h-[50%] overflow-hidden break-words">
                                                {t(`${item.key}-smalText`)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="prepc:hidden flex h-10 w-10 items-center justify-center">
                                        <IconArrow className="h-4 w-4" />
                                    </div>
                                </Link>
                            ) : (
                                <Link
                                    href={
                                        {
                                            pathname: `/posluhy/${item.slug[locale as LocaleType]}`,
                                        } as any
                                    }
                                    onClick={onClick}
                                    className={
                                        "prepc:hidden group font-oswald prepc:text-lg prepc:pl-0 flex items-center gap-2 py-1.5 pl-2 text-sm font-medium text-black uppercase hover:underline"
                                    }
                                >
                                    <div className="border-ivory rounded-full border transition-all duration-300 ease-in-out group-hover:border-black">
                                        {IconComponent && (
                                            <IconComponent className="prepc:h-7 prepc:w-7 h-5 w-5" />
                                        )}
                                    </div>
                                    {t(item.key)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
            <ul className="border-grey prepc:px-12 prepc:border-0 prepc:pt-3 prepc:pb-16 prepc:gap-4 prepc:flex-wrap prepc:justify-center prepc:flex-row prepc:flex hidden border">
                {servicesList.map(item => {
                    const IconComponent = toIconComponentName(item.key);
                    return (
                        <li key={item.key} className="group">
                            {item.icon && (
                                <div className="flex gap-4">
                                    <Link
                                        href={
                                            {
                                                pathname: `/posluhy/${item.slug[locale as LocaleType]}`,
                                            } as any
                                        }
                                        onClick={onClick}
                                        className={
                                            "prepc:px-1 font-oswald prepc:text-lg prepc:pl-0 flex items-center gap-2 pl-2 text-sm font-medium text-black uppercase hover:underline"
                                        }
                                    >
                                        <div className="border-ivory rounded-full border transition-all duration-300 ease-in-out group-hover:border-black">
                                            {IconComponent && (
                                                <IconComponent className="prepc:h-7 prepc:w-7 h-5 w-5" />
                                            )}{" "}
                                        </div>

                                        {t(item.key)}
                                    </Link>
                                    <div className="bg-grey prepc:block hidden h-6 w-0.5 group-last:hidden" />
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
