import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    perspective: "published",
});

export async function sanityFetch<const QueryString extends string>({
    query,
    params = {},
    tags = [],
}: {
    query: QueryString;
    params?: QueryParams;
    tags?: string[];
}) {
    return client.fetch(query, params, {
        cache: "force-cache",
        next: {
            revalidate: false,
            tags,
        },
    });
}
