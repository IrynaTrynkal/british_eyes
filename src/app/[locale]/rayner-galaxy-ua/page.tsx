import { feedbacksList } from "@/components/assets/feedbacksData";
import {
    raynerAdvantageDataMob,
    raynerAdvantageDataTab,
    raynerCTA,
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
import { doctorsOrderQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "Rayner", {
        uk: "/rayner-galaxy-ua",
        en: "/en/rayner-galaxy-a-new-level-of-vision-is-now-available-at-our-clinic",
        ru: "/ru/rayner-galaxy-novoe-izmerenie-zreniya-uzhe-v-nashej-klinike",
    });
}

export default async function RaynerPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const doctorsList = await sanityFetch({
        query: doctorsOrderQuery,
        params: { language: locale },
        tags: [],
    });
    const breadcrumb = [
        { name: "posluhy", href: "/posluhy" },
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
            <AboutCTA data={raynerCTA[locale as LocaleType]} />
            <Doctors
                doctors={doctorsList}
                className="tab:mt-12 pc:mt-[120px] mt-[60px]"
            />
            <FeedbackSection list={feedbacksList} slideAmount={4} />
            <Booking />
        </>
    );
}
