import Image from "next/image";
import { useTranslations } from "next-intl";

import { IconBigLogo } from "../shared/icons/IconBigLogo";
import { IconPin } from "../shared/icons/IconPin";
import { PhoneNumberList } from "../shared/PhoneNumberList";
import { SocialLinks } from "../shared/SocialLinks";
import { MenuMain } from "./MenuMain";
import { ServicesMenu } from "./ServicesMenu";

export const Footer = () => {
    const t = useTranslations("HomePage");
    return (
        <footer className="content text-ivory bg-black py-8">
            <div className="w-[224px]">
                <IconBigLogo />
                <p className="mt-4 mb-6 text-sm">{t("footerSlogan")}</p>
            </div>
            <div>
                <h3>{t("navigation")}</h3>
                <MenuMain />
            </div>
            <div>
                <h3>{t("services")}</h3>
                <div className="bg-grey h-[1px] w-full" />
                <ServicesMenu />
            </div>
            <div>
                <h3>{t("socialMedia")}</h3>
                <SocialLinks footer />
            </div>
            <div>
                <h3>{t("contacts")}</h3>
                <PhoneNumberList />
            </div>
            <div>
                <h3>{t("mode")}</h3>
                <p>ПН - Нд 9:00 – 19:00</p>
                <p>працюємо без вихідних</p>
            </div>
            <div className="bg-grey h-[1px] w-full" />
            <div>
                <Image
                    src="/images/map.jpg"
                    alt="map"
                    width={1344}
                    height={585}
                />
                <IconPin />
            </div>
            <div>
                <button className="border px-3 py-2.5">{t("german")}</button>
                <div>
                    <p>{t("policy")}</p>
                    <p>{t("license")}</p>
                </div>
                <p>&copy; 2025 БОЦ</p>
            </div>
        </footer>
    );
};
