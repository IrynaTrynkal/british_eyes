"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";

import { advantagesList } from "@/components/assets/advantagesData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "@/components/shared/slider/CarouselButtons";
import { useDotButton } from "@/components/shared/slider/SliderDots";
import { SliderDotsBox } from "@/components/shared/slider/SliderDotsBox";
import { LocaleType } from "@/types/LocaleType";

import { AdvantageCard } from "./AdvantageCard";

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

    return (
        <div className="embla tab:hidden relative min-w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {advantagesList.map((advantage, ind) => (
                        <div
                            key={advantage.en.title}
                            className="embla__slide w-full flex-[0_0_240px]"
                        >
                            <AdvantageCard
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
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
