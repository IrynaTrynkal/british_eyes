import { defineRouting } from "next-intl/routing";

export const locales = ["uk", "en", "ru"] as const;

export const routing = defineRouting({
    // A list of all locales that are supported
    locales,
    localePrefix: "as-needed",
    localeDetection: false,
    // Used when no locale matches
    defaultLocale: "uk",
    pathnames: {
        "/poslugy": {
            en: "/services",
            ru: "/uslugi",
        },
        "/poslugy/[slug]": {
            en: "/services/[slug]",
            ru: "/uslugi/[slug]",
        },
        "/poslugy/lazerna-korekcziya-zoru": {
            en: "/services/laser-vision-correction",
            ru: "/uslugi/lazernaya-korrekciya-zreniya",
        },
        "/poslugy/lazerna-korekcziya-zoru/[subpage]": {
            en: "/services/laser-vision-correction/[subpage]",
            ru: "/uslugi/lazernaya-korrekciya-zreniya/[subpage]",
        },
        "/poslugy/likuvannya-katarakti": {
            en: "/services/cataract-treatment",
            ru: "/uslugi/lechenie-katarakty",
        },
        "/poslugy/likuvannya-katarakti/[subpage]": {
            en: "/services/cataract-treatment/[subpage]",
            ru: "/uslugi/lechenie-katarakty/[subpage]",
        },
        "/poslugy/likuvannya-katarakti/iq-life-3d-vodnij-potik": {
            en: "/services/cataract-treatment/iq-life-3d-water-flow",
            ru: "/uslugi/lechenie-katarakty/iq-life-3d",
        },
        "/aktsiyi": {
            en: "/offers",
            ru: "/akcii",
        },
        "/zakhvoryuvannya-ochey": {
            en: "/eye-diseases",
            ru: "/glaznye-bolezni",
        },
        "/tsiny": {
            en: "/service-prices",
            ru: "/ceny",
        },
        "/informatsiya-dlya-patsiyentiv": {
            en: "/patient-information",
            ru: "/informatsiya-dlya-patsiyentov",
        },
        "/pro-kliniku": {
            en: "/about-clinic",
            ru: "/o-klinike",
        },
        "/vidhuky": {
            en: "/reviews",
            ru: "/otzyvy",
        },
        "/kontakty": {
            en: "/contacts",
            ru: "/kontakty",
        },
        "/rayner-galaxy-ua": {
            en: "/rayner-galaxy-a-new-level-of-vision-is-now-available-at-our-clinic",
            ru: "/rayner-galaxy-novoe-izmerenie-zreniya-uzhe-v-nashej-klinike",
        },
        "/oftalmolohy": {
            en: "/ophthalmologists",
            ru: "/oftalmologi",
        },
    },
});
