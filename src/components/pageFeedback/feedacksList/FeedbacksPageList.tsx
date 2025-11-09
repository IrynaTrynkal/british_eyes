import { feedbacksList } from "@/components/assets/feedbacksData";
import { Pagination } from "@/components/shared/Pagination";

import { FeedbackPageCard } from "./FeedbackPageCard";

const ITEMS_PER_PAGE = 7;

export const FeedbacksPageList = ({
    pageNumber = 1,
    selectedCategory,
    className,
    idScrollTo,
}: {
    pageNumber?: number;
    selectedCategory?: string;
    className?: string;
    idScrollTo?: string;
}) => {
    const filteredFeedbacksList =
        selectedCategory === "all"
            ? feedbacksList
            : feedbacksList.filter(item => item.service === selectedCategory);

    const totalPages = Math.ceil(filteredFeedbacksList.length / ITEMS_PER_PAGE);

    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredFeedbacksList.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );
    return (
        <div className={className}>
            <ul className="tab:px-0 tab:max-w-full mx-auto flex max-w-[540px] flex-col gap-4 px-4">
                {currentItems.map((fb, ind) => (
                    <li key={ind}>
                        <FeedbackPageCard feedback={fb} />
                    </li>
                ))}
            </ul>
            {totalPages > 1 && (
                <Pagination
                    idScrollTo={idScrollTo}
                    currentPage={pageNumber}
                    totalPages={totalPages}
                    className="prepc:ml-[227px]"
                />
            )}
        </div>
    );
};
