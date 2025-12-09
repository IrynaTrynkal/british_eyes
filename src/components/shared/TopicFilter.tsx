"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

import { ServicesKey } from "../../../sanity.types";
import { ServicesKeyType } from "../assets/menu";
import { IconArrow } from "./icons/IconArrow";

type TopicFilterProps<
    T extends { service: ServicesKeyType | ServicesKey | null },
> = {
    list: T[];
    id?: string;
    className?: string;
};

export const TopicFilter = <
    T extends { service: ServicesKeyType | ServicesKey | null },
>({
    list,
    id,
    className,
}: TopicFilterProps<T>) => {
    const t = useTranslations("Menu");
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const openedService =
        (searchParams.get("category") as ServicesKeyType) ?? "all";

    const services = useMemo(() => {
        const keys = list
            .map(f => f.service)
            .filter((s): s is ServicesKeyType => s !== null);

        return Array.from(new Set<ServicesKeyType>(["all", ...keys]));
    }, [list]);

    const toggleSubmenu = (key: ServicesKeyType) => {
        const newParams = new URLSearchParams(searchParams.toString());
        if (key === "all") {
            newParams.delete("category");
        } else {
            newParams.set("category", key);
            newParams.set("page", "1");
        }
        router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    };

    return (
        <div
            id={id}
            className={`green-gradient prepc:p-3 prepc:max-w-[207px] text-ivory overflow-hidden rounded-lg py-4 ${className}`}
        >
            <div className="prepc:p-0 mb-3 px-4">
                <div className="border-ivory flex items-center justify-between border-b pb-3">
                    <h4 className="font-oswald prepc:text-2xl prepc:leading-7 text-lg leading-[22px] uppercase">
                        {t("topic")}
                    </h4>
                    <div className="prepc:hidden flex gap-2.5">
                        <IconArrow className="h-4 w-4 rotate-180" />
                        <IconArrow className="h-4 w-4" />
                    </div>
                </div>
            </div>
            <ul className="bg-white-100/10 prepc:bg-transparent hide-scrollbar prepc:whitespace-normal prepc:flex-col prepc:items-start prepc:gap-4 prepc:min-h-[330px] prepc:ml-0 prepc:p-0 ml-4 flex h-full items-center overflow-x-auto rounded-tl-sm rounded-bl-sm pl-3 whitespace-nowrap">
                {services.map(serviceKey => (
                    <li
                        key={serviceKey}
                        onClick={() => toggleSubmenu(serviceKey)}
                        className={`font-oswald text-ivory prepc:p-0 prepc:text-base prepc:leading-5 cursor-pointer py-[13.5px] pr-5 text-sm leading-4 uppercase transition-all duration-300 hover:underline ${
                            serviceKey === openedService
                                ? "font-medium underline"
                                : ""
                        }`}
                    >
                        {serviceKey === "all" ? t("allTopics") : t(serviceKey)}
                    </li>
                ))}
            </ul>
        </div>
    );
};
