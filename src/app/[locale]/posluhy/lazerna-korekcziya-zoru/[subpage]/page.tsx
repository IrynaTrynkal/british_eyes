import { Metadata } from "next";
import { notFound } from "next/navigation";

import { subpageLazerData } from "@/components/assets/laserMethodsData";
import { ModalPage } from "@/components/shared/ModalPage";
import { LazerSubpage } from "@/components/someServiceComponents/LazerSubpage/LazerSubpage";
import { LocaleType } from "@/types/LocaleType";

type Props = {
    params: Promise<{ locale: string; subpage: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, subpage } = await params;
    const currentMethod = subpageLazerData.find(
        sub => sub.content[locale as LocaleType].slug === subpage
    );

    const langPrefix =
        locale === "en"
            ? "/en/services/laser-vision-correction"
            : locale === "ru"
              ? "/ru/uslugi/lazernaya-korrekciya-zreniya"
              : "/posluhy/lazerna-korekcziya-zoru";
    const title =
        currentMethod && currentMethod.content[locale as LocaleType].titleSEO;
    const description =
        currentMethod &&
        currentMethod.content[locale as LocaleType].descriptionSEO;

    const end = currentMethod?.content[locale as LocaleType].slug;

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: `${langPrefix}/${end}`,
            languages: {
                "en-US": `/en/services/laser-vision-correction/${currentMethod?.content.en.slug}`,
                "uk-UA": `/posluhy/lazerna-korekcziya-zoru/${currentMethod?.content.uk.slug}`,
                "ru-RU": `/ru/uslugi/lazernaya-korrekciya-zreniya/${currentMethod?.content.ru.slug}`,
            },
        },
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
        },
    };
}
interface SubpageProps {
    params: Promise<{ locale: string; subpage: string }>;
}

export default async function LaserSubpage({ params }: SubpageProps) {
    const { locale, subpage } = await params;
    const currentMethod = subpageLazerData.find(sub => sub.key === subpage);

    if (!currentMethod) {
        notFound();
    }

    return (
        <ModalPage subpage>
            <LazerSubpage
                locale={locale as LocaleType}
                currentMethod={currentMethod}
            />
        </ModalPage>
    );
}
