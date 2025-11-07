import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { IconArrow } from "../shared/icons/IconArrow";

export const BottomLinkButtons = ({ text }: { text: string }) => {
    const t = useTranslations("Menu");
    return (
        <div className="prepc:gap-8 tab:px-0 tab:max-w-full tab:mx-0 mx-auto flex max-w-[540px] justify-between gap-4 px-4">
            <Link
                href={"/reminders-and-instructions-for-patients" as any}
                className="group pc:gap-2 flex max-w-[calc(50%-8px)] items-center gap-1 py-2.5"
            >
                <IconArrow className="h-4 w-4 flex-shrink-0 rotate-180 transition-all duration-300 group-hover:mr-0 group-hover:-translate-x-1" />
                <p className="tab:text-sm font-oswald tab:no-underline relative uppercase underline">
                    {t("allInstructions")}
                    <span className="tab:block absolute bottom-0.5 left-0 hidden h-[1.5px] w-full origin-right bg-current transition-transform duration-500 ease-in-out group-hover:scale-x-[0.1]" />{" "}
                </p>
            </Link>
            <Link
                href={`/${text}` as any}
                className="group pc:gap-2 tab:max-w-full flex max-w-[calc(50%-8px)] items-center gap-1 py-2.5"
            >
                <p className="tab:text-sm font-oswald tab:no-underline relative text-right uppercase underline">
                    {t(text)}
                    <span className="tab:block absolute bottom-0.5 left-0 hidden h-[1.5px] w-full origin-right bg-current transition-transform duration-500 ease-in-out group-hover:scale-x-[0.1]" />{" "}
                </p>
                <IconArrow className="h-4 w-4 flex-shrink-0 transition-all duration-300 group-hover:mr-0 group-hover:translate-x-1" />
            </Link>
        </div>
    );
};
