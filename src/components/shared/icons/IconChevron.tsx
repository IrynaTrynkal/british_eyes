import { IconProps } from "@/types/iconProps";

export const IconChevron = ({ className }: IconProps) => {
    return (
        <svg
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="triangular arrow icon"
        >
            <path d="M0 0L5 5L10 0H0Z" fill="currentColor" />
        </svg>
    );
};
