import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { subpageData } from "@/components/assets/laserMethodsData";
import { BookingOnlineForm } from "@/components/shared/booking/BookingOnlineForm";
import { ModalPage } from "@/components/shared/ModalPage";
import { LocaleType } from "@/types/LocaleType";

interface SubpageProps {
    params: Promise<{ locale: string; subpage: string }>;
}

export default async function LaserSubpage({ params }: SubpageProps) {
    const { locale, subpage } = await params;
    const t = await getTranslations({ locale, namespace: "Menu" });
    const currentMethod = subpageData[subpage];

    if (!currentMethod) {
        notFound();
    }

    return (
        <ModalPage lazer>
            <section className="py-3">
                <div className="green-gradient text-ivory prepc:rounded-lg mb-5 rounded px-4 pt-4 pb-3">
                    <h1 className="font-oswald mb-1 text-xl leading-6 font-medium uppercase">
                        {currentMethod.title[locale as LocaleType]}
                    </h1>
                    <p className="font-oswald leading-5 font-medium uppercase">
                        {currentMethod.subtitle[locale as LocaleType]}
                    </p>
                </div>
                <BookingOnlineForm btnName={t("onlineButtonMob")} cta />
            </section>
        </ModalPage>
    );
}
