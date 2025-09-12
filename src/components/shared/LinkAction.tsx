import { Link } from "@/i18n/navigation";

export const LinkAction = ({
    secondary,
    header,
    small,
    name,
    href,
    className,
}: {
    secondary?: boolean;
    header?: boolean;
    small?: boolean;
    className?: string;
    name: string;
    href: string;
}) => {
    return (
        <Link
            href={href as any}
            className={`font-oswald flex items-center justify-center rounded-sm border border-black font-medium uppercase transition-all duration-300 ease-in-out ${secondary ? `hover:text-ivory shadow-button tab:h-11 h-10 hover:translate-y-1 hover:bg-black hover:shadow-none active:translate-y-1 active:shadow-none ${small ? "pc:w-[200px] w-[140px]" : "pc:w-[200px] w-[288px]"}` : `text-ivory hover:bg-ivory active:bg-ivory hover:shadow-button bg-black hover:scale-[0.99] hover:text-black active:translate-y-[2px] active:scale-[0.99] active:text-black active:shadow-none ${header ? "pc:h-12 h-8" : "pc:h-12 h-11"} ${header ? "pc:w-[200px] w-[132px]" : small ? "pc:w-[200px] w-[140px]" : "pc:w-[200px] w-[288px]"} `} ${className}`}
        >
            {name}
        </Link>
    );
};
