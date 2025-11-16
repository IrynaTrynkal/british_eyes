import { defineArrayMember, defineField } from "sanity";

import { AccentText } from "@/sanity/components/AccentText";
import { BlackText } from "@/sanity/components/BlackText";
import { GreyText } from "@/sanity/components/GreyText";
import { MediumText } from "@/sanity/components/MediumText";
import { Subtitle } from "@/sanity/components/Subtitle";

export const portableTextType = defineField({
    name: "portableText",
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
                ],
                annotations: [],
            },
        }),
    ],
});
