import { defineField, defineType } from "sanity";

const TITLE = "Розгорнутий опис знижки";

export const discountFullDataType = defineType({
    name: "discountFullData",
    title: TITLE,
    type: "object",
    options: {
        collapsed: true,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "fractionUp",
            title: "Верхній текст для компонента-дріб",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "fractionDown",
            title: "Нижній текст для компонента-дріб",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "textLeft",
            title: "Невеликий текст зліва під заголовком",
            description: "Рекомендовано до 160 символів з пробілами включно.",
            type: "internationalizedArrayString",
        }),
        defineField({
            name: "textRight",
            title: "Короткий текст справа під заголовком",
            description:
                "Зазвичай список Що входить у знижку або Що покрищить послуга. Рекомендовано до 6 пунктів та заголовок.",
            type: "internationalizedArrayPortableText",
        }),
        defineField({
            name: "discountFullText",
            title: "Повний опис знижки",
            type: "internationalizedArrayPortableTextAll",
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
