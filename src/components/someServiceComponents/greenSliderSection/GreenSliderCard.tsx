export const GreenSliderCard = ({
    title,
    text,
}: {
    title: string;
    text: string;
}) => {
    return (
        <div
            className={
                "bg-white-100/10 prepc:p-4 tab:p-3 tab:rounded-lg pc:mr-5 relative mr-4 aspect-square h-full overflow-hidden rounded-sm p-2"
            }
        >
            <h4
                className={
                    "font-oswald text-ivory pc:text-xl pc:leading-6 pc:mb-6 mb-4 leading-5 font-medium uppercase backdrop-blur-xs"
                }
            >
                {title}
            </h4>
            <p
                className={
                    "pc:text-lg text-ivory pc:leading-[22px] tab:line-clamp-[12] line-clamp-[11] [display:-webkit-box] overflow-hidden leading-4 break-words whitespace-pre-line"
                }
            >
                {text}
            </p>
        </div>
    );
};
