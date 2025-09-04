import { IconProps } from "@/types/iconProps";

export const IconArrow = ({ className }: IconProps) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="arrow icon"
        >
            <path
                d="M18 12L6 24V0L18 12ZM9 7.24219V16.7578L13.7578 12L9 7.24219Z"
                fill="currentColor"
            />
        </svg>
    );
};
