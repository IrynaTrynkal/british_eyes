import Image from "next/image";
import { useTranslations } from "next-intl";

import { raynerSiteLink } from "@/components/assets/contacts";

export const RaynerAbout = () => {
    const t = useTranslations("ServicesPage");
    return (
        <section className="content tab:pb-12 pc:pb-[120px] pc:pt-[90px] pt-10 pb-[60px]">
            <h2 className="title-section tab:block tab:mb-8 prepc:hidden hidden">
                {t("raynerAboutTitle")}
            </h2>
            <div className="tab:justify-between tab:flex">
                <div className="tab:w-[49%] prepc:w-[58%] prepc:justify-between prepc:flex prepc:flex-col">
                    <h2 className="title-section prepc:block tab:hidden mb-6 max-w-[662px]">
                        {t("raynerAboutTitle")}
                    </h2>
                    <div className="prepc:flex prepc:items-end prepc:justify-between">
                        <div className="prepc:w-[41.4%] prepc:mb-0 mb-5 aspect-[288/164] overflow-hidden rounded">
                            <Image
                                src="/images/rayner-preview.jpg"
                                alt=""
                                width={642}
                                height={400}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="tab:mb-0 prepc:w-[55.5%] prepc:text-lg mb-2 leading-[120%]">
                            {t.rich("raynerAboutText1", {
                                link: chunk => (
                                    <a
                                        href={raynerSiteLink}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        className="underline"
                                    >
                                        {chunk}
                                    </a>
                                ),
                            })}
                        </p>
                    </div>
                    <p className="tab:hidden mb-5 leading-[120%]">
                        {t("raynerAboutText2")}
                    </p>
                </div>
                <div className="tab:w-[49%] prepc:w-[40%]">
                    <p className="tab:block tab:mb-5 prepc:hidden hidden leading-[120%]">
                        {t("raynerAboutText2")}
                    </p>
                    <div className="relative aspect-[288/200] overflow-hidden rounded">
                        <video
                            className="absolute inset-0 h-full w-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/videos/rayner.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="border-ivory bg-white-100/10 pc:w-[309px] absolute top-2 right-2 flex w-[272px] gap-2.5 rounded-lg border p-3">
                            <div className="bg-ivory h-1.5 w-1.5 shrink-0 rounded-[2px]" />
                            <p className="text-ivory font-oswald prepc:text-base text-sm leading-[120%] uppercase">
                                {t("raynerAboutItem")}
                            </p>
                        </div>
                        <p className="prepc:block text-ivory prepc:text-lg absolute bottom-6 left-7 mb-2 hidden w-[80%] max-w-[435px] leading-[120%]">
                            {t("raynerAboutText2")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
