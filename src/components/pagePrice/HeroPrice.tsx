import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export const HeroPrice = ({
    list,
}: {
    list: { title: string; key: string }[];
}) => {
    const t = useTranslations("PricePage");
    return (
        <section className="content prepc:pt-[60px] pt-6">
            <div className="green-gradient prepc:rounded-lg tab:flex tab:items-center tab:gap-6 prepc:gap-[60px] prepc:px-5 prepc:py-8 rounded p-3">
                <h1 className="title-h1 tab:w-[22%] prepc:w-[24%] text-ivory border-ivory tab:pt-3 tab:border-b-0 tab:border-r tab:mb-0 mb-3 border-b pb-3 uppercase">
                    {t("title")}
                </h1>
                <nav className="tab:flex-row tab:w-[76%] prepc:w-[72%] prepc:gap-5 tab:flex-wrap tab:gap-3 flex flex-col gap-5">
                    {list.map(item => (
                        <Link
                            href={`/tsiny#${item.key}` as any}
                            key={item.key}
                            className="font-oswald text-ivory block leading-5 uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:underline"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </section>
    );
};
