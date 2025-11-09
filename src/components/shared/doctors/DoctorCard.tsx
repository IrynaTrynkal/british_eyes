import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { DoctorProps } from "@/components/assets/doctorsData";
import { LocaleType } from "@/types/LocaleType";

export const DoctorCard = ({
    data,
    className,
}: {
    data: DoctorProps;
    className?: string;
}) => {
    const locale = useLocale();
    const t = useTranslations("Doctors");
    const photo = data.image ? data.image : "/logo.svg";
    const year = data.experience;
    return (
        <div className="group tab:h-[440px] pc:h-[520px] h-[400px] overflow-hidden rounded-sm bg-white/10">
            <div className="tab:w-[250px] tab:h-[270px] pc:w-[321px] pc:h-[321px] h-[240px] w-[240px] overflow-hidden rounded-sm">
                <Image
                    src={photo}
                    alt={data[locale as LocaleType].name}
                    width={321}
                    height={321}
                    className="overflow-hidden object-cover object-top transition-all duration-300 ease-in-out group-hover:scale-110"
                />
            </div>
            <div className="tab:pt-3 tab:h-[170px] pc:h-[190px] flex h-[154px] flex-col justify-between pt-2">
                <div className="tab:px-3 pc:mb-0 mb-2 px-2">
                    <p className="font-oswald text-ivory pc:mb-2 mb-1 text-xs leading-none uppercase opacity-80">
                        {t("experienceSince", { year: year })}
                    </p>
                    <p className="font-oswald text-ivory pc:mb-2 tab:text-xl pc:text-2xl pc:leading-7 tab:leading-6 mb-1 text-lg leading-5 font-medium uppercase">
                        {data[locale as LocaleType].name}
                    </p>
                    <p className="text-ivory pc:[display:-webkit-box] pc:leading-5 line-clamp-3 overflow-hidden leading-4 break-words opacity-80">
                        {data[locale as LocaleType].role}
                    </p>
                </div>
                <div className="font-oswald pc:hidden text-ivory tab:pb-3 pc:pb-1 tab:text-sm pc:text-base pc:underline-offset-[2.5px] tab:group-hover:underline pc:group-hover:block pb-2 text-center text-[11px] font-medium uppercase underline-offset-[2px] transition-all duration-300 ease-in-out">
                    {t("details")}
                </div>
            </div>
        </div>
    );
};
