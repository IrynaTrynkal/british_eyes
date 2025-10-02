import { useLocale } from "next-intl";

import { stickyList } from "@/components/assets/aboutData";
import { LocaleType } from "@/types/LocaleType";

import { StickyCard } from "./StickyCard";

export const StickySection = () => {
    const locale = useLocale();
    return (
        <section className="tab:max-w-full relative mx-auto max-w-[540px]">
            {stickyList.map((card, index) => (
                <div
                    key={card.data.en.title}
                    className="tab:top-[var(--card-top)] prepc:top-[var(--card-top-pc)] tab:min-h-[650px] tab:h-[var(--tab-h)] prepc:h-[var(--pc-h)] sticky top-[var(--card-top-mob)] flex min-h-[var(--mob-h)] items-center justify-center"
                    style={
                        {
                            "--mob-h": `calc(100vh - ${56 + index * 48}px)`,
                            "--tab-h": "calc(100vh - 56px)",
                            "--pc-h": "calc(100vh - 84px)",
                            "--card-top-mob": `${56 + index * 48}px`,
                            "--card-top": "56px",
                            "--card-top-pc": "84px",
                        } as React.CSSProperties
                    }
                >
                    <StickyCard
                        locale={locale as LocaleType}
                        data={card}
                        className={"tab:w-[33.5%] tab:left-[var(--card-left)]"}
                        style={
                            {
                                "--card-left": `calc(33.5% * ${index} - 16px*${index})`,
                            } as React.CSSProperties
                        }
                    />
                </div>
            ))}
        </section>
    );
};
