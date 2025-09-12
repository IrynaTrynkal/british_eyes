import { Link } from "@/i18n/navigation";

import { IconLogo } from "./icons/IconLogo";

export const Logo = () => {
    return (
        <Link
            href={"/" as any}
            onClick={e => {
                const target = e.currentTarget;
                setTimeout(() => target.blur(), 1000);
            }}
            className="group tab:h-12 tab:w-12 tab:focus:border tab:focus-visible:border flex h-[31px] w-[30px] items-center justify-center rounded-sm border-black"
        >
            <IconLogo className="text-emerald relative z-10 h-[31px] w-[30px] transition-transform duration-300 ease-in-out group-hover:scale-[137%] group-focus:scale-100" />
        </Link>
    );
};
