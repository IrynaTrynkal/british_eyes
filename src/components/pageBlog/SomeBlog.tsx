import { format } from "date-fns";
import { useTranslations } from "next-intl";

import { PortableTextRenderer } from "@/sanity/components/PortableTextComponents";

import { BlogQueryResult } from "../../../sanity.types";

export const SomeBlog = ({ blog }: { blog: BlogQueryResult }) => {
    const t = useTranslations("Menu");
    if (!blog) return null;

    return (
        <section className="content pb-[60px]">
            <div className="tab:flex tab:justify-between tab:mb-6 prepc:mb-8 prepc:gap-5 tab:gap-3">
                <div className="tab:px-0 tab:flex tab:flex-col tab:justify-between tab:w-[74.5%] px-4">
                    <div className="pc:aspect-[435/220] tab:hidden relative mb-4 aspect-[288/146] w-full overflow-hidden rounded-tl-md rounded-tr-md">
                        <div className="absolute inset-0 z-[0]" />
                        {blog.image ? (
                            <div
                                className={
                                    "aspect-[435/220] w-full bg-cover bg-blend-hard-light"
                                }
                                style={{
                                    backgroundImage: `linear-gradient(#065d43, #065d43), url(${blog.image})`,
                                }}
                            />
                        ) : (
                            <div className="aspect-[435/220] h-auto w-full bg-[url(/images/megaphone1.jpg)] bg-cover bg-center" />
                        )}
                    </div>
                    <h3 className="font-oswald tab:text-2xl prepc:text-3xl pc:text-5xl pc:min-h-24 pc:mb-3 tab:min-h-[57px] pc:line-clamp-3 mb-5 line-clamp-2 [display:-webkit-box] overflow-hidden leading-[100%] font-medium break-words">
                        {blog.title}
                    </h3>

                    <div className="pc:gap-5 tab:mb-0 prepc:pb-4 mb-3 flex items-center justify-between border-b border-black pb-2">
                        <p className="w-fit leading-[100%] text-gray-500 uppercase">
                            {blog.publication &&
                                format(
                                    new Date(blog.publication),
                                    "dd.MM.yyyy"
                                )}
                        </p>
                        <p className="text-grey font-oswald text-sm leading-[100%] uppercase">
                            {blog.service ? t(blog.service) : ""}
                        </p>
                    </div>
                </div>
                <div className="pc:aspect-[321/162] tab:flex tab:w-[25%] relative hidden aspect-[288/146] w-full overflow-hidden rounded-tl-md rounded-tr-md">
                    <div className="absolute inset-0 z-[0]" />
                    {blog.image ? (
                        <div
                            className={
                                "aspect-[435/220] w-full bg-cover bg-blend-hard-light"
                            }
                            style={{
                                backgroundImage: `linear-gradient(#065d43, #065d43), url(${blog.image})`,
                            }}
                        />
                    ) : (
                        <div className="aspect-[435/220] h-auto w-full bg-[url(/images/megaphone1.jpg)] bg-cover bg-center" />
                    )}
                </div>
            </div>
            <div className="bg-green-10 tab:w-[74.5%] prepc:w-[calc(74.5%-84px)] prepc:ml-[74px] p-4">
                <PortableTextRenderer value={blog.content} />
            </div>
        </section>
    );
};
