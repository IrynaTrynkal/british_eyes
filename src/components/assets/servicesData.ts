import { MethodType } from "./aboutData";
import { ServicesKeyType, servicesList, ServicesListProps } from "./menu";
import { PriceItemType, priceList } from "./priceList";

export type SectionType =
    | { type: "preview"; data: PreviewProps }
    | { type: "roundImageAndTextSection"; data: RoundImageAndTextProps[] }
    | { type: "numberListSection"; data: NumberListProps }
    | { type: "cta" };

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

export type RoundTextType = {
    list?: boolean;
    textBeforeList?: string;
    greenText?: string;
    content?: string[];
};
export type RoundBtnType = {
    btnName: string;
    btnLink: string;
    btnSecondary?: boolean;
};
export type RoundImageAndTextProps = {
    title: string;
    image: string;
    imagePosition?: "object-left" | "object-right";
    text: RoundTextType[];
    btn?: RoundBtnType[];
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

export const servicesData: ServicesProps[] = [
    {
        name: servicesList.find(s => s.key === "perevirka-zoru")!,
        price: findPriceItem("perevirka-zoru")!,
        uk: {
            textMain:
                "Комплексне обстеження та перевірка зору з використанням сучасного обладнання.",
            sections: [
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
            ],
        },
        en: {
            textMain:
                "Comprehensive examination and vision test using modern equipment.",
            sections: [
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
            ],
        },
        ru: {
            textMain:
                "Комплексное обследование и проверка зрения с использованием современного оборудования.",
            sections: [
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
            ],
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
            ],
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
