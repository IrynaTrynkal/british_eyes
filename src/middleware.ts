import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

export function middleware(req: NextRequest) {
    const url = new URL(req.url);
    const path = decodeURIComponent(url.pathname);

    const oldLaserSlugs = [
        "/posluhy/лазерна-корекція-зору",
        "/posluhy/лазерна-корекція-зору/iq-lasik-oxygen-3d",
        "/posluhy/лазерна-корекція-зору/sportlife-lasik",
    ];

    const oldCataractSlugs = [
        "/posluhy/лікування-катаракти",
        "/posluhy/лікування-катаракти/iq-5-minutes",
    ];

    if (oldLaserSlugs.includes(path)) {
        return NextResponse.redirect(
            new URL("/posluhy/lazerna-korekcziya-zoru", url.origin)
        );
    }

    if (oldCataractSlugs.includes(path)) {
        return NextResponse.redirect(
            new URL("/posluhy/likuvannya-katarakti", url.origin)
        );
    }
    if (path === "/posluhy/вітреоретинальна-хірургія") {
        return NextResponse.redirect(
            new URL("/posluhy/vitreoretinalna-hirurgiya", url.origin)
        );
    }

    if (path === "/posluhy/рефракційна-ленсектомія") {
        return NextResponse.redirect(
            new URL("/posluhy/refrakczijna-lensektomiya", url.origin)
        );
    }
    const oldEyeSlugs: Record<string, string> = {
        "/zakhvoryuvannya-ochey/астигматизм":
            "/zakhvoryuvannya-ochey/astigmatizm",
        "/zakhvoryuvannya-ochey/далекозорість":
            "/zakhvoryuvannya-ochey/dalekozorist",
        "/zakhvoryuvannya-ochey/катаракта": "/zakhvoryuvannya-ochey/katarakta",
        "/zakhvoryuvannya-ochey/короткозорість-міопія":
            "/zakhvoryuvannya-ochey/korotkozorist-miopiya",
        "/zakhvoryuvannya-ochey/косоокість": "/zakhvoryuvannya-ochey/kosookist",
    };

    if (path in oldEyeSlugs) {
        return NextResponse.redirect(new URL(oldEyeSlugs[path], url.origin));
    }

    return createMiddleware(routing)(req);
}

export const config = {
    matcher: ["/((?!api|trpc|_next|_vercel|studio|.*\\..*).*)"],
};
