"use client";
import { useRef, useState } from "react";

import {
    FAQServiceListType,
    TextSegment,
} from "@/components/assets/servicesData";
import { IconArrow } from "@/components/shared/icons/IconArrow";

export function AccordionService({ item }: { item: FAQServiceListType }) {
    const [isAccordionOpen, setAccordionOpen] = useState(false);
    const { answer, question } = item;
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setAccordionOpen(prev => !prev);
    };

    return (
        <li
            className={`border-grey-70 group tab:px-3 tab:pt-3 tab:pb-2 rounded-md border p-2 transition-all duration-500 hover:border-black ${isAccordionOpen ? "bg-green-10" : "bg-white"}`}
        >
            <button
                aria-label="Open answer"
                onClick={toggleAccordion}
                className="tab:items-start flex w-full items-center justify-between outline-none"
            >
                <summary className="font-oswald tab:text-lg pc:text-xl tab:leading-5 pc:leading-6 text-left text-sm leading-4 font-medium uppercase">
                    {question}
                </summary>

                <div className="h-[40px] w-[40px] p-2.5">
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
                className={`${
                    isAccordionOpen ? "tab:mt-0 mt-3" : ""
                } tab:w-[91.5%] tab:min-w-[445px] overflow-hidden leading-5 transition-all duration-500`}
            >
                {answer.map((seg, index) => {
                    const wrapperClasses = [seg.gap && "mb-3"]
                        .filter(Boolean)
                        .join(" ");

                    const renderSegments = (item: string | TextSegment[]) => {
                        if (typeof item === "string") return item;
                        return item.map((t, idx) => (
                            <span
                                key={idx}
                                className={t.bold ? "font-bold" : ""}
                            >
                                {`${t.value} `}
                            </span>
                        ));
                    };

                    if (seg.type === "list") {
                        return (
                            <ul
                                key={index}
                                className={`ml-4 list-outside list-disc ${wrapperClasses}`}
                            >
                                {seg.list.map((item, i) => (
                                    <li key={i}>{renderSegments(item)}</li>
                                ))}
                            </ul>
                        );
                    }
                    if (seg.type === "text") {
                        return (
                            <p key={index} className={wrapperClasses}>
                                {renderSegments(seg.text)}
                            </p>
                        );
                    }
                })}
            </div>
        </li>
    );
}
