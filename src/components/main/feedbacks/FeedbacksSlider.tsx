"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { FeedbackType } from "@/components/assets/feedbacksData";
import { IconArrow } from "@/components/shared/icons/IconArrow";

import { FeedbackCard } from "./FeedbackCard";

const OFFSET_Y = 40;

export const FeedbacksSlider = ({
    list,
    slideAmount,
    className,
}: {
    list: FeedbackType[];
    slideAmount: number;
    className?: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
    const totalHeight = OFFSET_Y * (slideAmount - 1) + 340;

    return (
        <div className={`relative mb-8 w-full ${className}`}>
            <div
                className="tab:mb-9 mb-4 h-full w-full overflow-hidden"
                style={{ height: totalHeight }}
            >
                {getStackedFeedbacks().map((feedback, index) => (
                    <motion.div
                        key={feedback.en.name}
                        className="bg-ivory absolute right-0 left-0 transition-all duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: (list.length - 1 - index) * OFFSET_Y,
                            zIndex:
                                index === 0 ? slideAmount : slideAmount - index,
                        }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <FeedbackCard
                            isFirst={index !== 0}
                            feedback={feedback}
                        />
                    </motion.div>
                ))}
            </div>

            <div className="tab:gap-5 flex justify-between gap-4">
                <button
                    aria-label="show previous slide button"
                    className="group tab:h-11 tab:border tab:w-11 relative flex h-6 w-6 rotate-180 items-center justify-center rounded-sm hover:border active:border disabled:pointer-events-none disabled:opacity-60"
                    type="button"
                    onClick={prevSlide}
                >
                    <IconArrow />
                </button>
                <div className="flex transform items-center gap-2">
                    {list.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-3 w-3 rounded-xs border border-black transition-colors ${
                                index === currentIndex ? "bg-black" : "bg-ivory"
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
        </div>
    );
};
