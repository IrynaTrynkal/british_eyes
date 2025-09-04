import { normalizePhone } from "@/utils/normalizePhone";

export const PhoneNumberList = ({
    phoneList,
    className,
    onClick,
}: {
    phoneList: string[];
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
                        className=""
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
};
