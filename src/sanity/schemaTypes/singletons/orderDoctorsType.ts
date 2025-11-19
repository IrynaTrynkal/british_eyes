import { FcDatabase } from "react-icons/fc";
import { defineField } from "sanity";

const TITLE = "Порядок рендеру лікарів";

export const orderDoctorsType = defineField({
    name: "orderDoctors",
    title: TITLE,
    icon: FcDatabase,
    type: "document",
    fields: [
        defineField({
            name: "doctors",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "doctor" }],
                    options: {
                        disableNew: true,
                        filter: async ({ document }) => {
                            const addedDoctors: string[] = Array.isArray(
                                (document as any).doctors
                            )
                                ? (document as any).doctors.map(
                                      (d: any) => d._ref
                                  )
                                : [];

                            return {
                                filter: "!(_id in $added)",
                                params: { added: addedDoctors },
                            };
                        },
                    },
                },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: TITLE,
            };
        },
    },
});
