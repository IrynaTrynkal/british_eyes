import { LocaleType } from "@/types/LocaleType";

import { ServicesProps } from "../assets/servicesData";
import { AboutCTA } from "../pageAbout/cta/AboutCTA";
import { NumberListSection } from "./numberListSection/NumberListSection";
import { Preview } from "./previewSection/Preview";
import { RoundImageAndTextSection } from "./roundImageAndText/RoundImageAndTextSection";

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
                    default:
                        return null;
                }
            })}
        </>
    );
};
