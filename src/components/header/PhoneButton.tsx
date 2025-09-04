import { IconPhone } from "../shared/icons/IconPhone";

interface PhoneButtonProps {
    isPhoneListOpened: boolean;
    togglePhoneListOpen: () => void;
}

export const PhoneButton = ({
    isPhoneListOpened,
    togglePhoneListOpen,
}: PhoneButtonProps) => {
    return (
        <button
            aria-label="button that opens the phone list"
            type="button"
            onClick={togglePhoneListOpen}
            className={
                "group pc:h-12 pc:w-12 relative z-10 flex h-8 w-8 items-center justify-center rounded-sm border border-black p-1 transition-colors duration-[300ms] ease-in-out hover:bg-black focus:bg-black active:bg-black"
            }
        >
            <IconPhone
                className={
                    "group-hover:text-ivory group-focus:text-ivory group-active:text-ivory absolute transition-colors duration-[300ms] ease-in-out"
                }
            />
        </button>
    );
};
