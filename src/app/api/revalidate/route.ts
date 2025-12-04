import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
    const body = await req.json();

    const tag = body.tag || "*";

    revalidateTag(tag);

    return Response.json({ revalidated: true });
}
