import Image from "next/image";

import { gogleMapLink } from "@/components/assets/contacts";

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
            className={`mb-[150px] w-[174px] overflow-hidden rounded-sm bg-white/10 px-2 py-1 backdrop-blur-sm ${className}`}
        >
            <a
                href={gogleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory tab:flex tab:text-base block text-sm leading-none font-medium whitespace-pre-line uppercase"
            >
                <Image
                    src="/images/hero-map.jpg"
                    alt="piece of map"
                    width={214}
                    height={118}
                    className="tab:block hidden h-auto w-[107px]"
                />
                <div className="tab:px-3 tab:pt-3 tab:pb-1.5">
                    <p className="tab:mb-[18px]">{textAdress}</p>
                    <p className="pc:block font-oswald hidden underline decoration-[1.5px] underline-offset-[2.5px]">
                        {text}
                    </p>
                </div>
            </a>
        </div>
    );
};
