import { TableContent } from "../assets/servicesData";

export const InfoTable = ({ data }: { data: TableContent }) => {
    return (
        <table
            className={`prepc:text-base w-full border-collapse text-sm ${data.gap ? "prepc:mb-4 mb-2" : ""}`}
        >
            <thead>
                <tr className="bg-[#0B7556]/10">
                    {data.headers.map((header, i) => (
                        <th
                            key={i}
                            className={`font-oswald border border-[#0B7556]/30 px-3 py-3 uppercase ${
                                i === 0 ? "text-left" : "text-center"
                            }`}
                        >
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.rows.map((row, idx) => (
                    <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-[#0B7556]/5"}`}
                    >
                        {row.map((cell, i) => (
                            <td
                                key={i}
                                className={`border border-[#0B7556]/30 px-3 py-2 ${
                                    i === 0
                                        ? "font-oswald text-left uppercase"
                                        : "text-center"
                                }`}
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
