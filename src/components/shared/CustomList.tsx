export const CustomList = ({
    list,
    className,
}: {
    list: string[];
    className?: string;
}) => {
    return (
        <ul className={`${className} flex flex-wrap gap-2`}>
            {list.map(item => (
                <li
                    key={item}
                    className="bg-white-100/10 border-ivory flex w-fit items-center gap-2.5 rounded-lg border px-3 py-1.5"
                >
                    <div className="bg-ivory h-1.5 w-1.5 shrink-0 rounded-xs" />
                    <p className="text-ivory prepc:text-base font-oswald text-sm leading-none uppercase">
                        {item}
                    </p>
                </li>
            ))}
        </ul>
    );
};
