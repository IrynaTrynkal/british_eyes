export const Fraction = ({
    textUp,
    textDown,
    className,
    ivory,
}: {
    textUp: string | React.ReactNode;
    className?: string;
    textDown: string | React.ReactNode;
    ivory?: boolean;
}) => {
    return (
        <div
            className={`pc:gap-2 flex flex-col gap-1 ${ivory ? "text-ivory" : "text-black"} ${className}`}
        >
            <p className="font-oswald pc:text-5xl prepc:text-2xl text-center text-xl leading-none font-medium uppercase">
                {textUp}
            </p>
            <div
                className={`h-[1px] w-full ${ivory ? "bg-ivory/50" : "bg-black/50"}`}
            />
            <p className="tab:text-sm pc:text-base text-center text-xs leading-none whitespace-pre-line uppercase">
                {textDown}
            </p>
        </div>
    );
};
