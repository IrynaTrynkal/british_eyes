"use client";
import { useEffect, useState } from "react";

import { BookingOnlineForm } from "../shared/booking/BookingOnlineForm";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import { Logo } from "../shared/Logo";
import { SocialLinks } from "../shared/SocialLinks";
import { MenuBurgerButton } from "./MenuBurgerButton";
import { MenuMobWindow } from "./MenuMobWindow";
import { MenuPC } from "./MenuPC";
import { PhoneButton } from "./PhoneButton";
import { PhoneButtonMob } from "./PhoneButtonMob";
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
    return (
        <nav className="prepc:h-[72px] prepc:gap-8 border-grey flex h-12 items-center justify-between gap-6 border-b">
            <div className="prepc:gap-4 flex items-center justify-center">
                <Logo />
                <MenuPC className="prepc:flex hidden" />
            </div>
            <div className="prepc:flex hidden items-center gap-4">
                <SocialLinks className="pc:flex hidden" />
                <PhoneButton
                    togglePhoneListOpen={togglePhoneListOpen}
                    isPhoneListOpened={isPhoneListOpened}
                />
                <BookingOnlineForm />
                <LanguageSwitcher />
            </div>

            <div className="prepc:hidden flex items-center gap-6">
                <PhoneButtonMob />
                <BookingOnlineForm />
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
