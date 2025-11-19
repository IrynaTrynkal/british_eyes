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

import { DoctorsOrderQueryResult } from "../../../../sanity.types";
import { DoctorCard } from "./DoctorCard";

export const DoctorsSlider = ({
    doctors,
}: {
    doctors: DoctorsOrderQueryResult;
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
        <div className="embla tab:px-0 tab:mb-0 mb-8 min-w-full px-4">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {doctors &&
                        doctors.map(doctor => (
                            <div
                                key={doctor.name}
                                className="embla__slide tab:flex-[0_0_250px] tab:pr-3 pc:pr-5 w-full flex-[0_0_240px] pr-[14px]"
                            >
                                <DoctorCard data={doctor} />
                            </div>
                        ))}
                </div>
                <div className="embla__controls tab:absolute tab:bottom-0 pc:bottom-[14px] tab:right-0 mt-4">
                    <div className="embla__buttons text-ivory flex justify-between gap-4">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <SliderDotsBox
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
