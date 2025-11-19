import { useTranslations } from "next-intl";

import { BlogsListQueryResult } from "../../../sanity.types";
import { Pagination } from "../shared/Pagination";
import { BlogCardForAllNewsPage } from "./BlogCardForAllNewsPage";
const ITEMS_PER_PAGE = 6;

export const BlogList = ({
    blogList,
    pageNumber = 1,
    selectedCategory,
}: {
    blogList: BlogsListQueryResult;
    pageNumber?: number;
    selectedCategory?: string;
}) => {
    const t = useTranslations("HomePage");
    const filteredList =
        selectedCategory === "all"
            ? blogList
            : blogList.filter(item => item.service === selectedCategory);
    const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);

    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;

    const currentItems = filteredList.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    return (
        <section className="tab:px-0 tab:max-w-full pc:pb-[120px] tab:pb-12 prepc:w-[calc(100%-224px)] prepc:mx-0 mx-auto w-full max-w-[540px] px-4 pb-[60px]">
            <ul className="tab:grid-cols-2 prepc:grid-cols-3 mb-8 grid grid-cols-1 gap-5">
                {currentItems.map(blog => (
                    <li
                        key={blog.title}
                        className="flex flex-col overflow-hidden rounded-tl rounded-tr"
                    >
                        <BlogCardForAllNewsPage
                            btnName={t("readMore")}
                            news={blog}
                        />
                    </li>
                ))}
            </ul>
            {totalPages > 1 && (
                <Pagination
                    currentPage={pageNumber}
                    totalPages={totalPages}
                    className="prepc:ml-[227px]"
                />
            )}
        </section>
    );
};
