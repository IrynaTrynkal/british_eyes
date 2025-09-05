import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("HomePage");
    return (
        <div className="">
            <p>{t("title")}</p>
        </div>
    );
}
