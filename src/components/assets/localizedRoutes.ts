import { LocaleType } from "@/types/LocaleType";
export type LocalizedRouteKey = keyof typeof localizedRoutes;

export type LocalizedRoutes = {
    [key: string]: Record<LocaleType, string>;
};

export const localizedRoutes: LocalizedRoutes = {
    "/posluhy": { uk: "/posluhy", en: "/services", ru: "/uslugi" },
    "/posluhy/[slug]": {
        uk: "/posluhy/[slug]",
        en: "/services/[slug]",
        ru: "/uslugi/[slug]",
    },
    "/posluhy/lazerna-korekcziya-zoru": {
        uk: "/posluhy/lazerna-korekcziya-zoru",
        en: "/services/laser-vision-correction",
        ru: "/uslugi/lazernaya-korrekciya-zreniya",
    },
    "/posluhy/lazerna-korekcziya-zoru/[subpage]": {
        uk: "/posluhy/lazerna-korekcziya-zoru/[subpage]",
        en: "/services/laser-vision-correction/[subpage]",
        ru: "/uslugi/lazernaya-korrekciya-zreniya/[subpage]",
    },
    "/posluhy/likuvannya-katarakti": {
        uk: "/posluhy/likuvannya-katarakti",
        en: "/services/cataract-treatment",
        ru: "/uslugi/lechenie-katarakty",
    },
    "/posluhy/likuvannya-katarakti/[subpage]": {
        uk: "/posluhy/likuvannya-katarakti/[subpage]",
        en: "/services/cataract-treatment/[subpage]",
        ru: "/uslugi/lechenie-katarakty/[subpage]",
    },
    "/posluhy/likuvannya-katarakti/iq-life-3d-vodnij-potik": {
        uk: "/posluhy/likuvannya-katarakti/iq-life-3d-vodnij-potik",
        en: "/services/cataract-treatment/iq-life-3d-water-flow",
        ru: "/uslugi/lechenie-katarakty/iq-life-3d",
    },
    "/aktsiyi": { uk: "/aktsiyi", en: "/offers", ru: "/akcii" },
    "/zakhvoryuvannya-ochey": {
        uk: "/zakhvoryuvannya-ochey",
        en: "/eye-diseases",
        ru: "/glaznye-bolezni",
    },
    "/tsiny": { uk: "/tsiny", en: "/service-prices", ru: "/ceny" },
    "/informatsiya-dlya-patsiyentiv": {
        uk: "/informatsiya-dlya-patsiyentiv",
        en: "/patient-information",
        ru: "/informatsiya-dlya-patsiyentov",
    },
    "/pro-kliniku": {
        uk: "/pro-kliniku",
        en: "/about-clinic",
        ru: "/o-klinike",
    },
    "/vidhuky": { uk: "/vidhuky", en: "/reviews", ru: "/otzyvy" },
    "/kontakty": { uk: "/kontakty", en: "/contacts", ru: "/kontakty" },
    "/rayner-galaxy-ua": {
        uk: "/rayner-galaxy-ua",
        en: "/rayner-galaxy-a-new-level-of-vision-is-now-available-at-our-clinic",
        ru: "/rayner-galaxy-novoe-izmerenie-zreniya-uzhe-v-nashej-klinike",
    },
    "/oftalmolohy": {
        uk: "/oftalmolohy",
        en: "/ophthalmologists",
        ru: "/oftalmologi",
    },
    "/oftalmolohy/[slug]": {
        uk: "/oftalmolohy/[slug]",
        en: "/ophthalmologists/[slug]",
        ru: "/oftalmologi/[slug]",
    },
    "/informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam": {
        uk: "/informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam",
        en: "/information-for-patients-prior-to-microsurgery",
        ru: "/informatsiya-dlya-patsiyentov-pered-mikrokhirurgicheskim-vmeshatelstvom",
    },
    "/informatsiya-dlya-inohorodnikh-patsiyentiv": {
        uk: "/informatsiya-dlya-inohorodnikh-patsiyentiv",
        en: "/information-for-nonresident-patients",
        ru: "/inogorodnim-patsiyentam",
    },
    "/instruktsiyi-pislya-lazernoyi-korektsiyi-zoru": {
        uk: "/instruktsiyi-pislya-lazernoyi-korektsiyi-zoru",
        en: "/instructions-after-laser-vision-correction",
        ru: "/instruktsii-posle-korrektsii-zreniya",
    },
    "/pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu": {
        uk: "/pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu",
        en: "/patient-reminder-before-vitreoretinal-surgery",
        ru: "/pamyatki-patsiyentu-pered-vitreoretinalnoy-khirurgiyey",
    },
    "/pamyatka-patsiyenta-pislya-khirurhiyi-katarakty": {
        uk: "/pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
        en: "/pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
        ru: "/pamyatki-paczienta-posle-hirurgii-katarakty",
    },
    "/zakhvoryuvannya-ochey/glaukoma": {
        uk: "/zakhvoryuvannya-ochey/glaukoma",
        en: "/eye-diseases/glaucoma",
        ru: "/glaznye-bolezni/glaukoma",
    },
    "/zakhvoryuvannya-ochey/presbiopiya": {
        uk: "/zakhvoryuvannya-ochey/presbiopiya",
        en: "/eye-diseases/presbyopia",
        ru: "/glaznye-bolezni/presbiopiya",
    },
    "/zakhvoryuvannya-ochey/dalekozorist": {
        uk: "/zakhvoryuvannya-ochey/dalekozorist",
        en: "/eye-diseases/farsightedness",
        ru: "/glaznye-bolezni/dalnozorkost",
    },
    "/zakhvoryuvannya-ochey/katarakta": {
        uk: "/zakhvoryuvannya-ochey/katarakta",
        en: "/eye-diseases/cataract",
        ru: "/glaznye-bolezni/katarakta",
    },
    "/zakhvoryuvannya-ochey/simptomi-zahvoryuvannya-ochej": {
        uk: "/zakhvoryuvannya-ochey/simptomi-zahvoryuvannya-ochej",
        en: "/eye-diseases/symptoms-of-eye-disease",
        ru: "/glaznye-bolezni/simptomy-zabolevaniya-glaz",
    },
    "/zakhvoryuvannya-ochey/kosookist": {
        uk: "/zakhvoryuvannya-ochey/kosookist",
        en: "/eye-diseases/strabismus",
        ru: "/glaznye-bolezni/kosoglazie",
    },
    "/zakhvoryuvannya-ochey/korotkozorist-miopiya": {
        uk: "/zakhvoryuvannya-ochey/korotkozorist-miopiya",
        en: "/eye-diseases/nearsightedness-myopia",
        ru: "/glaznye-bolezni/blizorukost-miopiya",
    },
    "/zakhvoryuvannya-ochey/astigmatizm": {
        uk: "/zakhvoryuvannya-ochey/astigmatizm",
        en: "/eye-diseases/astigmatism",
        ru: "/glaznye-bolezni/astigmatizm",
    },
    "/politika-konfidenczijnosti": {
        uk: "/politika-konfidenczijnosti",
        en: "/privacy-policy",
        ru: "/privacy-policy",
    },
};
