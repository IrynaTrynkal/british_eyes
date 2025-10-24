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
            text: "Я, Якимчук Олена проводила в Британському офтальмологічному центрі лазерну корекцію зору. \nДуже задоволена якістю сервісу та швидкістю результату клініки. Окрема вдячність моєму лікареві Бурдею Артему Вячеславовичу, за професіоналізм, підбадьорювання під час операції та уважне ставлення. Завдяки Вашим вмілим рукам та турботі я знову можу насолоджуватись чітким зором та повноцінним життям після 20-річного носіння лінз. \nБажаю Вам міцного здоров’я, професійних успіхів та вдячних пацієнтів. \nЗ вдячністю усій команді клініки, Олена Якимчук м. Рівне.",
        },
        ru: {
            name: "Якимчук Елена",
            text: "Я, Якимчук, Елена проводила в Британском офтальмологическом центре лазерную коррекцию зрения. \nОчень довольна качеством сервиса и скоростью результата клиники. Отдельная благодарность моему врачу Бурдею Артему Вячеславовичу за профессионализм, ободрение во время операции и внимательное отношение. Благодаря Вашим умелым рукам и заботе я снова могу наслаждаться четким зрением и полноценной жизнью после 20-летнего ношения линз. \nЖелаю Вам крепкого здоровья, профессиональных успехов и благодарных пациентов. \nС благодарностью всей команде клиники, Елена Якимчук г. Ровно.",
        },
        en: {
            name: "Yakymchuk Olena",
            text: "I, Yakymchuk Olena, underwent laser vision correction at the British Ophthalmological Center. \nI am very satisfied with the quality of service and the speed of the clinic's results. Special thanks to my doctor, Artem Vyacheslavovich Burdei, for his professionalism, encouragement during the operation, and attentive attitude. Thanks to your skillful hands and care, I can once again enjoy clear vision and a full life after 20 years of wearing lenses. \nI wish you good health, professional success, and grateful patients. \nWith gratitude to the entire team of the clinic, Olena Yakymchuk, Rivne.",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        photo: "/feedbacks/feedback2m.jpg",
        uk: {
            name: "Брайченко Валерій Миколайович",
            text: "Я, Брайченко Валерій Миколайович, висловлюю велику вдячність лікарям «Британського офтальмологічного центру» за бездоганний результат оперативного втручання по заміні кришталика і повернення зору. За чуйне ставлення, професіоналізм та підтримку всього персоналу центру. Велика подяка хірургу Гавура М.О. та лікарю Петросовій О.О.",
        },
        ru: {
            name: "Брайченко Валерий Николаевич",
            text: "Я, Брайченко Валерий Николаевич, выражаю большую благодарность врачам «Британского офтальмологического центра» за безупречный результат оперативного вмешательства по замене хрусталика и возвращение зрения. За чуткое отношение, профессионализм и поддержку всего персонала центра. Огромная благодарность хирургу Гавура М.А. и врачу Петросовой О.А.",
        },
        en: {
            name: "Braichenko Valerii Mykolaiovych",
            text: "I, Braichenko Valerii Mykolaiovych, express my deep gratitude to the doctors of the «British Ophthalmology Center» for the flawless result of the lens replacement surgery and the restoration of vision. For their attentive attitude, professionalism, and support of all the staff of the center. Special thanks to surgeon Havura M.O. and doctor Petrosova O.O.",
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
        service: "likuvannya-katarakti",
        photo: "/feedbacks/anshakova.webp",
        uk: {
            name: "Аншакова Тетяна Михайлівна",
            text: "Висловлюю безмежну подяку за виконання операції з видалення катаракти, головного лікаря Гавура М.О. Його високий професіоналізм та людяність вразили мене до глибини душі. Зустріти такий сорт лікаря – це дуже великий успіх. Низько кланяюсь батькам Гавура М.О. за виховання такого сина. Всім знайомим і незнайомим, які потребують офтальмологічної допомоги, рекомендуватиму звертатися до «Британського офтальмологічного центру». Дякую також всьому колективу центру за високу організованість.",
        },
        ru: {
            name: "Аншакова Татьяна Михайловна",
            text: "Выражаю безграничную благодарность за проведение операции по удалению катаракты главному врачу Гавура М.А. Его высокий профессионализм и человечность поразили меня до глубины души. Встретить такого врача – это огромная удача. Низко кланяюсь родителям Гавура М.А. за воспитание такого сына. Всем знакомым и незнакомым, которые нуждаются в офтальмологической помощи, буду рекомендовать обращаться в «Британский офтальмологический центр». Также благодарю весь коллектив центра за высокую организованность.",
        },
        en: {
            name: "Anshakova Tetiana Mykhailivna",
            text: "I express my immense gratitude to the chief doctor Havura M.O. for performing the cataract removal surgery. His high professionalism and humanity impressed me deeply. Meeting such a doctor is a great fortune. I bow low to the parents of Havura M.O. for raising such a son. To all acquaintances and strangers who need ophthalmological help, I will recommend turning to the «British Ophthalmology Center». I also thank the entire team of the center for their high level of organization.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/ibragimova.webp",
        uk: {
            name: "Ібрагімова Аліна Алімівна",
            text: "Прекрасный центр, работники вежливые. Все четко и сработано. Полное сопровождение «до» и «после» операции. После коррекции совсем новая жизнь начинается. Большое спасибо «Британскому офтальмологическому центру», за хорошую и качественную работу. Прекрасний центр, працівники ввічливі. Все чітко та спрацьовано. Повний супровід «до» та «після» операції. Після корекції нове життя починається. Велике спасибі «Британському офтальмологічному центру» за гарну та якісну роботу.",
        },
        ru: {
            name: "Ибрагимова Алина Алимовна",
            text: "Прекрасный центр, работники вежливые. Всё чётко и слаженно. Полное сопровождение «до» и «после» операции. После коррекции начинается совершенно новая жизнь. Большое спасибо «Британскому офтальмологическому центру» за качественную и профессиональную работу.",
        },
        en: {
            name: "Ibrahimova Alina Alimivna",
            text: "A wonderful center, the staff are polite. Everything is clear and well-coordinated. Complete support «before» and «after» the surgery. After the correction, a completely new life begins. Many thanks to the «British Ophthalmology Center» for their good and high-quality work.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Дворник.webp",
        uk: {
            name: "Двірник Микола Семенович",
            text: "18 листопада 2020 р. у «Британському офтальмологічному центрі» було зроблено першу операцію моїй дружині Двірник Валентині Іванівні, за заміною кришталика, видалення катаракти на правому оці. Результати були настільки успішними, що розвіяли всі страхи. Наступний крок до складнішої операції, катаракта лівого ока з початковою глаукомою. 8 грудня було зроблено другу операцію, з таким самим чудовим результатом, хоча для цього довелося докласти більше зусиль. Цього ж дня я проходив підготовку до операції на лівому оці діагнозом катаракту із ускладненнями. 15 грудня мені усунули катаракту з імплантацією ІОЛ. Менше ніж за місяць, «чарівники» центру зробили нашу родину щасливою. Всім співробітникам центру, які готували нас до операцій, велика подяка. А чудовому хірургу Олександру Борисовичу Богдановичу після такої підготовки залишалося зробити головне – високопрофесійно святу роботу хірурга. Всім, хто на сайті центру залишав відгуки про прекрасних фахівців усіх рівнів центру. Ми зробили правильний вибір. Порада тим, хто готується до операції – «Будьте оптимістами, довіртеся висококваліфікованим фахівцям, будьте доброзичливими один до одного, вірте в свій організм і Ваш мозок налаштує організм на одужання та на збереження тих результатів, які фахівці зробили, щоб Ви знову набули можливості БАЧИТИ!»",
        },
        ru: {
            name: "Двирник Николай Семёнович",
            text: "18 ноября 2020 г. в «Британском офтальмологическом центре» была проведена первая операция моей супруге Двирник Валентине Ивановне по замене хрусталика и удалению катаракты на правом глазу. Результаты были настолько успешными, что развеяли все страхи. Следующий шаг – более сложная операция, катаракта левого глаза с начальной глаукомой. 8 декабря была проведена вторая операция с таким же отличным результатом, хотя для этого потребовалось больше усилий. В этот же день я проходил подготовку к операции на левом глазу с диагнозом катаракта с осложнениями. 15 декабря мне удалили катаракту с имплантацией ИОЛ. Менее чем за месяц «волшебники» центра сделали нашу семью счастливой. Всем сотрудникам центра, которые готовили нас к операциям, огромная благодарность. А замечательному хирургу Александру Борисовичу Богдановичу после такой подготовки оставалось сделать главное – высокопрофессионально выполнить святую работу хирурга. Всем, кто на сайте центра оставлял отзывы о прекрасных специалистах всех уровней центра: мы сделали правильный выбор. Совет тем, кто готовится к операции – «Будьте оптимистами, доверьтесь высококвалифицированным специалистам, будьте доброжелательны друг к другу, верьте в свой организм, и ваш мозг настроит организм на выздоровление и сохранение тех результатов, которые сделали специалисты, чтобы вы снова обрели возможность ВИДЕТЬ!»",
        },
        en: {
            name: "Dvirnyk Mykola Semenovych",
            text: "On November 18, 2020, at the «British Ophthalmology Center», my wife, Dvirnyk Valentyna Ivanivna, underwent her first surgery — lens replacement and cataract removal on the right eye. The results were so successful that they dispelled all fears. The next step was a more complex surgery — cataract of the left eye with early glaucoma. On December 8, the second surgery was performed with the same excellent result, although it required more effort. On the same day, I was preparing for surgery on my left eye with a diagnosis of cataract with complications. On December 15, my cataract was removed with IOL implantation. In less than a month, the «magicians» of the center made our family happy. Many thanks to all the staff who prepared us for the surgeries. And to the wonderful surgeon Oleksandr Borysovych Bohdanovych, after such preparation, it remained only to do the main thing — to perform the sacred work of a surgeon with the highest professionalism. To everyone who left reviews on the center’s website about the excellent specialists of all levels — we made the right choice. My advice to those preparing for surgery: «Be optimistic, trust highly qualified specialists, be kind to each other, believe in your body, and your brain will tune your body for recovery and for preserving the results achieved by the specialists, so that you can SEE again!»",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Хоменко.webp",
        uk: {
            name: "Хоменко Анна Андріївна",
            text: "Дякую лікарям та медичному персоналу «Британського офтальмологічного центру» за здійснення найзаповітнішої мрії. Весь медичний персонал відноситься до пацієнтів з турботою та ніжністю. День операції був дуже серйозною та морально важкою подією, але завдяки підтримці лікарів, медичних сестер та адміністраторів закладу все пройшло спокійно з чистим розумом та холодними думками. Дякую тій жіночці, що тримала мою руку, коли робили лазерну корекцію, це було дуже круто, це саме те, що потрібно було тоді, в той момент, просто підтримка. Все професійно, комфортно та на вищому рівні! Ще раз велике дякую!",
        },
        ru: {
            name: "Хоменко Анна Андреевна",
            text: "Благодарю врачей и медицинский персонал «Британского офтальмологического центра» за исполнение самой заветной мечты. Весь персонал относится к пациентам с заботой и нежностью. День операции был очень серьёзным и морально тяжёлым событием, но благодаря поддержке врачей, медсестёр и администраторов всё прошло спокойно, с ясным разумом и холодными мыслями. Спасибо той женщине, которая держала меня за руку во время лазерной коррекции, это было очень круто, именно то, что нужно было в тот момент — просто поддержка. Всё профессионально, комфортно и на высшем уровне! Ещё раз огромное спасибо!",
        },
        en: {
            name: "Khomenko Anna Andriivna",
            text: "I would like to thank the doctors and medical staff of the «British Ophthalmology Center» for making my dearest dream come true. All the staff treat patients with care and tenderness. The day of surgery was a very serious and emotionally difficult event, but thanks to the support of the doctors, nurses, and administrators, everything went calmly, with a clear mind and cool thoughts. Special thanks to the lady who held my hand during the laser correction — it was really awesome, exactly what I needed at that moment, just support. Everything was professional, comfortable, and at the highest level! Once again, thank you very much!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Дубовець.webp",
        uk: {
            name: "Дубовець Євгеній Вікторович",
            text: "Хочу висловити величезну подяку лікарям та персоналу «Британського офтальмологічного центру» за їхнє ставлення та професіоналізм. Завдяки їм я можу бачити те, що здавалося розмитим і непоказним. Тепер світ став набагато красивішим! Дякую величезне!",
        },
        ru: {
            name: "Дубовец Евгений Викторович",
            text: "Хочу выразить огромную благодарность врачам и персоналу «Британского офтальмологического центра» за их отношение и профессионализм. Благодаря им я могу видеть то, что раньше казалось размытым и невыразительным. Теперь мир стал намного красивее! Огромное спасибо!",
        },
        en: {
            name: "Dubovets Yevhenii Viktorovych",
            text: "I would like to express my immense gratitude to the doctors and staff of the «British Ophthalmology Center» for their attitude and professionalism. Thanks to them, I can now see what once seemed blurry and indistinct. The world has become so much more beautiful! Thank you very much!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Іващенко.jpg",
        uk: {
            name: "Іващенко Надія Трохимівна",
            text: "Напередодні свята Святого Миколая, моя щира вдячність лікарю Андрію Миколайовичу за повернутий зір. Бажаю «Британському офтальмологічному центру» і надалі мати таких висококласних хірургів та доброзичливих працівників.",
        },
        ru: {
            name: "Иващенко Надежда Трофимовна",
            text: "В канун праздника Святого Николая выражаю искреннюю благодарность врачу Андрею Николаевичу за возвращённое зрение. Желаю «Британскому офтальмологическому центру» и впредь иметь таких высококлассных хирургов и доброжелательных сотрудников.",
        },
        en: {
            name: "Ivashchenko Nadiia Trokhymivna",
            text: "On the eve of St. Nicholas Day, I sincerely thank doctor Andrii Mykolaiovych for restoring my sight. I wish the «British Ophthalmology Center» to continue having such high-class surgeons and kind staff.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Сафронова.webp",
        uk: {
            name: "Сафронова Надія Василівна",
            text: "Я, Сафронова Надія Василівна, 1951р.н. прочитала на сайті «Британського офтальмологічного центру» м. Києва, що офтальмологи беруться навіть за складні випадки лікування катаракти. У Дніпропетровську після обстеження прогнози були невтішними, і я вирішила поїхати до Києва, хоча мене не розуміли і відмовляли. Тут я зустріла людей, які теж шукали порятунку свого зору після не дуже вдалого досвіду. Операцію провели в 2 етапи, запущена катаракта не дозволяла бачити сітківку і т. д. (1.12.2020). 3.12.2020 провели імплантацію інтраокулярної лінзи, і дякувати Богу, я бачу 90%. Сьогодні, 16.12.2020 на післяопераційному огляді 2 очі – 70%. Пройдуть набряки, адаптація, і відчуття повернулося, у мене гарний зір, добрий стан. Лікар від Бога! Богданович Олександре Борисовичу! Його золоті руки – гордість офтальмології України та світу. Він запровадив свою професію у ранг мистецтва. Клініка (Британська), кафедра інституту Богомольця (як символічно), де все продумано до дрібниць. Аналізи, у нелегкий час Covida, усі норми, стандарти дезінфекції, маски, бахіли, туалет, де не потрібно нічого торкатися… Все працює від дверей, як увійшли до клініки, так Вас скрізь супроводжують (театр починається з вішалки). Тут можна залишити речі в гардеробі, в скриньці перед операцією, все спокійно, дбайливо, персонал підібраний ідеально, технологія огляду, передопераційна підготовка, чудова медсестра Тетяна, в операційній Яна уважна та професійна. Без зайвих стресів усі процедури. За величезну подяку головному лікарю. Я дуже рада, і щаслива, і вдячна, що Бог привів мене до цієї клініки. Рідко буваєш повністю задоволений будь-якою дією, що зараз відбувається в нашому житті, тому й не могла стримати слова Подяки. Та й навіщо? Ми не повинні бути скупими хоча б на слова Подяки. Величезний зв'язок у позитивному ключі передає добру подію іншим.",
        },
        ru: {
            name: "Сафронова Надежда Васильевна",
            text: "Я, Сафронова Надежда Васильевна, 1951 г.р., прочитала на сайте «Британского офтальмологического центра» г. Киева, что офтальмологи берутся даже за сложные случаи лечения катаракты. В Днепропетровске после обследования прогнозы были неутешительными, и я решила поехать в Киев, хотя меня не понимали и отговаривали. Здесь я встретила людей, которые тоже искали спасение своего зрения после неудачного опыта. Операцию провели в 2 этапа: запущенная катаракта не позволяла видеть сетчатку и т. д. (1.12.2020). 3.12.2020 провели имплантацию интраокулярной линзы, и, слава Богу, я вижу на 90%. Сегодня, 16.12.2020, на послеоперационном осмотре два глаза – 70%. Пройдут отёки, адаптация, и вернулось ощущение — у меня хороший зрение и состояние. Врач от Бога! Богданович Александр Борисович! Его золотые руки – гордость офтальмологии Украины и мира. Он возвёл свою профессию в ранг искусства. Клиника (Британская), кафедра института Богомольца (как символично), где всё продумано до мелочей. Анализы, в непростое время Covid, все нормы, стандарты дезинфекции, маски, бахилы, туалет, где не нужно ничего трогать… Всё работает от дверей: как вошли в клинику, так вас везде сопровождают (театр начинается с вешалки). Здесь можно оставить вещи в гардеробе, в ячейке перед операцией, всё спокойно, заботливо. Персонал подобран идеально: технология осмотра, предоперационная подготовка, прекрасная медсестра Татьяна, в операционной Яна внимательная и профессиональная. Все процедуры без лишнего стресса. Огромная благодарность главному врачу. Я очень рада, счастлива и благодарна, что Бог привёл меня в эту клинику. Редко бывает, что полностью удовлетворён любым действием, происходящим сейчас в нашей жизни, поэтому я не могла сдержать слова Благодарности. Да и зачем? Мы не должны быть скупыми хотя бы на слова Благодарности. Огромная связь в позитивном ключе передаёт доброе событие другим.",
        },
        en: {
            name: "Safronova Nadiia Vasylivna",
            text: "I, Safronova Nadiia Vasylivna, born in 1951, read on the website of the «British Ophthalmology Center» in Kyiv that ophthalmologists take on even complex cases of cataract treatment. In Dnipro, after examination, the prognosis was discouraging, and I decided to go to Kyiv, although people did not understand me and tried to dissuade me. Here I met people who were also seeking to save their eyesight after not very successful experiences. The surgery was performed in 2 stages: the advanced cataract did not allow the retina to be seen, etc. (1.12.2020). On 3.12.2020, intraocular lens implantation was performed, and thank God, I see 90%. Today, 16.12.2020, at the postoperative examination, both eyes – 70%. The swelling and adaptation will pass, and I feel good, with excellent vision. A doctor sent by God! Oleksandr Borysovych Bohdanovych! His golden hands are the pride of ophthalmology in Ukraine and the world. He has elevated his profession to the rank of art. The clinic (British), the department of Bohomolets Institute (so symbolic), where everything is thought out to the smallest detail. Tests, in the difficult times of Covid, all norms, disinfection standards, masks, shoe covers, a restroom where you don’t need to touch anything… Everything works from the door: as soon as you enter the clinic, you are accompanied everywhere (the theater begins with the coat check). Here you can leave things in the cloakroom, in a locker before surgery, everything is calm and careful. The staff is ideally selected: examination technology, preoperative preparation, wonderful nurse Tetiana, and attentive, professional Yana in the operating room. All procedures without unnecessary stress. Immense thanks to the chief doctor. I am very glad, happy, and grateful that God led me to this clinic. It is rare to be fully satisfied with any action happening in our lives now, so I could not hold back words of Gratitude. And why should I? We should not be stingy, at least with words of Gratitude. A huge positive connection conveys this good event to others.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Скидина.webp",
        uk: {
            name: "Скидіна Валентина Григорівна",
            text: "«У людині має бути все чудово» А.П.Чехов. Це про медиків «Британського офтальмологічного центру». Хочу сказати добрі слова подяки людям, із якими мені довелося спілкуватися. Хірург - Богданович Олександр Борисович. Шановний Олександре Борисовичу, Ваше прізвище говорить за Вас. Ви АНГЕЛ БОГОМ присланий на землю дарувати людям світло, перемагати темряву. Ви - профі з безліччю знаків оклику, впевнений у собі, строга, добра, красива людина. За це Вас поважають, цінують, люблять Ваші пацієнти, співробітники та люди у житті яких Ви є. У Вас чудові помічники, анестезіологи: Владислав Валерійович, Максим Анатолійович, діагност – Рощин Павло Ігорович. Професійно, чітко з ніжністю у погляді виконував свою роботу. А середній медперсонал – просто бджілки. Швидко, злагоджено, професійно виконують свою роботу. Руки у них – легкі, голки – гострі. Ще стали просто рідними – Чубко Світлана Костянтинівна, Полякова Галина Іванівна, Акуленко Ірина Федорівна. У всіх цих людей величезне серце, сповнене непідробної, щирої любові до людей, професії. До пацієнтів вони ставляться, як до новонароджених діток, з теплотою, повагою, ласкою. Особливо це приємно людям мого віку. «Люди в білих халатах, низько Вам вклониться хочу»! Якого кольору не були б Ваші халати, Ви завжди будете в БІЛОМУ, тому що Ви несете людям світло, добро, надію. Ви найкращі!",
        },
        ru: {
            name: "Скидина Валентина Григорьевна",
            text: "«В человеке всё должно быть прекрасно» А.П. Чехов. Это про медиков «Британского офтальмологического центра». Хочу сказать добрые слова благодарности людям, с которыми мне довелось общаться. Хирург – Богданович Александр Борисович. Уважаемый Александр Борисович, ваша фамилия говорит сама за себя. Вы АНГЕЛ, БОГОМ посланный на землю дарить людям свет и побеждать тьму. Вы – профи с множеством восклицательных знаков, уверенный в себе, строгий, добрый, красивый человек. За это вас уважают, ценят и любят ваши пациенты, сотрудники и люди, в жизни которых вы есть. У вас замечательные помощники – анестезиологи Владислав Валерьевич, Максим Анатольевич, диагност – Рощин Павел Игоревич. Профессионально, чётко и с теплотой в глазах выполнял свою работу. А средний медперсонал – просто пчёлки. Быстро, слаженно, профессионально выполняют свою работу. У них лёгкие руки, острые иглы. Стали родными – Чубко Светлана Константиновна, Полякова Галина Ивановна, Акуленко Ирина Фёдоровна. У всех этих людей огромное сердце, наполненное искренней любовью к людям и профессии. К пациентам они относятся, как к новорождённым детям – с теплом, уважением, лаской. Особенно это приятно людям моего возраста. «Люди в белых халатах, низко вам поклониться хочу»! Какого бы цвета ни были ваши халаты, вы всегда будете в БЕЛОМ, потому что несёте людям свет, добро, надежду. Вы лучшие!",
        },
        en: {
            name: "Skidina Valentyna Hryhorivna",
            text: "«Everything in a person should be beautiful» – A.P. Chekhov. This is about the doctors of the «British Ophthalmology Center». I would like to say kind words of gratitude to the people I had the chance to communicate with. Surgeon – Oleksandr Borysovych Bohdanovych. Dear Oleksandr Borysovych, your surname speaks for itself. You are an ANGEL sent by God to bring light to people and to overcome darkness. You are a professional with countless exclamation marks, a confident, strict, kind, and beautiful person. For this, you are respected, valued, and loved by your patients, colleagues, and the people in whose lives you are present. You have wonderful assistants – anesthesiologists: Vladyslav Valeriiovych, Maksym Anatoliiovych, and diagnostician Pavlo Ihorovych Roshchyn. He performed his work professionally, clearly, and with warmth in his eyes. And the nursing staff are like bees – working quickly, harmoniously, and professionally. Their hands are light, their needles sharp. They became like family – Svitlana Kostiantynivna Chubko, Halyna Ivanivna Poliakhova, Iryna Fedorivna Akulenko. All these people have huge hearts, filled with genuine, sincere love for people and their profession. They treat patients like newborn children – with warmth, respect, and affection. This is especially precious to people of my age. «People in white coats, I want to bow low to you»! Whatever color your coats may be, you will always be in WHITE, because you bring people light, kindness, and hope. You are the best!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Бакал.jpg",
        uk: {
            name: "Бакал Володимир Федорович",
            text: "Від щирого серця дякую лікарю Богдановичу Олександру Борисовичу та персоналу «Британського офтальмологічного центру» за професіоналізм, чуйність і відданість своїй справі. Мені було успішно проведено операцію з видалення катаракти і тепер насолоджуюся можливістю знову бачити. Ускладнена катаракта призвела до сліпоти. І лише завдяки дивовижній майстерності Олександра Борисовича він знову бачить. Зір відновився до 100%. Ще раз дякую!",
        },
        ru: {
            name: "Бакал Владимир Федорович",
            text: "От всего сердца благодарю врача Богдановича Александра Борисовича и персонал «Британского офтальмологического центра» за профессионализм, чуткость и преданность своему делу. Мне успешно провели операцию по удалению катаракты, и теперь я наслаждаюсь возможностью снова видеть. Осложнённая катаракта привела к слепоте. И только благодаря удивительному мастерству Александра Борисовича я снова вижу. Зрение восстановилось до 100%. Ещё раз спасибо!",
        },
        en: {
            name: "Bakal Volodymyr Fedorovych",
            text: "From the bottom of my heart, I thank Dr. Oleksandr Borysovych Bohdanovych and the staff of the «British Ophthalmological Center» for their professionalism, sensitivity, and dedication to their work. I successfully underwent cataract removal surgery and now enjoy the ability to see again. Complicated cataract had led to blindness. And only thanks to the remarkable skill of Dr. Oleksandr Borysovych, I can see again. My vision has been restored to 100%. Thank you once again!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Рощина.webp",
        uk: {
            name: "Рощина Катерина Олександрівна",
            text: "Зробила лазерну корекцію зору і хочу сказати, що дуже задоволена результатом, гострота зору відновилась вже через 4 години! Я хочу подякувати лікарям «Британського офтальмологічного центру» за відновлення зору і гарне обслуговування пацієнтів. Швидко та зручно – девіз цього центру. Дякую Вам!",
        },
        ru: {
            name: "Рощина Екатерина Александровна",
            text: "Сделала лазерную коррекцию зрения и хочу сказать, что очень довольна результатом, острота зрения восстановилась уже через 4 часа! Хочу поблагодарить врачей «Британского офтальмологического центра» за восстановление зрения и отличное обслуживание пациентов. Быстро и удобно – девиз этого центра. Спасибо Вам!",
        },
        en: {
            name: "Roshchyna Kateryna Oleksandrivna",
            text: "I had laser vision correction and I want to say that I am very satisfied with the result – my visual acuity was restored within just 4 hours! I would like to thank the doctors of the «British Ophthalmological Center» for restoring my vision and providing excellent patient care. Fast and convenient – that is the motto of this center. Thank you!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Надолинный.webp",
        uk: {
            name: "Надоліний Артем Романович",
            text: "Хочу висловити подяку «Британському офтальмологічному центру» та особливо Бурдею Артему В'ячеславовичу. Лікар провів операцію за дуже складних умов, т.я. я йому постійно заважав постійними сторонніми рухами головою, внаслідок своєї рефлексії та реакції навіть на найменші дотики до очей. Через кілька днів після операції, зір обох очах 120%. До операції було -2 на обох очах. Дуже дякую за можливість бачити чітко та добре! «Британському офтальмологічному центру» та Бурдею Артему В'ячеславовичу бажаю процвітання, благополуччя та подальших професійних успіхів.",
        },
        ru: {
            name: "Надолинный Артём Романович",
            text: "Хочу выразить благодарность «Британскому офтальмологическому центру» и особенно Бурдею Артёму Вячеславовичу. Врач провёл операцию в очень сложных условиях, так как я постоянно мешал ему непроизвольными движениями головой из-за своей рефлексии и реакции даже на малейшие прикосновения к глазам. Через несколько дней после операции зрение на обоих глазах 120%. До операции было -2 на обоих глазах. Огромное спасибо за возможность видеть чётко и хорошо! «Британскому офтальмологическому центру» и Бурдею Артёму Вячеславовичу желаю процветания, благополучия и дальнейших профессиональных успехов.",
        },
        en: {
            name: "Nadolinyi Artem Romanovych",
            text: "I would like to express my gratitude to the «British Ophthalmological Center» and especially to Dr. Artem Vyacheslavovych Burdei. The doctor performed the surgery under very difficult conditions, as I constantly interfered with involuntary head movements due to my reflexes and reaction even to the slightest touch to my eyes. A few days after the surgery, my vision in both eyes was 120%. Before the surgery, it was -2 in both eyes. Thank you very much for the opportunity to see clearly and well! I wish the «British Ophthalmological Center» and Dr. Artem Vyacheslavovych Burdei prosperity, well-being, and further professional success.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Будурова.webp",
        uk: {
            name: "Будурова Парасковія Харлампівна",
            text: "Дякую за обслуговування, професіоналізм і за прекрасне ставлення. Лазерна корекція зору – це дуже серйозний крок для мене, професіоналізм лікарів допоміг упоратися зі страхом та невпевненістю. Чудовий «Британський офтальмологічний центр»! Дякую!",
        },
        ru: {
            name: "Будурова Парасковия Харлампиевна",
            text: "Спасибо за обслуживание, профессионализм и прекрасное отношение. Лазерная коррекция зрения – это очень серьёзный шаг для меня, профессионализм врачей помог справиться со страхом и неуверенностью. Замечательный «Британский офтальмологический центр»! Спасибо!",
        },
        en: {
            name: "Budurova Paraskoviia Kharlampivna",
            text: "Thank you for the service, professionalism, and wonderful attitude. Laser vision correction is a very serious step for me, and the professionalism of the doctors helped me overcome fear and insecurity. Wonderful «British Ophthalmology Center»! Thank you!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Зольникова.webp",
        uk: {
            name: "Зольнікова Катерина Сергіївна",
            text: "Доброго дня, я зробила лазерну корекцію зору у «Британському офтальмологічному центрі» 15.07.2020. На момент «до» корекції - зір було -5.75 на обидва ока. Я дуже задоволена! Якість, сервіс та обслуговування на найвищому рівні. Дякую за мир без лінз та окулярів!",
        },
        ru: {
            name: "Зольникова Екатерина Сергеевна",
            text: "Добрый день, я сделала лазерную коррекцию зрения в «Британском офтальмологическом центре» 15.07.2020. На момент «до» коррекции зрение было -5.75 на оба глаза. Я очень довольна! Качество, сервис и обслуживание на высшем уровне. Спасибо за мир без линз и очков!",
        },
        en: {
            name: "Zolnikova Kateryna Serhiivna",
            text: "Good afternoon, I had laser vision correction at the «British Ophthalmology Center» on 15.07.2020. Before the correction, my vision was -5.75 in both eyes. I am very satisfied! The quality, service, and care are at the highest level. Thank you for a world without lenses and glasses!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Коломоец.webp",
        uk: {
            name: "Коломоєць Марія Василівна",
            text: "Коригування зору вирішила робити раптово, за рекомендацією подруги. Мені дуже сподобався Британський офтальмологічний центр, оскільки тут дуже сучасно, чисто і добре все організовано. Страху перед операцією не було. Сама операція зайняла п'ять хвилин, болісні відчуття після закінчення дії наркозу тривала дві години. Хочу подякувати персоналу за чітку організовану роботу та за професіоналізм!",
        },
        ru: {
            name: "Коломоец Мария Васильевна",
            text: "Коррекцию зрения решила сделать внезапно, по рекомендации подруги. Мне очень понравился Британский офтальмологический центр, так как здесь всё очень современно, чисто и хорошо организовано. Страха перед операцией не было. Сама операция заняла пять минут, болезненные ощущения после окончания действия наркоза длились два часа. Хочу поблагодарить персонал за чёткую организованную работу и профессионализм!",
        },
        en: {
            name: "Kolomoiets Mariia Vasylivna",
            text: "I decided to have vision correction suddenly, on a friend’s recommendation. I really liked the British Ophthalmology Center because it is very modern, clean, and well organized. I had no fear before the surgery. The procedure itself took five minutes, and the painful sensations after the anesthesia wore off lasted two hours. I would like to thank the staff for their well-organized work and professionalism!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Скирчак.webp",
        uk: {
            name: "Скирчак Тетяна Вікторівна",
            text: "Шок, діагноз відшарування сітківки правого ока. Розуміли, що операція серйозна та складна. Але ми були повністю впевнені, що краще та надійніше місце, ніж «Британський офтальмологічний центр» у Києві, знайти неможливо. Ми мали рацію. Я від щирого серця і всієї душі висловлюю величезну подяку за оперативно злагоджену роботу, чітку послідовність дій за проведену мені операцію головним лікарем Гавура М.О. та його згуртованою командою-професіоналів: лікарю-офтальмологу Богдановичу А.Б., медсестрам, анестезіологу (анестезію підібрано було грамотно). Дякуємо Вам за доброту, чуйність, моральну підтримку! Гавура М.О. – кваліфікований хірург, лікар із великої літери! Дякую за Вашу Шляхетну працю, самовіддачу! Бажаю Вам міцного здоров'я, невичерпного оптимізму, процвітання та сонячного настрою! Дякую велике всьому персоналу! Ви найкращі!",
        },
        ru: {
            name: "Скирчак Татьяна Викторовна",
            text: "Шок, диагноз – отслоение сетчатки правого глаза. Мы понимали, что операция серьёзная и сложная. Но мы были полностью уверены, что лучше и надёжнее места, чем «Британский офтальмологический центр» в Киеве, найти невозможно. Мы были правы. От всего сердца и души выражаю огромную благодарность за оперативную и слаженную работу, чёткую последовательность действий при проведении мне операции главным врачом Гавурой М.А. и его сплочённой командой профессионалов: врачу-офтальмологу Богдановичу А.Б., медсёстрам, анестезиологу (анестезия была подобрана грамотно). Спасибо Вам за доброту, чуткость, моральную поддержку! Гавура М.А. – квалифицированный хирург, врач с большой буквы! Спасибо за Ваш благородный труд, самоотдачу! Желаю Вам крепкого здоровья, неиссякаемого оптимизма, процветания и солнечного настроения! Огромное спасибо всему персоналу! Вы лучшие!",
        },
        en: {
            name: "Skyrchak Tetiana Viktorivna",
            text: "Shock, diagnosis: retinal detachment of the right eye. We understood that the surgery was serious and complex. But we were absolutely sure that there is no better and more reliable place than the «British Ophthalmology Center» in Kyiv. We were right. From the bottom of my heart and soul, I express my immense gratitude for the prompt and well-coordinated work, the clear sequence of actions during my surgery performed by Chief Doctor Havura M.O. and his dedicated team of professionals: ophthalmologist Bohdanovych A.B., nurses, and anesthesiologist (the anesthesia was selected properly). Thank you for your kindness, sensitivity, and moral support! Havura M.O. is a highly qualified surgeon, a Doctor with a capital letter! Thank you for your noble work and dedication! I wish you strong health, inexhaustible optimism, prosperity, and a sunny spirit! Many thanks to the entire staff! You are the best!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Щербань.webp",
        uk: {
            name: "Щербань Юлія Миколаївна",
            text: "Я зробила лазерну корекцію зору у «Британському офтальмологічному центрі». Сподобалось гарне відношення всього персоналу починаючи з гардеробної закінчуючи лікарями. Зір ще не відновився повністю, але на діагностиці сказали, що слід ще почекати. Дякую за гарний сервіс!",
        },
        ru: {
            name: "Щербань Юлия Николаевна",
            text: "Я сделала лазерную коррекцию зрения в «Британском офтальмологическом центре». Понравилось хорошее отношение всего персонала, начиная с гардероба и заканчивая врачами. Зрение ещё не восстановилось полностью, но на диагностике сказали, что нужно подождать. Спасибо за хороший сервис!",
        },
        en: {
            name: "Shcherban Yuliia Mykolaivna",
            text: "I had laser vision correction at the «British Ophthalmology Center». I liked the good attitude of all the staff, from the cloakroom to the doctors. My vision has not yet fully recovered, but during the diagnostics they said I should wait a little longer. Thank you for the good service!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Рябина.webp",
        uk: {
            name: "Рябіна Валерія Ростиславівна",
            text: "Хочу подякувати всьому персоналу «Британського офтальмологічного центру» за професіоналізм та за відмінний зір, який я тепер маю. Мені дуже приємно побувати у Вашому центрі. Я бажаю Вам подальшого процвітання та розвитку! Дякую Вам від щирого серця!",
        },
        ru: {
            name: "Рябина Валерия Ростиславовна",
            text: "Хочу поблагодарить весь персонал «Британского офтальмологического центра» за профессионализм и за отличный зрение, которое я теперь имею. Мне было очень приятно побывать в вашем центре. Желаю вам дальнейшего процветания и развития! Спасибо вам от всего сердца!",
        },
        en: {
            name: "Riabina Valeriia Rostyslavivna",
            text: "I would like to thank all the staff of the «British Ophthalmology Center» for their professionalism and for the excellent vision I now have. It was a great pleasure to visit your center. I wish you further prosperity and growth! Thank you from the bottom of my heart!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Старовойт.webp",
        uk: {
            name: "Старовойт Олександр Володимирович",
            text: "Я дуже задоволений. Неймовірний погляд після операції у «Британському офтальмологічному центрі» на довкілля. Дуже вдячний лікарям за неймовірний зір.",
        },
        ru: {
            name: "Старовойт Александр Владимирович",
            text: "Я очень доволен. Невероятный взгляд на окружающий мир после операции в «Британском офтальмологическом центре». Очень благодарен врачам за невероятное зрение.",
        },
        en: {
            name: "Starovoit Oleksandr Volodymyrovych",
            text: "I am very satisfied. An incredible view of the world around me after surgery at the «British Ophthalmology Center». I am very grateful to the doctors for my amazing vision.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Шевченко.webp",
        uk: {
            name: "Шевченко Віра Петрівна",
            text: "Дуже вдячна за професіоналізм, сервіс та відмінну якість обслуговування. Лікар провела процедуру корекції зору досить швидко та якісно, ​​незважаючи на фізіологічну особливість маленького розрізу очей. Рекомендую всім Британський офтальмологічний центр, хто досі боїться зробити процедуру та жити повноцінним життям.",
        },
        ru: {
            name: "Шевченко Вера Петровна",
            text: "Очень благодарна за профессионализм, сервис и отличное качество обслуживания. Врач провела процедуру коррекции зрения достаточно быстро и качественно, несмотря на физиологическую особенность маленького разреза глаз. Рекомендую всем Британский офтальмологический центр, кто до сих пор боится сделать процедуру и жить полноценной жизнью.",
        },
        en: {
            name: "Shevchenko Vira Petrivna",
            text: "I am very grateful for the professionalism, service, and excellent quality of care. The doctor performed the vision correction procedure quickly and efficiently, despite the physiological feature of a small eye cut. I recommend the British Ophthalmology Center to everyone who is still afraid to undergo the procedure and start living a full life.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Вежнин.webp",
        uk: {
            name: "Вежнін Дмитро",
            text: "Я досі шокований тим, як всього за 10 хвилин в операційній змінилося моє життя! Нарешті я можу не носити окуляри, контактні лінзи, насолоджуватися виглядом навколишнього світу щохвилини. Рішення зробити лазерну корекцію було найкращим рішенням у моєму житті за останні 5 років. Якщо хтось зараз читає цей відгук, то рекомендую жодної хвилини не сумніватися та погоджуватися на операцію. Всім щастя, удачі та відмінного зору! Велике спасибі лікарям «Британського офтальмологічного центру» за турботу та добре проведену операцію.",
        },
        ru: {
            name: "Вежнин Дмитрий",
            text: "Я до сих пор шокирован тем, как всего за 10 минут в операционной изменилась моя жизнь! Наконец-то я могу не носить очки, контактные линзы, наслаждаться видом окружающего мира каждую минуту. Решение сделать лазерную коррекцию было лучшим решением в моей жизни за последние 5 лет. Если кто-то сейчас читает этот отзыв, то рекомендую ни минуты не сомневаться и соглашаться на операцию. Всем счастья, удачи и отличного зрения! Большое спасибо врачам «Британского офтальмологического центра» за заботу и хорошо проведённую операцию.",
        },
        en: {
            name: "Vezhnin Dmytro",
            text: "I am still shocked by how, in just 10 minutes in the operating room, my life completely changed! At last, I no longer need glasses or contact lenses, and I can enjoy the beauty of the world every moment. The decision to undergo laser correction was the best decision I’ve made in the last 5 years. If someone is reading this review now, I strongly recommend not hesitating for even a minute and agreeing to the surgery. Wishing everyone happiness, good luck, and excellent vision! Many thanks to the doctors of the «British Ophthalmological Center» for their care and the well-performed surgery.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Шаповалов.webp",
        uk: {
            name: "Шаповалов Ярослав Олегович",
            text: "Хочу залишити свій відгук про «Британський офтальмологічний центр» та подякувати лікарям за чудово виконану роботу, персонал за швидке та ввічливе обслуговування. Рекомендуватиму, «Британський офтальмологічний центр» своїм знайомим.",
        },
        ru: {
            name: "Шаповалов Ярослав Олегович",
            text: "Хочу оставить свой отзыв о «Британском офтальмологическом центре» и поблагодарить врачей за прекрасно выполненную работу, а персонал за быстрое и вежливое обслуживание. Буду рекомендовать «Британский офтальмологический центр» своим знакомым.",
        },
        en: {
            name: "Shapovalov Yaroslav Olehhovych",
            text: "I would like to leave my feedback about the «British Ophthalmological Center» and thank the doctors for their excellent work, and the staff for their prompt and courteous service. I will recommend the «British Ophthalmological Center» to my friends.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/ДворникS.webp",
        uk: {
            name: "Двірник Сергій Васильович",
            text: "Хочемо висловити величезну подяку доктору Богдановичу Олександру Борисовичу за успішно проведену операцію видалення катаракти. Мій тато близько 6 років тому почав втрачати зір і вже не сподівався, що зможе побачити яскраві фарби, чіткі контури та обличчя дітей та онуків. Коли ми записалися на діагностику, нас приємно здивували комфортні умови прийому пацієнтів, поважне ставлення та ведення пацієнтів. Величезна подяка лікарю та всьому персоналу «Британського офтальмологічного центру». Тату прооперували обидва ока без болю, без ускладнень, анестезіологу окрема подяка та уклін за турботу та супровід в операції. Зараз тато бачить чудово та радіє всьому побаченому щодня як дитя! Спасибі Олександре Борисовичу! Дякую всьому персоналу «Британського офтальмологічного центру»!",
        },
        ru: {
            name: "Дворник Сергей Васильевич",
            text: "Хотим выразить огромную благодарность доктору Богдановичу Александру Борисовичу за успешно проведённую операцию по удалению катаракты. Мой отец около 6 лет назад начал терять зрение и уже не надеялся, что сможет снова увидеть яркие краски, чёткие контуры и лица детей и внуков. Когда мы записались на диагностику, нас приятно удивили комфортные условия приёма, уважительное отношение и ведение пациентов. Огромная благодарность врачу и всему персоналу «Британского офтальмологического центра». Папе прооперировали оба глаза без боли и осложнений, отдельная благодарность и поклон анестезиологу за заботу и сопровождение во время операции. Сейчас отец прекрасно видит и радуется всему увиденному каждый день как ребёнок! Спасибо, Александр Борисович! Спасибо всему персоналу «Британского офтальмологического центра»!",
        },
        en: {
            name: "Dvirnyk Serhii Vasylovych",
            text: "We would like to express our deep gratitude to Dr. Oleksandr Borysovych Bohdanovych for successfully performing cataract removal surgery. About 6 years ago, my father began to lose his sight and no longer believed he would ever see bright colors, clear contours, and the faces of his children and grandchildren again. When we scheduled a diagnostic appointment, we were pleasantly surprised by the comfortable conditions, respectful attitude, and attentive patient care. Our great thanks to the doctor and all the staff of the «British Ophthalmological Center». My father underwent surgery on both eyes without pain or complications, with special thanks and deep respect to the anesthesiologist for the care and support during surgery. Now my father sees wonderfully and rejoices in everything he sees every day like a child! Thank you, Oleksandr Borysovych! Thanks to all the staff of the «British Ophthalmological Center»!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Федоренко.jpg",
        uk: {
            name: "Федоренко Ольга",
            text: "Хочу подякувати Гавура М.О. (вкрай компетентному лікарю та приємній людині) та клініці загалом за лікування моєї мами, Федоренко Ольги! Їй було проведено дві операції на лівому оці: 22.10.2019 вітреоретинальна хірургія макули (розрив сітківки) та 15.01.2020 заміна кришталика. Дякую, що моя мама може знову бачити!",
        },
        ru: {
            name: "Федоренко Ольга",
            text: "Хочу поблагодарить Гавуру М.А. (крайне компетентного врача и приятного человека) и клинику в целом за лечение моей мамы, Федоренко Ольги! Ей были проведены две операции на левом глазу: 22.10.2019 витреоретинальная хирургия макулы (разрыв сетчатки) и 15.01.2020 замена хрусталика. Спасибо, что моя мама снова может видеть!",
        },
        en: {
            name: "Fedorenko Olha",
            text: "I would like to thank Havura M.O. (an extremely competent doctor and a pleasant person) and the clinic as a whole for treating my mother, Fedorenko Olha! She underwent two surgeries on her left eye: on 22.10.2019 vitreoretinal macular surgery (retinal tear) and on 15.01.2020 lens replacement. Thank you that my mother can see again!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Чалова.webp",
        uk: {
            name: "Чалова Людмила Григорівна",
            text: "Велике спасибі доктору Верещагіну Миколі Петровичу за його золоті руки та чудове ставлення до пацієнтів. Усьому персоналу «Британського офтальмологічного центру» за їхнє ставлення до хворих та добрі серця. Успіхів Вам усім у житті та процвітання! Будьте щасливі!",
        },
        ru: {
            name: "Чалова Людмила Григорьевна",
            text: "Огромное спасибо доктору Верещагину Николаю Петровичу за его золотые руки и замечательное отношение к пациентам. Всему персоналу «Британского офтальмологического центра» за их отношение к больным и добрые сердца. Успехов вам всем в жизни и процветания! Будьте счастливы!",
        },
        en: {
            name: "Chalova Liudmyla Hryhorivna",
            text: "Many thanks to Dr. Vereshchagin Mykola Petrovych for his golden hands and wonderful attitude toward patients. To all the staff of the «British Ophthalmology Center» for their care for the sick and their kind hearts. I wish you all success in life and prosperity! Be happy!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Коковіхіна.jpg",
        uk: {
            name: "Коковихіна Олена Сергіївна",
            text: "Красно дякую за набуту здатність чітко сприймати цей світ, бачити дрібні деталі. Велика подяка всьому персоналу Британського офтальмологічного центру, які змогли зробити це можливим для мене. Дякую!",
        },
        ru: {
            name: "Коковихина Елена Сергеевна",
            text: "Огромное спасибо за приобретённую способность ясно воспринимать этот мир, видеть мелкие детали. Большая благодарность всему персоналу Британского офтальмологического центра, которые смогли сделать это возможным для меня. Спасибо!",
        },
        en: {
            name: "Kokovykhina Olena Serhiivna",
            text: "Sincere thanks for the regained ability to clearly perceive this world and see the small details. Great gratitude to all the staff of the British Ophthalmology Center who made this possible for me. Thank you!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Бутенко.webp",
        uk: {
            name: "Бутенко Світлана",
            text: "Вчора мала можливість відвідати і пройти обстеження в «Британському офтальмологічному центрі». Залишилась дуже задоволена. По-перше дуже приємний і ввічливий персонал, по-друге все автоматизовано і швидко, не дивлячись на велику кількість людей. Для мене це мало велике значення, так як я з іншого міста. Після огляду мені повідомили, що можна зробити лазерну корекцію. Я, звісно, погодилась, так як ношу лінзи вже 13 років, а мій зір почав погіршуватись + маю астигматизм. Перед операцією було страшно, але всі працівники дуже приємні, тому відразу заспокоїли. Сама операція триває 5-8 хвилин і зовсім безболісна. Прийшовши сьогодні на контрольну перевірку (знову ж таки, дякую за зручну для мене дату), я була щаслива. Я змогла роздивитись весь центр і побачила персонал новими очима. Ще трішки дискомфортно, але я бачу добре і дуже-дуже вдячна персоналу центра за їх турботу. Бажаю процвітання! А той, хто турбується і не наважується, то я вас запевняю – воно того коштує – то є Ваш зір.",
        },
        ru: {
            name: "Бутенко Светлана",
            text: "Вчера у меня была возможность посетить и пройти обследование в «Британском офтальмологическом центре». Осталась очень довольна. Во-первых, очень приятный и вежливый персонал, во-вторых, всё автоматизировано и быстро, несмотря на большое количество людей. Для меня это было важно, так как я из другого города. После осмотра мне сообщили, что можно сделать лазерную коррекцию. Я, конечно, согласилась, так как ношу линзы уже 13 лет, а моё зрение начало ухудшаться + у меня астигматизм. Перед операцией было страшно, но все сотрудники очень приятные, поэтому сразу успокоили. Сама операция длится 5–8 минут и совершенно безболезненная. Придя сегодня на контрольную проверку (ещё раз спасибо за удобную для меня дату), я была счастлива. Я смогла рассмотреть весь центр и увидела персонал новыми глазами. Ещё немного дискомфортно, но я вижу хорошо и очень-очень благодарна персоналу центра за их заботу. Желаю процветания! А тот, кто переживает и не решается, я вас уверяю – оно того стоит – это ваше зрение.",
        },
        en: {
            name: "Butenko Svitlana",
            text: "Yesterday I had the opportunity to visit and undergo an examination at the «British Ophthalmology Center». I was very satisfied. Firstly, the staff is very pleasant and polite, and secondly, everything is automated and fast, despite the large number of people. This was very important for me, as I came from another city. After the examination, I was told that I could undergo laser correction. Of course, I agreed, as I have been wearing lenses for 13 years, my vision started to deteriorate, and I also have astigmatism. Before the surgery I was scared, but all the staff were very kind, so they immediately calmed me down. The operation itself lasts 5–8 minutes and is completely painless. Coming today for a follow-up check (again, thank you for arranging a convenient date for me), I was happy. I was able to see the whole center and looked at the staff with new eyes. There is still a little discomfort, but I see well and I am very, very grateful to the staff of the center for their care. I wish you prosperity! And to those who worry and hesitate, I assure you – it is worth it – this is your vision.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Кантемиров.webp",
        uk: {
            name: "Кантемирів Кирило Петрович",
            text: "Дякую весь персонал «Британського офтальмологічного центру» у Києві за моральний настрій та оперативність, весь процес пройшов – швидко, якісно та безболісно.",
        },
        ru: {
            name: "Кантемиров Кирилл Петрович",
            text: "Благодарю весь персонал «Британского офтальмологического центра» в Киеве за моральный настрой и оперативность, весь процесс прошёл быстро, качественно и безболезненно.",
        },
        en: {
            name: "Kyrylo Petrovych Kantemyriv",
            text: "I thank all the staff of the 'British Ophthalmology Center' in Kyiv for their moral support and efficiency. The entire process went quickly, with high quality, and painlessly.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Смирнова.webp",
        uk: {
            name: "Смірнова Віра Олександрівна",
            text: "Я була прооперована лікарем Гавура М.О.. Висловлюю сердечну подяку цьому професійному лікарю. Це лікар від Бога. Дякую Вам, Гавура М.О., за чуйне ставлення – нам часом літнім людям так не вистачає цього. Бажаю вам здоров'я, успіхів у вашій відповідальній роботі. Нехай благословить Вас Господь. Дякую всьому персоналу «Британського офтальмологічного центру».",
        },
        ru: {
            name: "Смирнова Вера Александровна",
            text: "Я была прооперирована врачом Гавурой М.А. Выражаю сердечную благодарность этому профессиональному врачу. Это врач от Бога. Спасибо Вам, Гавура М.А., за чуткое отношение – нам, пожилым людям, этого так часто не хватает. Желаю Вам здоровья, успехов в вашей ответственной работе. Пусть Господь благословит Вас. Спасибо всему персоналу «Британского офтальмологического центра».",
        },
        en: {
            name: "Vira Oleksandrivna Smirnova",
            text: "I was operated on by Dr. Havura M.O. I sincerely thank this professional doctor. He is truly a doctor from God. Thank you, Dr. Havura, for your caring attitude – we elderly people often lack this so much. I wish you good health and success in your responsible work. May the Lord bless you. Thanks to all the staff of the 'British Ophthalmology Center'.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Зуева.jpg",
        uk: {
            name: "Зуєва Світлана Вікторівна",
            text: "Шановний Андрію Миколайовичу, немає слів, щоб висловити свою подяку. Ви справжній фахівець своєї справи. З такою чуйністю та увагою ставтеся до нас, до нашого віку. Дякую Богові, що він привів мене до Вас, я ніби народилася після операції – заміна кришталика, бачу понад 100%. Дякую всьому персоналу «Британського офтальмологічного центру», які з повагою та любов'ю до нас ставляться.",
        },
        ru: {
            name: "Зуева Светлана Викторовна",
            text: "Уважаемый Андрей Николаевич, нет слов, чтобы выразить мою благодарность. Вы настоящий профессионал своего дела. С такой чуткостью и вниманием относитесь к нам, к нашему возрасту. Благодарю Бога за то, что Он привёл меня к Вам. После операции по замене хрусталика я словно заново родилась – вижу более чем на 100%. Спасибо всему персоналу «Британского офтальмологического центра» за уважительное и доброе отношение к нам.",
        },
        en: {
            name: "Svitlana Viktorivna Zuieva",
            text: "Dear Andrii Mykolaiovych, there are no words to fully express my gratitude. You are a true professional in your field. You treat us with such care and attention, considering our age. I thank God for leading me to you. After the lens replacement surgery, I felt as if I was born again – I see more than 100%. Many thanks to all the staff of the 'British Ophthalmology Center' for treating us with respect and kindness.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Чаплигіна.webp",
        uk: {
            name: "Чаплигіна Ксенія Олегівна",
            text: "Мені 27 років і з 8-го класу були проблеми із зором. Спочатку носила окуляри, потім перейшла на лінзи (використовувала близько 10 років). Зір був мінус 8 на обох очах. Усього 5 хвилин операції і вже наступного дня можна бачити так, як колись давно. Це нереальні почуття. Почуваєшся повноцінним, нічим не обтяженим (окулярами чи лінзами). Це того варте! Дякую всьому персоналу «Британського офтальмологічного центру», а особливо медсестрі, яка тримала за руку під час операції. Також окреме дякую хірургу Тяжкої Наталі Петрівні за лазерну корекцію та приголомшливий результат.",
        },
        ru: {
            name: "Чаплыгина Ксения Олеговна",
            text: "Мне 27 лет, и с 8-го класса были проблемы со зрением. Сначала носила очки, потом перешла на линзы (пользовалась около 10 лет). Зрение было минус 8 на обоих глазах. Всего 5 минут операции – и уже на следующий день можно видеть так, как когда-то давно. Это невероятные ощущения. Чувствуешь себя полноценным, ничем не обременённым (очками или линзами). Это того стоит! Спасибо всему персоналу «Британского офтальмологического центра», а особенно медсестре, которая держала за руку во время операции. Также отдельная благодарность хирургу Тяжкой Наталье Петровне за лазерную коррекцию и потрясающий результат.",
        },
        en: {
            name: "Chaplygina Kseniia Olehivna",
            text: "I am 27 years old, and since the 8th grade I had vision problems. At first, I wore glasses, then switched to lenses (used them for about 10 years). My vision was minus 8 in both eyes. Just 5 minutes of surgery – and already the next day you can see as you did long ago. These are incredible feelings. You feel complete, free from any burden (glasses or lenses). It is worth it! Thanks to all the staff of the «British Ophthalmology Center», and especially to the nurse who held my hand during the surgery. Special thanks also to the surgeon Natalia Tyazhka for the laser correction and the amazing result.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Орлов.webp",
        uk: {
            name: "Орлов Андрій Олександрович",
            text: "Дякую, все класно у «Британському офтальмологічному центрі». Жодного дискомфорту. Пройшло легко. Не бійтеся!",
        },
        ru: {
            name: "Орлов Андрей Александрович",
            text: "Спасибо, всё отлично в «Британском офтальмологическом центре». Ни малейшего дискомфорта. Всё прошло легко. Не бойтесь!",
        },
        en: {
            name: "Orlov Andrii Oleksandrovych",
            text: "Thank you, everything is great at the «British Ophthalmology Center». No discomfort at all. It went smoothly. Don’t be afraid!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Матусевич.webp",
        uk: {
            name: "Матусевич Олеся Юліанівна",
            text: "Операція та обслуговування пройшло дуже якісно. Дякуємо великому персоналу «Британського офтальмологічного центру».",
        },
        ru: {
            name: "Матусевич Олеся Юлиановна",
            text: "Операция и обслуживание прошли очень качественно. Спасибо замечательному персоналу «Британского офтальмологического центра».",
        },
        en: {
            name: "Matusevych Olesia Yulianivna",
            text: "The surgery and service were of very high quality. Many thanks to the wonderful staff of the «British Ophthalmology Center».",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Драчук.webp",
        uk: {
            name: "Драчук Леонід Йосипович",
            text: "Велике спасибі за організацію роботи, високий рівень фахівців, чистоту, порядок та чіткість у роботі всього персоналу Британського офтальмологічного центру. Ми отримали добрий результат, звернувшись до вас у 81 рік щодо лікування ускладненої катаракти. Окрема подяка лікареві Гавура М.О. за професіоналізм, чуйне ставлення, ведення пацієнтів до отримання позитивного кінцевого результату.",
        },
        ru: {
            name: "Драчук Леонид Иосифович",
            text: "Огромное спасибо за организацию работы, высокий уровень специалистов, чистоту, порядок и чёткость в работе всего персонала Британского офтальмологического центра. Мы получили хороший результат, обратившись к вам в 81 год для лечения осложнённой катаракты. Отдельная благодарность врачу Гавуре М.А. за профессионализм, чуткое отношение и ведение пациентов до получения положительного конечного результата.",
        },
        en: {
            name: "Drachuk Leonid Yosypovych",
            text: "Many thanks for the organization of work, the high level of specialists, the cleanliness, order, and precision in the work of the entire staff of the British Ophthalmology Center. We achieved a good result when turning to you at the age of 81 for the treatment of complicated cataract. Special thanks to doctor M.O. Havura for professionalism, attentive attitude, and guiding patients to a positive final result.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Шугалей.webp",
        uk: {
            name: "Шугалей Олександр Володимирович",
            text: "Я, Шугалей Олександр Володимирович, звернувся до «Британського офтальмологічного центру» за рекомендацією знайомих. 26.11.2019 р. мені провели тут діагностику на сучасному устаткуванні. За підсумками у мене виявили не лише далекозорість, астигматизм, а й «ледаче око». Рекомендовано було лазерну корекцію зору на найсучаснішому ексімерівському обладнанні. Я наважився і 04.12.2019 р. мені провели цю операцію. Потім відчувався пісок в очах, різало, страх світла, але до ночі полегшало. Наступного дня був безкоштовний огляд. Далі ще за місяць мені потрібно приїхати на огляд. У цілому нині ставленням персоналу дуже задоволений, у центрі дуже затишно. Рекомендуватиму своїм знайомим обов'язково. Дякуємо фахівцям-професіоналам за чудову роботу та мій новий зір. Лікар Тяжка Наталія Петрівна – ювелірно провела мені операцію, за що їй велике спасибі!",
        },
        ru: {
            name: "Шугалей Александр Владимирович",
            text: "Я, Шугалей Александр Владимирович, обратился в «Британский офтальмологический центр» по рекомендации знакомых. 26.11.2019 г. мне провели диагностику на современном оборудовании. В итоге у меня выявили не только дальнозоркость, астигматизм, но и «ленивый глаз». Была рекомендована лазерная коррекция зрения на самом современном эксимерном оборудовании. Я решился, и 04.12.2019 г. мне провели эту операцию. После неё чувствовался песок в глазах, резь, боязнь света, но к ночи стало легче. На следующий день был бесплатный осмотр. Далее ещё через месяц мне нужно приехать на повторный осмотр. В целом я очень доволен отношением персонала, в центре очень уютно. Обязательно буду рекомендовать своим знакомым. Спасибо специалистам-профессионалам за отличную работу и мой новый взгляд на мир. Врач Тяжка Наталия Петровна ювелирно провела операцию, за что ей огромное спасибо!",
        },
        en: {
            name: "Oleksandr Volodymyrovych Shuhalei",
            text: "I, Oleksandr Volodymyrovych Shuhalei, turned to the 'British Ophthalmology Center' on the recommendation of friends. On 26.11.2019, I underwent diagnostics here using modern equipment. As a result, they found not only farsightedness and astigmatism but also a 'lazy eye.' I was recommended laser vision correction on the most advanced excimer equipment. I decided to go for it, and on 04.12.2019, I had the surgery. Afterwards, I felt sand in my eyes, stinging, sensitivity to light, but by night it became easier. The next day there was a free check-up. In a month, I need to come back for another exam. Overall, I am very satisfied with the staff’s attitude, the center is very cozy. I will definitely recommend it to my friends. Thanks to the skilled professionals for their excellent work and my new vision. Doctor Nataliia Petriivna Tiazhka performed the surgery with jewel-like precision, for which I am very grateful!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Ломако.webp",
        uk: {
            name: "Ломако Ірина Павлівна",
            text: "Велику подяку хочу висловити всім працівникам Британського офтальмологічного центру за їхню доброзичливість та хороше ставлення до пацієнтів. Особливо хочу подякувати Лісі Володимирівні та її помічникам, які брали участь в операційному процесі. Дякуємо за повернення зору та можливість бачити все чудове навколишнє нас.",
        },
        ru: {
            name: "Ломако Ирина Павловна",
            text: "Хочу выразить огромную благодарность всем сотрудникам Британского офтальмологического центра за их доброжелательность и хорошее отношение к пациентам. Особенно хочу поблагодарить Лисю Владимировну и её помощников, которые участвовали в операционном процессе. Спасибо за возвращение зрения и возможность видеть всю красоту окружающего мира.",
        },
        en: {
            name: "Iryna Pavlivna Lomako",
            text: "I would like to express my great gratitude to all the staff of the British Ophthalmology Center for their kindness and good attitude toward patients. I especially want to thank Lisiia Volodymyrivna and her assistants who took part in the surgical process. Thank you for restoring my vision and giving me the opportunity to see the beauty of the world around us.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Беркова.webp",
        uk: {
            name: "Беркова Поліна Євгенівна",
            text: "Зробила лазерну корекцію зору в «Британському офтальмологічному центрі» і хочу подякувати за виконання моєї мрії про гарний зір! Вже наступного дня я бачила світ іншими очима! Особливо хочу відзначити професіоналізм усіх співробітників та лікарів клініки – з першої консультації та до післяопераційного огляду все відбувалося гладко. Я отримала відповіді на всі запитання.",
        },
        ru: {
            name: "Беркoва Полина Евгеньевна",
            text: "Сделала лазерную коррекцию зрения в «Британском офтальмологическом центре» и хочу поблагодарить за исполнение моей мечты о хорошем зрении! Уже на следующий день я видела мир другими глазами! Особенно хочу отметить профессионализм всех сотрудников и врачей клиники – от первой консультации до послеоперационного осмотра всё проходило гладко. Я получила ответы на все вопросы.",
        },
        en: {
            name: "Polina Yevhenivna Berkova",
            text: "I underwent laser vision correction at the 'British Ophthalmology Center' and want to thank them for fulfilling my dream of having good eyesight! The very next day I saw the world with new eyes! I especially want to highlight the professionalism of all the staff and doctors of the clinic – from the first consultation to the post-operative check-up, everything went smoothly. I received answers to all my questions.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Махмудов-Магомед.jpg",
        uk: {
            name: "Махмудов Магомед Шахін Оглі",
            text: "Доброго дня. Хочу поділитися враженнями, а саме: протягом півріччя (червень-жовтень 2019) пройшов три операції в «Британському офтальмологічному центрі». Це була мрія, і вона здійснилася завдяки роботі висококваліфікованих співробітників центру. Висловлюю подяку Пархомчук Лесі Володимирівні (лікував птоз повіки), Тяжкій Наталії (лазерна корекція зору) та Конюху Сергію Анатолійовичу (анестезіологу, який допомагав при операціях) – ви справжні професіонали, дякую вам. Окрім цього подяку висловлюю і рядовому персоналу, за гарну атмосферу та підтримку. Це дуже важливо, на всіх етапах. Сподіваюсь ваша праця принесе здоров’я ще багатьом вашим пацієнтам.",
        },
        ru: {
            name: "Махмудов Магомед Шахин Оглы",
            text: "Добрый день. Хочу поделиться впечатлениями, а именно: в течение полугода (июнь–октябрь 2019) прошёл три операции в «Британском офтальмологическом центре». Это была мечта, и она осуществилась благодаря работе высококвалифицированных сотрудников центра. Выражаю благодарность Пархомчук Лесе Владимировне (лечение птоза века), Тяжкой Наталье (лазерная коррекция зрения) и Конюху Сергею Анатольевичу (анестезиологу, который помогал при операциях) – вы настоящие профессионалы, спасибо вам. Кроме того, благодарю и рядовой персонал за прекрасную атмосферу и поддержку. Это очень важно на всех этапах. Надеюсь, ваш труд принесёт здоровье ещё многим вашим пациентам.",
        },
        en: {
            name: "Mahmudov Mahomed Shakhin Ogli",
            text: "Good afternoon. I would like to share my impressions: during half a year (June–October 2019), I underwent three surgeries at the «British Ophthalmology Center». It was a dream, and it came true thanks to the work of the highly qualified staff of the center. I express my gratitude to Lesia Parkhomchuk (treated eyelid ptosis), Natalia Tyazhka (laser vision correction), and Serhii Koniukh (anesthesiologist who assisted during the surgeries) – you are true professionals, thank you. In addition, I would also like to thank the general staff for the warm atmosphere and support. This is very important at every stage. I hope your work will bring health to many more of your patients.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Решинський.webp",
        uk: {
            name: "Решинський Сергій Михайлович",
            text: "Я, Решинський Сергій Михайлович. Прийшов у «Британський офтальмологічний центр» із зором 0.1. Після лазерної корекції зір став 1.0. Чим я дуже задоволений. Дякую всьому персоналу з яким мені довелося попрацювати над моїм здоров’ям.",
        },
        ru: {
            name: "Решинский Сергей Михайлович",
            text: "Я, Решинский Сергей Михайлович. Пришёл в «Британский офтальмологический центр» со зрением 0.1. После лазерной коррекции зрение стало 1.0, чем я очень доволен. Спасибо всему персоналу, с которым мне довелось работать над моим здоровьем.",
        },
        en: {
            name: "Reshynskyi Serhii Mykhailovych",
            text: "I, Reshynskyi Serhii Mykhailovych, came to the «British Ophthalmology Center» with vision of 0.1. After laser correction, my vision became 1.0, which I am very satisfied with. Thanks to all the staff I had the chance to work with on my health.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Миролюбова.webp",
        uk: {
            name: "Миролюбова Ганна Гуріївна",
            text: "Я, Миролюбова Ганна Гуріївна, оперувала катаракту у «Британському офтальмологічному центрі». Висловлюю свою подяку доктору Верещагіну Н.П., за відмінне ставлення та розуміння.",
        },
        ru: {
            name: "Миролюбова Анна Гуриевна",
            text: "Я, Миролюбова Анна Гуриевна, оперировала катаракту в «Британском офтальмологическом центре». Выражаю благодарность доктору Верещагину Н.П. за отличное отношение и понимание.",
        },
        en: {
            name: "Myroliubova Hanna Huriivna",
            text: "I, Myroliubova Hanna Huriivna, had cataract surgery at the «British Ophthalmology Center». I express my gratitude to doctor N.P. Vereshchagin for excellent attitude and understanding.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Тихонов.webp",
        uk: {
            name: "Тихонов Олександр Семенович",
            text: "Щира подяка, «Британському офтальмологічному центру», та особисто Гавура М.О., за високу майстерність, організацію проведення операції, моральну підтримку, за комфорт та спокій, створюваний співробітниками центру (лікарями, анестезіологами, медсестрами). Розум і серце пильніше, ніж очі, але ми вперто віримо очам. Дякую велике. Так тримати!",
        },
        ru: {
            name: "Тихонов Александр Семенович",
            text: "Искренняя благодарность «Британскому офтальмологическому центру» и лично Гавуру М.О. за высокий профессионализм, организацию операции, моральную поддержку, за комфорт и спокойствие, создаваемые сотрудниками центра (врачами, анестезиологами, медсестрами). Разум и сердце внимательнее глаз, но мы упорно верим глазам. Большое спасибо. Так держать!",
        },
        en: {
            name: "Oleksandr Semenovych Tykhonov",
            text: "Sincere thanks to the 'British Ophthalmology Center' and personally to Dr. Havura M.O. for their high skill, organization of the surgery, moral support, and for the comfort and calm provided by the staff (doctors, anesthesiologists, nurses). The mind and heart are more vigilant than the eyes, but we stubbornly trust our eyes. Many thanks. Keep up the great work!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Кузуб.webp",
        uk: {
            name: "Кузуб Вікторія Олександрівна",
            text: "8 серпня у Британському офтальмологічному центрі мені зробили операцію під супроводом Фостер Наталії та Конюха Сергія Анатолійовича. Це була мрія всього мого свідомого життя. Я з батьками об'їздила багато клінік і навіть в інших країнах, але тільки тут і зараз здійснили мою мрію. Зрештою, я можу не соромитися дивитися людям у вічі. Це був комплекс неповноцінності, більше того, це заважало мені розкрити себе. Безмежно вдячна Фостер Наталії та Конюхові Сергію Анатолійовичу за їхній професіоналізм, підтримку та чуйність. Вони – найкращі!",
        },
        ru: {
            name: "Кузуб Виктория Александровна",
            text: "8 августа в Британском офтальмологическом центре мне сделали операцию под руководством Фостер Натальи и Конюха Сергея Анатольевича. Это была мечта всей моей сознательной жизни. Я с родителями объездила много клиник, даже в других странах, но только здесь и сейчас осуществили мою мечту. В итоге я могу не стесняться смотреть людям в глаза. Это был комплекс неполноценности, более того, он мешал мне раскрыться. Безмерно благодарна Фостер Наталье и Конюху Сергею Анатольевичу за их профессионализм, поддержку и чуткость. Они – лучшие!",
        },
        en: {
            name: "Viktoriia Oleksandrivna Kuzub",
            text: "On August 8th, I had surgery at the British Ophthalmology Center under the guidance of Nataliia Foster and Serhii Anatoliiovych Koniukh. It was the dream of my entire conscious life. I traveled with my parents to many clinics, even in other countries, but only here and now was my dream realized. Finally, I can look people in the eyes without embarrassment. It was a feeling of inferiority, and moreover, it held me back from fully expressing myself. I am endlessly grateful to Nataliia Foster and Serhii Koniukh for their professionalism, support, and attentiveness. They are the best!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Иванникова.webp",
        uk: {
            name: "Іваннікова Анжела Юріївна",
            text: "Безмірно вдячна докторові Фостер Наталії! Дякуємо за Ваш професіоналізм, за Вашу сміливість братися за нестандартні та складні випадки, за Ваше терпіння та людяність! Усім, кому відмовили в лікуванні косоокості, після безлічі невдалих операцій (у мене їх було сім – у дитинстві) – не впадайте у відчай, не витрачайте час, нерви, гроші на лікарів, які не беруться вас вилікувати. Мені протягом сорока років говорили, що мій випадок безнадійний (обстежувалася у Запоріжжі). Якось в інтернеті натрапила на статтю ізраїльського офтальмолога, в якій писалося, що можна виправити раніше невдалу оперовану косоокість шляхом регулювання швів, і в мене з'явилася надія. Ізраїльське лікування фінансово для мене непідйомне, і я вирішила погуглити в Україні. На моє щастя, мою увагу привернув Британський офтальмологічний центр. Записалася на прийом через Інтернет. Була приємно здивована сервісом, тут все продумано до дрібниць, європейський рівень, тобто все для раціональної зручності клієнта. Зрештою: мені змінили кришталики (бачу чудово), зробили довгоочікувані операції з косоокості (дивлюся обома очима, рівно, око не йде вбік). Я щаслива, що доля мене звела з професором Фостер Наталія! Мільйон раз кажу Вам слова подяки! Процвітання Вам та хороших результатів! Сподіваюся, мій відгук комусь допоможе!",
        },
        ru: {
            name: "Иванникова Анжела Юрьевна",
            text: "Безмерно благодарна доктору Фостер Наталье! Спасибо за Ваш профессионализм, за смелость браться за нестандартные и сложные случаи, за терпение и человечность! Всем, кому отказали в лечении косоглазия после множества неудачных операций (у меня их было семь – в детстве) – не падайте духом, не тратьте время, нервы, деньги на врачей, которые не берутся вас лечить. Мне на протяжении сорока лет говорили, что мой случай безнадежен (я обследовалась в Запорожье). Однажды я наткнулась в интернете на статью израильского офтальмолога, где писалось, что можно исправить ранее неудачно прооперированное косоглазие путем регулировки швов, и у меня появилась надежда. Израильское лечение финансово для меня непосильно, и я решила поискать вариант в Украине. К счастью, моё внимание привлек Британский офтальмологический центр. Записалась на приём через Интернет. Была приятно удивлена сервисом, здесь всё продумано до мелочей, европейский уровень, всё для рациональной удобства клиента. В итоге: мне заменили хрусталики (вижу прекрасно), сделали долгожданные операции по косоглазию (смотрю обоими глазами, ровно, глаз не уходит в сторону). Я счастлива, что судьба привела меня к профессору Наталии Фостер! Миллион раз выражаю Вам слова благодарности! Процветания Вам и отличных результатов! Надеюсь, мой отзыв кому-то поможет!",
        },
        en: {
            name: "Anzhela Yuriyivna Ivannikova",
            text: "I am immensely grateful to Dr. Nataliia Foster! Thank you for your professionalism, for your courage to take on non-standard and complex cases, for your patience and humanity! To everyone who was denied treatment for strabismus after numerous unsuccessful surgeries (I had seven in childhood) – do not despair, do not waste time, nerves, or money on doctors who refuse to treat you. For forty years, I was told my case was hopeless (I was examined in Zaporizhzhia). Once I came across an article by an Israeli ophthalmologist stating that previously unsuccessful strabismus surgery could be corrected by adjusting the sutures, and I gained hope. Israeli treatment was financially unattainable for me, so I decided to search in Ukraine. Fortunately, the British Ophthalmology Center caught my attention. I booked an appointment online and was pleasantly surprised by the service; everything is carefully thought out, at a European level, providing full convenience for the patient. In the end: my lenses were replaced (I see perfectly), and the long-awaited strabismus surgeries were performed (I look with both eyes, straight, the eye does not drift). I am happy fate brought me to Professor Nataliia Foster! A million thanks to you! Wishing you prosperity and great results! I hope my review helps someone!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Савченко.webp",
        uk: {
            name: "Савченко Олександра Яківна",
            text: "Проходила операцію з приводу катаракти у період з 26.06 до 25.09.2019. Зір повернувся на 100% на обох очах. Вдячна персоналу «Британського офтальмологічного центру» за людяне ставлення до пацієнтів, особливо хочу подякувати лікарю-хірургу Гавура М.О. – професіоналу своєї справи. Дякую!",
        },
        ru: {
            name: "Савченко Александра Яковлевна",
            text: "Проходила операцию по поводу катаракты в период с 26.06 по 25.09.2019. Зрение вернулось на 100% на обоих глазах. Благодарна персоналу «Британского офтальмологического центра» за человечное отношение к пациентам, особенно хочу поблагодарить врача-хирурга Гавура М.А. – профессионала своего дела. Спасибо!",
        },
        en: {
            name: "Savchenko Oleksandra Yakivna",
            text: "I underwent cataract surgery between 26.06 and 25.09.2019. My vision returned 100% in both eyes. I am grateful to the staff of the «British Ophthalmology Center» for their humane attitude towards patients, and especially to surgeon M.O. Havura – a true professional. Thank you!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Кобилянський.webp",
        uk: {
            name: "Кобилянський Віталій Олексійович",
            text: "Протягом 3-х місяців мені було проведено в «Британському офтальмологічному центрі» операцію з видалення катаракти на обох очах. Результат операції чудовий та оптимальний для мого віку (82 роки). Дякую доктору Гавура М.О. за золоті руки та чуйність. Мені сподобався Британський офтальмологічний центр організацією всього лікувального процесу.",
        },
        ru: {
            name: "Кобылянский Виталий Алексеевич",
            text: "В течение 3-х месяцев мне была проведена в «Британском офтальмологическом центре» операция по удалению катаракты на обоих глазах. Результат операции отличный и оптимальный для моего возраста (82 года). Спасибо доктору Гавура М.А. за золотые руки и чуткость. Мне понравился Британский офтальмологический центр организацией всего лечебного процесса.",
        },
        en: {
            name: "Kobylianskyi Vitalii Oleksiiovych",
            text: "Within 3 months, I underwent cataract removal surgery on both eyes at the «British Ophthalmology Center». The result is excellent and optimal for my age (82 years). Many thanks to Dr. M.O. Havura for his golden hands and sensitivity. I also appreciated the excellent organization of the entire treatment process at the center.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Ефременков.webp",
        uk: {
            name: "Єфременков Микита Олександрович",
            text: "19.10.2019 мені провели лазерну корекцію зору у «Британському офтальмологічному центрі». Результат перевершив усі мої очікування. Починаю нове життя з новим чудовим зором. Окрема подяка хірургу Бурдею О.В. Дякую!",
        },
        ru: {
            name: "Ефременков Никита Александрович",
            text: "19.10.2019 мне провели лазерную коррекцию зрения в «Британском офтальмологическом центре». Результат превзошёл все мои ожидания. Начинаю новую жизнь с новым прекрасным зрением. Отдельная благодарность хирургу Бурдею А.В. Спасибо!",
        },
        en: {
            name: "Yefremenkov Mykyta Oleksandrovych",
            text: "On 19.10.2019 I underwent laser vision correction at the «British Ophthalmology Center». The result exceeded all my expectations. I am starting a new life with wonderful new eyesight. Special thanks to surgeon O.V. Burdei. Thank you!",
        },
    },
    {
        service: "vitreoretinalna-hirurgiya",
        photo: "/feedbacks/Федорченко.webp",
        uk: {
            name: "Федорченко Надія Віталіївна",
            text: "Я, Федорченко Надія Віталіївна, висловлюю свою подяку лікареві Гавура М.О. за якісно проведену складну операцію з відшарування сітківки лівого ока. Обстеженням, операцією та післяопераційним періодом обстеження задоволене. Лікарі та медичний персонал Британського офтальмологічного центру дуже уважні. Особлива подяка Гавура М.О. за його золоті руки. Творчих успіхів та здоров'я Вам.",
        },
        ru: {
            name: "Федорченко Надежда Витальевна",
            text: "Я, Федорченко Надежда Витальевна, выражаю благодарность врачу Гавуре М.А. за качественно проведённую сложную операцию по отслоению сетчатки левого глаза. Обследованием, операцией и послеоперационным периодом довольна. Врачи и медицинский персонал Британского офтальмологического центра очень внимательные. Особая благодарность Гавуре М.А. за его золотые руки. Творческих успехов и здоровья Вам.",
        },

        en: {
            name: "Fedorchenko Nadiia Vitaliivna",
            text: "I, Fedorchenko Nadiia Vitaliivna, would like to express my gratitude to Dr. Havura M.O. for the high-quality performance of a complex surgery for retinal detachment of the left eye. I am satisfied with the examination, the surgery, and the postoperative care. The doctors and medical staff of the British Ophthalmological Center are very attentive. Special thanks to Dr. Havura M.O. for his golden hands. Wishing you creative success and good health.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Апостолова Валентина Сергіївна",
            text: "Мені, Апостоловій Валентині Сергіївні, 14.03.2023 і 14.05.2023 в Британському офтальмологічному центрі було проведено дві операції з видалення катаракти, спочатку на правому, потім на лівому оці. \nСьогодні почуваю себе добре, зір відновився, туман перед очима зник. \nХочу виразити велику подяку хірургу, який проводив операції – Гавура М.О. і лікарю – Штокалюк К.В., а також всьому медичному персоналу з яким мені доводилось контактувати під час обстеження, передопераційною підготовкою, проведення операції та післяопераційного огляду. \nДуже дякую всім Вам за тепле відношення і доброзичливість, за надання професійної допомоги та комфортні умови в яких я опинилася, знаходячись в Британському офтальмологічному центрі. \nНизький всім Вам уклін.",
        },
        ru: {
            name: "Апостолова Валентина Сергеевна",
            text: "Мне, Апостоловой Валентине Сергеевне, 14.03.2023 и 14.05.2023 в Британском офтальмологическом центре были проведены две операции по удалению катаракты, сначала на правом, затем на левом глазу.\nСегодня чувствую себя хорошо, зрение восстановилось, туман перед глазами исчез.\nХочу выразить большую благодарность хирургу, который проводил операции – Гавуре М.А. и врачу – Штокалюк К.В., а также всему медицинскому персоналу, с которым мне приходилось контактировать во время обследования, предоперационной подготовки, проведения операции и послеоперационного осмотра.\nОгромное спасибо всем Вам за тёплое отношение и доброжелательность, за профессиональную помощь и комфортные условия, в которых я находилась в Британском офтальмологическом центре.\nНизкий Вам всем поклон.",
        },

        en: {
            name: "Apostolova Valentyna Serhiivna",
            text: "On 14.03.2023 and 14.05.2023, I, Apostolova Valentyna Serhiivna, underwent two cataract removal surgeries at the British Ophthalmological Center – first on the right eye, then on the left.\nToday, I feel well, my vision has been restored, and the fog before my eyes has disappeared.\nI would like to express my deep gratitude to the surgeon who performed the surgeries – Dr. Havura M.O., and to Dr. Shtokaliuk K.V., as well as to all the medical staff I interacted with during the examinations, preoperative preparation, the surgery itself, and postoperative check-ups.\nMany thanks to all of you for your warm attitude and kindness, for providing professional assistance, and for the comfortable conditions I experienced at the British Ophthalmological Center.\nMy deepest respect to you all.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/ашихмін.webp",
        uk: {
            name: "Ашихмін Сергій Георгійович",
            text: "Я, Ашихмін Сергій Георгійович, зробив операцію по заміні кришталика в Британському офтальмологічному центрі. Мені все сподобалось, я почав бачити, як молодий. Дякую лікарям Гавура М.О. та Рудяк Уляні Іванівні.",
        },
        ru: {
            name: "Ашихмин Сергей Георгиевич",
            text: "Я, Ашихмин Сергей Георгиевич, сделал операцию по замене хрусталика в Британском офтальмологическом центре. Мне всё понравилось, я начал видеть, как молодой. Спасибо врачам Гавуре М.А. и Рудяк Ульяне Ивановне.",
        },

        en: {
            name: "Ashykhmin Serhii Heorhiiovych",
            text: "I, Ashykhmin Serhii Heorhiiovych, underwent a lens replacement surgery at the British Ophthalmological Center. I am very pleased, I began to see like a young person again. Many thanks to Dr. Havura M.O. and Dr. Rudiak Uliana Ivanivna.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Кільменінова Лідія Олександрівна",
            text: "Я, Кільменінова Лідія Олександрівна, хочу висловити подяку за проведення операції лікарям по заміні кришталика Гавура М.О., Рудяк Уляні Іванівні та анестезіологу Козюрі Максиму Анатолійовичу, а також всьому персоналу Британського офтальмологічного центру за професіоналізм, турботу та гарне ставлення до пацієнтів. Дякую за можливість бачити та жити повноцінним життям мені та моєму чоловікові. Нехай Вам всім щастить. \nЗ повагою, родина Кільменінових.",
        },
        ru: {
            name: "Кильменина Лидия Александровна",
            text: "Я, Кильменина Лидия Александровна, хочу выразить благодарность врачам по замене хрусталика Гавура М.О., Рудяк Ульяне Ивановне и анестезиологу Козюре Максиму Анатольевичу, а также всему персоналу Британского офтальмологического центра за профессионализм, заботу и хорошее отношение к пациентам. Спасибо за возможность видеть и жить полноценной жизнью мне и моему мужу. Пусть вам всем сопутствует удача. \nС уважением, семья Кильмениных.",
        },
        en: {
            name: "Lidiia Oleksandrivna Kilmeninova",
            text: "I, Lidiia Oleksandrivna Kilmeninova, want to express my gratitude to the doctors M.O. Havura, Uliana Ivanivna Rudyak, and anesthesiologist Maksym Anatoliyovych Kozyura, as well as the entire staff of the British Ophthalmology Center, for their professionalism, care, and kind attitude toward patients. Thank you for giving me and my husband the opportunity to see and live a full life. Wishing you all the best. \nSincerely, the Kilmeninov family.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Вага Микола Васильович",
            text: "Подяка! \nЯ, Вага Микола Васильович, хочу подякувати хірургу Гавура М.О. за професійне і дуже добре відношення.",
        },
        ru: {
            name: "Вага Николай Васильевич",
            text: "Благодарность! \nЯ, Вага Николай Васильевич, хочу поблагодарить хирурга Гавура М.О. за профессиональное и очень хорошее отношение.",
        },
        en: {
            name: "Mykola Vasylovych Vaha",
            text: "Gratitude! \nI, Mykola Vasylovych Vaha, want to thank surgeon M.O. Havura for their professional and very kind attitude.",
        },
    },
    {
        service: "vitreoretinalna-hirurgiya",
        photo: "/feedbacks/Голімаз.jpg",
        uk: {
            name: "Голімаз Наталія Олексіївна",
            text: "Велика подяка працівникам, усім лікарям «Британського офтальмологічного центру» за велику професійну турботу про своїх пацієнтів. Хочу відмітити високий професіоналізм, увагу, турботу лікарів Гавура М.О., Рудяк Уляни Іванівни, Скапи Василя Івановича. Нехай Ваша доброта, турбота ніколи не згасає. Ви повернули мені зір, а цим саме Ви повернули мене до повноцінного життя. Дай Бог Вам усім міцного здоров’я, миру, благополуччя Вам та Вашим родинам. З Великою повагою, Голімаз Наталія Олексіївна, м. Миколаїв.",
        },
        ru: {
            name: "Голимаз Наталья Алексеевна",
            text: "Большая благодарность сотрудникам, всем врачам «Британского офтальмологического центра» за их профессиональную заботу о пациентах. Хочу отметить высокий профессионализм, внимание и заботу врачей Гавура М.О., Рудяк Ульяны Ивановны, Скапы Василия Ивановича. Пусть ваша доброта и забота никогда не угасают. Вы вернули мне зрение, а этим вернули меня к полноценной жизни. Да благословит вас Бог крепким здоровьем, миром и благополучием вам и вашим семьям. С большим уважением, Голимаз Наталья Алексеевна, г. Николаев.",
        },
        en: {
            name: "Nataliia Oleksiivna Holimaz",
            text: "Many thanks to the staff and all the doctors at the British Ophthalmology Center for their professional care of patients. I would like to highlight the high professionalism, attention, and care of doctors M.O. Havura, Uliana Ivanivna Rudyak, and Vasyl Ivanovych Skapa. May your kindness and care never fade. You restored my vision, and in doing so, brought me back to a full life. May God bless you all with good health, peace, and prosperity for you and your families. With great respect, Nataliia Oleksiivna Holimaz, Mykolaiv.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Ярошенко Віра Іванівна",
            text: "Я дуже вдячна за успішно проведену консультацію та операцію по заміні кришталика 03.05.2023 р. в «Британському офтальмологічному центрі» висококваліфіковані лікарі Гавура М.О., Скапа В.І., Козюра М.А., медичні сестри та весь персонал. В мене була дуже ускладнена катаракта і я довго не наважувалася на операцію. Операція пройшла чудово і в перший день я змогла прочитати текс на мобільному. Дуже багато уваги приділяється післяопераційному огляду. Я дуже задоволена результатом. Рекомендую цю клініку для вирішення проблеми із зором.",
        },
        ru: {
            name: "Ярошенко Вера Ивановна",
            text: "Я очень благодарна за успешно проведённую консультацию и операцию по замене хрусталика 03.05.2023 в «Британском офтальмологическом центре» высококвалифицированным врачам Гавура М.О., Скапа В.И., Козюра М.А., медсестрам и всему персоналу. У меня была очень сложная катаракта, и я долго не решалась на операцию. Операция прошла прекрасно, и в первый день я смогла прочитать текст на мобильном. Послеоперационному осмотру уделяется много внимания. Я очень довольна результатом. Рекомендую эту клинику для решения проблем со зрением.",
        },
        en: {
            name: "Vira Ivanivna Yaroshenko",
            text: "I am very grateful for the successful consultation and lens replacement surgery on May 3, 2023, at the British Ophthalmology Center, performed by highly qualified doctors M.O. Havura, V.I. Skapa, M.A. Kozyura, nurses, and the entire staff. I had a very complicated cataract and hesitated for a long time to undergo surgery. The operation went perfectly, and on the first day I was able to read text on my phone. Great attention is given to post-operative care. I am very satisfied with the results. I recommend this clinic for solving vision problems.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Музичук Раіса Ахметівна",
            text: "Я, Біловол А.В. прийшла до «Британського офтальмологічного центру» за рекомендацією свого знайомого 9.05.23. прооперували мою маму Музичук Р.А. 1936 р. народження. Я хотіла підкреслити професіоналізм, коректність та толерантність медичного персоналу. Я поставила б 100 балів клініці за всіма критеріями. Особливо хочеться відзначити анестезіолога Козюру М.А. та лікаря Скапу В.І. \nВсім велике дякую.",
        },
        ru: {
            name: "Музичук Раиса Ахметовна",
            text: "Я, Биловол А.В., пришла в «Британский офтальмологический центр» по рекомендации своего знакомого 09.05.23. Прооперировали мою маму Музичук Р.А., 1936 года рождения. Хочу подчеркнуть профессионализм, корректность и толерантность медицинского персонала. Я поставила бы клинике 100 баллов по всем критериям. Особенно хочется отметить анестезиолога М.А. Козюру и врача В.И. Скапу. Всем большое спасибо.",
        },
        en: {
            name: "Raisa Akhmetivna Muzychuk",
            text: "I, A.V. Bilovol, came to the British Ophthalmology Center on May 9, 2023, based on a recommendation from an acquaintance. They performed surgery on my mother, Raisa Akhmetivna Muzychuk, born in 1936. I want to emphasize the professionalism, correctness, and tolerance of the medical staff. I would give the clinic 100 points in all categories. I especially want to highlight anesthesiologist M.A. Kozyura and doctor V.I. Skapa. Many thanks to everyone.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Касаткіна Людмила Павлівна",
            text: "Дуже вдячна медичному персоналу «Британського офтальмологічного центу», зокрема головному лікарю-хірургу Гавура М.О., лікуючому лікарю Рудяк Ульяні Іванівні, зав.хірургічним відділенням Скапі Василю Івановичу, лікарю-анестезіологу Козюрі Максиму Анатолійовичу, які безпосередньо брали участь у моєму лікуванні. Робота офтальмологічного центру організована дуже якісно, на високому науково-технічному рівні, з використанням новітніх технологій діагностики та лікування. Чітко і своєчасно, в режимі алгоритму, працюють всі підрозділи центру. Ввічливість і толерантність до пацієнтів, гарне естетичне оформлення, прекрасний санітарно-гігієнічний стан центру свідчать про високий рівень культури та дисципліни, що позитивно впливає на внутрішній стан пацієнтів та перебіг їх реабілітації. \nЩиро зичу і в подальшому великих успіхів в роботі «Британського офтальмологічного центру» \nпацієнтка: Касаткіна Людмила Павлівна (із міста Херсона).",
        },
        ru: {
            name: "Касаткина Людмила Павловна",
            text: "Очень благодарна медицинскому персоналу «Британского офтальмологического центра», в частности главному врачу-хирургу Гавуре М.А., лечащему врачу Рудяк Ульяне Ивановне, заведующему хирургическим отделением Скапе Василию Ивановичу, врачу-анестезиологу Козюре Максиму Анатольевичу, которые непосредственно принимали участие в моём лечении. Работа офтальмологического центра организована очень качественно, на высоком научно-техническом уровне, с использованием новейших технологий диагностики и лечения. Чётко и своевременно, в режиме алгоритма, работают все подразделения центра. Вежливость и толерантность к пациентам, прекрасное эстетическое оформление, отличное санитарно-гигиеническое состояние центра свидетельствуют о высоком уровне культуры и дисциплины, что положительно влияет на внутреннее состояние пациентов и течение их реабилитации.\nИскренне желаю и в дальнейшем больших успехов в работе «Британского офтальмологического центра».\nПациентка: Касаткина Людмила Павловна (из города Херсона).",
        },

        en: {
            name: "Kasatkina Liudmyla Pavlivna",
            text: "I am very grateful to the medical staff of the British Ophthalmological Center, in particular to Chief Surgeon Dr. Havura M.O., my attending physician Dr. Rudiak Uliana Ivanivna, Head of the Surgical Department Dr. Skapa Vasyl Ivanovych, and anesthesiologist Dr. Koziura Maksym Anatoliiovych, who directly took part in my treatment. The work of the ophthalmological center is organized very efficiently, at a high scientific and technical level, with the use of the latest diagnostic and treatment technologies. All departments of the center work clearly and promptly, following an algorithm. Courtesy and tolerance towards patients, excellent aesthetic design, and the impeccable sanitary and hygienic condition of the center testify to a high level of culture and discipline, which positively affects the patients’ state of mind and the course of their rehabilitation.\nI sincerely wish the British Ophthalmological Center further great success in its work.\nPatient: Kasatkina Liudmyla Pavlivna (from Kherson).",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Літовка Алла Олександрівна",
            text: "Я, Літовка Алла Олександрівна, з м. Авдіївка, Донецької обл., зробила операцію, по імплантації мультифокального кришталика в «Британському офтальмологічному центрі». Хочу висловити свою щиру вдячність моєму лікарю, Скапі Василю Івановичу та анестезіологу Козюрі Максиму Анатолійовичу, які насправді зарекомендували себе, як висококваліфіковані спеціалісти, що сумлінно виконують свої професійні обов’язки. В спілкуванні зі мною, були дуже уважні, доброзичливі, проявляли справжню турботу. Швидко та якісно відповідали на всі поставлені мною запитання та при спілкуванні намагались пояснити мені всі моменти, що пов’язані з проведенням операції та періодом реабілітації. Дуже вдячна цим лікарям за їх нелегку працю та вважаю лікарів Скапу В.І. та Козюру М.А., найкращими лікарями в «Британському офтальмологічному центрі». Хочу побажати їм здоров’я, щастя та достатку. Дякую за доброту та дбайливе ставлення до мене.",
        },
        ru: {
            name: "Литовка Алла Александровна",
            text: "Я, Литовка Алла Александровна, из г. Авдеевка, Донецкой обл., сделала операцию по имплантации мультифокального хрусталика в «Британском офтальмологическом центре». Хочу выразить свою искреннюю благодарность моему врачу Скапе Василию Ивановичу и анестезиологу Козюре Максиму Анатольевичу, которые действительно зарекомендовали себя как высококвалифицированные специалисты, добросовестно выполняющие свои профессиональные обязанности. В общении со мной были очень внимательны, доброжелательны, проявляли искреннюю заботу. Быстро и качественно отвечали на все мои вопросы и старались объяснить все моменты, связанные с проведением операции и периодом реабилитации. Очень благодарна этим врачам за их нелёгкий труд и считаю врачей Скапу В.И. и Козюру М.А. лучшими врачами «Британского офтальмологического центра». Хочу пожелать им здоровья, счастья и достатка. Спасибо за доброту и заботливое отношение ко мне.",
        },

        en: {
            name: "Litovka Alla Oleksandrivna",
            text: "I, Litovka Alla Oleksandrivna, from Avdiivka, Donetsk region, underwent a multifocal lens implantation surgery at the British Ophthalmological Center. I would like to express my sincere gratitude to my doctor, Dr. Skapa Vasyl Ivanovych, and anesthesiologist Dr. Koziura Maksym Anatoliiovych, who truly proved themselves as highly qualified specialists conscientiously performing their professional duties. In communication with me, they were very attentive, kind, and showed genuine care. They responded quickly and thoroughly to all my questions and tried to explain every aspect related to the surgery and the rehabilitation period. I am very grateful to these doctors for their hard work and consider Dr. Skapa V.I. and Dr. Koziura M.A. the best doctors at the British Ophthalmological Center. I wish them health, happiness, and prosperity. Thank you for your kindness and caring attitude towards me.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Чернець Є.М.",
            text: "Я, Чернець Є.М. який прооперувався в Британському офтальмологічному центрі. Вдячний, що повернули мені зір. З повагою, Чернець Є.М.",
        },
        ru: {
            name: "Чернец Е.М.",
            text: "Я, Чернец Е.М., который проходил операцию в Британском офтальмологическом центре. Благодарен за то, что вернули мне зрение. С уважением, Чернец Е.М.",
        },
        en: {
            name: "Y.M. Chernets",
            text: "I, Y.M. Chernets, who underwent surgery at the British Ophthalmology Center, am grateful for restoring my vision. Sincerely, Y.M. Chernets.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Івасюк Р.П.",
            text: "Дякую персоналу клініки і особисто, Константиновій Віті Костянтинівні, за професіоналізм, чуйність до пацієнтів, любов до своєї справи. Оперувала катаракту на обох очах. \nДоброго Вам здоров’я!",
        },
        ru: {
            name: "Ивасюк Р.П.",
            text: "Благодарю персонал клиники и лично Константинову Виту Константиновну за профессионализм, внимательное отношение к пациентам и любовь к своему делу. Оперирали катаракту на обоих глазах. \nЖелаю крепкого здоровья!",
        },
        en: {
            name: "R.P. Ivasyuk",
            text: "I thank the clinic staff and personally Vita Konstantynivna Konstantinova for their professionalism, attentiveness to patients, and love for their work. Cataract surgery was performed on both eyes. \nWishing you good health!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Рябокінь.webp",
        uk: {
            name: "Рябокінь Ольга Григорівна",
            text: "Дорога, Віта Костянтинівна! Мила, ніжна, тендітна. Дякую Вам за Ваші сильні, впевнені руки. Ваш професіоналізм, талант. За ваше добре серце. Ви мене повернули до повноцінного життя. Щиро Вам вдячна.",
        },
        ru: {
            name: "Рябоконь Ольга Григорьевна",
            text: "Дорогая Вита Константиновна! Милая, нежная, хрупкая. Благодарю Вас за ваши сильные и уверенные руки, профессионализм, талант и доброе сердце. Вы вернули меня к полноценной жизни. Искренне благодарна.",
        },
        en: {
            name: "Olha Hryhorivna Ryabokin",
            text: "Dear Vita Konstantynivna! Sweet, gentle, delicate. Thank you for your strong and confident hands, your professionalism, talent, and kind heart. You restored me to a full life. I am sincerely grateful.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Попов.webp",
        uk: {
            name: "Попов Валерій Едуардович",
            text: "Я, Попов Валерій Едуардович, висловлюю свою щиру вдячність всім співробітникам «Британського офтальмологічного центру» за бездоганну роботу. Я дуже задоволений, що звернувся саме в цей центр. Мій зір завдяки проведеній операції відновлений. Ще раз щиро дякую всім працівникам центру.",
        },
        ru: {
            name: "Попов Валерий Эдуардович",
            text: "Я, Попов Валерий Эдуардович, выражаю свою искреннюю благодарность всем сотрудникам «Британского офтальмологического центра» за безупречную работу. Я очень доволен, что обратился именно в этот центр. Благодаря проведённой операции моё зрение восстановлено. Ещё раз искренне благодарю всех работников центра.",
        },
        en: {
            name: "Popov Valerii Eduardovych",
            text: "I, Popov Valerii Eduardovych, sincerely express my gratitude to all the staff of the British Ophthalmological Center for their impeccable work. I am very pleased that I chose this center. Thanks to the surgery performed, my vision has been restored. Once again, my sincere thanks to all the staff of the center.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Майоренкова.webp",
        uk: {
            name: "Майоренкова Наталія Іванівна",
            text: "Я, Майоренкова Наталія Іванівна, хочу залишити відгук про Британський офтальмологічний центр. Вибирала між двома різними клініками, але вибір зробила на Британський, і не пошкодувала. Персонал на найвищому рівні, всі ввічливі, привітні, терпеливі, обслуговування супер. Хочу подякувати анастезіологам, а особливу подяку лікарю Константиновій В.К., вона робить неймовірну роботу, ювелірну можна сказати, вона супер, а ще дуже красива жінка. \nБажаю всім процвітання та мирного неба. Ви найкращі. Дякую Вам. \nP.S. Відгук пишу на третій день після операції на обох очах, пишу без окулярів! \nДякую ще раз!",
        },
        ru: {
            name: "Майоренкова Наталия Ивановна",
            text: "Я, Майоренкова Наталия Ивановна, хочу оставить отзыв о Британском офтальмологическом центре. Выбирала между двумя разными клиниками, но выбор сделала в пользу Британского и не пожалела. Персонал на высочайшем уровне, все вежливые, приветливые, терпеливые, обслуживание супер. Хочу поблагодарить анестезиологов, а особую благодарность выразить врачу Константиновой В.К. — она делает невероятную работу, можно сказать ювелирную, она супер, а ещё очень красивая женщина.\nЖелаю всем процветания и мирного неба. Вы лучшие. Спасибо Вам.\nP.S. Отзыв пишу на третий день после операции на обоих глазах, пишу без очков!\nСпасибо ещё раз!",
        },
        en: {
            name: "Maiorenkova Nataliia Ivanivna",
            text: "I, Maiorenkova Nataliia Ivanivna, would like to leave a review about the British Ophthalmological Center. I was choosing between two different clinics, but I chose the British one, and I have no regrets. The staff are of the highest level, everyone is polite, friendly, and patient, the service is excellent. I would like to thank the anesthesiologists, and give special thanks to Dr. Konstantiinova V.K. — she does incredible work, one could say it is like fine jewelry, she is amazing, and also a very beautiful woman.\nI wish everyone prosperity and peaceful skies. You are the best. Thank you.\nP.S. I am writing this review on the third day after surgery on both eyes, and I am writing without glasses!\nThanks again!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Гуляєва.webp",
        uk: {
            name: "Гуляєва Л.Г.",
            text: "Хочу висловити свою подяку Британському офтальмологічному центру та особисто лікарю Костянтиновій Віті Костянтинівні за її професіоналізм, чутливе ставлення до пацієнтів, тактовність та відданість своїй професії. Бажаю здоров'я всім працівникам центру! \nГуляєва Л.Г.",
        },
        ru: {
            name: "Гуляева Л.Г.",
            text: "Хочу выразить свою благодарность Британскому офтальмологическому центру и лично врачу Константиновой Вите Константиновне за её профессионализм, чуткое отношение к пациентам, тактичность и преданность своей профессии. Желаю здоровья всем работникам центра!\nГуляева Л.Г.",
        },
        en: {
            name: "Huliaieva L.H.",
            text: "I would like to express my gratitude to the British Ophthalmological Center and personally to Dr. Konstantiinova Vita Konstantiinivna for her professionalism, sensitive attitude towards patients, tact, and dedication to her profession. I wish good health to all the staff of the center!\nHuliaieva L.H.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Гаврилюк-Валентина-Андріївна.jpg",
        uk: {
            name: "Гаврилюк Валентина Андріївна",
            text: "Я Гаврилюк Валентина Андріївна потрапила в «Британський офтальмологічний центр» за порадою друзів моїх синів, які дуже задоволені залишилися після операції на очах. \nОбслуговування дуже чуйне і ефективне. Оперувалася я у лікаря Константінової Віти Констянтинівни. Це лікар – чародійка. Я їй дуже вдячна, бо бачу як в молодості до весілля. А зараз я пенсіонерка. Зір мене дуже тішить, робить щасливою людиною. \nБажаю всім здоров’я.",
        },
        ru: {
            name: "Гаврилюк Валентина Андреевна",
            text: "Я, Гаврилюк Валентина Андреевна, попала в «Британский офтальмологический центр» по совету друзей моих сыновей, которые остались очень довольны после операции на глазах. \nОбслуживание очень внимательное и эффективное. Меня оперировала врач Вита Константиновна Константинова. Это врач-чародейка. Я ей очень благодарна, потому что теперь вижу, как в молодости перед свадьбой. А сейчас я пенсионерка. Зрение меня очень радует, делает меня счастливым человеком. \nЖелаю всем здоровья.",
        },
        en: {
            name: "Valentyna Andriivna Havryliuk",
            text: "I, Valentyna Andriivna Havryliuk, came to the British Ophthalmology Center on the recommendation of my sons’ friends, who were very satisfied after their eye surgeries. \nThe service is very attentive and efficient. I was operated on by Dr. Vita Konstantynivna Konstantinova. She is a magician of a doctor. I am very grateful to her because I now see as I did in my youth before my wedding. Now, as a retiree, my vision brings me great joy and makes me a happy person. \nWishing everyone good health.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Осіпов Олександр Сергійович",
            text: "Я, Осіпов Олександр Сергійович з успіхом вилікував свою короткозорість завдяки лікарям та медичному персоналу клініки «Британський офтальмологічний центр».\nЗ великою подякою! Успіхів Вам Всім!!! \nP.S. Слава Україні !",
        },
        ru: {
            name: "Осипов Александр Сергеевич",
            text: "Я, Осипов Александр Сергеевич, успешно вылечил свою близорукость благодаря врачам и медицинскому персоналу клиники «Британский офтальмологический центр».\nС огромной благодарностью! Успехов вам всем!!! \nP.S. Слава Украине!",
        },
        en: {
            name: "Oleksandr Serhiiovych Osipov",
            text: "I, Oleksandr Serhiiovych Osipov, successfully cured my nearsightedness thanks to the doctors and medical staff of the British Ophthalmology Center.\nWith great gratitude! Wishing you all success!!! \nP.S. Glory to Ukraine!",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Таритіна Наталя",
            text: "Щиро дякую «Британському офтальмологічному центру» за високу якість надання послуг. Робила операцію по заміні кришталика на лівому оці. Чарівні руки лікаря, Скапи Василя Івановича, швидко й вправно впорались з моєю проблемою. Як справжній снайпер, Василь Іванович, очищував моє око від всього зайвого і повернув мені можливість бачити. НЕ можу не подякувати лікарю Михайловській Марії Сергіївні, яка проводила перший огляд та виявила мою проблему. Велика подяка всьому персоналу клініки. Ви – справжні професіонали своєї справи, добрі, щирі, позитивні, Ви просто круті! Дякую, що Ви в мене є ! \nЗдоров’я, Перемоги та Миру всім ! \nЗ повагою і вдячністю, Таритіна Наталя.",
        },
        ru: {
            name: "Таритина Наталья",
            text: "Искренне благодарю «Британский офтальмологический центр» за высокое качество предоставляемых услуг. Мне делали операцию по замене хрусталика на левом глазу. Волшебные руки врача Василия Ивановича Скапы быстро и умело справились с моей проблемой. Как настоящий снайпер, Василий Иванович очищал мой глаз от всего лишнего и вернул мне возможность видеть. Не могу не поблагодарить врача Марию Сергеевну Михайловскую, которая провела первый осмотр и выявила мою проблему. Огромная благодарность всему персоналу клиники. Вы – настоящие профессионалы своего дела, добрые, искренние, позитивные, Вы просто крутые! Спасибо, что вы есть у меня! \nЗдоровья, Победы и Мира всем! \nС уважением и благодарностью, Таритина Наталья.",
        },
        en: {
            name: "Natalia Taritina",
            text: "I sincerely thank the British Ophthalmology Center for the high quality of services provided. I had lens replacement surgery on my left eye. The skilled hands of Dr. Vasyl Ivanovych Skapa handled my problem quickly and efficiently. Like a true sniper, Dr. Skapa cleared my eye of everything unnecessary and restored my ability to see. I cannot forget to thank Dr. Mariya Serhiivna Mykhailovska, who conducted the first examination and identified my issue. Huge thanks to all the clinic staff. You are true professionals, kind, sincere, positive, and simply amazing! Thank you for being there for me! \nWishing health, victory, and peace to everyone! \nWith respect and gratitude, Natalia Taritina.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Porohivnyk.webp",
        uk: {
            name: "Порохівник Григорій Іванович",
            text: "Мене звати Порохівник Григорій Іванович, мені 65 років і я пацієнт “Британського офтальмологічного центра”. \nТак трапилось в моєму житті, що я не сильно приділяв увагу своєму здоров’ю, в тому числі і здоров’ю своїх очей. Приблизно півтора року тому я був у офтальмолога і якщо чесно то ніяких дій зі стабілізації катаракти не робив. Проблеми почалися тоді, коли я зрозумів, що погано визначаю дистанцію до об’єкта і керувати автомобілем мені некомфортно. Звертався у три клініки, разом із дружиною, до того ж дружині порадили два варіанти: від треба негайно робити операцію, до початкової стадії і не треба робити. Загалом платна медицини. \nПочав моніторити інтернет. Знайшов безліч відеороликів від Олексія (не офтальмолог), за що йому окрема подяка. Особисто мені він дуже допоміг, тим більше, якщо я про це практично нічого не знав. \nНайголовніше це кваліфікація хірурга, лікаря, що підбирає параметри лінзи та якісне обладнання. На превеликий жаль вибір лінзи наданий вам особисто та гарантії того, що результат буде відповідати вашим очікуванням ніхто не дасть. \nМені пощастило, огляд та всі виміри мені робила чудовий лікар, українка, спортсменка та прекрасна людина Рудяк Уляна Іванівна. Якщо вам потрібна консультація, звертайтесь до неї й не помилитеся. Це найкращий офтальмолог, що зустрівся у моєму житті. З вибором хірурга, що оперує, мені пощастило ще більше. Це Гавура М.О., золоті руки, плюс найвища кваліфікація і така сама золота душа, любов до своєї роботи та людей, ось що характеризує цю людину. Атмосфера в клініці доброзичлива та приємна. Дякую всім, хто брав участь у проведенні операції, а також співробітникам клініки. \nСьогодні п’ятий день. Іду на консультацію. Думаю, що під час перевірки буде близько ста відсотків. Бачу як у далечінь, так і поблизу добре (з прорахунком параметрів не помилилися). Лінза TECNIS Symfony з корекцією астигматизму. У вечірній час на яскравих джерелах є артефакти у вигляді променів або гало. Сподіваюсь, що пройде, але й так миритися можна. Яскравість зображення в нічний час така, як і здоровим оком. \nЩе раз величезне всім ДЯКУЮ!!!",
        },
        ru: {
            name: "Пороховник Григорий Иванович",
            text: "Меня зовут Пороховник Григорий Иванович, мне 65 лет и я пациент «Британского офтальмологического центра».\nТак получилось в моей жизни, что я не уделял особого внимания своему здоровью, в том числе и здоровью своих глаз. Примерно полтора года назад я был у офтальмолога и, если честно, никаких действий по стабилизации катаракты не предпринимал. Проблемы начались тогда, когда я понял, что плохо определяю дистанцию до объекта и управлять автомобилем мне некомфортно. Обращался в три клиники вместе с женой, к тому же ей посоветовали два варианта: от «срочно нужно делать операцию» до «начальная стадия, и операцию пока не надо». В общем, платная медицина.\nНачал мониторить интернет. Нашёл множество видеороликов от Алексея (не офтальмолог), за что ему отдельное спасибо. Лично мне он очень помог, тем более если я об этом практически ничего не знал.\nСамое главное — это квалификация хирурга, врача, который подбирает параметры линзы, и качественное оборудование. К сожалению, выбор линзы предоставляется вам лично, и гарантии того, что результат будет соответствовать вашим ожиданиям, никто не даст.\nМне повезло, осмотр и все измерения мне делала замечательный врач, украинка, спортсменка и прекрасный человек — Рудяк Ульяна Ивановна. Если вам нужна консультация, обращайтесь к ней — не ошибётесь. Это лучший офтальмолог, которого я встречал в своей жизни. С выбором оперирующего хирурга мне повезло ещё больше. Это Гавура М.А., золотые руки, высочайшая квалификация и золотая душа, любовь к своей работе и людям — вот что характеризует этого человека. Атмосфера в клинике доброжелательная и приятная. Спасибо всем, кто принимал участие в проведении операции, а также сотрудникам клиники.\nСегодня пятый день. Иду на консультацию. Думаю, что при проверке будет около ста процентов. Вижу как вдаль, так и вблизи хорошо (с расчётом параметров не ошиблись). Линза TECNIS Symfony с коррекцией астигматизма. В вечернее время на ярких источниках есть артефакты в виде лучей или гало. Надеюсь, что пройдёт, но даже так можно мириться. Яркость изображения ночью такая же, как и здоровым глазом.\nЕщё раз огромное всем СПАСИБО!!!",
        },
        en: {
            name: "Porokhivnyk Hryhorii Ivanovych",
            text: "My name is Porokhivnyk Hryhorii Ivanovych, I am 65 years old and a patient of the British Ophthalmological Center.\nIt so happened in my life that I did not pay much attention to my health, including the health of my eyes. About a year and a half ago, I visited an ophthalmologist, and to be honest, I did nothing to stabilize my cataract. Problems began when I realized that I could not properly determine the distance to objects, and driving became uncomfortable for me. I visited three clinics together with my wife, and she was given two very different opinions: from “you urgently need surgery” to “it’s just the initial stage and no surgery is needed yet.” Such is private medicine.\nI started searching the internet. I found many videos by Oleksii (not an ophthalmologist), for which I am especially grateful. Personally, he helped me a lot, especially since I practically knew nothing about this before.\nThe most important thing is the qualification of the surgeon, the doctor who selects the lens parameters, and the quality of the equipment. Unfortunately, the choice of lens is left to you personally, and no one can guarantee that the result will fully meet your expectations.\nI was lucky — the examination and all measurements were done by a wonderful doctor, a Ukrainian, an athlete, and a great person, Rudiak Uliana Ivanivna. If you need a consultation, contact her — you won’t be mistaken. She is the best ophthalmologist I have met in my life. With the choice of surgeon, I was even luckier. It was Havura M.O. — golden hands, the highest qualification, and a golden soul, love for his work and for people — this is what characterizes him. The atmosphere in the clinic is friendly and pleasant. Thanks to everyone who took part in my surgery and to all the staff of the clinic.\nToday is the fifth day. I am going for a follow-up consultation. I think the test will show close to one hundred percent. I see both far and near well (the lens parameters were calculated correctly). I received a TECNIS Symfony lens with astigmatism correction. In the evening, bright lights show some artifacts like rays or halos. I hope this will go away, but even so, it’s manageable. The brightness of the image at night is the same as with my healthy eye.\nOnce again, a huge THANK YOU to everyone!!!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Царик.webp",
        uk: {
            name: "Царик Володимир Якович",
            text: "Я, Царик Володимир Якович, зробив операцію катаракта. Я дуже задоволений результатом операції. Дуже дякуємо лікарям, які вернули зір і радість до життя, а також всьому персоналу. Все так злагоджено, велика увага до пацієнтів. Дякую Вам за клопітку роботу. \nЗ повагою до Вас Царик В.Я.",
        },
        ru: {
            name: "Царик Владимир Яковлевич",
            text: "Я, Царик Владимир Яковлевич, сделал операцию по поводу катаракты. Я очень доволен результатом операции. Огромная благодарность врачам, которые вернули зрение и радость жизни, а также всему персоналу. Всё слаженно, большое внимание к пациентам. Спасибо вам за кропотливую работу.\nС уважением, Царик В.Я.",
        },
        en: {
            name: "Tsaryk Volodymyr Yakovych",
            text: "I, Tsaryk Volodymyr Yakovych, underwent cataract surgery. I am very satisfied with the result of the operation. Many thanks to the doctors who restored my vision and brought back joy to life, as well as to all the staff. Everything is well-organized, with great attention to patients. Thank you for your hard work.\nWith respect, Tsaryk V.Y.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Харлановський.webp",
        uk: {
            name: "Харлановський Григорій Михайлович",
            text: "Дякую колективу «Британського офтальмологічного центру» за прекрасну консультацію та операцію по видаленню катаракти. Дякую лікарю Рудяк У.І. за чуйне та професійне відношення.",
        },
        ru: {
            name: "Харлановский Григорий Михайлович",
            text: "Благодарю коллектив «Британского офтальмологического центра» за прекрасную консультацию и операцию по удалению катаракты. Спасибо врачу Рудяк У.И. за чуткое и профессиональное отношение.",
        },
        en: {
            name: "Kharlanovskyi Hryhorii Mykhailovych",
            text: "I would like to thank the team of the British Ophthalmological Center for the excellent consultation and cataract surgery. Special thanks to Dr. Rudiak U.I. for her sensitive and professional attitude.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Саса.webp",
        uk: {
            name: "Саса Таїсія Василівна",
            text: "По рекомендації брата звернулась в «Британський офтальмологічний центр» з проблемою лікування катаракти. Хотілося б відмітити організованість та професіоналізм персоналу на всіх етапах перебування в центрі. Операцію по видаленню катаракти пройшла успішно, зір відновився на 100%. Дякую персоналу та лікарям за майстерність, людяність та професіоналізм. \nОсоблива подяка Рудяк У.І., Гавура М.О. та Козюрі М.А. \nОднозначна рекомендуватиму даний центр для вирішення проблем із зором. Дякую, так тримати. Ви найкращі.",
        },
        ru: {
            name: "Саса Таисия Васильевна",
            text: "По рекомендации брата обратилась в «Британский офтальмологический центр» для лечения катаракты. Хочу отметить организованность и профессионализм персонала на всех этапах пребывания в центре. Операция по удалению катаракты прошла успешно, зрение восстановилось на 100%. Благодарю персонал и врачей за мастерство, человечность и профессионализм. \nОсобая благодарность Рудяк У.И., Гавура М.О. и Козюре М.А. \nОднозначно буду рекомендовать этот центр для решения проблем со зрением. Спасибо, так держать. Вы лучшие.",
        },
        en: {
            name: "Taisia Vasylivna Sasa",
            text: "On the recommendation of my brother, I visited the British Ophthalmology Center for cataract treatment. I would like to note the organization and professionalism of the staff at all stages of my stay at the center. The cataract removal surgery was successful, and my vision was restored to 100%. I thank the staff and doctors for their skill, humanity, and professionalism. \nSpecial thanks to U.I. Rudyak, M.O. Havura, and M.A. Kozyura. \nI will definitely recommend this center for solving vision problems. Thank you, keep it up. You are the best.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Музика.webp",
        uk: {
            name: "Музика Василь Петрович",
            text: "Дуже вдячний «Британському офтальмологічному центру» за надання послуги по видаленню катаракти і приємне спілкування та обслуговування. Буду рекомендувати всім своїм знайомим центр. Дуже вдячний «Британському офтальмологічному центру» за турботу до пацієнтів.",
        },
        ru: {
            name: "Музыка Василий Петрович",
            text: "Очень благодарен «Британскому офтальмологическому центру» за предоставленную услугу по удалению катаракты, приятное общение и обслуживание. Буду рекомендовать центр всем своим знакомым. Большая благодарность «Британскому офтальмологическому центру» за заботу о пациентах.",
        },
        en: {
            name: "Vasyl Petrovych Muzyka",
            text: "I am very grateful to the British Ophthalmology Center for providing cataract removal services and for the pleasant communication and service. I will recommend the center to all my acquaintances. Many thanks to the British Ophthalmology Center for their care for patients.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Сидоренков.jpeg",
        uk: {
            name: "Сидоренков Є.П.",
            text: "Робили операцію з видалення катаракти батьку. Дуже вдячні Скапі Василю Івановичу і Гавура М.О. Дуже гарний прийом і організація. Обидві операції пройшли швидко та без ускладнень. Батько чудово бачить та дуже задоволений. Сподобалось те, що за пацієнтом ще місяць наглядають, щоб упевнитися, що все в порядку. Щиро вдячні лікарям і всьому персоналу клініки.",
        },
        ru: {
            name: "Сидоренков Е.П.",
            text: "Делали операцию по удалению катаракты моему отцу. Очень благодарны Василию Ивановичу Скапе и М.О. Гавуре. Очень хороший прием и организация. Обе операции прошли быстро и без осложнений. Отец прекрасно видит и очень доволен. Понравилось, что за пациентом наблюдают еще месяц, чтобы убедиться, что всё в порядке. Искренне благодарны врачам и всему персоналу клиники.",
        },
        en: {
            name: "Ye.P. Sydorenkov",
            text: "My father underwent cataract removal surgery. We are very grateful to Vasyl Ivanovych Skapa and M.O. Havura. The reception and organization were excellent. Both operations went quickly and without complications. My father sees perfectly and is very satisfied. We appreciated that the patient is monitored for another month to ensure everything is fine. Sincere thanks to the doctors and all clinic staff.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Рибак.webp",
        uk: {
            name: "Рибак Анжеліка Олегівна",
            text: "Щиро дякую Британському офтальмологічному центру за високу якість надання послуг. Все дуже сподобалось, особливо лікар Василь Іванович. Який проводив операцію з виправлення косоокості. З таким ставленням до пацієнтів, хочеться повертатися до Вас ще. Василь Іванович – спеціаліст своєї справи.",
        },
        ru: {
            name: "Рыбак Анжелика Олеговна",
            text: "Искренне благодарю Британский офтальмологический центр за высокое качество предоставляемых услуг. Всё очень понравилось, особенно врач Василий Иванович, который проводил операцию по исправлению косоглазия. С таким отношением к пациентам хочется возвращаться к вам снова. Василий Иванович – специалист своего дела.",
        },
        en: {
            name: "Rybak Anzhelika Olegivna",
            text: "I sincerely thank the British Ophthalmological Center for the high quality of services provided. I really liked everything, especially Dr. Vasyl Ivanovych, who performed the strabismus correction surgery. With such an attitude towards patients, you want to come back again. Vasyl Ivanovych is a true professional.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Біла Л.В.",
            text: "Дуже вдячна лікарям Штокалюк К.В. та Скапі В.І. за професійний огляд та лікування. Дякую за хороше відношення до пацієнта та доступне роз’яснення. Побільше таких лікарів. \nБіла Л.В.",
        },
        ru: {
            name: "Била Л.В.",
            text: "Очень благодарна врачам Штокалюк К.В. и Скапи В.И. за профессиональный осмотр и лечение. Спасибо за хорошее отношение к пациенту и доступное объяснение. Побольше бы таких врачей. \nБила Л.В.",
        },
        en: {
            name: "Bila L.V.",
            text: "I am very grateful to doctors Shtokalyuk K.V. and Skapi V.I. for the professional examination and treatment. Thank you for the good attitude towards the patient and the clear explanation. We need more doctors like them. \nBila L.V.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Харченко.jpg",
        uk: {
            name: "Харченко Петро Іванович",
            text: "Я, Харченко Петро Іванович, 10.07.1960. Щиро дякую лікарю Константіновій Віті Костянтинівні за вдало проведену операцію по видаленню катаракти. Також дякую всьому персоналу «Британського офтальмологічного центру». \nБудьте всі щасливі та здорові. Всім мирного неба.",
        },
        ru: {
            name: "Харченко Пётр Иванович",
            text: "Я, Харченко Пётр Иванович, 10.07.1960. Искренне благодарю врача Константинову Виту Константиновну за успешно проведённую операцию по удалению катаракты. Также благодарю весь персонал «Британского офтальмологического центра». \nБудьте все счастливы и здоровы. Всем мирного неба.",
        },
        en: {
            name: "Kharchenko Petro Ivanovych",
            text: "I, Kharchenko Petro Ivanovych, 10.07.1960. I sincerely thank Dr. Vita Konstantynivna Konstantinova for the successful cataract removal surgery. I also thank all the staff of the British Ophthalmological Center. \nWishing everyone happiness, health, and peaceful skies.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Третяк.jpg",
        uk: {
            name: "Третяк Ольга Петрівна",
            text: "Низький уклін та щира вдячність хірургу «Британського офтальмологічного центру» - Гавура М.О. за золоті руки, які справляються зі складною хворобою. Повертаєте зір, даруючи можливість нам, пацієнтам, бачити світ у всіх барвах та відчувати радість та щастя життя. Від щирого серця хочу подякувати лікарю-асистенту Скапі Василю Івановичу, анестезіологам Васковській Людмилі Сергіївні та Козюрі Максиму Анатолійовичу, медичним сестрам Філімоненко Яні Анатоліївні та Кохтачовій Тетяні Миколаївні та всій групі реєстраторів за доброту сердець, чуйність, відповідальність, організованість, надану мені допомогу та людяний підхід. Я щиро бажаю всім вам успішно рятувати своїх пацієнтів і робити свою велику справу. Здоров’я всім вам і вашим родинам, вдалої діяльності та щасливого довгого життя. Спасибі за вашу працю, за ваш професіоналізм, за вашу самовідданість.",
        },
        ru: {
            name: "Третяк Ольга Петровна",
            text: "Низкий поклон и искренняя благодарность хирургу «Британского офтальмологического центра» - Гавуре М.А. за золотые руки, которые справляются со сложной болезнью. Вы возвращаете зрение, даря пациентам возможность видеть мир во всех красках и ощущать радость и счастье жизни. От всего сердца хочу поблагодарить врача-ассистента Скапи Василия Ивановича, анестезиологов Васьковскую Людмилу Сергеевну и Козюру Максима Анатольевича, медсестёр Филимоненко Яну Анатольевну и Кохтачову Татьяну Николаевну, а также всю группу регистраторов за доброту сердец, чуткость, ответственность, организованность, оказанную мне помощь и человечный подход. Искренне желаю всем вам успешно спасать своих пациентов и продолжать своё великое дело. Здоровья вам и вашим семьям, удачной деятельности и счастливой долгой жизни. Спасибо за ваш труд, ваш профессионализм и вашу самоотдачу.",
        },
        en: {
            name: "Tretyak Olha Petrivna",
            text: "My deepest gratitude and sincere thanks to the surgeon of the British Ophthalmological Center - Havura M.O. for the golden hands that cope with such a complex disease. You restore vision, giving patients the opportunity to see the world in all its colors and to feel the joy and happiness of life. From the bottom of my heart, I also want to thank assistant doctor Skapi Vasyl Ivanovych, anesthesiologists Vaskovska Liudmyla Serhiivna and Kozyura Maksym Anatoliiovych, nurses Filimonenko Yana Anatoliivna and Kokhtachova Tetiana Mykolaivna, and the entire registration team for their kindness, responsiveness, responsibility, organization, the help provided to me, and their humane approach. I sincerely wish you all success in saving your patients and continuing your great work. Wishing you and your families good health, fruitful work, and a long happy life. Thank you for your work, your professionalism, and your dedication.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Рехтета.webp",
        uk: {
            name: "Рехтета Лідія Павлівна",
            text: "Я, Рехтета Лідія Павлівна, оперувалась в «Британському офтальмологічному центрі» по видаленню катаракти на правому оці. Центр знайшла за відгуками пацієнтів. Операція пройшла успішно. До операції на праве око бачила 3%, а після вже на другий день зір був 80%. Самопочуття чудове. Велика подяка всьому персоналу клініки за чудову роботу, чутливість, швидкість та якість обслуговування. Особлива подяка моєму хірургу Константиновій Віті Костянтинівні, за її прекрасні, золоті руки. Рекомендую звертатись до «Британського офтальмологічного центру».",
        },
        ru: {
            name: "Рехтета Лидия Павловна",
            text: "Я, Рехтета Лидия Павловна, оперировалась в «Британском офтальмологическом центре» по удалению катаракты на правом глазу. Центр нашла по отзывам пациентов. Операция прошла успешно. До операции на правый глаз видела 3%, а на следующий день зрение было уже 80%. Самочувствие отличное. Большая благодарность всему персоналу клиники за отличную работу, чуткость, скорость и качество обслуживания. Особая благодарность моему хирургу Вите Константиновой за её прекрасные, золотые руки. Рекомендую обращаться в «Британский офтальмологический центр».",
        },
        en: {
            name: "Lidiia Pavlivna Rekhteta",
            text: "I, Lidiia Pavlivna Rekhteta, underwent cataract surgery on my right eye at the British Ophthalmology Center. I found the center through patient reviews. The surgery was successful. Before the surgery, I could see 3% with my right eye, and by the next day my vision was 80%. I feel great. Many thanks to the entire clinic staff for their excellent work, attentiveness, speed, and quality of service. Special thanks to my surgeon Vita Konstantinova for her wonderful, skilled hands. I highly recommend the British Ophthalmology Center.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Мястківський Ігор Васильович",
            text: "Я, Мястківський Ігор Васильович висловлюю подяку Гавура М.О. Золоті руки. Дай Боже здоров’я і такої роботи на користь людям. Це вже друга операція по заміні кришталика в «Британському офтальмологічному центрі». \nЗ повагою, Мястківський І.В.",
        },
        ru: {
            name: "Мястковский Игорь Васильевич",
            text: "Я, Мястковский Игорь Васильевич, выражаю благодарность Гавуре М.О. Золотые руки. Да Бог даст здоровье и дальнейшую работу на благо людям. Это уже вторая операция по замене хрусталика в «Британском офтальмологическом центре». \nС уважением, Мястковский И.В.",
        },
        en: {
            name: "Ihor Vasylovych Myastkivskyi",
            text: "I, Ihor Vasylovych Myastkivskyi, express my gratitude to M.O. Havura. Skilled hands! May God grant health and continued work for the benefit of people. This is my second lens replacement surgery at the British Ophthalmology Center. \nSincerely, I.V. Myastkivskyi.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Вікован Іван Петрович",
            text: "Головному лікарю «Британського офтальмологічному центру» Гавура М.О. \nШановний, пане Андрію! Засвідчую свою повагу до Вас і вдячність всім тим, які сприяли та допомагали у відновленні мого зору під час операції та в період спостереження, проведення процедур. Зокрема, Вам особисто, лікарю-анестезіологу Максиму Козюрі, лікарю Катерині Штокалюк, Василю Скапі, а також медичній сестрі Тетяні Кохтачовій і медичному брату Павлу Нагорному. Під час перебування в центрі відчув увагу і чуйність, доброту, оперативність і пунктуальність співробітників центру до пацієнтів. Звернув увагу на спілкування виключно рідною мовою, українською. Молодці!!! Бажаю нових, творчих успіхів, добра, удачі, мирного неба. З Новим Роком і Різдвом Христовим! \nЗ повагою, Вікован Іван.",
        },
        ru: {
            name: "Викован Иван Петрович",
            text: "Главному врачу «Британского офтальмологического центра» Гавуре М.О. \nУважаемый Андрей! Выражаю своё уважение и благодарность всем, кто способствовал восстановлению моего зрения во время операции и в период наблюдения и процедур. В частности, Вам лично, анестезиологу Максиму Козюре, врачу Екатерине Штокалюк, Василию Скапе, а также медсестре Татьяне Кохтачевой и медицинскому брату Павлу Нагорному. Во время пребывания в центре ощущалась забота, чуткость, доброта, оперативность и пунктуальность сотрудников по отношению к пациентам. Обратил внимание, что общение велось исключительно на родном языке, украинском. Молодцы! Желаю новых творческих успехов, добра, удачи и мирного неба. С Новым годом и Рождеством Христовым! \nС уважением, Викован Иван.",
        },
        en: {
            name: "Ivan Petrovych Vikovan",
            text: "To the Chief Doctor of the British Ophthalmology Center, M.O. Havura, \nDear Mr. Andriy! I wish to express my respect and gratitude to everyone who contributed and helped restore my vision during the surgery and follow-up procedures. Special thanks to you personally, anesthesiologist Maksym Kozyura, Dr. Kateryna Shtokalyuk, Vasyl Skapa, nurse Tetyana Kokhtachova, and medical assistant Pavlo Nahornyi. During my stay at the center, I felt attention, kindness, responsiveness, and punctuality from all staff. I also appreciated that communication was conducted exclusively in my native language, Ukrainian. Excellent work! Wishing you new creative achievements, goodness, success, and peaceful skies. Happy New Year and Merry Christmas! \nSincerely, Ivan Vikovan.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Власенко.jpg",
        uk: {
            name: "Власенко Михайло Романович",
            text: "Я, Власенко Михайло Романович! Хочу щиро завдячити усім працівникам цього медичного закладу, починаючи з самого низу і до верху, за чуйне ставлення, за терпіння, за повагу до пацієнтів різного віку. А особливо приношу щиросердну подяку лікарю Віті Костянтинівні за її професіоналізм, як хірурга з великої літери, за чуйне її серце, щиру душу, за її невтомну працю на медичній ниві. Хай Господь дає їй роки щасливі, жіночого щастя, міцного здоров’я ще на многії та благі літа. Значну ще подяку головному лікарю, за вміння та організацію цієї клініки від самого низу аж до верху. Хай Господь Вас усіх береже!",
        },
        ru: {
            name: "Власенко Михаил Романович",
            text: "Я, Власенко Михаил Романович! Хочу искренне поблагодарить всех сотрудников этого медицинского учреждения, начиная с самого низа и до верха, за чуткое отношение, терпение, уважение к пациентам разного возраста. А особенно выражаю сердечную благодарность врачу Вите Константиновне за её профессионализм, как хирурга с большой буквы, за чуткое сердце, искреннюю душу, за её неустанный труд на медицинском поприще. Пусть Господь дарует ей счастливые годы, женское счастье, крепкое здоровье ещё на многие и благие лета. Особая благодарность главному врачу за умение и организацию этой клиники от самого низа и до верха. Пусть Господь всех вас хранит!",
        },
        en: {
            name: "Vlasenko Mykhailo Romanovych",
            text: "I, Vlasenko Mykhailo Romanovych! I sincerely want to thank all the staff of this medical institution, from the very bottom to the top, for their caring attitude, patience, and respect for patients of all ages. I especially bring heartfelt gratitude to Dr. Vita Konstantynivna for her professionalism as a surgeon with a capital 'S', for her compassionate heart, sincere soul, and tireless work in the medical field. May the Lord grant her many happy years, women’s happiness, and strong health for many more blessed years. Special thanks also to the chief doctor for the skills and organization of this clinic from the bottom to the top. May the Lord protect you all!",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Бережна Лариса Іванівна",
            text: "Хочу висловити слова щирої подяки всьому колективу «Британського офтальмологічного центру». За Вашу працю, за Ваш професіоналізм, людське ставлення, увагу, привітність. Ваша праця – безцінна. Дякую Вам за допомогу, за виконану роботу, за можливість повноцінного життя. Бажаю всім здоров’я, достатку, сил і безмежних можливостей, наснаги та миру. \nОсоблива увага лікарю-хірургу Костянтиновій Віті Костянтинівні за професіоналізм і майстерність. Дякую Вам за ваші старання та знання, за Вашу чуйність, доброту. Ви чудовий лікар і я бажаю Вам допомогти ще багатьом людям, кожен день відзначаючи перемогою над проблемами і отримуючи в якості нагороди посмішки вдячних пацієнтів і повагу оточуючих. \nЗ великою повагою, Бережна Лариса Іванівна.",
        },
        ru: {
            name: "Бережная Лариса Ивановна",
            text: "Хочу выразить слова искренней благодарности всему коллективу «Британского офтальмологического центра». За ваш труд, за ваш профессионализм, человеческое отношение, внимание, приветливость. Ваш труд – бесценен. Спасибо вам за помощь, за выполненную работу, за возможность полноценной жизни. Желаю всем здоровья, достатка, сил и безграничных возможностей, вдохновения и мира. \nОсобая благодарность врачу-хирургу Константиновой Вите Константиновне за профессионализм и мастерство. Спасибо вам за ваши старания и знания, за вашу чуткость, доброту. Вы замечательный врач, и я желаю вам помочь ещё многим людям, каждый день отмечая победами над проблемами и получая в награду улыбки благодарных пациентов и уважение окружающих. \nС большим уважением, Бережная Лариса Ивановна.",
        },
        en: {
            name: "Berezhnа Larysa Ivanivna",
            text: "I would like to express my sincere gratitude to the entire team of the British Ophthalmological Center. For your work, your professionalism, your humane attitude, attention, and kindness. Your work is priceless. Thank you for your help, the work you have done, and for giving me the opportunity to live a full life. I wish everyone health, prosperity, strength, boundless opportunities, inspiration, and peace. \nSpecial thanks to surgeon Dr. Vita Konstantynivna Konstantinova for her professionalism and mastery. Thank you for your efforts and knowledge, for your sensitivity and kindness. You are a wonderful doctor, and I wish you to help many more people, marking each day with victories over problems and receiving as a reward the smiles of grateful patients and the respect of others. \nWith great respect, Berezhna Larysa Ivanivna.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Єрьоменко.jpg",
        uk: {
            name: "Єрьоменко Валентина Анатоліївна",
            text: "Я, Єрьоменко Валентина Анатоліївна хочу подякувати всьому колективу «Британського офтальмологічного центру» за вдало проведену операцію по видаленню катаракти двох очей. Константіновій Віті Костянтинівні. Я навіть не чекала такого результату. Дякую всім. Всім медичним медсестрам, лікарям, всім. Всім за чуйність, ввічливість та професіоналізм. Нехай Вам щастить! \nТакож хочу побажати всьому колективу центру найкращого, бо вони дають зір і це дуже круто. З наступаючим Новим Роком!",
        },
        ru: {
            name: "Ерьоменко Валентина Анатольевна",
            text: "Я, Ерьоменко Валентина Анатольевна, хочу поблагодарить весь коллектив «Британского офтальмологического центра» за успешно проведённую операцию по удалению катаракты двух глаз. Константиновой Вите Константиновне. Я даже не ожидала такого результата. Спасибо всем. Всем медицинским сёстрам, врачам, всем. Всем за чуткость, вежливость и профессионализм. Пусть вам повезёт! \nТакже хочу пожелать всему коллективу центра всего наилучшего, ведь вы дарите зрение – и это очень круто. С наступающим Новым годом!",
        },
        en: {
            name: "Yeromenko Valentyna Anatoliivna",
            text: "I, Yeromenko Valentyna Anatoliivna, want to thank the entire team of the British Ophthalmological Center for the successful cataract surgery on both eyes. Special thanks to Dr. Vita Konstantynivna Konstantinova. I did not even expect such a result. Thank you to everyone – all the nurses, doctors, everyone. Thank you all for your sensitivity, politeness, and professionalism. Good luck to you! \nI also want to wish the entire team of the center all the best, because you give people vision – and that is amazing. Happy upcoming New Year!",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Кірякова М.Й.",
            text: "Я, Кірякова М.Й., приїхала з Івано-Франківська 08.11.2022 року і вже 22.11.2022 мені зробили операцію, по видаленню катаракти, в «Британському офтальмологічному центрі», в м.Києві. Операція пройшла успішно. Дуже велика подяка лікарям, Гавура М.О. та Константінова В.К., за те, що я тепер ходжу по вулиці без окулярів та радію всім кольорам веселки!",
        },
        ru: {
            name: "Кирякова М.Й.",
            text: "Я, Кирякова М.Й., приехала из Ивано-Франковска 08.11.2022 года, и уже 22.11.2022 мне сделали операцию по удалению катаракты в «Британском офтальмологическом центре» в г. Киев. Операция прошла успешно. Огромная благодарность врачам Гавуре М.О. и Константиновой В.К. за то, что теперь я хожу по улице без очков и радуюсь всем цветам радуги!",
        },
        en: {
            name: "M.Y. Kiryakova",
            text: "I, M.Y. Kiryakova, came from Ivano-Frankivsk on 08.11.2022 and on 22.11.2022 underwent cataract surgery at the British Ophthalmology Center in Kyiv. The surgery was successful. Many thanks to the doctors M.O. Havura and V.K. Konstantinova, as I can now walk outside without glasses and enjoy all the colors of the rainbow!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/ТугальовСВ.jpg",
        uk: {
            name: "Тугальов С.В.",
            text: "Я, Тугальов С.В. з м. Краматорська, пройшов лікування в “Британському офтальмологічному центрі”. Була дуже застаріла катаракта обох очей, після операції почуваюся чудово. Дуже вдячний хірургу Гавура М.О., всьому персоналу центру, адміністраторам, медсестрам, всі дуже ввічливі, професійні, чуйні. Вся робота поставлена чітко, грамотно, на вищому рівні. Буду рекомендувати ваш центр всім своїм знайомим, колегам, родичам. З вдячністю, Тугальов С.В.",
        },
        ru: {
            name: "Тугальев С.В.",
            text: "Я, Тугальев С.В. из г. Краматорска, прошёл лечение в «Британском офтальмологическом центре». Была очень запущенная катаракта обоих глаз, после операции чувствую себя прекрасно. Огромная благодарность хирургу Гавуре М.О., всему персоналу центра, администраторам, медсёстрам, все очень вежливы, профессиональны и внимательны. Вся работа организована чётко, грамотно, на высоком уровне. Буду рекомендовать ваш центр всем своим знакомым, коллегам и родственникам. С благодарностью, Тугальев С.В.",
        },
        en: {
            name: "S.V. Tuhalov",
            text: "I, S.V. Tuhalov from Kramatorsk, underwent treatment at the British Ophthalmology Center. I had a very advanced cataract in both eyes, and after the surgery I feel great. Many thanks to surgeon M.O. Havura, all center staff, administrators, and nurses. Everyone was polite, professional, and attentive. The work was organized clearly and efficiently at the highest level. I will recommend your center to all my friends, colleagues, and relatives. With gratitude, S.V. Tuhalov.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Костюк.webp",
        uk: {
            name: "Костюк В.І.",
            text: "Я, Костюк В.І. – один з багатотисячних клієнтів “Британського офтальмологічного центру”, хочу виразити свою подяку центру за його благодійну справу по відновленню зору українців, а також за той процес, як це все організовано. \nОсобливо хочу подякувати хірургам Константіновій В.К. та Гавура М.О., які відновили мені зір, змінили моє життя в набагато кращу сторону (зовсім інші зорові відчуття). Одним словом – повернули мене до повноцінного життя. \nЗ повагою, Костюк В.І.",
        },
        ru: {
            name: "Костюк В.И.",
            text: "Я, Костюк В.И. – один из многочисленных клиентов «Британского офтальмологического центра», хочу выразить благодарность центру за его благотворительную деятельность по восстановлению зрения украинцев, а также за организацию всего процесса. \nОсобая благодарность хирургам В.К. Константиновой и М.О. Гавуре, которые восстановили мне зрение и изменили мою жизнь к лучшему (совершенно новые зрительные ощущения). Одним словом – вернули меня к полноценной жизни. \nС уважением, В.И. Костюк.",
        },
        en: {
            name: "V.I. Kostiuk",
            text: "I, V.I. Kostiuk – one of the many clients of the British Ophthalmology Center, wish to express my gratitude to the center for its charitable work restoring vision for Ukrainians, as well as for the way the entire process was organized. \nSpecial thanks to surgeons V.K. Konstantinova and M.O. Havura, who restored my vision and changed my life for the better (completely new visual experience). In short – they brought me back to a full life. \nSincerely, V.I. Kostiuk.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Кузін-ВМ.jpg",
        uk: {
            name: "Кузін Віктор Миколайович",
            text: "Я, Кузін Віктор Миколайович, який був військовослужбовцем п-к. Я висловлюю подяку моєму лікарю Костянтиновій В.К. за вдало проведену операцію на обох очах. Доля так розпорядилася, перша операція була проведена у шпиталі у 2010 році, а друга тут у “Британському офтальмологічному центрі”. Ще раз дякую лікарю за обидві операції, а головне за людяність і уважність до пацієнта (до мене). Більше б нам таких лікарів. \nДякую! В. Кузін.",
        },
        ru: {
            name: "Кузин Виктор Николаевич",
            text: "Я, Кузин Виктор Николаевич, бывший военнослужащий п-к. Выражаю благодарность моему врачу Константиновой В.К. за успешно проведённые операции на обоих глазах. Судьба распорядилась так, что первая операция была проведена в госпитале в 2010 году, а вторая здесь, в «Британском офтальмологическом центре». Ещё раз благодарю врача за обе операции, а главное – за человечность и внимание к пациенту (ко мне). Побольше бы нам таких врачей. \nСпасибо! В. Кузин.",
        },
        en: {
            name: "Kuzin Viktor Mykolayovych",
            text: "I, Kuzin Viktor Mykolayovych, a former military officer (colonel), express my gratitude to my doctor, Kostyantynova V.K., for the successful surgeries on both eyes. Fate arranged it so that the first surgery was performed in a hospital in 2010, and the second here at the 'British Ophthalmological Center'. Once again, I thank the doctor for both surgeries, and most importantly, for her humanity and attentiveness to the patient (to me). We need more doctors like her. \nThank you! V. Kuzin.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Лялька.jpg",
        uk: {
            name: "Лялька Людмила Миколаївна",
            text: "Я, Лялька Людмила сьогодні щаслива людина. Я знов бачу 100%. Яка це радість. Я дуже вдячна своєму лікареві хірургу Костянтиновій В.К. яка успішно провела операцію малоінвазивного видалення катаракти з імплантацією інтраокулярної лінзи. Роками носила окуляри. Наскільки це не зручно. Навіть на прохання рідних не хотіла перевірки зору, бо боялася операцію. Обидві операції пройшли успішно. Я дуже щаслива, що старість проживу зряча. Одне око прооперувало 8.11.2022 р. Друге око оперувало 9.11.2022 р. І огляд 10.11.2022 р. вже можу бачити вдалину і читати без окулярів.",
        },
        ru: {
            name: "Лялька Людмила Николаевна",
            text: "Я, Лялька Людмила, сегодня счастливый человек. Я снова вижу на 100%. Какая это радость. Я очень благодарна своему врачу-хирургу Константиновой В.К., которая успешно провела операцию малоинвазивного удаления катаракты с имплантацией интраокулярной линзы. Годами носила очки. Насколько это неудобно. Даже по просьбе родных не хотела проверять зрение, потому что боялась операции. Обе операции прошли успешно. Я очень счастлива, что старость проведу зрячей. Одно глаз прооперировали 08.11.2022 г., второе — 09.11.2022 г. И уже при осмотре 10.11.2022 г. могу видеть вдаль и читать без очков.",
        },
        en: {
            name: "Lyalkа Lyudmyla Mykolaivna",
            text: "I, Lyalkа Lyudmyla, am a happy person today. I can see 100% again. What a joy this is. I am very grateful to my surgeon, Kostyantynova V.K., who successfully performed the minimally invasive cataract removal surgery with intraocular lens implantation. For years I wore glasses. How inconvenient it was. Even at the request of my relatives, I did not want to check my vision because I was afraid of surgery. Both operations went successfully. I am very happy that I will live my old age with sight. One eye was operated on 08.11.2022, the second on 09.11.2022. And at the check-up on 10.11.2022, I could already see into the distance and read without glasses.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Трофимова.jpg",
        uk: {
            name: "Трофимова Н. А.",
            text: "З повагою та вдячністю чудовому колективу Британського офтальмологічного центру. \nВеликі люди великої держави, \nВеликою Британією звем їх, \nВони достойні честі й слави, \nБо зір вертають людям в наші дні. \nУ грудях їх - серця гарячі \n і руки їх дарують щиру радість, \n Вони працюють, щоб стали люди зрячі \nі не зважають ці трудяги на усталість. \nТут янголи небесні працюють в тілі, \nВони творять діла чудесні на землі, \nЯк хочеться скоріше жити в мирі \nі дякувать за все, що бачиш навкруги! \nВсі лікарі у клініці уважні, \nЇх Бог послав на землю помагать, \nВідношення до пацієнтів тут поважне \nі кожен з нас їм хоче дякувать. \nВеликі Україна та Британія - \nНайкращі друзі на багато років, \nНе тільки клініка нас ця сьогодні зв'язує, \nА щира дружба і в одне майбутнє кроки! \nЗ повагою ваша пацієнтка \nТрофимова Ніна Анатоліївна.",
        },
        ru: {
            name: "Трофимова Н. А.",
            text: "З повагою та вдячністю чудовому колективу Британського офтальмологічного центру. \nВеликі люди великої держави, \nВеликою Британією звем їх, \nВони достойні честі й слави, \nБо зір вертають людям в наші дні. \nУ грудях їх - серця гарячі \n і руки їх дарують щиру радість, \n Вони працюють, щоб стали люди зрячі \nі не зважають ці трудяги на усталість. \nТут янголи небесні працюють в тілі, \nВони творять діла чудесні на землі, \nЯк хочеться скоріше жити в мирі \nі дякувать за все, що бачиш навкруги! \nВсі лікарі у клініці уважні, \nЇх Бог послав на землю помагать, \nВідношення до пацієнтів тут поважне \nі кожен з нас їм хоче дякувать. \nВеликі Україна та Британія - \nНайкращі друзі на багато років, \nНе тільки клініка нас ця сьогодні зв'язує, \nА щира дружба і в одне майбутнє кроки! \nЗ повагою ваша пацієнтка \nТрофимова Ніна Анатоліївна.",
        },
        en: {
            name: "Trofimova N.A.",
            text: "З повагою та вдячністю чудовому колективу Британського офтальмологічного центру. \nВеликі люди великої держави, \nВеликою Британією звем їх, \nВони достойні честі й слави, \nБо зір вертають людям в наші дні. \nУ грудях їх - серця гарячі \n і руки їх дарують щиру радість, \n Вони працюють, щоб стали люди зрячі \nі не зважають ці трудяги на усталість. \nТут янголи небесні працюють в тілі, \nВони творять діла чудесні на землі, \nЯк хочеться скоріше жити в мирі \nі дякувать за все, що бачиш навкруги! \nВсі лікарі у клініці уважні, \nЇх Бог послав на землю помагать, \nВідношення до пацієнтів тут поважне \nі кожен з нас їм хоче дякувать. \nВеликі Україна та Британія - \nНайкращі друзі на багато років, \nНе тільки клініка нас ця сьогодні зв'язує, \nА щира дружба і в одне майбутнє кроки! \nЗ повагою ваша пацієнтка \nТрофимова Ніна Анатоліївна.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/ТрофимоваA.jpg",
        uk: {
            name: "Трофимова А.В.",
            text: "Я, Трофімова А.В., звернулася до Британського офтальмологічного центру з приводу корекції зору. Дуже дякую всьому персоналу центу за ввічливе обслуговування. А особливо лікаря-хірурга Костянтинова В.К. , лікаря анестезіолога Козюрі М.А., за їхні золоті руки, професіоналізм Нехай усіх вас береже Бог, будьте щасливі та здорові. Мирного неба!",
        },
        ru: {
            name: "Трофимова А.В.",
            text: "Я, Трофимова А.В., обратилась в Британский офтальмологический центр по поводу коррекции зрения. Большое спасибо всему персоналу центра за вежливое обслуживание. Особая благодарность хирургу Константинову В.К. и анестезиологу Козюре М.А. за их золотые руки и профессионализм. Пусть Бог всех вас хранит, будьте счастливы и здоровы. Мирного неба!",
        },
        en: {
            name: "A.V. Trofimova",
            text: "I, A.V. Trofimova, came to the British Ophthalmology Center for vision correction. Many thanks to all the center staff for their polite service. Special thanks to surgeon V.K. Konstantinov and anesthesiologist M.A. Kozyura for their golden hands and professionalism. May God bless you all, be happy and healthy. Peaceful skies!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Дорофєєв.jpg",
        uk: {
            name: "Дорофєєв Валерій Степанович",
            text: "Лікував обидва ока у «Британському офтальмологічному центрі». У великому захваті від усього колективу ввічливих, вихованих та кваліфікованих співробітників. Особлива подяка за працю лікаря-хірурга Константинова В.К. та анестезіологу Козюру М.А. , уважний, висококваліфікований, добрий. Велика подяка! З повагою до всіх працівників центру. \nДорофєєв Валерій Степанович.",
        },
        ru: {
            name: "Дорофеев Валерий Степанович",
            text: "Лечил оба глаза в «Британском офтальмологическом центре». В полном восторге от всего коллектива вежливых, воспитанных и квалифицированных сотрудников. Особая благодарность хирургу Константинову В.К. и анестезиологу Козюре М.А., внимательные, высококвалифицированные и добрые. Огромная благодарность! С уважением ко всем сотрудникам центра. \nДорофеев Валерий Степанович.",
        },
        en: {
            name: "Valerii Dorofeev",
            text: "I had both eyes treated at the British Ophthalmology Center. I am very impressed with the entire team of polite, well-mannered, and highly skilled staff. Special thanks to surgeon V.K. Konstantinov and anesthesiologist M.A. Kozyura, attentive, highly qualified, and kind. Many thanks! Respectfully to all center staff. \nV.S. Dorofeev.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Сурська.jpg",
        uk: {
            name: "Сурська Лідія Іванівна",
            text: "Я, Сурська Лідія Іванівна, хочу подякувати всьому колективу медичного центру за вдало проведену операцію з видалення катаракти правого ока Гавура М.О. Я навіть не очікувала такого результату. Дякую всім м/сестрам, лікарям, усім, усім за чуйність, ввічливість та професіоналізм. Успіхів!",
        },
        ru: {
            name: "Сурская Лидия Ивановна",
            text: "Я, Сурская Лидия Ивановна, хочу поблагодарить весь коллектив медицинского центра за успешно проведённую операцию по удалению катаракты правого глаза Гавура М.О. Я даже не ожидала такого результата. Спасибо всем медсестрам, врачам, всем-всем за чуткость, вежливость и профессионализм. Успехов!",
        },
        en: {
            name: "Lidia Surska",
            text: "I, L.I. Surska, want to thank the entire medical center team for the successfully performed cataract surgery on my right eye by M.O. Havura. I did not even expect such a result. Thanks to all nurses, doctors, everyone for their attentiveness, politeness, and professionalism. Wishing you success!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/радіонов.jpg",
        uk: {
            name: "Радіонов Олександр",
            text: "Я, Радіонов Олександр, проживаю у м. Києві, хочу поділитися своїми враженнями. Коли я звернувся до «Британського офтальмологічного центру» з надією на покращення зору, я не дуже сподівався на позитивний результат, бо я 1974 року народження, але коли зробили мені обстеження очей і сказали, що очі бачать: ліве – 7%, праве - 15%, а при зміні кришталиків я бачитиму 90-100%, звичайно, я погодився на операцію. Зараз я дуже задоволений, що ухвалив таке рішення. Лікарі працюють не лише як професіонали, а й психологи. Доводять пацієнту, що це не страшно та надійно! Запам'яталося, що в операційній, коли ти чекаєш своєї черги і бачиш як, як тільки зробили операцію пацієнтові перед тобою, це надихає. Хочу побажати всьому колективу клініки найкращого, бо вони дають зір, і це дуже круто.",
        },
        ru: {
            name: "Радионов Александр",
            text: "Я, Радионов Александр, проживаю в г. Киеве, хочу поделиться своими впечатлениями. Когда я обратился в «Британский офтальмологический центр» с надеждой на улучшение зрения, я не очень рассчитывал на положительный результат, так как я родился в 1974 году, но когда мне сделали обследование глаз и сказали, что глаза видят: левый – 7%, правый – 15%, а после замены хрусталика я буду видеть 90–100%, конечно, я согласился на операцию. Сейчас я очень доволен, что принял такое решение. Врачи работают не только как профессионалы, но и как психологи. Показывают пациенту, что это не страшно и надежно! Особенно запомнилось, что в операционной, когда ждёшь своей очереди и видишь, как только сделали операцию пациенту перед тобой, это вдохновляет. Хочу пожелать всему коллективу клиники всего наилучшего, они дают зрение, и это очень круто.",
        },
        en: {
            name: "Oleksandr Radionov",
            text: "I, Oleksandr Radionov, living in Kyiv, want to share my impressions. When I turned to the British Ophthalmology Center hoping to improve my vision, I did not expect much, since I was born in 1974. But after the eye examination, they told me my eyes could see: left – 7%, right – 15%, and after lens replacement I would see 90–100%, so of course I agreed to the surgery. I am very satisfied that I made this decision. The doctors work not only as professionals but also as psychologists, reassuring patients that it is safe and reliable! I especially remember the operating room, when you wait your turn and see how the patient before you just had surgery—it’s inspiring. I wish the whole clinic team all the best, because they give sight, and that’s amazing.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Мельохін Олександр Михайлович",
            text: "Я, клієнт Британського офтальмологічного центру Мельохін Олександр Михайлович, висловлюю подяку всьому колективу та низький сердечний уклін Гавура М.О. та Скапа Василю Івановичу за їхні золоті руки, які повертають другу радість до життя. Їхні руки творять добро, повертають колір і світло пацієнтам. \nНизький уклін усьому персоналу центру за їхню працю. \nЗ повагою, родина Мелехіних. \nЗдоров'я та щастя Вам!",
        },
        ru: {
            name: "Мелёхин Александр Михайлович",
            text: "Я, клиент Британского офтальмологического центра Мелёхин Александр Михайлович, выражаю благодарность всему коллективу и низкий сердечный поклон Гавуру М.О. и Скапе Василию Ивановичу за их золотые руки, которые возвращают вторую радость к жизни. Их руки творят добро, возвращают цвет и свет пациентам. \nНизкий поклон всему персоналу центра за их труд. \nС уважением, семья Мелёхиных. \nЗдоровья и счастья Вам!",
        },
        en: {
            name: "Melochin Oleksandr Mykhailovych",
            text: "I, a client of the British Ophthalmological Center, Melochin Oleksandr Mykhailovych, express my gratitude to the entire team and extend my heartfelt respect to Havur M.O. and Skapa Vasyl Ivanovych for their golden hands that bring a second joy to life. Their hands do good, restoring color and light to patients. \nMy sincere thanks to the entire center staff for their work. \nWith respect, the Melochin family. \nWishing you health and happiness!",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Щира подяка всьому колективу",
            text: "Щира подяка всьому колективу Британського офтальмологічного центру за допомогу моїй мамі у лікуванні катаракти. Моя сім'я і я вже кілька років обслуговуємося в цій клініці і всім задоволені. Тому, коли постало питання про лікування у мами катаракти – без вагань привезли її до Києва до Британського офтальмологічного центру. Наші очікування справдилися. Операція пройшла чудово і мама знову добре бачить. До неї повернулося якість життя. Вона і я дуже вдячна Скапі В.І. і всім лікарям клініки, з якими ми пройшли цей шлях за професіоналізм. А також персоналу, який працює на рецепції, у кол-центрі та допомагає лікарям у повсякденному житті за дружелюбність та турботу.",
        },
        ru: {
            name: "Искренняя благодарность всему коллективу",
            text: "Искренняя благодарность всему коллективу Британского офтальмологического центра за помощь моей маме в лечении катаракты. Моя семья и я обслуживаемся в этой клинике уже несколько лет и полностью довольны. Поэтому, когда возник вопрос о лечении катаракты у мамы, без колебаний привезли её в Киев в Британский офтальмологический центр. Наши ожидания оправдались. Операция прошла великолепно, и мама снова хорошо видит. Качество жизни вернулось. Она и я очень благодарны Скапе В.И. и всем врачам клиники, с которыми мы прошли этот путь, за профессионализм. А также персоналу на рецепции, в кол-центре и тем, кто помогает врачам в повседневной работе, за дружелюбие и заботу.",
        },
        en: {
            name: "Sincere Thanks to the Entire Team",
            text: "Sincere thanks to the entire team of the British Ophthalmological Center for helping my mother with cataract treatment. My family and I have been patients at this clinic for several years and are completely satisfied. Therefore, when it came time to treat my mother's cataract, we brought her to Kyiv to the British Ophthalmological Center without hesitation. Our expectations were met. The surgery went excellently, and my mother can see well again. Her quality of life has returned. She and I are very grateful to Skapa V.I. and all the clinic doctors who guided us through this process for their professionalism. Also, thanks to the staff at reception, in the call center, and those assisting the doctors in daily work for their friendliness and care.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Комісарова Світлана Олександрівна",
            text: "Хочеться подякувати всім співробітникам «Британського офтальмологічного центру» за чудову роботу в обслуговуванні пацієнтів, кваліфікованому обстеженні. Окрема подяка хірургу Гавура М.О. та лікареві хірургічного відділення Скапе В.І. за їхню професійну роботу. Завдяки їм знайшла нову якість життя та яскравість фарб. \nЗ повагою та вдячністю.",
        },
        ru: {
            name: "Комиссарова Светлана Александровна",
            text: "Хочу поблагодарить всех сотрудников «Британского офтальмологического центра» за отличную работу в обслуживании пациентов и квалифицированные обследования. Отдельная благодарность хирургу Гавуру М.О. и врачу хирургического отделения Скапе В.И. за их профессиональную работу. Благодаря им я обрела новое качество жизни и яркость красок. \nС уважением и благодарностью.",
        },
        en: {
            name: "Komisarova Svitlana Oleksandrivna",
            text: "I would like to thank all the staff of the British Ophthalmological Center for their excellent patient care and professional examinations. Special thanks to surgeon Havur M.O. and surgical department doctor Skapa V.I. for their professional work. Thanks to them, I have found a new quality of life and vivid colors. \nWith respect and gratitude.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/горбик.jpg",
        uk: {
            name: "Горбик Петро Петрович",
            text: "Дуже вдячний за лікування зору чудовим лікарям – Гавура М.О., Максиму Анатолійовичу Казюрі, Катерині Валентинівні Штокалюк, Уляні Іванівні Рудяк, колективу діагностів та інших працівників центру. Щиро всіх поважаю та відчуваю почуття національної гордості за наявність такого важливого та потрібного офтальмологічного центру у нашій державі. \nЗ вдячністю та повагою, Петро Петрович Горбик.",
        },
        ru: {
            name: "Горбик Пётр Петрович",
            text: "Очень благодарен за лечение зрения замечательным врачам – Гавуре М.О., Максиму Анатольевичу Казюре, Екатерине Валентиновне Штокалюк, Ульяне Ивановне Рудяк, коллективу диагностов и другим сотрудникам центра. Искренне всех уважаю и испытываю чувство национальной гордости за наличие такого важного и нужного офтальмологического центра в нашей стране. \nС благодарностью и уважением, Пётр Петрович Горбик.",
        },
        en: {
            name: "Petro Horbyk",
            text: "I am very grateful for the eye treatment provided by the wonderful doctors – M.O. Havura, Maksym Anatoliyovych Kozyura, Kateryna Valentynivna Shtokalyuk, Uliana Ivanivna Rudyak, the diagnostics team, and other center staff. I sincerely respect everyone and feel a sense of national pride for having such an important and necessary ophthalmology center in our country. \nWith gratitude and respect, Petro Horbyk.",
        },
    },

    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Іщенко.jpg",
        uk: {
            name: "Жанна Іщенко",
            text: "Дякую Гавуре М.О., а також медперсоналу, за покращення зору мого дядька, Місяця Анатолія Федоровича (87 років) та моєї мами, Іщенка Світлани Федорівни (82 роки). Золоті руки, добре серце та щира душа Андрія Миколайовича, роблять життя барвистим та щасливим. З повагою, Жанна Іщенко.",
        },
        ru: {
            name: "Жанна Ищенко",
            text: "Благодарю Гавуру М.О. и медицинский персонал за улучшение зрения моего дяди, Месяца Анатолия Фёдоровича (87 лет) и моей мамы, Ищенко Светланы Фёдоровны (82 года). Золотые руки, доброе сердце и искренняя душа Андрея Николаевича делают жизнь яркой и счастливой. С уважением, Жанна Ищенко.",
        },
        en: {
            name: "Zhanna Ishchenko",
            text: "I thank M.O. Havura and the medical staff for improving the vision of my uncle, Anatoliy Fedorovych Misyats (87 years old), and my mother, Svitlana Fedorivna Ishchenko (82 years old). Andriy Mykolayovych’s golden hands, kind heart, and sincere soul make life colorful and happy. Respectfully, Zhanna Ishchenko.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Воронцова Дарина Геннадіївна",
            text: "Я, Воронцова Дарина Геннадіївна, хочу висловити подяку всім працівникам “Британського офтальмологічного центру” за уважне і ввічливе ставлення до пацієнтів, зрозумілу консультацію тощо. Особливо хотілося б відмітити лікаря Британа С.С. за уважну і професійну консультацію, детальне пояснення тощо.",
        },
        ru: {
            name: "Воронцова Дарина Геннадиевна",
            text: "Я, Воронцова Дарина Геннадиевна, хочу выразить благодарность всем сотрудникам «Британского офтальмологического центра» за внимательное и вежливое отношение к пациентам, понятные консультации и т.д. Особенно хочу отметить врача Британа С.С. за внимательную и профессиональную консультацию, детальные объяснения и т.д.",
        },
        en: {
            name: "Darina Vorontsova",
            text: "I, Darina Vorontsova, want to express my gratitude to all staff of the British Ophthalmology Center for their attentive and polite treatment of patients, clear consultations, and more. I especially want to acknowledge Dr. S.S. Britan for his attentive and professional consultation and detailed explanations.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Затонацька Тетяна Георгіївна",
            text: "Я, Затонацька Тетяна Георгіївна, 16 липня 2022 року проходила у “Британському офтальмологічному центри”. Хочу висловити свою подяку всьому персоналу центру за уважне ставлення. Особливо хочу відмітити дуже фахову та професійну консультацію лікаря Британа С.С.",
        },
        ru: {
            name: "Затонацкая Татьяна Георгиевна",
            text: "Я, Затонацкая Татьяна Георгиевна, 16 июля 2022 года посещала «Британский офтальмологический центр». Хочу выразить благодарность всему персоналу центра за внимательное отношение. Особенно хочу отметить очень квалифицированную и профессиональную консультацию врача Британа С.С.",
        },
        en: {
            name: "Tetyana Zatonatska",
            text: "I, Tetyana Zatonatska, visited the British Ophthalmology Center on July 16, 2022. I want to express my gratitude to the entire center staff for their attentive attitude. I especially want to highlight the very professional and qualified consultation by Dr. S.S. Britan.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Кіряков.jpg",
        uk: {
            name: "Кір'яков Павло Олексійович",
            text: "Дорогі друзі! Протягом жовтня 2021р. у «Британському офтальмологічному центрі» було зроблено операцію моїй дружині Галині Сергіївні Кір'якової щодо видалення катаракти в обох очах. Висловлюємо щиру подяку всім співробітникам центру, які готували нас до операцій, а також за післяопераційний догляд. На особливу подяку заслуговує Головний лікар Центру, хірург від Бога,. Безмежну подяку висловлюємо йому за виконання складної операції з видалення катаракти в обох очах подружжя, за чуйне відношення протягом усього після всього операційного періоду. Андрій Миколайович не тільки лікар найвищого рівня, він високо освічена, інтелігентна, доброзичлива, широко розвинена і добре вихована людина. Висока повага заслуговує на вміння підбирати, виховувати і готувати до копіткої роботи лікарів-офтальмологів, талановиту українську молодь. Така професійна людина, як Гавура М.О. – це надія нашої держави та її майбутнє. З глибокою вдячністю та повагою, Надзвичайний та Повноважний Посол П.Кір'яков.",
        },
        ru: {
            name: "Киряков Павел Алексеевич",
            text: "Дорогие друзья! В октябре 2021 года в «Британском офтальмологическом центре» была проведена операция моей супруге Галине Сергеевне Киряковой по удалению катаракты на обоих глазах. Выражаем искреннюю благодарность всем сотрудникам центра, которые готовили нас к операциям, а также за послеоперационный уход. Особую благодарность заслуживает Главный врач Центра, хирург от Бога. Безмерную благодарность выражаем ему за проведение сложной операции по удалению катаракты на обоих глазах супругов, за чуткое отношение на протяжении всего послеоперационного периода. Андрей Миколаевич не только врач высшего уровня, он высокообразованный, интеллигентный, доброжелательный, всесторонне развитый и воспитанный человек. Высокое уважение заслуживает его умение подбирать, воспитывать и готовить к кропотливой работе офтальмологов талантливую украинскую молодежь. Такой профессионал, как Гавура М.О., – это надежда нашей страны и её будущее. С глубокой благодарностью и уважением, Чрезвычайный и Полномочный Посол П.Киряков.",
        },
        en: {
            name: "Kiriyakiv Pavlo Oleksiyovych",
            text: "Dear friends! In October 2021, at the British Ophthalmological Center, my wife Halyna Serhiivna Kiriyakova underwent cataract surgery on both eyes. We express our sincere gratitude to all the staff who prepared us for the surgeries and provided postoperative care. Special thanks to the Chief Physician of the Center, a surgeon from God. We are infinitely grateful to him for performing the complex cataract surgery on both eyes of the couple, and for his attentive care throughout the entire postoperative period. Andriy Mykolayovych is not only a top-level doctor, he is highly educated, intelligent, kind, broadly developed, and well-mannered. Great respect is deserved for his ability to select, mentor, and prepare young talented ophthalmologists for meticulous work. A professional like Havur M.O. is the hope of our country and its future. With deep gratitude and respect, Extraordinary and Plenipotentiary Ambassador P. Kiriyakiv.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Шульженко.webp",
        uk: {
            name: "Шульженко Ірина Миколаївна",
            text: "Можна я скажу, що в сучасному світі є бездоганний медичний центр – Британський офтальмологічний центр. Велика подяка Щадних Марині Олександрівні. Ви з ювелірним професіоналізмом та людським теплом повернули мені можливість впевненого погляду на майбутнє. Всім співробітникам, які супроводжували до та під час операції, я бажаю здоров'я та особистих перемог.",
        },
        ru: {
            name: "Шульженко Ирина Николаевна",
            text: "Можно сказать, что в современном мире есть безупречный медицинский центр – Британский офтальмологический центр. Большая благодарность Щадных Марине Александровне. Вы с ювелирным профессионализмом и человеческим теплом вернули мне возможность уверенно смотреть в будущее. Всем сотрудникам, которые сопровождали меня до и во время операции, желаю здоровья и личных побед.",
        },
        en: {
            name: "Shulzhenko Iryna Mykolaivna",
            text: "I can say that in the modern world there is a flawless medical center – the British Ophthalmological Center. Many thanks to Shchadnykh Marina Oleksandrivna. With meticulous professionalism and human warmth, you restored my ability to confidently look into the future. I wish health and personal victories to all the staff who accompanied me before and during the surgery.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Бистровський.webp",
        uk: {
            name: "Бистровський Юрій Іванович",
            text: "Я, розпочав лікування катаракти 26.08.2019 р. Вже 27.08.2019 лікарем, Гавура М.О., проведено операцію із заміни кришталика лівого ока. За результатами проведеної операції я отримав позитивний результат і зважився на операцію на іншому оці. Усього за тиждень було проведено 2 операції, зір дуже змінився на краще. Дуже вдячний професору Гавура М.О. за відновлення зору, а також усьому персоналу «Британського офтальмологічного центру» за турботу та увагу.",
        },
        ru: {
            name: "Быстровский Юрий Иванович",
            text: "Я начал лечение катаракты 26.08.2019 г. Уже 27.08.2019 врачом Гавурой М.А. была проведена операция по замене хрусталика левого глаза. Результат оказался положительным, и я решился на операцию на другом глазу. Всего за неделю было проведено 2 операции, зрение значительно улучшилось. Огромная благодарность профессору Гавуре М.А. за восстановление зрения, а также всему персоналу «Британского офтальмологического центра» за заботу и внимание.",
        },
        en: {
            name: "Bystrovskyi Yurii Ivanovych",
            text: "I began cataract treatment on August 26, 2019. On August 27, 2019, Dr. Havura M.O. performed lens replacement surgery on my left eye. The operation brought a positive result, so I decided to undergo surgery on the other eye as well. Within just a week, two operations were performed, and my vision improved significantly. I am deeply grateful to Professor Havura M.O. for restoring my sight, as well as to the entire staff of the 'British Ophthalmological Center' for their care and attention.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Вешторт.webp",
        uk: {
            name: "Вешторт Ніна Михайлівна",
            text: "Висловлюю величезну подяку доктору Гавуре М.О. Операцію із заміни кришталика проведено 06.08.2019 у «Британському офтальмологічному центрі». Дуже уважний, добрий лікар. Операція пройшла успішно. Результатом задоволена.",
        },
        ru: {
            name: "Вешторт Нина Михайловна",
            text: "Выражаю огромную благодарность доктору Гавуре М.А. Операция по замене хрусталика была проведена 06.08.2019 в «Британском офтальмологическом центре». Очень внимательный, добрый врач. Операция прошла успешно. Результатом довольна.",
        },
        en: {
            name: "Veshtort Nina Mykhailivna",
            text: "I express my deep gratitude to Dr. Havura M.O. The lens replacement surgery was performed on August 6, 2019, at the 'British Ophthalmological Center'. He is a very attentive and kind doctor. The operation was successful, and I am satisfied with the result.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Ясний.webp",
        uk: {
            name: "Ясний Владислав Валерійович",
            text: "Зробивши 14.09.2019 лазерну корекцію зору у «Британському офтальмологічному центрі», залишився задоволеним результатом, а також професіоналізмом працівників центру.",
        },
        ru: {
            name: "Ясный Владислав Валерьевич",
            text: "Сделав 14.09.2019 лазерную коррекцию зрения в «Британском офтальмологическом центре», остался доволен результатом, а также профессионализмом сотрудников центра.",
        },
        en: {
            name: "Yasnyi Vladyslav Valeriiovych",
            text: "After undergoing laser vision correction on September 14, 2019, at the 'British Ophthalmological Center', I was very satisfied with the result as well as with the professionalism of the staff.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Тимошенко.webp",
        uk: {
            name: "Тимошенко Віра Іванівна",
            text: "Висловлюю величезну подяку хірургу Верещагіну Миколі Петровичу, за чудово проведену операцію із заміни кришталика правого ока, за його золоті руки, терпіння, доброту, увагу, чуйність. Це лікар від Бога! Дай Бог йому здоров'я, успіхів у його нелегкій праці та більше вдячних пацієнтів. А також хочу подякувати всім, хто допомагав лікареві під час операції: лікарям, сестричкам, усім з ким мені довелося стикатися у цьому чудовому «Британському офтальмологічному центрі». Здоров'я, миру, добра, успіхів у Вашій шляхетній праці.",
        },
        ru: {
            name: "Тимошенко Вера Ивановна",
            text: "Выражаю огромную благодарность хирургу Верещагину Николаю Петровичу за прекрасно проведённую операцию по замене хрусталика правого глаза, за его золотые руки, терпение, доброту, внимание и чуткость. Это врач от Бога! Дай Бог ему здоровья, успехов в его нелёгком труде и больше благодарных пациентов. Также хочу поблагодарить всех, кто помогал врачу во время операции: врачей, сестричек, всех, с кем мне довелось столкнуться в этом замечательном «Британском офтальмологическом центре». Здоровья, мира, добра, успехов в Вашем благородном труде.",
        },
        en: {
            name: "Tymoshenko Vira Ivanivna",
            text: "I sincerely thank surgeon Vereshchagin Mykola Petrovych for the excellently performed lens replacement surgery on my right eye, for his golden hands, patience, kindness, attentiveness, and compassion. He is truly a doctor sent by God! May God grant him health, success in his difficult work, and many more grateful patients. I would also like to thank everyone who assisted during the surgery: the doctors, the nurses, and all those I encountered in this wonderful 'British Ophthalmological Center'. Wishing you health, peace, kindness, and success in your noble work.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Котюргина.webp",
        uk: {
            name: "Котюргіна Христина Василівна",
            text: "Був складний уроджений астигматизм. На початку вересня зробила лазерну корекцію зору у «Британському офтальмологічному центрі». Дякую лікарям!",
        },
        ru: {
            name: "Котюргина Христина Васильевна",
            text: "Был сложный врожденный астигматизм. В начале сентября я прошла лазерную коррекцию зрения в «Британском офтальмологическом центре». Спасибо врачам!",
        },
        en: {
            name: "Koturhina Khrystyna Vasylivna",
            text: "I had a complex congenital astigmatism. At the beginning of September, I underwent laser vision correction at the British Ophthalmological Center. Thanks to the doctors!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Руденко.webp",
        uk: {
            name: "Руденко Юлія Петрівна",
            text: "Хочу подякувати докторам та медичному персоналу «Британського офтальмологічного центру» за їхню увагу, працю і доброту. Дякую за прекрасний зір, тепер я можу бачити без окулярів. «Британський офтальмологічний центр» — найкращий центр з якості роботи, обслуговування пацієнтів і взагалі стосовно людей. Ще раз дякую Вам, що я можу по-новому бачити світ”.",
        },
        ru: {
            name: "Руденко Юлия Петровна",
            text: "Хочу поблагодарить докторов и медицинский персонал «Британского офтальмологического центра» за их внимание, труд и доброту. Спасибо за прекрасное зрение, теперь я могу видеть без очков. «Британский офтальмологический центр» — лучший центр по качеству работы, обслуживанию пациентов и вообще по отношению к людям. Еще раз спасибо, что я могу по-новому видеть мир.",
        },
        en: {
            name: "Rudenko Yuliia Petrivna",
            text: "I want to thank the doctors and medical staff of the British Ophthalmological Center for their attention, work, and kindness. Thank you for the wonderful vision, now I can see without glasses. The British Ophthalmological Center is the best in terms of work quality, patient service, and general human care. Thank you again for allowing me to see the world in a new way.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Данильчук Катерина Михайлівна",
            text: "Я, Данильчук Катерина Михайлівна, вдячна всім працівникам за увагу, турботу, за відновлення зору та змогу знову бачити у свої 84 роки. Попри всі незгоди зі здоров’ям я бачу білий світ. Я дуже рада, що у нас в Україні є такий Британський офтальмологічний центр, який допомагає людям повернути зір. Одразу в операційний зір почав відновлюватись, що для мене, як для людини, яка певний період в житі була полишена можливості бачити, є наче Божим благословенням. \nТут працюють добрі та чуйні люди, які залишили певний слід у моєму житті, що я дуже ціную.",
        },
        ru: {
            name: "Данильчук Екатерина Михайловна",
            text: "Я, Данильчук Екатерина Михайловна, благодарна всем сотрудникам за внимание, заботу, за восстановление зрения и возможность снова видеть в свои 84 года. Несмотря на все проблемы со здоровьем, я вижу белый свет. Я очень рада, что у нас в Украине есть такой Британский офтальмологический центр, который помогает людям вернуть зрение. Сразу после операции зрение начало восстанавливаться, что для меня, как для человека, который некоторое время был лишен возможности видеть, является как бы Божьим благословением. \nЗдесь работают добрые и чуткие люди, которые оставили определенный след в моей жизни, что я очень ценю.",
        },
        en: {
            name: "Danylchuk Kateryna Mykhailivna",
            text: "I, Danylchuk Kateryna Mykhailivna, am grateful to all the staff for their attention, care, for restoring my vision, and giving me the chance to see again at 84 years old. Despite all health difficulties, I can see the bright world. I am very glad that we have such a British Ophthalmological Center in Ukraine that helps people regain their sight. My vision started to recover immediately after the surgery, which, for me, as someone who had been deprived of sight for a period of life, feels like a divine blessing. \nThere are kind and caring people working here who left a meaningful mark on my life, which I deeply appreciate.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Цимбаленко Людмила Павлівна",
            text: "Я, Цимбаленко Людмила Павлівна, хочу подякувати всьому колективу Британського офтальмологічного центру за дуже гарне відношення до мене. \nМені зробили дві операції по видаленню катаракти, заміни кришталиків 24.12.2024 та 25.12.2024. \nДуже задоволена головним лікарем Гавура М.О., який робив мені операцію. \nВсім гарним дівчатам і хлопцям, а також лікарю Петросовій Офелії Олександрівні. \nВсім бажаю здоров'я, успіхів у Вашій роботі. Бережіть себе. Миру нам усім.",
        },
        ru: {
            name: "Цымбаленко Людмила Павловна",
            text: "Я, Цымбаленко Людмила Павловна, хочу поблагодарить весь коллектив Британского офтальмологического центра за очень хорошее отношение ко мне. \nМне сделали две операции по удалению катаракты и замене хрусталиков 24.12.2024 и 25.12.2024. \nОчень довольна главным врачом Гавурой М.О., который проводил мне операцию. \nВсем прекрасным девушкам и юношам, а также врачу Петросовой Офелии Александровне. \nЖелаю всем здоровья, успехов в вашей работе. Берегите себя. Миру нам всем.",
        },
        en: {
            name: "Tsymbalenko Liudmyla Pavlivna",
            text: "I, Tsymbalenko Liudmyla Pavlivna, want to thank the entire team of the British Ophthalmological Center for their very kind attitude toward me. \nI had two cataract and lens replacement surgeries on 24.12.2024 and 25.12.2024. \nI am very satisfied with the Chief Physician Havur M.O., who performed my surgeries. \nThanks to all the wonderful staff, as well as Dr. Petrosova Ofeliia Oleksandrivna. \nI wish everyone health, success in your work. Take care of yourselves. Peace to us all.",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        photo: "/feedbacks/glushich.jpg",
        uk: {
            name: "Глушич Ірина Миколаївна",
            text: "Я, Глушич Ірина Миколаївна, зробила операцію по заміні кришталика в «Британському офтальмологічному центрі». Хочу висловити велику вдячність всім лікарям клініки. Дуже хороший колектив, гарне обслуговування. \nДуже вдячна Вам. Дякую, буду всім рекомендувати вашу клініку.",
        },
        ru: {
            name: "Глушич Ирина Николаевна",
            text: "Я, Глушич Ирина Николаевна, сделала операцию по замене хрусталика в «Британском офтальмологическом центре». Хочу выразить большую благодарность всем врачам клиники. Очень хороший коллектив, отличное обслуживание. \nОчень благодарна Вам. Спасибо, буду всем рекомендовать вашу клинику.",
        },
        en: {
            name: "Hlushych Iryna Mykolaivna",
            text: "I, Hlushych Iryna Mykolaivna, underwent lens replacement surgery at the 'British Ophthalmological Center'. I would like to express my deep gratitude to all the doctors of the clinic. A very good team, excellent service. \nI am very grateful to you. Thank you, I will recommend your clinic to everyone.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Семенова Олена Валеріївна",
            text: "Я, Семенова Олена Валеріївна, рекомендую Британський офтальмологічний центр. 15.01.2025 року зробила лазерну корекцію зору, 16.01.2025 зір відновився на 100%. Велика вдячність лікарю Бурдею Артему В'ячеславовичу та всьому персоналу, всі дуже привітні, ввічливі та професіонали своєї справи. Рекомендую всім, адже бачити 100% без лінз це дуже приємно та незвично.",
        },
        ru: {
            name: "Семенова Елена Валерьевна",
            text: "Я, Семенова Елена Валерьевна, рекомендую Британский офтальмологический центр. 15.01.2025 года сделала лазерную коррекцию зрения, 16.01.2025 зрение восстановилось на 100%. Огромная благодарность врачу Бурдею Артему Вячеславовичу и всему персоналу, все очень приветливые, вежливые и настоящие профессионалы. Рекомендую всем, ведь видеть 100% без линз — это очень приятно и необычно.",
        },
        en: {
            name: "Semenova Olena Valeriivna",
            text: "I, Semenova Olena Valeriivna, recommend the 'British Ophthalmological Center'. On January 15, 2025, I had laser vision correction, and by January 16, 2025, my vision was fully restored to 100%. My deep gratitude goes to Dr. Burdey Artem Vyacheslavovych and all the staff — everyone was very friendly, polite, and professional. I recommend it to everyone, as seeing 100% without lenses is truly pleasant and unusual.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Гирич Т.М.",
            text: "Відвідування Британського офтальмологічного центру залишило лише найкращі враження. \nБула записана на діагностику зору, після неї вирішила зробити лазерну корекцію. Працівники закладу показали себе з найкращої сторони – були ввічливими та уважними. Сама лазерна корекція пройшла швидко та безболісно. \nОбов’язково буду рекомендувати центр своїм знайомим та друзям! \nГирич Т.М.",
        },
        ru: {
            name: "Гирич Т.М.",
            text: "Посещение Британского офтальмологического центра оставило только самые лучшие впечатления. \nБыла записана на диагностику зрения, после неё решила сделать лазерную коррекцию. Сотрудники центра показали себя с лучшей стороны — были вежливыми и внимательными. Сама лазерная коррекция прошла быстро и безболезненно. \nОбязательно буду рекомендовать центр своим знакомым и друзьям! \nГирич Т.М.",
        },
        en: {
            name: "Hyrych T.M.",
            text: "Visiting the 'British Ophthalmological Center' left me with only the best impressions. \nI was scheduled for a vision diagnosis, and afterward decided to undergo laser correction. The staff showed themselves from their best side — they were polite and attentive. The laser correction itself was quick and painless. \nI will definitely recommend the center to my friends and acquaintances! \nHyrych T.M.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/bahmєtєva.webp",
        uk: {
            name: "Бахмєтьєва Христина В'ячеславівна",
            text: "Я, Бахмєтьєва Христина В'ячеславівна, дуже дякую Британському офтальмологічному центру за те, що знову можу чітко бачити без окулярів та лінз. Особисто дякую своєму хірургу, Бурдею Артему В'ячеславовичу, за якісну консультацію та лазерну корекцію зору!",
        },
        ru: {
            name: "Бахметьева Кристина Вячеславовна",
            text: "Я, Бахметьева Кристина Вячеславовна, очень благодарю Британский офтальмологический центр за то, что снова могу чётко видеть без очков и линз. Отдельное спасибо моему хирургу, Бурдею Артему Вячеславовичу, за качественную консультацию и лазерную коррекцию зрения!",
        },
        en: {
            name: "Bakhmetieva Khrystyna Vyacheslavivna",
            text: "I, Bakhmetieva Khrystyna Vyacheslavivna, am very grateful to the 'British Ophthalmological Center' for allowing me to clearly see again without glasses or lenses. Special thanks to my surgeon, Dr. Burdey Artem Vyacheslavovych, for the thorough consultation and laser vision correction!",
        },
    },

    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Поліщук Ольга Олександрівна",
            text: "Дякую величезне «Британському офтальмологічному центру» та всім всім, всім співробітникам! \nПочинаючи від дівчаток, що супроводжували на діагностиці! Лікарю Жихарєв А. Ю. поставила безліч запитань! \nІ окремо дякую хірургу Бурдей А. В. \nВІН зробив ЧУДО! Мала бачити 0,7 і 0,8 бачу 1.0 і 1.0! \nДякую!",
        },
        ru: {
            name: "Полищук Ольга Александровна",
            text: "Огромное спасибо «Британскому офтальмологическому центру» и всем-всем сотрудникам! \nНачиная с девушек, которые сопровождали на диагностике! Доктору Жихареву А. Ю. задала множество вопросов! \nИ отдельное спасибо хирургу Бурдею А. В. \nОН сделал ЧУДО! Должна была видеть 0,7 и 0,8, вижу 1.0 и 1.0! \nСпасибо!",
        },
        en: {
            name: "Polishchuk Olha Oleksandrivna",
            text: "Huge thanks to the British Ophthalmological Center and to all the staff! \nStarting with the ladies who accompanied me during diagnostics! I asked Dr. Zhikharev A.Yu. countless questions! \nAnd special thanks to the surgeon Burdey A.V. \nHE PERFORMED A MIRACLE! I was supposed to see 0.7 and 0.8, now I see 1.0 and 1.0! \nThank you!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Тонковид Олександра Петрівна",
            text: "Чудовий персонал, професійні лікарі, все на вищому рівні. Я дуже рада, що обрала саме цю клініку для проведення лазерної корекції зору. Ви зробили щасливою ще одну людину. Рекомендую!",
        },
        ru: {
            name: "Тонковид Александра Петровна",
            text: "Прекрасный персонал, профессиональные врачи, всё на высшем уровне. Я очень рада, что выбрала именно эту клинику для проведения лазерной коррекции зрения. Вы сделали счастливым ещё одного человека. Рекомендую!",
        },
        en: {
            name: "Tonkovyd Oleksandra Petrivna",
            text: "Wonderful staff, professional doctors, everything at the highest level. I am very glad I chose this clinic for my laser vision correction. You have made another person happy. I recommend it!",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Колєсніков Євген Ігорович",
            text: "Я, Колєсніков Євген Ігорович, вдячний Британському офтальмологічному центру за проведену операцію по заміні кришталика та подальший супровід по лікуванню. \nБільш професійного підходу до пацієнта я ніколи не зустрічав. Більш того, якщо Ви цінуєте свій час – тоді Вам сюди. Я не втратив жодної хвилини провівши свій час в центрі. Чітко працює реєстратура, люди не чекають годинами, якщо Вам на 10-00 призначено візит – тоді о 10-00 Вас запросить лікар. \nОсоблива подяка моєму лікарю Рудяк Уляні Іванівні.",
        },
        ru: {
            name: "Колесников Евгений Игоревич",
            text: "Я, Колесников Евгений Игоревич, благодарен Британскому офтальмологическому центру за проведённую операцию по замене хрусталика и последующее сопровождение лечения. \nБолее профессионального подхода к пациенту я никогда не встречал. Более того, если Вы цените своё время – вам сюда. Я не потерял ни минуты, проведя время в центре. Регистратура работает четко, люди не ждут часами, если вам назначен визит на 10:00 – в 10:00 вас примет врач. \nОсобая благодарность моему врачу Рудяк Ульяне Ивановне.",
        },
        en: {
            name: "Kolesnikov Yevhen Ihorovych",
            text: "I, Kolesnikov Yevhen Ihorovych, am grateful to the British Ophthalmological Center for the lens replacement surgery and subsequent treatment follow-up. \nI have never encountered a more professional approach to patients. Moreover, if you value your time – this is the place for you. I didn’t waste a single minute during my visit. The reception works efficiently; people don’t wait for hours. If your appointment is at 10:00, the doctor sees you exactly at 10:00. \nSpecial thanks to my doctor, Rudiak Uliana Ivanivna.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/suslova.jpg",
        uk: {
            name: "Суслова Марина Андріївна",
            text: "Я, Суслова Марина Андріївна, робила корекцію 25.01.25р. \nЗадоволена результатом корекції, обслуговуванням персоналу, який був дуже ввічливим та із задоволенням допомагав. Заспокоював та надавав моральну підтримку. Лікар хірург розвіяв всі сумніви на другий прийом та відповів на всі питання, які турбували. Задоволена результатом на 100%. Буду радити знайомим та друзям.",
        },
        ru: {
            name: "Суслова Марина Андреевна",
            text: "Я, Суслова Марина Андреевна, проходила коррекцию 25.01.25 г. \nДовольна результатом коррекции, обслуживанием персонала, который был очень вежливым и с удовольствием помогал. Успокаивал и оказывал моральную поддержку. Хирург развеял все сомнения на второй приём и ответил на все вопросы, которые волновали. Результатом довольна на 100%. Буду рекомендовать знакомым и друзьям.",
        },
        en: {
            name: "Suslova Maryna Andriivna",
            text: "I, Suslova Maryna Andriivna, had vision correction on 25.01.25. \nI am satisfied with the correction result and the staff service, who were very polite and helpful. They calmed me and provided moral support. The surgeon dispelled all doubts at the second appointment and answered all questions that concerned me. I am 100% satisfied with the result. I will recommend it to friends and acquaintances.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/shherbak.jpg",
        uk: {
            name: "Щербак Юрій Олександрович",
            text: "Я, Щербак Юрій Олександрович, робив лазерну корекцію зору, в «Британському офтальмологічному центрі»! Хочу відмітити роботу персоналу і лікаря Бурдея Артема В’ячеславовича, Ви молодці. \nДякую! Слава Україні!!!",
        },
        ru: {
            name: "Щербак Юрий Александрович",
            text: "Я, Щербак Юрий Александрович, делал лазерную коррекцию зрения в «Британском офтальмологическом центре»! Хочу отметить работу персонала и врача Бурдея Артёма Вячеславовича, вы молодцы. \nСпасибо! Слава Украине!!!",
        },
        en: {
            name: "Shcherbak Yurii Oleksandrovych",
            text: "I, Shcherbak Yurii Oleksandrovych, had laser vision correction at the 'British Ophthalmology Center'! I want to note the work of the staff and Dr. Artem Vyacheslavovych Burdey — you are amazing. \nThank you! Glory to Ukraine!!!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Заморська Ольга Олегівна",
            text: "Вдячна лікарю Бурдею А. В. за високоякісну операцію з лазерної корекції зору! З самого початку і до завершення процесу все було на найвищому рівні. Лікар детально пояснив кожен етап операції, розвіяв усі мої сумніви та відповів на всі запитання. Сам процес пройшов швидко, безболісно та максимально комфортно завдяки професіоналізму лікаря і команди. \nРезультат перевершив усі мої очікування — тепер бачу чітко і ясно, без необхідності носити окуляри чи лінзи. Дуже ціную уважне ставлення, турботу та підтримку на кожному етапі: від консультації до післяопераційного огляду. \nЩиро рекомендую Бурдея А.В. усім, хто шукає фахівця з лазерної корекції зору. Ви в надійних руках!",
        },
        ru: {
            name: "Заморская Ольга Олеговна",
            text: "Благодарна врачу Бурдею А. В. за высококачественную операцию по лазерной коррекции зрения! С самого начала и до завершения процесса всё было на высшем уровне. Врач подробно объяснил каждый этап операции, развеял все мои сомнения и ответил на все вопросы. Сам процесс прошёл быстро, безболезненно и максимально комфортно благодаря профессионализму врача и команды. \nРезультат превзошёл все мои ожидания — теперь я вижу чётко и ясно, без необходимости носить очки или линзы. Очень ценю внимательное отношение, заботу и поддержку на каждом этапе: от консультации до послеоперационного осмотра. \nИскренне рекомендую Бурдея А. В. всем, кто ищет специалиста по лазерной коррекции зрения. Вы в надёжных руках!",
        },
        en: {
            name: "Zamorska Olha Olehiivna",
            text: "I am grateful to Dr. A. V. Burdey for the high-quality laser vision correction surgery! From the very beginning to the end, everything was at the highest level. The doctor explained every stage in detail, dispelled all my doubts, and answered all questions. The procedure itself was quick, painless, and as comfortable as possible thanks to the professionalism of the doctor and his team. \nThe result exceeded all my expectations — now I see clearly and brightly, without the need to wear glasses or lenses. I truly appreciate the attentive attitude, care, and support at every stage: from consultation to postoperative check-up. \nI sincerely recommend Dr. A. V. Burdey to everyone looking for a laser vision correction specialist. You are in safe hands!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Мелішенко Марина В'ячеславівна",
            text: "Я, Мелішенко Марина В'ячеславівна, зробила в «Британському офтальмологічному центрі» лазерну  корекцію зору. Окрема подяка лікарям та персоналу центру за уважне ставлення та підтримку. Дякую за відновлений зір та гарне обслуговування, буду рекомендувати друзям та знайомим.",
        },
        ru: {
            name: "Мелишенко Марина Вячеславовна",
            text: "Я, Мелишенко Марина Вячеславовна, сделала в «Британском офтальмологическом центре» лазерную коррекцию зрения. Отдельная благодарность врачам и персоналу центра за внимательное отношение и поддержку. Спасибо за восстановленное зрение и хорошее обслуживание, буду рекомендовать друзьям и знакомым.",
        },
        en: {
            name: "Melishenko Maryna Vyacheslavivna",
            text: "I, Melishenko Maryna Vyacheslavivna, underwent laser vision correction at the 'British Ophthalmology Center'. Special thanks to the doctors and staff for their attentive attitude and support. Thank you for restoring my vision and for the great service, I will recommend you to my friends and acquaintances.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Ільєнко Олена Олександрівна",
            text: "У Британському офтальмологічному центрі проходила процедуру коагуляції сітківки, а в подальшому і лазерну корекцію зору. Роботою центру та лікарів задоволена повністю, персонал ввічливий, уважний та привітний. Лікарі центру – професіонали високого рівня. Буду рекомендувати центр для лікування вад зору. Щиро дякую за увагу та позитивний результат лікування.",
        },
        ru: {
            name: "Ильенко Елена Александровна",
            text: "В Британском офтальмологическом центре проходила процедуру коагуляции сетчатки, а позже и лазерную коррекцию зрения. Работой центра и врачей полностью довольна, персонал вежливый, внимательный и приветливый. Врачи центра – профессионалы высокого уровня. Буду рекомендовать центр для лечения нарушений зрения. Искренне благодарю за внимание и положительный результат лечения.",
        },
        en: {
            name: "Ilyenko Olena Oleksandrivna",
            text: "At the British Ophthalmology Center, I underwent retinal coagulation, and later laser vision correction. I am fully satisfied with the work of the center and the doctors; the staff is polite, attentive, and friendly. The doctors are top-level professionals. I will recommend the center for vision treatment. I sincerely thank you for the attention and the positive treatment results.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Волошин Сергій Володимирович",
            text: "Я, Волошин Сергій Володимирович, зробив лазерну корекцію зору, в «Британському офтальмологічному центрі» . Дуже вдячний за отриманий результат! Чудовий сервіс, якісне лікування, привітна клініка. Я дуже радий, що обрав саме Вашу клініку для такої важливої процедури. Бажаю вашій команді успіху, процвітання та вдячних пацієнтів!",
        },
        ru: {
            name: "Волошин Сергей Владимирович",
            text: "Я, Волошин Сергей Владимирович, сделал лазерную коррекцию зрения в «Британском офтальмологическом центре». Очень благодарен за полученный результат! Прекрасный сервис, качественное лечение, приветливая клиника. Я очень рад, что выбрал именно вашу клинику для такой важной процедуры. Желаю вашей команде успеха, процветания и благодарных пациентов!",
        },
        en: {
            name: "Voloshyn Serhiy Volodymyrovych",
            text: "I, Voloshyn Serhiy Volodymyrovych, had laser vision correction at the British Ophthalmological Center. I am very grateful for the result! Excellent service, quality treatment, and a friendly clinic. I am very glad I chose your clinic for such an important procedure. I wish your team success, prosperity, and grateful patients!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Деркач Софія Вікторівна",
            text: "Я, Деркач Софія Вікторівна, пацієнтка Британського офтальмологічного центру, хочу залишити щирий відгук про візит та операцію лазерної корекції зору. Я безмежно вдячна лікарям та персоналу за уважність та роботу, вони професійно виконали свою роботу за здійснили мою мрію, тепер я можу бачити все на власні очі. \nОкремо дякую співробітникам за гарне відношення, дуже приємно знаходитись серед такого персоналу. Дякую за те що ви робите.",
        },
        ru: {
            name: "Деркач София Викторовна",
            text: "Я, Деркач София Викторовна, пациентка Британского офтальмологического центра, хочу оставить искренний отзыв о визите и операции лазерной коррекции зрения. Я безмерно благодарна врачам и персоналу за внимательность и работу, они профессионально выполнили свою работу и осуществили мою мечту, теперь я могу видеть всё своими глазами. \nОтдельно благодарю сотрудников за хорошее отношение, очень приятно находиться среди такого персонала. Спасибо за то, что вы делаете.",
        },
        en: {
            name: "Derkach Sofiya Viktorivna",
            text: "I, Derkach Sofiya Viktorivna, a patient of the British Ophthalmological Center, want to leave a sincere review about my visit and laser vision correction surgery. I am endlessly grateful to the doctors and staff for their attentiveness and work—they professionally fulfilled their duties and made my dream come true; now I can see everything with my own eyes. \nSpecial thanks to the staff for their kind attitude; it’s very pleasant to be among such a team. Thank you for what you do.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Глівінська Каріна Валеріївна",
            text: "Я, Глівінська Каріна Валеріївна, проводила лазерну корекцію зору 11.01.25р. в «Британському офтальмологічному центрі». Залишилася під неймовірними враженнями. Персонал та лікарі надали чудові консультації, були привітні та уважні. Операція пройшла швидко та безболісно. Дякую за здійснення мрії та 100% зір. \nВи неймовірні!!! 😊",
        },
        ru: {
            name: "Гливинская Карина Валерьевна",
            text: "Я, Гливинская Карина Валерьевна, проходила лазерную коррекцию зрения 11.01.25 г. в «Британском офтальмологическом центре». Осталась под невероятным впечатлением. Персонал и врачи предоставили отличные консультации, были приветливы и внимательны. Операция прошла быстро и безболезненно. Спасибо за осуществление мечты и 100% зрения. \nВы невероятны!!! 😊",
        },
        en: {
            name: "Hlívinska Karina Valeriivna",
            text: "I, Hlívinska Karina Valeriivna, had laser vision correction on 11.01.25 at the British Ophthalmological Center. I was left with incredible impressions. The staff and doctors provided excellent consultations, were friendly and attentive. The surgery was quick and painless. Thank you for making my dream come true and giving me 100% vision. \nYou are amazing!!! 😊",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/verbiczka.jpg",
        uk: {
            name: "Вербіцька Євгенія Альбертівна",
            text: "Я, Вербіцька Євгенія Альбертівна,  зробила в «Британському офтальмологічному центрі» лазерну корекцію зору, результатом дуже задоволена! Дякую моєму хірургу, Бурдею Артему В’ячеславовичу, за можливість знову бачити гарно і кольорово! Окремо дякую всій команді «Британського офтальмологічного центру» за чудове обслуговування, турботу та уважне ставлення на кожному етапі!",
        },
        ru: {
            name: "Вербицкая Евгения Альбертовна",
            text: "Я, Вербицкая Евгения Альбертовна, сделала в «Британском офтальмологическом центре» лазерную коррекцию зрения, результатом очень довольна! Благодарю моего хирурга, Бурдея Артема Вячеславовича, за возможность снова видеть красиво и цветно! Отдельно благодарю всю команду «Британского офтальмологического центра» за отличное обслуживание, заботу и внимательное отношение на каждом этапе!",
        },
        en: {
            name: "Verbitska Yevheniia Albertivna",
            text: "I, Verbitska Yevheniia Albertivna, had laser vision correction at the British Ophthalmological Center and am very satisfied with the result! I thank my surgeon, Burdey Artem Vyacheslavovych, for giving me the ability to see clearly and in color again! Special thanks to the entire team of the British Ophthalmological Center for excellent service, care, and attentive attitude at every stage!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Донцова Юлія Олександрівна",
            text: "Я, Донцова Юлія, зробила лазерну корекцію зору в «Британському офтальмологічному центрі». Хочу залишити відгук і розповісти свої враження. Мені дуже сподобалось відношення, все дуже чисто та стерильно. А головне дуже крутий результат після операції, вже до вечору був чудовий зір!",
        },
        ru: {
            name: "Донцова Юлия Александровна",
            text: "Я, Донцова Юлия, сделала лазерную коррекцию зрения в «Британском офтальмологическом центре». Хочу оставить отзыв и поделиться своими впечатлениями. Мне очень понравилось отношение, всё очень чисто и стерильно. А главное — отличный результат после операции, уже к вечеру зрение было замечательное!",
        },
        en: {
            name: "Dontsova Yuliia Oleksandrivna",
            text: "I, Dontsova Yuliia, had laser vision correction at the 'British Ophthalmology Center'. I would like to leave feedback and share my impressions. I really liked the attitude; everything was very clean and sterile. And most importantly, the result after the surgery was amazing — by the evening my vision was excellent!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Чебаненко Юлія Сергіївна",
            text: "Я, Чебаненко Юлія Сергіївна, зробила лазерну корекцію зору в «Британському офтальмологічному центрі». Все дуже сподобалось. Все чітко, на кожному етапі є допомога. Лікар-хірург, Бурдей Артем В’ячеславович, під час операції все гарно пояснював. Рекомендую цей центр кожному, хто цінує високий рівень обслуговування та професіоналізм!",
        },
        ru: {
            name: "Чебаненко Юлия Сергеевна",
            text: "Я, Чебаненко Юлия Сергеевна, сделала лазерную коррекцию зрения в «Британском офтальмологическом центре». Всё очень понравилось. Всё чётко, на каждом этапе была помощь. Врач-хирург, Бурдей Артём Вячеславович, во время операции всё подробно объяснял. Рекомендую этот центр каждому, кто ценит высокий уровень обслуживания и профессионализм!",
        },
        en: {
            name: "Chebanenko Yuliia Serhiivna",
            text: "I, Chebanenko Yuliia Serhiivna, had laser vision correction at the 'British Ophthalmology Center'. I really liked everything. Everything was clear, with support at every stage. The surgeon, Dr. Artem Vyacheslavovych Burdey, explained everything thoroughly during the operation. I recommend this center to everyone who values high-quality service and professionalism!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/bobko.jpg",
        uk: {
            name: "Бобко Олена Валентинівна",
            text: "Робила лазерну корекцію, в «Британському офтальмологічному центрі» у лікаря Бурдея Артема В’ячеславовича, результатом дуже задоволена! Персонал привітний, все супер. \nДуже дякую, буду всім радити цю клініку.",
        },
        ru: {
            name: "Бобко Елена Валентиновна",
            text: "Делала лазерную коррекцию в «Британском офтальмологическом центре» у врача Бурдея Артёма Вячеславовича, результатом очень довольна! Персонал приветливый, всё супер. \nБольшое спасибо, буду всем советовать эту клинику.",
        },
        en: {
            name: "Bobko Olena Valentynivna",
            text: "I had laser vision correction at the 'British Ophthalmology Center' with Dr. Artem Vyacheslavovych Burdey, and I am very satisfied with the result! The staff is friendly, everything was great. \nThank you very much, I will recommend this clinic to everyone.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/voznyuk.jpg",
        uk: {
            name: "Вознюк Микола Стахович",
            text: "Я, Вознюк Микола Стахович, прооперувався з приводу ускладненої катаракти обох очей у «Британському офтольмологічному центрі» в м. Києві. Операцію проводив Гавура М.О., який здійснив майже неможливе, повернув мені зір з 0.2 до операції до 1.0 після. Що свідчить про високу майстерність Гавура М.О. і за що йому щиро вдячний. \nТакож хочу подякувати Офелії Олександровні лікарю, вклала своє уміння для відновлення зору в післяопераційний період. \nЗагалом хочу відзначити, що центр працює ,як хороший швейцарський годинник, колектив професіоналів, добрих і чуйних до пацієнтів людей. Хай Вам усім щастить , невичерпної енергії, здоров’я, успіхів в роботі та процвітання центру на благо пацієнтів. \nЗ повагою, М.С. Вознюк.",
        },
        ru: {
            name: "Вознюк Николай Стахович",
            text: "Я, Вознюк Николай Стахович, прооперировался по поводу осложнённой катаракты обоих глаз в «Британском офтальмологическом центре» в г. Киеве. Операцию проводил Гавура М. О., который сделал почти невозможное — вернул мне зрение с 0.2 до операции до 1.0 после. Это свидетельствует о высокой мастерстве Гавуры М. О., за что я ему искренне благодарен. \nТакже хочу поблагодарить Офелию Александровну, врача, которая вложила своё умение в восстановление зрения в послеоперационный период. \nВ целом хочу отметить, что центр работает как хорошие швейцарские часы: коллектив профессионалов, добрых и отзывчивых к пациентам людей. Желаю вам всем счастья, неиссякаемой энергии, здоровья, успехов в работе и процветания центра на благо пациентов. \nС уважением, Н. С. Вознюк.",
        },
        en: {
            name: "Vozniuk Mykola Stakhovych",
            text: "I, Vozniuk Mykola Stakhovych, underwent surgery for complicated cataracts in both eyes at the 'British Ophthalmology Center' in Kyiv. The surgery was performed by Dr. M. O. Havura, who achieved almost the impossible — restoring my vision from 0.2 before the operation to 1.0 afterward. This demonstrates the high skill of Dr. Havura, for which I am sincerely grateful. \nI would also like to thank Dr. Ofelia Oleksandrivna, who contributed her expertise in restoring my vision during the postoperative period. \nOverall, I want to note that the center works like a fine Swiss watch, with a team of professionals who are kind and attentive to patients. I wish you all happiness, inexhaustible energy, health, success in your work, and prosperity of the center for the benefit of patients. \nWith respect, M. S. Vozniuk.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/bilan.webp",
        uk: {
            name: "Білан Людмила Георгіївна",
            text: "Дуже вдячна всьому персоналу Британського офтальмологічного центру, в особливості: лікарю-хірургу Гавура М.О. та моєму лікуючому лікарю Петросовій Офелії Олександрівні! Операція пройшла швидко та абсолютно безболісно. Лікарі проявили високий рівень професіоналізму, детально пояснили кожен етап, що допомогло мені відчувати спокій і впевненість. \nРеабілітаційний період був легким завдяки чітким рекомендаціям лікаря. Особливо приємно, що медичний персонал був завжди на зв’язку, готовий відповісти на будь-які запитання. \nТепер я знову можу насолоджуватися життям у всіх його барвах. Щиро дякую всій команді за повернення 100 % зору та комфорт, який я відчула під час лікування!",
        },
        ru: {
            name: "Билан Людмила Георгиевна",
            text: "Очень благодарна всему персоналу Британского офтальмологического центра, особенно хирургу Гавура М.О. и моему лечащему врачу Петросовой Офелии Александровне! Операция прошла быстро и абсолютно безболезненно. Врачи проявили высокий уровень профессионализма, подробно объяснили каждый этап, что помогло мне чувствовать спокойствие и уверенность. \nРеабилитационный период был лёгким благодаря чётким рекомендациям врача. Особенно приятно, что медицинский персонал всегда был на связи и готов ответить на любые вопросы. \nТеперь я снова могу наслаждаться жизнью во всех её красках. Искренне благодарю всю команду за возвращение 100% зрения и комфорт, который я ощутила во время лечения!",
        },
        en: {
            name: "Bilan Lyudmyla Heorhiyivna",
            text: "I am very grateful to the entire staff of the British Ophthalmological Center, especially to surgeon Havura M.O. and my attending physician Petrosova Ofeliia Oleksandrivna! The surgery was quick and absolutely painless. The doctors demonstrated a high level of professionalism, explaining every step in detail, which helped me feel calm and confident. \nThe rehabilitation period was easy thanks to the doctor’s clear recommendations. I especially appreciated that the medical staff were always available and ready to answer any questions. \nNow I can once again enjoy life in all its colors. I sincerely thank the whole team for restoring 100% of my vision and for the comfort I felt during treatment!",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Черненко Надія Пантелеймонівна",
            text: "Я, Черненко Надія Пантелеймонівна, зробила операцію по заміні кришталика, 11.12.2024 (ліве око) та 17.12.2024 (праве око). Хочу висловити свою вдячність всім співробітникам центру, а саме: реєстратурі, медсестрам, оптометристам, лікарям та всім іншим, хто тут працює. \nВсім великий уклін. \nВелика подяка особливо Петросовій Офелії Олександрівні. Дуже уважна мила, люба та позитивна. \nМиру та добра, з повагою Н.П.Черненко.",
        },
        ru: {
            name: "Черненко Надежда Пантелеймоновна",
            text: "Я, Черненко Надежда Пантелеймоновна, сделала операцию по замене хрусталика: 11.12.2024 (левый глаз) и 17.12.2024 (правый глаз). Хочу выразить свою благодарность всем сотрудникам центра, а именно: регистратуре, медсёстрам, оптометристам, врачам и всем остальным, кто здесь работает. \nВсем низкий поклон. \nОсобая благодарность Петросовой Офелии Александровне. Очень внимательная, милая, добрая и позитивная. \nМира и добра, с уважением Н.П. Черненко.",
        },
        en: {
            name: "Chernenko Nadiia Panteleimonivna",
            text: "I, Chernenko Nadiia Panteleimonivna, underwent lens replacement surgery on 11.12.2024 (left eye) and 17.12.2024 (right eye). I want to express my gratitude to all the staff of the center, namely: the receptionists, nurses, optometrists, doctors, and everyone else working here. \nMy deepest respect to all. \nSpecial thanks to Petrosova Ofeliia Oleksandrivna. She is very attentive, kind, gentle, and positive. \nWishing peace and goodness, with respect, N.P. Chernenko.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Бикова Валентина Іванівна",
            text: "Я, Бикова Валентина Іванівна, зробила операцію по заміні кришталика. Дуже добре бачу, операція пройшла безболісно . \nВдячна всьому медичному персоналу за пунктуальність, чуйність та професіоналізм. Всім буду радити звертатись в Британський офтальмологічний центр з проблемами очей. \nВдячна лікарю Гавура М.О. за його золоті руки та лікуючому лікарю Рудяк У.І.",
        },
        ru: {
            name: "Быкова Валентина Ивановна",
            text: "Я, Быкова Валентина Ивановна, сделала операцию по замене хрусталика. Очень хорошо вижу, операция прошла безболезненно. \nБлагодарна всему медицинскому персоналу за пунктуальность, чуткость и профессионализм. Всем буду рекомендовать обращаться в Британский офтальмологический центр с проблемами глаз. \nБлагодарна врачу Гавура М.О. за его золотые руки и лечащему врачу Рудяк У.И.",
        },
        en: {
            name: "Bykova Valentyna Ivanivna",
            text: "I, Bykova Valentyna Ivanivna, underwent lens replacement surgery. I can see very well now, and the surgery was painless. \nI am grateful to all the medical staff for their punctuality, sensitivity, and professionalism. I will recommend the British Ophthalmological Center to everyone with eye problems. \nSpecial thanks to Dr. Havura M.O. for his golden hands and to my attending physician, Dr. Rudiak U.I.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Близнюк Світлана Володимирівна",
            text: "Я дуже задоволена клінікою. Зробила лазерну корекцію зору в «Британському офтальмологічному центрі». Сподобалось ВСЕ !!! Ввічливий персонал та професійні лікарі. Я багато років мріяла мати 100% зір. І в цій клініці мені повернули його. Безмежно вдячна персоналу та лікарям!!!",
        },
        ru: {
            name: "Близнюк Светлана Владимировна",
            text: "Я очень довольна клиникой. Сделала лазерную коррекцию зрения в «Британском офтальмологическом центре». Понравилось ВСЁ!!! Вежливый персонал и профессиональные врачи. Я много лет мечтала иметь 100% зрение. И в этой клинике мне его вернули. Безмерно благодарна персоналу и врачам!!!",
        },
        en: {
            name: "Blyzniuk Svitlana Volodymyrivna",
            text: "I am very satisfied with the clinic. I had laser vision correction at the 'British Ophthalmology Center'. I liked EVERYTHING!!! The staff is polite and the doctors are professional. For many years I dreamed of having 100% vision, and in this clinic they gave it back to me. I am endlessly grateful to the staff and doctors!!!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/bondoros.webp",
        uk: {
            name: "Бондорос Валентина Олексіївна",
            text: "Хочу щиро подякувати і засвідчити свою повагу відданому своїй праці персоналу «Британського офтальмологічного центру» за професіоналізм, щире та чуйне ставлення до кожного пацієнта, за готовність пояснити і допомогти. \nОсобливі слова подяки медичному директору, лікарю-офтальмохірургу вищої категорії Гавура М.О., за чуйне ставлення, терпіння, високу професійність, яка вселяє надію на одужання і гарний результат проведеної операції. \nСлова подяки завідуючій консультативно-діагностичного відділення Рудяк Уляні Іванівні, лікарю офтальмологу Штокалюк Катерині Валентинівні, за чуйне ставлення, уміння вислухати, заспокоїти, надати кваліфіковану консультацію. Бажаю всьому колективу Центру наснаги у Вашій нелегкій праці, подальшого процвітання вашого центру. \nЗ безмежною вдячністю, пацієнтка «Британського офтальмологічного центру»  Бондорос Валентина Олексіївна.",
        },
        ru: {
            name: "Бондорос Валентина Алексеевна",
            text: "Хочу искренне поблагодарить и выразить своё уважение преданному своей работе персоналу «Британского офтальмологического центра» за профессионализм, искреннее и чуткое отношение к каждому пациенту, за готовность объяснить и помочь. \nОсобые слова благодарности медицинскому директору, врачу-офтальмохирургу высшей категории Гавуре М. О., за чуткое отношение, терпение, высокий профессионализм, который вселяет надежду на выздоровление и хороший результат проведённой операции. \nСлова благодарности заведующей консультативно-диагностическим отделением Рудяк Ульяне Ивановне, врачу-офтальмологу Штокалюк Екатерине Валентиновне за чуткое отношение, умение выслушать, успокоить и дать квалифицированную консультацию. Желаю всему коллективу Центра вдохновения в вашей нелёгкой работе и дальнейшего процветания вашего центра. \nС безграничной благодарностью, пациентка «Британского офтальмологического центра» Бондорос Валентина Алексеевна.",
        },
        en: {
            name: "Bondoros Valentyna Oleksiivna",
            text: "I would like to sincerely thank and express my respect to the dedicated staff of the 'British Ophthalmology Center' for their professionalism, sincere and attentive attitude toward every patient, and willingness to explain and help. \nSpecial thanks to the Medical Director, ophthalmic surgeon of the highest category, Dr. M. O. Havura, for his caring attitude, patience, and high professionalism, which instills hope for recovery and excellent surgical results. \nGratitude also to the Head of the Consultative and Diagnostic Department, Dr. Uliana Ivanivna Rudiak, and ophthalmologist Dr. Kateryna Valentynivna Shtokaliuk, for their sensitivity, ability to listen, reassure, and provide qualified consultation. I wish the entire team of the Center inspiration in your difficult work and further prosperity for your clinic. \nWith boundless gratitude, patient of the 'British Ophthalmology Center', Bondoros Valentyna Oleksiivna.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/pastushenko.webp",
        uk: {
            name: "Пастушенко Олена Григорівна",
            text: "Я щиро вдячна за успішно проведену операцію по заміни кришталика у «Британському офтальмологічному центрі». Висококваліфіковані та уважні спеціалісти і сучасне обладнання. Особлива подяка лікарям Гавура М.О. та Рудяк У.І., за їх високий професіоналізм та доброзичливе відношення до пацієнтів,  також медичним сестрам і всьому персоналу центру. \nНайкращі побажання: здоров’я, миру, нових досягнень та звершень. Успіхів та процвітання клініці!",
        },
        ru: {
            name: "Пастушенко Елена Григорьевна",
            text: "Я искренне благодарна за успешно проведённую операцию по замене хрусталика в «Британском офтальмологическом центре». Высококвалифицированные и внимательные специалисты и современное оборудование. Особая благодарность врачам Гавуре М. О. и Рудяк У. И. за их высокий профессионализм и доброжелательное отношение к пациентам, а также медицинским сёстрам и всему персоналу центра. \nНаилучшие пожелания: здоровья, мира, новых достижений и свершений. Успехов и процветания клинике!",
        },
        en: {
            name: "Pastushenko Olena Hryhorivna",
            text: "I am sincerely grateful for the successful lens replacement surgery at the 'British Ophthalmology Center'. Highly qualified and attentive specialists and modern equipment. Special thanks to Dr. M. O. Havura and Dr. U. I. Rudiak for their high professionalism and kind attitude toward patients, as well as to the nurses and the entire staff of the center. \nBest wishes: health, peace, new achievements and accomplishments. Success and prosperity to the clinic!",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Юрик Наталія",
            text: "Щиро вдячна хірургу-офтальмологу Константиновій Віті Костянтинівній за високопрофесійну операцію із заміни кришталика ока і видалення катаракти, яка відновила мій зір. Завдяки вашому професіоналізму я почуваюся впевнено. \nВід щирого серця бажаю успіхів у професійній діяльності. Нехай кожен день приносить Вам радість та задоволення від того, що Ви робите для людей! \nНехай Господь посилає Вам свою всесильну благодать, милість, кріпкість та міцне здоров'я, обдаровує довголіттям та благоліттям і охороняє Вас. \nТакож хочу подякувати всьому персоналу клініки за турботу та створення комфортних умов під час лікування. \nДякую за нову якість життя! \nЗ повагою і вдячністю, Наталія Юрик.",
        },
        ru: {
            name: "Юрик Наталия",
            text: "Искренне благодарна хирургу-офтальмологу Константиновой Вите Константиновне за высокопрофессиональную операцию по замене хрусталика глаза и удалению катаракты, которая восстановила моё зрение. Благодаря вашему профессионализму я чувствую себя уверенно. \nОт всего сердца желаю успехов в профессиональной деятельности. Пусть каждый день приносит Вам радость и удовлетворение от того, что Вы делаете для людей! \nПусть Господь посылает Вам Свою всесильную благодать, милость, крепость и здоровье, дарует долголетие и благополучие и оберегает Вас. \nТакже хочу поблагодарить весь персонал клиники за заботу и создание комфортных условий во время лечения. \nСпасибо за новое качество жизни! \nС уважением и благодарностью, Наталия Юрик.",
        },
        en: {
            name: "Yuryk Nataliia",
            text: "I sincerely thank ophthalmic surgeon Konstaninova Vita Kostiantynivna for the highly professional cataract removal and lens replacement surgery that restored my vision. Thanks to your professionalism, I feel confident. \nFrom the bottom of my heart, I wish you success in your professional activities. May each day bring you joy and satisfaction from the work you do for people! \nMay the Lord grant you His almighty grace, mercy, strength, and good health, bless you with long life and prosperity, and protect you. \nI would also like to thank the entire clinic staff for their care and for creating comfortable conditions during my treatment. \nThank you for giving me a new quality of life! \nWith respect and gratitude, Nataliia Yuryk.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Левітіна Людмила",
            text: "Я, Левітіна Людмила, висловлюю свою глибоку повагу і вдячність лікарю-хірургу, яка проводила мені операцію по заміні кришталиків, Константиновій Віті Костянтинівні, за високий професіоналізм, доброзичливе відношення, за увагу та турботу. Також дякую всьому персоналу, що супроводжували мене протягом обстеження і операції, за ввічливість, чуйність, професіоналізм, за їх чітке виконання своїх обов'язків. Люди по моїй рекомендації звертаються в вашу клініку для вирішення проблем із зором, навіть вже деякі прооперувались.",
        },
        ru: {
            name: "Левитина Людмила",
            text: "Я, Левитина Людмила, выражаю своё глубокое уважение и благодарность хирургу, которая проводила мне операцию по замене хрусталиков, Константиновой Вите Константиновне, за высокий профессионализм, доброжелательное отношение, внимание и заботу. Также благодарю весь персонал, который сопровождал меня во время обследования и операции, за вежливость, чуткость, профессионализм и чёткое выполнение своих обязанностей. Люди по моей рекомендации обращаются в вашу клинику для решения проблем со зрением, некоторые уже прооперировались.",
        },
        en: {
            name: "Levitina Lyudmyla",
            text: "I, Levitina Lyudmyla, express my deep respect and gratitude to the surgeon who performed my lens replacement surgery, Konstaninova Vita Kostiantynivna, for her high professionalism, kindness, attention, and care. I also thank the entire staff who accompanied me during the examination and surgery for their politeness, attentiveness, professionalism, and precise performance of their duties. People I have recommended are already turning to your clinic to solve their vision problems, and some have already undergone surgery.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Помінальна Тетяна Григорівна",
            text: "Я, Помінальна Тетяна Григорівна, висловлюю свою глибоку повагу і вдячність лікарю-хірургу, яка проводила 5.06.2024 операцію по заміні кришталика, Константиновій Віті Костянтинівні, за високий професіоналізм, доброзичливе відношення, за увагу та турботу. \nТакож дякую всьому персоналу, що супроводжували мене протягом обстеження і операції, за ввічливість, чуйність, професіоналізм, за їх чітке виконання своїх обов’язків. \nРекомендую цю клініку для вирішення проблем із зором. \nЗ повагою і вдячністю Тетяна Помінальна.",
        },
        ru: {
            name: "Помінальная Татьяна Григорьевна",
            text: "Я, Помінальная Татьяна Григорьевна, выражаю своё глубокое уважение и благодарность хирургу, которая 5.06.2024 провела операцию по замене хрусталика, Константиновой Вите Константиновне, за высокий профессионализм, доброжелательное отношение, внимание и заботу. \nТакже благодарю весь персонал, который сопровождал меня во время обследования и операции, за вежливость, чуткость, профессионализм и чёткое выполнение своих обязанностей. \nРекомендую эту клинику для решения проблем со зрением. \nС уважением и благодарностью, Татьяна Помінальная.",
        },
        en: {
            name: "Pominálna Tetiana Hryhorivna",
            text: "I, Pominálna Tetiana Hryhorivna, express my deep respect and gratitude to the surgeon who performed my lens replacement surgery on 5.06.2024, Konstaninova Vita Kostiantynivna, for her high professionalism, kindness, attention, and care. \nI also thank the entire staff who accompanied me during the examination and surgery for their politeness, attentiveness, professionalism, and precise performance of their duties. \nI recommend this clinic for solving vision problems. \nWith respect and gratitude, Tetiana Pominálna.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Богачевич Людмила Федорівна",
            text: "Дуже хочеться написати добрі слова всім тим, хто мені допоміг виправити зір – зроблена чудова операція. Оточували професіонали. Не менш важливо – гарні комунікації, бездоганне обслуговування пацієнта на всіх етапах лікування в «Британському офтальмологічному центрі». \nДякую Гавура М.О., Скапі Василю Івановичу, Бутейцю Ігорю Федоровичу, Кохтачовій Тетяні Миколаївні. Наснаги, доброго здоров’я зичу – з повагою Богачевич Людмила Федорівна.",
        },
        ru: {
            name: "Богачевич Людмила Фёдоровна",
            text: "Очень хочется написать добрые слова всем тем, кто помог мне восстановить зрение – была сделана отличная операция. Меня окружали профессионалы. Не менее важно – хорошие коммуникации, безупречное обслуживание пациента на всех этапах лечения в «Британском офтальмологическом центре». \nБлагодарю Гавуру М.А., Скапу Василия Ивановича, Бутейца Игоря Фёдоровича, Кохтачову Татьяну Николаевну. Желаю вдохновения, крепкого здоровья – с уважением, Богачевич Людмила Фёдоровна.",
        },
        en: {
            name: "Liudmyla Bohachevych",
            text: "I really want to write kind words to everyone who helped me restore my vision – a wonderful surgery was performed. I was surrounded by professionals. Equally important – excellent communication and impeccable patient care at all stages of treatment at the 'British Ophthalmological Center.' \nMy thanks to Havura M.O., Skapa Vasyl Ivanovych, Buteits Ihor Fedorovych, Kokhtachova Tetiana Mykolaivna. I wish you inspiration and good health – with respect, Liudmyla Bohachevych.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Билим Лариса Петрівна",
            text: "Я, Билим Лариса Петрівна. Дуже вдячна лікарю від Бога - Віті Костянтинівні, за якісно проведену операцію з видалення катаракти на обох очах. Дуже чуйна, відповідальна та приємна людина. Лікар з «золотими руками». \nВсім рекомендую!",
        },
        ru: {
            name: "Былым Лариса Петровна",
            text: "Я, Былым Лариса Петровна. Очень благодарна врачу от Бога – Вите Константиновне, за качественно проведённую операцию по удалению катаракты на обоих глазах. Очень чуткий, ответственный и приятный человек. Врач с «золотыми руками». \nВсем рекомендую!",
        },
        en: {
            name: "Larysa Bylym",
            text: "I, Larysa Bylym, am very grateful to a doctor sent by God – Vita Konstantynivna, for the high-quality cataract surgery on both eyes. She is a very kind, responsible, and pleasant person. A doctor with 'golden hands.' \nI recommend her to everyone!",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Ольга Ротт",
            text: "З квітня 2024 року я щаслива людина з новою «оптикою» в очах) Із всіх багатьох клінік країни я обрала саме цю, і жодного разу не пошкодувала про свій вибір. Хочу подякувати кваліфікованому професіоналу лікарю-хірургу Константіновій Віті Костянтинівні за дуже точно підібрані мені кришталики. Вона, персоналізовано і чітко підібрала необхідні мені лінзи, професійно провела обидві операції, і я дуже задоволена результатом! За що завжди буду вдячна цьому крутому лікарю! Також дякую всьому персоналу, від приємних менеджерів на рецепції до кожної медичної сестри, яка супроводжувала мене протягом обох операцій. Дівчата молоді, ввічливі, чуйні до кожного пацієнта, незалежно від віку. Це така велика цінність наразі. \nМоя щира рекомендація кожному, хто хоче вирішити будь-яку свою потребу покращення зору! \nЗ повагою, Ольга Ротт.",
        },
        ru: {
            name: "Ольга Ротт",
            text: "С апреля 2024 года я счастливый человек с новой «оптикой» в глазах) Из всех многочисленных клиник страны я выбрала именно эту и ни разу не пожалела о своём выборе. Хочу поблагодарить квалифицированного профессионала, врача-хирурга Константинову Виту Константиновну за очень точно подобранные мне хрусталики. Она индивидуально и чётко подобрала необходимые мне линзы, профессионально провела обе операции, и я очень довольна результатом! За это всегда буду благодарна этому замечательному врачу! Также благодарю весь персонал – от приветливых менеджеров на ресепшене до каждой медсестры, которая сопровождала меня во время обеих операций. Девушки молодые, вежливые, чуткие к каждому пациенту, независимо от возраста. Это сейчас огромная ценность. \nМоя искренняя рекомендация каждому, кто хочет решить любую свою проблему со зрением! \nС уважением, Ольга Ротт.",
        },
        en: {
            name: "Olha Rott",
            text: "Since April 2024, I have been a happy person with new 'optics' in my eyes :) Among all the many clinics in the country, I chose this one and never once regretted my choice. I would like to thank the highly qualified professional, surgeon Vita Konstantynivna Konstantinova, for the perfectly selected intraocular lenses. She individually and precisely picked the lenses I needed, performed both surgeries professionally, and I am very satisfied with the result! I will always be grateful to this amazing doctor! I also thank all the staff – from the friendly managers at the reception to every nurse who accompanied me during both surgeries. The young women are polite, attentive, and caring to every patient, regardless of age. That is such a great value nowadays. \nMy sincere recommendation to everyone who wants to solve any vision problem! \nWith respect, Olha Rott.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Проскурова Лариса Гаврилівна",
            text: "Я, Проскурова Лариса Гаврилівна, висловлюю свою глибоку повагу лікарю-хірургу Гавура М.О. та анестезіологу Козюрі Максиму Анатолійовичу за їх високий професіоналізм та доброзичливе відношення до пацієнтів. А також хочу висловити свою повагу до усіх працівників вашої команди, за їх чітке виконання своїх обов’язків. Відчувала себе в цьому колективі як вдома, серед членів єдиної родини. \nБезмежно вдячна. До наступного побачення.",
        },
        ru: {
            name: "Проскурова Лариса Гавриловна",
            text: "Я, Проскурова Лариса Гавриловна, выражаю глубокое уважение врачу-хирургу Гавура М.О. и анестезиологу Козюре Максиму Анатольевичу за их высокий профессионализм и доброжелательное отношение к пациентам. А также хочу выразить своё уважение ко всем сотрудникам вашей команды за их чёткое выполнение своих обязанностей. Чувствовала себя в этом коллективе как дома, среди членов одной семьи. \nБезмерно благодарна. До следующей встречи.",
        },
        en: {
            name: "Proskurova Larysa Havrylivna",
            text: "I, Proskurova Larysa Havrylivna, would like to express my deep respect to surgeon Havura M.O. and anesthesiologist Kozyura Maksym Anatoliyovych for their high professionalism and kind attitude towards patients. I would also like to express my respect to all members of your team for their precise fulfillment of duties. I felt at home in this team, among members of one big family. \nImmensely grateful. Until next time.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Прокоф'єв Олександр Федорович",
            text: "Хочу подякувати всьому колективу клініки, який дбайливо піклувався про кожну хвилину знаходження, починаючи з реестратури і до дверей хірургічного кабінету,але саме велике диво починається як раз коли людина починає оперувати і її спокійний врівноважений голос дають тобі впевненість і довіру до того що робиться навколо. \nНизький уклін і дяка Віті Константинівні за те що вона зробила мої побоювання легкою прогулянкою.",
        },
        ru: {
            name: "Прокофьев Александр Федорович",
            text: "Хочу поблагодарить весь коллектив клиники, который заботился о каждой минуте пребывания, начиная с регистратуры и до дверей хирургического кабинета, но самое большое чудо начинается именно тогда, когда врач начинает оперировать, и её спокойный, уравновешенный голос дарит тебе уверенность и доверие к тому, что происходит вокруг. \nНизкий поклон и благодарность Вите Константиновне за то, что она превратила мои опасения в лёгкую прогулку.",
        },
        en: {
            name: "Prokofiev Oleksandr Fedorovych",
            text: "I would like to thank the entire clinic staff, who carefully took care of every moment of my stay, from the reception to the doors of the surgical room. But the greatest miracle begins precisely when the doctor starts the surgery, and her calm, balanced voice gives you confidence and trust in what is happening around you. \nA deep bow and gratitude to Vita Konstantynivna for turning my worries into an easy walk.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Гольденберг Люся Львівна",
            text: "Висловлюю свою вдячність за обслуговування. Дякую Всім працівникам цього закладу за Вашу роботу. \nБуду рекомендувати всім знайомим Ваш заклад.",
        },
        ru: {
            name: "Гольденберг Люся Львовна",
            text: "Выражаю благодарность за обслуживание. Спасибо всем сотрудникам этого учреждения за вашу работу. \nБуду рекомендовать ваше учреждение всем знакомым.",
        },
        en: {
            name: "Goldenberg Lusia Lvivna",
            text: "I would like to express my gratitude for the service. Thank you to all the staff of this institution for your work. \nI will recommend your clinic to all my acquaintances.",
        },
    },

    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Чайка-Т.С.jpg",
        uk: {
            name: "Чайка Т.С.",
            text: "Хочу висловити щиру подяку Гавура М.О. – хірургу з великої літери. Лікарю Марії Сергіївні Михайловській, та всім хто працює в «Британському офтальмологічному центрі»! Це дійсно сервіс найвищого рівня! \nБачити світ, який практично дарують ці люди– велике щастя! \nДякую щиро! Бажаю всім родинного щастя та міцного здоров’я! \nЗ повагою, Чайка.Т.С.",
        },
        ru: {
            name: "Чайка Т.С.",
            text: "Хочу выразить искреннюю благодарность Гавура М.О. – хирургу с большой буквы. Врачу Марии Сергеевне Михайловской и всем, кто работает в «Британском офтальмологическом центре»! Это действительно сервис высочайшего уровня! \nВидеть мир, который практически дарят эти люди – огромное счастье! \nСпасибо искренне! Желаю всем семейного счастья и крепкого здоровья! \nС уважением, Чайка Т.С.",
        },
        en: {
            name: "Chaika T.S.",
            text: "I would like to express my sincere gratitude to Havura M.O. – a surgeon with a capital letter. To doctor Mariia Serhiivna Mykhailovska, and to everyone who works at the «British Ophthalmological Center»! This is truly top-level service! \nTo see the world that these people practically give you is a great happiness! \nThank you sincerely! I wish everyone family happiness and good health! \nWith respect, Chaika T.S.",
        },
    },

    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Іващенко-Н.О.jpg",
        uk: {
            name: "Іващенко Надія Олексіївна та її донька",
            text: "Ми, Іващенко Надія Олексіївна та її донька, хочемо висловити свою вдячність за відмінне відношення, прекрасне обслуговування, за увагу та турботу! Всьому колективу, «Британського офтальмологічного центру», подальшого процвітання, успіхів і вдачі у вашій нелегкій праці. \nЗ повагою ваші пацієнти.",
        },
        ru: {
            name: "Иващенко Надежда Алексеевна и её дочь",
            text: "Мы, Иващенко Надежда Алексеевна и её дочь, хотим выразить благодарность за отличное отношение, прекрасное обслуживание, за внимание и заботу! Всему коллективу «Британского офтальмологического центра» дальнейшего процветания, успехов и удачи в вашей нелёгкой работе. \nС уважением, ваши пациенты.",
        },
        en: {
            name: "Ivashchenko Nadiia Oleksiivna and her daughter",
            text: "We, Ivashchenko Nadiia Oleksiivna and her daughter, would like to express our gratitude for the excellent attitude, wonderful service, attention, and care! We wish the entire team of the «British Ophthalmological Center» continued prosperity, success, and good luck in your hard work. \nWith respect, your patients.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/ПОСТОВОЙТОВА.jpg",
        uk: {
            name: "Постовойтова Галина Ігнатівна",
            text: "Я, Постовойтова Галина Ігнатівна, проходила лікування в Британському офтальмологічному центрі. Виявляю подяку всьому персоналу центра, особливо лікуючому лікарю Скапі Василю Івановичу. Та хірургу Гавура М.О. \nВесь колектив центру дуже уважний та професійний, надали всі умови для мого комфорту при проходженні кожного етапу лікування, дуже духовна атмосферна. \nБажаю всьому колективу в професійній діяльності успіхів і процвітання.",
        },
        ru: {
            name: "Постовойтова Галина Игнатиевна",
            text: "Я, Постовойтова Галина Игнатиевна, проходила лечение в Британском офтальмологическом центре. Выражаю благодарность всему персоналу центра, особенно лечащему врачу Скапе Василию Ивановичу и хирургу Гавуре М.А. \nВесь коллектив центра очень внимательный и профессиональный, создали все условия для моего комфорта на каждом этапе лечения, атмосфера очень душевная. \nЖелаю всему коллективу успехов и процветания в профессиональной деятельности.",
        },
        en: {
            name: "Halyna Postovoitova",
            text: "I, Halyna Postovoitova, underwent treatment at the British Ophthalmological Center. I express my gratitude to the entire staff of the center, especially to my attending doctor, Skapa Vasyl Ivanovych, and surgeon Havura M.O. \nThe whole team was very attentive and professional, providing every condition for my comfort at each stage of treatment, with a very warm and caring atmosphere. \nI wish the entire team success and prosperity in their professional activities.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Гусейнова Мехрібан",
            text: "Я дуже задоволена, дякую лікарям. Багато років страждала, постійно носила окуляри в сумці для читання та комп’ютера і для далі. Без окулярів було дуже погано. Дякую хірургу Гавура М.О. та Штокалюк Катерині Валентинівні. І дякую медичному персоналу, всі дуже приємні.",
        },
        ru: {
            name: "Гусейнова Мехрибан",
            text: "Я очень довольна, спасибо врачам. Много лет страдала, постоянно носила в сумке очки для чтения, работы за компьютером и для дали. Без очков было очень плохо. Благодарю хирурга Гавуру М.А. и Штокалюк Екатерину Валентиновну. И спасибо всему медицинскому персоналу, все очень приятные.",
        },
        en: {
            name: "Mehriban Huseynova",
            text: "I am very satisfied, thank you to the doctors. For many years I suffered and constantly carried glasses in my bag – for reading, computer work, and distance. Without glasses, it was very difficult. I thank surgeon Havura M.O. and Kateryna Valentynivna Shtokaliuk. And thank you to the entire medical staff, everyone is very pleasant.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Бакум Андрій Григорович",
            text: "Щиро дякую «Британському офтальмологічному центру» за високу якість надання послуг. Особлива подяка хірургу Гавура М.О., лікарю Рудяк Уляні Іванівні. Бажаю процвітання та мирного неба. Ви найкращі. Дякую Вам.",
        },
        ru: {
            name: "Бакум Андрей Григорьевич",
            text: "Искренне благодарю «Британский офтальмологический центр» за высокое качество предоставляемых услуг. Особая благодарность хирургу Гавуре М.А., врачу Рудяк Ульяне Ивановне. Желаю процветания и мирного неба. Вы лучшие. Спасибо вам.",
        },
        en: {
            name: "Andrii Bakum",
            text: "I sincerely thank the 'British Ophthalmological Center' for the high quality of services provided. Special thanks to surgeon Havura M.O. and doctor Uliana Ivanivna Rudiak. I wish you prosperity and peaceful skies. You are the best. Thank you.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Спасьонова Лариса Миколаївна",
            text: "Як мені здалося, найскладніші операції у Британському офтальмологічному центрі виконує Головний лікар - лікар вищого класу – Гавура М.О., якому допомагає висококваліфікована команда. І його права рука – Рудяк Уляна Іванівна - завідувач консультативно-діагностичним відділенням. Після закінчення операції я назвала їх «Beatles» не тільки тому, що англійською так звучить прізвище лікаря, а й тому, що їх висококваліфіковану роботу знають не тільки в Україні. Під час очікування огляду неодноразово зустрічала і іноземців, які обстежувалися чи чекали на операцію. Мій випадок виявився складним, крім катаракти були і проблеми з сітківкою. Однак операція пройшла успішно. Я дуже вдячна Гавура М.О. і його команді за професіоналізм, увагу і чуйне, уважне ставлення до пацієнтів. А Уляні Іванівні також і за післяопераційний супровід. Нам є чим гордитись. Наші хірурги виконують найскладніші операції і в такий складний для країни час. Хочеться побажати всьому колективу міцного здоров’я та довгих років життя, творчої наснаги, невсипущої енергії, плідних проектів, креативних колег-однодумців та послідовників. Хай щастить на всіх життєвих дорогах! І всім нас скорішої перемоги.",
        },
        ru: {
            name: "Спасёнова Лариса Николаевна",
            text: "Как мне показалось, самые сложные операции в Британском офтальмологическом центре выполняет Главный врач – врач высшего класса – Гавура М.А., которому помогает высококвалифицированная команда. Его правая рука – Рудяк Ульяна Ивановна, заведующая консультативно-диагностическим отделением. После окончания операции я назвала их «Beatles» не только потому, что фамилия врача созвучна на английском, но и потому, что их высококвалифицированную работу знают не только в Украине. Во время ожидания осмотра неоднократно встречала и иностранцев, которые обследовались или ждали операции. Мой случай оказался сложным: кроме катаракты были и проблемы с сетчаткой. Однако операция прошла успешно. Я очень благодарна Гавуре М.А. и его команде за профессионализм, внимание и чуткое отношение к пациентам. А Ульяне Ивановне также и за послеоперационное сопровождение. Нам есть чем гордиться. Наши хирурги выполняют самые сложные операции даже в такое трудное для страны время. Хочется пожелать всему коллективу крепкого здоровья и долгих лет жизни, творческого вдохновения, неиссякаемой энергии, плодотворных проектов, креативных коллег-единомышленников и последователей. Пусть везёт на всех жизненных дорогах! И всем нам скорейшей победы.",
        },
        en: {
            name: "Larysa Spasionova",
            text: "As it seemed to me, the most complex surgeries at the British Ophthalmological Center are performed by the Chief Doctor – a top-class specialist – Havura M.O., assisted by a highly qualified team. His right hand is Uliana Ivanivna Rudiak, the head of the consultative-diagnostic department. After the surgery, I called them 'the Beatles' not only because the doctor's surname sounds like that in English but also because their highly qualified work is recognized not only in Ukraine. While waiting for examinations, I repeatedly met foreigners who were being treated or waiting for surgery. My case turned out to be complicated: in addition to cataracts, there were also retinal problems. However, the surgery was successful. I am very grateful to Havura M.O. and his team for their professionalism, care, and attentive attitude toward patients. And to Uliana Ivanivna also for the postoperative support. We truly have something to be proud of. Our surgeons perform the most complex operations even in such difficult times for the country. I wish the entire team strong health and long life, creative inspiration, tireless energy, fruitful projects, and creative like-minded colleagues and successors. May good fortune follow you on all life’s paths! And may we all see victory soon.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Аббясова Шаміля Мухлісова",
            text: "Я, Аббясова Шаміля Мухлісова, хочу подякувати колективу лікарів (Андрію Миколайовичу, Катерині Валентинівні), а також чутливій  медсестрі Тетяні Кохтачовій за “легкі руки“. Бажаю їм так тримати та успіхів  у роботі.",
        },
        ru: {
            name: "Аббясова Шамиля Мухлисовна",
            text: "Я, Аббясова Шамиля Мухлисовна, хочу поблагодарить коллектив врачей (Андрея Николаевича, Екатерину Валентиновну), а также чуткую медсестру Татьяну Кохтачову за «лёгкие руки». Желаю им так держать и успехов в работе.",
        },
        en: {
            name: "Abbyasova Shamilya Mukhlisovna",
            text: "I, Abbyasova Shamilya Mukhlisovna, would like to thank the team of doctors (Andrii Mykolaiovych, Kateryna Valentynivna), as well as the caring nurse Tetiana Kokhtachova for her «light hands». I wish them to keep it up and much success in their work.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Ткаченко.webp",
        uk: {
            name: "Ткаченко Надія Олексіївна",
            text: "Найкращій подарунок на день народження – це знову бачити. Дуже дякуємо Британському офтальмологічному центру за таку можливість. Увага та високий професіоналізм – це Ваш коник. Бажаємо Вашому колективу отримувати тільки блискавичні перемоги у боротьбі світла над темрявою! \nЗі вдячністю та повагою, Ткаченко Н.Д. та її родина.",
        },
        ru: {
            name: "Ткаченко Надежда Алексеевна",
            text: "Лучший подарок на день рождения – это снова видеть. Огромное спасибо Британскому офтальмологическому центру за такую возможность. Внимание и высокий профессионализм – это ваш конёк. Желаем вашему коллективу одерживать только молниеносные победы в борьбе света над тьмой! \nС благодарностью и уважением, Ткаченко Н.Д. и её семья.",
        },
        en: {
            name: "Tkachenko Nadiia Oleksiivna",
            text: "The best birthday gift is to be able to see again. Many thanks to the British Ophthalmological Center for this opportunity. Attention and high professionalism are your strong points. We wish your team only lightning-fast victories in the battle of light over darkness! \nWith gratitude and respect, Tkachenko N.D. and her family.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Осадчий-М.П.jpg",
        uk: {
            name: "Осадчий Микола Петрович",
            text: "Я, Осадчий Микола Петрович проходячи лікування в клініці отримав повне задоволення від роботи персоналу вашого центру. Особливо вдячний хірургу Константіновій Віті Костянтинівні – чуйна, доброзичлива людина та хороший фахівець. Я дуже вдячний!",
        },
        ru: {
            name: "Осадчий Николай Петрович",
            text: "Я, Осадчий Николай Петрович, проходя лечение в клинике, получил полное удовлетворение от работы персонала вашего центра. Особенно благодарен хирургу Константиновой Вите Константиновне – чуткий, доброжелательный человек и прекрасный специалист. Я очень благодарен!",
        },
        en: {
            name: "Osadchyi Mykola Petrovych",
            text: "I, Osadchyi Mykola Petrovych, while undergoing treatment at the clinic, was completely satisfied with the work of the staff of your center. I am especially grateful to surgeon Vita Konstantynivna Konstantinova – a kind, caring person and an excellent specialist. I am very thankful!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Воробйова.webp",
        uk: {
            name: "Воробйова Валентина Миколаївна",
            text: "Я, Воробйова Валентина Миколаївна, робила операцію катаракти в «Британському офтальмологічному центрі» 4 роки тому на одному оці, рік тому на лівому. Мені зробили чудову операцію з англійським кришталиком Rayner. Я була дуже щаслива. Але в оці залишилась проблема з сітківкою. Це не залежало від лікарів. В мене на лівому оці почався погіршуватися зір. Мені в міській лікарні запропонували колоти ін’єкцію Айлія. В даній клініці ця процедура коштує 8 тисяч грн. і потрібно її колоти постійно. Я пішла в «Британський офтальмологічний центр» і після повного обстеження мені сказали, що в мене суха форма кістозного макулярного набряку. Мені цей укол протипоказаний взагалі. Я осліпла б після цього уколу! Мій зір, на той момент, впав до 20%. \nПісля обстеження в Британському центрі, мене лікувала Рудяк Уляна Іванівна – дуже чуйна та професійна. Крім того, що Уляна Іванівна лікувала моє око, вона заспокоювала мене: «- Не хвилюйтесь. Ми зробимо все можливе і покращимо ваш зір!» \nЯ прийшла до центру в травні 2023 року і сьогодні, 24 серпня, у День Незалежності України, у мене подвійне свято – відновився зір до 100%. Я не можу передати радість, мою та мого сина. \nЯ хочу сказати велике дякую Уляні Іванівні й всьому персоналу «Британського офтальмологічного центру». Дуже уважний персонал.",
        },
        ru: {
            name: "Воробьёва Валентина Николаевна",
            text: "Я, Воробьёва Валентина Николаевна, делала операцию катаракты в «Британском офтальмологическом центре» 4 года назад на одном глазу, год назад – на левом. Мне сделали прекрасную операцию с английским хрусталиком Rayner. Я была очень счастлива. Но в глазу осталась проблема с сетчаткой. Это не зависело от врачей. У меня на левом глазу начал ухудшаться зрение. В городской больнице предложили колоть инъекцию Айлия. В данной клинике эта процедура стоит 8 тысяч грн. и её нужно делать постоянно. Я пошла в «Британский офтальмологический центр» и после полного обследования мне сказали, что у меня сухая форма кистозного макулярного отёка. Мне этот укол противопоказан вообще. Я ослепла бы после него! Моё зрение на тот момент упало до 20%. \nПосле обследования в Британском центре меня лечила Рудяк Ульяна Ивановна – очень чуткая и профессиональная. Кроме того, что Ульяна Ивановна лечила мой глаз, она меня успокаивала: «Не волнуйтесь. Мы сделаем всё возможное и улучшим ваше зрение!» \nЯ пришла в центр в мае 2023 года, и сегодня, 24 августа, в День Независимости Украины, у меня двойной праздник – зрение восстановилось до 100%. Я не могу передать радость – мою и моего сына. \nХочу сказать огромное спасибо Ульяне Ивановне и всему персоналу «Британского офтальмологического центра». Очень внимательный персонал.",
        },
        en: {
            name: "Vorobiova Valentyna Mykolaivna",
            text: "I, Vorobiova Valentyna Mykolaivna, had cataract surgery at the «British Ophthalmological Center» 4 years ago on one eye, and a year ago on the left one. I underwent a wonderful surgery with an English Rayner lens. I was very happy. But there remained a problem with the retina in my eye. This was not dependent on the doctors. My vision in the left eye began to deteriorate. At the city hospital, I was offered an Eylea injection. In this clinic, the procedure costs 8,000 UAH and has to be done continuously. I went to the «British Ophthalmological Center», and after a full examination I was told that I had a dry form of cystoid macular edema. This injection was strictly contraindicated for me. I would have gone blind after it! At that time, my vision had dropped to 20%. \nAfter the examination at the British Center, I was treated by Uliana Ivanivna Rudiak – a very caring and professional doctor. In addition to treating my eye, Uliana Ivanivna reassured me: «Do not worry. We will do everything possible and improve your vision!» \nI came to the center in May 2023, and today, on August 24, Ukraine’s Independence Day, I have a double celebration – my vision has been restored to 100%. I cannot express the joy – mine and my son’s. \nI want to say a huge thank you to Uliana Ivanivna and the entire staff of the «British Ophthalmological Center». Very attentive staff.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Вільхова Галина Василівна",
            text: "Я, Вільхова Галина Василівна, дуже вдячна працівникам «Британського офтальмологічного центру», а особливо лікарю Гавура М.О., за повернений зір та радість, що можу бачити світ в яскравих кольорах.",
        },
        ru: {
            name: "Вильхова Галина Васильевна",
            text: "Я, Вильхова Галина Васильевна, очень благодарна работникам «Британского офтальмологического центра», а особенно врачу Гавуре М.А., за возвращённое зрение и радость видеть мир в ярких красках.",
        },
        en: {
            name: "Vilkhova Halyna Vasylivna",
            text: "I, Vilkhova Halyna Vasylivna, am very grateful to the staff of the 'British Ophthalmological Center', and especially to doctor Havura M.O., for giving me back my vision and the joy of seeing the world in bright colors.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Гуджан Олена Валеріївна",
            text: "Хочу висловити свою подяку «Британському офтальмологічному центру», усьому персоналу, лікарям, які дарують нам новий зір та нове життя. \nТе, що ви робите для нас, просто безціне. Бачити світ по новому – це велике щастя. Від щирого серця бажаю вам усім здоров’я, щастя, натхнення та успіхів у професійній діяльності. \nВи, всі наші чарівники. Нехай Господь охороняє Вас.",
        },
        ru: {
            name: "Гуджан Елена Валерьевна",
            text: "Хочу выразить свою благодарность «Британскому офтальмологическому центру», всему персоналу, врачам, которые дарят нам новое зрение и новую жизнь. \nТо, что вы делаете для нас, просто бесценно. Видеть мир по-новому – это огромное счастье. От всего сердца желаю вам всем здоровья, счастья, вдохновения и успехов в профессиональной деятельности. \nВы — все наши волшебники. Пусть Господь хранит вас.",
        },
        en: {
            name: "Hudzhan Olena Valeriivna",
            text: "I want to express my gratitude to the 'British Ophthalmological Center', to the entire staff, to the doctors who give us new vision and a new life. \nWhat you do for us is truly priceless. To see the world in a new way is a great happiness. From the bottom of my heart, I wish you all health, happiness, inspiration, and success in your professional work. \nYou are all our magicians. May the Lord protect you.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Форсюк-Л.С.jpg",
        uk: {
            name: "Форсюк Лідія Стахівна",
            text: "Зробила операцію по заміні кришталика в «Британському офтальмологічному центрі». Відвідавши декілька центрів в Києві, зупинила свій вибір на «Британському офтальмологічному центрі». І не помилилась. Мені робила операцію Константінова В. К, дякую за професійний підхід до операції. Дякую за дуже гарні результати після операції, в той же день бачила, ніякого дискомфорту немає. Всьому колективу, професійного зростання, розвитку та вдячних клієнтів.",
        },
        ru: {
            name: "Форсюк Лидия Стаховна",
            text: "Сделала операцию по замене хрусталика в «Британском офтальмологическом центре». Посетив несколько центров в Киеве, остановила свой выбор на «Британском офтальмологическом центре». И не ошиблась. Мне делала операцию Константинова В.К. Спасибо за профессиональный подход к операции. Спасибо за прекрасные результаты: в тот же день я уже видела, никакого дискомфорта не было. Всему коллективу желаю профессионального роста, развития и благодарных клиентов.",
        },
        en: {
            name: "Forsyuk Lidiia Stakhivna",
            text: "I had a lens replacement surgery at the 'British Ophthalmological Center'. After visiting several centers in Kyiv, I chose the 'British Ophthalmological Center'. And I was not mistaken. My surgery was performed by Konstantinova V.K. Thank you for the professional approach to the surgery. Thank you for the excellent results: on the very same day I could already see, and there was no discomfort. I wish the entire team professional growth, development, and grateful patients.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Волос-М.Х.jpg",
        uk: {
            name: "Волос Микола Харланович",
            text: "Дуже сподобалось відношення і дуже вдале лікування моїх очей. Після проведення операції очі почали бачити, як рідні. Я дуже задоволений таким відношенням та роботою Андрія Миколайовича. Вважаю, що цей лікар від Бога.",
        },
        ru: {
            name: "Волос Николай Харланович",
            text: "Очень понравилось отношение и успешное лечение моих глаз. После операции глаза начали видеть, как родные. Я очень доволен таким отношением и работой Андрея Николаевича. Считаю, что этот врач — от Бога.",
        },
        en: {
            name: "Volos Mykola Kharlanovych",
            text: "I really liked the attitude and the very successful treatment of my eyes. After the surgery, my eyes began to see as if they were new. I am very satisfied with such care and the work of Andrii Mykolaiovych. I believe this doctor is truly God-given.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Яременко Анатолій Михайлович",
            text: "Я, Яременко Анатолій Михайлович, хочу висловити велику подяку колективу Британського офтальмологічного центру м. Київ за надану медичну допомогу. Успішне оперативне втручання із заміною кришталика та з усім подальшим лікуванням. Особлива подяка хірургу Гавура М.О., лікарю Рудяк Уляні Іванівні та анестезіологу Козюрі Максиму Анатолійовичу, які блискуче справились зі своєю роботою. Я приємно був вражений відношенням колективу до кожного пацієнта. Колектив молодий, перспективний, привітний та завжди з посмішкою. \nЩе раз велика подяка, нехай кожен день приносить Вам радість та задоволення від того, що Ви робите для людей!",
        },
        ru: {
            name: "Яременко Анатолий Михайлович",
            text: "Я, Яременко Анатолий Михайлович, хочу выразить большую благодарность коллективу Британского офтальмологического центра г. Киев за оказанную медицинскую помощь. Успешное оперативное вмешательство по замене хрусталика и всё последующее лечение. Особая благодарность хирургу Гавуре М.А., врачу Рудяк Ульяне Ивановне и анестезиологу Козюре Максиму Анатольевичу, которые блестяще справились со своей работой. Я был приятно удивлён отношением коллектива к каждому пациенту. Коллектив молодой, перспективный, приветливый и всегда с улыбкой. \nЕщё раз огромная благодарность, пусть каждый день приносит вам радость и удовлетворение от того, что вы делаете для людей!",
        },
        en: {
            name: "Yaremenko Anatolii Mykhailovych",
            text: "I, Yaremenko Anatolii Mykhailovych, would like to express my deep gratitude to the team of the British Ophthalmological Center in Kyiv for the medical assistance provided. A successful surgery with lens replacement and all subsequent treatment. Special thanks to surgeon Havura M.O., doctor Rudiak Uliana Ivanivna, and anesthesiologist Koziura Maksym Anatoliiovych, who performed their work brilliantly. I was pleasantly impressed by the attitude of the staff towards each patient. The team is young, promising, friendly, and always smiling. \nOnce again, my sincere thanks — may every day bring you joy and satisfaction from what you do for people!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Гриценко-І.А.jpeg",
        uk: {
            name: "Гриценко Іван Анатолійович",
            text: "Я, Гриценко Іван Анатолійович, висловлюю щиру подяку лікарю Штокалюк Катерині Валентинівні за турботу та чуйне відношення до мене протягом всього лікування в клініці. Особлива подяка Гавура М.О. за успішно проведені операції на очах. Всьому колективу здоров’я, успіхів в роботі та миру.",
        },
        ru: {
            name: "Гриценко Иван Анатольевич",
            text: "Я, Гриценко Иван Анатольевич, выражаю искреннюю благодарность врачу Штокалюк Екатерине Валентиновне за заботу и чуткое отношение ко мне на протяжении всего лечения в клинике. Особая благодарность Гавуре М.А. за успешно проведённые операции на глазах. Всему коллективу здоровья, успехов в работе и мира.",
        },
        en: {
            name: "Hrytsenko Ivan Anatoliyovych",
            text: "I, Hrytsenko Ivan Anatoliyovych, express my sincere gratitude to doctor Shtokalyuk Kateryna Valentynivna for the care and attentive attitude towards me throughout the entire treatment at the clinic. Special thanks to Havura M.O. for successfully performed eye surgeries. I wish the whole team health, success in work, and peace.",
        },
    },

    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Спасьонова.webp",
        uk: {
            name: "Спасьонова Лариса Миколаївна",
            text: "Порадив звернутися у Британський офтальмологічний центр мій син. Після огляду на консультації мила лікарка, описуючи операцію з приводу катаракти, повідомила, що вже завтра моє життя зміниться і я буду бачити відсотково «без туману». Я сприйняла цю інформацію як рекламу. Але … на наступний день після операції одного ока я вже набирала номер телефону без окулярів, перевірка на сучасних приладах, які є в достатній кількості у Центрі,  підтвердила, що зір на оці після операції 100% і я змогла чітко прочитати на бейджу ім’я лікаря - Константинова Віта Констянтинівна і побачити її гарну посмішку. Дуже вдячна їй за чуйність, професіоналізм, бажання максимально допомогти. \nТакож хочеться подякувати  Рудяк Уляні Іванівні за консультацію з приводу операції другого ока. Клініка залишає дуже хороше враження – все чітко організовано, всі на своїх місцях, працює Центр як швейцарський годинник. Хочеться побажати всьому колективу здоров՚я, успіхів і всім нам скорішої нашої перемоги.",
        },
        ru: {
            name: "Спасёнова Лариса Николаевна",
            text: "Посоветовал обратиться в Британский офтальмологический центр мой сын. После осмотра на консультации милая врач, описывая операцию по поводу катаракты, сказала, что уже завтра моя жизнь изменится и я буду видеть на сто процентов «без тумана». Я восприняла эту информацию как рекламу. Но… на следующий день после операции одного глаза я уже набирала номер телефона без очков. Проверка на современных приборах, которые в достаточном количестве есть в Центре, подтвердила, что зрение на глазу после операции 100%, и я смогла чётко прочитать на бейджике имя врача — Константинова Вита Константиновна, и увидеть её красивую улыбку. Очень благодарна ей за чуткость, профессионализм, желание максимально помочь.\nТакже хочется поблагодарить Рудяк Ульяну Ивановну за консультацию по поводу операции второго глаза. Клиника оставляет очень хорошее впечатление — всё чётко организовано, все на своих местах, Центр работает как швейцарские часы. Хочется пожелать всему коллективу здоровья, успехов и всем нам скорейшей нашей победы.",
        },
        en: {
            name: "Spasionova Larysa Mykolaivna",
            text: "It was my son who advised me to turn to the British Ophthalmology Center. During the consultation, a kind doctor, while describing the cataract surgery, told me that the very next day my life would change and I would see one hundred percent “without fog.” I took this information as advertising. But… the next day after the surgery on one eye, I was already dialing a phone number without glasses. The examination on modern devices, which the Center has in sufficient quantity, confirmed that my vision in the operated eye was 100%, and I was able to clearly read the doctor’s name on the badge — Konstantynova Vita Konstantynivna, and see her beautiful smile. I am very grateful to her for her sensitivity, professionalism, and willingness to help as much as possible.\nI would also like to thank Rudyak Ulyana Ivanivna for her consultation regarding the surgery on my second eye. The clinic leaves a very good impression — everything is well organized, everyone is in their place, and the Center works like a Swiss watch. I wish the whole team health, success, and for all of us — our victory as soon as possible.",
        },
    },

    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Луганська.jpg",
        uk: {
            name: "Луганська Галина Іванівна",
            text: "Любі мої рятівники! \nНемає слів, щоб висловити мою вдячність. \nЦе більше ніж казка – прийти вранці з поганим зором, а вже ввечері бачити все чітко, яскраво, як в дитинстві. \nАндрій Миколайович, Віта Костянтинівна! \nЗахоплююсь вашою майстерністю і бажаю всього  найкращого, що тільки є на світі. З повагою, Луганська Галина Іванівна.",
        },
        ru: {
            name: "Луганская Галина Ивановна",
            text: "Дорогие мои спасители!\nНет слов, чтобы выразить мою благодарность.\nЭто больше чем сказка — прийти утром с плохим зрением, а уже вечером видеть всё чётко, ярко, как в детстве.\nАндрей Николаевич, Вита Константиновна!\nВосхищаюсь вашим мастерством и желаю всего наилучшего, что только есть в мире. С уважением, Луганская Галина Ивановна.",
        },
        en: {
            name: "Luhanska Halyna Ivanivna",
            text: "My dear saviors!\nThere are no words to express my gratitude.\nIt is more than a fairy tale — to come in the morning with poor vision, and by the evening to see everything clearly, brightly, like in childhood.\nAndrii Mykolayovych, Vita Konstantynivna!\nI admire your mastery and wish you all the very best that the world has to offer. With respect, Luhanska Halyna Ivanivna.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Демченко Юрій Петрович",
            text: "Я, Юрій Демченко, щиро дякую «Британському офтальмологічному центру» за професійну, якісну медичну допомогу. Хочу висловити глибоку подяку лікарю Рудяк У.І. за високий професіоналізм, за дуже чутливе, сердечне ставлення до пацієнтів, за толерантність і тактовність, за моральну та високопрофесійну медичну допомогу і турботу! Рекомендую даний центр для позитивного вирішення проблем із зором.",
        },
        ru: {
            name: "Демченко Юрий Петрович",
            text: "Я, Юрий Демченко, искренне благодарю «Британский офтальмологический центр» за профессиональную, качественную медицинскую помощь. Хочу выразить глубокую благодарность врачу Рудяк У.И. за высокий профессионализм, за очень чуткое, сердечное отношение к пациентам, за толерантность и тактичность, за моральную и высокопрофессиональную медицинскую помощь и заботу! Рекомендую данный центр для положительного решения проблем со зрением.",
        },
        en: {
            name: "Demchenko Yurii Petrovych",
            text: "I, Yurii Demchenko, sincerely thank the 'British Ophthalmological Center' for the professional, high-quality medical care. I want to express my deep gratitude to doctor Rudiak U.I. for her high professionalism, very sensitive and heartfelt attitude towards patients, tolerance and tact, as well as for the moral and highly professional medical help and care! I recommend this center for a positive solution to vision problems.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Назаренко Анжела Анатоліївна",
            text: "Я дуже вдячна лікарю Костянтиновій Віті Костянтинівні, яка по суті повернула мені зір, тепер «розмитий» навколишній світ знову обрів чітких обрисів. \nНе перестаю захоплюватись професіоналізмом, витримкою та терпінням Віти Костянтинівни, якій я завдала не мало клопоту, під час операції їй довелось витратити на мене вдвічі більше енергії (можливо і втричі) та сили, так необхідних і іншим пацієнтам. \nВіта Костянтинівна, щиро Вам вдячна за те, що Ви для нас робите – повертаєте зір! \nВи лікар від Бога. Ваш Розум, Душа та Тіло перебувають в гармонії. Ви займаєтесь саме тим, що вмієте робити віртуозно, професійно з максимальною віддачею. Віта Костянтинівна – Ви найкраща!",
        },
        ru: {
            name: "Назаренко Анжела Анатольевна",
            text: "Я очень благодарна врачу Константиновой Вите Константиновне, которая по сути вернула мне зрение. Теперь «размытый» окружающий мир снова обрел четкие очертания. \nНе перестаю восхищаться профессионализмом, выдержкой и терпением Виты Константиновны, которой я доставила немало хлопот. Во время операции ей пришлось потратить на меня вдвое (а может и втрое) больше энергии и сил, столь необходимых и другим пациентам. \nВита Константиновна, искренне благодарю Вас за то, что Вы для нас делаете — возвращаете зрение! \nВы — врач от Бога. Ваш Разум, Душа и Тело находятся в гармонии. Вы занимаетесь именно тем, что умеете делать виртуозно, профессионально и с максимальной отдачей. Вита Константиновна — Вы лучшая!",
        },
        en: {
            name: "Nazarenko Anzhela Anatoliivna",
            text: "I am very grateful to doctor Vita Konstantynivna Konstiantynova, who essentially gave me back my sight. Now the 'blurry' surrounding world has regained its clear outlines. \nI never cease to admire Vita Konstantynivna’s professionalism, patience, and endurance, even though I caused her quite a bit of trouble. During the surgery, she had to spend twice (or even three times) as much energy and effort on me, which other patients also need. \nVita Konstantynivna, I sincerely thank you for what you do for us — for restoring our sight! \nYou are a doctor sent by God. Your Mind, Soul, and Body are in harmony. You are doing exactly what you know how to do virtuously, professionally, and with maximum dedication. Vita Konstantynivna — you are the best!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Назаренко Ольга Андріївна",
            text: "Хочу подякувати персоналу клініки за їх увагу, турботу та доброту. \nОсобливо, я хочу подякувати своєму лікарю — Британу Сергію Сергійовичу, за прекрасно проведену лазерну корекцію зору, делікатний медичний супровід та можливість бачити красу світу безпосередньо, а не за склом окулярів. \nЗ повагою, Назаренко О.А.",
        },
        ru: {
            name: "Назаренко Ольга Андреевна",
            text: "Хочу поблагодарить персонал клиники за их внимание, заботу и доброту. \nОсобенно хочу поблагодарить своего врача — Британа Сергея Сергеевича, за прекрасно проведённую лазерную коррекцию зрения, деликатное медицинское сопровождение и возможность видеть красоту мира напрямую, а не через стекло очков. \nС уважением, Назаренко О.А.",
        },
        en: {
            name: "Nazarenko Olha Andriivna",
            text: "I would like to thank the clinic staff for their attention, care, and kindness. \nEspecially, I want to thank my doctor — Britan Serhii Serhiiovych, for the excellent laser vision correction, his delicate medical support, and the opportunity to see the beauty of the world directly, not through the glass of eyeglasses. \nWith respect, Nazarenko O.A.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/Пробєйголова.jpg",
        uk: {
            name: "Пробєйголова Лідія Володимирівна",
            text: "Я, Пробєйголова Лідія Володимирівна оперувалась у Вашій клініці з питання видалення катаракти на обох очах. \nВперше в житті зіткнулась з таким відпрацьованим процесом. Щаслива відправляюсь додому. \nБажаю Всім працівникам цього центру щастя, здоров’я й миру.",
        },
        ru: {
            name: "Пробейголова Лидия Владимировна",
            text: "Я, Пробейголова Лидия Владимировна, оперировалась в вашей клинике по поводу удаления катаракты на обоих глазах. \nВпервые в жизни столкнулась с таким отлаженным процессом. Счастливая отправляюсь домой. \nЖелаю всем работникам этого центра счастья, здоровья и мира.",
        },
        en: {
            name: "Probieiholova Lidiia Volodymyrivna",
            text: "I, Probieiholova Lidiia Volodymyrivna, had surgery at your clinic for cataract removal in both eyes. \nFor the first time in my life, I encountered such a well-organized process. I happily return home. \nI wish all the employees of this center happiness, health, and peace.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Гудилко Валентина Дмитрівна",
            text: "Я, Гудилко Валентина Дмитрівна, дякую персоналу «Британського офтальмологічного центру» за хороше ставлення до пацієнтів. Хочу виразити подяку моєму лікарю Скапі Василю Івановичу та анестезіологу Козюрі Максиму Анатолійовичу.",
        },
        ru: {
            name: "Гудилко Валентина Дмитриевна",
            text: "Я, Гудилко Валентина Дмитриевна, благодарю персонал «Британского офтальмологического центра» за хорошее отношение к пациентам. Хочу выразить благодарность моему врачу Скапи Василию Ивановичу и анестезиологу Козюре Максиму Анатольевичу.",
        },
        en: {
            name: "Hudylko Valentyna Dmytrivna",
            text: "I, Hudylko Valentyna Dmytrivna, thank the staff of the 'British Ophthalmology Center' for their good attitude towards patients. I would like to express my gratitude to my doctor Skapi Vasyl Ivanovych and anesthesiologist Kozyura Maksym Anatoliyovych.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Юзва Інеса Ігорівна",
            text: "Я, Юзва Інеса Ігорівна, провела лазерну корекцію зору в Британському офтальмологічному центрі, у лікаря Бурдея А.В. \nЧудовий фахівець! Відповів на всі питання! Справжній професіонал. Тепер у мене 120%, а до операції було – 4,5 діоптрій.",
        },
        ru: {
            name: "Юзва Инеса Игоревна",
            text: "Я, Юзва Инеса Игоревна, провела лазерную коррекцию зрения в Британском офтальмологическом центре у врача Бурдея А.В.\nЗамечательный специалист! Ответил на все вопросы! Настоящий профессионал. Теперь у меня 120%, а до операции было – 4,5 диоптрии.",
        },
        en: {
            name: "Yuzva Inesa Ihorivna",
            text: "I, Yuzva Inesa Ihorivna, underwent laser vision correction at the British Ophthalmology Center with doctor Burdei A.V.\nA wonderful specialist! He answered all my questions! A true professional. Now I have 120% vision, while before the surgery it was –4.5 diopters.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Юрченко Карина Максимівна",
            text: "Я, Юрченко Карина Максимівна,  зробила лазерну корекцію зору в Британському офтальмологічному центрі, у лікаря Жихарєва Анатолія Юрійовича. Хочу поділитися відгуком про лазерну корекцію – вже на наступний ранок я прокинулась іншою людиною, життя заграло новими фарбами! Дуже дякую персоналу клініки, лікарям, які зробили все на професійному рівні! \nЦе крок, на який важливо налаштуватись , бо результат дійсно того вартий – бачити світ таким гарним та чітким! Дякую! ",
        },
        ru: {
            name: "Юрченко Карина Максимовна",
            text: "Я, Юрченко Карина Максимовна, сделала лазерную коррекцию зрения в Британском офтальмологическом центре у врача Жихарева Анатолия Юрьевича. Хочу поделиться отзывом о лазерной коррекции — уже на следующее утро я проснулась другим человеком, жизнь заиграла новыми красками! Огромное спасибо персоналу клиники, врачам, которые сделали всё на профессиональном уровне!\nЭто шаг, к которому важно подготовиться, потому что результат действительно того стоит — видеть мир таким красивым и чётким! Спасибо!",
        },
        en: {
            name: "Yurchenko Karina Maksymivna",
            text: "I, Yurchenko Karina Maksymivna, had laser vision correction at the British Ophthalmology Center with doctor Zhykhariev Anatolii Yuriiovych. I would like to share my feedback about the laser correction — already the next morning I woke up a different person, life sparkled with new colors! Many thanks to the clinic staff and doctors who did everything at a professional level!\nThis is a step that one must prepare for, because the result is truly worth it — to see the world so beautiful and clear! Thank you!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/tarara.jpg",
        uk: {
            name: "Тарара Юлія Вікторівна",
            text: "Зробила нарешті собі подарунок-зробила лазерну корекцію зору. В мене було -5,а зараз 100%. Я дуже задоволена результатом. \nРаджу прийти до Британського офтальмологічного центру і зробити собі такий подарунок, як чудовий зір! \nТарара Юлія Вікторівна",
        },
        ru: {
            name: "Тарара Юлия Викторовна",
            text: "Наконец-то сделала себе подарок — сделала лазерную коррекцию зрения. У меня было –5, а сейчас 100%. Я очень довольна результатом.\nСоветую прийти в Британский офтальмологический центр и сделать себе такой подарок, как замечательное зрение!\nТарара Юлия Викторовна",
        },
        en: {
            name: "Tarara Yuliia Viktorivna",
            text: "I finally gave myself a gift — I had laser vision correction. My eyesight was –5, and now it is 100%. I am very satisfied with the result.\nI recommend coming to the British Ophthalmology Center and giving yourself such a gift as excellent vision!\nTarara Yuliia Viktorivna",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/Пащенко.jpg",
        uk: {
            name: "Пащенко Анастасія та Пащенко Альона",
            text: "Процес пройшов дуже добре – ми залишилися задоволені як сервісом, та і результатом. Обстеження та сама операція відбулися в один день і загалом зайняли близько 5 годин. Уже наступного дня зір суттєво покращився і дискомфорт після операції майже повністю пройшов. \nНа кожному етапі все чітку пояснювали, відповідали на всі запитання, не було відчуття розгубленості  чи тривоги. Персонал дуже ввічливий та уважний. Відчувалася турбота там професіоналізм. Дуже вдячні за проведення операції всім лікарям Британського офтальмологічного центру і рекомендуємо центр тим, хто шукає якісну лазерну корекцію зору!",
        },
        ru: {
            name: "Пащенко Анастасия и Пащенко Алёна",
            text: "Процесс прошёл очень хорошо — мы остались довольны как сервисом, так и результатом. Обследование и сама операция прошли в один день и в целом заняли около 5 часов. Уже на следующий день зрение значительно улучшилось, и дискомфорт после операции почти полностью прошёл.\nНа каждом этапе всё чётко объясняли, отвечали на все вопросы, не было чувства растерянности или тревоги. Персонал очень вежливый и внимательный. Чувствовались забота и профессионализм. Очень благодарны за проведение операции всем врачам Британского офтальмологического центра и рекомендуем Центр тем, кто ищет качественную лазерную коррекцию зрения!",
        },

        en: {
            name: "Pashchenko Anastasiia and Pashchenko Aliona",
            text: "The process went very well — we were satisfied both with the service and the result. The examination and the surgery itself were done in one day and took about 5 hours in total. Already the next day the vision improved significantly, and the discomfort after the surgery almost completely disappeared.\nAt each stage, everything was clearly explained, all questions were answered, and there was no feeling of confusion or anxiety. The staff was very polite and attentive. Care and professionalism were felt. We are very grateful to all the doctors of the British Ophthalmology Center for performing the surgery and recommend the Center to those who are looking for high-quality laser vision correction!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Щербонос Леся Миколаївна",
            text: "Я прийшла сюди на лазерну корекцію зору. Дуже задоволена сервісом та персоналом. Все на вищому рівні. Операція пройшла успішно, я дуже задоволена. \nМої подруги та багато знайомих тут лікувалися, тому за їхніми рекомендаціями йшла до Британського центру без страху. \nБуду вас рекомендувати іншим. \nЩербонос Леся Миколаївна",
        },
        ru: {
            name: "Щербонос Леся Миколаевна",
            text: "Я пришла сюда на лазерную коррекцию зрения. Очень довольна сервисом и персоналом. Всё на высшем уровне. Операция прошла успешно, я очень довольна. \nМои подруги и многие знакомые лечились здесь, поэтому по их рекомендациям я пришла в Британский центр без страха. \nБуду вас рекомендовать другим. \nЩербонос Леся Миколаевна",
        },
        en: {
            name: "Shcherbonos Lesia Mykolaivna",
            text: "I came here for laser vision correction. I am very satisfied with the service and the staff. Everything is at the highest level. The operation was successful, I am very happy. \nMy friends and many acquaintances have been treated here, so based on their recommendations, I came to the British Center without fear. \nI will recommend you to others. \nShcherbonos Lesia Mykolaivna",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Мороз Ірина Леонідівна",
            text: "Я, Мороз Ірина Леонідівна, дуже вдячна Британському офтальмологічному центру. Лікарям та всьому персоналу, за те, що я маю можливість бачити цей прекрасний світ власними очима. \nПерсонал дуже привітний, лікарі уважні. Дуже сподобалось, що лікар під час операції озвучує кожну свою дію і розповідає, що я маю відчувати в конкретний момент і це дуже заспокоює. Також після лазерної корекції уважно вислухав, пояснив усі подальші дії. Я дуже щаслива, що потрапила в цей центр і моя мрія нарешті здійснилася. \nМороз Ірина Леонідівна",
        },
        ru: {
            name: "Мороз Ирина Леонидовна",
            text: "Я, Мороз Ирина Леонидовна, очень благодарна Британскому офтальмологическому центру, врачам и всему персоналу за то, что я имею возможность видеть этот прекрасный мир своими глазами. \nПерсонал очень приветливый, врачи внимательные. Очень понравилось, что врач во время операции озвучивает каждое своё действие и рассказывает, что я должна ощущать в конкретный момент, и это очень успокаивает. Также после лазерной коррекции внимательно выслушал, объяснил все дальнейшие действия. Я очень счастлива, что попала в этот центр, и моя мечта наконец-то осуществилась. \nМороз Ирина Леонидовна",
        },
        en: {
            name: "Moroz Iryna Leonidivna",
            text: "I, Moroz Iryna Leonidivna, am very grateful to the British Ophthalmological Center, the doctors, and all the staff for giving me the ability to see this beautiful world with my own eyes. \nThe staff are very friendly, the doctors attentive. I really liked that the doctor announces each action during the operation and explains what I should feel at each moment, which is very reassuring. After the laser correction, he carefully listened and explained all further steps. I am very happy to have come to this center, and my dream has finally come true. \nMoroz Iryna Leonidivna",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Шіцевалова Наталія Юріївна",
            text: "Я Шіцевалова Наталія Юріївна (77 років), провела операцію по заміні кришталика, про що пізніше… \nА зараз трішки передмови. Окулярами користуюся з 14 років і перше що роблю розплющуючи очі зранку - одягаю окуляри. \nВ Британський офтальмологічний центр я прийшла 4 роки тому за рекомендацією моєї подруги. Вона також обстежується в центрі, видаляла катаракту на обох очах, кришталик один із який був пошкоджений рентгенівським променем. І для неї життя відкрилось в яскравих фарбах. \nТакож внучка моєї подруги обстежувалась в центрі, в неї зір різко знизився через швидкий ріст організму в підлітковому віці. В центрі після обстеження дитини їй підібрали окуляри, після чого з першою партою можна було «попрощатися».\nЯк бачите у мене був background довіри до Британського офтальмологічного центру. Я обстежуюсь в центрі в продовж 4 років. При першій зустрічі з лікарем було виявлено підвищений тиск в оці. Рекомендації дозволили призупинити погіршення ситуації. Обстеження показали, що погіршення стану кришталиків обох очей, через що знизився зір. Всебічні обстеження, включаючи УЗД ока, продемонстрували негативну динаміку. Отримала рекомендації лікаря Стрільця Владислава Володимировича провести операцію по видаленню  катаракти. \nПотрібно зауважити, що не тільки катаракта заважала добре бачити, але й присутність складного астигматизму, виявилось, що і цю проблему може вирішити операція. \n26 березня 2025 року Британський офтальмологічний центр провів операцію по видаленню катаракти на правому оці, одночасно вирішивши питання з астигматизмом. Було ниття в оці. \nНа післяопераційному огляді лікар боровся з його запаленням. Він консультував мене навіть в телефонному режимі. Ситуація покращувалась поступово, хоча потрібно відмітити, що зір покращився безпосередньо після операції. Зникла мутність пов’язана з астигматизмом. \nІ сьогодні 17 квітня,  через 3 тижні після операції, я можу сказати «Так». Я задоволена зробленою операцією, я бачу. Тепер мені не потрібні дві пари окулярів для зору в далечину та читання, достатньо одних. Світ набув чіткості, я ще працюю фізиком, хороший зір мені важливий для роботи. \nВелике дякую ВСІМ! Чудова організаційна робота всього центру, чіткість, влучність, уважність, «золоті руки»… \nПрофесіоналізм персоналу і сучасне обладнання на найвищому рівні. Ваша праця робить життя людей краще і це чудово! \nВсього всім найкращого! \nЗ повагою, Шіцевалова Н.Ю.",
        },
        ru: {
            name: "Шицевалова Наталья Юрьевна",
            text: "Я, Шицевалова Наталья Юрьевна (77 лет), прошла операцию по замене хрусталика, о чём позже… \nА сейчас немного предисловия. Очками пользуюсь с 14 лет, и первое, что делаю, открывая глаза утром — надеваю очки. \nВ Британский офтальмологический центр я пришла 4 года назад по рекомендации моей подруги. Она тоже обследуется в центре, удаляла катаракту на обоих глазах, один хрусталик был поврежден рентгеновским излучением. И для неё жизнь открылась в ярких красках. \nТакже внучка моей подруги обследовалась в центре, у неё резко ухудшилось зрение из-за быстрого роста в подростковом возрасте. В центре после обследования ребёнку подобрали очки, после чего можно было «попрощаться» с первой парой очков. \nКак видите, у меня был background доверия к Британскому офтальмологическому центру. Я обследуюсь в центре в течение 4 лет. При первой встрече с врачом было выявлено повышенное давление в глазу. Рекомендации позволили приостановить ухудшение ситуации. Обследования показали, что ухудшилось состояние хрусталиков обоих глаз, из-за чего снизилось зрение. Всесторонние обследования, включая УЗИ глаза, продемонстрировали негативную динамику. Получила рекомендации врача Стрельца Владислава Владимировича провести операцию по удалению катаракты. \nСледует отметить, что не только катаракта мешала хорошо видеть, но и наличие сложного астигматизма, который также можно было исправить операцией. \n26 марта 2025 года Британский офтальмологический центр провёл операцию по удалению катаракты на правом глазу, одновременно решив вопрос с астигматизмом. Было жжение в глазу. \nНа послеоперационном осмотре врач боролся с воспалением. Он консультировал меня даже по телефону. Ситуация улучшалась постепенно, хотя следует отметить, что зрение улучшилось непосредственно после операции. Исчезла мутность, связанная с астигматизмом. \nИ сегодня, 17 апреля, через 3 недели после операции, я могу сказать «Да». Я довольна проделанной операцией, я вижу. Теперь мне не нужны две пары очков для зрения вдаль и для чтения, достаточно одной. Мир стал чётким, я ещё работаю физиком, хороший глаз — важен для работы. \nБольшое спасибо ВСЕМ! Отличная организация работы всего центра, точность, внимательность, «золотые руки»… \nПрофессионализм персонала и современное оборудование на высочайшем уровне. Ваша работа делает жизнь людей лучше, и это прекрасно! \nВсего всем наилучшего! \nС уважением, Шицевалова Н.Ю.",
        },
        en: {
            name: "Shytsevalova Natalia Yuriyivna",
            text: "I, Shytsevalova Natalia Yuriyivna (77 years old), underwent cataract lens replacement surgery, more on that later… \nBut first, a little preface. I have been using glasses since I was 14, and the first thing I do in the morning when opening my eyes is put on my glasses. \nI came to the British Ophthalmological Center 4 years ago on the recommendation of my friend. She also was treated at the center, had cataract surgery on both eyes, one lens had been damaged by X-rays. For her, life opened up in bright colors. \nAlso, my friend’s granddaughter was examined at the center; her vision had sharply deteriorated due to rapid growth during adolescence. The center selected glasses for her, and she could say goodbye to her first pair of glasses. \nAs you can see, I had a background of trust in the British Ophthalmological Center. I have been examined at the center for 4 years. At the first meeting with the doctor, elevated eye pressure was detected. Recommendations helped prevent further deterioration. Examinations showed worsening condition of both lenses, which caused decreased vision. Comprehensive exams, including eye ultrasound, demonstrated negative progression. I received recommendations from doctor Strelts Vladyslav Volodymyrovych to undergo cataract surgery. \nIt should be noted that not only cataracts interfered with good vision, but also the presence of complex astigmatism, which could also be corrected by surgery. \nOn March 26, 2025, the British Ophthalmological Center performed cataract surgery on my right eye, simultaneously addressing the astigmatism. There was some eye irritation. \nDuring the postoperative check-up, the doctor managed the inflammation. He even consulted me over the phone. The situation improved gradually, although it should be noted that my vision improved immediately after surgery. The blurriness caused by astigmatism disappeared. \nAnd today, April 17, three weeks after surgery, I can say “Yes.” I am satisfied with the surgery, I can see. Now I do not need two pairs of glasses for distance and reading, one is enough. The world has become clear; I still work as a physicist, and good vision is important for my work. \nMany thanks to EVERYONE! Excellent organizational work of the entire center, precision, attentiveness, “golden hands”… \nProfessionalism of the staff and modern equipment at the highest level. Your work makes people's lives better, and that is wonderful! \nAll the best to everyone! \nSincerely, Shytsevalova N.Y.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Хливицька Валерія",
            text: "Дуже якісний сервіс на всіх етапах лікування. Привітний та професійний персонал та  новітнє  обладнання, за допомогою якого лазерна корекція зору в Британському офтальмологічному центрі пройшла успішно та менш травматично. \nВелике дякую всім лікарям, медсестрам, адміністраторам – хто долучився до мого повного відновлення зору! \nХливицька Валерія ",
        },
        ru: {
            name: "Хливицкая Валерия",
            text: "Очень качественный сервис на всех этапах лечения. Приветливый и профессиональный персонал и новейшее оборудование, благодаря которому лазерная коррекция зрения в «Британском офтальмологическом центре» прошла успешно и менее травматично.\nБольшое спасибо всем врачам, медсёстрам, администраторам – всем, кто был причастен к моему полному восстановлению зрения!\nХливицкая Валерия",
        },

        en: {
            name: "Khlyvytska Valeriia",
            text: "Very high-quality service at all stages of treatment. Friendly and professional staff and the latest equipment made laser vision correction at the 'British Ophthalmology Center' successful and less traumatic.\nMany thanks to all the doctors, nurses, and administrators — everyone who contributed to my full vision recovery!\nKhlyvytska Valeriia",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Марочкіна Світлана Володимирівна",
            text: "Я, Марочкіна Світлана Володимирівна, у грудні 2024 році робила у «Британському офтальмологічному центрі» операцію по заміні кришталиків. \nЗір повністю відновився, життя заграло яскравими фарбами відчуваю себе молодшою на 10 років. \nВелика подяка команді лікарів і, окремо, Петросовій Офелії Олександрівні.",
        },
        ru: {
            name: "Марочкина Светлана Владимировна",
            text: "Я, Марочкина Светлана Владимировна, в декабре 2024 года сделала в «Британском офтальмологическом центре» операцию по замене хрусталиков.\nЗрение полностью восстановилось, жизнь заиграла яркими красками, чувствую себя моложе на 10 лет.\nОгромная благодарность команде врачей и, отдельно, Петросовой Офелии Александровне.",
        },

        en: {
            name: "Marochkina Svitlana Volodymyrivna",
            text: "I, Marochkina Svitlana Volodymyrivna, underwent lens replacement surgery at the 'British Ophthalmology Center' in December 2024.\nMy vision fully recovered, life sparkled with bright colors, and I feel 10 years younger.\nMany thanks to the team of doctors and especially to Petrosova Ofeliia Oleksandrivna.",
        },
    },

    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Андрющенко Наталія Степанівна",
            text: "Я, Андрющенко Наталія Степанівна, зробила операцію по заміні кришталика в «Британському офтальмологічному центрі». Дуже вдячна всьому колективу, та  лікарю Стрільцю Владиславу Володимировичу, не можу підібрати слів для подяки. Я щаслива, бачу, радію. \nНе треба було так довго відкладати, але я боялась і дарма. \nЛікарям – низький уклін.",
        },
        ru: {
            name: "Андрющенко Наталия Степановна",
            text: "Я, Андрющенко Наталия Степановна, сделала операцию по замене хрусталика в «Британском офтальмологическом центре». Очень благодарна всему коллективу и врачу Стрельцу Владиславу Владимировичу, не могу подобрать слов для благодарности. Я счастлива, вижу, радуюсь.\nНе нужно было так долго откладывать, но я боялась, и зря.\nВрачам — низкий поклон.",
        },

        en: {
            name: "Andriushchenko Nataliia Stepanivna",
            text: "I, Andriushchenko Nataliia Stepanivna, had lens replacement surgery at the 'British Ophthalmology Center'. I am very grateful to the entire team and to doctor Strilets Vladyslav Volodymyrovych — I cannot find words to express my gratitude. I am happy, I can see, I rejoice.\nI should not have postponed it for so long, but I was afraid, and in vain.\nA deep bow to the doctors.",
        },
    },

    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Лебідь Галина Кіндратівна",
            text: "Я, Лебідь Галина Кіндратівна, зробила операцію по заміні кришталика в Британському офтальмологічному центрі. Дуже задоволена високою кваліфікацією фахівців, найсучаснішим обладнанням останнього покоління, атмосферою закладу. \nОсоблива подяка хірургу , лікарю від Бога – Гавуре Михайлу Олександровичу. Всі три операції були дуже вдалими. А результати змін в якості зору дуже добрі, перевершили мої очікування. \nБажаю успіху працівникам та процвітання  цьому центру!",
        },
        ru: {
            name: "Лебедь Галина Кондратьевна",
            text: "Я, Лебедь Галина Кондратьевна, сделала операцию по замене хрусталика в «Британском офтальмологическом центре». Очень довольна высокой квалификацией специалистов, самым современным оборудованием последнего поколения, атмосферой учреждения.\nОсобая благодарность хирургу, врачу от Бога — Гавуре Михаилу Александровичу. Все три операции были очень успешными. А результаты изменений в качестве зрения очень хорошие, превзошли мои ожидания.\nЖелаю успехов сотрудникам и процветания этому центру!",
        },

        en: {
            name: "Lebid Halyna Kindrativna",
            text: "I, Lebid Halyna Kindrativna, had lens replacement surgery at the 'British Ophthalmology Center'. I am very satisfied with the high qualification of the specialists, the most modern state-of-the-art equipment, and the atmosphere of the clinic.\nSpecial thanks to the surgeon, a doctor from God — Havura Mykhailo Oleksandrovych. All three surgeries were very successful, and the results in my vision quality are excellent, exceeding my expectations.\nI wish the staff success and prosperity to this center!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/podobinska.jpg",
        uk: {
            name: "Подобінська Юлія",
            text: "Я, Подобінська Юлія, хочу висловити величезну подяку всьому колективу “Британський офтальмологічний центр” за якісну роботу! Дуже давно (20 років) збиралась зробити лазерну корекцію зору. \nЯ працюю лікарем стоматологом і моя праця вимагає чіткого бачення та постійної напруги очей, так як працюю з збільшенням (мікроскопом). І так вийшло, що мої пацієнти порадили цей чудовий центр та лікаря хірурга Артема В’ячеславовича. Спочатку пройшла діагностику. Мега якісна та професійна апаратура, турботливий персонал (від ресепшену до лікарів). Найважливіший день теж пройшов чудово - все вчасно, швидко та якісно. \nДякую за відновлення зору, за яскравий світ навколо та за професіоналізм. \nБажаю вашому центру процвітання, вдячних пацієнтів з щасливим блиском в очах.",
        },
        ru: {
            name: "Подобинская Юлия",
            text: "Я, Подобинская Юлия, хочу выразить огромную благодарность всему коллективу «Британского офтальмологического центра» за качественную работу! Очень давно (20 лет) собиралась сделать лазерную коррекцию зрения.\nЯ работаю врачом-стоматологом, и моя работа требует чёткого зрения и постоянного напряжения глаз, так как я работаю с увеличением (микроскопом). И так получилось, что мои пациенты посоветовали этот замечательный центр и хирурга Артёма Вячеславовича. Сначала прошла диагностику. Суперкачественная и профессиональная аппаратура, заботливый персонал (от ресепшена до врачей). Самый важный день тоже прошёл прекрасно — всё вовремя, быстро и качественно.\nСпасибо за восстановление зрения, за яркий мир вокруг и за профессионализм.\nЖелаю вашему центру процветания, благодарных пациентов с счастливым блеском в глазах.",
        },

        en: {
            name: "Podobinska Yuliia",
            text: "I, Podobinska Yuliia, would like to express my deepest gratitude to the entire team of the 'British Ophthalmology Center' for their quality work! For a very long time (20 years), I had been planning to undergo laser vision correction.\nI work as a dentist, and my profession requires sharp vision and constant eye strain, as I work with magnification (a microscope). It happened that my patients recommended this wonderful center and surgeon Artem Vyacheslavovych. First, I went through diagnostics. Extremely high-quality and professional equipment, caring staff (from reception to doctors). The most important day also went great — everything on time, fast, and professional.\nThank you for restoring my vision, for the bright world around me, and for your professionalism.\nI wish your center prosperity and grateful patients with a happy sparkle in their eyes.",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Каранда Г.С.",
            text: "Дуже вдячна хірургу Гавура М.О. і всьому медичному колективу «Британського центру» за проведення операції по заміні кришталика і видалення катаракти на правому оці. Відмінна клініка зору, професійні лікарі, доброзичливий персонал. Низький уклін за  золоті руки! \nОбстеження пройшла швидко і якісно, операція повністю безболісна. Буду радити Вас всім знайомим!",
        },
        ru: {
            name: "Каранда Г.С.",
            text: "Очень благодарна хирургу Гавура М.О. и всему медицинскому коллективу «Британского центра» за проведённую операцию по замене хрусталика и удалению катаракты на правом глазу. Отличная клиника зрения, профессиональные врачи, доброжелательный персонал. Низкий поклон за золотые руки! \nОбследование прошло быстро и качественно, операция полностью безболезненная. Буду рекомендовать вас всем знакомым!",
        },
        en: {
            name: "Karanda H.S.",
            text: "I am very grateful to surgeon Havura M.O. and the entire medical team of the British Center for performing the lens replacement and cataract removal surgery on my right eye. Excellent vision clinic, professional doctors, friendly staff. Deep respect for their golden hands! \nThe examination was quick and thorough, the operation completely painless. I will recommend you to all my acquaintances!",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Головко Микола Петрович",
            text: "Я, Головко Микола Петрович, робив операцію в «Британському офтальмологічному центрі» по заміні кришталика, у зв’язку з катарактою. \nЗалишився задоволений сервісом клініки. Без черг, очікувань і з супроводом з кабінету до кабінету було проведено обстеження на новітніх апаратах, з консультаціями професійних спеціалістів. Операція по заміні кришталика була проведена професійно, без загострень та негативних наслідків. Консультацію і післяопераційний супровід проводила лікар хірург-офтальмолог Петросова Офелія Олександрівна. Все пояснювала чітко, у доступній для сприйняття формі, з рекомендаціями, які дали змогу у короткий час відновити зір та комфортний стан оперованого ока. \nДуже вдячний за чудову, якісну роботу всім працівникам центру. Готуємося до операції по заміні кришталика на іншому оці, і тільки у «Британському офтальмологічного центрі», хоч мали пропозиції і від інших клінік.",
        },
        ru: {
            name: "Головко Николай Петрович",
            text: "Я, Головко Николай Петрович, делал операцию в «Британском офтальмологическом центре» по замене хрусталика в связи с катарактой. \nОстался доволен сервисом клиники. Без очередей, ожиданий, с сопровождением от кабинета к кабинету, обследование проводилось на новейших аппаратах с консультациями профессиональных специалистов. Операция по замене хрусталика была проведена профессионально, без осложнений и негативных последствий. Консультацию и послеоперационное сопровождение проводила врач хирург-офтальмолог Петросова Офелия Александровна. Всё объясняла чётко, в доступной форме, с рекомендациями, которые позволили в короткий срок восстановить зрение и комфортное состояние оперированного глаза. \nОчень благодарен за отличную, качественную работу всем сотрудникам центра. Готовимся к операции по замене хрусталика на другом глазу и только в «Британском офтальмологическом центре», хотя были предложения и от других клиник.",
        },
        en: {
            name: "Holovko Mykola Petrovych",
            text: "I, Holovko Mykola Petrovych, underwent lens replacement surgery at the British Ophthalmological Center due to cataracts. \nI was satisfied with the clinic's service. No queues, no waiting, and with assistance from room to room, the examination was performed on the latest equipment with consultations from professional specialists. The lens replacement surgery was conducted professionally, without complications or negative consequences. Consultation and postoperative follow-up were provided by surgeon-ophthalmologist Petrosova Ofelia Oleksandrivna. She explained everything clearly, in an understandable way, with recommendations that allowed me to quickly restore vision and comfort in the operated eye. \nI am very grateful to all the staff of the center for their excellent, high-quality work. We are preparing for surgery on the other eye, and only at the British Ophthalmological Center, even though we had offers from other clinics.",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Герман Людмила Василівна",
            text: "Я, Герман Людмила Василівна, зробила операцію по заміні кришталика, дуже вдячна «Британському офтальмологічному  центру»  за врятований зір. Особисто лікарю Стрільцю В’ячеславу  Володимировичу за його професіоналізм, уважність та доброзичливість. Дуже чудовий лікар! \nДякую хірургу Гавура М.О. за золоті руки. Усьому персоналу клініки - велике дякую. Рекомендую цю клініку для всіх літніх(не тільки) людей.",
        },
        ru: {
            name: "Герман Людмила Васильевна",
            text: "Я, Герман Людмила Васильевна, сделала операцию по замене хрусталика, очень благодарна «Британскому офтальмологическому центру» за спасённое зрение. Лично врачу Стрельцу Вячеславу Владимировичу за его профессионализм, внимательность и доброжелательность. Очень замечательный врач! \nСпасибо хирургу Гавура М.О. за золотые руки. Всему персоналу клиники — большое спасибо. Рекомендую эту клинику для всех пожилых (и не только) людей.",
        },
        en: {
            name: "Herman Lyudmyla Vasylivna",
            text: "I, Herman Lyudmyla Vasylivna, underwent lens replacement surgery and am very grateful to the British Ophthalmological Center for restoring my vision. Special thanks to Dr. Strelts Vyacheslav Volodymyrovych for his professionalism, attentiveness, and kindness. A truly wonderful doctor! \nThanks to surgeon Havura M.O. for his golden hands. Many thanks to all the clinic staff. I recommend this clinic for all elderly (and not only) people.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Луговецька В.В.",
            text: "Зробила лазерну корекцію зору в Британському офтальмологічному центрі. Хочу подякувати персоналу за високий професіоналізм, гарне ставлення, привітність. Лишилась дуже задоволена. Рекомендую!",
        },
        ru: {
            name: "Луговецкая В.В.",
            text: "Сделала лазерную коррекцию зрения в «Британском офтальмологическом центре». Хочу поблагодарить персонал за высокий профессионализм, хорошее отношение, приветливость. Осталась очень довольна. Рекомендую!",
        },
        en: {
            name: "Luhovetska V.V.",
            text: "I had laser vision correction at the British Ophthalmological Center. I would like to thank the staff for their high professionalism, good attitude, and kindness. I am very satisfied. Highly recommend!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Перепека Ю.Ю.",
            text: "Я зробила лазерну корекцію зору, в «Британському офтальмологічному центрі», задоволена операцією на 100%. Через 3 години могла відкрити очі і майже не було неприємних відчуттів. Операція була о першій половині дня, а в другій половині мені вже було максимально зручно сісти за кермо. Робила операцію по рекомендації. Задоволена персоналом та веденням до, під час та після операції.",
        },
        ru: {
            name: "Перепека Ю.Ю.",
            text: "Я сделала лазерную коррекцию зрения в «Британском офтальмологическом центре», довольна операцией на 100%. Через 3 часа смогла открыть глаза, и почти не было неприятных ощущений. Операция была в первой половине дня, а во второй половине мне уже было максимально удобно сесть за руль. Делала операцию по рекомендации. Довольна персоналом и сопровождением до, во время и после операции.",
        },
        en: {
            name: "Perepeka Yu.Yu.",
            text: "I had laser vision correction at the British Ophthalmological Center and I am 100% satisfied with the surgery. After 3 hours, I could open my eyes and almost had no discomfort. The operation was in the first half of the day, and by the afternoon I was already comfortable enough to drive. I had the surgery based on a recommendation. I am very pleased with the staff and their support before, during, and after the procedure.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Антоненко Єгор Анатолійович",
            text: "Я, Антоненко Єгор Анатолійович, нещодавно зробив лазерну корекцію зору в «Британському офтальмологічному центрі», і я в повному захваті! Операція пройшла дуже швидко, абсолютно безболісно, і боятися тут точно немає чого. Все було на найвищому рівні – професіоналізм лікарів відчувається в усьому. Перед операцією провели детальну консультацію та ретельну перевірку зору, все докладно пояснили. Лікарі супроводжували по кабінетах і створювали атмосферу повного спокою. Дискомфорт після операції був тільки в перший день, всі наступні дні – все чудово! Через три дні після корекції на лівому оці зір відновився на 100%, правий на 90%, подивимось, як буде з часом, якщо щось зміниться – доповню відгук :) Якщо ви сумніваєтесь – не бійтеся, це однозначно того варте! Це було краще рішення та вкладення в себе ;)",
        },
        ru: {
            name: "Антоненко Егор Анатольевич",
            text: "Я, Антоненко Егор Анатольевич, недавно сделал лазерную коррекцию зрения в «Британском офтальмологическом центре» и я в полном восторге! Операция прошла очень быстро, абсолютно безболезненно, и бояться здесь точно нечего. Всё было на высшем уровне – профессионализм врачей ощущается во всём. Перед операцией провели детальную консультацию и тщательную проверку зрения, всё подробно объяснили. Врачи сопровождали по кабинетам и создавали атмосферу полного спокойствия. Дискомфорт после операции был только в первый день, все остальные дни – всё прекрасно! Через три дня после коррекции на левом глазу зрение восстановилось на 100%, на правом – на 90%, посмотрим, как будет со временем, если что-то изменится – дополню отзыв :) Если вы сомневаетесь – не бойтесь, это однозначно того стоит! Это было лучшее решение и вложение в себя ;)",
        },
        en: {
            name: "Antonenko Yehor Anatoliyovych",
            text: "I, Antonenko Yehor Anatoliyovych, recently had laser vision correction at the British Ophthalmological Center, and I am absolutely thrilled! The surgery was very quick, completely painless, and there was nothing to be afraid of. Everything was at the highest level – the professionalism of the doctors could be felt in everything. Before the surgery, I had a detailed consultation and thorough eye examination, with everything explained clearly. The doctors guided me through each step and created an atmosphere of complete calm. Discomfort after the surgery lasted only the first day, and all the following days were perfect! Three days after the correction, my vision in the left eye was restored to 100% and in the right eye to 90%. I’ll see how it develops over time, and if anything changes – I’ll update my review :) If you are hesitating – don’t be afraid, it’s definitely worth it! This was the best decision and investment in myself ;)",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Ірина Кривошлик",
            text: "Я безмежно щаслива! Зробила лазерну корекцію зору в «Британському офтальмологічному центрі»! \nЛікар Жихарєв і вся команда лікарні – неймовірні! \nОбслуговування, ставлення до пацієнтів на найвищому рівні, жодного страху, дискомфорту. \nВи найкращі!!! \nІрина Кривошлик",
        },
        ru: {
            name: "Ирина Кривошлык",
            text: "Я безмерно счастлива! Сделала лазерную коррекцию зрения в «Британском офтальмологическом центре»! \nДоктор Жихарев и вся команда клиники – невероятные! \nОбслуживание, отношение к пациентам на высшем уровне, никакого страха или дискомфорта. \nВы лучшие!!! \nИрина Кривошлык",
        },
        en: {
            name: "Iryna Kryvoshlyk",
            text: "I am incredibly happy! I had laser vision correction at the British Ophthalmological Center! \nDr. Zhikharyev and the entire clinic team are amazing! \nThe service and patient care are at the highest level, with no fear or discomfort. \nYou are the best!!! \nIryna Kryvoshlyk",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Бачкала І.В.",
            text: "Я зробила операцію по заміні кришталика в «Британському офтальмологічному центрі», дуже вражена професійністю і водночас чуйністю, і ввічливості лікарів Вашого центру. \nЗавдяки лікарям я повернула собі зір і впевненість в житті. Особлива подяка Гавура М.О., і моїй ліцарці – Петросовій Офелії Олександрівні. \nВсім рекомендую. \nБачкала І.В.",
        },
        ru: {
            name: "Бачкала И.В.",
            text: "Я сделала операцию по замене хрусталика в «Британском офтальмологическом центре» и очень впечатлена профессионализмом, чуткостью и вежливостью врачей вашего центра. \nБлагодаря врачам я вернула себе зрение и уверенность в жизни. Особая благодарность Гавуре М.А. и моей лечащей – Петросовой Офелии Александровне. \nВсем рекомендую. \nБачкала И.В.",
        },
        en: {
            name: "Bachkala I.V.",
            text: "I had a lens replacement surgery at the British Ophthalmological Center and was very impressed by the professionalism, sensitivity, and courtesy of the doctors at your center. \nThanks to the doctors, I regained my vision and confidence in life. Special thanks to Havura M.O. and my doctor, Petrosova Ofeliia Oleksandrivna. \nI recommend it to everyone. \nBachkala I.V.",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/ptihin.jpg",
        uk: {
            name: "Пихтін Микола Олексійович",
            text: "Велика подяка всім працівникам «Британського офтальмологічного центру» за проведену операцію по видаленню катаракти, уважне ставлення, чудову роботу та особлива подяка лікарю, Штокалюк Катерині Валентинівні. Бажаю процвітання вашому центру. \nЗ повагою, Пихтін Микола Олексійович.",
        },
        ru: {
            name: "Пыхтин Николай Алексеевич",
            text: "Большое спасибо всем сотрудникам «Британского офтальмологического центра» за проведённую операцию по удалению катаракты, внимательное отношение, отличную работу и особая благодарность врачу Штокалюк Екатерине Валентиновне. Желаю процветания вашему центру. \nС уважением, Пихтин Николай Алексеевич.",
        },
        en: {
            name: "Pykhtin Mykola Oleksiyovych",
            text: "Many thanks to all the staff of the British Ophthalmological Center for the cataract removal surgery, attentive care, excellent work, and special thanks to Dr. Shtokalyuk Kateryna Valentynivna. Wishing your center continued success. \nSincerely, Pykhtin Mykola Oleksiyovych.",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Ваганов Альберт",
            text: "Я, Ваганов Альберт! Дуже, дякую лікарям, медсестрам «Британського офтальмологічного центру».  Особливо приємно, як пройшла операція. Дякую лікарю-хірургу Гавура М.О. Велика подяка лікарю, який вів мене після операції - Петросовій Офелії Олександрівні. Дуже вдячний всьому персоналу «Британського офтальмологічного центру».",
        },
        ru: {
            name: "Ваганов Альберт",
            text: "Я, Ваганов Альберт! Очень благодарен врачам и медсестрам «Британского офтальмологического центра». Особенно приятно, как прошла операция. Спасибо хирургу Гавура М.О. Огромная благодарность врачу, который сопровождал меня после операции — Петросовой Офелии Александровне. Очень благодарен всему персоналу «Британского офтальмологического центра».",
        },
        en: {
            name: "Vahanov Albert",
            text: "I, Vahanov Albert, am very grateful to the doctors and nurses of the British Ophthalmological Center. I especially appreciated how smoothly the surgery went. Thanks to surgeon Havura M.O. Special thanks to Dr. Petrosova Ofelia Oleksandrivna, who guided me after the operation. Very grateful to the entire staff of the British Ophthalmological Center.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Дерій Катерина Борисівна",
            text: "Я, Дерій Катерина Борисівна, зробила корекцію зору в «Британському офтальмологічному центрі». Дуже вдячна центру, а також особисто лікарю Бурдею Артему В’ячеславовичу за те, що я бачу! Результатом задоволена на всі 100%. Тепер це моя щира рекомендація всім хто ще наважується на корекцію зору. Адже після неї починаєш жити новим життям. Кожного дня просинаєшся з думкою «Я бачу». І це щастя. =)",
        },
        ru: {
            name: "Дерий Екатерина Борисовна",
            text: "Я, Дерий Екатерина Борисовна, сделала коррекцию зрения в «Британском офтальмологическом центре». Очень благодарна центру, а также лично врачу Бурдею Артему Вячеславовичу за то, что я вижу! Результатом довольна на 100%. Теперь это моя искренняя рекомендация всем, кто ещё решается на коррекцию зрения. После неё начинаешь жить новой жизнью. Каждый день просыпаешься с мыслью «Я вижу». И это счастье. =)",
        },
        en: {
            name: "Deriy Kateryna Borysivna",
            text: "I, Deriy Kateryna Borysivna, underwent vision correction at the British Ophthalmological Center. I am very grateful to the center, and especially to Dr. Burdei Artem Vyacheslavovych, for allowing me to see! I am 100% satisfied with the results. This is now my sincere recommendation for anyone considering vision correction. After it, you start a new life. Every day you wake up thinking, 'I can see.' And that is happiness. =)",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/neskorodova.jpg",
        uk: {
            name: "Нескородова Г.А.",
            text: "Британський офтальмологічний центр – це не просто центр лікування хвороб зору. Це родина для кожного пацієнта, який хоча б раз звернувся. Високі професіонали, якісне обладнання, ввічливий персонал – це все в одному місці. 17 років я не бачила світу. І ось моя мрія здійснилась. Дуже вдячна моєму лікарю – Жихарєву Анатолію Юрійовичу, який підтримував на протязі всієї операції, бадьоро на неї налаштовував та доступно доводив необхідну інформацію. Дуже терпеливо відповідав на всі запитання, а їх було дуже багато, бо страх завжди присутній. \nПідсумовуючи враження, цей Центр подарував безліч людям здоровий зір. Дуже багато вдячних людей та лише позитивні відгуки. \nЗ негативного – жалкую, що не звернулась раніше. \nЩиро дякую вам, за наше здоров’я.",
        },
        ru: {
            name: "Нескородова Г.А.",
            text: "Британский офтальмологический центр – это не просто центр лечения болезней зрения. Это семья для каждого пациента, который хотя бы раз обратился. Высокие профессионалы, качественное оборудование, вежливый персонал – всё в одном месте. 17 лет я не видела мир. И вот моя мечта сбылась. Очень благодарна моему врачу — Жихареву Анатолию Юрьевичу, который поддерживал меня на протяжении всей операции, бодро настраивал и доступно объяснял необходимую информацию. Очень терпеливо отвечал на все вопросы, а их было очень много, ведь страх всегда присутствует. \nПодводя итог, этот центр подарил многим людям здоровое зрение. Очень много благодарных людей и только положительные отзывы. \nИз негативного — жалею, что не обратилась раньше. \nИскренне благодарю вас за наше здоровье.",
        },
        en: {
            name: "Neskorodova H.A.",
            text: "The British Ophthalmological Center is not just a center for treating eye diseases. It is a family for every patient who has ever visited. Highly professional staff, quality equipment, polite personnel – all in one place. For 17 years I could not see the world. And now my dream has come true. I am very grateful to my doctor, Zhykharyev Anatoliy Yuriyovych, who supported me throughout the operation, encouraged me, and clearly explained the necessary information. He patiently answered all questions, and there were many, as fear is always present. \nIn summary, this center has given many people healthy vision. There are many grateful people and only positive feedback. \nThe only regret is not coming sooner. \nSincerely, thank you for our health.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Колгашева Альона Сергіївна",
            text: "Я, Колгашева Альона Сергіївна, зробила лазерну корекцію в «Британському офтальмологічному центрі». Дуже задоволена результатом. Вже через три дні зір відновився до 100 відсотків. Персонал дуже привітний, завжди допоможе. Лікарі уважно слухають і дають відповіді на всі запитання. Дякую вам за зір.",
        },
        ru: {
            name: "Колгашева Алёна Сергеевна",
            text: "Я, Колгашева Алёна Сергеевна, сделала лазерную коррекцию в «Британском офтальмологическом центре». Очень довольна результатом. Уже через три дня зрение восстановилось на 100 процентов. Персонал очень приветливый, всегда поможет. Врачи внимательно слушают и дают ответы на все вопросы. Спасибо вам за зрение.",
        },
        en: {
            name: "Kolgasheva Alyona Serhiivna",
            text: "I, Kolgasheva Alyona Serhiivna, underwent laser vision correction at the British Ophthalmological Center. I am very satisfied with the result. Within three days, my vision was restored to 100%. The staff is very friendly and always ready to help. The doctors listen attentively and answer all questions. Thank you for giving me my sight.",
        },
    },

    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/gushhina.jpg",
        uk: {
            name: "Гущина Юлія Олександрівна",
            text: "Я, Гущина Юлія Олександрівна, дуже щаслива від того, що саме Британський офтальмологічний центр трапився на моєму шляху до бачення життя в усіх кольорах! \nВдячна за добре відношення та підтримку. За професіоналізм лікарів та людяність персоналу. Особливо хірургу, який проводив корекцію – Бурдею Артему !!! \nЗа сучасний сервіс та чіткість! За те що в цей момент ти думаєш тільки за своє самопочуття, нікуди не бігаєш, не дзвониш, а центр сам відкриває лікарняний. \nБажаю вдячних клієнтів та побільше адекватних людей. Тільки найкращі спогади, я тепер бачу!!!",
        },
        ru: {
            name: "Гущина Юлия Александровна",
            text: "Я, Гущина Юлия Александровна, очень счастлива от того, что именно «Британский офтальмологический центр» встретился на моём пути к видению жизни во всех красках! \nБлагодарна за доброе отношение и поддержку. За профессионализм врачей и человечность персонала. Особенно хирургу, который проводил коррекцию – Бурдею Артёму!!! \nЗа современный сервис и чёткость! За то, что в этот момент думаешь только о своём самочувствии: никуда не бегаешь, не звонишь, а центр сам открывает больничный. \nЖелаю благодарных клиентов и побольше адекватных людей. Только лучшие воспоминания, я теперь вижу!!!",
        },
        en: {
            name: "Hushchyna Yuliia Oleksandrivna",
            text: "I, Hushchyna Yuliia Oleksandrivna, am very happy that the British Ophthalmological Center came into my life and helped me see the world in all its colors! \nI am grateful for the kindness and support, for the professionalism of the doctors and the humanity of the staff. Especially to the surgeon who performed the correction – Burdei Artem!!! \nFor modern service and precision! For the fact that at that moment you only think about your well-being: you don’t need to run around or make calls, the center takes care of the sick leave. \nI wish you grateful patients and more adequate people. Only the best memories, now I can see!!!",
        },
    },

    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/nikolenko.jpg",
        uk: {
            name: "Ніколенко Анастасія Ростиславівна",
            text: "Я, Ніколенко Анастасія Ростиславівна, робила лазерну корекцію зору у лікаря  Бурдей А.В. в ході операції лікар все коментував, заспокоював, що надавало відчуття впевненості та довіри до лікаря. Після операції все відбувалось як і попереджали через 4 години я вже бачила , але маленьке відчуття дискомфорту залишалось. На наступний день був післяопераційний огляд, який показав що ліве око відновилось на 70%, а праве на 100%. Лікар провів огляд та запевнив що відновлення буде відбуватись поступово та в динаміці. Через 3 тижні огляд показав що зір відновився майже на 100%( праве так і залишилось 100%, а ліве стало 90%) . \nЖалкую тільки про одне , що зі своїм -4, та астигматизмом середньої ступені я не наважилась на це раніше. А жила майже все життя як в тумані. Щодо лікаря то якщо б ще раз треба було піти на це, то обрала б саме його. Все доступно пояснює, заспокоює. \nЩодо персоналу, також все чудово. Було купа запитань про поведінку в повсякденному житті, я дзвонила, мені все пояснювали та заспокоювали. \nРекомендую тільки цей центр. Ставлю 10/10 всьому персоналу та самому центру. \nДякую, що даруєте людям нове життя!",
        },
        ru: {
            name: "Николенко Анастасия Ростиславовна",
            text: "Я, Николенко Анастасия Ростиславовна, делала лазерную коррекцию зрения у врача Бурдея А.В. Во время операции врач всё комментировал, успокаивал, что придавало уверенности и доверия к нему. После операции всё происходило так, как предупреждали: через 4 часа я уже видела, но оставалось лёгкое чувство дискомфорта. На следующий день был послеоперационный осмотр, который показал, что левый глаз восстановился на 70%, а правый на 100%. Врач провёл осмотр и заверил, что восстановление будет происходить постепенно и в динамике. Через 3 недели осмотр показал, что зрение восстановилось почти на 100% (правый так и остался 100%, а левый стал 90%). \nЖалею только об одном – что с моими -4 и астигматизмом средней степени я не решилась на это раньше. Почти всю жизнь жила как в тумане. Что касается врача – если бы пришлось снова идти на операцию, выбрала бы только его. Всё доступно объясняет, успокаивает. \nЧто касается персонала – тоже всё прекрасно. Было много вопросов о поведении в повседневной жизни, я звонила, мне всё объясняли и успокаивали. \nРекомендую только этот центр. Ставлю 10/10 всему персоналу и самому центру. \nСпасибо, что дарите людям новую жизнь!",
        },
        en: {
            name: "Nikolenko Anastasiia Rostyslavivna",
            text: "I, Nikolenko Anastasiia Rostyslavivna, had laser vision correction performed by Dr. Burdei A.V. During the surgery, the doctor commented on everything and reassured me, which gave me confidence and trust in him. After the surgery, everything happened just as they had warned: 4 hours later, I could already see, although there was still a slight feeling of discomfort. The next day there was a post-operative check-up, which showed that my left eye had recovered to 70% and my right to 100%. The doctor examined me and assured me that the recovery would happen gradually and dynamically. After 3 weeks, the check-up showed that my vision had almost fully recovered (the right eye remained 100%, and the left improved to 90%). \nI regret only one thing – that with my -4 and moderate astigmatism I didn’t dare to do this earlier. I had lived almost my whole life as if in a fog. As for the doctor, if I had to do it again, I would choose him without hesitation. He explains everything clearly and reassures you. \nAs for the staff – everything was excellent as well. I had lots of questions about daily life after the procedure, and when I called, they explained everything and reassured me. \nI recommend only this center. I give 10/10 to the entire staff and the center itself. \nThank you for giving people a new life!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Мирвода Анюта Романівна",
            text: "Я, Мирвода Анюта Романівна, робила лазерну корекцію зору в Британському офтальмологічному центрі. \nВсе пройшло чудово, швидко та безболісно. Лікарі професіонали своєї справи. \nВ цілому вражена від професіоналізму всіх працівників. \nОбов’язково буду радити знайомим!",
        },
        ru: {
            name: "Мирвода Анюта Романовна",
            text: "Я, Мирвода Анюта Романовна, делала лазерную коррекцию зрения в «Британском офтальмологическом центре». \nВсё прошло замечательно, быстро и безболезненно. Врачи – профессионалы своего дела. \nВ целом я впечатлена профессионализмом всех сотрудников. \nОбязательно буду рекомендовать знакомым!",
        },
        en: {
            name: "Myrvoda Aniuta Romanivna",
            text: "I, Myrvoda Aniuta Romanivna, had laser vision correction at the British Ophthalmological Center. \nEverything went perfectly – quickly and painlessly. The doctors are true professionals in their field. \nOverall, I was impressed by the professionalism of all the staff. \nI will definitely recommend it to my friends!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Могільнікова Дарія Миколаївна",
            text: "Я, Могільнікова Дарія Миколаївна, хочу письмово залишити позитивний відгук після лазерної корекції зору, яку проводив доктор Бурдей Андрій В’ячеславович. \nЧудовий та слушний лікар, дав рекомендації та спростував усі міфи та мої занепокоєння щодо загоєння очей. \nГарний та привітний персонал. Медсестра в операційний дуже чуйна та відповідала на всі запитання, та заспокоювала. \nЗагалом, я рада, що обрала вашу клініку, як професіоналів свого діла.",
        },
        ru: {
            name: "Могильникова Дарья Николаевна",
            text: "Я, Могильникова Дарья Николаевна, хочу письменно оставить положительный отзыв после лазерной коррекции зрения, которую проводил доктор Бурдей Андрей Вячеславович. \nЗамечательный и внимательный врач, дал рекомендации и развеял все мифы и мои переживания относительно заживления глаз. \nХороший и приветливый персонал. Медсестра в операционной была очень чуткой, отвечала на все вопросы и успокаивала. \nВ целом я рада, что выбрала вашу клинику как профессионалов своего дела.",
        },
        en: {
            name: "Mohilnikova Dariia Mykolaivna",
            text: "I, Mohilnikova Dariia Mykolaivna, would like to leave a positive written review after having laser vision correction performed by Dr. Burdei Andrii Viacheslavovych. \nA wonderful and attentive doctor, he gave recommendations and dispelled all myths and my concerns about the healing of the eyes. \nThe staff were kind and welcoming. The nurse in the operating room was very caring, answered all my questions, and reassured me. \nOverall, I am glad that I chose your clinic as true professionals in their field.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Куртик Жанна Вікторівна",
            text: "Я, Куртик Жанна Вікторівна, задоволена роботою Британського офтальмологічного центру. Все відбулось на високому рівні з чудовими результатами. Зробила лазерну корекцію зору, залишилась дуже задоволена. Рекомендую.",
        },
        ru: {
            name: "Куртик Жанна Викторовна",
            text: "Я, Куртик Жанна Викторовна, довольна работой Британского офтальмологического центра. Всё прошло на высоком уровне с отличными результатами. Сделала лазерную коррекцию зрения, осталась очень довольна. Рекомендую.",
        },
        en: {
            name: "Kurtik Zhanna Viktorivna",
            text: "I, Kurtik Zhanna Viktorivna, am satisfied with the work of the British Ophthalmological Center. Everything was done at a high level with excellent results. I underwent laser vision correction and am very happy with the outcome. I recommend it.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Юдченко Іван Ігорович",
            text: "Дякую Вам за новий зір!!! Завдяки лазерній корекції я побачив багато нового та дивовижного. \nПроцеси діагностики та лазерної корекції в Британському офтальмологічному центрі були приємними, швидкими та скоординованими, що дало відчуття безпеки, впевненості, професіоналізму лікарів. Дякую Вам, без заперечень.",
        },
        ru: {
            name: "Юдченко Иван Игоревич",
            text: "Спасибо Вам за новый зрение!!! Благодаря лазерной коррекции я увидел много нового и удивительного. \nПроцессы диагностики и лазерной коррекции в Британском офтальмологическом центре были приятными, быстрыми и скоординированными, что дало ощущение безопасности, уверенности и профессионализма врачей. Спасибо Вам, без возражений.",
        },
        en: {
            name: "Yudchenko Ivan Ihorovych",
            text: "Thank you for my new vision!!! Thanks to the laser correction, I have seen so many new and amazing things. \nThe diagnostic and laser correction processes at the British Ophthalmological Center were pleasant, fast, and well-coordinated, giving a sense of safety, confidence, and the doctors' professionalism. Thank you wholeheartedly.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Ромашко Дар'я Олегівна",
            text: "Хочу висловити велику подяку Вашому чудовому центру, за проведення лазерної корекції зору, всі професіонали своєї справи! Я в дикому захваті! Якби знала, що все так швидко і безболісно відбувається – зробила б набагато раніше. \nУспіхів Вам!",
        },
        ru: {
            name: "Ромашко Дарья Олеговна",
            text: "Хочу выразить большую благодарность вашему замечательному центру за проведение лазерной коррекции зрения, все профессионалы своего дела! Я в диком восторге! Если бы знала, что всё проходит так быстро и безболезненно – сделала бы намного раньше. \nУспехов Вам!",
        },
        en: {
            name: "Romashko Darya Olehivna",
            text: "I want to express my deep gratitude to your wonderful center for performing laser vision correction; all are true professionals! I am absolutely thrilled! If I had known that it would be so quick and painless, I would have done it much earlier. \nWishing you continued success!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Куца Наталя Миколаївна",
            text: "Куца Наталя Миколаївна зробила лазерну корекцію зору в Британському офтальмологічному центрі у мегакрутого лікаря Рощина Павла Ігоровича, дуже йому вдячна, а також клініці за новий зір. Уже сьогодні дивлюся на цей світ чітко та без окулярів. \nЗадоволена усім персоналом, а також оптометристом Лізою.",
        },
        ru: {
            name: "Куца Наталья Николаевна",
            text: "Куца Наталья Николаевна сделала лазерную коррекцию зрения в Британском офтальмологическом центре у суперского врача Рощина Павла Игоревича, очень ему благодарна, а также клинике за новый зрение. Уже сегодня смотрю на этот мир чётко и без очков. \nДовольна всем персоналом, а также оптометристом Лизой.",
        },
        en: {
            name: "Kutsa Natalia Mykolaivna",
            text: "Kutsa Natalia Mykolaivna underwent laser vision correction at the British Ophthalmological Center with the amazing doctor Roshchyn Pavlo Ihorovych, very grateful to him, and also to the clinic for my new vision. Already today I see the world clearly and without glasses. \nI am satisfied with all the staff, as well as the optometrist Liza.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/stepanyuk.jpg",
        uk: {
            name: "Степанюк Альона Олександрівна",
            text: "Я, Степанюк Альона Олександрівна, зробила операцію з лазерної корекції зору, в Британському офтальмологічному центрі, хірург-Рощин Павло Ігорович. \nСьогодні приїхала на післяопераційну консультацію і діагностика показала 100%  зору (до операції було -4). \nСтаном своїм задоволена. Всім рекомендую цей центр і операцію з лазерної корекції зору.",
        },
        ru: {
            name: "Степанюк Алёна Александровна",
            text: "Я, Степанюк Алёна Александровна, сделала операцию по лазерной коррекции зрения в Британском офтальмологическом центре, хирург — Рощин Павел Игоревич. \nСегодня приехала на послеоперационную консультацию, и диагностика показала 100% зрения (до операции было -4). \nСостоянием своим довольна. Всем рекомендую этот центр и операцию по лазерной коррекции зрения.",
        },
        en: {
            name: "Stepanyuk Alyona Oleksandrivna",
            text: "I, Stepanyuk Alyona Oleksandrivna, underwent laser vision correction at the British Ophthalmological Center, surgeon — Roshchyn Pavlo Ihorovych. \nToday I came for a postoperative consultation, and diagnostics showed 100% vision (before surgery it was -4). \nI am satisfied with the result. I recommend this center and laser vision correction to everyone.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/vasilenko-yuliya-ta-artem.jpg",
        uk: {
            name: "Василенко Юлія та Василенко Артем",
            text: "Ми Василенко Юлія та Василенко Артем, хочемо подякувати всім хто робить таку чудову справу, а саме дає можливість дивитись на світ «новими очима». Велика подяка лікарю Бурдею Артему В’ячеславовичу. Від сьогодні ми з сином починаємо жити нове життя! \nВдячність всьому персоналу, Ви всі просто супер, чуйні, турботливі. Бажаємо тільки процвітання та нашої перемоги! \nЗ любов’ю та повагою, сім’я Василенко!",
        },
        ru: {
            name: "Василенко Юлия и Василенко Артём",
            text: "Мы, Василенко Юлия и Василенко Артём, хотим поблагодарить всех, кто делает такое чудесное дело, а именно — даёт возможность смотреть на мир «новыми глазами». Огромная благодарность врачу Бурдею Артёму Вячеславовичу. С сегодняшнего дня мы с сыном начинаем жить новую жизнь! \nБлагодарность всему персоналу, вы все просто супер, чуткие, заботливые. Желаем только процветания и нашей победы! \nС любовью и уважением, семья Василенко!",
        },
        en: {
            name: "Vasylenko Yuliia and Vasylenko Artem",
            text: "We, Vasylenko Yuliia and Vasylenko Artem, would like to thank everyone who does such a wonderful job, namely giving the opportunity to see the world «with new eyes». Special thanks to Dr. Burdei Artem Vyacheslavovych. From today, my son and I begin a new life! \nOur gratitude to all the staff, you are simply amazing, caring, and attentive. We wish you only prosperity and our victory! \nWith love and respect, the Vasylenko family!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/konkova.jpg",
        uk: {
            name: "Конькова Наталія Андріївна",
            text: "Я, Конькова Наталія Андріївна, зробила лазерну корекцію зору в Британському офтальмологічному центрі, залишилась задоволена сервісом, кваліфікацією лікарів. Весь персонал дуже приємний , саме цей центр мені радили багато знайомих, які так само тут проводили дану процедуру . Життя змінилось на “до” та “після”!",
        },
        ru: {
            name: "Конькова Наталия Андреевна",
            text: "Я, Конькова Наталия Андреевна, сделала лазерную коррекцию зрения в Британском офтальмологическом центре, осталась довольна сервисом и квалификацией врачей. Весь персонал очень приятный. Именно этот центр мне рекомендовали многие знакомые, которые также здесь проходили данную процедуру. Жизнь изменилась на «до» и «после»!",
        },
        en: {
            name: "Konkova Nataliia Andriivna",
            text: "I, Konkova Nataliia Andriivna, had laser vision correction at the British Ophthalmology Center and was very satisfied with the service and the doctors’ qualifications. All the staff are very pleasant. This center was recommended to me by many acquaintances who also underwent this procedure here. Life has changed to «before» and «after»!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Радіонова Олена Вадимівна",
            text: "Операція з лазерної корекції зору  пройшла чудово, зовсім не боляче, лікарі привітні та уважні, на всі питання відповідають. Діагностика теж пройшла швидко. \nКлініка чудова, все чисто, охайно, приємно було тут знаходитись та очікувати новий зір.",
        },
        ru: {
            name: "Радионова Елена Вадимовна",
            text: "Операция по лазерной коррекции зрения прошла прекрасно, совсем не больно, врачи приветливые и внимательные, отвечают на все вопросы. Диагностика также прошла быстро. \nКлиника отличная, всё чисто, аккуратно, приятно было находиться здесь и ожидать новый взгляд на мир.",
        },
        en: {
            name: "Radionova Olena Vadymivna",
            text: "The laser vision correction surgery went perfectly, not painful at all, the doctors were friendly and attentive, answering all questions. The diagnostics were also quick. \nThe clinic is wonderful, everything is clean and tidy, and it was pleasant to be here waiting for my new vision.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Гелюненко Оксана Петрівна",
            text: "Я, Гелюненко Оксана Петрівна, зробила в Британському офтальмологічному центрі лазерну корекцію зору та повний огляд моїх очей. Залишилась дуже задоволеною спеціалістами та лікарями. Післяопераційні почуття хороші, консультацію детальну надали. Задоволена що звернулась до найкращих фахівців.",
        },
        ru: {
            name: "Гелюненко Оксана Петровна",
            text: "Я, Гелюненко Оксана Петровна, сделала в Британском офтальмологическом центре лазерную коррекцию зрения и полный осмотр глаз. Осталась очень довольна специалистами и врачами. Послеоперационные ощущения хорошие, консультацию предоставили подробную. Довольна, что обратилась к лучшим специалистам.",
        },
        en: {
            name: "Heliunenko Oksana Petrivna",
            text: "I, Heliunenko Oksana Petrivna, had laser vision correction and a full eye examination at the British Ophthalmology Center. I was very satisfied with the specialists and doctors. Postoperative feelings are good, and I was given a detailed consultation. I am glad that I turned to the best professionals.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Марощук Анастасія Миколаївна",
            text: "Марощук Анастасія Миколаївна, хочу поділитись враженням від клініки, яка подарувала мені можливість знову гарно бачити світ. Я не бачила добре, майже 5 років, але завдяки професіоналізму лікарів та сучасним технологіям клініки моя мрія здійснилась. \nЦя клініка для мене місце, яке повернуло радість гарно бачити світ без окулярів. \nЩиро дякую команді за гарну працю, підтримку та турботу. Ви справжні професіонали!!!",
        },
        ru: {
            name: "Марощук Анастасия Николаевна",
            text: "Марощук Анастасия Николаевна, хочу поделиться впечатлением от клиники, которая подарила мне возможность снова хорошо видеть мир. Я не видела чётко почти 5 лет, но благодаря профессионализму врачей и современным технологиям клиники моя мечта сбылась. \nЭта клиника для меня — место, которое вернуло радость хорошо видеть мир без очков. \nИскренне благодарю команду за отличную работу, поддержку и заботу. Вы настоящие профессионалы!!!",
        },
        en: {
            name: "Maroshchuk Anastasiia Mykolaivna",
            text: "I, Maroshchuk Anastasiia Mykolaivna, would like to share my impression of the clinic that gave me the opportunity to see the world clearly again. I had poor vision for almost 5 years, but thanks to the professionalism of the doctors and the clinic’s modern technologies, my dream came true. \nFor me, this clinic is a place that brought back the joy of seeing the world clearly without glasses. \nI sincerely thank the team for their excellent work, support, and care. You are true professionals!!!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Бояр Карина Олександрівна",
            text: "Я, Бояр Карина Олександрівна, зробила лазерну корекцію зору в Британському офтальмологічному центрі. Усім дуже задоволена, результат відразу відчула. Дуже приємний та дбайливий персонал. Прийшла по рекомендації і буду сама рекомендувати.",
        },
        ru: {
            name: "Бояр Карина Александровна",
            text: "Я, Бояр Карина Александровна, сделала лазерную коррекцию зрения в Британском офтальмологическом центре. Всем очень довольна, результат почувствовала сразу. Очень приятный и заботливый персонал. Пришла по рекомендации и сама буду рекомендовать.",
        },
        en: {
            name: "Boyar Karina Oleksandrivna",
            text: "I, Boyar Karina Oleksandrivna, underwent laser vision correction at the British Ophthalmological Center. I am very satisfied with everything and felt the result immediately. The staff is very friendly and caring. I came based on a recommendation and will recommend it myself.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/voloshenko.jpg",
        uk: {
            name: "Волошенко Анжела Вікторівна",
            text: "Я, Волошенко Анжела Вікторівна, зробила лазерну корекцію зору в Британському офтальмологічному центрі. Щиро дякую оперуючому лікарю Бурдею Артему В’ячеславовичу за відновлений зір, уважність і підтримку в післяопераційному періоді. Також дякую персоналу клініки за оперативність та компетентність. \nОкрема подяка лікарю-анестезіологу – Козюрі Максиму Анатолійовичу за підтримку і професіоналізм перед операцією.",
        },
        ru: {
            name: "Волошенко Анжела Викторовна",
            text: "Я, Волошенко Анжела Викторовна, сделала лазерную коррекцию зрения в Британском офтальмологическом центре. Искренне благодарю оперирующего врача Бурдея Артема Вячеславовича за восстановленное зрение, внимательность и поддержку в послеоперационный период. Также благодарю персонал клиники за оперативность и компетентность. \nОтдельная благодарность врачу-анестезиологу Козюре Максиму Анатольевичу за поддержку и профессионализм перед операцией.",
        },
        en: {
            name: "Voloshenko Anzhela Viktorivna",
            text: "I, Voloshenko Anzhela Viktorivna, underwent laser vision correction at the British Ophthalmological Center. I sincerely thank the operating doctor Burdei Artem Vyacheslavovych for restoring my vision, attentiveness, and support during the postoperative period. I also thank the clinic staff for their promptness and competence. \nSpecial thanks to the anesthesiologist Kozyura Maksym Anatoliyovych for support and professionalism before the surgery.",
        },
    },

    {
        service: "refrakczijna-lensektomiya",
        photo: "/feedbacks/grigorєv.jpg",
        uk: {
            name: "Григор’єв Іван Степанович",
            text: "Я, Григор’єв Іван Степанович, 21.01.2025 року мені проводили операцію по заміні кришталика і видаленню катаракти на правому оці в Британському офтальмологічному центрі. \nВідмінна клініка зору. Професійні лікарі, доброзичливий персонал (просто янголи). \nОбстеження пройшов швидко і якісно, операція повністю безболісна. Буду рекомендувати Вас всім знайомим. \nВелика подяка і низький уклін всьому персоналу центру.",
        },
        ru: {
            name: "Григорьев Иван Степанович",
            text: "Я, Григорьев Иван Степанович, 21.01.2025 мне провели операцию по замене хрусталика и удалению катаракты на правом глазу в Британском офтальмологическом центре. \nОтличная клиника зрения. Профессиональные врачи, доброжелательный персонал (просто ангелы). \nОбследование прошёл быстро и качественно, операция полностью безболезненная. Буду рекомендовать Вас всем знакомым. \nБольшое спасибо и низкий поклон всему персоналу центра.",
        },
        en: {
            name: "Hryhoriev Ivan Stepanovych",
            text: "I, Hryhoriev Ivan Stepanovych, underwent lens replacement and cataract removal surgery on my right eye at the British Ophthalmological Center on 21.01.2025. \nExcellent vision clinic. Professional doctors, friendly staff (just angels). \nThe examination was fast and thorough, the operation completely painless. I will recommend you to all my acquaintances. \nMany thanks and a deep bow to all the center staff.",
        },
    },

    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Зубріліна Надія Олександрівна",
            text: "Я, Зубріліна Надія Олександрівна, оперувалась з приводу катаракти. Хочу подякувати команді Гавура М.О. за професіоналізм, уважність та чудове лікування. Ви всі робите шляхетну справу. \n14.02.2025",
        },
        ru: {
            name: "Зубрилина Надежда Александровна",
            text: "Я, Зубрилина Надежда Александровна, оперировалась по поводу катаракты. Хочу поблагодарить команду Гавура М.О. за профессионализм, внимательность и отличное лечение. Вы все делаете благородное дело. \n14.02.2025",
        },
        en: {
            name: "Zubrilina Nadiya Oleksandrivna",
            text: "I, Zubrilina Nadiya Oleksandrivna, underwent cataract surgery. I want to thank the team of Havura M.O. for their professionalism, attentiveness, and excellent treatment. You are all doing a noble work. \n14.02.2025",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Бойко Василь Дмитрович",
            text: "Я, Бойко Василь Дмитрович, зробив операцію по заміні кришталика в «Британському офтальмологічному центрі». Хочу подякувати персоналу клініки за якісну допомогу, добрі відносини та людяність. \nЛікарям за професійність, турботу та золоті руки!",
        },
        ru: {
            name: "Бойко Василий Дмитриевич",
            text: "Я, Бойко Василий Дмитриевич, сделал операцию по замене хрусталика в Британском офтальмологическом центре. Хочу поблагодарить персонал клиники за качественную помощь, добрые отношения и человечность. \nВрачам за профессионализм, заботу и золотые руки!",
        },
        en: {
            name: "Boyko Vasyl Dmytrovych",
            text: "I, Boyko Vasyl Dmytrovych, underwent lens replacement surgery at the British Ophthalmological Center. I want to thank the clinic staff for quality assistance, kindness, and humanity. \nThanks to the doctors for their professionalism, care, and golden hands!",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        uk: {
            name: "Левчук Лариса Георгіївна",
            text: "Я, Левчук Лариса Георгіївна, зробила операцію по заміні кришталика в «Британському офтальмологічному центрі». Все пройшло на найвищому рівні! \nПочуваю себе щасливою від результатів, уваги та піклування з боку всього колективу. \nВисокій кваліфікації хірургів та лікарів – велика дяка!",
        },
        ru: {
            name: "Левчук Лариса Георгиевна",
            text: "Я, Левчук Лариса Георгиевна, сделала операцию по замене хрусталика в «Британском офтальмологическом центре». Всё прошло на высшем уровне! \nЧувствую себя счастливой от результатов, внимания и заботы со стороны всего коллектива. \nВысокой квалификации хирургов и врачей – большая благодарность!",
        },
        en: {
            name: "Levchuk Larysa Heorhiivna",
            text: "I, Levchuk Larysa Heorhiivna, underwent lens replacement surgery at the «British Ophthalmology Center». Everything went at the highest level! \nI feel happy with the results, the attention, and the care from the entire team. \nMany thanks to the highly qualified surgeons and doctors!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Пономаренко Ірина Леонідівна",
            text: "Я, Пономаренко Ірина Леонідівна, вчора була на огляді, діагностиці та лазерній корекції зору в Британському офтальмологічному центрі. Дуже задоволена візитом, лікуванням, спілкуванням з лікарями. Весь персонал та лікарі ввічливі, турботливі і професіонали своєї справи. \nСам процес влаштований досить чітко та комфортно. Результатами задоволена. Буду рекомендувати рідним, друзям, близьким. Дякую, що подарували можливість все бачити!",
        },
        ru: {
            name: "Пономаренко Ирина Леонидовна",
            text: "Я, Пономаренко Ирина Леонидовна, вчера была на осмотре, диагностике и лазерной коррекции зрения в Британском офтальмологическом центре. Очень довольна визитом, лечением, общением с врачами. Весь персонал и врачи вежливые, заботливые и профессионалы своего дела. \nСам процесс организован достаточно чётко и комфортно. Результатами довольна. Буду рекомендовать родным, друзьям, близким. Спасибо, что подарили возможность всё видеть!",
        },
        en: {
            name: "Ponomarenko Iryna Leonidivna",
            text: "I, Ponomarenko Iryna Leonidivna, had an examination, diagnostics, and laser vision correction yesterday at the British Ophthalmology Center. I am very satisfied with the visit, treatment, and communication with the doctors. All the staff and doctors are polite, caring, and true professionals. \nThe whole process was organized very clearly and comfortably. I am happy with the results. I will recommend it to my family, friends, and loved ones. Thank you for giving me the opportunity to see everything!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Титаренко Вікторія Миколаївна",
            text: "Зробила лазерну корекцію зору в Британському офтальмологічному центрі. Операція пройшла швидко. Відношення до пацієнтів хороше. \nЛікарі добрі та приємні, пояснюють як потрібно стежити за своїм здоров’ям після операції. \nНа сам перед під час корекції в операційній потрібно слухати лікаря-хірурга. \nДякую за вашу!)))",
        },
        ru: {
            name: "Титаренко Виктория Николаевна",
            text: "Сделала лазерную коррекцию зрения в Британском офтальмологическом центре. Операция прошла быстро. Отношение к пациентам хорошее. \nВрачи добрые и приятные, объясняют, как нужно следить за своим здоровьем после операции. \nВ первую очередь во время коррекции в операционной нужно слушать врача-хирурга. \nСпасибо вам!)))",
        },
        en: {
            name: "Tytarenko Viktoriia Mykolaivna",
            text: "I had laser vision correction at the British Ophthalmology Center. The surgery went quickly. The attitude toward patients is good. \nThe doctors are kind and pleasant, explaining how to take care of your health after the surgery. \nFirst of all, during the correction in the operating room, you need to listen to the surgeon. \nThank you!)))",
        },
    },
    {
        service: "refrakczijna-lensektomiya",
        photo: "/feedbacks/perepiliczya-v.s.jpg",
        uk: {
            name: "Перепелиця Валентина Степанівна",
            text: "Я, Перепелиця Валентина Степанівна, хочу висловити величезну подяку Британському офтальмологічному центру за високий рівень професіоналізму, уважне ставлення до пацієнтів і сучасний підхід до лікування. \nПерсонал дуже ввічливий, дівчатка ніби ангелочки, відчуваєш тепло та підтримку під час перебування в клініці. \nОсобливо хочу подякувати лікарю Гавура М.О., за його професіоналізм та уважність. \n05.02.2025 року зробила операцію по заміні кришталика та на наступний день я бачу світ. \nРекомендую цей офтальмологічний центр усім, хто шукає надійних спеціалістів і хоче отримати якісне лікування!",
        },
        ru: {
            name: "Перепелица Валентина Степановна",
            text: "Я, Перепелица Валентина Степановна, хочу выразить огромную благодарность Британскому офтальмологическому центру за высокий уровень профессионализма, внимательное отношение к пациентам и современный подход к лечению. \nПерсонал очень вежливый, девушки словно ангелочки, чувствуешь тепло и поддержку во время пребывания в клинике. \nОсобенно хочу поблагодарить врача Гавура М.А. за его профессионализм и внимательность. \n05.02.2025 года сделала операцию по замене хрусталика, и на следующий день я уже вижу мир. \nРекомендую этот офтальмологический центр всем, кто ищет надёжных специалистов и хочет получить качественное лечение!",
        },
        en: {
            name: "Perepelytsia Valentyna Stepanivna",
            text: "I, Perepelytsia Valentyna Stepanivna, would like to express my deep gratitude to the British Ophthalmology Center for the high level of professionalism, attentive attitude toward patients, and modern approach to treatment. \nThe staff is very polite, the girls are like little angels, and you feel warmth and support during your stay at the clinic. \nI especially want to thank Dr. Havur M.O. for his professionalism and attentiveness. \nOn 05.02.2025, I had lens replacement surgery, and the next day I could already see the world. \nI recommend this ophthalmology center to everyone who is looking for reliable specialists and wants to receive quality treatment!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Рутченко Катерина Валентинівна",
            text: "Мій шок в шоці. Вчора я їхала на корекцію зору в Британський офтальмологічний центр і не бачила номерів автівок попереду. А сьогодні, здається, я бачу повідомлення, яке пише водій своїй дружині. Хочу подякувати усій команді клініки. \nКожен спеціаліст, який зі мною працював був дуже ввічливий грамотний та професійний. Все дуже прискіпливо продумано і працює як маленький заводік по виробництву зрячих та дуже щасливих людей. Сама прийшла сюди по рекомендації подруги і тепер розумію чому вона мене сюди пхала півроку. Обов’язково буду радити вашу клініку усім, кому знадобиться допомога з очима. Ще раз дякую!",
        },
        ru: {
            name: "Рутченко Катерина Валентиновна",
            text: "Мой шок в шоке. Вчера я ехала на коррекцию зрения в Британский офтальмологический центр и не видела номера машин впереди. А сегодня, кажется, я вижу сообщение, которое пишет водитель своей жене. Хочу поблагодарить всю команду клиники. \nКаждый специалист, который со мной работал, был очень вежливый, грамотный и профессиональный. Всё очень тщательно продумано и работает как маленький заводик по производству зрячих и очень счастливых людей. Пришла сюда по рекомендации подруги и теперь понимаю, почему она меня сюда толкала полгода. Обязательно буду рекомендовать вашу клинику всем, кому понадобится помощь с глазами. Ещё раз спасибо!",
        },
        en: {
            name: "Rutchenko Kateryna Valentynivna",
            text: "I am absolutely shocked. Yesterday I went for vision correction at the British Ophthalmological Center and could not see the license plates of the cars ahead. And today, it seems, I can read the message a driver is sending to his wife. I want to thank the entire clinic team. \nEvery specialist who worked with me was very polite, competent, and professional. Everything is meticulously planned and works like a small factory producing sighted and very happy people. I came here on a friend's recommendation and now understand why she had been urging me for six months. I will definitely recommend your clinic to everyone who needs eye care. Thank you once again!",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Шатило Олена Валентинівна",
            text: "Я, Шатило Олена Валентинівна, хочу висловити своє задоволення від відвідування Британської офтальмологічного центру. Дуже гарні чуйні лікарі, відмінне ставлення, позитивне враження від проведення лазерної корекції зору. Вдячна та буду рекомендувати всім знайомим.",
        },
        ru: {
            name: "Шатило Елена Валентиновна",
            text: "Я, Шатило Елена Валентиновна, хочу выразить своё удовлетворение от посещения Британского офтальмологического центра. Очень хорошие чуткие врачи, отличное отношение, положительное впечатление от проведения лазерной коррекции зрения. Благодарна и буду рекомендовать всем знакомым.",
        },
        en: {
            name: "Shatylo Olena Valentynivna",
            text: "I, Shatylo Olena Valentynivna, want to express my satisfaction with visiting the British Ophthalmological Center. Very kind and attentive doctors, excellent care, and a positive experience from laser vision correction. I am grateful and will recommend it to all my acquaintances.",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Озерчук Олександр Володимирович",
            text: "Я, Озерчук Олександр Володимирович, 4 місяці тому прооперував обидва ока (заміна кришталиків, катаракта). Результатом дуже задоволений, все як і обіцяли лікарі. Вражає дбайливе відношення протягом усього процесу: від обстеження до післяопераційного супроводження. Увесь персонал уважний, позитивно налаштований, що надає упевненості. Також дуже приємно, що немає черг та все розписано по часу. Особливу подяку хочу висловити своєму ведучому лікарю Петросовій Офелії Олександрівні. Усім хто стикнувся з проблемою зору раджу звертатися до Британського офтальмологічного центру, обов’язково допоможуть.",
        },
        ru: {
            name: "Озерчук Александр Владимирович",
            text: "Я, Озерчук Александр Владимирович, 4 месяца назад прооперировал оба глаза (замена хрусталиков, катаракта). Результатом очень доволен, всё как обещали врачи. Впечатляет заботливое отношение на протяжении всего процесса: от обследования до послеоперационного сопровождения. Весь персонал внимательный, позитивно настроенный, что придаёт уверенности. Также очень приятно, что нет очередей и всё расписано по времени. Особую благодарность хочу выразить своему ведущему врачу Петросовой Офелии Александровне. Всем, кто столкнулся с проблемой зрения, советую обращаться в Британский офтальмологический центр, обязательно помогут.",
        },
        en: {
            name: "Ozerchuk Oleksandr Volodymyrovych",
            text: "I, Ozerchuk Oleksandr Volodymyrovych, had surgery on both eyes 4 months ago (lens replacement, cataract). I am very satisfied with the result; everything went as the doctors promised. The attentive care throughout the process, from examination to postoperative follow-up, is impressive. The entire staff is attentive and positive, which gives confidence. It is also very nice that there are no queues and everything is scheduled on time. I especially want to thank my lead doctor, Petrosova Ofeliya Oleksandrivna. I recommend the British Ophthalmological Center to everyone facing vision problems—they will definitely help.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        photo: "/feedbacks/radchenko-yu.jpg",
        uk: {
            name: "Радченко Юлія Вікторівна",
            text: "Я, Радченко Юлія Вікторівна, робила лазерну корекцію зору 25.01.2025 р., в Британському офтальмологічному центрі. Все пройшло чудово, зір відновився протягом 2 днів. \nДякую лікарю Бурдею Артему В’ячеславовичу, а також всьому персоналу Британського офтальмологічного центру!",
        },
        ru: {
            name: "Радченко Юлия Викторовна",
            text: "Я, Радченко Юлия Викторовна, делала лазерную коррекцию зрения 25.01.2025 г. в Британском офтальмологическом центре. Всё прошло отлично, зрение восстановилось в течение 2 дней. \nБлагодарю врача Бурдея Артема Вячеславовича, а также весь персонал Британского офтальмологического центра!",
        },
        en: {
            name: "Radchenko Yuliya Viktorivna",
            text: "I, Radchenko Yuliya Viktorivna, underwent laser vision correction on 25.01.2025 at the British Ophthalmological Center. Everything went perfectly, and my vision was restored within 2 days. \nThanks to doctor Burdei Artem Vyacheslavovych and the entire staff of the British Ophthalmological Center!",
        },
    },
    {
        service: "likuvannya-katarakti",
        photo: "/feedbacks/krivonis.jpg",
        uk: {
            name: "Кривоніс Віктор Мефодійович",
            text: "Я, Кривоніс Віктор Мефодійович, житель м. Києва хочу висловити подяку усім працівникам Британського офтальмологічного центру за уважне і чуйне ставлення до пацієнтів. \nМені оперували два ока 11.12.2024 та 18.12.2024, тепер я бачу, читаю, мені відкрився світ. \nСлова особливої вдячності хочу сказати хірургу Гавура М.О. та нашому лікарю Петросовій О.О., яка кваліфіковано, чуйно провела лікування, надала корисні поради. \nЩастя і благополуччя Вам, шановна Офелія Олександрівна.",
        },
        ru: {
            name: "Кривонос Виктор Мефодиевич",
            text: "Я, Кривонос Виктор Мефодиевич, житель г. Киева, хочу выразить благодарность всем сотрудникам Британского офтальмологического центра за внимательное и чуткое отношение к пациентам. \nМне оперировали два глаза 11.12.2024 и 18.12.2024, теперь я вижу, читаю, для меня открылся мир. \nСлова особой благодарности хочу сказать хирургу Гавуре М.А. и нашему врачу Петросовой О.А., которая квалифицированно и чутко провела лечение, дала полезные советы. \nСчастья и благополучия Вам, уважаемая Офелия Александровна.",
        },
        en: {
            name: "Kryvonis Viktor Mefodiyovych",
            text: "I, Kryvonis Viktor Mefodiyovych, a resident of Kyiv, would like to express my gratitude to all the staff of the British Ophthalmology Center for their attentive and caring attitude toward patients. \nI underwent surgery on both eyes on 11.12.2024 and 18.12.2024, and now I can see, I can read, the world has opened up for me. \nI would like to give special thanks to surgeon Havura M.O. and to our doctor Petrosova O.O., who carried out the treatment professionally and with care, and provided useful advice. \nWishing you happiness and well-being, dear Ofeliia Oleksandrivna.",
        },
    },
    {
        service: "lazerna-korekcziya-zoru",
        uk: {
            name: "Залевська Ольга Олександрівна",
            text: "Я, Залевська Ольга Олександрівна, зробила лазерну корекцію зору в Британському офтальмологічному центрі і це змінило моє життя. Дякую, що подарували здатність бачити. Шкодую, що не приїхала до вас раніше. Вся команда «Британського офтальмологічного центру» – ви молодці. Однозначно лише позитивні відгуки. \nБажаю успіхів!!!",
        },
        ru: {
            name: "Залевская Ольга Александровна",
            text: "Я, Залевская Ольга Александровна, сделала лазерную коррекцию зрения в Британском офтальмологическом центре, и это изменило мою жизнь. Спасибо, что подарили возможность видеть. Жалею, что не приехала к вам раньше. Вся команда «Британского офтальмологического центра» – вы молодцы. Однозначно только положительные отзывы. \nЖелаю успехов!!!",
        },
        en: {
            name: "Zalevska Olha Oleksandrivna",
            text: "I, Zalevska Olha Oleksandrivna, underwent laser vision correction at the British Ophthalmology Center, and it changed my life. Thank you for giving me the ability to see. I regret not coming to you earlier. The entire team of the 'British Ophthalmology Center' – you are amazing. Definitely only positive feedback. \nWishing you success!!!",
        },
    },
    {
        service: "likuvannya-katarakti",
        uk: {
            name: "Тєлєгіна Людмила Петрівна",
            text: "Я, Тєлєгіна Людмила Петрівна, щиро дякую лікарю Уляні Іванівні та всьому медперсоналу за професіоналізм і уважне ставлення! \nОперація по лікуванню катаракти значно покращила моє самопочуття та спосіб життя. \nВсім рекомендую Британський офтальмологічний центр та такий фаховий професіоналізм від медичного персоналу!!!",
        },
        ru: {
            name: "Телегина Людмила Петровна",
            text: "Я, Телегина Людмила Петровна, искренне благодарю врача Ульяну Ивановну и весь медперсонал за профессионализм и внимательное отношение! \nОперация по лечению катаракты значительно улучшила мое самочувствие и образ жизни. \nВсем рекомендую Британский офтальмологический центр и такой высокий профессионализм медицинского персонала!!!",
        },
        en: {
            name: "Telegina Liudmyla Petrivna",
            text: "I, Telegina Liudmyla Petrivna, sincerely thank doctor Uliana Ivanivna and the entire medical staff for their professionalism and attentive care! \nThe cataract surgery significantly improved my well-being and lifestyle. \nI highly recommend the British Ophthalmology Center and such a high level of professionalism from the medical staff!!!",
        },
    },
];
