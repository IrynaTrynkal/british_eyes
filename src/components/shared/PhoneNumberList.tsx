import { normalizePhone } from "@/utils/normalizePhone";

import { phoneList } from "../assets/contacts";

export const PhoneNumberList = ({
    className,
    onClick,
    dark,
}: {
    className?: string;
    onClick?: () => void;
    dark?: boolean;
}) => {
    return (
        <ul className={className}>
            {phoneList.map(item => (
                <li key={item}>
                    <a
                        onClick={onClick}
                        href={`tel:${normalizePhone(item)}`}
                        className={`${dark ? "group-hover:text-grey-90 hover:text-black hover:underline" : "group-hover:text-grey-90 hover:!text-ivory"} transition-all duration-300`}
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
};
