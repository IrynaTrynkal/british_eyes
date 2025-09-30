"use client";
import { useTranslations } from "next-intl";

import { IconArrow } from "../shared/icons/IconArrow";

export const UpButton = ({ className }: { className?: string }) => {
    const t = useTranslations("HomePage");
    return (
        <div className={`group relative ${className}`}>
            <button
                aria-label="scroll to top button"
                title={t("upButtonAria")}
                className={
                    "prepc:h-11 prepc:w-11 bg-ivory group border-ivory tab:rounded-sm flex h-8 w-8 items-center justify-center rounded-xs border transition-colors duration-300 ease-in-out group-hover:bg-black group-active:bg-black"
                }
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
            >
                <IconArrow className="group-hover:text-ivory group-active:text-ivory prepc:w-6 h-auto w-4 -rotate-90 text-black transition-colors duration-300 ease-in-out" />
            </button>
            <span className="text-ivory prepc:text-base absolute right-0 bottom-full mb-1 hidden w-max rounded bg-black py-1 text-sm group-hover:block group-active:block">
                {t("upButtonHint")}
            </span>
        </div>
    );
};
