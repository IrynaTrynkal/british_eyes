import { FAQServiceSectionType } from "@/components/assets/servicesData";
import { IconLogo } from "@/components/shared/icons/IconLogo";

import { AccordionService } from "./AccordionService";
import { FAQServiceSchema } from "./FAQServiceShema";

export const FAQService = ({ faqList }: { faqList: FAQServiceSectionType }) => {
    return (
        <>
            <section className="content tab:flex tab:gap-5 tab:justify-between pc:pb-[120px] tab:pb-12 relative overflow-hidden pb-[60px]">
                <IconLogo className="tab:block text-green-20 absolute top-20 left-[7%] z-[-1] hidden h-auto w-[34%] -rotate-45 opacity-15" />
                <h2 className="title-section tab:mb-0 tab:w-[32%] mb-6">
                    {faqList.title}
                </h2>
                <ul className="tab:w-[66%] tab:gap-3 flex flex-col gap-2">
                    {faqList.content.map(item => (
                        <AccordionService key={item.question} item={item} />
                    ))}
                </ul>
            </section>
            <FAQServiceSchema faqList={faqList.content} />
        </>
    );
};
