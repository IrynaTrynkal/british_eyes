import { IconClose } from "../shared/icons/IconClose";
import { IconMenu } from "../shared/icons/IconMenu";

interface MenuBurgerButtonProps {
    isHeaderMenuOpened: boolean;
    toggleHeaderMenuOpen: () => void;
}

export const MenuBurgerButton = ({
    isHeaderMenuOpened,
    toggleHeaderMenuOpen,
}: MenuBurgerButtonProps) => {
    return (
        <button
            aria-label={
                isHeaderMenuOpened ? "close menu button" : "open menu button"
            }
            type="button"
            onClick={toggleHeaderMenuOpen}
            className="relative z-10 flex h-11 w-11 items-center justify-center p-1"
        >
            <IconMenu
                className={`absolute transition-opacity duration-300 ${isHeaderMenuOpened ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`}
            />

            <IconClose
                className={`absolute transition-opacity duration-300 ${isHeaderMenuOpened ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
            />
        </button>
    );
};
