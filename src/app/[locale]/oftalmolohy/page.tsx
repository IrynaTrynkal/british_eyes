import { DepartmentsType } from "@/components/assets/doctorsData";
import { DoctorsFilter } from "@/components/pageDoctors/DoctorsFilter";
import { DoctorsFilteredList } from "@/components/pageDoctors/DoctorsFilteredList";
import { HeroDoctors } from "@/components/pageDoctors/HeroDoctors";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { sanityFetch } from "@/sanity/lib/client";
import { doctorsOrderQuery } from "@/sanity/lib/queries";
import { LocaleType } from "@/types/LocaleType";
import { generatePageMetadata } from "@/utils/generatePageMetadata";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;

    return generatePageMetadata(locale as LocaleType, "Doctors", {
        uk: "/oftalmolohy",
        en: "/en/ophthalmologists",
        ru: "/ru/oftalmologi",
    });
}

export default async function OftalmolohyPage({
    searchParams,
    params,
}: {
    searchParams?: Promise<{
        page?: string;
        department?: DepartmentsType;
        locale: string;
    }>;
    params: Promise<{ locale: string }>;
}) {
    const { page, department } = (await searchParams) || {};
    const { locale } = await params;
    const pageNumber = page ? parseInt(page) : 1;
    const selectedDepartment = department || "clinic-management";
    const breadcrumb = [{ name: "oftalmolohy", href: "/oftalmolohy" }];

    const doctorsList = await sanityFetch({
        query: doctorsOrderQuery,
        params: { language: locale },
        tags: [],
    });

    return (
        <>
            <HeroDoctors />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:mt-5 prepc:mb-12 my-5"
            />
            <div className="prepc:flex prepc:flex-row prepc:justify-between tab:px-6 pc:px-12 prepc:overflow-visible tab:pb-12 pc:pb-[120px] relative pb-[60px]">
                <DoctorsFilter
                    list={doctorsList}
                    className="prepc:mb-0 prepc:top-24 prepc:w-[25%] prepc:max-w-[318px] prepc:mt-0 prepc:h-fit sticky top-12 z-10 mb-6"
                />
                <DoctorsFilteredList
                    list={doctorsList}
                    selectedDepartment={selectedDepartment}
                    pageNumber={pageNumber}
                    className="prepc:w-[74.7%]"
                />
            </div>
            <Booking />
        </>
    );
}
