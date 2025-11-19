"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { departments, DepartmentsType } from "@/components/assets/doctorsData";
import { Fraction } from "@/components/shared/Fraction";
import { LinkAction } from "@/components/shared/LinkAction";
import { LocaleType } from "@/types/LocaleType";

import { DoctorsOrderQueryResult } from "../../../../sanity.types";
import { DoctorsSlider } from "../../shared/doctors/DoctorsSlider";

export const Doctors = ({
    className,
    doctors,
}: {
    className?: string;
    doctors: DoctorsOrderQueryResult;
}) => {
    const [openedDepartment, setOpenedDepartment] =
        useState<DepartmentsType>("clinic-management");

    const toggleSubmenu = (key: DepartmentsType) => {
        setOpenedDepartment(key);
    };

    const t = useTranslations("HomePage");
    const locale = useLocale();
    if (!doctors) return null;
    const filteredDoctors = doctors.filter(doc =>
        doc.departments?.includes(openedDepartment as any)
    );
    return (
        <section
            className={`green-gradient tab:px-6 pc:px-12 tab:max-w-full tab:pt-10 tab:pb-[42px] pt-4 pb-7 ${className}`}
        >
            <div className="tab:flex tab:gap-5 tab:justify-between pc:justify-normal tab:mb-10">
                <div className="tab:flex-col pc:w-[321px] tab:px-0 tab:mb-0 tab:mx-0 mx-auto mb-6 flex max-w-[540px] justify-between px-4">
                    <h3 className="subtitle-ivory">{t("doctorsSubtitle")}</h3>
                    <Fraction
                        className="w-fit"
                        ivory
                        textUp="20 +"
                        textDown={t("doctorsTextDown")}
                    />
                </div>
                <div className="tab:max-w-[663px] tab:w-[47%] pc:w-[663px] tab:px-0 tab:mx-0 mx-auto max-w-[540px] px-4">
                    <h2 className="title-section-ivory tab:max-w-[560px] tab:mb-0 mb-3 max-w-[440px]">
                        {t("doctorsTitle")}
                    </h2>
                    <p className="tab:hidden pc:text-lg text-ivory pc:leading-[22px] mb-5 leading-5">
                        {t("doctorsText")}
                    </p>
                </div>
                <LinkAction
                    ivory
                    secondary
                    className="tab:flex pc:ml-auto pc:mr-0 mt-auto mb-0 hidden"
                    href="/oftalmolohy"
                    name={t("doctorsBtn")}
                />
            </div>

            <div className="tab:flex tab:flex-row-reverse tab:gap-4 pc:gap-5 tab:justify-between relative">
                <div className="hide-scrollbar tab:h-full tab:w-[28%] pc:max-w-[23.5%] tab:bg-transparent mb-4 h-11 w-full overflow-x-auto bg-white/10">
                    <p className="pc:text-lg text-ivory tab:text-justify tab:block pc:leading-[22px] pc:mb-[66px] mb-5 hidden leading-5">
                        {t("doctorsText")}
                    </p>
                    <ul className="tab:flex-col tab:mr-0 tab:ml-auto tab:items-end tab:gap-3 pc:gap-4 tab:whitespace-normal tab:pl-0 flex h-full max-w-[268px] items-center pl-4 whitespace-nowrap">
                        {departments.map(item => (
                            <li
                                key={item.key}
                                onClick={() => toggleSubmenu(item.key)}
                                className={`font-oswald text-ivory tab:pr-0 tab:text-right cursor-pointer pr-5 text-sm leading-4 uppercase transition-all duration-300 hover:underline ${item.key === openedDepartment ? "font-medium underline" : " "} `}
                            >
                                {item.translations[locale as LocaleType]}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tab:max-w-[71%] pc:max-w-[76%] tab:mx-0 mx-auto max-w-[540px]">
                    <DoctorsSlider doctors={filteredDoctors} />
                </div>
            </div>
            <LinkAction
                ivory
                secondary
                className="tab:hidden mx-auto"
                href="/oftalmolohy"
                name={t("doctorsBtn")}
            />
        </section>
    );
};
