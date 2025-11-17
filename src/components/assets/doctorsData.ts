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
