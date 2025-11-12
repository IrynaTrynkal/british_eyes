import { FcViewDetails } from "react-icons/fc";
import { defineArrayMember, defineField } from "sanity";

const TITLE = "Прайс";

export const pricesPageType = defineField({
    name: "pricesPage",
    title: TITLE,
    icon: FcViewDetails,
    type: "document",
    fields: [
        defineField({
            name: "priceBlocks",
            type: "array",
            of: [
                defineArrayMember({
                    type: "priceBlock",
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
