"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import { advantagesList } from "@/components/assets/advantagesData";
import { useDotButton } from "@/components/shared/slider/SliderDots";
import { SliderDotsBox } from "@/components/shared/slider/SliderDotsBox";

import { ServicesKey } from "../../../../sanity.types";
import { DiscountCard } from "./DiscountCard";

type Props = Array<{
    servicesKey: ServicesKey | null;
    title: string | null;
    discountShortData: {
        bgimage: string | null;
        icon: string | null;
        premium: boolean | null;
        premiumText: string | null;
        shortText: string | null;
        period: string | null;
        cost: number | null;
        learnMore: boolean | null;
    } | null;
}>;

export const DiscountSlider = ({ list }: { list: Props }) => {
    const options: EmblaOptionsType = {
        loop: true,
        align: "start",
    };
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    const [showDots, setShowDots] = useState(false);

    useEffect(() => {
        const updateDots = () => {
            const windowWidth = window.innerWidth;

            let sectionPadding = 0;
            if (windowWidth >= 1440) sectionPadding = 48 * 2;
            else if (windowWidth >= 768 && windowWidth < 1439)
                sectionPadding = 24 * 2;

            const availableWidth = windowWidth - sectionPadding;

            const cardWidth = 433 + 22;
            const totalCardsWidth = list.length * cardWidth - 22;

            if (windowWidth < 768) {
                setShowDots(list.length > 1);
            } else {
                setShowDots(totalCardsWidth > availableWidth);
            }
        };

        updateDots();
        window.addEventListener("resize", updateDots);
        return () => window.removeEventListener("resize", updateDots);
    }, [list.length]);

    return (
        <div className="embla relative mx-auto w-full max-w-[1344px]">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {list &&
                        list.map(item => (
                            <div
                                key={item.title}
                                className="embla__slide w-full flex-[0_0_280px]"
                            >
                                <DiscountCard data={item} />
                            </div>
                        ))}
                </div>
                {showDots && (
                    <div className="embla__controls tab:mt-6 mt-4">
                        <div className="embla__buttons flex justify-center gap-4">
                            <SliderDotsBox
                                tabVisible
                                scrollSnaps={scrollSnaps}
                                selectedIndex={selectedIndex}
                                sliders={advantagesList}
                                onDotButtonClick={onDotButtonClick}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
