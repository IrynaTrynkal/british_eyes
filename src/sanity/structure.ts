import type { StructureResolver } from "sanity/structure";

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
            S.divider(),
            ...S.documentTypeListItems().filter(
                item => item.getId() && !["pricesPage"].includes(item.getId()!)
            ),
        ]);
