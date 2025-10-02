"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { FeedbackType } from "@/components/assets/feedbacksData";
import { IconArrow } from "@/components/shared/icons/IconArrow";

import { FeedbackCardShared } from "./FeedbackCardShared";

const OFFSET_Y = 40;
const OFFSET_X = 30;

export const FeedbacksSliderShared = ({
    list,
    slideAmount,
    className,
}: {
    list: FeedbackType[];
    slideAmount: number;
    className?: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const check = () => setIsTablet(window.innerWidth >= 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? list.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex(prev => (prev === list.length - 1 ? 0 : prev + 1));
    };
    const goToSlide = (index: number) => setCurrentIndex(index);

    const getStackedFeedbacks = () => [
        ...list.slice(currentIndex),
        ...list.slice(0, currentIndex),
    ];
    const cardHeight = isTablet ? 330 : 340;
    const totalHeight = OFFSET_Y * (slideAmount - 1) + cardHeight;

    return (
        <div
            className={`tab:mx-auto relative mb-8 w-full max-w-[898px] ${className}`}
        >
            <div
                className="tab:mb-9 prepc:mb-0 mb-4 h-full w-full overflow-hidden"
                style={{ height: totalHeight }}
            >
                {getStackedFeedbacks().map((feedback, index) => (
                    <motion.div
                        key={feedback.en.name}
                        className={`bg-ivory tab:max-w-[660px] absolute right-0 left-0 transition-all duration-500 ${isTablet ? "tab:mx-0" : "tab:mx-auto"}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: (list.length - 1 - index) * OFFSET_Y,
                            x: isTablet ? index * OFFSET_X : 0,
                            zIndex:
                                index === 0 ? slideAmount : slideAmount - index,
                        }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <FeedbackCardShared
                            isFirst={index !== 0}
                            feedback={feedback}
                        />
                    </motion.div>
                ))}
            </div>

            {list.length > 1 && (
                <div
                    className={`tab:gap-5 flex gap-4 ${isTablet ? "tab:max-w-fit absolute right-0 bottom-0" : "tab:mx-auto tab:max-w-[300px] justify-between"}`}
                >
                    <button
                        aria-label="show previous slide button"
                        className="group tab:h-11 tab:border tab:w-11 relative flex h-6 w-6 rotate-180 items-center justify-center rounded-sm hover:border active:border disabled:pointer-events-none disabled:opacity-60"
                        type="button"
                        onClick={prevSlide}
                    >
                        <IconArrow />
                    </button>
                    <div
                        className={`transform items-center gap-2 ${isTablet ? "hidden" : "flex"}`}
                    >
                        {list.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-3 w-3 rounded-xs border border-black transition-colors ${
                                    index === currentIndex
                                        ? "bg-black"
                                        : "bg-ivory"
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        aria-label="show next slide button"
                        className="group tab:h-11 tab:border tab:w-11 relative flex h-6 w-6 items-center justify-center rounded-sm hover:border active:border disabled:pointer-events-none disabled:opacity-60"
                        type="button"
                        onClick={nextSlide}
                    >
                        <IconArrow />
                    </button>
                </div>
            )}
        </div>
    );
};
