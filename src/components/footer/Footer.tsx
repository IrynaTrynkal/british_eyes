import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { gogleMapLink } from "../assets/contacts";
import { IconBigLogo } from "../shared/icons/IconBigLogo";
import { IconPin } from "../shared/icons/IconPin";
import { PhoneNumberList } from "../shared/PhoneNumberList";
import { SocialLinks } from "../shared/SocialLinks";
import { MenuMain } from "./MenuMain";
import { ServicesMenu } from "./ServicesMenu";
import { UpButton } from "./UpButton";

export const Footer = () => {
    const t = useTranslations("HomePage");
    const footerH3 =
        "font-oswald text-grey text-sm prepc:text-base leading-none font-medium uppercase";
    return (
        <footer className="text-ivory bg-black py-8">
            <section className="content prepc:max-w-[1600px] relative mx-auto">
                <div className="prepc:flex prepc:mb-5">
                    <div className="prepc:mr-[17.2%] w-[224px]">
                        <IconBigLogo />
                        <p className="mt-4 mb-6 text-sm leading-[16.8px]">
                            {t("slogan")}
                        </p>
                    </div>
                    <div className="prepc:mb-0 prepc:mr-[14.3%] prepc:w-[145px] mb-[30px]">
                        <h3 className={`${footerH3} mb-[14px]`}>
                            {t("navigation")}
                        </h3>
                        <MenuMain />
                    </div>
                    <div className="prepc:w-[445px] prepc:mb-0 mb-6">
                        <h3 className={`${footerH3} mb-1.5`}>{t("posluhy")}</h3>
                        <div className="bg-grey prepc:hidden mb-1.5 h-[1px] w-full" />
                        <ServicesMenu />
                    </div>
                </div>

                <div className="prepc:flex">
                    <div className="prepc:flex-col prepc:items-start prepc:justify-between prepc:h-[98px] prepc:mr-[17.2%] prepc:w-[224px] prepc:mb-0 mb-6 flex items-center">
                        <h3 className={`${footerH3} prepc:w-fit w-1/2`}>
                            {t("socialMedia")}
                        </h3>
                        <SocialLinks className="w-1/2" footer />
                    </div>
                    <div className="prepc:mr-[14.3%] flex">
                        <div className="prepc:w-[145px] w-1/2">
                            <h3 className={`${footerH3} mb-3`}>
                                {t("kontakty")}
                            </h3>
                            <div>
                                <PhoneNumberList className="prepc:text-base group prepc:leading-none flex w-fit flex-col gap-2 text-sm leading-[15px] font-medium" />
                            </div>
                        </div>
                        <div className="prepc:hidden w-1/2">
                            <h3 className={`${footerH3} mb-3`}>{t("mode")}</h3>
                            <p className="mb-1.5 text-sm leading-[15px] font-medium whitespace-pre-line uppercase">
                                {t("modeDay")}
                            </p>
                            <p className="prepc:text-base prepc:leading-none text-sm leading-[15px] font-medium uppercase">
                                {t("modeRest")}
                            </p>
                        </div>
                    </div>
                    <div className="prepc:block hidden">
                        <h3 className={`${footerH3} prepc:mb-3`}>
                            {t("mode")}
                        </h3>
                        <p className="prepc:text-base prepc:leading-none prepc:mb-2.5 mb-1.5 text-sm leading-[15px] font-medium whitespace-pre-line uppercase">
                            {t("modeDay")}
                        </p>
                        <p className="prepc:text-base prepc:leading-none text-sm leading-[15px] font-medium uppercase">
                            {t("modeRest")}
                        </p>
                    </div>
                    <UpButton className="prepc:flex prepc:ml-auto prepc:mr-0 mt-auto mb-0 hidden" />
                </div>
                <div className="bg-grey my-6 h-[1px] w-full" />
                <a
                    className="relative mb-6 block"
                    href={gogleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/images/map.jpg"
                        alt="map"
                        width={1344}
                        height={585}
                        className="prepc:aspect-[1344/287] tab:object-cover tab:object-center mx-auto max-h-[287px] overflow-hidden"
                    />
                    <IconPin className="prepc:w-11 prepc:max-w-11 tab:-translate-y-8 absolute bottom-1/2 left-1/2 h-auto w-[10%] max-w-9 -translate-x-1/2 -translate-y-2" />
                    <div className="tab:block tab:px-2 tab:py-0.5 absolute top-1/2 left-1/2 hidden w-46 -translate-x-1/2 -translate-y-3 rounded-sm bg-white/10 text-sm backdrop-blur-2xl">
                        {t("title")}
                    </div>
                </a>
                <div className="tab:flex tab:justify-between pc:justify-normal tab:items-center text-center">
                    <a
                        href="https://klinika.ua/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="prepc:text-base prepc:px-2.5 pc:mr-[45.5%] hover:bg-ivory tab:mx-0 tab:mb-0 mx-auto mb-6 block w-fit border px-3 py-2.5 text-sm font-medium uppercase transition-all duration-300 ease-in-out hover:text-black"
                    >
                        {t("german")}
                    </a>
                    <div className="tab:flex-row prepc:w-[418px] tab:mb-0 tab:gap-12 mb-4 flex flex-col gap-3 text-sm leading-[18px]">
                        <Link
                            href="/politika-konfidenczijnosti"
                            className="transition-all duration-300 ease-in-out hover:underline"
                        >
                            {t("policy")}
                        </Link>
                        <a
                            href="/files/Британский_офтальмологический_центр.pdf"
                            target="_blank"
                            className="transition-all duration-300 ease-in-out hover:underline"
                        >
                            {t("license")}
                        </a>
                    </div>
                    <p className="pc:ml-auto pc:mr-0 text-sm leading-[18px]">
                        &copy; {t("title")}
                    </p>
                </div>
                <div className="prepc:hidden absolute top-0 right-4">
                    <UpButton />
                </div>
            </section>
        </footer>
    );
};
