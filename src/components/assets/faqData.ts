export type AnswerType = {
    list?: boolean;
    text: string | string[];
    gap?: boolean;
    bold?: boolean;
};

export type FAQLocaleType = {
    question: string;
    answer: AnswerType[];
};

export type FAQListType = {
    en: FAQLocaleType;
    uk: FAQLocaleType;
    ru: FAQLocaleType;
};
export type FAQType = {
    title: { uk: string; ru: string; en: string };
    content: FAQListType[];
};

export const faqMainList: FAQType = {
    title: {
        uk: "Відповіді на часті питання",
        ru: "Ответы на часто задаваемые вопросы",
        en: "Answers to Frequently Asked Questions",
    },

    content: [
        {
            uk: {
                question: "Що таке плановий візит до офтальмолога?",
                answer: [
                    {
                        text: "Планові візити до офтальмолога дозволяють виявити порушення зору ще на початковій стадії, що дає можливість своєчасно розпочати терапію та уникнути ускладнень. Офтальмологія - це високоточна та технологічно розвинена галузь медицини, що вимагає застосування спеціалізованих методів та сучасного діагностичного обладнання. Звернення до досвідченого лікаря-офтальмолога – важливий крок до збереження здоров'я очей. Компетентний спеціаліст може визначити захворювання задовго до появи виражених симптомів, коли лікування є найбільш ефективним. Регулярний контроль стану зору допомагає запобігати розвитку патологій та зберігати високу якість життя.",
                    },
                ],
            },
            ru: {
                question: "Что такое плановый визит к офтальмологу?",
                answer: [
                    {
                        text: "Плановые визиты к офтальмологу позволяют выявить нарушения зрения на ранней стадии, что дает возможность своевременно начать терапию и избежать осложнений. Офтальмология - это высокоточная и технологически развитая область медицины, требующая применения специализированных методов и современного диагностического оборудования. Обращение к опытному врачу-офтальмологу – важный шаг к сохранению здоровья глаз. Компетентный специалист может определить заболевание задолго до появления выраженных симптомов, когда лечение наиболее эффективно. Регулярный контроль состояния зрения помогает предотвращать развитие патологий и сохранять высокое качество жизни.",
                    },
                ],
            },
            en: {
                question: "What is a routine visit to an ophthalmologist?",
                answer: [
                    {
                        text: "Routine visits to an ophthalmologist allow for the early detection of vision impairments, enabling timely therapy initiation and complication avoidance. Ophthalmology is a highly precise and technologically advanced field of medicine that requires specialized methods and modern diagnostic equipment. Consulting an experienced ophthalmologist is a crucial step in preserving eye health. A competent specialist can identify diseases long before pronounced symptoms appear, when treatment is most effective. Regular vision monitoring helps prevent the development of pathologies and maintain a high quality of life.",
                    },
                ],
            },
        },
        {
            uk: {
                question: "Які послуги надає клініка в Києві?",
                answer: [
                    {
                        text: "У нашій офтальмологічній клініці надається повний спектр офтальмологічних послуг:",
                    },
                    {
                        list: true,
                        text: [
                            "Діагностика зору. Комплексне обстеження та перевірка зору з використанням сучасного обладнання.",
                            "Лазерна корекція. Сучасні методи виправлення рефракційних порушень відновлення чіткості зору.",
                            "Хірургічне лікування катаракти, косоокості, кератоконуса та інших офтальмологічних патологій.",
                            "Вітреоретинальна хірургія. Лікування захворювань сітківки та склоподібного тіла.",
                            "Лікування синдрому сухого ока. Ми забезпечуємо ефективний та індивідуальний підхід до усунення неприємних симптомів, щоб повернути комфорт та здоров'я вашим очам.",
                        ],
                    },
                ],
            },
            ru: {
                question: "Какие услуги предоставляет клиника в Киеве?",
                answer: [
                    {
                        text: "В нашей офтальмологической клинике предоставляется полный спектр офтальмологических услуг:",
                    },
                    {
                        list: true,
                        text: [
                            "Диагностика зрения. Комплексное обследование и проверка зрения с использованием современного оборудования.",
                            "Лазерная коррекция. Современные методы исправления рефракционных нарушений восстановления четкости зрения.",
                            "Хирургическое лечение катаракты, косоглазия, кератоконуса и других офтальмологических патологий.",
                            "Витреоретинальная хирургия. Лечение заболеваний сетчатки и стекловидного тела.",
                            "Лечение синдрома сухого глаза. Мы обеспечиваем эффективный и индивидуальный подход к устранению неприятных симптомов, чтобы вернуть комфорт и здоровье вашим глазам.",
                        ],
                    },
                ],
            },
            en: {
                question: "What services does the clinic provide in Kyiv?",
                answer: [
                    {
                        text: "Our ophthalmology clinic offers a full range of ophthalmological services:",
                    },
                    {
                        list: true,
                        text: [
                            "Vision diagnostics. Comprehensive examination and vision testing using modern equipment.",
                            "Laser correction. Modern methods for correcting refractive errors to restore visual clarity.",
                            "Surgical treatment of cataracts, strabismus, keratoconus, and other ophthalmological pathologies.",
                            "Vitreoretinal surgery. Treatment of retinal and vitreous body diseases.",
                            "Dry eye syndrome treatment. We provide an effective and individualized approach to eliminating unpleasant symptoms to restore comfort and health to your eyes.",
                        ],
                    },
                ],
            },
        },
        {
            uk: {
                question: "Чому пацієнти обирають саме нашу клініку?",
                answer: [
                    {
                        gap: true,
                        text: "Офтальмологічна клініка надає клієнтам якісне обслуговування.",
                    },
                    {
                        text: "Чому пацієнти обирають саме нас? Тому що в британській офтальмологічній клініці на вас чекають найкращі офтальмологи Києва , доброзичливий персонал та високий рівень сервісу. Ми пропонуємо зручний онлайн-запис, можливість вибрати спеціаліста, а також заздалегідь дізнатися, скільки коштує консультація офтальмолога чи будь-яка інша процедура. Завдяки індивідуальному підходу та чіткій діагностиці, ви отримаєте саме ту допомогу, яка справді вирішує проблему. Всі наші кабінети оснащені обладнанням для апаратної діагностики зору , що дозволяє досягти високої точності та ефективності лікування.",
                    },
                ],
            },
            ru: {
                question: "Почему пациенты выбирают именно нашу клинику?",
                answer: [
                    {
                        gap: true,
                        text: "Офтальмологическая клиника предоставляет клиентам качественное обслуживание.",
                    },
                    {
                        text: "Почему пациенты выбирают именно нас? Потому что в британской офтальмологической клинике вас ждут лучшие офтальмологи Киева , дружелюбный персонал и высокий уровень сервиса. Мы предлагаем удобную онлайн-запись, возможность выбрать специалиста, а также заранее узнать, сколько стоит консультация офтальмолога или любая другая процедура. Благодаря индивидуальному подходу и точной диагностике, вы получите именно ту помощь, которая действительно решает проблему. Все наши кабинеты оснащены оборудованием для аппаратной диагностики зрения , что позволяет достичь высокой точности и эффективности лечения.",
                    },
                ],
            },
            en: {
                question: "Why do patients choose our clinic?",
                answer: [
                    {
                        gap: true,
                        text: "The ophthalmology clinic provides clients with quality service.",
                    },
                    {
                        text: "Why do patients choose us? Because at the British ophthalmology clinic, you will find the best ophthalmologists in Kyiv, friendly staff, and a high level of service. We offer convenient online booking, the ability to choose a specialist, and also to find out in advance how much an ophthalmologist consultation or any other procedure costs. Thanks to an individual approach and accurate diagnostics, you will receive the help that truly solves the problem. All our offices are equipped with vision diagnostic equipment, which allows for high accuracy and treatment effectiveness.",
                    },
                ],
            },
        },
        {
            uk: {
                question: "як записатися на прийом?",
                answer: [
                    {
                        gap: true,
                        text: "Записатися на прийом до фахівців Британського офтальмологічного центру просто та зручно: ви можете записатися по телефону або через наш сайт у будь-який зручний для Вас час.",
                    },
                    {
                        text: "Відвідування британської офтальмологічної клініки Київ — це не лише якість, а й комфорт: сучасні умови, уважний персонал, індивідуальний підхід до кожного пацієнта. Якщо вас цікавить, скільки коштує консультація окуліста Київ ціна, наші адміністратори завжди готові надати повну інформацію до візиту.",
                    },
                    {
                        bold: true,
                        text: "Звертайтесь до нас! Ми допоможемо зберегти ваш зір та подаруємо можливість поглянути на світ по-новому!",
                    },
                ],
            },

            ru: {
                question: "Как записаться на прием?",
                answer: [
                    {
                        gap: true,
                        text: "Записаться на прием к специалистам Британского офтальмологического центра просто и удобно: вы можете записаться по телефону или через наш сайт в любое удобное для Вас время.",
                    },
                    {
                        text: "Посещение британской офтальмологической клиники Киев — это не только качество, но и комфорт: современные условия, внимательный персонал, индивидуальный подход к каждому пациенту. Если вас интересует, сколько стоит консультация окулиста Киев цена, наши администраторы всегда готовы предоставить полную информацию до визита.",
                    },
                    {
                        bold: true,
                        text: "Обращайтесь к нам! Мы поможем сохранить ваше зрение и подарим возможность взглянуть на мир по-новому!",
                    },
                ],
            },
            en: {
                question: "How to make an appointment?",
                answer: [
                    {
                        gap: true,
                        text: "Making an appointment with specialists at the British Ophthalmology Center is simple and convenient: you can make an appointment by phone or through our website at any time that is convenient for you.",
                    },
                    {
                        text: "Visiting the British ophthalmology clinic in Kyiv is not only about quality but also comfort: modern conditions, attentive staff, and an individual approach to each patient. If you are interested in how much an ophthalmologist consultation in Kyiv costs, our administrators are always ready to provide complete information before your visit.",
                    },
                    {
                        bold: true,
                        text: "Contact us! We will help preserve your vision and give you the opportunity to see the world in a new way!",
                    },
                ],
            },
        },
        {
            uk: {
                question: "як проводиться лікування зору?",
                answer: [
                    {
                        gap: true,
                        text: "Комплексне лікування зору та інноваційне обладнання",
                    },
                    {
                        text: "Для нас важливо не просто провести прийом офтальмолога, а надати комплексну допомогу. Саме тому в центрі реалізовано сучасне апаратне лікування очей Київ, яке ефективне при різних станах — від амбліопії до синдрому втомленого ока. Обираючи апаратне лікування зору Київ, ви інвестуєте у результат, підтверджений медичною практикою та досвідом тисяч пацієнтів.",
                    },
                ],
            },
            ru: {
                question: "Как проводится лечение зрения?",
                answer: [
                    {
                        gap: true,
                        text: "Комплексное лечение зрения и инновационное оборудование",
                    },
                    {
                        text: "Для нас важно не просто провести прием офтальмолога, а предоставить комплексную помощь. Именно поэтому в центре реализовано современное аппаратное лечение глаз Киев, которое эффективно при различных состояниях — от амблиопии до синдрома уставшего глаза. Выбирая аппаратное лечение зрения Киев, вы инвестируете в результат, подтвержденный медицинской практикой и опытом тысяч пациентов.",
                    },
                ],
            },
            en: {
                question: "How is vision treatment conducted?",
                answer: [
                    {
                        gap: true,
                        text: "Comprehensive vision treatment and innovative equipment",
                    },
                    {
                        text: "For us, it is important not just to conduct an ophthalmologist appointment but to provide comprehensive assistance. That is why the center implements modern hardware eye treatment in Kyiv, which is effective for various conditions — from amblyopia to computer vision syndrome. By choosing hardware vision treatment in Kyiv, you are investing in results backed by medical practice and the experience of thousands of patients.",
                    },
                ],
            },
        },
    ],
};
