import Image from "next/image";
import { useTranslations } from "next-intl";

import { GreenText } from "@/components/shared/GreenText";

export const GermanSection = () => {
    const t = useTranslations("AboutPage");
    const text = [t("germanText1"), t("germanText2"), t("germanText3")];

    return (
        <section className="content prepc:flex prepc:justify-between pc:py-[120px] py-[60px]">
            <div className="prepc:rounded-lg prepc:block prepc:w-[49%] hidden aspect-[288/164] max-w-[662px] overflow-hidden rounded">
                <Image
                    src="/images/german.jpg"
                    alt={t("germanSubtitle")}
                    width={881}
                    height={481}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="prepc:w-[49.6%]">
                <div className="prepc:mb-8 mb-6 flex w-full justify-between">
                    <h3 className="subtitle">{t("germanSubtitle")}</h3>
                    <GreenText
                        grey
                        text={t("germanGreen")}
                        className="w-[119px]"
                    />
                </div>
                <h2 className="title-section prepc:mb-7 tab:max-w-[560px] prepc:max-w-full mb-6 max-w-[440px]">
                    {t("germanTitle")}
                </h2>
                <div className="prepc:rounded-lg prepc:hidden mx-auto mb-5 aspect-[288/164] max-w-[662px] overflow-hidden rounded">
                    <Image
                        src="/images/german.jpg"
                        alt={t("germanSubtitle")}
                        width={881}
                        height={481}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="prepc:gap-3 pc:gap-4 prepc:mb-12 pc:mb-[68px] mb-8 flex flex-col gap-2">
                    {text.map((t, i) => (
                        <p
                            key={i}
                            className="pc:text-lg pc:leading-[22px] prepc:mb-0 mb-2 leading-5"
                        >
                            {t}
                        </p>
                    ))}
                </div>
                <a
                    href="https://klinika.ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                        "font-oswald prepc:ml-auto prepc:mr-0 hover:text-ivory active:text-ivory shadow-button tab:h-11 tab:w-[200px] mx-auto flex h-10 w-[288px] items-center justify-center rounded-sm border border-black font-medium uppercase transition-all duration-300 ease-in-out hover:translate-y-1 hover:bg-black hover:shadow-none active:translate-y-1 active:bg-black active:shadow-none"
                    }
                >
                    {t("germanBtn")}
                </a>
            </div>
        </section>
    );
};
