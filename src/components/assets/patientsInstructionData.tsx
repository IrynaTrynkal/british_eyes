import { AstigmatismTable } from "../shared/AstigmatismTable";
import { FarsightednessTable } from "../shared/FarsightednessTable";
import { TextType } from "./servicesData";

export type InstructionsSulgType =
    | "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam"
    | "informatsiya-dlya-inohorodnikh-patsiyentiv"
    | "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru"
    | "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu"
    | "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty"
    | "reminder-before-a-comprehensive-pediatric-examination"
    | "preparation-for-surgery-for-strabismus"
    | "patient-information-before-IPL-therapy"
    | "zakhvoryuvannya-ochey"
    | "reminders-and-instructions-for-patients";

export type EyeDiseaseSulgType =
    | "glaukoma"
    | "presbiopiya"
    | "dalekozorist"
    | "katarakta"
    | "simptomi-zahvoryuvannya-ochej"
    | "kosookist"
    | "korotkozorist-miopiya"
    | "astigmatizm";

export type KeySlugPatientsType = {
    key: InstructionsSulgType | EyeDiseaseSulgType;
    slug: { uk: string; en: string; ru: string };
};

export type ContentType = {
    title?: string;
    text: TextType[];
    btn?: { name: string; link: string; secondary?: boolean };
};

export type LocaleInstructionContent = {
    title: string;
    content: ContentType[];
};

export type PationtsInstructionType = {
    name: KeySlugPatientsType;
    uk: LocaleInstructionContent;
    en: LocaleInstructionContent;
    ru: LocaleInstructionContent;
};

export type EyeDiseaseType = {
    name: KeySlugPatientsType;
    uk: LocaleInstructionContent;
    en: LocaleInstructionContent;
    ru: LocaleInstructionContent;
};

export const keyEyeDisease: KeySlugPatientsType[] = [
    {
        key: "glaukoma",
        slug: { uk: "glaukoma", en: "glaucoma", ru: "glaukoma" },
    },
    {
        key: "presbiopiya",
        slug: { uk: "presbiopiya", en: "presbyopia", ru: "presbiopiya" },
    },
    {
        key: "dalekozorist",
        slug: { uk: "dalekozorist", en: "farsightedness", ru: "dalnozorkost" },
    },
    {
        key: "katarakta",
        slug: { uk: "katarakta", en: "cataract", ru: "katarakta" },
    },
    {
        key: "simptomi-zahvoryuvannya-ochej",
        slug: {
            uk: "simptomi-zahvoryuvannya-ochej",
            en: "symptoms-of-eye-disease",
            ru: "simptomy-zabolevaniya-glaz",
        },
    },
    {
        key: "kosookist",
        slug: { uk: "kosookist", en: "strabismus", ru: "kosoglazie" },
    },
    {
        key: "korotkozorist-miopiya",
        slug: {
            uk: "korotkozorist-miopiya",
            en: "nearsightedness-myopia",
            ru: "blizorukost-miopiya",
        },
    },
    {
        key: "astigmatizm",
        slug: { uk: "astigmatizm", en: "astigmatism", ru: "astigmatizm" },
    },
];

export const keySlugPatientsInstruction: KeySlugPatientsType[] = [
    {
        key: "informatsiya-dlya-inohorodnikh-patsiyentiv",
        slug: {
            uk: "informatsiya-dlya-inohorodnikh-patsiyentiv",
            en: "information-for-nonresident-patients",
            ru: "inogorodnim-patsiyentam",
        },
    },
    {
        key: "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam",
        slug: {
            uk: "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam",
            en: "information-for-patients-prior-to-microsurgery",
            ru: "informatsiya-dlya-patsiyentov-pered-mikrokhirurgicheskim-vmeshatelstvom",
        },
    },
    {
        key: "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru",
        slug: {
            uk: "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru",
            en: "instructions-after-laser-vision-correction",
            ru: "instruktsii-posle-korrektsii-zreniya",
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
        key: "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
        slug: {
            uk: "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
            en: "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty",
            ru: "pamyatki-paczienta-posle-hirurgii-katarakty",
        },
    },
    {
        key: "patient-information-before-IPL-therapy",
        slug: {
            uk: "patient-information-before-IPL-therapy",
            en: "patient-information-before-IPL-therapy",
            ru: "patient-information-before-IPL-therapy",
        },
    },
    {
        key: "preparation-for-surgery-for-strabismus",
        slug: {
            uk: "preparation-for-surgery-for-strabismus",
            en: "preparation-for-surgery-for-strabismus",
            ru: "preparation-for-surgery-for-strabismus",
        },
    },
    {
        key: "reminder-before-a-comprehensive-pediatric-examination",
        slug: {
            uk: "reminder-before-a-comprehensive-pediatric-examination",
            en: "reminder-before-a-comprehensive-pediatric-examination",
            ru: "reminder-before-a-comprehensive-pediatric-examination",
        },
    },
    {
        key: "reminders-and-instructions-for-patients",
        slug: {
            uk: "reminders-and-instructions-for-patients",
            en: "reminders-and-instructions-for-patients",
            ru: "reminders-and-instructions-for-patients",
        },
    },
];

export const pationtsInstructionsData: PationtsInstructionType[] = [
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "informatsiya-dlya-inohorodnikh-patsiyentiv"
        )!,
        uk: {
            title: "Інформація для іногородніх пацієнтів",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Лікування в клініці «Британський офтальмологічний центр» проводиться в режимі «одного дня». Застосування новітніх технологій очної мікрохірургії в клініці «Британський офтальмологічний центр» забезпечує більш швидке відновлення зору, дає змогу скорочувати строки лікування, відмовитися від необхідності перебування в стаціонарі та дає змогу пацієнту самому дістатися додому вже через 1-2 години після операції.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Вам знадобиться перебування в Києві:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "для проведення процедури лазерної корекції зору – 1 день, другий день, контрольний огляд, за бажанням пацієнта;",
                                "для проведення операції з видалення катаракти або хірургічного лікування глаукоми – протягом щонайменше 1-2 днів;",
                                "для проведення операції вітреоретинальних операцій – протягом 2 днів;",
                                "для проведення лазерного лікування глаукоми – протягом 2 днів;",
                                "для проведення лазерних процедур на сітківці – протягом 1 дня;",
                                "для проведения микрохирургических операций (косоглазие, введение Луцентиса и пр.) — в течение 2 дней;",
                                "для проведення курсу консервативного лікування або апаратного лікування – залежно від призначення лікаря.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Протягом зазначених термінів Вам буде проведено комплексну діагностику зору, підготовку до операції, розрахунок програми корекції або штучного кришталика, передопераційне обстеження (у разі, якщо потрібні лабораторні дослідження, пацієнт проходить за місцем проживання), безпосередньо саму процедуру або операцію та обов’язкові контрольні огляди. Подальший графік оглядів визначає лікар за індивідуальною схемою, виходячи зі стану пацієнта.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Для іногородніх пацієнтів співробітники центру медичної інформації та реєстрації допоможуть Вам забронювати готель, вирішать питання проживання, завдяки чому Ваше перебування в клініці і в місті буде максимально комфортним.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Для того щоб спростити пошук місця проживання на період перебування в Києві та проходження лікування в клініці «Британський офтальмологічний центр», ми пропонуємо Вам кілька варіантів готелів, які знаходяться недалеко від нашої клініки. Ви можете самостійно заздалегідь забронювати номер, щоб у день приїзду не турбуватися про це.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Список готелів, розташованих недалеко від клініки «Британський офтальмологічний центр»:",
                        },
                        {
                            type: "list",
                            list: [
                                "Готель «Дніпро»: вул. Хрещатик, 1/2 – (044)254-67-77 http://www.dniprohotel.ua/",
                                "Готель «Либідь»: Галицька пл., 1 – (044)239 –76-00 http://hotellybid.com.ua/",
                                "Готель «Україна»: Алея Героїв Небесної Сотні, 4 – +380 44 590 44 00 http://www.ukraine-hotel.kiev.ua/ua",
                                "Готель «Русь»: вулиця Госпітальна, 4 – +38 (044) 256 40 20 – http://www.hotelrus.kiev.ua/",
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Information for Non-Resident Patients",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Treatment at the 'British Ophthalmologic Center' clinic is performed in a 'one-day' mode. The use of advanced eye microsurgery technologies at the 'British Ophthalmologic Center' ensures faster vision recovery, shortens treatment time, eliminates the need for hospitalization, and allows the patient to return home within 1–2 hours after the surgery.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "You will need to stay in Kyiv for:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "laser vision correction – 1 day, second day for a follow-up exam if the patient wishes;",
                                "cataract removal or glaucoma surgery – at least 1–2 days;",
                                "vitreoretinal surgery – about 2 days;",
                                "laser glaucoma treatment – about 2 days;",
                                "laser retinal procedures – 1 day;",
                                "microsurgical procedures (strabismus, Lucentis injections, etc.) – about 2 days;",
                                "conservative or hardware treatment – depending on the doctor’s prescription.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "During the specified period, you will undergo a full vision diagnosis, preparation for surgery, calculation of the correction program or artificial lens, preoperative examination (if laboratory tests are required, they are done at your place of residence), the procedure or operation itself, and mandatory follow-up checkups. The schedule of further checkups is determined individually by your doctor based on your condition.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "For non-resident patients, the staff of the Medical Information and Registration Center will help you book a hotel and arrange accommodation, ensuring that your stay in the clinic and the city is as comfortable as possible.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "To simplify your search for accommodation during your stay in Kyiv and treatment at the 'British Ophthalmologic Center', we offer several hotel options located near our clinic. You can book a room in advance to avoid any worries on the day of your arrival.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "List of hotels located near the 'British Ophthalmologic Center':",
                        },
                        {
                            type: "list",
                            list: [
                                "Hotel 'Dnipro': 1/2 Khreshchatyk St. – (044)254-67-77 http://www.dniprohotel.ua/",
                                "Hotel 'Lybid': 1 Halytska Sq. – (044)239-76-00 http://hotellybid.com.ua/",
                                "Hotel 'Ukraina': 4 Alley of the Heroes of the Heavenly Hundred – +380 44 590 44 00 http://www.ukraine-hotel.kiev.ua/en",
                                "Hotel 'Rus': 4 Hospitalna St. – +38 (044) 256 40 20 – http://www.hotelrus.kiev.ua/",
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Информация для иногородних пациентов",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Лечение в клинике «Британский офтальмологический центр» проводится в режиме «одного дня». Применение новейших технологий глазной микрохирургии в клинике «Британский офтальмологический центр» обеспечивает более быстрое восстановление зрения, сокращает сроки лечения, избавляет от необходимости пребывания в стационаре и позволяет пациенту вернуться домой уже через 1–2 часа после операции.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Вам потребуется пребывание в Киеве:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "для проведения лазерной коррекции зрения – 1 день, второй день — контрольный осмотр по желанию пациента;",
                                "для удаления катаракты или хирургического лечения глаукомы – не менее 1–2 дней;",
                                "для проведения витреоретинальных операций – около 2 дней;",
                                "для лазерного лечения глаукомы – около 2 дней;",
                                "для лазерных процедур на сетчатке – 1 день;",
                                "для микрохирургических операций (косоглазие, введение Луцентиса и др.) — около 2 дней;",
                                "для прохождения курса консервативного или аппаратного лечения – в зависимости от назначения врача.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В течение указанных сроков вам будет проведена комплексная диагностика зрения, подготовка к операции, расчет программы коррекции или искусственного хрусталика, предоперационное обследование (если требуются лабораторные анализы, пациент проходит их по месту жительства), непосредственно сама процедура или операция, а также обязательные контрольные осмотры. Дальнейший график осмотров врач определяет индивидуально, исходя из состояния пациента.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Для иногородних пациентов сотрудники Центра медицинской информации и регистрации помогут забронировать отель, решить вопросы проживания, чтобы ваше пребывание в клинике и городе было максимально комфортным.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Чтобы упростить поиск жилья на период пребывания в Киеве и лечения в клинике «Британский офтальмологический центр», мы предлагаем несколько вариантов отелей, расположенных недалеко от нашей клиники. Вы можете самостоятельно забронировать номер заранее, чтобы не беспокоиться об этом в день приезда.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Список отелей, расположенных недалеко от клиники «Британский офтальмологический центр»:",
                        },
                        {
                            type: "list",
                            list: [
                                "Отель «Днепр»: ул. Крещатик, 1/2 – (044)254-67-77 http://www.dniprohotel.ua/",
                                "Отель «Лыбидь»: Галицкая пл., 1 – (044)239–76–00 http://hotellybid.com.ua/",
                                "Отель «Украина»: Аллея Героев Небесной Сотни, 4 – +380 44 590 44 00 http://www.ukraine-hotel.kiev.ua/ru",
                                "Отель «Русь»: ул. Госпитальная, 4 – +38 (044) 256 40 20 – http://www.hotelrus.kiev.ua/",
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k =>
                k.key ===
                "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam"
        )!,
        uk: {
            title: "Інформація для пацієнтів перед мікрохірургічним втручанням",
            content: [],
        },
        en: {
            title: "Information for patients prior to microsurgery",
            content: [],
        },
        ru: {
            title: "Информация для пациентов перед микрохирургическим вмешательством",
            content: [],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "preparation-for-surgery-for-strabismus"
        )!,
        uk: {
            title: "Підготовка до операціїї з приводу косоокості",
            content: [],
        },
        en: { title: "Preparing for strabismus surgery", content: [] },
        ru: {
            title: "Подготовка к операции по поводу косоглазия",
            content: [],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k =>
                k.key ===
                "reminder-before-a-comprehensive-pediatric-examination"
        )!,
        uk: {
            title: "Памʼятка перед дитячим комплексним оглядом",
            content: [],
        },
        en: {
            title: "Reminder before a comprehensive pediatric examination",
            content: [],
        },
        ru: {
            title: "Памятка перед детским комплексным осмотром",
            content: [],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "patient-information-before-IPL-therapy"
        )!,
        uk: { title: "Памʼятка пацієнта перед IPL-терапією", content: [] },
        en: { title: "Patient information before IPL therapy", content: [] },
        ru: { title: "Памятка пациента перед IPL-терапией", content: [] },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru"
        )!,
        uk: { title: "Інструкції після лазерної корекції зору", content: [] },
        en: {
            title: "Instructions after laser vision correction",
            content: [],
        },
        ru: {
            title: "Инструкции после лазерной коррекции зрения",
            content: [],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k =>
                k.key ===
                "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu"
        )!,
        uk: {
            title: "Пам’ятка пацієнта перед вітреоретинальною хірургією",
            content: [],
        },
        en: {
            title: "Patient reminder before vitreoretinal surgery",
            content: [],
        },
        ru: {
            title: "Памятки пациенту перед витреоретинальной хирургией",
            content: [],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty"
        )!,
        uk: {
            title: "Пам’ятка пацієнта після хірургії катаракти",
            content: [],
        },
        en: { title: "Patient note after cataract surgery", content: [] },
        ru: { title: "Памятки пациента после хирургии катаракты", content: [] },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "reminders-and-instructions-for-patients"
        )!,
        uk: {
            title: "Пам’ятки та інструкції для пацієнтів",
            content: [],
        },
        en: { title: "Reminders and instructions for patients", content: [] },
        ru: { title: "Памятки и инструкции для пациентов", content: [] },
    },
];

