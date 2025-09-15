import { ServicesKeyType } from "./menu";

export type NewsLocaleType = {
    title: string;
    text: string;
};

export type NewsType = {
    service: ServicesKeyType;
    date: string;
    img?: string;
    link: string;
    uk: NewsLocaleType;
    ru: NewsLocaleType;
    en: NewsLocaleType;
};

export const newsList: NewsType[] = [
    {
        service: "lazerna-korekcziya-zoru",
        date: "31.07.2025",
        img: "/images/lazerna-korekcziya-zoru.jpg",
        link: "",
        uk: {
            title: "Лазерна корекція зору тепер у British Eyes!",
            text: "Мрієте про ідеальний зір без окулярів чи контактних лінз? Тепер це можливо завдяки лазерній корекції зору в British Eyes! Наші досвідчені офтальмологи використовують найсучасніші технології для безпечного та ефективного покращення вашого зору. Запишіться на консультацію вже сьогодні та зробіть перший крок до ясного бачення світу навколо вас!",
        },
        ru: {
            title: "Лазерная коррекция зрения теперь в British Eyes!",
            text: "Мечтаете об идеальном зрении без очков или контактных линз? Теперь это возможно благодаря лазерной коррекции зрения в British Eyes! Наши опытные офтальмологи используют самые современные технологии для безопасного и эффективного улучшения вашего зрения. Запишитесь на консультацию уже сегодня и сделайте первый шаг к ясному видению мира вокруг вас!",
        },
        en: {
            title: "Laser Eye Surgery Now at British Eyes!",
            text: "Dreaming of perfect vision without glasses or contact lenses? Now it's possible with laser eye surgery at British Eyes! Our experienced ophthalmologists use the latest technologies for safe and effective vision improvement. Book a consultation today and take the first step towards clear vision of the world around you!",
        },
    },
    {
        service: "hirurgichne-likuvannya-glaukomi",
        date: "31.07.2025",
        link: "",
        uk: {
            title: "Представляємо нашого нового спеціаліста з дитячої офтальмології!",
            text: "Ми раді повідомити, що до нашої команди приєднався новий спеціаліст з дитячої офтальмології! З багаторічним досвідом у лікуванні дитячих очних захворювань, він допоможе забезпечити найкращий догляд за зором ваших дітей. Запишіться на прийом і переконайтеся в професіоналізмі нашого нового лікаря!",
        },
        ru: {
            title: "Представляем нашего нового специалиста по детской офтальмологии!",
            text: "Мы рады сообщить, что к нашей команде присоединился новый специалист по детской офтальмологии! С многолетним опытом в лечении детских глазных заболеваний, он поможет обеспечить лучший уход за зрением ваших детей. Запишитесь на прием и убедитесь в профессионализме нашего нового врача!",
        },
        en: {
            title: "Introducing Our New Pediatric Eye Care Specialist!",
            text: "We are excited to announce that a new pediatric eye care specialist has joined our team! With years of experience in treating children's eye conditions, they will help provide the best care for your children's vision. Schedule an appointment and experience the professionalism of our new doctor!",
        },
    },
    {
        service: "lazerne-likuvannya-zahvoryuvan-oka",
        date: "31.07.2025",
        img: "/images/likuvannya-katarakti.jpg",
        link: "",
        uk: {
            title: "Весняні поради по догляду за очима від British Eyes",
            text: "Весна - час оновлення, і ваші очі заслуговують на особливий догляд! British Eyes підготував для вас кілька корисних порад, щоб зберегти здоров'я ваших очей у цей сезон. Від правильного харчування до захисту від ультрафіолетових променів - дізнайтеся, як підтримувати ясний зір і комфорт для ваших очей цієї весни.",
        },
        ru: {
            title: "Весенние советы по уходу за глазами от British Eyes",
            text: "Весна - время обновления, и ваши глаза заслуживают особого ухода! British Eyes подготовил для вас несколько полезных советов, чтобы сохранить здоровье ваших глаз в этот сезон. От правильного питания до защиты от ультрафиолетовых лучей - узнайте, как поддерживать ясное зрение и комфорт для ваших глаз этой весной.",
        },
        en: {
            title: "Spring Eye Care Tips from British Eyes",
            text: "Spring is a time of renewal, and your eyes deserve special care! British Eyes has prepared some useful tips to help you maintain your eye health this season. From proper nutrition to protection from UV rays - learn how to keep your vision clear and your eyes comfortable this spring.",
        },
    },
];
