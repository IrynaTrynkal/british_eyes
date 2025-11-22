import { normalizePhone } from "@/utils/normalizePhone";

import { hotLineNumber } from "../assets/contacts";
import { IconPhone } from "../shared/icons/IconPhone";

export const PhoneButtonMob = () => {
    return (
        <a
            href={`tel:${normalizePhone(hotLineNumber)}`}
            className={
                "group prepc:h-12 prepc:w-12 relative z-10 flex h-8 w-8 items-center justify-center rounded-sm border border-black p-1 transition-colors duration-[300ms] ease-in-out hover:bg-black focus:bg-black active:bg-black"
            }
        >
            <IconPhone
                className={
                    "group-hover:text-ivory group-focus:text-ivory group-active:text-ivory absolute transition-colors duration-[300ms] ease-in-out"
                }
            />
        </a>
    );
};
