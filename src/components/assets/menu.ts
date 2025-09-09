export const menuList = [
    { key: "poslugy" },
    { key: "tsiny" },
    { key: "aktsiyi" },
    { key: "viddilennya" },
    { key: "pro-kliniku" },
    { key: "informatsiya-dlya-patsiyentiv" },
    { key: "vidhuky" },
    { key: "kontakty" },
];

export type ServicesListProps = {
    key: string;
    image?: string;
    icon?: string;
    slug: { uk: string; ru: string; en: string };
};

export const servicesList: ServicesListProps[] = [
    {
        key: "lazerna-korekcziya-zoru",
        image: "lazerna-korekcziya-zoru.jpg",
        slug: {
            uk: "lazerna-korekcziya-zoru",
            en: "laser-vision-correction",
            ru: "lazernaya-korrekciya-zreniya",
        },
    },
    {
        key: "perevirka-zoru",
        image: "perevirka-zoru.jpg",
        slug: {
            uk: "perevirka-zoru",
            en: "eye-exam",
            ru: "proverka-zreniya",
        },
    },
    {
        key: "likuvannya-katarakti",
        image: "likuvannya-katarakti.jpg",
        slug: {
            uk: "likuvannya-katarakti",
            en: "cataract-treatment",
            ru: "lechenie-katarakty",
        },
    },
    {
        key: "syndrom-sukhoho-oka",
        image: "syndrom-sukhoho-oka.jpg",
        slug: {
            uk: "syndrom-sukhoho-oka",
            en: "dry-eye-syndrome",
            ru: "lechenie-sindroma-suhogo-glaza",
        },
    },
    {
        key: "dityache-viddilennya",
        icon: "dityache-viddilennya.svg",
        slug: {
            uk: "dityache-viddilennya",
            en: "children-department",
            ru: "detskoye-otdeleniye",
        },
    },
    {
        key: "likuvannya-keratokonusa",
        icon: "likuvannya-keratokonusa.svg",
        slug: {
            uk: "likuvannya-keratokonusa",
            en: "keratoconus-treatment",
            ru: "lecheniye-keratokonusa",
        },
    },
    {
        key: "lazerne-likuvannya-zahvoryuvan-oka",
        icon: "lazerne-likuvannya-zahvoryuvan-oka.svg",
        slug: {
            uk: "lazerne-likuvannya-zahvoryuvan-oka",
            en: "laser-treatment-of-eye-diseases",
            ru: "lazernoye-lecheniye-zabolevaniy-glaza",
        },
    },
    {
        key: "refrakczijna-lensektomiya",
        icon: "refrakczijna-lensektomiya.svg",
        slug: {
            uk: "refrakczijna-lensektomiya",
            en: "refractive-lensectomy",
            ru: "intraokuliarnaya-korrekciya",
        },
    },
    {
        key: "vitreoretinalna-hirurgiya",
        icon: "vitreoretinalna-hirurgiya.svg",
        slug: {
            uk: "vitreoretinalna-hirurgiya",
            en: "vitreoretinal-surgery",
            ru: "vitreoretinalnaya-khirurgiya",
        },
    },
    {
        key: "intravitrealni-inekczii",
        icon: "intravitrealni-inekczii.svg",
        slug: {
            uk: "intravitrealni-inekczii",
            en: "intravitreal-injections",
            ru: "intravitrealnyye-inyektsii",
        },
    },
    {
        key: "hirurgichne-likuvannya-glaukomi",
        icon: "hirurgichne-likuvannya-glaukomi.svg",
        slug: {
            uk: "hirurgichne-likuvannya-glaukomi",
            en: "surgical-glaucoma-treatment",
            ru: "khirurgicheskoye-lecheniye-glaukomy",
        },
    },
    {
        key: "likuvannya-kosookosti",
        icon: "likuvannya-kosookosti.svg",
        slug: {
            uk: "likuvannya-kosookosti",
            en: "strabismus-treatment",
            ru: "lecheniye-kosoglaziya",
        },
    },
    {
        key: "hirurgiya-povik-i-konyunktivi",
        icon: "hirurgiya-povik-i-konyunktivi.svg",
        slug: {
            uk: "hirurgiya-povik-i-konyunktivi",
            en: "eyelid-and-conjunctival-surgery",
            ru: "khirurgiya-vek-i-konyunktivy",
        },
    },
    {
        key: "anesteziologichnij-posibnik",
        icon: "anesteziologichnij-posibnik.svg",
        slug: {
            uk: "anesteziologichnij-posibnik",
            en: "anesthesia-benefit",
            ru: "anesteziologicheskoye-posobiye",
        },
    },
    {
        key: "ksenonoterapiya",
        icon: "xenon-therapy.svg",
        slug: {
            uk: "ksenonoterapiya",
            en: "xenon-therapy",
            ru: "ksenonoterapiya",
        },
    },
];
export type PatientsListProps = {
    key: string;
    slug: { uk: string; ru: string; en: string };
};

