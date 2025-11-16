import { defineField, defineType } from "sanity";

import { DiscountIcon } from "@/sanity/components/DiscountIcon";
import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";

export const discountDataType = defineType({
    name: "discountData",
    title: "Акція",
    type: "object",
    icon: DiscountIcon,
    options: {
        collapsed: true,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "servicesKey",
            title: "Яка послуга?",
            type: "servicesKey",
        }),
        defineField({
            name: "title",
            title: "Заголовок знижки",
            description:
                "Рекомендовано до 45 символів з пробілами включно, а якщо акція преміум з додатковим текстом, то до 30.",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "discountShortData",
            type: "discountShortData",
        }),

        defineField({
            name: "discountFullData",
            type: "discountFullData",
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "icon",
        },
        prepare({ title, media }) {
            const requisiteTitle = getTitleFromIntArraysString(title);
            return {
                title: requisiteTitle,
                media,
            };
        },
    },
});
