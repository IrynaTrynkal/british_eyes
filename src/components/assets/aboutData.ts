import { ServiceKey } from "./menu";

export type StickyCardType = {
    images: string[];
    data: {
        uk: { title: string; text: string };
        en: { title: string; text: string };
        ru: { title: string; text: string };
    };
};

export const stickyList: StickyCardType[] = [
    {
        images: [
            "/images/safety1.jpg",
            "/images/safety2.jpg",
            "/images/safety3.jpg",
            "/images/safety4.jpg",
            "/images/safety5.jpg",
            "/images/safety6.jpg",
        ],
        data: {
            uk: {
                title: "безпека",
                text: "Ми регулярно проводимо знезараження приміщень, беремо проби на присутність бактерій і вірусів, здійснюємо заміну і профілактичні роботи систем очищення повітря і вживаємо багато інших заходів, щоб повністю виключити ризик і людський фактор при проведенні операцій і гарантувати збереження здоров’я наших пацієнтів.",
            },
            en: {
                title: "safety",
                text: "We regularly disinfect our premises, test for the presence of bacteria and viruses, carry out maintenance and replacement of air purification systems, and take many other measures to completely eliminate risks and the human factor during surgeries, ensuring the health and safety of our patients.",
            },
            ru: {
                title: "безопасность",
                text: "Мы регулярно проводим дезинфекцию помещений, берём пробы на наличие бактерий и вирусов, выполняем замену и профилактические работы систем очистки воздуха и предпринимаем множество других мер, чтобы полностью исключить риск и человеческий фактор при проведении операций и гарантировать сохранность здоровья наших пациентов.",
            },
        },
    },
    {
        images: [
            "/images/equipment1.jpg",
            "/images/equipment2.jpg",
            "/images/equipment3.jpg",
            "/images/equipment4.jpg",
            "/images/equipment5.jpg",
            "/images/equipment6.jpg",
        ],
        data: {
            uk: {
                title: "обладнання",
                text: "У всіх наших клініках використовується передове обладнання з діагностики та проведення операцій. Рівень оснащеності нашого медичного центру є орієнтиром для провідних європейських центрів з лікування хвороб ока.",
            },
            en: {
                title: "equipment",
                text: "All our clinics are equipped with advanced diagnostic and surgical equipment. The level of our medical center’s facilities serves as a benchmark for leading European eye disease treatment centers.",
            },
            ru: {
                title: "оборудование",
                text: "Во всех наших клиниках используется передовое оборудование для диагностики и проведения операций. Уровень оснащённости нашего медицинского центра является ориентиром для ведущих европейских центров по лечению заболеваний глаз.",
            },
        },
    },
    {
        images: [
            "/images/facilities1.jpg",
            "/images/facilities2.jpg",
            "/images/facilities3.jpg",
            "/images/facilities4.jpg",
            "/images/facilities5.jpg",
            "/images/facilities6.jpg",
        ],
        data: {
            uk: {
                title: "приміщення",
                text: "Наші будівлі облаштовано відповідно до сучасних і вимогливих європейських норм, що регламентують роботу медичних установ. ",
            },
            en: {
                title: "facilities",
                text: "Our buildings are designed and equipped in accordance with modern and demanding European standards regulating the operation of medical institutions.",
            },
            ru: {
                title: "помещения",
                text: "Наши здания оборудованы в соответствии с современными и строгими европейскими нормами, регламентирующими работу медицинских учреждений.",
            },
        },
    },
];

export type AchievementsType = {
    uk: { up: string; down: string };
    en: { up: string; down: string };
    ru: { up: string; down: string };
};

export const achievementsList: AchievementsType[] = [
    {
        uk: { up: "19", down: "років досвіду" },
        en: { up: "19", down: "years of experience" },
        ru: { up: "19", down: "лет опыта" },
    },
    {
        uk: { up: "5 млн", down: "консультацій проведено" },
        en: { up: "5 m", down: "consultations held" },
        ru: { up: "5 млн", down: "консультаций проведено" },
    },
    {
        uk: { up: "1.5 млн", down: "операцій проведено" },
        en: { up: "1.5 m", down: "operations carried out" },
        ru: { up: "1.5 млн", down: "операций проведено" },
    },
    {
        uk: { up: "1 млн", down: "задоволених клієнтів" },
        en: { up: "1 m", down: "satisfied customers" },
        ru: { up: "1 млн", down: "довольных клиентов" },
    },
];

export type AboutServicesType = {
    key: ServiceKey;
    link: string;
    data: {
        uk: { title: string; text: string };
        en: { title: string; text: string };
        ru: { title: string; text: string };
    };
};

export const aboutServicesList: AboutServicesType[] = [
    {
        key: "vitreoretinalna-hirurgiya",
        link: "/posluhy/vitreoretinalna-hirurgiya",
        data: {
            uk: {
                title: "Вітреоретинальна хірургія",
                text: "Це складний комбінований метод оперативного лікування патології сітківки та скловидного тіла",
            },
            en: {
                title: "Vitreoretinal Surgery",
                text: "A complex combined surgical method for treating retinal and vitreous body disorders.",
            },
            ru: {
                title: "Витреоретинальная хирургия",
                text: "Это сложный комбинированный метод оперативного лечения патологии сетчатки и стекловидного тела.",
            },
        },
    },
    {
        key: "likuvannya-kosookosti",
        link: "/posluhy/likuvannya-kosookosti",

        data: {
            uk: {
                title: "Лікування косоокості методом «регульованих швів»",
                text: "Коли проблему неможливо усунути консервативними методами",
            },
            en: {
                title: "Strabismus Treatment Using the 'Adjustable Sutures' Method",
                text: "When the problem cannot be corrected by conservative methods.",
            },
            ru: {
                title: "Лечение косоглазия методом «регулируемых швов»",
                text: "Когда проблему невозможно устранить консервативными методами.",
            },
        },
    },
    {
        key: "refrakczijna-lensektomiya",
        link: "/posluhy/refrakczijna-lensektomiya",
        data: {
            uk: {
                title: "Альтернатива лазерної корекції зору RLE",
                text: "Коли проблему неможливо усунути консервативними методами",
            },
            en: {
                title: "Alternative to Laser Vision Correction — RLE",
                text: "When the problem cannot be corrected by conservative methods.",
            },
            ru: {
                title: "Альтернатива лазерной коррекции зрения RLE",
                text: "Когда проблему невозможно устранить консервативными методами.",
            },
        },
    },
];
