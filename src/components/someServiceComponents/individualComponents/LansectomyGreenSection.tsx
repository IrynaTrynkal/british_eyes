import Image from "next/image";
import { useTranslations } from "next-intl";

import { IconRaynerLogo } from "@/components/shared/icons/IconRaynerLogo";
import { LinkAction } from "@/components/shared/LinkAction";

export const LansectomyGreenSection = () => {
    const t = useTranslations("ServicesPage");

    const raynerText = t.rich("raynerText", {
        bold: chunk => <span className="font-bold">{chunk}</span>,
    });
    const raynerTextPC = t.rich("raynerTextPC", {
        bold: chunk => <span className="font-bold">{chunk}</span>,
    });

    return (
        <section className="tab:pb-12 pc:pb-[120px] text-ivory pb-[60px]">
            <div
                className="prepc:py-12 w-full bg-cover bg-center py-8 bg-blend-multiply"
                style={{
                    backgroundImage: `
                        linear-gradient(180deg, rgba(0, 0, 0, 0.1225) 0%, rgba(0, 0, 0, 0.35) 100%),
                        linear-gradient(#0B7556E5, #0B7556E5),
                        url(/images/cataract-preview.jpg)
                    `,
                }}
            >
                <div className="content tab:flex tab:items-end prepc:h-full">
                    <div className="prepc:w-2/5 prepc:flex prepc:flex-col prepc:justify-between tab:max-w-[400px] tab:w-[40%] prepc:max-w-full">
                        <div className="mb-[26px]">
                            <h2 className="title-section-ivory tab:max-w-[700px] pc:max-w-[890px] tab:mx-auto prepc:mx-0 prepc:mb-9 mb-6 text-left">
                                {t("lansTitle")}
                            </h2>
                            <p className="mb-[91px]">{t("lansText1")}</p>
                        </div>
                        <p className="prepc:max-w-[321px] prepc:mb-0 prepc:text-lg mb-[26px] max-w-[400px] leading-[120%]">
                            {t("lansText2")}
                        </p>
                    </div>
                    <div className="cta-green-gradient tab:p-6 prepc:max-w-[662px] prepc:w-3/5 prepc:mt-auto prepc:mb-0 mr-0 ml-auto max-w-[400px] rounded-lg p-3">
                        <h2 className="title-section-ivory prepc:mb-16 pc:mb-22 mb-7 max-w-[513px]">
                            {t("raynerCardTitle")}
                        </h2>
                        <div className="prepc:flex prepc:bg-white-100/10 prepc:backdrop-blur-[2px] prepc:p-3 prepc:rounded-lg">
                            <div className="prepc:w-2/3 prepc:mb-0 prepc:gap-0 mb-7 flex gap-6">
                                <div className="prepc:w-1/2 w-[37.5%]">
                                    <Image
                                        src="/images/rayner.png"
                                        alt="Rayner GALAXY"
                                        width={155}
                                        height={156}
                                        className="prepc:mx-auto prepc:w-full h-auto w-2/3 max-w-[155px] min-w-[84px]"
                                    />
                                </div>
                                <div className="prepc:w1/2 prepc:flex prepc:flex-col prepc:justify-between w-[53%]">
                                    <p className="font-oswald prepc:text-2xl mb-3 text-xl leading-none">
                                        Rayner GALAXY
                                    </p>
                                    <p className="prepc:hidden text-sm leading-4 uppercase">
                                        {raynerText}
                                    </p>
                                    <p className="prepc:text-base prepc:block pc:leading-5 hidden w-[80%] text-sm leading-4 uppercase">
                                        {raynerTextPC}
                                    </p>
                                </div>
                            </div>
                            <div className="prepc:flex-col prepc:w-1/3 prepc:justify-between prepc:gap-0 flex items-center gap-6">
                                <div className="prepc:w-fit prepc:ml-auto prepc:mr-0 w-[37.5%]">
                                    <IconRaynerLogo />
                                </div>
                                <div className="prepc:w-fit w-[53%]">
                                    <LinkAction
                                        ivory
                                        secondary
                                        small
                                        name={t("learnMore")}
                                        href="/rayner-galaxy-ua"
                                        className="mr-1 mb-1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
