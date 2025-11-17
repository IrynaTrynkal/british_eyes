import { FcAdvertising } from "react-icons/fc";
import { defineField, defineType } from "sanity";

import { SLUG_MAX_LENGTH } from "@/sanity/constants";
import { generateSlug } from "@/sanity/utils/generateSlug";
import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";
import { validateSlug } from "@/sanity/utils/validateSluge";

export const blogPage = defineType({
    name: "blog",
    title: "Новини",
    type: "document",
    icon: FcAdvertising,
    fields: [
        defineField({
            name: "title",
            type: "internationalizedArrayString",
            title: "Заголовок статті",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: doc => generateSlug(doc, "title", SLUG_MAX_LENGTH),
                slugify: input => input,
            },
            validation: Rule =>
                Rule.required().custom(validateSlug(SLUG_MAX_LENGTH)),
        }),

        defineField({
            name: "service",
            type: "servicesKey",
            title: "До якої послуги відноситься стаття?",
        }),
        defineField({
            name: "publication",
            type: "date",
            title: "Дата публікації",
            options: {
                dateFormat: "DD.MM.YYYY",
            },
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Головна картинка статті для обкладинки",
            options: {
                hotspot: true,
            },
            description: "Картинка буде зверху зафарбована зеленим автоматично",
        }),
        defineField({
            name: "shortText",
            type: "internationalizedArrayString",
            title: "Короткий текст для анонсу статті",
            description:
                "Цей текст відображатиметься на картці статті. Рекомендується не більше 140 символів (зайве, відріжеться) і щоб це був текст першого абзацу статті.",
        }),
        defineField({
            name: "content",
            type: "internationalizedArrayPortableTextAll",
            title: "Сама стаття",
        }),
    ],
    preview: {
        select: {
            name: "title",
            media: "image",
        },
        prepare({ name, media }) {
            const title = getTitleFromIntArraysString(name);
            return {
                title,
                media,
            };
        },
    },
});
