import { IconClose } from "./icons/IconClose";

export const ButtonClose = ({
    small,
    className,
    onClick,
}: {
    small?: boolean;
    className?: string;
    onClick?: () => void;
}) => {
    return (
        <button
            aria-label="close button"
            className={`flex ${small ? "h-8 w-8 p-2" : "h-12 w-12 p-3"} items-center justify-center rounded-sm transition-all duration-300 ease-in-out hover:border hover:border-black ${className}`}
            onClick={onClick}
        >
            <IconClose />
        </button>
    );
};
