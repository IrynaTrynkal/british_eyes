import Image from "next/image";
import { useTranslations } from "next-intl";

export const Gift = () => {
    const t = useTranslations("PricePage");

    return (
        <div className="green-gradient prepc:rounded-lg prepc:aspect-square prepc:p-5 relative flex aspect-[288/192] h-full w-full max-w-[321px] flex-col justify-between overflow-hidden rounded px-2 py-3">
            <div>
                <h3 className="title-section-ivory prepc:text-left prepc:mb-10 mb-6 text-center">
                    {t("giftTitle")}
                </h3>
                <p className="text-ivory prepc:text-base prepc:leading-5 mb-4 text-sm leading-[17px]">
                    {t("giftText")}
                </p>
            </div>

            <Image
                src="/images/presents.webp"
                alt="part image"
                width={384}
                height={256}
                className="prepc:w-[260px] prepc:-bottom-5 absolute right-0 -bottom-3 h-auto w-[180px]"
            />
        </div>
    );
};
