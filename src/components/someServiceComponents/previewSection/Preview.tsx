import Image from "next/image";
import { useTranslations } from "next-intl";

import { PreviewProps } from "@/components/assets/servicesData";
import { Fraction } from "@/components/shared/Fraction";

export const Preview = ({ data }: { data?: PreviewProps }) => {
    const t = useTranslations("AboutPage");

    if (!data) return null;
    return (
        <section className="content">
            <h3 className="subtitle prepc:absolute prepc:top-0 prepc:left-6 pc:left-12">
                {t("methodsSubtitle")}
            </h3>
            {data.textUp && data.textUp && (
                <Fraction textDown={data.textDown} textUp={data.textUp} />
            )}
            <div className="tab:max-w-[500px] prepc:mb-10 pc:max-w-[750px] tab:text-center tab:mx-auto mb-5">
                {data.title && (
                    <h2 className="title-section prepc:mb-7 tab:max-w-[560px] prepc:max-w-full mb-6 max-w-[440px]">
                        {data.title}
                    </h2>
                )}
                {data.image && (
                    <Image
                        src={data.image}
                        alt={data.title}
                        width={652}
                        height={373}
                    />
                )}
                {data.text &&
                    data.text.map((item, index) => (
                        <p
                            key={index}
                            className="pc:text-lg pc:mx-auto pc:max-w-[611px] leading-5"
                        >
                            {item}
                        </p>
                    ))}
            </div>
        </section>
    );
};
