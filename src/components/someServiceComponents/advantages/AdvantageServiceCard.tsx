import Image from "next/image";

import { AdvantageServiceCardProps } from "@/components/assets/servicesData";
import { IconLogo } from "@/components/shared/icons/IconLogo";

export const AdvantageServiceCard = ({
    data,
}: {
    data: AdvantageServiceCardProps;
}) => {
    return (
        <div
            className={`relative aspect-square h-full overflow-hidden ${data.bgTransparent ? "tab:py-[5%] tab:px-2 pc:p-4 flex flex-col items-center justify-center p-2" : data.imageOnly || data.videoOnly ? "rounded-full" : "green-gradient text-ivory tab:rounded-lg tab:py-[5%] tab:px-2 pc:p-4 rounded p-2"}`}
        >
            {data.videoOnly ? (
                <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={data.videoOnly} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : data.imageOnly ? (
                <div className="h-full w-full">
                    <Image
                        src={data.imageOnly}
                        alt={data.imageOnly}
                        width={319}
                        height={319}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            ) : (
                <>
                    <div className="pc:w-[295px] tab:w-[208px] relative z-[1] mx-auto w-[224px]">
                        {data.title && (
                            <h4
                                className={`font-oswald pc:text-xl pc:leading-6 pc:min-h-12 pc:mb-6 mb-4 min-h-10 leading-5 font-medium uppercase backdrop-blur-xs ${data.bgTransparent ? "mx-auto text-center" : "prepc:w-[80%] w-[140px]"}`}
                            >
                                {data.title}
                            </h4>
                        )}
                        {data.text && (
                            <p
                                className={`pc:text-lg pc:leading-[22px] leading-4 ${data.bgTransparent && "mx-auto text-center"}`}
                            >
                                {data.text}
                            </p>
                        )}
                    </div>
                    <IconLogo
                        className={`absolute right-0 bottom-[-12px] z-[0] h-auto w-20 -rotate-45 ${data.bgTransparent ? "text-light-logo pc:hidden" : "text-emerald"}`}
                    />
                </>
            )}
        </div>
    );
};
