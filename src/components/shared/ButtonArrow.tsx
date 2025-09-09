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
            className={`${className} border-ivory pc:h-11 pc:w-11 flex h-8 w-8 items-center justify-center rounded-sm border p-2 transition-all duration-300 ease-in-out hover:border-black ${white ? "text-ivory hover:bg-black" : "hover:text-ivory text-black hover:bg-black"}`}
            onClick={onClick}
        >
            <IconArrow />
        </button>
    );
};
