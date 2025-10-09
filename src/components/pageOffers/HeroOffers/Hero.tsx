import Image from "next/image";
import { useTranslations } from "next-intl";

export const Hero = () => {
    const t = useTranslations("OffersPage");

    return (
        <section className="content prepc:py-12 pc:py-[60px] py-6">
            <div className="green-gradient prepc:px-5 prepc:py-11 relative rounded p-3">
                <div className="prepc:w-[75%] prepc:flex prepc:items-center prepc:justify-between">
                    <h1 className="title-h1 text-ivory prepc:mb-0 mb-3 w-1/2 uppercase">
                        {t("title")}
                    </h1>
                    <p className="prepc:text-lg text-ivory prepc:mb-0 prepc:leading-[22px] prepc:max-w-[437px] prepc:w-1/2 max-w-[350px] leading-5">
                        {t("description")}
                    </p>
                </div>
                <Image
                    src="/images/green-percent.webp"
                    alt="icon percent"
                    width={584}
                    height={613}
                    className="prepc:h-[196px] prepc:top-auto prepc:bottom-0 prepc:right-16 prepc:w-auto absolute -top-4 right-3 h-auto w-[90px]"
                />
            </div>
        </section>
    );
};
