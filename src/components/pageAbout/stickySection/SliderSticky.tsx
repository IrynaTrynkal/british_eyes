"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { advantagesList } from "@/components/assets/advantagesData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "@/components/shared/slider/CarouselButtons";
import { useDotButton } from "@/components/shared/slider/SliderDots";
import { SliderDotsBox } from "@/components/shared/slider/SliderDotsBox";

export const SliderSticky = ({ images }: { images: string[] }) => {
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

    const chunkedImages = [];
    for (let i = 0; i < images.length; i += 2) {
        chunkedImages.push(images.slice(i, i + 2));
    }

    return (
        <div className="embla tab:hidden mb-8 min-w-full px-0">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {chunkedImages.map((pair, ind) => (
                        <div
                            key={ind}
                            className="embla__slide flex-[0_0_100%] px-0.5"
                        >
                            <div className="flex flex-col gap-4">
                                {pair.map(img => (
                                    <div
                                        key={img}
                                        className="mx-auto aspect-[288/160] max-w-[300px] overflow-hidden"
                                    >
                                        <Image
                                            src={img}
                                            alt={img}
                                            width={400}
                                            height={300}
                                            className="h-auto w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="embla__controls tab:absolute tab:bottom-0 pc:bottom-[14px] tab:right-0 mt-4">
                    <div className="embla__buttons mx-auto flex max-w-[300px] justify-between gap-4 text-black">
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
