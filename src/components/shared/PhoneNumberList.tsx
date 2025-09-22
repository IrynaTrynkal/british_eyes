import { normalizePhone } from "@/utils/normalizePhone";

import { phoneList } from "../assets/contacts";

export const PhoneNumberList = ({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) => {
    return (
        <ul className={className}>
            {phoneList.map(item => (
                <li key={item}>
                    <a
                        onClick={onClick}
                        href={`tel:${normalizePhone(item)}`}
                        className="group-hover:text-grey-90 hover:!text-ivory transition-colors duration-300"
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
};
