import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { normalizePhone } from "@/utils/normalizePhone";

import { hotLineNumber } from "../assets/contacts";
import { ButtonClose } from "../shared/ButtonClose";
import { PhoneNumberList } from "../shared/PhoneNumberList";

export interface PhoneListProps {
    isPhoneListOpened: boolean;
    setIsPhoneListOpened: (_value: boolean) => void;
}

export const PhoneList = ({
    isPhoneListOpened = false,
    setIsPhoneListOpened,
}: PhoneListProps) => {
    const t = useTranslations("Modals");
    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: isPhoneListOpened ? "248px" : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-ivory tab:top-[72px] tab:right-68 tab:left-auto absolute top-12 left-0 z-[7] overflow-hidden"
        >
            <div className="prepc:px-8 px-5 py-8">
                <ButtonClose
                    small
                    className="absolute top-0 right-0"
                    onClick={() => setIsPhoneListOpened(false)}
                />
                <h3 className="font-oswald mb-5 text-center text-sm leading-[12.6px] font-medium uppercase">
                    {t("callUs")}
                </h3>
                <PhoneNumberList
                    onClick={() => setIsPhoneListOpened(false)}
                    className="mb-8 flex flex-col items-center gap-3 leading-none font-medium"
                />
                <h3 className="font-oswald text-grey mb-3 text-center text-xs leading-none font-medium uppercase">
                    {t("hotLine")}
                </h3>
                <div className="flex justify-center">
                    <a
                        onClick={() => setIsPhoneListOpened(false)}
                        href={`tel:${normalizePhone(hotLineNumber)}`}
                        className="leading-none font-medium"
                    >
                        {hotLineNumber}
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
