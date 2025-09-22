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
            className="tab:h-8 tab:w-8 tab:p-3 relative z-10 flex h-6 w-6 items-center justify-center rounded-sm border border-transparent p-1 transition-all duration-300 ease-in-out hover:border-black"
        >
            <IconMenu
                className={`tab:w-8 tab:h-8 absolute transition-opacity duration-300 ${isHeaderMenuOpened ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`}
            />

            <IconClose
                className={`tab:w-6 tab:h-6 absolute transition-opacity duration-300 ${isHeaderMenuOpened ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
            />
        </button>
    );
};
