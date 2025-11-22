import { ContentLazerSubpageType } from "@/components/assets/laserMethodsData";

export const LazerSubpageContent = ({
    content,
}: {
    content: ContentLazerSubpageType[];
}) => {
    return (
        <ul className="flex flex-col gap-3">
            {content.map(item => (
                <li key={item.textTitle}>
                    <h4 className="font-oswald mb-1 leading-5 font-medium uppercase">
                        {item.textTitle}
                    </h4>
                    {item.text &&
                        item.text.map((text, ind) => (
                            <p
                                key={text}
                                className={`leading-5 ${ind + 1 !== item.text?.length ? "mb-2" : ""}`}
                            >
                                {text}
                            </p>
                        ))}
                </li>
            ))}
        </ul>
    );
};
