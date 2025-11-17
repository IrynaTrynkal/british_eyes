import { useTranslations } from "next-intl";

export const HeroBlog = () => {
    const t = useTranslations("Blog");

    return (
        <section
            className={
                "tab:max-w-full tab:px-6 pc:px-12 mx-auto w-full max-w-[540px] px-4 pb-5"
            }
        >
            <h1
                className={
                    "title-h1-up cta-green-gradient text-ivory prepc:p-8 prepc:rounded-lg rounded p-3 whitespace-pre-line uppercase"
                }
            >
                {t("title")}
            </h1>
        </section>
    );
};
