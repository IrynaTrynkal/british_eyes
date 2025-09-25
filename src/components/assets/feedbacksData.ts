import { ServicesKeyType } from "./menu";

export const feedbacksPhotoList = [
    "/feedbacks/feedback1.png",
    "/feedbacks/feedback2.png",
    "/feedbacks/feedback3.png",
    "/feedbacks/feedback4.png",
    "/feedbacks/feedback5.png",
    "/feedbacks/feedback6.png",
    "/feedbacks/feedback7.png",
    "/feedbacks/feedback8.png",
];
export type FeedbackType = {
    service: ServicesKeyType;
    photo?: string;
    uk: { name: string; text: string };
    ru: { name: string; text: string };
    en: { name: string; text: string };
};

export const feedbacksList: FeedbackType[] = [
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/feedback1m.jpg",
        uk: {
            name: "Якимчук Олена",
            text: "Дуже задоволена якістю сервісу та швидкістю результату клініки. Окрема вдячність моєму лікареві Бурдею Артему Вячеславовичу, за професіоналізм, підбадьорювання під час операції та уважне ставлення. Завдяки Вашим вмілим рукам та турботі я знову можу насолоджуватись чітким зором та повноцінним життям після 20-річного носіння лінз.",
        },
        ru: {
            name: "Якимчук Елена",
            text: "Очень довольна качеством сервиса и скоростью результата клиники. Отдельная благодарность моему врачу Бурдею Артему Вячеславовичу за профессионализм, поддержку во время операции и внимательное отношение. Благодаря вашим умелым рукам и заботе я снова могу наслаждаться чётким зрением и полноценной жизнью после 20 лет ношения линз.",
        },
        en: {
            name: "Yakymchuk Olena",
            text: "I am very satisfied with the quality of service and the speed of results at the clinic. Special thanks to my doctor, Artem Vyacheslavovych Burdey, for his professionalism, encouragement during the surgery, and attentive care. Thanks to your skilled hands and care, I can once again enjoy clear vision and a full life after 20 years of wearing lenses.",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        photo: "/feedbacks/feedback2m.jpg",
        uk: {
            name: "Брайченко Валерій Миколайович",
            text: "Висловлюю велику вдячність лікарям «Британського офтальмологічного центру» за бездоганний результат оперативного втручання по заміні кришталика і повернення зору. За чуйне ставлення, професіоналізм та підтримку всього персоналу центру. Велика подяка хірургу Жуку А.М. та лікарю Петросовій О.О.",
        },
        ru: {
            name: "Брайченко Валерий Николаевич",
            text: "Выражаю большую благодарность врачам «Британского офтальмологического центра» за безупречный результат оперативного вмешательства по замене хрусталика и возвращение зрения. За чуткое отношение, профессионализм и поддержку всего персонала центра. Огромная благодарность хирургу Жуку А.М. и врачу Петросовой О.О.",
        },
        en: {
            name: "Braichenko Valerii Mykolaiovych",
            text: "I would like to express my sincere gratitude to the doctors of the British Ophthalmology Center for the impeccable result of the lens replacement surgery and the restoration of my vision. For their caring attitude, professionalism, and support from the entire staff of the center. Special thanks to surgeon Zhuk A.M. and doctor Petrosova O.O.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/feedback3m.jpg",
        uk: {
            name: "Бойко Віталій Арсентійович",
            text: "Хочу висловити щиру подяку Британському офтальмологічному центру та особисто хірургу Рудяк Уляні Іванівні за високопрофесійну операцію із заміни кришталика. Сама операція пройшла швидко, безболісно та на високому рівні. Окремо хочу подякувати всьому медичному персоналу клініки за доброзичливе ставлення, організованість та комфортну атмосферу. Рекомендую Британський офтальмологічний центр усім, хто потребує якісної офтальмологічної допомоги.",
        },
        ru: {
            name: "Бойко Виталий Арсентьевич",
            text: "Хочу выразить искреннюю благодарность Британскому офтальмологическому центру и лично хирургу Рудяк Ульяне Ивановне за высокопрофессиональную операцию по замене хрусталика. Сама операция прошла быстро, безболезненно и на высоком уровне. Отдельно хочу поблагодарить весь медицинский персонал клиники за доброжелательное отношение, организованность и комфортную атмосферу. Рекомендую Британский офтальмологический центр всем, кто нуждается в качественной офтальмологической помощи.",
        },
        en: {
            name: "Boiko Vitalii Arsentiiovych",
            text: "I would like to express my sincere gratitude to the British Ophthalmology Center and personally to surgeon Uliana Ivanivna Rudiak for the highly professional lens replacement surgery. The procedure itself was quick, painless, and performed at the highest level. I would also like to thank the entire medical staff of the clinic for their kindness, organization, and welcoming atmosphere. I highly recommend the British Ophthalmology Center to everyone who needs quality ophthalmological care.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Вареник Валентина Дмитрівна",
            text: "В Британському офтальмологічному центру зробила операцію по видаленню катаракти, хочу сказати велике дякую всьому персоналу клініки. Спасибі за увагу, за добре відношення, супровід на всіх етапах. Всім велике дякую і бажаю найкращого у вашій роботі.",
        },
        ru: {
            name: "Вареник Валентина Дмитриевна",
            text: "В Британском офтальмологическом центре сделала операцию по удалению катаракты, хочу сказать большое спасибо всему персоналу клиники. Спасибо за внимание, доброе отношение, сопровождение на всех этапах. Всем огромное спасибо и желаю успехов в вашей работе.",
        },
        en: {
            name: "Varenyk Valentyna Dmytrivna",
            text: "I had cataract removal surgery at the British Ophthalmology Center and I want to say a big thank you to all the clinic staff. Thank you for your attention, kind attitude, and support at every stage. Many thanks to everyone and I wish you all the best in your work.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/feedback1m.jpg",
        uk: {
            name: "Якимчук Олена",
            text: "Дуже задоволена якістю сервісу та швидкістю результату клініки. Окрема вдячність моєму лікареві Бурдею Артему Вячеславовичу, за професіоналізм, підбадьорювання під час операції та уважне ставлення. Завдяки Вашим вмілим рукам та турботі я знову можу насолоджуватись чітким зором та повноцінним життям після 20-річного носіння лінз.",
        },
        ru: {
            name: "Якимчук Елена",
            text: "Очень довольна качеством сервиса и скоростью результата клиники. Отдельная благодарность моему врачу Бурдею Артему Вячеславовичу за профессионализм, поддержку во время операции и внимательное отношение. Благодаря вашим умелым рукам и заботе я снова могу наслаждаться чётким зрением и полноценной жизнью после 20 лет ношения линз.",
        },
        en: {
            name: "Yakymchuk Olena",
            text: "I am very satisfied with the quality of service and the speed of results at the clinic. Special thanks to my doctor, Artem Vyacheslavovych Burdey, for his professionalism, encouragement during the surgery, and attentive care. Thanks to your skilled hands and care, I can once again enjoy clear vision and a full life after 20 years of wearing lenses.",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        photo: "/feedbacks/feedback2m.jpg",
        uk: {
            name: "Брайченко Валерій Миколайович",
            text: "Висловлюю велику вдячність лікарям «Британського офтальмологічного центру» за бездоганний результат оперативного втручання по заміні кришталика і повернення зору. За чуйне ставлення, професіоналізм та підтримку всього персоналу центру. Велика подяка хірургу Жуку А.М. та лікарю Петросовій О.О.",
        },
        ru: {
            name: "Брайченко Валерий Николаевич",
            text: "Выражаю большую благодарность врачам «Британского офтальмологического центра» за безупречный результат оперативного вмешательства по замене хрусталика и возвращение зрения. За чуткое отношение, профессионализм и поддержку всего персонала центра. Огромная благодарность хирургу Жуку А.М. и врачу Петросовой О.О.",
        },
        en: {
            name: "Braichenko Valerii Mykolaiovych",
            text: "I would like to express my sincere gratitude to the doctors of the British Ophthalmology Center for the impeccable result of the lens replacement surgery and the restoration of my vision. For their caring attitude, professionalism, and support from the entire staff of the center. Special thanks to surgeon Zhuk A.M. and doctor Petrosova O.O.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/feedback3m.jpg",
        uk: {
            name: "Бойко Віталій Арсентійович",
            text: "Хочу висловити щиру подяку Британському офтальмологічному центру та особисто хірургу Рудяк Уляні Іванівні за високопрофесійну операцію із заміни кришталика. Сама операція пройшла швидко, безболісно та на високому рівні. Окремо хочу подякувати всьому медичному персоналу клініки за доброзичливе ставлення, організованість та комфортну атмосферу. Рекомендую Британський офтальмологічний центр усім, хто потребує якісної офтальмологічної допомоги.",
        },
        ru: {
            name: "Бойко Виталий Арсентьевич",
            text: "Хочу выразить искреннюю благодарность Британскому офтальмологическому центру и лично хирургу Рудяк Ульяне Ивановне за высокопрофессиональную операцию по замене хрусталика. Сама операция прошла быстро, безболезненно и на высоком уровне. Отдельно хочу поблагодарить весь медицинский персонал клиники за доброжелательное отношение, организованность и комфортную атмосферу. Рекомендую Британский офтальмологический центр всем, кто нуждается в качественной офтальмологической помощи.",
        },
        en: {
            name: "Boiko Vitalii Arsentiiovych",
            text: "I would like to express my sincere gratitude to the British Ophthalmology Center and personally to surgeon Uliana Ivanivna Rudiak for the highly professional lens replacement surgery. The procedure itself was quick, painless, and performed at the highest level. I would also like to thank the entire medical staff of the clinic for their kindness, organization, and welcoming atmosphere. I highly recommend the British Ophthalmology Center to everyone who needs quality ophthalmological care.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Вареник Валентина Дмитрівна",
            text: "В Британському офтальмологічному центру зробила операцію по видаленню катаракти, хочу сказати велике дякую всьому персоналу клініки. Спасибі за увагу, за добре відношення, супровід на всіх етапах. Всім велике дякую і бажаю найкращого у вашій роботі.",
        },
        ru: {
            name: "Вареник Валентина Дмитриевна",
            text: "В Британском офтальмологическом центре сделала операцию по удалению катаракты, хочу сказать большое спасибо всему персоналу клиники. Спасибо за внимание, доброе отношение, сопровождение на всех этапах. Всем огромное спасибо и желаю успехов в вашей работе.",
        },
        en: {
            name: "Varenyk Valentyna Dmytrivna",
            text: "I had cataract removal surgery at the British Ophthalmology Center and I want to say a big thank you to all the clinic staff. Thank you for your attention, kind attitude, and support at every stage. Many thanks to everyone and I wish you all the best in your work.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/feedback1m.jpg",
        uk: {
            name: "Якимчук Олена",
            text: "Дуже задоволена якістю сервісу та швидкістю результату клініки. Окрема вдячність моєму лікареві Бурдею Артему Вячеславовичу, за професіоналізм, підбадьорювання під час операції та уважне ставлення. Завдяки Вашим вмілим рукам та турботі я знову можу насолоджуватись чітким зором та повноцінним життям після 20-річного носіння лінз.",
        },
        ru: {
            name: "Якимчук Елена",
            text: "Очень довольна качеством сервиса и скоростью результата клиники. Отдельная благодарность моему врачу Бурдею Артему Вячеславовичу за профессионализм, поддержку во время операции и внимательное отношение. Благодаря вашим умелым рукам и заботе я снова могу наслаждаться чётким зрением и полноценной жизнью после 20 лет ношения линз.",
        },
        en: {
            name: "Yakymchuk Olena",
            text: "I am very satisfied with the quality of service and the speed of results at the clinic. Special thanks to my doctor, Artem Vyacheslavovych Burdey, for his professionalism, encouragement during the surgery, and attentive care. Thanks to your skilled hands and care, I can once again enjoy clear vision and a full life after 20 years of wearing lenses.",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        photo: "/feedbacks/feedback2m.jpg",
        uk: {
            name: "Брайченко Валерій Миколайович",
            text: "Висловлюю велику вдячність лікарям «Британського офтальмологічного центру» за бездоганний результат оперативного втручання по заміні кришталика і повернення зору. За чуйне ставлення, професіоналізм та підтримку всього персоналу центру. Велика подяка хірургу Жуку А.М. та лікарю Петросовій О.О.",
        },
        ru: {
            name: "Брайченко Валерий Николаевич",
            text: "Выражаю большую благодарность врачам «Британского офтальмологического центра» за безупречный результат оперативного вмешательства по замене хрусталика и возвращение зрения. За чуткое отношение, профессионализм и поддержку всего персонала центра. Огромная благодарность хирургу Жуку А.М. и врачу Петросовой О.О.",
        },
        en: {
            name: "Braichenko Valerii Mykolaiovych",
            text: "I would like to express my sincere gratitude to the doctors of the British Ophthalmology Center for the impeccable result of the lens replacement surgery and the restoration of my vision. For their caring attitude, professionalism, and support from the entire staff of the center. Special thanks to surgeon Zhuk A.M. and doctor Petrosova O.O.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/feedback3m.jpg",
        uk: {
            name: "Бойко Віталій Арсентійович",
            text: "Хочу висловити щиру подяку Британському офтальмологічному центру та особисто хірургу Рудяк Уляні Іванівні за високопрофесійну операцію із заміни кришталика. Сама операція пройшла швидко, безболісно та на високому рівні. Окремо хочу подякувати всьому медичному персоналу клініки за доброзичливе ставлення, організованість та комфортну атмосферу. Рекомендую Британський офтальмологічний центр усім, хто потребує якісної офтальмологічної допомоги.",
        },
        ru: {
            name: "Бойко Виталий Арсентьевич",
            text: "Хочу выразить искреннюю благодарность Британскому офтальмологическому центру и лично хирургу Рудяк Ульяне Ивановне за высокопрофессиональную операцию по замене хрусталика. Сама операция прошла быстро, безболезненно и на высоком уровне. Отдельно хочу поблагодарить весь медицинский персонал клиники за доброжелательное отношение, организованность и комфортную атмосферу. Рекомендую Британский офтальмологический центр всем, кто нуждается в качественной офтальмологической помощи.",
        },
        en: {
            name: "Boiko Vitalii Arsentiiovych",
            text: "I would like to express my sincere gratitude to the British Ophthalmology Center and personally to surgeon Uliana Ivanivna Rudiak for the highly professional lens replacement surgery. The procedure itself was quick, painless, and performed at the highest level. I would also like to thank the entire medical staff of the clinic for their kindness, organization, and welcoming atmosphere. I highly recommend the British Ophthalmology Center to everyone who needs quality ophthalmological care.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Вареник Валентина Дмитрівна",
            text: "В Британському офтальмологічному центру зробила операцію по видаленню катаракти, хочу сказати велике дякую всьому персоналу клініки. Спасибі за увагу, за добре відношення, супровід на всіх етапах. Всім велике дякую і бажаю найкращого у вашій роботі.",
        },
        ru: {
            name: "Вареник Валентина Дмитриевна",
            text: "В Британском офтальмологическом центре сделала операцию по удалению катаракты, хочу сказать большое спасибо всему персоналу клиники. Спасибо за внимание, доброе отношение, сопровождение на всех этапах. Всем огромное спасибо и желаю успехов в вашей работе.",
        },
        en: {
            name: "Varenyk Valentyna Dmytrivna",
            text: "I had cataract removal surgery at the British Ophthalmology Center and I want to say a big thank you to all the clinic staff. Thank you for your attention, kind attitude, and support at every stage. Many thanks to everyone and I wish you all the best in your work.",
        },
    },
];
