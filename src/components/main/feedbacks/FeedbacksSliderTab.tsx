"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { FeedbackType } from "@/components/assets/feedbacksData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "@/components/shared/slider/CarouselButtons";

import { FeedbackCard } from "./FeedbackCard";

export const FeedbacksSliderTab = ({
    list,
    slideAmount,
}: {
    list: FeedbackType[];
    slideAmount: number;
}) => {
    const options: EmblaOptionsType = {
        loop: true,
        align: "start",
    };
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const feedbacksToShow = list.slice(0, slideAmount);

    return (
        <div className="embla tab:block tab:px-0 tab:mb-0 mb-8 hidden min-w-full px-4">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {feedbacksToShow.map(feedback => (
                        <div
                            key={feedback.en.name}
                            className="embla__slide tab:flex-[0_0_660px] tab:pr-3 pc:pr-5 w-full flex-[0_0_240px] pr-[14px]"
                        >
                            <FeedbackCard feedback={feedback} />
                        </div>
                    ))}
                </div>
                <div className="embla__controls tab:mt-9">
                    <div className="embla__buttons flex justify-center gap-4">
                        <PrevButton
                            black
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />

                        <NextButton
                            black
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
