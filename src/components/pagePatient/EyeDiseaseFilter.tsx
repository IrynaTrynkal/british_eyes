"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

import { EyeDiseaseSlugType } from "../assets/patientsInstructionData";
import { IconArrow } from "../shared/icons/IconArrow";

type EyeDiseaseFilterProps = {
    list: EyeDiseaseSlugType[];
    className?: string;
};

export const EyeDiseaseFilter = ({
    list,
    className,
}: EyeDiseaseFilterProps) => {
    const t = useTranslations("Menu");
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const openedDisease =
        (searchParams.get("disease") as EyeDiseaseSlugType) ?? "glaukoma";

    const diseases = useMemo(() => {
        return Array.from(new Set<EyeDiseaseSlugType>(list));
    }, [list]);

    const toggleSubmenu = (key: EyeDiseaseSlugType) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("disease", key);
        router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    };

    return (
        <div
            className={`green-gradient prepc:p-3 prepc:max-w-[207px] text-ivory overflow-hidden rounded-lg py-4 ${className}`}
        >
            <div className="prepc:p-0 mb-3 px-4">
                <div className="border-ivory flex items-center justify-between border-b pb-3">
                    <h4 className="font-oswald prepc:text-2xl prepc:leading-7 text-lg leading-[22px] uppercase">
                        {t("typesDiseases")}
                    </h4>
                    <div className="prepc:hidden flex gap-2.5">
                        <IconArrow className="h-4 w-4 rotate-180" />
                        <IconArrow className="h-4 w-4" />
                    </div>
                </div>
            </div>
            <ul className="bg-white-100/10 tab:bg-transparent hide-scrollbar tab:whitespace-normal tab:flex-col tab:items-start tab:gap-4 tab:ml-0 prepc:p-0 tab:px-4 ml-4 flex h-full items-center overflow-x-auto rounded-tl-sm rounded-bl-sm pl-3 whitespace-nowrap">
                {diseases.map(diseaseKey => (
                    <li
                        key={diseaseKey}
                        onClick={() => toggleSubmenu(diseaseKey)}
                        className={`font-oswald text-ivory tab:p-0 prepc:text-base prepc:leading-5 cursor-pointer py-[13.5px] pr-5 text-sm leading-4 uppercase transition-all duration-300 hover:underline ${
                            diseaseKey === openedDisease
                                ? "font-medium underline"
                                : ""
                        }`}
                    >
                        {t(diseaseKey)}
                    </li>
                ))}
            </ul>
        </div>
    );
};
