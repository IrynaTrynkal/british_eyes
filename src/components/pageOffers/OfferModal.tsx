"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { PortableTextRenderer } from "@/sanity/components/PortableTextComponents";

import { OffersPageQueryResult } from "../../../sanity.types";
import { BookingOnlineForm } from "../shared/booking/BookingOnlineForm";
import { Modal } from "../shared/booking/Modal";
import { ButtonAction } from "../shared/ButtonAction";
import { Fraction } from "../shared/Fraction";

export const OfferModal = ({
    offer,
}: {
    offer: NonNullable<OffersPageQueryResult>[number];
}) => {
    const t = useTranslations("ServicesPage");

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    return (
        <div>
            <ButtonAction
                secondary
                onClick={handleOpen}
                name={t("learnMore")}
                className="tab:mx-0 tab:mb-0 mx-auto mb-4"
            />
            <Modal variant="center" offer isOpen={isOpen} onClose={handleClose}>
                <div className="tab:max-h-[80vh] tab:p-3 prepc:py-5 prepc:px-12 flex max-h-[90vh] flex-col pb-5">
                    <div className="cta-green-gradient prepc:mb-5 mb-3 w-full shrink-0 rounded-tl rounded-tr p-4">
                        <h2 className="font-oswald text-ivory prepc:text-2xl max-w-[80%] text-xl leading-[120%] font-medium uppercase">
                            {offer.title}
                        </h2>
                        {offer.discountShortData?.premiumText && (
                            <p className="font-oswald text-ivory prepc:text-xl prepc:mt-2 mt-1 max-w-[80%] leading-[120%] font-medium uppercase">
                                {offer.discountShortData.premiumText}
                            </p>
                        )}
                    </div>

                    <div className="prepc:flex-row-reverse prepc:justify-between prepc:gap-5 flex flex-1 flex-col overflow-hidden">
                        <div className="prepc:w-[67%] tab:pl-1 tab:pr-2 prepc:mb-0 prepc:pb-0 mb-2 flex-1 overflow-y-auto pr-6 pb-2 pl-4">
                            <div className="tab:flex prepc:hidden tab:justify-between tab:items-center tab:mb-4">
                                {offer.discountFullData?.fractionUp &&
                                    offer.discountFullData?.fractionDown && (
                                        <Fraction
                                            textUp={
                                                offer.discountFullData
                                                    .fractionUp
                                            }
                                            textDown={
                                                offer.discountFullData
                                                    .fractionDown
                                            }
                                            className="tab:max-w-[160px] tab:mx-0 mx-auto mb-4 w-fit max-w-[134px]"
                                        />
                                    )}
                                <div className="tab:block tab:w-[32%] tab:ml-auto tab:mr-0 tab:shrink-0 tab:self-start tab:mb-0 tab:mx-0 relative mx-auto mb-3 hidden aspect-[433/327] max-w-[433px] overflow-hidden rounded-md">
                                    <Image
                                        src={
                                            offer.discountShortData?.bgimage
                                                ? offer.discountShortData
                                                      .bgimage
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
                                                src={
                                                    offer.discountShortData.icon
                                                }
                                                alt="Offer Icon"
                                                width={77}
                                                height={77}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {offer.discountFullData?.discountFullText && (
                                <PortableTextRenderer
                                    value={
                                        offer.discountFullData.discountFullText
                                    }
                                />
                            )}
                        </div>

                        <div className="prepc:w-[32%] flex shrink-0 flex-col overflow-y-auto">
                            <div className="prepc:flex tab:shrink-0 prepc:mb-5 tab:self-start tab:mb-0 tab:mx-0 relative mx-auto mb-3 hidden aspect-[433/327] w-full max-w-[433px] overflow-hidden rounded-md">
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
                            <div className="prepc:p-3 prepc:flex prepc:flex-col prepc:gap-5 prepc:bg-green-10 prepc:rounded-lg">
                                {offer.discountFullData?.fractionUp &&
                                    offer.discountFullData?.fractionDown && (
                                        <Fraction
                                            textUp={
                                                offer.discountFullData
                                                    .fractionUp
                                            }
                                            textDown={
                                                offer.discountFullData
                                                    .fractionDown
                                            }
                                            className="prepc:flex pc:max-w-[200px] mx-auto hidden w-fit max-w-[160px]"
                                        />
                                    )}
                                {offer.discountFullData?.textLeft ? (
                                    <p
                                        className={
                                            "prepc:block hidden text-center leading-[120%]"
                                        }
                                    >
                                        {offer.discountFullData.textLeft}
                                    </p>
                                ) : offer.discountFullData?.textRight ? (
                                    <div
                                        className={
                                            "prepc:block hidden leading-[120%]"
                                        }
                                    >
                                        <PortableTextRenderer
                                            value={
                                                offer.discountFullData.textRight
                                            }
                                        />
                                    </div>
                                ) : null}
                                <BookingOnlineForm cta />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
