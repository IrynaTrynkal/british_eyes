import { LocaleType } from "@/types/LocaleType";

export const subpageData: Record<
    string,
    {
        key: string;
        title: Record<LocaleType, string>;
        subtitle: Record<LocaleType, string>;
    }
> = {
    "sportlife-lasik": {
        key: "sportlife-lasik",
        title: {
            uk: "SportLine LASEK",
            ru: "SportLine LASEK",
            en: "SportLine LASEK",
        },
        subtitle: {
            uk: "Безкомпромісне рішення для професійних спортсменів",
            ru: "Бескомпромиссное решение для профессиональных спортсменов",
            en: "The uncompromising solution for professional athletes",
        },
    },
    "iq-lasik-oxygen-3d": {
        key: "iq-lasik-oxygen-3d",
        title: {
            uk: "IQ-LASIK Oxygen 3D",
            ru: "IQ-LASIK Oxygen 3D",
            en: "IQ-LASIK Oxygen 3D",
        },
        subtitle: {
            uk: "корекція без підвищення температури рогівки ока",
            ru: "коррекция без повышения температуры роговицы глаза",
            en: "correction without increasing the temperature of the cornea",
        },
    },
};
