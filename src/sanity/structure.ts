import type { StructureResolver } from "sanity/structure";

import { offersPageType } from "./schemaTypes/singletons/offersPage";
import { pricesPageType } from "./schemaTypes/singletons/pricePageType";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
    S.list()
        .title("Британський Центр")
        .items([
            S.listItem()
                .title(pricesPageType.title!)
                .icon(pricesPageType.icon)
                .child(
                    S.editor()
                        .id(pricesPageType.name)
                        .schemaType(pricesPageType.name)
                ),
            S.listItem()
                .title(offersPageType.title!)
                .icon(offersPageType.icon)
                .child(
                    S.editor()
                        .id(offersPageType.name)
                        .schemaType(offersPageType.name)
                ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                item =>
                    item.getId() &&
                    !["pricesPage", "offersPage"].includes(item.getId()!)
            ),
        ]);
