import { faqMainList } from "@/components/assets/faqData";
import { Doctors } from "@/components/main/doctors/Doctors";
import { FAQ } from "@/components/main/faq/FAQ";
import { Booking } from "@/components/shared/booking/Booking";

export default function AboutPage() {
    return (
        <>
            <div className="content py-24">
                <h1 className="font-oswald font-bold uppercase">
                    Сторінка About clinic в розробці
                </h1>
            </div>
            <Doctors />
            <FAQ faqList={faqMainList} />
            <Booking />
        </>
    );
}
