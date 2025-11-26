import "./globals.css";
import "./wbinotel.css";

import { Arimo, Oswald } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { BinotelChat } from "@/components/shared/BinotelChat";
import { routing } from "@/i18n/routing";

const oswald = Oswald({
    variable: "--font-oswald",
    subsets: ["latin"],
});

const arimo = Arimo({
    variable: "--font-arimo",
    subsets: ["latin"],
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;
    const t = await getTranslations({ locale, namespace: "HomePage" });
    const langPrefix = locale === "en" ? "/en" : locale === "ru" ? "/ru" : "/";

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: langPrefix,
            languages: {
                "en-US": "/en",
                "uk-UA": "/",
                "ru-RU": "/ru",
            },
        },
        title: t("titleSEO"),
        description: t("descriptionSEO"),
        openGraph: {
            title: t("titleSEO"),
            description: t("descriptionSEO"),
            type: "website",
        },
    };
}

export function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}
export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    // const GAid = process.env.GA_ID || "";
    // const GATM = process.env.GTM_ID || "";
    // const GoogleAdsId = process.env.GOOGLE_ADS_ID || "";
    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta property="og:image" content="<generated>" />
                {/* <GoogleAds GoogleAdsId={GoogleAdsId} /> */}
                <meta name="robots" content="noindex,nofollow" />
            </head>
            {/* <GoogleTagManager gtmId={GATM} /> */}
            <NextIntlClientProvider>
                <body
                    className={`${oswald.variable} ${arimo.variable} flex min-h-screen flex-col antialiased`}
                >
                    <Header />
                    <main className="flex-1">
                        <div className="mx-auto max-w-[1600px]">{children}</div>
                    </main>
                    <Footer />
                    <BinotelChat />
                    {/* <GoogleAnalytics gaId={GAid} /> */}
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
