import { IconLogo } from "@/components/shared/icons/IconLogo";

export const AdvantageAboutCard = ({
    ind,
    title,
    text,
}: {
    ind: number;
    title: string;
    text: string;
}) => {
    return (
        <div
            className={`tab:mr-0 tab:py-[5%] tab:px-2 pc:p-4 tab:rounded-lg relative mr-4 aspect-square h-full overflow-hidden rounded-sm p-2 ${ind === 4 ? "flex flex-col items-center justify-center" : "green-gradient text-ivory"}`}
        >
            <div className="pc:w-[295px] tab:w-[208px] relative z-[1] mx-auto w-[224px]">
                <h4
                    className={`font-oswald pc:text-xl pc:leading-6 pc:min-h-12 pc:mb-6 mb-4 min-h-10 w-[140px] leading-5 font-medium uppercase backdrop-blur-xs ${ind === 4 && "mx-auto text-center"}`}
                >
                    {title}
                </h4>
                <p
                    className={`pc:text-lg pc:leading-[22px] leading-4 ${ind === 4 && "mx-auto text-center"} `}
                >
                    {text}
                </p>
            </div>
            <IconLogo
                className={`absolute right-0 bottom-[-12px] z-[0] h-auto w-20 -rotate-45 ${ind === 4 ? "text-light-logo pc:hidden" : "text-emerald"}`}
            />
        </div>
    );
};
