import Image from "next/image";
import { useTranslations } from "next-intl";

import { gogleMapLink } from "../assets/contacts";
import { IconBigLogo } from "../shared/icons/IconBigLogo";
import { IconPin } from "../shared/icons/IconPin";
import { PhoneNumberList } from "../shared/PhoneNumberList";
import { SocialLinks } from "../shared/SocialLinks";
import { MenuMain } from "./MenuMain";
import { ServicesMenu } from "./ServicesMenu";

export const Footer = () => {
    const t = useTranslations("HomePage");
    const footerH3 =
        "font-oswald text-grey text-sm pc:text-base leading-none font-medium uppercase";
    return (
        <footer className="text-ivory bg-black py-8">
            <section className="content">
                <div className="pc:flex pc:mb-5">
                    <div className="pc:mr-[17.2%] w-[224px]">
                        <IconBigLogo />
                        <p className="mt-4 mb-6 text-sm leading-[16.8px]">
                            {t("slogan")}
                        </p>
                    </div>
                    <div className="pc:mb-0 pc:mr-[14.3%] pc:w-[145px] mb-[30px]">
                        <h3 className={`${footerH3} mb-[14px]`}>
                            {t("navigation")}
                        </h3>
                        <MenuMain />
                    </div>
                    <div className="pc:w-[445px] pc:mb-0 mb-6">
                        <h3 className={`${footerH3} mb-1.5`}>{t("poslugy")}</h3>
                        <div className="bg-grey pc:hidden mb-1.5 h-[1px] w-full" />
                        <ServicesMenu />
                    </div>
                </div>

                <div className="pc:flex">
                    <div className="pc:flex-col pc:items-start pc:justify-between pc:h-[98px] pc:mr-[17.2%] pc:w-[224px] pc:mb-0 mb-6 flex items-center">
                        <h3 className={`${footerH3} pc:w-fit w-1/2`}>
                            {t("socialMedia")}
                        </h3>
                        <SocialLinks className="w-1/2" footer />
                    </div>
                    <div className="pc:mr-[14.3%] flex">
                        <div className="pc:w-[145px] w-1/2">
                            <h3 className={`${footerH3} mb-3`}>
                                {t("kontakty")}
                            </h3>
                            <PhoneNumberList className="pc:text-base pc:leading-none flex flex-col gap-2 text-sm leading-[15px] font-medium" />
                        </div>
                        <div className="pc:hidden w-1/2">
                            <h3 className={`${footerH3} mb-3`}>{t("mode")}</h3>
                            <p className="mb-1.5 text-sm leading-[15px] font-medium whitespace-pre-line uppercase">
                                {t("modeDay")}
                            </p>
                            <p className="pc:text-base pc:leading-none text-sm leading-[15px] font-medium uppercase">
                                {t("modeRest")}
                            </p>
                        </div>
                    </div>
                    <div className="pc:block hidden">
                        <h3 className={`${footerH3} pc:mb-9`}>{t("mode")}</h3>
                        <p className="pc:text-base pc:leading-none pc:mb-2.5 mb-1.5 text-sm leading-[15px] font-medium whitespace-pre-line uppercase">
                            {t("modeRest")}
                        </p>
                        <p className="pc:text-base pc:leading-none text-sm leading-[15px] font-medium uppercase">
                            {t("modeRest")}
                        </p>
                    </div>
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
                        className="pc:aspect-[1344/287] tab:object-cover tab:object-center mx-auto max-h-[287px] overflow-hidden"
                    />
                    <IconPin className="pc:w-11 pc:max-w-11 tab:-translate-y-8 absolute bottom-1/2 left-1/2 h-auto w-[10%] max-w-9 -translate-x-1/2 -translate-y-2" />
                    <div className="tab:block tab:px-2 tab:py-0.5 absolute top-1/2 left-1/2 hidden w-46 -translate-x-1/2 -translate-y-3 rounded-sm bg-white/10 text-sm">
                        {t("title")}
                    </div>
                </a>
                <div className="tab:flex tab:justify-between pc:justify-normal tab:items-center text-center">
                    <button className="pc:text-base pc:px-2.5 pc:mr-[45.5%] pc:mb-0 mb-6 border px-3 py-2.5 text-sm font-medium uppercase">
                        {t("german")}
                    </button>
                    <div className="tab:flex-row pc:w-[418px] pc:mb-0 tab:gap-12 mb-4 flex flex-col gap-3 text-sm leading-[18px]">
                        <p>{t("policy")}</p>
                        <p>{t("license")}</p>
                    </div>
                    <p className="pc:ml-auto pc:mr-0 text-sm leading-[18px]">
                        &copy; 2025 БОЦ
                    </p>
                </div>
            </section>
        </footer>
    );
};
