import { AboutMain } from "@/components/main/about/AboutMain";
import { Advantages } from "@/components/main/advantages/Advantages";
import { Approach } from "@/components/main/approach/Approach";
import { Choice } from "@/components/main/choice/Choice";
import { HeroMain } from "@/components/main/hero/HeroMain";

export default function Home() {
    return (
        <>
            <HeroMain />
            <Advantages />
            <Choice />
            <Approach />
            <AboutMain />
        </>
    );
}
