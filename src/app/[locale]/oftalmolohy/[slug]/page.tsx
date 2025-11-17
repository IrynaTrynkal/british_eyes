import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { Booking } from "@/components/shared/booking/Booking";
import { BookingOnlineForm } from "@/components/shared/booking/BookingOnlineForm";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { PortableTextRenderer } from "@/sanity/components/PortableTextComponents";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { doctorQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { getLink } from "@/utils/getRigthLink";

interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function SomeDoctorPage({ params }: PageProps) {
    const { locale, slug } = await params;
    const t = await getTranslations("Doctors");
    const tM = await getTranslations("Menu");

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

    const photo = doctorData.photo
        ? urlFor(doctorData.photo).url()
        : "/logo.svg";

    const aboutContent = [
        { title: t("specialization"), data: doctorData.specialization },
        { title: t("education"), data: doctorData.education },
        { title: t("activity"), data: doctorData.activity },
        { title: t("training"), data: doctorData.training },
        { title: t("conferences"), data: doctorData.conferences },
        { title: t("about"), data: doctorData.about },
    ];

    const categories = [
        ...(doctorData.services || []),
        ...(doctorData.departments || []),
    ];

    return (
        <>
            <Breadcrumbs
                className="prepc:mt-[104px] prepc:mb-12 mt-[72px] mb-6"
                breadcrumbsList={breadcrumb}
                doctors
            />
            <section className="content tab:flex tab:gap-3 prepc:gap-5 tab:items-start pb-[60px]">
                <div className="cta-green-gradient prepc:rounded-lg tab:pb-5 tab:w-[31%] prepc:w-[32.5%] tab:mx-0 tab:max-w-full mx-auto mb-10 max-w-[400px] overflow-hidden rounded">
                    <div className="prepc:rounded-lg prepc:mb-5 mb-3 aspect-square overflow-hidden rounded">
                        <Image
                            src={photo}
                            alt={doctorData.name!}
                            width={450}
                            height={450}
                        />
                    </div>
                    <div className="pc:mb-0 prepc:px-5 mb-3 px-3">
                        <p className="font-oswald text-ivory prepc:text-lg prepc:mb-5 mb-2 text-sm leading-none uppercase">
                            {t("experienceSince", {
                                year: doctorData.experience || "----",
                            })}
                        </p>
                        <h1 className="font-oswald text-ivory prepc:text-[32px] tab:text-2xl prepc:mb-4 mb-2 text-xl leading-[120%] font-medium uppercase">
                            {doctorData.name}
                        </h1>
                        <div className="text-ivory prepc:text-lg prepc:mb-8 leading-[120%]">
                            <PortableTextRenderer value={doctorData.position} />
                        </div>
                    </div>
                    <BookingOnlineForm cta className="prepc:ml-5" />
                </div>
                <div className="border-grey-70 prepc:rounded-lg tab:w-[49.4%] tab:mb-0 mb-[60px] rounded border bg-white">
                    <h2 className="cta-green-gradient prepc:rounded-tr-lg prepc:rounded-tl-lg font-oswald text-ivory tab:text-xl prepc:text-2xl rounded-tl rounded-tr px-3 py-2 text-lg leading-[120%] font-medium uppercase">
                        {t("about")}
                    </h2>
                    <div className="prepc:py-8 flex flex-col gap-4 px-3 py-7">
                        {aboutContent
                            .filter(item => item.data && item.data.length > 0)
                            .map(item => (
                                <div key={item.title}>
                                    <h3 className="font-oswald mb-2 leading-[130%] font-medium uppercase">
                                        {item.title}
                                    </h3>
                                    <PortableTextRenderer value={item.data} />
                                </div>
                            ))}
                    </div>
                </div>
                <div className="cta-green-gradient prepc:rounded-lg tab:w-[20%] prepc:w-[15.5%] tab:mx-0 mx-auto max-w-[400px] overflow-hidden rounded p-3">
                    <h2 className="font-oswald text-ivory mb-3 text-2xl leading-[100%] font-medium uppercase">
                        {t("categories")}
                    </h2>
                    <div className="bg-white-100 tab:w-[90%] mb-3 h-[1px] w-[183px]" />
                    <ul className="prepc:gap-4 flex flex-col gap-5">
                        {categories.map(cat => (
                            <li
                                key={cat}
                                className="font-oswald text-ivory leading-[120%] uppercase"
                            >
                                <Link
                                    href={
                                        getLink(
                                            cat,
                                            locale as LocaleType
                                        ) as any
                                    }
                                >
                                    {tM(cat)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <Booking />
        </>
    );
}
