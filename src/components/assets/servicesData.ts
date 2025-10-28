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
    | { type: "hero"; data: HeroSomeServiceProps }
    | { type: "faq"; data: FAQServiceSectionType };

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
    videoSmallScreens?: string;
    videoBigScreens?: string;
    image?: string;
    adress?: boolean;
    imgPositionMobile?: string; // наприклад: "calc(50% - 80px) top"
    imgPositionDesktop?: string;
    cataract?: string[];
    lazer?: { listTitle: string; list: string[] };
};

export type ParagraphAnswer = {
    type: "text";
    text: string | TextSegment[];
    gap?: boolean;
};

export type ListAnswer = {
    type: "list";
    list: (string | TextSegment[])[];
    gap?: boolean;
};

export type AnswerType = ParagraphAnswer | ListAnswer;

export type TextSegment = {
    value: string;
    bold?: boolean;
};

export type FAQServiceListType = {
    question: string;
    answer: AnswerType[];
};

export type FAQServiceSectionType = {
    title: string;
    content: FAQServiceListType[];
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
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про перевірку зору",
                        content: [
                            {
                                question:
                                    "Чому важливо пройти діагностику зору саме у Києві?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Якщо ви прагнете надовго зберегти здоров'я очей та заздалегідь виявити можливі відхилення, рекомендується пройти діагностику у професійній офтальмологічній клініці. Навіть за хорошого самопочуття та відсутності дискомфорту не варто відкладати візит до лікаря — безліч очних захворювань розвиваються непомітно і без симптомів на початкових етапах.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Регулярна діагностика дозволяє:",
                                    },
                                    {
                                        type: "list",
                                        list: [
                                            "уникнути розвитку серйозних патологій;",
                                            "відстежувати динаміку стану очей при носінні оптики або після операцій;",
                                            "вчасно підібрати лікування за перших ознак порушення.",
                                        ],
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Не відкладайте турботу про свій зір - запишіться на комп'ютерну діагностику в Києві вже сьогодні.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "які Методи та тести використовуються при діагностиці зору?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Під час обстеження зору у Києві наші офтальмологи застосовують сучасні технології та ефективні діагностичні підходи:",
                                        gap: true,
                                    },
                                    {
                                        type: "list",
                                        gap: true,
                                        list: [
                                            [
                                                {
                                                    value: "Візометрія",
                                                    bold: true,
                                                },
                                                {
                                                    value: "– оцінка гостроти зору з використанням спеціальних таблиць із символами.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Тонометрія",
                                                    bold: true,
                                                },
                                                {
                                                    value: "– визначення внутрішньоочного тиску, необхідне раннього виявлення ризику глаукоми.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Рефрактометрія",
                                                    bold: true,
                                                },
                                                {
                                                    value: "– автоматичний аналіз заломлюючої здатності ока, що дозволяє діагностувати міопію, гіперопію та астигматизм.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Біометрія",
                                                    bold: true,
                                                },
                                                {
                                                    value: "– вимір ключових параметрів ока: довжини очного яблука, глибини передньої камери, товщини кришталика.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Пахіметрія",
                                                    bold: true,
                                                },
                                                {
                                                    value: "– визначення товщини рогівки за допомогою світла чи ультразвуку, особливо актуальне перед лазерною корекцією.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Кератотопографія",
                                                    bold: true,
                                                },
                                                {
                                                    value: "– дослідження форми та кривизни рогівки для виявлення її можливих патологій.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Периметрія",
                                                    bold: true,
                                                },
                                                {
                                                    value: "– визначення поля зору, важливе при діагностиці глаукоми, пошкоджень зорового нерва та захворювань сітківки.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Біомікроскопія",
                                                    bold: true,
                                                },
                                                {
                                                    value: "– детальний огляд передньої частини ока під збільшенням із застосуванням щілинної лампи.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Фундус-діагностика",
                                                    bold: true,
                                                },
                                                {
                                                    value: "– дослідження сітківки та судин очного дна за допомогою фундус-лінзи.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Діоптріметрія",
                                                    bold: true,
                                                },
                                                {
                                                    value: "– аналіз діоптрій і параметрів окулярів, що вже використовуються для оцінки коректності підібраної оптики.",
                                                },
                                            ],
                                        ],
                                    },
                                    {
                                        type: "text",
                                        text: "Усі методики виконуються з високою точністю, забезпечуючи повну картину стану органів зору та дозволяючи підібрати ефективне лікування.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Навіщо звертатися на перевірку зору до окуліста?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Комп'ютерна діагностика зору у спеціалізованому офтальмологічному центрі – це важливий етап на шляху збереження здоров'я очей. Навіть за відсутності явних симптомів рекомендується регулярно проходити огляд у офтальмолога, особливо тим, хто має генетичну схильність до офтальмологічних захворювань або хто проводить тривалий час за комп'ютером.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Лікар-офтальмолог не обмежується лише зовнішнім оглядом — за потреби він направляє пацієнта на розширену перевірку зору, включаючи комп'ютерні методи аналізу.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Така діагностика дозволяє вчасно виявити проблеми з рефракцією, оцінити внутрішньоочний тиск та виявити ранні ознаки захворювань, наприклад, глаукоми чи катаракти. Якщо ви шукаєте, де пройти професійне обстеження очей у Києві, наша клініка пропонує кваліфікований прийом лікаря та повний спектр сучасних діагностичних процедур.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "яка Вартість діагностики та переваги комплексного підходу?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Багатьох пацієнтів цікавить, скільки коштує комп'ютерна діагностика очей. У нашому центрі ціна перевірки зору залежить від обсягу обстеження та методик, що використовуються. Ми надаємо прозору інформацію щодо кожного етапу — від базової консультації до розширеного обстеження та лазерної діагностики. Ознайомитись з актуальними цінами можна під час запису або по телефону — також у нас регулярно діють знижки та акції.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Повна діагностика очей у нашій клініці включає як стандартні тести, а й сучасні методи діагностики зору. Такий комплексний підхід дозволяє отримати точну картину стану очей, виключити протипоказання до різних видів лікування, включаючи хірургічне втручання та мінімізувати ризики побічних ефектів. Це особливо важливо при плануванні лазерного обстеження очей та подальшої корекції.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чому нас обирають для перевірки зору у Києві?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Наш офтальмологічний центр у Києві отримав визнання пацієнтів за точну діагностику, високий рівень професіоналізму лікарів та уважне ставлення до кожного. Ми пропонуємо приватну клініку із сучасною технічною базою, досвідченою командою та комфортною атмосферою. Багато хто звертається до нас за особистими рекомендаціями, знаючи, що тут можна розраховувати на якісне обстеження та чесну медичну оцінку.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Якщо ви підбираєте клініку для проходження комп'ютерної діагностики зору, де можна отримати точні дані про стан очей, ми готові запропонувати надійний та зручний сервіс. Запишіться на прийом, щоб пройти комплексну перевірку зору без затримок та черг. Ми визначимо оптимальний підхід для вашої ситуації та складемо персональний план подальших кроків.",
                                    },
                                ],
                            },
                        ],
                    },
                },
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
                    type: "advantages",
                    data: {
                        title: "Advantages of Computerized Eye Examination",
                        text: "In our ophthalmology clinic in Kyiv, diagnostics are performed using advanced technologies and EU-certified equipment.",
                        list: [
                            {
                                title: "Accurate diagnosis",
                                text: "Digital methods allow for highly precise determination of key parameters of the visual system.",
                            },
                            {
                                title: "Comprehensive approach",
                                text: "Digital technologies enable deep analytical processing of the obtained data.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "Individual treatment",
                                text: "Digital diagnostics help select a personalized treatment plan — from classic therapy to laser correction or surgical intervention.",
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
                {
                    type: "faq",
                    data: {
                        title: "Frequently Asked Questions About Eye Examination",
                        content: [
                            {
                                question:
                                    "Why is it important to undergo an eye examination in Kyiv?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "If you want to preserve your eye health for a long time and detect possible abnormalities in advance, it is recommended to undergo diagnostics in a professional ophthalmology clinic. Even with good well-being and no discomfort, it is not advisable to postpone a visit to the doctor — many eye diseases develop silently and without symptoms at the early stages.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Regular diagnostics allow you to:",
                                    },
                                    {
                                        type: "list",
                                        list: [
                                            "prevent the development of serious pathologies;",
                                            "monitor the condition of the eyes when wearing optical correction or after surgery;",
                                            "timely identify the need for treatment at the first signs of impairment.",
                                        ],
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Don't postpone caring for your vision — book a computer eye examination in Kyiv today.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What methods and tests are used during vision diagnostics?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "During the eye examination in Kyiv, our ophthalmologists use modern technologies and effective diagnostic approaches:",
                                        gap: true,
                                    },
                                    {
                                        type: "list",
                                        gap: true,
                                        list: [
                                            [
                                                {
                                                    value: "Visometry",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – assessment of visual acuity using special symbol charts.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Tonometry",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – measurement of intraocular pressure, necessary for early detection of glaucoma risk.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Refractometry",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – automated analysis of the eye’s refractive power to diagnose myopia, hyperopia, and astigmatism.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Biometry",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – measurement of key ocular parameters: axial length, anterior chamber depth, and lens thickness.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Pachymetry",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – determination of corneal thickness using light or ultrasound, particularly important before laser correction.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Corneal Topography",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – study of the corneal shape and curvature to detect its possible pathologies.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Perimetry",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – field of vision assessment, important for diagnosing glaucoma, optic nerve damage, and retinal diseases.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Biomicroscopy",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – detailed examination of the anterior segment of the eye using a slit lamp.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Fundus Examination",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – examination of the retina and blood vessels using a fundus lens.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Lensometry",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – measurement of lens power and parameters of glasses already in use to verify proper optical correction.",
                                                },
                                            ],
                                        ],
                                    },
                                    {
                                        type: "text",
                                        text: "All methods are performed with high precision, providing a complete overview of the eye condition and helping to choose the most effective treatment.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Why should you visit an ophthalmologist for an eye check?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Computer diagnostics of vision in a specialized ophthalmology center is a key step in maintaining healthy eyesight. Even without noticeable symptoms, it is advised to visit an ophthalmologist regularly, especially if you have a genetic predisposition to eye diseases or spend long hours at the computer.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "An ophthalmologist does not limit the check-up to an external examination — if necessary, the doctor will recommend advanced diagnostic tests, including computer-based analysis.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Diagnostics help timely detect refractive errors, evaluate intraocular pressure, and identify early signs of diseases such as glaucoma or cataract. If you are looking for a place to undergo a professional eye examination in Kyiv, our clinic offers qualified ophthalmologist consultations and a full range of modern diagnostic procedures.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What is the cost of diagnostics and what are the advantages of a comprehensive approach?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Many patients are interested in how much computer eye diagnostics cost. In our center, the price of the examination depends on its scope and the diagnostic methods used. We provide transparent information about each stage — from the basic consultation to advanced examinations and laser diagnostics. You can check the latest prices during registration or by phone — we also regularly offer discounts and promotions.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "A comprehensive eye examination in our clinic includes both standard tests and advanced diagnostic technologies. This approach provides an accurate picture of eye health, helps eliminate contraindications for various types of treatment — including surgery — and minimizes the risk of side effects. This is especially important when planning laser diagnostics and further correction.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Why do patients choose us for eye examination in Kyiv?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Our ophthalmology center in Kyiv is trusted for precise diagnostics, highly professional doctors, and personalized patient care. We offer a private clinic with advanced technical facilities, an experienced team, and a comfortable atmosphere. Many come to us through recommendations, knowing that they will receive a high-quality examination and an honest medical opinion.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "If you are looking for a clinic to undergo a computer vision check where you can get accurate data about your eyes, we are ready to provide reliable and convenient service. Book an appointment to have your vision examined comprehensively without delays or queues. We will determine the best approach for your case and prepare a personalized treatment plan.",
                                    },
                                ],
                            },
                        ],
                    },
                },
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
                    type: "advantages",
                    data: {
                        title: "Преимущества компьютерного обследования глаз",
                        text: "В нашей офтальмологической клинике в Киеве диагностика проводится с применением передовых технологий и оборудования, сертифицированного по стандартам ЕС.",
                        list: [
                            {
                                title: "Точный диагноз",
                                text: "Цифровые методы позволяют максимально точно определить ключевые параметры зрительного аппарата.",
                            },
                            {
                                title: "Комплексный подход",
                                text: "Цифровые технологии обеспечивают глубокую аналитическую обработку полученных данных.",
                            },
                            { videoOnly: "/videos/about-advant.mp4" },
                            {
                                title: "Индивидуальное лечение",
                                text: "Цифровая диагностика помогает подобрать персонализированный курс лечения — от классической терапии до лазерной коррекции или хирургического вмешательства.",
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
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы о проверке зрения",
                        content: [
                            {
                                question:
                                    "Почему важно пройти диагностику зрения именно в Киеве?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Если вы хотите надолго сохранить здоровье глаз и заранее выявить возможные отклонения, рекомендуется проходить диагностику в профессиональной офтальмологической клинике. Даже при хорошем самочувствии и отсутствии дискомфорта не стоит откладывать визит к врачу — многие глазные заболевания развиваются незаметно и без симптомов на начальных этапах.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Регулярная диагностика позволяет:",
                                    },
                                    {
                                        type: "list",
                                        list: [
                                            "избежать развития серьёзных патологий;",
                                            "отслеживать динамику состояния глаз при ношении оптики или после операций;",
                                            "вовремя подобрать лечение при первых признаках нарушений.",
                                        ],
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Не откладывайте заботу о своём зрении — запишитесь на компьютерную диагностику в Киеве уже сегодня.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие методы и тесты используются при диагностике зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Во время обследования зрения в Киеве наши офтальмологи используют современные технологии и эффективные диагностические подходы:",
                                        gap: true,
                                    },
                                    {
                                        type: "list",
                                        gap: true,
                                        list: [
                                            [
                                                {
                                                    value: "Визометрия",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – оценка остроты зрения с использованием специальных таблиц с символами.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Тонометрия",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – измерение внутриглазного давления, необходимое для раннего выявления риска глаукомы.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Рефрактометрия",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – автоматический анализ преломляющей способности глаза, позволяющий диагностировать миопию, гиперопию и астигматизм.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Биометрия",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – измерение ключевых параметров глаза: длины глазного яблока, глубины передней камеры, толщины хрусталика.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Пахиметрия",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – определение толщины роговицы с помощью света или ультразвука, особенно актуально перед лазерной коррекцией.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Кератотопография",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – исследование формы и кривизны роговицы для выявления возможных её патологий.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Периметрия",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – определение поля зрения, важное при диагностике глаукомы, повреждений зрительного нерва и заболеваний сетчатки.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Биомикроскопия",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – детальный осмотр переднего отдела глаза с увеличением с использованием щелевой лампы.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Фундус-диагностика",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – исследование сетчатки и сосудов глазного дна с помощью фундус-линзы.",
                                                },
                                            ],
                                            [
                                                {
                                                    value: "Диоптриметрия",
                                                    bold: true,
                                                },
                                                {
                                                    value: " – анализ диоптрий и параметров уже используемых очков для оценки правильности подобранной оптики.",
                                                },
                                            ],
                                        ],
                                    },
                                    {
                                        type: "text",
                                        text: "Все методики выполняются с высокой точностью, обеспечивая полную картину состояния органов зрения и позволяя подобрать эффективное лечение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Зачем обращаться к окулисту для проверки зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Компьютерная диагностика зрения в специализированном офтальмологическом центре — это важный этап сохранения здоровья глаз. Даже при отсутствии явных симптомов рекомендуется регулярно проходить осмотр у офтальмолога, особенно тем, кто имеет генетическую предрасположенность к офтальмологическим заболеваниям или проводит много времени за компьютером.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Врач-офтальмолог не ограничивается только внешним осмотром — при необходимости он направляет пациента на расширенную проверку зрения, включая компьютерные методы анализа.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Такая диагностика позволяет вовремя выявить проблемы рефракции, оценить внутриглазное давление и обнаружить ранние признаки заболеваний, например глаукомы или катаракты. Если вы ищете, где пройти профессиональное обследование глаз в Киеве, наша клиника предлагает квалифицированный приём и полный спектр современных диагностических процедур.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какова стоимость диагностики и преимущества комплексного подхода?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Многих пациентов интересует, сколько стоит компьютерная диагностика глаз. В нашем центре цена проверки зрения зависит от объёма обследования и используемых методик. Мы предоставляем прозрачную информацию о каждом этапе — от базовой консультации до расширенной диагностики и лазерного обследования. Актуальные цены можно узнать при записи или по телефону — также у нас регулярно действуют скидки и акции.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Полная диагностика глаз в нашей клинике включает как стандартные тесты, так и современные методы диагностики зрения. Такой комплексный подход позволяет получить точную картину состояния глаз, исключить противопоказания к различным видам лечения, включая хирургическое вмешательство, и минимизировать риски побочных эффектов. Это особенно важно при планировании лазерного обследования глаз и последующей коррекции.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Почему нас выбирают для проверки зрения в Киеве?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Наш офтальмологический центр в Киеве получил признание пациентов за точную диагностику, высокий уровень профессионализма врачей и внимательное отношение к каждому человеку. Мы предлагаем частную клинику с современной технической базой, опытной командой и комфортной атмосферой. Многие обращаются к нам по личным рекомендациям, зная, что здесь можно рассчитывать на качественное обследование и честную медицинскую оценку.",
                                        gap: true,
                                    },
                                    {
                                        type: "text",
                                        text: "Если вы выбираете клинику для прохождения компьютерной диагностики зрения, где можно получить точные данные о состоянии глаз, мы готовы предложить надёжный и удобный сервис. Запишитесь на приём, чтобы пройти комплексную проверку зрения без задержек и очередей. Мы определим оптимальный подход к вашей ситуации и составим персональный план дальнейших действий.",
                                    },
                                ],
                            },
                        ],
                    },
                },
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
                        adress: true,
                        cataract: [
                            "дітям",
                            "травматична катаракта",
                            "виправляємо наслідки «невдалих» операцій в інших клініках",
                            "беремося за найскладніші випадки",
                        ],
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
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про катаракту",
                        content: [
                            {
                                question: "Що таке катаракта?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Катаракта — це захворювання ока, при якому відбувається помутніння природного кришталика, що призводить до поступового погіршення зору. У нормі кришталик є прозорим і забезпечує фокусування світлових променів на сітківці, але при катаракті цей процес порушується.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Які ознаки можуть вказувати на розвиток катаракти?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Катаракта розвивається поступово і на початкових етапах її симптоми можуть бути малопомітними. Проте з її прогресуванням людина починає відчувати труднощі із зором на різних відстанях. Спочатку це може проявлятися під час читання чи спробі розглянути дрібні деталі. Можуть виникати проблеми із зором у сутінках, відчуття туманності або димки перед очима, ніби Ви дивитесь через матове скло. При цьому навіть правильний підбір окулярів не забезпечує значного покращення гостроти зору.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Як дізнатися, чи мені потрібна операція?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Для вирішення питання проведення операції, необхідно пройти повне діагностичне обстеження, включаючи консультацію лікаря, який спрогнозує результат операції і підбере інтраокулярну лінзу, виходячи з Ваших індивідуальних особливостей очей.",
                                    },
                                ],
                            },
                            {
                                question: "Чому кришталик мутніє?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Помутніння кришталика ока відбувається через структурні та хімічні зміни в білках і волокнах, які його складають, найчастіше це пов’язано з віковими процесами в організмі, порушенням кровообігу та недостатнім живленням тканин.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи можна вилікувати катаракту без операції?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Катаракту неможливо вилікувати без операції, оскільки це захворювання пов’язане з незворотним помутнінням природного кришталика ока. Жодні ліки, або краплі не здатні відновити прозорість кришталика. Операція по видаленню катаракти є єдиним ефективним способом лікування.",
                                    },
                                ],
                            },
                            {
                                question: "Скільки часу триває операція?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Саме завдяки високотехнологічному обладнанню та професійності хірурга, операція з видалення катаракти може займати до 5 хв. Але включаючи підготовку та післяопераційний огляд, орієнтуйтесь, що в центрі, в день операції, можете пробути 2-3 години.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи можливо зробити операцію одночасно на лівому та правому оці?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Одночасне проведення операції з видалення катаракти на обох очах не рекомендується. Інтервал між операціями зазвичай варіюється від одного дня до місяця, залежно від індивідуальних особливостей пацієнта та рекомендацій офтальмолога.",
                                    },
                                ],
                            },
                            {
                                question: "Як відбувається операція?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Видалення катаракти проводиться амбулаторно, без швів, без уколів, за новою технологією “Англійського водного потоку iQ-5 minutes” . Це найефективніший і комфортний метод. Робиться мікропрокол, вводиться спеціально – збалансований розчин, який дробить помутнілий кришталик, його видаляють і на його місце імплантується інтраокулярна лінза. Анестезія місцева, проводиться шляхом закапування знеболюючих крапель.",
                                    },
                                ],
                            },
                            {
                                question: "Чи потрібні окуляри після операції?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Після видалення кришталика, при катаракті, імплантуються різні типи інтраокулярних лінз. Якщо під час операції пацієнту імплантують монофокальні лінзи, після операції йому знадобляться окуляри для читання. У випадку, якщо пацієнт не бажає носити окуляри, ми використовуємо мультифокальні кришталики. Вибір кришталика здійснюється лікарем, після проведення діагностичного обстеження, виходячи з індивідуальних параметрів очей.",
                                    },
                                ],
                            },
                            {
                                question: "Який період відновлення?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Відновлення після операції з видалення катаракти, як правило, проходить швидко. Однак тривалість процесу може варіюватися залежно від індивідуальних характеристик пацієнта та складності проведеної операції.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "Surgical treatment of cataracts, strabismus, keratoconus and other ophthalmological pathologies.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "cataract treatment",
                        image: "/images/cataract-hero.jpg",
                        imgPositionMobile: "right 20% center",
                        adress: true,
                        cataract: [
                            "for children",
                            "traumatic cataract",
                            "we correct the consequences of “unsuccessful” surgeries in other clinics",
                            "we take on the most complex cases",
                        ],
                    },
                },
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
                {
                    type: "faq",
                    data: {
                        title: "Frequently Asked Questions About Cataracts",
                        content: [
                            {
                                question: "What is a cataract?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "A cataract is an eye condition in which the natural lens becomes cloudy, leading to gradual vision deterioration. Normally, the lens is transparent and focuses light on the retina, but with cataracts this process becomes impaired.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What symptoms may indicate the development of a cataract?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Cataracts develop gradually, and at early stages symptoms may be barely noticeable. As the condition progresses, a person may experience vision difficulties at different distances. Initially, this can appear while reading or trying to see small details. Problems with vision in low light, foggy or hazy vision, as if looking through frosted glass, may also occur. Even properly selected glasses may not significantly improve visual acuity.",
                                    },
                                ],
                            },
                            {
                                question: "How do I know if I need surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "To determine whether surgery is necessary, you must undergo a full diagnostic examination, including a consultation with the doctor who will predict the outcome of the surgery and select an intraocular lens based on your individual eye characteristics.",
                                    },
                                ],
                            },
                            {
                                question: "Why does the lens become cloudy?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Lens clouding occurs due to structural and chemical changes in the proteins and fibers that make up the lens. This is most often related to age-related processes, impaired blood circulation, and insufficient nutrition of the eye tissues.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can a cataract be treated without surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "A cataract cannot be treated without surgery, because it is associated with irreversible clouding of the natural lens. No medications or eye drops can restore its transparency. Cataract removal surgery is the only effective treatment.",
                                    },
                                ],
                            },
                            {
                                question: "How long does the surgery take?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Thanks to advanced technologies and the surgeon’s expertise, cataract removal can take as little as 5 minutes. However, including preparation and postoperative check-up, expect to spend 2–3 hours at the center on the day of surgery.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can cataract surgery be done on both eyes at the same time?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Simultaneous cataract surgery on both eyes is not recommended. The interval between surgeries usually varies from one day to one month, depending on the patient’s condition and the ophthalmologist’s recommendation.",
                                    },
                                ],
                            },
                            {
                                question: "How is the surgery performed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Cataract removal is performed on an outpatient basis, without stitches or injections, using the new “English Water Flow iQ-5 minutes” technology. It is the most effective and comfortable method. A micro-incision is made, a special balanced solution is injected to break up the cloudy lens, it is removed, and an intraocular lens is implanted in its place. Local anesthesia is provided with numbing eye drops.",
                                    },
                                ],
                            },
                            {
                                question: "Do I need glasses after surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "After cataract removal, different types of intraocular lenses can be implanted. If monofocal lenses are used, glasses will be needed for reading. If the patient wishes to avoid glasses, multifocal lenses can be implanted. The choice of lens is made by the doctor after diagnostic testing, based on the individual eye parameters.",
                                    },
                                ],
                            },
                            {
                                question: "What is the recovery period?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Recovery after cataract surgery is usually fast. However, the duration may vary depending on the patient’s individual characteristics and the complexity of the surgery.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "Хирургическое лечение катаракты, косоглазия, кератоконуса и других офтальмологических патологий.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "лечение катаракты",
                        image: "/images/cataract-hero.jpg",
                        imgPositionMobile: "right 20% center",
                        adress: true,
                        cataract: [
                            "детям",
                            "травматическая катаракта",
                            "исправляем последствия «неудачных» операций в других клиниках",
                            "берёмся за самые сложные случаи",
                        ],
                    },
                },
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
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о катаракте",
                        content: [
                            {
                                question: "Что такое катаракта?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Катаракта — это заболевание глаза, при котором происходит помутнение естественного хрусталика, что приводит к постепенному ухудшению зрения. В норме хрусталик прозрачный и обеспечивает фокусировку света на сетчатке, но при катаракте этот процесс нарушается.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие признаки могут указывать на развитие катаракты?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Катаракта развивается постепенно, и на ранних стадиях её симптомы могут быть малозаметными. По мере прогрессирования возникают трудности со зрением на разных расстояниях. Сначала это может проявляться при чтении или попытке рассмотреть мелкие детали. Возможны проблемы со зрением в сумерках, ощущение туманности или дымки перед глазами, будто вы смотрите через матовое стекло. Даже правильно подобранные очки не дают значительного улучшения остроты зрения.",
                                    },
                                ],
                            },
                            {
                                question: "Как узнать, нужна ли мне операция?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Чтобы решить вопрос о необходимости операции, требуется пройти полное диагностическое обследование, включая консультацию врача, который спрогнозирует результат операции и подберёт интраокулярную линзу с учётом индивидуальных особенностей ваших глаз.",
                                    },
                                ],
                            },
                            {
                                question: "Почему хрусталик мутнеет?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Помутнение хрусталика происходит из-за структурных и химических изменений белков и волокон, из которых он состоит. Чаще всего это связано с возрастными изменениями организма, нарушением кровообращения и недостаточным питанием тканей.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли вылечить катаракту без операции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вылечить катаракту без операции невозможно, поскольку она связана с необратимым помутнением естественного хрусталика. Ни препараты, ни капли не способны восстановить его прозрачность. Операция по удалению катаракты — единственный эффективный метод лечения.",
                                    },
                                ],
                            },
                            {
                                question: "Сколько длится операция?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Благодаря высокотехнологичному оборудованию и профессионализму хирурга, операция по удалению катаракты может занимать до 5 минут. Однако вместе с подготовкой и послеоперационным осмотром в центре вы проведёте 2–3 часа.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли сделать операцию сразу на обоих глазах?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Одновременное проведение операции на обоих глазах не рекомендуется. Интервал между операциями может варьироваться от одного дня до месяца, в зависимости от особенностей пациента и рекомендаций офтальмолога.",
                                    },
                                ],
                            },
                            {
                                question: "Как проходит операция?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Удаление катаракты проводится амбулаторно, без швов и инъекций, по новой технологии «Английский водный поток iQ-5 minutes». Это самый эффективный и комфортный метод. Выполняется микроразрез, вводится специальный сбалансированный раствор, который дробит помутневший хрусталик, его удаляют и на его место имплантируют интраокулярную линзу. Местная анестезия проводится с помощью обезболивающих капель.",
                                    },
                                ],
                            },
                            {
                                question: "Нужны ли очки после операции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "После удаления хрусталика могут имплантироваться различные типы интраокулярных линз. Если используются монофокальные линзы, очки для чтения будут необходимы. Если пациент хочет избежать очков, возможно использование мультифокальных хрусталиков. Выбор линзы осуществляет врач после диагностики, исходя из индивидуальных параметров глаз.",
                                    },
                                ],
                            },
                            {
                                question: "Каков период восстановления?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Восстановление после операции по удалению катаракты, как правило, проходит быстро. Однако длительность может варьироваться в зависимости от индивидуальных особенностей пациента и сложности проведённой операции.",
                                    },
                                ],
                            },
                        ],
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "лікування синдрому сухого ока",
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лікування синдрому сухого ока у Києві",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про лікування синдрому сухого",
                        content: [
                            {
                                question: "ІPL – це лазер?",
                                answer: [
                                    { type: "text", text: "Ні." },
                                    {
                                        type: "text",
                                        text: "IPL (укр. інтенсивне пульсуюче світло) – дуже яскраве світло із широким діапазоном довжин хвиль. Джерелом світла є ксенонова лампа, а корисний діапазон відокремлюють із застосуваннями світлофільтрів.",
                                    },
                                ],
                            },
                            {
                                question: "Наскільки безпечна процедура?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Процедури із використанням IPL були вперше виконані ще у 1992 році. З того часу IPL терапія успішно застосовується для лікування великої кількості станів у пацієнтів всіх вікових категорій: від видалення родимих плям, пігментацій та судин до фотоомолодження.",
                                    },
                                    {
                                        type: "text",
                                        text: "Оскільки шкідливе випромінювання повністю «відрізається» світлофільтром, процедура цілком безпечна для пацієнта.",
                                    },
                                ],
                            },
                            {
                                question: "Чи болісна процедура?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Під час процедури IPL ви будете відчувати пощипування та бачити яскраві спалахи крізь закриті окулярами очі.",
                                    },
                                    {
                                        type: "text",
                                        text: "Для того, щоб процедура була комфортною, апарат обладнаний системою, що охолоджує шкіру. Відповідно до ваших відчуттів лікар налаштує параметри таким чином, щоб отримати максимальний лікувальний ефект та мінімізувати будь-які неприємні відчуття.",
                                    },
                                ],
                            },
                            {
                                question: "Скільки сеансів потрібно?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "IPL терапія активує процеси відновлення в зоні, де проводиться процедура. В результаті зменшується запалення, оновлюються тканини, нормалізується стан судин. Зміни можна помітити через 10-12 днів після сеансу, але отримання стабільної позитивної динаміки, особливо якщо є запалення або дисфункція мейбомієвих залоз, треба «закріпити» ефект.",
                                    },
                                    {
                                        type: "text",
                                        text: "Загальна рекомендована кількість сеансів для отримання стійкого ефекту – 3-4. Ваш лікар сформує курс з урахуванням форми та ступеню хвороби сухого ока, стану повік, шкіри периорбітальної ділянки та стану здоров’я.",
                                    },
                                ],
                            },
                            {
                                question: "Скільки займає сеанс?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "В нашій клініці процедура IPL терапії поєднана з автоматичним масажем повік для отримання стійкого та тривалого ефекту від лікувальної процедури.",
                                    },
                                    {
                                        type: "text",
                                        text: "Комплексна процедура IPL+автоматичний масаж повік займає до 40 хвилин.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи буде обличчя червоним/набряклим? Коли можна повернутись до роботи?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лікування хвороби сухого ока з використанням IPL терапія зазвичай добре переноситься пацієнтами: можна повернутись до рутинних справ одразу після виходу з маніпуляційного кабінету.",
                                    },
                                    {
                                        type: "text",
                                        text: "Оскільки терапія спрямована також на лікування судинних сіточок, зірочок, розацеа та будь-яких інших запальних захворювань шкіри, ділянка навколо очей може стати рожевою та злегка набрякнути. Лікар обов’язково обговорить з вами режими лікування та надасть індивідуальні рекомендації.",
                                    },
                                ],
                            },
                            {
                                question: "Чи зможу відмовитись від крапель?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Після завершення курсу IPL використання зволожуючих крапель мінімізується: більшість пацієнтів не мають потреби у використанні. Для пацієнтів, які мають високе зорове навантаження, ми пропонуємо курс підтримуючих процедур, які підтримують позитивний ефект та здоров’я очей.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "We provide an effective and individual approach to eliminating unpleasant symptoms to restore comfort and health to your eyes.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "dry eye syndrome treatment",
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for dry eye syndrome treatment in Kyiv",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently Asked Questions about Dry Eye Treatment",
                        content: [
                            {
                                question: "Is IPL a laser?",
                                answer: [
                                    { type: "text", text: "No." },
                                    {
                                        type: "text",
                                        text: "IPL (Intense Pulsed Light) is a very bright light with a broad range of wavelengths. The light source is a xenon lamp, and the useful spectrum is separated using light filters.",
                                    },
                                ],
                            },
                            {
                                question: "How safe is the procedure?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "IPL procedures were first performed in 1992. Since then, IPL therapy has been successfully used to treat a wide range of conditions in patients of all ages: from removing birthmarks, pigmentation and vessels to photo-rejuvenation.",
                                    },
                                    {
                                        type: "text",
                                        text: "As harmful radiation is fully filtered out with a light filter, the procedure is completely safe for the patient.",
                                    },
                                ],
                            },
                            {
                                question: "Is the procedure painful?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "During the IPL procedure, you may feel a tingling sensation and see bright flashes of light through protective goggles.",
                                    },
                                    {
                                        type: "text",
                                        text: "To ensure comfort, the device is equipped with a skin cooling system. Depending on your sensations, the doctor will adjust the parameters to achieve maximum therapeutic effect while minimizing discomfort.",
                                    },
                                ],
                            },
                            {
                                question: "How many sessions are needed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "IPL therapy activates recovery processes in the treated area. As a result, inflammation decreases, tissues renew, and the condition of the vessels normalizes. Improvements can be noticed 10–12 days after a session, but to ensure stable positive progress—especially if inflammation or meibomian gland dysfunction is present—it is important to solidify the result.",
                                    },
                                    {
                                        type: "text",
                                        text: "The generally recommended number of sessions for long-lasting results is 3–4. Your doctor will determine a personalized treatment plan considering the severity and type of dry eye disease, eyelid condition, periocular skin, and overall health.",
                                    },
                                ],
                            },
                            {
                                question: "How long does one session take?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "In our clinic, IPL therapy is combined with an automated eyelid massage to achieve a stable and long-lasting treatment effect.",
                                    },
                                    {
                                        type: "text",
                                        text: "A combined IPL + automated eyelid massage session takes up to 40 minutes.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Will my face be red or swollen? When can I return to work?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Dry eye treatment using IPL therapy is generally well tolerated: you can return to your routine immediately after leaving the procedure room.",
                                    },
                                    {
                                        type: "text",
                                        text: "Since the procedure also targets vascular issues such as telangiectasia, rosacea and other inflammatory skin conditions, the periocular area may become slightly pink and swollen. Your doctor will discuss treatment protocols and provide personalized recommendations.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Will I be able to stop using eye drops?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "After completing the IPL course, the need for lubricating eye drops is significantly reduced: most patients no longer require them. For patients with high visual load, we recommend supportive sessions to maintain the effect and eye health.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "Мы обеспечиваем эффективный и индивидуальный подход к устранению неприятных симптомов, чтобы вернуть комфорт и здоровье вашим глазам.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "лечение синдрома сухого глаза",
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение синдрома сухого глаза в Киеве",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы о лечении синдрома сухого глаза",
                        content: [
                            {
                                question: "IPL — это лазер?",
                                answer: [
                                    { type: "text", text: "Нет." },
                                    {
                                        type: "text",
                                        text: "IPL (интенсивный импульсный свет) — это очень яркий свет с широким диапазоном длин волн. Источником света служит ксеноновая лампа, а полезный диапазон отделяется при помощи светофильтров.",
                                    },
                                ],
                            },
                            {
                                question: "Насколько безопасна процедура?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Процедуры IPL впервые начали применять ещё в 1992 году. С тех пор IPL-терапия успешно используется для лечения широкого спектра состояний у пациентов всех возрастных категорий: от удаления пигментации, сосудов и родимых пятен до фотоомоложения.",
                                    },
                                    {
                                        type: "text",
                                        text: "Поскольку вредное излучение полностью «отсекается» светофильтром, процедура абсолютно безопасна для пациента.",
                                    },
                                ],
                            },
                            {
                                question: "Процедура болезненная?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Во время IPL-процедуры вы можете ощущать лёгкое пощипывание и видеть яркие вспышки через защитные очки.",
                                    },
                                    {
                                        type: "text",
                                        text: "Для повышения комфорта аппарат оснащён системой охлаждения кожи. В зависимости от ощущений врач настроит параметры так, чтобы получить максимальный лечебный эффект и минимизировать дискомфорт.",
                                    },
                                ],
                            },
                            {
                                question: "Сколько сеансов необходимо?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "IPL-терапия активирует восстановительные процессы в зоне воздействия. В результате уменьшается воспаление, обновляются ткани, нормализуется состояние сосудов. Первые изменения заметны через 10–12 дней, но для устойчивого эффекта — особенно при воспалении или дисфункции мейбомиевых желез — важно закрепить результат.",
                                    },
                                    {
                                        type: "text",
                                        text: "Рекомендуемое количество процедур для стойкого эффекта — 3–4. Врач сформирует курс, учитывая форму и тяжесть сухого глаза, состояние век, кожи периорбитальной области и общее состояние здоровья.",
                                    },
                                ],
                            },
                            {
                                question: "Сколько длится сеанс?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "В нашей клинике IPL-терапия совмещена с автоматическим массажем век для достижения стойкого и продолжительного лечебного эффекта.",
                                    },
                                    {
                                        type: "text",
                                        text: "Комплексная процедура IPL + автоматический массаж век занимает до 40 минут.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Будет ли лицо красным/отёчным? Когда можно вернуться к работе?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лечение синдрома сухого глаза с использованием IPL-терапии обычно хорошо переносится: вы можете вернуться к обычным делам сразу после процедуры.",
                                    },
                                    {
                                        type: "text",
                                        text: "Так как терапия направлена также на лечение сосудистых сеточек, розацеа и других воспалительных заболеваний кожи, область вокруг глаз может слегка порозоветь и немного отечь. Врач обязательно обсудит планы лечения и даст индивидуальные рекомендации.",
                                    },
                                ],
                            },
                            {
                                question: "Смогу ли я отказаться от капель?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "После завершения курса IPL необходимость в увлажняющих каплях значительно снижается: большинству пациентов они уже не нужны. Для пациентов с высокой зрительной нагрузкой мы предлагаем поддерживающие процедуры для сохранения результата и здоровья глаз.",
                                    },
                                ],
                            },
                        ],
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "Вітреоретинальна хірургія",
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лікування захворювань сітківки та склоподібного тіла в Киеве",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про рефракційну заміну кришталика (RLE)",
                        content: [
                            {
                                question:
                                    "Що таке рефракційна заміна кришталика (RLE)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "RLE — це мікроінвазивна операція, під час якої природний кришталик ока замінюють на інтраокулярну лінзу (ІОЛ). Метод коригує пресбіопію (вікову далекозорість), міопію, гіперметропію та астигматизм, і є альтернативою лазерній корекції зору при тонкій або нерівній рогівці.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чим RLE відрізняється від лазерної корекції зору?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазерна корекція змінює рогівку, а рефракційна заміна кришталика працює з кришталиком і не залежить від його товщини/форми. Тому RLE частіше обирають при тонкій рогівці, високих діоптріях чи комбінованих вадах зору.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Кому показана рефракційна ленсектомія?",
                                answer: [
                                    {
                                        type: "list",
                                        list: [
                                            "45+ із пресбіопією;",
                                            "високі градуси міопії/гіперметропії;",
                                            "астигматизм (корекція торичною ІОЛ);",
                                            "протипоказання до лазера;",
                                            "ранні зміни кришталика/ризик катаракти;",
                                            "непереносимість контактних лінз, потреба у стабільному зорі для роботи/нічного водіння.",
                                        ],
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки триває операція RLE і як проходить?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Зазвичай кілька хвилин на одне око: мікророзріз 2–2,2 мм, щадне видалення кришталика, імплантація ІОЛ у капсульний мішок. Процедура амбулаторна.",
                                    },
                                ],
                            },
                            {
                                question: "Чи справді RLE запобігає катаракті?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так. Оскільки власний кришталик видаляється, катаракта більше не розвивається. Це одна з ключових переваг рефракційної заміни кришталика.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи можна під час RLE виправити астигматизм?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так, за допомогою торичних ІОЛ (наприклад, Rayner RayOne Toric) одночасно коригуємо астигматизм і отримуємо стабільний зір.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи можна робити RLE при тонкій рогівці або після відмови в лазерній корекції?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Саме тут RLE — оптимальна альтернатива лазеру: метод не змінює рогівку і дає передбачуваний результат при тонкій чи нерівній рогівці.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain: "Treatment of diseases of the retina and vitreous body.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Vitreoretinal surgery",
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for treatment of diseases of the retina and vitreous body in Kiev",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently Asked Questions about Refractive Lens Exchange (RLE)",
                        content: [
                            {
                                question:
                                    "What is Refractive Lens Exchange (RLE)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "RLE is a micro-invasive surgery in which the natural lens of the eye is replaced with an intraocular lens (IOL). The method corrects presbyopia, myopia, hyperopia, and astigmatism, and is an alternative to laser vision correction in cases of thin or irregular cornea.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How is RLE different from laser eye correction?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Laser correction reshapes the cornea, while refractive lens exchange works with the lens and does not depend on its thickness or shape. Therefore, RLE is often chosen for thin cornea, high diopters or combined vision issues.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Who is a candidate for refractive lens exchange?",
                                answer: [
                                    {
                                        type: "list",
                                        list: [
                                            "People aged 45+ with presbyopia;",
                                            "High degrees of myopia/hyperopia;",
                                            "Astigmatism (corrected with a toric IOL);",
                                            "Contraindications to laser correction;",
                                            "Early lens changes / risk of cataract;",
                                            "Contact lens intolerance, need for stable vision for work/night driving.",
                                        ],
                                    },
                                ],
                            },
                            {
                                question:
                                    "How long does an RLE procedure take and how is it performed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Usually a few minutes per eye: a 2–2.2 mm micro-incision, gentle lens removal, and IOL implantation into the capsular bag. The procedure is outpatient.",
                                    },
                                ],
                            },
                            {
                                question: "Does RLE really prevent cataracts?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes. Since the natural lens is removed, cataract can no longer develop. This is one of the main advantages of refractive lens exchange.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can astigmatism be corrected during RLE?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes. With toric IOLs (e.g., Rayner RayOne Toric), we correct astigmatism and achieve stable vision at the same time.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can RLE be performed in cases of thin cornea or after being rejected for laser surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "This is exactly where RLE is the optimal alternative: the method does not change the cornea and provides a predictable outcome even with thin or irregular cornea.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain: "Лечение заболеваний сетчатки и стекловидного тела.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Витреоретинальная хирургия",
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение заболеваний сетчатки и стекловидного тела в Киеве",
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы о рефракционной замене хрусталика (RLE)",
                        content: [
                            {
                                question:
                                    "Что такое рефракционная замена хрусталика (RLE)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "RLE — это микроинвазивная операция, при которой природный хрусталик глаза заменяют внутри­глазной линзой (ИОЛ). Метод корректирует пресбиопию, миопию, гиперметропию и астигматизм, и является альтернативой лазерной коррекции зрения при тонкой или неровной роговице.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чем RLE отличается от лазерной коррекции зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазерная коррекция изменяет роговицу, а рефракционная замена хрусталика работает с хрусталиком и не зависит от его толщины или формы. Поэтому RLE чаще выбирают при тонкой роговице, высоких диоптриях или комбинированных нарушениях зрения.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Кому показана рефракционная ленсэктомия?",
                                answer: [
                                    {
                                        type: "list",
                                        list: [
                                            "Возраст 45+ с пресбиопией;",
                                            "Высокие степени миопии/гиперметропии;",
                                            "Астигматизм (коррекция торической ИОЛ);",
                                            "Противопоказания к лазеру;",
                                            "Ранние изменения хрусталика/риск катаракты;",
                                            "Непереносимость контактных линз, потребность в стабильном зрении для работы/ночного вождения.",
                                        ],
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько длится операция RLE и как она проходит?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Обычно несколько минут на один глаз: микроразрез 2–2,2 мм, щадящее удаление хрусталика и имплантация ИОЛ в капсульный мешок. Процедура амбулаторная.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Правда ли, что RLE предотвращает катаракту?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да. Поскольку собственный хрусталик удаляется, катаракта больше не развивается. Это одно из ключевых преимуществ RLE.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли во время RLE исправить астигматизм?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, с помощью торических ИОЛ (например, Rayner RayOne Toric) мы одновременно корректируем астигматизм и получаем стабильное зрение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли делать RLE при тонкой роговице или после отказа в лазерной коррекции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "В таких случаях RLE — оптимальная альтернатива лазеру: метод не изменяет роговицу и обеспечивает предсказуемый результат при её тонкости или неровности.",
                                    },
                                ],
                            },
                        ],
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "лазерна \nкорекція зору ",
                        text: "Цей метод дозволяє людям із поганим зором повернутися до нормального життя без окулярів та контактних лінз.",
                        adress: true,
                        videoSmallScreens: "/videos/lazer-hero-tab.mp4",
                        videoBigScreens: "/videos/lazer-desk-hero.mp4",
                        lazer: {
                            listTitle: "рекомендовано при:",
                            list: [
                                "астигматизмі",
                                "короткозорості",
                                "міопії",
                                "далекозорості",
                            ],
                        },
                    },
                },
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
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про лазерну корекцію зору",
                        content: [
                            {
                                question:
                                    "Що представляє собою лазерна корекція зору?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазерна корекція зору – це сучасна процедура, що дозволяє коригувати короткозорість, далекозорість та астигматизм. За допомогою лазера змінюється форма рогівки, що покращує фокусування світла на сітківці ока, забезпечуючи чітке зображення.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи потрібно проходити повне комплексне обстеження перед проведенням лазерної корекції зору?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так, для вирішення питання можливості проведення лазерної корекції необхідно пройти повне діагностичне обстеження, включаючи консультацію лікаря. Виходячи з отриманих даних лікар спрогнозує точний результат операції і підбере індивідуальну методику лазерної корекції зору.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи є можливість пройти повне комплексне обстеження та лазерну корекцію зору в один день?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так, в нашому центрі Ви можете пройти повне комплексне обстеження та за наявності показань, виконати лазерну корекцію зору в той самий день (у середу, четвер, п’ятницю або суботу, за попереднім записом на ранок). В такому випадку плануйте, що в нашому центрі Ви проведете близько 4-6 годин. Якщо Ви з іншого міста, заплануйте післяопераційний огляд на наступний день.",
                                    },
                                ],
                            },
                            {
                                question: "Як обрати метод корекції?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Метод лазерної корекції зору підбирає виключно лікар, зважаючи на індивідуальні особливості Вашого зору та результати обстеження.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Яка тривалість процедури лазерної корекції зору?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Завдяки новітньому обладнанню операція на обох очах триває не більше 7 хвилин. Загалом, разом із підготовкою та післяопераційним оглядом в центрі пробудете близько 2 годин.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи боляче робити лазерну корекцію зору?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Процедура безболісна, проводиться під місцевою анестезією у вигляді крапель, які знеболюють рогівку. Після операції можуть бути тимчасові неприємні відчуття, такі як печіння, сухість або відчуття піску в очах, але це триває зазвичай кілька годин.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain:
                "Modern methods of correcting refractive errors and restoring visual acuity.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Laser \nVision Correction",
                        text: "This method allows people with poor vision to return to normal life without glasses or contact lenses.",
                        adress: true,
                        videoSmallScreens: "/videos/lazer-hero-tab.mp4",
                        videoBigScreens: "/videos/lazer-desk-hero.mp4",
                    },
                },
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
                {
                    type: "faq",
                    data: {
                        title: "Frequently Asked Questions About Laser Vision Correction",
                        content: [
                            {
                                question: "What is laser vision correction?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Laser vision correction is a modern procedure that helps correct myopia, hyperopia and astigmatism. The laser changes the shape of the cornea, improving the eye’s ability to focus light on the retina, resulting in clear vision.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is a full comprehensive examination required before laser vision correction?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, to determine whether laser correction is possible, you must undergo a full diagnostic examination, including a consultation with the doctor. Based on the results, the doctor will predict the expected outcome of the surgery and select an individual correction method.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is it possible to have a full examination and laser vision correction on the same day?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, in our center, you can undergo a full comprehensive examination and, if there are indications, have laser correction on the same day (Wednesday–Saturday by prior morning appointment). In this case, plan to spend about 4–6 hours at our clinic. If you come from another city, schedule a postoperative check-up for the next day.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How is the correction method chosen?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The correction method is selected exclusively by the doctor, based on your individual eye characteristics and examination results.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How long does laser vision correction take?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Thanks to advanced equipment, surgery on both eyes takes no more than 7 minutes. In total, including preparation and postoperative check-up, you will spend about 2 hours in the center.",
                                    },
                                ],
                            },
                            {
                                question: "Is laser vision correction painful?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The procedure is painless and performed under local anesthesia in the form of eye drops that numb the cornea. After surgery, you may experience temporary discomfort such as burning, dryness or a feeling of sand in the eyes, but this usually lasts only a few hours.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain:
                "Современные методы устранения рефракционных нарушений восстановления четкости зрения.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Лазерная \nкоррекция зрения",
                        text: "Этот метод позволяет людям с плохим зрением вернуться к нормальной жизни без очков и контактных линз.",
                        adress: true,
                        videoSmallScreens: "/videos/lazer-hero-tab.mp4",
                        videoBigScreens: "/videos/lazer-desk-hero.mp4",
                    },
                },
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
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о лазерной коррекции зрения",
                        content: [
                            {
                                question:
                                    "Что представляет собой лазерная коррекция зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазерная коррекция зрения — это современная процедура, позволяющая исправлять близорукость, дальнозоркость и астигматизм. С помощью лазера изменяется форма роговицы, что улучшает фокусировку света на сетчатке и обеспечивает чёткое изображение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Нужно ли проходить полное комплексное обследование перед процедурой?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, чтобы принять решение о возможности проведения лазерной коррекции, необходимо пройти полное диагностическое обследование, включая консультацию врача. На основании полученных данных врач спрогнозирует результат операции и подберёт индивидуальную методику коррекции.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли пройти обследование и лазерную коррекцию в один день?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, в нашем центре вы можете пройти комплексное обследование и при наличии показаний выполнить лазерную коррекцию в тот же день (в среду, четверг, пятницу или субботу по предварительной записи на утро). Планируйте провести у нас 4–6 часов. Если вы из другого города, запланируйте послеоперационный осмотр на следующий день.",
                                    },
                                ],
                            },
                            {
                                question: "Как выбрать метод коррекции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Метод лазерной коррекции зрения подбирает исключительно врач, учитывая индивидуальные особенности вашего зрения и результаты обследования.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько длится лазерная коррекция зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Благодаря современному оборудованию операция на обоих глазах занимает не более 7 минут. В целом, вместе с подготовкой и послеоперационным осмотром вы проведёте в центре около 2 часов.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Больно ли делать лазерную коррекцию?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Процедура безболезненна, проводится под местной анестезией в виде капель, которые обезболивают роговицу. После операции возможны временные неприятные ощущения: жжение, сухость или ощущение песка в глазах, но обычно это проходит через несколько часов.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        name: servicesList.find(s => s.key === "dityache-viddilennya")!,
        price: findPriceItem("dityache-viddilennya")!,
        uk: {
            textMain:
                "Сучасні методи виправлення рефракційних порушень відновлення чіткості зору.Провідні дитячі офтальмологи – досвідчені лікарі, які знайдуть підхід до кожної дитини.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Дитяче \nвідділення",
                    },
                },
                { type: "doctors" },
            ],
        },
        en: {
            textMain:
                "Leading pediatric ophthalmologists are experienced doctors who will find an approach to each child.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Paediatric \nDepartment",
                    },
                },
                { type: "doctors" },
            ],
        },
        ru: {
            textMain:
                "Современные методы устранения рефракционных нарушений восстановления четкости зрения.Ведущие детские офтальмологи – опытные врачи, которые найдут подход к каждому ребенку.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Детское \nотделение",
                    },
                },
                { type: "doctors" },
            ],
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
                    type: "hero",
                    data: {
                        title: "лікування \nкератоконусу",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "Keratoconus \ntreatment",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "Лечение \nкератоконуса",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "рефракційна \nленсектомія",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "refractive \nlensectomy",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "рефракционная \nленсектомия",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "лазерне лікування захворювань ока",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "laser treatment of eye diseases",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "лазерное лечение заболеваний глаза",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "інтравітреальні ін'єкції",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "intravitreal injections",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "интравитреальные инъекции",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "хірургічне лікування глаукоми",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "surgical treatment of glaucoma",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "хирургическое лечение глаукомы",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "лікування косоокості",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "strabismus treatment",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "лечение косоглазия",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "Хірургія повік і кон’юнктиви",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "Eyelid and conjunctival surgery",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "Хирургия век и конъюнктивы",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "ксенонотерапія",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "xenotherapy",
                    },
                },
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
                    type: "hero",
                    data: {
                        title: "ксенонотерапия",
                    },
                },
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
