"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

import { LocaleType } from "@/types/LocaleType";

import { DepartmentsKey, DoctorsOrderQueryResult } from "../../../sanity.types";
import { departments, DepartmentsType } from "../assets/doctorsData";
import { IconArrow } from "../shared/icons/IconArrow";

type DepartmentFilterProps = {
    list: DoctorsOrderQueryResult;
    className?: string;
};

export const DoctorsFilter = ({ list, className }: DepartmentFilterProps) => {
    const t = useTranslations("Doctors");
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const locale = useLocale();

    const openedDepartment =
        (searchParams.get("department") as DepartmentsKey) ??
        "clinic-management";

    const departmentsList = useMemo<DepartmentsKey[]>(() => {
        const all = (list ?? []).flatMap(item => item.departments ?? []);
        return Array.from(
            new Set<DepartmentsKey>(["clinic-management", ...all])
        );
    }, [list]);

    const toggleDepartment = (key: DepartmentsType) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("department", key);
        newParams.set("page", "1");
        router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    };

    return (
        <div
            className={`green-gradient prepc:p-3 prepc:max-w-[207px] text-ivory mt-[60px] overflow-hidden rounded-lg py-4 ${className}`}
        >
            <div className="prepc:p-0 mb-3 px-4">
                <div className="border-ivory flex items-center justify-between border-b pb-3">
                    <h4 className="font-oswald prepc:text-2xl prepc:leading-7 text-lg leading-[22px] uppercase">
                        {t("departmants")}
                    </h4>
                    <div className="prepc:hidden flex gap-2.5">
                        <IconArrow className="h-4 w-4 rotate-180" />
                        <IconArrow className="h-4 w-4" />
                    </div>
                </div>
            </div>

            <ul className="bg-white-100/10 prepc:bg-transparent hide-scrollbar prepc:whitespace-normal prepc:flex-col prepc:items-start prepc:gap-4 prepc:min-h-[330px] prepc:ml-0 prepc:p-0 ml-4 flex h-full items-center overflow-x-auto rounded-tl-sm rounded-bl-sm pl-3 whitespace-nowrap">
                {departmentsList.map(depKey => (
                    <li
                        key={depKey}
                        onClick={() => toggleDepartment(depKey)}
                        className={`font-oswald text-ivory prepc:p-0 prepc:text-base prepc:leading-5 cursor-pointer py-[13.5px] pr-5 text-sm leading-4 uppercase transition-all duration-300 hover:underline ${
                            depKey === openedDepartment
                                ? "font-medium underline"
                                : ""
                        }`}
                    >
                        {
                            departments.find(dep => dep.key === depKey)
                                ?.translations[locale as LocaleType]
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};
