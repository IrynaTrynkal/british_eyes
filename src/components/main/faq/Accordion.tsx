"use client";
import { useRef, useState } from "react";

import { FAQLocaleType } from "@/components/assets/faqData";
import { IconArrow } from "@/components/shared/icons/IconArrow";

interface AccordionProps {
    item: FAQLocaleType;
}

export function Accordion({ item }: AccordionProps) {
    const [isAccordionOpen, setAccordionOpen] = useState(false);
    const { answer, question } = item;
    const contentRef = useRef<HTMLDivElement>(null);

    const changeStateAccordion = () => {
        setAccordionOpen(isAccordionOpen => !isAccordionOpen);
    };

    return (
        <li
            className={`border-grey-70 group tab:px-3 tab:pt-3 tab:pb-2 rounded-md border p-2 transition-all duration-500 group-hover:border-black ${isAccordionOpen ? "bg-green-10" : "bg-white"}`}
        >
            <button
                aria-label="open answer button"
                onClick={changeStateAccordion}
                className={
                    "tab:items-start flex w-full items-center justify-between outline-none"
                }
            >
                <div>
                    <summary className="font-oswald tab:text-lg pc:text-xl tab:leading-5 pc:leading-6 text-left text-sm leading-4 font-medium uppercase">
                        {question}
                    </summary>
                </div>
                <div className={"h-[40px] w-[40px] p-2.5"}>
                    <IconArrow
                        className={`h-5 w-5 transition-transform duration-300 ease-out ${isAccordionOpen ? "-rotate-90" : "rotate-90"}`}
                    />
                </div>
            </button>

            <div
                ref={contentRef}
                style={{
                    maxHeight: isAccordionOpen
                        ? `${contentRef.current?.scrollHeight}px`
                        : "0px",
                }}
                className={`${isAccordionOpen ? "tab:mt-0 mt-3" : ""} tab:w-[91.5%] tab:min-w-[445px] overflow-hidden leading-5 transition-all duration-500`}
            >
                {answer.map((ans, index) => {
                    const baseClasses = `
      ${ans.gap ? "mb-3" : ""}
      ${ans.bold ? "font-bold" : ""}
    `;

                    return ans.list ? (
                        <ul
                            key={index}
                            className={`ml-4 list-outside list-disc ${baseClasses}`}
                        >
                            {(Array.isArray(ans.text)
                                ? ans.text
                                : [ans.text]
                            ).map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p key={index} className={baseClasses}>
                            {Array.isArray(ans.text)
                                ? ans.text.join(" ")
                                : ans.text}
                        </p>
                    );
                })}
            </div>
        </li>
    );
}
