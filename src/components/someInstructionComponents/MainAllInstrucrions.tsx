import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { dataPatientsPage } from "../assets/patientsInstructionData";

export const MainAllInstrucrions = () => {
    const t = useTranslations("PatientsPage");
    const tM = useTranslations("Menu");

    const data = dataPatientsPage.find(
        item => item.key === "reminders-and-instructions-for-patients"
    )!;
    data.data;
    return (
        <section className="tab:flex-row tab:pb-12 prepc:pt-7 tab:px-6 pc:px-12 prepc:pb-[120px] flex flex-col gap-4 pb-[60px]">
            {data.data?.map((content, ind) => (
                <div
                    className="prepc:w-[49%] tab:max-w-[435px] tab:mx-0 bg-green-10 mx-auto w-full max-w-[540px] rounded-lg p-4"
                    key={ind}
                >
                    {content.listTitle && (
                        <h3 className="font-oswald text-ivory green-gradient mb-5 rounded p-2 text-center leading-none font-medium uppercase">
                            {content.listTitle === "before"
                                ? t("beforeProcedure")
                                : t("afterProcedure")}
                        </h3>
                    )}
                    <ul className={"ml-4 flex list-disc flex-col gap-3"}>
                        {content.list.map(itemList => (
                            <li key={itemList.key}>
                                <Link
                                    href={`/${itemList.key}` as any}
                                    className={
                                        "font-oswald leading-5 uppercase transition-all duration-300 ease-in-out hover:underline"
                                    }
                                >
                                    {tM(itemList.key)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};
