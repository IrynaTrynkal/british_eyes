import { defineArrayMember, defineField, defineType } from "sanity";

import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";

export const priceBlockType = defineType({
    name: "priceBlock",
    title: "Послуга і вартість",
    type: "object",
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
            name: "icon",
            title: "Іконка / зображення блоку",
            description:
                "Завантаж SVG, PNG або JPG — відображатиметься в превʼю.",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "list",
            type: "array",
            of: [
                defineArrayMember({
                    name: "priceItem",
                    type: "priceItem",
                }),
            ],
        }),
        defineField({
            name: "linkToPage",
            title: "Посилання на сторінку послуги (українська версія)",
            description:
                "Має починатись з /posluhy. Посилання краще скопіювати в адресному рядку в браузері.",
            type: "string",
        }),
        defineField({
            name: "servicesName",
            title: "Назва блоку послуг",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "servicesDescription",
            title: "Додатковий опис до блоку послуги (за необхідності)",
            type: "internationalizedArrayPortableText",
        }),
    ],
    preview: {
        select: {
            title: "servicesName",
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
