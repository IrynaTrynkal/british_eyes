import { defineType } from "sanity";

export const servicesKey = defineType({
    name: "servicesKey",
    title: "Ключ послуги",
    type: "string",
    options: {
        list: [
            {
                title: "Лазерна корекція зору",
                value: "lazerna-korekcziya-zoru",
            },
            { title: "Перевірка зору", value: "perevirka-zoru" },
            { title: "Лікування катаракти", value: "likuvannya-katarakti" },
            { title: "Синдром сухого ока", value: "syndrom-sukhoho-oka" },
            { title: "Дитяче відділення", value: "dityache-viddilennya" },
            {
                title: "Лікування кератоконуса",
                value: "likuvannya-keratokonusa",
            },
            {
                title: "Лазерне лікування захворювань ока",
                value: "lazerne-likuvannya-zahvoryuvan-oka",
            },
            {
                title: "Рефракційна лінсектомія",
                value: "refrakczijna-lensektomiya",
            },
            {
                title: "Вітреоретинальна хірургія",
                value: "vitreoretinalna-hirurgiya",
            },
            {
                title: "Інтравітреальні ін’єкції",
                value: "intravitrealni-inekczii",
            },
            {
                title: "Хірургічне лікування глаукоми",
                value: "hirurgichne-likuvannya-glaukomi",
            },
            { title: "Лікування косоокості", value: "likuvannya-kosookosti" },
            {
                title: "Хірургія повік і кон’юнктиви",
                value: "hirurgiya-povik-i-konyunktivi",
            },
            {
                title: "Анестезіологічний посібник",
                value: "anesteziologichnij-posibnik",
            },
            { title: "Ксенотерапія", value: "ksenonoterapiya" },
        ],
    },
});
