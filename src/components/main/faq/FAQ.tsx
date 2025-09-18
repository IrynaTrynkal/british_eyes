import { useLocale } from "next-intl";

import { FAQType } from "@/components/assets/faqData";
import { IconLogo } from "@/components/shared/icons/IconLogo";
import { LocaleType } from "@/types/LocaleType";

import { Accordion } from "./Accordion";
import { FAQSchema } from "./FAQShema";

export const FAQ = ({ faqList }: { faqList: FAQType }) => {
    const locale = useLocale();
    return (
        <>
            <section className="content tab:flex tab:gap-5 tab:justify-between pc:pb-[120px] tab:pb-12 relative overflow-hidden pb-[60px]">
                <IconLogo className="tab:block text-green-20 absolute top-20 left-[7%] z-[-1] hidden h-auto w-[34%] -rotate-45 opacity-15" />
                <h2 className="title-section tab:mb-0 tab:w-[32%] mb-6">
                    {faqList.title[locale as LocaleType]}
                </h2>
                <ul className="tab:w-[66%] tab:gap-3 flex flex-col gap-2">
                    {faqList.content.map(item => (
                        <Accordion
                            key={item[locale as LocaleType].question}
                            item={item[locale as LocaleType]}
                        />
                    ))}
                </ul>
            </section>
            <FAQSchema faqList={faqList} locale={locale as LocaleType} />
        </>
    );
};
