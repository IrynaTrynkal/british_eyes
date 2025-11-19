import {
    ArrayDefinition,
    DocumentDefinition,
    ObjectDefinition,
    type SchemaTypeDefinition,
    StringDefinition,
} from "sanity";

import { portableTextAllType } from "./arrays/portableTextAllType";
import { portableTextType } from "./arrays/portableTextType";
import { departmentsKeyType } from "./fields/departmentsKey";
import { servicesKey } from "./fields/servicesKey";
import { discountDataType } from "./objects/discountDataType";
import { discountFullDataType } from "./objects/discountFullDataType";
import { discountShortDataType } from "./objects/discountShortDataType";
import { priceBlockType } from "./objects/priceBlockType";
import { priceItemType } from "./objects/priceItemType";
import { blogPage } from "./singletons/blogPage";
import { doctorPage } from "./singletons/doctorPage";
import { offersPageType } from "./singletons/offersPage";
import { orderDoctorsType } from "./singletons/orderDoctorsType";
import { pricesPageType } from "./singletons/pricePageType";

const singletons: DocumentDefinition[] = [
    pricesPageType,
    offersPageType,
    doctorPage,
    blogPage,
    orderDoctorsType,
];
const objects: ObjectDefinition[] = [
    priceItemType,
    discountShortDataType,
    discountFullDataType,
    discountDataType,
    priceBlockType,
];
const fields: StringDefinition[] = [servicesKey, departmentsKeyType];
const arrays: ArrayDefinition[] = [portableTextType, portableTextAllType];

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [...singletons, ...objects, ...arrays, ...fields],
};
