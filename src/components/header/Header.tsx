"use client";

import { IconLogo } from "../shared/icons/IconLogo";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import Navbar from "./Navbar";

export const Header = () => {
    return (
        <>
            <header className="content relative">
                <div className="border-grey mx-auto flex h-[64px] items-center justify-between border-b">
                    <IconLogo className="relative z-10" />

                    <nav className="tab:gap-5 pc:gap-8 flex items-center justify-end">
                        <Navbar />
                        <div className="tab:flex hidden">
                            <LanguageSwitcher />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};
