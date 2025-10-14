"use client";
import { useTranslations } from "next-intl";

import { doctorsData } from "@/components/assets/doctorsData";
import { ServicesKeyType } from "@/components/assets/menu";
import { DoctorsSlider } from "@/components/shared/doctors/DoctorsSlider";
import { Fraction } from "@/components/shared/Fraction";
import { LinkAction } from "@/components/shared/LinkAction";

export const DoctorsServices = ({ service }: { service: ServicesKeyType }) => {
    const filteredDoctors = doctorsData.filter(doc =>
        doc.services.includes(service)
    );
    const t = useTranslations("ServicesPage");
    const tH = useTranslations("HomePage");

    const upText = t.rich("doctorsTextUp", {
        small: chunk => <span className="pc:text-2xl text-sm">{chunk}</span>,
    });

    return (
        <section className="green-gradient tab:px-6 pc:px-12 tab:max-w-full tab:pt-10 tab:pb-[42px] relative pt-4 pb-7">
            <div className="tab:flex tab:gap-5 tab:justify-between tab:mb-10">
                <div className="tab:hidden mx-auto mb-6 flex max-w-[540px] justify-between px-4">
                    <h3 className="subtitle-ivory">{t("doctorsSubtitle")}</h3>
                    <Fraction
                        className="w-fit max-w-[100px] text-center"
                        ivory
                        textUp={upText}
                        textDown={t("doctorsTextDown")}
                    />
                </div>
                <div className="tab:max-w-[663px] tab:w-[47%] tab:px-0 tab:mx-0 mx-auto max-w-[540px] px-4">
                    <h2 className="title-section-ivory tab:max-w-[560px] tab:mb-0 mb-3 max-w-[440px] whitespace-pre-line">
                        {t("doctorsTitle")}
                    </h2>
                    <p className="tab:hidden pc:text-lg text-ivory mb-5 leading-5">
                        {t("doctorsText")}
                    </p>
                </div>
                <Fraction
                    className="tab:flex tab:max-w-[120px] pc:max-w-[137px] hidden w-fit max-w-[100px] text-center"
                    ivory
                    textUp={upText}
                    textDown={t("doctorsTextDown")}
                />
            </div>

            <div className="tab:flex tab:flex-row-reverse tab:gap-4 pc:gap-5 tab:justify-between relative">
                <p className="pc:text-lg tab:w-[28%] pc:max-w-[23.5%] text-ivory tab:text-justify tab:block pc:leading-[22px] pc:mb-[66px] mb-5 hidden leading-5">
                    {t("doctorsText")}
                </p>
                <div className="tab:max-w-[71%] pc:max-w-[76%] tab:mx-0 mx-auto max-w-[540px]">
                    <DoctorsSlider doctors={filteredDoctors} />
                </div>
            </div>
            <LinkAction
                className="tab:absolute tab:bottom-[212px] pc:bottom-[240px] pc:right-12 tab:right-6 mx-auto"
                href="/poslugy/lazerna-korekcziya-zoru#booking"
                name={tH("bookingSubtitle")}
            />
        </section>
    );
};
