import { FcDatabase } from "react-icons/fc";
import { defineType } from "sanity";

const doctorsOrderType = defineType({
    name: "doctorsOrder",
    title: "Порядок лікарів",
    type: "document",
    icon: FcDatabase,
    fields: [
        {
            name: "title",
            title: "Назва",
            type: "string",
            initialValue: "Порядок рендеру лікарів",
        },
        {
            name: "doctors",
            title: "Лікарі",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "doctor" }],
                    options: {
                        disableNew: true,
                    },
                },
            ],
            options: {
                sortable: true,
            },
        },
    ],
});

export default doctorsOrderType;
