import { ServicesKeyType, servicesList, ServicesListProps } from "./menu";
import { PriceItemType, priceList } from "./priceList";

export type ServicesLocaleProps = {
    textMain: string;
};

export type ServicesProps = {
    name: ServicesListProps;
    additionalIcon?: string;
    price: PriceItemType;
    uk: ServicesLocaleProps;
    en: ServicesLocaleProps;
    ru: ServicesLocaleProps;
};

const findPriceItem = (key: ServicesKeyType): PriceItemType | undefined => {
    return priceList.find(p => p.key === key)?.list[0];
};

export const servicesData: ServicesProps[] = [
    {
        name: servicesList.find(s => s.key === "perevirka-zoru")!,
        price: findPriceItem("perevirka-zoru")!,
        uk: {
            textMain:
                "Комплексне обстеження та перевірка зору з використанням сучасного обладнання.",
        },
        en: {
            textMain:
                "Comprehensive examination and vision test using modern equipment.",
        },
        ru: {
            textMain:
                "Комплексное обследование и проверка зрения с использованием современного оборудования.",
        },
    },
    {
        name: servicesList.find(s => s.key === "likuvannya-katarakti")!,
        additionalIcon: "/icons/iq-life.svg",
        price: findPriceItem("likuvannya-katarakti")!,
        uk: {
            textMain:
                "Хірургічне лікування катаракти, косоокості, кератоконуса та інших офтальмологічних патологій.",
        },
        en: {
            textMain:
                "Surgical treatment of cataracts, strabismus, keratoconus and other ophthalmological pathologies.",
        },
        ru: {
            textMain:
                "Хирургическое лечение катаракты, косоглазия, кератоконуса и других офтальмологических патологий.",
        },
    },
    {
        name: servicesList.find(s => s.key === "syndrom-sukhoho-oka")!,
        price: findPriceItem("syndrom-sukhoho-oka")!,
        uk: {
            textMain:
                "Ми забезпечуємо ефективний та індивідуальний підхід до усунення неприємних симптомів, щоб повернути комфорт та здоров'я вашим очам.",
        },
        en: {
            textMain:
                "We provide an effective and individual approach to eliminating unpleasant symptoms to restore comfort and health to your eyes.",
        },
        ru: {
            textMain:
                "Мы обеспечиваем эффективный и индивидуальный подход к устранению неприятных симптомов, чтобы вернуть комфорт и здоровье вашим глазам.",
        },
    },
    {
        name: servicesList.find(s => s.key === "vitreoretinalna-hirurgiya")!,
        additionalIcon: "/icons/iq-life.svg",
        price: findPriceItem("vitreoretinalna-hirurgiya")!,
        uk: {
            textMain: "Лікування захворювань сітківки та склоподібного тіла.",
        },
        en: {
            textMain: "Treatment of diseases of the retina and vitreous body.",
        },
        ru: {
            textMain: "Лечение заболеваний сетчатки и стекловидного тела.",
        },
    },
    {
        name: servicesList.find(s => s.key === "lazerna-korekcziya-zoru")!,
        additionalIcon: "/icons/iq-lasik.svg",
        price: findPriceItem("lazerna-korekcziya-zoru")!,
        uk: {
            textMain:
                "Сучасні методи виправлення рефракційних порушень відновлення чіткості зору.",
        },
        en: {
            textMain:
                "Modern methods of correcting refractive errors and restoring visual acuity.",
        },
        ru: {
            textMain:
                "Современные методы устранения рефракционных нарушений восстановления четкости зрения.",
        },
    },
];
