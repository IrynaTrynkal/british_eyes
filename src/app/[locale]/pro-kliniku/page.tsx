import { faqMainList } from "@/components/assets/faqData";
import { feedbacksList } from "@/components/assets/feedbacksData";
import { Doctors } from "@/components/main/doctors/Doctors";
import { FAQ } from "@/components/main/faq/FAQ";
import { News } from "@/components/main/news/News";
import { StickySection } from "@/components/pageAbout/stickySection/StickySection";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";

export default function AboutPage() {
    const FEEDBACKS_SLIDES_TO_SHOW = 4;
    const breadcrumb = [{ name: "pro-kliniku", href: "/pro-kliniku" }];

    return (
        <>
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:hidden mt-[72px] mb-6"
            />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:block tab:mt-5 prepc:mb-12 pc:mb-[92px] hidden"
            />
            <StickySection />
            <Doctors />

            <FeedbackSection
                list={feedbacksList}
                slideAmount={FEEDBACKS_SLIDES_TO_SHOW}
            />
            <News />
            <FAQ faqList={faqMainList} />
            <Booking />
        </>
    );
}
