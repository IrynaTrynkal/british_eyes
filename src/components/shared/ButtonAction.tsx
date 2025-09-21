export const ButtonAction = ({
    type = "button",
    secondary,
    header,
    small,
    name,
    onClick,
    className,
}: {
    type?: "button" | "submit" | "reset";
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
            type={type}
            className={`font-oswald flex items-center justify-center rounded-sm border border-black font-medium uppercase transition-all duration-300 ease-in-out ${secondary ? `hover:text-ivory shadow-button tab:h-11 h-10 hover:translate-y-1 hover:bg-black hover:shadow-none active:translate-y-1 active:shadow-none ${small ? "pc:w-[200px] w-[140px]" : "pc:w-[200px] w-[288px]"}` : `text-ivory hover:bg-ivory active:bg-ivory hover:shadow-button bg-black hover:scale-[0.99] hover:text-black active:translate-y-[2px] active:scale-[0.99] active:text-black active:shadow-none ${header ? "pc:h-12 h-8" : "pc:h-12 h-11"} ${header ? "pc:w-[200px] w-[132px]" : small ? "tab:w-[200px] w-[140px]" : "pc:w-[200px] w-[288px]"} `} ${className}`}
            onClick={onClick}
        >
            {name}
        </button>
    );
};
