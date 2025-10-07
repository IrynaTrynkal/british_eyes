import { notFound } from "next/navigation";

import { feedbacksList } from "@/components/assets/feedbacksData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";
import { LocaleType } from "@/types/LocaleType";

interface SubpageProps {
    params: Promise<{ locale: string; subpage: string }>;
}

export default async function LaserSubpage({ params }: SubpageProps) {
    const { locale, subpage } = await params;

    // 👉 Ти можеш винести ці дані в окремий файл (наприклад `laserMethodsData.ts`)
    const subpageData: Record<
        string,
        {
            key: string;
            title: Record<LocaleType, string>;
            text: Record<LocaleType, string>;
        }
    > = {
        "sportlife-lasik": {
            key: "sportlife-lasik",
            title: {
                uk: "Метод LASEK",
                ru: "Метод LASEK",
                en: "LASEK Method",
            },
            text: {
                uk: "LASEK — один з найпоширеніших методів лазерної корекції зору...",
                ru: "LASEK — один из самых распространённых методов лазерной коррекции зрения...",
                en: "LASEK is one of the most common laser vision correction methods...",
            },
        },
        "iq-lasik-oxygen-3d": {
            key: "iq-lasik-oxygen-3d",
            title: {
                uk: "IQ-LASIK Oxygen 3D",
                ru: "IQ-LASIK Oxygen 3D",
                en: "IQ-LASIK Oxygen 3D",
            },
            text: {
                uk: "Сучасна технологія малоінвазивної корекції зору...",
                ru: "Современная технология малоинвазивной коррекции зрения...",
                en: "A modern, minimally invasive vision correction technology...",
            },
        },
    };

    const currentMethod = subpageData[subpage];

    if (!currentMethod) {
        notFound();
    }

    const breadcrumb = [
        { name: "poslugy", href: "/poslugy" },
        {
            name: "lazerna-korekcziya-zoru",
            href: "/poslugy/lazerna-korekcziya-zoru",
        },
        {
            name: currentMethod.key,
            href: `/poslugy/lazerna-korekcziya-zoru/${currentMethod.key}`,
        },
    ];

    const feedbackList = feedbacksList.filter(
        fb => fb.service === "lazerna-korekcziya-zoru"
    );

    return (
        <>
            <div className="content py-24">
                <Breadcrumbs breadcrumbsList={breadcrumb} />

                <h1 className="mb-6 text-4xl font-bold">
                    {currentMethod.title[locale as LocaleType]}
                </h1>
                <p className="mb-12 text-lg leading-relaxed">
                    {currentMethod.text[locale as LocaleType]}
                </p>
            </div>

            {feedbackList.length > 0 && (
                <FeedbackSection list={feedbackList} slideAmount={4} />
            )}

            <Booking />
        </>
    );
}
