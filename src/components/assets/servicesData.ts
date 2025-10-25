import { ServicesKeyType, servicesList, ServicesListProps } from "./menu";
import { PriceItemType, priceList } from "./priceList";

export type SectionType =
    | { type: "preview"; data: PreviewProps }
    | { type: "roundImageAndTextSection"; data: RoundImageAndTextProps[] }
    | { type: "numberListSection"; data: NumberListProps }
    | { type: "methodsSection"; data: MethodsSectionProps }
    | { type: "greenSliderSection"; data: GreenSliderSectionProps }
    | { type: "advantages"; data: AdvantageServiceSectionProps }
    | { type: "cta" }
    | { type: "priceSection"; data: PriceSectionProps }
    | { type: "doctors" }
    | { type: "giftCTA" }
    | { type: "hero"; data: HeroSomeServiceProps };

export type ServicesLocaleProps = {
    textMain?: string;
    sections?: SectionType[];
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
    fractionUp?: boolean;
    title: string;
    text?: string[];
    textUp?: string;
    textDown?: string;
    image?: string;
};

export type MethodCardProps = {
    image: string;
    link: string;
    title: string;
    text: string;
};
export type MethodsSectionProps = {
    title: string;
    text?: string;
    greenText?: string;
    list: MethodCardProps[];
};

export type RoundTextType = {
    list?: boolean;
    textBeforeList?: string;
    greenText?: string;
    content?: string[];
};
export type BtnType = {
    btnName: string;
    btnLink: string;
    btnSecondary?: boolean;
};
export type RoundImageAndTextProps = {
    title: string;
    image: string;
    imagePosition?: "object-left" | "object-right";
    text: RoundTextType[];
    btn?: BtnType[];
};

export type NumberListItemType = {
    itemTitle: string;
    itemText: string[];
    list?: boolean;
};

export type NumberListProps = {
    paddingTop?: boolean;
    paddingBottom?: boolean;
    image?: string;
    title?: string;
    text?: string[];
    listTitle: string;
    list: NumberListItemType[];
    pdfCard?: {
        title: string;
        description?: string;
        link: string;
        btnName: string;
    };
};
export type TitleTextType = { title: string; text: string };

export type GreenSliderSectionProps = {
    title: string;
    text: string;
    btn?: BtnType;
    slider: TitleTextType[];
};

export type AdvantageServiceCardProps =
    | {
          title: string;
          text: string;
          bgTransparent?: boolean;
          imageOnly?: never;
          videoOnly?: never;
      }
    | {
          imageOnly: string;
          title?: never;
          text?: never;
          bgTransparent?: never;
          videoOnly?: never;
      }
    | {
          videoOnly: string;
          title?: never;
          text?: never;
          bgTransparent?: never;
          imageOnly?: never;
      };

export type AdvantageServiceSectionProps = {
    paddingTop?: boolean;
    paddingBottom?: boolean;
    title: string;
    text: string;
    list: AdvantageServiceCardProps[];
};
export type DiscountText = {
    premiumText?: string; // max 58 characters with spaces
    title: string;
    text?: string;
};

export type DiscountType = {
    premium?: boolean;
    icon?: string;
    bgimage?: string;
    cost?: number;
    period?: string;
    text: DiscountText;
};

export type PriceSectionProps = {
    title: string;
    card?: DiscountType;
};

export type HeroSomeServiceProps = {
    title: string;
    text?: string;
    video?: string;
    image?: string;
    adress?: boolean;
    imgPositionMobile?: string; // наприклад: "calc(50% - 80px) top"
    imgPositionDesktop?: string;
};

