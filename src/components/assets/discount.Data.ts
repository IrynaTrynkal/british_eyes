export type DiscountLocale = {
    premiumText?: string; // max 58 characters with spaces
    title: string;
    text?: string;
};

export type DiscountType = {
    premium?: boolean;
    icon?: string;
    bgimage?: string;
    price?: number;
    period?: string;
    localeText: {
        uk: DiscountLocale;
        ru: DiscountLocale;
        en: DiscountLocale;
    };
};

export const discountList: DiscountType[] = [
    {
        premium: true,
        icon: "/icons/iq-life-white.svg",
        bgimage: "/images/lazerna-korekcziya-zoru.jpg",
        localeText: {
            uk: {
                premiumText: "Акція преміальної операції по стандартній ціні",
                title: "iQ-Life Живий Зір",
                text: "Лікування від катаракти з відновленням зору молодості, без окулярів вдалину і поблизу.",
            },
            ru: {
                premiumText: "Акция премиальной сделки по стандартной цене",
                title: "iQ-Life Живое Зрение",
                text: "Лечение от катаракты с восстановлением зрения молодости, без очков вдаль и поблизости.",
            },
            en: {
                premiumText: "Premium transaction promotion at standard price",
                title: "iQ-Life Living Vision",
                text: "Cataract treatment with restoration of youthful vision, without glasses for distance and near.",
            },
        },
    },
    {
        price: 14950,
        period: "15.08.2025",
        localeText: {
            uk: {
                title: "Лазерна корекція зору будь-яким методом",
            },
            ru: {
                title: "Лазерная коррекция зрения любым методом",
            },
            en: {
                title: "Laser vision correction by any method",
            },
        },
    },
    {
        price: 950,
        period: "15.08.2025",
        localeText: {
            uk: {
                title: "Повне комплексне обстеження зору",
            },
            ru: {
                title: "Полное комплексное обследование зрения",
            },
            en: {
                title: "Full comprehensive eye examination",
            },
        },
    },
];
