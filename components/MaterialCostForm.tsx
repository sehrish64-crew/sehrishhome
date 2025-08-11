"use client";

import { useState } from "react";

export default function MaterialCostForm() {
    const [materialUnits, setMaterialUnits] = useState(["Sq Feet"]);
    const [costTypes, setCostTypes] = useState(["Sq Feet"]);

    const addMaterialUnit = () => setMaterialUnits([...materialUnits, ""]);
    const removeMaterialUnit = (index: number) =>
        setMaterialUnits(materialUnits.filter((_, i) => i !== index));

    const addCostType = () => setCostTypes([...costTypes, ""]);
    const removeCostType = (index: number) =>
        setCostTypes(costTypes.filter((_, i) => i !== index));

    return (
        <div className="max-w-4xl bg-white rounded-2xl p-6 space-y-8">
            {/* Material Unit */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    Material Unit
                </label>
                {materialUnits.map((unit, index) => (
                    <div key={index} className="flex items-center gap-3 mb-3">
                        <input
                            type="text"
                            value={unit}
                            onChange={(e) => {
                                const newUnits = [...materialUnits];
                                newUnits[index] = e.target.value;
                                setMaterialUnits(newUnits);
                            }}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {materialUnits.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeMaterialUnit(index)}
                                className="px-3 py-1 bg-red-50 text-red-500 rounded-lg border border-red-200 hover:bg-red-100"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addMaterialUnit}
                    className="shadow-md mt-2 flex items-center gap-2 border border-[#D0D5DD] rounded-lg px-4 py-2 text-sm text-[#667085] hover:bg-gray-50"
                >
                    <span className="text-lg font-bold leading-none"><svg
                        width={24}
                        height={25}
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 12.0879H18"
                            stroke="#667085"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 18.0879V6.08789"
                            stroke="#667085"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    </span> Add More
                </button>
            </div>

            <hr className="border-gray-200" />

            {/* Cost Type */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                    Cost Type
                </label>
                {costTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3 mb-3">
                        <input
                            type="text"
                            value={type}
                            onChange={(e) => {
                                const newTypes = [...costTypes];
                                newTypes[index] = e.target.value;
                                setCostTypes(newTypes);
                            }}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {costTypes.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeCostType(index)}
                                className="px-3 py-1 bg-red-50 text-red-500 rounded-lg border border-red-200 hover:bg-red-100"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addCostType}
                    className="shadow-md mt-2 flex items-center gap-2 border border-[#D0D5DD] rounded-lg px-4 py-2 text-sm text-[#667085] hover:bg-gray-50"
                >
                    <span className="text-lg font-bold leading-none"><svg
                        width={24}
                        height={25}
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 12.0879H18"
                            stroke="#667085"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 18.0879V6.08789"
                            stroke="#667085"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    </span> Add More
                </button>
            </div>
        </div>  
    );
}
