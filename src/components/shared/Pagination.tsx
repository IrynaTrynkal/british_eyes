"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { IconArrow } from "./icons/IconArrow";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    idScrollTo?: string;
    className?: string;
}

export const Pagination = ({
    currentPage,
    totalPages,
    idScrollTo,
    className,
}: PaginationProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        const newParams = new URLSearchParams(params.toString());
        newParams.set("page", String(newPage));
        router.push(`${pathname}?${newParams.toString()}${idScrollTo ?? ""}`);
    };

    const getPagesToDisplay = () => {
        const pages: (number | string)[] = [];
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage > 4) {
            pages.push(1, "...");
        } else {
            pages.push(1);
        }

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 3) {
            pages.push("...", totalPages);
        } else if (!pages.includes(totalPages)) {
            pages.push(totalPages);
        }

        return pages;
    };

    const pagesToDisplay = getPagesToDisplay();

    return (
        <div
            className={`content prepc:mt-8 pc:mt-[60px] prepc:justify-center mt-4 flex justify-between gap-2 ${className}`}
        >
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="prepc:hidden rounded border border-transparent hover:border-black active:border-black disabled:cursor-not-allowed! disabled:border-transparent disabled:opacity-50"
            >
                <IconArrow className="rotate-180" />
            </button>

            <div className="flex gap-5">
                {pagesToDisplay.map((num, i) =>
                    typeof num === "number" ? (
                        <button
                            key={i}
                            disabled={num === currentPage}
                            onClick={() => handlePageChange(num)}
                            className={`font-oswald prepc:text-3xl tab:text-2xl text-xl leading-none font-medium transition-all duration-300 ease-in-out ${
                                num === currentPage
                                    ? "cursor-not-allowed! text-black underline"
                                    : "text-grey"
                            }`}
                        >
                            {num}
                        </button>
                    ) : (
                        <span
                            key={i}
                            className="font-oswald text-grey prepc:text-3xl text-xl"
                        >
                            {num}
                        </span>
                    )
                )}
            </div>
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="prepc:hidden rounded border border-transparent hover:border-black active:border-black disabled:cursor-not-allowed! disabled:border-transparent disabled:opacity-50"
            >
                <IconArrow />
            </button>
        </div>
    );
};
