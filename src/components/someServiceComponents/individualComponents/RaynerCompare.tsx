import Image from "next/image";
import { useTranslations } from "next-intl";

import { LocaleType } from "@/types/LocaleType";

import { RaynerCardsSection } from "./RaynerCardsSection";

export const RaynerCompare = ({ locale }: { locale: LocaleType }) => {
    const t = useTranslations("ServicesPage");
    const raynerCompareList = [
        {
            title: "Trifocal",
            image: "/images/trifocal.jpg",
            list: [t("raynerCompareItem1"), t("raynerCompareItem2")],
        },
        {
            title: "Rayone Galaxy",
            image: "/images/rayner-compare.png",
            list: [t("raynerCompareItem3"), t("raynerCompareItem4")],
        },
    ];
    return (
        <section className="content tab:pt-12 pc:pt-[120px] pt-[60px]">
            <h2 className="title-section mb-6 text-center">
                {t("raynerCompareTitle")}
            </h2>
            <p className="tab:max-w-[500px] prepc:max-w-[600px] pc:text-lg pc:leading-[22px] tab:mx-auto prepc:mb-10 mb-6 text-center leading-5">
                {t("raynerCompareText")}
            </p>
            <div className="prepc:mb-[60px] pc:gap-5 relative mb-2 flex gap-2">
                {raynerCompareList.map((card, index) => (
                    <div
                        key={card.title}
                        className={`tab:items-start pc:w-[calc(50%-10px)] pc:gap-5 flex w-[calc(50%-4px)] flex-col gap-2 ${index === 0 ? "tab:flex-row-reverse" : "tab:flex-row"}`}
                    >
                        <div className="tab:w-[38%] prepc:w-[30%]">
                            <p
                                className={`tab:mb-2 prepc:mb-10 prepc:text-base prepc:py-3 rounded border py-1 text-center text-sm uppercase ${card.title === "Trifocal" ? "bg-green-10 border-grey-70 border text-black" : "green-gradient border-emerald text-ivory border"}`}
                            >
                                {card.title}
                            </p>
                            <ul
                                className={
                                    "tab:flex prepc:gap-[14px] pc:h-[136px] prepc:justify-between hidden h-full flex-col gap-2"
                                }
                            >
                                {card.list.map(item => (
                                    <li
                                        key={item}
                                        className={`tab:p-1 prepc:px-3 prepc:py-2 prepc:text-lg tab:rounded-lg text-sm leading-[120%] ${card.title === "Trifocal" ? "bg-green-10 border-grey-70 border text-black" : "green-gradient border-emerald text-ivory border"}`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Image
                            src={card.image}
                            alt={card.title}
                            width={600}
                            height={600}
                            className="tab:w-[60%] prepc:w-[68%] aspect-square rounded-lg"
                        />
                        <div
                            className={`tab:hidden h-full rounded-lg border ${card.title === "Trifocal" ? "bg-green-10 border-grey-70 text-black" : "green-gradient border-emerald text-ivory"}`}
                        >
                            <ul
                                className={
                                    "ml-4 flex h-full list-disc flex-col gap-2 p-1"
                                }
                            >
                                {card.list.map(item => (
                                    <li
                                        key={item}
                                        className="text-sm leading-[120%]"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <p className="green-gradient border-emerald prepc:text-lg tab:absolute prepc:block text-ivory prepc:w-[24%] bottom-3 left-1/2 hidden translate-x-2.5 rounded-lg border px-3 py-2 text-sm leading-[120%]">
                    {t("raynerCompareItem5")}
                </p>
            </div>
            <p className="green-gradient border-emerald prepc:hidden tab:ml-[50%] text-ivory mb-8 rounded-lg border px-3 py-2 text-sm leading-[120%]">
                {t("raynerCompareItem5")}
            </p>
            <RaynerCardsSection locale={locale as LocaleType} />
        </section>
    );
};
