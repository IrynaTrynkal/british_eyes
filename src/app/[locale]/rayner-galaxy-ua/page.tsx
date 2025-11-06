import { useLocale } from "next-intl";

import { feedbacksList } from "@/components/assets/feedbacksData";
import {
    raynerAdvantageDataMob,
    raynerAdvantageDataTab,
} from "@/components/assets/servicesData";
import { Doctors } from "@/components/main/doctors/Doctors";
import { AboutCTA } from "@/components/pageAbout/cta/AboutCTA";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";
import { AdvantagesService } from "@/components/someServiceComponents/advantages/AdvantagesService";
import { HeroRayner } from "@/components/someServiceComponents/individualComponents/HeroRayner";
import { RaynerVideo } from "@/components/someServiceComponents/individualComponents/RaynerVideo";
import { LocaleType } from "@/types/LocaleType";

export default function RaynerPage() {
    const breadcrumb = [
        { name: "poslugy", href: "/poslugy" },
        { name: "rayner-galaxy", href: "/rayner-galaxy-ua" },
    ];
    const locale = useLocale();

    return (
        <>
            <HeroRayner />
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <AdvantagesService
                className="tab:hidden"
                data={raynerAdvantageDataMob[locale as LocaleType]}
            />
            <AdvantagesService
                className="tab:block hidden"
                data={raynerAdvantageDataTab[locale as LocaleType]}
            />
            <RaynerVideo />
            <AboutCTA />
            <Doctors className="tab:mt-12 pc:mt-[120px] mt-[60px]" />
            <FeedbackSection list={feedbacksList} slideAmount={4} />
            <Booking />
        </>
    );
}
