import Image from "next/image";
import { getLocale } from "next-intl/server";

import { PortableTextRenderer } from "@/sanity/components/PortableTextComponents";
import { sanityFetch } from "@/sanity/lib/client";
import { offersPageQuery } from "@/sanity/lib/queries";

import { OffersPageQueryResult } from "../../../sanity.types";
import { BookingOnlineForm } from "../shared/booking/BookingOnlineForm";
import { OfferModal } from "./OfferModal";

export const MainOffers = async () => {
    const locale = await getLocale();
    const offersList: OffersPageQueryResult = await sanityFetch({
        query: offersPageQuery,
        params: { language: locale },
        tags: [],
    });

    return (
        <section className="tab:pb-12 pc:pb-[120px] pb-[60px]">
            <ul className="tab:max-w-full tab:h-full tab:mx-0 tab:px-6 pc:px-12 tab:gap-5 mx-auto flex max-w-[540px] flex-col gap-6">
                {offersList?.map(offer => (
                    <li
                        key={offer.servicesKey}
                        className="border-grey tab:flex tab:h-full tab:flex-row-reverse tab:justify-between tab:p-3 rounded-lg border p-4"
                    >
                        <div className="tab:w-[32%] tab:shrink-0 tab:self-start tab:mb-0 tab:mx-0 relative mx-auto mb-3 aspect-[433/327] max-w-[433px] overflow-hidden rounded-md">
                            <Image
                                src={
                                    offer.discountShortData?.bgimage
                                        ? offer.discountShortData.bgimage
                                        : "/images/main-offer.jpg"
                                }
                                alt={offer.title || "Offer Image"}
                                width={563}
                                height={425}
                                className="h-full w-full object-cover"
                            />
                            {offer.discountShortData?.icon && (
                                <div className="absolute bottom-4 left-4">
                                    <Image
                                        src={offer.discountShortData.icon}
                                        alt="Offer Icon"
                                        width={77}
                                        height={77}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="tab:max-w-[67%] tab:min-h-[calc(29.4vw*327/433)] prepc:min-h-[calc(30vw*327/433)] pc:min-h-[327px] tab:self-stretch tab:flex-1 tab:flex tab:flex-col tab:justify-between tab:h-full tab:mx-0 mx-auto max-w-[433px]">
                            <div>
                                <h2 className="font-oswald tab:text-3xl prepc:text-[42px] tab:w-full mb-3 max-w-[90%] text-xl leading-[120%] font-medium uppercase">
                                    {offer.title}
                                    {offer.discountShortData?.premium && (
                                        <span>
                                            .{" "}
                                            {
                                                offer.discountShortData
                                                    ?.premiumText
                                            }
                                        </span>
                                    )}
                                </h2>
                                <div className="tab:flex tab:justify-between tab:gap-4">
                                    {offer.discountFullData?.textLeft && (
                                        <p
                                            className={`mb-2 leading-[120%] ${offer.discountFullData?.textRight ? "tab:w-1/2" : "tab:w-[90%] prepc:w-1/2"}`}
                                        >
                                            {offer.discountFullData.textLeft}
                                        </p>
                                    )}
                                    {offer.discountFullData?.textRight && (
                                        <div
                                            className={`leading-[120%] ${offer.discountFullData?.textLeft ? "tab:w-1/2" : "tab:w-[90%] prepc:w-1/2"}`}
                                        >
                                            <PortableTextRenderer
                                                value={
                                                    offer.discountFullData
                                                        .textRight
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="tab:flex tab:gap-2.5">
                                <OfferModal offer={offer} />
                                <BookingOnlineForm cta className="tab:mx-0" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
