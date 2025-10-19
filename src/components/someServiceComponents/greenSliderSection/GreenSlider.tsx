"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { advantagesList } from "@/components/assets/advantagesData";
import { TitleTextType } from "@/components/assets/servicesData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "@/components/shared/slider/CarouselButtons";
import { useDotButton } from "@/components/shared/slider/SliderDots";
import { SliderDotsBox } from "@/components/shared/slider/SliderDotsBox";

import { GreenSliderCard } from "./GreenSliderCard";

export const GreenSlider = ({ list }: { list: TitleTextType[] }) => {
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
        <div className="embla tab:mb-0 relative mb-8 min-w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {list.map(item => (
                        <div
                            key={item.title}
                            className="embla__slide prepc:flex-[0_0_296px] pc:flex-[0_0_340px] w-full flex-[0_0_276px]"
                        >
                            <GreenSliderCard
                                text={item.text}
                                title={item.title}
                            />
                        </div>
                    ))}
                </div>
                <div className="embla__controls mt-8">
                    <div className="embla__buttons text-ivory flex justify-between gap-4">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <SliderDotsBox
                            tabVisible
                            ivory
                            scrollSnaps={scrollSnaps}
                            selectedIndex={selectedIndex}
                            sliders={advantagesList}
                            onDotButtonClick={onDotButtonClick}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
