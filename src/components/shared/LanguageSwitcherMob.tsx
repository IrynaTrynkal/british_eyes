"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { Link } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";
import { LocaleType } from "@/types/LocaleType";

import { servicesList } from "../assets/menu";

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

    const cleanPath = pathName.replace(/^\/(uk|en|ru)/, "");
    const segments = pathName.split("/").filter(Boolean);
    let slug: string | undefined;

    if (
        segments[0] &&
        ["poslugy", "uslugi", "services"].includes(segments[0])
    ) {
        slug = segments[1];
    } else if (
        segments[1] &&
        ["poslugy", "uslugi", "services"].includes(segments[1])
    ) {
        slug = segments[2];
    }

    return (
        <div className="font-oswald relative font-medium">
            <ul className="text-grey w-full">
                {locales.map(curLocale => {
                    const localizedSlug = slug
                        ? servicesList.find(service =>
                              Object.values(service.slug).includes(slug)
                          )?.slug[curLocale as LocaleType]
                        : undefined;
                    return (
                        <li key={curLocale} className="mb-2">
                            <Link
                                href={
                                    slug
                                        ? ({
                                              pathname: "/poslugy/[slug]",
                                              params: { slug: localizedSlug },
                                              search: searchParams.toString(),
                                              hash,
                                          } as any)
                                        : ({
                                              pathname: cleanPath || "/",
                                              search: searchParams.toString(),
                                              hash,
                                          } as any)
                                }
                                replace
                                locale={curLocale}
                                scroll={false}
                                className={`font-oswald font-medium uppercase ${
                                    curLocale === locale
                                        ? "pointer-events-none text-black underline"
                                        : "text-grey transition-all duration-[300ms] ease-in-out hover:underline"
                                }`}
                            >
                                {curLocale === "uk" ? "ua" : curLocale}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
