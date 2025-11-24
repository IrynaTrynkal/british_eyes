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

export type EyeDiseaseSlugType =
    | "glaukoma"
    | "presbiopiya"
    | "dalekozorist"
    | "katarakta"
    | "simptomi-zahvoryuvannya-ochej"
    | "kosookist"
    | "korotkozorist-miopiya"
    | "astigmatizm";

export const eyeDiseases: EyeDiseaseSlugType[] = [
    "glaukoma",
    "presbiopiya",
    "dalekozorist",
    "katarakta",
    "simptomi-zahvoryuvannya-ochej",
    "kosookist",
    "korotkozorist-miopiya",
    "astigmatizm",
];

export type KeySlugPatientsType = {
    key: InstructionsSulgType | EyeDiseaseSlugType;
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
export type LocaleDiseaseContent = {
    titleSEO: string;
    descriptionSEO: string;
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
    uk: LocaleDiseaseContent;
    en: LocaleDiseaseContent;
    ru: LocaleDiseaseContent;
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
                                "для проведення мікрохірургічних операцій (косоокість, введення Луцентіса та ін.) - Протягом 2 днів;",
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
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Перед операцією ви маєте пройти повне обстеження у офтальмолога. На огляді у лікаря бажано мати виписки після попередніх обстежень та попередніх хірургічних втручань. Перед можливим хірургічним втручанням лікар проводить корекцію та лікування всіх наявних очних захворювань та може призначити вам дообстеження у інших медичних спеціалістів.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Коли необхідний підготовчий період пройдено, ви разом з лікарем створюєте індивідуальний комфортний план лікування, проходите передопераційні обстеження, вам призначають день оперативного втручання. Разом з анестезіологом під час передопераційного огляду обирається комфортний метод знеболення та обговорюються нюанси передопераційної підготовки.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Після операції око може бути закрите пов’язкою. Пов’язка на оці залишається до контрольного огляду наступного дня. Ви узгоджуєте з операційною медсестрою час прибуття на контрольний огляд. ",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Наступного дня ви приїжджаєте в «Німецьку очну клініку» для першого контрольного огляду в призначений час. Вас супроводять в хірургічне відділення, на контрольному огляді лікар-хірург оцінить стан Вашого ока та призначить дату наступного огляду.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Після операції необхідно дотримуватись наступних правил:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            numeric: true,
                            list: [
                                "Післяопераційний захист ока: перші 3 тижні не можна торкатися очей руками (чесати, терти, натискати тощо), в приміщенні можна знаходитись без пов’язки та сонцезахисних окулярів; місяць після операції, виходячи на вулицю в будь-яку погоду, необхідні сонцезахисні окуляри.",
                                "Особиста гігієна: в післяопераційному періоді протягом 1 тижня після операції бажано не мити голову та не вмивати обличчя, попереджуючи потрапляння мильного розчину в опероване око. Душ можна приймати одразу, але не вище підборіддя. Відвідування лазні, сауни, басейну, купання у відкритих водоймах протягом місяця після операції заборонено.",
                                "Обмеження фізичних навантажень: протягом місяця після операції виключити тривалі нахили тулуба та голови (миття підлоги без швабри, ручне прання, робота на городі тощо), заняття силовими та ігровими видами спорту, підняття важких речей більше 10 кг для чоловіків та 5 кг для жінок.",
                            ],
                        },
                        {
                            type: "text",
                            text: "Після закінчення лікування Вам буде видано епікриз з термінами лікування, назвою операції, даними контрольних оглядів, рекомендаціями по лікуванню в післяопераційному періоді, в тому числі рекомендації щодо тривалості непрацездатності.",
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Preparing for strabismus surgery",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Before surgery, you must undergo a full ophthalmological examination. It is recommended to bring previous medical records and reports of any earlier surgical procedures to your doctor’s appointment. Before any potential surgery, your doctor will treat and correct any existing eye conditions and may refer you to other medical specialists for additional tests.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Once the necessary preparation period is complete, you and your doctor will create an individual and comfortable treatment plan, undergo preoperative tests, and schedule the date of surgery. During the preoperative consultation with the anesthesiologist, the most suitable method of anesthesia will be chosen and the details of preoperative preparation will be discussed.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "After surgery, your eye may be covered with a bandage. The bandage remains on the eye until the follow-up examination the next day. You will arrange the time of this check-up with the operating nurse.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The next day, you will come to the 'German Eye Clinic' for your first follow-up examination at the scheduled time. You will be accompanied to the surgical department, where the surgeon will assess the condition of your eye and schedule the next follow-up visit.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "After surgery, it is necessary to follow these rules:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            numeric: true,
                            list: [
                                "Postoperative eye protection: for the first 3 weeks, do not touch your eyes (no scratching, rubbing, or pressing). Indoors, you may be without a bandage or sunglasses; for one month after surgery, you must wear sunglasses outdoors in any weather.",
                                "Personal hygiene: during the first week after surgery, avoid washing your head and face to prevent soap from entering the operated eye. You may take a shower immediately, but only up to chin level. Visiting baths, saunas, swimming pools, or open water is prohibited for one month after surgery.",
                                "Physical activity restrictions: for one month after surgery, avoid prolonged bending of your body and head (such as washing floors without a mop, hand washing clothes, or gardening), strength or contact sports, and lifting objects heavier than 10 kg for men and 5 kg for women.",
                            ],
                        },
                        {
                            type: "text",
                            text: "After completing the treatment, you will receive a discharge summary containing the treatment duration, name of the operation, results of control examinations, and postoperative treatment recommendations, including the duration of temporary disability if applicable.",
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Подготовка к операции по поводу косоглазия",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Перед операцией необходимо пройти полное обследование у офтальмолога. На приём желательно принести выписки из предыдущих обследований и информацию о ранее проведённых хирургических вмешательствах. Перед возможной операцией врач проводит коррекцию и лечение всех имеющихся глазных заболеваний и может направить вас на дополнительные обследования к другим специалистам.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "После завершения подготовительного периода вы вместе с врачом составляете индивидуальный и комфортный план лечения, проходите предоперационные обследования, вам назначается день операции. Во время предоперационного осмотра с анестезиологом выбирается подходящий метод обезболивания и обсуждаются детали предоперационной подготовки.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "После операции глаз может быть закрыт повязкой. Повязка остаётся на глазу до контрольного осмотра на следующий день. Время осмотра согласовывается с операционной медсестрой.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "На следующий день вы приезжаете в «Немецкую глазную клинику» на первый контрольный осмотр в назначенное время. Вас проводят в хирургическое отделение, где врач-хирург оценит состояние вашего глаза и назначит дату следующего осмотра.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "После операции необходимо соблюдать следующие правила:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            numeric: true,
                            list: [
                                "Послеоперационная защита глаза: первые 3 недели нельзя трогать глаза руками (чесать, тереть, нажимать и т.д.), в помещении можно находиться без повязки и солнцезащитных очков; в течение месяца после операции при выходе на улицу в любую погоду необходимо носить солнцезащитные очки.",
                                "Личная гигиена: в течение первой недели после операции желательно не мыть голову и не умывать лицо, чтобы избежать попадания мыльного раствора в прооперированный глаз. Душ можно принимать сразу, но не выше уровня подбородка. Посещение бани, сауны, бассейна и купание в открытых водоёмах запрещено в течение месяца после операции.",
                                "Ограничения физических нагрузок: в течение месяца после операции следует избегать длительных наклонов туловища и головы (мытьё полов без швабры, ручная стирка, работа в огороде и т.п.), занятий силовыми и игровыми видами спорта, подъёма тяжестей более 10 кг для мужчин и 5 кг для женщин.",
                            ],
                        },
                        {
                            type: "text",
                            text: "После завершения лечения вам выдадут эпикриз с указанием сроков лечения, названия операции, данных контрольных осмотров и рекомендаций по послеоперационному периоду, включая длительность временной нетрудоспособности.",
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
                "reminder-before-a-comprehensive-pediatric-examination"
        )!,
        uk: {
            title: "Памʼятка перед дитячим комплексним оглядом",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "При зверненні в Дитячу клініку «Злата» з метою обстеження дитини профілактично  або при наявності скарг слідуйте, будь ласка, наступним рекомендаціям:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Оберіть час відвідування, який не співпадає зі сном або годуванням дитини.",
                                "Поясніть дитині, що лікар оглядає очі, щоб допомогти їм  залишатися здоровими ",
                                "Якщо дитина носить окуляри, візьміть їх з собою.",
                                "При наявності рецептів для корекції окулярами або контактними лінзами, медичної документації про попередні обстеження, оперативні втручання, лікуваннями, візьміть її з собою.",
                                "Уникайте тривалого зорового навантаження перед прийомом лікаря.",
                                "При наявності гострих скарг (біль, почервоніння, закисання, свербіж очей) під час запису на прийом повідомте про це реєстратора.",
                                "Якщо дитина напередодні або в день звернення була обстежена в інших клініках і ще триває ефект широкої зіниці, це не дасть можливість оцінити всі зорові функції і провести повне первинне обстеження.",
                                "Перед початком обстеження повідомте які очні краплі, інші ліки застосовує дитина.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обстеження проводиться з індивідуальним підходом, в закладі є ігрова дитяча кімната з іграшками та розмальовками. Ми робимо Ваше перебування в клініці комфортним. ",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Після прийому дотримуйтесь рекомендацій лікаря.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Reminder before a comprehensive pediatric examination",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "When visiting the Children's Clinic «Zlata» for your child's examination, either for preventive purposes or due to complaints, please follow these recommendations:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Choose a visit time that does not coincide with your child’s sleep or feeding.",
                                "Explain to your child that the doctor examines their eyes to help keep them healthy.",
                                "If your child wears glasses, bring them with you.",
                                "If you have prescriptions for glasses or contact lenses, medical records of previous examinations, surgeries, or treatments, please bring them with you.",
                                "Avoid prolonged visual strain before seeing the doctor.",
                                "If there are acute complaints (pain, redness, discharge, itching of the eyes), inform the receptionist when making an appointment.",
                                "If your child was examined in another clinic the day before or on the same day, and the effect of dilated pupils is still present, it will not be possible to fully assess all visual functions and conduct a complete initial examination.",
                                "Before starting the examination, inform the doctor about any eye drops or other medications your child is currently using.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The examination is conducted with an individual approach. The clinic has a playroom with toys and coloring books. We make your stay in the clinic comfortable.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "After the appointment, follow the doctor’s recommendations.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Памятка перед детским комплексным осмотром",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "При обращении в Детскую клинику «Злата» с целью обследования ребёнка профилактически или при наличии жалоб, пожалуйста, следуйте следующим рекомендациям:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Выберите время посещения, которое не совпадает со сном или кормлением ребёнка.",
                                "Объясните ребёнку, что врач осматривает глаза, чтобы помочь им оставаться здоровыми.",
                                "Если ребёнок носит очки, возьмите их с собой.",
                                "При наличии рецептов на очки или контактные линзы, медицинской документации о предыдущих обследованиях, операциях, лечении — возьмите её с собой.",
                                "Избегайте длительной зрительной нагрузки перед приёмом у врача.",
                                "При наличии острых жалоб (боль, покраснение, закисание, зуд глаз) сообщите об этом регистратору при записи на приём.",
                                "Если ребёнок накануне или в день обращения проходил обследование в других клиниках и эффект широкого зрачка ещё сохраняется, это не позволит оценить все зрительные функции и провести полное первичное обследование.",
                                "Перед началом обследования сообщите, какие глазные капли или другие лекарства применяет ребёнок.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обследование проводится с индивидуальным подходом. В клинике есть игровая комната с игрушками и раскрасками. Мы делаем ваше пребывание в клинике комфортным.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "После приёма соблюдайте рекомендации врача.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "patient-information-before-IPL-therapy"
        )!,
        uk: {
            title: "Памʼятка пацієнта перед IPL-терапією",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "У нашому центрі процедура виконується на IPL-xenon апараті останнього покоління OPTICLEAR XL-DRY EYE MANAGEMENT, який був затверджений для цієї процедури в офтальмології в Україні.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Увага! ",
                                },
                                {
                                    bold: true,
                                    value: "З собою необхідно мати темні окуляри.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "За 7–14 днів до процедури:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Уникати сонячного опромінення або солярію, щоб не було засмаги (високий ризик пігментації після IPL).",
                                "Не використовувати ретиноїди, кислотні пілінги, відбілювальні креми в зоні навколо очей.",
                                "Не проводити косметологічні процедури в ділянці обличчя (лазер, хімічні пілінги тощо).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { subtitle: true, value: "У день процедури:" },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Очистити шкіру обличчя (без макіяжу, кремів чи олій).",
                                "Уникати використання контактних лінз перед процедурою.",
                                "Можна попередньо прийняти антигістамінний засіб, якщо є схильність до алергічних реакцій (за рекомендацією лікаря).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Одразу після процедури:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Може бути легке почервоніння або набряк — це нормально і проходить за кілька годин.",
                                "За потреби можна прикласти прохолодний компрес (але не лід напряму на шкіру!).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Протягом 24–48 годин:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не наносити макіяж на зону навколо очей.",
                                "Уникати активного тертя повік або використання агресивних засобів.",
                                "Не використовувати контактні лінзи, якщо повіки подразнені.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [{ subtitle: true, value: "Захист шкіри:" }],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Обов'язково наносити сонцезахисний крем SPF 30+ на обличчя, навіть якщо процедура була тільки на повіках (УФ-промені можуть спровокувати пігментацію).",
                                "Уникати сонця та солярію протягом 1–2 тижнів.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Зволоження та відновлення:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "За рекомендацією лікаря можна використовувати заспокійливий крем (наприклад, з пантенолом).",
                                "Можуть бути призначені краплі чи інші засоби для підтримки очної поверхні.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Уникати теплового навантаження:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Протягом кількох днів — не відвідувати сауну, лазню, гарячі ванни.",
                            ],
                        },
                        {
                            type: "text",

                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Увага! ",
                                },
                                {
                                    bold: true,
                                    value: "IPL-терапія протипоказана під час вагітності, годування груддю, при активній шкірній інфекції, епілепсії, загальних захворювань у стадії декомпенсації.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Patient information before IPL therapy",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "In our center, the procedure is performed using the latest-generation IPL-xenon device OPTICLEAR XL-DRY EYE MANAGEMENT, which has been approved for this ophthalmological procedure in Ukraine.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Attention! ",
                                },
                                {
                                    bold: true,
                                    value: "You must bring dark sunglasses with you.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "7–14 days before the procedure:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Avoid sun exposure or tanning beds to prevent tanning (there is a high risk of pigmentation after IPL).",
                                "Do not use retinoids, acid peels, or whitening creams in the eye area.",
                                "Do not undergo cosmetic facial procedures (laser, chemical peels, etc.).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "On the day of the procedure:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Clean your facial skin (no makeup, creams, or oils).",
                                "Avoid wearing contact lenses before the procedure.",
                                "You may take an antihistamine in advance if you are prone to allergic reactions (as recommended by your doctor).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Immediately after the procedure:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Mild redness or swelling may occur — this is normal and should subside within a few hours.",
                                "If necessary, you can apply a cool compress (but do not apply ice directly to the skin!).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Within 24–48 hours:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Do not apply makeup around the eyes.",
                                "Avoid rubbing your eyelids or using harsh skincare products.",
                                "Do not wear contact lenses if your eyelids are irritated.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { subtitle: true, value: "Skin protection:" },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Always apply SPF 30+ sunscreen to your face, even if the procedure was performed only on the eyelids (UV rays may cause pigmentation).",
                                "Avoid sun exposure and tanning beds for 1–2 weeks.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Moisturizing and recovery:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "As recommended by your doctor, you may use a soothing cream (for example, with panthenol).",
                                "Eye drops or other products to support the ocular surface may be prescribed.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Avoid heat exposure:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "For several days, avoid saunas, steam baths, and hot baths.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Attention! ",
                                },
                                {
                                    bold: true,
                                    value: "IPL therapy is contraindicated during pregnancy, breastfeeding, in cases of active skin infection, epilepsy, or general diseases in the decompensation stage.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Памятка пациента перед IPL-терапией",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "В нашем центре процедура выполняется на IPL-ксеноновом аппарате последнего поколения OPTICLEAR XL-DRY EYE MANAGEMENT, который был одобрен для проведения данной процедуры в офтальмологии в Украине.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Внимание! ",
                                },
                                {
                                    bold: true,
                                    value: "Необходимо иметь с собой тёмные солнцезащитные очки.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "За 7–14 дней до процедуры:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Избегать солнечного излучения и солярия, чтобы не было загара (высокий риск пигментации после IPL).",
                                "Не использовать ретиноиды, кислотные пилинги, отбеливающие кремы в области вокруг глаз.",
                                "Не проводить косметологические процедуры в области лица (лазер, химические пилинги и т.п.).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { subtitle: true, value: "В день процедуры:" },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Очистить кожу лица (без макияжа, кремов или масел).",
                                "Избегать использования контактных линз перед процедурой.",
                                "При склонности к аллергическим реакциям можно заранее принять антигистаминный препарат (по рекомендации врача).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Сразу после процедуры:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Возможно лёгкое покраснение или отёк — это нормально и проходит через несколько часов.",
                                "При необходимости можно приложить прохладный компресс (но не лёд напрямую на кожу!).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "В течение 24–48 часов:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не наносить макияж на область вокруг глаз.",
                                "Избегать активного трения век и использования агрессивных средств.",
                                "Не использовать контактные линзы, если веки раздражены.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [{ subtitle: true, value: "Защита кожи:" }],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Обязательно наносить солнцезащитный крем SPF 30+ на лицо, даже если процедура проводилась только на веках (УФ-лучи могут вызвать пигментацию).",
                                "Избегать солнца и солярия в течение 1–2 недель.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Увлажнение и восстановление:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "По рекомендации врача можно использовать успокаивающий крем (например, с пантенолом).",
                                "Могут быть назначены капли или другие средства для поддержания поверхности глаза.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Избегать тепловой нагрузки:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "В течение нескольких дней не посещать сауну, баню, не принимать горячие ванны.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Внимание! ",
                                },
                                {
                                    bold: true,
                                    value: "IPL-терапия противопоказана во время беременности, кормления грудью, при активных кожных инфекциях, эпилепсии и общих заболеваниях в стадии декомпенсации.",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "instruktsiyi-pislya-lazernoyi-korektsiyi-zoru"
        )!,
        uk: {
            title: "Інструкції після лазерної корекції зору",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Догляд за пацієнтом в «Британський офтальмологічний центр» не припиняється після його відновлення. Ми безплатно надаємо все необхідне післяопераційне обслуговування та відновне лікування протягом необхідного періоду, навіть після виписки. Це не стосується фізіологічних змін (погіршення стану) очей або інших ускладнень й захворювань, не пов’язаних з лазерною корекцією зору.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Інструкція з проведення операції",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Для підготовки до операції:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "добре ознайомтеся зі своєю заявою про згоду на проведення лазерної корекції зору;",
                                "їжте і пийте як завжди (алкоголь не можна вживати за добу перед операцією);",
                                "одягніть неволокнистий одяг з довгими рукавами, що не облягає та в якому ви почуваєтеся комфортно;",
                                "не використовуйте макіяж, парфуми та лосьйон після гоління;",
                                "візьміть із собою протисонцеві окуляри.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Після проведення операції ви отримаєте:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "рецепт на ліки;",
                                "інструкції для медичного застосування лікарських засобів;",
                                "екстрений контактний номер телефону (для наступної після операції ночі);",
                                "запрошення на післяопераційну консультацію.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Повернення додому",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Не залишайте клініку без супроводу, тому що вам може знадобитися допомога при поверненні додому. Буде добре, якщо в день операції вас супроводжуватиме друг чи родич. Якщо це неможливо, рекомендуємо заздалегідь домовитися про транспорт додому. Після операцій з лазерної корекції зору чи лікування катаракти користуватися повітряним транспортом не забороняється. Однак ми не рекомендуємо здійснювати польоти відразу після операції. Ваш зір може залишатися трохи розпливчастим з підвищеною чутливістю до світла. Також рекомендується порадитися з лікарем на післяопераційних консультаціях щодо планування будь-яких самостійних поїздок протягом першого місяця після операції.",
                        },
                        {
                            type: "text",
                            text: "Поради на післяопераційний період",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "У перший день (наступний після операції):",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "намагайтеся перебувати в розслабленому стані;",
                                "якомога менше рухайте очима;",
                                "намагайтеся не заплющувати очі;",
                                "НЕ ТРІТЬ очі;",
                                "уникайте діяльності, що потребує візуальної концентрації (перегляд телевізора, використання комп’ютера).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Якщо у вас є маленькі діти, рекомендуємо заздалегідь організувати допомогу з боку родичів або друзів на перші два дні, особливо після операцій з лазерної корекції. Зведіть до мінімуму вживання алкоголю протягом перших 2–3 днів, оскільки він може вступити у взаємодію з лікарськими засобами та спричинити сухість очей. Якомога більше відпочивайте й уникайте непотрібної напруги очей.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Лікарські засоби",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Ви отримаєте рецепт на ліки з післяопераційного догляду. Їхня вартість не входить у вартість лікування. Використовуйте призначені лікарські засоби відповідно до інструкцій хірурга та зберігайте всі ліки у прохолодному, сухому місці.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Як правильно застосовувати очні краплі:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Завжди мийте руки перед застосуванням очних крапель;",
                                "Закиньте голову назад і дивіться в стелю;",
                                "Капніть ліки точно на очне яблуко. НЕ РОЗТЯГУЙТЕ ПОВІКУ;",
                                "Постарайтеся не торкатися ока та повіки піпеткою флакона.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Пам’ятайте, що ваш зір може бути розпливчатим одразу після застосування очних крапель та мазей. Дотримуйтесь інструкцій лікарського засобу щодо того, які очні краплі повинні застосовуватися в першу чергу і з яким інтервалом. Якщо ви пропустили прийняття ліків, не приймайте дві або три дози за раз. Можливо, вам буде комфортніше, якщо хтось допомагатиме вам із застосуванням очних крапель, поки ваші очі не відновляться.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Додаткові запобіжні заходи:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            list: [
                                "не давайте іншим людям використовувати ваші краплі для очей;",
                                "не торкайтеся шийкою флакона до ока чи іншої поверхні;",
                                "відразу після застосування накривайте флакон з очними краплями або маззю кришкою;",
                                "тримайте герметично закритий флакон у вертикальному положенні;",
                                "викиньте всі краплі та мазі після закінчення курсу лікування.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "НЕ ПЕРЕВИЩУЙТЕ РЕКОМЕНДОВАНУ ДОЗУ.",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Догляд за очима",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: "Після проведення операції у вас можуть з’явитися такі симптоми:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "сльозливість очей;",
                                "світлочутливість (одягайте протисонцеві окуляри при виході на вулицю);",
                                "відчуття смітинки в оці;",
                                "запалення очей, важкість при їх відкритті;",
                                "розширені зіниці;",
                                "набряклі та/або відвислі повіки;",
                                "мушки та плями перед очима.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Немає причин хвилюватися, оскільки це нормальні тимчасові наслідки операції.",
                        },
                        {
                            type: "text",
                            text: [{ bold: true, value: "Практичні поради:" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Якщо ви відчуваєте необхідність очистити область очей, використовуйте марлю, змочену в охолодженій кип’яченій воді, та намагайтеся не торкатися очей.",
                                "Не користуйтеся комерційними рідинами для миття очей. Якщо у вас з’явилося відчуття смітинки в оці, сухості або здавленості в оці(-аx), скористайтеся краплями «штучна сльоза» без консервантів. Їх можна придбати в будь-якій аптеці без рецепта.",
                                "Якщо ваші повіки набряклі, з’явився свербіж і почервоніння очей (навіть через кілька днів після операції), це може бути реакція на лікарські засоби. Зверніться до клініки за порадою щодо альтернативного засобу лікування.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Відчуття дискомфорту в очах",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Завдяки місцевому застосуванню крапель-анестетиків вся операція проходить безболісно. Відчуття дискомфорту через годину після операції – нормальне явище, оскільки анестезія перестає діяти. Дискомфорт може бути схожим на відчуття смітинки в оці й триватиме 24–38 годин. Лазерна корекція зору зазвичай практично безболісна, але після операції може з’явитися досить сильне відчуття дискомфорту, з яким допоможуть впоратися лікарські засоби та бандажні контактні лінзи.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Небезпека при сильному болю",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Якщо після 24 годин відчувається сильний біль, зверніться в очну клініку (з вівторка по суботу) для запису на післяопераційний прийом. Якщо клініка не працює або вам потрібна консультація у неділю, зателефонуйте за номером. Один з наших працівників зв’яжеться з вашим хірургом і домовиться з ним про те, щоб він передзвонив вам.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Малоймовірно, що лікарі швидкої допомоги знайомі з ускладненнями після лазерних операцій. У разі ускладнення (що малоймовірно) якнайшвидше звертайтеся до клініки.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Післяопераційне обслуговування",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обов’язково приходьте на призначені вам консультації відповідно до рекомендації лікаря. Один або два прийоми після операції є обов’язковими. Все післяопераційне обслуговування в «Британський офтальмологічний центр» включено у вартість операції й проводиться абсолютно безплатно.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Лікування",
                                "Перший візит",
                                "Другий візит",
                                "Третій візит",
                            ],
                            rows: [
                                [
                                    "LASIK",
                                    "3-4 дні*",
                                    "7-14 днів та виписка, якщо все гаразд",
                                    "1 місяць",
                                ],
                                [
                                    "LASEK",
                                    "3-4 дні*",
                                    "1 місяць та виписка, якщо все гаразд",
                                    "",
                                ],
                                [
                                    "Катаракта",
                                    "1 день",
                                    "1 тиждень та виписка, якщо все гаразд",
                                    "нема потреби",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "* Якщо необхідно зняти бандажні лінзи, то візит до нашого центру є обов’язковим через 3–4 дні або на 7–14 день.",
                        },
                        {
                            type: "text",
                            text: "Скасувати прийом дозволяється за 3 дні, якщо пізніше — стягується плата у розмірі 50% вартості послуги. Якщо ви спізнюєтеся на прийом на двадцять і більше хвилин, вам доведеться записатися на інший час.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "У деяких випадках хірург може призначити додаткові очні краплі. За виписаним рецептом призначений лікарський засіб можна придбати в аптеці.",
                        },
                        {
                            type: "text",
                            text: "Якщо вам зручніше, ми можемо направити вас на післяопераційний огляд до одного з центрів оптичної корекції у вашому місті, послуги якого ви сплачуєте самі. Такий варіант може бути економнішим, ніж поїздка до клініки. Результати огляду буде надіслано до клініки та внесено у вашу медичну карту. У цьому випадку просіть копію післяопераційного огляду на руки.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Повернення до повсякденного життя",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Корисні рекомендації",
                        },
                        {
                            type: "list",
                            list: [
                                "Якщо ви працюєте в умовах пилу (наприклад, на будівельних майданчиках), захищайте очі за допомогою захисних окулярів типу «маска» принаймні протягом одного місяця.",
                                "Працюючи з дисплеями, регулярно кожні 45 хвилин робіть 15-хвилинні перерви, щоб уникнути втоми очей у перші 2–3 тижні.",
                                "Рекомендується надягати протисонцеві окуляри при виході надвір протягом перших кількох тижнів — це захистить очі від пилу та зменшить тимчасову чутливість до світла.",
                                "Пацієнтам після операції з видалення катаракти слід уникати підйому тяжкості протягом перших 4-х тижнів.",
                                "Під час післяопераційних консультацій лікар визначить, чи відповідає ваш зір необхідним стандартам.",
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "НЕ СІДАЙТЕ ЗА КЕРМО, ДОКИ ЛІКАР НЕ ПІДТВЕРДИТЬ, ЩО ЦЕ БЕЗПЕЧНО.",
                        },
                        {
                            type: "text",
                            text: "За стандартами водіння ви маєте бути здатними читати номерний знак автомобіля на відстані 20,5 м. Якщо вам було прооперовано одне око, проявляйте особливу уважність під час водіння, адже ваш бінокулярний (стереоскопічний) зір тимчасово порушено й визначення відстаней може бути ускладнено.",
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Спорт",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Уникайте інтенсивних фізичних навантажень, поки ваші очі повністю не відновляться (зазвичай це займає близько місяця). Наведена нижче таблиця дає рекомендації щодо термінів відновлення для основних видів діяльності. Лікар може дати інші поради залежно від ваших індивідуальних обставин. Якщо ви професійно займаєтеся будь-яким із зазначених видів спорту або маєте питання щодо інших, обов’язково проконсультуйтеся зі своїм лікарем.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Вид діяльності",
                                "iQ LASIK Oxygen",
                                "SportLine LASEK",
                            ],
                            rows: [
                                ["Оздоровчий біг", "2 тижні", "2 тижні"],
                                ["Вправи з аеробіки", "1 тиждень", "1 тиждень"],
                                ["Йога / пілатес", "1 тиждень", "1 тиждень"],
                                ["Підняття ваги", "2 тижні", "2 тижні"],
                                ["Сауна та парна", "1 місяць", "1 місяць"],
                                ["Плавання", "1 місяць", "1 місяць"],
                                [
                                    "Футбол та безконтактні бойові мистецтва",
                                    "1 місяць",
                                    "1 місяць",
                                ],
                                [
                                    "Лижний спорт / сноубординг, теніс, сквош, крикет",
                                    "1 місяць",
                                    "1 місяць",
                                ],
                                [
                                    "Регбі, контактні бойові мистецтва",
                                    "3 місяці",
                                    "6 тижнів",
                                ],
                                [
                                    "Підводне плавання з аквалангом (30 футів і глибше)",
                                    "3 місяці",
                                    "3 місяці",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Під час спортивних занять протягом як мінімум двох тижнів захищайте свої очі від попадання поту, надягаючи головну пов’язку.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Загальні рекомендації",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Прийняття душу та ванни",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Протягом перших семи днів після операції уникайте потрапляння води у вічі.",
                                "Під час прийняття душу стійте спиною до душу на один крок далі, ніж зазвичай, щоб уникнути попадання води в очі.",
                                "Під час миття голови закидайте її назад, щоб уникати потрапляння шампуню в очі.",
                                "Якщо у вічі випадково потрапить шампунь, мило чи інший продукт — НЕ ТРІТЬ ОЧІ! Можна скористатися відсвіжувальними краплями, щоб вимити продукт з очей та послабити печіння.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Макіяж",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Протягом перших двох тижнів після операції макіяж наносити не можна.",
                                "Косметичними продуктами для обличчя (крем, тональний засіб, рум’яна тощо) можна користуватися пізніше, але не наносити їх надто близько до очей.",
                                "Щонайменше місяць після операції не використовуйте водостійку туш, оскільки вона складніше знімається.",
                                "Протягом місяця з дня проведення операції уникайте попадання будь-якого засобу макіяжу або продуктів для зняття макіяжу в очі. Якщо це сталося, вимийте продукт з очей за допомогою відсвіжувальних крапель і в жодному разі не тріть очі.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Відпустка",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не рекомендується виїжджати за кордон протягом тижня з дня проведення операції, адже ви маєте бути поблизу, щоб прийти на перші два післяопераційні огляди.",
                                "Подорожуючи країною зі спекотним кліматом, носіть якісні протисонцеві окуляри з повним захистом від ультрафіолетових променів спектру А та В. Протягом одного місяця після операції не рекомендується засмагати.",
                                "Під час занять зимовими видами спорту носіть якісні протисонцеві окуляри або окуляри типу «маска» з повним захистом від ультрафіолетових променів спектру А та В.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Читання",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Залежно від рівня корекції, читання тексту дрібним шрифтом може бути ускладнено. Це нормально і триватиме лише декілька тижнів.",
                                "Пацієнтам старше 45 років можуть знадобитися пресбіопічні окуляри. Це природний віковий процес для очей і може стати в пригоді тільки для видів діяльності, що вимагають гарного зору поблизу (таких як читання, шиття, в’язання тощо).",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Солярії",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Протягом місяця після лазерної корекції та трьох місяців після процедур лікування катаракти не користуйтеся послугами соляріїв.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Куріння",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Якщо це можливо, протягом одного тижня уникайте куріння або перебування в задимлених місцях.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Додаткові рекомендації",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "iQ LASIK Oxygen",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Бандажні контактні лінзи",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Бандажні контактні лінзи переважно використовуються після операції LASEK з метою захисту епітелію (зовнішньої покривної тканини) та зменшення відчуття дискомфорту. Щоб їх зняти, через 3-4 дні вам знадобиться повернутися до клініки. Іноді пацієнти не переносять бандажні лінзи, в такому випадку їх доведеться зняти раніше. Під час використання та зняття бандажних лінз може з’явитися певний дискомфорт чи біль, який зазвичай зникає протягом 6-24 годин. Більше відпочивайте і приймайте знеболювальні засоби, але НІ В ЯКОМУ РАЗІ НЕ ПЕРЕВИЩУЙТЕ РЕКОМЕНДОВАНУ ДОЗУ І НІКОЛИ НЕ ЗНІМАЙТЕ КОНТАКТНІ ЛІНЗИ САМОСТІЙНО.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "У разі випадіння бандажної лінзи може з’явитися певний дискомфорт. В такому випадку не намагайтеся вставити її назад в око. Продовжуйте використовувати лікарські краплі відповідно до рекомендацій та прийдіть на призначені вам післяопераційні консультації.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Ефект відновлення (помутніння)",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Протягом 3-4 тижнів після операції LASEK пацієнти можуть мати легке помутніння рогівки ока. Для прооперованої області це нормальна реакція відновлення.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Помутніння рогівки ока найчастіше слабо виражене, і більшість пацієнтів його не помічають. У поодиноких випадках воно проходить через 6-12 місяців. Ризик помутніння зростає у разі збільшення доз ліків, і ваш лікар дасть рекомендацію, якщо така ймовірність існує. У разі важкої форми помутніння зір може порушитись, в такому разі вам знадобиться обговорити курс лікування з вашим лікарем. У деяких випадках лікар призначає стероїдні краплі, які можна придбати в будь-якій аптеці, або інші методи лікування.",
                        },
                        {
                            type: "text",
                            text: "Наші спеціалісти зроблять все можливе для вашого зору.І тисячі наших пацієнтів, які повернули собі добрий зір, яскраве тому підтвердження.",
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Instructions after laser vision correction",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Patient care at «British Ophthalmology Center» does not end after recovery. We provide all necessary postoperative care and rehabilitation treatment free of charge for the required period, even after discharge. This does not apply to physiological changes (deterioration) of the eyes or other complications and diseases not related to laser vision correction.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Surgery instructions",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "To prepare for the surgery:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Familiarize yourself with your consent form for laser vision correction;",
                                "Eat and drink as usual (do not consume alcohol 24 hours before surgery);",
                                "Wear non-fibrous, loose-fitting long-sleeve clothing in which you feel comfortable;",
                                "Do not use makeup, perfume, or aftershave lotion;",
                                "Bring sunglasses with you.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "After the surgery, you will receive:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "a prescription for medication;",
                                "instructions for the medical use of the prescribed drugs;",
                                "an emergency contact phone number (for the night after surgery);",
                                "an invitation for a postoperative consultation.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Returning home",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Do not leave the clinic unaccompanied, as you may need assistance getting home. Ideally, a friend or family member should accompany you on the day of surgery. If this is not possible, we recommend arranging transportation home in advance. Air travel after laser vision correction or cataract treatment is not prohibited, but we do not recommend flying immediately after the procedure. Your vision may remain slightly blurry, and light sensitivity may increase. It is also advisable to consult your doctor during postoperative visits regarding any independent travel plans within the first month after surgery.",
                        },
                        {
                            type: "text",
                            text: "Postoperative care advice",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "On the first day (following the surgery):",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Try to stay relaxed;",
                                "Move your eyes as little as possible;",
                                "Try not to squeeze your eyes shut;",
                                "Do NOT rub your eyes;",
                                "Avoid activities that require visual focus (watching TV, using a computer).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you have small children, we recommend arranging help from family or friends for the first two days, especially after laser correction surgery. Minimize alcohol consumption during the first 2–3 days, as it may interact with medications and cause dry eyes. Get as much rest as possible and avoid unnecessary eye strain.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Medications",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "You will receive a prescription for postoperative medication. Their cost is not included in the treatment price. Use all prescribed medicines according to your surgeon’s instructions and store them in a cool, dry place.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "How to properly use eye drops:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Always wash your hands before applying eye drops;",
                                "Tilt your head back and look up at the ceiling;",
                                "Apply the drop directly to the eyeball. Do NOT pull on your eyelid;",
                                "Try not to touch your eye or eyelid with the bottle tip.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Remember that your vision may be blurry immediately after using eye drops and ointments. Follow the instructions for the medication regarding which eye drops should be applied first and at what intervals. If you miss a dose, do not take two or three doses at once. It may be more comfortable for you if someone helps you apply the eye drops until your eyes recover.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Additional precautions:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            list: [
                                "do not let other people use your eye drops;",
                                "do not touch the tip of the bottle to your eye or any other surface;",
                                "immediately after applying, close the bottle of eye drops or ointment with its cap;",
                                "keep the tightly closed bottle in an upright position;",
                                "discard all drops and ointments after completing the treatment course.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "DO NOT EXCEED THE RECOMMENDED DOSE.",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Eye care",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: "After the surgery, you may experience the following symptoms:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "watery eyes;",
                                "light sensitivity (wear sunglasses when going outside);",
                                "a sensation of a foreign body in the eye;",
                                "eye inflammation, heaviness when opening them;",
                                "dilated pupils;",
                                "swollen and/or drooping eyelids;",
                                "floaters and spots before the eyes.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "There is no reason to worry, as these are normal temporary consequences of the surgery.",
                        },
                        {
                            type: "text",
                            text: [{ bold: true, value: "Practical advice:" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "If you feel the need to clean the eye area, use gauze soaked in cooled boiled water and try not to touch your eyes.",
                                "Do not use commercial eye-washing liquids. If you feel a foreign body, dryness, or pressure in your eye(s), use preservative-free ‘artificial tear’ drops. They can be purchased at any pharmacy without a prescription.",
                                "If your eyelids are swollen, itchy, and red (even several days after surgery), this may be a reaction to medication. Contact the clinic for advice on an alternative treatment.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ bold: true, value: "Eye discomfort" }],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Due to the local use of anesthetic drops, the entire operation is painless. Discomfort an hour after the surgery is normal, as the anesthesia wears off. The discomfort may feel like a foreign body in the eye and will last 24–38 hours. Laser vision correction is usually almost painless, but after the operation you may experience considerable discomfort, which can be relieved with medications and bandage contact lenses.",
                        },
                        {
                            type: "text",
                            text: [
                                { bold: true, value: "Severe pain warning" },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If you experience severe pain after 24 hours, contact the eye clinic (Tuesday to Saturday) to schedule a postoperative appointment. If the clinic is closed or you need consultation on Sunday, call the provided number. One of our staff members will contact your surgeon and arrange for them to call you back.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "It is unlikely that emergency doctors are familiar with complications after laser surgeries. In the unlikely event of a complication, contact the clinic as soon as possible.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Postoperative care",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Be sure to attend your scheduled follow-up appointments as recommended by your doctor. One or two postoperative visits are mandatory. All postoperative care at the “British Ophthalmology Center” is included in the cost of the surgery and is provided completely free of charge.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Treatment",
                                "First visit",
                                "Second visit",
                                "Third visit",
                            ],
                            rows: [
                                [
                                    "LASIK",
                                    "3–4 days*",
                                    "7–14 days and discharge if everything is fine",
                                    "1 month",
                                ],
                                [
                                    "LASEK",
                                    "3–4 days*",
                                    "1 month and discharge if everything is fine",
                                    "",
                                ],
                                [
                                    "Cataract",
                                    "1 day",
                                    "1 week and discharge if everything is fine",
                                    "no need",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "* If it is necessary to remove the bandage lenses, a visit to our center is required after 3–4 days or on day 7–14.",
                        },
                        {
                            type: "text",
                            text: "You may cancel your appointment up to 3 days in advance; if later, a 50% service fee will be charged. If you are 20 minutes or more late, you will need to schedule a new appointment.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "In some cases, the surgeon may prescribe additional eye drops. The prescribed medication can be purchased at a pharmacy with a prescription.",
                        },
                        {
                            type: "text",
                            text: "If it is more convenient for you, we can refer you for a postoperative examination to one of the optical correction centers in your city, which you will pay for yourself. This option may be more economical than traveling to the clinic. The examination results will be sent to the clinic and added to your medical record. In this case, please request a copy of the postoperative report.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Returning to daily life",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Useful recommendations",
                        },
                        {
                            type: "list",
                            list: [
                                "If you work in dusty environments (for example, on construction sites), protect your eyes with safety goggles of the “mask” type for at least one month.",
                                "When working with screens, take a 15-minute break every 45 minutes to avoid eye fatigue during the first 2–3 weeks.",
                                "It is recommended to wear sunglasses outdoors during the first few weeks — this will protect your eyes from dust and reduce temporary light sensitivity.",
                                "Patients after cataract removal surgery should avoid heavy lifting for the first 4 weeks.",
                                "During postoperative consultations, your doctor will determine whether your vision meets the necessary standards.",
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "DO NOT DRIVE UNTIL YOUR DOCTOR CONFIRMS THAT IT IS SAFE.",
                        },
                        {
                            type: "text",
                            text: "According to driving standards, you must be able to read a car’s license plate from a distance of 20.5 meters. If only one eye was operated on, be especially cautious when driving, as your binocular (stereoscopic) vision is temporarily affected and distance perception may be impaired.",
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Sports",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Avoid intense physical activity until your eyes have fully recovered (this usually takes about a month). The table below provides recommendations on recovery times for major activities. Your doctor may offer different advice depending on your individual circumstances. If you are a professional athlete or have questions about other types of sports, be sure to consult your doctor.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Activity type",
                                "iQ LASIK Oxygen",
                                "SportLine LASEK",
                            ],
                            rows: [
                                ["Jogging", "2 weeks", "2 weeks"],
                                ["Aerobics", "1 week", "1 week"],
                                ["Yoga / Pilates", "1 week", "1 week"],
                                ["Weight lifting", "2 weeks", "2 weeks"],
                                ["Sauna and steam bath", "1 month", "1 month"],
                                ["Swimming", "1 month", "1 month"],
                                [
                                    "Football and non-contact martial arts",
                                    "1 month",
                                    "1 month",
                                ],
                                [
                                    "Skiing / Snowboarding, Tennis, Squash, Cricket",
                                    "1 month",
                                    "1 month",
                                ],
                                [
                                    "Rugby, Contact martial arts",
                                    "3 months",
                                    "6 weeks",
                                ],
                                [
                                    "Scuba diving (30 feet and deeper)",
                                    "3 months",
                                    "3 months",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "During sports activities, protect your eyes from sweat for at least two weeks by wearing a headband.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "General recommendations",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Showering and bathing",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Avoid getting water in your eyes during the first seven days after surgery.",
                                "When showering, stand one step further back from the shower than usual to prevent water from entering your eyes.",
                                "When washing your hair, tilt your head back to avoid shampoo getting into your eyes.",
                                "If shampoo, soap, or any other product accidentally gets into your eyes — DO NOT RUB THEM! Use refreshing drops to rinse the product out and relieve the burning sensation.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Make-up" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Do not apply make-up during the first two weeks after surgery.",
                                "Facial cosmetics (cream, foundation, blush, etc.) can be used later, but avoid applying them too close to your eyes.",
                                "Avoid using waterproof mascara for at least one month, as it is harder to remove.",
                                "Avoid getting any make-up or make-up remover products into your eyes for one month after surgery. If this happens, rinse them out with refreshing drops and DO NOT RUB YOUR EYES.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Vacation" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "It is not recommended to travel abroad within a week after surgery, as you should be nearby for your first two postoperative check-ups.",
                                "When traveling to hot climates, wear high-quality sunglasses with full UVA and UVB protection. Avoid sunbathing for one month after surgery.",
                                "When engaging in winter sports, wear high-quality sunglasses or ski goggles with full UVA and UVB protection.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Reading" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Depending on the correction level, reading small print may be difficult for a few weeks — this is normal.",
                                "Patients over 45 may need presbyopic glasses. This is a natural age-related process and may be useful for activities that require clear near vision (reading, sewing, knitting, etc.).",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Tanning beds" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Avoid tanning beds for one month after laser correction and for three months after cataract treatment.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Smoking" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "If possible, avoid smoking or staying in smoky environments for one week.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Additional recommendations",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { subtitle: true, value: "iQ LASIK Oxygen" },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Bandage contact lenses",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Bandage contact lenses are mainly used after LASEK surgery to protect the epithelium (the outer tissue layer) and reduce discomfort. You’ll need to return to the clinic in 3–4 days to remove them. Some patients cannot tolerate these lenses — in such cases, they are removed earlier. Some discomfort or pain may occur during use or removal, usually resolving within 6–24 hours. Rest more and take painkillers, but NEVER EXCEED THE RECOMMENDED DOSE AND NEVER REMOVE CONTACT LENSES YOURSELF.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "If a bandage lens falls out, you may feel some discomfort. Do not try to reinsert it. Continue using your prescribed eye drops and attend your scheduled follow-up consultations.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Healing effect (haze)",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "For 3–4 weeks after LASEK surgery, patients may experience slight corneal haze. This is a normal part of the healing process.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Corneal haze is usually mild and unnoticeable, but in rare cases may last up to 6–12 months. The risk increases with certain medications — your doctor will advise you if that applies. In severe cases, vision may be affected, requiring further treatment. Steroid drops or other therapies may be prescribed.",
                        },
                        {
                            type: "text",
                            text: "Our specialists will do everything possible to ensure the best results for your vision. Thousands of our patients who have regained clear sight are living proof of this.",
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Инструкции после лазерной коррекции зрения",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Уход за пациентом в «Британском офтальмологическом центре» не прекращается после его восстановления. Мы бесплатно предоставляем всё необходимое послеоперационное обслуживание и восстановительное лечение в течение требуемого периода, даже после выписки. Это не относится к физиологическим изменениям (ухудшению состояния) глаз или другим осложнениям и заболеваниям, не связанным с лазерной коррекцией зрения.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Инструкция по проведению операции",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Для подготовки к операции:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "внимательно ознакомьтесь с вашей формой согласия на проведение лазерной коррекции зрения;",
                                "ешьте и пейте как обычно (алкоголь нельзя употреблять за сутки до операции);",
                                "наденьте неворсистую свободную одежду с длинными рукавами, в которой вам будет удобно;",
                                "не используйте макияж, парфюм и лосьон после бритья;",
                                "возьмите с собой солнцезащитные очки.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "После операции вы получите:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "рецепт на лекарства;",
                                "инструкции по медицинскому применению препаратов;",
                                "экстренный контактный номер телефона (для ночи после операции);",
                                "приглашение на послеоперационную консультацию.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Возвращение домой",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Не покидайте клинику без сопровождения, так как вам может понадобиться помощь при возвращении домой. Лучше, если в день операции вас сопроводит друг или родственник. Если это невозможно, рекомендуем заранее договориться о транспорте. После операций по лазерной коррекции зрения или лечению катаракты перелёты не запрещены, однако мы не рекомендуем летать сразу после операции. Зрение может оставаться немного размытым, а чувствительность к свету — повышенной. Также желательно обсудить с врачом на послеоперационных консультациях любые поездки, запланированные в течение первого месяца после операции.",
                        },
                        {
                            type: "text",
                            text: "Рекомендации на послеоперационный период",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "В первый день (на следующий после операции):",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "старайтесь оставаться в спокойном состоянии;",
                                "по возможности не двигайте глазами;",
                                "постарайтесь не зажмуривать глаза;",
                                "НЕ ТРИТЕ глаза;",
                                "избегайте занятий, требующих зрительной концентрации (просмотр телевизора, работа за компьютером).",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если у вас есть маленькие дети, рекомендуем заранее организовать помощь родственников или друзей на первые два дня, особенно после лазерной коррекции. Минимизируйте употребление алкоголя в течение первых 2–3 дней, так как он может взаимодействовать с лекарствами и вызывать сухость глаз. Больше отдыхайте и избегайте лишнего напряжения глаз.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Лекарственные средства",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Вы получите рецепт на лекарства для послеоперационного ухода. Их стоимость не входит в стоимость лечения. Используйте препараты строго в соответствии с инструкциями хирурга и храните их в прохладном, сухом месте.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    subtitle: true,
                                    value: "Как правильно закапывать глазные капли:",
                                },
                            ],
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Всегда мойте руки перед использованием глазных капель;",
                                "Запрокиньте голову назад и смотрите в потолок;",
                                "Капните лекарство прямо на глазное яблоко. НЕ ОТТЯГИВАЙТЕ ВЕКО;",
                                "Старайтесь не касаться глаза и века кончиком флакона.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Помните, что ваше зрение может быть размытым сразу после применения глазных капель и мазей. Соблюдайте инструкции к препарату о том, какие капли следует применять первыми и с каким интервалом. Если вы пропустили прием лекарства, не применяйте две или три дозы сразу. Возможно, вам будет удобнее, если кто-то поможет вам закапывать капли, пока ваши глаза не восстановятся.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Дополнительные меры предосторожности:",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            list: [
                                "не позволяйте другим людям использовать ваши глазные капли;",
                                "не прикасайтесь горлышком флакона к глазу или другой поверхности;",
                                "сразу после применения закрывайте флакон с каплями или мазью крышкой;",
                                "держите плотно закрытый флакон в вертикальном положении;",
                                "выбросьте все капли и мази после окончания курса лечения.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "НЕ ПРЕВЫШАЙТЕ РЕКОМЕНДОВАННУЮ ДОЗУ.",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Уход за глазами",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: "После операции у вас могут появиться следующие симптомы:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "слезотечение;",
                                "светочувствительность (носите солнцезащитные очки при выходе на улицу);",
                                "ощущение инородного тела в глазу;",
                                "воспаление глаз, тяжесть при открывании;",
                                "расширенные зрачки;",
                                "отёчные и/или опущенные веки;",
                                "«мушки» и пятна перед глазами.",
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Нет причин для беспокойства, так как это нормальные временные последствия операции.",
                        },
                        {
                            type: "text",
                            text: [
                                { bold: true, value: "Практические советы:" },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Если вы чувствуете необходимость очистить область глаз, используйте марлю, смоченную в охлаждённой кипячёной воде, и постарайтесь не касаться глаз.",
                                "Не используйте коммерческие жидкости для промывания глаз. Если у вас появилось ощущение инородного тела, сухости или давления в глазу(-ах), используйте капли «искусственная слеза» без консервантов. Их можно купить в любой аптеке без рецепта.",
                                "Если ваши веки опухли, появился зуд и покраснение глаз (даже через несколько дней после операции), это может быть реакцией на лекарственные средства. Обратитесь в клинику за советом по альтернативному лечению.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Ощущение дискомфорта в глазах",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Благодаря местному применению капель-анестетиков операция проходит безболезненно. Дискомфорт через час после операции — нормальное явление, так как действие анестезии заканчивается. Дискомфорт может напоминать ощущение инородного тела и длиться 24–38 часов. Лазерная коррекция зрения обычно практически безболезненна, но после операции может возникнуть довольно сильное ощущение дискомфорта, с которым помогут справиться лекарственные препараты и бандажные контактные линзы.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    value: "Опасность при сильной боли",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если после 24 часов сохраняется сильная боль, обратитесь в глазную клинику (со вторника по субботу), чтобы записаться на послеоперационный приём. Если клиника закрыта или вам нужна консультация в воскресенье, позвоните по указанному номеру. Один из наших сотрудников свяжется с вашим хирургом и договорится, чтобы он вам перезвонил.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Маловероятно, что врачи скорой помощи знакомы с осложнениями после лазерных операций. В случае осложнений (что маловероятно) как можно скорее обращайтесь в клинику.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Послеоперационный уход",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Обязательно приходите на назначенные консультации в соответствии с рекомендациями врача. Один или два приёма после операции обязательны. Всё послеоперационное обслуживание в «Британском офтальмологическом центре» включено в стоимость операции и проводится абсолютно бесплатно.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Лечение",
                                "Первый визит",
                                "Второй визит",
                                "Третий визит",
                            ],
                            rows: [
                                [
                                    "LASIK",
                                    "3–4 дня*",
                                    "7–14 дней и выписка, если всё хорошо",
                                    "1 месяц",
                                ],
                                [
                                    "LASEK",
                                    "3–4 дня*",
                                    "1 месяц и выписка, если всё хорошо",
                                    "",
                                ],
                                [
                                    "Катаракта",
                                    "1 день",
                                    "1 неделя и выписка, если всё хорошо",
                                    "нет необходимости",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "* Если необходимо снять бандажные линзы, визит в наш центр обязателен через 3–4 дня или на 7–14-й день.",
                        },
                        {
                            type: "text",
                            text: "Отменить приём можно за 3 дня; если позже — взимается плата в размере 50% стоимости услуги. Если вы опаздываете на приём на двадцать и более минут, вам потребуется записаться на другое время.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "В некоторых случаях хирург может назначить дополнительные глазные капли. Назначенное лекарство можно приобрести в аптеке по рецепту.",
                        },
                        {
                            type: "text",
                            text: "Если вам удобнее, мы можем направить вас на послеоперационный осмотр в один из центров оптической коррекции в вашем городе, услуги которого оплачиваются вами самостоятельно. Этот вариант может быть экономичнее, чем поездка в клинику. Результаты осмотра будут отправлены в клинику и внесены в вашу медицинскую карту. В этом случае попросите копию отчёта послеоперационного осмотра.",
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Возвращение к повседневной жизни",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: "Полезные рекомендации",
                        },
                        {
                            type: "list",
                            list: [
                                "Если вы работаете в пыльных условиях (например, на строительных площадках), защищайте глаза защитными очками типа «маска» как минимум в течение одного месяца.",
                                "При работе с дисплеями каждые 45 минут делайте 15-минутные перерывы, чтобы избежать усталости глаз в первые 2–3 недели.",
                                "Рекомендуется носить солнцезащитные очки при выходе на улицу в течение первых нескольких недель — это защитит глаза от пыли и уменьшит временную светочувствительность.",
                                "Пациентам после операции по удалению катаракты следует избегать подъёма тяжестей в течение первых 4 недель.",
                                "Во время послеоперационных консультаций врач определит, соответствует ли ваше зрение необходимым стандартам.",
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "НЕ САДИТЕСЬ ЗА РУЛЬ, ПОКА ВРАЧ НЕ ПОДТВЕРДИТ, ЧТО ЭТО БЕЗОПАСНО.",
                        },
                        {
                            type: "text",
                            text: "Согласно стандартам вождения, вы должны быть способны прочитать номерной знак автомобиля с расстояния 20,5 метра. Если операция была проведена только на одном глазу, проявляйте особую осторожность при вождении, так как ваше бинокулярное (стереоскопическое) зрение временно нарушено, и восприятие расстояния может быть затруднено.",
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Спорт",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Избегайте интенсивных физических нагрузок, пока ваши глаза полностью не восстановятся (обычно это занимает около месяца). Приведённая ниже таблица содержит рекомендации по срокам восстановления для основных видов деятельности. Врач может дать иные рекомендации в зависимости от ваших индивидуальных обстоятельств. Если вы профессионально занимаетесь каким-либо из указанных видов спорта или у вас есть вопросы по другим, обязательно проконсультируйтесь со своим врачом.",
                        },
                        {
                            type: "table",
                            gap: true,
                            headers: [
                                "Вид деятельности",
                                "iQ LASIK Oxygen",
                                "SportLine LASEK",
                            ],
                            rows: [
                                ["Оздоровительный бег", "2 недели", "2 недели"],
                                ["Аэробика", "1 неделя", "1 неделя"],
                                ["Йога / Пилатес", "1 неделя", "1 неделя"],
                                ["Поднятие тяжестей", "2 недели", "2 недели"],
                                ["Сауна и парная", "1 месяц", "1 месяц"],
                                ["Плавание", "1 месяц", "1 месяц"],
                                [
                                    "Футбол и неконтактные боевые искусства",
                                    "1 месяц",
                                    "1 месяц",
                                ],
                                [
                                    "Лыжи / Сноуборд, Теннис, Сквош, Крикет",
                                    "1 месяц",
                                    "1 месяц",
                                ],
                                [
                                    "Регби, Контактные боевые искусства",
                                    "3 месяца",
                                    "6 недель",
                                ],
                                [
                                    "Дайвинг (глубже 30 футов)",
                                    "3 месяца",
                                    "3 месяца",
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Во время занятий спортом в течение как минимум двух недель защищайте глаза от пота, надевая повязку на голову.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Общие рекомендации",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Душ и ванна" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Избегайте попадания воды в глаза в течение первых семи дней после операции.",
                                "Во время душа стойте на шаг дальше, чем обычно, чтобы вода не попадала в глаза.",
                                "При мытье головы запрокидывайте ее назад, чтобы шампунь не попадал в глаза.",
                                "Если шампунь, мыло или другой продукт попал в глаза — НЕ ТРИТЕ ИХ! Используйте освежающие капли, чтобы промыть глаза и снять жжение.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Макияж" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "В течение первых двух недель после операции макияж наносить нельзя.",
                                "Косметикой для лица (крем, тональный крем, румяна и т.п.) можно пользоваться позже, но не наносите слишком близко к глазам.",
                                "Не используйте водостойкую тушь как минимум месяц — она сложнее снимается.",
                                "В течение месяца после операции избегайте попадания средств макияжа и демакияжа в глаза. Если это произошло, промойте глаза каплями и НИ В КОЕМ СЛУЧАЕ НЕ ТРИТЕ ИХ.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Отпуск" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не рекомендуется выезжать за границу в течение недели после операции, чтобы иметь возможность прийти на первые два послеоперационных осмотра.",
                                "Путешествуя в жаркие страны, носите качественные солнцезащитные очки с полной защитой от ультрафиолета спектров A и B. В течение месяца после операции избегайте загара.",
                                "Во время занятий зимними видами спорта носите качественные солнцезащитные очки или маску с полной защитой от ультрафиолета спектров A и B.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Чтение" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "В зависимости от уровня коррекции чтение мелкого шрифта может быть затруднено несколько недель — это нормально.",
                                "Пациентам старше 45 лет могут понадобиться очки для близи. Это естественный возрастной процесс и может быть полезен для занятий, требующих хорошего зрения вблизи (чтение, шитье, вязание и т.д.).",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Солярий" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Избегайте солярия в течение месяца после лазерной коррекции и трех месяцев после лечения катаракты.",
                            ],
                        },
                        {
                            type: "text",
                            text: [{ subtitle: true, value: "Курение" }],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Если возможно, избегайте курения или нахождения в задымленных помещениях в течение недели.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    bold: true,
                                    value: "Дополнительные рекомендации",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { subtitle: true, value: "iQ LASIK Oxygen" },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Бандажные контактные линзы",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Бандажные линзы обычно используются после операции LASEK для защиты эпителия (наружного слоя) и снижения дискомфорта. Через 3–4 дня необходимо вернуться в клинику, чтобы их снять. Иногда пациенты не переносят линзы — тогда их снимают раньше. Возможен дискомфорт или боль во время ношения или снятия, обычно проходящие через 6–24 часа. Отдыхайте и принимайте обезболивающее, но НИКОГДА НЕ ПРЕВЫШАЙТЕ ДОЗУ И НЕ СНЯТИЕ ЛИНЗЫ САМИ.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Если линза выпала, может появиться дискомфорт. Не пытайтесь вставить её обратно. Продолжайте использовать капли по назначению и приходите на контрольные осмотры.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    subtitle: true,
                                    value: "Эффект восстановления (помутнение)",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В течение 3–4 недель после операции LASEK может наблюдаться легкое помутнение роговицы. Это нормальный процесс восстановления.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Помутнение обычно слабое и незаметное, но в редких случаях может сохраняться до 6–12 месяцев. Риск повышается при применении некоторых препаратов — врач предупредит, если это ваш случай. В тяжелых формах зрение может ухудшаться, тогда потребуется лечение. Могут быть назначены стероидные капли или другие методы терапии.",
                        },
                        {
                            type: "text",
                            text: "Наши специалисты сделают всё возможное для вашего зрения. Тысячи наших пациентов, вернувших себе хорошее зрение, — лучшее тому доказательство.",
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
                "pamyatka-patsiyenta-pered-vitreoretynalnoyu-khirurhiyeyu"
        )!,
        uk: {
            title: "Пам’ятка пацієнта перед вітреоретинальною хірургією",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Після операції ваше око заклеюють пов’язкою для того, щоб захистити його від випадкового забруднення. Пов’язку слід зняти як прибудете додому. Обробити повіки можна (не саме око) стерильною ватою, змоченою водним розчином фурациліну 0.02% або водним розчином левоміцетину 0.25% (продаються в аптеці). Починаючи з першого дня після операції, не слід постійно заклеювати опероване око пов’язкою, під якою око не може вільно моргати і рухатися.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В день операції і в період реабілітації можуть виникнути больові відчуття в оперованому оці або в області навколо очей (надбрів’я, скроню). При больовому синдромі доцільно приймати таблетки «Кетанов», «Кеторол», «Анальгін» (згідно з інструкціями до цих препаратів) і звернутися до свого лікаря.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРІОД РЕАБІЛІТАЦІЇ",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Запропоновані рекомендації є загальними, тобто розроблені для більшості пацієнтів. У випадках індивідуального перебігу післяопераційного періоду лікар може запропонувати індивідуальну схему лікування і графік оглядів пацієнта. Уточнюйте, будь ласка, рекомендації при кожному відвідуванні лікаря!",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Режим. " },
                                    {
                                        value: "Після проведеної операції дотримання режиму може мати певне лікувальне значення. Після операції, хірург або ваш лікуючий лікар дадуть рекомендації, як поводитися в першу добу після операції. Надалі вам слід уточнити особливості післяопераційного режиму у вашого лікуючого лікаря.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Гігієна. " },
                                    {
                                        value: "Під час вмивання уникайте попадання мила і води в око. При митті голови нахиляйте голову назад, а не вперед. Якщо вода потрапила в опероване око, промийте його водним розчином фурациліну 0.02% або водним розчином левоміцетину 0.25% (продаються в аптеці).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Обов’язково відвідуйте лікаря в призначений день!",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Очні краплі потрібні для більш швидкого загоєння і профілактики інфекційних ускладнень. ",
                                    },
                                    {
                                        value: "Як правило, після проведеної операції хірург призначає закапування кількох препаратів: краплі з антибіотиком (наприклад, «Флоксал», «Офтаквікс», «Тобрекс» і ін.), Протизапальні краплі (наприклад, «Неванак», «Індоколлір» і ін.) Або комбіновані препарати ( «Макситрол», «Тобрадекс» і ін.).",
                                    },
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "Гострота ЗОРУ в післяопераційному періоді",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Поліпшення зору після операції відбувається поступово протягом перших 2 – 3 місяців. У деяких пацієнтів підвищення гостроти зору спостерігається протягом півроку. Як правило, повільніше цей процес протікає у пацієнтів з короткозорістю, цукровим діабетом,загальними захворюванням та  оперованим відшаруванням сітківки,розривами сітківки, мембрани на сітківці і у літніх людей.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "У період загоєння і реабілітації ваші очі можуть бути «різними». Вам можуть знадобитися тимчасові окуляри або контактні лінзи, щоб виправити цю ситуацію. Остаточну очкову корекцію доцільно проводити через 2-3 місяці після операції, хоча терміни підбору окулярів вирішуються індивідуально, якщо, наприклад, опероване єдине око.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "У міру відновлення зору у деяких пацієнтів можуть виникнути спотворення ліній і предметів, з’явитися двоїння. Як правило, ці симптоми слабшають поступово протягом декількох тижнів або місяців.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПОДАЛЬШИЙ ДОГЛЯД І РЕКОМЕНДАЦІЇ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Поступово обмеження, що накладаються в післяопераційному періоді, будуть зняті. Ми пропонуємо вам кілька корисних рекомендацій, які сприятимуть збереженню зору:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не сідайте за кермо, поки око повністю не відновиться.",
                                "Не тріть очей і не тисніть на опероване око.",
                                "При перегляді телевізора чи читання частіше робіть перерви.",
                                "По можливості носіть сонцезахисні окуляри для захисту очей від ультрафіолетового випромінювання.",
                                "Дотримуйтесь встановленого графіка відвідування лікаря.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ДОДАТКОВА ІНФОРМАЦІЯ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "ГАЗ. " },
                                {
                                    value: "Якщо на заключному етапі операції в око введений газ, післяопераційний період має ряд особливостей. У перші дні після операції гострота зору вкрай низька, так як газ не пропускає світло до сітківки. По мірі розсмоктування газу ( орієнтовно 10-15 днів) верхня частина поля зору починає світлішати, і пацієнт може помітити «рівень поділу середовищ», який змінює положення в залежності від руху голови. Через 7 – 10 днів після операції, коли газу залишається в оці менше третини обсягу склоподібного тіла, єдиний пухирець в оці може роздрібнитися на кілька дрібних. При індивідуальному перебігу процесу у деяких пацієнтів при розширенні газу (до 3 діб після операції) може підніматися внутрішньоочний тиск. Як правило, цей процес супроводжується болями і почервонінням ока. У таких випадках слід негайно звернутися до лікаря!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "СИЛІКОН. " },
                                {
                                    value: "Якщо на заключному етапі операції в око введений рідкий силікон, при підборі окулярів важливо пам’ятати, що в період знаходження силікону в оці гострота зору коригується окулярами (зазвичай від +4,0 до +6,0 дптр). Видалення силікону з порожнини склоподібного тіла, як правило, проводиться не раніше ніж через 3 місяці після операції. Вам слід знати, що наявність силікону в оці може призводити до прискорення процесу помутніння кришталика ока (розвиток катаракти) і провокувати підвищення внутрішньоочного тиску, особливо в ранньому післяопераційному періоді. Виведення силікону з ока є окремою операцією і оплачується окремо.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "ДЛЯ ПАЦІЄНТІВ З ЦУКРОВИМ ДІАБЕТОМ. ",
                                },
                                {
                                    value: "На завершальному етапі операції і в післяопераційному періоді біля ока вводиться розчин протизапального препарату ( «Дексаметазон», «Дипроспан», «Кеналог»). Незважаючи на невелику дозу (не більше 0,5 мл), у ряду пацієнтів з цукровим діабетом спостерігається підвищення рівня глюкози крові протягом 1 – 2 діб після ін’єкції. Будьте уважні!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПРАВИЛА ЗАКАПУВАННЯ КРАПЕЛЬ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Ретельно вимийте руки.",
                                "Відкрийте флакон.",
                                "Закиньте голову або приляжте на спину і дивіться вгору.",
                                "Розмістіть перевернутий догори флакон над оком, не торкайтеся до ока і вій.",
                                "Обережно захопивши пальцями нижню повіку, злегка відтягніть його вниз.",
                                "Заведіть очі вгору і злегка стисніть флакон, щоб крапля потрапила в простір, що утворився між очним яблуком і витягнутою нижньою повікою.",
                                "Закрийте очі.",
                                "Для посилення ефективності впливу і зведення до мінімуму системних побічних ефектів очних крапель притисніть вказівним пальцем (через стерильну серветку) внутрішній кут очної щілини.",
                                "При призначенні декількох крапель проміжок між закапуванням повинен складати близько 5 хвилин. Останніми закапуються краплі, що знижують внутрішньоочний тиск.",
                                "Закрийте флакон і зберігайте його у відповідності з приписом.",
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Patient reminder before vitreoretinal surgery",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "After surgery, your eye will be covered with a bandage to protect it from accidental contamination. The bandage should be removed once you arrive home. You may clean your eyelids (not the eye itself) with sterile cotton moistened with a 0.02% furacilin solution or a 0.25% levomycetin solution (available at pharmacies). Starting from the first day after surgery, the operated eye should not remain constantly covered with a bandage, as this prevents free blinking and movement.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "On the day of surgery and during the rehabilitation period, you may experience pain in the operated eye or the surrounding area (eyebrow, temple). In case of pain, it is advisable to take tablets such as “Ketanov”, “Ketorol”, or “Analgin” (according to the instructions for these medications) and contact your doctor.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "REHABILITATION PERIOD",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The recommendations provided are general and developed for most patients. In case of individual postoperative specifics, your doctor may suggest a personalized treatment plan and follow-up schedule. Please clarify the recommendations at each visit!",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Regimen. " },
                                    {
                                        value: "Following surgery, adhering to the prescribed regimen may have therapeutic value. After the operation, your surgeon or attending physician will provide instructions for the first 24 hours. Later, you should confirm the specific postoperative regimen with your doctor.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Hygiene. " },
                                    {
                                        value: "Avoid getting soap and water into your eye when washing your face. When washing your hair, tilt your head back, not forward. If water gets into the operated eye, rinse it with a 0.02% furacilin solution or a 0.25% levomycetin solution (available at pharmacies).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Be sure to visit your doctor on the appointed day!",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Eye drops are necessary for faster healing and to prevent infections. ",
                                    },
                                    {
                                        value: "Typically, after surgery, your surgeon will prescribe several drops: antibiotic drops (e.g., “Floxal”, “Oftaquix”, “Tobrex”), anti-inflammatory drops (e.g., “Nevanac”, “Indocollyre”), or combined medications (“Maxitrol”, “Tobradex”, etc.).",
                                    },
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "VISUAL ACUITY DURING THE POSTOPERATIVE PERIOD",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Vision improvement occurs gradually over the first 2–3 months after surgery. In some patients, visual acuity continues to improve for up to six months. This process may be slower in patients with myopia, diabetes, systemic diseases, retinal detachment, retinal tears, epiretinal membranes, or in elderly patients.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "During healing and rehabilitation, your eyes may differ in vision. You may need temporary glasses or contact lenses to compensate for this. Final correction with glasses is usually recommended 2–3 months after surgery, although this may vary individually, especially if the operated eye is your only seeing eye.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "As vision recovers, some patients may experience distortions of lines and objects or double vision. These symptoms usually diminish gradually over several weeks or months.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "FURTHER CARE AND RECOMMENDATIONS",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Postoperative restrictions will gradually be lifted. We offer several useful recommendations that will help preserve your vision:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Do not drive until your vision has fully recovered.",
                                "Do not rub or press on the operated eye.",
                                "Take regular breaks while reading or watching TV.",
                                "Whenever possible, wear sunglasses to protect your eyes from ultraviolet radiation.",
                                "Follow your scheduled follow-up visits with your doctor.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ADDITIONAL INFORMATION",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "GAS. " },
                                {
                                    value: "If gas was introduced into your eye during the final stage of surgery, the postoperative period will have certain specifics. During the first few days, your visual acuity will be very low, as gas prevents light from reaching the retina. As the gas is absorbed (approximately 10–15 days), the upper part of your field of vision will begin to clear, and you may notice a visible “fluid level,” which changes with head movement. Around 7–10 days after surgery, when less than one-third of the gas remains, the single bubble may split into several smaller ones. In some patients, gas expansion (up to 3 days post-surgery) may cause an increase in intraocular pressure, accompanied by pain and redness. In such cases, contact your doctor immediately!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "SILICONE. " },
                                {
                                    value: "If liquid silicone was introduced into the eye, keep in mind that while it remains inside, your vision may require correction with glasses (usually from +4.0 to +6.0 diopters). Silicone removal is typically performed no earlier than 3 months after surgery. Please note that silicone may accelerate cataract formation and increase intraocular pressure, especially in the early postoperative period. Silicone removal is a separate procedure and is billed separately.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "FOR PATIENTS WITH DIABETES. ",
                                },
                                {
                                    value: "At the final stage of surgery or during the postoperative period, an anti-inflammatory drug solution (“Dexamethasone”, “Diprospan”, “Kenalog”) may be injected near the eye. Despite the small dose (no more than 0.5 ml), some diabetic patients may experience a temporary increase in blood glucose levels for 1–2 days after the injection. Please be cautious!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "RULES FOR APPLYING EYE DROPS",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Wash your hands thoroughly.",
                                "Open the bottle.",
                                "Tilt your head back or lie down and look upward.",
                                "Hold the bottle upside down above your eye without touching the eye or lashes.",
                                "Gently pull down your lower eyelid.",
                                "Look upward and squeeze the bottle slightly so that a drop falls into the space between the eye and the lower eyelid.",
                                "Close your eyes.",
                                "To increase absorption and reduce systemic side effects, press the inner corner of the eye with your index finger (through a sterile tissue).",
                                "If multiple drops are prescribed, wait about 5 minutes between applications. Pressure-lowering drops should be applied last.",
                                "Close the bottle and store it as directed.",
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Памятки пациенту перед витреоретинальной хирургией",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "После операции ваш глаз заклеивают повязкой, чтобы защитить его от случайного загрязнения. Повязку следует снять, когда вы вернётесь домой. Веки (не сам глаз) можно обработать стерильной ватой, смоченной водным раствором фурацилина 0.02% или левомицетина 0.25% (продаются в аптеке). Начиная с первого дня после операции, не следует постоянно держать глаз под повязкой, так как это мешает свободному морганию и движению глаза.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В день операции и в период реабилитации могут возникать болевые ощущения в оперированном глазу или в области вокруг глаз (надбровье, висок). При болевом синдроме рекомендуется принимать таблетки «Кетанов», «Кеторол» или «Анальгин» (согласно инструкции) и обратиться к своему врачу.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРИОД РЕАБИЛИТАЦИИ",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Предложенные рекомендации являются общими и разработаны для большинства пациентов. В случае индивидуального течения послеоперационного периода врач может предложить персональную схему лечения и график осмотров. Уточняйте, пожалуйста, рекомендации при каждом посещении врача!",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Режим. " },
                                    {
                                        value: "После проведённой операции соблюдение режима имеет лечебное значение. После операции хирург или ваш лечащий врач дадут рекомендации, как вести себя в первые сутки. В дальнейшем уточняйте особенности послеоперационного режима у своего врача.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Гигиена. " },
                                    {
                                        value: "Во время умывания избегайте попадания мыла и воды в глаз. При мытье головы наклоняйте голову назад, а не вперёд. Если вода попала в глаз, промойте его водным раствором фурацилина 0.02% или левомицетина 0.25% (продаются в аптеке).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Обязательно посещайте врача в назначенный день!",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Глазные капли необходимы для ускорения заживления и профилактики инфекционных осложнений. ",
                                    },
                                    {
                                        value: "Как правило, после операции назначаются капли с антибиотиком («Флоксал», «Офтавикс», «Тобрекс»), противовоспалительные капли («Неванак», «Индоколлир») или комбинированные препараты («Макситрол», «Тобрадекс» и др.).",
                                    },
                                ],
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ОСТРОТА ЗРЕНИЯ В ПОСЛЕОПЕРАЦИОННЫЙ ПЕРИОД",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Улучшение зрения происходит постепенно в течение первых 2–3 месяцев после операции. У некоторых пациентов повышение остроты зрения продолжается до полугода. Как правило, этот процесс медленнее у пациентов с близорукостью, сахарным диабетом, общими заболеваниями, отслоением сетчатки, разрывами сетчатки, мембраной на сетчатке и у пожилых людей.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В период заживления глаза могут различаться по зрению. Для временной коррекции могут потребоваться очки или контактные линзы. Окончательную коррекцию очками обычно проводят через 2–3 месяца, но сроки подбираются индивидуально, особенно если оперирован единственный глаз.",
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "В процессе восстановления зрения возможны искажения линий и предметов, двоение. Эти симптомы обычно ослабевают в течение нескольких недель или месяцев.",
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ДАЛЬНЕЙШИЙ УХОД И РЕКОМЕНДАЦИИ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Постепенно ограничения после операции будут сняты. Мы предлагаем несколько полезных рекомендаций, которые помогут сохранить зрение:",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Не садитесь за руль, пока зрение полностью не восстановится.",
                                "Не трите и не нажимайте на оперированный глаз.",
                                "При чтении или просмотре телевизора делайте перерывы.",
                                "По возможности носите солнцезащитные очки для защиты глаз от ультрафиолета.",
                                "Соблюдайте график посещения врача.",
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "ГАЗ. " },
                                {
                                    value: "Если во время операции в глаз был введён газ, послеоперационный период имеет особенности. В первые дни острота зрения будет очень низкой, так как газ не пропускает свет к сетчатке. По мере рассасывания газа (примерно 10–15 дней) верхняя часть поля зрения начнёт светлеть, и пациент может заметить «уровень раздела сред», который меняет положение в зависимости от движения головы. Через 7–10 дней, когда газа останется меньше трети, пузырь может раздробиться на несколько мелких. У некоторых пациентов при расширении газа (в течение 3 суток после операции) может повышаться внутриглазное давление, сопровождающееся болью и покраснением глаза. В таких случаях необходимо немедленно обратиться к врачу!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                { bold: true, value: "СИЛИКОН. " },
                                {
                                    value: "Если в глаз введён жидкий силикон, при подборе очков учитывайте, что во время его нахождения в глазу острота зрения корректируется очками (обычно от +4,0 до +6,0 дптр). Удаление силикона проводится, как правило, не ранее чем через 3 месяца. Наличие силикона может ускорять развитие катаракты и повышать внутриглазное давление, особенно в ранний послеоперационный период. Удаление силикона — отдельная операция, оплачивается отдельно.",
                                },
                            ],
                        },
                        {
                            type: "text",
                            gap: true,
                            text: [
                                {
                                    bold: true,
                                    value: "ДЛЯ ПАЦИЕНТОВ С САХАРНЫМ ДИАБЕТОМ. ",
                                },
                                {
                                    value: "На заключительном этапе операции или после неё под глаз вводится раствор противовоспалительного препарата («Дексаметазон», «Дипроспан», «Кеналог»). Несмотря на малую дозу (до 0,5 мл), у некоторых пациентов с диабетом наблюдается повышение уровня глюкозы в крови в течение 1–2 суток после инъекции. Будьте внимательны!",
                                },
                            ],
                        },
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПРАВИЛА ЗАКАПЫВАНИЯ КАПЕЛЬ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Тщательно вымойте руки.",
                                "Откройте флакон.",
                                "Запрокиньте голову или лягте и смотрите вверх.",
                                "Держите флакон перевёрнутым над глазом, не касаясь глаза и ресниц.",
                                "Осторожно оттяните нижнее веко.",
                                "Посмотрите вверх и слегка сожмите флакон, чтобы капля попала между глазным яблоком и нижним веком.",
                                "Закройте глаза.",
                                "Для усиления эффекта и уменьшения системных побочных действий прижмите внутренний угол глаза указательным пальцем (через стерильную салфетку).",
                                "Если назначено несколько капель, делайте перерыв около 5 минут. Последними закапываются капли, снижающие внутриглазное давление.",
                                "Закройте флакон и храните согласно инструкции.",
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: keySlugPatientsInstruction.find(
            k => k.key === "pamyatka-patsiyenta-pislya-khirurhiyi-katarakty"
        )!,
        uk: {
            title: "Пам’ятка пацієнта після хірургії катаракти",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРЕД ОПЕРАЦІЄЮ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Записатися на передопераційний прийом до офтальмохірурга і анестезіолога потрібно заздалегідь (краще за тиждень). На огляді у лікаря бажано мати виписки після попередніх обстежень та попередніх хірургічних втручань.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "В ДЕНЬ ОПЕРАЦІЇ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "З’їжте легкий сніданок, виключаючи продукти з різким ароматом (цибуля, часник).",
                                "Обов’язково прийміть всі препарати, які Ви приймаєте регулярно. Режим прийому лікарських препаратів в день операції і в післяопераційний період залишається незмінним.",
                                "Після операції ваше око заклеюють пов’язкою для того, щоб захистити його від випадкового забруднення. Пов’язку слід зняти як прибудете додому.",
                                "Обробити повіки можна (не саме око) стерильною ватою, змоченою водним розчином фурациліну 0.02% або водним розчином левоміцетину 0.25% (продаються в аптеці).",
                                "Починаючи з першого дня після операції постійно заклеювати опероване око пов’язкою не потрібно.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРІОД РЕАБІЛІТАЦІЇ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Запропоновані рекомендації є загальними, тобто розроблені для більшості пацієнтів. У випадках індивідуального перебігу післяопераційного періоду лікар може запропонувати індивідуальну схему лікування і графік оглядів пацієнта. Уточнюйте, будь ласка, рекомендації при кожному відвідуванні лікаря!",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Режим. " },
                                    {
                                        value: "Після проведеної операції дотримання режиму може мати певне лікувальне значення. Після операції, хірург або ваш лікуючий лікар дадуть рекомендації, як поводитися в першу добу після операції. Надалі вам слід уточнити особливості післяопераційного режиму у вашого лікуючого лікаря.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Гігієна. " },
                                    {
                                        value: "Під час вмивання уникайте попадання мила і води в око. При митті голови нахиляйте голову назад, а не вперед. Якщо вода потрапила в опероване око, промийте його водним розчином фурациліну 0.02% або водним розчином левоміцетину 0.25% (продаються в аптеці).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Обов’язково відвідуйте лікаря в призначений день!",
                                    },
                                ],

                                "Очні краплі потрібні для швидкого загоєння і профілактики інфекційних ускладнень. Як правило, після проведеної операції хірург призначає закапування кількох препаратів: краплі з антибіотиком, протизапальні краплі, або комбіновані препарати.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ГОСТРОТА ЗОРУ В ПІСЛЯОПЕРАЦІЙНОМУ ПЕРІОДІ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Відновлення зору відбуватиметься поступово. В перші дні після операції зір може бути низьким за рахунок невеликого набряку рогівки, широкої зіниці (зазвичай проходить через тиждень). Остаточно зір прооперованого ока відновлюється через 1 місяць після операції, тому підбір окулярів (при монофокальній ІОЛ) доцільний по закінченню цього терміну. Ви можете підібрати собі окуляри за місцем проживання або в нашому медичному центрі.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПРАВИЛА ЗАКАПУВАННЯ КРАПЕЛЬ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Ретельно вимийте руки.",
                                "Відкрийте флакон.",
                                "Закиньте голову або приляжте на спину і дивіться вгору.",
                                "Розмістіть перевернутий догори флакон над оком, не торкайтеся до ока і вій.",
                                "Обережно захопивши пальцями нижню повіку, злегка відтягніть його вниз.",
                                "Підніміть очі вгору і злегка стисніть флакон, щоб крапля потрапила в простір, що утворився між очним яблуком і витягнутою нижньою повікою.",
                                "Закрийте очі.",
                                "Для посилення ефективності впливу і зведення до мінімуму системних побічних ефектів очних крапель притисніть вказівним пальцем (через стерильну серветку) внутрішній кут очної щілини.",
                                "При призначенні декількох крапель проміжок між закапуванням повинен складати близько 5 хвилин.",
                                "Закрийте флакон і зберігайте його у відповідності з приписом.",
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            title: "Patient note after cataract surgery",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "BEFORE THE SURGERY",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "You should schedule a preoperative appointment with an ophthalmic surgeon and an anesthesiologist in advance (preferably a week before). It is advisable to bring medical reports from previous examinations or surgeries to the consultation.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ON THE DAY OF SURGERY",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Have a light breakfast, avoiding foods with strong odors (such as onions or garlic).",
                                "Be sure to take all medications you take regularly. The medication regimen remains unchanged on the day of surgery and during the postoperative period.",
                                "After the surgery, your eye will be covered with a protective patch to prevent accidental contamination. You may remove the patch once you arrive home.",
                                "You may clean your eyelids (but not the eye itself) with sterile cotton soaked in a 0.02% aqueous solution of furacilin or a 0.25% aqueous solution of chloramphenicol (available at pharmacies).",
                                "Starting from the first day after surgery, there is no need to keep the eye covered with a patch continuously.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "REHABILITATION PERIOD",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "The following recommendations are general and designed for most patients. In specific cases, your doctor may suggest an individualized treatment plan and follow-up schedule. Please clarify the recommendations during each appointment.",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Regimen. " },
                                    {
                                        value: "Following the recommended regimen after surgery can have a therapeutic effect. Your surgeon or attending physician will advise you on what to do on the first day after surgery. Later, clarify any postoperative restrictions with your doctor.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Hygiene. " },
                                    {
                                        value: "When washing your face, avoid getting soap or water into your eye. When washing your hair, tilt your head backward, not forward. If water gets into the operated eye, rinse it with a 0.02% furacilin solution or a 0.25% chloramphenicol solution (available at pharmacies).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Be sure to visit your doctor on the scheduled day!",
                                    },
                                ],
                                "Eye drops are needed for faster healing and to prevent infections. Typically, the surgeon will prescribe several types of drops — antibiotic drops, anti-inflammatory drops, or combination preparations.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "VISUAL ACUITY IN THE POSTOPERATIVE PERIOD",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Vision recovery occurs gradually. In the first few days after surgery, vision may be blurry due to mild corneal swelling or pupil dilation (which usually resolves within a week). The operated eye’s vision is usually fully restored within one month, so selecting glasses (for monofocal IOL) is recommended after this period. You may have your glasses prescribed locally or at our medical center.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "RULES FOR USING EYE DROPS",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Wash your hands thoroughly.",
                                "Open the bottle.",
                                "Tilt your head back or lie down and look upward.",
                                "Hold the bottle upside down above the eye, without touching the eye or eyelashes.",
                                "Gently pull down your lower eyelid with your fingers.",
                                "Look upward and squeeze the bottle slightly to release one drop into the space between the eyeball and the lower eyelid.",
                                "Close your eyes.",
                                "To enhance absorption and minimize systemic side effects, gently press the inner corner of your eye (through a sterile tissue) with your finger.",
                                "If you are using multiple drops, wait about 5 minutes between each application.",
                                "Close the bottle and store it as directed.",
                            ],
                        },
                    ],
                },
            ],
        },
        ru: {
            title: "Памятки пациента после хирургии катаракты",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРЕД ОПЕРАЦИЕЙ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Записаться на предоперационный приём к офтальмохирургу и анестезиологу необходимо заранее (желательно за неделю). На осмотр желательно принести выписки из предыдущих обследований и операций.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "В ДЕНЬ ОПЕРАЦИИ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                "Съешьте лёгкий завтрак, исключая продукты с резким запахом (лук, чеснок).",
                                "Обязательно примите все препараты, которые вы принимаете регулярно. Режим приёма лекарств в день операции и в послеоперационный период остаётся без изменений.",
                                "После операции глаз заклеивают повязкой, чтобы защитить его от случайного загрязнения. Повязку можно снять, когда приедете домой.",
                                "Веки можно обработать (но не сам глаз) стерильной ватой, смоченной водным раствором фурацилина 0.02% или левомицетина 0.25% (продаются в аптеке).",
                                "Начиная с первого дня после операции, постоянно держать глаз заклеенным не нужно.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПЕРИОД РЕАБИЛИТАЦИИ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Следующие рекомендации являются общими и предназначены для большинства пациентов. В отдельных случаях врач может назначить индивидуальную схему лечения и график визитов. Уточняйте рекомендации на каждом приёме у врача.",
                        },
                        {
                            type: "list",
                            gap: true,
                            list: [
                                [
                                    { bold: true, value: "Режим. " },
                                    {
                                        value: "Соблюдение режима после операции имеет лечебное значение. Хирург или ваш лечащий врач дадут рекомендации, как вести себя в первые сутки после операции. В дальнейшем уточняйте особенности послеоперационного режима у своего врача.",
                                    },
                                ],
                                [
                                    { bold: true, value: "Гигиена. " },
                                    {
                                        value: "Во время умывания избегайте попадания мыла и воды в глаз. При мытье головы наклоняйте голову назад, а не вперёд. Если вода попала в прооперированный глаз, промойте его водным раствором фурацилина 0.02% или левомицетина 0.25% (продаются в аптеке).",
                                    },
                                ],
                                [
                                    {
                                        bold: true,
                                        value: "Обязательно посетите врача в назначенный день!",
                                    },
                                ],
                                "Глазные капли необходимы для быстрого заживления и профилактики инфекционных осложнений. Обычно хирург назначает несколько препаратов: капли с антибиотиком, противовоспалительные или комбинированные средства.",
                            ],
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ОСТРОТА ЗРЕНИЯ В ПОСЛЕОПЕРАЦИОННЫЙ ПЕРИОД",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "text",
                            gap: true,
                            text: "Восстановление зрения происходит постепенно. В первые дни после операции зрение может быть снижено из-за небольшого отёка роговицы или расширенного зрачка (обычно проходит в течение недели). Окончательное восстановление зрения прооперированного глаза наступает примерно через месяц, поэтому подбор очков (при монофокальной ИОЛ) рекомендуется после этого срока. Подобрать очки можно по месту жительства или в нашем медицинском центре.",
                        },

                        {
                            type: "text",
                            text: [
                                {
                                    bold: true,
                                    subtitle: true,
                                    value: "ПРАВИЛА ЗАКАПЫВАНИЯ КАПЕЛЬ",
                                },
                            ],
                            gap: true,
                        },
                        {
                            type: "list",
                            numeric: true,
                            list: [
                                "Тщательно вымойте руки.",
                                "Откройте флакон.",
                                "Запрокиньте голову или лягте на спину и смотрите вверх.",
                                "Держите флакон вверх дном над глазом, не касаясь глаза и ресниц.",
                                "Аккуратно оттяните нижнее веко вниз.",
                                "Посмотрите вверх и слегка сожмите флакон, чтобы капля попала в пространство между глазным яблоком и нижним веком.",
                                "Закройте глаза.",
                                "Чтобы повысить эффективность и снизить системное воздействие, аккуратно прижмите внутренний угол глаза (через стерильную салфетку) пальцем.",
                                "Если назначено несколько видов капель, делайте перерыв около 5 минут между закапываниями.",
                                "Закройте флакон и храните его в соответствии с инструкцией.",
                            ],
                        },
                    ],
                },
            ],
        },
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
            titleSEO:
                "Глаукома - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Глаукома: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
            titleSEO:
                "Glaucoma – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Glaucoma: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
            titleSEO:
                "Глаукома - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Глаукома: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
            titleSEO:
                "Астигматизм - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Астигматизм: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
                        link: "/posluhy/lazerna-korekcziya-zoru",
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
            titleSEO:
                "Astigmatism – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Astigmatism: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
            titleSEO:
                "Астигматизм - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Астигматизм: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
            titleSEO:
                "Далекозорість - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Далекозорість: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
                        link: "/posluhy/lazerna-korekcziya-zoru",
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
            titleSEO:
                "Farsightedness – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Farsightedness: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
            titleSEO:
                "Дальнозоркость - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Дальнозоркость: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
            titleSEO:
                "Катаракта - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Катаракта: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
            title: "Катаракта",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Катаракта – це захворювання, при якому порушується прозорість кришталика, що призводить до зниження гостроти зору. Назва цього захворювання походить від грецького слова katarrháktes, що означає «водоспад». Це з уявленнями древніх лікарів у тому, що захворювання розвивається внаслідок стікання каламутної рідини між райдужкою і кришталиком.",
                        },
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
                        {
                            type: "text",
                            gap: true,
                            text: "У більшості людей зі старечою (віковою) катарактою захворювання розвивається дуже повільно та безболісно протягом багатьох років, і часто початковий діагноз ставиться при звичайному обстеженні у офтальмолога.",
                        },
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
            titleSEO:
                "Cataract – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Cataract: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
            title: "Cataract",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Cataract is a disease in which the transparency of the crystalline lens is affected, resulting in decreased visual acuity. The name of the disease comes from the Greek word katarrháktes, which means “waterfall. This is due to the belief of ancient healers that the disease develops due to the flow of turbid fluid between the iris and the lens.",
                        },
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
                        {
                            type: "text",
                            gap: true,
                            text: "Most people with senile (age-related) cataracts develop the disease very slowly and painlessly over many years, and often the initial diagnosis is made during a routine examination by an ophthalmologist.",
                        },
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
            titleSEO:
                "Катаракта - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Катаракта: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
            title: "Катаракта",
            content: [
                {
                    text: [
                        {
                            type: "text",
                            gap: true,
                            text: "Катаракта — это заболевание, при котором нарушается прозрачность хрусталика, что приводит к снижению остроты зрения. Название этого заболевания произошло от греческого слова katarrháktes, что означает «водопад». Это связано с представлениями древних врачевателей о том, что заболевание развивается вследствие стекания мутной жидкости между радужкой и хрусталиком.",
                        },
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
                        {
                            type: "text",
                            gap: true,
                            text: "У большинства людей со старческой (возрастной) катарактой заболевание развивается очень медленно и безболезненно на протяжении многих лет, и часто первоначальный диагноз ставится при обычном обследовании у офтальмолога.",
                        },
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
            titleSEO:
                "Короткозорість, міопія - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Короткозорість, міопія: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
                        link: "/posluhy/lazerna-korekcziya-zoru",
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
            titleSEO:
                "Myopia – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Myopia: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
            titleSEO:
                "Близорукость, миопия - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Близорукость, миопия: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
            titleSEO:
                "Косоокість - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Косоокість: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
                    ],
                },
                {
                    text: [
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
            titleSEO:
                "Strabismus – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Strabismus: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
                    ],
                },
                {
                    text: [
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
            titleSEO:
                "Косоглазие - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Косоглазие: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
            titleSEO:
                "Пресбіопія - симптоми, причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Пресбіопія: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
            titleSEO:
                "Presbyopia – Symptoms, Causes, and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Presbyopia: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
            titleSEO:
                "Пресбиопия - симптомы, причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Пресбиопия: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
            titleSEO:
                "Симптоми захворювання очей - причини та лікування | Британський офтальмологічний центр | EYES",
            descriptionSEO:
                "➔ Симптоми захворювання очей: основні фактори виникнення та сучасні підходи до ефективного лікування ✅ Інформація від провідних офтальмологів Києва ✅ Сучасна діагностика та ефективне лікування 👍 Перевірений досвід і бездоганна репутація ☎️ 0 800 507 077",
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
            titleSEO:
                "Eye Disease Symptoms – Causes and Treatment | British Ophthalmology Center | EYES",
            descriptionSEO:
                "➔ Eye disease symptoms: main causes and modern approaches to effective treatment ✅ Information from leading ophthalmologists in Kyiv ✅ Modern diagnostics and effective treatment 👍 Proven experience and impeccable reputation ☎️ 0 800 507 077",
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
            titleSEO:
                "Симптомы заболевания глаз - причины и лечение | Британский офтальмологический центр | EYES",
            descriptionSEO:
                "➔ Симптомы заболевания глаз: основные факторы возникновения и современные подходы к эффективному лечению ✅ Информация от ведущих офтальмологов Киева ✅ Современная диагностика и эффективное лечение 👍 Проверенный опыт и безупречная репутация ☎️ 0 800 507 077",
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
    key: InstructionsSulgType | EyeDiseaseSlugType;
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
export type DepartType = {
    title: string;
    listLab: { title: string; list: string[] };
    listResult: { title: string; list: string[] };
};

export type BeforeSurgeryInstructionType = {
    firstText: string;
    analysisCard: string;
    attentionCardTitle: string;
    attentionCard: string;
    secondTitle: string;
    secondText: string;
    greenText: string;
    adultDepart: DepartType;
    childDepart: DepartType;
};

export const beforeSurgeryInstruction: {
    uk: BeforeSurgeryInstructionType;
    en: BeforeSurgeryInstructionType;
    ru: BeforeSurgeryInstructionType;
} = {
    uk: {
        firstText:
            "Перед мікрохірургічним втручанням необхідний перелік лабораторних аналізів та додаткових обстежень вирішує лікар-анестезіолог за наявними супутніми патологіями (прохання мати з собою амбулаторну картку, попередні обстеження, епікризи, виписки)",
        analysisCard:
            "Аналізи при проведенні лазерної корекції зору, лазерної коагуляції і кросслінкінг не потрібні!",
        attentionCardTitle: "до уваги",
        attentionCard:
            "Обов'язковий огляд лікаря-анестезіолога і оцінка результатів обстеження не пізніше, ніж за 12 годин до операції.",
        secondTitle: "Список необхідних аналізів для операції",
        secondText:
            "При самостійній підготовці до операції на момент передопераційної консультації при хірургічному лікуванні: катаракти (факоемульсифікація, рефракційна заміна кришталика), глаукоми, виправлення косоокості, вітреоретінальні і інші мікрохірургічні операції при собі необхідно мати:",
        greenText:
            "Клінічні аналізи крові і сечі дійсні протягом 14 днів від моменту дослідження, за умови, що не було гострих інфекційних захворювань в цей період. ЕКГ і висновок терапевта – 1 місяць, флюорографія або рентгенографія, КТ, МРТ органів грудної клітки – на протязі року.",
        adultDepart: {
            title: "доросле відділення",
            listLab: {
                title: "Лабораторні та інструментальні дослідження:",
                list: [
                    "клінічний аналіз крові;",
                    "аналіз крові на глюкозу (цукор);",
                    "аналіз крові на RW;",
                    "Гепатит В (HBsAg) і гепатит С (HCV IgM)",
                    "клінічний аналіз сечі;",
                    "електрокардіограма (ЕКГ);",
                    "флюорографія або рентгенографія, КТ, МРТ органів грудної клітки;",
                ],
            },
            listResult: {
                title: "Висновки фахівців:",
                list: [
                    "огляд терапевта або сімейного лікаря з висновком про наявність супутньої патології та допуск до операції;",
                    "консультація ЛОР (при наявності патології);",
                    "консультація стоматолога (при наявності патології);",
                ],
            },
        },
        childDepart: {
            title: "дитяче відділення",
            listLab: {
                title: "Лабораторні та інструментальні дослідження:",
                list: [
                    "клінічний аналіз крові;",
                    "аналіз крові на глюкозу (цукор);",
                    "клінічний аналіз сечі;",
                    "електрокардіограма (ЕКГ) і УЗД серця (Ехо КС);",
                    "флюорографія або рентгенографія, КТ, МРТ органів грудної клітки (при наявності патології);",
                ],
            },
            listResult: {
                title: "Висновки фахівців:",
                list: [
                    "огляд педіатра з висновком про наявність супутньої патології та допуск до операції;",
                    "консультація ЛОР (при наявності патології);",
                    "консультація стоматолога (при наявності патології);",
                ],
            },
        },
    },
    en: {
        firstText:
            "Before microsurgical intervention, the list of required laboratory tests and additional examinations is determined by the anesthesiologist, depending on existing comorbidities (please bring your outpatient card, previous test results, medical reports, and discharge summaries).",
        analysisCard:
            "No tests are required for laser vision correction, laser coagulation, or cross-linking procedures!",
        attentionCardTitle: "attention",
        attentionCard:
            "A mandatory anesthesiologist examination and evaluation of test results must be performed no later than 12 hours before surgery.",
        secondTitle: "List of necessary tests before surgery",
        secondText:
            "If you are preparing for surgery on your own, at the time of the preoperative consultation for surgical treatments such as cataract surgery (phacoemulsification, refractive lens exchange), glaucoma, strabismus correction, vitreoretinal and other microsurgical procedures, you must have with you:",
        greenText:
            "Clinical blood and urine tests are valid for 14 days from the date of the test, provided there were no acute infectious diseases during this period. ECG and therapist’s report – valid for 1 month. Fluorography, chest X-ray, CT, or MRI – valid for 1 year.",
        adultDepart: {
            title: "adult department",
            listLab: {
                title: "Laboratory and instrumental examinations:",
                list: [
                    "complete blood count;",
                    "blood glucose test;",
                    "RW (syphilis) blood test;",
                    "Hepatitis B (HBsAg) and Hepatitis C (HCV IgM);",
                    "urinalysis;",
                    "electrocardiogram (ECG);",
                    "fluorography or chest X-ray, CT, MRI;",
                ],
            },
            listResult: {
                title: "Specialist conclusions:",
                list: [
                    "examination by a therapist or family doctor with a report on comorbidities and fitness for surgery;",
                    "ENT consultation (if pathology is present);",
                    "dentist consultation (if pathology is present);",
                ],
            },
        },
        childDepart: {
            title: "children’s department",
            listLab: {
                title: "Laboratory and instrumental examinations:",
                list: [
                    "complete blood count;",
                    "blood glucose test;",
                    "urinalysis;",
                    "electrocardiogram (ECG) and heart ultrasound (EchoCG);",
                    "fluorography or chest X-ray, CT, MRI (if pathology is present);",
                ],
            },
            listResult: {
                title: "Specialist conclusions:",
                list: [
                    "examination by a pediatrician with a report on comorbidities and fitness for surgery;",
                    "ENT consultation (if pathology is present);",
                    "dentist consultation (if pathology is present);",
                ],
            },
        },
    },
    ru: {
        firstText:
            "Перед микрохирургическим вмешательством необходимый перечень лабораторных анализов и дополнительных обследований определяет врач-анестезиолог с учетом имеющихся сопутствующих заболеваний (просим иметь при себе амбулаторную карту, предыдущие обследования, эпикризы, выписки).",
        analysisCard:
            "Анализы при проведении лазерной коррекции зрения, лазерной коагуляции и кросслинкинга не требуются!",
        attentionCardTitle: "внимание",
        attentionCard:
            "Обязателен осмотр врача-анестезиолога и оценка результатов обследований не позднее чем за 12 часов до операции.",
        secondTitle: "Список необходимых анализов для операции",
        secondText:
            "При самостоятельной подготовке к операции на момент предоперационной консультации при хирургическом лечении: катаракты (факоэмульсификация, рефракционная замена хрусталика), глаукомы, исправления косоглазия, витреоретинальных и других микрохирургических операций необходимо иметь при себе:",
        greenText:
            "Клинические анализы крови и мочи действительны в течение 14 дней с момента исследования, при условии отсутствия острых инфекционных заболеваний в этот период. ЭКГ и заключение терапевта – 1 месяц, флюорография или рентгенография, КТ, МРТ органов грудной клетки – в течение года.",
        adultDepart: {
            title: "взрослое отделение",
            listLab: {
                title: "Лабораторные и инструментальные исследования:",
                list: [
                    "клинический анализ крови;",
                    "анализ крови на глюкозу (сахар);",
                    "анализ крови на RW;",
                    "гепатит B (HBsAg) и гепатит C (HCV IgM);",
                    "клинический анализ мочи;",
                    "электрокардиограмма (ЭКГ);",
                    "флюорография или рентгенография, КТ, МРТ органов грудной клетки;",
                ],
            },
            listResult: {
                title: "Заключения специалистов:",
                list: [
                    "осмотр терапевта или семейного врача с заключением о сопутствующих заболеваниях и допуском к операции;",
                    "консультация ЛОР (при наличии патологии);",
                    "консультация стоматолога (при наличии патологии);",
                ],
            },
        },
        childDepart: {
            title: "детское отделение",
            listLab: {
                title: "Лабораторные и инструментальные исследования:",
                list: [
                    "клинический анализ крови;",
                    "анализ крови на глюкозу (сахар);",
                    "клинический анализ мочи;",
                    "электрокардиограмма (ЭКГ) и УЗИ сердца (ЭхоКГ);",
                    "флюорография или рентгенография, КТ, МРТ органов грудной клетки (при наличии патологии);",
                ],
            },
            listResult: {
                title: "Заключения специалистов:",
                list: [
                    "осмотр педиатра с заключением о сопутствующих заболеваниях и допуском к операции;",
                    "консультация ЛОР (при наличии патологии);",
                    "консультация стоматолога (при наличии патологии);",
                ],
            },
        },
    },
};
