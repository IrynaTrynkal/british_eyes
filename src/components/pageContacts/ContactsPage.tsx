import { useTranslations } from "next-intl";

import { normalizePhone } from "@/utils/normalizePhone";

import { BOCemail, gogleMapLink, hotLineNumber } from "../assets/contacts";
import { GreenText } from "../shared/GreenText";
import { IconArrow } from "../shared/icons/IconArrow";
import { IconInvalid } from "../shared/icons/IconInvalid";
import { IconNoParking } from "../shared/icons/IconNoParking";
import { PhoneNumberList } from "../shared/PhoneNumberList";

export const ContactsPage = () => {
    const t = useTranslations("Contacts");

    return (
        <section className="tab:flex tab:py-12 pc:pb-[120px] prepc:pt-[72px] tab:flex-row-reverse tab:gap-4 tab:items-stretch">
            <div className="tab:mt-0 tab:min-h-full tab:h-auto tab:w-[calc(50%-8px)] pc:min-h-[1010px] pc:max-h-[1010px] relative mt-12 h-[calc(50vh-48px)] bg-[url(/images/contact-hero.jpg)] bg-cover bg-bottom bg-no-repeat"></div>
            <div className="tab:max-w-full tab:w-[calc(50%-8px)] tab:pt-4 tab:pr-0 prepc:pt-8 tab:pl-6 pc:pl-12 tab:pb-0 mx-auto max-w-[540px] px-4 py-[60px]">
                <h1 className="font-oswald pc:text-7xl prepc:text-6xl mb-4 text-4xl leading-[90%] uppercase">
                    {t("contacts")}
                </h1>
                <p className="font-oswald prepc:text-xl prepc:mb-4 pc:text-2xl mb-3 text-lg leading-[120%] uppercase">
                    {t("center")}
                </p>
                <p className="prepc:text-lg prepc:mb-10 pc:mb-[60px] mb-5 max-w-[437px] leading-[120%]">
                    {t("text")}
                </p>
                <div className="tab:flex tab:flex-wrap pc:mb-[60px] prepc:mb-10 tab:gap-4 tab:justify-between max-w-[662px]">
                    <div className="prepc:w-[48%]">
                        <h3 className="font-oswald prepc:mb-4 text-grey mb-3 font-medium uppercase">
                            {t("call")}
                        </h3>
                        <PhoneNumberList dark className="group mb-3" />
                        <h3 className="font-oswald text-grey mb-2.5 text-xs leading-none font-medium uppercase">
                            {t("hotLine")}
                        </h3>
                        <div className="prepc:mb-0 mb-6">
                            <a
                                href={`tel:${normalizePhone(hotLineNumber)}`}
                                className="leading-none font-medium transition-all duration-300 ease-in-out hover:underline"
                            >
                                {hotLineNumber}
                            </a>
                        </div>
                    </div>
                    <div className="prepc:w-[48%] prepc:flex prepc:flex-col prepc:justify-between">
                        <div className="prepc:mb-0 mb-3">
                            <h3 className="font-oswald text-grey mb-3 font-medium uppercase">
                                email
                            </h3>
                            <a
                                href={`mailto:${BOCemail}`}
                                className="block transition-all duration-300 ease-in-out hover:underline"
                            >
                                {BOCemail}
                            </a>
                        </div>
                        <div className="prepc:mb-0 mb-5">
                            <h3 className="font-oswald text-grey mb-3 font-medium uppercase">
                                {t("mode")}
                            </h3>
                            <p className="mb-2 leading-[18px] font-medium uppercase">
                                {t("modeDay")}
                            </p>
                            <p className="prepc:text-base prepc:leading-none text-sm leading-[15px] font-medium uppercase">
                                {t("modeRest")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="prepc:flex prepc:flex-wrap prepc:mb-3 prepc:gap-5 prepc:items-end max-w-[662px]">
                    <div className="prepc:w-[48%] prepc:mb-0 prepc:pb-1.5 mb-3">
                        <h3 className="font-oswald text-grey mb-3 font-medium uppercase">
                            {t("adress")}
                        </h3>
                        <p className="mb-2 leading-[18px] font-medium uppercase">
                            {t("adressMap")}
                        </p>
                        <p className="text-grey leading-[18px] font-medium">
                            {t("adressDirection")}
                        </p>
                    </div>
                    <a
                        href={gogleMapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tab:text-base prepc:mb-0 prepc:w-[48%] group mb-3 flex w-fit py-2.5 text-sm leading-none font-medium whitespace-pre-line uppercase"
                    >
                        <div className="pc:gap-2 flex items-center">
                            <IconArrow className="h-4 w-4 transition-all duration-300 group-hover:mr-0 group-hover:translate-x-1" />
                            <p className="tab:text-sm font-oswald relative">
                                {t("route")}
                                <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-full origin-right bg-current transition-transform duration-500 ease-in-out group-hover:scale-x-[0.1]" />{" "}
                            </p>
                        </div>
                    </a>
                </div>
                <GreenText
                    className="prepc:text-xl prepc:mb-12 pc:mb-[65px] mb-5 max-w-[662px] leading-[120%]"
                    text={t("attention")}
                />
                <h3 className="font-oswald prepc:text-2xl prepc:mb-6 mb-3 text-lg leading-[120%] uppercase">
                    {t("rules")}
                </h3>
                <div className="tab:flex-row tab:flex-wrap pc:gap-5 flex flex-col gap-3">
                    <div className="border-grey prepc:w-[48%] pc:w-[321px] max-w-[321px] rounded-lg border p-3">
                        <div className="prepc:flex-col prepc:items-start prepc:mb-[34px] mb-[22px] flex items-center gap-3">
                            <div className="h-10 w-10">
                                <IconInvalid />
                            </div>
                            <h4 className="font-oswald prepc:text-base text-sm leading-[120%] uppercase">
                                {t("rulesAutoTitle")}
                            </h4>
                        </div>
                        <p className="leading-5">{t("rulesAutoText")}</p>
                    </div>
                    <div className="border-grey prepc:w-[48%] pc:w-[321px] max-w-[321px] rounded-lg border p-3">
                        <div className="prepc:flex-col prepc:items-start prepc:mb-[34px] mb-[22px] flex items-center gap-3">
                            <div className="h-10 w-10">
                                <IconNoParking />
                            </div>
                            <h4 className="font-oswald prepc:text-base text-sm leading-[120%] uppercase">
                                {t("rulesParkingTitle")}
                            </h4>
                        </div>

                        <p className="leading-5">{t("rulesParkingText")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
