import { defineQuery } from "next-sanity";

export const pricesPageQuery = defineQuery(`
    *[_type == "pricesPage" && !(_id in path("drafts.**"))][0]
 { "blocks": priceBlocks[]
 {servicesKey, "servicesName": servicesName[_key == $language][0].value, linkToPage, 
   "list":list[]{new, price, discountPrice, specialPrice,
                 "serviceName": serviceName[_key == $language][0].value,
                 "serviceDescription":serviceDescription[_key == $language][0].value}, 
   "servicesDescription":servicesDescription[_key == $language][0].value }}`);
