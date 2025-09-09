export type ServiceItemLocalizationTextType = {
    slug: string;
    title: string;
};

export type ServiceItemType = {
    uk: ServiceItemLocalizationTextType;
    ru: ServiceItemLocalizationTextType;
    en: ServiceItemLocalizationTextType;
};
export const servicesData = [
    {
        uk: { slug: "dityache-viddilennya", title: "Дитяче відділення" },
        ru: { slug: "children-department", title: "Детское отделение" },
        en: { slug: "detskoye-otdeleniye", title: "Children's department" },
    },
    {
        uk: { slug: "perevirka-zoru", title: "Перевірка зору" },
        ru: {
            slug: "proverka-zreniya",
            title: "Диагностика зрения и консультация специалиста",
        },
        en: {
            slug: "eye-exam",
            title: "Vision diagnostics and specialist consultation",
        },
    },
    {
        uk: { slug: "", title: "" },
        ru: { slug: "", title: "" },
        en: { slug: "", title: "" },
    },
    {
        uk: { slug: "", title: "" },
        ru: { slug: "", title: "" },
        en: { slug: "", title: "" },
    },
    {
        uk: { slug: "", title: "" },
        ru: { slug: "", title: "" },
        en: { slug: "", title: "" },
    },
    {
        uk: { slug: "", title: "" },
        ru: { slug: "", title: "" },
        en: { slug: "", title: "" },
    },
];
