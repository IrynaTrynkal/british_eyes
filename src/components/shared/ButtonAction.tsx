export const ButtonAction = ({
    secondary,
    mob,
    header,
    small,
    name,
    onClick,
    className,
}: {
    secondary?: boolean;
    mob?: boolean;
    header?: boolean;
    small?: boolean;
    className?: string;
    name: string;
    onClick?: () => void;
}) => {
    return (
        <button
            className={`font-oswald flex items-center justify-center rounded-sm border border-black font-medium uppercase transition-all duration-300 ease-in-out ${secondary ? `hover:text-ivory shadow-button hover:translate-y-1 hover:bg-black hover:shadow-none active:translate-y-1 active:shadow-none ${mob ? "h-10" : "h-11"} ${mob ? (small ? "w-[140px]" : "w-[288px]") : "w-[200px]"}` : `text-ivory hover:bg-ivory active:bg-ivory hover:shadow-button bg-black hover:scale-[0.99] hover:text-black active:translate-y-[2px] active:scale-[0.99] active:text-black active:shadow-none ${mob ? (header ? "h-8" : "h-11") : "h-12"} ${mob ? (header ? "w-[132px]" : small ? "w-[140px]" : "w-[288px]") : "w-[200px]"} `} ${className}`}
            onClick={onClick}
        >
            {name}
        </button>
    );
};
