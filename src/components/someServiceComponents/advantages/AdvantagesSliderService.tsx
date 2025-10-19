"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { advantagesList } from "@/components/assets/advantagesData";
import { AdvantageServiceCardProps } from "@/components/assets/servicesData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "@/components/shared/slider/CarouselButtons";
import { useDotButton } from "@/components/shared/slider/SliderDots";
import { SliderDotsBox } from "@/components/shared/slider/SliderDotsBox";

import { AdvantageServiceCard } from "./AdvantageServiceCard";

export const AdvantagesSliderService = ({
    list,
}: {
    list: AdvantageServiceCardProps[];
}) => {
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

    return (
        <div className="embla tab:hidden relative min-w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {list.map(advantage => (
                        <div
                            key={
                                advantage.title
                                    ? advantage.title
                                    : advantage.videoOnly
                                      ? advantage.videoOnly
                                      : advantage.imageOnly
                            }
                            className="embla__slide w-full flex-[0_0_256px] pr-4"
                        >
                            <AdvantageServiceCard data={advantage} />
                        </div>
                    ))}
                </div>
                <div className="embla__controls mt-[16px]">
                    <div className="embla__buttons flex justify-between gap-4">
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
