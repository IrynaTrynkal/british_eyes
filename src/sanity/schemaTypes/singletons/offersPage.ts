import { FcPaid } from "react-icons/fc";
import { defineArrayMember, defineField } from "sanity";

const TITLE = "Акції";

export const offersPageType = defineField({
    name: "offersPage",
    title: TITLE,
    icon: FcPaid,
    type: "document",
    fields: [
        defineField({
            name: "discountsData",
            type: "array",
            of: [
                defineArrayMember({
                    type: "discountData",
                }),
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
