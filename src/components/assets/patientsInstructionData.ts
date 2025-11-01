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
        name: keyEyeDisease.find(d => d.key === "kosookist")!,
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
        name: keyEyeDisease.find(d => d.key === "presbiopiya")!,
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
        name: keyEyeDisease.find(
            d => d.key === "simptomi-zahvoryuvannya-ochej"
        )!,
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
