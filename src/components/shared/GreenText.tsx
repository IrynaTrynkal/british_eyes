export const GreenText = ({
    text,
    grey,
    className,
}: {
    text: string | React.ReactNode;
    grey?: boolean;
    className?: string;
}) => {
    return (
        <div
            className={`text-emerald font-oswald ${grey ? "border-grey" : "border-emerald"} border-emerald border-l pl-2 leading-5 ${className}`}
        >
            {text}
        </div>
    );
};
