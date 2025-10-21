"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { advantagesList } from "@/components/assets/advantagesData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "@/components/shared/slider/CarouselButtons";
import { useDotButton } from "@/components/shared/slider/SliderDots";
import { SliderDotsBox } from "@/components/shared/slider/SliderDotsBox";

import { Gift } from "./Gift";
import { PartPayments } from "./PartPayments";

export const SliderGiftPayment = () => {
    const options: EmblaOptionsType = {
        loop: true,
        align: "start",
    };
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const list = [<Gift />, <PartPayments />, <Gift />, <PartPayments />];

    return (
        <div className="embla tab:hidden relative mx-auto mb-8 max-w-[540px]">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {list.map((item, ind) => (
                        <div
                            key={ind}
                            className="embla__slide w-full flex-[0_0_304px] pr-4"
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="embla__controls mt-8 pr-4">
                    <div className="embla__buttons text-ivory flex justify-between gap-4">
                        <PrevButton
                            black
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <SliderDotsBox
                            scrollSnaps={scrollSnaps}
                            selectedIndex={selectedIndex}
                            sliders={advantagesList}
                            onDotButtonClick={onDotButtonClick}
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
