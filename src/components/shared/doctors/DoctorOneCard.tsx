import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { PortableTextRenderer } from "@/sanity/components/PortableTextComponents";
import { urlFor } from "@/sanity/lib/image";

import { DoctorsListQueryResult } from "../../../../sanity.types";
import { IconArrow } from "../icons/IconArrow";

export const DoctorOneCard = ({
    data,
}: {
    data: NonNullable<DoctorsListQueryResult>[number];
}) => {
    const t = useTranslations("Doctors");
    const photo = data.photo ? urlFor(data.photo).url() : "/logo.svg";
    const year = data.experience || "---";
    return (
        <div className="group tab:flex tab:h-full tab:items-stretch overflow-hidden rounded-sm bg-white/10">
            <div className="tab:w-1/2 tab:max-w-[434px] prepc:max-w-[547px] relative aspect-square w-full overflow-hidden rounded-sm">
                <Image
                    src={photo}
                    alt={data.name || "Doctor Photo"}
                    fill
                    className="object-cover object-top transition-all duration-300 ease-in-out group-hover:scale-110"
                    sizes="(min-width: 768px) 50vw, 100vw"
                />
            </div>
            <div className="tab:pt-3 tab:w-1/2 tab:justify-between prepc:py-5 flex flex-col py-2">
                <div className="tab:px-3 prepc:px-5 pc:mb-0 mb-4 px-2">
                    <p className="font-oswald text-ivory pc:mb-2 prepc:text-sm mb-2 text-xs leading-none uppercase opacity-80">
                        {t("experienceSince", { year: year })}
                    </p>
                    <p className="font-oswald text-ivory prepc:mb-3 tab:text-xl prepc:text-2xl pc:leading-7 tab:leading-6 mb-2 text-lg leading-5 font-medium uppercase">
                        {data.name}
                    </p>
                    <div className="text-ivory prepc:mb-4 mb-1 leading-[120%] opacity-80">
                        <PortableTextRenderer value={data.position} />
                    </div>
                    <h3 className="text-ivory font-oswald prepc:mb-4 prepc:text-sm mb-2 text-xs leading-[120%] uppercase underline">
                        {t("specialization")}
                    </h3>
                    <div className="text-ivory">
                        <PortableTextRenderer value={data.specialization} />
                    </div>
                    <h3 className="text-ivory font-oswald prepc:mb-4 prepc:text-sm mb-2 text-xs leading-[120%] uppercase underline">
                        {t("activity")}
                    </h3>
                    <div className="text-ivory tab:block hidden">
                        <PortableTextRenderer value={data.activity} />
                    </div>
                </div>
                <Link
                    href={`/oftalmolohy/${data.slug}` as any}
                    className="font-oswald group text-ivory tab:pb-3 prepc:gap-2 pc:pb-1 pc:text-base tab:ml-3 prepc:ml-5 mx-auto flex w-fit items-center gap-1 py-3 text-center text-sm font-medium uppercase"
                >
                    <IconArrow className="h-4 w-4 transition-all duration-300 group-hover:mr-0 group-hover:translate-x-1" />
                    <p className="tab:text-sm font-oswald relative">
                        {t("detailsOne")}
                        <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-full origin-right bg-current transition-transform duration-500 ease-in-out group-hover:scale-x-[0.1]" />{" "}
                    </p>
                </Link>
            </div>
        </div>
    );
};
