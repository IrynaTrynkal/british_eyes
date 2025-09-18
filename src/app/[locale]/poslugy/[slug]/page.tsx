import { notFound } from "next/navigation";

import { servicesList, ServicesListProps } from "@/components/assets/menu";
import { Booking } from "@/components/shared/booking/Booking";
import { LocaleType } from "@/types/LocaleType";

interface ServicePageProps {
    params: Promise<{ locale: string; slug: string }>; // params тепер Promise
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { locale, slug } = await params;

    const displayedService: ServicesListProps | undefined = servicesList.find(
        service => service.slug[locale as LocaleType] === slug
    );

    if (!displayedService) {
        notFound();
    }

    return (
        <>
            <div className="content py-24">
                <h1 className="font-oswald font-bold uppercase">
                    {displayedService.key}
                </h1>
            </div>
            <Booking />
        </>
    );
}
