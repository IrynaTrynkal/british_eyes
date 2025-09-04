import { Link } from "@/i18n/navigation";

import { IconLogo } from "./icons/IconLogo";

export const Logo = () => {
    return (
        <Link
            href="/"
            onClick={e => {
                const target = e.currentTarget;
                setTimeout(() => target.blur(), 1000);
            }}
            className="group tab:h-12 tab:w-12 flex items-center justify-center rounded-sm border-black focus:border focus-visible:border"
        >
            <IconLogo className="relative z-10 w-[30px] transition-transform duration-300 ease-in-out group-hover:scale-[137%] group-focus:scale-100" />
        </Link>
    );
};
