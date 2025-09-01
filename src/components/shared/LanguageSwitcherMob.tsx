"use client";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";

export default function LanguageSwitcherMob() {
    const locale = useLocale();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const [hash, setHash] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHash(window.location.hash);
        }
    }, [pathName, searchParams]);

    return (
        <div className="font-oswald relative font-medium">
            <ul className="text-grey mt-2 w-full">
                {locales.map(curLocale => (
                    <li key={curLocale} className="mb-2">
                        <Link
                            href={{
                                hash: hash,
                                search: searchParams.toString(),
                                pathname: pathName,
                            }}
                            replace
                            locale={curLocale}
                            scroll={false}
                            className={`font-oswald font-medium uppercase ${
                                curLocale === locale
                                    ? "pointer-events-none text-black underline"
                                    : "text-grey transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:underline"
                            }`}
                        >
                            {curLocale === "uk" ? "ua" : curLocale}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
