import Image from "next/image";
import { useTranslations } from "next-intl";

import { PriceItemType } from "@/components/assets/priceList";
import { PreviewProps } from "@/components/assets/servicesData";
import { Fraction } from "@/components/shared/Fraction";
import { LinkAction } from "@/components/shared/LinkAction";

export const Preview = ({
    data,
    price,
}: {
    data?: PreviewProps;
    price: PriceItemType;
}) => {
    const t = useTranslations("ServicesPage");
    const tH = useTranslations("HomePage");

    if (!data) return null;
    return (
        <section className="content pc:pt-[90px] tab:pb-12 pc:pb-30 pt-10 pb-[60px]">
            <div className="tab:mb-0 mb-6 flex justify-between">
                <h3 className="subtitle pc:left-12 tab:w-[32%]">
                    {t("preveiwSubtitle")}
                </h3>
                <div className="tab:flex tab:justify-between tab:w-[66%]">
                    {data.title && (
                        <h2
                            className={`title-section tab:block tab:max-w-[360px] mb-6 hidden max-w-[440px] ${data.fractionUp ? "prepc:max-w-[500px] pc:max-w-[660px]" : "prepc:max-w-full pc:max-w-full"}`}
                        >
                            {data.title}
                        </h2>
                    )}
                    {data.textUp && data.textUp && (
                        <Fraction
                            textDown={data.textDown}
                            textUp={data.textUp}
                            className={data.fractionUp ? "" : "prepc:hidden"}
                        />
                    )}
                </div>
            </div>
            <div className="tab:flex tab:justify-between">
                <div className="tab:mb-0 tab:w-[32%]">
                    {data.title && (
                        <h2 className="title-section tab:hidden tab:mb-0 mb-6 max-w-[440px]">
                            {data.title}
                        </h2>
                    )}

                    {data.image && (
                        <div className="prepc:rounded-lg pc:min-w-[435px] prepc:aspect-[435/249] tab:mb-0 mb-5 aspect-[288/164] overflow-hidden rounded">
                            <Image
                                src={data.image}
                                alt={data.title}
                                width={652}
                                height={373}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    )}
                </div>
                <div className="tab:w-[66%] tab:flex tab:flex-col tab:justify-between">
                    {data.text && (
                        <div className="prepc:mb-0 prepc:flex-row prepc:gap-4 pc:gap-6 mb-8 flex flex-col gap-2">
                            {data.text.map((item, index) => (
                                <p
                                    key={index}
                                    className="pc:text-lg pc:leading-[22px] leading-5"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    )}
                    <div
                        className={
                            data.fractionUp
                                ? ""
                                : "prepc:flex prepc:justify-between prepc:items-end"
                        }
                    >
                        {data.textUp && data.textUp && (
                            <Fraction
                                textDown={data.textDown}
                                textUp={data.textUp}
                                className={
                                    data.fractionUp
                                        ? "hidden"
                                        : "prepc:flex hidden"
                                }
                            />
                        )}
                        <div className="tab:flex-row tab:gap-6 tab:justify-end flex flex-col justify-center gap-2.5">
                            {price?.price ? (
                                <LinkAction
                                    secondary
                                    href="/tsiny"
                                    name={t("findOutPriceBtn")}
                                    className="tab:mx-0 mx-auto"
                                />
                            ) : null}
                            <LinkAction
                                className="tab:mx-0 mx-auto"
                                href="#booking"
                                name={tH("bookingSubtitle")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