export const eyeDiseaseData: EyeDiseaseType[] = [
    {
        name: keyEyeDisease.find(d => d.key === "glaukoma")!,
        uk: {
            title: "Глаукома",
            content: [
                {
                    title: "Що таке глаукома?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Глаукома — це загальна назва для групи захворювань, що призводять до пошкодження зорового нерва і втрати зору. Глаукома в цілому є відстроченою формою втрати зору і при ранньому виявленні може бути вилікувана. На жаль, близько 10% людей, які отримують правильне лікування, тим не менше все ж втрачають зір. Глаукома часто не має очевидних ознак або симптомів до початку втрати зору. Кращим способом захисту є регулярна перевірка зору разом зі спеціальною перевіркою на глаукому.",
                        },
                    ],
                },
                {
                    title: "Причини глаукоми",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "У більшості випадків пошкодження зорового нерва при глаукомі викликається підвищеним внутрішньоочним тиском, при якому зростає тиск рідини всередині ока, внаслідок чого здавлюється і пошкоджується зоровий нерв. Внутрішньоочний тиск підвищується, коли рідини, які виробляються в оці, втрачають здатність покидати око своїм звичайним шляхом, відомим як відкритий кут між райдужною оболонкою і рогівкою. Вони акумулюються в оці, що призводить до підвищення тиску. Однак у випадку глаукоми з нормальним тиском причина пошкодження зорового нерва не завжди ясна.",
                        },
                    ],
                },
                {
                    title: "Фактори ризику глаукоми",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Глаукома є другою за поширеністю причиною сліпоти в світі. Так як ознаки і симптоми глаукоми часто незначні, її називають «тихим злодієм зору». Усім рекомендується регулярно проходити перевірки на глаукому в складі комплексної перевірки зору, особливо при наявності одного або декількох факторів ризику глаукоми.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Фактори ризику глаукоми різняться в залежності від виду глаукоми.",
                        },
                    ],
                },
                {
                    title: "Первинна відкритокутова глаукома",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Первинна відкритокутова глаукома, при якій відкритий кут з часом закупорюється, — це найбільш поширена форма глаукоми. Фактори ризику глаукоми включають:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Вік. У осіб старше 60 років глаукома зустрічається в шість разів частіше.",
                                "Сімейна історія. Якщо глаукома спостерігається в інших членів Вашої родини, Ваш ризик зростає в 4-9 разів.",
                                "Медикаменти. Стероїди можуть підвищити ризик відкритокутової глаукоми на 40%.",
                                "Стан здоров’я. Високий кров’яний тиск може підвищити ризик глаукоми.",
                            ],
                        },
                    ],
                },
                {
                    title: "Закритокутова глаукома",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Закритокутова глаукома, також відома як гострокутна глаукома, виникає, коли райдужна оболонка виступає над кутом, блокуючи дренажні канали. Це призводить до швидкого і небезпечного зростання внутрішньоочного тиску. Фактори ризику глаукоми включають:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Зір. Якщо у Вас далекозорість, то Ваш ризик підвищений.",
                                "Вік. Ризик виникнення глаукоми підвищується з віком.",
                                "Стать. Підвищеному ризику схильні жінки.",
                            ],
                        },
                    ],
                },
                {
                    title: "Вторинна глаукома",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Вторинна глаукома, при якій відкритий кут закупорюється через пошкодження ока, запалення, злоякісної пухлини, катаракти або діабету, може виникнути з наступних причин:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Пошкодження ока. Як тупа, так і проникаюча травма ока можуть призвести до вторинної глаукоми.",
                                "Стан здоров’я. Діабет і катаракта можуть підвищити ризик вторинної глаукоми.",
                                "Стать і колір шкіри. Світлошкірі жінки схильні до ризику вторинної глаукоми певного типу.",
                                "Медикаменти. Деякі медикаменти можуть підвищити ризик виникнення відкритокутової або глаукоми вторинного типу.",
                            ],
                        },
                    ],
                },
                {
                    title: "Захист зору",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Навіть якщо Ви не схильн до жодного з чинників ризику, у Вас все одно може розвинутися глаукома. Рекомендується проходити перевірки на глаукому.",
                        },
                    ],
                },
                {
                    title: "Лікування глаукоми",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Лікування глаукоми може запобігти сильну втрату зору, якщо хвороба діагностована досить рано. Варіанти лікування включають:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Очні каплі.",
                                "Хірургічне втручання.",
                                "Селективну лазерну трабекулопластику (SLT).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "При виникненні глаукоми потрібно довічне лікування та спостереження. Якщо Вам призначили ліки від глаукоми, Вам необхідно приймати їх у відповідності з інструкціями лікаря. У глаукоми існують ознаки — її можна діагностувати до того, як Ви відчуєте які-небудь симптоми. Симптоми суб’єктивні і можуть бути чи не бути зрозумілі лікарю. Ознаки об’єктивні і зрозумілі лікарю, але можуть бути чи не бути помічені пацієнтом.",
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Glaucoma",
            content: [
                {
                    title: "What is glaucoma?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaucoma is the common name for a group of diseases that lead to optic nerve damage and vision loss. Glaucoma is generally a preventable form of vision loss and can be cured if detected early. Unfortunately, about 10% of people who receive proper treatment nevertheless still lose their vision. Glaucoma often has no obvious signs or symptoms before vision loss begins. The best way to protect yourself is to have regular eye exams along with a special glaucoma screening.",
                        },
                    ],
                },
                {
                    title: "Causes of glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "In most cases, optic nerve damage in glaucoma is caused by increased intraocular pressure, in which fluid pressure inside the eye increases, causing compression and damage to the optic nerve. Intraocular pressure increases when the fluids produced in the eye lose their ability to leave the eye through their normal pathway, known as the open angle between the iris and cornea. They accumulate in the eye, resulting in an increase in pressure. However, in the case of glaucoma with normal pressure, the cause of optic nerve damage is not always clear.",
                        },
                    ],
                },
                {
                    title: "Risk factors for glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Glaucoma is the second most common cause of blindness in the world. Because the signs and symptoms of glaucoma are often subtle, it is called the “silent thief of sight.” Everyone is advised to get regular glaucoma screenings as part of a comprehensive eye exam, especially if one or more glaucoma risk factors are present.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Risk factors for glaucoma vary depending on the type of glaucoma.",
                        },
                    ],
                },
                {
                    title: "Primary open angle glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Primary open angle glaucoma, in which the open angle eventually clogs up, is the most common form of glaucoma. Risk factors for open-angle glaucoma include:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Age. Individuals over age 60 are six times more likely to have glaucoma.",
                                "Family history. If other members of your family have glaucoma, your risk increases four to nine times.",
                                "Medications. Steroids can increase your risk of open-angle glaucoma by 40 percent.",
                                "Health condition. High blood pressure can increase your risk of open-angle glaucoma.",
                            ],
                        },
                        {
                            type: "text",
                            text: "Risk factors for glaucoma vary depending on the type of glaucoma.",
                        },
                    ],
                },
                {
                    title: "Closed-angle glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Closed angle glaucoma, also known as acute angle glaucoma, occurs when the iris protrudes over the angle, blocking the drainage channels. This leads to a rapid and dangerous increase in intraocular pressure. Risk factors for closed-angle glaucoma include:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Vision. If you have farsightedness, your risk is increased.",
                                "Age. Your risk for closed-angle glaucoma increases with age.",
                                "Gender. Women are at increased risk.",
                            ],
                        },
                    ],
                },
                {
                    title: "Secondary glaucoma",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Secondary glaucoma, in which the open angle is occluded because of damage to the eye, inflammation, malignancy, cataracts, or diabetes, can occur for one of the following reasons:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Damage to the eye. Both blunt and penetrating trauma to the eye can lead to secondary glaucoma.",
                                "Health condition. Diabetes and cataracts can increase the risk of secondary glaucoma.",
                                "Gender and skin color. Light-skinned women are at risk for certain types of secondary glaucoma.",
                                "Medications. Certain medications may increase the risk of open-angle or closed-angle glaucoma of a secondary type.",
                            ],
                        },
                    ],
                },
                {
                    title: "Eye protection",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Even if you are not exposed to any of the risk factors, you may still develop glaucoma. It is recommended that you get checked for glaucoma.",
                        },
                    ],
                },
                {
                    title: "Glaucoma treatment",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Treating glaucoma can prevent severe vision loss if the disease is diagnosed early enough. Treatment options include:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Eye drops;",
                                "Surgery;",
                                "Selective laser trabeculoplasty (SLT).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "When glaucoma occurs, lifelong treatment and monitoring is required. If you are prescribed glaucoma medication, you need to take it according to your doctor’s instructions. Glaucoma HAS signs – it can be diagnosed before you feel any symptoms. Symptoms are subjective and may or may not be understood by the doctor. Signs are objective and understood by the doctor, but may or may not be seen by the patient.",
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Глаукома",
            content: [
                {
                    title: "Что такое глаукома?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Глаукома – это общее название для группы заболеваний, приводящих к повреждению зрительного нерва и потере зрения. Глаукома в целом является предотвращаемой формой потери зрения и при раннем обнаружении может быть излечена. К сожалению, около 10% людей, получающих правильное лечение, тем не менее все же теряют зрение. Глаукома часто не имеет очевидных признаков или симптомов до начала потери зрения. Лучшим способом защиты является регулярная проверка зрения вместе со специальной проверкой на глаукому.",
                        },
                    ],
                },
                {
                    title: "Причины глаукомы",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "В большинстве случаев повреждение зрительного нерва при глаукоме вызывается повышенным внутриглазным давлением, при котором растет давление жидкости внутри глаза, в результате чего сдавливается и повреждается зрительный нерв. Внутриглазное давление повышается, когда жидкости, производимые в глазу, теряют способность покидать глаз по своему обычному пути, известному как открытый угол между радужной оболочкой и роговицей. Они аккумулируются в глазу, что приводит к повышению давления. Однако в случае глаукомы с нормальным давлением причина повреждения зрительного нерва не всегда ясна.",
                        },
                    ],
                },
                {
                    title: "Факторы риска глаукомы",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Глаукома является второй по распространенности причиной слепоты в мире. Так как признаки и симптомы глаукомы часто незначительны, ее называют «тихим вором зрения». Всем рекомендуется регулярно проходить проверки на глаукому в составе комплексной проверки зрения, в особенности при наличии одного или нескольких факторов риска глаукомы.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Факторы риска глаукомы различаются в зависимости от вида глаукомы.",
                        },
                    ],
                },
                {
                    title: "Первичная открытоугольная глаукома",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Первичная открытоугольная глаукома, при которой открытый угол со временем закупоривается, — это наиболее распространенная форма глаукомы. Факторы риска открытоугольной глаукомы включают:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Возраст. У лиц старше 60 лет глаукома встречается в шесть раз чаще.",
                                "Семейная история. Если глаукома наблюдается у других членов вашей семьи, ваш риск возрастает в 4-9 раз.",
                                "Медикаменты. Стероиды могут повысить риск открытоугольной глаукомы на 40%.",
                                "Состояние здоровья. Высокое кровяное давления может повысить риск открытоугольной глаукомы.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Факторы риска глаукомы различаются в зависимости от вида глаукомы.",
                        },
                    ],
                },
                {
                    title: "Закрытоугольная глаукома",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Закрытоугольная глаукома, также известная как остроугольная глаукома, возникает, когда радужная оболочка выступает над углом, блокируя дренажные каналы. Это приводит к быстрому и опасному росту внутриглазного давления. Факторы риска закрытоугольной глаукомы включают:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Зрение. Если у вас дальнозоркость, то ваш риск повышен.",
                                "Возраст. Риск возникновения закрытоугольной глаукомы повышается с возрастом.",
                                "Пол. Повышенному риску подвержены женщины.",
                            ],
                        },
                    ],
                },
                {
                    title: "Вторичная глаукома",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Вторичная глаукома, при которой открытый угол закупоривается из-за повреждения глаза, воспаления, злокачественной опухоли, катаракты или диабета, может возникнуть по одной из следующих причин:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Повреждение глаза. Как тупая, так и проникающая травма глаза могут привести к вторичной глаукоме.",
                                "Состояние здоровья. Диабет и катаракта могут повысить риск вторичной глаукомы.",
                                "Пол и цвет кожи. Светлокожие женщины подвержены риску вторичной глаукомы определенного типа.",
                                "Медикаменты. Некоторые медикаменты могут повысить риск возникновения открытоугольной или закрытоугольной глаукомы вторичного типа.",
                            ],
                        },
                    ],
                },
                {
                    title: "Защита зрения",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Даже если вы не подвержены ни одному из факторов риска, у вас все равно может развиться глаукома. Рекомендуется проходить проверки на глаукому.",
                        },
                    ],
                },
                {
                    title: "Лечение глаукомы",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Лечение глаукомы может предотвратить сильную потерю зрения, если болезнь диагностирована достаточно рано. Варианты лечения включают:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Глазные капли.",
                                "Хирургическое вмешательство.",
                                "Селективную лазерную трабекулопластику (SLT).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "При возникновении глаукомы требуется пожизненное лечение и наблюдение. Если вам назначили лекарство от глаукомы, вам необходимо принимать его в соответствии с инструкциями врача. У глаукомы ЕСТЬ признаки – ее можно диагностировать до того, как вы почувствуете какие-либо симптомы. Симптомы субъективны и могут быть или не быть понятны врачу. Признаки объективны и понятны врачу, но могут быть или не быть замечены пациентом.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "astigmatizm")!,
        uk: {
            title: "Астигматизм",
            content: [
                {
                    title: "Що таке?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Астигматизм є причиною розпливчастого зору незалежно від відстані. Очі не ідеально круглої форми, вони більше схожі на м’яч для регбі, і їх поверхня не симетрична. Вона фокусує світло в одній площині краще, ніж в іншїй. В результаті зір стає розпливчастим, з’являється двоїння.",
                        },
                    ],
                },
                {
                    title: "Лікування астигматизма",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Погляньте на таблицю нижче, щоб зрозуміти, який тип операції може підійти особисто Вам.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <AstigmatismTable />,
                        },
                    ],
                },
                {
                    title: "Лазерна корекція зору",
                    text: [
                        {
                            type: "text",
                            text: "Хоча окуляри й контактні лінзи допомагають впоратися з астигматизмом, їх можна порівняти з гіпсом і милицями, тобто це тимчасове рішення, яке дозволяє вийти з положення, але фактично не усуває причину проблеми так, як цього можна досягнути за допомогою хірургічного втручання.",
                        },
                    ],
                    btn: {
                        name: "детальніше",
                        link: "/poslugy/lazerna-korekcziya-zoru",
                    },
                },
                {
                    title: "Інтраокулярна корекція",
                    text: [
                        {
                            type: "text",
                            text: "Інтраокулярні лінзи призначені для корекції високого ступеня астигматизму. У тому випадку, якщо лазерна корекція Вам не підходить, не впадайте у відчай, тому що є й інші можливості досягнення бажаного. «Британський офтальмологічний центр» пропонує ряд операцій, які можуть Вам допомогти. Під час консультації, ми зможемо з’ясувати, чи не протипоказана Вам операція, і визначити найкращий варіант операції для Вас.",
                        },
                    ],
                    btn: {
                        name: "детальніше",
                        link: "posluhy/refrakczijna-lensektomiya/",
                    },
                },
            ],
        },
        en: {
            title: "Astigmatism",
            content: [
                {
                    title: "What is it?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Astigmatism causes blurred vision regardless of distance. The eyes are not perfectly round — they are more like a rugby ball, and their surface is not symmetrical. It focuses light better in one plane than in another, resulting in blurred or double vision.",
                        },
                    ],
                },
                {
                    title: "Astigmatism treatment",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Take a look at the table below to understand which type of surgery may be right for you.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <AstigmatismTable />,
                        },
                    ],
                },
                {
                    title: "Laser vision correction",
                    text: [
                        {
                            type: "text",
                            text: "Although glasses and contact lenses help to manage astigmatism, they can be compared to a cast and crutches — a temporary solution that helps you get by but doesn’t address the root cause of the problem as surgery can.",
                        },
                    ],
                    btn: {
                        name: "read more",
                        link: "/services/laser-vision-correction",
                    },
                },
                {
                    title: "Intraocular correction",
                    text: [
                        {
                            type: "text",
                            text: "Intraocular lenses are designed to correct a high degree of astigmatism. If laser correction is not suitable for you, don’t despair — there are other options available to achieve the desired result. The British Ophthalmology Center offers a number of surgical procedures that can help. During a consultation, we will determine whether surgery is contraindicated for you and identify the best surgical option for your needs.",
                        },
                    ],
                    btn: {
                        name: "read more",
                        link: "/services/refractive-lensectomy",
                    },
                },
            ],
        },
        ru: {
            title: "Астигматизм",
            content: [
                {
                    title: "Что это такое?",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Астигматизм вызывает размытое зрение независимо от расстояния. Глаза имеют не идеально круглую форму — они больше похожи на мяч для регби, и их поверхность несимметрична. Она лучше фокусирует свет в одной плоскости, чем в другой, в результате чего зрение становится размытым и появляется двоение.",
                        },
                    ],
                },
                {
                    title: "Лечение астигматизма",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Посмотрите таблицу ниже, чтобы понять, какой тип операции может подойти именно вам.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <AstigmatismTable />,
                        },
                    ],
                },
                {
                    title: "Лазерная коррекция зрения",
                    text: [
                        {
                            type: "text",
                            text: "Хотя очки и контактные линзы помогают справиться с астигматизмом, их можно сравнить с гипсом и костылями — это временное решение, которое помогает выйти из положения, но не устраняет причину проблемы так, как это возможно с помощью хирургического вмешательства.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/uslugi/lazernaya-korrektsiya-zreniya",
                    },
                },
                {
                    title: "Интраокулярная коррекция",
                    text: [
                        {
                            type: "text",
                            text: "Интраокулярные линзы предназначены для коррекции высокой степени астигматизма. Если лазерная коррекция вам не подходит, не отчаивайтесь — существуют и другие способы достичь желаемого результата. «Британский офтальмологический центр» предлагает ряд операций, которые могут вам помочь. Во время консультации мы определим, нет ли противопоказаний, и подберем оптимальный вариант операции для вас.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/uslugi/refraktsionnaya-lensektomiya",
                    },
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "dalekozorist")!,
        uk: {
            title: "Далекозорість",
            content: [
                {
                    title: "Симптоми та причини",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Далекозорість, яка інакше називається гіперметропія, виникає при уплощенні рогівки або при занадто короткому очному яблуці. Ці стани не дозволяють променям світла, що потрапляє в око, переломлюватися в ступені, достатньому для їх фокусування на сітківці. Замість цього зображення, які ви бачите, фокусуються за сітківкою. Для далекозорих людей ближні об’єкти виглядають більш розмитими, ніж об’єкти на відстані. Наприклад, якби ви сиділи на літньому майданчику ресторану, меню здавалося б розмитим, а навколишній пейзаж — у фокусі. Однак думка, що далекозорі завжди добре бачать вдалину, помилкова. Часто далекозорі бачать погано і зблизька, і вдалину. Однак люди, які страждають лише вікової далекозорістю (пресбіопією), добре бачать вдалину, тому що у них немає аномалій рефракцій і кришталик завжди знаходиться в розслабленому стані. Далекозорі люди часто відчувають головний біль при виконанні роботи поблизу.",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Далекозорість розвивається набагато рідше, ніж короткозорість, і її поширення збільшується з віком пацієнтів. При далекозорості у висновку зазвичай стоїть цифра зі знаком плюс перед нею.",
                        },
                    ],
                },
                {
                    title: "Варіанти лікування далекозорості",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Далекозорість може бути виправлена за допомогою як окулярів, так і контактних лінз, щоб змінити напрям променів світла в оці. Хворі часто змушені носити окуляри або контактні лінзи або весь час, або тільки для читання, роботи на комп’ютері та іншої роботи поблизу. Незайвим буде додержуватися порад щодо зміцнення зору. Якщо ви бажаєте раз і назавжди позбутися від окулярів і контактних лінз, можна звернутися до хірургічних методів лікування.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <FarsightednessTable />,
                        },
                    ],
                },
                {
                    title: "Лазерна корекція зору",
                    text: [
                        {
                            type: "text",
                            text: "Хоча окуляри й контактні лінзи допомагають впоратися з далекозорістю, їх можна порівняти з гіпсом і милицями, тобто це тимчасове рішення, яке дозволяє вийти з положення, але фактично не усуває причину проблеми так, як цього можна досягнути за допомогою хірургічного втручання.",
                        },
                    ],
                    btn: {
                        name: "детальніше",
                        link: "/poslugy/lazerna-korekcziya-zoru",
                    },
                },
                {
                    title: "Інтраокулярна корекція",
                    text: [
                        {
                            type: "text",
                            text: "Інтраокулярні лінзи призначені для корекції високого ступеня астигматизму. У тому випадку, якщо лазерна корекція Вам не підходить, не впадайте у відчай, тому що є й інші можливості досягнення бажаного. «Британський офтальмологічний центр» пропонує ряд операцій, які можуть Вам допомогти. Під час консультації, ми зможемо з’ясувати, чи не протипоказана Вам операція, і визначити найкращий варіант операції для Вас.",
                        },
                    ],
                    btn: {
                        name: "детальніше",
                        link: "posluhy/refrakczijna-lensektomiya/",
                    },
                },
            ],
        },
        en: {
            title: "Farsightedness",
            content: [
                {
                    title: "Symptoms and causes",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Farsightedness, also known as hypermetropia, occurs when the cornea is too flat or the eyeball is too short. These conditions prevent light entering the eye from being refracted enough to focus directly on the retina. Instead, the image you see is focused behind the retina. For farsighted people, nearby objects appear blurrier than those at a distance. For example, if you were sitting on a restaurant terrace, the menu would appear blurry while the surrounding landscape would be in focus. However, the belief that farsighted people always see well at a distance is incorrect. Often, farsighted individuals see poorly both near and far. People who suffer only from age-related farsightedness (presbyopia) can see well at a distance because they have no refractive anomalies and their lens remains in a relaxed state. Farsighted people often experience headaches when doing close-up work.",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Farsightedness develops much less frequently than myopia, and its prevalence increases with age. In a medical report, farsightedness is usually indicated by a number preceded by a plus sign.",
                        },
                    ],
                },
                {
                    title: "Treatment options for farsightedness",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Farsightedness can be corrected with glasses or contact lenses to change the direction of light rays in the eye. Patients often need to wear glasses or lenses either all the time or only for reading, computer work, or other close-up tasks. It is also beneficial to follow recommendations for strengthening eyesight. If you wish to get rid of glasses and contact lenses once and for all, surgical treatment options are available.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <FarsightednessTable />,
                        },
                    ],
                },
                {
                    title: "Laser vision correction",
                    text: [
                        {
                            type: "text",
                            text: "Although glasses and contact lenses help to manage farsightedness, they can be compared to a cast and crutches — a temporary solution that allows you to function but does not eliminate the root cause of the problem as surgical intervention can.",
                        },
                    ],
                    btn: {
                        name: "read more",
                        link: "/services/laser-vision-correction",
                    },
                },
                {
                    title: "Intraocular correction",
                    text: [
                        {
                            type: "text",
                            text: "Intraocular lenses are designed to correct a high degree of astigmatism. If laser correction is not suitable for you, don’t despair — there are other ways to achieve the desired result. The British Ophthalmology Center offers several types of surgeries that can help. During your consultation, we will determine whether surgery is contraindicated for you and choose the best surgical option for your case.",
                        },
                    ],
                    btn: {
                        name: "read more",
                        link: "/services/refractive-lensectomy",
                    },
                },
            ],
        },
        ru: {
            title: "Дальнозоркость",
            content: [
                {
                    title: "Симптомы и причины",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Дальнозоркость, иначе называемая гиперметропией, возникает при уплощении роговицы или слишком коротком глазном яблоке. Эти состояния не позволяют световым лучам, попадающим в глаз, преломляться в достаточной степени, чтобы сфокусироваться на сетчатке. Вместо этого изображение фокусируется за сетчаткой. У дальнозорких людей близкие предметы выглядят более размытыми, чем дальние. Например, если вы сидите на летней террасе ресторана, меню будет казаться размытым, а окружающий пейзаж — в фокусе. Однако мнение, что дальнозоркие всегда хорошо видят вдаль, ошибочно. Часто дальнозоркие плохо видят и вблизи, и вдаль. Люди, страдающие только возрастной дальнозоркостью (пресбиопией), хорошо видят вдаль, так как у них нет аномалий рефракции и хрусталик находится в расслабленном состоянии. Дальнозоркие часто испытывают головные боли при работе на близком расстоянии.",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Дальнозоркость развивается гораздо реже, чем близорукость, и её распространённость увеличивается с возрастом. В заключении врача дальнозоркость обычно указывается цифрой со знаком плюс перед ней.",
                        },
                    ],
                },
                {
                    title: "Варианты лечения дальнозоркости",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Дальнозоркость может быть скорректирована с помощью очков или контактных линз, чтобы изменить направление световых лучей в глазу. Пациентам часто приходится носить очки или линзы постоянно или только для чтения, работы за компьютером и других занятий вблизи. Также полезно следовать рекомендациям по укреплению зрения. Если вы хотите навсегда избавиться от очков и контактных линз, можно рассмотреть хирургические методы лечения.",
                        },
                        {
                            type: "component",
                            gap: true,
                            component: <FarsightednessTable />,
                        },
                    ],
                },
                {
                    title: "Лазерная коррекция зрения",
                    text: [
                        {
                            type: "text",
                            text: "Хотя очки и контактные линзы помогают справиться с дальнозоркостью, их можно сравнить с гипсом и костылями — это временное решение, которое позволяет справляться с проблемой, но не устраняет её причину так, как это делает хирургическое вмешательство.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/uslugi/lazernaya-korrektsiya-zreniya",
                    },
                },
                {
                    title: "Интраокулярная коррекция",
                    text: [
                        {
                            type: "text",
                            text: "Интраокулярные линзы предназначены для коррекции высокой степени астигматизма. Если лазерная коррекция вам не подходит, не отчаивайтесь — существуют и другие способы достичь желаемого результата. «Британский офтальмологический центр» предлагает ряд операций, которые могут вам помочь. Во время консультации мы определим, нет ли противопоказаний, и подберём лучший вариант операции для вас.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/uslugi/refraktsionnaya-lensektomiya",
                    },
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "katarakta")!,
        uk: {
            title: "Катаракта",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Катаракта – це захворювання, при якому порушується прозорість кришталика, що призводить до зниження гостроти зору. Назва цього захворювання походить від грецького слова katarrháktes, що означає «водоспад». Це з уявленнями древніх лікарів у тому, що захворювання розвивається внаслідок стікання каламутної рідини між райдужкою і кришталиком.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Виявити катаракту на стадії неможливо без офтальмологічного огляду. Видимих симптомів на ранній стадії взагалі немає. З розвитком захворювання погіршується зір: пацієнт починає бачити предмети нечітко, немов вони перебувають у тумані, підвищується чутливість при погляді яскраве світло, погіршується нічний зір, послаблюється колірне сприйняття.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Незважаючи на те, що катаракта найчастіше розвивається внаслідок вікових змін очей, захворювання все частіше виявляється у віці 40-50 років або навіть молодше. У пацієнтів віком понад 80 років частота виявлення катаракти становить майже 100%.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "У більшості людей зі старечою (віковою) катарактою захворювання розвивається дуже повільно та безболісно протягом багатьох років, і часто початковий діагноз ставиться при звичайному обстеженні у офтальмолога.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "Однак, хороша новина полягає в тому, що катаракту можна успішно вилікувати. У нашій клініці застосовується революційний метод водний потік iQ-5 minutes – видалення катаракти “водою”.",
                                },
                            ],
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "У ході операції уражений катарактою кришталик видаляють, але в його місце встановлюється штучна інтраокулярна лінза (ИОЛ). Анестезія проводиться шляхом закопування сучасних знеболювальних крапель. Після операції зір одразу відновлюється.",
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Cataract",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Cataract is a disease in which the transparency of the crystalline lens is affected, resulting in decreased visual acuity. The name of the disease comes from the Greek word katarrháktes, which means “waterfall. This is due to the belief of ancient healers that the disease develops due to the flow of turbid fluid between the iris and the lens.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "It is impossible to detect cataract in its initial stages without an ophthalmic examination. At the early stage, there are no visible symptoms at all. As the disease develops, vision gets worse: Patient’s vision gets blurred, as if in a fog, sensitivity to bright light increases, night vision worsens, color perception weakens.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "In spite of the fact that cataract most often develops as a result of age-related changes in the eye, the disease is more often detected at the age of 40-50 or even younger. In patients over the age of 80, the detection rate of cataracts is virtually 100%.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Most people with senile (age-related) cataracts develop the disease very slowly and painlessly over many years, and often the initial diagnosis is made during a routine examination by an ophthalmologist.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "However, the good news is that cataract can be successfully treated. Our clinic is using a revolutionary “iQ-5 water flow” method of cataract extraction.",
                                },
                            ],
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "The affected cataract is removed during the surgery, and an artificial intraocular lens (IOL) is implanted in its place. Anaesthesia is achieved through the use of modern anaesthetic drops. After the surgery, vision is restored immediately.",
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Катаракта",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Катаракта — это заболевание, при котором нарушается прозрачность хрусталика, что приводит к снижению остроты зрения. Название этого заболевания произошло от греческого слова katarrháktes, что означает «водопад». Это связано с представлениями древних врачевателей о том, что заболевание развивается вследствие стекания мутной жидкости между радужкой и хрусталиком.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Обнаружить катаракту на начальной стадии невозможно без офтальмологического осмотра. Видимых симптомов на ранней стадии вообще нет. С развитием заболевания ухудшается зрение: пациент начинает видеть предметы нечетко, словно они находятся в тумане, повышается чувствительность при взгляде на яркий свет, ухудшается ночное зрение, ослабляется цветовое восприятие.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Несмотря на то, что катаракта чаще всего развивается в результате возрастных изменений глаз, заболевание все чаще выявляется в возрасте 40-50 лет или даже младше. У пациентов старше 80 лет частота выявления катаракты составляет практически 100%.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "У большинства людей со старческой (возрастной) катарактой заболевание развивается очень медленно и безболезненно на протяжении многих лет, и часто первоначальный диагноз ставится при обычном обследовании у офтальмолога.",
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "Однако, хорошая новость заключается в том, что катаракту можно успешно вылечить. В нашей клинике применяется революционный метод «водный поток iQ-5 minutes» – удаление катаракты “водой”. ",
                                },
                            ],
                        },
                    ],
                },
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "В ходе операции пораженный катарактой хрусталик удаляют, а на его место устанавливается искусственная интраокулярная линза (ИОЛ). Анестезия проводится путем закапывания современных обезболивающих капель. После операции зрение сразу восстанавливается.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "korotkozorist-miopiya")!,
        uk: {
            title: "Короткозорість, міопія",
            content: [
                {
                    title: "Симптоми та причини",
                    text: [
                        {
                            type: "image",
                            image: "/images/myopia800.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Якщо у Вас короткозорість, зображення об’єктів на відстані здаються розмитими. Ви можете виявити, що зображення стають чіткішими, якщо прищулитися. Наприклад, короткозорі студенти могли б легко читати книги і бачити сидячих поруч сусідів, але викладачі і, що більш важливо, слова на дошці здавалися б розмитими. Короткозорість, інакше міопія, виникає, коли промені світла, що потрапляють в око, заломлюються занадто сильно і сходяться в точці, не досягаючи сітківки. При короткозорості очне яблуко може бути довше норми або рогівка може бути занадто зігнутою. В результаті зображення, які Ви бачите, не фокусуються на сітківці належним чином.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Зазвичай короткозорість розвивається в дитинстві й вперше виявляється, коли батьки помічають, що дитина відчуває труднощі з читанням написів на дошці в школі. Короткозорість продовжує посилюватися протягом усього підліткового віку і до часу дорослішання стабілізується. Деякі фахівці вважають, що короткозорість передається нам у спадок. Вона може супроводжуватися або не супроводжуватися астигматизмом. У типовому висновку при короткозорості пишуть знак мінус перед першою цифрою.",
                        },
                    ],
                },
                {
                    title: "Варіанти лікування короткозорості:",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Лікування короткозорості залежить від декількох факторів, таких як вік, ступінь фізичної активності, рід занять. Лікування може полягати в призначенні контактних лінз або окулярів. Лікар також дасть поради щодо зміцнення зору. Якщо Ви бажаєте раз і назавжди позбутися від окулярів і контактних лінз, можна звернутися до хірургічних методів лікування.",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                    ],
                },
                {
                    title: "Лазерна корекція зору",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Хоча окуляри й контактні лінзи допомагають впоратися з короткозорістю, їх можна порівняти з гіпсом і милицями, тобто це тимчасове рішення, яке дозволяє вийти з положення, але фактично не усуває причину проблеми так, як цього можна досягнути за допомогою хірургічного втручання.",
                        },
                    ],
                    btn: {
                        name: "детальніше",
                        link: "/poslugy/lazerna-korekcziya-zoru",
                    },
                },
                {
                    title: "Інтраокулярна корекція",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Інтраокулярні лінзи призначені для корекції високого ступеня астигматизму. У тому випадку, якщо лазерна корекція Вам не підходить, не впадайте у відчай, тому що є й інші можливості досягнення бажаного. «Британський офтальмологічний центр» пропонує ряд операцій, які можуть Вам допомогти. Під час консультації, ми зможемо з’ясувати, чи не протипоказана Вам операція, і визначити найкращий варіант операції для Вас.",
                        },
                    ],
                    btn: {
                        name: "детальніше",
                        link: "posluhy/refrakczijna-lensektomiya/",
                    },
                },
            ],
        },
        en: {
            title: "Nearsightedness, myopia",
            content: [
                {
                    title: "Symptoms and Causes",

                    text: [
                        {
                            type: "image",
                            image: "/images/myopia800.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you have myopia, distant objects appear blurry. You may find that squinting makes the image clearer. For example, nearsighted students can easily read books and see their neighbors sitting nearby, but teachers and, more importantly, words on the board would appear blurred. Myopia occurs when the light rays entering the eye refract too strongly and converge at a point before reaching the retina. The eyeball may be longer than normal or the cornea too curved. As a result, the images you see are not properly focused on the retina.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Myopia usually develops in childhood and is often first noticed when parents see that their child has trouble reading the board at school. It tends to progress during adolescence and stabilizes in adulthood. Some experts believe myopia is hereditary. It may or may not be accompanied by astigmatism. In typical prescriptions for myopia, a minus sign appears before the first number.",
                        },
                    ],
                },
                {
                    title: "Treatment Options for Myopia:",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Treatment for myopia depends on several factors, such as age, level of physical activity, and occupation. It may include prescription contact lenses or glasses. The doctor will also recommend ways to strengthen your vision. If you want to permanently get rid of glasses and contact lenses, surgical treatment options are available.",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                    ],
                },
                {
                    title: "Laser Vision Correction",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Although glasses and contact lenses help manage myopia, they can be compared to a cast or crutches — temporary solutions that help you cope but do not address the root cause, which can be corrected surgically.",
                        },
                    ],
                    btn: {
                        name: "learn more",
                        link: "/services/laser-vision-correction",
                    },
                },
                {
                    title: "Intraocular Correction",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Intraocular lenses are designed to correct a high degree of astigmatism. If laser correction is not suitable for you, don’t worry — there are other ways to achieve the desired result. The 'British Ophthalmological Center' offers several surgical options that can help you. During a consultation, we can determine whether surgery is contraindicated for you and choose the best procedure option.",
                        },
                    ],
                    btn: {
                        name: "learn more",
                        link: "/services/refractive-lensectomy/",
                    },
                },
            ],
        },
        ru: {
            title: "Короткозорість, міопія",
            content: [
                {
                    title: "Симптомы и причины",

                    text: [
                        {
                            type: "image",
                            image: "/images/myopia800.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если у вас близорукость, изображения удалённых предметов кажутся размытыми. Вы можете заметить, что изображение становится чётче, если прищуриться. Например, близорукие студенты легко читают книги и видят соседей рядом, но преподаватели и, что важнее, слова на доске будут расплываться. Близорукость, или миопия, возникает, когда лучи света, попадающие в глаз, преломляются слишком сильно и сходятся в точке перед сетчаткой. Глазное яблоко может быть длиннее нормы, а роговица — слишком изогнутой. В результате изображение не фокусируется на сетчатке должным образом.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обычно близорукость развивается в детстве и впервые проявляется, когда родители замечают, что ребёнку трудно читать надписи на школьной доске. Близорукость прогрессирует в подростковом возрасте и стабилизируется к взрослому периоду. Некоторые специалисты считают, что миопия передаётся по наследству. Она может сопровождаться или не сопровождаться астигматизмом. В типичном рецепте при близорукости перед первой цифрой стоит знак минус.",
                        },
                    ],
                },
                {
                    title: "Варианты лечения близорукости:",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Лечение близорукости зависит от нескольких факторов: возраста, уровня физической активности и рода занятий. Оно может включать назначение контактных линз или очков. Врач также даст рекомендации по укреплению зрения. Если вы хотите навсегда избавиться от очков и линз, можно рассмотреть хирургические методы коррекции.",
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                    ],
                },
                {
                    title: "Лазерная коррекция зрения",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Хотя очки и контактные линзы помогают справиться с близорукостью, их можно сравнить с гипсом или костылями — это временное решение, которое облегчает жизнь, но не устраняет причину проблемы, как это делает хирургическое вмешательство.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/uslugi/lazernaya-korrektsiya-zreniya",
                    },
                },
                {
                    title: "Интраокулярная коррекция",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Интраокулярные линзы предназначены для коррекции высокой степени астигматизма. Если лазерная коррекция вам не подходит — не отчаивайтесь, есть и другие способы достичь желаемого результата. «Британский офтальмологический центр» предлагает ряд операций, которые могут помочь вам. Во время консультации врач определит, нет ли противопоказаний, и подберёт лучший вариант операции.",
                        },
                    ],
                    btn: {
                        name: "подробнее",
                        link: "/uslugi/refraktsionnaya-lensektomiya/",
                    },
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "kosookist")!,
        uk: {
            title: "Косоокість",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Гармонійне і правильне сприйняття навколишнього світу розвивається у людини з дитинства, за умови високої гостроти зору і рівного положення очей. Зоровий образ виходить чітким і об’ємним. Проте, нерідко очі відхиляються від паралельного положення зорових осей, і виникає косоокість. Косоокість є косметичною та функціональною проблемою, пов’язаною з порушенням балансу окорухових м’язів. Око може відхилятися до носа або назовні, більш рідкісні випадки відхилення ока по вертикалі. При гострому виникненні косоокості у підлітка або дорослої людини виникає дискомфорт і відчуття постійного двоїння, що значно порушує якість життя.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Своєчасне виявлення відхилення очей, правильна діагностика причин косоокості, вчасно розпочате лікування — це шанси на виправлення косметичного дефекту і досягнення високого зору обох очей.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Безсумнівно, лікування косоокості має починатися ще в дитинстві. Вчасно підібрані окуляри дозволяють зменшувати ступінь відхилення очей або навіть повністю усувають косоокість. Правильна очкова корекція в поєднанні з оклюзією (тимчасовим прикриванням здорового ока) дозволяє зберегти високий зір на проблемному оці. При недостатньому «вирівнюючому» ефекті очей, косоокість усувається хірургічною корекцією. Закріплення ефекту операції досягається тренуваннями на апаратах, які формують гармонію не тільки на рівні очних м’язів, а й на рівні зорового відділу головного мозку.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Таким чином, можливо виправлення косоокості з відновленням правильного бінокулярного зору. Важливо те, що навіть при неможливості поліпшення зору у деяких пацієнтів старшого віку (а це залежатиме від глибини змін в зоровій системі), досягнення гарного косметичного ефекту і гармонійне правильне положення очей також є нашою реальністю.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Сучасні щадні методи хірургічної корекції косоокості й можливість регулювання швів дозволяють нам усувати косоокість навіть у пацієнтів з невисокою гостротою зору. У «Британському офтальмологічному центрі» ми здатні комплексно допомагати пацієнтам з косоокістю. Точна діагностика, правильна лікувальна тактика, уважне спостереження за динамікою процесу та надійне закріплення результату лікування — всі ці етапи повністю забезпечені в стінах нашої клініки.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Косоокість можливо перемогти в будь-якому віці!",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Strabismus",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Harmonious and correct perception of the environment develops in childhood, with high visual acuity and an even position of the eyes. The visual image is clear and three-dimensional. However, often the eyes deviate from the parallel position of the visual axes, and strabismus occurs. Strabismus is a cosmetic and functional problem associated with an imbalance of the oculomotor muscles. The eye may be deviated toward the nose or outward, more rarely the eye is deviated vertically. When strabismus is acute, the teenager or adult has discomfort and a feeling of constant double vision which significantly impairs the quality of life.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Timely detection of eye deviation, correct diagnosis of the causes of strabismus, and early treatment are the chances of correcting the cosmetic defect and reaching high vision in both eyes.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Strabismus treatment should undoubtedly start in childhood. Glasses selected in time could reduce the degree of strabismus deviation or even eliminate it completely. Correct spectacle correction combined with occlusion (temporary covering of the healthy eye) allows you to keep high vision in the problematic eye. If the “leveling” effect of the glasses is insufficient, strabismus is corrected by surgical correction. Consolidation of the surgical effect is achieved by training with apparatuses which form harmony not only at the level of the eye muscles, but also at the level of the visual department of the brain.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Thus, it is possible to correct strabismus with restoration of correct binocular vision. What is important is that even if it is not possible to improve vision in some older patients (and this will depend on the depth of changes in the visual system), achieving a good cosmetic effect and a harmonious correct position of the eyes is also our reality.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The modern sparing methods of surgical correction of strabismus and the possibility of adjusting stitches allow us to eliminate strabismus even in patients with low visual acuity. At the British Ophthalmological Center  we are able to provide comprehensive care for patients with strabismus. Perfect diagnostics, therapeutic tactics, careful observation of the dynamics of the process, and reliable consolidation of the treatment results – all these aspects are completely ensured within the walls of our clinic.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Strabismus can be conquered at any age!",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Косоглазие",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Гармоничное и правильное восприятие окружающего мира развивается у человека с детства, при условии высокой остроты зрения и ровного положения глаз. Зрительный образ получается четким и объемным. Однако, нередко глаза отклоняются от параллельного положения зрительных осей, и возникает косоглазие. Косоглазие является косметической и функциональной проблемой, связанной с нарушением баланса глазодвигательных мышц. Глаз может отклоняться к носу или кнаружи, более редкие случаи отклонения глаза по вертикали. При остром возникновении косоглазия у подростка или взрослого человека возникает дискомфорт и чувство постоянного двоения, что значительно нарушает качество жизни.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Своевременное обнаружение отклонения глаза, правильная диагностика причин косоглазия, рано начатое лечение – это шансы на исправление косметического дефекта и достижение высокого зрения обоих глаз.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Несомненно, лечение косоглазия должно начинаться еще в детстве. Вовремя подобранные очки позволяют уменьшать степень отклонения глаза или даже полностью устраняют косоглазие. Правильная очковая коррекция в сочетании с окклюзией (временным прикрыванием здорового глаза) позволяет сохранить высокое зрение на проблемном глазу. При недостаточном «выравнивающем» эффекте очков, косоглазие устраняется хирургической коррекцией. Закрепление эффекта операции достигается тренировками на аппаратах, которые формируют гармонию не только на уровне глазных мышц, но и на уровне зрительного отдела головного мозга.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Таким образом, возможно исправление косоглазия с восстановлением правильного бинокулярного зрения. Важно то, что даже при невозможности улучшения зрения у некоторых пациентов старшего возраста (а это будет зависеть от глубины изменений в зрительной системе), достижение хорошего косметического эффекта и гармоничное правильное положение глаз также является нашей реальностью.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Современные щадящие методы хирургической коррекции косоглазия и возможность регулировки швов позволяют нам устранять косоглазие даже у пациентов с невысокой остротой зрения. В Британском офтальмологическом центре мы способны комплексно помогать пациентам с косоглазием. Точная диагностика, правильная лечебная тактика, внимательное наблюдение за динамикой процесса и надежное закрепление результата лечения – все эти этапы полностью обеспечены в стенах нашей клиники.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Косоглазие возможно победить в любом возрасте!",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(d => d.key === "presbiopiya")!,
        uk: {
            title: "Пресбіопія",
            content: [
                {
                    title: "Симптоми та причини",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Вам потрібні окуляри для читання? Існує ймовірність того, що у Вас пресбіопія (стареча далекозорість) – аномалія рефракції ока, при якій людина не може розглянути дрібний шрифт або маленькі предмети на близькій відстані. Так само, як сивина і зморшки, пресбіопія є одним з вікових симптомів природного механізму старіння. Ранні симптоми пресбіопії очей в середньому спостерігаються у людини в 40-45 років. Саме в цей період вона починає відчувати перші труднощі в роботі з дрібними предметами або при читанні.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Термін «пресбіопія» походить від грецького слова πρέσβυς, що означає «стара людина» або «старий» і новолатинського суфікса «-opia», що означає «короткозорість», а дослівний переклад буде звучати як «старі очі».",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "У той час як точна причина пресбіопиї все ще є предметом досліджень, прийнята теорія, що м’язові волокна навколо природного кришталика ока ущільнюються і втрачають еластичність, що знижує здатність ока змінювати форму кришталика. По мірі того як природний кришталик ока стає менш гнучким, око все гірше фокусується на близьких об’єктах. Перенесена травма, спосіб життя, рід занять, наприклад, багатогодинне сидіння перед комп’ютером, теж можуть грати роль у розвитку цього стану.",
                        },
                    ],
                },
                {
                    title: "Варіанти лікування",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Пресбіопію іноді неформально називають «хворобою довгих рук», оскільки деякий час компенсувати пресбіопію можна за допомогою розміщення предмета на відстані витягнутої руки. Однак коли цей метод перестає спрацьовувати, доводиться задуматися про корекцію пресбіопії доступними сучасній медицині методами.",
                        },
                    ],
                },
                {
                    title: "Хірургія пресбіопії",
                    text: [
                        {
                            type: "text",
                            text: "Якщо Ви не бажаєте носити окуляри або контактні лінзи з тих чи інших причин, то на допомогу приходить хірургічне лікування пресбіопії. Таким методом є заміна природного кришталика штучним (інтраокулярною лінзою). При цьому штучний кришталик може бути як простим, так і мультифокальним. Зазвичай інтраокулярні лінзи (ІОЛ) імплантують при видаленні катаракти, і деякі ІОЛ розроблені для лікування катаракти і пресбіопії одночасно.",
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Presbyopia",
            content: [
                {
                    title: "Symptoms and Causes",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Do you need reading glasses? Chances are you have presbyopia (senile farsightedness), an eye refractive abnormality in which a person cannot see small print or small objects at a close distance. Like gray hair and wrinkles, presbyopia is one of the age-related symptoms of the natural aging mechanism. The early symptoms of presbyopia eyes are on average seen in a person in their 40s and 45s. It is during this period that he or she begins to experience the first difficulties in handling small objects or reading",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The term “presbyopia” comes from the Greek word πρέσβυς meaning “old man” or “old man” and the New Latin suffix “-opia” meaning “myopia”, and the literal translation would be “old eyes”.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "While the exact cause of presbyopia is still the subject of research, it is the accepted theory that the muscle fibers around the eye’s natural lens thicken and lose elasticity, which reduces the eye’s ability to reshape the lens. As the eye’s natural lens becomes less flexible, the eye has less and less ability to focus on close objects. Trauma, lifestyle, and occupation, such as sitting in front of a computer for hours on end, can also play a role in the development of this condition.",
                        },
                    ],
                },
                {
                    title: "Treatment Options",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Presbyopia is sometimes informally called “the disease of the long arms,” because for a while it is possible to compensate for presbyopia by placing an object at arm’s length. But when this method no longer works, we have to think about the correction of presbyopia with the methods available in modern medicine.",
                        },
                    ],
                },
                {
                    title: "Presbyopia surgery",
                    text: [
                        {
                            type: "text",
                            text: "If you do not want to wear glasses or contact lenses for one or another reason, then surgical treatment of presbyopia comes to the rescue. This method involves replacing the natural lens with an artificial one (intraocular lens). The artificial lens can be either simple or multifocal. Intraocular lenses (IOLs) are usually implanted during cataract removal, and some IOLs are designed to treat cataracts and presbyopia simultaneously.",
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Пресбиопия",
            content: [
                {
                    title: "Симптомы и причины",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Вам нужны очки для чтения? Есть вероятность того, что у вас пресбиопия (старческая дальнозоркость) — аномалия рефракции глаза, при которой человек не может рассмотреть мелкий шрифт или маленькие предметы на близком расстоянии. Так же, как седина и морщины, пресбиопия является одним из возрастных симптомов естественного механизма старения. Ранние симптомы пресбиопии глаз в среднем наблюдаются у человека в 40-45 лет. Именно в этот период он начинает испытывать первые трудности в работе с мелкими предметами или при чтении.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Термин «пресбиопия» происходит от греческого слова πρέσβυς, означающего «старый человек» или «старик» и новолатинского суффикса «-opia», означающего «близорукость», а дословный перевод будет звучать как «старые глаза».",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В то время как точная причина пресбиопии все еще является предметом исследований, принята теория, что мышечные волокна вокруг естественного хрусталика глаза уплотняются и теряют эластичность, что снижает способность глаза изменять форму хрусталика. По мере того как естественный хрусталик глаза становится менее гибким, глаз все хуже фокусируется на близких объектах. Перенесенная травма, образ жизни, род занятий, например, многочасовое сидение перед компьютером, тоже могут играть роль в развитии этого состояния.",
                        },
                    ],
                },
                {
                    title: "Варианты лечения",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Пресбиопию иногда неформально называют «болезнью длинных рук», поскольку некоторое время компенсировать пресбиопию можно с помощью размещения предмета на расстоянии вытянутой руки. Однако когда этот метод перестает срабатывать, приходится задуматься о коррекции пресбиопии доступными современной медицине методами.",
                        },
                    ],
                },
                {
                    title: "Хирургия пресбиопии",
                    text: [
                        {
                            type: "text",
                            text: "Если Вы не хотите носить очки или контактные линзы из тех или других причин, то на помощь приходит хирургическое лечение пресбиопии. Таким методом является замена природного хрусталика искусственным (интраокулярной линзой). При этом искусственный хрусталик может быть как простым, так и мультифокальным. Обычно интраокулярные линзы (ИОЛ) имплантируют при удалении катаракты, и некоторые ИОЛ разработаны для лечения катаракты и пресбиопии одновременно.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keyEyeDisease.find(
            d => d.key === "simptomi-zahvoryuvannya-ochej"
        )!,
        uk: {
            title: "Симптоми захворювання очей",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Якщо Ви читаєте цей текст, ймовірно, Ви вже знайомі з контактними лінзами або окулярами (або з тими й іншими) не один рік і занадто добре знаєте всю цю мороку і обмеження, які з ними пов’язані. Ось що насправді відбувається.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Переходячи з одного середовища в інше, наприклад, з повітря у воду, промені світла заломлюються. Це називається «рефракція». Коли промені проходять через тканини рогівки і кришталик, вони піддаються рефракції таким чином, який дозволяє їм фокусуватися на сітківці. Явище, коли око не може сфокусувати світло на сітківці, зазвичай через не зовсім правильну форму ока, називається порушенням рефракції.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Нижче коротко описані найбільш типові порушення рефракції й захворювання очей, які зобов’язані своїм виникненням, головним чином, старіння й ущільнення або помутніння кришталика, яке може відбуватися в похилі роки.",
                        },
                    ],
                },
                {
                    title: "Захворювання очей:",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Короткозорість",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Короткозорість (розмитий зір вдалину), яка інакше називається міопія, — це найбільш часте порушення рефракції. Зазвичай вона виникає, коли очне яблуко занадто довге або рогівка занадто вигнута. Надлишкова довжина ока призводить до того, що промені світла від віддалених об’єктів фокусуються в точці, яка знаходиться ближче по осі і не досягає сітківки; при цьому промені світла розсіюються і в мозок потрапляє несфокусоване зображення.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Далекозорість",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Далекозорість (тобто нездатність чітко бачити об’єкти поблизу) – це загальновживаний термін для гіперметропії, — викликається тим, що очне яблуко занадто коротке або рогівка занадто плоска. Через недостатню довжину ока, рогівці і кришталику не вистачає місця для перетину променів світла в фокальній точці на сітківці, і тому зображення фокусується за сітківкою, а в мозок знову і знову вирушають неякісні сигнали.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Астигматизм",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[260px]",
                            image: "/images/astigmatism.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Астигматизм — дефект зору, пов’язаний з порушенням форми кришталика, рогівки або ока, в результаті чого людина втрачає здатність до чіткого бачення на будь-якій відстані: і близько, і далеко. Якщо астигматизм не лікувати, він може призвести до косоокості і різкого падіння зору. Без корекції астигматизм може викликати головні болі і різь в очах.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Пресбіопія",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Пресбіопія — вікова далекозорість, викликана природним старінням людини. Це аномалія рефракції ока, при якій людина не може розглянути дрібний шрифт або маленькі предмети на близькій відстані. Пресбіопія зазвичай починає вражати людей у віці від 40 до 50 років. Її найбільш ймовірна причина — втрата еластичності кришталиком.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Катаракта",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Всупереч поширеному переконанню, катаракта — це не плівка, що утворюється на поверхні ока, а зміна прозорості кришталика всередині ока, яка не дає променям світла проходити через нього. Таке поступове помутніння робить зір менш гострим з часом. Промені світла, яким вдається проникнути до сітківки, розсіюються, і зір стає розмитим.",
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Symptoms of eye disease",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "If you’re reading this, you’ve probably already been familiar with contact lenses or glasses (or both) for years and know all too well the hassle and limitations that come with them. Here’s what’s really going on.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "As light rays move from one medium to another, from air to water, for example, they refract. This is called “refraction.” When rays pass through corneal and lens tissue, they undergo refraction in a way that allows them to focus on the retina. The phenomenon of the eye not being able to focus light onto the retina, usually because the eye is not quite rightly shaped, is called refractive impairment.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The following briefly describes the most common refractive disorders and eye diseases, which owe their occurrence mainly to aging and thickening or clouding of the lens, which may occur in advanced years.",
                        },
                    ],
                },
                {
                    title: "Eye diseases:",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, subtitle: true, value: "Myopia" },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Myopia (blurred vision in the distance), otherwise known as myopia, is the most common refractive disorder. It usually occurs when the eyeball is too long or the cornea is too curved. The excessive length of the eye causes light rays from distant objects to be focused at a point that is closer in axis and does not reach the retina; the light rays are scattered and an unfocused image reaches the brain.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Farsightedness",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Farsightedness (that is, the inability to see objects clearly at close range) is the common term for hypermetropia, and is caused by the eyeball being too short or the cornea being too flat. Due to the insufficient length of the eye, the cornea and lens do not have enough space for the light rays to cross at the focal point on the retina, so the image is focused behind the retina, and poor quality signals are sent to the brain over and over again.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Astigmatism",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[260px]",
                            image: "/images/astigmatism.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Astigmatism is a vision defect associated with the distortion of the shape of the lens, cornea or eye, as a result of which the person loses the ability to see clearly at any distance: both near and far. If astigmatism is left untreated, it can lead to strabismus and a sharp decline in vision. Without correction, astigmatism can cause headaches and eye pain.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Presbyopia",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Presbyopia is age-related farsightedness caused by a person’s natural aging. It is an abnormality of refraction of the eye in which a person cannot see small print or small objects at close distances. Presbyopia usually begins to affect people between the ages of 40 and 50. It’s most likely cause is the loss of elasticity of the lens.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Cataract",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Contrary to popular belief, a cataract is not a film that forms on the surface of the eye, but a change in the transparency of the lens inside the eye that prevents light rays from passing through it. This gradual clouding makes vision less sharp over time. Rays of light that manage to penetrate to the retina are scattered, and vision becomes blurred.",
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Симптоми захворювання очей",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Якщо Ви читаєте цей текст, ймовірно, Ви вже знайомі з контактними лінзами або окулярами (або з тими й іншими) не один рік і занадто добре знаєте всю цю мороку і обмеження, які з ними пов’язані. Ось що насправді відбувається.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Переходячи з одного середовища в інше, наприклад, з повітря у воду, промені світла заломлюються. Це називається «рефракція». Коли промені проходять через тканини рогівки і кришталик, вони піддаються рефракції таким чином, який дозволяє їм фокусуватися на сітківці. Явище, коли око не може сфокусувати світло на сітківці, зазвичай через не зовсім правильну форму ока, називається порушенням рефракції.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Нижче коротко описані найбільш типові порушення рефракції й захворювання очей, які зобов’язані своїм виникненням, головним чином, старіння й ущільнення або помутніння кришталика, яке може відбуватися в похилі роки.",
                        },
                    ],
                },
                {
                    title: "Захворювання очей:",
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Короткозорість",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/blizorukost.webp",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Короткозорість (розмитий зір вдалину), яка інакше називається міопія, — це найбільш часте порушення рефракції. Зазвичай вона виникає, коли очне яблуко занадто довге або рогівка занадто вигнута. Надлишкова довжина ока призводить до того, що промені світла від віддалених об’єктів фокусуються в точці, яка знаходиться ближче по осі і не досягає сітківки; при цьому промені світла розсіюються і в мозок потрапляє несфокусоване зображення.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Далекозорість",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[160px]",
                            image: "/images/farsightedness.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Далекозорість (тобто нездатність чітко бачити об’єкти поблизу) – це загальновживаний термін для гіперметропії, — викликається тим, що очне яблуко занадто коротке або рогівка занадто плоска. Через недостатню довжину ока, рогівці і кришталику не вистачає місця для перетину променів світла в фокальній точці на сітківці, і тому зображення фокусується за сітківкою, а в мозок знову і знову вирушають неякісні сигнали.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Астигматизм",
                                },
                            ],
                        },
                        {
                            type: "image",
                            maxH: "max-h-[260px]",
                            image: "/images/astigmatism.jpg",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Астигматизм — дефект зору, пов’язаний з порушенням форми кришталика, рогівки або ока, в результаті чого людина втрачає здатність до чіткого бачення на будь-якій відстані: і близько, і далеко. Якщо астигматизм не лікувати, він може призвести до косоокості і різкого падіння зору. Без корекції астигматизм може викликати головні болі і різь в очах.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Пресбіопія",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Пресбіопія — вікова далекозорість, викликана природним старінням людини. Це аномалія рефракції ока, при якій людина не може розглянути дрібний шрифт або маленькі предмети на близькій відстані. Пресбіопія зазвичай починає вражати людей у віці від 40 до 50 років. Її найбільш ймовірна причина — втрата еластичності кришталиком.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Катаракта",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Всупереч поширеному переконанню, катаракта — це не плівка, що утворюється на поверхні ока, а зміна прозорості кришталика всередині ока, яка не дає променям світла проходити через нього. Таке поступове помутніння робить зір менш гострим з часом. Промені світла, яким вдається проникнути до сітківки, розсіюються, і зір стає розмитим.",
                        },
                    ],
                },
            ],
        },
    },
];

