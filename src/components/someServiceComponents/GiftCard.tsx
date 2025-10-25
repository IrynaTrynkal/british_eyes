import Image from "next/image";
import { useTranslations } from "next-intl";

export const GiftCard = () => {
    const t = useTranslations("PricePage");

    return (
        <section className="content tab:pb-12 pc:pb-[120px] pb-5">
            <div className="green-gradient prepc:rounded-lg tab:max-w-full tab:aspect-auto tab:p-5 relative mx-auto flex aspect-[288/160] h-full w-full max-w-[321px] flex-col justify-between overflow-hidden rounded px-2 pt-2 pb-5">
                <div>
                    <h3 className="title-section-ivory tab:text-left prepc:mb-6 mb-5 text-center">
                        {t("giftTitle")}
                    </h3>
                    <p className="text-ivory prepc:text-base prepc:leading-5 tab:w-[350px] w-[140px] text-sm leading-[17px]">
                        {t("giftText")}
                    </p>
                </div>

                <Image
                    src="/images/presents.webp"
                    alt="part image"
                    width={384}
                    height={256}
                    className="prepc:w-[435px] tab:w-[280px] prepc:-bottom-14 absolute right-0 -bottom-5 h-auto w-[180px]"
                />
            </div>
        </section>
    );
};
