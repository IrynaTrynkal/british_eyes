import { useTranslations } from "next-intl";

import { MethodsSectionProps } from "@/components/assets/servicesData";
import { GreenText } from "@/components/shared/GreenText";

import { MethodServiceCard } from "./MethodServiceCard";

export const MethodsService = ({ data }: { data: MethodsSectionProps }) => {
    const t = useTranslations("ServicesPage");
    return (
        <section id="methods" className="content pc:pb-30 relative pb-[60px]">
            <div className="prepc:mb-0 mb-6 flex w-full justify-between">
                <h3 className="subtitle prepc:absolute prepc:top-0 prepc:left-6 pc:left-12">
                    {t("methodsSubtitle")}
                </h3>
                {data.greenText && (
                    <GreenText
                        grey
                        text={data.greenText}
                        className="prepc:absolute prepc:top-0 prepc:right-6 pc:right-12 w-[202px]"
                    />
                )}
            </div>
            <div className="tab:max-w-[500px] prepc:mb-10 pc:max-w-[750px] tab:text-center tab:mx-auto mb-5">
                {data.title && (
                    <h2 className="title-section prepc:mb-7 tab:max-w-[560px] prepc:max-w-full mb-6 max-w-[440px]">
                        {data.title}
                    </h2>
                )}
                {data.text && (
                    <p className="pc:text-lg pc:leading-[22px] pc:mx-auto pc:max-w-[611px] leading-5">
                        {data.text}
                    </p>
                )}
            </div>
            <div className="tab:flex-row tab:gap-3 prepc:gap-5 flex flex-col gap-2">
                {data.list.map(item => (
                    <MethodServiceCard key={item.title} data={item} />
                ))}
            </div>
        </section>
    );
};
