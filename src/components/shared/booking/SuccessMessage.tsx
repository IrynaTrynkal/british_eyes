import Image from "next/image";
import { useTranslations } from "next-intl";

export const SuccessMessage = () => {
    const t = useTranslations("Form");

    return (
        <div className="green-gradient text-ivory tab:w-[472px] tab:p-14 tab:rounded-lg mx-auto w-[288px] rounded p-6 text-center">
            <h2 className="font-oswald tab:text-2xl tab:leading-7 mb-3 text-lg leading-[22px] font-medium uppercase">
                {t("successTitle")}
            </h2>
            <p className="tab:text-lg tab:leading-[22px] tab:mb-8 mb-3 leading-5">
                {t("successText")}
            </p>
            <Image
                src="/images/ok.png"
                alt="successful form submission"
                width={169}
                height={169}
                className="tab:h-[169px] tab:w-[169px] mx-auto h-[88px] w-[88px]"
            />
        </div>
    );
};
