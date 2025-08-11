'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Search } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { format } from "date-fns";
const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};


const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};
const filteredDoctors = [
    {
        id: "D001",
        fullName: "Dr. Sehrish Khan",
        visitReason: "Routine Checkup",
        lastVisit: "2025-06-15",
        nextVisit: "2025-07-30",
        treatmentRequired: "Blood Test",
    },
    {
        id: "D002",
        fullName: "Dr. Adeel Sheikh",
        visitReason: "Dental Pain",
        lastVisit: "2025-07-01",
        nextVisit: "2025-08-01",
        treatmentRequired: "Root Canal",
    },
    {
        id: "D003",
        fullName: "Dr. Sehrish Khan",
        visitReason: "Routine Checkup",
        lastVisit: "2025-06-15",
        nextVisit: "2025-07-30",
        treatmentRequired: "Blood Test",
    },

];
const today = format(new Date(), "yyyy-MM-dd");

const slotsByDate = {
    [today]: [
        "10:30am",
        "11:30am",
        "02:30pm",
        "03:30pm",
        "04:30pm",
        "05:30pm"
    ],
    "2025-08-10": [
        "09:00am",
        "10:00am",
        "01:00pm"
    ],
};
const patients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Alexa" },
    { id: 3, name: "Jordan" },
];

const treatments = [
    { id: 1, name: "Physiotherapy" },
    { id: 2, name: "Cardiology" },
    { id: 3, name: "Neurology" },
];

const bookingMonths = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
];
const openSlots = [
    { id: 1, name: "9:00 AM - 9:30 AM" },
    { id: 2, name: "10:00 AM - 10:30 AM" },
    { id: 3, name: "11:00 AM - 11:30 AM" },
    { id: 4, name: "12:00 PM - 12:30 PM" },
    { id: 5, name: "2:00 PM - 2:30 PM" },
];

