import { faqMainList } from "@/components/assets/faqData";
import { AboutMain } from "@/components/main/about/AboutMain";
import { Advantages } from "@/components/main/advantages/Advantages";
import { Approach } from "@/components/main/approach/Approach";
import { Choice } from "@/components/main/choice/Choice";
import { Doctors } from "@/components/main/doctors/Doctors";
import { FAQ } from "@/components/main/faq/FAQ";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { HeroMain } from "@/components/main/hero/HeroMain";
import { News } from "@/components/main/news/News";

export default function Home() {
    return (
        <>
            <HeroMain />
            <Advantages />
            <Choice />
            <Approach />
            <AboutMain />
            <Doctors />
            <Feedbacks />
            <News />
            <FAQ faqList={faqMainList} />
        </>
    );
}
