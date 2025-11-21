import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { servicesData } from "@/components/assets/servicesData";
import { Fraction } from "@/components/shared/Fraction";
import { IconArrow } from "@/components/shared/icons/IconArrow";
import { IconPercent } from "@/components/shared/icons/IconPercent";
import { LinkAction } from "@/components/shared/LinkAction";
import { Link } from "@/i18n/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { pricesShortQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { getLowestPrice } from "@/utils/getLowestPrice";

import { PricesShortQueryResult } from "../../../../sanity.types";

export const ServicesList = async ({ locale }: { locale: LocaleType }) => {
    const tMenu = await getTranslations("Menu");
    const t = await getTranslations("HomePage");

    const pricesList: PricesShortQueryResult = await sanityFetch({
        query: pricesShortQuery,
        params: { language: locale },
        tags: [],
    });

    const serviceStyles: Record<string, string> = {
        "lazerna-korekcziya-zoru": "text-ivory",
        "perevirka-zoru":
            "bg-cover bg-center hover:bg-[linear-gradient(#065d43,#065d43),url(/images/perevirka-zoru-hero.jpg)] active:bg-[linear-gradient(#065d43,#065d43),url(/images/perevirka-zoru-hero.jpg)] bg-blend-hard-light",
        "likuvannya-katarakti":
            "bg-cover bg-center hover:bg-[linear-gradient(#065d43,#065d43),url(/images/iq-5-minute.jpg)] active:bg-[linear-gradient(#065d43,#065d43),url(/images/iq-5-minute.jpg)] bg-blend-hard-light",
        "syndrom-sukhoho-oka":
            "bg-cover bg-center hover:bg-[linear-gradient(#065d43,#065d43),url(/images/eyes-cta.jpg)] active:bg-[linear-gradient(#065d43,#065d43),url(/images/eyes-cta.jpg)] bg-blend-hard-light",
        default: "hover-green-gradient ",
    };

    return (
        <ul className="tab:gap-5 tab:mb-0 mb-8 flex flex-wrap justify-center gap-2">
            {servicesData.slice(0, 5).map((service, index) => {
                const priceItem = pricesList?.find(
                    price => price.servicesKey === service.name.key
                )?.list;
                const lowest = getLowestPrice(priceItem);
                return (
                    <li
                        key={service.name.key}
                        className={`border-grey tab:min-h-[200px] pc:min-h-[246px] pc:rounded-lg tab:max-w-[397px] pc:max-w-[434.5px] min-h-[140px] overflow-hidden rounded border ${index === 4 ? "tab:w-[calc(50%-10px)] w-full" : "tab:w-[calc(50%-10px)] w-[calc(50%-4px)]"}`}
                    >
                        <Link
                            href={
                                `/posluhy/${service.name.slug[locale as LocaleType]}` as any
                            }
                            className={`group tab:p-3 relative flex h-full w-full flex-col justify-between p-2 transition-all duration-300 ease-in-out ${serviceStyles[service.name.key] ?? serviceStyles.default} `}
                        >
                            {service.name.key === "lazerna-korekcziya-zoru" && (
                                <div className="absolute inset-0 z-[-1] transform overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-110 group-active:scale-110">
                                    <Image
                                        src="/images/main-service.jpg"
                                        alt={service.name.key}
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            )}
                            <div className="tab:h-full tab:flex tab:flex-col tab:justify-between">
                                <div className="tab:flex tab:justify-between">
                                    <h4
                                        className={`font-oswald tab:text-lg group-hover:text-ivory group-active:text-ivory pc:text-2xl pc:leading-7 tab:leading-5 leading-4 font-medium uppercase transition-all duration-300 ease-in-out ${lowest.discountPrice ? "tab:w-[55%] w-[75%]" : "tab:w-[70%] w-full"} `}
                                    >
                                        {tMenu(service.name.key)}
                                    </h4>
                                    {lowest.discountPrice && (
                                        <div className="text-ivory font-oswald pc:text-3xl tab:-mt-3 tab:w-9 tab:h-10 tab:text-xl tab:flex pc:h-12 pc:w-11 hidden items-center justify-center bg-black leading-none font-bold uppercase">
                                            <IconPercent className="pc:w-4 pc:h-[22px] tab:w-[14px] tab:h-5 h-4 w-3" />
                                        </div>
                                    )}

                                    <p className="font-oswald tab:block pc:text-base group-hover:text-ivory group-active:text-ivory hidden text-sm leading-none uppercase transition-all duration-300 ease-in-out">
                                        {lowest.discountPrice
                                            ? lowest.lowerDiscountLimit
                                                ? t("servicesPrice", {
                                                      price: lowest.discountPrice,
                                                  })
                                                : t("servicesDiscountPrice", {
                                                      price: lowest.discountPrice,
                                                  })
                                            : lowest.price
                                              ? lowest.lowerPriceLimit
                                                  ? t("servicesPrice", {
                                                        price: lowest.price,
                                                    })
                                                  : t("servicesDiscountPrice", {
                                                        price: lowest.price,
                                                    })
                                              : t("details")}
                                    </p>
                                </div>
                                {service.additionalIcon && (
                                    <div className="tab:max-w-[77px] mt-[6.6px] max-w-[52px]">
                                        <Image
                                            src={service.additionalIcon}
                                            alt="icon"
                                            width={77}
                                            height={77}
                                            className="h-auto w-full object-contain"
                                        />
                                    </div>
                                )}
                                <div className="tab:flex tab:justify-between tab:items-end hidden w-full">
                                    <p className="tab:leading-5 pc:text-lg group-hover:text-ivory group-active:text-ivory pc:leading-[22px] w-[80%] transition-all duration-300 ease-in-out">
                                        {service[locale as LocaleType].textMain}
                                    </p>
                                    <div className="group-hover:bg-ivory group-active:bg-ivory border-ivory flex h-12 w-12 items-center justify-center rounded border transition-all duration-300 ease-in-out">
                                        <IconArrow
                                            className={`h-6 w-6 transition-all duration-300 ease-in-out group-hover:text-black group-active:text-black ${index === 4 ? "text-ivory" : ""} `}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "tab:hidden flex items-center justify-between"
                                }
                            >
                                <p className="font-oswald group-hover:text-ivory group-active:text-ivory text-sm leading-none uppercase transition-all duration-300 ease-in-out">
                                    {lowest.discountPrice
                                        ? lowest.lowerDiscountLimit
                                            ? t("servicesPrice", {
                                                  price: lowest.discountPrice,
                                              })
                                            : t("servicesDiscountPrice", {
                                                  price: lowest.discountPrice,
                                              })
                                        : lowest.price
                                          ? lowest.lowerPriceLimit
                                              ? t("servicesPrice", {
                                                    price: lowest.price,
                                                })
                                              : t("servicesDiscountPrice", {
                                                    price: lowest.price,
                                                })
                                          : t("details")}
                                </p>
                                <IconArrow className="h-4 w-4" />
                            </div>
                            {lowest.discountPrice && (
                                <div className="text-ivory font-oswald tab:hidden pc:right-auto tab:w-9 tab:h-10 pc:left-[61.5%] tab:right-[120px] tab:text-xl absolute top-0 right-0 flex h-8 w-8 items-center justify-center bg-black leading-none font-bold uppercase">
                                    <IconPercent className="h-4 w-3" />
                                </div>
                            )}
                        </Link>
                    </li>
                );
            })}
            <li
                key="goToServicesPage"
                className={
                    "border-grey tab:min-h-[200px] pc:rounded-lg pc:min-h-[246px] tab:max-w-[397px] pc:max-w-[434.5px] tab:flex tab:gap-5 tab:flex-col tab:w-[calc(50%-10px)] hidden min-h-[140px] justify-center overflow-hidden rounded border"
                }
            >
                <Fraction
                    className="tab:mx-auto w-fit text-center whitespace-pre-line"
                    textUp={t("servicesTextUp")}
                    textDown={t("servicesTextDown")}
                />
                <LinkAction
                    secondary
                    className="mx-auto"
                    href="/posluhy"
                    name={t("servicesBtn")}
                />
            </li>
        </ul>
    );
};
