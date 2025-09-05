import { IconProps } from "@/types/iconProps";

export const IconFacebook = ({ className }: IconProps) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="close icon"
        >
            <path
                d="M14.9976 0.600586C7.0452 0.600586 0.597656 7.0482 0.597656 15.0006C0.597656 22.953 7.0452 29.4006 14.9976 29.4006C22.95 29.4006 29.3976 22.953 29.3976 15.0006C29.3976 7.0482 22.95 0.600586 14.9976 0.600586ZM18.5976 10.2006H16.9776C16.332 10.2006 16.1976 10.4658 16.1976 11.1342V12.6006H18.5976L18.3468 15.0006H16.1976V23.4006H12.5976V15.0006H10.1976V12.6006H12.5976V9.831C12.5976 7.7082 13.7148 6.6006 16.2324 6.6006H18.5976V10.2006Z"
                fill="currentColor"
            />
        </svg>
    );
};
