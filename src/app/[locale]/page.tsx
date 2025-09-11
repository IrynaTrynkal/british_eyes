import { Advantages } from "@/components/main/advantages/Advantages";
import { Choice } from "@/components/main/choice/Choice";
import { HeroMain } from "@/components/main/hero/HeroMain";

export default function Home() {
    return (
        <>
            <HeroMain />
            <Advantages />
            <Choice />
        </>
    );
}
