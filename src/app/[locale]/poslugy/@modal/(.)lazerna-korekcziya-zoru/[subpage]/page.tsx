import { notFound } from "next/navigation";

import { subpageData } from "@/components/assets/laserMethodsData";
import { ModalPage } from "@/components/shared/ModalPage";
import { LazerSubpage } from "@/components/someServiceComponents/LazerSubpage/LazerSubpage";
import { LocaleType } from "@/types/LocaleType";

interface SubpageProps {
    params: Promise<{ locale: string; subpage: string }>;
}

export default async function LaserSubpage({ params }: SubpageProps) {
    const { locale, subpage } = await params;
    const currentMethod = subpageData.find(sub => sub.key === subpage);

    if (!currentMethod) {
        notFound();
    }

    return (
        <ModalPage lazer>
            <LazerSubpage
                locale={locale as LocaleType}
                currentMethod={currentMethod}
            />
        </ModalPage>
    );
}
