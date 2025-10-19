import { useTranslations } from "next-intl";

import { BookingConsultation } from "./BookingConsultation";

export const Booking = () => {
    const t = useTranslations("HomePage");

    return (
        <section className="relative">
            <div className="bg-emerald absolute inset-0 z-[-2]" />
            <div className="tab:max-w-[1100px] pc:max-w-[1440px] pc:max-h-[785px] pc:top-0 pc:p-0 pc:relative sticky top-[15%] z-[-1] mx-auto h-auto w-full max-w-[420px] py-4">
                <div className="tab:block book-gradient absolute inset-0 hidden" />
                <div className="booking-image" />
            </div>
            <div className="absolute top-0 z-[1] w-full">
                <div
                    id="booking"
                    className="book-gradient tab:max-w-[611px] tab:aspect-auto pc:py-10 mx-auto aspect-[1440/983] max-w-[420px] px-4 pt-[7%] pb-6 text-center"
                >
                    <h3 className="subtitle-ivory pc:mb-4 mb-6">
                        {t("bookingSubtitle")}
                    </h3>
                    <h2 className="title-section-ivory pc:mb-5 tab:max-w-[560px] pc:max-w-full mx-auto mb-3 max-w-[290px]">
                        {t("bookingTitle")}
                    </h2>
                    <p className="pc:text-lg pc:leading-[22px] text-ivory tab:max-w-[560px] pc:max-w-full mx-auto max-w-[290px] leading-5">
                        {t("bookingText")}
                    </p>
                </div>
                <BookingConsultation />
            </div>
            <div className="book-height w-full" />
            <div className="tab:aspect-auto mx-auto aspect-[1440/935] w-full max-w-[420px]"></div>
        </section>
    );
};
