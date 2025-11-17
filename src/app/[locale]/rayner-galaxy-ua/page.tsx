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
import { RaynerAbout } from "@/components/someServiceComponents/individualComponents/RaynerAbout";
import { RaynerCompare } from "@/components/someServiceComponents/individualComponents/RaynerCompare";
import { RaynerUniq } from "@/components/someServiceComponents/individualComponents/RaynerUniq";
import { RaynerVideo } from "@/components/someServiceComponents/individualComponents/RaynerVideo";
import { sanityFetch } from "@/sanity/lib/client";
import { doctorsListQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";

export default async function RaynerPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const doctorsList = await sanityFetch({
        query: doctorsListQuery,
        params: { language: locale },
        tags: [],
    });
    const breadcrumb = [
        { name: "poslugy", href: "/poslugy" },
        { name: "rayner-galaxy", href: "/rayner-galaxy-ua" },
    ];

    return (
        <>
            <HeroRayner />
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <RaynerAbout />
            <RaynerUniq />
            <RaynerCompare locale={locale as LocaleType} />
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
            <Doctors
                doctors={doctorsList}
                className="tab:mt-12 pc:mt-[120px] mt-[60px]"
            />
            <FeedbackSection list={feedbacksList} slideAmount={4} />
            <Booking />
        </>
    );
}
