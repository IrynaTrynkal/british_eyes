import { IconArrow } from "./icons/IconArrow";

export const ButtonArrow = ({
    className,
    onClick,
    white,
}: {
    className?: string;
    onClick?: () => void;
    white?: boolean;
}) => {
    return (
        <button
            className={`${className} border-ivory pc:h-11 pc:w-11 flex h-8 w-8 items-center justify-center rounded-sm border p-2 transition-all duration-300 ease-in-out group-hover:border-black hover:border-black ${white ? "text-ivory group-hover:bg-black hover:bg-black" : "hover:text-ivory group-hover:text-ivory text-black group-hover:bg-black hover:bg-black"}`}
            onClick={onClick}
        >
            <IconArrow />
        </button>
    );
};
