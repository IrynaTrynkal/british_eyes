"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

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

    return (
        <div className="pc:mt-8 pc:px-12 pc:flex pc:gap-8">
            <div className="pc:block hidden h-[225px] w-[437px]">
                <Image
                    src="/images/patients-menu.jpg"
                    alt={t("patient-information")}
                    width={1024}
                    height={701}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <ul
                className={`pc:py-0 pc:gap-8 flex flex-col gap-2 py-4 ${className}`}
            >
                {patientsList.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <Link
                                href={`/patient-information/${item}`}
                                onClick={onClick}
                                className={
                                    "pc:px-3 pc:py-1 pc:justify-between pc:w-[662px] pc:leading-7 pc:border pc:border-grey font-oswald pc:text-2xl hover:text-ivory link-gradient flex items-center gap-2 rounded-lg pl-2 text-xs font-medium text-black uppercase transition-all duration-500"
                                }
                            >
                                {t(item)}
                                <div className="pc:flex hidden h-11 w-11 items-center justify-center">
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
