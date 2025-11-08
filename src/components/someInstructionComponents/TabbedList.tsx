"use client";
import { useState } from "react";

import { DepartType } from "../assets/patientsInstructionData";

export const TabbedList = ({
    adultDepart,
    childDepart,
}: {
    adultDepart: DepartType;
    childDepart: DepartType;
}) => {
    const [activeTab, setActiveTab] = useState<"adult" | "child">("adult");

    const data = activeTab === "adult" ? adultDepart : childDepart;

    return (
        <div className="tab:hidden mx-auto mb-5 max-w-[540px]">
            <div className="flex gap-2">
                {[
                    { key: "adult", label: adultDepart.title },
                    { key: "child", label: childDepart.title },
                ].map(tab => (
                    <button
                        key={tab.key}
                        onClick={() =>
                            setActiveTab(tab.key as "adult" | "child")
                        }
                        className={`green-gradient font-oswald text-ivory w-[calc(50%-4px)] rounded px-4 py-2 text-left leading-none uppercase transition-all duration-300 ${
                            activeTab === tab.key ? "underline" : ""
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="bg-green-10 p-4">
                <div>
                    <p className="mb-2 leading-[120%]">{data.listLab.title}</p>
                    <ul className="mb-2 ml-4 list-disc">
                        {data.listLab.list.map((item, i) => (
                            <li key={i} className="leading-[120%] font-bold">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-2 leading-[120%]">
                        {data.listResult.title}
                    </p>
                    <ul className="ml-4 list-disc">
                        {data.listResult.list.map((item, i) => (
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
