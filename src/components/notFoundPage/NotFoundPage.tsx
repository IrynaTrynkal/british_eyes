import Image from "next/image";
import { useTranslations } from "next-intl";

import { LinkAction } from "../shared/LinkAction";
import { ServicesNav } from "./ServicesNav";

export const NotFoundPage = () => {
    const t = useTranslations("NotFound");
    return (
        <section className="content relative pt-40 pb-[60px]">
            <Image
                src="/images/404.png"
                alt={t("title")}
                width={527}
                height={305}
                className="tab:max-w-[420px] prepc:max-w-[527px] mx-auto h-auto w-[73%] max-w-[300px]"
            />
            <h1 className="font-oswald tab:-mt-16 prepc:-mt-26 prepc:mb-[30px] prepc:text-7xl tab:text-4xl -mt-8 mb-4 text-center text-[28px] leading-[100%]">
                {t("title")}
            </h1>
            <p className="tab:text-lg prepc:text-xl prepc:max-w-fit prepc:mb-[30px] tab:max-w-[400px] mx-auto mb-9 max-w-[270px] text-center leading-[120%]">
                {t("text")}
            </p>
            <LinkAction
                name={t("btn")}
                href="/"
                className="tab:w-fit tab:px-3 prepc:mb-[50px] mx-auto mb-12"
            />
            <ServicesNav />
        </section>
    );
};
