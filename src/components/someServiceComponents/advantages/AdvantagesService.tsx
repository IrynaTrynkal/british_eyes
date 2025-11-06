import { useTranslations } from "next-intl";

import { AdvantageServiceSectionProps } from "@/components/assets/servicesData";

import { AdvantagesListTabService } from "./AdvantagesListTabService";
import { AdvantagesSliderService } from "./AdvantagesSliderService";

export const AdvantagesService = ({
    data,
    className,
}: {
    data: AdvantageServiceSectionProps;
    className?: string;
}) => {
    const t = useTranslations("ServicesPage");
    const { paddingTop = true, paddingBottom = true } = data;
    return (
        <section
            className={`content relative ${
                paddingTop ? "pc:pt-[120px] tab:pt-12 pt-[60px]" : ""
            } ${paddingBottom ? "pc:pb-[120px] tab:pb-12 pb-[60px]" : ""} ${className}`}
        >
            <h3 className="subtitle tab:max-w-[318px] tab:mb-4 prepc:absolute prepc:top-12 pc:top-[120px] prepc:left-6 pc:left-12 mb-5">
                {t("advantages")}
            </h3>
            <h2 className="title-section tab:max-w-[700px] pc:max-w-[890px] tab:mx-auto tab:text-center mb-6">
                {data.title}
            </h2>
            <p className="tab:max-w-[500px] pc:text-lg pc:leading-[22px] tab:mx-auto tab:text-center tab:mb-10 mb-6 leading-5">
                {data.text}
            </p>
            <AdvantagesSliderService list={data.list} />
            <AdvantagesListTabService list={data.list} />
        </section>
    );
};
