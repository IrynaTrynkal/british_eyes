import { useTranslations } from "next-intl";

import { aboutServicesList } from "@/components/assets/aboutData";
import { priceList } from "@/components/assets/priceList";
import { LinkAction } from "@/components/shared/LinkAction";

import { TeamCard } from "./TeamCard";

export const Team = () => {
    const t = useTranslations("AboutPage");
    const teamList = [t("teamLi1"), t("teamLi2"), t("teamLi3")];
    return (
        <section className="content pc:pb-30 relative pb-[60px]">
            <div className="tab:flex tab:justify-between prepc:items-end prepc:mb-10">
                <div className="tab:max-w-[540px] prepc:max-w-[890px] prepc:items-end prepc:gap-5 prepc:w-[66%] prepc:flex tab:w-[70%]">
                    <h2 className="font-oswald prepc:w-[calc(50%-10px)] prepc:mb-0 prepc:text-5xl mb-5 text-[28px] leading-none">
                        {t("teamTitle")}
                    </h2>
                    <ul className="prepc:w-[calc(50%-20px)] prepc:text-lg prepc:leading-[22px] prepc:gap-4 prepc:mb-0 mb-6 ml-2.5 flex list-disc flex-col gap-2 pl-2.5">
                        {teamList.map(li => (
                            <li key={li}>{li}</li>
                        ))}
                    </ul>
                </div>
                <LinkAction
                    className="tab:flex hidden"
                    secondary
                    name={t("teamBtn")}
                    href="/posluhy"
                />
            </div>
            <ul className="tab:flex-row tab:flex-wrap tab:justify-center prepc:gap-5 tab:mb-0 mb-6 flex flex-col gap-3">
                {aboutServicesList.map(ser => {
                    const priceBlock = priceList.find(
                        block => block.key === ser.key
                    );

                    const firstPriceItem = priceBlock?.list?.[0];

                    const price =
                        firstPriceItem?.discountPrice ??
                        firstPriceItem?.price ??
                        null;

                    const disc = firstPriceItem?.discountPrice ? true : false;

                    return (
                        <li
                            key={ser.key}
                            className="border-grey group tab:max-w-[480px] prepc:w-[32%] prepc:max-w-[434px] pc:w-[434px] tab:w-[49%] link-gradient rounded-xl border p-3"
                        >
                            <TeamCard ser={ser} price={price} discount={disc} />
                        </li>
                    );
                })}
            </ul>
            <LinkAction
                className="tab:hidden mx-auto"
                secondary
                name={t("teamBtn")}
                href="/posluhy"
            />
        </section>
    );
};
