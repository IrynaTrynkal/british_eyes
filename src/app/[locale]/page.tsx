import { AboutMain } from "@/components/main/about/AboutMain";
import { Advantages } from "@/components/main/advantages/Advantages";
import { Approach } from "@/components/main/approach/Approach";
import { Choice } from "@/components/main/choice/Choice";
import { Doctors } from "@/components/main/doctors/Doctors";
import { Feedbacks } from "@/components/main/feedbacks/Feedbacks";
import { HeroMain } from "@/components/main/hero/HeroMain";

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
        </>
    );
}
