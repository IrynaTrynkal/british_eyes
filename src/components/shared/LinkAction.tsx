import { Link } from "@/i18n/navigation";

export const LinkAction = ({
    ivory,
    secondary,
    header,
    small,
    name,
    href,
    className,
    download,
}: {
    ivory?: boolean;
    secondary?: boolean;
    header?: boolean;
    small?: boolean;
    className?: string;
    name: string;
    href: string;
    download?: string;
}) => {
    return (
        <Link
            href={href as any}
            download={download}
            className={`font-oswald flex items-center justify-center rounded-sm border ${ivory ? "border-ivory" : "border-black"} font-medium uppercase transition-all duration-300 ease-in-out ${secondary ? ` ${ivory ? "text-ivory hover:bg-ivory active:bg-ivory shadow-button-ivory bg-white-100/10 hover:text-black active:text-black" : "hover:text-ivory bg-white-100/10 active:text-ivory shadow-button hover:bg-black active:bg-black"} tab:h-11 h-10 hover:translate-y-1 hover:shadow-none active:translate-y-1 active:shadow-none ${small ? "tab:w-[200px] w-[140px]" : "tab:w-[200px] w-[288px]"}` : `text-ivory hover:bg-ivory active:bg-ivory hover:shadow-button bg-black hover:scale-[0.99] hover:text-black active:translate-y-[2px] active:scale-[0.99] active:text-black active:shadow-none ${header ? "tab:h-12 h-8" : "tab:h-12 h-11"} ${header ? "tab:w-[200px] w-[132px]" : small ? "tab:w-[200px] w-[140px]" : "tab:w-[200px] w-[288px]"} `} ${className}`}
        >
            {name}
        </Link>
    );
};
