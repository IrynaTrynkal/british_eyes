import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
});

export async function sanityFetch<const Q extends string>({
    query,
    params = {},
    tags = [],
}: {
    query: Q;
    params?: QueryParams;
    tags?: string[];
}) {
    const isProd = process.env.NODE_ENV === "production";

    return client.fetch(query, params, {
        cache: isProd ? "force-cache" : "no-store",
        next: {
            revalidate: isProd ? false : 0,
            tags,
        },
    });
}
