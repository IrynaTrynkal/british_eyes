import { useTranslations } from "next-intl";

export const ErrorMessage = () => {
    const t = useTranslations("Form");
    return (
        <div className="green-gradient text-ivory tab:w-[472px] tab:p-14 tab:rounded-lg mx-auto w-[288px] rounded p-6 text-center">
            <h2 className="font-oswald tab:text-2xl tab:leading-7 mb-3 text-lg leading-[22px] font-medium uppercase">
                {t("errorTitle")}
            </h2>
            <p className="tab:text-lg tab:leading-[22px] tab:mb-8 mb-3 leading-5">
                {t("errorText")}
            </p>
        </div>
    );
};
