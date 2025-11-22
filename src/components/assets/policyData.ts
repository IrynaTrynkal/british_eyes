import { TextType } from "./servicesData";

export type PolicyDataType = {
    uk: { content: TextType[] };
    en: { content: TextType[] };
    ru: { content: TextType[] };
};

export const policyData: PolicyDataType = {
    uk: {
        content: [
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "ТОВ «Британський офтальмологічний центр»",
                    },
                    {
                        value: "(далі – «Компанія», «Ми») поважає Ваше право на приватність і зобов’язується захищати персональні дані користувачів сайту www.eyes.ua (далі – «Сайт»).",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ця Політика конфіденційності пояснює, які дані ми збираємо, як їх обробляємо, для чого використовуємо, кому можемо передавати і які права має користувач.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "1. Загальні положення",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ми обробляємо персональні дані користувачів відповідно до:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "Закону України «Про захист персональних даних»;",
                    "Регламенту (ЄС) 2016/679 (GDPR);",
                    "інших чинних нормативно-правових актів у сфері захисту інформації.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Користуючись Сайтом, Ви підтверджуєте, що ознайомлені з цією Політикою та погоджуєтесь із її умовами.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "2. Які персональні дані ми збираємо",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ми можемо збирати та обробляти такі категорії даних:",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.1. Ідентифікаційні дані:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "ім’я, прізвище, по батькові, дата народження, адреса проживання або реєстрації, ідентифікаційний номер (якщо необхідно для оформлення договору чи надання медичних послуг).",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.2. Контактні дані:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "номер телефону, адреса електронної пошти, соціальні мережі або месенджери (якщо Ви звертаєтесь через них).",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.3. Медичні дані:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "результати діагностики, показники зору, рецепти, висновки лікаря, дані історії хвороби, обстеження, фотографії очного дна або інші клінічні зображення (обробляються виключно за Вашою згодою або з метою надання медичних послуг).",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.4. Технічні дані:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "IP-адреса, тип браузера, операційна система, джерело переходу (наприклад, Google або Facebook), статистика відвідувань, cookie-файли.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "3. Як ми отримуємо дані",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ваші персональні дані можуть бути отримані, коли Ви:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "заповнюєте форму онлайн-запису або зворотного зв’язку на Сайті;",
                    "телефонуєте до клініки або надсилаєте повідомлення на електронну пошту;",
                    "підписуєтесь на розсилку або акційні пропозиції;",
                    "користуєтесь чатами, анкетами чи формами зворотного зв’язку;",
                    "відвідуєте Сайт (cookie та інші технічні інструменти автоматично фіксують інформацію).",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "4. Правові підстави для обробки",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Обробка персональних даних здійснюється виключно на законних підставах:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    [
                        { value: "за" },
                        { bold: true, value: "Вашою згодою" },
                        { value: ";" },
                    ],
                    [
                        { value: "для" },
                        { bold: true, value: "виконання договору" },
                        { value: "про надання медичних послуг;" },
                    ],
                    [
                        { value: "для" },
                        { bold: true, value: "виконання юридичних обов’язків" },
                        {
                            value: "(наприклад, вимог податкового або медичного законодавства);",
                        },
                    ],
                    [
                        { value: "для" },
                        {
                            bold: true,
                            value: "захисту життєво важливих інтересів",
                        },
                        {
                            value: "(наприклад, у випадку невідкладної допомоги);",
                        },
                    ],
                    [
                        { value: "у" },
                        { bold: true, value: "законних інтересах Компанії" },
                        {
                            value: "(забезпечення кібербезпеки, поліпшення якості послуг, внутрішня аналітика).",
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
                        value: "5. Мета обробки даних",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ми використовуємо персональні дані для:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "реєстрації пацієнтів, ведення обліку візитів і записів;",
                    "надання консультацій та медичних послуг;",
                    "комунікації з Вами (телефон, SMS, email, месенджери);",
                    "надсилання інформаційних матеріалів або нагадувань;",
                    "покращення функціональності, безпеки та якості Сайту;",
                    "дотримання законодавчих вимог.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "6. Cookie-файли",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ми використовуємо cookie-файли для:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "забезпечення технічної роботи Сайту (сеансові файли, мова інтерфейсу тощо);",
                    "аналітики трафіку (Google Analytics, Meta Pixel, Hotjar);",
                    "адаптації контенту до інтересів користувача.",
                ],
            },
            {
                type: "text",

                text: "Ви можете самостійно вимкнути cookie у налаштуваннях браузера.",
            },
            {
                type: "text",
                gap: true,
                text: "Детальніше: www.allaboutcookies.org",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "7. Передача персональних даних третім особам",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ми не продаємо і не передаємо Ваші дані третім особам, крім випадків, коли це необхідно:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "для надання послуг (лабораторії, страхові компанії, кур’єрські служби тощо);",
                    "для виконання вимог законодавства або офіційного запиту державних органів;",
                    "технічним партнерам (Google, Meta, Cloudflare, Binotel, SendPulse) у межах договорів про обробку даних.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "8. Передача даних за кордон",
                    },
                ],
            },
            {
                type: "text",
                text: "У зв’язку з використанням сторонніх сервісів (Google, Meta, Cloudflare) дані можуть зберігатися на серверах за межами ЄС.",
            },
            {
                type: "text",
                gap: true,
                text: "Передача відбувається на основі Стандартних договірних положень ЄС (SCC), що гарантують належний рівень захисту.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "9. Термін зберігання даних",
                    },
                ],
            },
            {
                type: "list",
                gap: true,
                list: [
                    [
                        { value: "Медичні дані —" },
                        { bold: true, value: "10 років" },
                        { value: "(згідно з наказами МОЗ України);" },
                    ],
                    [
                        { value: "Дані форм звернень —" },
                        { bold: true, value: "3 роки" },
                        { value: ";" },
                    ],
                    [
                        { value: "Дані аналітики, cookie, розсилок —" },
                        { bold: true, value: "1 рік" },
                        {
                            value: "або до відкликання згоди. Після завершення терміну дані знищуються або знеособлюються.",
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
                        value: "10. Захист даних",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ми застосовуємо сучасні організаційні та технічні заходи захисту:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "SSL-шифрування;",
                    "багаторівневий захист серверів;",
                    "контроль доступу до персональних даних;",
                    "аудит інформаційної безпеки.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "11. Ваші права",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ви маєте право:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "отримати інформацію про свої дані (ст. 15 GDPR);",
                    "обмежити обробку або відкликати згоду (ст. 18, 21 GDPR);",
                    "подати скаргу до Уповноваженого ВРУ з прав людини або до органу із захисту даних у ЄС.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { value: "Звертайтесь на: " },
                    { bold: true, value: "kiev@eyes.ua" },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "12. Обробка даних неповнолітніх",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ми не обробляємо дані осіб віком до 16 років без згоди батьків або законних представників. У разі виявлення — дані видаляються.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "13. Автоматизоване прийняття рішень",
                    },
                ],
            },
            {
                type: "text",
                text: "Ми не здійснюємо автоматизованого прийняття рішень, що мають юридичні наслідки.",
            },
            {
                type: "text",
                gap: true,
                text: "Аналітика (Google Analytics, Meta Pixel) використовується лише для статистичних цілей.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "14. Контакти",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "ТОВ «Британський офтальмологічний центр»",
                    },
                ],
            },
            {
                type: "text",
                text: "Адреса: Київ, вул. Крутий узвіз, 3а",
            },
            {
                type: "text",
                text: [
                    { value: "Електронна пошта:" },
                    {
                        bold: true,
                        value: "kiev@eyes.ua",
                    },
                ],
            },
            {
                type: "text",
                text: "Телефон: 0 800 507 077",
            },
        ],
    },
    en: {
        content: [
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "British Eye Center LLC",
                    },
                    {
                        value: "(“Company”, “We”) respects your privacy and is committed to protecting the personal data of users of www.eyes.ua (“Website”).",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "This Privacy Policy explains what data we collect, how we process it, for what purpose, who we may share it with, and what rights you have.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "1. General Provisions",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "We process personal data in accordance with:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "the Law of Ukraine “On Personal Data Protection”;",
                    "the EU General Data Protection Regulation (GDPR No 2016/679);",
                    "other applicable data protection laws.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: "By using this Website, you agree to this Policy.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "2. Personal Data We Collect",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "We may collect and process the following categories of data:",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.1. Identification Data:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Name, surname, date of birth, residential or registration address, personal identification number (where required for service agreements or medical purposes).",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.2. Contact Data:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Phone number, email address, social network or messenger account (if you contact us through them).",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.3. Medical Data:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Diagnostic results, vision parameters, prescriptions, medical history, examination findings, and images — processed only with your written consent or for medical service provision.",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.4. Technical Data:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "IP address, browser type, device, referral source (e.g., Google, Facebook), website statistics, and cookies.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "3. How We Obtain Data",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "We collect your data when you:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "fill in online appointment or feedback forms;",
                    "call or email the clinic;",
                    "subscribe to newsletters or promotions;",
                    "use online chats or other site features;",
                    "visit the Website (technical data and cookies are recorded automatically).",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "4. Legal Grounds for Processing",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Your data is processed based on:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    [{ bold: true, value: "your consent" }, { value: ";" }],
                    [
                        { bold: true, value: "performance of a contract" },
                        { value: "for medical services;" },
                    ],
                    [
                        { bold: true, value: "legal obligations" },
                        {
                            value: ";",
                        },
                    ],
                    [
                        {
                            bold: true,
                            value: "vital interests",
                        },
                        {
                            value: "of the patient;",
                        },
                    ],
                    [
                        { value: "the Company’s" },
                        { bold: true, value: "legitimate interests" },
                        {
                            value: "(security, analytics, improvement of services).",
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
                        value: "5. Purpose of Data Processing",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Your personal data is used for:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "registering patients and managing appointments;",
                    "providing medical consultations and treatments;",
                    "communicating with you (phone, email, messenger);",
                    "sending newsletters and reminders;",
                    "improving website security, usability, and performance;",
                    "complying with Ukrainian legal requirements.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "6. Cookies",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "We use cookies for:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "proper website functionality (sessions, language settings);",
                    "traffic analytics (Google Analytics, Meta Pixel, Hotjar);",
                    "personalization of content and advertisements.",
                ],
            },
            {
                type: "text",
                text: "You can disable cookies in your browser settings.",
            },
            {
                type: "text",
                gap: true,
                text: "More details: www.allaboutcookies.org",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "7. Data Sharing",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "We do not sell or disclose your data except when necessary:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "to provide medical or related services (insurance companies, laboratories, courier services);",
                    "to comply with legal requirements;",
                    "to technical and marketing partners (Google, Meta, Cloudflare, Binotel, SendPulse) under strict confidentiality agreements.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "8. International Data Transfers",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "As some partners (Google, Meta, Cloudflare) may store data outside the EU, such transfers are carried out under EU Standard Contractual Clauses (SCC) ensuring an adequate level of protection.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "9. Data Retention",
                    },
                ],
            },
            {
                type: "list",
                gap: true,
                list: [
                    [
                        { value: "Medical data —" },
                        { bold: true, value: "10 years" },
                        {
                            value: "(per Ukrainian Ministry of Health regulations);",
                        },
                    ],
                    [
                        { value: "Contact forms —" },
                        { bold: true, value: "3 years" },
                        { value: ";" },
                    ],
                    [
                        { value: "Analytics and cookies —" },
                        { bold: true, value: "1 year" },
                        {
                            value: "or until consent withdrawal. After expiry, data is deleted or anonymized.",
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
                        value: "10. Data Security",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "We employ modern technical and organizational measures, including SSL encryption, multi-layer server protection, limited access to data, and regular security audits.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "11. Your Rights",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "You have the right to:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "access your personal data;",
                    "request correction or deletion (“right to be forgotten”);",
                    "lodge a complaint with the Ukrainian Ombudsman or an EU Data Protection Authority.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { value: "Contact: " },
                    { bold: true, value: "kiev@eyes.ua" },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "12. Minors",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "We do not collect data from persons under 16 years old without parental consent. If such data is identified, it will be deleted.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "13. Automated Decision-Making",
                    },
                ],
            },
            {
                type: "text",
                text: "We do not carry out automated decision-making that affects users legally.",
            },
            {
                type: "text",
                gap: true,
                text: "Analytics tools (Google Analytics, Meta Pixel) are used only for statistical purposes.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "14. Contacts",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "British Eye Center LLC",
                    },
                ],
            },
            {
                type: "text",
                text: "Address: Kiev, 3a Krutoy Uzviz Str.",
            },
            {
                type: "text",
                text: [
                    { value: "Email:" },
                    {
                        bold: true,
                        value: "kiev@eyes.ua",
                    },
                ],
            },
            {
                type: "text",
                text: "Phone: 0 800 507 077",
            },
        ],
    },
    ru: {
        content: [
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "ООО «Британский офтальмологический центр»",
                    },
                    {
                        value: "(далее — «Компания», «Мы») уважает Ваше право на конфиденциальность и обязуется защищать персональные данные пользователей сайта www.eyes.ua (далее — «Сайт»).",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Настоящая Политика конфиденциальности объясняет, какие данные мы собираем, как их обрабатываем, с какой целью используем, кому можем передавать и какие права имеет пользователь.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "1. Общие положения",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Мы обрабатываем персональные данные пользователей в соответствии с:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "Законом Украины «О защите персональных данных»;",
                    "Общим регламентом ЕС по защите данных (GDPR № 2016/679);",
                    "другими действующими нормативными актами в сфере защиты информации.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Используя Сайт, Вы подтверждаете, что ознакомились с настоящей Политикой и соглашаетесь с её условиями.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "2. Какие персональные данные мы собираем",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Мы можем собирать и обрабатывать следующие категории данных:",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.1. Идентификационные данные:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "ФИО, дата рождения, адрес проживания или регистрации, идентификационный номер (при необходимости для заключения договора или оказания медицинских услуг).",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.2. Контактные данные:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Номер телефона, адрес электронной почты, аккаунты в социальных сетях или мессенджерах (если Вы связываетесь через них).",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.3. Медицинские данные:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Результаты диагностики, показатели зрения, рецепты, заключения врачей, история болезни, результаты обследований, изображения глаз (обрабатываются только с Вашего письменного согласия или для оказания медицинских услуг).",
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "2.4. Технические данные:",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "IP-адрес, тип браузера, устройство, источник перехода (Google, Facebook и др.), статистика посещений, cookie-файлы.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "3. Как мы получаем данные",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ваши персональные данные могут быть получены, когда Вы:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "заполняете форму онлайн-записи или обратной связи;",
                    "звоните в клинику или пишете на электронную почту;",
                    "подписываетесь на рассылку или акции;",
                    "пользуетесь чатом или другими сервисами сайта;",
                    "посещаете сайт (технические данные и cookie сохраняются автоматически).",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "4. Правовые основания обработки",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Мы обрабатываем Ваши данные на законных основаниях:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    [
                        { value: "с" },
                        { bold: true, value: "Вашего согласия" },
                        { value: ";" },
                    ],
                    [
                        { value: "для" },
                        { bold: true, value: "исполнения договора" },
                        {
                            value: "о предоставлении медицинских услуг;",
                        },
                    ],
                    [
                        { value: "для" },
                        {
                            bold: true,
                            value: "выполнения юридических обязательств",
                        },
                        {
                            value: ";",
                        },
                    ],
                    [
                        { value: "для" },
                        {
                            bold: true,
                            value: "защиты жизненно важных интересов",
                        },
                        { value: "пациента;" },
                    ],
                    [
                        { value: "на основании" },
                        { bold: true, value: "законного интереса Компании" },
                        {
                            value: "(обеспечение безопасности, улучшение сервиса, аналитика).",
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
                        value: "5. Цели использования персональных данных",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Ваши данные используются для:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "регистрации пациентов и оказания медицинских услуг;",
                    "связи с Вами (телефон, email, SMS, мессенджеры);",
                    "рассылок и уведомлений;",
                    "улучшения функциональности и безопасности сайта;",
                    "анализа эффективности рекламы и работы сайта;",
                    "соблюдения требований законодательства Украины.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "6. Cookie-файлы",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Мы используем cookie для:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "корректной работы сайта (авторизация, выбор языка и др.);",
                    "аналитики посещаемости (Google Analytics, Meta Pixel, Hotjar);",
                    "персонализации контента.",
                ],
            },
            {
                type: "text",
                text: "Вы можете отключить cookie в настройках браузера.",
            },
            {
                type: "text",
                gap: true,
                text: "Подробнее: www.allaboutcookies.org",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "7. Передача данных третьим лицам",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Мы не продаём и не передаём Ваши данные, кроме случаев, когда это необходимо:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "для оказания медицинских или сопутствующих услуг (страховые компании, лаборатории, курьерские службы);",
                    "для выполнения требований законодательства;",
                    "нашим техническим и маркетинговым партнёрам (Google, Meta, Cloudflare, Binotel, SendPulse и др.) — только в объёме, необходимом для работы сайта и связи с пациентом.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "Передача данных за пределы ЕС",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Поскольку некоторые сервисы (Google, Meta, Cloudflare) могут хранить данные на серверах за пределами Европейского Союза, передача осуществляется на основании Стандартных договорных положений ЕС (SCC), гарантирующих надлежащий уровень защиты данных.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "9. Срок хранения данных",
                    },
                ],
            },
            {
                type: "list",
                gap: true,
                list: [
                    [
                        { value: "Медицинские данные —" },
                        { bold: true, value: "10 лет" },
                        { value: "(согласно приказам Минздрава Украины);" },
                    ],
                    [
                        {
                            value: "Данные из форм обратной связи и онлайн-записей —",
                        },
                        { bold: true, value: "3 года" },
                        { value: ";" },
                    ],
                    [
                        { value: "Данные аналитики, cookie и рассылок —" },
                        { bold: true, value: "1 рік" },
                        {
                            value: "или до момента отзыва согласия. По окончании срока хранения данные удаляются или анонимизируются.",
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
                        value: "10. Защита персональных данных",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Мы применяем современные организационные и технические меры:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "SSL-шифрование;",
                    "многоуровневую защиту серверов;",
                    "ограниченный доступ к данным;",
                    "регулярный аудит безопасности.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "11. Ваши права",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Вы имеете право:",
            },
            {
                type: "list",
                gap: true,
                list: [
                    "получать информацию о своих данных;",
                    "ограничить обработку или отозвать согласие;",
                    "подать жалобу Уполномоченному ВРУ по правам человека или в орган защиты данных ЕС.",
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    { value: "По вопросам защиты данных обращайтесь на" },
                    { bold: true, value: "kiev@eyes.ua" },
                ],
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "12. Обработка данных несовершеннолетних",
                    },
                ],
            },
            {
                type: "text",
                gap: true,
                text: "Мы не собираем данные лиц младше 16 лет без согласия родителей или законных представителей. Если такие данные были предоставлены, они будут удалены.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "13. Автоматизированные решения",
                    },
                ],
            },
            {
                type: "text",
                text: "Мы не принимаем решений с юридическими последствиями на основе автоматизированной обработки.",
            },
            {
                type: "text",
                gap: true,
                text: "Инструменты аналитики (Google Analytics, Meta Pixel) используются только для статистики.",
            },
            {
                type: "text",
                gap: true,
                text: [
                    {
                        bold: true,
                        subtitle: true,
                        value: "14. Контакты",
                    },
                ],
            },
            {
                type: "text",
                text: [
                    {
                        bold: true,
                        value: "ООО «Британский офтальмологический центр»",
                    },
                ],
            },
            {
                type: "text",
                text: "Адрес: г. Киев, ул. Крутой спуск, 3а",
            },
            {
                type: "text",
                text: [
                    { value: "Электронная почта:" },
                    {
                        bold: true,
                        value: "kiev@eyes.ua",
                    },
                ],
            },
            {
                type: "text",
                text: "Телефон: 0 800 507 077",
            },
        ],
    },
};
