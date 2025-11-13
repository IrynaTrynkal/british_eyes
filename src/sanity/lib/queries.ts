import { defineQuery } from "next-sanity";

export const pricesPageQuery = defineQuery(`
    *[_type == "pricesPage" && !(_id in path("drafts.**"))][0].priceBlocks[]
 {servicesKey, "servicesName": servicesName[_key == $language][0].value, linkToPage, 
   "list":list[]{new, price, lowerPriceLimit, discountPrice, lowerDiscountLimit, specialPrice,
                 "serviceName": serviceName[_key == $language][0].value,
                 "serviceDescription":serviceDescription[_key == $language][0].value}, 
   "servicesDescription":servicesDescription[_key == $language][0].value }`);

export const pricesShortQuery = defineQuery(`
    *[_type == "pricesPage" && !(_id in path("drafts.**"))][0].priceBlocks[]
 {servicesKey, 
   "list":list[]{price, lowerPriceLimit, discountPrice, lowerDiscountLimit}}`);
