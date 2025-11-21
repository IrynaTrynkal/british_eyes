import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import {
    eyeDiseaseData,
    EyeDiseaseType,
} from "@/components/assets/patientsInstructionData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LinkAction } from "@/components/shared/LinkAction";
import { TextTypeRender } from "@/components/shared/TextTypeRender";
import { HeroDisease } from "@/components/someDiseaseComponent/HeroDisease";
import { LocaleType } from "@/types/LocaleType";

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    const displayedDisease: EyeDiseaseType | undefined = eyeDiseaseData.find(
        disease => disease.name.key === slug
    );
    const langPrefix =
        locale === "en"
            ? "/en/eye-diseases"
            : locale === "ru"
              ? "/ru/glaznye-bolezni"
              : "/zakhvoryuvannya-ochey";
    const title =
        displayedDisease && displayedDisease[locale as LocaleType].titleSEO;

    const description =
        displayedDisease &&
        displayedDisease[locale as LocaleType].descriptionSEO;

    const end = displayedDisease?.name.slug[locale as LocaleType];

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: `${langPrefix}/${end}`,
            languages: {
                "en-US": `/en/eye-diseases/${displayedDisease?.name.slug.en}`,
                "uk-UA": `/zakhvoryuvannya-ochey/${displayedDisease?.name.slug.uk}`,
                "ru-RU": `/ru/glaznye-bolezni/${displayedDisease?.name.slug.ru}`,
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

interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function EyeDiseasePage({ params }: PageProps) {
    const { locale, slug } = await params;

    const displayedDisease: EyeDiseaseType | undefined = eyeDiseaseData.find(
        disease => disease.name.key === slug
    );

    if (!displayedDisease) {
        notFound();
    }
    const breadcrumb = [
        { name: "zakhvoryuvannya-ochey", href: "/zakhvoryuvannya-ochey" },
        {
            name: displayedDisease.name.key,
            href: `/${displayedDisease.name.key}`,
        },
    ];

    return (
        <>
            <HeroDisease title={displayedDisease[locale as LocaleType].title} />
            <Breadcrumbs className="mt-5" breadcrumbsList={breadcrumb} />
            <section className="tab:pb-12 prepc:pt-10 tab:px-6 pc:px-12 pc:pb-[120px] pt-5 pb-[60px]">
                <div className="bg-green-10 tab:mx-0 tab:max-w-[1117px] prepc:w-[83%] prepc:p-6 prepc:rounded-lg mx-auto max-w-[540px] rounded p-4">
                    {displayedDisease[locale as LocaleType].content.map(
                        (item, ind) => (
                            <Fragment key={`${item.title || "block"}-${ind}`}>
                                {item.title && (
                                    <h3
                                        key={item.title}
                                        className="font-oswald prepc:text-2xl prepc:leading-7 mb-3 text-lg leading-[22px] font-medium uppercase"
                                    >
                                        {item.title}
                                    </h3>
                                )}
                                <TextTypeRender
                                    key={`text-${ind}`}
                                    data={item.text}
                                />
                                {item.btn && (
                                    <LinkAction
                                        href={item.btn.link}
                                        name={item.btn.name}
                                        className="prepc:my-5 my-3"
                                    />
                                )}
                            </Fragment>
                        )
                    )}
                </div>
            </section>
            <Booking />
        </>
    );
}
