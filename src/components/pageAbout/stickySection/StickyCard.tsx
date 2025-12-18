import { StickyCardType } from "@/components/assets/aboutData";
import { LocaleType } from "@/types/LocaleType";

import { SliderSticky } from "./SliderSticky";
import { StickyGallery } from "./StickyGallery";

export const StickyCard = ({
    locale,
    data,
    className,
    style,
}: {
    locale: LocaleType;
    data: StickyCardType;
    className?: string;
    style?: React.CSSProperties;
}) => {
    return (
        <>
            <div
                className={`green-gradient text-ivory tab:h-12 tab:[clip-path:polygon(0_0,calc(100%-32px)_0,100%_48px,100%_100%,0_100%)] absolute top-0 left-0 h-10 w-full rounded-tl-lg px-4 py-[13px] [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,0_100%)] ${className}`}
                style={style}
            >
                <h4 className="font-oswald text-sm leading-none font-medium uppercase">
                    {data.data[locale].title}
                </h4>
            </div>
            <div
                className={
                    "bg-green-30 tab:top-12 tab:h-[calc(100%-48px)] tab:p-6 tab:pt-8 prepc:px-12 prepc:pt-[60px] prepc:flex-row prepc:justify-between absolute top-10 flex h-[calc(100%-40px)] w-full flex-col p-4"
                }
            >
                <p className="tab:mb-7 prepc:w-[24%] prepc:mb-0 prepc:max-w-[321px] mb-5 max-w-[500px] leading-5">
                    {data.data[locale].text}
                </p>
                <SliderSticky images={data.images} />
                <StickyGallery images={data.images} />
            </div>
        </>
    );
};
