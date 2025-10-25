import { HeroSomeServiceProps } from "../assets/servicesData";

export const HeroSomeService = ({ data }: { data: HeroSomeServiceProps }) => {
    const hasVideo = Boolean(data.video);
    const hasImage = Boolean(data.image);
    return (
        <section
            className={`tab:mt-0 prepc:bg-position-[var(--prepc-hero)] tab:h-120 prepc:h-[552px] relative mt-12 h-[calc(100vh-48px)] bg-position-[var(--mob-hero)] ${!hasVideo && hasImage ? "" : ""} ${!hasVideo && !hasImage ? "green-gradient" : ""} `}
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
                <video
                    className="absolute top-0 left-1/2 z-0 h-full w-auto -translate-x-1/2 object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={data.image}
                >
                    <source src={data.video} type="video/mp4" />
                </video>
            )}
            {hasImage && (
                <>
                    <div className="prepc:hidden about-hero-gradient absolute bottom-0 z-0 h-full w-full" />
                    <div className="services-hero-big prepc:block absolute bottom-0 z-0 hidden h-full w-full" />
                </>
            )}
            <div className="content tab:pt-20 tab:pb-6 prepc:pt-[104px] prepc:pb-14 tab:items-start relative z-[1] flex h-full flex-col items-end pt-7 pb-6">
                <div className="tab:mx-0 mx-auto mt-auto mb-0">
                    <h1 className="title-h1 text-white-100 prepc:max-w-[553px] tab:mb-5 prepc:mb-6 mb-4 max-w-[400px] uppercase">
                        {data.title}
                    </h1>
                    {data.text && (
                        <p className="text-ivory prepc:text-lg prepc:max-w-[435px] prepc:leading-[22px] max-w-[400px] leading-5">
                            {data.text}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};
