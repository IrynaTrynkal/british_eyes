import Image from "next/image";
import { useTranslations } from "next-intl";

export const RaynerUniq = () => {
    const t = useTranslations("ServicesPage");
    const uniqList = [
        { title: t("raynerUniqItem1Title"), text: t("raynerUniqItem1Text") },
        { title: t("raynerUniqItem2Title"), text: t("raynerUniqItem2Text") },
        { title: t("raynerUniqItem3Title"), text: t("raynerUniqItem3Text") },
        { title: t("raynerUniqItem4Title"), text: t("raynerUniqItem4Text") },
        { title: t("raynerUniqItem5Title"), text: t("raynerUniqItem5Text") },
        { title: t("raynerUniqItem6Title"), text: t("raynerUniqItem6Text") },
    ];
    return (
        <section className="bg-green-10 overflow-hidden py-8">
            <div className="content">
                <h2 className="title-section tab:whitespace-normal tab:mb-8 prepc:mb-12 pc:mb-[60px] mb-6 text-center whitespace-pre-line">
                    {t("raynerUniqTitle")}
                </h2>
                <div className="relative">
                    <ul className="tab:columns-2 tab:gap-x-[18%] tab:block tab:space-y-3 prepc:space-y-10 flex flex-col gap-3">
                        {uniqList.map((item, ind) => (
                            <li
                                key={item.title}
                                className={`tab:justify-between tab:min-h-[124px] prepc:min-h-[157px] prepc:pt-5 flex items-start gap-3 border-t border-black/50 pt-[9px] ${ind === 2 || ind === 3 ? "tab:w-full w-[70%]" : ""} ${ind === 4 ? "tab:w-[88%] tab:ml-auto tab:mr-0" : ""} ${ind === 1 ? "tab:w-[88%]" : ""} ${ind === 3 || ind === 4 || ind === 5 ? "tab:flex-row-reverse" : ""} ${ind === 3 || ind === 5 ? "tab:pl-[12%]" : ""} ${ind === 0 || ind === 2 ? "tab:pr-[12%]" : ""}`}
                            >
                                <div className="font-oswald tab:text-3xl prepc:text-5xl text-xl leading-[100%] font-medium uppercase">
                                    {ind + 1}
                                </div>
                                <div className="tab:w-[70%] prepc:w-[53%]">
                                    <h3 className="font-oswald tab:text-xl prepc:text-2xl prepc:mb-3 mb-2 text-lg leading-[120%] font-medium uppercase">
                                        {item.title}
                                    </h3>
                                    <p className="tab:text-base prepc:text-lg text-sm leading-[120%]">
                                        {item.text}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Image
                        src="/images/rayner.png"
                        alt="Rayner Galaxy"
                        width={320}
                        height={320}
                        className="tab:right-auto tab:left-1/2 tab:w-[24%] tab:-translate-x-1/2 absolute top-1/2 -right-9 h-auto w-[144px] max-w-[319px] -translate-y-1/2"
                    />
                </div>
            </div>
        </section>
    );
};
