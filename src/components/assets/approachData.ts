type ApproachProps = {
    uk: { title: string; text: string };
    ru: { title: string; text: string };
    en: { title: string; text: string };
};

export const approachList: ApproachProps[] = [
    {
        uk: {
            title: "точність діагнозу за одне відвідування",
            text: "У клініці зору Києва доступна комплексна апаратна перевірка зору із використанням сучасної техніки, яка дозволяє точно визначити стан очей за одне відвідування.",
        },
        ru: {
            title: "точность диагноза за одно посещение",
            text: "В клинике зрения Киева доступна комплексная аппаратная проверка зрения с использованием современного оборудования, которая позволяет точно определить состояние глаз за одно посещение.",
        },
        en: {
            title: "accurate diagnosis in a single visit",
            text: "At the Kyiv Vision Clinic, a comprehensive hardware eye examination is available using modern equipment, allowing for an accurate assessment of eye health in just one visit.",
        },
    },
    {
        uk: {
            title: "без черг і в комфортній обстановці",
            text: "Це особливо важливо для тих, хто шукає де пройти обстеження в окуліста, або хоче отримати консультацію окуліста без черг і в комфортній обстановці.",
        },
        ru: {
            title: "без очередей и в комфортной обстановке",
            text: "Это особенно важно для тех, кто ищет, где пройти обследование у окулиста, или хочет получить консультацию без очередей и в комфортной обстановке.",
        },
        en: {
            title: "without queues and in a comfortable setting",
            text: "This is especially important for those looking to undergo an eye examination or wishing to receive an ophthalmologist's consultation without queues and in a comfortable environment.",
        },
    },
    {
        uk: {
            title: "швидкість процедури",
            text: "Процедура займає трохи часу, але може врятувати зір довгі роки.",
        },
        ru: {
            title: "скорость процедуры",
            text: "Процедура занимает немного времени, но может сохранить зрение на долгие годы.",
        },
        en: {
            title: "procedure speed",
            text: "The procedure takes little time but can preserve vision for many years.",
        },
    },
];
