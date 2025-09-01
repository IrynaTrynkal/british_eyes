import { useTranslations } from "next-intl";

import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import LanguageSwitcherMob from "@/components/shared/LanguageSwitcherMob";

export default function Home() {
    const t = useTranslations("HomePage");
    return (
        <div className="">
            <p>{t("title")}</p>
            <LanguageSwitcher />
            <LanguageSwitcherMob />
            <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
        </div>
    );
}
