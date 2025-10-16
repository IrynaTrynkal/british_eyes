import { MethodType } from "./aboutData";
import { ServicesKeyType, servicesList, ServicesListProps } from "./menu";
import { PriceItemType, priceList } from "./priceList";

export type ServicesLocaleProps = {
    textMain: string;
    preview?: PreviewProps;
};

export type ServicesProps = {
    name: ServicesListProps;
    additionalIcon?: string;
    price: PriceItemType;
    uk: ServicesLocaleProps;
    en: ServicesLocaleProps;
    ru: ServicesLocaleProps;
};

const findPriceItem = (key: ServicesKeyType): PriceItemType => {
    const item = priceList.find(p => p.key === key)?.list[0];
    if (item) return item;
    return {
        price: 0,
    };
};
export type PreviewProps = {
    title: string;
    text?: string[];
    textUp?: string;
    textDown?: string;
    image?: string;
};

export const servicesData: ServicesProps[] = [
    {
        name: servicesList.find(s => s.key === "perevirka-zoru")!,
        price: findPriceItem("perevirka-zoru")!,
        uk: {
            textMain:
                "Комплексне обстеження та перевірка зору з використанням сучасного обладнання.",
            preview: {
                title: "Сучасне обстеження зору щодо стандартів ЄС",
                text: [
                    "Діагностика проводиться з використанням високоточного обладнання, яке відповідає нормам Євросоюзу. Це дозволяє отримати об'єктивні дані про стан органів зору та підібрати максимально ефективне лікування як хірургічне, так і консервативне.",
                    "Розшифровкою результатів займається офтальмолог найвищої кваліфікаційної категорії. Всі рекомендації лікар пояснює у зрозумілій формі, щоб пацієнт міг повністю усвідомити суть діагнозу та можливі варіанти терапії.",
                ],
                image: "/images/perevirka-zoru-preview.jpg",
                textUp: "5 млн",
                textDown: "консультацій проведено",
            },
        },
        en: {
            textMain:
                "Comprehensive examination and vision test using modern equipment.",
            preview: {
                title: "Modern eye examination according to EU standards",
                text: [
                    "Diagnostics is carried out using high-precision equipment that meets European Union standards. This allows you to obtain objective data on the condition of the eyes and select the most effective treatment, both surgical and conservative.",
                    "The results are interpreted by an ophthalmologist of the highest qualification category. The doctor explains all recommendations in an understandable form so that the patient can fully understand the essence of the diagnosis and possible treatment options.",
                ],
                image: "/images/perevirka-zoru-preview.jpg",
                textUp: "5 m",
                textDown: "consultations held",
            },
        },
        ru: {
            textMain:
                "Комплексное обследование и проверка зрения с использованием современного оборудования.",
            preview: {
                title: "Современное обследование зрения по стандартам ЕС",
                text: [
                    "Диагностика проводится с использованием высокоточного оборудования, которое соответствует нормам Евросоюза. Это позволяет получить объективные данные о состоянии органов зрения и подобрать максимально эффективное лечение как хирургическое, так и консервативное.",
                    "Расшифровкой результатов занимается офтальмолог высшей квалификационной категории. Все рекомендации врач объясняет в понятной форме, чтобы пациент мог полностью осознать суть диагноза и возможные варианты терапии.",
                ],
                image: "/images/perevirka-zoru-preview.jpg",
                textUp: "5 млн",
                textDown: "консультаций проведено",
            },
        },
    },
    {
        name: servicesList.find(s => s.key === "likuvannya-katarakti")!,
        additionalIcon: "/icons/iq-life.svg",
        price: findPriceItem("likuvannya-katarakti")!,
        uk: {
            textMain:
                "Хірургічне лікування катаракти, косоокості, кератоконуса та інших офтальмологічних патологій.",
            preview: {
                title: "Катаракта в нашому центрі лікується «англійським водним потоком iQ-5 minutes»",
                text: [
                    "Ми використовуємо найпфередовішу методику факоемульсифікації катаракти — «Водний потік», яка вважається «золотим стандартом» в сучасній офтальмології.",
                    "Це швидкий, безпечний і комфортний метод, що дозволяє пацієнтам повернутися до звичного життя вже за кілька днів.",
                ],
                image: "/images/cataract-preview.jpg",
                textUp: "500 тис+",
                textDown: "успішних вилучень катаракти",
            },
        },
        en: {
            textMain:
                "Surgical treatment of cataracts, strabismus, keratoconus and other ophthalmological pathologies.",
            preview: {
                title: "Cataracts in our center are treated with the 'English Water Flow iQ-5 minutes'",
                text: [
                    "We use the most advanced phacoemulsification technique — the 'Water Flow', which is considered the 'gold standard' in modern ophthalmology.",
                    "It is a fast, safe and comfortable method that allows patients to return to their normal lives within a few days.",
                ],
                image: "/images/cataract-preview.jpg",
                textUp: "500 k+",
                textDown: "successful cataract removals",
            },
        },
        ru: {
            textMain:
                "Хирургическое лечение катаракты, косоглазия, кератоконуса и других офтальмологических патологий.",
            preview: {
                title: "Катаракта в нашем центре лечится «английским водным потоком iQ-5 minutes»",
                text: [
                    "Мы используем передовую методику факоэмульсификации катаракты — «Водный поток», которая считается «золотым стандартом» в современной офтальмологии.",
                    "Это быстрый, безопасный и комфортный метод, позволяющий пациентам вернуться к привычной жизни уже через несколько дней.",
                ],
                image: "/images/cataract-preview.jpg",
                textUp: "500 тыс+",
                textDown: "успешных удалений катаракты",
            },
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
            preview: {
                title: "Лазерна корекція зору – це  прорив у галузі офтальмології, який допомагає мільйонам людей у всьому світі покращити свій зір",
                text: [
                    "Цей процес включає використання точного лазера для зміни форми рогівки, що дозволяє світлу фокусуватися на сітківці і покращує зір.",
                    "Якщо ви втомилися від окулярів або контактних лінз і хочете покращити своє життя, то лазерна корекція зору може бути ідеальним рішенням для вас.",
                ],
                image: "/images/lazer-preview.jpg",
                textUp: "1 млн",
                textDown: "проведено лазерних корекцій",
            },
        },
        en: {
            textMain:
                "Modern methods of correcting refractive errors and restoring visual acuity.",
            preview: {
                title: "Laser vision correction is a breakthrough in ophthalmology that helps millions of people worldwide improve their eyesight",
                text: [
                    "This process involves using a precise laser to reshape the cornea, allowing light to focus on the retina and improving vision.",
                    "If you're tired of glasses or contact lenses and want to improve your life, laser vision correction may be the perfect solution for you.",
                ],
                image: "/images/lazer-preview.jpg",
                textUp: "1 m",
                textDown: "laser corrections performed",
            },
        },
        ru: {
            textMain:
                "Современные методы устранения рефракционных нарушений восстановления четкости зрения.",
            preview: {
                title: "Лазерная коррекция зрения – это прорыв в области офтальмологии, который помогает миллионам людей по всему миру улучшить свое зрение",
                text: [
                    "Этот процесс включает использование точного лазера для изменения формы роговицы, что позволяет свету фокусироваться на сетчатке и улучшает зрение.",
                    "Если вы устали от очков или контактных линз и хотите улучшить свою жизнь, то лазерная коррекция зрения может быть идеальным решением для вас.",
                ],
                image: "/images/lazer-preview.jpg",
                textUp: "1 млн",
                textDown: "проведено лазерных коррекций",
            },
        },
    },
    {
        name: servicesList.find(s => s.key === "dityache-viddilennya")!,
        price: findPriceItem("dityache-viddilennya")!,
        uk: {
            textMain:
                "Сучасні методи виправлення рефракційних порушень відновлення чіткості зору.Провідні дитячі офтальмологи – досвідчені лікарі, які знайдуть підхід до кожної дитини.",
        },
        en: {
            textMain:
                "Leading pediatric ophthalmologists are experienced doctors who will find an approach to each child.",
        },
        ru: {
            textMain:
                "Современные методы устранения рефракционных нарушений восстановления четкости зрения.Ведущие детские офтальмологи – опытные врачи, которые найдут подход к каждому ребенку.",
        },
    },
    {
        name: servicesList.find(s => s.key === "likuvannya-keratokonusa")!,
        price: findPriceItem("likuvannya-keratokonusa")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
        },
        en: {
            textMain:
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
        },
        ru: {
            textMain:
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
        },
    },
    {
        name: servicesList.find(s => s.key === "refrakczijna-lensektomiya")!,
        price: findPriceItem("refrakczijna-lensektomiya")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
        },
        en: {
            textMain:
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
        },
        ru: {
            textMain:
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
        },
    },
    {
        name: servicesList.find(
            s => s.key === "lazerne-likuvannya-zahvoryuvan-oka"
        )!,
        price: findPriceItem("lazerne-likuvannya-zahvoryuvan-oka")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
        },
        en: {
            textMain:
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
        },
        ru: {
            textMain:
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
        },
    },

    {
        name: servicesList.find(s => s.key === "intravitrealni-inekczii")!,
        price: findPriceItem("intravitrealni-inekczii")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
        },
        en: {
            textMain:
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
        },
        ru: {
            textMain:
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
        },
    },
    {
        name: servicesList.find(
            s => s.key === "hirurgichne-likuvannya-glaukomi"
        )!,
        price: findPriceItem("hirurgichne-likuvannya-glaukomi")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
        },
        en: {
            textMain:
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
        },
        ru: {
            textMain:
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
        },
    },
    {
        name: servicesList.find(s => s.key === "likuvannya-kosookosti")!,
        price: findPriceItem("likuvannya-kosookosti")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
        },
        en: {
            textMain:
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
        },
        ru: {
            textMain:
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
        },
    },
    {
        name: servicesList.find(
            s => s.key === "hirurgiya-povik-i-konyunktivi"
        )!,
        price: findPriceItem("hirurgiya-povik-i-konyunktivi")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
        },
        en: {
            textMain:
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
        },
        ru: {
            textMain:
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
        },
    },
    {
        name: servicesList.find(s => s.key === "ksenonoterapiya")!,
        price: findPriceItem("ksenonoterapiya")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
        },
        en: {
            textMain:
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
        },
        ru: {
            textMain:
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
        },
    },
];

