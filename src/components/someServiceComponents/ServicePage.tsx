import { Fragment } from "react";

import { LocaleType } from "@/types/LocaleType";

import { ServicesProps } from "../assets/servicesData";
import { AboutCTA } from "../pageAbout/cta/AboutCTA";
import { Global } from "../shared/global/Global";
import { AdvantagesService } from "./advantages/AdvantagesService";
import { DoctorsServices } from "./Doctors/DoctorsServices";
import { GiftCard } from "./GiftCard";
import { GreenSliderSection } from "./greenSliderSection/GreenSliderSection";
import { MethodsService } from "./methodsSection/MethodsService";
import { NumberListSection } from "./numberListSection/NumberListSection";
import { Preview } from "./previewSection/Preview";
import { PriceSection } from "./priceSection/PriceSection";
import { RoundImageAndTextSection } from "./roundImageAndText/RoundImageAndTextSection";
import { TextsColumnsSection } from "./textsColumnsSection/TextsColumnsSection";

export const ServicePageContent = ({
    serviceData,
    locale,
}: {
    serviceData: ServicesProps;
    locale: LocaleType;
}) => {
    const sections = serviceData[locale]?.sections ?? [];
    return (
        <>
            {sections.map((section, index) => {
                switch (section.type) {
                    case "preview":
                        return (
                            <Preview
                                key={index}
                                price={serviceData.price}
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
                        return <AboutCTA key={index} />;
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
                                slug={serviceData.name.key}
                                data={section.data}
                            />
                        );
                    case "doctors":
                        return (
                            <DoctorsServices
                                key={index}
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
                    default:
                        return null;
                }
            })}
        </>
    );
};
