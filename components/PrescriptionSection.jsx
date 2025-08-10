// components/PrescriptionSection.jsx
import React from "react";

export default function PrescriptionSection({ onRemove, onAdd, isRemovable, showAddButton }) {
    return (
        <div className="border border-[#EBEBEB] md-shadow rounded-xl pl-4 pr-4 pb-4 pt-3 mt-4">
            <div className="form-area mt-3 mb-2">
                <div className="flex w-full justify-between items-center">
                    <h3 className="text-[#757575] text-1xl">Add Prescription (Optional)</h3>
                    <div className="flex gap-2">
                        {isRemovable && (
                            <button type="button" onClick={onRemove}>
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" fill="#FF4D4F" />
                                    <path d="M8 12H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                        )}
                        {showAddButton && (
                            <button type="button" onClick={onAdd}>
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                        fill="#144A6C"
                                    />
                                    <path
                                        d="M12 8V12M12 12V16M12 12H16M12 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 2 12Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>

                </div>
            </div>

            <hr />

            {/* Same fields you provided... keep using them here */}
            {/* For brevity, just an example field: */}
            <div className="flex mt-4 gap-4">

                <div className="box">
                    <label
                        className="text-[#757575]"
                        htmlFor="grid-category"
                    >
                        Medication/Order
                    </label>
                    <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"

                    />
                </div>

                <div className="box">
                    <label
                        className="text-[#757575]"
                        htmlFor="grid-category"
                    >
                        Dose
                    </label>
                    <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"

                    />
                </div>

                <div className="box">
                    <label
                        className="text-[#757575]"
                        htmlFor="grid-category"
                    >
                        Presentation(tablet,capsule,etc.)
                    </label>
                    <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"

                    />
                </div>
            </div>

            <div className="flex mt-4 gap-4">
                <div className="box">
                    <label
                        className="text-[#757575]"
                        htmlFor="grid-category"
                    >
                        Blood pressure
                    </label>
                    <div className="flex gap-4">
                        <input
                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                            id="grid-address"
                            type="text"
                            placeholder="Days"
                        />
                        <input
                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                            id="grid-address"
                            type="text"
                            placeholder="mmHg"
                        />
                    </div>
                </div>

                <div className="box">
                    <label
                        className="text-[#757575]"
                        htmlFor="grid-category"
                    >
                        Temperature
                    </label>
                    <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                        placeholder="°C"
                    />
                </div>

                <div className="box">
                    <label
                        className="text-[#757575]"
                        htmlFor="grid-category"
                    >
                        Grades
                    </label>
                    <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                        placeholder="cm"
                    />
                </div>
            </div>
            <div className="mt-4">
                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                    <div className="w-full px-3 mb-6 md:mb-0 text-start">
                        <label
                            className="text-[#757575]"
                            htmlFor="grid-category"
                        >
                            Special Instructions
                        </label>
                        <input
                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                            id="grid-address"
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
