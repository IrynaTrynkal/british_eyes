import Image from "next/image";
import { useTranslations } from "next-intl";

import { aboutSertification } from "@/components/assets/contacts";
import { Fraction } from "@/components/shared/Fraction";
import { GreenText } from "@/components/shared/GreenText";
import { LinkAction } from "@/components/shared/LinkAction";

export const AboutMain = () => {
    const t = useTranslations("HomePage");
    const greenText = t.rich("aboutGreen", {
        link: chunk => (
            <a
                href={aboutSertification}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                {chunk}
            </a>
        ),
    });

    return (
        <section className="content pc:py-[120px] tab:py-12 py-[60px]">
            <div className="tab:flex tab:flex-row-reverse tab:gap-12 tab:mb-7 pc:mb-12 tab:justify-between">
                <h3 className="subtitle tab:mt-[14px] mb-5">
                    {t("aboutSubtitle")}
                </h3>
                <div className="tab:hidden mx-auto mb-6 aspect-square max-w-[320px] overflow-hidden rounded-full">
                    <Image
                        src="/images/main-about.jpg"
                        alt="photo of the British Eye Center building"
                        width={434}
                        height={434}
                        className=" "
                    />
                </div>
                <h2 className="title-section tab:mb-0 tab:w-[82%] tab:max-w-[998px] mb-3">
                    {t("aboutTitle")}
                </h2>
            </div>
            <div className="tab:flex tab:items-center tab:justify-center pc:justify-between tab:gap-4 pc:gap-5">
                <div className="tab:block tab:w-[30%] pc:w-[49%] hidden">
                    <div className="pc:max-w-[434px] tab:max-w-[290px] mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full">
                        <Image
                            src="/images/main-about.jpg"
                            alt="photo of the British Eye Center building"
                            width={434}
                            height={434}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div className="tab:w-[65%] pc:w-[49%] tab:max-w-[810px]">
                    <div className="pc:flex pc:gap-[100px] pc:mb-[92px]">
                        <div className="pc:w-[52%]">
                            <p className="pc:text-lg pc:mb-4 pc:leading-[22px] mb-3 leading-5">
                                {t("aboutText1")}
                            </p>
                            <p className="pc:text-lg pc:mb-0 pc:leading-[22px] mb-6 leading-5">
                                {t("aboutText2")}
                            </p>
                        </div>
                        <div className="pc:block pc:w-[31%] hidden">
                            <ul className="font-oswald mb-1.5 leading-4 uppercase">
                                <li className="border-grey mb-4 flex justify-between border-b">
                                    <p className="text-grey">
                                        {t("aboutFounded")}
                                    </p>
                                    <p className="text-emerald">
                                        {t("aboutFoundedIn")}
                                    </p>
                                </li>
                                <li className="border-grey flex justify-between border-b">
                                    <p className="text-grey">
                                        {t("aboutCity")}
                                    </p>
                                    <p className="text-emerald">
                                        {t("aboutKyiv")}
                                    </p>
                                </li>
                            </ul>
                            <Image
                                src="/images/main-about-office.jpg"
                                alt="British Ophthalmological Center reception"
                                width={900}
                                height={600}
                                className="aspect-[207/104] object-cover"
                            />
                        </div>
                    </div>
                    <GreenText
                        text={greenText}
                        className="tab:block tab:w-[70%] pc:mb-1 pc:max-w-54 mb-7 hidden max-w-[333px]"
                    />
                    <div className="pc:flex-row-reverse pc:items-end flex justify-between">
                        <Fraction textUp="20" textDown={t("aboutYears")} />
                        <LinkAction
                            href="/pro-kliniku"
                            secondary
                            small
                            name={t("aboutBtn")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
