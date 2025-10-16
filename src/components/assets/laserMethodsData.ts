export type ContentLazerSubpageType = {
    textTitle: string;
    text: string[];
};

export type LocaleSubLazerPageType = {
    title: string;
    subtitle: string;
    data: ContentLazerSubpageType[];
};

export type SubPageType = {
    key: string;
    image: string;
    content: {
        uk: LocaleSubLazerPageType;
        ru: LocaleSubLazerPageType;
        en: LocaleSubLazerPageType;
    };
};

export const subpageLazerData: SubPageType[] = [
    {
        key: "sportlife-lasik",
        image: "/images/lasek.png",
        content: {
            uk: {
                title: "SportLine LASEK",
                subtitle: "Безкомпромісне рішення для професійних спортсменів",
                data: [
                    {
                        textTitle: "Максимальна свобода руху без оптики",
                        text: [
                            "Спорт та активний спосіб життя вимагають чіткого зору, надійності та повного контролю. Окуляри можуть сповзати, а лінзи викликати дискомфорт під час тренувань. Навіть незначні обмеження заважають зосередитись на результаті. Тим, хто не готовий миритися з компромісами, є сучасне рішення — лазерна корекція зору за технологією SportLife LASEK ",
                        ],
                    },
                    {
                        textTitle: "Корекція, що щадить, — максимум безпеки",
                        text: [
                            "SportLife LASEK - це вдосконалена поверхня корекції, спеціально адаптована для людей з підвищеним фізичним навантаженням або тонкою рогівкою. Процедура проводиться без формування рогівкового клаптя, що робить її особливо безпечною при активній діяльності. Вона зберігає структуру ока максимально природною, мінімізуючи ризики навіть при зіткненнях чи падіннях.",
                        ],
                    },
                    {
                        textTitle: "Технологія, створена для активних",
                        text: [
                            "Завдяки точному контролю лазера та сучасному програмному забезпеченню, процедура дозволяє змоделювати корекцію з урахуванням індивідуальних параметрів зору. SportLife LASEK ідеально підходить для спортсменів, захоплених єдиноборствами, зимовими та водними видами спорту, де особливо важлива механічна стабільність ока.",
                        ],
                    },
                    {
                        textTitle: "Вибір тих, хто не зупиняється",
                        text: [
                            "Наші пацієнти – професійні атлети, марафонці, тріатлети, танцюристи та тренери – цінують SportLife LASEK за її надійність, щадний вплив та можливість швидко повернутися до тренувань. Вже через кілька днів після процедури можна відновити легкі фізичні навантаження, а через короткий відновлювальний період повністю повернутися до колишнього ритму.",
                            "Якщо ви шукаєте безоптичну свободу, не жертвуючи безпекою та якістю зору, SportLife LASEK стане вашим надійним рішенням. Ця технологія – оптимальний вибір для активних людей, які цінують результат та піклуються про своє здоров'я.",
                        ],
                    },
                ],
            },
            ru: {
                title: "SportLine LASEK",
                subtitle:
                    "Бескомпромиссное решение для профессиональных спортсменов",
                data: [
                    {
                        textTitle: "Максимальная свобода движений без оптики",
                        text: [
                            "Спорт и активный образ жизни требуют чёткого зрения, надёжности и полного контроля. Очки могут сползать, а линзы вызывать дискомфорт во время тренировок. Даже незначительные ограничения мешают сосредоточиться на результате. Для тех, кто не готов мириться с компромиссами, существует современное решение — лазерная коррекция зрения по технологии SportLife LASEK.",
                        ],
                    },
                    {
                        textTitle: "Щадящая коррекция — максимум безопасности",
                        text: [
                            "SportLife LASEK — это усовершенствованная поверхностная коррекция, специально адаптированная для людей с повышенными физическими нагрузками или тонкой роговицей. Процедура проводится без формирования роговичного лоскута, что делает её особенно безопасной при активной деятельности. Она сохраняет структуру глаза максимально естественной, минимизируя риски даже при столкновениях или падениях.",
                        ],
                    },
                    {
                        textTitle: "Технология, созданная для активных",
                        text: [
                            "Благодаря точному контролю лазера и современному программному обеспечению, процедура позволяет смоделировать коррекцию с учётом индивидуальных параметров зрения. SportLife LASEK идеально подходит для спортсменов, занимающихся единоборствами, зимними или водными видами спорта, где особенно важна механическая стабильность глаза.",
                        ],
                    },
                    {
                        textTitle: "Выбор тех, кто не останавливается",
                        text: [
                            "Наши пациенты — профессиональные атлеты, марафонцы, триатлеты, танцоры и тренеры — ценят SportLife LASEK за надёжность, щадящее воздействие и возможность быстро вернуться к тренировкам. Уже через несколько дней после процедуры можно возобновить лёгкие физические нагрузки, а после короткого восстановительного периода полностью вернуться к привычному ритму.",
                            "Если вы ищете свободу без оптики, не жертвуя безопасностью и качеством зрения, SportLife LASEK станет вашим надёжным решением. Эта технология — оптимальный выбор для активных людей, которые ценят результат и заботятся о своём здоровье.",
                        ],
                    },
                ],
            },
            en: {
                title: "SportLine LASEK",

                subtitle:
                    "The uncompromising solution for professional athletes",
                data: [
                    {
                        textTitle: "Maximum freedom of movement without optics",
                        text: [
                            "Sports and an active lifestyle require clear vision, reliability, and full control. Glasses can slip, and lenses may cause discomfort during training. Even minor limitations can distract from achieving your goals. For those who refuse to compromise, there is a modern solution — laser vision correction with SportLife LASEK technology.",
                        ],
                    },
                    {
                        textTitle: "Gentle correction — maximum safety",
                        text: [
                            "SportLife LASEK is an advanced surface correction method specially adapted for people with increased physical activity or thin corneas. The procedure is performed without creating a corneal flap, making it particularly safe for active lifestyles. It preserves the eye’s natural structure, minimizing risks even in case of collisions or falls.",
                        ],
                    },
                    {
                        textTitle: "Technology designed for the active",
                        text: [
                            "Thanks to precise laser control and modern software, the procedure allows for personalized correction tailored to individual visual parameters. SportLife LASEK is ideal for athletes engaged in martial arts, winter or water sports, where mechanical stability of the eye is especially important.",
                        ],
                    },
                    {
                        textTitle: "The choice of those who never stop",
                        text: [
                            "Our patients — professional athletes, marathoners, triathletes, dancers, and trainers — value SportLife LASEK for its reliability, gentle approach, and the ability to return to training quickly. Just a few days after the procedure, you can resume light physical activity, and after a short recovery period, fully return to your usual rhythm.",
                            "If you are looking for optical freedom without compromising safety and vision quality, SportLife LASEK is your trusted solution. This technology is the optimal choice for active people who value results and care about their health.",
                        ],
                    },
                ],
            },
        },
    },
    {
        key: "iq-lasik-oxygen-3d",
        image: "/images/eagle.jpg",
        content: {
            uk: {
                title: "IQ-LASIK Oxygen 3D",
                subtitle: "корекція без підвищення температури рогівки ока",
                data: [
                    {
                        textTitle:
                            "Для тих, хто вибирає високу якість без компромісів",
                        text: [
                            "Методика iQ-LASIK Oxygen 3D – це інноваційний та безпечний спосіб корекції зору з використанням рефракційного лазера. Розроблена на основі багаторічного досвіду, вона вже допомогла тисячам пацієнтів відновити зір та відмовитися від окулярів та контактних лінз.",
                            "Щороку по всьому світу виконуються мільйони процедур лазерної корекції, і iQ-LASIK Oxygen 3D займає серед них особливе місце завдяки своїй ефективності та рівню безпеки. Технологія дозволяє швидко досягти відмінного результату – пацієнти починають бачити чітко та яскраво, без оптичних засобів.",
                        ],
                    },
                    {
                        textTitle: "Унікальна технологія без перегріву рогівки",
                        text: [
                            "Однією з ключових особливостей цієї методики є проведення корекції без підвищення температури тканин рогівки. Це так звана холодна лазерна процедура, що досягається за рахунок використання високоточного сучасного обладнання з індивідуальною схемою розподілу енергії (авторською номограмою), що дозволяє мінімізувати тепловий вплив на тканини.",
                            "Під час корекції використовуються захисні компоненти, які мінімізують вплив вільних радикалів, що сприяє більш високій чіткості зору в післяопераційний період і знижує ризик ускладнень.",
                            "iQ-LASIK Oxygen 3D - ідеальний вибір для тих, хто цінує точність, комфорт та результат без компромісів.",
                        ],
                    },
                ],
            },
            ru: {
                title: "IQ-LASIK Oxygen 3D",
                subtitle: "коррекция без повышения температуры роговицы глаза",
                data: [
                    {
                        textTitle:
                            "Для тех, кто выбирает высокое качество без компромиссов",
                        text: [
                            "Методика iQ-LASIK Oxygen 3D — это инновационный и безопасный способ коррекции зрения с использованием рефракционного лазера. Разработанная на основе многолетнего опыта, она уже помогла тысячам пациентов восстановить зрение и отказаться от очков и контактных линз.",
                            "Ежегодно во всём мире выполняются миллионы процедур лазерной коррекции, и iQ-LASIK Oxygen 3D занимает среди них особое место благодаря своей эффективности и уровню безопасности. Технология позволяет быстро достичь отличного результата — пациенты начинают видеть чётко и ярко, без оптических средств.",
                        ],
                    },
                    {
                        textTitle:
                            "Уникальная технология без перегрева роговицы",
                        text: [
                            "Одной из ключевых особенностей этой методики является проведение коррекции без повышения температуры тканей роговицы. Это так называемая холодная лазерная процедура, достигаемая за счёт использования высокоточного современного оборудования с индивидуальной схемой распределения энергии (авторской номограммой), что позволяет минимизировать тепловое воздействие на ткани.",
                            "Во время коррекции применяются защитные компоненты, которые снижают влияние свободных радикалов, что способствует более высокой чёткости зрения в послеоперационный период и уменьшает риск осложнений.",
                            "iQ-LASIK Oxygen 3D — идеальный выбор для тех, кто ценит точность, комфорт и результат без компромиссов.",
                        ],
                    },
                ],
            },
            en: {
                title: "IQ-LASIK Oxygen 3D",
                subtitle: "correction without increasing corneal temperature",
                data: [
                    {
                        textTitle:
                            "For those who choose high quality without compromise",
                        text: [
                            "The iQ-LASIK Oxygen 3D technique is an innovative and safe method of vision correction using a refractive laser. Developed based on many years of experience, it has already helped thousands of patients restore their vision and give up glasses and contact lenses.",
                            "Every year, millions of laser vision correction procedures are performed worldwide, and iQ-LASIK Oxygen 3D holds a special place among them thanks to its efficiency and high level of safety. The technology allows you to quickly achieve an excellent result — patients begin to see clearly and vividly without optical aids.",
                        ],
                    },
                    {
                        textTitle:
                            "Unique technology without corneal overheating",
                        text: [
                            "One of the key features of this technique is performing correction without increasing the temperature of corneal tissues. This so-called cold laser procedure is achieved through the use of high-precision modern equipment with an individual energy distribution scheme (a proprietary nomogram), which minimizes the thermal impact on the tissue.",
                            "During the correction, protective components are used to minimize the effects of free radicals, which ensures greater visual clarity in the postoperative period and reduces the risk of complications.",
                            "iQ-LASIK Oxygen 3D is the perfect choice for those who value precision, comfort, and uncompromising results.",
                        ],
                    },
                ],
            },
        },
    },
];

