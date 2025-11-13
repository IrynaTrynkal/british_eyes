import { PricesPageQueryResult } from "../../sanity.types";

export function getUniqueTitles(priceList: PricesPageQueryResult) {
    const seen = new Set<string>();
    if (!priceList) return [];
    return priceList
        .map(item => ({
            title: item.servicesName ?? "",
            key: item.servicesKey ?? "",
        }))
        .filter(item => {
            if (!item.title) return false;
            if (seen.has(item.title)) return false;
            seen.add(item.title);
            return true;
        });
}
