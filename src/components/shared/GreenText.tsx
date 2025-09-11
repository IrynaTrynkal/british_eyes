export const GreenText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    return (
        <div
            className={`text-emerald font-oswald border-emerald border-l pl-2 leading-5 ${className}`}
        >
            {text}
        </div>
    );
};
