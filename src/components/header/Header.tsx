import { useTranslations } from "next-intl";

import { RunningPromo } from "../main/hero/RunningPromo";
import { IconForPromo } from "../shared/icons/IconForPromo";
import Navbar from "./Navbar";

export const Header = () => {
    const t = useTranslations("HomePage");
    return (
        <header className="bg-ivory fixed top-0 left-1/2 z-20 w-full max-w-[1600px] -translate-x-1/2">
            <section className="content">
                <Navbar />
            </section>
            <RunningPromo speed={30} className="bg-promo w-full">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="prepc:gap-4 prepc:pr-4 flex items-center gap-2.5 pr-2.5"
                    >
                        <span className="font-oswald prepc:text-xl leading-[120%] font-medium uppercase">
                            {t("promoText")}
                        </span>
                        <IconForPromo />
                    </div>
                ))}
            </RunningPromo>
        </header>
    );
};
