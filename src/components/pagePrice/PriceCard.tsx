import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { PortableTextPriceRenderer } from "@/sanity/components/PortableTextPriceComponents";
import { LocaleType } from "@/types/LocaleType";

import { PricesPageQueryResult } from "../../../sanity.types";
import { servicesList } from "../assets/menu";
import { IconArrow } from "../shared/icons/IconArrow";

export const PriceCard = ({
    data,
    locale,
    someService,
    className,
}: {
    data: NonNullable<PricesPageQueryResult>[number];
    locale: LocaleType;
    someService?: boolean;
    className?: string;
}) => {
    const t = useTranslations("PricePage");
    const link = servicesList.find(service => service.key === data.servicesKey)
        ?.slug[locale];
    return (
        <div
            id={data.servicesKey as string}
            className={`${someService ? "" : "tab:pr-0 pr-4"} ${className}`}
        >
            {someService ? null : (
                <div className="tab:flex tab:justify-between tab:mb-3">
                    <h2 className="title-section tab:w-[calc(100%-206px)] prepc:w-[calc(100%-229px)] tab:mb-0 mb-3">
                        {data.servicesName}
                    </h2>
                    <Link
                        href={`/posluhy/${link}` as any}
                        className="group tab:w-[186px] prepc:w-[209px] flex h-10 items-center gap-2"
                    >
                        <IconArrow className="pc:h-4 pc:w-4 h-4 w-4 transition-all duration-300 group-hover:mr-0 group-hover:translate-x-1" />
                        <p className="font-oswald prepc:text-base relative text-sm leading-none font-medium uppercase">
                            {t("moreAboutTheService")}
                            <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-full origin-right bg-current transition-transform duration-500 ease-in-out group-hover:scale-x-[0.1]" />
                        </p>
                    </Link>
                </div>
            )}
            <div className="border-grey overflow-hidden rounded-lg border">
                <div className="flex">
                    <p className="green-gradient font-oswald text-ivory prepc:w-[calc(100%-128px)] prepc:text-base prepc:px-5 prepc:py-2 w-[78%] px-2 py-[15px] text-sm leading-none font-medium uppercase">
                        {t("service")}
                    </p>
                    <p className="green-gradient font-oswald text-ivory prepc:w-[128px] prepc:text-base prepc:px-5 prepc:py-2 w-[22%] py-2 pr-2 pl-3 text-sm leading-none font-medium uppercase">
                        {t("price")}
                    </p>
                </div>
                {data.list &&
                    data.list.map((item, ind) => {
                        const newTechnology = item.new;
                        const special = item.specialPrice;
                        const description = item.serviceDescription || [];
                        // const firstGreen = description.find(
                        //     d => d.greenText
                        // )?.greenText;

                        const hasBadges = Boolean(newTechnology || special);

                        return (
                            <div
                                key={
                                    item.serviceName
                                        ? item.serviceName + ind
                                        : ind
                                }
                                className="border-grey-70 border-t"
                            >
                                <div className="bg-green-10 flex">
                                    <p className="prepc:w-[calc(100%-128px)] prepc:text-lg prepc:leading-[22px] prepc:p-5 w-[78%] p-2 leading-5">
                                        {item.serviceName}
                                    </p>
                                    <div className="font-oswald prepc:w-[128px] prepc:pr-5 prepc:justify-center flex w-[22%] flex-col gap-1 p-2 text-right leading-none font-medium">
                                        {item.discountPrice && (
                                            <p className="prepc:text-xl text-lg">
                                                {item.lowerDiscountLimit
                                                    ? t("servicesPrice", {
                                                          price: item.discountPrice,
                                                      })
                                                    : item.discountPrice}
                                            </p>
                                        )}
                                        <p
                                            className={`${item.discountPrice ? "text-grey line-through" : "prepc:text-xl text-lg"}`}
                                        >
                                            {item.lowerPriceLimit && item.price
                                                ? t("servicesPrice", {
                                                      price: item.price,
                                                  })
                                                : item.price}
                                        </p>
                                    </div>
                                </div>

                                {(hasBadges || description.length > 0) && (
                                    <div className="prepc:px-5 prepc:py-2 p-2">
                                        <div
                                            className={`flex gap-1.5 ${hasBadges && description.length > 0 ? "mb-2" : ""}`}
                                        >
                                            {/* {firstGreen && (
                                                <p className="bg-green-10 prepc:text-sm font-oswald w-fit px-1 py-0.5 text-xs leading-none font-medium text-green-100 uppercase">
                                                    {firstGreen}
                                                </p>
                                            )} */}
                                            {special && (
                                                <p className="bg-green-10 prepc:text-sm font-oswald w-fit px-1 py-0.5 text-xs leading-none font-medium text-green-100 uppercase">
                                                    {t("specialPrice")}
                                                </p>
                                            )}
                                            {newTechnology && (
                                                <p className="font-oswald text-grey prepc:text-sm w-fit px-1 py-0.5 text-xs leading-none font-medium uppercase">
                                                    {t("newTechnology")}
                                                </p>
                                            )}
                                        </div>
                                        {description.length > 0 && (
                                            <PortableTextPriceRenderer
                                                value={description}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