export const servicesData: ServicesProps[] = [
    {
        name: servicesList.find(s => s.key === "perevirka-zoru")!,
        price: findPriceItem("perevirka-zoru")!,
        uk: {
            textMain:
                "Комплексне обстеження та перевірка зору з використанням сучасного обладнання.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "діагностика зору",
                        text: "Багаторічний досвід наших спеціалістів та сучасне діагностичне обладнання дозволяють виявити будь-які зміни та діагностувати очну патологію.",
                        image: "/images/perevirka-zoru-hero.jpg",
                        imgPositionDesktop: "right -200px top -140px",
                    },
                },
                {
                    type: "preview",
                    data: {
                        fractionUp: true,
                        title: "Сучасне обстеження зору щодо стандартів ЄС",
                        text: [
                            "Діагностика проводиться з використанням високоточного обладнання, яке відповідає нормам Євросоюзу. Це дозволяє отримати об'єктивні дані про стан органів зору та підібрати максимально ефективне лікування як хірургічне, так і консервативне.",
                            "Розшифровкою результатів займається офтальмолог найвищої кваліфікаційної категорії. Всі рекомендації лікар пояснює у зрозумілій формі, щоб пацієнт міг повністю усвідомити суть діагнозу та можливі варіанти терапії.",
                        ],
                        image: "/images/perevirka-zoru-preview.jpg",
                        textUp: "5 млн",
                        textDown: "консультацій \nпроведено",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: [
                        {
                            title: "Повна діагностика зору включає",
                            image: "/images/perevirka-round.jpg",
                            text: [
                                {
                                    list: true,
                                    textBeforeList:
                                        "Під час повного обстеження зору виконуються:",
                                    content: [
                                        "вимірювання параметрів ока на цифрових приладах;",
                                        "аналіз медичної документації;",
                                        "спеціальні діагностичні тести для кожного ока окремо та у поєднаному режимі;",
                                        "мікроскопічний огляд анатомічних структур ока із застосуванням сильного збільшення.",
                                    ],
                                },
                                {
                                    content: [
                                        "Для перевірки гостроти зору використовуються класичні таблиці з літерами чи символами, що розташовані на різній відстані. Це допомагає визначити ступінь короткозорості, далекозорості або наявність астигматизму та підібрати відповідні лінзи.",
                                        "Під час діагностики можуть використовуватися краплі для розширення зіниць. Вони тимчасово блокують роботу акомодаційного м'яза, дозволяючи точніше оцінити рефракцію ока та уважно вивчити стан очного дна.",
                                        "Весь процес обстеження проходить у щадному та комфортному форматі, не вимагає контакту з поверхнею ока та підходить як дорослим, так і дітям.",
                                    ],
                                },
                            ],
                            // btn: [
                            //     {
                            //         btnName: "дізнатись ціну",
                            //         btnLink: "/tsiny",
                            //         btnSecondary: true,
                            //     },
                            //     {
                            //         btnName: "запис на консультацію",
                            //         btnLink: "#booking",
                            //     },
                            // ],
                        },
                        {
                            title: "Регулярна перевірка зору – основа профілактики захворювань",
                            image: "/images/choice.jpg",
                            text: [
                                {
                                    content: [
                                        "Періодична діагностика очей потрібна кожному, хто піклується про своє здоров'я. Це не просто спосіб зберегти добрий зір, а й ефективний метод раннього виявлення різних патологій, у тому числі тих, які не пов'язані безпосередньо з органами зору.",
                                        "Під час обстеження офтальмолог може виявити ознаки загальних захворювань, оскільки стан судин сітківки відбиває роботу серцево-судинної системи. Очі — один із небагатьох органів, за якими можна отримати інформацію про вени та артерії без складних процедур.",
                                        "Навіть за відсутності скарг важливо не пропускати профілактичних оглядів. Деякі порушення розвиваються потай і не проявляють себе на ранніх стадіях. Тільки регулярний контроль дозволяє своєчасно помітити зміни та запобігти погіршенню зору.",
                                    ],
                                },
                                {
                                    greenText:
                                        "Оптимальна частота відвідування офтальмолога – один раз на рік. Це правило актуальне навіть для тих, хто не має проблем із зором. Профілактика завжди ефективніша, ніж лікування - особливо коли йдеться про очі.",
                                },
                            ],
                            // btn: [
                            //     {
                            //         btnName: "запис на консультацію",
                            //         btnLink: "#booking",
                            //     },
                            // ],
                        },
                    ],
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        image: "/images/choice.jpg",
                        title: "Комп'ютерна діагностика зору: навіщо проводиться та як проходить процедура",
                        text: [
                            "Перед тим, як вибрати відповідний метод корекції порушень зору, важливо пройти детальне обстеження. ",
                            "Одним із найбільш ефективних і щадних способів сьогодні вважається комп'ютерна діагностика.",
                            "Цей метод забезпечує точну оцінку стану зорової системи без болючих відчуттів і займає мінімум часу.",
                        ],
                        listTitle: "Як проходить комп'ютерна діагностика зору",
                        list: [
                            {
                                itemTitle:
                                    "Запис на прийом та підготовка до діагностики",
                                itemText: [
                                    "Записатись на діагностику зору можна всього за кілька хвилин телефоном або онлайн на сайті.",
                                    "Спеціальної підготовки не потрібно, але якщо носите м’які контактні лінзи, зніміть їх з вечора (рекомендовано за 12 годин до візиту). Окуляри необхідно взяти з собою для перевірки, а також офтальмологічні обстеження, які проходили раніше – лікар подивиться в динаміці, що змінилося за останній період. Бажано бути не за кермом, тому що буде незначний зоровий дискомфорт деякий час (зір поблизу буде не чітким).",
                                ],
                            },
                            {
                                itemTitle: "Комп’ютерна діагностика зору",
                                itemText: [
                                    "Саме обстеження відбувається швидко та комфортно. Використовуються прецизійні прилади, мікроскопічні методи візуалізації та адаптовані діагностичні тести, які лікар підбирає залежно від конкретної клінічної ситуації.",
                                    "Тривалість діагностики складає 2-2,5 години. Один із найважливіших етапів обстеження — перевірка гостроти зору. Для цього пацієнт читає знаки або літери на таблицях, що розташовані на різних відстанях. Такі тести допомагають точно визначити ступінь порушення та правильно підібрати лінзи чи окуляри.",
                                    "У ряді випадків лікар може використовувати краплі для розширення зіниць. Це необхідно, щоб тимчасово виключити вплив акомодаційної функції ока та отримати точніші дані при дослідженні очного дна.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Висновок за результатами обстеження",
                                itemText: [
                                    "Після проходження діагностики ви отримаєте офіційний протокол із оцінкою всіх параметрів зору та очного здоров'я. Лікар надасть рекомендації щодо подальших дій — від профілактики до конкретного плану лікування.",
                                    "Якщо планується хірургічне втручання, то його обговорення стане ключовою частиною консультації. Усі важливі питання слід поставити та прояснити до моменту операції, щоб ухвалити виважене рішення.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Комплексне обстеження зору: які \nтести проводять",
                        text: "Під час діагностики очей виконується ціла низка досліджень, спрямованих на всебічну оцінку стану зорової системи:",
                        btn: {
                            btnName: "записатися на прийом",
                            btnLink: "#booking",
                        },
                        slider: [
                            {
                                title: "Візіометрія",
                                text: "Вимірюється гострота зору вдалині з використанням таблиць, що містять символи, цифри або літери. Це базовий тест, з якого починається перевірка зору.",
                            },
                            {
                                title: "Тонометрія",
                                text: "Вимірюється рівень внутрішньоочного тиску. Його підвищення може свідчити про розвиток глаукоми - одного з найсерйозніших захворювань очей.",
                            },
                            {
                                title: "Рефрактометрія",
                                text: "За допомогою авторефрактометра визначається заломлююча сила ока. Це дозволяє виявити такі порушення, як міопія, гіперметропія та астигматизм. Результати допомагають підібрати стратегію лікування – від консервативної терапії до лазерної корекції.",
                            },
                            {
                                title: "Біометрія",
                                text: "Проводиться точний вимір параметрів очного яблука: глибина передньої камери, товщина кришталика, довжина ока та об'єм склоподібного тіла. Процедура безконтактна, займає лічені секунди та виконується на сучасній оптичній техніці. Необхідна, зокрема, під час підбору інтраокулярної лінзи.",
                            },
                            {
                                title: "Пахіметрія",
                                text: "Сканується товщина рогівки — за допомогою світлового або ультразвукового приладу. Метод необхідний перед виконанням рефракційної хірургії та у реабілітаційний період після неї.",
                            },
                            {
                                title: "Кератотопографія",
                                text: "Визначається форма та кривизна рогівки шляхом аналізу відображеного зображення. Цей тест дозволяє виявити патології поверхні рогівки та контролювати її стан.",
                            },
                            {
                                title: "Периметрія",
                                text: "Дослідження поля зору дозволяє визначити, яку частину простору людина охоплює поглядом при нерухомій голові та фіксованому погляді. Метод широко застосовується для діагностики глаукоми, уражень зорового нерва та захворювань сітківки.",
                            },
                            {
                                title: "Біомікроскопія",
                                text: "Даний метод дає можливість ретельно вивчити передні відділи ока – такі як рогівка, райдужна оболонка, кришталик – з використанням щілинної лампи. Це спеціалізований мікроскоп, який забезпечує високу деталізацію та допомагає виявити навіть незначні зміни у структурі тканин.",
                            },
                            {
                                title: "фундус-лінзою",
                                text: "За допомогою спеціальної лінзи лікар отримує доступ до сітківки, макулярної зони та судинної системи ока. Це важливий етап у діагностиці офтальмологічних та системних порушень. Процедура проводиться з використанням крапель і зазвичай не викликає дискомфорту завдяки місцевій анестезії.",
                            },
                            {
                                title: "Діоптриметрія",
                                text: "В рамках цього дослідження визначається оптична сила окулярів, які використовує пацієнт: вимірюються діоптрії, циліндри та інші параметри. Це допомагає оцінити, наскільки ефективно вони коригують зір і чи потрібна заміна чи коригування рецепту.",
                            },
                        ],
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Переваги комп'ютерного обстеження очей",
                        text: "У нашій офтальмологічній клініці у Києві діагностика проводиться із застосуванням передових технологій та обладнання, сертифікованого за стандартами ЄС.",
                        list: [
                            {
                                title: "точний діагноз",
                                text: "Цифрові методи дозволяють максимально точно визначити ключові параметри апарата очей.",
                            },
                            {
                                title: "комплексний підхід",
                                text: "Цифрові методи дозволяють провести глибоку аналітичну обробку отриманих даних",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "індивідуальне лікування",
                                text: "Цифрові методи дозволяють підібрати персоналізований курс лікування – від класичної терапії до лазерної корекції чи хірургічного втручання.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на консультацію та діагностику зору у Києві",
                        card: {
                            cost: 950,
                            period: "15.08.2025",
                            text: {
                                title: "Повне комплексне обстеження зору",
                            },
                        },
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "Comprehensive examination and vision test using modern equipment.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "eye diagnostics",
                        text: "The extensive experience of our specialists and modern diagnostic equipment allow us to detect any changes and diagnose eye conditions.",
                        image: "/images/perevirka-zoru-hero.jpg",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Modern eye examination according to EU standards",
                        text: [
                            "Diagnostics is carried out using high-precision equipment that meets European Union standards. This allows you to obtain objective data on the condition of the eyes and select the most effective treatment, both surgical and conservative.",
                            "The results are interpreted by an ophthalmologist of the highest qualification category. The doctor explains all recommendations in an understandable form so that the patient can fully understand the essence of the diagnosis and possible treatment options.",
                        ],
                        image: "/images/perevirka-zoru-preview.jpg",
                        textUp: "5 m",
                        textDown: "consultations \nheld",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: [
                        {
                            title: "Comprehensive vision diagnostics include",
                            image: "/images/perevirka-round.jpg",
                            text: [
                                {
                                    list: true,
                                    textBeforeList:
                                        "During a complete eye examination, the following procedures are performed:",
                                    content: [
                                        "measurement of eye parameters using digital devices;",
                                        "analysis of medical documentation;",
                                        "special diagnostic tests for each eye separately and in combined mode;",
                                        "microscopic examination of the eye’s anatomical structures using high magnification.",
                                    ],
                                },
                                {
                                    content: [
                                        "To check visual acuity, classic charts with letters or symbols placed at different distances are used. This helps determine the degree of myopia, hyperopia, or astigmatism and select the appropriate lenses.",
                                        "During diagnostics, eye drops may be used to dilate the pupils. They temporarily block the accommodation muscle, allowing a more accurate assessment of the eye’s refraction and a detailed examination of the retina.",
                                        "The entire examination process is gentle and comfortable, requires no contact with the eye surface, and is suitable for both adults and children.",
                                    ],
                                },
                            ],
                            // btn: [
                            //     {
                            //         btnName: "find out the price",
                            //         btnLink: "/tsiny",
                            //         btnSecondary: true,
                            //     },
                            //     {
                            //         btnName: "appointment booking",
                            //         btnLink: "#booking",
                            //     },
                            // ],
                        },
                        {
                            title: "Regular eye exams — the foundation of disease prevention",
                            image: "/images/choice.jpg",
                            text: [
                                {
                                    content: [
                                        "Periodic eye diagnostics are essential for anyone who cares about their health. It’s not just a way to maintain good vision but also an effective method for early detection of various pathologies, including those not directly related to the eyes.",
                                        "During an examination, an ophthalmologist can detect signs of general diseases since the condition of the retinal vessels reflects the state of the cardiovascular system. The eyes are one of the few organs through which information about veins and arteries can be obtained without complex procedures.",
                                        "Even in the absence of symptoms, it’s important not to skip preventive check-ups. Some disorders develop silently and do not manifest in the early stages. Only regular monitoring allows timely detection of changes and helps prevent vision deterioration.",
                                    ],
                                },
                                {
                                    greenText:
                                        "The optimal frequency of visiting an ophthalmologist is once a year. This rule applies even to those with no vision problems. Prevention is always more effective than treatment — especially when it comes to the eyes.",
                                },
                            ],
                            // btn: [
                            //     {
                            //         btnName: "appointment booking",
                            //         btnLink: "#booking",
                            //     },
                            // ],
                        },
                    ],
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        image: "/images/choice.jpg",
                        title: "Computer Vision Diagnostics: Why It’s Done and How the Procedure Works",
                        text: [
                            "Before choosing the appropriate method of vision correction, it’s important to undergo a detailed examination.",
                            "One of the most effective and gentle methods today is considered to be computer-based eye diagnostics.",
                            "This method provides an accurate assessment of the visual system’s condition without any pain and takes minimal time.",
                        ],
                        listTitle: "How Computer Vision Diagnostics Works",
                        list: [
                            {
                                itemTitle:
                                    "Booking an Appointment and Preparing for the Diagnostics",
                                itemText: [
                                    "You can schedule an eye diagnostics appointment in just a few minutes by phone or online through the website.",
                                    "No special preparation is required, but if you wear soft contact lenses, remove them the night before (it’s recommended to do so at least 12 hours before your visit). Bring your glasses for testing, as well as any previous ophthalmologic reports — the doctor will assess changes over time. It’s advisable not to drive afterward, as there may be slight visual discomfort for a short period (near vision may become blurry).",
                                ],
                            },
                            {
                                itemTitle:
                                    "Computer Vision Diagnostics Procedure",
                                itemText: [
                                    "The examination itself is quick and comfortable. Precision instruments, microscopic visualization methods, and adaptive diagnostic tests are used, selected by the doctor depending on the specific clinical situation.",
                                    "The diagnostics take about 2–2.5 hours. One of the key stages of the examination is visual acuity testing. The patient reads symbols or letters on charts placed at different distances. These tests help accurately determine the degree of impairment and select the correct lenses or glasses.",
                                    "In some cases, the doctor may use eye drops to dilate the pupils. This is necessary to temporarily eliminate the effect of eye accommodation and obtain more accurate data when examining the retina.",
                                ],
                            },
                            {
                                itemTitle: "Results and Conclusions",
                                itemText: [
                                    "After the diagnostics, you will receive an official report with an assessment of all visual parameters and eye health. The doctor will provide recommendations for further actions — from prevention to a specific treatment plan.",
                                    "If surgical intervention is planned, discussing it will be a key part of the consultation. All important questions should be clarified before the operation to make an informed decision.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Comprehensive Eye Examination: What Tests Are Performed",
                        text: "During an eye diagnosis, a number of tests are performed to thoroughly assess the condition of the visual system:",
                        btn: {
                            btnName: "make an appointment",
                            btnLink: "#booking",
                        },
                        slider: [
                            {
                                title: "Visiometry",
                                text: "Visual acuity at distance is measured using charts with symbols, numbers, or letters. This is a basic test that starts any vision check-up.",
                            },
                            {
                                title: "Tonometry",
                                text: "The level of intraocular pressure is measured. Its increase may indicate the development of glaucoma — one of the most serious eye diseases.",
                            },
                            {
                                title: "Refractometry",
                                text: "An autorefractometer determines the eye’s refractive power. This helps detect such disorders as myopia, hypermetropia, and astigmatism. The results help select the optimal treatment strategy — from conservative therapy to laser correction.",
                            },
                            {
                                title: "Biometry",
                                text: "Precise measurements of the eyeball parameters are performed: anterior chamber depth, lens thickness, eye length, and vitreous body volume. The procedure is contactless, takes just a few seconds, and is carried out using modern optical equipment. It is essential, in particular, for intraocular lens selection.",
                            },
                            {
                                title: "Pachymetry",
                                text: "The corneal thickness is scanned using light or ultrasound devices. This method is necessary before refractive surgery and during the postoperative rehabilitation period.",
                            },
                            {
                                title: "Keratotopography",
                                text: "The shape and curvature of the cornea are determined by analyzing reflected images. This test helps detect corneal surface pathologies and monitor its condition.",
                            },
                            {
                                title: "Perimetry",
                                text: "A visual field test determines what part of the space a person can see with a fixed gaze and stationary head. The method is widely used to diagnose glaucoma, optic nerve damage, and retinal diseases.",
                            },
                            {
                                title: "Biomicroscopy",
                                text: "This method allows for a detailed examination of the anterior parts of the eye — such as the cornea, iris, and lens — using a slit lamp. This specialized microscope provides high detail and helps detect even minor tissue structure changes.",
                            },
                            {
                                title: "Fundus Lens",
                                text: "Using a special lens, the doctor gains access to the retina, macular area, and vascular system of the eye. This is an important stage in diagnosing ophthalmic and systemic disorders. The procedure is performed with eye drops and usually causes no discomfort thanks to local anesthesia.",
                            },
                            {
                                title: "Dioptrometry",
                                text: "This test determines the optical power of the glasses the patient uses: diopters, cylinders, and other parameters are measured. It helps evaluate how effectively they correct vision and whether a replacement or prescription adjustment is needed.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for consultation and vision diagnostics in Kyiv",
                        card: {
                            cost: 950,
                            period: "15.08.2025",
                            text: {
                                title: "Full comprehensive eye examination",
                            },
                        },
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Комплексное обследование и проверка зрения с использованием современного оборудования.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "диагностика зрения",
                        text: "Многолетний опыт наших специалистов и современное диагностическое оборудование позволяют выявить любые изменения и диагностировать заболевания глаз.",
                        image: "/images/perevirka-zoru-hero.jpg",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Современное обследование зрения по стандартам ЕС",
                        text: [
                            "Диагностика проводится с использованием высокоточного оборудования, которое соответствует нормам Евросоюза. Это позволяет получить объективные данные о состоянии органов зрения и подобрать максимально эффективное лечение как хирургическое, так и консервативное.",
                            "Расшифровкой результатов занимается офтальмолог высшей квалификационной категории. Все рекомендации врач объясняет в понятной форме, чтобы пациент мог полностью осознать суть диагноза и возможные варианты терапии.",
                        ],
                        image: "/images/perevirka-zoru-preview.jpg",
                        textUp: "5 млн",
                        textDown: "консультаций \nпроведено",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: [
                        {
                            title: "Полная диагностика зрения включает",
                            image: "/images/perevirka-round.jpg",
                            text: [
                                {
                                    list: true,
                                    textBeforeList:
                                        "Во время полного обследования зрения выполняются:",
                                    content: [
                                        "измерение параметров глаза на цифровых приборах;",
                                        "анализ медицинской документации;",
                                        "специальные диагностические тесты для каждого глаза отдельно и в сочетанном режиме;",
                                        "микроскопический осмотр анатомических структур глаза с использованием сильного увеличения.",
                                    ],
                                },
                                {
                                    content: [
                                        "Для проверки остроты зрения используются классические таблицы с буквами или символами, расположенными на разном расстоянии. Это помогает определить степень близорукости, дальнозоркости или наличие астигматизма и подобрать подходящие линзы.",
                                        "Во время диагностики могут применяться капли для расширения зрачков. Они временно блокируют работу аккомодационной мышцы, что позволяет точнее оценить рефракцию глаза и внимательно изучить состояние глазного дна.",
                                        "Весь процесс обследования проходит в щадящем и комфортном формате, не требует контакта с поверхностью глаза и подходит как взрослым, так и детям.",
                                    ],
                                },
                            ],
                            // btn: [
                            //     {
                            //         btnName: "узнать цену",
                            //         btnLink: "/tsiny",
                            //         btnSecondary: true,
                            //     },
                            //     {
                            //         btnName: "запись на консультацию",
                            //         btnLink: "#booking",
                            //     },
                            // ],
                        },
                        {
                            title: "Регулярная проверка зрения — основа профилактики заболеваний",
                            image: "/images/choice.jpg",
                            text: [
                                {
                                    content: [
                                        "Периодическая диагностика глаз необходима каждому, кто заботится о своем здоровье. Это не просто способ сохранить хорошее зрение, но и эффективный метод раннего выявления различных патологий, включая те, которые не связаны напрямую с органами зрения.",
                                        "Во время обследования офтальмолог может выявить признаки общих заболеваний, так как состояние сосудов сетчатки отражает работу сердечно-сосудистой системы. Глаза — один из немногих органов, по которым можно получить информацию о венах и артериях без сложных процедур.",
                                        "Даже при отсутствии жалоб важно не пропускать профилактические осмотры. Некоторые нарушения развиваются скрыто и не проявляют себя на ранних стадиях. Только регулярный контроль позволяет вовремя заметить изменения и предотвратить ухудшение зрения.",
                                    ],
                                },
                                {
                                    greenText:
                                        "Оптимальная частота посещения офтальмолога — один раз в год. Это правило актуально даже для тех, у кого нет проблем со зрением. Профилактика всегда эффективнее лечения — особенно когда речь идет о глазах.",
                                },
                            ],
                            // btn: [
                            //     {
                            //         btnName: "запись на консультацию",
                            //         btnLink: "#booking",
                            //     },
                            // ],
                        },
                    ],
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        image: "/images/choice.jpg",
                        title: "Компьютерная диагностика зрения: зачем проводится и как проходит процедура",
                        text: [
                            "Перед тем как выбрать подходящий метод коррекции зрения, важно пройти детальное обследование.",
                            "Одним из наиболее эффективных и щадящих методов сегодня считается компьютерная диагностика.",
                            "Этот метод обеспечивает точную оценку состояния зрительной системы без болезненных ощущений и занимает минимум времени.",
                        ],
                        listTitle:
                            "Как проходит компьютерная диагностика зрения",
                        list: [
                            {
                                itemTitle:
                                    "Запись на прием и подготовка к диагностике",
                                itemText: [
                                    "Записаться на диагностику зрения можно всего за несколько минут по телефону или онлайн на сайте.",
                                    "Специальная подготовка не требуется, но если вы носите мягкие контактные линзы — снимите их накануне вечером (рекомендуется за 12 часов до визита). Очки необходимо взять с собой для проверки, а также результаты предыдущих офтальмологических обследований — врач посмотрит в динамике, что изменилось за последний период. Желательно не быть за рулем, так как некоторое время после процедуры может наблюдаться легкий зрительный дискомфорт (близкое зрение будет слегка размытым).",
                                ],
                            },
                            {
                                itemTitle:
                                    "Процесс компьютерной диагностики зрения",
                                itemText: [
                                    "Сама диагностика проходит быстро и комфортно. Используются прецизионные приборы, микроскопические методы визуализации и адаптированные диагностические тесты, которые врач подбирает в зависимости от конкретной клинической ситуации.",
                                    "Продолжительность диагностики составляет 2–2,5 часа. Один из важнейших этапов обследования — проверка остроты зрения. Для этого пациент читает знаки или буквы на таблицах, расположенных на разных расстояниях. Такие тесты помогают точно определить степень нарушения и правильно подобрать линзы или очки.",
                                    "В некоторых случаях врач может использовать капли для расширения зрачков. Это необходимо, чтобы временно исключить влияние аккомодационной функции глаза и получить более точные данные при исследовании глазного дна.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Заключение по результатам обследования",
                                itemText: [
                                    "После диагностики вы получите официальный протокол с оценкой всех параметров зрения и здоровья глаз. Врач предоставит рекомендации по дальнейшим действиям — от профилактики до конкретного плана лечения.",
                                    "Если планируется хирургическое вмешательство, его обсуждение станет ключевой частью консультации. Все важные вопросы следует задать и прояснить до момента операции, чтобы принять взвешенное решение.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Комплексное обследование зрения: какие тесты проводят",
                        text: "Во время диагностики глаз выполняется целый ряд исследований, направленных на всестороннюю оценку состояния зрительной системы:",
                        btn: {
                            btnName: "записаться на приём",
                            btnLink: "#booking",
                        },
                        slider: [
                            {
                                title: "Визиометрия",
                                text: "Измеряется острота зрения вдаль с помощью таблиц, содержащих символы, цифры или буквы. Это базовый тест, с которого начинается проверка зрения.",
                            },
                            {
                                title: "Тонометрия",
                                text: "Измеряется уровень внутриглазного давления. Его повышение может указывать на развитие глаукомы — одного из самых серьёзных заболеваний глаз.",
                            },
                            {
                                title: "Рефрактометрия",
                                text: "С помощью авторефрактометра определяется преломляющая сила глаза. Это позволяет выявить такие нарушения, как миопия, гиперметропия и астигматизм. Результаты помогают подобрать стратегию лечения — от консервативной терапии до лазерной коррекции.",
                            },
                            {
                                title: "Биометрия",
                                text: "Проводится точное измерение параметров глазного яблока: глубина передней камеры, толщина хрусталика, длина глаза и объём стекловидного тела. Процедура бесконтактная, занимает считанные секунды и выполняется на современной оптической технике. Необходима, в частности, при подборе интраокулярной линзы.",
                            },
                            {
                                title: "Пахиметрия",
                                text: "Сканируется толщина роговицы — с помощью светового или ультразвукового прибора. Метод необходим перед проведением рефракционной хирургии и в реабилитационный период после неё.",
                            },
                            {
                                title: "Кератотопография",
                                text: "Определяются форма и кривизна роговицы путём анализа отражённого изображения. Этот тест позволяет выявить патологии поверхности роговицы и контролировать её состояние.",
                            },
                            {
                                title: "Периметрия",
                                text: "Исследование поля зрения позволяет определить, какую часть пространства человек охватывает взглядом при неподвижной голове и фиксированном взоре. Метод широко применяется для диагностики глаукомы, поражений зрительного нерва и заболеваний сетчатки.",
                            },
                            {
                                title: "Биомикроскопия",
                                text: "Данный метод позволяет тщательно изучить передние отделы глаза — такие как роговица, радужка и хрусталик — с помощью щелевой лампы. Это специализированный микроскоп, обеспечивающий высокую детализацию и помогающий выявить даже незначительные изменения в структуре тканей.",
                            },
                            {
                                title: "Фундус линзой",
                                text: "С помощью специальной линзы врач получает доступ к сетчатке, макулярной зоне и сосудистой системе глаза. Это важный этап диагностики офтальмологических и системных нарушений. Процедура проводится с использованием капель и обычно не вызывает дискомфорта благодаря местной анестезии.",
                            },
                            {
                                title: "Диоптриметрия",
                                text: "В рамках этого исследования определяется оптическая сила очков, которые использует пациент: измеряются диоптрии, цилиндры и другие параметры. Это помогает оценить, насколько эффективно они корректируют зрение и нужна ли замена или корректировка рецепта.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на консультацию и диагностику зрения в Киеве",
                        card: {
                            cost: 950,
                            period: "15.08.2025",
                            text: {
                                title: "Полное комплексное обследование зрения",
                            },
                        },
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "likuvannya-katarakti")!,
        additionalIcon: "/icons/iq-life.svg",
        price: findPriceItem("likuvannya-katarakti")!,
        uk: {
            textMain:
                "Хірургічне лікування катаракти, косоокості, кератоконуса та інших офтальмологічних патологій.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "лікування катаракти",
                        image: "/images/cataract-hero.jpg",
                        imgPositionMobile: "right 20% center",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Катаракта в нашому центрі лікується «англійським водним потоком iQ-5 minutes»",
                        text: [
                            "Ми використовуємо найпфередовішу методику факоемульсифікації катаракти — «Водний потік», яка вважається «золотим стандартом» в сучасній офтальмології.",
                            "Це швидкий, безпечний і комфортний метод, що дозволяє пацієнтам повернутися до звичного життя вже за кілька днів.",
                        ],
                        image: "/images/cataract-preview.jpg",
                        textUp: "500 тис+",
                        textDown: "успішних \nвилучень катаракти",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Революційні технології лікування катаракти — тільки в нашій клініці",
                        text: "Ми використовуємо найпередовішу методику факоемульсифікації катаракти — «Водний потік», яка вважається «золотим стандартом» в сучасній офтальмології.",
                        list: [
                            {
                                image: "/images/iq-5-minute.jpg",
                                link: "likuvannya-katarakti/iq-5-minutes",
                                title: "iq-5-minutes",
                                text: "Це безшовне видалення в складних випадках і обов’язкова імплантація інтраокулярної лінзи.",
                            },
                            {
                                image: "/images/live.jpg",
                                link: "likuvannya-katarakti/iq-life-3d-vodnij-potik",
                                title: "iQ-Life 3D «водний потік»",
                                text: "Це «золотий стандарт» в сучасній офтальмології.",
                            },
                        ],
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: [
                        {
                            title: "Що таке катаракта?",
                            image: "/images/cataract-round.jpg",
                            imagePosition: "object-left",
                            text: [
                                {
                                    content: [
                                        "Катаракта – це захворювання, при якому порушується прозорість кришталика, що призводить до зниження гостроти зору.",
                                        "Простіше кажучи, помутніння кришталика. При цьому його структура стає більш щільною, що створює певні труднощі при видаленні.",
                                        "Виявити катаракту на стадії неможливо без офтальмологічного огляду. Видимих симптомів на ранній стадії взагалі немає. З розвитком захворювання погіршується зір: пацієнт починає бачити предмети нечітко, немов вони перебувають у тумані, підвищується чутливість при погляді яскраве світло, погіршується нічний зір, послаблюється колірне сприйняття.",
                                    ],
                                },
                            ],
                            btn: [
                                {
                                    btnName: "читати про катаракту",
                                    btnLink: "/tsiny",
                                    btnSecondary: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "advantages",
                    data: {
                        title: "Переваги лікування катаракти в Києві у Британському Офтальмологічному Центрі",
                        text: "Ви можете бути впевнені в якості послуг, що надаються, так як довіряєте свій зір сучасній клініці",
                        list: [
                            {
                                title: "100% безпеки",
                                text: "Процедура проходить без болю, без уколів і без швів. Це швидкий, безпечний і комфортний метод, що дозволяє пацієнтам повернутися до звичного життя вже за кілька днів.",
                            },
                            {
                                title: "Досвідчені хірурги",
                                text: "Видалення катаракти проводять сертифіковані хірурги з міжнародним досвідом не менше 50 000 успішних операцій.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "без обмежень по віку",
                                text: "Приймаємо пацієнтів від народження до старшого віку.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на видалення катаракти у Києві",
                        card: {
                            premium: true,
                            icon: "/icons/iq-life-white.svg",
                            bgimage: "/images/lazerna-korekcziya-zoru.jpg",
                            text: {
                                premiumText:
                                    "Акція преміальної операції по стандартній ціні",
                                title: "iQ-Life Живий Зір",
                                text: "Лікування від катаракти з відновленням зору молодості, без окулярів вдалину і поблизу.",
                            },
                        },
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "Surgical treatment of cataracts, strabismus, keratoconus and other ophthalmological pathologies.",
            sections: [
                {
                    type: "preview",
                    data: {
                        title: "Cataracts in our center are treated with the 'English Water Flow iQ-5 minutes'",
                        text: [
                            "We use the most advanced phacoemulsification technique — the 'Water Flow', which is considered the 'gold standard' in modern ophthalmology.",
                            "It is a fast, safe and comfortable method that allows patients to return to their normal lives within a few days.",
                        ],
                        image: "/images/cataract-preview.jpg",
                        textUp: "500 k+",
                        textDown: "successful \ncataract removals",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Revolutionary cataract treatment technologies — exclusively in our clinic",
                        text: "We use the most advanced phacoemulsification technique — the 'Water Flow', which is considered the 'gold standard' in modern ophthalmology.",
                        list: [
                            {
                                image: "/images/iq-5-minute.jpg",
                                link: "likuvannya-katarakti/iq-5-minutes",
                                title: "iq-5-minutes",
                                text: "This is sutureless removal in complex cases with mandatory intraocular lens implantation.",
                            },
                            {
                                image: "/images/live.jpg",
                                link: "likuvannya-katarakti/iq-life-3d-vodnij-potik",
                                title: "iQ-Life 3D «Water Flow»",
                                text: "This is the «gold standard» in modern ophthalmology.",
                            },
                        ],
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: [
                        {
                            title: "What is Cataract?",
                            image: "/images/cataract-round.jpg",
                            imagePosition: "object-left",
                            text: [
                                {
                                    content: [
                                        "A cataract is a condition in which the transparency of the eye’s lens is impaired, leading to decreased visual acuity.",
                                        "Simply put, it’s a clouding of the lens. Its structure becomes denser, which creates certain difficulties during removal.",
                                        "It is impossible to detect a cataract in its early stage without an ophthalmologic examination. There are no visible symptoms at first. As the disease progresses, vision deteriorates: objects appear blurry, as if seen through a fog; sensitivity to bright light increases; night vision worsens; and color perception becomes weaker.",
                                    ],
                                },
                            ],
                            btn: [
                                {
                                    btnName: "read about cataract",
                                    btnLink: "/tsiny",
                                    btnSecondary: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "advantages",
                    data: {
                        title: "Advantages of cataract treatment in Kyiv at the British Ophthalmological Center",
                        text: "You can be confident in the quality of the services provided, as you are entrusting your vision to a modern clinic.",
                        list: [
                            {
                                title: "100% safety",
                                text: "The procedure is performed without pain, injections, or stitches. It’s a fast, safe, and comfortable method that allows patients to return to their normal lives within just a few days.",
                            },
                            {
                                title: "Experienced surgeons",
                                text: "Cataract removal is performed by certified surgeons with international experience and more than 50,000 successful surgeries.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "No age restrictions",
                                text: "We accept patients from birth to senior age.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for cataract removal in Kyiv",
                        card: {
                            premium: true,
                            icon: "/icons/iq-life-white.svg",
                            bgimage: "/images/lazerna-korekcziya-zoru.jpg",
                            text: {
                                premiumText:
                                    "Premium transaction promotion at standard price",
                                title: "iQ-Life Living Vision",
                                text: "Cataract treatment with restoration of youthful vision, without glasses for distance and near.",
                            },
                        },
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Хирургическое лечение катаракты, косоглазия, кератоконуса и других офтальмологических патологий.",
            sections: [
                {
                    type: "preview",
                    data: {
                        title: "Катаракта в нашем центре лечится «английским водным потоком iQ-5 minutes»",
                        text: [
                            "Мы используем передовую методику факоэмульсификации катаракты — «Водный поток», которая считается «золотым стандартом» в современной офтальмологии.",
                            "Это быстрый, безопасный и комфортный метод, позволяющий пациентам вернуться к привычной жизни уже через несколько дней.",
                        ],
                        image: "/images/cataract-preview.jpg",
                        textUp: "500 тыс+",
                        textDown: "успешных \nудалений катаракты",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Революционные технологии лечения катаракты — только в нашей клинике",
                        text: "Мы используем передовую методику факоэмульсификации катаракты — «Водный поток», которая считается «золотым стандартом» в современной офтальмологии.",
                        list: [
                            {
                                image: "/images/iq-5-minute.jpg",
                                link: "likuvannya-katarakti/iq-5-minutes",
                                title: "iq-5-minutes",
                                text: "Это бесшовное удаление в сложных случаях и обязательная имплантация интраокулярной линзы.",
                            },
                            {
                                image: "/images/live.jpg",
                                link: "likuvannya-katarakti/iq-life-3d-vodnij-potik",
                                title: "iQ-Life 3D «водный поток»",
                                text: "Это «золотой стандарт» в современной офтальмологии.",
                            },
                        ],
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: [
                        {
                            title: "Что такое катаракта?",
                            image: "/images/cataract-round.jpg",
                            imagePosition: "object-left",
                            text: [
                                {
                                    content: [
                                        "Катаракта — это заболевание, при котором нарушается прозрачность хрусталика глаза, что приводит к снижению остроты зрения.",
                                        "Проще говоря, это помутнение хрусталика. Его структура становится более плотной, что создает определенные трудности при удалении.",
                                        "Обнаружить катаракту на ранней стадии невозможно без офтальмологического осмотра. На начальном этапе видимых симптомов нет. По мере развития заболевания зрение ухудшается: предметы становятся размытыми, будто окутаны туманом; повышается чувствительность к яркому свету; ухудшается ночное зрение и ослабляется восприятие цветов.",
                                    ],
                                },
                            ],
                            btn: [
                                {
                                    btnName: "читать о катаракте",
                                    btnLink: "/tsiny",
                                    btnSecondary: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "advantages",
                    data: {
                        title: "Преимущества лечения катаракты в Киеве в Британском Офтальмологическом Центре",
                        text: "Вы можете быть уверены в качестве предоставляемых услуг, ведь доверяете своё зрение современной клинике.",
                        list: [
                            {
                                title: "100% безопасность",
                                text: "Процедура проходит без боли, без уколов и без швов. Это быстрый, безопасный и комфортный метод, который позволяет пациентам вернуться к привычной жизни уже через несколько дней.",
                            },
                            {
                                title: "Опытные хирурги",
                                text: "Удаление катаракты выполняют сертифицированные хирурги с международным опытом и более чем 50 000 успешных операций.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "Без ограничений по возрасту",
                                text: "Мы принимаем пациентов от рождения и до пожилого возраста.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на удаление катаракты в Киеве",
                        card: {
                            premium: true,
                            icon: "/icons/iq-life-white.svg",
                            bgimage: "/images/lazerna-korekcziya-zoru.jpg",
                            text: {
                                premiumText:
                                    "Акция премиальной сделки по стандартной цене",
                                title: "iQ-Life Живое Зрение",
                                text: "Лечение от катаракты с восстановлением зрения молодости, без очков вдаль и поблизости.",
                            },
                        },
                    },
                },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "syndrom-sukhoho-oka")!,
        price: findPriceItem("syndrom-sukhoho-oka")!,
        uk: {
            textMain:
                "Ми забезпечуємо ефективний та індивідуальний підхід до усунення неприємних симптомів, щоб повернути комфорт та здоров'я вашим очам.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лікування синдрому сухого ока у Києві",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "We provide an effective and individual approach to eliminating unpleasant symptoms to restore comfort and health to your eyes.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for dry eye syndrome treatment in Kyiv",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Мы обеспечиваем эффективный и индивидуальный подход к устранению неприятных симптомов, чтобы вернуть комфорт и здоровье вашим глазам.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение синдрома сухого глаза в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "vitreoretinalna-hirurgiya")!,
        additionalIcon: "/icons/iq-life.svg",
        price: findPriceItem("vitreoretinalna-hirurgiya")!,
        uk: {
            textMain: "Лікування захворювань сітківки та склоподібного тіла.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лікування захворювань сітківки та склоподібного тіла в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain: "Treatment of diseases of the retina and vitreous body.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for treatment of diseases of the retina and vitreous body in Kiev",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain: "Лечение заболеваний сетчатки и стекловидного тела.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение заболеваний сетчатки и стекловидного тела в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "lazerna-korekcziya-zoru")!,
        additionalIcon: "/icons/iq-lasik.svg",
        price: findPriceItem("lazerna-korekcziya-zoru")!,
        uk: {
            textMain:
                "Сучасні методи виправлення рефракційних порушень відновлення чіткості зору.",

            sections: [
                {
                    type: "preview",
                    data: {
                        title: "Лазерна корекція зору – це  прорив у галузі офтальмології, який допомагає мільйонам людей у всьому світі покращити свій зір",
                        text: [
                            "Цей процес включає використання точного лазера для зміни форми рогівки, що дозволяє світлу фокусуватися на сітківці і покращує зір.",
                            "Якщо ви втомилися від окулярів або контактних лінз і хочете покращити своє життя, то лазерна корекція зору може бути ідеальним рішенням для вас.",
                        ],
                        image: "/images/lazer-preview.jpg",
                        textUp: "1 млн",
                        textDown: "проведено \nлазерних корекцій",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Унікальна технологія холодної лазерної корекції — тільки в нашій клініці",
                        text: "Лише у нас застосовується холодний метод лазерної корекції зору, що забезпечує максимальну безпеку для ваших очей.",
                        greenText:
                            "Для тих, хто вибирає найкраще і не готовий до компромісу",
                        list: [
                            {
                                image: "/images/eagle.jpg",
                                link: "lazerna-korekcziya-zoru/iq-lasik-oxygen-3d",
                                title: "iQ-LASIK Oxygen 3D",
                                text: "Сучасна і безпечна методика поліпшення зору рефракційним лазером.",
                            },
                            {
                                image: "/images/lasek.png",
                                link: "lazerna-korekcziya-zoru/sportlife-lasik",
                                title: "SportLine LASEK",
                                text: "Це «золотий стандарт» в сучасній офтальмології.",
                            },
                        ],
                    },
                },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: true,
                        listTitle: "Як відбувається лазерна корекція?",
                        list: [
                            {
                                itemTitle: "Діагностика зору",
                                itemText: [
                                    "Комплексне обстеження зору дає змогу досвідченому лікарю оцінити стан вашої зорової системи, поставити точний діагноз, підібрати найбільш ефективну методику та спрогнозувати результат. Тривалість обстеження 1,5 – 2 години.",
                                ],
                            },
                            {
                                itemTitle: "лазерна корекція",
                                itemText: [
                                    "Підготовка, корекція та післяопераційний огляд займає, в середньому, 2-2,5 години. В операційній ви проведете 15-20 хвилин, а лазерний вплив триває всього 20-60 секунд. Процес безпечний і безболісний, повністю під контролем нашіх досвідчених фахівців. Використовується місцева крапельна анестезія, без уколів. Лікар озвучує кожен свій рух. Після огляду прооперованого ока ви повернетеся додому. Ми надамо необхідний пакет медикаментів і контакт лікаря для цілодобового зв’язку. Можна провести лазерну корекцію відразу після обстеження (узгодьте цей пункт під час запису по телефону!).",
                                ],
                            },
                            {
                                itemTitle: "контрольний огляд",
                                list: true,
                                itemText: [
                                    "1-й контрольний огляд проводять через 30 хв. після лазерної корекції зору.",
                                    "2-й контрольний огляд проводять через 1—4 дні після лазерної корекції зору (залежно від методу корекції зору).",
                                    "3-й контрольний огляд проводять через місяць після лазерної корекції зору (при необхідності).",
                                ],
                            },
                        ],
                        // pdfCard: {
                        //     title: "відновлення та догляд за очима після лазерної корекції зору",
                        //     description: "інструкція",
                        //     link: "/documents/lazerna-korektsiya-zoru.pdf",
                        //     btnName: "завантажити",
                        // },
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Переваги лазерної корекції зору в Києві в Британському Офтальмологічному Центрі",
                        text: "Ви можете бути впевнені в якості послуг, що надаються, так як довіряєте свій зір сучасній клініці",
                        paddingBottom: false,
                        list: [
                            {
                                title: "100% безпеки",
                                text: "Технологія та безпека цієї методики дають пацієнтам швидкий результат і здатність бачити світ у всіх його барвах без додаткових засобів – окулярів і контактних лінз.",
                            },
                            {
                                title: "Без порушення ритму життя",
                                text: "Не потрібно йти у відпустку, вже через кілька днів після лазерної корекції допускаються нормальні навантаження на очі.",
                            },
                            { imageOnly: "/images/safety3.jpg" },
                            {
                                title: "стабільний результат",
                                text: "Ефект від лазерної корекції не змінюється роками, якщо на нього не вплинуть  природні вікові зміни, супутні захворювання чи травми.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціна лазерної корекції зору у Києві",
                        card: {
                            cost: 14950,
                            period: "15.08.2025",
                            text: {
                                title: "Лазерна корекція зору будь-яким методом",
                            },
                        },
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "Modern methods of correcting refractive errors and restoring visual acuity.",
            sections: [
                {
                    type: "preview",
                    data: {
                        title: "Laser vision correction is a breakthrough in ophthalmology that helps millions of people worldwide improve their eyesight",
                        text: [
                            "This process involves using a precise laser to reshape the cornea, allowing light to focus on the retina and improving vision.",
                            "If you're tired of glasses or contact lenses and want to improve your life, laser vision correction may be the perfect solution for you.",
                        ],
                        image: "/images/lazer-preview.jpg",
                        textUp: "1 m",
                        textDown: "laser corrections \nperformed",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Unique cold laser correction technology — only in our clinic",
                        text: "Only we use the cold laser vision correction method, ensuring maximum safety for your eyes.",
                        greenText:
                            "For those who choose the best and accept no compromise",

                        list: [
                            {
                                image: "/images/eagle.jpg",
                                link: "lazerna-korekcziya-zoru/iq-lasik-oxygen-3d",
                                title: "iQ-LASIK Oxygen 3D",
                                text: "A modern and safe method of improving vision using a refractive laser.",
                            },
                            {
                                image: "/images/lasek.png",
                                link: "lazerna-korekcziya-zoru/sportlife-lasik",
                                title: "SportLine LASEK",
                                text: "This is the «gold standard» in modern ophthalmology.",
                            },
                        ],
                    },
                },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: true,
                        listTitle: "How Does Laser Vision Correction Work?",
                        list: [
                            {
                                itemTitle: "Vision Diagnostics",
                                itemText: [
                                    "A comprehensive eye examination allows an experienced doctor to assess the condition of your visual system, make an accurate diagnosis, choose the most effective method, and predict the result. The examination lasts 1.5–2 hours.",
                                ],
                            },
                            {
                                itemTitle: "Laser Correction",
                                itemText: [
                                    "Preparation, correction, and postoperative examination take on average 2–2.5 hours. You’ll spend 15–20 minutes in the operating room, while the laser exposure itself lasts only 20–60 seconds. The process is safe and painless, fully controlled by our experienced specialists. Local drop anesthesia is used — no injections. The doctor explains each step during the procedure. After the postoperative eye check, you will return home. We will provide you with the necessary medication package and a contact number for 24/7 communication with your doctor. Laser correction can be performed immediately after the examination (please confirm this when scheduling your appointment!).",
                                ],
                            },
                            {
                                itemTitle: "Follow-Up Examination",
                                list: true,
                                itemText: [
                                    "1st follow-up examination — 30 minutes after laser vision correction.",
                                    "2nd follow-up examination — 1–4 days after laser vision correction (depending on the correction method).",
                                    "3rd follow-up examination — one month after laser vision correction (if necessary).",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Advantages of Laser Vision Correction in Kyiv at the British Ophthalmology Center",
                        text: "You can be confident in the quality of the services provided, as you entrust your vision to a modern clinic.",
                        paddingBottom: false,
                        list: [
                            {
                                title: "100% Safety",
                                text: "The technology and safety of this method give patients quick results and the ability to see the world in all its colors without additional means — glasses or contact lenses.",
                            },
                            {
                                title: "No Disruption to Daily Life",
                                text: "There’s no need to take a vacation — just a few days after laser correction, normal eye strain is allowed.",
                            },
                            { imageOnly: "/images/safety3.jpg" },
                            {
                                title: "Stable Result",
                                text: "The effect of laser correction remains for years unless affected by natural age-related changes, accompanying diseases, or injuries.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Price of laser vision correction in Kyiv",
                        card: {
                            cost: 14950,
                            period: "15.08.2025",
                            text: {
                                title: "Laser vision correction by any method",
                            },
                        },
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Современные методы устранения рефракционных нарушений восстановления четкости зрения.",
            sections: [
                {
                    type: "preview",
                    data: {
                        title: "Лазерная коррекция зрения – это прорыв в области офтальмологии, который помогает миллионам людей по всему миру улучшить свое зрение",
                        text: [
                            "Этот процесс включает использование точного лазера для изменения формы роговицы, что позволяет свету фокусироваться на сетчатке и улучшает зрение.",
                            "Если вы устали от очков или контактных линз и хотите улучшить свою жизнь, то лазерная коррекция зрения может быть идеальным решением для вас.",
                        ],
                        image: "/images/lazer-preview.jpg",
                        textUp: "1 млн",
                        textDown: "проведено \nлазерных коррекций",
                    },
                },
                {
                    type: "methodsSection",
                    data: {
                        title: "Уникальная технология холодной лазерной коррекции – только в нашей клинике",
                        text: "Только у нас применяется холодный метод лазерной коррекции зрения, обеспечивающий максимальную безопасность для ваших глаз.",
                        greenText:
                            "Для тех, кто выбирает лучшее и не готов к компромиссам",
                        list: [
                            {
                                image: "/images/eagle.jpg",
                                link: "lazerna-korekcziya-zoru/iq-lasik-oxygen-3d",
                                title: "iQ-LASIK Oxygen 3D",
                                text: "Современная и безопасная методика улучшения зрения с помощью рефракционного лазера.",
                            },
                            {
                                image: "/images/lasek.png",
                                link: "lazerna-korekcziya-zoru/sportlife-lasik",
                                title: "SportLine LASEK",
                                text: "Это «золотой стандарт» в современной офтальмологии.",
                            },
                        ],
                    },
                },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: true,
                        listTitle: "Как проходит лазерная коррекция зрения?",
                        list: [
                            {
                                itemTitle: "Диагностика зрения",
                                itemText: [
                                    "Комплексное обследование зрения позволяет опытному врачу оценить состояние вашей зрительной системы, поставить точный диагноз, подобрать наиболее эффективную методику и спрогнозировать результат. Продолжительность обследования 1,5–2 часа.",
                                ],
                            },
                            {
                                itemTitle: "Лазерная коррекция",
                                itemText: [
                                    "Подготовка, коррекция и послеоперационный осмотр занимают в среднем 2–2,5 часа. В операционной вы проведёте 15–20 минут, а воздействие лазера длится всего 20–60 секунд. Процесс безопасен и безболезнен, полностью под контролем наших опытных специалистов. Используется местная капельная анестезия, без уколов. Врач комментирует каждый свой шаг. После осмотра прооперированного глаза вы возвращаетесь домой. Мы предоставим необходимый набор медикаментов и контакт врача для круглосуточной связи. Лазерную коррекцию можно провести сразу после обследования (уточните этот момент при записи по телефону!).",
                                ],
                            },
                            {
                                itemTitle: "Контрольный осмотр",
                                list: true,
                                itemText: [
                                    "1-й контрольный осмотр проводится через 30 минут после лазерной коррекции зрения.",
                                    "2-й контрольный осмотр проводится через 1–4 дня после лазерной коррекции зрения (в зависимости от метода коррекции).",
                                    "3-й контрольный осмотр проводится через месяц после лазерной коррекции зрения (при необходимости).",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Преимущества лазерной коррекции зрения в Киеве в Британском Офтальмологическом Центре",
                        text: "Вы можете быть уверены в качестве предоставляемых услуг, так как доверяете своё зрение современной клинике.",
                        paddingBottom: false,
                        list: [
                            {
                                title: "100% безопасность",
                                text: "Технология и безопасность этой методики обеспечивают пациентам быстрый результат и возможность видеть мир во всех его красках без дополнительных средств — очков и контактных линз.",
                            },
                            {
                                title: "Без нарушения привычного ритма жизни",
                                text: "Не нужно уходить в отпуск — уже через несколько дней после лазерной коррекции допускаются обычные нагрузки на глаза.",
                            },
                            { imageOnly: "/images/safety3.jpg" },
                            {
                                title: "Стабильный результат",
                                text: "Эффект от лазерной коррекции сохраняется годами, если на него не повлияют естественные возрастные изменения, сопутствующие заболевания или травмы.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цена лазерной коррекции зрения в Киеве",
                        card: {
                            cost: 14950,
                            period: "15.08.2025",
                            text: {
                                title: "Лазерная коррекция зрения любым методом",
                            },
                        },
                    },
                },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "dityache-viddilennya")!,
        price: findPriceItem("dityache-viddilennya")!,
        uk: {
            textMain:
                "Сучасні методи виправлення рефракційних порушень відновлення чіткості зору.Провідні дитячі офтальмологи – досвідчені лікарі, які знайдуть підхід до кожної дитини.",
            sections: [{ type: "doctors" }],
        },
        en: {
            textMain:
                "Leading pediatric ophthalmologists are experienced doctors who will find an approach to each child.",
            sections: [{ type: "doctors" }],
        },
        ru: {
            textMain:
                "Современные методы устранения рефракционных нарушений восстановления четкости зрения.Ведущие детские офтальмологи – опытные врачи, которые найдут подход к каждому ребенку.",
            sections: [{ type: "doctors" }],
        },
    },
    {
        name: servicesList.find(s => s.key === "likuvannya-keratokonusa")!,
        price: findPriceItem("likuvannya-keratokonusa")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Ціна на лікування кератоконусу в Києві",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Price for keratoconus treatment in Kyiv",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Цена на лечение кератоконуса в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "refrakczijna-lensektomiya")!,
        price: findPriceItem("refrakczijna-lensektomiya")!,
        uk: {
            textMain:
                "BiVision RLE (рефракційна ленсектомія) — ефективний метод корекції пресбіопії (вікова далекозорість).",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Ціна на рефракційну ленсектомію в Києві",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "BiVision RLE (refractive lensectomy) is an effective method of correcting presbyopia (age-related farsightedness).",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Price for refractive lensectomy in Kyiv",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "BiVision RLE (рефракционная ленсектомия) – эффективный метод коррекции пресбиопии (возрастная дальнозоркость).",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Цена на рефракционную ленсектомию в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(
            s => s.key === "lazerne-likuvannya-zahvoryuvan-oka"
        )!,
        price: findPriceItem("lazerne-likuvannya-zahvoryuvan-oka")!,
        uk: {
            textMain:
                "Можливість чітко візуалізувати патологічні зміни дозволяє лікарю виконувати процедуру гранично точно.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лазерне лікування захворювань ока в Києві",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "The ability to clearly visualize pathological changes allows the doctor to perform the procedure with extreme precision.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for laser treatment of eye diseases in Kyiv",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Возможность четко визуализировать патологические изменения позволяет врачу выполнять процедуру предельно точно.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лазерное лечение заболеваний глаза в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
    },

    {
        name: servicesList.find(s => s.key === "intravitrealni-inekczii")!,
        price: findPriceItem("intravitrealni-inekczii")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на інтравітреальні ін'єкції в Києві",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for intravitreal injections in Kyiv",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на интравитреальные инъекции в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(
            s => s.key === "hirurgichne-likuvannya-glaukomi"
        )!,
        price: findPriceItem("hirurgichne-likuvannya-glaukomi")!,
        uk: {
            textMain:
                "Ми лікуємо всі види глаукоми із застосуванням найсучасніших і ефективних хірургічних методик.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лікування глаукоми в Києві",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "We treat all types of glaucoma using the most modern and effective surgical techniques.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for glaucoma treatment in Kyiv",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Мы лечим все виды глаукомы с применением самых современных и эффективных хирургических методик.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение глаукомы в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "likuvannya-kosookosti")!,
        price: findPriceItem("likuvannya-kosookosti")!,
        uk: {
            textMain:
                "Ми пропонуємо новітні методи діагностики та лікування косоокості, а також закріплення результату.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лікування косоокості в Києві",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "We offer the latest methods of diagnosing and treating strabismus, as well as consolidating the result.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for strabismus treatment in Kyiv",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Мы предлагаем новейшие методы диагностики и лечения косоглазия, а также закрепление результата.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение косоглазия в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(
            s => s.key === "hirurgiya-povik-i-konyunktivi"
        )!,
        price: findPriceItem("hirurgiya-povik-i-konyunktivi")!,
        uk: {
            textMain:
                "Хірургія повік і кон’юнктиви (блефаропластика та інші втручання).",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на хірургію повік і кон'юнктиви в Києві",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "Eyelid and conjunctival surgery (blepharoplasty and other interventions).",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for eyelid and conjunctival surgery in Kyiv",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Хирургия век и конъюнктивы (блефаропластика и другие вмешательства).",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на хирургию век и конъюнктивы в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "ksenonoterapiya")!,
        price: findPriceItem("ksenonoterapiya")!,
        uk: {
            textMain: "Методика «Янгельські сни».",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на ксенонотерапію в Києві",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain: "«Angel Dreams» Method.",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for xenotherapy in Kyiv",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain: "Методика «Ангельские сны».",
            sections: [
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на ксенонотерапию в Киеве",
                    },
                },
                { type: "doctors" },
            ],
        },
    },
];