export const patientsList: PatientsListProps[] = [
    {
        key: "informatsiya-dlya-inohorodnikh-patsiyentiv",
        slug: {
            uk: "informatsiya-dlya-inohorodnikh-patsiyentiv",
            en: "information-for-nonresident-patients",
            ru: "inogorodnim-patsiyentam",
        },
    },
    {
        key: "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu",
        slug: {
            uk: "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu",
            en: "patient-reminder-before-vitreoretinal-surgery",
            ru: "pamyatki-patsiyentu-pered-vitreoretinalnoy-khirurgiyey",
        },
    },
    {
        key: "zakhvoryuvannya-ochey",
        slug: {
            uk: "zakhvoryuvannya-ochey",
            en: "eye-diseases",
            ru: "glaznye-bolezni",
        },
    },
];

export const footerMainMenu = [
    { key: "main" },
    { key: "tsiny" },
    { key: "aktsiyi" },
    { key: "viddilennya" },
    { key: "pro-kliniku" },
    { key: "informatsiya-dlya-patsiyentiv" },
    { key: "vidhuky" },
    { key: "news" },
];
export type ServiceKey = keyof typeof serviceSlugs;
export const serviceSlugs = {
    "dityache-viddilennya": {
        uk: "dityache-viddilennya",
        en: "children-department",
        ru: "detskoye-otdeleniye",
    },
    "perevirka-zoru": {
        uk: "perevirka-zoru",
        en: "eye-exam",
        ru: "proverka-zreniya",
    },
    "lazerna-korekcziya-zoru": {
        uk: "lazerna-korekcziya-zoru",
        en: "laser-vision-correction",
        ru: "lazernaya-korrekciya-zreniya",
    },
    "likuvannya-katarakti": {
        uk: "likuvannya-katarakti",
        en: "cataract-treatment",
        ru: "lechenie-katarakty",
    },
    "syndrom-sukhoho-oka": {
        uk: "syndrom-sukhoho-oka",
        en: "dry-eye-syndrome",
        ru: "lechenie-sindroma-suhogo-glaza",
    },
    "refrakczijna-lensektomiya": {
        uk: "refrakczijna-lensektomiya",
        en: "refractive-lensectomy",
        ru: "intraokuliarnaya-korrekciya",
    },
    "likuvannya-kosookosti": {
        uk: "likuvannya-kosookosti",
        en: "strabismus-treatment",
        ru: "lecheniye-kosoglaziya",
    },
    "likuvannya-keratokonusa": {
        uk: "likuvannya-keratokonusa",
        en: "keratoconus-treatment",
        ru: "lecheniye-keratokonusa",
    },
    "vitreoretinalna-hirurgiya": {
        uk: "vitreoretinalna-hirurgiya",
        en: "vitreoretinal-surgery",
        ru: "vitreoretinalnaya-khirurgiya",
    },
    "intravitrealni-inekczii": {
        uk: "intravitrealni-inekczii",
        en: "intravitreal-injections",
        ru: "intravitrealnyye-inyektsii",
    },
    "lazerne-likuvannya-zahvoryuvan-oka": {
        uk: "lazerne-likuvannya-zahvoryuvan-oka",
        en: "laser-treatment-of-eye-diseases",
        ru: "lazernoye-lecheniye-zabolevaniy-glaza",
    },
    "hirurgichne-likuvannya-glaukomi": {
        uk: "hirurgichne-likuvannya-glaukomi",
        en: "surgical-glaucoma-treatment",
        ru: "khirurgicheskoye-lecheniye-glaukomy",
    },
    "hirurgiya-povik-i-konyunktivi": {
        uk: "hirurgiya-povik-i-konyunktivi",
        en: "eyelid-and-conjunctival-surgery",
        ru: "khirurgiya-vek-i-konyunktivy",
    },
    "anesteziologichnij-posibnik": {
        uk: "anesteziologichnij-posibnik",
        en: "anesthesia-benefit",
        ru: "anesteziologicheskoye-posobiye",
    },
    ksenonoterapiya: {
        uk: "ksenonoterapiya",
        en: "xenon-therapy",
        ru: "ksenonoterapiya",
    },
} as const;
