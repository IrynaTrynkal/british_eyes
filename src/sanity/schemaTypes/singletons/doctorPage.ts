import { FcIdea } from "react-icons/fc";
import { defineField, defineType } from "sanity";

import { SLUG_MAX_LENGTH } from "@/sanity/constants";
import { generateSlug } from "@/sanity/utils/generateSlug";
import { getTitleFromIntArraysString } from "@/sanity/utils/getTitle";
import { validateSlug } from "@/sanity/utils/validateSluge";

export const doctorPage = defineType({
    name: "doctor",
    title: "Лікарі",
    type: "document",
    icon: FcIdea,
    fields: [
        defineField({
            name: "name",
            type: "internationalizedArrayString",
            title: "Ім'я лікаря",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: doc => generateSlug(doc, "name", SLUG_MAX_LENGTH),
                slugify: input => input,
            },
            validation: Rule =>
                Rule.required().custom(validateSlug(SLUG_MAX_LENGTH)),
        }),

        defineField({
            name: "departments",
            type: "array",
            title: "До яких відділів відноситься лікар?",
            of: [{ type: "departmentsKey" }],
            description:
                "Цей список лише для фільтрації, відображатись на сайті не буде, порядок не важливий",
        }),
        defineField({
            name: "services",
            type: "array",
            title: "Які послуги надає лікар?",
            of: [{ type: "servicesKey" }],
            description:
                "Цей список лише для фільтрації, відображатись на сайті не буде, порядок не важливий",
        }),
        defineField({
            name: "position",
            type: "internationalizedArrayPortableText",
            title: "Які посади займає лікар?",
            description:
                "Як буде написано, так і відобразиться на сайті. Наприклад: 'Головний лікар', 'Лікар-офтальмолог вищої категорії', 'Лікар-сурдолог вищої категорії' тощо.",
        }),
        defineField({
            name: "photo",
            type: "image",
            title: "Фото лікаря",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "experience",
            type: "string",
            title: "Стаж роботи",
            description:
                "В цьому полі вкажіть лише цифри, наприклад: '20.10.2012' або '2012'. Текст 'Стаж роботи з ..... року' буде додаватися автоматично.",
        }),
        defineField({
            name: "specialization",
            type: "internationalizedArrayPortableText",
            title: "Яка спеціалізація лікар?",
            description:
                "Як буде написано, так і відобразиться на сайті. Наприклад: 'рефракційна хірургія;', 'хірургічне лікування аномалії рефракції — короткозорості , астигматизму, далекозорості;' тощо.",
        }),
        defineField({
            name: "education",
            type: "internationalizedArrayPortableText",
            title: "Освіта лікаря",
        }),
        defineField({
            name: "activity",
            type: "internationalizedArrayPortableText",
            title: "Професійна діяльність",
        }),
        defineField({
            name: "training",
            type: "internationalizedArrayPortableText",
            title: "Підвищення кваліфікації",
        }),
        defineField({
            name: "conferences",
            type: "internationalizedArrayPortableText",
            title: "Участь в міжнародних та всеукраїнських конференціях",
        }),
        defineField({
            name: "about",
            type: "internationalizedArrayPortableTextAll",
            title: "Про лікаря",
        }),
    ],
    preview: {
        select: {
            name: "name",
            media: "photo",
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
