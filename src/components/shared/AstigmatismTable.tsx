import { useTranslations } from "next-intl";

export const AstigmatismTable = () => {
    const t = useTranslations("PatientsPage");
    const headers = [
        t("astygmatyzm"),
        "0.5",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
    ];

    return (
        <div className="overflow-x-auto">
            <table className="prepc:text-base w-full border-collapse text-sm">
                <thead>
                    <tr className="bg-[#0B7556]/10">
                        {headers.map((h, i) => (
                            <th
                                key={i}
                                className={`font-oswald border border-[#0B7556]/30 px-2 py-2 text-center uppercase ${
                                    i === 0 ? "text-left" : ""
                                }`}
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="font-oswald border border-[#0B7556]/30 px-2 py-2 uppercase">
                            {t("astLazer")}
                        </td>
                        {Array(9)
                            .fill(null)
                            .map((_, i) => (
                                <td
                                    key={i}
                                    className="border border-[#0B7556]/30 px-2 py-2 text-center"
                                >
                                    {i <= 4 ? "✔" : ""}
                                </td>
                            ))}
                    </tr>
                    <tr>
                        <td className="font-oswald border border-[#0B7556]/30 px-2 py-2 uppercase">
                            {t("astRefl")}
                        </td>
                        {Array(9)
                            .fill(null)
                            .map((_, i) => (
                                <td
                                    key={i}
                                    className="border border-[#0B7556]/30 px-2 py-2 text-center"
                                >
                                    {i >= 3 ? "✔" : ""}
                                </td>
                            ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
