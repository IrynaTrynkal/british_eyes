import {
    ArrayDefinition,
    DocumentDefinition,
    ObjectDefinition,
    type SchemaTypeDefinition,
    StringDefinition,
} from "sanity";

import { portableTextAllType } from "./arrays/portableTextAllType";
import { portableTextType } from "./arrays/portableTextType";
import { servicesKey } from "./fields/servicesKey";
import { discountDataType } from "./objects/discountDataType";
import { discountFullDataType } from "./objects/discountFullDataType";
import { discountShortDataType } from "./objects/discountShortDataType";
import { priceBlockType } from "./objects/priceBlockType";
import { priceItemType } from "./objects/priceItemType";
import { offersPageType } from "./singletons/offersPage";
import { pricesPageType } from "./singletons/pricePageType";

const singletons: DocumentDefinition[] = [pricesPageType, offersPageType];
const objects: ObjectDefinition[] = [
    priceItemType,
    discountShortDataType,
    discountFullDataType,
    discountDataType,
    priceBlockType,
];
const fields: StringDefinition[] = [servicesKey];
const arrays: ArrayDefinition[] = [portableTextType, portableTextAllType];

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [...singletons, ...objects, ...arrays, ...fields],
};
