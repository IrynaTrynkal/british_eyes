import { motion } from "framer-motion";

import { MenuMobContent } from "./MenuMobContent";

export interface HeaderMenuProps {
    isHeaderMenuOpened: boolean;
    setIsHeaderMenuOpened: (_value: boolean) => void;
}

export const MenuMobWindow = ({
    isHeaderMenuOpened = false,
    setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
    return (
        <motion.nav
            initial={{ height: 0 }}
            animate={{
                height: isHeaderMenuOpened ? "100vh" : 0,
                paddingBottom: isHeaderMenuOpened ? "48px" : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="prepc:hidden bg-ivory prepc:top-[72px] absolute top-12 left-0 z-[7] w-[100vw] overflow-y-auto px-4"
        >
            <MenuMobContent
                className="mx-auto max-w-[500px] pb-24"
                onClick={() => setIsHeaderMenuOpened(false)}
            />
        </motion.nav>
    );
};
