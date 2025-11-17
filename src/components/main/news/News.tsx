import { useTranslations } from "next-intl";

import { LinkAction } from "@/components/shared/LinkAction";

import { BlogsListQueryResult } from "../../../../sanity.types";
import { NewCard } from "./NewCard";

const MAX_NEWS = 3;

export const News = ({
    blogList,
    title,
}: {
    blogList: BlogsListQueryResult;
    title?: string;
}) => {
    const t = useTranslations("HomePage");

    if (!blogList) return null;
    const showNews = blogList.slice(0, MAX_NEWS);

    return (
        <section className="content pc:pb-[120px] tab:pb-12 pb-[60px]">
            <h3 className={`subtitle tab:mb-10 mb-5 ${title ? "hidden" : ""}`}>
                {t("newsSubtitle")}
            </h3>{" "}
            <div className="tab:flex tab:justify-between tab:mb-10">
                <h2 className="title-section tab:mb-0 mb-6">
                    {title ? title : t("newsTitle")}
                </h2>
                <LinkAction
                    secondary
                    className={` ${title ? "hidden" : "tab:flex hidden"}`}
                    href="/blog"
                    name={t("newsBtn")}
                />
            </div>
            <ul className="tab:flex-row tab:flex-wrap tab:justify-center mb-8 flex flex-col gap-5">
                {showNews.map(news => (
                    <li
                        key={news.title}
                        className="tab:w-[calc(50%-10px)] tab:max-w-[395px] pc:max-w-[434px] h-full overflow-hidden rounded-tl rounded-tr"
                    >
                        <NewCard btnName={t("readMore")} news={news} />
                    </li>
                ))}
            </ul>
            <LinkAction
                secondary
                className={`tab:hidden mx-auto ${title ? "hidden" : ""}`}
                href="/blog"
                name={t("newsBtn")}
            />
        </section>
    );
};
