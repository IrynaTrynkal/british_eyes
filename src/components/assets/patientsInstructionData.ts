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
            content: [{ text: [{ type: "text", text: "" }] }],
        },
        en: {
            title: "Glaucoma",
            content: [{ text: [{ type: "text", text: "" }] }],
        },
        ru: {
            title: "Глаукома",
            content: [{ text: [{ type: "text", text: "" }] }],
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
                            text: "Астигматизм є причиною розпливчастого зору незалежно від відстані. Очі не ідеально круглої форми, вони більше схожі на м’яч для регбі, і їх поверхня не симетрична. Вона фокусує світло в одній площині краще, ніж в іншїй. В результаті зір стає розпливчастим, з’являється двоїння.",
                        },
                    ],
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
                            text: "Astigmatism causes blurry vision regardless of distance. The eye is not perfectly round, more like a rugby ball, and its surface is not symmetrical. It focuses light from one direction better than others. As a result, vision becomes blurry. For example, from one direction an object will be seen more clearly than from the others.",
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Астигматизм",
            content: [
                {
                    title: "Что это?",
                    text: [
                        {
                            type: "text",
                            text: "Астигматизм является причиной расплывчатого зрения вне зависимости от расстояния. Глаз не идеально круглой формы, он больше походит на мяч для регби, и его поверхность не симметрична. Она фокусирует свет с одного направления лучше, чем с других. В результате зрение становится расплывчатым. К примеру, с одного направления предмет будет виден более чётко, чем с других.",
                        },
                    ],
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
                            text: "Далекозорість, яка інакше називається гіперметропія, виникає при уплощенні рогівки або при занадто короткому очному яблуці. Ці стани не дозволяють променям світла, що потрапляє в око, переломлюватися в ступені, достатньому для їх фокусування на сітківці. Замість цього зображення, які ви бачите, фокусуються за сітківкою. Для далекозорих людей ближні об’єкти виглядають більш розмитими, ніж об’єкти на відстані. Наприклад, якби ви сиділи на літньому майданчику ресторану, меню здавалося б розмитим, а навколишній пейзаж — у фокусі. Однак думка, що далекозорі завжди добре бачать вдалину, помилкова. Часто далекозорі бачать погано і зблизька, і вдалину. Однак люди, які страждають лише вікової далекозорістю (пресбіопією), добре бачать вдалину, тому що у них немає аномалій рефракцій і кришталик завжди знаходиться в розслабленому стані. Далекозорі люди часто відчувають головний біль при виконанні роботи поблизу.",
                        },
                    ],
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
                            text: "Long-sightedness, otherwise known as hyperopia, occurs when the cornea is flattened or the eyeball is too short. These conditions do not allow the rays of light entering the eye to refract to a degree sufficient to focus them on the retina. Instead, the images you see are focused behind the retina. For farsighted people, near objects appear more blurred than objects at a distance. For example, if you were sitting on a restaurant deck in the summer, the menu would appear blurry while the surrounding scenery is in focus. However, the notion that farsighted people always see well into the distance is mistaken. Often, farsighted people see poorly both near and far. However, people with only age-related farsightedness (presbyopia) can see well as far as they have no refraction abnormalities and the lens is always in a relaxed state. People with long-sightedness often experience headaches when working close up.",
                        },
                    ],
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
                            text: "Дальнозоркость, которая иначе называется гиперметропия, возникает при уплощении роговицы или при слишком коротком глазном яблоке. Эти состояния не позволяют лучам света, попадающим в глаз, преломляться в степени, достаточной для их фокусирования на сетчатке. Вместо этого изображения, которые вы видите, фокусируются за сетчаткой. Для дальнозорких людей ближние объекты выглядят более размытыми, чем объекты на расстоянии. Например, если бы вы сидели на летней площадке ресторана, меню казалось бы размытым, а окружающий пейзаж — в фокусе. Однако мнение, что дальнозоркие всегда хорошо видят вдаль, ошибочно. Часто дальнозоркие видят плохо и вблизи, и вдаль. Однако люди, страдающие лишь возрастной дальнозоркостью (пресбиопией), хорошо видят вдаль, так как у них нет аномалий рефракции и хрусталик всегда находится в расслабленном состоянии. Дальнозоркие люди часто испытывают головные боли при выполнении работы вблизи.",
                        },
                    ],
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
                        { type: "image", image: "/images/myopia800.webp" },
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
                        { type: "image", image: "/images/blizorukost.webp" },
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
                        { type: "image", image: "/images/myopia800.webp" },
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
                        { type: "image", image: "/images/blizorukost.webp" },
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
                        { type: "image", image: "/images/myopia800.webp" },
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
                        { type: "image", image: "/images/blizorukost.webp" },
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
                                    bold: true,
                                    subtitle: true,
                                    value: "Короткозорість",
                                },
                            ],
                        },
                        { type: "image", image: "/images/blizorukost.webp" },
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
                        { type: "image", image: "/images/farsightedness.jpg" },
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
                        { type: "image", image: "/images/astigmatism.jpg" },
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
                        { type: "image", image: "/images/blizorukost.webp" },
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
                        { type: "image", image: "/images/farsightedness.jpg" },
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
                        { type: "image", image: "/images/astigmatism.jpg" },
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
                        { type: "image", image: "/images/blizorukost.webp" },
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
                        { type: "image", image: "/images/farsightedness.jpg" },
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
                        { type: "image", image: "/images/astigmatism.jpg" },
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
