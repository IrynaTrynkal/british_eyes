"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { IconArrow } from "./icons/IconArrow";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    idScrollTo?: string;
}

export const Pagination = ({
    currentPage,
    totalPages,
    idScrollTo,
}: PaginationProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();

    const handlePageChange = (newPage: number) => {
        const newParams = new URLSearchParams(params.toString());
        newParams.set("page", String(newPage));
        router.push(`${pathname}?${newParams.toString()}${idScrollTo}`);
    };

    return (
        <div className="content prepc:mt-8 pc:mt-[60px] prepc:justify-center prepc:ml-[227px] mt-4 flex justify-between gap-2">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="prepc:hidden rounded border border-transparent hover:border-black active:border-black disabled:cursor-not-allowed! disabled:border-transparent disabled:opacity-50"
            >
                <IconArrow className="rotate-180" />
            </button>

            <div className="flex gap-5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    num => (
                        <button
                            key={num}
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
