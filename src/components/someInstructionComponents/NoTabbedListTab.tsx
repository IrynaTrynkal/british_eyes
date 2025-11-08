import { DepartType } from "../assets/patientsInstructionData";

export const NoTabbedListTab = ({
    adultDepart,
    childDepart,
}: {
    adultDepart: DepartType;
    childDepart: DepartType;
}) => {
    return (
        <div className="tab:flex prepc:text-lg mb-5 hidden justify-between">
            <div className="bg-green-10 tab:p-6 w-[45%] rounded-lg p-4">
                <h3 className="green-gradient font-oswald text-ivory mb-3 w-full rounded py-2 text-center leading-none uppercase">
                    {adultDepart.title}
                </h3>
                <div>
                    <p className="mb-2 leading-[120%]">
                        {adultDepart.listLab.title}
                    </p>
                    <ul className="mb-2 ml-4 list-disc">
                        {adultDepart.listLab.list.map((item, i) => (
                            <li key={i} className="leading-[120%] font-bold">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-2 leading-[120%]">
                        {adultDepart.listResult.title}
                    </p>
                    <ul className="ml-4 list-disc">
                        {adultDepart.listResult.list.map((item, i) => (
                            <li key={i} className="leading-[120%] font-bold">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-green-10 tab:p-6 w-[45%] rounded-lg p-4">
                <h3 className="green-gradient font-oswald text-ivory mb-3 w-full rounded py-2 text-center leading-none uppercase">
                    {childDepart.title}
                </h3>
                <div>
                    <p className="mb-2 leading-[120%]">
                        {childDepart.listLab.title}
                    </p>
                    <ul className="mb-2 ml-4 list-disc">
                        {childDepart.listLab.list.map((item, i) => (
                            <li key={i} className="leading-[120%] font-bold">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-2 leading-[120%]">
                        {childDepart.listResult.title}
                    </p>
                    <ul className="ml-4 list-disc">
                        {childDepart.listResult.list.map((item, i) => (
                            <li key={i} className="leading-[120%] font-bold">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
