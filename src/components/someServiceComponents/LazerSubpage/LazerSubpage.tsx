import { useTranslations } from "next-intl";

import { SubPageType } from "@/components/assets/laserMethodsData";
import { BookingOnlineForm } from "@/components/shared/booking/BookingOnlineForm";
import { LocaleType } from "@/types/LocaleType";

import { LazerSubpageContent } from "./LazerSubpageContent";

export const LazerSubpage = ({
    currentMethod,
    locale,
}: {
    currentMethod: SubPageType;
    locale: LocaleType;
}) => {
    const t = useTranslations("Menu");
    return (
        <section className="tab:px-6 pc:px-12 prepc:pb-9 py-3">
            <div className="green-gradient text-ivory prepc:rounded-lg rounded px-4 pt-4 pb-3">
                <h1 className="font-oswald mb-1 text-xl leading-6 font-medium uppercase">
                    {currentMethod.content[locale as LocaleType].title}
                </h1>
                <p className="font-oswald leading-5 font-medium uppercase">
                    {currentMethod.content[locale as LocaleType].subtitle}
                </p>
            </div>
            <div className="prepc:flex prepc:flex-row-reverse prepc:justify-between prepc:mt-5">
                <div className="tab:px-0 prepc:w-[70%] prepc:px-4 prepc:mb-0 prepc:pt-0 mb-5 max-h-[65vh] overflow-y-scroll px-4 pt-4">
                    <LazerSubpageContent
                        content={
                            currentMethod.content[locale as LocaleType].data
                        }
                    />
                </div>
                <div className="prepc:w-[29%]">
                    <div
                        className={
                            "prepc:block mb-6 hidden aspect-[321/242] w-full rounded bg-cover bg-center bg-blend-overlay"
                        }
                        style={{
                            backgroundImage: `
                linear-gradient(104.29deg, rgba(0, 54, 38, 0.8) 0.79%, rgba(11, 117, 86, 0.36) 87.17%),
                url(${currentMethod.image})
            `,
                            backgroundColor: "#065d43",
                        }}
                    />
                    <div className="prepc:mx-0 prepc:w-fit">
                        <BookingOnlineForm btnName={t("onlineButtonMob")} cta />
                    </div>
                </div>
            </div>
        </section>
    );
};
