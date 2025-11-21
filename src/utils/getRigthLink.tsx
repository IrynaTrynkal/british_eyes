import { servicesList } from "@/components/assets/menu";
import { LocaleType } from "@/types/LocaleType";

export const getLink = (key: string | undefined, locale: LocaleType) => {
    switch (key) {
        case "clinic-management":
        case "childrens-ophthalmologists":
        case "consultation-and-diagnostic-ophthalmologists":
        case "doctors-anesthesiologists":
        case "ophthalmic-surgeons":
            return `/oftalmolohy?department=${key}&page=1`;
    }
    const service = servicesList.find(s => s.key === key);
    if (service) {
        return `/posluhy/${service.slug[locale]}`;
    }

    return "#";
};
