import { useLocale, useTranslations } from "next-intl";

import { approachList } from "@/components/assets/approachData";
import { LocaleType } from "@/types/LocaleType";

export const Approach = () => {
    const t = useTranslations("HomePage");
    const locale = useLocale();
    return (
        <section className="text-ivory tab:py-12 bg-[url(/images/approach.jpg)] bg-cover bg-center bg-no-repeat py-6">
            <div className="content">
                <h2 className="title-section-ivory tab:max-w-[560px] tab:mb-20 max-w-[440px]">
                    {t("approachTitle")}
                </h2>
                <div className="mr-0 ml-auto max-w-[777px]">
                    <h3 className="font-oswald pc:text-xl tab:text-base pc:leading-6 mb-6 text-sm leading-none font-medium uppercase">
                        {t("approachSubtitle")}
                    </h3>
                    <ul>
                        {approachList.map(item => (
                            <li
                                key={item.en.title}
                                className="tab:flex tab:gap-4 border-t p-3"
                            >
                                <div className="tab:w-[41%]">
                                    <h4 className="tab:mb-0 tab:text-base pc:leading-6 tab:leading-5 pc:text-xl font-oswald tab:max-w-[200px] pc:max-w-[300px] mb-3 w-60 text-sm leading-4 font-medium uppercase">
                                        {item[locale as LocaleType].title}
                                    </h4>
                                </div>
                                <p className="tab:w-[56%] pc:text-lg pc:leading-6 leading-[18px]">
                                    {item[locale as LocaleType].text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
