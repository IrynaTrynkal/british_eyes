import { format } from "date-fns";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { BlogsListQueryResult } from "../../../sanity.types";

export const BlogCardForAllNewsPage = ({
    news,
    btnName,
}: {
    news: NonNullable<BlogsListQueryResult>[number];
    btnName: string;
}) => {
    const t = useTranslations("Menu");

    return (
        <>
            <div className="pc:aspect-[435/220] pc:mb-3 relative mb-2 aspect-[288/146] w-full overflow-hidden">
                <div className="absolute inset-0 z-[0]" />
                <p className="bg-ivory text-grey tab:text-sm font-oswald pc:top-3 absolute top-2 left-0 z-[1] rounded-tr-sm rounded-br-sm px-2 py-1 text-xs leading-none uppercase">
                    {news.service ? t(news.service) : ""}
                </p>
                {news.image ? (
                    <div
                        className={
                            "aspect-[435/220] w-full bg-cover bg-blend-hard-light"
                        }
                        style={{
                            backgroundImage: `linear-gradient(#065d43, #065d43), url(${news.image})`,
                        }}
                    />
                ) : (
                    <div className="aspect-[435/220] h-auto w-full bg-[url(/images/megaphone1.jpg)] bg-cover bg-center" />
                )}
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="px-3">
                    <h3 className="font-oswald tab:text-2xl pc:mb-3 tab:leading-7 tab:min-h-[57px] pc:line-clamp-3 mb-6 line-clamp-2 [display:-webkit-box] overflow-hidden leading-5 font-medium break-words uppercase">
                        {news.title}
                    </h3>
                    <p className="tab:text-base tab:leading-5 pc:mb-3 mb-2 line-clamp-3 [display:-webkit-box] overflow-hidden text-sm break-words">
                        {news.shortText}
                    </p>
                </div>
                <div className="pc:gap-5 flex items-center justify-between">
                    <p className="pc:text-sm pc:py-[3px] w-full border-b border-black px-3 py-0.5 text-xs leading-none text-gray-500 uppercase">
                        {news.publication &&
                            format(new Date(news.publication), "dd.MM.yyyy")}
                    </p>
                    <Link
                        href={`/blog/${news.slug}` as any}
                        className="font-oswald tab:text-sm pc:text-base pc:hover:underline-offset-[2.5px] mr-3 text-sm leading-none font-medium whitespace-nowrap uppercase hover:underline hover:decoration-1 hover:underline-offset-[1.5px]"
                    >
                        {btnName}
                    </Link>
                </div>
            </div>
        </>
    );
};
