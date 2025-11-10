import "./globals.css";

import { Arimo, Oswald } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
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

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            languages: {
                "en-US": "/en",
                "uk-UA": "/",
                "ru-Ru": "/ru",
            },
        },
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
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
    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta property="og:image" content="<generated>" />
            </head>
            <NextIntlClientProvider>
                <body
                    className={`${oswald.variable} ${arimo.variable} mx-auto flex min-h-screen max-w-[1600px] flex-col antialiased`}
                >
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
