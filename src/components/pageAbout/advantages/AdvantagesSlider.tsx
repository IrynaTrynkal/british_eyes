"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";

import {
    advantagesAboutList,
    advantagesList,
} from "@/components/assets/advantagesData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "@/components/shared/slider/CarouselButtons";
import { useDotButton } from "@/components/shared/slider/SliderDots";
import { SliderDotsBox } from "@/components/shared/slider/SliderDotsBox";
import { LocaleType } from "@/types/LocaleType";

import { AdvantageAboutCard } from "./AdvantageCard";

export const AdvantagesSlider = () => {
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

    const locale = useLocale();
    const mobAdvantagesAboutList = advantagesAboutList.filter(
        (_, index) => index !== 2
    );

    return (
        <div className="embla tab:hidden relative min-w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {mobAdvantagesAboutList.map((advantage, ind) => (
                        <div
                            key={advantage.en.title}
                            className="embla__slide w-full flex-[0_0_240px]"
                        >
                            <AdvantageAboutCard
                                text={advantage[locale as LocaleType].text}
                                title={advantage[locale as LocaleType].title}
                                ind={ind}
                            />
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
