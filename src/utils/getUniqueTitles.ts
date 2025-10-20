import { PriceBlockType } from "@/components/assets/priceList";
import { LocaleType } from "@/types/LocaleType";

export function getUniqueTitles(
    priceList: PriceBlockType[],
    locale: LocaleType
) {
    const seen = new Set<string>();

    return priceList
        .map(item => ({
            title: item.title[locale],
            key: item.key,
        }))
        .filter(item => {
            if (seen.has(item.title)) return false;
            seen.add(item.title);
            return true;
        });
}
