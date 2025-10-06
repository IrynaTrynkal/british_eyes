import Image from "next/image";
import { useTranslations } from "next-intl";

import { BookingOnlineForm } from "@/components/shared/booking/BookingOnlineForm";

export const AboutCTA = () => {
    const t = useTranslations("AboutPage");
    return (
        <section className="prepc:px-6 pc:px-12 pt-[60px]">
            <div className="green-gradient tab:h-[302px] tab:max-w-full tab:pt-6 prepc:rounded-lg relative mx-auto max-w-[540px] overflow-hidden rounded pt-[139px] pb-8">
                <div className="tab:hidden absolute top-0 h-[115px] w-full overflow-hidden rounded">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source
                            src="/videos/about-cta-mob.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <Image
                    src="/images/about-cta.webp"
                    alt=""
                    width={744}
                    height={408}
                    className="tab:block tab:absolute tab:top-0 tab:right-0 tab:h-[302px] hidden w-auto"
                />
                <div className="prepc:p-0 tab:px-6 tab:max-w-[450px] prepc:max-w-[500px] prepc:mx-auto tab:text-center px-4">
                    <h2 className="text-ivory prepc:text-5xl prepc:text-center prepc:mx-auto font-oswald mb-6 text-[28px] leading-none">
                        {t("ctaTitle")}
                    </h2>
                    <p className="text-ivory prepc:mx-auto tab:mb-5 prepc:mb-7 prepc:text-lg prepc:leading-[22px] prepc:max-w-[404px] mb-10 leading-5">
                        {t("ctaText")}
                    </p>
                    <div className="prepc:absolute prepc:text-left prepc:top-8 prepc:left-8 prepc:mb-0 tab:mb-5 mb-10">
                        <p className="text-ivory mb-2 leading-[18px] font-medium uppercase">
                            {t("ctaWorkHours")}
                        </p>
                        <p className="text-ivory text-sm leading-4 font-medium uppercase">
                            {t("ctaRest")}
                        </p>
                    </div>
                    <BookingOnlineForm cta />
                </div>
            </div>
        </section>
    );
};
