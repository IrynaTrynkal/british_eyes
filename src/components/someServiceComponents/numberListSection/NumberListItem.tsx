import { NumberListItemType } from "@/components/assets/servicesData";

export const NumberListItem = ({
    item,
    index,
}: {
    item: NumberListItemType;
    index: number;
}) => {
    const indexItem = index < 10 ? `0${index}` : index;
    return (
        <div className="bg-green-10 prepc:px-5 prepc:py-3 rounded-lg px-4 py-2">
            <h3 className="font-oswald prepc:text-[22px] pc:text-2xl prepc:leading-6 pc:leading-7 mb-3 text-lg leading-[22px] uppercase">
                <span className="font-oswald prepc:text-3xl pc:text-5xl mr-2 text-xl leading-none font-medium uppercase">
                    {indexItem}
                </span>
                {item.itemTitle}
            </h3>
            {item.list ? (
                <ul className="ml-4 list-disc">
                    {item.itemText.map((listItem, i) => (
                        <li
                            key={i}
                            className="pc:text-lg pc:leading-[22px] leading-5"
                        >
                            {listItem}
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="tab:gap-2 prepc:gap-3 flex flex-col gap-1">
                    {item.itemText.map((listItem, i) => (
                        <p
                            key={i}
                            className="pc:text-lg pc:leading-[22px] leading-5"
                        >
                            {listItem}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};