export const subpageCataractData: SubPageType[] = [
    {
        key: "iq-5-minutes",
        image: "/images/iq-5-minute.jpg",
        content: {
            uk: {
                title: "iq-5-minutes",
                subtitle: "Безкомпромісне рішення для професійних спортсменів",
                data: [
                    {
                        textTitle: "Максимальна свобода руху без оптики",
                        text: [
                            "Спорт та активний спосіб життя вимагають чіткого зору, надійності та повного контролю. Окуляри можуть сповзати, а лінзи викликати дискомфорт під час тренувань. Навіть незначні обмеження заважають зосередитись на результаті. Тим, хто не готовий миритися з компромісами, є сучасне рішення — лазерна корекція зору за технологією SportLife LASEK ",
                        ],
                    },
                    {
                        textTitle: "Корекція, що щадить, — максимум безпеки",
                        text: [
                            "SportLife LASEK - це вдосконалена поверхня корекції, спеціально адаптована для людей з підвищеним фізичним навантаженням або тонкою рогівкою. Процедура проводиться без формування рогівкового клаптя, що робить її особливо безпечною при активній діяльності. Вона зберігає структуру ока максимально природною, мінімізуючи ризики навіть при зіткненнях чи падіннях.",
                        ],
                    },
                    {
                        textTitle: "Технологія, створена для активних",
                        text: [
                            "Завдяки точному контролю лазера та сучасному програмному забезпеченню, процедура дозволяє змоделювати корекцію з урахуванням індивідуальних параметрів зору. SportLife LASEK ідеально підходить для спортсменів, захоплених єдиноборствами, зимовими та водними видами спорту, де особливо важлива механічна стабільність ока.",
                        ],
                    },
                    {
                        textTitle: "Вибір тих, хто не зупиняється",
                        text: [
                            "Наші пацієнти – професійні атлети, марафонці, тріатлети, танцюристи та тренери – цінують SportLife LASEK за її надійність, щадний вплив та можливість швидко повернутися до тренувань. Вже через кілька днів після процедури можна відновити легкі фізичні навантаження, а через короткий відновлювальний період повністю повернутися до колишнього ритму.",
                            "Якщо ви шукаєте безоптичну свободу, не жертвуючи безпекою та якістю зору, SportLife LASEK стане вашим надійним рішенням. Ця технологія – оптимальний вибір для активних людей, які цінують результат та піклуються про своє здоров'я.",
                        ],
                    },
                ],
            },
            ru: {
                title: "SportLine LASEK",
                subtitle:
                    "Бескомпромиссное решение для профессиональных спортсменов",
                data: [
                    {
                        textTitle: "Максимальная свобода движений без оптики",
                        text: [
                            "Спорт и активный образ жизни требуют чёткого зрения, надёжности и полного контроля. Очки могут сползать, а линзы вызывать дискомфорт во время тренировок. Даже незначительные ограничения мешают сосредоточиться на результате. Для тех, кто не готов мириться с компромиссами, существует современное решение — лазерная коррекция зрения по технологии SportLife LASEK.",
                        ],
                    },
                    {
                        textTitle: "Щадящая коррекция — максимум безопасности",
                        text: [
                            "SportLife LASEK — это усовершенствованная поверхностная коррекция, специально адаптированная для людей с повышенными физическими нагрузками или тонкой роговицей. Процедура проводится без формирования роговичного лоскута, что делает её особенно безопасной при активной деятельности. Она сохраняет структуру глаза максимально естественной, минимизируя риски даже при столкновениях или падениях.",
                        ],
                    },
                    {
                        textTitle: "Технология, созданная для активных",
                        text: [
                            "Благодаря точному контролю лазера и современному программному обеспечению, процедура позволяет смоделировать коррекцию с учётом индивидуальных параметров зрения. SportLife LASEK идеально подходит для спортсменов, занимающихся единоборствами, зимними или водными видами спорта, где особенно важна механическая стабильность глаза.",
                        ],
                    },
                    {
                        textTitle: "Выбор тех, кто не останавливается",
                        text: [
                            "Наши пациенты — профессиональные атлеты, марафонцы, триатлеты, танцоры и тренеры — ценят SportLife LASEK за надёжность, щадящее воздействие и возможность быстро вернуться к тренировкам. Уже через несколько дней после процедуры можно возобновить лёгкие физические нагрузки, а после короткого восстановительного периода полностью вернуться к привычному ритму.",
                            "Если вы ищете свободу без оптики, не жертвуя безопасностью и качеством зрения, SportLife LASEK станет вашим надёжным решением. Эта технология — оптимальный выбор для активных людей, которые ценят результат и заботятся о своём здоровье.",
                        ],
                    },
                ],
            },
            en: {
                title: "SportLine LASEK",

                subtitle:
                    "The uncompromising solution for professional athletes",
                data: [
                    {
                        textTitle: "Maximum freedom of movement without optics",
                        text: [
                            "Sports and an active lifestyle require clear vision, reliability, and full control. Glasses can slip, and lenses may cause discomfort during training. Even minor limitations can distract from achieving your goals. For those who refuse to compromise, there is a modern solution — laser vision correction with SportLife LASEK technology.",
                        ],
                    },
                    {
                        textTitle: "Gentle correction — maximum safety",
                        text: [
                            "SportLife LASEK is an advanced surface correction method specially adapted for people with increased physical activity or thin corneas. The procedure is performed without creating a corneal flap, making it particularly safe for active lifestyles. It preserves the eye’s natural structure, minimizing risks even in case of collisions or falls.",
                        ],
                    },
                    {
                        textTitle: "Technology designed for the active",
                        text: [
                            "Thanks to precise laser control and modern software, the procedure allows for personalized correction tailored to individual visual parameters. SportLife LASEK is ideal for athletes engaged in martial arts, winter or water sports, where mechanical stability of the eye is especially important.",
                        ],
                    },
                    {
                        textTitle: "The choice of those who never stop",
                        text: [
                            "Our patients — professional athletes, marathoners, triathletes, dancers, and trainers — value SportLife LASEK for its reliability, gentle approach, and the ability to return to training quickly. Just a few days after the procedure, you can resume light physical activity, and after a short recovery period, fully return to your usual rhythm.",
                            "If you are looking for optical freedom without compromising safety and vision quality, SportLife LASEK is your trusted solution. This technology is the optimal choice for active people who value results and care about their health.",
                        ],
                    },
                ],
            },
        },
    },
    {
        key: "iq-life-3d-vodnij-potik",
        image: "/images/live.jpg",
        content: {
            uk: {
                title: "iQ-Life 3D «водний потік»",
                subtitle: "корекція без підвищення температури рогівки ока",
                data: [
                    {
                        textTitle:
                            "Для тих, хто вибирає високу якість без компромісів",
                        text: [
                            "Методика iQ-LASIK Oxygen 3D – це інноваційний та безпечний спосіб корекції зору з використанням рефракційного лазера. Розроблена на основі багаторічного досвіду, вона вже допомогла тисячам пацієнтів відновити зір та відмовитися від окулярів та контактних лінз.",
                            "Щороку по всьому світу виконуються мільйони процедур лазерної корекції, і iQ-LASIK Oxygen 3D займає серед них особливе місце завдяки своїй ефективності та рівню безпеки. Технологія дозволяє швидко досягти відмінного результату – пацієнти починають бачити чітко та яскраво, без оптичних засобів.",
                        ],
                    },
                    {
                        textTitle: "Унікальна технологія без перегріву рогівки",
                        text: [
                            "Однією з ключових особливостей цієї методики є проведення корекції без підвищення температури тканин рогівки. Це так звана холодна лазерна процедура, що досягається за рахунок використання високоточного сучасного обладнання з індивідуальною схемою розподілу енергії (авторською номограмою), що дозволяє мінімізувати тепловий вплив на тканини.",
                            "Під час корекції використовуються захисні компоненти, які мінімізують вплив вільних радикалів, що сприяє більш високій чіткості зору в післяопераційний період і знижує ризик ускладнень.",
                            "iQ-LASIK Oxygen 3D - ідеальний вибір для тих, хто цінує точність, комфорт та результат без компромісів.",
                        ],
                    },
                ],
            },
            ru: {
                title: "iQ-Life 3D «водный поток»",
                subtitle: "коррекция без повышения температуры роговицы глаза",
                data: [
                    {
                        textTitle:
                            "Для тех, кто выбирает высокое качество без компромиссов",
                        text: [
                            "Методика iQ-LASIK Oxygen 3D — это инновационный и безопасный способ коррекции зрения с использованием рефракционного лазера. Разработанная на основе многолетнего опыта, она уже помогла тысячам пациентов восстановить зрение и отказаться от очков и контактных линз.",
                            "Ежегодно во всём мире выполняются миллионы процедур лазерной коррекции, и iQ-LASIK Oxygen 3D занимает среди них особое место благодаря своей эффективности и уровню безопасности. Технология позволяет быстро достичь отличного результата — пациенты начинают видеть чётко и ярко, без оптических средств.",
                        ],
                    },
                    {
                        textTitle:
                            "Уникальная технология без перегрева роговицы",
                        text: [
                            "Одной из ключевых особенностей этой методики является проведение коррекции без повышения температуры тканей роговицы. Это так называемая холодная лазерная процедура, достигаемая за счёт использования высокоточного современного оборудования с индивидуальной схемой распределения энергии (авторской номограммой), что позволяет минимизировать тепловое воздействие на ткани.",
                            "Во время коррекции применяются защитные компоненты, которые снижают влияние свободных радикалов, что способствует более высокой чёткости зрения в послеоперационный период и уменьшает риск осложнений.",
                            "iQ-LASIK Oxygen 3D — идеальный выбор для тех, кто ценит точность, комфорт и результат без компромиссов.",
                        ],
                    },
                ],
            },
            en: {
                title: "iQ-Life 3D «water flow»",
                subtitle: "correction without increasing corneal temperature",
                data: [
                    {
                        textTitle:
                            "For those who choose high quality without compromise",
                        text: [
                            "The iQ-LASIK Oxygen 3D technique is an innovative and safe method of vision correction using a refractive laser. Developed based on many years of experience, it has already helped thousands of patients restore their vision and give up glasses and contact lenses.",
                            "Every year, millions of laser vision correction procedures are performed worldwide, and iQ-LASIK Oxygen 3D holds a special place among them thanks to its efficiency and high level of safety. The technology allows you to quickly achieve an excellent result — patients begin to see clearly and vividly without optical aids.",
                        ],
                    },
                    {
                        textTitle:
                            "Unique technology without corneal overheating",
                        text: [
                            "One of the key features of this technique is performing correction without increasing the temperature of corneal tissues. This so-called cold laser procedure is achieved through the use of high-precision modern equipment with an individual energy distribution scheme (a proprietary nomogram), which minimizes the thermal impact on the tissue.",
                            "During the correction, protective components are used to minimize the effects of free radicals, which ensures greater visual clarity in the postoperative period and reduces the risk of complications.",
                            "iQ-LASIK Oxygen 3D is the perfect choice for those who value precision, comfort, and uncompromising results.",
                        ],
                    },
                ],
            },
        },
    },
];
