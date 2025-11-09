import { DepartmentsType, doctorsData } from "@/components/assets/doctorsData";
import { DoctorsFilter } from "@/components/pageDoctors/DoctorsFilter";
import { DoctorsFilteredList } from "@/components/pageDoctors/DoctorsFilteredList";
import { HeroDoctors } from "@/components/pageDoctors/HeroDoctors";
import { Booking } from "@/components/shared/booking/Booking";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default async function OftalmolohyPage({
    searchParams,
}: {
    searchParams?: Promise<{ page?: string; department?: DepartmentsType }>;
}) {
    const { page, department } = (await searchParams) || {};
    const pageNumber = page ? parseInt(page) : 1;
    const selectedDepartment = department || "clinic-management";
    const breadcrumb = [{ name: "oftalmolohy", href: "/oftalmolohy" }];
    return (
        <>
            <HeroDoctors />
            <Breadcrumbs
                breadcrumbsList={breadcrumb}
                className="tab:mt-5 prepc:mb-12 my-5"
            />
            <div className="prepc:flex prepc:flex-row prepc:justify-between tab:px-6 pc:px-12 prepc:overflow-visible tab:pb-12 pc:pb-[120px] relative pb-[60px]">
                <DoctorsFilter
                    list={doctorsData}
                    className="prepc:mb-0 prepc:top-24 prepc:w-[25%] prepc:max-w-[318px] prepc:mt-0 prepc:h-fit sticky top-12 z-10 mb-6"
                />
                <DoctorsFilteredList
                    selectedDepartment={selectedDepartment}
                    pageNumber={pageNumber}
                    className="prepc:w-[74.7%]"
                />
            </div>
            <Booking />
        </>
    );
}
