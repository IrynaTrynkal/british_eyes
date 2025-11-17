import { defineType } from "sanity";

export const departmentsKeyType = defineType({
    name: "departmentsKey",
    title: "Ключ до відділення",
    type: "string",
    options: {
        list: [
            {
                title: "Керівництво клініки",
                value: "clinic-management",
            },
            {
                title: "Дитячий офтальмолог",
                value: "childrens-ophthalmologists",
            },
            {
                title: "Консультативно-діагностичне відділення",
                value: "consultation-and-diagnostic-ophthalmologists",
            },
            { title: "Лікар-анестезіолог", value: "doctors-anesthesiologists" },
            { title: "Офтальмолог хірург", value: "ophthalmic-surgeons" },
        ],
    },
});
