import { IconProps } from "@/types/iconProps";

export const IconBreadChevron = ({ className }: IconProps) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="breadcrumbs arrow icon"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.32806 4.82739C7.6535 4.50195 8.18114 4.50195 8.50657 4.82739L13.0899 9.41072C13.4153 9.73616 13.4153 10.2638 13.0899 10.5892L8.50657 15.1726C8.18114 15.498 7.6535 15.498 7.32806 15.1726C7.00263 14.8471 7.00263 14.3195 7.32806 13.9941L11.3221 9.99998L7.32806 6.0059C7.00263 5.68046 7.00263 5.15283 7.32806 4.82739Z"
                fill="#737373"
            />
        </svg>
    );
};
