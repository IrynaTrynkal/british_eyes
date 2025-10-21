import { useLocale } from "next-intl";

import { priceList } from "@/components/assets/priceList";
import { HeroPrice } from "@/components/pagePrice/HeroPrice";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LocaleType } from "@/types/LocaleType";
import { getUniqueTitles } from "@/utils/getUniqueTitles";

export default function PricesPage() {
    const locale = useLocale();
    const breadcrumb = [{ name: "tsiny", href: "/tsiny" }];
    const titlesList = getUniqueTitles(priceList, locale as LocaleType);

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] mt-[72px]"
                breadcrumbsList={breadcrumb}
            />
            <HeroPrice list={titlesList} />

            <Booking />
        </>
    );
}
