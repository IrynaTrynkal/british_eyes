"use client";
import { useTranslations } from "next-intl";

import { ServicesKeyType } from "@/components/assets/menu";
import { DoctorOneCard } from "@/components/shared/doctors/DoctorOneCard";
import { DoctorsSlider } from "@/components/shared/doctors/DoctorsSlider";
import { Fraction } from "@/components/shared/Fraction";
import { LinkAction } from "@/components/shared/LinkAction";

import { DoctorsOrderQueryResult } from "../../../../sanity.types";

export const DoctorsServices = ({
    service,
    list,
}: {
    service: ServicesKeyType;
    list: DoctorsOrderQueryResult;
}) => {
    const t = useTranslations("ServicesPage");
    const tH = useTranslations("HomePage");
    if (list === null) return null;
    const filteredDoctors = list.filter(doc =>
        doc.services?.includes(service as any)
    );
    const upText = t.rich("doctorOneUp", {
        small: chunk => <span className="pc:text-2xl text-sm">{chunk}</span>,
    });
    if (filteredDoctors.length === 0) return null;

    return (
        <section className="green-gradient tab:px-6 pc:px-12 tab:max-w-full tab:pt-10 tab:pb-[42px] relative pt-4 pb-7">
            <div className="tab:flex tab:gap-5 tab:justify-between tab:mb-10">
                <div className="tab:hidden mx-auto mb-6 flex max-w-[540px] justify-between px-4">
                    <h3 className="subtitle-ivory">{t("doctorsSubtitle")}</h3>
                    <Fraction
                        className="w-fit max-w-[100px] text-center"
                        ivory
                        textUp={
                            filteredDoctors.length > 1
                                ? filteredDoctors.length
                                : upText
                        }
                        textDown={
                            filteredDoctors.length > 1
                                ? t("doctorsNewTextDown")
                                : t("doctorOneDown")
                        }
                    />
                </div>
                <div className="tab:max-w-[663px] tab:w-[67%] tab:px-0 tab:mx-0 mx-auto max-w-[540px] px-4">
                    <h2 className="title-section-ivory tab:max-w-[560px] tab:mb-0 mb-3 max-w-[440px] whitespace-pre-line">
                        {t("expertsTitle", {
                            count: filteredDoctors.length,
                            service: t(service as string),
                        })}
                    </h2>
                    {filteredDoctors.length > 1 && (
                        <p className="tab:hidden pc:text-lg pc:leading-[22px] text-ivory mb-5 leading-5">
                            {t("doctorsText")}
                        </p>
                    )}
                </div>
                <Fraction
                    className="tab:flex tab:max-w-[120px] pc:max-w-[147px] hidden w-fit max-w-[100px] text-center"
                    ivory
                    textUp={
                        filteredDoctors.length > 1
                            ? filteredDoctors.length
                            : upText
                    }
                    textDown={
                        filteredDoctors.length > 1
                            ? t("doctorsNewTextDown")
                            : t("doctorOneDown")
                    }
                />
            </div>

            <div
                className={`tab:flex tab:flex-row-reverse tab:gap-4 pc:gap-5 tab:justify-between relative ${filteredDoctors.length === 1 ? "tab:items-end" : ""}`}
            >
                <LinkAction
                    className={`mr-0 ml-auto ${filteredDoctors.length === 1 ? "prepc:flex prepc:w-[19%] hidden" : "hidden"}`}
                    href="#booking"
                    name={tH("bookingSubtitle")}
                />
                {filteredDoctors.length > 1 && (
                    <p className="pc:text-lg pc:leading-[22px] tab:w-[28%] pc:max-w-[23.5%] text-ivory tab:text-justify tab:block pc:mb-[66px] mb-5 hidden leading-5">
                        {t("doctorsText")}
                    </p>
                )}
                {filteredDoctors.length === 1 ? (
                    <div className="prepc:w-[78%] tab:max-w-full pc:w-[86%] prepc:mx-0 tab:px-0 prepc:mb-0 mx-auto mb-8 max-w-[540px] px-4">
                        <DoctorOneCard data={filteredDoctors[0]} />
                    </div>
                ) : (
                    <div className="tab:max-w-[71%] pc:max-w-[76%] tab:mx-0 mx-auto max-w-[540px]">
                        <DoctorsSlider doctors={filteredDoctors} />
                    </div>
                )}
            </div>
            <LinkAction
                className={`mx-auto ${filteredDoctors.length === 1 ? "prepc:hidden" : "tab:bottom-[212px] pc:bottom-[240px] tab:absolute pc:right-12 tab:right-6"}`}
                href="#booking"
                name={tH("bookingSubtitle")}
            />
        </section>
    );
};
