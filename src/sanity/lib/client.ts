import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
});

export async function sanityFetch<const QueryString extends string>({
    query,
    params = {},
    tags = [],
    revalidate = 3600,
}: {
    query: QueryString;
    params?: QueryParams;
    tags?: string[];
    revalidate?: number | false;
}) {
    return client.fetch(query, params, {
        cache: "force-cache",
        next: {
            revalidate: tags.length ? false : revalidate,
            tags,
        },
    });
}
