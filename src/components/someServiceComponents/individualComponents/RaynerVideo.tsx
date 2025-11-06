import { useTranslations } from "next-intl";

export const RaynerVideo = () => {
    const t = useTranslations("ServicesPage");
    return (
        <section className="content tab:hidden">
            <div className="mb-5 aspect-[288/162] overflow-hidden rounded">
                <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/videos/rayner-spiral.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h2 className="font-oswald mx-auto w-[258px] text-center text-xl leading-[120%] font-medium uppercase">
                {t("raynerAdv")}
            </h2>
        </section>
    );
};
