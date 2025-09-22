import { IconAnesteziologichnijPosibnik } from "@/components/shared/icons/IconAnesteziologichnijPosibnik";
import { IconDityacheViddilennya } from "@/components/shared/icons/IconDityacheViddilennya";
import { IconHirurgichneLikuvannyaGlaukomi } from "@/components/shared/icons/IconHirurgichneLikuvannyaGlaukomi";
import { IconHirurgiyaPovikIKonyunktivi } from "@/components/shared/icons/IconHirurgiyaPovikIKonyunktivi";
import { IconIntravitrealniInekczii } from "@/components/shared/icons/IconIntravitrealniInekczii";
import { IconKsenonoterapiya } from "@/components/shared/icons/IconKsenonoterapiya";
import { IconLazerneLikuvannyaZahvoryuvanOka } from "@/components/shared/icons/IconLazerneLikuvannyaZahvoryuvanOka";
import { IconLikuvannyaKeratokonusa } from "@/components/shared/icons/IconLikuvannyaKeratokonusa";
import { IconLikuvannyaKosookosti } from "@/components/shared/icons/IconLikuvannyaKosookosti";
import { IconRefrakczijnaLensektomiya } from "@/components/shared/icons/IconRefrakczijnaLensektomiya";
import { IconVitreoretinalnaHirurgiya } from "@/components/shared/icons/IconVitreoretinalnaHirurgiya";

export const toIconComponentName = (key: string) => {
    switch (key) {
        case "dityache-viddilennya":
            return IconDityacheViddilennya;
        case "likuvannya-keratokonusa":
            return IconLikuvannyaKeratokonusa;
        case "lazerne-likuvannya-zahvoryuvan-oka":
            return IconLazerneLikuvannyaZahvoryuvanOka;
        case "refrakczijna-lensektomiya":
            return IconRefrakczijnaLensektomiya;
        case "vitreoretinalna-hirurgiya":
            return IconVitreoretinalnaHirurgiya;
        case "intravitrealni-inekczii":
            return IconIntravitrealniInekczii;
        case "hirurgichne-likuvannya-glaukomi":
            return IconHirurgichneLikuvannyaGlaukomi;
        case "likuvannya-kosookosti":
            return IconLikuvannyaKosookosti;
        case "hirurgiya-povik-i-konyunktivi":
            return IconHirurgiyaPovikIKonyunktivi;
        case "anesteziologichnij-posibnik":
            return IconAnesteziologichnijPosibnik;
        case "ksenonoterapiya":
            return IconKsenonoterapiya;
        default:
            return null;
    }
};
