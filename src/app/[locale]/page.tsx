import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("HomePage");
    return (
        <div className="">
            <p>{t("title")}</p>
            <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
        </div>
    );
}
