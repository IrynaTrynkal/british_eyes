import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;
    const getTranslation = await getTranslations({
        locale,
        namespace: "NotFound",
    });
    return {
        title: getTranslation("titleSEO"),
        description: getTranslation("descriptionSEO"),
        openGraph: {
            title: getTranslation("titleSEO"),
            description: getTranslation("descriptionSEO"),
        },
    };
}

export default function NotFoundCatchAll() {
    notFound();
}
