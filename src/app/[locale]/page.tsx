import { faqMainList } from "@/components/assets/faqData";
import { AboutMain } from "@/components/main/about/AboutMain";
import { Advantages } from "@/components/main/advantages/Advantages";
import { Approach } from "@/components/main/approach/Approach";
import { Choice } from "@/components/main/choice/Choice";
import { Discount } from "@/components/main/discount/Discount";
import { Doctors } from "@/components/main/doctors/Doctors";
import { FAQ } from "@/components/main/faq/FAQ";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { HeroMain } from "@/components/main/hero/HeroMain";
import { News } from "@/components/main/news/News";
import { Services } from "@/components/main/services/Services";
import { Booking } from "@/components/shared/booking/Booking";
import { sanityFetch } from "@/sanity/lib/client";
import { blogsListQuery, doctorsOrderQuery } from "@/sanity/lib/queries";

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    const [blogList, doctorsList] = await Promise.all([
        sanityFetch({
            query: blogsListQuery,
            params: { language: locale },
            tags: ["blog"],
        }),
        sanityFetch({
            query: doctorsOrderQuery,
            params: { language: locale },
            tags: ["doctor", "orderDoctors"],
        }),
    ]);
    return (
        <>
            <HeroMain />
            <Discount />
            <Services />
            <Advantages />
            <Choice />
            <Approach />
            <AboutMain />
            <Doctors doctors={doctorsList} />
            <Feedbacks />
            <News blogList={blogList} />
            <FAQ faqList={faqMainList} />
            <Booking />
        </>
    );
}
