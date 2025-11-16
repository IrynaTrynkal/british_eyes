import { FcOk } from "react-icons/fc";
import { defineField, defineType } from "sanity";

import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";

export const priceItemType = defineType({
    name: "priceItem",
    type: "object",
    options: {
        collapsed: true,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "serviceName",
            title: "Назва послуги",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "price",
            title: "Звичайна вартість",
            type: "number",
        }),
        defineField({
            name: "lowerPriceLimit",
            title: "Ціна «від»?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "discountPrice",
            title: "Ціна зі знижкою",
            type: "number",
        }),
        defineField({
            name: "lowerDiscountLimit",
            title: "Знижка «від»?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "specialPrice",
            title: "Чи потрібен зеленим підпис що це Спеціальна ціна?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "new",
            title: "Чи потрібен сірим підпис що це Нові технології?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "serviceDescription",
            title: "Опис послуги (за необхідністю)",
            type: "internationalizedArrayPortableText",
        }),
    ],
    preview: {
        select: {
            nameUk: "serviceName",
            price: "price",
            discount: "discountPrice",
        },
        prepare(selection) {
            const { nameUk, price, discount } = selection;
            const titleUK = getTitleFromIntArraysString(nameUk);

            let subtitle = "";
            if (discount) {
                subtitle = `${price ?? "—"} → ${discount}`;
            } else if (price) {
                subtitle = `${price}`;
            } else {
                subtitle = "Без ціни";
            }

            return {
                media: FcOk,
                title: titleUK,
                subtitle,
            };
        },
    },
});
