"use client";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";

import { IconChevron } from "./icons/IconChevron";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const [hash, setHash] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHash(window.location.hash);
        }
    }, [pathName, searchParams]);
    const otherLocales = locales.filter(l => l !== locale);

    const renderLabel = (lang: string) => (lang === "uk" ? "ua" : lang);

    return (
        <div className="font-oswald relative font-medium">
            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                className="flex cursor-pointer items-center underline"
            >
                <span className="uppercase">{renderLabel(locale)}</span>
                <div className="flex h-6 w-6 items-center justify-center">
                    <IconChevron className="text-emerald" />
                </div>
            </button>

            {open && (
                <ul className="text-grey bg-ivory absolute z-10 mt-2 w-full">
                    {otherLocales.map(curLocale => (
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
                                className="block px-3 py-[3px] uppercase transition hover:underline"
                                onClick={() => setOpen(false)}
                            >
                                {renderLabel(curLocale)}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