const filteredDoctores = [
    {
        Treatment: "Palate Expansion",
        visitReason: "Maria Thompson",
        lastVisit: "04-02-2025",
        Amount: "2000",
        Status: "Complete",
    },
    {
        Treatment: "Braces",
        visitReason: "John Doe",
        lastVisit: "10-03-2025",
        Amount: "1500",
        Status: "Pending",
    },
    {
        Treatment: "Root Canal",
        visitReason: "Emma Shah",
        lastVisit: "20-07-2025",
        Amount: "1800",
        Status: "Ongoing",
    },


];
export default function CalendarPage() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedDateInfo, setSelectedDateInfo] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const today = new Date();
    const [selectPatient, setSelectPatient] = useState(patients[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [ModalAnimation, setModalAnimation] = useState(false);
    const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
    const [selected, setSelected] = useState(bookingMonths[0]);
    const [selectedSlot, setSelectedSlot] = useState(openSlots[0]);
    useEffect(() => {
        const baseEvents = [
            {
                title: 'Confirm tech stack',
                start: `${addDays(today, 0).toISOString().split('T')[0]}T10:00:00`,
                end: `${addDays(today, 0).toISOString().split('T')[0]}T18:00:00`,
                className: 'bg-green-300',
            },
        ];
        setEvents(baseEvents);
    }, []);

    const handleDateSelect = (info) => {
        const blockedStart = addDays(today, 17).getTime();
        const blockedEnd = addDays(today, 20).getTime();
        const selectedStart = info.start.getTime();
        const selectedEnd = info.end?.getTime() || selectedStart;

        if (
            (selectedStart < blockedEnd && selectedEnd > blockedStart) ||
            (selectedEnd > blockedStart && selectedStart < blockedEnd)
        ) {
            alert('Events cannot be added in the blocked date range.');
            return;
        }

        if (info.allDay) {
            alert("Please select a specific time slot, not an all-day range.");
            return;
        }

        setSelectedDateInfo(info);
        setTitle('');
        setSelectedEvent(null);
        setModalOpen(true);
    };

    const handleEventClick = (info) => {
        setSelectedEvent(info.event);
        setTitle(info.event.title);
        setModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) return;

        if (selectedEvent) {
            selectedEvent.setProp('title', title);
        } else if (selectedDateInfo) {
            setEvents((prev) => [
                ...prev,
                {
                    title,
                    start: selectedDateInfo.startStr,
                    end: selectedDateInfo.endStr,
                    allDay: false, // 👈 Enable time-based events
                },
            ]);
        }

        setModalOpen(false);
        setSelectedEvent(null);
        setSelectedDateInfo(null);
        setTitle('');
    };

    return (
        <>
            <div className="pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-shrink-0 lg:rounded-tr-lg">
                <h1 className="text-3xl font-regular text-[#144A6C]">Billing</h1>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto items-center">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:ring-2 focus:[#144A6C] w-full sm:w-64 bg-white text-sm"
                        />
                    </div>
                    <button
                        className="w-full bg-[#144A6C] text-white px-4 py-2 rounded-lg md:text-sm"
                        onClick={() => {
                            setIsOpen(true);
                            setTimeout(() => setModalAnimation(true), 10);
                        }}
                    >
                        Create Booking
                    </button>
                    {isOpen && (
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="dialog-title"
                            className="relative z-10"
                        >
                            {/* <div className="fixed inset-0 bg-gradient-to-br from-[#144A6C]/60 to-[#144A6C]/20 backdrop-blur-md transition-opacity" /> */}
                            <div className="fixed inset-0 bg-[#000]/60 backdrop-blur-md transition-opacity overflow-y-auto">
                                <div className="flex items-center justify-center min-h-screen px-4 py-8 text-center">
                                    {/* Background overlay */}
                                    <div
                                        className="fixed inset-0 transition-opacity"
                                        aria-hidden="true"
                                    >
                                        <div className="absolute inset-0"></div>
                                    </div>
                                    {/* Modal panel */}
                                    <div
                                        className={`inline-block align-bottom bg-white  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 
                                                sm:align-middle w-full max-w-4xl mx-auto 
                                      ${ModalAnimation
                                                ? "scale-100 skew-y-0"
                                                : "scale-0 skew-y-6"
                                            }
                                      duration-500 ease-out
                                    `}
                                    >
                                        <div className="bg-white  px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                                    <div className="flex gap-1 border-b border-[#E5E7EB]  pb-4 w-100">
                                                        <div className="user-icon">
                                                            <svg
                                                                width={44}
                                                                height={44}
                                                                viewBox="0 0 44 44"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    width={44}
                                                                    height={44}
                                                                    rx={22}
                                                                    fill="#F5FAFA"
                                                                />
                                                                <rect
                                                                    x="0.5"
                                                                    y="0.5"
                                                                    width={43}
                                                                    height={43}
                                                                    rx="21.5"
                                                                    stroke="url(#paint0_linear_0_5513)"
                                                                    strokeOpacity="0.3"
                                                                />
                                                                <path
                                                                    d="M16.6034 16.4438L16.3913 16.8149C15.7055 18.0151 15.4393 19.4096 15.6347 20.7779C15.9848 23.2282 16.8791 25.5689 18.252 27.6283L18.3728 27.8095C18.7992 28.4491 19.7838 28.2694 19.9567 27.5203L20.7818 23.9446C21.0799 22.6527 22.9197 22.6527 23.2178 23.9446L24.043 27.5203C24.2158 28.2694 25.2004 28.4491 25.6268 27.8095L25.7476 27.6283C27.1205 25.5689 28.0148 23.2282 28.3649 20.7779C28.5603 19.4096 28.2941 18.0151 27.6083 16.8149L27.3962 16.4438C26.4064 14.7115 23.9818 14.5225 22.7354 16.0804C22.3583 16.5519 21.6413 16.5519 21.2642 16.0804C20.0178 14.5225 17.5932 14.7115 16.6034 16.4438Z"
                                                                    stroke="#144A6C"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                />
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_0_5513"
                                                                        x1={22}
                                                                        y1={0}
                                                                        x2={22}
                                                                        y2={44}
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stopColor="white" />
                                                                        <stop
                                                                            offset={1}
                                                                            stopColor="white"
                                                                            stopOpacity={0}
                                                                        />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <h3 className="text-lg font-regular text-[#144A6C] text-start">
                                                                Book Appointment
                                                            </h3>
                                                            <span className="text-[#A1A5AA] font-regular">
                                                                Provide details to book an
                                                                appointment
                                                            </span>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                    <form className="w-full max-w-4xl mx-auto mt-5">
                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                <label
                                                                    className="text-[#757575]"
                                                                    htmlFor="grid-address"
                                                                >
                                                                    Patient
                                                                </label>
                                                                <Listbox
                                                                    value={selectPatient}
                                                                    onChange={setSelectPatient}
                                                                >
                                                                    <div className="mt-2 relative">
                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                            <span className="block truncate">
                                                                                {selectPatient.name}
                                                                            </span>
                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                <ChevronDownIcon
                                                                                    className="h-5 w-5 text-[#144A6C]"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Listbox.Button>

                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {patients.map(
                                                                                (patient) => (
                                                                                    <Listbox.Option
                                                                                        key={patient.id}
                                                                                        value={patient}
                                                                                        className={({
                                                                                            active,
                                                                                        }) =>
                                                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                                                ? "bg-[#144A6C] text-white"
                                                                                                : "text-gray-900"
                                                                                            }`
                                                                                        }
                                                                                    >
                                                                                        {({ selected }) => (
                                                                                            <>
                                                                                                <span
                                                                                                    className={`block truncate ${selected
                                                                                                        ? "font-medium"
                                                                                                        : "font-normal"
                                                                                                        }`}
                                                                                                >
                                                                                                    {patient.name}
                                                                                                </span>
                                                                                                {selected && (
                                                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#144A6C]">
                                                                                                        <CheckIcon
                                                                                                            className="h-5 w-5"
                                                                                                            aria-hidden="true"
                                                                                                        />
                                                                                                    </span>
                                                                                                )}
                                                                                            </>
                                                                                        )}
                                                                                    </Listbox.Option>
                                                                                )
                                                                            )}
                                                                        </Listbox.Options>
                                                                    </div>
                                                                </Listbox>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                <label
                                                                    className="text-[#757575]"
                                                                    htmlFor="grid-category"
                                                                >
                                                                    Treatment
                                                                </label>
                                                                <Listbox
                                                                    value={selectedTreatment}
                                                                    onChange={
                                                                        setSelectedTreatment
                                                                    }
                                                                >
                                                                    <div className="mt-2 relative">
                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                            <span className="block truncate">
                                                                                {selectedTreatment.name}
                                                                            </span>
                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                <ChevronDownIcon
                                                                                    className="h-5 w-5 text-[#144A6C]"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Listbox.Button>

                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {treatments.map(
                                                                                (treatment) => (
                                                                                    <Listbox.Option
                                                                                        key={treatment.id}
                                                                                        value={treatment}
                                                                                        className={({
                                                                                            active,
                                                                                        }) =>
                                                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                                                ? "bg-[#144A6C] text-white"
                                                                                                : "text-gray-900"
                                                                                            }`
                                                                                        }
                                                                                    >
                                                                                        {({ selected }) => (
                                                                                            <>
                                                                                                <span
                                                                                                    className={`block truncate ${selected
                                                                                                        ? "font-medium"
                                                                                                        : "font-normal"
                                                                                                        }`}
                                                                                                >
                                                                                                    {
                                                                                                        treatment.name
                                                                                                    }
                                                                                                </span>
                                                                                                {selected && (
                                                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                        <CheckIcon
                                                                                                            className="h-5 w-5"
                                                                                                            aria-hidden="true"
                                                                                                        />
                                                                                                    </span>
                                                                                                )}
                                                                                            </>
                                                                                        )}
                                                                                    </Listbox.Option>
                                                                                )
                                                                            )}
                                                                        </Listbox.Options>
                                                                    </div>
                                                                </Listbox>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                <label
                                                                    className="text-[#757575]"
                                                                    htmlFor="grid-address"
                                                                >
                                                                    Booking Month
                                                                </label>
                                                                <Listbox
                                                                    value={selected}
                                                                    onChange={setSelected}
                                                                >
                                                                    <div className="mt-2 relative">
                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                            <span className="block truncate">
                                                                                {selected.name}
                                                                            </span>
                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                <ChevronDownIcon
                                                                                    className="h-5 w-5 text-[#144A6C]"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Listbox.Button>

                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {bookingMonths.map(
                                                                                (month) => (
                                                                                    <Listbox.Option
                                                                                        key={month.id}
                                                                                        value={month}
                                                                                        className={({
                                                                                            active,
                                                                                        }) =>
                                                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                                                ? "bg-[#144A6C] text-white"
                                                                                                : "text-gray-900"
                                                                                            }`
                                                                                        }
                                                                                    >
                                                                                        {({ selected }) => (
                                                                                            <>
                                                                                                <span
                                                                                                    className={`block truncate ${selected
                                                                                                        ? "font-medium"
                                                                                                        : "font-normal"
                                                                                                        }`}
                                                                                                >
                                                                                                    {month.name}
                                                                                                </span>
                                                                                                {selected && (
                                                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                        <CheckIcon
                                                                                                            className="h-5 w-5"
                                                                                                            aria-hidden="true"
                                                                                                        />
                                                                                                    </span>
                                                                                                )}
                                                                                            </>
                                                                                        )}
                                                                                    </Listbox.Option>
                                                                                )
                                                                            )}
                                                                        </Listbox.Options>
                                                                    </div>
                                                                </Listbox>
                                                            </div>

                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                <label
                                                                    className="text-[#757575]"
                                                                    htmlFor="grid-category"
                                                                >
                                                                    Open Slots
                                                                </label>
                                                                <Listbox
                                                                    value={selectedSlot}
                                                                    onChange={setSelectedSlot}
                                                                >
                                                                    <div className="mt-2 relative">
                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                            <span className="block truncate">
                                                                                {selectedSlot.name}
                                                                            </span>
                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                <ChevronDownIcon
                                                                                    className="h-5 w-5 text-[#144A6C]"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Listbox.Button>

                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {openSlots.map((slot) => (
                                                                                <Listbox.Option
                                                                                    key={slot.id}
                                                                                    value={slot}
                                                                                    className={({
                                                                                        active,
                                                                                    }) =>
                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                                            ? "bg-[#144A6C] text-white"
                                                                                            : "text-gray-900"
                                                                                        }`
                                                                                    }
                                                                                >
                                                                                    {({ selected }) => (
                                                                                        <>
                                                                                            <span
                                                                                                className={`block truncate ${selected
                                                                                                    ? "font-medium"
                                                                                                    : "font-normal"
                                                                                                    }`}
                                                                                            >
                                                                                                {slot.name}
                                                                                            </span>
                                                                                            {selected && (
                                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                    <CheckIcon
                                                                                                        className="h-5 w-5"
                                                                                                        aria-hidden="true"
                                                                                                    />
                                                                                                </span>
                                                                                            )}
                                                                                        </>
                                                                                    )}
                                                                                </Listbox.Option>
                                                                            ))}
                                                                        </Listbox.Options>
                                                                    </div>
                                                                </Listbox>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="bg-white  gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB]  mt-5">
                                                <button
                                                    type="button"
                                                    className="bg-[#144A6C] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setModalAnimation(false);
                                                    }}
                                                >
                                                    Book Appointment
                                                </button>
                                                <button
                                                    type="button"
                                                    className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                                    onClick={() => {
                                                        setTimeout(() => {
                                                            setIsOpen(false);
                                                        }, 500);
                                                        setModalAnimation(false);
                                                    }}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="card">
                <div className="p-4 sm:p-6 min-h-screen">
                    <div className="bg-white rounded overflow-x-auto min-w-0">
                        <FullCalendar
                            height="auto"
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="timeGridDay"
                            selectable={true}
                            selectMirror={true}
                            editable={true}
                            events={events}
                            select={handleDateSelect}
                            eventClick={handleEventClick}
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay',
                            }}
                        />
                    </div>

                    {modalOpen &&
                        createPortal(
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg p-6 w-full max-w-md">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-semibold">
                                            {selectedDateInfo
                                                ? formatDate(selectedDateInfo.start)
                                                : 'Edit Event'}
                                        </h2>
                                        <button onClick={() => setModalOpen(false)} className="text-gray-600">&times;</button>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-1" htmlFor="eventTitle">
                                                Add event title
                                            </label>
                                            <input
                                                id="eventTitle"
                                                type="text"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                className="w-full border border-gray-300 rounded px-3 py-2"
                                                required
                                            />
                                        </div>
                                        <div className="flex justify-end gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setModalOpen(false)}
                                                className="px-4 py-2 border rounded text-[#144A6C]"
                                            >
                                                Close
                                            </button>
                                            <button type="submit" className="px-4 py-2 bg-[#144A6C] text-white rounded">
                                                Save changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>,
                            document.body
                        )}
                </div>
            </div>
        </>
    );
}