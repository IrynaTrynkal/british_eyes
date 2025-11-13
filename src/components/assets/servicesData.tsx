import { CataractGreenSection } from "../someServiceComponents/individualComponents/CataractGreenSection";
import { LansectomyGreenSection } from "../someServiceComponents/individualComponents/LansectomyGreenSection";
import {
    discountList,
    DiscountLocale,
    DiscountNoLocale,
} from "./discount.Data";
import { ServicesKeyType, servicesList, ServicesListProps } from "./menu";
import { PriceItemType, priceList } from "./priceList";

export type SectionType =
    | { type: "preview"; data: PreviewProps }
    | { type: "roundImageAndTextSection"; data: RoundBlock }
    | { type: "numberListSection"; data: NumberListProps }
    | { type: "methodsSection"; data: MethodsSectionProps }
    | { type: "greenSliderSection"; data: GreenSliderSectionProps }
    | { type: "advantages"; data: AdvantageServiceSectionProps }
    | { type: "cta" }
    | { type: "priceSection"; data: PriceSectionProps }
    | { type: "doctors" }
    | { type: "giftCTA" }
    | { type: "hero"; data: HeroSomeServiceProps }
    | { type: "faq"; data: FAQServiceSectionType }
    | { type: "textsColumns"; data: TextsColumnsSectionType }
    | { type: "global" }
    | { type: "individual"; data: React.ReactNode };

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
    cta?: boolean;
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
    greenText?: string;
    content?: TextType[];
};
export type BtnType = {
    btnName: string;
    btnLink: string;
    btnSecondary?: boolean;
};
export type RoundImageAndTextProps = {
    title: string;
    image?: string;
    cta?: boolean;
    logo?: boolean;
    imagePosition?: "object-left" | "object-right";
    text: RoundTextType[];
    btn?: BtnType[];
};

export type RoundBlock = {
    firstImageLeft?: boolean;
    paddingTop?: boolean;
    paddingBottom?: boolean;
    data: RoundImageAndTextProps[];
};

export type NumberListItemType = {
    itemTitle: string;
    itemText: string[];
    list?: boolean;
};
export type PDFType = {
    title: string;
    description?: string;
    link: string;
    btnName: string;
    downloadingName: string;
};

