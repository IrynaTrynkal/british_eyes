"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { advantagesList } from "@/components/assets/advantagesData";
import { discountList } from "@/components/assets/discount.Data";
import { useDotButton } from "@/components/shared/slider/SliderDots";
import { SliderDotsBox } from "@/components/shared/slider/SliderDotsBox";
import { LocaleType } from "@/types/LocaleType";

import { DiscountCard } from "./DiscountCard";

export const DiscountSlider = () => {
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

            // падінги секції
            let sectionPadding = 0;
            if (windowWidth >= 1440)
                sectionPadding = 48 * 2; // ліво+право
            else if (windowWidth >= 768) sectionPadding = 24 * 2;

            const availableWidth = windowWidth - sectionPadding;

            // ширина картки + відступ праворуч
            const cardWidth = 433 + 22; // 455
            const totalCardsWidth = discountList.length * cardWidth - 22;

            if (windowWidth < 768) {
                // мобілка — завжди показуємо крапки якщо більше 1 акції
                setShowDots(discountList.length > 1);
            } else {
                // tablet+ — тільки якщо не влазять усі картки
                setShowDots(totalCardsWidth > availableWidth);
            }
        };

        updateDots();
        window.addEventListener("resize", updateDots);
        return () => window.removeEventListener("resize", updateDots);
    }, []);

    const locale = useLocale();

    return (
        <div className="embla relative mx-auto w-full max-w-[1344px]">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {discountList.map(disc => (
                        <div
                            key={disc.localeText[locale as LocaleType].title}
                            className="embla__slide w-full flex-[0_0_280px]"
                        >
                            <DiscountCard data={disc} />
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
