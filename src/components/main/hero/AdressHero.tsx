import Image from "next/image";

import { gogleMapLink } from "@/components/assets/contacts";
import { IconArrow } from "@/components/shared/icons/IconArrow";

export const AdressHero = ({
    textAdress,
    text,
    className,
}: {
    text: string;
    textAdress: string;
    className?: string;
}) => {
    return (
        <div
            className={`group mb-[150px] w-[174px] overflow-hidden rounded-sm bg-white/10 px-2 py-1 backdrop-blur-sm ${className}`}
        >
            <a
                href={gogleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory tab:flex tab:text-base tab:aspect-[240/84] block text-sm leading-none font-medium whitespace-pre-line uppercase"
            >
                <div className="h-full w-[107px] overflow-hidden">
                    <Image
                        src="/images/hero-map.jpg"
                        alt="piece of map"
                        width={214}
                        height={118}
                        className="tab:block hidden h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                    />
                </div>
                <div className="tab:p-2 pc:p-3 tab:flex tab:flex-col tab:justify-between">
                    <p className="tab:leading-none">{textAdress}</p>
                    <div className="tab:flex tab:items-center pc:gap-2 hidden">
                        <IconArrow className="pc:h-4 pc:w-4 tab:w-3.5 tab:h-3.5 transition-all duration-300 group-hover:mr-0 group-hover:translate-x-1" />
                        <p className="tab:text-sm font-oswald relative">
                            {text}
                            <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-full origin-right bg-current transition-transform duration-500 ease-in-out group-hover:scale-x-[0.1]" />{" "}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
};
