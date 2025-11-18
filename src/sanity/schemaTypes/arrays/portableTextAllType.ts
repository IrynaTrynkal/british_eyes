import { defineArrayMember, defineField } from "sanity";

import { AccentText } from "@/sanity/components/AccentText";
import { BlackText } from "@/sanity/components/BlackText";
import { BottomSpace } from "@/sanity/components/BottomSpace";
import { GreyText } from "@/sanity/components/GreyText";
import { MediumText } from "@/sanity/components/MediumText";
import { Subtitle } from "@/sanity/components/Subtitle";

export const portableTextAllType = defineField({
    name: "portableTextAll",
    title: "Custom Portable Text",
    type: "array",
    of: [
        defineArrayMember({
            type: "block",
            styles: [],
            lists: [
                { title: "З крапками", value: "bullet" },
                { title: "Нумерований", value: "number" },
            ],
            marks: {
                decorators: [
                    {
                        title: "Чорний",
                        value: "black",
                        icon: () => "⚫️",
                        component: BlackText,
                    },
                    {
                        title: "Сірий",
                        value: "grey",
                        icon: () => "⚪",
                        component: GreyText,
                    },
                    {
                        title: "Зелений",
                        value: "emerald",
                        icon: () => "🟢",
                        component: AccentText,
                    },
                    {
                        title: "Підзаголовок",
                        value: "subtitle",
                        icon: () => "UP",
                        component: Subtitle,
                    },
                    {
                        title: "Жирний",
                        value: "bold",
                        icon: () => "B",
                        component: MediumText,
                    },
                    {
                        title: "Додати відступ знизу",
                        value: "bottomSpace",
                        icon: () => "↡",
                        component: BottomSpace,
                    },
                ],
                annotations: [
                    {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                            {
                                name: "href",
                                type: "string",
                                description:
                                    "Якщо посилання по сайту, вказуйте починаючи з /, якщо посилання на інший сайт, то з https://",
                                title: "URL",
                            },
                            {
                                name: "openInNewTab",
                                type: "boolean",
                                title: "Відкрити у новій вкладці",
                                initialValue: false,
                            },
                        ],
                    },
                ],
            },
        }),
        defineArrayMember({
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "ALT текст",
                    type: "string",
                }),
                defineField({
                    name: "maxH",
                    title: "Максимальна висота",
                    type: "string",
                    description: "Наприклад: prepc:max-h-[500px] max-h-[400px]",
                }),
            ],
        }),
        defineArrayMember({
            type: "object",
            name: "table",
            title: "Таблиця",
            fields: [
                defineField({
                    name: "gap",
                    type: "boolean",
                    title: "Додати відступ знизу?",
                }),
                defineField({
                    name: "headers",
                    type: "array",
                    title: "Заголовки колонок",
                    of: [{ type: "string" }],
                }),
                defineField({
                    name: "rows",
                    type: "array",
                    title: "Рядки",
                    of: [
                        defineArrayMember({
                            type: "object",
                            name: "row",
                            title: "Рядок",
                            fields: [
                                defineField({
                                    name: "cells",
                                    type: "array",
                                    title: "Клітинки",
                                    of: [{ type: "string" }],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    ],
});
