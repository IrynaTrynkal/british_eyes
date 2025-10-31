import Image from "next/image";

import { NumberListProps } from "@/components/assets/servicesData";
import { DownloadPDF } from "@/components/shared/DownloadPDF";

import { NumberListItem } from "./NumberListItem";

export const NumberListSection = ({ data }: { data: NumberListProps }) => {
    return (
        <section
            className={`${data.paddingTop ? "tab:pt-12 pc:pt-[120px] pt-[60px]" : ""} ${data.paddingBottom ? "tab:pb-12 pc:pb-[120px] pb-[60px]" : ""}`}
        >
            {data.title && (
                <div className="tab:max-w-full tab:hidden tab:px-6 pc:px-12 mx-auto mb-6 max-w-[540px] px-4">
                    <h2 className="title-section tab:max-w-[360px] max-w-[460px]">
                        {data.title}
                    </h2>
                </div>
            )}
            {(data.title || data.text) && (
                <div className="tab:pb-12 tab:px-6 pc:px-12 tab:max-w-full tab:flex tab:justify-between tab:items-start pc:pb-[120px] mx-auto max-w-[540px] px-4 pb-[60px]">
                    {data.image && (
                        <div className="tab:w-[40%] prepc:w-[32%] pc:min-w-[435px] prepc:max-w-[477px] tab:aspect-[435/249] tab:mb-0 prepc:rounded-lg mb-5 aspect-[288/164] overflow-hidden rounded">
                            <Image
                                src={data.image}
                                alt={
                                    data.title
                                        ? data.title
                                        : "Number List Image"
                                }
                                width={652}
                                height={373}
                                className={
                                    "h-full w-full object-cover object-center"
                                }
                            />
                        </div>
                    )}
                    <div className="tab:w-[57%] prepc:w-[66%]">
                        {data.title && (
                            <h2 className="title-section tab:block tab:max-w-full prepc:max-w-[660px] pc:max-w-[750px] mb-6 hidden max-w-[440px]">
                                {data.title}
                            </h2>
                        )}
                        {data.text && (
                            <div className="prepc:columns-2 prepc:space-y-2 prepc:space-x-2 prepc:[column-fill:_balance] prepc:block flex flex-col gap-2">
                                {data.text.map((paragraph, i) => (
                                    <p
                                        key={i}
                                        className="pc:text-lg pc:leading-[22px] break-inside-avoid leading-5"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
            <div className="tab:max-w-full tab:px-6 pc:px-12 tab:flex tab:justify-between relative mx-auto max-w-[540px]">
                <div
                    className={
                        "tab:w-[40%] prepc:w-[32%] pc:min-w-[435px] prepc:max-w-[477px] tab:px-0 tab:max-w-[360px] relative max-w-[440px] px-4"
                    }
                >
                    <h2
                        className={`title-section tab:sticky tab:top-24 mb-6 ${
                            data.pdfCard ? "tab:pb-44 prepc:pb-36 pc:pb-50" : ""
                        }`}
                    >
                        {data.listTitle}
                    </h2>
                </div>
                <ul className="tab:w-[57%] prepc:w-[66%] tab:gap-3 prepc:gap-5 flex flex-col gap-1">
                    {data.list.map((item, index) => (
                        <NumberListItem
                            key={index}
                            index={index + 1}
                            item={item}
                        />
                    ))}
                </ul>
                {data.pdfCard && (
                    <div className="content tab:mt-0 tab:absolute tab:bottom-0 tab:left-0 tab:w-[45%] prepc:w-[35%] mt-3">
                        <DownloadPDF dataPDF={data.pdfCard} />
                    </div>
                )}
            </div>
        </section>
    );
};
