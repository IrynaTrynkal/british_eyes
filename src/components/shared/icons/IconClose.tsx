import { IconProps } from "@/types/iconProps";

export const IconClose = ({ className }: IconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="close icon"
        >
            <path
                d="M5.24991 3.12891L11.9999 9.87891L18.7499 3.12891L20.8709 5.24991L14.1209 11.9999L20.8709 18.7499L18.7499 20.8709L11.9999 14.1209L5.24991 20.8709L3.12891 18.7499L9.87891 11.9999L3.12891 5.24991L5.24991 3.12891Z"
                fill="currentColor"
            />
        </svg>
    );
};
