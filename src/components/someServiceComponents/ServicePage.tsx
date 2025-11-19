import { Fragment } from "react";

import { sanityFetch } from "@/sanity/lib/client";
import {
    doctorsOrderQuery,
    offersShortQuery,
    pricesPageQuery,
} from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";

import { servicesData, ServicesProps } from "../assets/servicesData";
import { AboutCTA } from "../pageAbout/cta/AboutCTA";
import { Global } from "../shared/global/Global";
import { AdvantagesService } from "./advantages/AdvantagesService";
import { DoctorsServices } from "./Doctors/DoctorsServices";
import { GiftCard } from "./GiftCard";
import { GreenCard } from "./GreenCard";
import { GreenSliderSection } from "./greenSliderSection/GreenSliderSection";
import { MethodsService } from "./methodsSection/MethodsService";
import { NumberListSection } from "./numberListSection/NumberListSection";
import { Preview } from "./previewSection/Preview";
import { PriceSection } from "./priceSection/PriceSection";
import { RoundImageAndTextSection } from "./roundImageAndText/RoundImageAndTextSection";
import { TextsColumnsSection } from "./textsColumnsSection/TextsColumnsSection";

export const ServicePageContent = async ({
    serviceData,
    locale,
}: {
    serviceData: ServicesProps;
    locale: LocaleType;
}) => {
    const [pricesList, offersShortList, doctorsList] = await Promise.all([
        sanityFetch({
            query: pricesPageQuery,
            params: { language: locale },
            tags: [],
        }),
        sanityFetch({
            query: offersShortQuery,
            params: { language: locale },
            tags: [],
        }),
        sanityFetch({
            query: doctorsOrderQuery,
            params: { language: locale },
            tags: [],
        }),
    ]);

    const sections = serviceData[locale]?.sections ?? [];

    const perevirkaZoruService = servicesData.find(
        s => s.name.key === "perevirka-zoru"
    );
    const perevirkaZoruSections = perevirkaZoruService?.[locale]?.sections;
    const perevirkaZoruPriceSection = perevirkaZoruSections?.find(
        sec => sec.type === "priceSection"
    );

    const previewPrice = pricesList?.find(
        item => item.servicesKey === serviceData.name.key
    )?.list
        ? true
        : false;

    const changedSlug =
        serviceData.name.key === "dityache-viddilennya"
            ? "perevirka-zoru"
            : serviceData.name.key;

    const offerList = offersShortList?.find(
        item => item.servicesKey === changedSlug
    );
    const priceListData = pricesList?.find(
        item => item.servicesKey === changedSlug
    );

    return (
        <>
            {sections.map((section, index) => {
                switch (section.type) {
                    case "preview":
                        return (
                            <Preview
                                key={index}
                                price={previewPrice}
                                data={section.data}
                            />
                        );
                    case "roundImageAndTextSection":
                        return (
                            <RoundImageAndTextSection
                                key={index}
                                data={section.data}
                            />
                        );
                    case "cta":
                        return (
                            <AboutCTA
                                key={index}
                                data={section.data && section.data}
                            />
                        );
                    case "numberListSection":
                        return (
                            <NumberListSection
                                key={index}
                                data={section.data}
                            />
                        );
                    case "greenSliderSection":
                        return (
                            <GreenSliderSection
                                key={index}
                                data={section.data}
                            />
                        );
                    case "advantages":
                        return (
                            <AdvantagesService
                                key={index}
                                data={section.data}
                            />
                        );
                    case "methodsSection":
                        return (
                            <MethodsService key={index} data={section.data} />
                        );
                    case "priceSection":
                        return (
                            <PriceSection
                                key={index}
                                locale={locale}
                                pricesList={priceListData}
                                offersShortList={offerList}
                                data={
                                    serviceData.name.key ===
                                    "dityache-viddilennya"
                                        ? (perevirkaZoruPriceSection?.data ??
                                          section.data)
                                        : section.data
                                }
                            />
                        );
                    case "doctors":
                        return (
                            <DoctorsServices
                                key={index}
                                list={doctorsList}
                                service={serviceData.name.key}
                            />
                        );
                    case "giftCTA":
                        return <GiftCard key={index} />;

                    case "textsColumns":
                        return (
                            <TextsColumnsSection
                                key={index}
                                data={section.data}
                            />
                        );
                    case "global":
                        return <Global key={index} />;
                    case "individual":
                        return <Fragment key={index}>{section.data}</Fragment>;
                    case "greenCard":
                        return <GreenCard key={index} data={section.data} />;
                    default:
                        return null;
                }
            })}
        </>
    );
};
