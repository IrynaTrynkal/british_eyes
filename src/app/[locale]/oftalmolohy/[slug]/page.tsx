import { notFound } from "next/navigation";

import { DoctorProps, doctorsData } from "@/components/assets/doctorsData";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LocaleType } from "@/types/LocaleType";

interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function SomeDoctorPage({ params }: PageProps) {
    const { locale, slug } = await params;

    const displayedDoctor: DoctorProps | undefined = doctorsData.find(
        doctor => doctor[locale as LocaleType].slug === slug
    );

    if (!displayedDoctor) {
        notFound();
    }
    const breadcrumb = [
        { name: "oftalmolohy", href: "/oftalmolohy" },
        {
            name: displayedDoctor[locale as LocaleType].name,
            href: `/${displayedDoctor[locale as LocaleType].slug}`,
        },
    ];

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
                breadcrumbsList={breadcrumb}
                doctors
            />
            <p>{displayedDoctor[locale as LocaleType].name}</p>
            <Booking />
        </>
    );
}
