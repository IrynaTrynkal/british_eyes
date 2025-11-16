import { useTranslations } from "next-intl";

import { gogleMapLink } from "@/components/assets/contacts";

export const AboutAdress = ({
    className,
    darkBG,
}: {
    className?: string;
    darkBG?: boolean;
}) => {
    const t = useTranslations("HomePage");
    return (
        <div
            className={`group tab:w-[220px] tab:p-3 w-[174px] rounded-sm ${darkBG ? "bg-emerald/70" : "bg-white/10"} px-2 py-1 backdrop-blur-sm ${className}`}
        >
            <a
                href={gogleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory tab:flex tab:text-base block text-sm leading-none font-medium whitespace-pre-line uppercase"
            >
                <p className="tab:leading-none">{t("adress")}</p>
            </a>
        </div>
    );
};
