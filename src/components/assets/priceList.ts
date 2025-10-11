import { ServicesKeyType } from "./menu";

export type DescriptionType = {
    list?: boolean;
    text: string | string[];
    greenText?: string;
};

export type PriceItemType = {
    price: number;
    discountPrice?: number;
    initialСost?: boolean;
    new?: boolean;
    data?: {
        uk: {
            name: string;
            description?: DescriptionType[];
        };
        en: { name: string; description?: DescriptionType[] };
        ru: { name: string; description?: DescriptionType[] };
    };
};

export type PriceBlockType = {
    title: {
        uk: string;
        en: string;
        ru: string;
    };
    additionalGreenText?: {
        uk: string;
        en: string;
        ru: string;
    };
    key: ServicesKeyType;
    linkToPage?: string;
    list: PriceItemType[];
};

export const priceList: PriceBlockType[] = [
    {
        key: "perevirka-zoru",
        title: {
            uk: "Діагностика зору",
            ru: "Диагностика зрения",
            en: "Vision diagnostics",
        },
        linkToPage: "/poslugy/perevirka-zoru",
        list: [
            {
                price: 2150,
                discountPrice: 950,
                data: {
                    uk: {
                        name: "Комплексний огляд",
                        description: [
                            {
                                text: "включені всі обстеження на офтальмологічних приладах і консультація лікаря з оглядом очного дна (тривалість до двох годин)",
                            },
                        ],
                    },
                    en: {
                        name: "Comprehensive review",
                        description: [
                            {
                                text: "all examinations using ophthalmological devices and a doctor's consultation with an examination of the fundus of the eye are included (duration up to two hours)",
                            },
                        ],
                    },
                    ru: {
                        name: "Комплексный обзор",
                        description: [
                            {
                                text: "включены все обследования на офтальмологических приборах и консультация врача с осмотром глазного дна (длительность до двух часов)",
                            },
                        ],
                    },
                },
            },
            {
                price: 3600,
                data: {
                    uk: {
                        name: "Скринінг ураження очей при діабеті",
                        description: [
                            {
                                text: "включені всі обстеження на офтальмологічних приладах, консультація лікаря з оглядом очного дна, а також комплексна оптична когрентна томографія та фотофіксація очного дна обох очей",
                            },
                        ],
                    },
                    en: {
                        name: "Screening for diabetic eye disease",
                        description: [
                            {
                                text: "all examinations using ophthalmological devices, a doctor's consultation with an examination of the fundus, as well as comprehensive optical coherence tomography and photofixation of the fundus of both eyes are included",
                            },
                        ],
                    },
                    ru: {
                        name: "Скрининг поражения глаз при диабете",
                        description: [
                            {
                                text: "включены все обследования на офтальмологических приборах, консультация врача с осмотром глазного дна, а также комплексная оптическая когрентная томография и фотофиксация глазного дна обоих глаз",
                            },
                        ],
                    },
                },
            },
            {
                price: 5300,
                data: {
                    uk: {
                        name: "Комплексний огляд з додатковим сервісом",
                        description: [
                            {
                                greenText:
                                    "проводиться на окремій діагностичній лінії",
                                text: "включені всі обстеження на офтальмологічних приладах, консультація лікаря з оглядом очного дна, а також комплексна оптична когрентна томографія та фотофіксація очного дна обох очей",
                            },
                        ],
                    },
                    en: {
                        name: "Comprehensive inspection with additional service",
                        description: [
                            {
                                greenText:
                                    "is carried out on a separate diagnostic line",
                                text: "all examinations using ophthalmological devices, a doctor's consultation with an examination of the fundus, as well as comprehensive optical coherence tomography and photofixation of the fundus of both eyes are included",
                            },
                        ],
                    },
                    ru: {
                        name: "Комплексный обзор с дополнительным сервисом",
                        description: [
                            {
                                greenText:
                                    "проводится на отдельной диагностической линии",
                                text: "включены все обследования на офтальмологических приборах, консультация врача с осмотром глазного дна, а также комплексная оптическая когрентная томография и фотофиксация глазного дна обоих глаз",
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        key: "lazerna-korekcziya-zoru",
        title: {
            uk: "Лазерна корекція зору",
            ru: "Лазерная коррекция зрения",
            en: "Laser vision correction",
        },
        linkToPage: "/poslugy/lazerna-korekcziya-zoru",
        list: [
            {
                price: 20950,
                discountPrice: 14950,
                new: true,
                data: {
                    uk: {
                        name: "Фоторефракційна кератектомія (PRK) по стандартній програмі - одне око",
                    },
                    en: {
                        name: "Photorefractive keratectomy (PRK) according to the standard program - one eye",
                    },
                    ru: {
                        name: "Фоторефракционная кератектомия (PRK) по стандартной программе - один глаз",
                    },
                },
            },
            {
                price: 20950,
                discountPrice: 14950,
                new: true,
                data: {
                    uk: {
                        name: "Фототерапевтична кератектомія (PТK) За спортивною номограмою - одне око",
                    },
                    en: {
                        name: "Phototherapeutic keratectomy (PTK) According to the sports nomogram - one eye",
                    },
                    ru: {
                        name: "Фототерапевтическая кератэктомия (PTK) По спортивной номограмме - один глаз",
                    },
                },
            },
            {
                price: 20950,
                discountPrice: 14950,
                new: true,
                data: {
                    uk: {
                        name: "Лазерна корекція зору методом Stream Light - одне око",
                    },
                    en: {
                        name: "Laser vision correction using the Stream Light method - one eye",
                    },
                    ru: {
                        name: "Лазерная коррекция зрения методом Stream Light – один глаз",
                    },
                },
            },
            {
                price: 20950,
                discountPrice: 14950,
                new: true,
                data: {
                    uk: {
                        name: "Лазерна корекція зору LASEK (асферична програма Wavefront Optimized) - одне око",
                    },
                    en: {
                        name: "Laser vision correction LASEK (aspheric Wavefront Optimized program) - one eye",
                    },
                    ru: {
                        name: "Лазерная коррекция зрения LASEK (асферическая программа Wavefront Optimized) – один глаз",
                    },
                },
            },
            {
                price: 20950,
                discountPrice: 14950,
                new: true,
                data: {
                    uk: {
                        name: "Лазерна корекція зору LASEK методом CustomQ - одне око",
                    },
                    en: {
                        name: "Laser vision correction LASEK using the CustomQ method - one eye",
                    },
                    ru: {
                        name: "Лазерная коррекция зрения LASEK методом CustomQ – один глаз",
                    },
                },
            },
            {
                price: 20950,
                discountPrice: 14950,
                new: true,
                data: {
                    uk: {
                        name: "Лазерна корекція зору LASІK (асферична програма Wavefront Optimized) - одне око",
                    },
                    en: {
                        name: "Laser vision correction LASIK (aspheric Wavefront Optimized program) - one eye",
                    },
                    ru: {
                        name: "Лазерная коррекция зрения LASIK (асферическая программа Wavefront Optimized) – один глаз",
                    },
                },
            },
            {
                price: 20950,
                discountPrice: 14950,
                new: true,
                data: {
                    uk: {
                        name: "Лазерна корекція зору LASIK двох очей - 1 категорія складності",
                    },
                    en: {
                        name: "Laser vision correction LASIK of both eyes - 1st category of complexity",
                    },
                    ru: {
                        name: "Лазерная коррекция зрения LASIK двух глаз – 1 категория сложности",
                    },
                },
            },
            {
                price: 20950,
                discountPrice: 14950,
                new: true,
                data: {
                    uk: {
                        name: "Лазерна корекція зору LASIK двох очей - 2 категорія складності",
                    },
                    en: {
                        name: "LASIK laser vision correction of both eyes - 2nd category of complexity",
                    },
                    ru: {
                        name: "Лазерная коррекция зрения LASIK двух глаз – 2 категория сложности",
                    },
                },
            },
            {
                price: 1300,
                data: {
                    uk: {
                        name: "Встановлення контактної МКЛ при ФРК для безболісного ефекту - одне око",
                    },
                    en: {
                        name: "Installation of contact lens for PRK for a painless effect - one eye",
                    },
                    ru: {
                        name: "Установка контактной МКЛ при ФРК для безболезненного эффекта – один глаз",
                    },
                },
            },
        ],
    },
    {
        key: "likuvannya-katarakti",
        title: {
            uk: "Видалення катаракти та інтраокулярна корекція",
            ru: "Удаление катаракты и интраокулярная коррекция",
            en: "Cataract removal and intraocular correction",
        },
        linkToPage: "/poslugy/likuvannya-katarakti",
        list: [
            {
                price: 33150,
                discountPrice: 27750,
                new: true,
                initialСost: true,
                data: {
                    uk: {
                        name: "Видалення катаракти",
                        description: [
                            { text: "В неускладнених випадках" },
                            {
                                list: true,
                                text: [
                                    "факоемульсифікація катаракти (рефракційна ленсектомія) з імплантацією м’якої ІОЛ",
                                    "включені послуги анестезіолога",
                                    "Метод «англійський водний потік iQ-5 minutes»",
                                ],
                            },
                        ],
                    },
                    en: {
                        name: "Cataract removal",
                        description: [
                            { text: "In uncomplicated cases" },
                            {
                                list: true,
                                text: [
                                    "phacoemulsification of cataract (refractive lensectomy) with implantation of a soft IOL",
                                    "anesthesiologist services included",
                                    "Method “English water flow iQ-5 minutes”",
                                ],
                            },
                        ],
                    },
                    ru: {
                        name: "Удаление катаракты",
                        description: [
                            { text: "В неосложненных случаях" },
                            {
                                list: true,
                                text: [
                                    "факоэмульсификация катаракты (рефракционная ленсэктомия) с имплантацией мягкой ИОЛ",
                                    "включены услуги анестезиолога",
                                    "Метод «английский водный поток iQ-5 minutes»",
                                ],
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        key: "syndrom-sukhoho-oka",
        title: {
            uk: "Синдром сухого ока",
            ru: "Синдром сухого глаза",
            en: "Dry eye syndrome",
        },
        linkToPage: "/poslugy/syndrom-sukhoho-oka",
        list: [
            {
                price: 2350,
                discountPrice: 950,
                data: {
                    uk: {
                        name: "Діагностика та консультація",
                        description: [
                            {
                                text: "включена комплексна діагностика стану слізної плівки та залоз повік",
                            },
                        ],
                    },
                    en: {
                        name: "Diagnostics and consultation",
                        description: [
                            {
                                text: "includes comprehensive diagnostics of the condition of the tear film and eyelid glands",
                            },
                        ],
                    },
                    ru: {
                        name: "Диагностика и консультация",
                        description: [
                            {
                                text: "включена комплексная диагностика состояния слезной пленки и желез век",
                            },
                        ],
                    },
                },
            },
            {
                price: 5200,
                discountPrice: 3500,
                data: {
                    uk: {
                        name: "Лікування IPL-терапіяи",
                        description: [
                            {
                                text: "лікування проводиться на новому обладнанні 2026 модельного року",
                            },
                        ],
                    },
                    en: {
                        name: "IPL therapy treatment",
                        description: [
                            {
                                text: "treatment is performed on new equipment from the 2026 model year",
                            },
                        ],
                    },
                    ru: {
                        name: "Лечение IPL-терапия",
                        description: [
                            {
                                text: "лечение проводится на новом оборудовании 2026 модельного года",
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        key: "vitreoretinalna-hirurgiya",
        title: {
            uk: "Вітреоретинальна хірургія",
            ru: "Витреоретинальная хирургия",
            en: "Vitreoretinal surgery",
        },
        linkToPage: "/poslugy/vitreoretinalna-hirurgiya",
        list: [
            {
                price: 49100,
                initialСost: true,
                data: {
                    uk: {
                        name: "Вітреоретинальна хірургія",
                        description: [
                            {
                                text: "Відшарування сітківки, діабетична ретинопатія, крововиливи в склоподібне тіло, наслідки травм ока, макулярное отвір сітківки, епімакулярная мембрана сітківки, макулярної набряк, вітреомакулярний тракційний синдром, помутніння склоподібного тіла внаслідок запалення, вродженої патології, дислокація (вивих) кришталика в склоподібне тіло, ускладнення після хірургії переднього відрізка ока.",
                            },
                        ],
                    },
                    en: {
                        name: "Vitreoretinal surgery",
                        description: [
                            {
                                text: "Retinal detachment, diabetic retinopathy, vitreous hemorrhage, consequences of eye injuries, macular hole, epimacular retinal membrane, macular edema, vitreomacular traction syndrome, vitreous opacification due to inflammation, congenital pathology, dislocation (dislocation) of the lens into the vitreous, complications after surgery of the anterior segment of the eye.",
                            },
                        ],
                    },
                    ru: {
                        name: "Витреоретинальная хирургия",
                        description: [
                            {
                                text: "Отслойка сетчатки, диабетическая ретинопатия, кровоизлияния в стекловидное тело, последствия травм глаза, макулярное отверстие сетчатки, эпимакулярная мембрана сетчатки, макулярный отек, витреомакулярный тракционный синдром, помутнение стекловидного тела вследствие воспаления, врожденной патологии. тело, осложнение после хирургии переднего отрезка глаза.",
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        key: "likuvannya-kosookosti",
        title: {
            uk: "Лікування косоокості",
            ru: "Лечение косоглазия",
            en: "Strabismus Treatment",
        },
        linkToPage: "/poslugy/likuvannya-kosookosti",
        list: [
            {
                price: 13500,
                initialСost: true,
                new: true,
                data: {
                    uk: {
                        name: "Хірургічне лікування косоокості",
                        description: [
                            {
                                text: "метод «регульованих швів»",
                            },
                        ],
                    },
                    en: {
                        name: "Surgical Treatment of Strabismus",
                        description: [
                            {
                                text: "‘Adjustable Sutures’ Method",
                            },
                        ],
                    },

                    ru: {
                        name: "Хирургическое лечение косоглазия",
                        description: [
                            {
                                text: "метод «регулируемых швов»",
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        key: "refrakczijna-lensektomiya",
        title: {
            uk: "Рефракційна ленсектомія",
            ru: "Рефракционная ленсэктомия",
            en: "Refractive lensectomy",
        },
        linkToPage: "/poslugy/refrakczijna-lensektomiya",
        list: [
            {
                price: 49100,
                discountPrice: 34700,
                initialСost: true,
                data: {
                    uk: {
                        name: "Рефракційна заміна кришталика",
                    },
                    en: {
                        name: "Refractive Lens Exchange",
                    },
                    ru: {
                        name: "Рефракционная замена хрусталика",
                    },
                },
            },
        ],
    },
];
