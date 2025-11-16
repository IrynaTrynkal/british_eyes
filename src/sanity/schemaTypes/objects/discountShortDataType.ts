import { defineField, defineType } from "sanity";

import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";

export const discountShortDataType = defineType({
    name: "discountShortData",
    title: "Короткі дані про знижку",
    type: "object",
    options: {
        collapsed: true,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "premium",
            type: "boolean",
            title: "Чи є ця знижка преміальною?",
            initialValue: false,
        }),
        defineField({
            name: "premiumText",
            title: "Текст преміальної знижки",
            description: "Рекомендовано до 60 символів з пробілами включно.",
            type: "internationalizedArrayString",
            hidden: ({ parent }) => !parent?.premium,
        }),
        defineField({
            name: "shortText",
            title: "Короткий текст знижки",
            description:
                "Буде відображатись на картці на головній сторінці. Рекомендовано до 100 символів з пробілами включно.",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "period",
            title: "Період дії знижки",
            description:
                "Рекомендовано писати у форматі: «DD.MM.YYYY». «До» додаватиметься автоматично. Якщо знижка безстрокова, залиште це поле порожнім.",
            type: "string",
        }),
        defineField({
            name: "icon",
            title: "Іконка/логотип до послуги зі знижкою",
            type: "image",
        }),
        defineField({
            name: "bgimage",
            title: "Фонове зображення для картки знижки",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "cost",
            title: "Вартість послуги зі знижкою, яка відображатиметься в картці",
            type: "number",
        }),
        defineField({
            name: "learnMore",
            title: "Кнопка 'Дізнатись більше'?",
            description:
                "Якщо увімкнено, на картці знижки на Головній сторінці буде відображатися кнопка 'Дізнатись більше' замість 'Записатись', яка вестиме на сторінку з усіма Акціями.",
            type: "boolean",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "shortText",
            subtitle: "period",
            text: "cost",
        },
        prepare({ title, subtitle, text }) {
            const requisiteTitle = getTitleFromIntArraysString(title);
            return {
                title: requisiteTitle,
                subtitle,
                text,
            };
        },
    },
});
