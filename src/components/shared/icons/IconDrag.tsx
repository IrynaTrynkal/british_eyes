import { IconProps } from "@/types/iconProps";

export const IconDrag = ({ className }: IconProps) => {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="drag icon"
        >
            <path
                d="M12.1713 1L1 12.1713M13 7.41433L7.41433 13"
                stroke="#737373"
            />
        </svg>
    );
};
