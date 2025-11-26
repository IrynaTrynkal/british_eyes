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

    // useEffect(() => {
    //     if (typeof window === "undefined") return;

    //     // ==== 1. Визначення мови ====
    //     const path = window.location.pathname.toLowerCase();
    //     let lang = "ua";

    //     if (path.startsWith("/ru")) lang = "ru";
    //     else if (path.startsWith("/en")) lang = "en";
    //     else if (path.startsWith("/ua")) lang = "ua";

    //     // ==== 2. Очищення старих віджетів ====
    //     delete (window as any).BinotelChat;
    //     delete (window as any).BinotelGetCall;
    //     delete (window as any).BinotelChatSettings;
    //     delete (window as any).BinotelGetCallSettings;

    //     document
    //         .querySelectorAll('script[src*="binotel.com"]')
    //         .forEach(s => s.remove());

    //     // ==== 3. Встановлюємо мультимовність для GetCall ====
    //     (window as any).BinotelGetCallSettings = { language: lang };

    //     // ==== 4. Додаємо GetCall script ====
    //     const getcallScript = document.createElement("script");
    //     getcallScript.type = "text/javascript";
    //     getcallScript.async = true;
    //     getcallScript.src =
    //         "//widgets.binotel.com/getcall/widgets/rz5porl99lpafaaatagd.js";
    //     document.body.appendChild(getcallScript);

    //     // ==== 5. Встановлюємо мультимовність для Chat ====
    //     (window as any).BinotelChatSettings = { language: lang };

    //     // ==== 6. Додаємо Chat script ====
    //     const chatScript = document.createElement("script");
    //     chatScript.type = "text/javascript";
    //     chatScript.async = true;
    //     chatScript.src =
    //         "//widgets.binotel.com/chat/widgets/nYlU4dOMPLM1vnvhEoRB.js";
    //     document.body.appendChild(chatScript);
    // }, [locale]);

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
        ["posluhy", "uslugi", "services"].includes(segments[0])
    ) {
        slug = segments[1];
    } else if (
        segments[1] &&
        ["posluhy", "uslugi", "services"].includes(segments[1])
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
                                              pathname: "/posluhy/[slug]",
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
