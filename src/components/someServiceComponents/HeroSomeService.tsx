import { useTranslations } from "next-intl";

import { HeroSomeServiceProps } from "../assets/servicesData";
import { AboutAdress } from "../pageAbout/about/AboutAdress";
import { IconLogo } from "../shared/icons/IconLogo";
import { LinkAction } from "../shared/LinkAction";

export const HeroSomeService = ({ data }: { data: HeroSomeServiceProps }) => {
    const hasVideo = Boolean(data.videoSmallScreens || data.videoBigScreens);
    const hasImage = Boolean(data.image);
    const tH = useTranslations("HomePage");

    return (
        <section
            className={`tab:mt-0 prepc:bg-position-[var(--prepc-hero)] tab:h-120 prepc:h-[552px] relative mt-12 ${data.lazer ? "h-[calc(90vh-48px)]" : "h-[calc(60vh-48px)]"} overflow-hidden bg-position-[var(--mob-hero)] ${!hasVideo && hasImage ? "" : ""} ${!hasVideo && !hasImage ? "cta-green-gradient" : ""} ${hasVideo && !hasImage ? "bg-[#003626]" : ""}`}
            style={
                !hasVideo && hasImage
                    ? ({
                          backgroundImage: `url(${data.image})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          "--mob-hero": `${data.imgPositionMobile ? data.imgPositionMobile : "center"}`,
                          "--prepc-hero": `${data.imgPositionDesktop ? data.imgPositionDesktop : "center"}`,
                      } as React.CSSProperties)
                    : undefined
            }
        >
            {hasVideo && (
                <>
                    {data.videoSmallScreens && (
                        <video
                            className="tab:hidden absolute top-0 left-1/2 z-0 h-full w-auto -translate-x-1/2 object-cover"
                            preload="auto"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source
                                src={data.videoSmallScreens}
                                type="video/mp4"
                            />
                        </video>
                    )}
                    {data.videoBigScreens && (
                        <video
                            className="tab:block absolute top-0 left-1/2 z-0 hidden h-full w-auto -translate-x-1/2 object-cover"
                            preload="auto"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source
                                src={data.videoBigScreens}
                                type="video/mp4"
                            />
                        </video>
                    )}
                </>
            )}
            {hasImage && (
                <>
                    <div className="prepc:hidden about-hero-gradient absolute bottom-0 z-0 h-full w-full" />
                    <div className="services-hero-big prepc:block absolute bottom-0 z-0 hidden h-full w-full" />
                </>
            )}
            <div className="content tab:pt-20 tab:pb-6 prepc:pt-[104px] prepc:pb-14 tab:items-start relative z-[1] flex h-full flex-col items-end pt-7 pb-6">
                <div className="mt-auto mr-auto mb-0 ml-0">
                    <h1 className="title-h1 text-white-100 prepc:max-w-[703px] tab:mb-5 prepc:mb-6 mb-4 max-w-[400px] whitespace-pre-line uppercase">
                        {data.title}
                    </h1>
                    {data.text && (
                        <p className="text-ivory prepc:text-lg prepc:max-w-[435px] prepc:leading-[22px] max-w-[400px] leading-5">
                            {data.text}
                        </p>
                    )}
                    {data.cataract && (
                        <ul className="text-ivory prepc:text-lg prepc:max-w-[435px] prepc:leading-[22px] ml-4 max-w-[400px] list-disc leading-5">
                            {data.cataract.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    )}
                    {data.lazer && (
                        <div className="tab:absolute tab:bottom-6 tab:right-6 pc:right-12 prepc:bottom-14 prepc:max-w-[300px] tab:max-w-[270px]">
                            <p className="text-ivory prepc:text-base prepc:max-w-[435px] prepc:leading-[18px] mt-4 mb-3 max-w-[400px] text-sm leading-4 font-medium uppercase">
                                {data.lazer.listTitle}
                            </p>
                            <ul className="text-ivory prepc:text-base font-oswald prepc:max-w-[435px] prepc:gap-3 pc:mb-[50px] mb-4 flex flex-wrap gap-2 text-sm leading-none uppercase">
                                {data.lazer.list.map(item => (
                                    <li
                                        key={item}
                                        className="border-ivory bg-white-100/10 flex w-fit items-center gap-2.5 rounded-lg border px-3 py-1.5"
                                    >
                                        <div className="bg-ivory h-1.5 w-1.5 rounded-xs" />{" "}
                                        <p>{item}</p>
                                    </li>
                                ))}
                            </ul>
                            <LinkAction
                                className="tab:mx-0 mx-auto"
                                href="#booking"
                                name={tH("bookingSubtitle")}
                            />
                        </div>
                    )}
                </div>
                {data.adress && (
                    <AboutAdress
                        darkBG={data.adressDarkBG}
                        className="tab:top-16 prepc:top-[104px] tab:left-6 pc:left-12 absolute top-7 left-4"
                    />
                )}
            </div>
            {!hasVideo && !hasImage && (
                <IconLogo className="text-emerald tab:block tab:bottom-14 tab:right-14 prepc:right-[120px] tab:w-[300px] prepc:w-[324px] absolute hidden h-auto -rotate-45" />
            )}
        </section>
    );
};
