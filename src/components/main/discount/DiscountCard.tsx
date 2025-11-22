import Image from "next/image";
import { useTranslations } from "next-intl";

import { BookingOnlineForm } from "@/components/shared/booking/BookingOnlineForm";
import { IconPercent } from "@/components/shared/icons/IconPercent";
import { LinkAction } from "@/components/shared/LinkAction";

import { OffersShortQueryResult } from "../../../../sanity.types";

export const DiscountCard = ({
    data,
}: {
    data: NonNullable<OffersShortQueryResult>[number];
}) => {
    const t = useTranslations("HomePage");

    return (
        <div className="text-ivory tab:h-[327px] tab:w-[433px] tab:mr-[22px] mr-2 h-[194px] w-[280px] overflow-hidden rounded bg-center">
            {data.discountShortData?.premium && (
                <div className="tab:h-[62px] tab:pl-9 tab:gap-[55px] flex h-10 w-full items-center gap-9 bg-black pr-2 pl-[22px]">
                    <IconPercent className="tab:h-6 tab:w-8 h-[21px] w-4" />
                    {data.discountShortData?.premiumText && (
                        <p className="tab:text-base tab:leading-5 text-xs leading-[14px] uppercase">
                            {data.discountShortData.premiumText}
                        </p>
                    )}
                </div>
            )}
            <div
                className={`tab:p-3 relative flex w-full flex-col justify-between bg-cover bg-center p-2 ${data.discountShortData?.premium ? "tab:h-[265px] h-[154px]" : "h-full"}`}
                style={{
                    backgroundImage: `url(${data.discountShortData?.bgimage ?? "/images/main-offer.jpg"})`,
                }}
            >
                <div>
                    <div className="tab:flex-col tab:gap-16 tab:mb-6 pc:mb-3 mb-3 flex justify-between">
                        <h4
                            className={`font-oswald tab:max-w-[288px] max-w-[60%] font-medium uppercase ${data.discountShortData?.premium ? "tab:mt-3 tab:text-3xl tab:leading-9 pc:text-[42px] pc:leading-12 mt-2 text-xl" : "pc:text-2xl tab:text-[22px] tab:leading-7"}`}
                        >
                            {data.title}
                        </h4>
                        {data.discountShortData?.period && (
                            <p className="font-oswald pc:text-2xl tab:text-xl tab:leading-5 pc:leading-7 text-sm leading-4 font-bold uppercase">
                                {t("discountPeriod", {
                                    date: data.discountShortData.period,
                                })}
                            </p>
                        )}
                    </div>
                    {data.discountShortData?.shortText && (
                        <p className="tab:text-lg tab:leading-[22px] text-sm leading-4">
                            {data.discountShortData.shortText}
                        </p>
                    )}
                </div>
                {data.discountShortData?.cost ||
                data.discountShortData?.cost === 0 ? (
                    <div>
                        <p className="tab:text-base tab:leading-5 text-sm leading-4 uppercase">
                            {t("discountOnly")}
                        </p>
                        <p className="font-oswald pc:text-5xl tab:text-4xl tab:font-medium tab:leading-none text-[32px] leading-9 uppercase">
                            {data.discountShortData.cost}
                            <span className="tab:text-2xl tab:leading-8 text-base uppercase">
                                {t("discountUAH")}
                            </span>
                        </p>
                    </div>
                ) : (
                    data.discountShortData?.icon && (
                        <Image
                            src={data.discountShortData.icon}
                            alt={data.title || "icon"}
                            width={77}
                            height={77}
                            className="tab:w-[77px] h-auto w-[50px]"
                        />
                    )
                )}
                {data.discountShortData?.learnMore ? (
                    <LinkAction
                        small
                        href="/aktsiyi"
                        name={t("details")}
                        className="absolute right-0 bottom-0"
                    />
                ) : (
                    <BookingOnlineForm className="absolute right-0 bottom-0" />
                )}
            </div>
        </div>
    );
};
