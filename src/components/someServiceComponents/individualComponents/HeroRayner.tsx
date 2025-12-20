import { useTranslations } from "next-intl";

import { CustomList } from "@/components/shared/CustomList";

export const HeroRayner = () => {
    const t = useTranslations("ServicesPage");
    const raynerText1 = t.rich("raynerText1", {
        bold: chunk => <span className="font-bold">{chunk}</span>,
    });
    const videoSmallScreens = "/videos/rayner-mob.mp4";
    const videoBigScreens = "/videos/rayner-desk.mp4";
    const list = [t("reynerItem1"), t("reynerItem2"), t("reynerItem3")];

    return (
        <section
            className={
                "tab:h-120 prepc:mt-[104px] relative mt-24 h-[calc(90vh-48px)] overflow-hidden bg-[#003626]"
            }
        >
            <>
                <video
                    className="tab:hidden absolute top-0 left-1/2 z-0 h-full w-auto -translate-x-1/2 object-cover"
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={videoSmallScreens} type="video/mp4" />
                </video>
                <video
                    className="tab:block absolute top-0 left-1/2 z-0 hidden h-full w-auto -translate-x-1/2 object-cover"
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={videoBigScreens} type="video/mp4" />
                </video>
            </>
            <div className="content tab:pb-6 prepc:pt-[104px] prepc:max-w-fit prepc:pb-8 tab:max-w-[840px] relative z-[1] flex h-full flex-col justify-between gap-10 pt-8 pb-[50px]">
                <div className="prepc:flex-row prepc:items-center flex flex-grow flex-col justify-between">
                    <div className="">
                        <p className="text-ivory prepc:w-fit w-[149px] leading-[120%] uppercase">
                            {raynerText1}
                        </p>
                        <h1 className="text-white-100 prepc:text-8xl pc:text-[107px] font-oswald text-[44px] leading-[100%]">
                            Rayner
                        </h1>
                    </div>
                    <div className="prepc:w-[309px] mr-0 ml-auto w-fit text-right">
                        <p className="text-ivory prepc:w-fit mr-0 ml-auto w-[130px] leading-[120%] uppercase">
                            {t("raynerText2")}
                        </p>
                        <h1 className="text-white-100 font-oswald pc:text-[107px] prepc:text-8xl text-[44px] leading-[100%] uppercase">
                            Galaxy
                        </h1>
                    </div>
                </div>
                <CustomList className="prepc:gap-4 mx-auto" list={list} />
            </div>
        </section>
    );
};