export type DataPatientsPageType = {
    key: InstructionsSulgType | EyeDiseaseSulgType;
    data?: { listTitle?: string; list: KeySlugPatientsType[] }[];
};

export const dataPatientsPage: DataPatientsPageType[] = [
    {
        key: "informatsiya-dlya-inohorodnikh-patsiyentiv",
    },
    {
        key: "reminders-and-instructions-for-patients",
        data: [
            {
                listTitle: "before",
                list: [
                    keySlugPatientsInstruction.find(
                        i =>
                            i.key ===
                            "informatsiya-dlya-patsiyentiv-pered-mikrokhirurhichnym-vtruchannyam"
                    )!,
                    keySlugPatientsInstruction.find(
                        i => i.key === "preparation-for-surgery-for-strabismus"
                    )!,
                    keySlugPatientsInstruction.find(
                        i =>
                            i.key ===
                            "reminder-before-a-comprehensive-pediatric-examination"
                    )!,
                    keySlugPatientsInstruction.find(
                        i => i.key === "patient-information-before-IPL-therapy"
                    )!,
                    keySlugPatientsInstruction.find(
                        i =>
                            i.key ===
                            "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu"
                    )!,
                ],
            },
            {
                listTitle: "after",
                list: [
                    keySlugPatientsInstruction.find(
                        i =>
                            i.key ===
                            "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru"
                    )!,
                    keySlugPatientsInstruction.find(
                        i =>
                            i.key ===
                            "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty"
                    )!,
                ],
            },
        ],
    },
    { key: "zakhvoryuvannya-ochey", data: [{ list: keyEyeDisease }] },
];
