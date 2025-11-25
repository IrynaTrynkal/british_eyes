import { PDFType } from "../assets/servicesData";
import { IconPDF } from "./icons/IconPDF";
import { LinkDownload } from "./LinkDownload";

export const DownloadPDF = ({ dataPDF }: { dataPDF: PDFType }) => {
    return (
        <div className="text-ivory tab:mx-0 relative mx-auto max-w-[435px] rounded-lg bg-black p-3">
            <h3 className="font-oswald pc:text-xl pc:leading-6 pc:mb-12 mb-6 w-[70%] leading-5 font-medium uppercase">
                {dataPDF.title}
            </h3>
            <div className="tab:flex-col tab:gap-3 prepc:flex-row prepc:items-center tab:items-start flex items-center justify-between">
                <div className="flex items-center gap-2.5 py-0.5">
                    <div className="bg-ivory h-1.5 w-1.5 rounded-xs" />
                    <p className="font-oswald prepc:text-base text-sm leading-none uppercase">
                        {dataPDF.description}
                    </p>
                </div>
                <LinkDownload
                    href={dataPDF.link}
                    secondary
                    ivory
                    small
                    name={dataPDF.btnName}
                    download=""
                    className="mr-1 mb-1"
                />
            </div>

            <div className="border-ivory bg-white-100/10 pc:px-3 absolute top-3 right-3 rounded border px-2 py-1.5">
                <IconPDF />
            </div>
        </div>
    );
};
