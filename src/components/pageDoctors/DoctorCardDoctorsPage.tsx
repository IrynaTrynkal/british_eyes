import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { PortableTextRenderer } from "@/sanity/components/PortableTextComponents";
import { urlFor } from "@/sanity/lib/image";

import { DoctorsListQueryResult } from "../../../sanity.types";

export const DoctorCardDoctorsPage = ({
    data,
    className,
}: {
    data: NonNullable<DoctorsListQueryResult>[number];
    className?: string;
}) => {
    const t = useTranslations("Doctors");
    const photo = data.photo ? urlFor(data.photo).url() : "/logo.svg";
    const year = data.experience || "----";
    return (
        <div
            className={`group cta-green-gradient tab:h-full mx-auto flex max-w-[321px] flex-col overflow-hidden rounded-lg bg-white/10 pb-1 ${className}`}
        >
            <div className="aspect-square max-w-[321px] overflow-hidden rounded-lg">
                <Image
                    src={photo}
                    alt={data.name || "Doctor Photo"}
                    width={321}
                    height={321}
                    className="overflow-hidden object-cover object-top transition-all duration-300 ease-in-out group-hover:scale-110"
                />
            </div>
            <div className="tab:pt-4 flex flex-1 flex-col justify-between pt-3">
                <div className="tab:px-3 pc:mb-0 mb-3 px-2">
                    <p className="font-oswald text-ivory mb-2 text-xs leading-none uppercase">
                        {t("experienceSince", { year: year })}
                    </p>
                    <p className="font-oswald text-ivory tab:text-xl pc:text-2xl mb-2 text-xl leading-[120%] font-medium uppercase">
                        {data.name}
                    </p>
                    <div className="text-ivory pc:[display:-webkit-box] line-clamp-3 overflow-hidden leading-[120%] break-words">
                        <PortableTextRenderer value={data.position} />
                    </div>
                </div>
                <Link
                    href={`/oftalmolohy/${data.slug}` as any}
                    className="font-oswald prepc:opacity-0 prepc:group-hover:opacity-100 text-ivory tab:pb-3 pc:pb-1 tab:text-sm pc:text-base pc:underline-offset-[2.5px] py-2 text-center text-sm font-medium uppercase underline underline-offset-[2px] transition-all duration-300 ease-in-out"
                >
                    {t("details")}
                </Link>
            </div>
        </div>
    );
};
