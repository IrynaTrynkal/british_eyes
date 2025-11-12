import {
    ArrayDefinition,
    DocumentDefinition,
    ObjectDefinition,
    type SchemaTypeDefinition,
    StringDefinition,
} from "sanity";

import { portableTextType } from "./arrays/portableTextType";
import { servicesKey } from "./fields/servicesKey";
import { priceBlockType } from "./objects/priceBlockType";
import { priceItemType } from "./objects/priceItemType";
import { pricesPageType } from "./singletons/pricePageType";

const singletons: DocumentDefinition[] = [pricesPageType];
const objects: ObjectDefinition[] = [priceItemType, priceBlockType];
const fields: StringDefinition[] = [servicesKey];
const arrays: ArrayDefinition[] = [portableTextType];

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [...singletons, ...objects, ...arrays, ...fields],
};
