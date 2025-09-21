import { SliderDots } from "./SliderDots";

interface SliderDotsBoxProps {
    ivory?: boolean;
    tabVisible?: boolean;
    scrollSnaps: number[];
    selectedIndex: number;
    onDotButtonClick: (index: number) => void;
}

export const SliderDotsBox = <T,>({
    ivory,
    tabVisible,
    scrollSnaps,
    selectedIndex,
    sliders,
    onDotButtonClick,
}: SliderDotsBoxProps & { sliders: T[] }) => {
    return (
        <div
            className={`embla__dots flex items-center gap-3 ${tabVisible ? "" : "tab:hidden"}`}
        >
            {scrollSnaps.map((_, index) => (
                <SliderDots
                    key={index}
                    style={{
                        display:
                            selectedIndex === 0
                                ? index === selectedIndex + 2
                                    ? "flex"
                                    : ""
                                : selectedIndex === sliders.length - 1
                                  ? index === selectedIndex - 2
                                      ? "flex"
                                      : ""
                                  : selectedIndex === index ||
                                      selectedIndex - 1 === index ||
                                      selectedIndex + 1 === index
                                    ? "flex"
                                    : "",
                    }}
                    onClick={() => onDotButtonClick(index)}
                    className={`${ivory ? "slider-dot-ivory" : "slider-dot"} ${
                        index === selectedIndex
                            ? `${ivory ? "slider-dot-ivory--selected" : "slider-dot--selected"}`
                            : ""
                    } ${index > selectedIndex + 1 || index < selectedIndex - 1 ? "hidden" : ""} `}
                />
            ))}
        </div>
    );
};
