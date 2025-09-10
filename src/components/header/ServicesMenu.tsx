"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { LocaleType } from "@/types/LocaleType";

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
                className={`border-grey pc:px-12 pc:border-0 pc:py-8 pc:gap-5 pc:flex-wrap pc:justify-center pc:flex-row flex flex-col gap-2 rounded-br-sm rounded-bl-sm border border-t-0 py-4 ${className}`}
            >
                {servicesList.map((item, idx) => {
                    return (
                        <li
                            key={idx}
                            className={`${item.image ? "pc:mb-0 pc:w-[calc(50%-10px)] mb-1" : ""} `}
                        >
                            {item.image ? (
                                <Link
                                    href={
                                        {
                                            pathname: `/poslugy/${item.slug[locale as LocaleType]}`,
                                        } as any
                                    }
                                    onClick={onClick}
                                    className={
                                        "pc:px-0 pc:h-[180px] pc:rounded-lg pc:overflow-hidden pc:border border-grey hover:bg-green-10 flex h-10 items-center justify-between border-b pl-2 text-black"
                                    }
                                >
                                    <div className="pc:justify-between pc:w-full pc:flex-row-reverse flex h-full items-center gap-2">
                                        <Image
                                            src={`/images/${item.image}`}
                                            alt={t(item.key)}
                                            width={638}
                                            height={360}
                                            className="pc:aspect-[319/180] pc:h-full pc:w-auto h-10 w-[71px] rounded-tr-xs rounded-br-xs object-cover"
                                        />
                                        <div className="pc:p-3 pc:w-[calc(100%-319px)] pc:h-full pc:flex pc:flex-col pc:justify-between">
                                            <p className="font-oswald pc:text-2xl text-xs font-medium uppercase">
                                                {t(item.key)}
                                            </p>
                                            <p className="pc:[display:-webkit-box] line-clamp-3 hidden h-[50%] overflow-hidden break-words">
                                                {t(`${item.key}-smalText`)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pc:hidden flex h-10 w-10 items-center justify-center">
                                        <IconArrow className="h-4 w-4" />
                                    </div>
                                </Link>
                            ) : (
                                <Link
                                    href={
                                        {
                                            pathname: `/poslugy/${item.slug[locale as LocaleType]}`,
                                        } as any
                                    }
                                    onClick={onClick}
                                    className={
                                        "pc:hidden font-oswald pc:text-lg pc:pl-0 flex items-center gap-2 pl-2 text-xs font-medium text-black uppercase hover:underline"
                                    }
                                >
                                    <Image
                                        src={`/icons/${item.icon}`}
                                        alt={t(item.key)}
                                        width={28}
                                        height={28}
                                        className="pc:h-7 pc:w-7 h-5 w-5"
                                    />
                                    {t(item.key)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
            <ul className="border-grey pc:px-12 pc:border-0 pc:pt-3 pc:pb-16 pc:gap-4 pc:flex-wrap pc:justify-center pc:flex-row pc:flex hidden border">
                {servicesList.map(item => {
                    return (
                        <li key={item.key} className="group">
                            {item.icon && (
                                <div className="flex gap-4">
                                    <Link
                                        href={
                                            {
                                                pathname: `/poslugy/${item.slug[locale as LocaleType]}`,
                                            } as any
                                        }
                                        onClick={onClick}
                                        className={
                                            "pc:px-1 font-oswald pc:text-lg pc:pl-0 flex items-center gap-2 pl-2 text-xs font-medium text-black uppercase hover:underline"
                                        }
                                    >
                                        <Image
                                            src={`/icons/${item.icon}`}
                                            alt={t(item.key)}
                                            width={28}
                                            height={28}
                                            className="pc:h-7 pc:w-7 h-5 w-5"
                                        />
                                        {t(item.key)}
                                    </Link>
                                    <div className="bg-grey pc:block hidden h-6 w-0.5 group-last:hidden" />
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
