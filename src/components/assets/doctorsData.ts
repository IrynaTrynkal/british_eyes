export type DepartmentsType =
    | "clinic-management"
    | "childrens-ophthalmologists"
    | "consultation-and-diagnostic-ophthalmologists"
    | "doctors-anesthesiologists"
    | "ophthalmic-surgeons";

type DepartmentsDataType = {
    key: DepartmentsType;
    translations: {
        uk: string;
        en: string;
        ru: string;
    };
};
export const departments: DepartmentsDataType[] = [
    {
        key: "clinic-management",
        translations: {
            uk: "Керівництво клініки",
            en: "Clinic Management",
            ru: "Руководство клиники",
        },
    },
    {
        key: "consultation-and-diagnostic-ophthalmologists",
        translations: {
            uk: "Офтальмологи консультативно-діагностичного відділення",
            en: "Consultation and diagnostic ophthalmologists",
            ru: "Офтальмологи консультационно-диагностических отделений",
        },
    },
    {
        key: "childrens-ophthalmologists",
        translations: {
            uk: "Дитячі офтальмологи",
            en: "Children’s Ophthalmologists",
            ru: "Детские офтальмологи",
        },
    },

    {
        key: "doctors-anesthesiologists",
        translations: {
            uk: "Лікарі-анестезіологи",
            en: "Doctors anesthesiologists",
            ru: "Врачи анестезиологи",
        },
    },
    {
        key: "ophthalmic-surgeons",
        translations: {
            uk: "Хірурги офтальмологи",
            en: "Ophthalmic surgeons",
            ru: "Хирурги офтальмологи",
        },
    },
];

type LocaleDoctorProps = {
    slug: string;
    name: string;
    role: string;
};

export type DoctorProps = {
    image?: string;
    experience: number;
    departments: DepartmentsType[];
    uk: LocaleDoctorProps;
    ru: LocaleDoctorProps;
    en: LocaleDoctorProps;
};

