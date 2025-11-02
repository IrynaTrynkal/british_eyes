import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { dataPatientsPage } from "../assets/patientsInstructionData";
import { IconArrow } from "../shared/icons/IconArrow";
import { IconLogo } from "../shared/icons/IconLogo";

export const MainPatients = () => {
    const t = useTranslations("PatientsPage");
    const tM = useTranslations("Menu");

    return (
        <section className="content tab:pb-12 pc:pb-[120px] tab:flex tab:justify-between relative pb-[60px]">
            <h2 className="title-section tab:w-[30%] prepc:w-[33%] mb-6 whitespace-pre-line">
                {t("title")}
            </h2>
            <ul className="tab:w-[68%] prepc:w-[66%] prepc:gap-5 flex flex-col gap-3">
                {dataPatientsPage.map(item => (
                    <li key={item.key}>
                        <Link
                            href={`/${item.key}` as any}
                            className="green-gradient font-oswald text-ivory pc:text-2xl pc:leading-8 relative z-[1] flex justify-between rounded p-3 leading-5 font-medium uppercase"
                        >
                            <h2> {tM(item.key)}</h2>
                            <div className="h-4 w-4">
                                <IconArrow
                                    className={`h-4 w-4 ${item.data ? "-rotate-90" : ""}`}
                                />
                            </div>
                        </Link>
                        {item.data && (
                            <div className="border-grey prepc:flex-row -mt-2 flex flex-col gap-5 rounded-br rounded-bl border border-t-0 bg-white px-3 pt-7 pb-5">
                                {item.data.map((content, ind) => (
                                    <div
                                        className={`${item.key === "zakhvoryuvannya-ochey" ? "prepc:w-full" : "prepc:w-[49%]"}`}
                                        key={ind}
                                    >
                                        {content.listTitle && (
                                            <h3 className="font-oswald mb-5 leading-none font-medium uppercase">
                                                {content.listTitle === "before"
                                                    ? t("beforeProcedure")
                                                    : t("afterProcedure")}
                                            </h3>
                                        )}
                                        <ul
                                            className={`ml-4 flex list-disc flex-col gap-3 ${item.key === "zakhvoryuvannya-ochey" ? "prepc:columns-2 prepc:block prepc:space-y-3 prepc:gap-x-10" : ""}`}
                                        >
                                            {content.list.map(itemList => (
                                                <li key={itemList.key}>
                                                    <Link
                                                        href={
                                                            item.key ===
                                                            "zakhvoryuvannya-ochey"
                                                                ? `/zakhvoryuvannya-ochey/${itemList.key}`
                                                                : (`/${itemList.key}` as any)
                                                        }
                                                        className={`font-oswald prepc:hover:underline prepc:no-underline leading-5 uppercase underline transition-all duration-300 ease-in-out ${item.key === "zakhvoryuvannya-ochey" ? "prepc:w-[49%]" : ""}`}
                                                    >
                                                        {tM(itemList.key)}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <IconLogo className="text-logo prepc:left-12 absolute top-18 left-0 z-[-1] h-auto w-[40%] max-w-[449px] -rotate-45" />
        </section>
    );
};
