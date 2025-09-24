"use client";
import { IconArrow } from "../shared/icons/IconArrow";

export const UpButton = ({ className }: { className?: string }) => {
    return (
        <button
            aria-label="scroll to top button"
            className={`group ${className} tab:h-8 tab:w-8 prepc:h-11 prepc:w-11 bg-ivory group border-ivory tab:rounded-sm flex h-6 w-6 items-center justify-center rounded-xs border transition-colors duration-300 ease-in-out hover:bg-black`}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
        >
            <IconArrow className="group-hover:text-ivory tab:w-4 prepc:w-6 h-auto w-2.5 -rotate-90 text-black transition-colors duration-300 ease-in-out" />
        </button>
    );
};