export type NumberListProps = {
    paddingTop?: boolean;
    paddingBottom?: boolean;
    image?: string;
    title?: string;
    text?: string[];
    listTitle: string;
    list: NumberListItemType[];
    pdfCard?: PDFType;
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

export type DiscountType = {
    text?: DiscountNoLocale;
    textLocal?: DiscountLocale;
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

export type ParagraphContent = {
    type: "text";
    text: string | TextSegment[];
    gap?: boolean;
};

export type ListContent = {
    type: "list";
    list: (string | TextSegment[])[];
    gap?: boolean;
    numeric?: boolean;
};

export type ImageContent = {
    type: "image";
    gap?: boolean;
    maxH?: string;
    image: string;
};

export type ComponentContent = {
    type: "component";
    component: React.ReactNode;
    gap?: boolean;
};

export type TableContent = {
    type: "table";
    gap?: boolean;
    headers: string[];
    rows: string[][];
};

export type TextType =
    | ParagraphContent
    | ListContent
    | ImageContent
    | ComponentContent
    | TableContent;

export type TextSegment = {
    value: string;
    bold?: boolean;
    subtitle?: boolean;
};

export type BlockType = {
    title: string;
    text: TextType[];
};

export type TextsColumnsSectionType = {
    title: string;
    text?: string;
    paddingTop?: boolean;
    blocks: BlockType[];
};

export type FAQServiceListType = {
    question: string;
    answer: TextType[];
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
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Повна діагностика зору включає",
                                image: "/images/perevirka-round.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Під час повного обстеження зору виконуються:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "вимірювання параметрів ока на цифрових приладах;",
                                                    "аналіз медичної документації;",
                                                    "спеціальні діагностичні тести для кожного ока окремо та у поєднаному режимі;",
                                                    "мікроскопічний огляд анатомічних структур ока із застосуванням сильного збільшення.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Для перевірки гостроти зору використовуються класичні таблиці з літерами чи символами, що розташовані на різній відстані. Це допомагає визначити ступінь короткозорості, далекозорості або наявність астигматизму та підібрати відповідні лінзи.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Під час діагностики можуть використовуватися краплі для розширення зіниць. Вони тимчасово блокують роботу акомодаційного м'яза, дозволяючи точніше оцінити рефракцію ока та уважно вивчити стан очного дна.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Весь процес обстеження проходить у щадному та комфортному форматі, не вимагає контакту з поверхнею ока та підходить як дорослим, так і дітям.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Регулярна перевірка зору – основа профілактики захворювань",
                                image: "/images/choice.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Періодична діагностика очей потрібна кожному, хто піклується про своє здоров'я. Це не просто спосіб зберегти добрий зір, а й ефективний метод раннього виявлення різних патологій, у тому числі тих, які не пов'язані безпосередньо з органами зору.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Під час обстеження офтальмолог може виявити ознаки загальних захворювань, оскільки стан судин сітківки відбиває роботу серцево-судинної системи. Очі — один із небагатьох органів, за якими можна отримати інформацію про вени та артерії без складних процедур.",
                                            },
                                            {
                                                type: "text",
                                                text: "Навіть за відсутності скарг важливо не пропускати профілактичних оглядів. Деякі порушення розвиваються потай і не проявляють себе на ранніх стадіях. Тільки регулярний контроль дозволяє своєчасно помітити зміни та запобігти погіршенню зору.",
                                            },
                                        ],
                                    },
                                    {
                                        greenText:
                                            "Оптимальна частота відвідування офтальмолога – один раз на рік. Це правило актуальне навіть для тих, хто не має проблем із зором. Профілактика завжди ефективніша, ніж лікування - особливо коли йдеться про очі.",
                                    },
                                ],
                            },
                        ],
                    },
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
                            text: discountList.find(
                                disk => disk.key === "perevirka-zoru"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "perevirka-zoru"
                            )?.localeText.uk,
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
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Comprehensive vision diagnostics includes",
                                image: "/images/perevirka-round.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "During a full vision examination, the following are performed:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "measurement of eye parameters using digital devices;",
                                                    "analysis of medical records;",
                                                    "special diagnostic tests for each eye separately and in combined mode;",
                                                    "microscopic examination of the anatomical structures of the eye using high magnification.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "To check visual acuity, classic charts with letters or symbols placed at different distances are used. This helps determine the degree of myopia, hyperopia, or astigmatism and select appropriate lenses.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "During the diagnostics, drops may be used to dilate the pupils. They temporarily block the accommodation muscle, allowing a more accurate assessment of the eye’s refraction and a thorough examination of the fundus.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "The entire diagnostic process is gentle and comfortable, does not require contact with the eye surface, and is suitable for both adults and children.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Regular vision check-ups – the foundation of disease prevention",
                                image: "/images/choice.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Regular eye diagnostics are necessary for everyone who cares about their health. It is not only a way to maintain good vision but also an effective method for early detection of various pathologies, including those not directly related to the visual organs.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "During the examination, an ophthalmologist can detect signs of general diseases since the condition of the retinal vessels reflects the functioning of the cardiovascular system. The eyes are one of the few organs through which information about veins and arteries can be obtained without complex procedures.",
                                            },
                                            {
                                                type: "text",
                                                text: "Even in the absence of complaints, it is important not to skip preventive examinations. Some disorders develop silently and do not manifest at early stages. Only regular monitoring allows timely detection of changes and prevention of vision deterioration.",
                                            },
                                        ],
                                    },
                                    {
                                        greenText:
                                            "The optimal frequency of visiting an ophthalmologist is once a year. This rule applies even to those who have no vision problems. Prevention is always more effective than treatment — especially when it comes to your eyes.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        image: "/images/choice.jpg",
                        title: "Computer vision diagnostics: why it’s done and how the procedure works",
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
                        title: "Comprehensive eye examination: what tests are performed",
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
                        title: "Advantages of computerized eye examination",
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
                            text: discountList.find(
                                disk => disk.key === "perevirka-zoru"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "perevirka-zoru"
                            )?.localeText.en,
                        },
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about eye examination",
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
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Полная диагностика зрения включает",
                                image: "/images/perevirka-round.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Во время полного обследования зрения выполняются следующие процедуры:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "измерение параметров глаза на цифровых приборах;",
                                                    "анализ медицинской документации;",
                                                    "специальные диагностические тесты для каждого глаза отдельно и в комбинированном режиме;",
                                                    "микроскопическое исследование анатомических структур глаза с применением сильного увеличения.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Для проверки остроты зрения используются классические таблицы с буквами или символами, расположенными на разных расстояниях. Это помогает определить степень близорукости, дальнозоркости или наличие астигматизма и подобрать подходящие линзы.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Во время диагностики могут применяться капли для расширения зрачков. Они временно блокируют работу аккомодационной мышцы, что позволяет точнее оценить рефракцию глаза и внимательно изучить состояние глазного дна.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Весь процесс обследования проходит в щадящем и комфортном формате, не требует контакта с поверхностью глаза и подходит как взрослым, так и детям.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Регулярная проверка зрения — основа профилактики заболеваний",
                                image: "/images/choice.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Периодическая диагностика глаз необходима каждому, кто заботится о своём здоровье. Это не просто способ сохранить хорошее зрение, но и эффективный метод раннего выявления различных патологий, в том числе тех, которые не связаны напрямую с органами зрения.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Во время обследования офтальмолог может обнаружить признаки общих заболеваний, так как состояние сосудов сетчатки отражает работу сердечно-сосудистой системы. Глаза — один из немногих органов, по которым можно получить информацию о венах и артериях без сложных процедур.",
                                            },
                                            {
                                                type: "text",
                                                text: "Даже при отсутствии жалоб важно не пропускать профилактические осмотры. Некоторые нарушения развиваются скрытно и не проявляются на ранних стадиях. Только регулярный контроль позволяет вовремя заметить изменения и предотвратить ухудшение зрения.",
                                            },
                                        ],
                                    },
                                    {
                                        greenText:
                                            "Оптимальная частота посещения офтальмолога — один раз в год. Это правило актуально даже для тех, у кого нет проблем со зрением. Профилактика всегда эффективнее лечения — особенно когда речь идёт о глазах.",
                                    },
                                ],
                            },
                        ],
                    },
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
                            text: discountList.find(
                                disk => disk.key === "perevirka-zoru"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "perevirka-zoru"
                            )?.localeText.ru,
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
                    data: {
                        paddingTop: false,
                        data: [
                            {
                                title: "Що таке катаракта?",
                                image: "/images/cataract-round.jpg",
                                imagePosition: "object-left",
                                text: [
                                    {
                                        content: [
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "Катаракта – це захворювання, при якому порушується прозорість кришталика, що призводить до зниження гостроти зору.",
                                            },
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "Простіше кажучи, помутніння кришталика. При цьому його структура стає більш щільною, що створює певні труднощі при видаленні.",
                                            },
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "Виявити катаракту на стадії неможливо без офтальмологічного огляду. Видимих симптомів на ранній стадії взагалі немає. З розвитком захворювання погіршується зір: пацієнт починає бачити предмети нечітко, немов вони перебувають у тумані, підвищується чутливість при погляді яскраве світло, погіршується нічний зір, послаблюється колірне сприйняття.",
                                            },
                                        ],
                                    },
                                ],
                                btn: [
                                    {
                                        btnName: "читати про катаракту",
                                        btnLink:
                                            "/zakhvoryuvannya-ochey/katarakta",
                                        btnSecondary: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <CataractGreenSection /> },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на видалення катаракти у Києві",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "likuvannya-katarakti"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "likuvannya-katarakti"
                            )?.localeText.uk,
                        },
                    },
                },
                {
                    type: "advantages",
                    data: {
                        paddingTop: false,
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
                    data: {
                        paddingTop: false,
                        data: [
                            {
                                title: "What is cataract?",
                                image: "/images/cataract-round.jpg",
                                imagePosition: "object-left",
                                text: [
                                    {
                                        content: [
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "A cataract is a condition in which the transparency of the eye’s lens is impaired, leading to decreased visual acuity.",
                                            },
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "Simply put, it’s a clouding of the lens. Its structure becomes denser, which creates certain difficulties during removal.",
                                            },
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "It is impossible to detect a cataract in its early stage without an ophthalmologic examination. There are no visible symptoms at first. As the disease progresses, vision deteriorates: objects appear blurry, as if seen through a fog; sensitivity to bright light increases; night vision worsens; and color perception becomes weaker.",
                                            },
                                        ],
                                    },
                                ],
                                btn: [
                                    {
                                        btnName: "read about cataract",
                                        btnLink:
                                            "/zakhvoryuvannya-ochey/katarakta",
                                        btnSecondary: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <CataractGreenSection /> },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for cataract removal in Kyiv",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "likuvannya-katarakti"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "likuvannya-katarakti"
                            )?.localeText.en,
                        },
                    },
                },
                {
                    type: "advantages",
                    data: {
                        paddingTop: false,
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
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about cataracts",
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
                    data: {
                        paddingTop: false,
                        data: [
                            {
                                title: "Что такое катаракта?",
                                image: "/images/cataract-round.jpg",
                                imagePosition: "object-left",
                                text: [
                                    {
                                        content: [
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "Катаракта — это заболевание, при котором нарушается прозрачность хрусталика глаза, что приводит к снижению остроты зрения.",
                                            },
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "Проще говоря, это помутнение хрусталика. Его структура становится более плотной, что создает определенные трудности при удалении.",
                                            },
                                            {
                                                gap: true,
                                                type: "text",
                                                text: "Обнаружить катаракту на ранней стадии невозможно без офтальмологического осмотра. На начальном этапе видимых симптомов нет. По мере развития заболевания зрение ухудшается: предметы становятся размытыми, будто окутаны туманом; повышается чувствительность к яркому свету; ухудшается ночное зрение и ослабляется восприятие цветов.",
                                            },
                                        ],
                                    },
                                ],
                                btn: [
                                    {
                                        btnName: "читать о катаракте",
                                        btnLink:
                                            "/zakhvoryuvannya-ochey/katarakta",
                                        btnSecondary: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <CataractGreenSection /> },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на удаление катаракты в Киеве",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "likuvannya-katarakti"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "likuvannya-katarakti"
                            )?.localeText.ru,
                        },
                    },
                },
                {
                    type: "advantages",
                    data: {
                        paddingTop: false,
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
                        text: "Багаторічний досвід роботи наших фахівців і сучасне діагностичне обладнання дозволяють усунути прогресування та ускладнення хвороби.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Синдром сухого ока: діагностика та лікування",
                        text: [
                            "Синдром сухого ока — це стан, коли слізна плівка втрачає стабільність і вже не захищає рогівку належним чином. Звідси сухість, печіння, «пісок», почервоніння і коливання чіткості зору, особливо наприкінці дня. Причини різні: дисфункція мейбомієвих залоз, рідке або неповне моргання за екранами, вікові та гормональні зміни, сухе повітря. Без точної діагностики симптоми закріплюються, тому важливо визначити, який шар сльози порушений, і підібрати цілеспрямоване лікування.",
                            "В нашій клініці діагностика синдрому сухого ока здійснюється за допомогою унікального сертифікованого обладнання IDRA, яке розроблене в Італії спеціально для точного визначення всіх аспектів цієї проблеми.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Особливості діагностики:",
                        text: "Ми використовуємо перевірені технології та індивідуально підбираємо режим лікування для кожного пацієнта, діагностика проводится на професійному офтальмологічному апараті IDRA.",
                        slider: [
                            {
                                title: "Комплексний аналіз складу слізної плівки",
                                text: "Слізна плівка складається з кількох шарів, кожен з яких має певний набір функцій. Будь-які відхилення складу або кількості певного компоненту призводить до порушення балансу і, відповідно, загостренню проявів хвороби сухого ока.",
                            },
                            {
                                title: "Виявлення порушень роботи мейбомієвих залоз",
                                text: "У повіках є залози, що виділяють жирний секрет — він захищає слізну плівку від висихання та мікробів. Порушення їхньої роботи викликає ячмінь, халязіон і блефарит. \n3D-зображення залоз допомагає лікарю оцінити їхній стан і контролювати лікування.",
                            },
                            {
                                title: "Перевірка якості кліпання",
                                text: "Моргання — важливий процес для здоров’я повік. Штучні вії, старіння, операції чи стреси можуть погіршувати змикання повік, що знижує зволоження ока й оновлення слізної плівки. Без стимуляції мейбомієві залози поступово відмирають, посилюючи сухість.",
                            },
                            {
                                title: "Обстеження протягом 1 хвилини",
                                text: "Яскраве світло подразнює око, спричинюючи надмірну сльозотечу навіть у здорових пацієнтів. \nВимірювання на апараті IDRA займає по 30 секунд для кожного ока. Таким чином дискомфорт мінімальний, а результати – максимально достовірні.",
                            },
                            {
                                title: "Об’єктивний аналіз результатів",
                                text: "Для обробки виміряний даних програмне забезпечення IDRA застосовує алгоритми із штучним інтелектом та машинним навчанням. Дані обробляються автоматично, мінімізуючи людський фактор. \nТаким чином ви отримуєте об’єктивне розуміння свого стану.",
                            },
                            {
                                title: "Все задокументовано!",
                                text: "Програмне забезпечення зберігає кожне фото та відео, відслідковує зміну параметрів для того, щоб ви були впевнені в доцільності та дієвості лікування.",
                            },
                        ],
                        btn: {
                            btnName: "записатися на прийом",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Як лікують синдром сухого ока в нашій клініці?",
                                image: "/images/perevirka-round.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Ми застосовуємо схему лікування, що відповідає вимогам міжнародного товариства здоров’я очної поверхні (TFOS), яка включає:",
                                            },
                                            {
                                                gap: true,
                                                type: "list",
                                                list: [
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Медикаментозне лікування",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Розігрів застиглого секрету та його ефективне видалення",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "IPL терапія",
                                                        },
                                                    ],
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Після обстеження лікар пояснює результати, демонструє зображення та формує персональний план лікування: від щоденної гігієни повік до апаратних процедур і підтримувальної терапії.",
                                            },
                                        ],
                                        greenText:
                                            "Програмне забезпечення з алгоритмами штучного інтелекту автоматично обробляє дані, усуваючи суб’єктивність, а результати зберігаються у вигляді фото та відео для подальшого моніторингу.",
                                    },
                                ],
                            },
                            {
                                title: "Причини сухості очей",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Сухість очей має різні механізми. Під час діагностики на IDRA ми вимірюємо показники слізної плівки, оцінюємо мейбомієві залози та якість моргання, щоб точно визначити причину й обрати лікування.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Фактори, пов’язані з недостатнім виробництвом водної частини сльози",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Вікові зміни та природне зменшення секреції сльози;",
                                                    "Гормональні коливання (менопауза, вагітність, ендокринні порушення);",
                                                    "Системні захворювання та автоімунні стани (зокрема синдром Шегрена);",
                                                    "Лікарські засоби, що «висушують» слизові (антигістамінні, антидепресанти, сечогінні тощо);",
                                                    "Зневоднення, недостатній питний режим, хронічні захворювання, післяопераційні стани.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Фактори, пов’язані з підвищеним випаровуванням слізної плівки",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Дисфункція мейбомієвих залоз та поганий ліпідний шар;",
                                                    "Рідке або неповне моргання під час роботи з екранами;",
                                                    "Сухе повітря, кондиціонери, опалення, вітер, пил, дим;",
                                                    "Контактні лінзи, декоративна косметика, нарощування вій, агресивні засоби демакіяжу;",
                                                    "Запальні стани краю повіки (блефарит, демодекоз), розацеа шкіри.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Якщо відчуваєте «пісок», печіння чи почервоніння — запишіться на діагностику. Точне визначення причини дозволяє підібрати ефективне лікування.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        listTitle: "Етапи",
                        paddingTop: true,
                        paddingBottom: true,
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
                    type: "textsColumns",
                    data: {
                        title: "Інноваційне лікування методом IPL",
                        text: "Сучасний апаратний підхід, який цілеспрямовано зменшує запалення краю повік і відновлює стабільність слізної плівки. Поєднання з діагностикою та доглядом забезпечує прогнозований результат і комфорт пацієнта.",
                        blocks: [
                            {
                                title: "Показання для застосування IPL терапії:",
                                text: [
                                    {
                                        type: "list",
                                        list: [
                                            "Синдром сухого ока з переважно випаровувальним компонентом.",
                                            "Дисфункція мейбомієвих залоз і застій секрету, що не коригуються лише краплями.",
                                            "Хронічний блефарит, рецидивні ячмені та халязіони.",
                                            "Телеангіектазії та запалення краю повік при офтальморозацеа.",
                                            "Демодекоз як складова комбінованого лікування.",
                                            "Зниження комфорту при роботі за екранами, відчуття «піску», печіння, почервоніння попри регулярну гігієну повік.",
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Переваги IPL-терапії",
                                text: [
                                    {
                                        type: "list",
                                        list: [
                                            "Патогенетична дія: вплив на мікросудини та запальні механізми, що підтримують сухість.",
                                            "Короткий сеанс без анестезії та періоду реабілітації; відразу можна повернутися до справ.",
                                            "Кероване охолодження забезпечує безпеку для чутливої періорбітальної зони та знижує дискомфорт.",
                                            "Можливість комбінування з апаратним масажем повік для підсилення ефекту.",
                                            "Об’єктивний моніторинг результатів за даними інструментальних вимірювань і фотофіксації.",
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Структура процедури IPL",
                                text: [
                                    {
                                        type: "list",
                                        numeric: true,
                                        list: [
                                            "Первинна консультація та оцінка показань: збір анамнезу, огляд повік, інструментальна діагностика очної поверхні.",
                                            "Підготовка зони: очищення шкіри, захисні окуляри, нанесення контактного гелю.",
                                            "Проведення сеансу: серія світлових імпульсів у проєкції краю повік за офтальмологічним протоколом.",
                                            "За потреби — апаратний розігрів і видалення секрету мейбомієвих залоз, рекомендації щодо домашнього догляду.",
                                            "Фіксація результатів та планування наступного візиту.",
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Курс лікування та ефект:",
                                text: [
                                    {
                                        type: "list",
                                        list: [
                                            "Кількість сеансів: зазвичай 3–4 процедури для стійкого результату; схема може коригуватися індивідуально.",
                                            "Інтервали: 2–3 тижні між сеансами, щоб закріпити протизапальний ефект і відновлення залоз.",
                                            "Тривалість: близько 10–15 хвилин на сеанс (+ час на підготовку та, за показами, масаж повік).",
                                            "Проміжні відчуття: легке тепло або пощипування, короткочасна рожевість шкіри, що минає самостійно.",
                                            "Очікуваний результат: зменшення сухості та подразнення, стабільніша слізна плівка, кращий комфорт під час читання та роботи за комп’ютером, рідші епізоди блефариту й ячменів.",
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Безпека та післяпроцедурний догляд:",
                                text: [
                                    {
                                        type: "text",
                                        text: "Метод має сприятливий профіль безпеки за умови дотримання протоколів і врахування протипоказань. Після сеансу рекомендуємо користуватися SPF 50+ у зоні обробки протягом 7–10 днів, уникати засмаги, сауни та басейну протягом 24–48 годин, відкласти агресивні пілінги чи скраби; макіяж у періорбітальній зоні — не раніше ніж через 12–24 години. Важливо підтримувати гігієну повік і призначений режим крапель. Контрольні огляди дають змогу оцінити динаміку та, за потреби, провести підтримувальні процедури раз на 6–12 місяців, щоб зберігати комфорт і стабільність результату.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лікування синдрому сухого ока у Києві",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "syndrom-sukhoho-oka"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "syndrom-sukhoho-oka"
                            )?.localeText.uk,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про лікування синдрому сухого",
                        content: [
                            {
                                question:
                                    "Сухість в очах: які симптоми і коли потрібне лікування?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Найчастіші ознаки — печіння, «пісок», почервоніння, затуманення зору наприкінці дня, світлобоязнь, дискомфорт у лінзах. Якщо відчуваєте сухість очей постійно або симптоми заважають роботі за екранами, це вже привід для обстеження й лікування ССО обох очей. Самолікування «випадковими» краплями рідко дає стабільний ефект — почніть із консультації офтальмолога.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "ССО — це що і як лікують «сухе око»?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "ССО (синдром сухого ока) — порушення стабільності слізної плівки. Лікування підбирають індивідуально: гігієна повік, правильно підібрані зволожувальні краплі (засоби від сухого ока), корекція звичок за комп’ютером, апаратні методи. «Лазерне лікування синдрому сухого ока» як термін використовують неточно — у сучасній офтальмології для випаровувального типу ССО ефективною є IPL-терапія, а не лазер.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "IPL-терапія синдрому сухого ока: що це і як працює?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "IPL (інтенсивне імпульсне світло) м’яко впливає на край повік, зменшує запалення й телеангіектазії, розріджує густий секрет мейбомієвих залоз і стабілізує ліпідний шар слізної плівки. У результаті сльоза менше випаровується — зникає сухість, «пісок» і втома очей. Процедура триває 10–15 хвилин, анестезія не потрібна; за показаннями комбінується з масажем повік (ACTIVA MED) та базовим доглядом.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки потрібно сеансів і коли буде ефект?",
                                answer: [
                                    {
                                        type: "text",
                                        text: " Класичний курс — 3–4 процедури з інтервалом 2–3 тижні. Більшість пацієнтів відчувають полегшення вже після 1–2 візитів, стабільний результат — до кінця курсу. Для контролю динаміки та точного налаштування лікування проводимо інструментальне обстеження (IDRA).",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки це коштує: ціна/вартість обстеження і лікування?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вартість залежить від обсягу обстеження та індивідуального плану (кількість сеансів IPL, супровідні процедури). Актуальні ціни, наявні акції та знижки уточнюйте під час консультації лікаря або при онлайн-реєстрації. Ми прозоро озвучуємо, що входить у прийом і курс; безкоштовно надаємо попередні рекомендації щодо підготовки до візиту.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Протипоказання, побічні ефекти, недоліки й переваги IPL",
                                answer: [
                                    {
                                        type: "text",
                                        text: "До типових протипоказань належать активні запальні процеси шкіри у зоні обробки, фоточутливість, деякі дерматологічні стани й вагітність/лактація — остаточно вирішує лікар після огляду. Побічні ефекти зазвичай легкі та короткочасні: почервоніння, відчуття тепла, рідше — тимчасова чутливість шкіри. Переваги — короткий час сеансу, відсутність реабілітації, вплив на першопричину (дисфункцію мейбомієвих залоз); можливий недолік — потрібен курс і підтримувальні візити.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Лікування синдрому сухого ока IPL: відгуки й рекомендації",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Відгуки пацієнтів найчастіше відзначають зменшення печіння, «піску» та втоми під кінець дня, кращу переносимість екранів і контактних лінз. Ми радимо орієнтуватися не лише на коментарі, а й на об’єктивні вимірювання під час огляду (IDRA): це дозволяє побачити реальні зміни слізної плівки та отримати персональні рекомендації.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "«Сушить очі» — що робити зараз і куди піти?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Якщо виникла сухість очей і потрібна термінова допомога — уникайте «агресивних» засобів, зніміть лінзи, зробіть перерву від екранів і запишіться на обстеження до офтальмолога. У приватній клініці ви отримаєте швидку консультацію, точний огляд, пояснення «чи варто» робити IPL саме вам і прозорий план лікування. Можна реєструватися онлайн або телефоном; під час прийому лікар відповість на запитання про переваги/недоліки, протипоказання та вартість курсу.",
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
                        text: "Many years of experience of our specialists and modern diagnostic equipment allow us to eliminate the progression and complications of the disease.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Dry eye syndrome: diagnosis and treatment",
                        text: [
                            "Dry eye syndrome is a condition in which the tear film loses stability and no longer properly protects the cornea. This causes dryness, burning, a “sand-like” sensation, redness, and fluctuating vision clarity, especially at the end of the day. The reasons vary: meibomian gland dysfunction, infrequent or incomplete blinking while using screens, age- and hormone-related changes, dry air. Without accurate diagnostics, symptoms become chronic, so it is crucial to determine which tear film layer is affected and choose targeted treatment.",
                            "In our clinic, the diagnosis of dry eye syndrome is performed using unique certified equipment — IDRA — developed in Italy specifically for accurate assessment of all aspects of this condition.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Diagnostic features:",
                        text: "We use proven technologies and tailor the treatment approach for each patient individually. Diagnostics are performed using the professional ophthalmic device IDRA.",
                        slider: [
                            {
                                title: "Comprehensive tear film composition analysis",
                                text: "The tear film consists of several layers, each with specific functions. Any imbalance or changes in the quantity of any component disrupt stability and increase the symptoms of dry eye disease.",
                            },
                            {
                                title: "Detection of meibomian gland dysfunction",
                                text: "The eyelids contain glands that produce an oily secretion — it protects the tear film from evaporation and microbes. Dysfunction leads to stye, chalazion, and blepharitis.\n3D imaging of the glands helps the doctor assess their condition and monitor treatment.",
                            },
                            {
                                title: "Blink quality evaluation",
                                text: "Blinking is essential for healthy eyelids. False eyelashes, aging, surgery, or stress may lead to incomplete blinking, reducing eye hydration and tear film renewal. Without stimulation, meibomian glands gradually degrade, worsening dryness.",
                            },
                            {
                                title: "1-minute examination",
                                text: "Bright light irritates the eye, causing excessive tearing even in healthy patients.\nMeasurement with the IDRA device takes about 30 seconds per eye — ensuring minimal discomfort and highly accurate results.",
                            },
                            {
                                title: "Objective results analysis",
                                text: "To process measurements, IDRA software uses artificial intelligence and machine-learning algorithms. Data is analyzed automatically, minimizing the human factor.\nThis ensures a clear and objective understanding of your eye condition.",
                            },
                            {
                                title: "Everything documented!",
                                text: "The software stores all photos and videos, tracks changes in parameters so that you can clearly see the progress and effectiveness of the treatment.",
                            },
                        ],
                        btn: {
                            btnName: "book an appointment",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingBottom: false,
                        data: [
                            {
                                title: "How is dry eye syndrome treated in our clinic?",
                                image: "/images/perevirka-round.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "We apply a treatment protocol that meets the standards of the Tear Film & Ocular Surface Society (TFOS), which includes:",
                                            },
                                            {
                                                gap: true,
                                                type: "list",
                                                list: [
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Medication therapy",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Warming up and clearing the blocked meibomian secretion",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "IPL therapy",
                                                        },
                                                    ],
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "After the examination, the doctor explains the results, shows the images, and creates a personalized treatment plan — from daily eyelid hygiene to hardware procedures and maintenance therapy.",
                                            },
                                        ],
                                        greenText:
                                            "AI-based software automatically processes diagnostic data, eliminating subjectivity, while the results are stored as photos and videos for follow-up monitoring.",
                                    },
                                ],
                            },
                            {
                                title: "Causes of dry eyes",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Dry eyes can have different mechanisms. During IDRA diagnostics, we measure tear film parameters, assess meibomian glands, and blinking quality to accurately determine the cause and choose proper treatment.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Factors related to insufficient production of the aqueous layer of the tear film",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Age-related changes and natural reduction of tear secretion;",
                                                    "Hormonal fluctuations (menopause, pregnancy, endocrine disorders);",
                                                    "Systemic diseases and autoimmune conditions (including Sjögren’s syndrome);",
                                                    "Medications that ‘dry out’ mucous membranes (antihistamines, antidepressants, diuretics, etc.);",
                                                    "Dehydration, low fluid intake, chronic illnesses, postoperative conditions.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Factors related to increased evaporation of the tear film",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Meibomian gland dysfunction and poor lipid layer;",
                                                    "Rare or incomplete blinking during screen use;",
                                                    "Dry air, air conditioners, heating, wind, dust, smoke;",
                                                    "Contact lenses, decorative cosmetics, eyelash extensions, harsh makeup removers;",
                                                    "Inflammatory conditions of the eyelid margin (blepharitis, demodicosis), skin rosacea.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "If you feel sandiness, burning, or redness — schedule a diagnosis. Accurate identification of the cause allows for effective treatment selection.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "numberListSection",
                    data: {
                        listTitle: "Stages",
                        list: [
                            {
                                itemTitle:
                                    "Appointment and preparation for diagnostics",
                                itemText: [
                                    "You can schedule an eye diagnostics appointment within a few minutes by phone or online via the website.",
                                    "No special preparation is needed, but if you wear soft contact lenses, remove them the night before (recommended 12 hours prior to the visit). Bring your eyeglasses for verification, as well as any previous ophthalmic examinations so the doctor can evaluate changes over time. It is recommended not to drive afterward because you may experience slight visual discomfort for a short time (near vision may be blurry).",
                                ],
                            },
                            {
                                itemTitle: "Computer vision diagnostics",
                                itemText: [
                                    "The examination is quick and comfortable. Precision devices, microscopic visualization methods, and adapted diagnostic tests are used, selected according to each specific clinical situation.",
                                    "The diagnostics take 2–2.5 hours. One of the most important steps is visual acuity testing. The patient reads symbols or letters on charts placed at different distances. These tests help accurately determine the degree of impairment and correctly select lenses or glasses.",
                                    "In some cases, the doctor may use eye drops to dilate the pupils. This is necessary to temporarily exclude the influence of accommodation and obtain more accurate data when examining the fundus.",
                                ],
                            },
                            {
                                itemTitle: "Diagnostics results and conclusion",
                                itemText: [
                                    "After completing the diagnostics, you will receive an official report with an assessment of all vision parameters and eye health. The doctor will provide recommendations for further steps — from prevention to a specific treatment plan.",
                                    "If surgical intervention is planned, its discussion will be a key part of the consultation. It is important to ask and clarify all critical questions before the operation to make an informed decision.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for dry eye syndrome treatment in Kyiv",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "syndrom-sukhoho-oka"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "syndrom-sukhoho-oka"
                            )?.localeText.en,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about dry eye treatment",
                        content: [
                            {
                                question:
                                    "Dry eyes: what are the symptoms and when is treatment needed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The most common signs include burning, “grittiness”, redness, blurry vision by the end of the day, light sensitivity, and contact lens discomfort. If you constantly feel dryness or symptoms interfere with screen work, it’s already a reason for examination and treatment of dry eye disease in both eyes. Self-treatment with random drops rarely gives a stable effect — start with an ophthalmologist consultation.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "DED — what is dry eye disease and how is it treated?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "DED (dry eye disease) is a condition where the tear film loses stability. Treatment is personalized: eyelid hygiene, properly selected lubricating eye drops, adjusting screen habits, and instrumental therapies. The term “laser treatment for dry eye” is often used incorrectly — in modern ophthalmology, IPL therapy is effective for evaporative DED rather than laser.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "IPL therapy for dry eye: what is it and how does it work?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "IPL (Intense Pulsed Light) gently treats the eyelid margins, reduces inflammation and telangiectasias, liquefies thick meibomian gland secretions, and stabilizes the lipid layer of the tear film. As a result, the tear evaporates less — dryness, “grittiness”, and eye fatigue decrease. The procedure takes 10–15 minutes, local anesthesia is not required; if indicated, it is combined with eyelid massage (ACTIVA MED) and standard care.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How many sessions are needed and when will the effect appear?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "A standard course includes 3–4 procedures with an interval of 2–3 weeks. Most patients feel relief after 1–2 visits, while a stable result is achieved by the end of the course. To monitor dynamics and fine-tune treatment, we perform instrumental diagnostics (IDRA).",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does it cost: price of examination and treatment?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost depends on the diagnostic amount and individual plan (number of IPL sessions, additional procedures). Current prices, promotions and discounts can be clarified during consultation or with online registration. We clearly explain what is included in the visit and the course; preliminary preparation recommendations are provided free of charge.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Contraindications, side effects, disadvantages and advantages of IPL",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Typical contraindications include active skin inflammation in the treatment area, photosensitivity, certain dermatological conditions and pregnancy / breastfeeding — the final decision is made by the doctor after examination. Side effects are usually mild and short-term: redness, warmth, rarely — temporary skin sensitivity. Advantages: quick sessions, no downtime, addressing the root cause (meibomian gland dysfunction); possible drawback — a full course and maintenance visits are required.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Dry eye IPL treatment: reviews and recommendations",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Patients often report reduced burning, “grittiness” and end-of-day fatigue, and improved tolerance of screens and contact lenses. We recommend relying not only on reviews but also on objective measurements during diagnostics (IDRA): this shows real improvements in the tear film and helps personalize treatment.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "“Eyes feel dry” — what to do right now and where to go?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "If dryness appears and urgent help is needed — avoid harsh products, remove contact lenses, take a break from screens and book an eye examination. In a private clinic you receive quick consultation, accurate diagnostics, an explanation whether IPL is right for you, and a transparent treatment plan. You can register online or by phone; during the visit, the doctor will answer questions about benefits/risks, contraindications, and treatment cost.",
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
                        text: "Многолетний опыт работы наших специалистов и современное диагностическое оборудование позволяют устранить прогрессирование и усложнение болезни.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "Синдром сухого глаза: диагностика и лечение",
                        text: [
                            "Синдром сухого глаза — это состояние, при котором слёзная плёнка теряет стабильность и перестаёт должным образом защищать роговицу. Из-за этого возникают сухость, жжение, ощущение «песка», покраснение и колебания чёткости зрения, особенно к концу дня. Причины разные: дисфункция мейбомиевых желез, редкое или неполное моргание при работе за экранами, возрастные и гормональные изменения, сухой воздух. Без точной диагностики симптомы закрепляются, поэтому важно определить, какой слой слезы нарушен, и подобрать целенаправленное лечение.",
                            "В нашей клинике диагностика синдрома сухого глаза проводится с помощью уникального сертифицированного оборудования IDRA, разработанного в Италии специально для точного определения всех аспектов этого состояния.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Особенности диагностики:",
                        text: "Мы используем проверенные технологии и индивидуально подбираем режим лечения каждому пациенту. Диагностика проводится на профессиональном офтальмологическом оборудовании IDRA.",
                        slider: [
                            {
                                title: "Комплексный анализ состава слезной пленки",
                                text: "Слезная пленка состоит из нескольких слоёв, каждый из которых выполняет важные функции. Любые отклонения состава или количества компонентов нарушают баланс и усиливают проявления синдрома сухого глаза.",
                            },
                            {
                                title: "Выявление нарушений работы мейбомиевых желез",
                                text: "В веках есть железы, выделяющие жирный секрет — он защищает слезную пленку от пересыхания и микробов. Нарушение их работы вызывает ячмень, халязион и блефарит.\n3D-изображения желез помогают врачу оценить их состояние и контролировать лечение.",
                            },
                            {
                                title: "Оценка качества моргания",
                                text: "Моргание жизненно важно для здоровья век. Искусственные ресницы, возрастные изменения, операции или стресс могут ухудшать смыкание век, что снижает увлажнение глаза и обновление слезной пленки. Без стимуляции мейбомиевые железы постепенно атрофируются, усиливая сухость.",
                            },
                            {
                                title: "Обследование за 1 минуту",
                                text: "Яркий свет раздражает глаз и вызывает обильное слезотечение даже у здоровых людей.\nИзмерение на аппарате IDRA занимает около 30 секунд на каждый глаз — минимум дискомфорта и максимальная достоверность результатов.",
                            },
                            {
                                title: "Объективный анализ результатов",
                                text: "Для обработки данных программное обеспечение IDRA использует алгоритмы искусственного интеллекта и машинного обучения. Данные анализируются автоматически, минимизируя человеческий фактор.\nТак вы получаете максимально объективное понимание состояния глаз.",
                            },
                            {
                                title: "Всё задокументировано!",
                                text: "Программа сохраняет каждое фото и видео, отслеживает динамику параметров, чтобы вы были уверены в эффективности и обоснованности лечения.",
                            },
                        ],
                        btn: {
                            btnName: "записаться на приём",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Как лечат синдром сухого глаза в нашей клинике?",
                                image: "/images/perevirka-round.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Мы применяем схему лечения, соответствующую рекомендациям Международного общества здоровья глазной поверхности (TFOS), которая включает:",
                                            },
                                            {
                                                gap: true,
                                                type: "list",
                                                list: [
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Медикаментозное лечение",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "Прогревание застоявшегося секрета и его эффективное удаление",
                                                        },
                                                    ],
                                                    [
                                                        {
                                                            bold: true,
                                                            value: "IPL-терапия",
                                                        },
                                                    ],
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "После обследования врач объясняет результаты, показывает изображения и формирует персональный план лечения: от ежедневной гигиены век до аппаратных процедур и поддерживающей терапии.",
                                            },
                                        ],
                                        greenText:
                                            "Программное обеспечение с алгоритмами искусственного интеллекта автоматически обрабатывает данные, устраняя субъективность, а результаты сохраняются в виде фото и видео для последующего мониторинга.",
                                    },
                                ],
                            },
                            {
                                title: "Причины сухости глаз",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Сухость глаз имеет разные механизмы. Во время диагностики на IDRA мы измеряем параметры слёзной плёнки, оцениваем мейбомиевые железы и качество моргания, чтобы точно определить причину и выбрать лечение.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Факторы, связанные с недостаточным образованием водной части слезы",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Возрастные изменения и естественное снижение секреции слёз;",
                                                    "Гормональные колебания (менопауза, беременность, эндокринные нарушения);",
                                                    "Системные заболевания и аутоиммунные состояния (в том числе синдром Шегрена);",
                                                    "Лекарственные средства, «высушивающие» слизистые (антигистаминные, антидепрессанты, мочегонные и др.);",
                                                    "Обезвоживание, недостаток питьевого режима, хронические болезни, послеоперационные состояния.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Факторы, связанные с повышенным испарением слёзной плёнки",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Дисфункция мейбомиевых желез и плохой липидный слой;",
                                                    "Редкое или неполное моргание при работе за экраном;",
                                                    "Сухой воздух, кондиционеры, отопление, ветер, пыль, дым;",
                                                    "Контактные линзы, декоративная косметика, наращивание ресниц, агрессивные средства для демакияжа;",
                                                    "Воспалительные заболевания края века (блефарит, демодекоз), розацеа кожи.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Если вы чувствуете «песок», жжение или покраснение — запишитесь на диагностику. Точное определение причины позволяет подобрать эффективное лечение.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "numberListSection",
                    data: {
                        listTitle: "Этапы",
                        list: [
                            {
                                itemTitle:
                                    "Запись на приём и подготовка к диагностике",
                                itemText: [
                                    "Записаться на диагностику зрения можно всего за несколько минут по телефону или онлайн на сайте.",
                                    "Специальная подготовка не требуется, но если вы носите мягкие контактные линзы, снимите их с вечера (рекомендуется за 12 часов до визита). Очки необходимо взять с собой для проверки, а также предыдущие офтальмологические обследования — врач оценит, что изменилось за последнее время. Желательно не быть за рулём, так как некоторое время может сохраняться лёгкий зрительный дискомфорт (ближнее зрение будет нечётким).",
                                ],
                            },
                            {
                                itemTitle: "Компьютерная диагностика зрения",
                                itemText: [
                                    "Обследование проходит быстро и комфортно. Используются прецизионные приборы, микроскопические методы визуализации и адаптированные диагностические тесты, которые врач подбирает в зависимости от клинической ситуации.",
                                    "Продолжительность диагностики составляет 2–2,5 часа. Один из важнейших этапов — проверка остроты зрения. Пациент читает знаки или буквы на таблицах на разных расстояниях. Эти тесты помогают точно определить степень нарушения и правильно подобрать линзы или очки.",
                                    "В ряде случаев врач может использовать капли для расширения зрачков. Это необходимо, чтобы временно исключить влияние аккомодации и получить более точные данные при исследовании глазного дна.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Заключение по результатам обследования",
                                itemText: [
                                    "После диагностики вы получите официальный протокол с оценкой всех параметров зрения и здоровья глаз. Врач предоставит рекомендации по дальнейшим действиям — от профилактики до конкретного плана лечения.",
                                    "Если планируется хирургическое вмешательство, его обсуждение станет ключевой частью консультации. Важно задать и прояснить все вопросы до операции, чтобы принять взвешенное решение.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение синдрома сухого глаза в Киеве",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "syndrom-sukhoho-oka"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "syndrom-sukhoho-oka"
                            )?.localeText.ru,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы о лечении синдрома сухого глаза",
                        content: [
                            {
                                question:
                                    "Сухость глаз: какие симптомы и когда нужно лечение?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Наиболее частые признаки — жжение, «песок», покраснение, затуманивание зрения к концу дня, светобоязнь, дискомфорт при ношении линз. Если сухость возникает постоянно или симптомы мешают работе за компьютером — это повод для обследования и лечения синдрома сухого глаза обоих глаз. Самолечение случайными каплями редко даёт стабильный результат — начните с консультации офтальмолога.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "ССГ — что это такое и как лечат «сухой глаз»?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "ССГ (синдром сухого глаза) — нарушение стабильности слёзной плёнки. Лечение подбирается индивидуально: гигиена век, правильно подобранные увлажняющие капли, корректировка привычек при работе за экранами, аппаратные методы. Термин «лазерное лечение сухого глаза» часто используется неверно — в современной офтальмологии при испарительном типе ССГ эффективна IPL-терапия, а не лазер.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "IPL-терапия при синдроме сухого глаза: что это и как работает?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "IPL (интенсивный импульсный свет) мягко воздействует на край век, уменьшает воспаление и телеангиэктазии, разжижает густой секрет мейбомиевых желёз и стабилизирует липидный слой слёзной плёнки. В итоге слеза меньше испаряется — исчезает сухость, «песок» и усталость глаз. Процедура длится 10–15 минут, анестезия не требуется; по показаниям сочетается с массажем век (ACTIVA MED) и базовым уходом.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько нужно сеансов и когда будет результат?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Классический курс — 3–4 процедуры с интервалом 2–3 недели. Большинство пациентов ощущают улучшение уже после 1–2 визитов, устойчивый результат — к концу курса. Для контроля динамики и точной настройки лечения выполняем инструментальное обследование (IDRA).",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько это стоит: цена обследования и лечения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость зависит от объёма диагностики и индивидуального плана (количество сеансов IPL, сопутствующие процедуры). Актуальные цены, акции и скидки уточняйте при консультации или при онлайн-записи. Мы прозрачно озвучиваем, что входит в приём и курс; предварительные рекомендации по подготовке предоставляем бесплатно.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Противопоказания, побочные эффекты, недостатки и преимущества IPL",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Типичные противопоказания: активные воспалительные процессы кожи в зоне обработки, фоточувствительность, некоторые дерматологические состояния, беременность/лактация — окончательное решение принимает врач после осмотра. Побочные эффекты обычно лёгкие и кратковременные: покраснение, ощущение тепла, реже — временная чувствительность кожи. Преимущества — короткий сеанс, отсутствие реабилитации, воздействие на первопричину (дисфункцию мейбомиевых желёз); возможный недостаток — необходим курс и поддерживающие визиты.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Лечение синдрома сухого глаза IPL: отзывы и рекомендации",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Пациенты чаще всего отмечают уменьшение жжения, «песка» и усталости к концу дня, лучшую переносимость экранов и контактных линз. Мы рекомендуем ориентироваться не только на отзывы, но и на объективные измерения при осмотре (IDRA): это показывает реальные изменения слёзной плёнки и помогает персонализировать лечение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "«Сушит глаза» — что делать сейчас и куда обратиться?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Если появилась сухость глаз и нужна срочная помощь — избегайте агрессивных средств, снимите линзы, сделайте перерыв от экранов и запишитесь к офтальмологу на обследование. В частной клинике вы получите быструю консультацию, точный осмотр, объяснение — подходит ли вам IPL, и прозрачный план лечения. Можно записаться онлайн или по телефону; на приёме врач ответит на вопросы о преимуществах/недостатках, противопоказаниях и стоимости курса.",
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
                        text: "це високоточні операції на сітківці та склоподібному тілі (вітректомія, лазерна коагуляція) для лікування відшарування, макулярних розривів, крововиливів і ретинопатій з метою збереження зору.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Вітреоретинальна хірургія — сучасні методи збереження зору",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Вітреоретинальна хірургія — це високоточні мікрооперації на сітківці та склоподібному тілі, спрямовані на відновлення зорових функцій і структур очного дна. У нашій приватній клініці в Києві ми застосовуємо європейські протоколи лікування, сучасні мікроінструменти й цифрові мікроскопи, що дозволяє досягати стабільного функціонального та естетичного результату навіть у складних випадках: відшарування сітківки, розриви сітківки ока, макулярний отвір, діабетична ретинопатія, помутніння в очах, ускладнені наслідки травм. Кожен пацієнт проходить повне обстеження, індивідуальний підбір тактики, консультацію лікаря-вітреоретинолога та детальний план реабілітації. Ми поєднуємо безпеку, доказову офтальмологію та прозоре ціноутворення: «скільки коштує операція на сітківці ока?» — остаточна вартість визначається після діагностики, з урахуванням обсягу втручання та супутніх процедур.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Що таке вітректомія і коли вона потрібна",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Вітректомія — мікрохірургічна операція з видалення склоподібного тіла (повністю або частково) для усунення патологічних змін і доступу до сітківки.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Показання: крововилив у склоподібне тіло, тракції, макулярний розрив, відшарування сітківки, помутніння, ускладнення ретинопатій.",
                                            },
                                            {
                                                type: "text",
                                                text: "Процедура виконується через надтонкі проколи з мінімальною травматизацією тканин; у разі потреби застосовуються внутрішньоочні тампони — газ або силіконова олія — для стабілізації сітківки. Вітректомія ока — ціна та вартість операції залежать від техніки, типу тампонуючого середовища, складності клінічної ситуації та супутніх факторів. Під час первинного прийому лікар пояснить переваги, можливі недоліки, побічні ефекти і протипоказання, щоб ви могли прийняти зважене рішення.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Відшарування та розриви сітківки: термінове лікування",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Відшарування сітківки — стан, що потребує невідкладної допомоги: зволікання загрожує незворотною втратою зору. Залежно від локалізації та площі ураження ми застосовуємо лазерну коагуляцію, пломбування, пневморетінопексію або вітректомію. Операція при розриві сітківки ока часто виконується в ургентному порядку, щоб запобігти прогресуванню до повного відшарування. «Операція відшарування сітківки — ціна»: вартість формується індивідуально, проте ми зберігаємо оптимальний баланс між ефективністю, безпекою та бюджетом пацієнта. Лікуємо мешканців Києва та всієї України, забезпечуючи повний супровід — від діагностики та огляду до післяопераційного нагляду з чіткими рекомендаціями.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "Інші напрямки: макулярний отвір, ретинопатія, помутніння, травми",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Крім ургентних ситуацій, наша команда виконує планові втручання при макулярному отворі, діабетичній ретинопатії, тривалому помутнінні зору, наслідках травм рогівки та очного дна, вивиху кришталика, вторинних змінах після попередніх операцій. Вітреальна хірургія дозволяє повернути прозорість оптичних середовищ та відновити анатомію макули, що напряму впливає на гостроту зору. «Вітреоретинальна операція — ціна» і «вітректомія — вартість операції» залежать від виду патології, необхідності поєднаних методик (фемтотехнології, введення газу/силікону), а також від складності реабілітації. Усі варіанти обговорюємо на консультації, надаємо рекомендації, показуємо відгуки та коментарі пацієнтів.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Чому нас обирають: досвід, обладнання, сервіс",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Наш вітреоретинальний хірург у Києві має великий досвід складних мікрооперацій; операційна оснащена сучасними вітреотомами, ендоосвітленням, ширококутною візуалізацією та системами контролю тиску. Ми детально пояснюємо пацієнтам показання та протипоказання, можливі побічні ефекти, строки відновлення, надаємо друковані рекомендації. Прозора «ціна/якість», гнучкі умови оплати, періодичні акції та знижки, зручний графік прийому — усе це робить лікування доступнішим. Запишіться на обстеження та консультацію, щоб дізнатися, скільки коштує операція на сітківці ока саме у вашому випадку, і отримати персональний план лікування.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про вітректомію ока",
                        content: [
                            {
                                question:
                                    "Скільки коштує вітректомія і від чого залежить ціна?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вітректомія ока — ціна формується індивідуально після обстеження: впливають діагноз (розрив сітківки, відшарування, макулярний отвір, ретинопатія), обсяг втручання, застосування газу чи силіконової олії, а також післяопераційний супровід. Точну вартість озвучує лікар на консультації.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Операція на сітківці ока — ціна в Києві та Україні: чи відрізняється?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вартість залежить від рівня клініки, оснащення, досвіду хірурга та складності випадку. Ми пропонуємо оптимальний баланс «ціна/якість» у Києві з дотриманням міжнародних стандартів і повним післяопераційним контролем.",
                                    },
                                ],
                            },
                            {
                                question: "Коли потрібна термінова допомога?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Негайно звертайтесь при «спалахах» світла, «шторі» або різкому падінні зору, масовій появі «мушок», тінях у полі зору — це можуть бути симптоми розриву або відшарування сітківки. Чим швидше розпочати лікування, тим кращий прогноз.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи боляче і скільки триває операція?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Втручання виконується під анестезією, більшість пацієнтів відзначають мінімальний дискомфорт. Тривалість залежить від діагнозу й техніки (лазерна коагуляція, пломбування, вітректомія) та зазвичай становить від 30–40 хв до 1,5–2 годин.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Які можливі ризики, побічні ефекти та протипоказання?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Як і будь-яка мікрохірургія, операції на сітківці мають ризики (запалення, підвищення внутрішньоочного тиску, повторні крововиливи, катаракта, рецидив відшарування). Протипоказання оцінюються індивідуально за результатами обстеження. Ми детально інформуємо пацієнта перед втручанням.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Який режим після операції та як проходить відновлення зору?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Після вітректомії з газом інколи потрібне спеціальне положення голови, призначаються краплі, контрольні огляди. Відновлення зору поступове й залежить від вихідного стану макули, наявності супутніх хвороб і дотримання рекомендацій.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи можна обмежитись лише лазерною коагуляцією без вітректомії?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "За невеликих розривів без відшарування інколи достатньо лазерної коагуляції. При тракціях, крововиливах, макулярному отворі або відшаруванні частіше показана вітректомія чи комбіновані методики. Рішення ухвалюється після огляду та діагностики.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи є акції, знижки або безкоштовне лікування?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Ми приватна клініка, час від часу діють акції та знижки. Актуальні пропозиції та остаточну «вартість операції відшарування сітківки» або «вітректомії» ви дізнаєтесь на консультації. Записатися на прийом і обстеження можна онлайн або телефоном.",
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
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Vitreoretinal surgery — advanced vision preservation methods",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Vitreoretinal surgery involves highly precise microoperations on the retina and vitreous body, aimed at restoring visual functions and the structure of the eye fundus. At our private clinic in Kyiv, we use European treatment protocols, modern microinstruments, and digital microscopes, which allow us to achieve stable functional and aesthetic results even in complex cases: retinal detachment, retinal tears, macular hole, diabetic retinopathy, floaters, or complications after injuries. Each patient undergoes a full examination, receives an individual treatment plan, a consultation with a vitreoretinal surgeon, and a detailed rehabilitation schedule. We combine safety, evidence-based ophthalmology, and transparent pricing: “how much does retinal surgery cost?” — the final price is determined after diagnosis, based on the scope of intervention and additional procedures.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "What is vitrectomy and when it’s needed",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Vitrectomy is a microsurgical procedure to remove the vitreous body (partially or completely) to eliminate pathological changes and access the retina.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Indications: vitreous hemorrhage, traction, macular hole, retinal detachment, opacities, retinopathy complications.",
                                            },
                                            {
                                                type: "text",
                                                text: "The procedure is performed through ultra-thin punctures with minimal tissue trauma; if necessary, intraocular tamponades — gas or silicone oil — are used to stabilize the retina. The price of vitrectomy depends on the surgical technique, tamponade type, case complexity, and related factors. During the initial consultation, the doctor explains benefits, possible side effects, contraindications, and recovery process so that you can make an informed decision.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Retinal detachment and tears: emergency treatment",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Retinal detachment is a condition requiring urgent care: delays may lead to irreversible vision loss. Depending on the location and area of damage, we use laser coagulation, scleral buckling, pneumatic retinopexy, or vitrectomy. Surgery for retinal tears is often performed urgently to prevent progression to full detachment. “Retinal detachment surgery cost”: the price is determined individually, maintaining the optimal balance between effectiveness, safety, and patient budget. We treat patients from Kyiv and across Ukraine, ensuring full support — from diagnosis and consultation to postoperative follow-up with clear rehabilitation guidelines.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "Other directions: macular hole, retinopathy, floaters, trauma",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Besides emergency conditions, our team performs planned interventions for macular hole, diabetic retinopathy, persistent visual opacities, consequences of corneal or retinal trauma, lens dislocation, and secondary changes after previous surgeries. Vitreoretinal surgery restores the transparency of optical media and the anatomy of the macula, directly improving visual acuity. “Vitreoretinal surgery cost” and “vitrectomy price” depend on the pathology type, the need for combined techniques (femto technology, gas/silicone injection), and rehabilitation complexity. We discuss all options during consultation, provide recommendations, and share patient reviews and testimonials.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Why choose us: expertise, equipment, and service",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Our vitreoretinal surgeon in Kyiv has extensive experience with complex microoperations. The operating room is equipped with modern vitrectomes, endo-illumination systems, wide-angle visualization, and pressure control technologies. We thoroughly explain indications, contraindications, side effects, recovery periods, and provide printed recommendations. Transparent “price-to-quality” policy, flexible payment options, regular discounts, and a convenient schedule make treatment more accessible. Book a consultation and examination to learn how much retinal surgery costs in your case and receive a personalized treatment plan.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about vitrectomy",
                        content: [
                            {
                                question:
                                    "How much does vitrectomy cost and what affects the price?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost of vitrectomy is determined individually after examination and depends on the diagnosis (retinal tear, detachment, macular hole, retinopathy), the scope of surgery, the use of gas or silicone oil, and postoperative care. The exact cost is provided by the doctor during the consultation.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Retinal surgery cost in Kyiv and Ukraine — is there a difference?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The price depends on the clinic’s level, equipment, surgeon’s experience, and case complexity. We offer an optimal balance of price and quality in Kyiv, following international standards and providing full postoperative supervision.",
                                    },
                                ],
                            },
                            {
                                question: "When is urgent care needed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Seek immediate medical help if you notice flashes of light, a ‘curtain’ or sudden vision loss, a large number of new floaters, or shadows in your visual field — these may indicate a retinal tear or detachment. The sooner treatment begins, the better the prognosis.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is the surgery painful and how long does it take?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The procedure is performed under anesthesia, and most patients report minimal discomfort. Duration depends on the diagnosis and technique (laser coagulation, scleral buckling, or vitrectomy) and usually lasts from 30–40 minutes to 1.5–2 hours.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What are the possible risks, side effects, and contraindications?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "As with any microsurgery, retinal operations carry risks (inflammation, elevated intraocular pressure, recurrent hemorrhage, cataract, or recurrent detachment). Contraindications are evaluated individually after diagnostics. We provide full information to each patient before surgery.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What is the postoperative regimen and vision recovery like?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "After vitrectomy with gas, a specific head position may be required; patients are prescribed eye drops and follow-up visits. Vision recovery is gradual and depends on the macula’s condition, accompanying diseases, and compliance with medical recommendations.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is laser coagulation alone sufficient without vitrectomy?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "In minor retinal tears without detachment, laser coagulation may be sufficient. However, in cases of traction, hemorrhage, macular hole, or detachment, vitrectomy or combined techniques are often necessary. The decision is made after examination and diagnosis.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Are there any promotions, discounts, or free treatments?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "We are a private clinic, and promotions or discounts are occasionally available. Current offers and the final cost of ‘retinal detachment surgery’ or ‘vitrectomy’ can be confirmed during consultation. You can schedule an appointment online or by phone.",
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
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Витреоретинальная хирургия — современные методы сохранения зрения",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Витреоретинальная хирургия — это высокоточные микрооперации на сетчатке и стекловидном теле, направленные на восстановление зрительных функций и структур глазного дна. В нашей частной клинике в Киеве мы применяем европейские протоколы лечения, современные микроинструменты и цифровые микроскопы, что позволяет добиваться стабильного функционального и эстетического результата даже в сложных случаях: отслоение сетчатки, разрывы сетчатки глаза, макулярное отверстие, диабетическая ретинопатия, помутнение, осложнения после травм. Каждый пациент проходит полное обследование, индивидуальный подбор тактики, консультацию витреоретинолога и получает подробный план реабилитации. Мы сочетаем безопасность, доказательную офтальмологию и прозрачное ценообразование: «сколько стоит операция на сетчатке глаза?» — окончательная стоимость определяется после диагностики, с учетом объема вмешательства и сопутствующих процедур.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Что такое витрэктомия и когда она необходима",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Витрэктомия — микрохирургическая операция по удалению стекловидного тела (полностью или частично) для устранения патологических изменений и доступа к сетчатке.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Показания: кровоизлияние в стекловидное тело, тракции, макулярный разрыв, отслоение сетчатки, помутнения, осложнения ретинопатий.",
                                            },
                                            {
                                                type: "text",
                                                text: "Процедура выполняется через сверхтонкие проколы с минимальной травматизацией тканей; при необходимости используются внутриглазные тампонады — газ или силиконовое масло — для стабилизации сетчатки. Стоимость витрэктомии зависит от техники, типа тампонирующей среды, сложности клинической ситуации и сопутствующих факторов. На первичном приеме врач подробно объясняет преимущества, возможные побочные эффекты, противопоказания и процесс восстановления, чтобы вы могли принять взвешенное решение.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Отслоение и разрывы сетчатки: неотложное лечение",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Отслоение сетчатки — состояние, требующее срочной помощи: промедление грозит необратимой потерей зрения. В зависимости от локализации и площади поражения мы применяем лазерную коагуляцию, пломбирование, пневморетинопексию или витрэктомию. Операция при разрыве сетчатки глаза часто проводится в экстренном порядке, чтобы предотвратить развитие полного отслоения. «Операция отслоение сетчатки — цена»: стоимость формируется индивидуально, сохраняя оптимальный баланс между эффективностью, безопасностью и бюджетом пациента. Мы лечим жителей Киева и всей Украины, обеспечивая полный сопровождение — от диагностики и консультации до послеоперационного наблюдения с четкими рекомендациями.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "Другие направления: макулярное отверстие, ретинопатия, помутнение, травмы",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Кроме экстренных случаев, наша команда выполняет плановые вмешательства при макулярном отверстии, диабетической ретинопатии, стойких помутнениях зрения, последствиях травм роговицы и глазного дна, вывихе хрусталика, вторичных изменениях после предыдущих операций. Витреальная хирургия позволяет вернуть прозрачность оптических сред и восстановить анатомию макулы, что напрямую влияет на остроту зрения. «Витреоретинальная операция — цена» и «витрэктомия — стоимость операции» зависят от типа патологии, необходимости сочетанных методик (фемтотехнологии, введение газа/силикона), а также от сложности реабилитации. Все варианты обсуждаются на консультации, предоставляются рекомендации, показываются отзывы и комментарии пациентов.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Почему выбирают нас: опыт, оборудование, сервис",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Наш витреоретинальный хирург в Киеве имеет большой опыт сложных микроопераций; операционная оснащена современными витреотомами, эндоосвещением, широкоугольной визуализацией и системами контроля давления. Мы подробно объясняем пациентам показания и противопоказания, возможные побочные эффекты, сроки восстановления, предоставляем печатные рекомендации. Прозрачное соотношение «цена/качество», гибкие условия оплаты, регулярные акции и скидки, удобный график приема — всё это делает лечение более доступным. Запишитесь на обследование и консультацию, чтобы узнать, сколько стоит операция на сетчатке глаза именно в вашем случае, и получить персональный план лечения.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о витрэктомии",
                        content: [
                            {
                                question:
                                    "Сколько стоит витрэктомия и от чего зависит цена?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость витрэктомии определяется индивидуально после обследования и зависит от диагноза (разрыв сетчатки, отслоение, макулярное отверстие, ретинопатия), объема вмешательства, использования газа или силиконового масла, а также послеоперационного сопровождения. Точную стоимость сообщает врач на консультации.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Операция на сетчатке глаза — цена в Киеве и Украине: есть ли разница?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость зависит от уровня клиники, оснащения, опыта хирурга и сложности случая. Мы предлагаем оптимальное соотношение «цена/качество» в Киеве, соблюдая международные стандарты и обеспечивая полный послеоперационный контроль.",
                                    },
                                ],
                            },
                            {
                                question: "Когда нужна срочная помощь?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Немедленно обращайтесь при «вспышках» света, «занавесе» или резком падении зрения, множестве новых «мушек» или тенях в поле зрения — это могут быть признаки разрыва или отслоения сетчатки. Чем раньше начато лечение, тем лучше прогноз.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Больно ли и сколько длится операция?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Операция проводится под анестезией, большинство пациентов отмечают минимальный дискомфорт. Продолжительность зависит от диагноза и методики (лазерная коагуляция, пломбирование, витрэктомия) и обычно составляет от 30–40 минут до 1,5–2 часов.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие возможны риски, побочные эффекты и противопоказания?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Как и любая микрохирургия, операции на сетчатке имеют риски (воспаление, повышение внутриглазного давления, повторные кровоизлияния, катаракта, рецидив отслоения). Противопоказания оцениваются индивидуально по результатам обследования. Мы подробно информируем пациента перед вмешательством.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какой режим после операции и как проходит восстановление зрения?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "После витрэктомии с газом иногда требуется специальное положение головы, назначаются капли и контрольные осмотры. Восстановление зрения постепенное и зависит от состояния макулы, сопутствующих заболеваний и соблюдения рекомендаций.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли ограничиться только лазерной коагуляцией без витрэктомии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "При небольших разрывах без отслоения иногда достаточно лазерной коагуляции. При тракциях, кровоизлияниях, макулярном отверстии или отслоении чаще показана витрэктомия или комбинированные методы. Решение принимается после осмотра и диагностики.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Есть ли акции, скидки или бесплатное лечение?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Мы — частная клиника, и время от времени действуют акции и скидки. Актуальные предложения и окончательную «стоимость операции отслоения сетчатки» или «витрэктомии» вы узнаете на консультации. Записаться на прием и обследование можно онлайн или по телефону.",
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
                        paddingBottom: false,
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
                        pdfCard: {
                            title: "відновлення та догляд за очима після лазерної корекції зору",
                            description: "інструкція",
                            link: "/files/plati_chastinami__rozstrochka_•_a_bank.pdf",
                            btnName: "завантажити",
                            downloadingName:
                                "Відновлення_та_догляд_за_очима_після_лазерної_корекції_зору.pdf",
                        },
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Переваги лазерної корекції зору в Києві в Британському Офтальмологічному Центрі",
                        text: "Ви можете бути впевнені в якості послуг, що надаються, так як довіряєте свій зір сучасній клініці",
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
                            text: discountList.find(
                                disk => disk.key === "lazerna-korekcziya-zoru"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "lazerna-korekcziya-zoru"
                            )?.localeText.uk,
                        },
                    },
                },
                { type: "global" },
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
                        listTitle: "How does laser vision correction work?",
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
                        pdfCard: {
                            title: "eye recovery and care after laser vision correction",
                            description: "instruction",
                            link: "/files/plati_chastinami__rozstrochka_•_a_bank.pdf",
                            btnName: "download",
                            downloadingName:
                                "Eye_recovery_and_care_after_laser_vision_correction.pdf",
                        },
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Advantages of laser vision correction in Kyiv at the British Ophthalmology Center",
                        text: "You can be confident in the quality of the services provided, as you entrust your vision to a modern clinic.",
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
                            text: discountList.find(
                                disk => disk.key === "lazerna-korekcziya-zoru"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "lazerna-korekcziya-zoru"
                            )?.localeText.en,
                        },
                    },
                },
                { type: "global" },

                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about laser vision correction",
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
                        pdfCard: {
                            title: "восстановление и уход за глазами после лазерной коррекции зрения",
                            description: "инструкция",
                            link: "/files/plati_chastinami__rozstrochka_•_a_bank.pdf",
                            btnName: "скачать",
                            downloadingName:
                                "Восстановление_и_уход_за_глазами_после_лазерной_коррекции_зрения.pdf",
                        },
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Преимущества лазерной коррекции зрения в Киеве в Британском Офтальмологическом Центре",
                        text: "Вы можете быть уверены в качестве предоставляемых услуг, так как доверяете своё зрение современной клинике.",
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
                            text: discountList.find(
                                disk => disk.key === "lazerna-korekcziya-zoru"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "lazerna-korekcziya-zoru"
                            )?.localeText.ru,
                        },
                    },
                },
                { type: "global" },
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
                "У Дитячій клініці Злата проводимо перевірку зору у дітей від немовлят до підлітків.",
            sections: [
                {
                    type: "hero",
                    data: {
                        image: "/images/children-service.jpg",
                        imgPositionMobile: " right 25% top",
                        imgPositionDesktop: "right 25% top 10%",
                        title: "Дитяча клініка \n«Злата»",
                        text: "Приватна офтальмологія для дітей: перевірка зору у дітей від немовлят до підлітків, комплексна діагностика (циклоплегія, топографія, біометрія) та апаратне лікування",
                    },
                },
                {
                    type: "preview",
                    data: {
                        image: "/images/perevirka-zoru-preview.jpg",
                        title: "Дитяча клініка Злата — дитяча офтальмологія у Києві",
                        text: [
                            "У Дитячій клініці Злата проводимо перевірку зору у дітей від немовлят до підлітків: точні обстеження, індивідуальне лікування, зрозумілі рекомендації для батьків. Якщо шукаєте, де перевірити дитині зір і як перевірити зір дитині швидко та без стресу — записуйтеся на консультацію лікаря. У реєстратурі Дитячої клініки Злата підкажуть актуальні ціни/вартість, наявні акції та знижки, допоможуть обрати зручний прийом у приватній офтальмологічній дитячій клініці.",
                        ],
                        textUp: "1 млн",
                        textDown: "консультацій проведено",
                        fractionUp: true,
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Коли звертатися: перші сигнали",
                                image: "/images/zlata-page.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Дитяча клініка Злата радить не відкладати огляд і обстеження, якщо ви помічаєте навіть легкі зміни у поведінці чи звичках дитини. Часті скарги на втому очей, «туман», двоїння, головний біль наприкінці дня, мруження або піднесення гаджетів занадто близько можуть свідчити про початок міопії, гіперметропії, астигматизму чи порушення бінокулярного зору. У дошкільнят додатковими маркерами є часте тертя очей, надмірне моргання, уникання пазлів/дрібних ігор; у школярів — падіння уваги, зниження успішності при читанні з дошки, неправильна постава, наближення обличчя до зошита.",
                                            },
                                            {
                                                type: "text",
                                                text: "Зверніть увагу, якщо очі «роз’їжджаються», з’являється періодичне косування на фото, або «червоне око» на знімках виражене асиметрично — це привід записатися на консультацію в Дитячу клініку Злата. Також показанням до візиту є ранній старт гаджетів, сімейна історія короткозорості, недоношеність, алергії та скарги на сухість/печіння після занять. Планова перевірка зору для дітей у нас включає тести з урахуванням віку, а за потреби — діагностику з фракційною циклоплегією, топографію рогівки та контроль аксіальної довжини, щоб своєчасно зупинити прогресування порушень і запобігти амбліопії.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Комплексна перевірка: точна діагностика та план",
                                image: "/images/facilities3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "У Дитячій клініці Злата оцінюємо рефракцію (в т.ч. з фракційною циклоплегією), стереозір, фузійні резерви, положення очей, стан очного дна й темпи росту очного яблука. За результатами лікар Дитячої клініки Злата формує персональний маршрут: оптична корекція, апаратне лікування зору у дітей, графік спостережень і домашні вправи. Батьки отримують зрозумілий висновок, прозорі ціни, чіткі рекомендації та орієнтацію «скільки коштує» кожен етап. Додаємо прогноз динаміки (коли чекати перших змін), пояснюємо переваги/недоліки кожної методики простими словами та надаємо пам’ятку з правилами гігієни зору для дому.",
                                            },
                                            {
                                                type: "text",
                                                text: "Усі процедури проводяться в ігровому форматі без стресу, а контрольні обстеження в Дитячій клініці Злата плануємо за індивідуальним календарем (з урахуванням навчання, гуртків і навантаження на зір), щоб забезпечити стабільне відновлення зору у дітей.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        title: "Чому обирають Дитячу клініку Злата",
                        text: [
                            "Приватна дитяча клініка зору у форматі «все в одному»: діагностика, лікування й контроль ефекту. Комфортний кабінет, сучасні прилади, ігрові методики, детальні висновки для школи/садка.",
                            "У Дитячій клініці Злата пояснюємо показання, переваги й можливі недоліки методик, даємо чесні рекомендації, відкрито говоримо про ціни та надаємо відгуки/коментарі пацієнтів.",
                        ],
                        image: "/images/equipment5.jpg",
                        listTitle:
                            "Етапи дитячої діагностики в Дитячій клініці Злата",
                        list: [
                            {
                                itemTitle: "Первинний скринінг і консультація",
                                itemText: [
                                    "Записатись на діагностику зору можна всього за кілька хвилин телефоном або онлайн на сайті.",
                                    "У Дитячій клініці Злата збираємо скарги та анамнез, робимо ігровий скринінг гостроти, базову оцінку бінокулярних функцій і положення очей, оглядаємо передній відрізок. Даємо первинні рекомендації щодо гігієни зору та вирішуємо, чи потрібне розширене обстеження (циклоплегія, топографія, біометрія). Одразу орієнтуємо по вартості наступного кроку.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Розширені вимірювання з циклоплегією",
                                itemText: [
                                    "В Дитячій клініці Злата проводимо рефрактометрію/скіаскопію під фракційною циклоплегією, кератотопографію/томографію для точного виявлення астигматизму, офтальмоскопію з медикаментозним розширенням, вимірюємо аксіальну довжину ока, перевіряємо стереозір і фузійні резерви. Пояснюємо результати простими словами й фіксуємо їх у протоколі.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Персональний план лікування і спостереження",
                                itemText: [
                                    "Команда Дитячої клініки Злата обговорює результати з батьками, підбирає корекцію (окуляри/лінзи), призначає апаратне лікування (за показаннями), видає домашні вправи та графік контрольних прийомів. Надаємо письмовий висновок, вартісну частину («скільки коштує» курс) і посилання на відгуки.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Перелік діагностичних обстежень",
                        text: "Під час діагностики очей виконується ціла низка досліджень, спрямованих на всебічну оцінку стану зорової системи:",
                        slider: [
                            {
                                title: "Візіометрія (перевірка гостроти зору)",
                                text: "У Дитячій клініці Злата вимірюємо, як дитина бачить удалині та зблизька. Для малюків — піктограми й картинки замість літер, для школярів — стандартні таблиці. Тест проводиться в ігровій формі, щоб дитина не хвилювалася.",
                            },
                            {
                                title: "Тонометрія (внутрішньоочний тиск)",
                                text: "Використовуємо безконтактну пневмотонометрію — це швидкий «подув повітря», який допомагає виключити ризики глаукоми та інших станів. Діти зазвичай сприймають процедуру спокійно, усе триває кілька секунд.",
                            },
                            {
                                title: "Рефрактометрія",
                                text: "На авторефрактометрі визначаємо заломлюючу силу ока: міопію, гіперметропію, астигматизм. За потреби додаємо скіаскопію та фракційну циклоплегію (краплі тимчасово «відключають» акомодацію), щоб отримати точні значення для рецепта окулярів/лінз.",
                            },
                            {
                                title: "Біометрія (аксіальна довжина та параметри ока)",
                                text: "Безконтактно вимірюємо довжину ока, глибину передньої камери, товщину кришталика. Це важливо для контролю прогресування короткозорості у дітей і при підборі інтраокулярних лінз у старшому віці.",
                            },
                            {
                                title: "Пахіметрія (товщина рогівки)",
                                text: "Світловий або ультразвуковий прилад швидко й безболісно вимірює товщину рогівки. Дані потрібні для оцінки внутрішньоочного тиску, планування рефракційних втручань у майбутньому та контролю після травм/запалень.",
                            },
                            {
                                title: "Кератотопографія (карта рогівки)",
                                text: "Визначаємо форму та кривизну рогівки. У дитячому віці це допомагає виявити астигматизм, ранні ознаки кератоконусу в підлітків і обрати правильну оптичну корекцію. Процедура безконтактна.",
                            },
                            {
                                title: "Периметрія (поле зору)",
                                text: "Досліджуємо, яку частину простору дитина охоплює поглядом при фіксації. Корисно при підозрі на ураження зорового нерва, невроофтальмологічні стани, а також для контролю при глаукомних ризиках. Пояснюємо завдання просто, щоб дитині було легко виконувати тест.",
                            },
                            {
                                title: "Біомікроскопія (щілинна лампа)",
                                text: "Це «мікроскоп для ока», яким ми детально оглядаємо повіки, рогівку, райдужку, кришталик. Діти сидять у зручному кріслі, лікар працює обережно, пояснюючи кожен крок — болю немає.",
                            },
                            {
                                title: "Огляд очного дна фундус-лінзою",
                                text: "Після крапель для розширення зіниці лікар оцінює сітківку, макулу та диск зорового нерва. Метод виявляє вроджені зміни, наслідки міопії, судинні та запальні стани. У разі чутливості застосовуємо місцеву анестезію краплями.",
                            },
                            {
                                title: "Діоптриметрія (перевірка окулярів)",
                                text: "Вимірюємо оптичну силу наявних окулярів: сферу, циліндр, вісь, міжцентрову відстань. Допомагає зрозуміти, чи підходять вони дитині й чи потрібне оновлення рецепта в Дитячій клініці Злата.",
                            },
                        ],
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Перелік апаратного лікування (Дитяча клініка Злата)",
                        text: "Усе це можна пройти безпосередньо в Дитячій клініці Злата: індивідуальні програми під вік і діагноз дитини, курс зазвичай 10–15 занять по 30–40 хв у комфортному ігровому форматі. Запишіться на консультацію — підкажемо оптимальний маршрут та актуальну вартість/ціни.",
                        list: [
                            {
                                title: "Плеоптика (АМБЛІОКОР)",
                                text: "тренує «ледаче» око, підвищує гостроту зору та контрастну чутливість у дітей. Проводиться в ігровому форматі в Дитячій клініці Злата.",
                            },
                            {
                                title: "Ортоптика / диплоптика (синаптофор)",
                                text: "розвиває біфіксацію, фузійні резерви та стереозір, допомагає при косоокості. Курс і параметри підбирає лікар Дитячої клініки Злата.",
                            },
                            { videoOnly: "/videos/about-cta-mob.mp4" },
                            {
                                title: "Комп’ютерні програми",
                                text: "(«Окуліст», «Клинок», ігрові тренажери) — мотивують дитину до занять, покращують координацію очей і зорову витривалість. Застосовуються в Дитячій клініці Злата як частина комплексної терапії.",
                            },
                            {
                                title: "Підтримка оклюзійної терапії",
                                text: "індивідуальні схеми «заклеювання» сильнішого ока, навчання сім’ї та контроль ефективності. Супровід проводиться спеціалістами Дитячої клініки Злата.",
                            },
                            {
                                title: "Вправи на конвергенцію/дивергенцію",
                                bgTransparent: true,
                                text: "корекція недостатності конвергенції, стабілізація бінокулярної фіксації та комфортного читання (стрінг Брока, синоптофор, бінокулярні тренажери).",
                            },
                            {
                                title: "Призматичні методики",
                                text: "вирівнюють зорові осі, покращують злиття зображень та комфорт читання. Застосовуються за показаннями в Дитячій клініці Злата.",
                            },
                            {
                                title: "Тренування акомодації",
                                text: "вправи та прилади для покращення фокусування на близькій відстані, зменшення втоми й головного болю під час читання. Проводимо індивідуальні протоколи в Дитячій клініці Злата.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціна",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "dityache-viddilennya"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "dityache-viddilennya"
                            )?.localeText.uk,
                        },
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про перевірку зору у дітей",
                        content: [
                            {
                                question:
                                    "Скільки коштує перевірка зору у дітей у Дитячій клініці Злата і що входить у вартість?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Залежить від обсягу: чи потрібні циклоплегія, топографія, біометрія. Реєстратура Дитячої клініки Злата підкаже пакетні ціни та допоможе обрати оптимальний прийом.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "З якого віку проходити огляд у Дитячій клініці Злата?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Перший скринінг — у немовлят; планові огляди: 1 рік, 3 роки, перед школою та щороку в школярів — навіть без скарг.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи болісні обстеження та апаратне лікування в Дитячій клініці Злата?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Ні. Процедури безпечні, адаптовані для дітей, часто у форматі гри. Після крапель можлива короткочасна фотофобія.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи допоможе апаратне лікування без операції?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "За раннього виявлення амбліопії/порушень бінокулярного зору — так. Лікар Дитячої клініки Злата пояснить переваги/недоліки конкретних методик.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Як часто повторювати курси та контролі?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Типово 10–15 занять; повтор через 3–6 міс за показаннями. Графік контролів складає лікар Дитячої клініки Злата.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи є відгуки/рекомендації про Дитячу клініку Злата?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так, доступні відгуки та коментарі батьків. Адміністратор надішле посилання або приклади.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи є акції та знижки в Дитячій клініці Злата?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Періодично діють акції й знижки на пакети діагностики та курси лікування — уточнюйте під час запису.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Приватна чи державна офтальмологія: що обрати?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Дитяча клініка Злата забезпечує швидкий запис, чіткий маршрут, детальні висновки та прозорі ціни. Остаточний вибір — за батьками; ми надамо всю потрібну інформацію.",
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
                "At Zlata Children's Clinic, we provide eye examinations for children — from infants to teenagers.",
            sections: [
                {
                    type: "hero",
                    data: {
                        image: "/images/children-service.jpg",
                        imgPositionMobile: " right 25% top",
                        imgPositionDesktop: "right 25% top 10%",
                        title: "Children's Clinic \n«Zlata»",
                        text: "Private ophthalmology for children: eye examinations for kids from infants to teenagers, comprehensive diagnostics (cycloplegia, topography, biometry), and instrumental vision therapy.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        image: "/images/perevirka-zoru-preview.jpg",
                        title: "Zlata Children’s Clinic — pediatric ophthalmology in Kyiv",
                        text: [
                            "At Zlata Children’s Clinic, we perform eye examinations for children from infancy to adolescence: accurate diagnostics, personalized treatment, and clear recommendations for parents. If you’re looking for where and how to check your child’s vision quickly and without stress — book a consultation with our doctor. Our reception staff will provide up-to-date prices, available promotions, and help you choose a convenient appointment time at our private pediatric eye clinic.",
                        ],
                        textUp: "1 m",
                        textDown: "consultations conducted",
                        fractionUp: true,
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "When to visit: first warning signs",
                                image: "/images/zlata-page.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Zlata Children’s Clinic recommends not delaying an eye examination if you notice even slight changes in your child’s behavior or habits. Frequent complaints of eye fatigue, 'foggy' vision, double vision, headaches by the end of the day, squinting, or holding gadgets too close may indicate the onset of myopia, hyperopia, astigmatism, or binocular vision disorders. In preschoolers, additional warning signs include frequent eye rubbing, excessive blinking, or avoidance of puzzles and small toys; in school-aged children — decreased attention, poor performance when reading from the board, incorrect posture, or bringing the notebook too close to the face.",
                                            },
                                            {
                                                type: "text",
                                                text: "Pay attention if your child’s eyes ‘wander apart,’ if you notice occasional strabismus in photos, or if one eye appears redder than the other in pictures — these are reasons to schedule a consultation at Zlata Children’s Clinic. Other indications include early use of gadgets, a family history of myopia, prematurity, allergies, or complaints of dryness or burning after study sessions. Routine vision screening at our clinic includes age-appropriate tests and, if necessary, detailed diagnostics with fractional cycloplegia, corneal topography, and axial length control to prevent amblyopia and slow the progression of vision disorders.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Comprehensive check: accurate diagnosis and care plan",
                                image: "/images/facilities3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "At Zlata Children’s Clinic, we assess refraction (including with fractional cycloplegia), stereopsis, fusion reserves, eye alignment, fundus condition, and eye growth rates. Based on the results, the doctor creates a personalized care plan: optical correction, hardware vision therapy, monitoring schedule, and home exercises. Parents receive a clear report, transparent pricing, practical recommendations, and a breakdown of what each stage costs. We also include a progress forecast (when to expect improvements), explain the pros and cons of each method in simple terms, and provide a take-home vision hygiene guide.",
                                            },
                                            {
                                                type: "text",
                                                text: "All procedures are conducted in a playful, stress-free environment, and follow-up examinations are scheduled individually (considering school, activities, and visual load) to ensure stable visual recovery in children.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        title: "Why parents choose Zlata Children’s Eye Clinic",
                        text: [
                            "A private children’s eye clinic in an “all-in-one” format: diagnostics, treatment, and follow-up. A comfortable office, modern equipment, playful testing methods, and detailed reports for school or kindergarten.",
                            "At Zlata Children’s Eye Clinic, we explain indications, advantages, and possible limitations of each method, give honest recommendations, are transparent about prices, and share real patient feedback.",
                        ],
                        image: "/images/equipment5.jpg",
                        listTitle:
                            "Stages of children’s eye diagnostics at Zlata Clinic",
                        list: [
                            {
                                itemTitle: "Initial screening and consultation",
                                itemText: [
                                    "You can book an eye diagnostic appointment in just a few minutes — by phone or online.",
                                    "At Zlata Children’s Eye Clinic, we collect complaints and history, perform playful visual acuity screening, basic binocular function and eye alignment tests, and examine the anterior segment. We provide initial vision hygiene advice and decide if extended testing is needed (cycloplegia, topography, biometry). The next step’s cost is discussed right away.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Extended measurements with cycloplegia",
                                itemText: [
                                    "We perform refraction/retinoscopy under fractional cycloplegia, corneal topography/tomography for accurate astigmatism detection, fundus examination with pupil dilation, measure axial length, and check stereovision and fusion reserves. Results are explained in simple words and recorded in a report.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Personalized treatment and follow-up plan",
                                itemText: [
                                    "Our team discusses results with parents, prescribes correction (glasses/contact lenses), recommends hardware therapy if indicated, provides home exercises and a follow-up schedule. We issue a written report, treatment cost estimate, and links to reviews.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "List of diagnostic examinations",
                        text: "During an eye exam, a range of tests is performed to comprehensively assess the visual system:",
                        slider: [
                            {
                                title: "Visiometry (visual acuity test)",
                                text: "We measure how well a child sees at distance and near. For little ones — pictures and icons instead of letters, for school-age children — standard charts. The test is conducted in a playful way so the child feels comfortable.",
                            },
                            {
                                title: "Tonometry (Intraocular Pressure)",
                                text: "We use non-contact air-puff tonometry — a quick puff of air that helps rule out glaucoma and other conditions. Children usually tolerate it calmly; the procedure takes only a few seconds.",
                            },
                            {
                                title: "Refractometry",
                                text: "Using an autorefractometer, we determine the eye’s refractive power: myopia, hyperopia, astigmatism. If needed, we add retinoscopy and fractional cycloplegia (drops temporarily ‘relax’ accommodation) to get precise prescription values.",
                            },
                            {
                                title: "Biometry (Axial Length and Eye Parameters)",
                                text: "We non-invasively measure axial length, anterior chamber depth, and lens thickness. Important for monitoring myopia progression in children and for intraocular lens selection later in life.",
                            },
                            {
                                title: "Pachymetry (Corneal Thickness)",
                                text: "A light or ultrasound device quickly and painlessly measures corneal thickness. Data are needed for intraocular pressure evaluation, future refractive planning, and post-injury or inflammation control.",
                            },
                            {
                                title: "Keratotopography (Corneal Map)",
                                text: "Determines corneal shape and curvature. In children, it helps detect astigmatism, early keratoconus signs in teens, and select proper optical correction. The procedure is non-contact.",
                            },
                            {
                                title: "Perimetry (Visual Field Test)",
                                text: "We assess what part of the visual field a child perceives while focusing on a point. Useful for detecting optic nerve issues, neuro-ophthalmic conditions, and glaucoma risk monitoring. Instructions are given simply for easy cooperation.",
                            },
                            {
                                title: "Biomicroscopy (Slit-Lamp Exam)",
                                text: "A ‘microscope for the eye’ that allows a detailed look at eyelids, cornea, iris, and lens. Children sit comfortably while the doctor gently explains each step — it’s completely painless.",
                            },
                            {
                                title: "Fundus Examination with a Lens",
                                text: "After pupil-dilating drops, the doctor examines the retina, macula, and optic disc. Detects congenital changes, myopia-related damage, vascular and inflammatory conditions. Local anesthetic drops are used if needed.",
                            },
                            {
                                title: "Dioptrometry (Glasses Check)",
                                text: "We measure the optical strength of current glasses: sphere, cylinder, axis, interpupillary distance. Helps assess if glasses are suitable and whether an updated prescription is needed.",
                            },
                        ],
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "List of hardware vision therapy (Zlata Children's Clinic)",
                        text: "All these procedures are available directly at Zlata Children's Clinic: personalized programs based on the child’s age and diagnosis. The usual course includes 10–15 sessions of 30–40 minutes in a comfortable, play-based format. Book a consultation — we’ll help you choose the best program and inform you about the current prices.",
                        list: [
                            {
                                title: "Pleoptics (AMBLYOCOR)",
                                text: "Trains the 'lazy' eye, improves visual acuity and contrast sensitivity in children. Conducted in a playful setting at Zlata Children's Clinic.",
                            },
                            {
                                title: "Orthoptics / Diploptics (Synoptophore)",
                                text: "Develops bifixation, fusion reserves, and stereovision; helps with strabismus. The course and parameters are selected by the doctor at Zlata Children's Clinic.",
                            },
                            { videoOnly: "/videos/about-cta-mob.mp4" },
                            {
                                title: "Computer Programs",
                                text: "('Oculist', 'Blade', and game-based trainers) — motivate children to participate, improve eye coordination and visual endurance. Used at Zlata Children's Clinic as part of a comprehensive therapy program.",
                            },
                            {
                                title: "Support for Occlusion Therapy",
                                text: "Individual 'patching' schemes for the stronger eye, family guidance, and effectiveness monitoring. Managed by specialists at Zlata Children's Clinic.",
                            },
                            {
                                title: "Convergence/Divergence Exercises",
                                bgTransparent: true,
                                text: "Correction of convergence insufficiency, stabilization of binocular fixation, and improvement of reading comfort (Brock string, synoptophore, binocular trainers).",
                            },
                            {
                                title: "Prismatic Techniques",
                                text: "Align the visual axes, enhance image fusion, and improve reading comfort. Applied as indicated at Zlata Children's Clinic.",
                            },
                            {
                                title: "Accommodation Training",
                                text: "Exercises and devices to improve focusing at near distances, reduce eye strain and headaches while reading. Individualized protocols are conducted at Zlata Children's Clinic.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціна",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "dityache-viddilennya"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "dityache-viddilennya"
                            )?.localeText.en,
                        },
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about children's eye examination",
                        content: [
                            {
                                question:
                                    "How much does an eye examination for children cost at Zlata Children's Clinic, and what does it include?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "It depends on the scope: whether cycloplegia, topography, or biometry are needed. The reception at Zlata Children's Clinic will inform you about package prices and help choose the optimal appointment.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "From what age should a child be examined at Zlata Children's Clinic?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The first screening is for infants; routine check-ups are recommended at 1 year, 3 years, before school, and annually during school years — even without complaints.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Are the examinations and hardware treatments at Zlata Children's Clinic painful?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "No. The procedures are safe, child-friendly, and often performed in a playful format. After using drops, short-term light sensitivity is possible.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can hardware treatment help without surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, if amblyopia or binocular vision disorders are detected early. The doctor at Zlata Children's Clinic will explain the advantages and limitations of each specific method.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How often should treatment courses and follow-ups be repeated?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Typically 10–15 sessions; repeated after 3–6 months if indicated. The follow-up schedule is created by the doctor at Zlata Children's Clinic.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Are there reviews or recommendations about Zlata Children's Clinic?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, reviews and comments from parents are available. The administrator can send a link or examples upon request.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Are there promotions or discounts at Zlata Children's Clinic?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "From time to time, there are promotions and discounts for diagnostic packages and treatment courses — please check when scheduling an appointment.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Private or public ophthalmology — which to choose?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Zlata Children's Clinic offers quick appointments, a clear care path, detailed reports, and transparent pricing. The final decision is up to the parents; we provide all the necessary information.",
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
                "В Детской клинике Злата проводится проверка зрения у детей — от младенцев до подростков.",
            sections: [
                {
                    type: "hero",
                    data: {
                        image: "/images/children-service.jpg",
                        imgPositionMobile: " right 25% top",
                        imgPositionDesktop: "right 25% top 10%",
                        title: "Детская клиника \n«Злата»",
                        text: "Частная офтальмология для детей: проверка зрения у детей от младенцев до подростков, комплексная диагностика (циклоплегия, топография, биометрия) и аппаратное лечение.",
                    },
                },
                {
                    type: "preview",
                    data: {
                        image: "/images/perevirka-zoru-preview.jpg",
                        title: "Детская клиника Злата — детская офтальмология в Киеве",
                        text: [
                            "В Детской клинике Злата проводится проверка зрения у детей от младенцев до подростков: точные обследования, индивидуальное лечение и понятные рекомендации для родителей. Если вы ищете, где проверить зрение ребёнку быстро и без стресса — запишитесь на консультацию врача. Администраторы клиники подскажут актуальные цены, акции и скидки, а также помогут выбрать удобное время визита в частную детскую офтальмологическую клинику.",
                        ],
                        textUp: "1 млн",
                        textDown: "консультаций проведено",
                        fractionUp: true,
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: false,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Когда обращаться: первые сигналы",
                                image: "/images/zlata-page.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Детская клиника Злата рекомендует не откладывать обследование, если вы замечаете даже небольшие изменения в поведении или привычках ребёнка. Жалобы на усталость глаз, «туман», двоение, головные боли к вечеру, прищуривание или слишком близкое поднесение гаджетов могут говорить о начале миопии, гиперметропии, астигматизма или нарушений бинокулярного зрения. У дошкольников тревожными сигналами являются частое трение глаз, чрезмерное моргание, избегание пазлов и мелких игр; у школьников — снижение концентрации, трудности при чтении с доски, неправильная осанка, приближение тетради к лицу.",
                                            },
                                            {
                                                type: "text",
                                                text: "Обратите внимание, если глаза «разъезжаются», на фото появляется периодическое косоглазие или «красный глаз» выражен асимметрично — это повод записаться на консультацию в Детскую клинику Злата. Также показаниями являются раннее использование гаджетов, наследственная близорукость, недоношенность, аллергии и жалобы на сухость или жжение после занятий. Плановая проверка зрения для детей у нас включает возрастные тесты, а при необходимости — диагностику с фракционной циклоплегией, топографию роговицы и контроль аксиальной длины глаза, чтобы вовремя остановить прогрессирование нарушений и предотвратить амблиопию.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Комплексная проверка: точная диагностика и план лечения",
                                image: "/images/facilities3.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "В Детской клинике Злата оценивают рефракцию (в т.ч. с фракционной циклоплегией), стереозрение, фузионные резервы, положение глаз, состояние глазного дна и темпы роста глазного яблока. По результатам врач формирует персональный план: оптическая коррекция, аппаратное лечение зрения у детей, график наблюдений и домашние упражнения. Родители получают понятное заключение, прозрачные цены, рекомендации и информацию, сколько стоит каждый этап. Мы также добавляем прогноз динамики (когда ожидать первых улучшений), объясняем преимущества и ограничения каждой методики простыми словами и выдаём памятку по гигиене зрения дома.",
                                            },
                                            {
                                                type: "text",
                                                text: "Все процедуры проходят в игровой, безстрессовой форме, а контрольные обследования планируются индивидуально (с учётом школы, кружков и нагрузки на зрение), чтобы обеспечить стабильное восстановление зрения у детей.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "numberListSection",
                    data: {
                        paddingTop: true,
                        paddingBottom: true,
                        title: "Почему выбирают Детскую клинику Злата",
                        text: [
                            "Частная детская офтальмологическая клиника в формате «всё в одном»: диагностика, лечение и контроль результата. Комфортный кабинет, современное оборудование, игровые методики и подробные заключения для школы/детсада.",
                            "В Детской клинике Злата мы объясняем показания, преимущества и возможные ограничения методик, даем честные рекомендации, открыто говорим о ценах и предоставляем отзывы пациентов.",
                        ],
                        image: "/images/equipment5.jpg",
                        listTitle: "Этапы детской диагностики в клинике Злата",
                        list: [
                            {
                                itemTitle: "Первичный скрининг и консультация",
                                itemText: [
                                    "Записаться на диагностику зрения можно за несколько минут — по телефону или онлайн.",
                                    "В Детской клинике Злата собираем жалобы и анамнез, проводим игровой скрининг остроты зрения, базовую оценку бинокулярных функций и положения глаз, осматриваем передний отрезок. Даём рекомендации по гигиене зрения и определяем, нужно ли расширенное обследование (циклоплегия, топография, биометрия). Сразу ориентируем по стоимости следующего этапа.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Расширенные измерения с циклоплегией",
                                itemText: [
                                    "Проводим рефрактометрию/скиаскопию под фракционной циклоплегией, кератотопографию/томографию для точного определения астигматизма, офтальмоскопию с медикаментозным расширением зрачка, измеряем аксиальную длину глаза, проверяем стереозрение и фузионные резервы. Объясняем результаты простыми словами и фиксируем их в протоколе.",
                                ],
                            },
                            {
                                itemTitle:
                                    "Персональный план лечения и наблюдения",
                                itemText: [
                                    "Команда клиники Злата обсуждает результаты с родителями, подбирает коррекцию (очки/линзы), назначает аппаратное лечение (по показаниям), выдает домашние упражнения и график контрольных визитов. Предоставляем письменное заключение, расчёт стоимости курса и ссылки на отзывы.",
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Список диагностических обследований",
                        text: "Во время диагностики глаз проводится ряд исследований, направленных на всестороннюю оценку состояния зрительной системы:",
                        slider: [
                            {
                                title: "Визиометрия (проверка остроты зрения)",
                                text: "Измеряем, как ребёнок видит вдаль и вблизи. Для малышей — картинки вместо букв, для школьников — стандартные таблицы. Тест проводится в игровой форме, чтобы ребёнок не волновался.",
                            },
                            {
                                title: "Тонометрия (внутриглазное давление)",
                                text: "Используем бесконтактную пневмотонометрию — это быстрый «поток воздуха», который помогает исключить глаукому и другие состояния. Дети переносят процедуру спокойно, всё длится несколько секунд.",
                            },
                            {
                                title: "Рефрактометрия",
                                text: "На авторефрактометре определяем преломляющую силу глаза: миопию, гиперметропию, астигматизм. При необходимости добавляем скиаскопию и фракционную циклоплегию (капли временно «отключают» аккомодацию), чтобы получить точные данные для рецепта очков/линз.",
                            },
                            {
                                title: "Биометрия (аксиальная длина и параметры глаза)",
                                text: "Безконтактно измеряем длину глаза, глубину передней камеры, толщину хрусталика. Важно для контроля прогрессирования близорукости у детей и подбора интраокулярных линз в будущем.",
                            },
                            {
                                title: "Пахиметрия (толщина роговицы)",
                                text: "Световой или ультразвуковой прибор быстро и безболезненно измеряет толщину роговицы. Эти данные нужны для оценки внутриглазного давления, планирования рефракционных вмешательств и контроля после травм/воспалений.",
                            },
                            {
                                title: "Кератотопография (карта роговицы)",
                                text: "Определяем форму и кривизну роговицы. В детском возрасте помогает выявить астигматизм, ранние признаки кератоконуса у подростков и подобрать правильную оптическую коррекцию. Процедура бесконтактная.",
                            },
                            {
                                title: "Периметрия (поле зрения)",
                                text: "Изучаем, какую часть пространства ребёнок охватывает взглядом при фиксации. Полезно при подозрении на поражение зрительного нерва, невроофтальмологических состояниях и для контроля глаукомных рисков. Задание объясняем просто, чтобы ребёнку было легко выполнять тест.",
                            },
                            {
                                title: "Биомикроскопия (щелевая лампа)",
                                text: "Это «микроскоп для глаза», которым врач детально осматривает веки, роговицу, радужку, хрусталик. Дети сидят в удобном кресле, врач объясняет каждый шаг — боли нет.",
                            },
                            {
                                title: "Осмотр глазного дна через линзу",
                                text: "После закапывания капель для расширения зрачка врач оценивает сетчатку, макулу и диск зрительного нерва. Метод выявляет врождённые изменения, последствия миопии, сосудистые и воспалительные состояния. При чувствительности используем местную анестезию каплями.",
                            },
                            {
                                title: "Диоптриметрия (проверка очков)",
                                text: "Измеряем оптическую силу имеющихся очков: сферу, цилиндр, ось, межцентровое расстояние. Помогает понять, подходят ли очки ребёнку и нужно ли обновление рецепта.",
                            },
                        ],
                    },
                },
                {
                    type: "advantages",
                    data: {
                        title: "Перечень аппаратного лечения (Детская клиника Злата)",
                        text: "Все эти процедуры можно пройти непосредственно в Детской клинике Злата: индивидуальные программы с учётом возраста и диагноза ребёнка. Курс обычно включает 10–15 занятий по 30–40 минут в комфортном игровом формате. Запишитесь на консультацию — подскажем оптимальный маршрут и актуальные цены.",
                        list: [
                            {
                                title: "Плеоптика (АМБЛИОКОР)",
                                text: "Тренирует «ленивый» глаз, повышает остроту зрения и контрастную чувствительность у детей. Проводится в игровой форме в Детской клинике Злата.",
                            },
                            {
                                title: "Ортоптика / диплоптика (синаптофор)",
                                text: "Развивает бификсацию, фузионные резервы и стереозрение, помогает при косоглазии. Курс и параметры подбирает врач Детской клиники Злата.",
                            },
                            { videoOnly: "/videos/about-cta-mob.mp4" },
                            {
                                title: "Компьютерные программы",
                                text: "('Окулист', 'Клинок', игровые тренажёры) — мотивируют ребёнка к занятиям, улучшают координацию глаз и зрительную выносливость. Применяются в Детской клинике Злата как часть комплексной терапии.",
                            },
                            {
                                title: "Поддержка окклюзионной терапии",
                                text: "Индивидуальные схемы «заклеивания» более сильного глаза, обучение семьи и контроль эффективности. Сопровождение проводится специалистами Детской клиники Злата.",
                            },
                            {
                                title: "Упражнения на конвергенцию/дивергенцию",
                                bgTransparent: true,
                                text: "Коррекция недостаточности конвергенции, стабилизация бинокулярной фиксации и комфортного чтения (нить Брока, синаптофор, бинокулярные тренажёры).",
                            },
                            {
                                title: "Призматические методики",
                                text: "Выравнивают зрительные оси, улучшают слияние изображений и комфорт при чтении. Применяются по показаниям в Детской клинике Злата.",
                            },
                            {
                                title: "Тренировка аккомодации",
                                text: "Упражнения и приборы для улучшения фокусировки на близком расстоянии, снижения утомляемости и головной боли при чтении. Проводятся индивидуальные протоколы в Детской клинике Злата.",
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціна",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "dityache-viddilennya"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "dityache-viddilennya"
                            )?.localeText.ru,
                        },
                    },
                },
                { type: "giftCTA" },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о проверке зрения у детей",
                        content: [
                            {
                                question:
                                    "Сколько стоит проверка зрения у детей в Детской клинике Злата и что входит в стоимость?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость зависит от объема обследования: требуется ли циклоплегия, топография или биометрия. Регистратура Детской клиники Злата подскажет пакетные цены и поможет выбрать оптимальный прием.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "С какого возраста проходить осмотр в Детской клинике Злата?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Первый скрининг проводится у младенцев; плановые осмотры — в 1 год, 3 года, перед школой и ежегодно у школьников — даже при отсутствии жалоб.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Болезненны ли обследования и аппаратное лечение в Детской клинике Злата?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Нет. Процедуры безопасны, адаптированы для детей и часто проходят в игровой форме. После капель возможна кратковременная светобоязнь.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Поможет ли аппаратное лечение без операции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, при раннем выявлении амблиопии или нарушений бинокулярного зрения. Врач Детской клиники Злата объяснит преимущества и особенности конкретных методик.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как часто нужно повторять курсы и контрольные осмотры?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Обычно 10–15 занятий; повтор через 3–6 месяцев по показаниям. График контрольных осмотров составляет врач Детской клиники Злата.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Есть ли отзывы или рекомендации о Детской клинике Злата?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, доступны отзывы и комментарии родителей. Администратор может отправить ссылку или примеры по запросу.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Есть ли акции и скидки в Детской клинике Злата?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Периодически действуют акции и скидки на диагностические пакеты и курсы лечения — уточняйте при записи.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Частная или государственная офтальмология: что выбрать?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Детская клиника Злата обеспечивает быстрый прием, четкий маршрут, подробные заключения и прозрачные цены. Окончательный выбор за родителями; мы предоставим всю необходимую информацию.",
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
        name: servicesList.find(s => s.key === "likuvannya-keratokonusa")!,
        price: findPriceItem("likuvannya-keratokonusa")!,
        uk: {
            textMain:
                "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "лікування кератоконусу",
                        text: "Кератоконус — це поступове стоншення і «випинання» рогівки, що призводить до спотворення зображення, бликів і зниження гостроти зору.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Лікування кератоконусу методом BritishX - перший результат за 12 хвилин",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Кератоконус - це прогресуюче захворювання рогівки, при якому вона витончується і деформується, набуваючи конічної форми. Патологія не супроводжується запаленням, але впливає на зір. Основна загроза – значне зниження гостроти зору, яке може позбавити вас можливості керувати автомобілем, працювати з текстами та виконувати повсякденні візуальні завдання.",
                                            },
                                            {
                                                type: "text",
                                                text: "Серед симптомів кератоконуса - спотворення предметів, підвищена чутливість до світла, відчуття печіння та сверблячки в очах, двоїння зображення. Ці прояви заважають нормально бачити, знижують концентрацію та серйозно відбиваються на якості життя.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Що буде, якщо ігнорувати лікування?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Найчастіше хвороба розвивається поступово і призводить до серйозних змін у рогівці. Можливі ускладнення:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Розвиток важкого астигматизму;",
                                                    "Стійке двоїння об'єктів (диплопія);",
                                                    "Набряк рогівки (гідропс);",
                                                    "Розриви рогівки;",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Без своєчасного втручання патологічні зміни у структурі рогівки стають незворотними. Запущений кератоконус може призвести до повної втрати здатності бачити, особливо якщо не вжити дієвих заходів на ранній стадії. Тільки рання діагностика та грамотно підібрана терапія здатні загальмувати або повністю зупинити розвиток захворювання.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Звідки береться кератоконус?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Формування кератоконуса пов'язані з порушенням регуляторних функцій мозку. Усі процеси в організмі, включаючи зорові, контролюються центральною нервовою системою. Коли під впливом внутрішніх чи зовнішніх факторів порушуються нейронні зв'язки та взаємодія відділів мозку, що регулюють зір, в організмі починають відбуватися збої.",
                                            },
                                            {
                                                type: "text",
                                                text: "Кератоконус, як і багато хронічних захворювань, розвивається на тлі сукупності причин: генетичної схильності, підвищеного навантаження на зір, травм, гормонального дисбалансу, імунних порушень та інших факторів. Всі ці впливи в комплексі можуть призвести до дестабілізації зорової системи та формування характерних змін рогівки.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "Як ефективно зупинити прогрес кератоконусу?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Сьогодні офтальмологія має в своєму розпорядженні сучасний, перевірений і безпечний метод лікування кератоконуса - процедура крослінкінгу. Ця технологія заснована на зміцненні тканини рогівки за рахунок створення додаткових зв'язків між молекулами колагену. Особливо актуальним є цей підхід для пацієнтів віком до 45 років, коли захворювання найбільш активно прогресує.",
                                            },
                                            {
                                                type: "text",
                                                text: "Метод був розроблений у Швейцарії і полягає у спрямованому ультрафіолетовому впливі на рогівку, попередньо оброблену рибофлавіном. Контрольована глибина проникнення світла активує біохімічні процеси, у яких тканина стає щільнішою і стійкою до деформації. Прогресування хвороби припиняється, а згодом можлива стабілізація та навіть часткове відновлення зорових функцій.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Сучасний крослінкінг: гарантія результату",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Також ми пропонуємо передову методику крослінкінг для стабілізації рогівки на ранніх етапах захворювання кератоконус. Вартість процедури залежить від протоколу та діагностичних показників. Уточнити крослінкінг рогівки ціна можна під час консультації.",
                                            },
                                            {
                                                type: "text",
                                                text: "Ми використовуємо лише сертифіковане обладнання та швейцарські препарати. Процедура операції крослінкінг допомагає зберегти здоров’я рогівки та запобігти подальшому прогресуванню захворювання, особливо якщо кератоконус виявлено на ранніх стадіях. Якщо вас цікавить крос лінкінг ціна або крослінкінг вартість, наші консультанти нададуть повну інформацію з урахуванням вашої ситуації.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціна на лікування кератоконусу в Києві",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "likuvannya-keratokonusa"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "likuvannya-keratokonusa"
                            )?.localeText.uk,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про кератоконус та крослінкінг рогівки",
                        content: [
                            {
                                question:
                                    "Що таке кератоконус і чому потрібна операція?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Кератоконус — прогресуюче захворювання рогівки, що призводить до її деформації. Коли зір погіршується і корекція лінзами вже не допомагає, може знадобитися хірургічне втручання — наприклад, операція крослінкінг або інші методи лікування кератоконусу. Основні переваги: зупинка прогресу та стабілізація рогівки. Можливі недоліки та побічні ефекти обговорюються під час консультації з лікарем.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Як проходить діагностика та обстеження перед крослінкінгом?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Спочатку проводимо повну діагностику кератоконусу: топографію або томографію рогівки, пахіметрію, оцінюємо ступінь астигматизму. Повний пакет обстеження у приватній клініці допомагає визначити показання та протипоказання до процедури. Якщо потрібна термінова допомога — організовуємо швидкий прийом у профільного спеціаліста. Після огляду лікар надає індивідуальні рекомендації та пояснює варіанти лікування.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Що дає крослінкінг і кому він показаний?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Крослінкінг зміцнює рогівку і зупиняє прогрес кератоконусу. Процедура показана при прогресуючому перебігу хвороби або при тонкій рогівці. Це часто найкращий спосіб зберегти стабільний зір; іноді комбінується з іншими методами. На консультації лікар детально пояснює переваги, можливі ризики та допомагає визначити, чи доцільно виконувати крослінкінг саме зараз.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки коштує крослінкінг: ціна та від чого вона залежить?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Найчастіше пацієнти запитують: «скільки коштує крослінкінг?». На ціну впливають товщина рогівки, вибраний протокол, тип препаратів і витратних матеріалів. Вартість уточнюється індивідуально після діагностики. Ми гарантуємо прозорість: загальна вартість включає протокол процедури, препарати та післяопераційні огляди. Жодних прихованих платежів — фінальну суму ви знаєте заздалегідь.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи є акції та знижки на крослінкінг?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Періодично діють акції або спеціальні знижки. При записі запитайте у кол-центрі: «чи діє зараз акційна ціна на крослінкінг?». Якщо є активні пропозиції, адміністратор порадить найкращий варіант. Актуальні умови уточнюйте під час консультації або телефоном.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Як записатися і куди звернутися на консультацію?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Записатися найзручніше онлайн або телефоном — оберіть зручний для вас кабінет клініки. На прийом візьміть попередні медичні висновки. Після обстеження ви отримаєте персональний план лікування кератоконусу, рекомендації щодо крослінкінгу та точну вартість процедури у вашому випадку.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Відгуки, коментарі та рекомендації пацієнтів — де почитати?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Ми дотримуємося принципу прозорості — публікуємо відгуки, коментарі та незалежні рекомендації про операції крослінкінг і лікування кератоконусу. Перейдіть до розділу «Відгуки» на сайті або запитайте добірку матеріалів у адміністратора. Також ділимося клінічними кейсами та оглядами результатів (без персональних даних).",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Протипоказання, побічні ефекти та безпека",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Як і будь-яке медичне втручання, крослінкінг має свої протипоказання (активні запальні процеси, певні захворювання рогівки) та можливі побічні ефекти (тимчасовий дискомфорт, коливання гостроти зору). Ми детально пояснюємо ризики та переваги під час консультації, щоб ви могли ухвалити зважене рішення. Головна мета — підібрати безпечний і ефективний варіант лікування саме для вас.",
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
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Keratoconus treatment",
                        text: "Keratoconus is a gradual thinning and «bulging» of the cornea, which leads to image distortion, glare, and reduced visual acuity.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Keratoconus treatment with the BritishX method – first results in 12 minutes",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Keratoconus is a progressive corneal disease in which the cornea becomes thinner and deformed, taking on a conical shape. The condition is not inflammatory but affects vision. The main risk is a significant decrease in visual acuity, which can deprive you of the ability to drive, work with text, or perform everyday visual tasks.",
                                            },
                                            {
                                                type: "text",
                                                text: "Among the symptoms of keratoconus are distorted vision, increased light sensitivity, burning or itching in the eyes, and double vision. These manifestations interfere with normal sight, reduce concentration, and significantly impact quality of life.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "What happens if treatment is ignored?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "The disease usually develops gradually and leads to severe corneal changes. Possible complications include:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Development of severe astigmatism;",
                                                    "Persistent double vision (diplopia);",
                                                    "Corneal edema (hydrops);",
                                                    "Corneal ruptures;",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Without timely intervention, the structural changes in the cornea become irreversible. Advanced keratoconus may result in complete vision loss, especially if effective measures are not taken early. Only early diagnosis and properly selected therapy can slow down or completely stop disease progression.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "What causes keratoconus?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "The development of keratoconus is associated with dysfunction in the brain’s regulatory functions. All body processes, including vision, are controlled by the central nervous system. When neural connections and the interaction of visual control centers are disrupted by internal or external factors, system imbalances begin to occur.",
                                            },
                                            {
                                                type: "text",
                                                text: "Like many chronic diseases, keratoconus develops due to a combination of factors: genetic predisposition, visual strain, eye trauma, hormonal imbalance, immune disorders, and others. Together, these influences can destabilize the visual system and lead to characteristic corneal changes.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "How to effectively stop the progression of keratoconus?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Modern ophthalmology offers an advanced, proven, and safe method for treating keratoconus — the cross-linking procedure. This technology strengthens the corneal tissue by creating additional bonds between collagen molecules. The approach is especially relevant for patients under the age of 45, when the disease tends to progress most actively.",
                                            },
                                            {
                                                type: "text",
                                                text: "The method was developed in Switzerland and is based on targeted ultraviolet exposure to the cornea, which is pre-treated with riboflavin. The controlled light penetration depth activates biochemical processes that make the tissue denser and more resistant to deformation. Disease progression is halted, and over time, stabilization or even partial recovery of visual function may occur.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Modern cross-linking: guaranteed results",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "We also offer an advanced cross-linking technique for stabilizing the cornea at the early stages of keratoconus. The cost of the procedure depends on the chosen protocol and diagnostic parameters. You can clarify the cross-linking price during your consultation.",
                                            },
                                            {
                                                type: "text",
                                                text: "We use only certified equipment and Swiss-made pharmaceuticals. The cross-linking procedure helps preserve corneal health and prevent further disease progression, especially when keratoconus is detected early. If you’re interested in the cost of cross-linking, our consultants will provide full information tailored to your specific case.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Price for keratoconus treatment in Kyiv",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "likuvannya-keratokonusa"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "likuvannya-keratokonusa"
                            )?.localeText.en,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about keratoconus and corneal cross-linking",
                        content: [
                            {
                                question:
                                    "What is keratoconus and why is surgery necessary?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Keratoconus is a progressive corneal disease that leads to its deformation. When vision worsens and lens correction no longer helps, surgical treatment may be required — such as cross-linking or other keratoconus treatment methods. The main advantages are stopping progression and stabilizing the cornea. Possible drawbacks and side effects are discussed during the doctor’s consultation.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How is diagnosis and examination performed before cross-linking?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "First, we conduct a full keratoconus diagnosis: corneal topography or tomography, pachymetry, and assessment of astigmatism degree. A comprehensive examination package in our private clinic helps determine indications and contraindications for the procedure. If urgent help is needed, we can arrange an immediate appointment with a specialist. After the examination, the doctor provides individual recommendations and explains treatment options.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What does cross-linking do and who is it for?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Cross-linking strengthens the cornea and stops the progression of keratoconus. The procedure is indicated in progressive cases or with thin corneas. It is often the best way to maintain stable vision and can sometimes be combined with other methods. During consultation, the doctor explains benefits, possible risks, and helps decide whether cross-linking is appropriate for you now.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does cross-linking cost and what affects the price?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Patients often ask: “How much does cross-linking cost?”. The price depends on corneal thickness, chosen protocol, type of medications and consumables. The exact cost is confirmed individually after diagnostics. We guarantee transparency — the total cost includes the procedure protocol, medications, and postoperative check-ups. No hidden fees — you know the final price in advance.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Are there any discounts or special offers for cross-linking?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Special offers or discounts are available periodically. When booking, ask our call center if there is a current promotional price for cross-linking. If active offers are available, the administrator will recommend the best option. Check the latest details during your consultation or by phone.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How to make an appointment and where to go for consultation?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "You can easily book online or by phone — choose the most convenient clinic location. Bring previous medical reports to your visit. After examination, you will receive a personalized keratoconus treatment plan, cross-linking recommendations, and the exact cost of the procedure for your case.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Where can I read patient reviews and recommendations?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "We value transparency — you can find patient reviews, comments, and independent recommendations about cross-linking and keratoconus treatment. Visit the “Reviews” section on our website or request a selection of materials from our administrator. We also share clinical cases and treatment results (without personal data).",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Contraindications, side effects, and safety",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Like any medical procedure, cross-linking has contraindications (active inflammation, certain corneal diseases) and possible side effects (temporary discomfort, fluctuations in visual acuity). We carefully explain all risks and benefits during consultation so you can make an informed decision. Our main goal is to ensure a safe and effective treatment option tailored to you.",
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
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Лечение кератоконуса",
                        text: "Кератоконус – это постепенное утончение и «выпячивание» роговицы, приводящее к искажению изображения, бликов и снижению остроты зрения.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Лечение кератоконуса методом BritishX — первый результат через 12 минут",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Кератоконус — это прогрессирующее заболевание роговицы, при котором она истончается и деформируется, приобретая коническую форму. Патология не сопровождается воспалением, но влияет на зрение. Основная опасность — значительное снижение остроты зрения, которое может лишить вас возможности водить автомобиль, работать с текстами и выполнять повседневные визуальные задачи.",
                                            },
                                            {
                                                type: "text",
                                                text: "Среди симптомов кератоконуса — искажение предметов, повышенная чувствительность к свету, ощущение жжения и зуда в глазах, двоение изображения. Эти проявления мешают нормально видеть, снижают концентрацию и серьёзно влияют на качество жизни.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Что будет, если игнорировать лечение?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Чаще всего заболевание развивается постепенно и приводит к серьёзным изменениям роговицы. Возможные осложнения:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Развитие тяжёлого астигматизма;",
                                                    "Стойкое двоение объектов (диплопия);",
                                                    "Отёк роговицы (гидропс);",
                                                    "Разрывы роговицы;",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                text: "Без своевременного вмешательства патологические изменения структуры роговицы становятся необратимыми. Запущенный кератоконус может привести к полной потере зрения, особенно если не принять меры на ранней стадии. Только ранняя диагностика и правильно подобранная терапия способны замедлить или полностью остановить развитие болезни.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Откуда берётся кератоконус?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Развитие кератоконуса связано с нарушением регуляторных функций мозга. Все процессы в организме, включая зрительные, контролируются центральной нервной системой. Когда под влиянием внутренних или внешних факторов нарушаются нейронные связи и взаимодействие отделов мозга, отвечающих за зрение, в организме начинаются сбои.",
                                            },
                                            {
                                                type: "text",
                                                text: "Кератоконус, как и многие хронические заболевания, развивается на фоне совокупности причин: генетической предрасположенности, повышенной нагрузки на зрение, травм, гормонального дисбаланса, иммунных нарушений и других факторов. Все эти воздействия в комплексе могут привести к дестабилизации зрительной системы и формированию характерных изменений роговицы.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "Как эффективно остановить прогресс кератоконуса?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Современная офтальмология располагает современным, проверенным и безопасным методом лечения кератоконуса — процедурой кросслинкинга. Эта технология основана на укреплении ткани роговицы за счёт создания дополнительных связей между молекулами коллагена. Особенно актуален данный подход для пациентов младше 45 лет, когда заболевание наиболее активно прогрессирует.",
                                            },
                                            {
                                                type: "text",
                                                text: "Метод был разработан в Швейцарии и заключается в направленном воздействии ультрафиолетового света на роговицу, предварительно обработанную рибофлавином. Контролируемая глубина проникновения света активирует биохимические процессы, при которых ткань становится плотнее и устойчивее к деформации. Прогрессирование болезни останавливается, а со временем возможно стабилизирование и даже частичное восстановление зрительных функций.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Современный кросслинкинг: гарантия результата",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Мы также предлагаем передовую методику кросслинкинга для стабилизации роговицы на ранних стадиях кератоконуса. Стоимость процедуры зависит от выбранного протокола и диагностических показателей. Уточнить цену кросслинкинга можно во время консультации.",
                                            },
                                            {
                                                type: "text",
                                                text: "Мы используем только сертифицированное оборудование и швейцарские препараты. Процедура кросслинкинга помогает сохранить здоровье роговицы и предотвратить дальнейшее прогрессирование заболевания, особенно если кератоконус выявлен на ранних стадиях. Если вас интересует цена кросслинкинга, наши консультанты предоставят полную информацию с учётом вашей ситуации.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цена на лечение кератоконуса в Киеве",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "likuvannya-keratokonusa"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "likuvannya-keratokonusa"
                            )?.localeText.ru,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о кератоконусе и кросслинкинге роговицы",
                        content: [
                            {
                                question:
                                    "Что такое кератоконус и зачем нужна операция?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Кератоконус — это прогрессирующее заболевание роговицы, приводящее к её деформации. Когда зрение ухудшается и коррекция линзами уже не помогает, может потребоваться хирургическое вмешательство — например, операция кросслинкинг или другие методы лечения кератоконуса. Основные преимущества: остановка прогрессирования и стабилизация роговицы. Возможные недостатки и побочные эффекты обсуждаются на консультации с врачом.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как проходит диагностика и обследование перед кросслинкингом?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Сначала проводится полная диагностика кератоконуса: топография или томография роговицы, пахиметрия, оценка степени астигматизма. Полный пакет обследования в частной клинике помогает определить показания и противопоказания к процедуре. При необходимости срочной помощи мы организуем быстрый приём у профильного специалиста. После осмотра врач даёт индивидуальные рекомендации и объясняет варианты лечения.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Что даёт кросслинкинг и кому он показан?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Кросслинкинг укрепляет роговицу и останавливает прогрессирование кератоконуса. Процедура показана при прогрессирующем течении болезни или при тонкой роговице. Это часто лучший способ сохранить стабильное зрение; иногда сочетается с другими методами. На консультации врач подробно объясняет преимущества, возможные риски и помогает определить, стоит ли проводить кросслинкинг именно сейчас.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит кросслинкинг и от чего зависит цена?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Пациенты часто спрашивают: «Сколько стоит кросслинкинг?». Цена зависит от толщины роговицы, выбранного протокола, типа препаратов и расходных материалов. Стоимость уточняется индивидуально после диагностики. Мы гарантируем прозрачность: общая стоимость включает протокол процедуры, препараты и послеоперационные осмотры. Никаких скрытых платежей — финальную сумму вы знаете заранее.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Есть ли акции и скидки на кросслинкинг?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Периодически действуют акции и специальные скидки. При записи уточните в колл-центре: «Действует ли сейчас акционная цена на кросслинкинг?». Если предложения активны, администратор подберёт лучший вариант. Актуальные условия уточняйте на консультации или по телефону.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как записаться и куда обратиться на консультацию?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Записаться можно онлайн или по телефону — выберите удобное отделение клиники. На приём возьмите предыдущие медицинские заключения. После обследования вы получите персональный план лечения кератоконуса, рекомендации по кросслинкингу и точную стоимость процедуры в вашем случае.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Отзывы, комментарии и рекомендации пациентов — где почитать?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Мы придерживаемся принципа прозрачности — публикуем отзывы, комментарии и независимые рекомендации о процедурах кросслинкинг и лечении кератоконуса. Перейдите в раздел «Отзывы» на сайте или запросите подборку материалов у администратора. Также делимся клиническими кейсами и обзорами результатов (без персональных данных).",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Противопоказания, побочные эффекты и безопасность",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Как и любое медицинское вмешательство, кросслинкинг имеет противопоказания (активные воспалительные процессы, определённые заболевания роговицы) и возможные побочные эффекты (временный дискомфорт, колебания остроты зрения). Мы подробно объясняем риски и преимущества на консультации, чтобы вы могли принять взвешенное решение. Главная цель — подобрать безопасный и эффективный вариант лечения именно для вас.",
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
        name: servicesList.find(s => s.key === "refrakczijna-lensektomiya")!,
        price: findPriceItem("refrakczijna-lensektomiya")!,
        uk: {
            textMain:
                "BiVision RLE (рефракційна ленсектомія) — ефективний метод корекції пресбіопії (вікова далекозорість).",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Рефракційна заміна кришталика ока (ленсектомія)",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "BiVision RLE — сучасна альтернатива лазерній корекції зору",
                        image: "/images/facilities3.jpg",
                        text: [
                            "BiVision RLE — сучасна мікроінвазивна операція, під час якої природний кришталик ока замінюють на інтраокулярну лінзу (ІОЛ), щоб відновити чіткий зір поблизу, на середній відстані та вдалину. Підходить, коли лазерна корекція протипоказана або очікуваний результат лазеру недостатній (тонка/нерівна рогівка, високі діоптрії, комбіновані вади зору).",
                            "Для кого: 45+ із пресбіопією, пацієнти з високою міопією/гіперметропією, астигматизмом, ранніми змінами кришталика або ризиком катаракти.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Чому варто вибрати метод BiVision RLE: ключові переваги",
                        text: "Рефракційна хірургія в офтальмології підходить як при далекозорості , так і при короткозорості , включаючи астигматизм.",
                        slider: [
                            {
                                title: "Комплексна автоматизована діагностика",
                                text: "Дозволяє визначити гостроту зору за допомогою спеціальних таблиць з цифрами, літерами або знаками.",
                            },
                            {
                                title: "IPL терапія",
                                text: "Вимір внутрішньоочного тиску. Підвищений внутрішньоочний тиск є основною причиною виникнення глаукоми.",
                            },
                            {
                                title: "Масаж повік із застосуванням спеціальних методик",
                                text: "Вимір внутрішньоочного тиску. Підвищений внутрішньоочний тиск є основною причиною виникнення глаукоми.",
                            },
                            {
                                title: "Діагностика та лікування супутніх захворювань",
                                text: "Вимір внутрішньоочного тиску. Підвищений внутрішньоочний тиск є основною причиною виникнення глаукоми.",
                            },
                            {
                                title: "Довготривалий зір без окулярів",
                                text: "За допомогою технології BiVision можна відновити зір як поблизу, так і вдалину, повністю позбавившись очкової залежності навіть за вікової далекозорості.",
                            },
                            {
                                title: "Альтернатива лазерної корекції",
                                text: "Методика ідеально підходить пацієнтам, яким протипоказано лазерне втручання, але потрібна корекція міопії, гіперметропії чи астигматизму.",
                            },
                            {
                                title: "Преміальні лінзи від Rayner",
                                text: "У клініці застосовуються виключно оригінальні англійські інтраокулярні лінзи високого класу – жодних компромісів із якістю та безпекою.",
                            },
                            {
                                title: "Профілактика розвитку катаракти",
                                text: "У процесі операції видаляється природний кришталик, що унеможливлює виникнення катаракти в майбутньому. Додаткове полірування капсули підвищує чіткість та яскравість зору після процедури.",
                            },
                            {
                                title: "Ощадна технологія вилучення кришталика",
                                text: "Застосовується авторська методика iQ 5 Minutes без ультразвуку, тільки за допомогою спрямованого водного потоку. Це мінімізує вплив на рогівку та забезпечує швидку реабілітацію.",
                            },
                            {
                                title: "Високий професіоналізм хірургів",
                                text: "Офтальмохірурги клініки навчалися в кращих європейських центрах і мають солідний практичний досвід — не менше десяти років у мікрохірургії ока.",
                            },
                            {
                                title: "Доступ до передових медичних розробок",
                                text: "Фахівці центру беруть участь у клінічному тестуванні інноваційного обладнання ще до його виходу на ринок, що дозволяє використовувати найсучасніші технології лікування зору.",
                            },
                        ],
                        btn: {
                            btnName: "записатися на прийом",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        firstImageLeft: true,
                        data: [
                            {
                                title: "Основні показання та симптоми, коли варто розглядати рефракційну заміну кришталика (RLE)",
                                image: "/images/equipment4.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "RLE розглядають тоді, коли виникає поєднання вікової далекозорості з іншими порушеннями рефракції — наприклад, коли потрібні різні окуляри для роботи за комп’ютером і для читання, а до вечора очі швидко втомлюються і фокус «стрибає». Часто пацієнти скаржаться на туманне або менш контрастне зображення зранку, на бліки під час нічного кермування та на відчуття, що окуляри вже не дають бажаної чіткості. Якщо раніше офтальмолог відмовив у лазерній корекції через параметри рогівки, RLE стає логічною альтернативою, адже метод працює з кришталиком і не змінює рогівку. На ранніх етапах помутніння кришталика процедура ще й «прибирає» ризик катаракти в майбутньому, а людям з професійними вимогами до зору забезпечує більшу стабільність і контрастність зображення.",
                                            },
                                        ],
                                        greenText:
                                            "Рішення «два в одному». Оновлюємо зір і одночасно прибираємо ризик катаракти в майбутньому. Мінімальний розріз, швидке відновлення, максимум комфорту.",
                                    },
                                ],
                            },
                            {
                                title: "Чому пацієнти обирають RLE",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Вибір на користь RLE зазвичай зумовлений поєднанням клінічних і життєвих факторів:",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "1. Медичні показання",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Не можна або недоцільно робити лазерну корекцію рогівки.",
                                                    "Потрібно ширший діапазон корекції (високі діоптрії, поєднання міопії/гіперметропії з астигматизмом).",
                                                    "Є ризик або ранні прояви катаракти — заміна кришталика вирішує проблему наперед.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "2. Очікування від якості зору",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Бажання бачити без окулярів поблизу, на середній відстані й у далечінь (мультифокальні/трифокальні ІОЛ).",
                                                    "Потреба в стабільній чіткості протягом дня: робота з текстами, екранами, водіння, спорт.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "3. Безпека та передбачуваність",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "RLE не впливає на рогівку — важливо при тонкій/проблемній рогівці.",
                                                    "Профілактика катаракти: після видалення власного кришталика вона більше не розвивається.",
                                                    "Персоналізований підбір ІОЛ під стиль життя (читання, комп’ютер, нічне водіння).",
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <LansectomyGreenSection /> },
                {
                    type: "numberListSection",
                    data: {
                        listTitle: "Етапи",
                        list: [
                            {
                                itemTitle:
                                    "Запис на прийом та підготовка до діагностики",
                                itemText: [
                                    "Записатися можна телефоном або онлайн — це займе кілька хвилин.",
                                    "Спеціальної підготовки не потрібно. Якщо носите м’які контактні лінзи — зніміть їх із вечора (бажано за 12 годин до візиту). Візьміть із собою поточні окуляри/рецепт та результати попередніх обстежень — ми оцінимо динаміку.",
                                    "Рекомендуємо планувати візит без кермування одразу після прийому: під час огляду можливе розширення зіниць і тимчасове погіршення зору зблизька.",
                                ],
                            },
                            {
                                itemTitle: "Комп’ютерна діагностика зору",
                                itemText: [
                                    "Тривалість — приблизно 2–2,5 години.",
                                    "Проводимо повний комплекс вимірювань, необхідний для рефракційної заміни кришталика (RLE):авторефрактометрія та перевірка гостроти зору, біометрія та розрахунок сили ІОЛ, кератотопографія/томографія рогівки, вимір внутрішньоочного тиску, за потреби: ОКТ макули та зорового нерва, оцінка слізної плівки.",
                                    "Для точності застосовуємо краплі для розширення зіниць — упродовж кількох годин після огляду зір зблизька може бути розмитим.",
                                ],
                            },
                            {
                                itemTitle: "консультація офтальмолога",
                                itemText: [
                                    "Після обстеження лікар пояснить результати, покаже прогнозований ефект та підбере тип інтраокулярної лінзи під ваш спосіб життя (моно-/EDOF/трифокальна, торична при астигматизмі).",
                                    "Обговоримо показання й можливі обмеження, відповімо на запитання, надамо прозорий кошторис і календар підготовки. За потреби отримаєте перелік стандартних передопераційних аналізів та рекомендації.",
                                    "Разом визначимо дату RLE і персональний план відновлення.",
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "textsColumns",
                    data: {
                        paddingTop: true,
                        title: "Інноваційне відновлення зору: рефракційна заміна кришталика (RLE)",
                        text: "Рефракційна заміна кришталика (RLE, рефракційна ленсектомія) — хірургічний метод корекції зору, за якого природний кришталик ока замінюють на інтраокулярну лінзу (ІОЛ). RLE усуває міопію, гіперметропію, пресбіопію та астигматизм, є оптимальною альтернативою, коли лазерна корекція протипоказана (тонка рогівка, рубці, нестабільна рефракція) і дозволяє отримати стабільний чіткий зір без окулярів і контактних лінз.",
                        blocks: [
                            {
                                title: "Чому варто обрати BiVision RLE у нас",
                                text: [
                                    {
                                        type: "text",
                                        text: "У нашій клініці рефракційна заміна кришталика — це поєднання технології та досвіду. Після детальної діагностики ми підбираємо ІОЛ під реальні візуальні потреби пацієнта: читання, робота за комп’ютером, спорт чи нічне водіння. Замість ультразвуку під час вилучення кришталика застосовується керований водний потік (BiVision iQ 5 Minutes), що зменшує вплив на рогівку та прискорює відновлення. Працюємо лише з оригінальними лінзами Rayner — від мультифокальних до торичних — і дбаємо про довготривалий комфорт зору, а наші хірурги мають понад десять років практики у провідних європейських центрах.",
                                    },
                                ],
                            },
                            {
                                title: "Підготовка та відновлення",
                                text: [
                                    {
                                        type: "text",
                                        text: "Підготовка зводиться до простої організації: візьміть із собою попередні медичні висновки, перелік ліків і дотримуйтеся рекомендацій щодо контактних лінз, якщо їх носите. У день операції бажано мати супровід, щоб комфортно дістатися додому. Після втручання ви користуєтеся краплями за схемою, уникаєте басейну та сауни протягом двох‑трьох тижнів і тимчасово обмежуєте інтенсивні навантаження. Повернення до керування авто узгоджується з хірургом на контрольному візиті.",
                                    },
                                ],
                            },
                            {
                                title: "Які інтраокулярні лінзи (ІОЛ) ми застосовуємо",
                                text: [
                                    {
                                        type: "text",
                                        text: "Ми працюємо з лінійкою Rayner, Alcon обираючи конфігурацію під конкретні очі та спосіб життя. Для максимальної незалежності від окулярів пропонуємо трифокальні рішення; коли потрібно одночасно усунути астигматизм — використовуємо торичні моделі; якщо пріоритетом є природний візуальний комфорт і широка глибина різкості, доречні ІОЛ з розширеною глибиною фокусу. Остаточний вибір базується на біометрії, рогівковому астигматизмі та ваших щоденних задачах.",
                                    },
                                ],
                            },
                            {
                                title: "Вартість та що входить у ціну",
                                text: [
                                    {
                                        type: "text",
                                        text: "Вартість RLE у Києві залежить насамперед від вибраного типу інтраокулярної лінзи та індивідуальних клінічних особливостей. На консультації ви отримаєте персональний кошторис із роз’ясненням кожного етапу: від діагностики та самої операції й післяопераційного супроводу. За потреби менеджер підкаже актуальні програми лояльності та можливість оформлення розстрочки.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціна на рефракційну ленсектомію в Києві",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "refrakczijna-lensektomiya"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "refrakczijna-lensektomiya"
                            )?.localeText.uk,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про рефракційну заміну кришталика ока (ленсектомію)",
                        content: [
                            {
                                question:
                                    "Що таке рефракційна хірургія ока і чим є рефракційна заміна кришталика ока (RLE)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Рефракційна хірургія ока — це напрям офтальмології, який виправляє зір хірургічними методами. Рефракційна заміна кришталика ока (RLE) — мікроінвазивна операція на заміну кришталика, коли природний кришталик замінюють на інтраокулярну лінзу. Така заміна очного кришталика дозволяє коригувати пресбіопію, міопію, гіперметропію та астигматизм і є альтернативою лазерним методам. Перед втручанням обов’язкові обстеження й консультація лікаря.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Кому підходить заміна кришталика з рефракційною метою: при гіперметропії, міопії чи пресбіопії?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Рефракційна заміна кришталика при гіперметропії і рефракційна заміна кришталика при міопії актуальні, коли лазерні методи обмежені (тонка/нерівна рогівка, високі діоптрії). RLE ефективна при пресбіопії (вікова далекозорість), дозволяє позбутися «перескакування» між різними окулярами. Рішення приймається індивідуально після повного огляду у приватній клініці та детальної консультації.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки коштує замінити кришталик ока? Яка ціна RLE у Києві?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Питання «скільки коштує замінити кришталик ока» залежить від типу ІОЛ (монофокальна, трифокальна, EDOF, торична), супутніх процедур і клінічної ситуації. Типові запити: «ленсектомія ціна», «кришталик заміна ціна», «рефракційна заміна кришталика ціна», «заміна кришталика ціна Київ» або «заміна кришталика Київ ціна». Остаточна вартість формується після обстеження і консультації; часто діють акції, знижки чи програми лояльності. Уточнити ціни можна під час прийому або за телефоном реєстратури.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чим RLE відрізняється від лазерної корекції та коли це «найкращий» варіант?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазер моделює рогівку, а RLE працює з кришталиком — тому рефракційна хірургія та офтальмологія розглядає RLE як «оперативне лікування далекозорості» і комбінованих вад зору у зрілому віці або при високих діоптріях. Для когось «найкращі» результати дає лазер, а для інших — імплантація кришталика. Ми пояснюємо переваги/недоліки, можливі побічні ефекти та протипоказання на очній консультації.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи підходить RLE як лікування далекозорості та короткозорості? Яка ціна таких операцій?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так. Для лікування далекозорості (у т.ч. лікування пресбіопії) та короткозорості RLE може бути оптимальним, коли лазер не рекомендований. Типові запити: «далекозорість операція ціна», «лікування далекозорості лазером ціна» (порівняння з RLE), «скільки коштує операція на короткозорість», «операція короткозорість ціна», «корекція короткозорості ціна». Точну вартість підтверджуємо після діагностики; іноді доступні знижки чи акція.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Де краще зробити операцію із заміни кришталика? На що звернути увагу за відгуками та рекомендаціями?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Обирайте клініку з досвідом у рефракційній хірургії ока, сучасною діагностикою, прозорими цінами й реальною статистикою результатів. Читайте відгуки, незалежні коментарі і рекомендації, дивіться приклади клінічних випадків. На консультації запитайте про підбір ІОЛ під ваш стиль життя, алгоритм післяопераційного супроводу та обмеження. Якщо потрібна термінова допомога, з’ясуйте, як працює чергування лікаря та післяопераційний зв’язок.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Які ризики, протипоказання та побічні ефекти має заміна кришталиків в очах?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Як і будь-яке хірургічне втручання, заміна кришталиків в очах має протипоказання (активні запальні процеси, декомпенсований ВОТ тощо) та можливі побічні ефекти (тимчасова сухість, бліки/ореоли, чутливість до світла). Більшість явищ — короткочасні та коригуються рекомендаціями. При хворобі кришталика ока або супутніх станах схему лікування кришталика ока ми індивідуально адаптуємо. Рішення про операцію на заміну кришталика ухвалюємо лише після повного огляду.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Як відбувається маршрут пацієнта: від першого прийому до відновлення? Чи можна «безкоштовно» отримати консультацію?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Спершу ви записуєтеся на консультацію та обстеження (біометрія, топографія, огляд сітківки). Потім лікар пропонує варіант ІОЛ, обговорює вартість і строки. У день операції виконується імплантація кришталика; більшість пацієнтів швидко повертаються до звичного режиму з контрольними візитами за графіком. Стосовно «безкоштовно»: інколи діє акція (знижений прийом або пакет), але стандартно первинна консультація є платною. Якщо сумніваєтесь, чи варто реєструватися саме зараз і куди піти, отримайте рекомендацію адміністратора — вам запропонують зручний кабінет і час візиту.",
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
                "BiVision RLE (refractive lensectomy) is an effective method of correcting presbyopia (age-related farsightedness).",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Refractive lens replacement (lensectomy)",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "BiVision RLE — a modern alternative to laser vision correction",
                        image: "/images/facilities3.jpg",
                        text: [
                            "BiVision RLE is a modern microinvasive procedure in which the eye’s natural lens is replaced with an intraocular lens (IOL) to restore clear vision at near, intermediate, and far distances. It is suitable when laser correction is contraindicated or its expected results are insufficient (thin/irregular cornea, high diopters, combined visual defects).",
                            "Recommended for: people 45+ with presbyopia, patients with high myopia/hyperopia, astigmatism, early lens changes, or cataract risk.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Why choose BiVision RLE: key advantages",
                        text: "Refractive surgery in ophthalmology is suitable for both farsightedness and nearsightedness, including astigmatism.",
                        slider: [
                            {
                                title: "Comprehensive automated diagnostics",
                                text: "Allows determining visual acuity using special charts with numbers, letters, or symbols.",
                            },
                            {
                                title: "IPL therapy",
                                text: "Measures intraocular pressure. Elevated pressure is the main cause of glaucoma.",
                            },
                            {
                                title: "Eyelid massage using special techniques",
                                text: "Measures intraocular pressure. Elevated pressure is the main cause of glaucoma.",
                            },
                            {
                                title: "Diagnosis and treatment of related diseases",
                                text: "Measures intraocular pressure. Elevated pressure is the main cause of glaucoma.",
                            },
                            {
                                title: "Long-term vision without glasses",
                                text: "With BiVision technology, it’s possible to restore both near and distance vision, completely eliminating dependence on glasses even with age-related farsightedness.",
                            },
                            {
                                title: "Alternative to laser correction",
                                text: "This technique is ideal for patients who are not suitable for laser intervention but need correction of myopia, hyperopia, or astigmatism.",
                            },
                            {
                                title: "Premium Rayner lenses",
                                text: "The clinic uses only original high-class English intraocular lenses — no compromises in quality or safety.",
                            },
                            {
                                title: "Cataract prevention",
                                text: "During the operation, the natural lens is removed, preventing cataract formation in the future. Additional capsule polishing enhances clarity and brightness of vision after the procedure.",
                            },
                            {
                                title: "Gentle lens extraction technology",
                                text: "The proprietary iQ 5 Minutes technique is used — without ultrasound, only a directed water flow. This minimizes corneal impact and ensures fast recovery.",
                            },
                            {
                                title: "High professionalism of surgeons",
                                text: "Clinic surgeons trained in top European centers and have at least ten years of experience in eye microsurgery.",
                            },
                            {
                                title: "Access to advanced medical innovations",
                                text: "Clinic specialists participate in clinical testing of innovative equipment even before it enters the market, allowing them to use the most advanced vision treatment technologies.",
                            },
                        ],
                        btn: {
                            btnName: "book an appointment",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        firstImageLeft: true,
                        data: [
                            {
                                title: "Main indications and symptoms when refractive lens exchange (RLE) should be considered",
                                image: "/images/equipment4.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "RLE is considered when age-related farsightedness is combined with other refractive disorders — for example, when different glasses are needed for computer work and for reading, and by evening the eyes quickly tire and focus 'jumps'. Patients often complain of foggy or less contrast vision in the morning, glare while driving at night, and a feeling that glasses no longer provide the desired clarity. If an ophthalmologist previously declined laser correction due to corneal parameters, RLE becomes a logical alternative, as the method works with the lens and does not affect the cornea. In early stages of lens opacity, the procedure also eliminates the future risk of cataract, and for people whose professions require sharp vision, it provides greater stability and contrast.",
                                            },
                                        ],
                                        greenText:
                                            "A ‘two-in-one’ solution. We restore vision and simultaneously eliminate the risk of future cataracts. Minimal incision, fast recovery, maximum comfort.",
                                    },
                                ],
                            },
                            {
                                title: "Why patients choose RLE",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "The decision in favor of RLE is usually based on a combination of clinical and lifestyle factors:",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "1. Medical indications",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Laser corneal correction is impossible or not advisable.",
                                                    "A wider correction range is needed (high diopters, combination of myopia/hyperopia with astigmatism).",
                                                    "There is a risk or early signs of cataract — lens replacement solves the issue in advance.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "2. Expectations regarding vision quality",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Desire to see clearly without glasses at near, intermediate, and far distances (multifocal/trifocal IOLs).",
                                                    "Need for stable clarity throughout the day: working with texts, screens, driving, sports.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "3. Safety and predictability",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "RLE does not affect the cornea — important for thin or problematic corneas.",
                                                    "Cataract prevention: after removing the natural lens, cataracts no longer develop.",
                                                    "Personalized selection of IOLs according to lifestyle (reading, computer use, night driving).",
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <LansectomyGreenSection /> },
                {
                    type: "numberListSection",
                    data: {
                        listTitle: "Stages",
                        list: [
                            {
                                itemTitle:
                                    "Appointment and preparation for diagnostics",
                                itemText: [
                                    "You can schedule an appointment by phone or online — it only takes a few minutes.",
                                    "No special preparation is required. If you wear soft contact lenses, remove them the night before (preferably 12 hours before your visit). Bring your current glasses/prescription and results of previous examinations — we’ll assess the dynamics.",
                                    "We recommend planning your visit without driving right after the appointment: pupil dilation may temporarily blur your near vision.",
                                ],
                            },
                            {
                                itemTitle: "Comprehensive eye diagnostics",
                                itemText: [
                                    "Duration — approximately 2–2.5 hours.",
                                    "We perform a full set of measurements required for refractive lens exchange (RLE): autorefractometry and visual acuity testing, biometry and IOL power calculation, corneal topography/tomography, intraocular pressure measurement, and if needed — OCT of the macula and optic nerve, tear film evaluation.",
                                    "To ensure accuracy, dilating eye drops are used — near vision may be temporarily blurred for several hours after the exam.",
                                ],
                            },
                            {
                                itemTitle: "Ophthalmologist consultation",
                                itemText: [
                                    "After the examination, the doctor will explain the results, show the expected outcome, and recommend the type of intraocular lens best suited to your lifestyle (mono-/EDOF/trifocal, toric for astigmatism).",
                                    "We’ll discuss indications and possible limitations, answer your questions, provide a transparent cost estimate and preparation timeline. If needed, you’ll receive a list of standard preoperative tests and recommendations.",
                                    "Together, we’ll set the RLE date and create a personalized recovery plan.",
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "textsColumns",
                    data: {
                        paddingTop: true,
                        title: "Innovative vision restoration: Refractive Lens Exchange (RLE)",
                        text: "Refractive Lens Exchange (RLE, refractive lensectomy) is a surgical method of vision correction in which the eye’s natural lens is replaced with an intraocular lens (IOL). RLE corrects myopia, hyperopia, presbyopia, and astigmatism. It is an ideal alternative when laser correction is contraindicated (thin cornea, scars, unstable refraction) and provides stable, clear vision without glasses or contact lenses.",
                        blocks: [
                            {
                                title: "Why choose BiVision RLE with us",
                                text: [
                                    {
                                        type: "text",
                                        text: "In our clinic, refractive lens exchange combines technology and experience. After a detailed diagnostic evaluation, we select the IOL based on your actual visual needs — reading, computer work, sports, or night driving. Instead of ultrasound during lens removal, we use a controlled water flow system (BiVision iQ 5 Minutes), which minimizes corneal impact and speeds up recovery. We work exclusively with original Rayner lenses — from multifocal to toric models — ensuring long-term visual comfort. Our surgeons have over ten years of experience in leading European centers.",
                                    },
                                ],
                            },
                            {
                                title: "Preparation and recovery",
                                text: [
                                    {
                                        type: "text",
                                        text: "Preparation is simple: bring previous medical reports, a list of your medications, and follow contact lens recommendations if you wear them. On the day of surgery, it’s advisable to have someone accompany you for a safe trip home. After the procedure, you’ll use prescribed eye drops, avoid swimming pools and saunas for two to three weeks, and temporarily limit intense physical activity. The return to driving is discussed with your surgeon during the follow-up visit.",
                                    },
                                ],
                            },
                            {
                                title: "Intraocular lenses (IOLs) we use",
                                text: [
                                    {
                                        type: "text",
                                        text: "We work with Rayner and Alcon lens lines, selecting the configuration based on each eye and lifestyle. For maximum independence from glasses, we offer trifocal solutions; when astigmatism correction is also needed — toric models are used; if natural visual comfort and extended depth of focus are priorities, we recommend EDOF IOLs. The final choice is based on biometry, corneal astigmatism, and your daily visual needs.",
                                    },
                                ],
                            },
                            {
                                title: "Cost and what’s included",
                                text: [
                                    {
                                        type: "text",
                                        text: "The cost of RLE in Kyiv primarily depends on the chosen intraocular lens type and individual clinical specifics. During your consultation, you’ll receive a personalized cost breakdown explaining each step — from diagnostics and the procedure itself to postoperative care. If needed, our manager will inform you about current loyalty programs and installment options.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Price for refractive lensectomy in Kyiv",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "refrakczijna-lensektomiya"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "refrakczijna-lensektomiya"
                            )?.localeText.en,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about refractive lens exchange (RLE)",
                        content: [
                            {
                                question:
                                    "What is refractive eye surgery and what is refractive lens exchange (RLE)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Refractive eye surgery is a branch of ophthalmology that corrects vision through surgical methods. Refractive lens exchange (RLE) is a microinvasive lens replacement procedure in which the natural lens is replaced with an intraocular lens (IOL). This replacement helps correct presbyopia, myopia, hypermetropia, and astigmatism and serves as an alternative to laser procedures. A full examination and doctor’s consultation are required before surgery.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Who is RLE suitable for — patients with hyperopia, myopia, or presbyopia?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "RLE for hyperopia or myopia is relevant when laser correction is limited (thin or irregular cornea, high diopters). RLE is also effective for presbyopia (age-related farsightedness) and helps eliminate the need for switching between different pairs of glasses. The decision is made individually after a comprehensive eye examination and consultation.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does lens replacement cost? What is the price of RLE in Kyiv?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost of lens replacement depends on the type of IOL (monofocal, trifocal, EDOF, toric), additional procedures, and clinical factors. Typical search queries include: 'lens replacement price', 'RLE cost Kyiv', 'lens exchange Kyiv price'. The final cost is determined after examination and consultation; clinics often offer discounts or loyalty programs. You can check current prices during your visit or by calling the reception.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How is RLE different from laser vision correction, and when is it the ‘best’ option?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Laser correction reshapes the cornea, while RLE replaces the lens. Therefore, in refractive surgery, RLE is considered an ‘operative treatment’ for hyperopia and combined refractive errors in mature patients or those with high diopters. For some, laser correction provides the best results; for others, lens implantation does. During consultation, we explain the pros and cons, possible side effects, and contraindications.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is RLE suitable for treating farsightedness and nearsightedness? What is the price?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes. RLE can be an optimal solution for treating farsightedness (including presbyopia) and nearsightedness when laser correction is not recommended. Typical search queries include: 'farsightedness surgery price', 'laser vision correction cost', 'myopia surgery price', 'RLE cost'. The exact price is confirmed after diagnosis; promotions and discounts may be available.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Where is the best place to have lens replacement surgery? What should you pay attention to in reviews and recommendations?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Choose a clinic with experience in refractive eye surgery, modern diagnostics, transparent pricing, and proven results. Read reviews and independent comments, and look at real clinical cases. During consultation, ask about lens selection for your lifestyle, postoperative care, and activity restrictions. Also check how emergency care and after-surgery communication are organized.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What are the risks, contraindications, and side effects of lens replacement surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "As with any surgery, lens replacement has contraindications (such as active inflammation, uncontrolled intraocular pressure) and possible side effects (temporary dryness, glare/halos, light sensitivity). Most of these effects are short-term and managed with proper care. In case of other eye conditions, treatment is adjusted individually. Surgery is recommended only after a full ophthalmic examination.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What is the patient journey from the first visit to recovery? Is a free consultation available?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "First, you schedule a consultation and examination (biometry, topography, retinal check). Then, the doctor recommends a suitable IOL, discusses costs and timing. On the day of surgery, lens implantation is performed, and most patients return to normal activities quickly, with scheduled follow-up visits. Regarding 'free consultations': sometimes promotional offers are available, but generally, the initial visit is paid. If you’re unsure where to go, our administrator will recommend a convenient time and doctor.",
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
                "BiVision RLE (рефракционная ленсектомия) – эффективный метод коррекции пресбиопии (возрастная дальнозоркость).",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Рефракционная замена хрусталика глаза (ленсектомия)",
                    },
                },
                {
                    type: "preview",
                    data: {
                        title: "BiVision RLE — современная альтернатива лазерной коррекции зрения",
                        image: "/images/facilities3.jpg",
                        text: [
                            "BiVision RLE — это современная микроинвазивная операция, при которой естественный хрусталик глаза заменяется на интраокулярную линзу (ИОЛ) для восстановления чёткого зрения вблизи, на среднем расстоянии и вдаль. Подходит, когда лазерная коррекция противопоказана или ожидаемый результат лазера недостаточен (тонкая/неровная роговица, большие диоптрии, комбинированные нарушения зрения).",
                            "Кому подходит: людям 45+ с пресбиопией, пациентам с высокой миопией/гиперметропией, астигматизмом, начальными изменениями хрусталика или риском катаракты.",
                        ],
                    },
                },
                {
                    type: "greenSliderSection",
                    data: {
                        title: "Почему стоит выбрать метод BiVision RLE: ключевые преимущества",
                        text: "Рефракционная хирургия в офтальмологии подходит как при дальнозоркости, так и при близорукости, включая астигматизм.",
                        slider: [
                            {
                                title: "Комплексная автоматизированная диагностика",
                                text: "Позволяет определить остроту зрения с помощью специальных таблиц с цифрами, буквами или символами.",
                            },
                            {
                                title: "IPL-терапия",
                                text: "Измерение внутриглазного давления. Повышенное давление является основной причиной глаукомы.",
                            },
                            {
                                title: "Массаж век с применением специальных методик",
                                text: "Измерение внутриглазного давления. Повышенное давление является основной причиной глаукомы.",
                            },
                            {
                                title: "Диагностика и лечение сопутствующих заболеваний",
                                text: "Измерение внутриглазного давления. Повышенное давление является основной причиной глаукомы.",
                            },
                            {
                                title: "Долговременное зрение без очков",
                                text: "С помощью технологии BiVision можно восстановить зрение как вблизи, так и вдаль, полностью избавившись от очковой зависимости даже при возрастной дальнозоркости.",
                            },
                            {
                                title: "Альтернатива лазерной коррекции",
                                text: "Методика идеально подходит пациентам, которым противопоказано лазерное вмешательство, но требуется коррекция миопии, гиперметропии или астигматизма.",
                            },
                            {
                                title: "Премиальные линзы от Rayner",
                                text: "В клинике используются исключительно оригинальные английские интраокулярные линзы высокого класса — никаких компромиссов в качестве и безопасности.",
                            },
                            {
                                title: "Профилактика развития катаракты",
                                text: "Во время операции удаляется естественный хрусталик, что исключает развитие катаракты в будущем. Дополнительная полировка капсулы улучшает чёткость и яркость зрения после процедуры.",
                            },
                            {
                                title: "Щадящая технология удаления хрусталика",
                                text: "Применяется авторская методика iQ 5 Minutes без ультразвука — только направленный водный поток. Это минимизирует воздействие на роговицу и обеспечивает быструю реабилитацию.",
                            },
                            {
                                title: "Высокий профессионализм хирургов",
                                text: "Офтальмохирурги клиники обучались в ведущих европейских центрах и имеют не менее десяти лет опыта в микрохирургии глаза.",
                            },
                            {
                                title: "Доступ к передовым медицинским разработкам",
                                text: "Специалисты клиники участвуют в клинических испытаниях инновационного оборудования ещё до его выхода на рынок, что позволяет применять самые современные технологии лечения зрения.",
                            },
                        ],
                        btn: {
                            btnName: "записаться на приём",
                            btnLink: "#booking",
                        },
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        firstImageLeft: true,
                        data: [
                            {
                                title: "Основные показания и симптомы, когда стоит рассмотреть рефракционную замену хрусталика (RLE)",
                                image: "/images/equipment4.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "RLE рассматривают тогда, когда возрастная дальнозоркость сочетается с другими нарушениями рефракции — например, когда нужны разные очки для работы за компьютером и для чтения, а к вечеру глаза быстро устают и фокус «прыгает». Часто пациенты жалуются на туманное или менее контрастное изображение утром, блики при ночном вождении и ощущение, что очки уже не дают желаемой чёткости. Если офтальмолог ранее отказал в лазерной коррекции из-за параметров роговицы, RLE становится логичной альтернативой, ведь метод работает с хрусталиком и не изменяет роговицу. На ранних этапах помутнения хрусталика процедура также устраняет риск катаракты в будущем, а людям с профессиональными требованиями к зрению обеспечивает большую стабильность и контрастность изображения.",
                                            },
                                        ],
                                        greenText:
                                            "Решение «два в одном». Мы обновляем зрение и одновременно устраняем риск катаракты в будущем. Минимальный разрез, быстрое восстановление, максимум комфорта.",
                                    },
                                ],
                            },
                            {
                                title: "Почему пациенты выбирают RLE",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Выбор в пользу RLE обычно обусловлен сочетанием клинических и жизненных факторов:",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "1. Медицинские показания",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Лазерную коррекцию роговицы нельзя или нецелесообразно проводить.",
                                                    "Необходим более широкий диапазон коррекции (высокие диоптрии, сочетание миопии/гиперметропии с астигматизмом).",
                                                    "Есть риск или ранние проявления катаракты — замена хрусталика решает проблему заранее.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "2. Ожидания от качества зрения",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Желание видеть без очков вблизи, на среднем расстоянии и вдаль (мультифокальные/трифокальные ИОЛ).",
                                                    "Необходимость стабильной чёткости в течение дня: работа с текстами, экранами, вождение, спорт.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "3. Безопасность и предсказуемость",
                                                    },
                                                ],
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "RLE не влияет на роговицу — важно при тонкой или проблемной роговице.",
                                                    "Профилактика катаракты: после удаления собственного хрусталика она больше не развивается.",
                                                    "Персонализированный подбор ИОЛ под образ жизни (чтение, работа за компьютером, ночное вождение).",
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "individual", data: <LansectomyGreenSection /> },
                {
                    type: "numberListSection",
                    data: {
                        listTitle: "Этапы",
                        list: [
                            {
                                itemTitle:
                                    "Запись на приём и подготовка к диагностике",
                                itemText: [
                                    "Записаться можно по телефону или онлайн — это займёт всего несколько минут.",
                                    "Специальная подготовка не требуется. Если вы носите мягкие контактные линзы — снимите их с вечера (желательно за 12 часов до визита). Возьмите с собой текущие очки/рецепт и результаты предыдущих обследований — мы оценим динамику.",
                                    "Рекомендуем планировать визит без вождения сразу после приёма: во время осмотра возможно расширение зрачков и временное ухудшение зрения вблизи.",
                                ],
                            },
                            {
                                itemTitle: "Компьютерная диагностика зрения",
                                itemText: [
                                    "Продолжительность — примерно 2–2,5 часа.",
                                    "Проводим полный комплекс измерений, необходимых для рефракционной замены хрусталика (RLE): авторефрактометрия и проверка остроты зрения, биометрия и расчёт силы ИОЛ, кератотопография/томография роговицы, измерение внутриглазного давления, при необходимости — ОКТ макулы и зрительного нерва, оценка слёзной плёнки.",
                                    "Для точности применяются капли для расширения зрачков — в течение нескольких часов после осмотра зрение вблизи может быть размытым.",
                                ],
                            },
                            {
                                itemTitle: "Консультация офтальмолога",
                                itemText: [
                                    "После обследования врач объяснит результаты, покажет прогнозируемый эффект и подберёт тип интраокулярной линзы под ваш образ жизни (моно-/EDOF/трифокальная, торическая при астигматизме).",
                                    "Обсудим показания и возможные ограничения, ответим на вопросы, предоставим прозрачную смету и календарь подготовки. При необходимости получите список стандартных предоперационных анализов и рекомендации.",
                                    "Вместе определим дату RLE и персональный план восстановления.",
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "textsColumns",
                    data: {
                        paddingTop: true,
                        title: "Инновационное восстановление зрения: рефракционная замена хрусталика (RLE)",
                        text: "Рефракционная замена хрусталика (RLE, рефракционная ленсэктомия) — хирургический метод коррекции зрения, при котором естественный хрусталик глаза заменяется интраокулярной линзой (ИОЛ). RLE устраняет миопию, гиперметропию, пресбиопию и астигматизм, является оптимальной альтернативой, когда лазерная коррекция противопоказана (тонкая роговица, рубцы, нестабильная рефракция) и позволяет получить стабильное, чёткое зрение без очков и контактных линз.",
                        blocks: [
                            {
                                title: "Почему стоит выбрать BiVision RLE у нас",
                                text: [
                                    {
                                        type: "text",
                                        text: "В нашей клинике рефракционная замена хрусталика — это сочетание технологий и опыта. После детальной диагностики мы подбираем ИОЛ под реальные зрительные потребности пациента: чтение, работа за компьютером, спорт или ночное вождение. Вместо ультразвука при удалении хрусталика используется контролируемый водный поток (BiVision iQ 5 Minutes), что снижает воздействие на роговицу и ускоряет восстановление. Мы работаем только с оригинальными линзами Rayner — от мультифокальных до торических — и заботимся о долгосрочном зрительном комфорте. Наши хирурги имеют более десяти лет практики в ведущих европейских центрах.",
                                    },
                                ],
                            },
                            {
                                title: "Подготовка и восстановление",
                                text: [
                                    {
                                        type: "text",
                                        text: "Подготовка сводится к простой организации: возьмите с собой предыдущие медицинские заключения, список принимаемых лекарств и следуйте рекомендациям по ношению контактных линз, если вы их используете. В день операции желательно иметь сопровождение, чтобы комфортно добраться домой. После вмешательства вы используете капли по схеме, избегаете бассейна и сауны в течение двух-трёх недель и временно ограничиваете интенсивные нагрузки. Возобновление вождения согласовывается с хирургом на контрольном визите.",
                                    },
                                ],
                            },
                            {
                                title: "Какие интраокулярные линзы (ИОЛ) мы используем",
                                text: [
                                    {
                                        type: "text",
                                        text: "Мы работаем с линейкой Rayner, Alcon, подбирая конфигурацию под конкретные глаза и образ жизни. Для максимальной независимости от очков предлагаем трифокальные решения; когда необходимо одновременно устранить астигматизм — используем торические модели; если приоритетом является естественный зрительный комфорт и большая глубина резкости, подойдут ИОЛ с расширенной глубиной фокуса. Окончательный выбор основывается на биометрии, роговичном астигматизме и ваших повседневных задачах.",
                                    },
                                ],
                            },
                            {
                                title: "Стоимость и что входит в цену",
                                text: [
                                    {
                                        type: "text",
                                        text: "Стоимость RLE в Киеве зависит прежде всего от выбранного типа интраокулярной линзы и индивидуальных клинических особенностей. На консультации вы получите персональную смету с пояснением каждого этапа: от диагностики и самой операции до послеоперационного сопровождения. При необходимости менеджер подскажет актуальные программы лояльности и возможность оформления рассрочки.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цена на рефракционную ленсектомию в Киеве",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "refrakczijna-lensektomiya"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "refrakczijna-lensektomiya"
                            )?.localeText.ru,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о рефракционной замене хрусталика (ленсэктомии)",
                        content: [
                            {
                                question:
                                    "Что такое рефракционная хирургия глаза и что представляет собой рефракционная замена хрусталика (RLE)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Рефракционная хирургия глаза — это направление офтальмологии, которое корректирует зрение хирургическими методами. Рефракционная замена хрусталика (RLE) — микроинвазивная операция, при которой естественный хрусталик заменяется на интраокулярную линзу (ИОЛ). Такая операция корректирует пресбиопию, миопию, гиперметропию и астигматизм и служит альтернативой лазерным методам. Перед вмешательством обязательны обследование и консультация врача.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Кому подходит рефракционная замена хрусталика — при гиперметропии, миопии или пресбиопии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "RLE при гиперметропии и миопии актуальна, когда лазерная коррекция ограничена (тонкая или неровная роговица, высокие диоптрии). RLE также эффективна при пресбиопии (возрастная дальнозоркость) и помогает избавиться от необходимости менять разные очки. Решение принимается индивидуально после полного обследования и консультации врача.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит замена хрусталика? Какая цена RLE в Киеве?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость замены хрусталика зависит от типа ИОЛ (монофокальная, трифокальная, EDOF, торическая), сопутствующих процедур и клинических особенностей. Часто ищут: «ленсэктомия цена», «замена хрусталика Киев цена», «рефракционная замена хрусталика стоимость». Окончательная стоимость определяется после обследования и консультации; часто действуют акции и программы лояльности. Уточнить цены можно на приёме или по телефону клиники.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чем RLE отличается от лазерной коррекции и когда это «лучший» вариант?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазер моделирует роговицу, а RLE работает с хрусталиком. Поэтому RLE рассматривается как «оперативное лечение дальнозоркости» и комбинированных нарушений зрения у пациентов зрелого возраста или с высокими диоптриями. Для одних лучший результат даёт лазер, для других — имплантация линзы. На консультации врач объяснит преимущества, возможные побочные эффекты и противопоказания.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Подходит ли RLE для лечения дальнозоркости и близорукости? Какая цена таких операций?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да. Для лечения дальнозоркости (в том числе пресбиопии) и близорукости RLE может быть оптимальным вариантом, когда лазерная коррекция не рекомендована. Часто ищут: «дальнозоркость операция цена», «лазерная коррекция зрения стоимость», «операция близорукость цена». Точная стоимость подтверждается после диагностики; иногда доступны акции и скидки.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Где лучше сделать операцию по замене хрусталика? На что обратить внимание в отзывах?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Выбирайте клинику с опытом в рефракционной хирургии, современным оборудованием, прозрачными ценами и подтверждёнными результатами. Изучайте отзывы и реальные клинические случаи. На консультации уточните подбор ИОЛ под ваш образ жизни, особенности послеоперационного наблюдения и ограничения. Также узнайте, как работает экстренная помощь и связь с врачом после операции.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Каковы риски, противопоказания и побочные эффекты замены хрусталика?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Как и любое хирургическое вмешательство, замена хрусталика имеет противопоказания (воспалительные процессы, неконтролируемое внутриглазное давление) и возможные побочные эффекты (временная сухость, блики, светочувствительность). Большинство из них кратковременны и корректируются рекомендациями. При сопутствующих заболеваниях схема лечения подбирается индивидуально. Решение о проведении операции принимается только после полного обследования.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как проходит путь пациента — от первой консультации до восстановления? Можно ли получить бесплатный приём?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Сначала вы записываетесь на консультацию и обследование (биометрия, топография, осмотр сетчатки). Затем врач подбирает подходящую ИОЛ, обсуждает стоимость и сроки. В день операции проводится имплантация хрусталика; большинство пациентов быстро возвращаются к привычному ритму жизни с контрольными визитами по графику. Что касается «бесплатно»: иногда действуют акции, но стандартно первичная консультация оплачивается. Если сомневаетесь, куда обратиться, администратор поможет выбрать удобное время и врача.",
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
                        text: "Лазерне лікування захворювань очей у Києві — безболісні амбулаторні процедури для збереження зору: лазерна коагуляція сітківки, YAG-дисцизія задньої капсули та лазерне лікування глаукоми.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Лазерне лікування захворювань сучасні лазерні процедури для очей",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Лазерне лікування захворювань очей у нашій приватній клініці в Києві проходить комфортно, швидко і без болю. Сітківка, судинна оболонка та капсулярна мембрана кришталика не мають больових закінчень, тому пацієнт відчуває хіба що короткі світлові спалахи або легке засліплення. Перед втручанням ми розширюємо зіницю спеціальними краплями, що забезпечує точний доступ до зони впливу. Для YAG-лазера зазвичай відсутні будь-які відчуття, а реабілітація мінімальна: вже в день процедури більшість пацієнтів повертаються до звичного режиму. Лазерна терапія — це мінімальна інвазивність, прогнозований результат, відсутність розрізів і швидке відновлення зору без госпіталізації.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Хто у групі ризику і коли варто звернутися?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Початкові зміни часто непомітні, тому профілактичне обстеження — найкраще рішення, якщо ви у групі ризику. До неї належать пацієнти з вираженою короткозорістю (міопією), цукровим діабетом понад 5 років, підвищеним артеріальним тиском, віковими змінами, а також ті, хто має сімейну історію глаукоми чи відшарування сітківки. Лазерне лікування показує найвищу ефективність саме на ранніх стадіях, коли ми можемо запобігти прогресуванню патології. Запишіться на консультацію лікаря-офтальмолога для детального огляду, персонального плану лікування та уточнення, чи варто виконувати лазерне втручання саме у вашому випадку.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Лазерна коагуляція сітківки: зміцнення й профілактика ускладнень",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Лазерна коагуляція сітківки — “точкове зварювання”, яке зміцнює ослаблені ділянки і нормалізує кровопостачання, зменшуючи ризик розривів та відшарування. Метод рекомендований при діабетичній ретинопатії, тромбозі вен сітківки, периферичних дистрофіях, проривних розривах. Процедура триває лічені хвилини, виконується амбулаторно і не потребує госпіталізації; після неї варто тимчасово обмежити фізичні навантаження. Популярні запити: «лазерна коагуляція сітківки Київ», «лазеркоагуляція сітківки ока ціна», «скільки коштує зміцнення сітківки ока лазером». Остаточна вартість залежить від площі ураження та кількості коагуляційних точок і визначається після огляду та обстеження.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "YAG-лазерна дисцизія задньої капсули: швидке рішення “вторинної катаракти”",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "У 10–15% пацієнтів після успішної операції з видалення катаракти виникає помутніння задньої капсули, що дає ефект “туману” та знижує якість зору. YAG-лазерна дисцизія — безболісна амбулаторна процедура, яка триває кілька хвилин і не потребує аналізів або наркозу. Зір прояснюється практично відразу, а побутова активність відновлюється того ж дня. Часто запитують: «видалення катаракти лазером ціна», «катаракта лазерна операція ціна», «скільки коштує YAG-дисцизія». Ми пропонуємо прозоре ціноутворення, доступні пакети, акції та знижки — дізнайтеся вартість на консультації.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Лазерне лікування глаукоми та лазерна стимуляція: контроль тиску й підтримка функцій",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Глаукома — хронічне захворювання, за якого важливо стабілізувати внутрішньоочний тиск і зберегти зоровий нерв. Якщо краплі недостатньо ефективні, лазерний вплив на дренажну систему (наприклад, селективна лазерна трабекулопластика) допомагає досягти контрольованого тиску без розрізів та тривалої реабілітації. Поширені запити: «лазерне лікування глаукоми ціна», «операція лазером при глаукомі», «глаукома лазерна операція — чи є протипоказання». Додатково ми застосовуємо лазерну стимуляцію (лазерстимуляцію) для покращення мікроциркуляції, метаболізму сітківки та зорового нерва — її іноді поєднують з медикаментозною терапією для посилення ефекту.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті питання про лазерне лікування очей",
                        content: [
                            {
                                question:
                                    "Скільки коштує лазерне лікування очей і від чого залежить вартість?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вартість (ціна) залежить від типу процедури (лазерна коагуляція сітківки, YAG-дисцизія, лазерне лікування глаукоми), обсягу втручання та клінічної ситуації. Точну ціну визначає лікар після обстеження й консультації. Запитайте на рецепції про акції та знижки.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Лазерна коагуляція сітківки: як проходить процедура і чи боляче?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Процедура амбулаторна й безболісна; можливі короткі світлові спалахи. Після лазеркоагуляції рекомендовано кілька днів обмежити навантаження, але до роботи, пов’язаної з напругою очей, зазвичай можна повернутися того ж дня.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Лазерне лікування глаукоми — це назавжди? Чи потрібні краплі після операції?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазер допомагає знизити внутрішньоочний тиск і стабілізувати стан, але глаукома хронічна. Навіть після успішної процедури частині пацієнтів потрібні краплі та регулярні огляди для контролю тиску.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Які протипоказання і можливі побічні ефекти лазерних процедур?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Протипоказання індивідуальні (активне запалення, виражені помутніння середовищ, декомпенсовані системні стани). Побічні ефекти трапляються рідко й переважно минущі (короткочасний дискомфорт, засліплення, тимчасове затуманення). Усе обговорюємо на прийомі.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "«Вторинна катаракта»: чи допоможе YAG-лазерна дисцизія і скільки це триває?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так, саме YAG-дисцизія усуває помутніння задньої капсули. Процедура триває кілька хвилин, без розрізів і болю, з поліпшенням зору майже відразу. Запитайте про вартість на консультації.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи варто робити лазерну коагуляцію профілактично при міопії?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "За наявності периферичних дистрофій або тонких ділянок сітківки — так, це зменшує ризик розривів і відшарування. Рішення приймається після детального огляду очного дна.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Як підготуватися до лазерної процедури і що з відгуками?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Спеціальної підготовки зазвичай не потрібно; ми розширюємо зіницю краплями на місці. Після обстеження надамо індивідуальні рекомендації. Відгуки пацієнтів та рекомендації лікарів доступні на ресепшені і під час консультації.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Де роблять такі процедури у Києві і як зареєструватися на прийом?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "У нашій приватній клініці в Києві виконується повний спектр лазерних втручань: лазерна коагуляція сітківки, лікування глаукоми лазером, YAG-дисцизія. Запишіться на консультацію лікаря-офтальмолога онлайн або телефоном, ми підкажемо оптимальну тактику й розрахуємо вартість.",
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
                "The ability to clearly visualize pathological changes allows the doctor to perform the procedure with extreme precision.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "laser treatment of eye diseases",
                        text: "Laser eye disease treatment in Kyiv — painless outpatient procedures to preserve vision: retinal laser coagulation, YAG posterior capsule discission, and laser glaucoma treatment.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Laser treatment of eye diseases: modern laser procedures",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Laser eye disease treatment at our private clinic in Kyiv is comfortable, quick, and painless. The retina, choroid, and lens capsule have no pain receptors, so the patient feels only brief flashes of light or mild glare. Before the procedure, we dilate the pupil with special drops to ensure precise access to the treatment area. With YAG-laser procedures, patients usually feel no discomfort, and recovery is minimal — most return to normal activities the same day. Laser therapy means minimal invasiveness, predictable results, no incisions, and fast vision recovery without hospitalization.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Who is at risk and when should you see a doctor?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Early changes are often asymptomatic, so preventive examination is the best decision if you’re in a risk group. It includes patients with high myopia, diabetes for over 5 years, hypertension, age-related changes, and those with a family history of glaucoma or retinal detachment. Laser treatment is most effective at early stages when we can prevent disease progression. Schedule an appointment with an ophthalmologist for a detailed examination, personalized treatment plan, and to clarify whether laser intervention is necessary in your case.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Retinal laser coagulation: strengthening and preventing complications",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Retinal laser coagulation is a “spot welding” technique that strengthens weakened areas and normalizes blood flow, reducing the risk of tears and detachment. It’s recommended for diabetic retinopathy, retinal vein thrombosis, peripheral dystrophies, and ruptures. The procedure takes only a few minutes, is performed on an outpatient basis, and doesn’t require hospitalization; after it, physical activity should be temporarily limited. Popular queries: “retinal laser coagulation Kyiv”, “retinal laser surgery price”, “how much does retinal laser strengthening cost”. The final cost depends on the affected area and the number of coagulation points, determined after examination and diagnosis.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "YAG-laser posterior capsule dissection: a quick solution for 'secondary cataract'",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "In 10–15% of patients after successful cataract surgery, posterior capsule clouding may occur, causing a 'fog effect' and reducing vision quality. YAG-laser capsulotomy is a painless outpatient procedure lasting just a few minutes, requiring no tests or anesthesia. Vision clears almost immediately, and daily activity can resume the same day. Common queries: 'laser cataract removal cost', 'laser cataract surgery price', 'YAG-capsulotomy cost'. We offer transparent pricing, affordable packages, promotions, and discounts — learn more during your consultation.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Laser glaucoma treatment and laser stimulation: pressure control and functional support",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Glaucoma is a chronic condition where it’s crucial to stabilize intraocular pressure and preserve the optic nerve. If drops are insufficient, laser treatment of the drainage system (such as selective laser trabeculoplasty) helps achieve controlled pressure without incisions or long recovery. Popular queries: 'laser glaucoma treatment price', 'laser surgery for glaucoma', 'glaucoma laser surgery contraindications'. Additionally, we use laser stimulation to improve microcirculation, retinal metabolism, and optic nerve function — sometimes combined with drug therapy for enhanced effect.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about laser eye treatment",
                        content: [
                            {
                                question:
                                    "How much does laser eye treatment cost and what affects the price?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost depends on the type of procedure (retinal laser coagulation, YAG capsulotomy, laser glaucoma treatment), the scope of intervention, and the clinical situation. The exact price is determined by the doctor after examination and consultation. Ask at the reception about promotions and discounts.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Retinal laser coagulation: how does the procedure work and is it painful?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The procedure is outpatient and painless; brief light flashes are possible. After laser coagulation, a few days of reduced activity are recommended, but you can usually return to work involving visual tasks the same day.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is laser glaucoma treatment permanent? Will I still need eye drops afterward?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The laser helps lower intraocular pressure and stabilize the condition, but glaucoma is chronic. Even after a successful procedure, some patients still need eye drops and regular check-ups to monitor pressure.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What are the contraindications and possible side effects of laser procedures?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Contraindications are individual (active inflammation, significant media opacities, decompensated systemic conditions). Side effects are rare and mostly temporary (short-term discomfort, glare, or mild blurriness). Everything is discussed during the consultation.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "‘Secondary cataract’: will YAG-laser capsulotomy help and how long does it take?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, YAG capsulotomy removes the clouding of the posterior capsule. The procedure takes only a few minutes, requires no incisions or anesthesia, and vision improves almost immediately. Ask about the cost during the consultation.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is it worth doing preventive laser coagulation for myopia?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "If there are peripheral dystrophies or thin retinal areas — yes, it helps reduce the risk of tears and detachment. The decision is made after a detailed fundus examination.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How to prepare for a laser procedure and what do reviews say?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Usually, no special preparation is required; we dilate the pupil with drops before the procedure. After the examination, we’ll provide individual recommendations. Patient reviews and doctor recommendations are available at the reception and during the consultation.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Where are such procedures performed in Kyiv and how can I make an appointment?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Our private clinic in Kyiv performs the full range of laser procedures: retinal laser coagulation, glaucoma laser treatment, and YAG capsulotomy. Schedule an ophthalmologist consultation online or by phone — we’ll advise the best approach and calculate the cost.",
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
                "Возможность четко визуализировать патологические изменения позволяет врачу выполнять процедуру предельно точно.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "лазерное лечение заболеваний глаза",
                        text: "Лазерное лечение заболеваний глаз в Киеве — безболезненные амбулаторные процедуры для сохранения зрения: лазерная коагуляция сетчатки, YAG-дисцизия задней капсулы и лазерное лечение глаукомы.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Лазерное лечение заболеваний глаз: современные лазерные процедуры",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Лазерное лечение глазных заболеваний в нашей частной клинике в Киеве проходит комфортно, быстро и без боли. Сетчатка, сосудистая оболочка и капсулярная мембрана хрусталика не имеют болевых окончаний, поэтому пациент ощущает лишь короткие световые вспышки или лёгкое ослепление. Перед процедурой мы расширяем зрачок специальными каплями для точного доступа к зоне воздействия. При YAG-лазере ощущения обычно отсутствуют, а восстановление минимальное — уже в день процедуры большинство пациентов возвращаются к обычному ритму. Лазерная терапия — это минимальная инвазивность, предсказуемый результат, отсутствие разрезов и быстрое восстановление зрения без госпитализации.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Кто в группе риска и когда стоит обратиться к врачу?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Начальные изменения часто протекают бессимптомно, поэтому профилактическое обследование — лучшее решение, если вы в группе риска. В неё входят пациенты с выраженной близорукостью, диабетом более 5 лет, повышенным артериальным давлением, возрастными изменениями, а также те, у кого есть семейная история глаукомы или отслоения сетчатки. Лазерное лечение наиболее эффективно на ранних стадиях, когда можно предотвратить прогрессирование болезни. Запишитесь на консультацию офтальмолога для детального осмотра, персонального плана лечения и уточнения необходимости лазерного вмешательства именно в вашем случае.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Лазерная коагуляция сетчатки: укрепление и профилактика осложнений",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Лазерная коагуляция сетчатки — это «точечная сварка», укрепляющая ослабленные участки и нормализующая кровоснабжение, снижая риск разрывов и отслоений. Метод рекомендован при диабетической ретинопатии, тромбозе вен сетчатки, периферических дистрофиях и прорывных разрывах. Процедура длится всего несколько минут, выполняется амбулаторно и не требует госпитализации; после неё рекомендуется временно ограничить физические нагрузки. Популярные запросы: «лазерная коагуляция сетчатки Киев», «лазерная операция на сетчатке цена», «укрепление сетчатки лазером стоимость». Окончательная стоимость зависит от площади поражения и количества коагуляционных точек и определяется после осмотра и обследования.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "YAG-лазерная дисцизия задней капсулы: быстрое решение «вторичной катаракты»",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "У 10–15% пациентов после успешного удаления катаракты может возникнуть помутнение задней капсулы, создающее эффект «тумана» и снижающее качество зрения. YAG-лазерная дисцизия — безболезненная амбулаторная процедура, которая длится несколько минут и не требует анализов или наркоза. Зрение проясняется практически сразу, а привычная активность восстанавливается в тот же день. Часто спрашивают: «удаление катаракты лазером цена», «лазерная операция при катаракте стоимость», «YAG-дисцизия цена». Мы предлагаем прозрачное ценообразование, доступные пакеты, акции и скидки — узнайте стоимость на консультации.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Лазерное лечение глаукомы и лазерная стимуляция: контроль давления и поддержка функций",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Глаукома — хроническое заболевание, при котором важно стабилизировать внутриглазное давление и сохранить зрительный нерв. Если капли недостаточно эффективны, лазерное воздействие на дренажную систему (например, селективная лазерная трабекулопластика) помогает достичь контролируемого давления без разрезов и длительной реабилитации. Популярные запросы: «лазерное лечение глаукомы цена», «лазерная операция при глаукоме», «глаукома лазерная операция противопоказания». Дополнительно мы применяем лазерную стимуляцию для улучшения микроциркуляции, обмена веществ в сетчатке и функции зрительного нерва — её иногда сочетают с медикаментозной терапией для усиления эффекта.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы о лазерном лечении глаз",
                        content: [
                            {
                                question:
                                    "Сколько стоит лазерное лечение глаз и от чего зависит цена?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость зависит от типа процедуры (лазерная коагуляция сетчатки, YAG-дисцизия, лазерное лечение глаукомы), объёма вмешательства и клинической ситуации. Точную цену определяет врач после обследования и консультации. Уточните на ресепшене информацию об акциях и скидках.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Лазерная коагуляция сетчатки: как проходит процедура и больно ли это?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Процедура амбулаторная и безболезненная; возможны короткие световые вспышки. После лазеркоагуляции рекомендуется несколько дней ограничить физические нагрузки, но к работе, связанной с нагрузкой на глаза, обычно можно вернуться в тот же день.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Лазерное лечение глаукомы — это навсегда? Нужны ли капли после операции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазер помогает снизить внутриглазное давление и стабилизировать состояние, но глаукома — хроническое заболевание. Даже после успешной процедуры некоторым пациентам требуются капли и регулярные осмотры для контроля давления.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие противопоказания и возможные побочные эффекты лазерных процедур?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Противопоказания индивидуальны (активное воспаление, выраженные помутнения сред, декомпенсированные системные состояния). Побочные эффекты встречаются редко и в основном временные (кратковременный дискомфорт, ослепление, временное затуманивание). Всё обсуждается на приёме.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "«Вторичная катаракта»: поможет ли YAG-лазерная дисцизия и сколько это длится?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, именно YAG-дисцизия устраняет помутнение задней капсулы. Процедура длится несколько минут, проходит без разрезов и боли, а зрение улучшается практически сразу. Уточните стоимость на консультации.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Стоит ли делать лазерную коагуляцию профилактически при миопии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "При наличии периферических дистрофий или истончённых участков сетчатки — да, это снижает риск разрывов и отслоений. Решение принимается после детального осмотра глазного дна.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как подготовиться к лазерной процедуре и что говорят отзывы?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Обычно специальная подготовка не требуется; мы расширяем зрачок каплями на месте. После обследования дадим индивидуальные рекомендации. Отзывы пациентов и рекомендации врачей доступны на ресепшене и во время консультации.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Где делают такие процедуры в Киеве и как записаться на приём?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "В нашей частной клинике в Киеве проводится полный спектр лазерных вмешательств: лазерная коагуляция сетчатки, лечение глаукомы лазером, YAG-дисцизия. Запишитесь на консультацию офтальмолога онлайн или по телефону — мы подберём оптимальную тактику и рассчитаем стоимость.",
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
                        text: "Оновлений зір без болю: інтравітреальні ін’єкції (анти-VEGF) з препаратом Айлія для лікування макулодистрофії та набряку макули.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Сучасний підхід до лікування макули та сітківки",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Інтравітреальні ін’єкції (очні ін’єкції, «укол у око») — це точне введення препарату у склоподібне тіло для лікування захворювань макули та сітківки. Метод дозволяє доставити ліки безпосередньо в осередок проблеми, коли потрібна анти-VEGF терапія (anti-VEGF). Так лікують Макулодистрофію ока / Макулодистрофію сітківки (вікову або міопічну), діабетичний макулярний набряк, наслідки тромбозу вен сітківки та інші стани. Процедура проводиться у стерильному кабінеті, під місцевою анестезією, швидко та з мінімальним дискомфортом. Після консультації лікаря і повного обстеження пацієнт отримує індивідуальний план лікування, рекомендації та запис на прийом.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Айлія (Eylea, афліберцепт): коли «укол в око» допомагає зберегти зір",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Айлія — один із найчастіше призначуваних анти-VEGF препаратів. Саме «укол Айлія» спрямовано блокує фактор росту судин (VEGF), що викликає набряк та появу патологічних судин у макулі. Завдяки цьому зменшується набряк, стабілізується або покращується зір. Часті запити пацієнтів — «айлия уколи ціна», «айлія ціна в Україні», «укол у око Айлія відгуки» — логічні: люди хочуть знати, скільки коштує лікування, які є переваги, чи варто починати терапію одразу. Наші офтальмологи підбирають схему ін’єкцій індивідуально: інтервали, кількість процедур, контрольні огляди та додаткові обстеження для максимально прогнозованого результату.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Показання: макула, діабет, міопія та інші стани сітківки",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Найпоширеніші показання до «уколи в очі для покращення зору»:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Вікова макулодистрофія очей (AMD): «макула дистрофія сітківки очі лікування» потребує регулярної терапії.",
                                                    "Діабетичний макулярний набряк: очні ін’єкції зменшують набряк та ризик втрати зору.",
                                                    "Тромбоз вен сітківки: анти-VEGF покращує центральний зір.",
                                                    "Міопічна неоваскуляризація: при високій короткозорості (міопія) ін’єкції зменшують активність патологічних судин.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Також застосовують інші «уколи для сітківки ока» (ранібізумаб тощо), але вибір препарату залежить від діагнозу, віку, супутніх хвороб і даних огляду.",
                                            },
                                            {
                                                type: "text",
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Важливо:",
                                                    },
                                                    {
                                                        value: " «міопія це» не тільки «мінус» у діоптріях — інколи при міопії виникають зміни сітківки, що потребують саме інтравітреального лікування. Тому консультація, ретельне обстеження та огляд макули — перший крок до правильної тактики.",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "Як відбувається процедура: безпека, прийом і реабілітація",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Перед уколом проводимо обстеження (ОКТ, візометрія, вимір внутрішньоочного тиску), пояснюємо переваги, недоліки та можливі побічні ефекти. «Укол у сітківку ока» робиться під місцевою анестезією краплями, зазвичай безболісно; пацієнт відчуває лише легкий тиск. Процедура триває кілька хвилин, після чого ви повертаєтеся додому з рекомендаціями та краплями. В день ін’єкції бажано обмежити навантаження, не терти очі, прийти на контроль. За потреби призначається наступний прийом і дати наступних ін’єкцій. Для безпеки ми дотримуємося міжнародних протоколів, пояснюємо протипоказання, попереджаємо про рідкісні ризики (запалення, підвищення тиску, легкий дискомфорт) та надаємо контакти для термінової допомоги.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Вартість: «укол в око ціна», «анти-VEGF терапія ціна», акції та знижки",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Скільки коштує укол в око? Кінцева вартість залежить від препарату (наприклад, Айлія), діагностики, складності випадку та кількості ін’єкцій у курсі. На сторінці послуги ви знайдете актуальні ціни («айлія уколи ціна», «інтравітреальні ін’єкції ціна», «anti-VEGF ціна»), а також інформацію про можливі акції, знижка на курс, пакет «обстеження + ін’єкція» чи безкоштовно/пільгово для окремих програм — деталі уточнюйте на реєстратурі. Щоб не зволікати з лікуванням, запишіться на консультацію лікаря-офтальмолога: ми проведемо огляд, відповімо на відгуки/коментарі та підкажемо, чи варто починати терапію негайно.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті питання про інтравітреальні ін’єкції",
                        content: [
                            {
                                question:
                                    "Що таке макулодистрофія ока і чому потрібні очні ін’єкції?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Макулодистрофія сітківки — це ураження центральної зони сітківки (макули), що погіршує читання та дрібні деталі. Ін’єкції анти-VEGF гальмують ріст патологічних судин і зменшують набряк, допомагаючи зберегти або покращити зір.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Айлія чи інший препарат: що обрати і чи варто починати зараз?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вибір між Айлія (афліберцепт) та іншими засобами робить лікар після обстеження. Ранній старт лікування підвищує шанси на стабілізацію зору. Під час консультації пояснюємо переваги й можливі недоліки кожної опції.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки коштує ін’єкція: «укол в око ціна», «анти-VEGF ціна», «айлія ціна в Україні»?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вартість залежить від препарату, діагностики та плану лікування (разова ін’єкція чи курс). Точні ціни, акції та знижки уточнюйте під час запису на прийом — адміністратор надасть детальний розрахунок.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи боляче робити «укол у очі» та які побічні ефекти?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Процедура проводиться під анестезуючими краплями, зазвичай майже безболісна. Можливі короткочасний дискомфорт, почервоніння, «піщинка» в оці. Серйозні ускладнення рідкісні; ми мінімізуємо ризики й попереджаємо про протипоказання.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки ін’єкцій потрібно і як часто приходити на огляд?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Схему визначає офтальмолог: зазвичай перші місяці — ін’єкції частіше, далі — підтримувальні введення за результатами огляду/ОКТ. Регулярні обстеження важливі для контролю ефекту.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "«Уколи від глаукоми»: чи застосовують інтравітреальні ін’єкції при глаукомі?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Інтравітреальні ін’єкції не є стандартним лікуванням глаукоми. Для глаукоми існують інші схеми (краплі, лазер, хірургія). Проте при поєднанні глаукоми з набряком макули лікар може призначити анти-VEGF для сітківки — за показаннями.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Міопія: це що і чи лікується ін’єкціями?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Міопія — короткозорість. Як правило, її коригують окулярами, лінзами або лазерною корекцією. Ін’єкції показані не при кожній міопії, а при ускладненнях (наприклад, міопічна неоваскуляризація). Остаточне рішення — після огляду.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Як підготуватися та куди піти: консультація, обстеження, реєстрація?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Спеціальної підготовки зазвичай не потрібно. Запишіться на консультацію, пройдіть обстеження, отримайте план лікування та рекомендації щодо дати ін’єкції. За потреби надамо термінову допомогу, підкажемо про акції/знижки та варіанти оплати в приватній клініці.",
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
                "Keratoconus treatment with the BritishX method - first results in 12 minutes.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "intravitreal injections",
                        text: "Restored vision without pain: intravitreal injections (anti-VEGF) with Eylea for the treatment of macular degeneration and macular edema.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Modern approach to treating the macula and retina",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Intravitreal injections (eye injections, “eye shot”) are precise administrations of medication into the vitreous body to treat macular and retinal diseases. This method delivers the drug directly to the affected area when anti-VEGF therapy is required. It is used to treat macular degeneration (age-related or myopic), diabetic macular edema, retinal vein occlusion, and other conditions. The procedure is performed in a sterile environment under local anesthesia, quickly, and with minimal discomfort. After a full examination and consultation, the doctor provides an individual treatment plan, recommendations, and appointment scheduling.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Eylea (Aflibercept): when an “eye shot” helps preserve vision",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Eylea is one of the most frequently prescribed anti-VEGF medications. The “Eylea injection” directly blocks the vascular endothelial growth factor (VEGF) that causes swelling and abnormal vessel formation in the macula. As a result, swelling decreases, and vision stabilizes or improves. Common patient queries like “Eylea injection cost,” “Eylea price in Ukraine,” or “Eylea injection reviews” are understandable — people want to know the cost, benefits, and when to start treatment. Our ophthalmologists create a personalized injection plan: intervals, number of sessions, follow-up visits, and additional tests to ensure predictable results.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Indications: macula, diabetes, myopia, and other retinal conditions",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "The most common indications for 'eye injections to improve vision' include:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Age-related macular degeneration (AMD): requires regular therapy.",
                                                    "Diabetic macular edema: injections reduce swelling and the risk of vision loss.",
                                                    "Retinal vein occlusion: anti-VEGF improves central vision.",
                                                    "Myopic neovascularization: in high myopia, injections reduce the activity of abnormal vessels.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Other 'retinal injections' (such as ranibizumab) are also used, but the choice of medication depends on diagnosis, age, comorbidities, and examination results.",
                                            },
                                            {
                                                type: "text",
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Important:",
                                                    },
                                                    {
                                                        value: " ‘Myopia’ is not just a negative diopter value — sometimes retinal changes due to myopia require intravitreal treatment. Therefore, consultation, careful examination, and macula check-up are the first steps toward the right therapy.",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "How the procedure works: safety, visit, and recovery",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Before the injection, we perform diagnostics (OCT, visual acuity, intraocular pressure measurement), explain benefits, risks, and possible side effects. The 'retinal injection' is performed under local anesthesia with drops and is usually painless — patients may only feel mild pressure. The procedure takes a few minutes, after which you go home with recommendations and eye drops. On the same day, avoid rubbing your eyes or heavy activity and attend a follow-up visit if scheduled. For safety, we follow international protocols, explain contraindications, warn about rare risks (inflammation, pressure increase, mild discomfort), and provide emergency contact information.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Cost: 'eye injection price', 'anti-VEGF therapy cost', promotions, and discounts",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "How much does an eye injection cost? The final price depends on the drug (e.g., Eylea), diagnostics, case complexity, and the number of injections in the treatment course. On the service page, you’ll find current prices ('Eylea injection cost', 'intravitreal injections price', 'anti-VEGF price') as well as information about promotions, course discounts, or combined packages ('exam + injection') and possible free or discounted programs — check details at reception. To start treatment without delay, book a consultation with an ophthalmologist: we will examine your eyes, answer your questions, and advise whether to begin therapy immediately.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about intravitreal injections",
                        content: [
                            {
                                question:
                                    "What is macular degeneration and why are eye injections needed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Macular degeneration is damage to the central part of the retina (macula), which impairs reading and fine detail vision. Anti-VEGF injections slow the growth of abnormal blood vessels and reduce swelling, helping to preserve or improve vision.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Eylea or another drug: which to choose and is it worth starting now?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The choice between Eylea (aflibercept) and other drugs is made by the doctor after examination. Starting treatment early increases the chances of stabilizing vision. During the consultation, we explain the benefits and possible drawbacks of each option.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does the injection cost: 'eye injection price', 'anti-VEGF price', 'Eylea price in Ukraine'?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost depends on the drug, diagnostics, and treatment plan (single injection or course). Exact prices, promotions, and discounts can be clarified when booking an appointment — the administrator will provide a detailed estimate.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is an 'injection into the eye' painful and what are the side effects?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The procedure is performed under anesthetic drops and is usually almost painless. Temporary discomfort, redness, or a 'gritty' sensation in the eye may occur. Serious complications are rare; we minimize risks and warn about contraindications.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How many injections are needed and how often should I come for check-ups?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The ophthalmologist determines the schedule: usually, injections are more frequent in the first months, followed by maintenance injections depending on examination/OCT results. Regular check-ups are important to monitor progress.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "‘Injections for glaucoma’: are intravitreal injections used for glaucoma?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Intravitreal injections are not a standard treatment for glaucoma. Other approaches exist (eye drops, laser, surgery). However, if glaucoma is combined with macular edema, the doctor may prescribe anti-VEGF for the retina — when indicated.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Myopia: what is it and is it treated with injections?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Myopia is nearsightedness. It is usually corrected with glasses, lenses, or laser correction. Injections are indicated only for complications (e.g., myopic neovascularization). The final decision is made after an eye examination.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How to prepare and where to go: consultation, examination, registration?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Usually, no special preparation is needed. Schedule a consultation, undergo an examination, and receive a treatment plan with recommendations for the injection date. If needed, we provide urgent care, inform about promotions/discounts, and offer payment options at our private clinic.",
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
                "Лечение кератоконуса методом BritishX – первый результат за 12 минут.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "интравитреальные инъекции",
                        text: "Обновлённое зрение без боли: интравитреальные инъекции (анти-VEGF) с препаратом Айлия для лечения макулодистрофии и отёка макулы.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Современный подход к лечению макулы и сетчатки",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Интравитреальные инъекции (глазные инъекции, «укол в глаз») — это точное введение препарата в стекловидное тело для лечения заболеваний макулы и сетчатки. Метод позволяет доставить лекарство прямо в очаг проблемы, когда необходима анти-VEGF терапия. Так лечат макулодистрофию (возрастную или миопическую), диабетический макулярный отёк, тромбоз вен сетчатки и другие состояния. Процедура проводится в стерильных условиях, под местной анестезией, быстро и с минимальным дискомфортом. После обследования и консультации врач составляет индивидуальный план лечения, рекомендации и запись на приём.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Айлия (Eylea, афлиберцепт): когда «укол в глаз» помогает сохранить зрение",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Айлия — один из наиболее часто назначаемых анти-VEGF препаратов. «Укол Айлия» напрямую блокирует фактор роста сосудов (VEGF), вызывающий отёк и патологический рост сосудов в макуле. Это уменьшает отёк и стабилизирует или улучшает зрение. Частые запросы пациентов — «айлия укол цена», «айлия цена в Украине», «укол в глаз Айлия отзывы» — понятны: люди хотят знать стоимость, преимущества и когда стоит начинать терапию. Наши офтальмологи подбирают схему инъекций индивидуально: интервалы, количество процедур, контрольные осмотры и дополнительные обследования для максимально прогнозируемого результата.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Показания: макула, диабет, миопия и другие состояния сетчатки",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Наиболее распространённые показания для «уколов в глаза для улучшения зрения»:",
                                            },
                                            {
                                                type: "list",
                                                gap: true,
                                                list: [
                                                    "Возрастная макулодистрофия (AMD): требует регулярной терапии.",
                                                    "Диабетический макулярный отёк: инъекции уменьшают отёк и риск потери зрения.",
                                                    "Тромбоз вен сетчатки: анти-VEGF улучшает центральное зрение.",
                                                    "Миопическая неоваскуляризация: при высокой близорукости инъекции снижают активность патологических сосудов.",
                                                ],
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Также применяются другие «уколы для сетчатки» (ранибизумаб и др.), но выбор препарата зависит от диагноза, возраста, сопутствующих заболеваний и данных обследования.",
                                            },
                                            {
                                                type: "text",
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Важно:",
                                                    },
                                                    {
                                                        value: " «Миопия» — это не только «минус» в диоптриях: при близорукости могут возникать изменения сетчатки, требующие именно интравитреального лечения. Поэтому консультация, тщательное обследование и осмотр макулы — первый шаг к правильной тактике лечения.",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "Как проходит процедура: безопасность, приём и реабилитация",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Перед уколом проводится обследование (ОКТ, визометрия, измерение внутриглазного давления), объясняются преимущества, возможные риски и побочные эффекты. «Укол в сетчатку глаза» делается под местной анестезией каплями, обычно без боли; пациент ощущает лишь лёгкое давление. Процедура занимает несколько минут, после чего вы идёте домой с рекомендациями и каплями. В день инъекции желательно ограничить нагрузки, не тереть глаза и прийти на контроль. Для безопасности мы соблюдаем международные протоколы, объясняем противопоказания, предупреждаем о редких рисках (воспаление, повышение давления, лёгкий дискомфорт) и предоставляем контакты для экстренной связи.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Стоимость: «укол в глаз цена», «анти-VEGF терапия цена», акции и скидки",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Сколько стоит укол в глаз? Итоговая стоимость зависит от препарата (например, Айлия), диагностики, сложности случая и количества инъекций в курсе. На странице услуги вы найдёте актуальные цены («айлия укол цена», «интравитреальные инъекции цена», «anti-VEGF цена»), а также информацию о возможных акциях, скидках, пакетах «обследование + инъекция» и льготных программах — уточняйте детали на ресепшене. Чтобы не откладывать лечение, запишитесь на консультацию офтальмолога: мы проведём осмотр, ответим на вопросы и подскажем, стоит ли начинать терапию сразу.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы об интравитреальных инъекциях",
                        content: [
                            {
                                question:
                                    "Что такое макулодистрофия и зачем нужны инъекции в глаз?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Макулодистрофия сетчатки — это поражение центральной зоны сетчатки (макулы), которое ухудшает чтение и восприятие мелких деталей. Инъекции анти-VEGF замедляют рост патологических сосудов и уменьшают отёк, помогая сохранить или улучшить зрение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Айлия или другой препарат: что выбрать и стоит ли начинать сейчас?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Выбор между Айлия (афлиберцепт) и другими препаратами делает врач после обследования. Раннее начало лечения повышает шансы на стабилизацию зрения. На консультации мы объясняем преимущества и возможные недостатки каждого варианта.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит инъекция: «укол в глаз цена», «анти-VEGF цена», «Айлия цена в Украине»?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость зависит от препарата, диагностики и плана лечения (однократная инъекция или курс). Точные цены, акции и скидки уточняйте при записи на приём — администратор предоставит подробный расчёт.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Больно ли делать «укол в глаз» и какие побочные эффекты?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Процедура проводится под анестезирующими каплями и обычно почти безболезненна. Возможен кратковременный дискомфорт, покраснение, ощущение «песчинки» в глазу. Серьёзные осложнения редки; мы минимизируем риски и предупреждаем о противопоказаниях.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько инъекций нужно и как часто приходить на осмотр?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Схему определяет офтальмолог: обычно в первые месяцы инъекции проводятся чаще, затем — поддерживающие введения по результатам осмотров/ОКТ. Регулярные обследования важны для контроля эффективности.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "«Уколы от глаукомы»: применяются ли интравитреальные инъекции при глаукоме?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Интравитреальные инъекции не являются стандартным лечением глаукомы. Для неё существуют другие методы (капли, лазер, хирургия). Однако при сочетании глаукомы с отёком макулы врач может назначить анти-VEGF для сетчатки — по показаниям.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Миопия: что это и лечится ли инъекциями?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Миопия — близорукость. Обычно её корректируют очками, линзами или лазерной коррекцией. Инъекции показаны не при каждой миопии, а при осложнениях (например, миопическая неоваскуляризация). Окончательное решение — после осмотра.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как подготовиться и куда обратиться: консультация, обследование, запись?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Обычно специальная подготовка не требуется. Запишитесь на консультацию, пройдите обследование, получите план лечения и рекомендации по дате инъекции. При необходимости предоставим срочную помощь, расскажем об акциях/скидках и вариантах оплаты в частной клинике.",
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
                        text: "Сучасні малоінвазивні та класичні методи для стабілізації тиску й збереження зору.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Хірургічне лікування глаукоми: мета, показання та результат",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Хірургічне лікування глаукоми спрямоване на формування альтернативного шляху відтоку внутрішньоочної рідини, стабільне зниження внутрішньоочного тиску (ВОТ) і збереження зорових функцій. Якщо медикаментозна терапія, краплі та лазерні процедури не дають ефекту, операція глаукоми стає найкращим рішенням. У нашій приватній клініці в Києві проводиться діагностика та лікування глаукоми за міжнародними протоколами: обстеження, консультація лікаря-офтальмолога, індивідуальний підбір методу, післяопераційний огляд.",
                                            },
                                            {
                                                type: "text",
                                                text: "Після втручання частині пацієнтів вдається повністю відмовитися від регулярних крапель або суттєво зменшити їх кількість. Хірургічні методи лікування глаукоми ефективні при відкритокутовій, закритокутовій, первинній та вторинній формі, а також у складних випадках, коли глаукома очей прогресує.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Непроникна глибока склеректомія (НГСЕ): щадний підхід при відкритокутовій глаукомі",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "НГСЕ — це щадна операція при глаукомі, за якої внутрішні структури ока залишаються герметичними, а відтік рідини відбувається через спеціально сформований тонкий канал. Метод забезпечує плавне зниження ВОТ без різких перепадів, мінімізує побічні ефекти та прискорює відновлення.",
                                            },
                                            {
                                                type: "text",
                                                text: "Втручання виконується амбулаторно; зазвичай повернення до звичного режиму можливе протягом 1–2 діб. Непроникна глибока склеректомія може поєднуватися з видаленням катаракти — це зручно пацієнтам із одночасною катарактою, дозволяє скоротити терміни лікування та покращити зір. Якщо вас цікавить хірургічне лікування глаукоми — ціна, вартість обстеження та «скільки коштує» варіант із комбінованою операцією, детально обговорюємо все на консультації.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Проникна трабекулектомія: перевірений стандарт контролю тиску",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Трабекулектомія — класична проникна операція при глаукомі, під час якої створюють новий дренажний шлях і видаляють фрагмент трабекулярної мережі для кращого відтоку внутрішньоочної рідини. Метод показаний, коли глаукома прогресує, а консервативні підходи не забезпечують стабільного результату. Переваги: виражений і тривалий контроль ВОТ, можливість повторного втручання за потреби. Недоліки: довший реабілітаційний період, необхідність чітко дотримуватися післяопераційних рекомендацій. У нашому центрі ретельно оцінюємо показання, протипоказання, ризики та очікування, щоб запропонувати лікування глаукоми (операція) з оптимальним прогнозом для вашого зору.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "Мікроінвазивна хірургія глаукоми (MIGS) та імплантовані дренажі",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Сучасні мікроінвазивні технології (MIGS) та мікродренажні імпланти дозволяють лікувати глаукому з мінімальною травматичністю. Такі рішення доцільні на ранніх і середніх стадіях, а також у пацієнтів, які прагнуть швидкого відновлення та зменшення залежності від крапель. Лікар підбирає тип дренажу чи методику з урахуванням анатомії кута передньої камери, товщини рогівки, статусу зорового нерва, поля зору, супутніх захворювань. Мікрохірургічне лікування глаукоми часто поєднуємо з факоемульсифікацією катаракти — це підвищує комфорт і скорочує кількість візитів. Запитайте під час прийому, чи варто розглядати саме MIGS у вашому випадку.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Ціна операції при глаукомі в Києві: що входить у вартість і як обрати клініку",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Операція глаукоми — ціна в Києві та Україні залежить від типу втручання (НГСЕ, трабекулектомія, MIGS), складності клінічної ситуації, необхідності комбінованих процедур (наприклад, видалення катаракти), анестезії та обсягу післяопераційного спостереження. У вартість зазвичай входять: консультація, повне обстеження, операційний набір і сертифіковані витратні матеріали, контрольні огляди. Ми прозоро пояснюємо, скільки коштує лікування глаукоми, надаємо детальний кошторис і рекомендації щодо підготовки. Оберіть найкращий для вас варіант: запис на консультацію лікаря, огляд, індивідуальна тактика «глаукома та її лікування», реєстрація на операцію — усе в одному кабінеті координації пацієнта.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на лікування глаукоми в Києві",
                        card: {
                            text: discountList.find(
                                disk =>
                                    disk.key ===
                                    "hirurgichne-likuvannya-glaukomi"
                            )?.text,
                            textLocal: discountList.find(
                                disk =>
                                    disk.key ===
                                    "hirurgichne-likuvannya-glaukomi"
                            )?.localeText.uk,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті питання про хірургічне лікування глаукоми",
                        content: [
                            {
                                question:
                                    "Коли показане хірургічне лікування глаукоми і чи варто чекати?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Оперативне лікування глаукоми рекомендоване, коли краплі, лазер чи комбінації не контролюють тиск або хвороба прогресує. Зволікати не варто: своєчасна операція допомагає зберегти залишковий зір.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки коштує операція на глаукому (ціна Київ, Україна)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вартість залежить від методу (НГСЕ, трабекулектомія, MIGS), складності, супутніх процедур. Точну ціну озвучуємо після обстеження та консультації. Ми надаємо прозорий кошторис «без прихованих платежів».",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чим відрізняються непроникна глибока склеректомія та трабекулектомія?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "НГСЕ — щадніша, із плавним зниженням ВОТ і швидшим відновленням; трабекулектомія — «золотий стандарт» із довготривалим контролем тиску, але з довшим періодом реабілітації.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи можна поєднати лікування глаукоми з видаленням катаракти?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так, часто це доцільно. Комбінована операція зменшує кількість анестезій і візитів, може покращити якість зору та стабільність тиску.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Які побічні ефекти та протипоказання можливі?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Як і будь-яка хірургія, втручання має ризики: запалення, коливання ВОТ, рубцювання фільтраційної подушки. Протипоказання індивідуальні; лікар обговорить їх на прийомі після огляду та аналізів.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки триває відновлення і коли можна повернутися до роботи?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Більшість пацієнтів після НГСЕ повертаються до легких справ за 1–2 дні; після трабекулектомії період відновлення довший. Обмеження фізичних навантажень і контрольні огляди обов’язкові.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи буде потрібне подальше лікування після операції?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Післяопераційні краплі та спостереження — стандарти догляду. Частина пацієнтів повністю відмовляється від гіпотензивних крапель, іншим достатньо меншої кількості препаратів.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Як обрати клініку та лікаря для операції при глаукомі?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Орієнтуйтеся на досвід хірурга, спектр методик (НГСЕ, трабекулектомія, MIGS), сучасне обладнання, відгуки пацієнтів, прозорість ціни. Запишіться на консультацію — лікар запропонує індивідуальну тактику.",
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
                "We treat all types of glaucoma using the most modern and effective surgical techniques.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "surgical treatment of glaucoma",
                        text: "Modern minimally invasive and classical methods for stabilizing eye pressure and preserving vision.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Surgical treatment of glaucoma: purpose, indications, and outcomes",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Surgical treatment of glaucoma aims to create an alternative pathway for aqueous humor drainage, achieve stable intraocular pressure (IOP) reduction, and preserve visual function. If medication, eye drops, or laser procedures are ineffective, glaucoma surgery becomes the best option. In our private clinic in Kyiv, we provide glaucoma diagnostics and treatment according to international protocols: examination, ophthalmologist consultation, personalized surgical method selection, and postoperative monitoring.",
                                            },
                                            {
                                                type: "text",
                                                text: "After surgery, some patients can completely stop using eye drops or significantly reduce their use. Surgical glaucoma treatment is effective for open-angle, closed-angle, primary, and secondary glaucoma, as well as in complex progressive cases.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Non-penetrating deep sclerectomy (NPDS): a gentle approach for open-angle glaucoma",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "NPDS is a gentle glaucoma surgery in which the inner eye structures remain sealed, and fluid drainage occurs through a specially formed thin channel. This technique ensures smooth IOP reduction without sharp fluctuations, minimizes side effects, and speeds up recovery.",
                                            },
                                            {
                                                type: "text",
                                                text: "The procedure is performed on an outpatient basis, and most patients can resume normal activities within 1–2 days. Non-penetrating deep sclerectomy can be combined with cataract removal — a convenient option for patients with coexisting cataracts that reduces treatment time and improves vision. If you are interested in glaucoma surgery — the price, diagnostic cost, or combined options — all details are discussed during consultation.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Penetrating trabeculectomy: a proven standard for pressure control",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Trabeculectomy is a classical penetrating glaucoma surgery that creates a new drainage pathway by removing part of the trabecular meshwork to improve aqueous outflow. It is indicated when glaucoma progresses and conservative treatment no longer provides stable results. Advantages: pronounced and long-lasting IOP control, with the option of repeated surgery if needed. Drawbacks: longer recovery and strict postoperative care. At our center, we carefully evaluate indications, contraindications, and expectations to offer the optimal glaucoma surgery plan for your vision.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "Microinvasive glaucoma surgery (MIGS) and implanted drains",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Modern microinvasive technologies (MIGS) and microdrainage implants allow glaucoma treatment with minimal trauma. These techniques are suitable for early and moderate stages, and for patients seeking quick recovery and reduced dependence on drops. The doctor selects the drainage type or technique based on anterior chamber angle anatomy, corneal thickness, optic nerve status, and visual field. Microglaucoma surgery is often combined with cataract phacoemulsification — improving comfort and reducing clinic visits. Ask your doctor whether MIGS is right for your case.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Glaucoma surgery cost in Kyiv: what’s included and how to choose a clinic",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "The cost of glaucoma surgery in Kyiv and Ukraine depends on the type of procedure (NPDS, trabeculectomy, MIGS), case complexity, need for combined operations (e.g. cataract removal), anesthesia, and postoperative care. The price usually includes consultation, complete diagnostics, surgical kit, certified materials, and follow-up visits. We provide transparent pricing, detailed estimates, and preparation guidance. Choose your best option: ophthalmologist consultation, eye examination, personalized 'glaucoma treatment' plan, and surgery registration — all in one patient coordination office.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for glaucoma treatment in Kyiv",
                        card: {
                            text: discountList.find(
                                disk =>
                                    disk.key ===
                                    "hirurgichne-likuvannya-glaukomi"
                            )?.text,
                            textLocal: discountList.find(
                                disk =>
                                    disk.key ===
                                    "hirurgichne-likuvannya-glaukomi"
                            )?.localeText.en,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about glaucoma surgery",
                        content: [
                            {
                                question:
                                    "When is glaucoma surgery indicated, and should I wait?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Surgical treatment is recommended when eye drops, laser, or combination therapy fail to control intraocular pressure or the disease continues to progress. Delaying treatment is not advisable — timely surgery helps preserve remaining vision.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does glaucoma surgery cost (price in Kyiv, Ukraine)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost depends on the technique (NPDS, trabeculectomy, MIGS), complexity, and additional procedures. The exact price is provided after examination and consultation. We offer a transparent cost estimate with no hidden fees.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What is the difference between non-penetrating deep sclerectomy and trabeculectomy?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "NPDS is less invasive, provides gradual IOP reduction, and faster recovery; trabeculectomy is the 'gold standard' with long-term pressure control but a longer rehabilitation period.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can glaucoma surgery be combined with cataract removal?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, it is often advisable. A combined procedure reduces the number of anesthesias and visits, and may improve vision quality and pressure stability.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What side effects and contraindications are possible?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "As with any surgery, there are risks: inflammation, fluctuations in IOP, scarring of the filtration bleb. Contraindications are individual — the doctor will discuss them after examination and tests.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How long is recovery, and when can I return to work?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Most patients after NPDS return to light activities within 1–2 days; recovery after trabeculectomy takes longer. Physical restrictions and follow-up visits are essential.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Will further treatment be required after surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Postoperative eye drops and monitoring are standard care. Some patients completely stop using pressure-lowering drops, while others may need fewer medications.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How to choose a clinic and surgeon for glaucoma surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Focus on the surgeon’s experience, range of techniques (NPDS, trabeculectomy, MIGS), modern equipment, patient reviews, and price transparency. Schedule a consultation — the doctor will recommend an individual approach.",
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
                "Мы лечим все виды глаукомы с применением самых современных и эффективных хирургических методик.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "хирургическое лечение глаукомы",
                        text: "Современные малоинвазивные и классические методы для стабилизации давления и сохранения зрения.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Хирургическое лечение глаукомы: цель, показания и результаты",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Хирургическое лечение глаукомы направлено на создание альтернативного пути оттока внутриглазной жидкости, стабильное снижение внутриглазного давления (ВГД) и сохранение зрительных функций. Если медикаменты, капли или лазерные процедуры не дают результата, операция глаукомы становится лучшим решением. В нашей частной клинике в Киеве проводится диагностика и лечение глаукомы по международным протоколам: обследование, консультация офтальмолога, индивидуальный подбор метода, послеоперационный контроль.",
                                            },
                                            {
                                                type: "text",
                                                text: "После операции часть пациентов может полностью отказаться от капель или значительно сократить их использование. Хирургические методы лечения глаукомы эффективны при открытоугольной, закрытоугольной, первичной и вторичной форме, а также в сложных случаях, когда глаукома прогрессирует.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Непроникающая глубокая склерэктомия (НГСЭ): щадящий подход при открытоугольной глаукоме",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "НГСЭ — это щадящая операция при глаукоме, при которой внутренние структуры глаза остаются герметичными, а отток жидкости осуществляется через специально сформированный тонкий канал. Метод обеспечивает плавное снижение ВГД без резких перепадов, минимизирует побочные эффекты и ускоряет восстановление.",
                                            },
                                            {
                                                type: "text",
                                                text: "Операция проводится амбулаторно; как правило, возвращение к обычному ритму возможно в течение 1–2 суток. Непроникающая глубокая склерэктомия может сочетаться с удалением катаракты — это удобно пациентам с сопутствующей катарактой, сокращает сроки лечения и улучшает зрение. Если вас интересует хирургическое лечение глаукомы — цена, стоимость обследования и варианты комбинированных операций — все детали обсуждаются на консультации.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Проникающая трабекулэктомия: проверенный стандарт контроля давления",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Трабекулэктомия — классическая проникающая операция при глаукоме, во время которой создаётся новый путь оттока и удаляется часть трабекулярной сети для улучшения циркуляции жидкости. Метод показан при прогрессировании глаукомы, когда консервативное лечение не обеспечивает стабильного результата. Преимущества: выраженный и длительный контроль ВГД, возможность повторного вмешательства. Недостатки: более длительный период восстановления, необходимость строгого соблюдения рекомендаций. В нашем центре тщательно оцениваем показания, противопоказания и риски, чтобы предложить оптимальный прогноз лечения глаукомы (операция) для вашего зрения.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "Микроинвазивная хирургия глаукомы (MIGS) и имплантируемые дренажи",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Современные микроинвазивные технологии (MIGS) и микродренажные импланты позволяют лечить глаукому с минимальной травматичностью. Эти решения подходят на ранних и средних стадиях, а также для пациентов, стремящихся к быстрому восстановлению и снижению зависимости от капель. Врач подбирает тип дренажа или методику с учетом анатомии угла передней камеры, толщины роговицы, состояния зрительного нерва, поля зрения и сопутствующих заболеваний. Микрохирургическое лечение глаукомы часто сочетается с факоэмульсификацией катаракты — это повышает комфорт и сокращает количество визитов. Спросите на приеме, стоит ли рассматривать именно MIGS в вашем случае.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Стоимость операции при глаукоме в Киеве: что входит и как выбрать клинику",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Стоимость операции глаукомы в Киеве и Украине зависит от типа вмешательства (НГСЭ, трабекулэктомия, MIGS), сложности случая, необходимости комбинированных процедур (например, удаление катаракты), анестезии и объема послеоперационного наблюдения. В цену обычно входят: консультация, полное обследование, операционный набор, сертифицированные расходные материалы и контрольные осмотры. Мы подробно объясняем, сколько стоит лечение глаукомы, предоставляем детальную смету и рекомендации по подготовке. Выберите лучший вариант: консультация офтальмолога, осмотр, индивидуальный план «глаукома и её лечение», запись на операцию — всё в одном кабинете координации пациентов.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на лечение глаукомы в Киеве",
                        card: {
                            text: discountList.find(
                                disk =>
                                    disk.key ===
                                    "hirurgichne-likuvannya-glaukomi"
                            )?.text,
                            textLocal: discountList.find(
                                disk =>
                                    disk.key ===
                                    "hirurgichne-likuvannya-glaukomi"
                            )?.localeText.ru,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы о хирургическом лечении глаукомы",
                        content: [
                            {
                                question:
                                    "Когда показано хирургическое лечение глаукомы и стоит ли ждать?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Операция рекомендована, если капли, лазер или их комбинации не контролируют внутриглазное давление или болезнь прогрессирует. Медлить не стоит — своевременное вмешательство помогает сохранить оставшееся зрение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит операция при глаукоме (цена Киев, Украина)?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость зависит от метода (НГСЭ, трабекулэктомия, MIGS), сложности и сопутствующих процедур. Точную цену сообщаем после обследования и консультации. Мы предоставляем прозрачный расчёт без скрытых платежей.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чем отличается непроникающая глубокая склерэктомия от трабекулэктомии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "НГСЭ — более щадящая операция с постепенным снижением ВГД и быстрым восстановлением; трабекулэктомия — «золотой стандарт» с долговременным контролем давления, но требует более длительной реабилитации.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли совместить лечение глаукомы с удалением катаракты?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, часто это целесообразно. Комбинированная операция снижает количество анестезий и визитов, может улучшить качество зрения и стабильность давления.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие побочные эффекты и противопоказания возможны?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Как и любое хирургическое вмешательство, операция имеет риски: воспаление, колебания ВГД, рубцевание фильтрационной подушки. Противопоказания индивидуальны — врач обсудит их после осмотра и анализов.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько длится восстановление и когда можно вернуться к работе?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Большинство пациентов после НГСЭ возвращаются к лёгким делам через 1–2 дня; после трабекулэктомии восстановление дольше. Ограничение физических нагрузок и контрольные осмотры обязательны.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Понадобится ли дальнейшее лечение после операции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Послеоперационные капли и наблюдение — стандарт ухода. Некоторые пациенты полностью отказываются от гипотензивных капель, другим требуется меньшее количество препаратов.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как выбрать клинику и врача для операции при глаукоме?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Ориентируйтесь на опыт хирурга, набор методик (НГСЭ, трабекулэктомия, MIGS), современное оборудование, отзывы пациентов и прозрачность цен. Запишитесь на консультацию — врач предложит индивидуальную тактику лечения.",
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
        name: servicesList.find(s => s.key === "likuvannya-kosookosti")!,
        price: findPriceItem("likuvannya-kosookosti")!,
        uk: {
            textMain:
                "Ми пропонуємо новітні методи діагностики та лікування косоокості, а також закріплення результату.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "лікування \nкосоокості",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Сучасна діагностика косоокості: точність, швидкість, план лікування",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Комплексне обстеження (візометрія, авторефрактометрія, кератотопографія, оцінка бінокулярного зору, визначення кута відхилення за призматичними кроками) допомагає точно встановити тип і ступінь косоокості та астигматизму. Працюємо на високоточному офтальмологічному обладнанні, що дає надійні дані для індивідуального плану: чи доцільне апаратне лікування косоокості, чи потрібна лазерна корекція супутньої аметропії, чи показана операція на косоокість у дорослих або дітей. На первинному прийомі ви отримуєте консультацію лікаря з рекомендаціями, поясненнями «переваги/недоліки», «показання/протипоказання», прогнозом відновлення бінокулярного зору та орієнтовною вартістю (ціна формується прозоро після обстеження).",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Хірургічне лікування: регульовані шви, мікрохірургія, естетика та функція",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Коли консервативні методи вичерпані або кут великий, пропонуємо хірургічне лікування косоокості. Використовуємо мікрохірургічну техніку, радіохвильовий розтин (менше кровотеч і інфекцій за рахунок коагуляції та стерилізуючого ефекту), розсмоктувальні шви у дітей і технологію регульованих швів у дорослих для точного післяопераційного налаштування. Операція виправлення косоокості показана при горизонтальних і вертикальних формах, у тому числі після попередніх невдалих втручань. Завдання — симетрія очей, покращення бінокулярного сприйняття та довгостроковий функціональний результат із мінімальними побічними ефектами.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Апаратне та комп’ютерне лікування: тренування зору з відчутним результатом",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Апаратне лікування косоокості поєднує класичні та сучасні комп’ютерні програми для розвитку фузії, покращення стереозору, стабілізації фовеальної фіксації та зменшення кута відхилення. Курс складається з індивідуально підібраних вправ: призматичні стимули, фотостимуляція, кольоро-й світлоімпульсні методики, візуальні тренажери. Ефективне в будь-якому віці: лікування косоокості та астигматизму у дорослих допомагає зменшити симптоми втоми, а у дітей — попереджає амбліопію та прискорює формування бінокулярного зору. Детально обговорюємо графік, кількість сеансів, очікуваний ефект і апаратне лікування косоокості ціни до старту курсу.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "Дитяча офтальмологія: безпека, сертифіковані матеріали, реабілітація",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Сьогодні офтальмологія має в своєму розпорядженні сучасний, перевірений і безпечний метод лікування кератоконуса - процедура крослінкінгу. Ця технологія заснована на зміцненні тканини рогівки за рахунок створення додаткових зв'язків між молекулами колагену. Особливо актуальним є цей підхід для пацієнтів віком до 45 років, коли захворювання найбільш активно прогресує.",
                                            },
                                            {
                                                type: "text",
                                                text: "Метод був розроблений у Швейцарії і полягає у спрямованому ультрафіолетовому впливі на рогівку, попередньо оброблену рибофлавіном. Контрольована глибина проникнення світла активує біохімічні процеси, у яких тканина стає щільнішою і стійкою до деформації. Прогресування хвороби припиняється, а згодом можлива стабілізація та навіть часткове відновлення зорових функцій.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Вартість і запис: чесна ціна, прозорий кошторис, офіційні відгуки",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Виправлення косоокості ціна в Україні залежить від діагнозу, обсягу втручання, індивідуальних особливостей і обраної тактики (апаратний курс чи операція з усунення косоокості). На консультації лікаря ви отримаєте персональний кошторис: операція на косоокість ціна/лікування косоокості операція ціна, апаратне лікування косоокості ціни, супровід, контрольні огляди. Ми відкрито пояснюємо, «скільки коштує» кожен етап, надаємо офіційні документи й рекомендації. Записатися можна онлайн — приватна клініка, зручний графік прийому, швидке обстеження без черг. Дивіться відгуки пацієнтів і незалежні огляди, ми порадимо оптимальне рішення та допоможемо зареєструватися на зручний час.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про лікування косоокості",
                        content: [
                            {
                                question:
                                    "Коли варто звертатися до лікаря з підозрою на косоокість?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Якщо помітна асиметрія очей, періодичне «утікання» одного ока, двоїння, втома, головний біль, зниження чіткості, скарги дитини на дискомфорт або труднощі з читанням — необхідне обстеження. Консультація лікаря допоможе визначити тип і ступінь, оцінити протипоказання та підібрати лікування.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи допомагає апаратне лікування дорослим?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так. Лікування косоокості та астигматизму у дорослих через апаратні програми покращує фузію, зменшує симптоми астенопії, підвищує комфорт. Результат залежить від вихідного стану, регулярності відвідувань і дотримання домашніх рекомендацій.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Коли показана операція на косоокість?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Операція виправлення косоокості рекомендована при великому стабільному куті, неефективності консервативних методів, вертикальних формах, диплопії, а також у складних випадках після попередніх втручань. Ми детально пояснюємо переваги, недоліки, можливі побічні ефекти й строки реабілітації.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Які технології використовуються під час хірургії?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Мікрохірургічний доступ, радіохвильова коагуляція для зменшення кровотеч, розсмоктувальні шви в дітей, регульовані шви у дорослих для точної післяопераційної корекції положення м’язів. Це підвищує безпеку та естетичний результат.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки коштує операція з косоокості та апаратне лікування?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Ціна індивідуальна й залежить від діагнозу та обсягу допомоги. На прийомі ви отримаєте прозорий кошторис: операція з виправлення косоокості ціна Україна / апаратне лікування косоокості ціни, що включають обстеження, лікування й контрольні огляди. Запитайте про акції та знижки.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи потрібна лазерна корекція при косоокості?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазерна корекція косоокості як окреме втручання не усуває кут, але може бути доцільною для корекції рефракції (короткозорість/далекозорість/астигматизм) у рамках комплексного плану. Рішення приймається після діагностики з урахуванням протипоказань.",
                                    },
                                ],
                            },
                            {
                                question: "Які ризики та побічні ефекти?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Можливі тимчасовий дискомфорт, почервоніння, сухість, набряк повік, коливання кута, рідко — інфекційні ускладнення. Ми мінімізуємо ризики за рахунок стерильності, радіохвильової технології та контролю в післяопераційний період. Пацієнт отримує письмові рекомендації з реабілітації.",
                                    },
                                ],
                            },
                            {
                                question: "Як підготуватися та записатися?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Перед візитом — без контактних лінз 24–48 годин (якщо можливо), візьміть попередні огляди/рецепти. Запис: онлайн-форма або телефон. На консультації лікаря отримаєте огляд, рекомендації, відповіді на питання «куди піти», «чи варто оперувати», «скільки коштує», «як реєструватися на обстеження/операцію».",
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
                "We offer the latest methods of diagnosing and treating strabismus, as well as consolidating the result.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "strabismus \ntreatment",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Modern strabismus diagnostics: precision, speed, treatment plan",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Comprehensive examination (visometry, autorefractometry, keratotopography, binocular vision assessment, and prism step deviation measurement) helps accurately determine the type and degree of strabismus and astigmatism. We use high-precision ophthalmic equipment that provides reliable data for an individual plan: whether hardware treatment of strabismus is appropriate, whether laser correction of concomitant ametropia is needed, or whether strabismus surgery for adults or children is indicated. During the initial consultation, you receive a doctor’s assessment with recommendations, explanations of 'advantages/disadvantages', 'indications/contraindications', a prognosis for binocular vision recovery, and an estimated cost (the price is transparently formed after the examination).",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Surgical treatment: adjustable sutures, microsurgery, aesthetics and function",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "When conservative methods are exhausted or the deviation angle is large, we offer surgical strabismus treatment. We use microsurgical techniques, radio wave incision (which reduces bleeding and infection thanks to coagulation and sterilizing effects), absorbable sutures in children, and adjustable suture technology in adults for precise postoperative adjustment. Strabismus correction surgery is indicated for both horizontal and vertical forms, including after previous unsuccessful interventions. The goal is eye symmetry, improved binocular perception, and long-term functional results with minimal side effects.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Hardware and computer-based treatment: vision training with tangible results",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Hardware strabismus treatment combines classical and modern computer programs to develop fusion, improve stereopsis, stabilize foveal fixation, and reduce deviation angles. The course consists of individually selected exercises: prismatic stimuli, photostimulation, color and light-pulse techniques, and visual trainers. Effective at any age: strabismus and astigmatism treatment in adults helps reduce eye strain symptoms, while in children it prevents amblyopia and accelerates binocular vision formation. We discuss in detail the schedule, number of sessions, expected results, and hardware strabismus treatment prices before starting the course.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "Pediatric ophthalmology: safety, certified materials, rehabilitation",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Today, ophthalmology has at its disposal a modern, proven, and safe method for treating keratoconus — the cross-linking procedure. This technology is based on strengthening the corneal tissue by creating additional bonds between collagen molecules. This approach is especially relevant for patients under 45 years old when the disease progresses most actively.",
                                            },
                                            {
                                                type: "text",
                                                text: "The method was developed in Switzerland and involves directed ultraviolet exposure to the cornea previously treated with riboflavin. The controlled depth of light penetration activates biochemical processes that make the tissue denser and more resistant to deformation. Disease progression stops, and over time stabilization and even partial recovery of visual functions are possible.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Cost and appointment: fair price, transparent estimate, verified reviews",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "The cost of strabismus correction in Ukraine depends on the diagnosis, the scope of intervention, individual characteristics, and the chosen approach (hardware course or strabismus correction surgery). During the doctor's consultation, you will receive a personalized estimate: strabismus surgery cost/treatment price, hardware treatment prices, follow-up, and monitoring visits. We clearly explain how much each stage costs, provide official documents and recommendations. You can make an appointment online — a private clinic, convenient schedule, quick examination without queues. Check out patient reviews and independent overviews — we’ll suggest the optimal solution and help you register for a suitable time.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about strabismus treatment",
                        content: [
                            {
                                question:
                                    "When should I see a doctor if I suspect strabismus?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "If you notice eye asymmetry, periodic drifting of one eye, double vision, fatigue, headaches, reduced clarity, or if your child complains of discomfort or difficulty reading — an examination is necessary. A doctor’s consultation will help determine the type and degree, assess contraindications, and select an appropriate treatment.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Does hardware treatment help adults?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes. Strabismus and astigmatism treatment in adults through hardware programs improves fusion, reduces symptoms of asthenopia, and increases visual comfort. The result depends on the initial condition, regular attendance, and adherence to home recommendations.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "When is strabismus surgery indicated?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Strabismus correction surgery is recommended for large stable angles, ineffective conservative treatment, vertical forms, diplopia, or complex cases after previous interventions. We thoroughly explain the advantages, disadvantages, possible side effects, and rehabilitation timelines.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What technologies are used during surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Microsurgical access, radio wave coagulation to reduce bleeding, absorbable sutures in children, and adjustable sutures in adults for precise postoperative muscle alignment. These techniques increase safety and improve aesthetic results.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does strabismus surgery or hardware treatment cost?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The price is individual and depends on the diagnosis and scope of care. During the consultation, you’ll receive a transparent estimate: strabismus correction surgery cost in Ukraine / hardware treatment prices, which include examination, treatment, and follow-up visits. Ask about special offers and discounts.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is laser correction necessary for strabismus?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Laser correction alone does not eliminate the angle but may be appropriate for correcting refractive errors (myopia/hyperopia/astigmatism) as part of a comprehensive plan. The decision is made after diagnostics, taking contraindications into account.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What are the risks and side effects?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Temporary discomfort, redness, dryness, eyelid swelling, angle fluctuation, and rarely — infectious complications — may occur. We minimize risks through sterile conditions, radio wave technology, and close postoperative monitoring. Each patient receives written rehabilitation instructions.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How to prepare and make an appointment?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Before the visit — avoid wearing contact lenses for 24–48 hours (if possible), and bring previous exam results or prescriptions. Booking: online form or phone call. During the doctor’s consultation, you’ll receive an exam, recommendations, and answers to questions like 'where to go', 'is surgery needed', 'how much does it cost', and 'how to register for an exam or surgery'.",
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
                "Мы предлагаем новейшие методы диагностики и лечения косоглазия, а также закрепление результата.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "лечение \nкосоглазия",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Современная диагностика косоглазия: точность, скорость, план лечения",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Комплексное обследование (визометрия, авторефрактометрия, кератотопография, оценка бинокулярного зрения, определение угла отклонения призматическими шагами) помогает точно установить тип и степень косоглазия и астигматизма. Мы работаем на высокоточной офтальмологической аппаратуре, которая обеспечивает достоверные данные для индивидуального плана: показано ли аппаратное лечение косоглазия, необходима ли лазерная коррекция сопутствующей аметропии, либо требуется операция на косоглазие у взрослых или детей. На первичном приёме вы получаете консультацию врача с рекомендациями, объяснением «плюсов/минусов», «показаний/противопоказаний», прогнозом восстановления бинокулярного зрения и ориентировочной стоимостью (цена формируется прозрачно после обследования).",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Хирургическое лечение: регулируемые швы, микрохирургия, эстетика и функция",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Когда консервативные методы исчерпаны или угол велик, мы предлагаем хирургическое лечение косоглазия. Используем микрохирургическую технику, радиоволновой разрез (меньше кровотечений и инфекций за счёт коагуляции и стерилизующего эффекта), рассасывающиеся швы у детей и технологию регулируемых швов у взрослых для точной послеоперационной настройки. Операция по коррекции косоглазия показана при горизонтальных и вертикальных формах, включая случаи после неудачных вмешательств. Задача — симметрия глаз, улучшение бинокулярного восприятия и долговременный функциональный результат с минимальными побочными эффектами.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Аппаратное и компьютерное лечение: тренировка зрения с ощутимым результатом",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Аппаратное лечение косоглазия сочетает классические и современные компьютерные программы для развития фузии, улучшения стереозрения, стабилизации фовеальной фиксации и уменьшения угла отклонения. Курс состоит из индивидуально подобранных упражнений: призматические стимулы, фотостимуляция, цвето- и светлоимпульсные методики, визуальные тренажёры. Эффективно в любом возрасте: лечение косоглазия и астигматизма у взрослых помогает снизить симптомы усталости, а у детей предотвращает амблиопию и ускоряет формирование бинокулярного зрения. Подробно обсуждаем график, количество сеансов, ожидаемый эффект и цены на аппаратное лечение косоглазия до начала курса.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingTop: true,
                        data: [
                            {
                                title: "Детская офтальмология: безопасность, сертифицированные материалы, реабилитация",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Сегодня офтальмология располагает современным, проверенным и безопасным методом лечения кератоконуса — процедурой кросслинкинга. Эта технология основана на укреплении ткани роговицы за счёт создания дополнительных связей между молекулами коллагена. Особенно актуален этот подход для пациентов до 45 лет, когда заболевание наиболее активно прогрессирует.",
                                            },
                                            {
                                                type: "text",
                                                text: "Метод был разработан в Швейцарии и заключается в направленном ультрафиолетовом воздействии на роговицу, предварительно обработанную рибофлавином. Контролируемая глубина проникновения света активирует биохимические процессы, при которых ткань становится плотнее и устойчивее к деформации. Прогрессирование болезни останавливается, а со временем возможна стабилизация и даже частичное восстановление зрительных функций.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Стоимость и запись: честная цена, прозрачная смета, официальные отзывы",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Цена коррекции косоглазия в Украине зависит от диагноза, объёма вмешательства, индивидуальных особенностей и выбранной тактики (аппаратный курс или операция по устранению косоглазия). На консультации врача вы получите персональную смету: операция на косоглазие цена/лечение косоглазия операция цена, аппаратное лечение косоглазия цены, сопровождение, контрольные осмотры. Мы открыто объясняем, «сколько стоит» каждый этап, предоставляем официальные документы и рекомендации. Записаться можно онлайн — частная клиника, удобный график приёма, быстрое обследование без очередей. Ознакомьтесь с отзывами пациентов и независимыми обзорами — мы предложим оптимальное решение и поможем записаться на удобное время.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о лечении косоглазия",
                        content: [
                            {
                                question:
                                    "Когда следует обращаться к врачу при подозрении на косоглазие?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Если заметна асимметрия глаз, периодическое «уход» одного глаза, двоение, усталость, головная боль, снижение чёткости, жалобы ребёнка на дискомфорт или трудности при чтении — необходимо обследование. Консультация врача поможет определить тип и степень, оценить противопоказания и подобрать лечение.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Помогает ли аппаратное лечение взрослым?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да. Аппаратные программы лечения косоглазия и астигматизма у взрослых улучшают фузию, снижают симптомы астенопии и повышают комфорт зрения. Результат зависит от исходного состояния, регулярности посещений и соблюдения домашних рекомендаций.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Когда показана операция при косоглазии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Операция по исправлению косоглазия рекомендуется при большом стабильном угле, неэффективности консервативных методов, вертикальных формах, диплопии, а также в сложных случаях после предыдущих вмешательств. Мы подробно объясняем преимущества, недостатки, возможные побочные эффекты и сроки реабилитации.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие технологии используются во время операции?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Микрохирургический доступ, радиоволновая коагуляция для снижения кровотечения, рассасывающиеся швы у детей и регулируемые швы у взрослых для точной послеоперационной коррекции положения мышц. Это повышает безопасность и улучшает эстетический результат.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит операция при косоглазии и аппаратное лечение?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Цена индивидуальна и зависит от диагноза и объёма помощи. На приёме вы получите прозрачную смету: операция по исправлению косоглазия цена Украина / аппаратное лечение косоглазия цены, включая обследование, лечение и контрольные осмотры. Уточните наличие акций и скидок.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Нужна ли лазерная коррекция при косоглазии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Лазерная коррекция косоглазия как отдельное вмешательство не устраняет угол, но может быть целесообразна для коррекции рефракции (близорукость/дальнозоркость/астигматизм) в рамках комплексного плана. Решение принимается после диагностики с учётом противопоказаний.",
                                    },
                                ],
                            },
                            {
                                question: "Какие риски и побочные эффекты?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Возможны временный дискомфорт, покраснение, сухость, отёк век, колебания угла, редко — инфекционные осложнения. Мы минимизируем риски за счёт стерильности, радиоволновой технологии и контроля в послеоперационный период. Пациент получает письменные рекомендации по реабилитации.",
                                    },
                                ],
                            },
                            {
                                question: "Как подготовиться и записаться?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Перед визитом — не использовать контактные линзы 24–48 часов (если возможно), возьмите предыдущие осмотры или рецепты. Запись: онлайн-форма или телефон. На консультации врача вы получите осмотр, рекомендации и ответы на вопросы: «куда обратиться», «нужно ли оперировать», «сколько стоит», «как записаться на обследование или операцию».",
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
                        title: "Блефаропластика (хірургія повік) і кон'юнктиви",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Лазерна блефаропластика в Києві: свіжий погляд і чіткі контури повік",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Лазерна блефаропластика — це малоінвазивна операція на повіках, яка прибирає надлишок шкіри й жирові грижі, коригує навислу повіку та повертає відкритий, відпочилий погляд. Процедура підходить пацієнтам із віковими змінами, птозом, “мішками” під очима, складками та зморшками у зоні верхніх і нижніх повік. Якщо вас цікавить лазерна блефаропластика Київ ціна, у приватній клініці ви спершу проходите консультацію лікаря та обстеження: лікар оцінює анатомію, показання, протипоказання та пропонує найкращий метод — корекція повік лазером чи класична хірургія повік. Це не лише про естетику: видалення зайвої шкіри часто покращує периферичний зір і комфорт повсякденного життя.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Коли показана операція на навислу повіку та чим допомагає лазер",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Нависла повіка операція рекомендована, коли шкіра “тисне” на вії, зменшує поле зору, ускладнює макіяж, додає втомленого вигляду. Лазер дає точний розріз, коагулює судини, мінімізує кровотечу та набряк, пришвидшує загоєння, зменшує ризик помітних рубців. За показаннями проводиться операція на віках (верхні/нижні), підтяжка повік або пластика навислого повіка. Якщо питання звучить як “як прибрати нависше віко”, ми зазвичай пропонуємо індивідуальний план: прибрати навислу повіку лазером, комбінувати методики чи виконати реконструктивну блефаропластику. Враховуються супутні стани, ваші очікування, стиль життя й рекомендації лікаря.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Як проходить корекція повік лазером:",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Стандартно маршрут виглядає так: первинна консультація лікаря, фотопротокол, план операції; базові тести (загальний стан, очні показники), підбір анестезії; операція на повіках амбулаторно; короткий відпочинок у кабінеті, виписка з рекомендаціями.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Можливі тимчасові побічні ефекти: набряк, синці, сухість очей, легка чутливість — зазвичай минають протягом 7–14 днів.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Потенційні протипоказання: активне запалення, декомпенсовані системні хвороби, некориговані порушення згортання, вагітність/лактація тощо. Під час обстеження лікар пояснить ризики, обмеження й скаже, чи варто робити втручання саме зараз.",
                                            },
                                            {
                                                type: "text",
                                                text: "Для видалення окремих новоутворень повік ми також використовуємо радіохвильовий метод — атравматичний, із коагуляцією судин та акуратним рубцем.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "Скільки коштує прибрати навислу повіку в Києві: ціна та що на неї впливає",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Скільки коштує операція на навислу повіку? На вартість впливають: вид втручання (верхня/нижня блефаропластика, комбінована), складність і обсяг тканин, застосування лазера, анестезія, післяопераційні огляди. Ми дотримуємося прозорої політики: остаточна ціна озвучується після огляду.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "На сторінці акцій періодично з’являються знижка / акція на лазерна блефаропластика ціна Київ та підтяжка повік ціна.",
                                            },
                                            {
                                                type: "text",
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Пам’ятайте: ",
                                                    },
                                                    {
                                                        value: "правильне планування лікування починається з очного огляду — саме консультація визначає оптимальний маршрут, забезпечує безпеку та очікуваний результат.",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Чому обирають нашу приватну клініку: досвід, технології, сервіс",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Ми поєднуємо досвід офтальмохірургів, сучасне лазерне обладнання та доказові протоколи — це гарантує стабільний естетичний і функціональний результат. Ви отримуєте детальні рекомендації, зрозумілий план лікування, супровід під час реабілітації, комфортні умови прийому. Наші пацієнти залишають відгуки та коментарі про природний ефект “свіжого погляду”.",
                                            },
                                            {
                                                type: "text",

                                                text: "Проводимо контрольні огляди, відповідаємо на запитання, допомагаємо з підготовкою до операції й поверненням до звичного ритму. Якщо ви шукаєте, куди піти на якісну пластику навислого повіка ціна в Києві, — запишіться на прийом: підберемо рішення саме для вас.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на хірургію повік і кон'юнктиви в Києві",
                        card: {
                            text: discountList.find(
                                disk =>
                                    disk.key === "hirurgiya-povik-i-konyunktivi"
                            )?.text,
                            textLocal: discountList.find(
                                disk =>
                                    disk.key === "hirurgiya-povik-i-konyunktivi"
                            )?.localeText.uk,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті питання про хірургію повік і кон'юнктиви",
                        content: [
                            {
                                question:
                                    "Що краще: корекція повік лазером чи класична операція на віках?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Обидва методи ефективні. Лазер забезпечує точність розрізу, коагуляцію та швидше відновлення; класична хірургія оптимальна при складних випадках. Вибір робить лікар після обстеження.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки коштує лазерна блефаропластика в Києві?",
                                answer: [
                                    {
                                        type: "text",
                                        gap: true,
                                        text: "Ціна залежить від обсягу, зони (верхні/нижні повіки), складності та типу анестезії. Після консультації та огляду назвемо індивідуальну вартість.",
                                    },
                                    {
                                        type: "text",
                                        text: "Стежте за розділом акція / знижка.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи можна прибрати навислу повіку лазером за один сеанс?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "У більшості випадків так, процедура одноетапна. Іноді потрібна корекція навислого повіка чи комбіноване втручання — рішення приймається індивідуально.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Які є протипоказання та побічні ефекти?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Гостре запалення, декомпенсовані системні хвороби, вагітність/лактація тощо. Побічні ефекти зазвичай тимчасові: набряк, синці, сухість. Дотримання рекомендацій пришвидшує відновлення.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи покращиться зір після підтяжки повік?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Якщо нависла шкіра обмежувала периферичний зір, операція на навислу повіку може дати функціональне покращення. Естетичний ефект — свіжий, відкритий погляд — гарантовано видно в дзеркалі.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки триває відновлення і коли на роботу?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Зазвичай 7–14 днів. Базові соціальні активності можливі раніше, але остаточні терміни залежать від індивідуальної реакції тканин і дотримання рекомендацій.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи потрібні аналізи та обстеження перед операцією?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так. Перед лікуванням проводимо обстеження та фотофіксацію, уточнюємо анамнез, перевіряємо очні показники, підбираємо метод втручання та догляду.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Де почати: консультація лікаря онлайн чи в кабінеті?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Можна обидва варіанти, але найточніший план формує очна консультація лікаря в кабінеті. Під час прийому ви отримуєте персональні рекомендації, розрахунок ціни та графік оглядів.",
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
                "Eyelid and conjunctival surgery (blepharoplasty and other interventions).",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Blepharoplasty (Eyelid Surgery) and Conjunctiva",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Laser blepharoplasty in Kyiv: a fresh look and defined eyelid contours",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Laser blepharoplasty is a minimally invasive eyelid surgery that removes excess skin and fat pads, corrects droopy eyelids, and restores an open, refreshed look. The procedure is suitable for patients with age-related changes, ptosis, 'bags' under the eyes, folds, and wrinkles in the upper and lower eyelid area. If you're interested in laser blepharoplasty Kyiv price, a private clinic will first offer a consultation and examination: the doctor assesses anatomy, indications, contraindications, and recommends the best method — laser eyelid correction or traditional surgery. It’s not just about aesthetics: removing excess skin often improves peripheral vision and everyday comfort.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "When surgery for droopy eyelids is indicated and how the laser helps",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Surgery for droopy eyelids is recommended when excess skin presses on the eyelashes, narrows the visual field, makes makeup difficult, or adds a tired look. The laser provides a precise incision, coagulates blood vessels, minimizes bleeding and swelling, speeds up healing, and reduces the risk of noticeable scars. Depending on indications, upper/lower eyelid surgery, eyelid lift, or correction of droopy eyelids may be performed. If you’re wondering 'how to remove a droopy eyelid', we usually offer a personalized plan: laser removal, combined techniques, or reconstructive blepharoplasty. Associated conditions, your expectations, and lifestyle are always taken into account.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "How laser eyelid correction works:",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "The standard process looks like this: initial doctor consultation, photo documentation, surgery plan; basic tests (general health, eye parameters), anesthesia selection; outpatient eyelid surgery; short rest in the office, then discharge with recommendations.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Temporary side effects may include swelling, bruising, dry eyes, or mild sensitivity — they typically subside within 7–14 days.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Potential contraindications: active inflammation, decompensated systemic diseases, uncorrected coagulation disorders, pregnancy/lactation, etc. During the examination, the doctor will explain risks, limitations, and whether now is the right time for the procedure.",
                                            },
                                            {
                                                type: "text",
                                                text: "For the removal of small eyelid lesions, we also use the radio wave method — an atraumatic approach with vessel coagulation and minimal scarring.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "How much does it cost to fix droopy eyelids in Kyiv: price and key factors",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "How much does droopy eyelid surgery cost? The price depends on the type of procedure (upper/lower blepharoplasty, combined), complexity and tissue volume, use of laser, anesthesia, and postoperative check-ups. We follow a transparent pricing policy: the final cost is provided after examination.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Discounts and promotions for laser blepharoplasty price Kyiv and eyelid lift price are periodically available on the promotions page.",
                                            },
                                            {
                                                type: "text",
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Remember: ",
                                                    },
                                                    {
                                                        value: "proper treatment planning starts with an in-person eye exam — only a consultation can define the optimal approach, ensure safety, and achieve the expected result.",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Why choose our private clinic: experience, technology, and care",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "We combine the expertise of ophthalmic surgeons, modern laser equipment, and evidence-based protocols — ensuring stable aesthetic and functional results. You receive detailed recommendations, a clear treatment plan, ongoing support during recovery, and a comfortable care environment. Our patients often leave feedback about the natural, 'refreshed look' effect.",
                                            },
                                            {
                                                type: "text",
                                                text: "We provide follow-up exams, answer your questions, and help prepare for surgery and return to your usual routine. If you’re searching for a quality droopy eyelid correction clinic in Kyiv — schedule a consultation: we’ll find the best solution for you.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for eyelid and conjunctival surgery in Kyiv",
                        card: {
                            text: discountList.find(
                                disk =>
                                    disk.key === "hirurgiya-povik-i-konyunktivi"
                            )?.text,
                            textLocal: discountList.find(
                                disk =>
                                    disk.key === "hirurgiya-povik-i-konyunktivi"
                            )?.localeText.en,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about eyelid and conjunctival surgery",
                        content: [
                            {
                                question:
                                    "Which is better: laser eyelid correction or traditional surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Both methods are effective. The laser provides precision cuts, coagulates vessels, and allows faster recovery; traditional surgery is preferable for complex cases. The doctor decides after examination.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does laser blepharoplasty cost in Kyiv?",
                                answer: [
                                    {
                                        type: "text",
                                        gap: true,
                                        text: "The price depends on the scope, area (upper/lower eyelids), complexity, and type of anesthesia. After consultation and examination, we provide an individual cost estimate.",
                                    },
                                    {
                                        type: "text",
                                        text: "Check the promotions/discounts section for updates.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can droopy eyelids be corrected with a laser in one session?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "In most cases, yes — the procedure is performed in one stage. Sometimes an additional correction or combined technique is needed — the decision is made individually.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What are the contraindications and side effects?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Acute inflammation, decompensated systemic diseases, pregnancy/lactation, etc. Side effects are usually temporary: swelling, bruising, dryness. Following recommendations speeds up recovery.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Will vision improve after eyelid lift?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "If excess skin limited peripheral vision, surgery can provide functional improvement. The aesthetic effect — a refreshed, open look — is immediately visible in the mirror.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How long is recovery, and when can I return to work?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Usually 7–14 days. Basic social activities are possible earlier, but final recovery depends on individual tissue response and adherence to recommendations.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Are tests and examinations required before surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes. Before treatment, we perform diagnostics and photo documentation, review your medical history, check eye parameters, and select the optimal surgical and care plan.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Where to start: online consultation or in-office visit?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Both options are available, but the most accurate plan is formed during an in-person consultation. During the visit, you receive personalized recommendations, a price estimate, and a check-up schedule.",
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
                "Хирургия век и конъюнктивы (блефаропластика и другие вмешательства).",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Блефаропластика (хирургия век) и конъюнктива",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Лазерная блефаропластика в Киеве: свежий взгляд и чёткие контуры век",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Лазерная блефаропластика — малоинвазивная операция на веках, которая удаляет избыток кожи и жировые грыжи, корректирует нависшее веко и возвращает открытый, отдохнувший взгляд. Процедура подходит пациентам с возрастными изменениями, птозом, «мешками» под глазами, складками и морщинами в области век. Если вас интересует лазерная блефаропластика Киев цена, в частной клинике сначала проводится консультация и обследование: врач оценивает анатомию, показания, противопоказания и подбирает оптимальный метод — коррекцию век лазером или классическую операцию. Это не только эстетика: удаление лишней кожи часто улучшает периферическое зрение и повседневный комфорт.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Когда показана операция при нависшем веке и чем помогает лазер",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Операция при нависшем веке показана, когда кожа давит на ресницы, сужает поле зрения, мешает макияжу и придаёт уставший вид. Лазер обеспечивает точный разрез, коагулирует сосуды, минимизирует кровотечение и отёк, ускоряет заживление и снижает риск заметных рубцов. По показаниям проводится операция на верхних/нижних веках, подтяжка век или пластика нависшего века. Если вы ищете ответ на вопрос «как убрать нависшее веко», мы предлагаем индивидуальный план: убрать нависшее веко лазером, комбинировать методики или выполнить реконструктивную блефаропластику. Учитываются сопутствующие состояния, ваши ожидания, образ жизни и рекомендации врача.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Как проходит коррекция век лазером:",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Стандартный маршрут: первичная консультация врача, фотопротокол, план операции; базовые анализы (общие и офтальмологические показатели), подбор анестезии; амбулаторная операция на веках; короткий отдых и выписка с рекомендациями.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Возможные временные побочные эффекты: отёк, синяки, сухость глаз, лёгкая чувствительность — обычно проходят в течение 7–14 дней.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Потенциальные противопоказания: активное воспаление, декомпенсированные системные заболевания, нарушения свёртываемости крови, беременность/лактация и т.д. На консультации врач объяснит риски, ограничения и подскажет, стоит ли проводить вмешательство сейчас.",
                                            },
                                            {
                                                type: "text",
                                                text: "Для удаления отдельных новообразований век мы также используем радиоволновой метод — атравматичный, с коагуляцией сосудов и аккуратным рубцем.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingTop: true,
                        data: [
                            {
                                title: "Сколько стоит убрать нависшее веко в Киеве: цена и от чего зависит",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Сколько стоит операция при нависшем веке? На цену влияют: вид вмешательства (верхняя/нижняя блефаропластика, комбинированная), сложность и объём тканей, использование лазера, анестезия, послеоперационные осмотры. Мы придерживаемся прозрачной политики — окончательная стоимость сообщается после осмотра.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "На странице акций периодически появляются предложения и скидки на лазерная блефаропластика цена Киев и подтяжка век цена.",
                                            },
                                            {
                                                type: "text",
                                                text: [
                                                    {
                                                        bold: true,
                                                        subtitle: true,
                                                        value: "Помните: ",
                                                    },
                                                    {
                                                        value: "правильное планирование лечения начинается с очного осмотра — именно консультация определяет оптимальную тактику, обеспечивает безопасность и желаемый результат.",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Почему выбирают нашу частную клинику: опыт, технологии, сервис",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Мы объединяем опыт офтальмохирургов, современное лазерное оборудование и доказательные протоколы — это гарантирует стабильный эстетический и функциональный результат. Вы получаете подробные рекомендации, понятный план лечения, сопровождение во время реабилитации и комфортные условия приёма. Пациенты оставляют отзывы о естественном эффекте «свежего взгляда».",
                                            },
                                            {
                                                type: "text",
                                                text: "Мы проводим контрольные осмотры, отвечаем на вопросы, помогаем подготовиться к операции и вернуться к привычному ритму. Если вы ищете, где сделать качественную пластику нависшего века в Киеве — запишитесь на консультацию: подберём решение именно для вас.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на хирургию век и конъюнктивы в Киеве",
                        card: {
                            text: discountList.find(
                                disk =>
                                    disk.key === "hirurgiya-povik-i-konyunktivi"
                            )?.text,
                            textLocal: discountList.find(
                                disk =>
                                    disk.key === "hirurgiya-povik-i-konyunktivi"
                            )?.localeText.ru,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о хирургии век и конъюнктивы",
                        content: [
                            {
                                question:
                                    "Что лучше: коррекция век лазером или классическая операция?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Оба метода эффективны. Лазер обеспечивает точный разрез, коагуляцию сосудов и быстрое восстановление; классическая хирургия предпочтительна при сложных случаях. Выбор делает врач после обследования.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит лазерная блефаропластика в Киеве?",
                                answer: [
                                    {
                                        type: "text",
                                        gap: true,
                                        text: "Цена зависит от объема, зоны (верхние/нижние веки), сложности и типа анестезии. После консультации и осмотра мы озвучим индивидуальную стоимость.",
                                    },
                                    {
                                        type: "text",
                                        text: "Следите за разделом акции / скидки.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли убрать нависшее веко лазером за один сеанс?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "В большинстве случаев да, процедура проводится за один этап. Иногда требуется дополнительная коррекция или комбинированное вмешательство — решение принимается индивидуально.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие есть противопоказания и побочные эффекты?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Острые воспаления, декомпенсированные системные заболевания, беременность/лактация и т. д. Побочные эффекты обычно временные: отёк, синяки, сухость. Соблюдение рекомендаций ускоряет восстановление.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Улучшится ли зрение после подтяжки век?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Если избыточная кожа ограничивала периферическое зрение, операция на нависшем веке может улучшить функцию. Эстетический эффект — свежий, открытый взгляд — заметен сразу в зеркале.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько длится восстановление и когда можно на работу?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Обычно 7–14 дней. Социальная активность возможна раньше, но окончательные сроки зависят от индивидуальной реакции тканей и соблюдения рекомендаций.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Нужны ли анализы и обследования перед операцией?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да. Перед лечением мы проводим обследование и фотопротокол, уточняем анамнез, проверяем глазные показатели, подбираем метод вмешательства и последующего ухода.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "С чего начать: консультация врача онлайн или в кабинете?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Можно оба варианта, но наиболее точный план формируется при очной консультации в кабинете. На приёме вы получаете персональные рекомендации, расчёт стоимости и график осмотров.",
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
        name: servicesList.find(s => s.key === "ksenonoterapiya")!,
        price: findPriceItem("ksenonoterapiya")!,
        uk: {
            textMain: "Методика «Янгельські сни».",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Ксенонотерапія",
                        text: "Ксенонотерапія в Києві: природний антистрес і знеболення. Швидко знімає тривогу, покращує сон і концентрацію. Безпечно під контролем лікаря.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Ксенонотерапія в Києві: природний антистрес і перезавантаження нервової системи",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Ксенонотерапія — це інгаляційна методика з використанням інертного газу ксенону у поєднанні з киснем. В субанестетичних концентраціях ксенон чинить виражений заспокійливий, анксіолітичний та аналгезивний ефекти завдяки блокаді NMDA-рецепторів, що допомагає швидко зняти психоемоційну напругу, зменшити інтенсивність болю, покращити сон і відновити ресурс нервової системи. Наукові огляди відзначають потенційні нейро- та кардіопротекторні властивості ксенону, а також високий профіль безпеки за умови контролю інгаляції спеціальним обладнанням.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Кому показана ксенонова терапія?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Метод підходить пацієнтам із хронічним стресом і тривожними станами, емоційним вигоранням, порушеннями сну, елементами психосоматичних розладів, мігренню та хронічними больовими синдромами. У низці клінічних практик ксенон застосовують і як компонент мультимодальної аналгезії, що допомагає знизити больове навантаження без седативного «похмілля». В офтальмологічних пацієнтів ксенонотерапія корисна як м’яка антистрес-підтримка під час підготовки до процедур та в періоди підвищеної тривоги.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Як проходить процедура ксенонотерапії",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Сеанс триває зазвичай 20–40 хвилин. Пацієнт дихає сумішшю ксенону та кисню через маску; уже протягом перших хвилин настає відчуття легкості, знижується внутрішня напруга, можливі приємне тепло, легкі парестезії та покращення настрою. Параметри підбирає лікар, а перебіг процедури контролює апарат із моніторингом дихання. Після сеансу не потрібна спеціальна реабілітація — можна повертатися до звичних справ.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        data: [
                            {
                                title: "Результати та переваги: швидко, м’яко, без медикаментозного навантаження",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Швидке зняття емоційної напруги та тривоги; нормалізація сну.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Зменшення інтенсивності головного та хронічного болю.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Високий профіль безпеки та екологічність методу; відсутність кумуляції.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Поєднуваність із іншими видами лікування та процедурами клініки.",
                                            },
                                            {
                                                type: "text",
                                                text: "Ці властивості ксенону підтверджені оглядовими публікаціями та клінічним застосуванням у складі анестезіологічних і терапевтичних протоколів.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Курс, протипоказання та ціна",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Стандартно рекомендують курс 3–6 сеансів із інтервалами за індивідуальним планом. Протипоказання відносні та обговорюються на консультації (зокрема гострі інфекції з гарячкою, декомпенсовані стани, деякі легеневі патології). Орієнтуйтеся на актуальний прайс клініки в розділі «Ціни» — там винесено окрему програму «КСЕХЕЛП АНТИСТРЕС» та інші покази; точну вартість і потрібну кількість процедур визначить лікар після огляду.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на ксенонотерапію в Києві",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "ksenonoterapiya"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "ksenonoterapiya"
                            )?.localeText.uk,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті питання про хірургію повік і кон'юнктиви",
                        content: [
                            {
                                question:
                                    "Що відчуває пацієнт під час ксенонотерапії?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Легку розслабленість, теплоту, зниження тривоги; можливі м’які парестезії в кінцівках і покращення настрою — це нормальна відповідь нервової системи на ксенон.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки триває ефект і коли потрібен курс?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Після першого сеансу полегшення зазвичай відчутне одразу. Для стійкого результату рекомендують 3–6 процедур із інтервалами, визначеними лікарем.",
                                    },
                                ],
                            },
                            {
                                question: "Чи безпечно дихати ксеноном?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "За медичним протоколом і на сертифікованому обладнанні — так. Ксенон має високий профіль безпеки та не утворює токсичних метаболітів.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи можна поєднувати ксенонотерапію з іншими процедурами?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так, метод добре інтегрується в комплексні програми лікування та реабілітації й може застосовуватись поряд із іншими терапевтичними підходами за призначенням лікаря.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи підходить ксенонотерапія при хронічному болю та мігрені?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так, як частина мультимодальної аналгезії вона допомагає зменшувати інтенсивність болю та частоту нападів.",
                                    },
                                ],
                            },
                            {
                                question: "Чи є протипоказання?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Індивідуально оцінюються на консультації (наприклад, гострі інфекції, декомпенсовані стани). Лікар визначає безпечність у кожному випадку.",
                                    },
                                ],
                            },
                            {
                                question: "Скільки коштує ксенонова терапія?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Актуальні програми та ціни дивіться у прайсі клініки; фінальну вартість і тривалість курсу визначає лікар після огляду.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи впливає ксенон на концентрацію та працездатність після сеансу?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Більшість пацієнтів повертаються до звичних справ уже того ж дня; ксенон характеризується швидким відновленням без «постседативної» інерції. Дотримуйтесь рекомендацій лікаря.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        en: {
            textMain: "«Angel Dreams» Method.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Xenon therapy",
                        text: "Xenon therapy in Kyiv: a natural anti-stress and pain relief method. Quickly reduces anxiety, improves sleep and concentration. Safe under medical supervision.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Xenon therapy in Kyiv: natural anti-stress and nervous system reset",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Xenon therapy is an inhalation technique using the inert gas xenon combined with oxygen. At sub-anesthetic concentrations, xenon provides pronounced calming, anxiolytic, and analgesic effects by blocking NMDA receptors, which helps quickly relieve emotional tension, reduce pain intensity, improve sleep, and restore nervous system balance. Scientific reviews note xenon's potential neuro- and cardioprotective properties, as well as its high safety profile when inhalation is controlled with specialized equipment.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Who is xenon therapy for?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "The method suits patients with chronic stress and anxiety, emotional burnout, sleep disorders, psychosomatic symptoms, migraines, and chronic pain syndromes. In some clinical practices, xenon is used as a component of multimodal analgesia to reduce pain without a sedative ‘hangover.’ For ophthalmology patients, xenon therapy is beneficial as gentle anti-stress support before procedures or during periods of increased anxiety.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "How a xenon therapy session works",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "A session typically lasts 20–40 minutes. The patient inhales a mixture of xenon and oxygen through a mask; within the first minutes, a sense of lightness and relaxation appears, with possible pleasant warmth, mild tingling sensations, and improved mood. The doctor adjusts parameters individually, and the process is monitored with specialized breathing equipment. No rehabilitation is required afterward — you can return to your usual activities immediately.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        data: [
                            {
                                title: "Results and benefits: fast, gentle, and drug-free",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Rapid relief of emotional tension and anxiety; normalization of sleep.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Reduction of headache and chronic pain intensity.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "High safety profile and environmental friendliness; no accumulation in the body.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Compatibility with other treatments and clinic procedures.",
                                            },
                                            {
                                                type: "text",
                                                text: "These xenon properties are supported by clinical reviews and practical use within anesthetic and therapeutic protocols.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Course, contraindications, and cost",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "A standard course includes 3–6 sessions scheduled individually. Contraindications are relative and discussed during consultation (such as acute infections with fever, decompensated conditions, or certain lung pathologies). Check the current clinic price list in the “Prices” section — it features a special ‘XENHELP ANTI-STRESS’ program and other indications. The doctor will determine the final cost and number of sessions after examination.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for xenotherapy in Kyiv",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "ksenonoterapiya"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "ksenonoterapiya"
                            )?.localeText.en,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about eyelid and conjunctival surgery",
                        content: [
                            {
                                question:
                                    "What does a patient feel during xenon therapy?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "A mild sense of relaxation, warmth, and reduced anxiety; slight tingling in the limbs and improved mood are possible — this is a normal nervous system response to xenon.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How long does the effect last and when is a course needed?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Relief is usually felt immediately after the first session. For lasting results, 3–6 procedures are recommended at intervals determined by the doctor.",
                                    },
                                ],
                            },
                            {
                                question: "Is it safe to breathe xenon?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "When used according to medical protocol and on certified equipment — yes. Xenon has a high safety profile and does not form toxic metabolites.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Can xenon therapy be combined with other treatments?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, the method integrates well into comprehensive treatment and rehabilitation programs and can be used alongside other therapeutic approaches as prescribed by a doctor.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Is xenon therapy suitable for chronic pain and migraines?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, as part of multimodal analgesia it helps reduce pain intensity and the frequency of attacks.",
                                    },
                                ],
                            },
                            {
                                question: "Are there any contraindications?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "They are individually assessed during consultation (for example, acute infections or decompensated conditions). The doctor determines safety in each specific case.",
                                    },
                                ],
                            },
                            {
                                question: "How much does xenon therapy cost?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Current programs and prices are listed in the clinic’s price list; the final cost and duration of the course are determined by the doctor after examination.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Does xenon affect concentration and performance after the session?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Most patients return to their usual activities the same day; xenon is characterized by rapid recovery without 'post-sedative' inertia. Follow your doctor’s recommendations.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        ru: {
            textMain: "Методика «Ангельские сны».",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "ксенонотерапия",
                        text: "Ксенон-терапия в Киеве: природное средство от стресса и боли. Быстро снимает тревогу, улучшает сон и концентрацию. Безопасно под контролем врача.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Ксенон-терапия в Киеве: природный антистресс и перезагрузка нервной системы",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Ксенон-терапия — это ингаляционный метод с использованием инертного газа ксенона в сочетании с кислородом. В субанестетических концентрациях ксенон оказывает выраженное успокаивающее, анксиолитическое и анальгезирующее действие за счёт блокады NMDA-рецепторов. Это помогает быстро снять психоэмоциональное напряжение, уменьшить боль, улучшить сон и восстановить нервную систему. Научные обзоры отмечают потенциальные нейро- и кардиопротекторные свойства ксенона, а также высокий уровень безопасности при контроле процедуры специальным оборудованием.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Кому показана ксеноновая терапия?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Метод подходит пациентам с хроническим стрессом и тревожными состояниями, эмоциональным выгоранием, нарушениями сна, психосоматическими расстройствами, мигренью и хроническими болевыми синдромами. В ряде клинических практик ксенон применяют как компонент мультимодальной аналгезии, помогая снизить болевую нагрузку без «седативного похмелья». Для офтальмологических пациентов ксенон-терапия полезна как мягкая антистресс-поддержка при подготовке к процедурам и в периоды повышенной тревожности.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Как проходит процедура ксенон-терапии",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Сеанс длится обычно 20–40 минут. Пациент дышит смесью ксенона и кислорода через маску; уже через несколько минут появляется ощущение лёгкости, снижается внутреннее напряжение, может возникать приятное тепло, лёгкие покалывания и улучшение настроения. Параметры подбирает врач, а ход процедуры контролирует аппарат с мониторингом дыхания. После сеанса не требуется специальная реабилитация — можно сразу возвращаться к обычным делам.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        data: [
                            {
                                title: "Результаты и преимущества: быстро, мягко, без медикаментозной нагрузки",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Быстрое снятие эмоционального напряжения и тревоги; нормализация сна.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Снижение интенсивности головной и хронической боли.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Высокий уровень безопасности и экологичность метода; отсутствие кумуляции.",
                                            },
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Совместимость с другими видами лечения и процедурами клиники.",
                                            },
                                            {
                                                type: "text",
                                                text: "Эти свойства ксенона подтверждены научными публикациями и клиническим применением в составе анестезиологических и терапевтических протоколов.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Курс, противопоказания и стоимость",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Обычно рекомендуют курс из 3–6 сеансов с индивидуальными интервалами. Противопоказания относительные и обсуждаются на консультации (в частности, острые инфекции с температурой, декомпенсированные состояния, некоторые лёгочные патологии). Ознакомьтесь с актуальным прайсом клиники в разделе «Цены» — там представлена отдельная программа «КСЕХЕЛП АНТИСТРЕСС» и другие показания. Точную стоимость и количество процедур определит врач после осмотра.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на ксенонотерапию в Киеве",
                        card: {
                            text: discountList.find(
                                disk => disk.key === "ksenonoterapiya"
                            )?.text,
                            textLocal: discountList.find(
                                disk => disk.key === "ksenonoterapiya"
                            )?.localeText.ru,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часто задаваемые вопросы о хирургии век и конъюнктивы",
                        content: [
                            {
                                question:
                                    "Что чувствует пациент во время ксенон-терапии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Легкое расслабление, тепло, снижение тревожности; возможны мягкие покалывания в конечностях и улучшение настроения — это нормальная реакция нервной системы на ксенон.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как долго держится эффект и когда нужен курс?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "После первого сеанса облегчение обычно ощущается сразу. Для стойкого результата рекомендуют 3–6 процедур с интервалами, определёнными врачом.",
                                    },
                                ],
                            },
                            {
                                question: "Безопасно ли дышать ксеноном?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "При соблюдении медицинского протокола и использовании сертифицированного оборудования — да. Ксенон обладает высоким профилем безопасности и не образует токсичных метаболитов.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Можно ли сочетать ксенон-терапию с другими процедурами?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, метод хорошо интегрируется в комплексные программы лечения и реабилитации и может применяться вместе с другими терапевтическими подходами по назначению врача.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Подходит ли ксенон-терапия при хронической боли и мигрени?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, как часть мультимодальной анальгезии она помогает уменьшить интенсивность боли и частоту приступов.",
                                    },
                                ],
                            },
                            {
                                question: "Есть ли противопоказания?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Они оцениваются индивидуально на консультации (например, острые инфекции, декомпенсированные состояния). Врач определяет безопасность в каждом случае.",
                                    },
                                ],
                            },
                            {
                                question: "Сколько стоит ксеноновая терапия?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Актуальные программы и цены смотрите в прайсе клиники; окончательную стоимость и продолжительность курса определяет врач после осмотра.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Влияет ли ксенон на концентрацию и работоспособность после сеанса?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Большинство пациентов возвращаются к обычным делам уже в тот же день; ксенон характеризуется быстрым восстановлением без «постседативной» инерции. Соблюдайте рекомендации врача.",
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
        name: servicesList.find(s => s.key === "anesteziologichnij-posibnik")!,
        price: findPriceItem("anesteziologichnij-posibnik")!,
        uk: {
            textMain:
                "Анестезіологічний супровід у нашій клініці забезпечує операції без болю та з максимальною безпекою.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Анестезіологічний посібник",
                        text: "Анестезіологічний супровід у нашій клініці забезпечує операції без болю та з максимальною безпекою: індивідуально підбираємо місцеву анестезію, седацію або загальну анестезію з постійним моніторингом стану пацієнта.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Безболісні й безпечні операції в Києві",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Страх болю та хвилювання перед операцією — найпоширеніша причина відкладання лікування. У нашій клініці анестезіологічний супровід зроблено так, щоб пацієнт не відчував дискомфорту: сучасна місцева анестезія, седація або загальна анестезія (наркоз) підбираються індивідуально. Ми ретельно готуємо пацієнта до втручання, враховуємо супутні хвороби, алергії, прийом ліків і проводимо моніторинг безпеки на кожному етапі.",
                                            },
                                            {
                                                type: "text",
                                                text: "Результат — операція «без болю», прогнозований перебіг, швидке відновлення зору та впевненість у надійності команди.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Яку анестезію обрати: місцева, седація чи загальна?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Для більшості офтальмологічних процедур достатньо місцевої анестезії (краплі/ін’єкція) — це комфортно, контрольовано та безпечно. Якщо пацієнт хвилюється або операція довша, застосовуємо седацію: ви розслаблені, не боїтеся, майже не пам’ятаєте момент втручання, а дихання й серцебиття контролює анестезіолог. Загальна анестезія (наркоз) показана за медичними показаннями або за бажанням пацієнта при складних операціях. Наш анестезіолог пояснить плюси/мінуси та допоможе визначити оптимальний варіант під ваш стан здоров’я.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Підготовка до анестезії: аналізи, консультація, ліки",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Передопераційна підготовка — ключ до безпеки. Ми збираємо анамнез, оцінюємо результати аналізів (загальні, коагулограма, ЕКГ за потреби), переглядаємо список ваших препаратів (антикоагулянти, антигіпертензивні, цукрознижувальні). Ви отримуєте персональні інструкції: коли припинити їжу/воду перед седацією або наркозом, які ліки прийняти в день операції, що взяти з собою. Такий «анестезіологічний посібник» зменшує ризики, підвищує ефективність анестезії та пришвидшує відновлення.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Контроль безпеки: обладнання, моніторинг, протоколи",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "У операційній ми безперервно контролюємо пульс, артеріальний тиск, сатурацію, ЕКГ; використовуємо сертифіковані препарати та сучасні монітори. Стандартизовані протоколи, перевірка алергічних реакцій і готовність до невідкладних ситуацій — обов’язкові. Під час операції біля вас постійно знаходиться анестезіолог, який відповідає за комфорт, достатній рівень знеболення та стабільний стан. Наш підхід — «максимальна безпека, мінімальний стрес».",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "День операції: що ви відчуєте, відновлення та вартість",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "У день втручання ми ще раз звіряємо план анестезії, пояснюємо відчуття під час і після операції (легкий тиск, спалахи світла — це норма), даємо чіткі рекомендації з відновлення: режим, краплі, обмеження. Більшість пацієнтів ідуть додому в той самий день. Вартість анестезіологічного супроводу залежить від виду анестезії, тривалості операції та медичних показань; остаточну ціну називає анестезіолог після консультації.",
                                            },
                                            {
                                                type: "text",
                                                text: "Записатися на консультацію в Києві можна онлайн — «Реєстрація» або телефоном: ми відповімо на запитання «скільки коштує анестезія/наркоз», що входить у вартість і як підготуватися.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Ціни на анестезіологічний супровід в Києві",
                        card: {
                            text: discountList.find(
                                disk =>
                                    disk.key === "anesteziologichnij-posibnik"
                            )?.text,
                            textLocal: discountList.find(
                                disk =>
                                    disk.key === "anesteziologichnij-posibnik"
                            )?.localeText.uk,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Часті запитання про анестезіологічний супровід",
                        content: [
                            {
                                question:
                                    "Чи буде боляче під час операції на очах?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Ні. Ми підбираємо ефективну місцеву анестезію або седацію/наркоз. Ви не відчуваєте болю; можливі лише короткі світлові спалахи чи тиск без дискомфорту.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Седація чи загальна анестезія — у чому різниця?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Седація — поверхневий «медичний сон» із самостійним диханням і постійним моніторингом; загальна анестезія — глибший стан, коли все контролює анестезіолог. Вибір залежить від втручання та вашого здоров’я.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Як підготуватися: чи можна їсти/пити перед анестезією?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Перед седацією/загальною анестезією зазвичай потрібен період голодування (їжа/вода за регламентом). Точні інструкції надасть анестезіолог під ваш випадок.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "У мене гіпертонія/діабет/аритмія. Чи безпечна анестезія?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Так, за умови правильної підготовки та контролю показників. Ми узгодимо прийом ліків, за потреби — корекцію терапії та вид анестезії.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Які можливі побічні ефекти після анестезії?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Короткочасна сонливість, сухість у роті, запаморочення; зазвичай швидко минають. Серйозні ускладнення вкрай рідкісні й мінімізуються завдяки скринінгу та моніторингу.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки триває анестезія і коли я зможу повернутися додому?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Тривалість відповідає часу операції. Після спостереження в зоні відновлення більшість пацієнтів повертаються додому цього ж дня з детальними рекомендаціями.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Скільки коштує анестезіологічний супровід у Києві?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Вартість залежить від виду анестезії (місцева/седація/наркоз), тривалості й складності втручання. Точну ціну повідомляємо після очної консультації та огляду.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Чи потрібна супровідна особа після седації або наркозу?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Бажано. У день операції не рекомендуємо керувати авто; краще, щоб вас зустрів близький або таксі. Повний перелік обмежень надамо письмово.",
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
                "Anesthesia support in our clinic ensures pain-free surgeries with maximum safety.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Anesthesiology Guide",
                        text: "Anesthesia support in our clinic ensures pain-free procedures with maximum safety: we individually select local anesthesia, sedation, or general anesthesia with continuous patient monitoring.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Painless and safe surgeries in Kyiv",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Fear of pain and anxiety before surgery are the most common reasons for delaying treatment. In our clinic, anesthesia care is designed so that the patient feels no discomfort: modern local anesthesia, sedation, or general anesthesia is selected individually. We carefully prepare each patient for the procedure, taking into account existing conditions, allergies, medications, and ensure safety monitoring at every stage.",
                                            },
                                            {
                                                type: "text",
                                                text: "The result — a pain-free operation, predictable course, quick visual recovery, and full confidence in the team’s reliability.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Which anesthesia to choose: local, sedation, or general?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "For most ophthalmic procedures, local anesthesia (drops/injection) is sufficient — it’s comfortable, controlled, and safe. If the patient is anxious or the surgery takes longer, sedation is used: you stay relaxed, calm, and remember little about the procedure while breathing and heartbeat are monitored by the anesthesiologist. General anesthesia is applied when medically indicated or upon patient request during complex surgeries. Our anesthesiologist will explain the pros and cons and help choose the best option for your health.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Preparing for anesthesia: tests, consultation, medications",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Preoperative preparation is the key to safety. We collect your medical history, evaluate test results (general tests, coagulation profile, ECG if needed), review your medication list (anticoagulants, antihypertensive, antidiabetic drugs). You receive personalized instructions: when to stop eating/drinking before sedation or general anesthesia, which medications to take on the day of surgery, and what to bring with you. This “anesthesia guide” minimizes risks, enhances anesthesia effectiveness, and speeds up recovery.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Safety control: equipment, monitoring, protocols",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "In the operating room, we continuously monitor pulse, blood pressure, oxygen saturation, and ECG; we use certified drugs and advanced monitors. Standardized protocols, allergy testing, and readiness for emergencies are mandatory. During the operation, an anesthesiologist stays with you at all times, ensuring comfort, proper anesthesia depth, and stable condition. Our approach: 'maximum safety, minimum stress.'",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Surgery day: what to expect, recovery, and cost",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "On the day of surgery, we recheck the anesthesia plan, explain sensations during and after the procedure (mild pressure, flashes of light — all normal), and give clear recovery recommendations: routine, eye drops, and activity restrictions. Most patients go home the same day. The cost of anesthesia depends on the type, surgery duration, and medical indications; the final price is provided by the anesthesiologist after consultation.",
                                            },
                                            {
                                                type: "text",
                                                text: "You can book a consultation in Kyiv online ('Registration') or by phone — we will answer questions such as 'how much does anesthesia cost,' what’s included, and how to prepare.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Prices for anesthesia support in Kyiv",
                        card: {
                            text: discountList.find(
                                disk =>
                                    disk.key === "anesteziologichnij-posibnik"
                            )?.text,
                            textLocal: discountList.find(
                                disk =>
                                    disk.key === "anesteziologichnij-posibnik"
                            )?.localeText.en,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Frequently asked questions about anesthesia support",
                        content: [
                            {
                                question: "Will it hurt during eye surgery?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "No. We select effective local anesthesia or sedation/general anesthesia. You won’t feel any pain; only brief light flashes or pressure sensations without discomfort are possible.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Sedation or general anesthesia — what’s the difference?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Sedation is a light ‘medical sleep’ with independent breathing and continuous monitoring; general anesthesia is a deeper state where the anesthesiologist controls everything. The choice depends on the procedure and your health condition.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How to prepare: can I eat or drink before anesthesia?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Before sedation or general anesthesia, a fasting period is usually required (no food or water as per protocol). The anesthesiologist will give you exact instructions for your case.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "I have hypertension/diabetes/arrhythmia. Is anesthesia safe?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Yes, provided proper preparation and monitoring. We will coordinate medication intake, adjust therapy if necessary, and choose the safest anesthesia type.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "What are the possible side effects after anesthesia?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Short-term drowsiness, dry mouth, dizziness — usually pass quickly. Serious complications are extremely rare and minimized through screening and monitoring.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How long does anesthesia last, and when can I go home?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The duration matches the surgery time. After observation in the recovery area, most patients return home the same day with detailed post-care instructions.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "How much does anesthesia support cost in Kyiv?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "The cost depends on the type of anesthesia (local/sedation/general), duration, and procedure complexity. The exact price is provided after an in-person consultation and examination.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Do I need an accompanying person after sedation or anesthesia?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Preferably yes. On the day of surgery, we do not recommend driving; it’s better if a relative meets you or you take a taxi. You’ll receive a full list of restrictions in writing.",
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
                "Анестезиологическое сопровождение в нашей клинике обеспечивает операции без боли и с максимальной безопасностью.",
            sections: [
                {
                    type: "hero",
                    data: {
                        title: "Анестезиологическое руководство",
                        text: "Анестезиологическое сопровождение в нашей клинике обеспечивает операции без боли и с максимальной безопасностью: мы индивидуально подбираем местную анестезию, седацию или общий наркоз с постоянным мониторингом состояния пациента.",
                    },
                },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        paddingBottom: false,
                        data: [
                            {
                                title: "Безболезненные и безопасные операции в Киеве",
                                cta: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "Страх боли и тревога перед операцией — самые частые причины откладывания лечения. В нашей клинике анестезиологическое сопровождение организовано так, чтобы пациент не испытывал дискомфорта: современная местная анестезия, седация или общий наркоз подбираются индивидуально. Мы тщательно готовим пациента к вмешательству, учитываем сопутствующие болезни, аллергии, прием лекарств и контролируем безопасность на каждом этапе.",
                                            },
                                            {
                                                type: "text",
                                                text: "Результат — операция «без боли», предсказуемое течение, быстрое восстановление зрения и уверенность в надежности команды.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Какую анестезию выбрать: местную, седацию или общую?",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Для большинства офтальмологических операций достаточно местной анестезии (капли/инъекция) — это комфортно, контролируемо и безопасно. Если пациент волнуется или операция длительная, применяется седация: вы расслаблены, не боитесь, почти не помните процесс, а дыхание и пульс контролирует анестезиолог. Общий наркоз используется по медицинским показаниям или по желанию пациента при сложных операциях. Анестезиолог объяснит преимущества и риски и поможет выбрать оптимальный вариант с учетом вашего здоровья.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Подготовка к анестезии: анализы, консультация, лекарства",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "Предоперационная подготовка — ключ к безопасности. Мы собираем анамнез, оцениваем результаты анализов (общие, коагулограмма, ЭКГ при необходимости), проверяем список ваших препаратов (антикоагулянты, гипотензивные, сахароснижающие). Вы получаете персональные инструкции: когда прекратить прием пищи/воды перед седацией или наркозом, какие лекарства принять в день операции, что взять с собой. Такой «анестезиологический гид» снижает риски, повышает эффективность анестезии и ускоряет восстановление.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                { type: "cta" },
                {
                    type: "roundImageAndTextSection",
                    data: {
                        firstImageLeft: true,
                        paddingBottom: false,
                        data: [
                            {
                                title: "Контроль безопасности: оборудование, мониторинг, протоколы",
                                logo: true,
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                text: "В операционной мы постоянно контролируем пульс, давление, насыщение кислородом, ЭКГ; используем сертифицированные препараты и современное оборудование. Стандартизированные протоколы, проверка аллергических реакций и готовность к неотложным ситуациям — обязательны. Во время операции рядом с вами постоянно находится анестезиолог, отвечающий за комфорт, уровень обезболивания и стабильное состояние. Наш принцип — «максимальная безопасность, минимальный стресс».",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "День операции: ощущения, восстановление и стоимость",
                                image: "/images/equipment1.jpg",
                                text: [
                                    {
                                        content: [
                                            {
                                                type: "text",
                                                gap: true,
                                                text: "В день вмешательства мы еще раз уточняем план анестезии, объясняем, какие ощущения могут быть во время и после операции (легкое давление, вспышки света — это норма), даем четкие рекомендации по восстановлению: режим, капли, ограничения. Большинство пациентов возвращаются домой в тот же день. Стоимость анестезиологического сопровождения зависит от вида анестезии, длительности операции и медицинских показаний; окончательную цену сообщает анестезиолог после консультации.",
                                            },
                                            {
                                                type: "text",
                                                text: "Записаться на консультацию в Киеве можно онлайн («Регистрация») или по телефону — мы ответим на вопросы: «сколько стоит анестезия/наркоз», что входит в стоимость и как подготовиться.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "priceSection",
                    data: {
                        title: "Цены на анестезиологическое сопровождение в Киеве",
                        card: {
                            text: discountList.find(
                                disk =>
                                    disk.key === "anesteziologichnij-posibnik"
                            )?.text,
                            textLocal: discountList.find(
                                disk =>
                                    disk.key === "anesteziologichnij-posibnik"
                            )?.localeText.ru,
                        },
                    },
                },
                { type: "doctors" },
                {
                    type: "faq",
                    data: {
                        title: "Частые вопросы об анестезиологическом сопровождении",
                        content: [
                            {
                                question:
                                    "Будет ли больно во время операции на глазах?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Нет. Мы подбираем эффективную местную анестезию или седацию/наркоз. Вы не чувствуете боли; возможны лишь короткие световые вспышки или давление без дискомфорта.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Седация или общий наркоз — в чём разница?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Седация — это лёгкий «медицинский сон» с самостоятельным дыханием и постоянным мониторингом; общий наркоз — более глубокое состояние, полностью контролируемое анестезиологом. Выбор зависит от вмешательства и состояния здоровья.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Как подготовиться: можно ли есть или пить перед анестезией?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Перед седацией или общим наркозом обычно требуется период голодания (еда и вода — по регламенту). Точные инструкции даст анестезиолог под ваш случай.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "У меня гипертония/диабет/аритмия. Безопасна ли анестезия?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Да, при правильной подготовке и контроле показателей. Мы согласуем приём лекарств, при необходимости скорректируем терапию и подберём оптимальный вид анестезии.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Какие возможны побочные эффекты после анестезии?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Кратковременная сонливость, сухость во рту, головокружение — обычно быстро проходят. Серьёзные осложнения крайне редки и минимизируются благодаря обследованию и мониторингу.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько длится анестезия и когда я смогу вернуться домой?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Продолжительность соответствует времени операции. После наблюдения в палате восстановления большинство пациентов возвращаются домой в тот же день с подробными рекомендациями.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Сколько стоит анестезиологическое сопровождение в Киеве?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Стоимость зависит от вида анестезии (местная/седация/наркоз), длительности и сложности операции. Точную цену сообщаем после очной консультации и осмотра.",
                                    },
                                ],
                            },
                            {
                                question:
                                    "Нужен ли сопровождающий после седации или наркоза?",
                                answer: [
                                    {
                                        type: "text",
                                        text: "Желательно. В день операции не рекомендуется садиться за руль; лучше, чтобы вас встретил близкий человек или вызвать такси. Полный список ограничений предоставим письменно.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
];

export const raynerAdvantageDataMob: {
    uk: AdvantageServiceSectionProps;
    en: AdvantageServiceSectionProps;
    ru: AdvantageServiceSectionProps;
} = {
    uk: {
        title: "Переваги встановлення Rayner GALAXY в Британському Офтальмологічному Центрі",
        text: "Ми пропонуємо повний супровід пацієнта на всіх етапах — від діагностики до післяопераційного спостереження",
        list: [
            {
                title: "ексклюзивними постачальниками лінз Rayner GALAXY",
                text: "Ця технологія доступна в Україні лише у нашій клініці",
            },
            {
                title: "Новітнє обладнання",
                text: "Обладнання та операційні зали, що відповідають міжнародним стандартам",
            },
            {
                title: "Індивідуальний підхід",
                text: "Точна діагностика, підбір ІОЛ, контроль результату",
            },
            {
                title: "Досвідчені хірурги",
                text: "Сертифіковані для роботи з сучасними інтраокулярними лінзами",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% безпеки",
                text: "Максимальна безпека та комфорт під час кожного етапу лікування",
            },
            {
                title: "Rayner GALAXY вже доступна до встановлення у нашій клініці",
                text: "",
                bgTransparent: true,
            },
        ],
    },
    en: {
        title: "Advantages of Rayner GALAXY implantation at the British Ophthalmology Centre",
        text: "We provide full patient support at every stage — from diagnosis to postoperative care",
        list: [
            {
                title: "Exclusive suppliers of Rayner GALAXY lenses",
                text: "This technology is available in Ukraine only at our clinic",
            },
            {
                title: "State-of-the-art equipment",
                text: "Facilities and operating rooms that meet international standards",
            },
            {
                title: "Individual approach",
                text: "Accurate diagnostics, IOL selection, and results monitoring",
            },
            {
                title: "Experienced surgeons",
                text: "Certified to work with modern intraocular lenses",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% safety",
                text: "Maximum safety and comfort at every stage of treatment",
            },
            {
                title: "Rayner GALAXY is now available for implantation in our clinic",
                text: "",
                bgTransparent: true,
            },
        ],
    },
    ru: {
        title: "Преимущества установки Rayner GALAXY в Британском Офтальмологическом Центре",
        text: "Мы обеспечиваем полное сопровождение пациента на всех этапах — от диагностики до послеоперационного наблюдения",
        list: [
            {
                title: "Эксклюзивные поставщики линз Rayner GALAXY",
                text: "Эта технология доступна в Украине только в нашей клинике",
            },
            {
                title: "Новейшее оборудование",
                text: "Оборудование и операционные залы, соответствующие международным стандартам",
            },
            {
                title: "Индивидуальный подход",
                text: "Точная диагностика, подбор ИОЛ и контроль результата",
            },
            {
                title: "Опытные хирурги",
                text: "Сертифицированы для работы с современными интраокулярными линзами",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% безопасность",
                text: "Максимальная безопасность и комфорт на каждом этапе лечения",
            },
            {
                title: "Rayner GALAXY уже доступна для установки в нашей клинике",
                text: "",
                bgTransparent: true,
            },
        ],
    },
};

export const raynerAdvantageDataTab: {
    uk: AdvantageServiceSectionProps;
    en: AdvantageServiceSectionProps;
    ru: AdvantageServiceSectionProps;
} = {
    uk: {
        paddingBottom: false,
        title: "Переваги встановлення Rayner GALAXY в Британському Офтальмологічному Центрі",
        text: "Ми пропонуємо повний супровід пацієнта на всіх етапах — від діагностики до післяопераційного спостереження",
        list: [
            {
                title: "ексклюзивними постачальниками лінз Rayner GALAXY",
                text: "Ця технологія доступна в Україні лише у нашій клініці",
            },
            {
                title: "Новітнє обладнання",
                text: "Обладнання та операційні зали, що відповідають міжнародним стандартам",
            },
            { videoOnly: "/videos/rayner-spiral.mp4" },
            {
                title: "Індивідуальний підхід",
                text: "Точна діагностика, підбір ІОЛ, контроль результату",
            },
            {
                title: "Досвідчені хірурги",
                text: "Сертифіковані для роботи з сучасними інтраокулярними лінзами",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% безпеки",
                text: "Максимальна безпека та комфорт під час кожного етапу лікування",
            },
            {
                title: "Rayner GALAXY вже доступна до встановлення у нашій клініці",
                text: "",
                bgTransparent: true,
            },
        ],
    },
    en: {
        paddingBottom: false,
        title: "Advantages of Rayner GALAXY implantation at the British Ophthalmology Centre",
        text: "We provide full patient support at every stage — from diagnosis to postoperative care",
        list: [
            {
                title: "Exclusive suppliers of Rayner GALAXY lenses",
                text: "This technology is available in Ukraine only at our clinic",
            },
            {
                title: "State-of-the-art equipment",
                text: "Facilities and operating rooms that meet international standards",
            },
            { videoOnly: "/videos/rayner-spiral.mp4" },
            {
                title: "Individual approach",
                text: "Accurate diagnostics, IOL selection, and results monitoring",
            },
            {
                title: "Experienced surgeons",
                text: "Certified to work with modern intraocular lenses",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% safety",
                text: "Maximum safety and comfort at every stage of treatment",
            },
            {
                title: "Rayner GALAXY is now available for implantation in our clinic",
                text: "",
                bgTransparent: true,
            },
        ],
    },
    ru: {
        paddingBottom: false,
        title: "Преимущества установки Rayner GALAXY в Британском Офтальмологическом Центре",
        text: "Мы обеспечиваем полное сопровождение пациента на всех этапах — от диагностики до послеоперационного наблюдения",
        list: [
            {
                title: "Эксклюзивные поставщики линз Rayner GALAXY",
                text: "Эта технология доступна в Украине только в нашей клинике",
            },
            {
                title: "Новейшее оборудование",
                text: "Оборудование и операционные залы, соответствующие международным стандартам",
            },
            { videoOnly: "/videos/rayner-spiral.mp4" },
            {
                title: "Индивидуальный подход",
                text: "Точная диагностика, подбор ИОЛ и контроль результата",
            },
            {
                title: "Опытные хирурги",
                text: "Сертифицированы для работы с современными интраокулярными линзами",
            },
            { imageOnly: "/images/rayner-box.png" },
            {
                title: "100% безопасность",
                text: "Максимальная безопасность и комфорт на каждом этапе лечения",
            },
            {
                title: "Rayner GALAXY уже доступна для установки в нашей клинике",
                text: "",
                bgTransparent: true,
            },
        ],
    },
};

export const raynerCardsList = [
    {
        uk: {
            title: "Значно менше відблисків і ореолів у темну пору доби",
            text: "Мінімізована дисфотопія, особливо в умовах низької освітленості — для найвимогливіших пацієнтів.",
        },
        en: {
            title: "Significantly fewer glares and halos at night",
            text: "Minimized dysphotopsia, especially in low-light conditions — for the most demanding patients.",
        },
        ru: {
            title: "Значительно меньше бликов и ореолов в тёмное время суток",
            text: "Минимизирована дисфотопия, особенно в условиях низкой освещённости — для самых требовательных пациентов.",
        },
        imageBefore: "/images/rayner-dark.jpg",
        imageAfter: "/images/rayner-dark-after.webp",
    },
    {
        uk: {
            title: "Недифракційна оптика для 0% втрати світла при передачі",
            text: "Преміум-лінза, яка максимізує передачу світла до сітківки.",
        },
        en: {
            title: "Non-diffractive optics for 0% light loss during transmission",
            text: "A premium lens that maximizes light transmission to the retina.",
        },
        ru: {
            title: "Недифракционная оптика для 0% потери света при передаче",
            text: "Премиум-линза, которая максимизирует передачу света на сетчатку.",
        },
        imageBefore: "/images/rayner-day-before.jpg",
        imageAfter: "/images/rayner-day.jpg",
    },
];
