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

export const doctorsListQuery = defineQuery(`
    *[_type == "doctor" && !(_id in path("drafts.**"))]
{"name":name[_key == $language][0].value, "slug":slug.current, departments, services, 
  "position":position[_key == $language][0].value, "photo":photo, 
  experience, "specialization":specialization[_key == $language][0].value, 
  "education":education[_key == $language][0].value, "activity":activity[_key == $language][0].value, 
  "training":training[_key == $language][0].value, "conferences":conferences[_key == $language][0].value, 
  "about":about[_key == $language][0].value}`);

export const doctorQuery = defineQuery(`
    *[_type == "doctor" && slug.current == $slug][0]
{"name":name[_key == $language][0].value, "slug":slug.current, departments, services, 
  "position":position[_key == $language][0].value, "photo":photo, 
  experience, "specialization":specialization[_key == $language][0].value, 
  "education":education[_key == $language][0].value, "activity":activity[_key == $language][0].value, 
  "training":training[_key == $language][0].value, "conferences":conferences[_key == $language][0].value, 
  "about":about[_key == $language][0].value}`);

export const blogsListQuery = defineQuery(`
     *[_type == "blog" && !(_id in path("drafts.**"))]{
   service, "title":title[_key == $language][0].value,
     "slug":slug.current, publication, "image":image.asset->url,
     "shortText":shortText[_key == $language][0].value,
     "content": content[_key == $language][0].value}`);

export const blogQuery = defineQuery(`
      *[_type == "blog" && slug.current == $slug][0]{
   service, "title":title[_key == $language][0].value,
     publication, "slug":slug.current, "image":image.asset->url,
     "shortText":shortText[_key == $language][0].value,
     "content": content[_key == $language][0].value}`);

export const blogShortByServiceQuery = defineQuery(`
      *[_type == "blog" && service == $service && slug.current != $slug]{
   service, "title":title[_key == $language][0].value,
     publication, "slug":slug.current, "image":image.asset->url,
     "content": content[_key == $language][0].value,
     "shortText":shortText[_key == $language][0].value
 }`);

export const doctorsOrderQuery = defineQuery(`
*[_type == "orderDoctors"][0].
  doctors[]->{
    _id,
  "name":name[_key == $language][0].value, "slug":slug.current, departments, services, 
  "position":position[_key == $language][0].value, "photo":photo, 
  experience, "specialization":specialization[_key == $language][0].value, 
  "education":education[_key == $language][0].value, "activity":activity[_key == $language][0].value, 
  "training":training[_key == $language][0].value, "conferences":conferences[_key == $language][0].value, 
  "about":about[_key == $language][0].value
  }`);

export const blogMetaSlugsQuery = defineQuery(`
      *[_type == "blog" && !(_id in path("drafts.**"))].slug.current
`);
export const doctorMetaSlugsQuery = defineQuery(`
      *[_type == "doctor" && !(_id in path("drafts.**"))].slug.current
`);
