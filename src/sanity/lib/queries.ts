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

export const offersPageQuery = defineQuery(`
    *[_type == "offersPage" && !(_id in path("drafts.**"))][0].discountsData[]
{servicesKey, "title":title[_key == $language][0].value,
 discountFullData{"textRight":textRight[_key == $language][0].value, "textLeft":textLeft[_key == $language][0].value, 
                  "fractionDown":fractionDown[_key == $language][0].value, "fractionUp":fractionUp[_key == $language][0].value, 
                  "discountFullText":discountFullText[_key == $language][0].value}, 
 discountShortData{"bgimage":bgimage.asset->url, "icon":icon.asset->url, premium, "premiumText":premiumText[_key == $language][0].value, "shortText":shortText[_key == $language][0].value, period, cost, learnMore },}`);

export const offersShortQuery = defineQuery(`
    *[_type == "offersPage" && !(_id in path("drafts.**"))][0].discountsData[]
{servicesKey, "title":title[_key == $language][0].value,
 discountShortData{"bgimage":bgimage.asset->url, "icon":icon.asset->url, premium, "premiumText":premiumText[_key == $language][0].value, "shortText":shortText[_key == $language][0].value, period, cost, learnMore },}`);
