import { faqMainList } from "@/components/assets/faqData";
import { feedbacksList } from "@/components/assets/feedbacksData";
import { Doctors } from "@/components/main/doctors/Doctors";
import { FAQ } from "@/components/main/faq/FAQ";
import { News } from "@/components/main/news/News";
import { AboutSection } from "@/components/pageAbout/about/AboutSection";
import { Advantages } from "@/components/pageAbout/advantages/Advantages";
import { GermanSection } from "@/components/pageAbout/german/GermanSection";
import { HeroAbout } from "@/components/pageAbout/hero/HeroAbout";
import { StickySection } from "@/components/pageAbout/stickySection/StickySection";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";

export default function AboutPage() {
    const FEEDBACKS_SLIDES_TO_SHOW = 4;
    const breadcrumb = [{ name: "pro-kliniku", href: "/pro-kliniku" }];

    return (
        <>
            <HeroAbout />

            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:mt-5 prepc:mb-12 my-5"
            />
            <AboutSection />
            <StickySection />
            <GermanSection />
            <Advantages />
            <Doctors />

            <FeedbackSection
                className="prepc:pb-[60px]"
                list={feedbacksList}
                slideAmount={FEEDBACKS_SLIDES_TO_SHOW}
            />
            <News />
            <FAQ faqList={faqMainList} />
            <Booking />
        </>
    );
}
