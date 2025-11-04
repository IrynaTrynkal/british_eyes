import Image from "next/image";
import { useTranslations } from "next-intl";

import { CustomList } from "@/components/shared/CustomList";
import { IconRaynerLogo } from "@/components/shared/icons/IconRaynerLogo";
import { LinkAction } from "@/components/shared/LinkAction";

export const CataractGreenSection = () => {
    const t = useTranslations("ServicesPage");

    const catList = [
        t("catIndListItem1"),
        t("catIndListItem2"),
        t("catIndListItem3"),
        t("catIndListItem4"),
    ];
    const raynerText = t.rich("raynerText", {
        bold: chunk => <span className="font-bold">{chunk}</span>,
    });
    const raynerTextPC = t.rich("raynerTextPC", {
        bold: chunk => <span className="font-bold">{chunk}</span>,
    });

    return (
        <section className="tab:pb-12 pc:pb-[120px] text-ivory pb-[60px]">
            <div
                className="tab:aspect-[1440/771] w-full bg-cover bg-center py-8 bg-blend-multiply"
                style={{
                    backgroundImage: `
                        linear-gradient(180deg, rgba(0, 0, 0, 0.1225) 0%, rgba(0, 0, 0, 0.35) 100%),
                        linear-gradient(#0B7556E5, #0B7556E5),
                        url(/images/cataract-preview.jpg)
                    `,
                }}
            >
                <div className="content prepc:flex prepc:h-full">
                    <div className="prepc:w-2/5 prepc:flex prepc:flex-col prepc:justify-between tab:max-w-[400px] prepc:max-w-full">
                        <div className="mb-[26px]">
                            <h2 className="title-section-ivory tab:max-w-[700px] pc:max-w-[890px] tab:mx-auto prepc:mx-0 prepc:mb-9 mb-6 text-left">
                                {t("catIndTitle")}
                            </h2>
                            <CustomList
                                list={catList}
                                className="prepc:flex-col prepc:gap-3 mb-[91px]"
                            />
                        </div>
                        <p className="prepc:max-w-[321px] prepc:text-lg max-w-[400px] leading-[120%]">
                            {t("catIndText")}
                        </p>
                    </div>
                    <div className="cta-green-gradient tab:p-6 tab:max-w-[662px] prepc:w-3/5 prepc:mt-auto prepc:mb-0 mr-0 ml-auto max-w-[400px] rounded-lg p-3">
                        <h2 className="title-section-ivory tab:mb-16 pc:mb-22 mb-7 max-w-[513px]">
                            {t("raynerCardTitle")}
                        </h2>
                        <div className="tab:flex tab:bg-white-100/10 tab:backdrop-blur-[2px] tab:p-3 tab:rounded-lg">
                            <div className="tab:w-2/3 tab:mb-0 tab:gap-0 mb-7 flex gap-6">
                                <div className="tab:w-1/2 w-[37.5%]">
                                    <Image
                                        src="/images/rayner.png"
                                        alt="Rayner GALAXY"
                                        width={155}
                                        height={156}
                                        className="tab:mx-auto prepc:w-full h-auto w-2/3 max-w-[155px] min-w-[84px]"
                                    />
                                </div>
                                <div className="tab:w1/2 tab:flex tab:flex-col tab:justify-between w-[53%]">
                                    <p className="font-oswald prepc:text-2xl mb-3 text-xl leading-none">
                                        Rayner GALAXY
                                    </p>
                                    <p className="tab:hidden text-sm leading-4 uppercase">
                                        {raynerText}
                                    </p>
                                    <p className="prepc:text-base tab:block pc:leading-5 hidden w-[80%] text-sm leading-4 uppercase">
                                        {raynerTextPC}
                                    </p>
                                </div>
                            </div>
                            <div className="tab:flex-col tab:w-1/3 tab:justify-between tab:gap-0 flex items-center gap-6">
                                <div className="tab:w-fit tab:ml-auto tab:mr-0 w-[37.5%]">
                                    <IconRaynerLogo />
                                </div>
                                <div className="tab:w-fit w-[53%]">
                                    <LinkAction
                                        ivory
                                        secondary
                                        small
                                        name={t("learnMore")}
                                        href="/rayner-galaxy-ua"
                                        className="tab:mr-0 prepc:mr-1 mr-1 mb-1"
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
