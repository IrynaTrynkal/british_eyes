"use client";
import { EmblaCarouselType } from "embla-carousel";
import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useState,
} from "react";

import { IconArrow } from "../icons/IconArrow";

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

type ButtonType = PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
>;

export const PrevButton: React.FC<ButtonType> = props => {
    const { disabled, ...restProps } = props;

    return (
        <button
            disabled={disabled}
            aria-label="show previous slide button"
            className="embla__button--prev group relative flex h-12 w-12 rotate-180 items-center justify-center"
            type="button"
            {...restProps}
        >
            <IconArrow />
        </button>
    );
};

export const NextButton: React.FC<ButtonType> = props => {
    const { disabled, ...restProps } = props;

    return (
        <button
            disabled={disabled}
            aria-label="show next slide button"
            className="embla__button--prev group flex h-12 w-12 items-center justify-center"
            type="button"
            {...restProps}
        >
            <IconArrow />
        </button>
    );
};
