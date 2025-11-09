import { Pagination } from "@/components/shared/Pagination";

import { DepartmentsType, doctorsData } from "../assets/doctorsData";
import { DoctorCardDoctorsPage } from "./DoctorCardDoctorsPage";

const ITEMS_PER_PAGE = 6;

export const DoctorsFilteredList = ({
    pageNumber = 1,
    selectedDepartment,
    className,
}: {
    pageNumber?: number;
    selectedDepartment?: DepartmentsType;
    className?: string;
}) => {
    const filteredDoctorsList =
        !selectedDepartment || selectedDepartment === "clinic-management"
            ? doctorsData
            : doctorsData.filter(item =>
                  item.departments.includes(selectedDepartment)
              );

    const totalPages = Math.ceil(filteredDoctorsList.length / ITEMS_PER_PAGE);

    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredDoctorsList.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );
    return (
        <div className={className}>
            <ul className="tab:px-0 tab:max-w-full tab:flex-row tab:flex-wrap prepc:gap-5 tab:justify-center mx-auto flex max-w-[540px] flex-col gap-4 px-4">
                {currentItems.map((doc, ind) => (
                    <li key={ind} className="">
                        <DoctorCardDoctorsPage data={doc} />
                    </li>
                ))}
            </ul>
            {totalPages > 1 && (
                <Pagination currentPage={pageNumber} totalPages={totalPages} />
            )}
        </div>
    );
};
