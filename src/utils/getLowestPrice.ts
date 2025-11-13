export function getLowestPrice(
    priceItem?: Array<{
        price: number | null;
        lowerPriceLimit: boolean | null;
        discountPrice: number | null;
        lowerDiscountLimit: boolean | null;
    }> | null
) {
    if (!priceItem || priceItem.length === 0) {
        return {
            price: null,
            discountPrice: null,
            lowerPriceLimit: null,
            lowerDiscountLimit: null,
        };
    }

    const valid = priceItem.find(
        item => item.price != null || item.discountPrice != null
    );

    if (!valid) {
        return {
            price: null,
            discountPrice: null,
            lowerPriceLimit: null,
            lowerDiscountLimit: null,
        };
    }

    return {
        price: valid.price ?? null,
        discountPrice: valid.discountPrice ?? null,
        lowerPriceLimit: valid.lowerPriceLimit ?? null,
        lowerDiscountLimit: valid.lowerDiscountLimit ?? null,
    };
}
