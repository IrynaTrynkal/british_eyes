import { Doctors } from "@/components/main/doctors/Doctors";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { Booking } from "@/components/shared/booking/Booking";

export default function ServicesPage() {
    return (
        <>
            <div className="content py-24">
                <h1 className="font-oswald font-bold uppercase">
                    Сторінка Послуг в розробці
                </h1>
            </div>
            <Doctors />
            <Feedbacks />
            <Booking />
        </>
    );
}
