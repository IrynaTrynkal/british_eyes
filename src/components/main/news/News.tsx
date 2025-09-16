import { useTranslations } from "next-intl";

import { newsList } from "@/components/assets/newsData";
import { LinkAction } from "@/components/shared/LinkAction";

import { NewCard } from "./NewCard";

const MAX_NEWS = 3;

export const News = () => {
    const t = useTranslations("HomePage");
    const showNews = newsList.slice(0, MAX_NEWS);

    return (
        <section className="content pc:pb-[120px] tab:pb-12 pb-[60px]">
            <h3 className="subtitle tab:mb-10 mb-5">{t("newsSubtitle")}</h3>{" "}
            <div className="tab:flex tab:justify-between tab:mb-10">
                <h2 className="title-section tab:mb-0 mb-6">
                    {t("newsTitle")}
                </h2>
                <LinkAction
                    secondary
                    className="tab:flex hidden"
                    href="/blog"
                    name={t("newsBtn")}
                />
            </div>
            <ul className="tab:flex-row tab:flex-wrap tab:justify-center mb-8 flex flex-col gap-5">
                {showNews.map(news => (
                    <li
                        key={news.en.title}
                        className="tab:w-[calc(50%-10px)] tab:max-w-[395px] pc:max-w-[434px] h-full overflow-hidden rounded-sm"
                    >
                        <NewCard btnName={t("readMore")} news={news} />
                    </li>
                ))}
            </ul>
            <LinkAction
                secondary
                className="tab:hidden mx-auto"
                href="/blog"
                name={t("newsBtn")}
            />
        </section>
    );
};
