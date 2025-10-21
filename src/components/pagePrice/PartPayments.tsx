import Image from "next/image";
import { useTranslations } from "next-intl";

import { IconArrow } from "../shared/icons/IconArrow";

export const PartPayments = () => {
    const t = useTranslations("PricePage");
    return (
        <div className="green-gradient prepc:rounded-lg prepc:aspect-square prepc:p-5 relative flex aspect-[288/192] max-w-[321px] flex-col justify-between rounded p-3">
            <div>
                <h3 className="title-section-ivory prepc:ml-24 prepc:mt-3 prepc:mb-10 mb-6 ml-11">
                    {t("paymentTitle")}
                </h3>
                <p className="text-ivory prepc:text-base prepc:leading-5 mb-4 text-sm leading-[17px]">
                    {t("paymentText")}
                </p>
            </div>
            <a
                href="/files/plati_chastinami__rozstrochka_•_a_bank.pdf"
                target="_blank"
                className="group text-ivory prepc:h-10 flex h-8 items-center justify-end gap-2"
            >
                <IconArrow className="pc:h-4 pc:w-4 h-4 w-4 transition-all duration-300 group-hover:mr-0 group-hover:translate-x-1" />
                <p className="font-oswald prepc:text-base relative text-sm leading-none font-medium uppercase">
                    {t("paymentBtn")}
                    <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-full origin-right bg-current transition-transform duration-500 ease-in-out group-hover:scale-x-[0.1]" />
                </p>
            </a>
            <Image
                src="/images/part.png"
                alt="part image"
                width={72}
                height={72}
                className="prepc:w-[81px] prepc:top-4 prepc:left-4 absolute top-1.5 left-3 h-auto w-9"
            />
        </div>
    );
};
