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
}: {
    breadcrumbsList: BreadCrumbsType[];
    className?: string;
}) => {
    const t = useTranslations("Menu");

    return (
        <nav aria-label="Breadcrumb" className={`content ${className}`}>
            <ul className="tab:text-base tab:gap-1.5 prepc:h-9 flex h-6 items-center gap-1 text-sm leading-none">
                <li key="home" className="flex h-full items-center gap-2">
                    <Link
                        href={"/" as any}
                        className="tab:flex text-grey hidden h-full items-center transition-all duration-300 ease-in-out hover:underline"
                    >
                        {t("home")}
                    </Link>
                    <Link
                        href={"/" as any}
                        className="tab:hidden flex h-full items-center transition-all duration-300 ease-in-out hover:underline"
                    >
                        <IconHome />
                    </Link>
                    {breadcrumbsList.length > 0 && <IconBreadChevron />}
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
                                    className="cursor-default text-black"
                                >
                                    {t(crumb.name)}
                                </span>
                            ) : (
                                <>
                                    <Link
                                        href={crumb.href as any}
                                        className="text-grey flex h-full items-center transition-all duration-300 ease-in-out hover:underline"
                                    >
                                        {t(crumb.name)}
                                    </Link>
                                    <IconBreadChevron />
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
