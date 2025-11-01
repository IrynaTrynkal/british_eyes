import { useTranslations } from "next-intl";

import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { HeroDisease } from "@/components/someDiseaseComponent/HeroDisease";

export default function EyesDiseasePage() {
    const t = useTranslations("Menu");
    const breadcrumb = [
        {
            name: "zakhvoryuvannya-ochey",
            href: "/zakhvoryuvannya-ochey",
        },
    ];
    return (
        <>
            <HeroDisease title={t("zakhvoryuvannya-ochey")} />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:mt-5 prepc:mb-12 my-5"
            />
            <div className="content py-24">
                <h1 className="font-oswald font-bold uppercase">
                    Сторінка EyesDisease в розробці
                </h1>
            </div>
            <Booking />
        </>
    );
}
