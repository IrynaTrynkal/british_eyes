import { faqMainList } from "@/components/assets/faqData";
import { feedbacksList } from "@/components/assets/feedbacksData";
import { Doctors } from "@/components/main/doctors/Doctors";
import { FAQ } from "@/components/main/faq/FAQ";
import { News } from "@/components/main/news/News";
import { Booking } from "@/components/shared/booking/Booking";
import { FeedbackSection } from "@/components/shared/feedbackSection.tsx/FeedbackSection";

export default function AboutPage() {
    const FEEDBACKS_SLIDES_TO_SHOW = 4;

    return (
        <>
            <div className="content py-24">
                <h1 className="font-oswald font-bold uppercase">
                    Сторінка About clinic в розробці
                </h1>
            </div>
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
