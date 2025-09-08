"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { ButtonAction } from "../shared/ButtonAction";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import { Logo } from "../shared/Logo";
import { SocialLinks } from "../shared/SocialLinks";
import { MenuBurgerButton } from "./MenuBurgerButton";
import { MenuMobWindow } from "./MenuMobWindow";
import { MenuPC } from "./MenuPC";
import { PhoneButton } from "./PhoneButton";
import { PhoneList } from "./PhoneList";

const Navbar = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
    const [isPhoneListOpened, setIsPhoneListOpened] = useState(false);

    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);
    const togglePhoneListOpen = () => setIsPhoneListOpened(!isPhoneListOpened);

    useEffect(() => {
        if (isHeaderMenuOpened) {
            const timer = setTimeout(() => {
                document.body.style.overflow = "hidden";
            }, 590);

            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = "";
        }
    }, [isHeaderMenuOpened]);
    const t = useTranslations("Menu");
    return (
        <nav className="pc:gap-8 border-grey flex items-center justify-between gap-6 border-b">
            <div className="pc:gap-4 flex items-center justify-center">
                <Logo />
                <MenuPC className="pc:flex hidden" />
            </div>
            <div className="pc:flex hidden items-center gap-4">
                <SocialLinks />
                <PhoneButton
                    togglePhoneListOpen={togglePhoneListOpen}
                    isPhoneListOpened={isPhoneListOpened}
                />
                <ButtonAction name={t("onlineButtonPC")} />
                <LanguageSwitcher />
            </div>

            <div className="pc:hidden flex items-center gap-6">
                <PhoneButton
                    togglePhoneListOpen={togglePhoneListOpen}
                    isPhoneListOpened={isPhoneListOpened}
                />
                <ButtonAction mob header name={t("onlineButtonMob")} />
                <MenuBurgerButton
                    isHeaderMenuOpened={isHeaderMenuOpened}
                    toggleHeaderMenuOpen={toggleHeaderMenuOpen}
                />
            </div>
            <MenuMobWindow
                isHeaderMenuOpened={isHeaderMenuOpened}
                setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            />
            <PhoneList
                isPhoneListOpened={isPhoneListOpened}
                setIsPhoneListOpened={setIsPhoneListOpened}
            />
        </nav>
    );
};

export default Navbar;
