import {
    ContentType,
    EyeDiseaseSlugType,
} from "../assets/patientsInstructionData";
import { LinkAction } from "../shared/LinkAction";
import { TextTypeRender } from "../shared/TextTypeRender";

export const MainAllDiseases = ({
    content,
    link,
    title,
    btnName,
}: {
    content: ContentType;
    link: EyeDiseaseSlugType;
    title: string;
    btnName: string;
}) => {
    return (
        <div className="tab:w-[calc(100%-227px)] tab:max-w-full tab:mx-0 mx-auto max-w-[540px]">
            <h2 className="cta-green-gradient text-ivory title-section-ivory rounded-tl rounded-tr px-4 py-3">
                {title}
            </h2>
            <div className="tab:border tab:border-t-0 tab:border-grey-70 rounded-br rounded-bl bg-white px-4 py-6">
                {content.title && (
                    <h3 className="font-oswald prepc:text-2xl prepc:leading-7 mb-3 text-lg leading-[22px] font-medium uppercase">
                        {content.title}
                    </h3>
                )}
                <TextTypeRender data={content.text} />
                <LinkAction
                    secondary
                    name={btnName}
                    href={`/zakhvoryuvannya-ochey/${link}`}
                    className="prepc:mt-6 tab:mx-0 mx-auto mt-5"
                />
            </div>
        </div>
    );
};
