import { motion } from "framer-motion";

import { Menu } from "./Menu";
import { SocialLinks } from "./SocialLinks";

export interface HeaderMenuProps {
    isHeaderMenuOpened: boolean;
    setIsHeaderMenuOpened: (_value: boolean) => void;
}

export const MobileMenu = ({
    isHeaderMenuOpened = false,
    setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
    return (
        <motion.nav
            initial={{ height: 0 }}
            animate={{ height: isHeaderMenuOpened ? "100vh" : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="tab:hidden pc:px-8 bg-blackCustom absolute top-0 left-0 z-[7] w-[100vw] overflow-hidden px-4"
        >
            <div className="relative flex h-full flex-col justify-between pt-[65px] pb-[100px]">
                <Menu
                    onClick={() => setIsHeaderMenuOpened(false)}
                    className="mt-[65px] flex flex-col items-center gap-6"
                />
                <div className="mt-auto flex flex-col gap-6">
                    <SocialLinks className="" />
                </div>
            </div>
        </motion.nav>
    );
};