export type MethodsSectionType = {
    title: string;
    text?: string;
    subtitle?: string;
    greenText?: string;
};

export const methodsLazerList: MethodType[] = [
    {
        image: "/images/eagle.jpg",
        link: "lazerna-korekcziya-zoru/iq-lasik-oxygen-3d",
        data: {
            uk: {
                title: "iQ-LASIK Oxygen 3D",
                text: "Сучасна і безпечна методика поліпшення зору рефракційним лазером.",
            },
            ru: {
                title: "iQ-LASIK Oxygen 3D",
                text: "Современная и безопасная методика улучшения зрения с помощью рефракционного лазера.",
            },
            en: {
                title: "iQ-LASIK Oxygen 3D",
                text: "A modern and safe method of improving vision using a refractive laser.",
            },
        },
    },
    {
        image: "/images/lasek.png",
        link: "lazerna-korekcziya-zoru/sportlife-lasik",
        data: {
            uk: {
                title: "SportLine LASEK",
                text: "Це «золотий стандарт» в сучасній офтальмології.",
            },
            ru: {
                title: "SportLine LASEK",
                text: "Это «золотой стандарт» в современной офтальмологии.",
            },
            en: {
                title: "SportLine LASEK",
                text: "This is the «gold standard» in modern ophthalmology.",
            },
        },
    },
];

export const methodsCataractList: MethodType[] = [
    {
        image: "/images/iq-5-minute.jpg",
        link: "likuvannya-katarakti/iq-5-minutes",
        data: {
            uk: {
                title: "iq-5-minutes",
                text: "Це безшовне видалення в складних випадках і обов’язкова імплантація інтраокулярної лінзи.",
            },
            ru: {
                title: "iq-5-minutes",
                text: "Это бесшовное удаление в сложных случаях и обязательная имплантация интраокулярной линзы.",
            },
            en: {
                title: "iq-5-minutes",
                text: "This is sutureless removal in complex cases with mandatory intraocular lens implantation.",
            },
        },
    },
    {
        image: "/images/live.jpg",
        link: "likuvannya-katarakti/iq-life-3d-vodnij-potik",
        data: {
            uk: {
                title: "iQ-Life 3D «водний потік»",
                text: "Це «золотий стандарт» в сучасній офтальмології.",
            },
            ru: {
                title: "iQ-Life 3D «водный поток»",
                text: "Это «золотой стандарт» в современной офтальмологии.",
            },
            en: {
                title: "iQ-Life 3D «Water Flow»",
                text: "This is the «gold standard» in modern ophthalmology.",
            },
        },
    },
];
