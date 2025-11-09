import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { IconBreadChevron } from "./icons/IconBreadChevron";
import { IconHome } from "./icons/IconHome";

export type BreadCrumbsType = {
    name: string;
    href: string;
};

export const Breadcrumbs = ({
    breadcrumbsList,
    className,
    doctors,
}: {
    breadcrumbsList: BreadCrumbsType[];
    className?: string;
    doctors?: boolean;
}) => {
    const t = useTranslations("Menu");

    return (
        <nav aria-label="Breadcrumb" className={`content ${className} `}>
            <ul className="tab:text-base tab:gap-1.5 prepc:min-h-9 flex min-h-6 flex-wrap items-center gap-1 text-sm leading-none">
                <li key="home" className="flex h-full items-center gap-2">
                    <Link
                        href={"/" as any}
                        className="tab:flex text-grey prepc:min-h-9 hidden h-full min-h-6 items-center transition-all duration-300 ease-in-out hover:underline"
                    >
                        {t("home")}
                    </Link>
                    <Link
                        href={"/" as any}
                        className="tab:hidden prepc:min-h-9 flex h-full min-h-6 items-center transition-all duration-300 ease-in-out hover:underline"
                    >
                        <IconHome />
                    </Link>
                    {breadcrumbsList.length > 0 && (
                        <div className="flex h-5 w-5 items-center justify-center">
                            <IconBreadChevron />
                        </div>
                    )}
                </li>

                {breadcrumbsList.map((crumb, ind) => {
                    const isLast = ind === breadcrumbsList.length - 1;
                    return (
                        <li
                            key={crumb.name}
                            className="flex h-full items-center gap-2"
                        >
                            {isLast ? (
                                <span
                                    aria-current="page"
                                    className="prepc:min-h-9 flex min-h-6 cursor-default items-center whitespace-nowrap text-black"
                                >
                                    {doctors ? crumb.name : t(crumb.name)}
                                </span>
                            ) : (
                                <>
                                    <Link
                                        href={crumb.href as any}
                                        className="text-grey prepc:min-h-9 flex h-full min-h-6 items-center whitespace-nowrap transition-all duration-300 ease-in-out hover:underline"
                                    >
                                        {t(crumb.name)}
                                    </Link>
                                    <div className="flex h-5 w-5 items-center justify-center">
                                        <IconBreadChevron />
                                    </div>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
