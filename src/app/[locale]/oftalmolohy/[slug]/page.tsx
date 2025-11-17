import { notFound } from "next/navigation";

import { SomeDoctorPageMain } from "@/components/pageDoctors/SomeDoctorPage";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { doctorQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";

interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function SomeDoctorPage({ params }: PageProps) {
    const { locale, slug } = await params;

    const doctorData = await sanityFetch({
        query: doctorQuery,
        params: { language: locale, slug: slug },
        tags: [],
    });

    if (!doctorData) {
        notFound();
    }
    const breadcrumb = [
        { name: "oftalmolohy", href: "/oftalmolohy" },
        {
            name: doctorData.name!,
            href: `/${slug}`,
        },
    ];

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
                breadcrumbsList={breadcrumb}
                doctors
            />
            <SomeDoctorPageMain
                doctorData={doctorData}
                locale={locale as LocaleType}
            />
            <Booking />
        </>
    );
}