export const doctorsData: DoctorProps[] = [
    {
        image: "/doctors/vitovskaya-oksana-petrovna.jpg",
        experience: 1988,
        departments: [
            "clinic-management",
            "ophthalmic-surgeons",
            "consultation-and-diagnostic-ophthalmologists",
        ],
        uk: {
            slug: "vitovska-oksana-petrivna",
            name: "Вітовська Оксана Петрівна",
            role: "Доктор медичних наук. Лікар вищої категорії. Науковий керівник клініки.",
        },
        ru: {
            slug: "vitovskaya-oksana-petrovna",
            name: "Витовская Оксана Петровна",
            role: "Доктор медицинских наук. Врач высшей категории. Научный руководитель клиники.",
        },
        en: {
            slug: "vitovska-oksana-petrivna",
            name: "Vitovska Oksana Petrivna",
            role: "Doctor of Medical Sciences. Doctor of the highest category. Scientific director of the clinic.",
        },
    },
    {
        image: "/doctors/zhikharev-anatoliy-yuryevich.webp",
        experience: 2012,
        departments: [
            "childrens-ophthalmologists",
            "consultation-and-diagnostic-ophthalmologists",
        ],
        uk: {
            slug: "zhiharev-anatolij-yurijovich",
            name: "Жихарєв Анатолій Юрійович",
            role: "Медичний директор. Лікар-офтальмохірург. рефракційний хірург, Експерт-ретинолог.",
        },
        ru: {
            slug: "zhikharev-anatoliy-yuryevich",
            name: "Жихарев Анатолий Юрьевич",
            role: "Медицинский директор. Врач-офтальмохирург, рефракционный хирург, Эксперт-ретинолог.",
        },
        en: {
            slug: "anatoly-yuryevich-zhiharev",
            name: "Anatoly Yuryevich Zhiharev",
            role: "Head of the consultative and diagnostic department. Ophthalmic Surgeon, Refractive Surgeon.",
        },
    },
    {
        image: "/doctors/dikunova-darya-vasilevna.webp",
        experience: 2012,
        departments: [
            "childrens-ophthalmologists",
            "ophthalmic-surgeons",
            "consultation-and-diagnostic-ophthalmologists",
        ],
        uk: {
            slug: "dikunova-darina-vasilivna",
            name: "Дікунова Дарина Василівна",
            role: "Завідуюча хірургічного відділення. Лікар-офтальмохірург. Офтальмохірург.",
        },
        ru: {
            slug: "dikunova-darya-vasilevna",
            name: "Дикунова Дарья Васильевна",
            role: "Заведующая хирургическим отделением. Врач-офтальмохирург. Офтальмохирург.",
        },
        en: {
            slug: "dikunova-darya-vasilevna",
            name: "Дикунова Дарья Васильевна",
            role: "Заведующая хирургическим отделением. Врач-офтальмохирург. Офтальмохирург.",
        },
    },
    {
        image: "/doctors/sus-yuliya-leonidivna.webp",
        experience: 2020,
        departments: [
            "clinic-management",
            "ophthalmic-surgeons",
            "consultation-and-diagnostic-ophthalmologists",
        ],
        uk: {
            slug: "sus-yuliya-leonidivna",
            name: "Сус Юлія Леонідівна",
            role: "Лікар-офтальмолог, Експерт-ретинолог.",
        },
        ru: {
            slug: "sus-yuliya-leonidivna",
            name: "Сус Юлия Леонидовна",
            role: "Врач-офтальмолог, Эксперт-ретинолог.",
        },
        en: {
            slug: "sus-yuliya-leonidivna",
            name: "Sus Yulia Leonidivna",
            role: "Ophthalmologist doctor.",
        },
    },
    {
        image: "/doctors/vitovskaya-oksana-petrovna.jpg",
        experience: 1988,
        departments: [
            "clinic-management",
            "consultation-and-diagnostic-ophthalmologists",
        ],
        uk: {
            slug: "vitovska-oksana-petrivna",
            name: "Вітовська Оксана Петрівна",
            role: "Доктор медичних наук. Лікар вищої категорії. Науковий керівник клініки.",
        },
        ru: {
            slug: "vitovskaya-oksana-petrovna",
            name: "Витовская Оксана Петровна",
            role: "Доктор медицинских наук. Врач высшей категории. Научный руководитель клиники.",
        },
        en: {
            slug: "vitovska-oksana-petrivna",
            name: "Vitovska Oksana ",
            role: "Doctor of Medical Sciences. Doctor of the highest category. Scientific director of the clinic.",
        },
    },
    {
        image: "/doctors/zhikharev-anatoliy-yuryevich.webp",
        experience: 2012,
        departments: [
            "consultation-and-diagnostic-ophthalmologists",
            "ophthalmic-surgeons",
        ],

        uk: {
            slug: "zhiharev-anatolij-yurijovich",
            name: "Жихарєв Анатолій Юрійович",
            role: "Медичний директор. Лікар-офтальмохірург. рефракційний хірург, Експерт-ретинолог.",
        },
        ru: {
            slug: "zhikharev-anatoliy-yuryevich",
            name: "Жихарев Анатолий Юрьевич",
            role: "Медицинский директор. Врач-офтальмохирург, рефракционный хирург, Эксперт-ретинолог.",
        },
        en: {
            slug: "anatoly-yuryevich-zhiharev",
            name: "Anatoly  Zhiharev",
            role: "Head of the consultative and diagnostic department. Ophthalmic Surgeon, Refractive Surgeon.",
        },
    },
    {
        image: "/doctors/dikunova-darya-vasilevna.webp",
        experience: 2012,
        departments: [
            "consultation-and-diagnostic-ophthalmologists",
            "ophthalmic-surgeons",
        ],

        uk: {
            slug: "dikunova-darina-vasilivna",
            name: "Дікунова Дарина Василівна",
            role: "Завідуюча хірургічного відділення. Лікар-офтальмохірург. Офтальмохірург.",
        },
        ru: {
            slug: "dikunova-darya-vasilevna",
            name: "Дикунова Дарья Васильевна",
            role: "Заведующая хирургическим отделением. Врач-офтальмохирург. Офтальмохирург.",
        },
        en: {
            slug: "dikunova-darya-vasilevna",
            name: "Дикунова Дарья ",
            role: "Заведующая хирургическим отделением. Врач-офтальмохирург. Офтальмохирург.",
        },
    },
    {
        image: "/doctors/sus-yuliya-leonidivna.webp",
        experience: 2020,
        departments: ["doctors-anesthesiologists", "ophthalmic-surgeons"],
        uk: {
            slug: "sus-yuliya-leonidivna",
            name: "Сус Юлія Леонідівна",
            role: "Лікар-офтальмолог, Експерт-ретинолог.",
        },
        ru: {
            slug: "sus-yuliya-leonidivna",
            name: "Сус Юлия Леонидовна",
            role: "Врач-офтальмолог, Эксперт-ретинолог.",
        },
        en: {
            slug: "sus-yuliya-leonidivna",
            name: "Sus Yulia ",
            role: "Ophthalmologist doctor.",
        },
    },
];
