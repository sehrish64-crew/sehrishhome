"use client";

import { Search, Plus } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";

interface Doctor {
    id: string;
    fullName: string;
    specialty: string;
    phone: string;
    email: string;
    address: string;
    appointments: string;
    patients: string;
    packacge: string;
    status: "Cleared" | "Unpaid" | "Upcoming"; // <-- new field
}
interface Subscription {
    id: number;
    user: string;
    email: string;
    plan: string;
    startDate: string;
    endDate: string;
    date: string;
    amount: number;
    treatment: string;
    total: string;
    expires: string;
}

import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
// import flatpickr from "flatpickr";

export default function Patient() {
    const userList = [
        { id: 1, fullName: "John Doe" },
        { id: 2, fullName: "Alexa jordan" },
        { id: 3, fullName: "Lucci" },
    ];
    const doctors: Doctor[] = [
        {
            id: "16843215",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Cleared",
        },
        {
            id: "16843214",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Unpaid",
        },
        {
            id: "16843216",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Upcoming",
        },
        {
            id: "16843215",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Cleared",
        },
        {
            id: "16843214",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Unpaid",
        },
        {
            id: "16843216",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Upcoming",
        },
        {
            id: "16843215",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Cleared",
        },
        {
            id: "16843214",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Unpaid",
        },
        {
            id: "16843216",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Upcoming",
        },
        {
            id: "16843215",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Cleared",
        },
        {
            id: "16843214",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Unpaid",
        },
        {
            id: "16843216",
            fullName: "A1B2C3D4E5",
            specialty: "01-01-2025",
            phone: "Johnsie Jock",
            email: "Annabel Rohan",
            address: "palate expansion",
            appointments: "$13,408.17",
            patients: "$169.43",
            packacge: "Basic",
            status: "Upcoming",
        },
    ];
    const subscriptions = [
        {
            id: 1,
            user: "John Doe",
            email: "john.doe@example.com",
            plan: "Pro",
            startDate: "2025-01-01",
            endDate: "2025-12-31",
            date: "01-12-2025",
            amount: 120.0,
            treatment: "$350.12",
            total: "$13,408.17",
            expires: "17-02-2025"  // fixed key and colon
        },
        {
            id: 2,
            user: "John Doe",
            email: "john.doe@example.com",
            plan: "Pro",
            startDate: "2025-01-01",
            endDate: "2025-12-31",
            date: "01-12-2025",
            amount: 120.0,
            treatment: "$350.12",
            total: "$13,408.17",
            expires: "17-02-2025"  // fixed key and colon
        },
        {
            id: 3,
            user: "John Doe",
            email: "john.doe@example.com",
            plan: "Pro",
            startDate: "2025-01-01",
            endDate: "2025-12-31",
            date: "01-12-2025",
            amount: 120.0,
            treatment: "$350.12",
            total: "$13,408.17",
            expires: "17-02-2025"  // fixed key and colon
        }

    ];
    const increase = [
        { id: 1, name: "5%", discount: "2%" },
        { id: 2, name: "10%", discount: "5%" },
        { id: 3, name: "15%", discount: "7%" },
    ];

    const profits = [
        { id: 1, name: "Gross Profit" },
        { id: 2, name: "Net Profit" },
        { id: 3, name: "Operating Profit" },
    ];

    const expenses = [
        {
            id: 1,
            doctor: "Dr. Khan",
            patient: "Ali Raza",
            treatment: "Dental Cleaning",
            invoiceDate: "2025-08-01",
            totalAmount: 5000,
            paidAmount: 3000,
            remaining: 2000,
            status: "Unpaid",
        },
        {
            id: 2,
            doctor: "Dr. Sara",
            patient: "Fatima Noor",
            treatment: "Root Canal",
            invoiceDate: "2025-08-03",
            totalAmount: 8000,
            paidAmount: 8000,
            remaining: 0,
            status: "Paid",
        },
        {
            id: 3,
            doctor: "Dr. Ahmad",
            patient: "Usman Tariq",
            treatment: "Filling",
            invoiceDate: "2025-08-05",
            totalAmount: 3000,
            paidAmount: 1000,
            remaining: 2000,
            status: "Unpaid",
        },
    ];

    const frequencyOptions = [
        { id: 1, name: "Check" },
        { id: 2, name: "Card Via" },
        { id: 3, name: "Online Transfer" },
    ];
    const clients = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    ];
    const patients = [
        { id: 1, name: "Ali Khan", age: 32 },
        { id: 2, name: "Fatima Noor", age: 27 },
        { id: 3, name: "Hassan Raza", age: 45 },
    ];
    const checkups = [
        { id: 1, name: "Regular Checkup" },
        { id: 2, name: "Follow-up" },
        { id: 3, name: "X-Ray Evaluation" },
    ];
    const [selectedIncrease, setSelectedIncrease] = useState(increase[0]);

    const [selectedCheckup, setSelectedCheckup] = useState(checkups[0]);
    const [selectedProfit, setSelectedProfit] = useState(profits[0]);
    const [selectedPatient, setSelectedPatient] = useState(patients[0]);
    const [selectedFrequency, setSelectedFrequency] = useState({ id: 1, name: "Check" });
    const [selectedClient, setSelectedClient] = useState(clients[0]);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredDoctors = doctors.filter((doctor) =>
        doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const [isOpen, setIsOpen] = useState(false);
    const [ModalAnimation, setModalAnimation] = useState(false);
    const {
        watch,
        formState: { errors },
    } = useForm();
    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = ["Quotes", "Invoices"];
    const [ShowClinicModal, setShowClinicModal] = useState(false);
    const [EditClinicModal, setEditClinicModal] = useState(false);
    const [ViewClinicModal, setViewClinicModal] = useState(false);
    const [ApprovedClinic, setApprovedClinic] = useState(false);
    const [ClinicModalAnimation, setClinicModalAnimation] = useState(false);
    const [showExpenseModal, setShowExpenseModal] = useState(false);
    const [expenseModalAnimation, setExpenseModalAnimation] = useState(false);
    return (
        <>
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
                                            <div className="flex gap-1 border-b border-[#E5E7EB] pb-4 w-100">
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
                                                            stroke="url(#paint0_linear_313_4903)"
                                                            strokeOpacity="0.3"
                                                        />
                                                        <path
                                                            d="M16.32 29.1367L16.6605 28.4684H16.6605L16.32 29.1367ZM14.8633 27.68L14.1951 28.0205H14.1951L14.8633 27.68ZM27.68 14.8633L28.0205 14.1951V14.1951L27.68 14.8633ZM29.1367 16.32L28.4684 16.6605V16.6605L29.1367 16.32ZM16.32 14.8633L16.6605 15.5316H16.6605L16.32 14.8633ZM14.8633 16.32L15.5316 16.6605V16.6605L14.8633 16.32ZM28.75 21.1667C28.75 21.5809 29.0858 21.9167 29.5 21.9167C29.9142 21.9167 30.25 21.5809 30.25 21.1667H29.5H28.75ZM21.1667 30.25C21.5809 30.25 21.9167 29.9142 21.9167 29.5C21.9167 29.0858 21.5809 28.75 21.1667 28.75V29.5V30.25ZM18.6667 17.9167C18.2525 17.9167 17.9167 18.2525 17.9167 18.6667C17.9167 19.0809 18.2525 19.4167 18.6667 19.4167V18.6667V17.9167ZM25.3333 19.4167C25.7475 19.4167 26.0833 19.0809 26.0833 18.6667C26.0833 18.2525 25.7475 17.9167 25.3333 17.9167V18.6667V19.4167ZM18.6667 21.25C18.2525 21.25 17.9167 21.5858 17.9167 22C17.9167 22.4142 18.2525 22.75 18.6667 22.75V22V21.25ZM25.3333 22.75C25.7475 22.75 26.0833 22.4142 26.0833 22C26.0833 21.5858 25.7475 21.25 25.3333 21.25V22V22.75ZM18.6667 24.5833C18.2525 24.5833 17.9167 24.9191 17.9167 25.3333C17.9167 25.7475 18.2525 26.0833 18.6667 26.0833V25.3333V24.5833ZM22 26.0833C22.4142 26.0833 22.75 25.7475 22.75 25.3333C22.75 24.9191 22.4142 24.5833 22 24.5833V25.3333V26.0833ZM23.8777 29.9138L24.5892 30.151V30.151L23.8777 29.9138ZM24.2633 28.7568L23.5518 28.5197V28.5197L24.2633 28.7568ZM24.6613 28.113L25.1916 28.6433L25.1916 28.6433L24.6613 28.113ZM28.5045 24.2698L27.9742 23.7394L27.9742 23.7394L28.5045 24.2698ZM30.5636 26.3288L31.0939 26.8592V26.8592L30.5636 26.3288ZM26.7204 30.172L26.19 29.6417V29.6417L26.7204 30.172ZM26.0765 30.57L26.3137 31.2815H26.3137L26.0765 30.57ZM24.9195 30.9556L25.1567 31.6672H25.1567L24.9195 30.9556ZM26.5093 30.3691L26.961 30.9678V30.9678L26.5093 30.3691ZM26.3471 30.4693L26.0136 29.7975L26.3471 30.4693ZM30.5636 24.2698L30.0332 24.8001L30.5636 24.2698ZM31.0596 24.8422L31.7316 24.5092V24.5092L31.0596 24.8422ZM31.0596 25.7564L31.7316 26.0894V26.0894L31.0596 25.7564ZM29.0769 23.7737L29.4099 24.4457H29.4099L29.0769 23.7737ZM29.9912 23.7737L29.6582 24.4457H29.6582L29.9912 23.7737ZM24.364 28.4862L25.0358 28.8198H25.0358L24.364 28.4862ZM24.4643 28.324L23.8655 27.8724L23.8655 27.8724L24.4643 28.324ZM23.6858 30.8355L24.3923 30.5836V30.5836L23.6858 30.8355ZM23.9978 31.1475L23.7459 31.8539L23.9978 31.1475ZM19.8333 14.5V15.25H24.1667V14.5V13.75H19.8333V14.5ZM14.5 24.1667H15.25V19.8333H14.5H13.75V24.1667H14.5ZM19.8333 29.5V28.75C18.8875 28.75 18.2233 28.7494 17.7051 28.7071C17.1956 28.6655 16.8937 28.5872 16.6605 28.4684L16.32 29.1367L15.9795 29.8049C16.4594 30.0494 16.9807 30.1529 17.5829 30.2021C18.1764 30.2506 18.9123 30.25 19.8333 30.25V29.5ZM14.5 24.1667H13.75C13.75 25.0877 13.7494 25.8236 13.7979 26.4171C13.8471 27.0193 13.9506 27.5406 14.1951 28.0205L14.8633 27.68L15.5316 27.3395C15.4128 27.1063 15.3345 26.8044 15.2929 26.2949C15.2506 25.7767 15.25 25.1125 15.25 24.1667H14.5ZM16.32 29.1367L16.6605 28.4684C16.1744 28.2208 15.7792 27.8256 15.5316 27.3395L14.8633 27.68L14.1951 28.0205C14.5865 28.7888 15.2112 29.4135 15.9795 29.8049L16.32 29.1367ZM24.1667 14.5V15.25C25.1125 15.25 25.7767 15.2506 26.2949 15.2929C26.8044 15.3345 27.1063 15.4128 27.3395 15.5316L27.68 14.8633L28.0205 14.1951C27.5406 13.9506 27.0193 13.8471 26.4171 13.7979C25.8236 13.7494 25.0877 13.75 24.1667 13.75V14.5ZM29.5 19.8333H30.25C30.25 18.9123 30.2506 18.1764 30.2021 17.5829C30.1529 16.9807 30.0494 16.4594 29.8049 15.9795L29.1367 16.32L28.4684 16.6605C28.5872 16.8937 28.6655 17.1956 28.7071 17.7051C28.7494 18.2233 28.75 18.8875 28.75 19.8333H29.5ZM27.68 14.8633L27.3395 15.5316C27.8256 15.7792 28.2208 16.1744 28.4684 16.6605L29.1367 16.32L29.8049 15.9795C29.4135 15.2112 28.7888 14.5865 28.0205 14.1951L27.68 14.8633ZM19.8333 14.5V13.75C18.9123 13.75 18.1764 13.7494 17.5829 13.7979C16.9807 13.8471 16.4594 13.9506 15.9795 14.1951L16.32 14.8633L16.6605 15.5316C16.8937 15.4128 17.1956 15.3345 17.7051 15.2929C18.2233 15.2506 18.8875 15.25 19.8333 15.25V14.5ZM14.5 19.8333H15.25C15.25 18.8875 15.2506 18.2233 15.2929 17.7051C15.3345 17.1956 15.4128 16.8937 15.5316 16.6605L14.8633 16.32L14.1951 15.9795C13.9506 16.4594 13.8471 16.9807 13.7979 17.5829C13.7494 18.1764 13.75 18.9123 13.75 19.8333H14.5ZM16.32 14.8633L15.9795 14.1951C15.2112 14.5865 14.5865 15.2112 14.1951 15.9795L14.8633 16.32L15.5316 16.6605C15.7792 16.1744 16.1744 15.7792 16.6605 15.5316L16.32 14.8633ZM29.5 19.8333H28.75V21.1667H29.5H30.25V19.8333H29.5ZM19.8333 29.5V30.25H21.1667V29.5V28.75H19.8333V29.5ZM18.6667 18.6667V19.4167H25.3333V18.6667V17.9167H18.6667V18.6667ZM18.6667 22V22.75H25.3333V22V21.25H18.6667V22ZM18.6667 25.3333V26.0833H22V25.3333V24.5833H18.6667V25.3333ZM23.8777 29.9138L24.5892 30.151L24.9749 28.994L24.2633 28.7568L23.5518 28.5197L23.1662 29.6767L23.8777 29.9138ZM24.6613 28.113L25.1916 28.6433L29.0348 24.8001L28.5045 24.2698L27.9742 23.7394L24.131 27.5826L24.6613 28.113ZM30.5636 26.3288L30.0332 25.7985L26.19 29.6417L26.7204 30.172L27.2507 30.7024L31.0939 26.8592L30.5636 26.3288ZM26.0765 30.57L25.8393 29.8585L24.6823 30.2441L24.9195 30.9556L25.1567 31.6672L26.3137 31.2815L26.0765 30.57ZM26.7204 30.172L26.19 29.6417C26.0733 29.7584 26.0636 29.7658 26.0576 29.7703L26.5093 30.3691L26.961 30.9678C27.0695 30.8859 27.1623 30.7908 27.2507 30.7024L26.7204 30.172ZM26.0765 30.57L26.3137 31.2815C26.4323 31.242 26.5589 31.2015 26.6806 31.1411L26.3471 30.4693L26.0136 29.7975C26.0068 29.8009 25.9959 29.8063 25.8393 29.8585L26.0765 30.57ZM26.5093 30.3691L26.0576 29.7703C26.0438 29.7807 26.0291 29.7899 26.0136 29.7975L26.3471 30.4693L26.6806 31.1411C26.7792 31.0921 26.8731 31.0341 26.961 30.9678L26.5093 30.3691ZM30.5636 24.2698L30.0332 24.8001C30.1796 24.9464 30.2671 25.0344 30.3293 25.104C30.3879 25.1696 30.3925 25.1852 30.3876 25.1752L31.0596 24.8422L31.7316 24.5092C31.5882 24.2197 31.3318 23.9773 31.0939 23.7394L30.5636 24.2698ZM30.5636 26.3288L31.0939 26.8592C31.3318 26.6213 31.5882 26.3789 31.7316 26.0894L31.0596 25.7564L30.3876 25.4234C30.3925 25.4134 30.3879 25.429 30.3293 25.4946C30.2671 25.5642 30.1796 25.6522 30.0332 25.7985L30.5636 26.3288ZM31.0596 24.8422L30.3876 25.1752C30.4264 25.2534 30.4264 25.3452 30.3876 25.4234L31.0596 25.7564L31.7316 26.0894C31.9783 25.5916 31.9783 25.007 31.7316 24.5092L31.0596 24.8422ZM28.5045 24.2698L29.0348 24.8001C29.1811 24.6538 29.2691 24.5662 29.3387 24.5041C29.4043 24.4454 29.4199 24.4408 29.4099 24.4457L29.0769 23.7737L28.7439 23.1017C28.4544 23.2452 28.212 23.5016 27.9742 23.7394L28.5045 24.2698ZM30.5636 24.2698L31.0939 23.7394C30.856 23.5016 30.6137 23.2452 30.3242 23.1017L29.9912 23.7737L29.6582 24.4457C29.6482 24.4408 29.6637 24.4454 29.7294 24.5041C29.799 24.5662 29.8869 24.6538 30.0332 24.8001L30.5636 24.2698ZM29.0769 23.7737L29.4099 24.4457C29.4881 24.407 29.5799 24.407 29.6582 24.4457L29.9912 23.7737L30.3242 23.1017C29.8263 22.855 29.2418 22.855 28.7439 23.1017L29.0769 23.7737ZM24.2633 28.7568L24.9749 28.994C25.027 28.8374 25.0324 28.8265 25.0358 28.8198L24.364 28.4862L23.6923 28.1527C23.6318 28.2744 23.5914 28.4011 23.5518 28.5197L24.2633 28.7568ZM24.6613 28.113L24.131 27.5826C24.0426 27.671 23.9474 27.7639 23.8655 27.8724L24.4643 28.324L25.063 28.7757C25.0675 28.7697 25.0749 28.76 25.1916 28.6433L24.6613 28.113ZM24.364 28.4862L25.0358 28.8198C25.0435 28.8043 25.0526 28.7895 25.063 28.7757L24.4643 28.324L23.8655 27.8724C23.7992 27.9602 23.7412 28.0541 23.6923 28.1527L24.364 28.4862ZM23.8777 29.9138L23.1662 29.6767C23.0871 29.914 23.0106 30.1411 22.9664 30.329C22.9249 30.5058 22.8735 30.7905 22.9794 31.0874L23.6858 30.8355L24.3923 30.5836C24.417 30.6529 24.4171 30.7053 24.4165 30.7202C24.4161 30.7316 24.4153 30.7203 24.4266 30.6721C24.4514 30.5668 24.5006 30.4167 24.5892 30.151L23.8777 29.9138ZM24.9195 30.9556L24.6823 30.2441C24.4167 30.3327 24.2666 30.3819 24.1612 30.4067C24.113 30.418 24.1017 30.4172 24.1131 30.4168C24.1281 30.4162 24.1804 30.4164 24.2497 30.4411L23.9978 31.1475L23.7459 31.8539C24.0429 31.9598 24.3275 31.9085 24.5043 31.8669C24.6922 31.8228 24.9194 31.7463 25.1567 31.6672L24.9195 30.9556ZM23.6858 30.8355L22.9794 31.0874C23.1069 31.445 23.3883 31.7264 23.7459 31.8539L23.9978 31.1475L24.2497 30.4411C24.3162 30.4648 24.3685 30.5171 24.3923 30.5836L23.6858 30.8355Z"
                                                            fill="#144A6C"
                                                        />
                                                        <defs>
                                                            <linearGradient
                                                                id="paint0_linear_313_4903"
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
                                                        Update Payment
                                                    </h3>
                                                    <span className="text-[#A1A5AA] font-regular">
                                                        Provide details to Update Payment
                                                    </span>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="flex justify-between mt-3">
                                                <span className="text-[#475467]">Invoice #</span>
                                                <h3>784D77DA</h3>
                                            </div>
                                            <form className="w-full max-w-4xl mx-auto mt-5">
                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                    <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                        <label
                                                            className="text-[#757575]"
                                                            htmlFor="grid-address"
                                                        >
                                                            Check Number
                                                        </label>
                                                        <input
                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                            id="grid-address"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                    <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                        <label
                                                            className="text-[#757575]"
                                                            htmlFor="grid-address"
                                                        >
                                                            Date
                                                        </label>
                                                        <input
                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                            id="grid-address"
                                                            type="date"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                    <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                        <label
                                                            className="text-[#757575]"
                                                            htmlFor="grid-address"
                                                        >
                                                            Amount
                                                        </label>
                                                        <input
                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                            id="grid-address"
                                                            type="text"
                                                        />
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
                                            Create
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
            <div className="flex flex-col h-full lg:rounded-r-lg">
                {/* Header - Same background as sidebar */}
                <div className="pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-shrink-0 lg:rounded-tr-lg">
                    <h1 className="text-3xl font-regular text-[#144A6C]">Quotations & Invoices</h1>
                </div>
                <div className="xl:col-span-2 space-y-0">
                    <div className="flex md:space-x-4 space-x-0 md:flex-row flex-row md:ml-4 ml-0 overflow-x-auto">
                        {tabs.map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedTab(idx)}
                                className={`clip-path-custom-shape py-3 px-6 text-sm font-medium border-b-2 mb-0 md:-mb-px focus:outline-none whitespace-nowrap  ${selectedTab === idx
                                    ? "border-[#144A6C] text-[#144A6C] bg-[#FFFFFF80]"
                                    : "text-gray-500 border-transparent"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>


                    {selectedTab === 0 && (
                        <>
                            {EditClinicModal && (
                                <div
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="dialog-title"
                                    className="relative z-10"
                                >
                                    <div className="fixed inset-0 bg-[#000]/60 backdrop-blur-md transition-opacity overflow-y-auto">
                                        <div className="flex items-center justify-center min-h-screen px-4 py-8 text-center">
                                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                                <div className="absolute inset-0"></div>
                                            </div>

                                            <div
                                                className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-4xl mx-auto 
            ${ClinicModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"}
            duration-500 ease-out`}
                                            >
                                                <div className="bg-white px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
                                                    <div className="sm:flex sm:items-start">
                                                        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                                            {/* Header */}
                                                            <div className="flex gap-1 border-b border-[#E5E7EB] pb-4 w-full">
                                                                <div className="user-icon">
                                                                    <svg
                                                                        width={44}
                                                                        height={44}
                                                                        viewBox="0 0 44 44"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <rect width={44} height={44} rx={22} fill="#F5FAFA" />
                                                                        <rect
                                                                            x="0.5"
                                                                            y="0.5"
                                                                            width={43}
                                                                            height={43}
                                                                            rx="21.5"
                                                                            stroke="url(#paint0_linear_237_2193)"
                                                                            strokeOpacity="0.3"
                                                                        />
                                                                        <path
                                                                            d="M18.0002 30.3337V29.5837H18.0002L18.0002 30.3337ZM26.0002 30.3337V31.0837V30.3337ZM28.6668 27.667H27.9168H28.6668ZM28.6668 16.3337H29.4168H28.6668ZM28.4852 14.577L29.1534 14.2365V14.2365L28.4852 14.577ZM26.0002 13.667L26.0002 12.917L26.0002 13.667ZM27.7568 13.8486L28.0973 13.1804L28.0973 13.1804L27.7568 13.8486ZM27.7568 30.152L28.0973 30.8203L27.7568 30.152ZM28.4852 29.4236L27.8169 29.0831L28.4852 29.4236ZM16.2435 30.152L16.584 29.4837L16.2435 30.152ZM15.3335 27.667H14.5835H15.3335ZM15.5152 29.4236L16.1834 29.0832L16.1834 29.0831L15.5152 29.4236ZM16.0835 18.667C16.0835 18.2528 15.7477 17.917 15.3335 17.917C14.9193 17.917 14.5835 18.2528 14.5835 18.667L16.0835 18.667ZM20.3335 12.917C19.9193 12.917 19.5835 13.2528 19.5835 13.667C19.5835 14.0812 19.9193 14.417 20.3335 14.417V12.917ZM15.4758 18.5247L14.9454 17.9944L15.4758 18.5247ZM20.1912 13.8093L20.7216 14.3396L20.1912 13.8093ZM15.5347 18.667L15.5347 19.417L15.5347 18.667ZM19.5002 18.667V17.917V18.667ZM20.3335 17.8337H19.5835H20.3335ZM20.3335 13.8682H21.0835V13.8682L20.3335 13.8682ZM18.6668 21.2503C18.2526 21.2503 17.9168 21.5861 17.9168 22.0003C17.9168 22.4145 18.2526 22.7503 18.6668 22.7503V21.2503ZM25.3335 22.7503C25.7477 22.7503 26.0835 22.4145 26.0835 22.0003C26.0835 21.5861 25.7477 21.2503 25.3335 21.2503V22.7503ZM23.6668 17.917C23.2526 17.917 22.9168 18.2528 22.9168 18.667C22.9168 19.0812 23.2526 19.417 23.6668 19.417V17.917ZM25.3335 19.417C25.7477 19.417 26.0835 19.0812 26.0835 18.667C26.0835 18.2528 25.7477 17.917 25.3335 17.917V19.417ZM18.6668 24.5837C18.2526 24.5837 17.9168 24.9194 17.9168 25.3337C17.9168 25.7479 18.2526 26.0837 18.6668 26.0837V24.5837ZM25.3335 26.0837C25.7477 26.0837 26.0835 25.7479 26.0835 25.3337C26.0835 24.9194 25.7477 24.5837 25.3335 24.5837V26.0837ZM18.0002 30.3337V31.0837H26.0002V30.3337V29.5837H18.0002V30.3337ZM28.6668 27.667H29.4168V16.3337H28.6668H27.9168V27.667H28.6668ZM28.6668 16.3337H29.4168C29.4168 15.8793 29.4174 15.4935 29.3916 15.1779C29.3651 14.8536 29.3071 14.5381 29.1534 14.2365L28.4852 14.577L27.8169 14.9175C27.8449 14.9724 27.8777 15.0685 27.8966 15.3001C27.9162 15.5404 27.9168 15.8546 27.9168 16.3337L28.6668 16.3337ZM26.0002 13.667V14.417C26.4792 14.417 26.7935 14.4176 27.0338 14.4372C27.2653 14.4561 27.3614 14.4889 27.4163 14.5169L27.7568 13.8486L28.0973 13.1804C27.7957 13.0267 27.4802 12.9687 27.1559 12.9422C26.8404 12.9164 26.4545 12.917 26.0002 12.917L26.0002 13.667ZM28.4852 14.577L29.1534 14.2365C28.9217 13.7818 28.552 13.4121 28.0973 13.1804L27.7568 13.8486L27.4163 14.5169C27.5888 14.6048 27.729 14.745 27.8169 14.9175L28.4852 14.577ZM26.0002 30.3337V31.0837C26.4545 31.0837 26.8404 31.0842 27.1559 31.0585C27.4802 31.032 27.7957 30.9739 28.0973 30.8203L27.7568 30.152L27.4163 29.4837C27.3614 29.5117 27.2653 29.5445 27.0338 29.5634C26.7935 29.5831 26.4792 29.5837 26.0002 29.5837V30.3337ZM28.6668 27.667H27.9168C27.9168 28.1461 27.9162 28.4603 27.8966 28.7006C27.8777 28.9321 27.8449 29.0282 27.8169 29.0831L28.4852 29.4236L29.1534 29.7641C29.3071 29.4625 29.3651 29.147 29.3916 28.8227C29.4174 28.5072 29.4168 28.1213 29.4168 27.667H28.6668ZM27.7568 30.152L28.0973 30.8203C28.552 30.5886 28.9217 30.2189 29.1534 29.7641L28.4852 29.4236L27.8169 29.0831C27.729 29.2556 27.5888 29.3959 27.4163 29.4837L27.7568 30.152ZM18.0002 30.3337L18.0002 29.5837C17.5211 29.5837 17.2069 29.5831 16.9666 29.5634C16.735 29.5445 16.6389 29.5117 16.584 29.4837L16.2435 30.152L15.903 30.8203C16.2046 30.9739 16.5201 31.032 16.8444 31.0585C17.16 31.0842 17.5458 31.0837 18.0002 31.0837V30.3337ZM15.3335 27.667H14.5835C14.5835 28.1213 14.5829 28.5072 14.6087 28.8227C14.6352 29.147 14.6932 29.4625 14.8469 29.7641L15.5152 29.4236L16.1834 29.0831C16.1554 29.0282 16.1226 28.9321 16.1037 28.7006C16.0841 28.4603 16.0835 28.1461 16.0835 27.667H15.3335ZM16.2435 30.152L16.584 29.4837C16.4115 29.3959 16.2713 29.2556 16.1834 29.0832L15.5152 29.4236L14.8469 29.7641C15.0786 30.2189 15.4483 30.5886 15.903 30.8203L16.2435 30.152ZM15.3335 18.667L14.5835 18.667L14.5835 27.667H15.3335H16.0835L16.0835 18.667H15.3335ZM26.0002 13.667L26.0002 12.917L20.3335 12.917V13.667V14.417L26.0002 14.417V13.667ZM15.4758 18.5247L16.0061 19.0551L20.7216 14.3396L20.1912 13.8093L19.6609 13.2789L14.9454 17.9944L15.4758 18.5247ZM15.5347 18.667L15.5347 19.417L19.5002 19.417V18.667V17.917L15.5347 17.917L15.5347 18.667ZM20.3335 17.8337H21.0835V13.8682H20.3335H19.5835V17.8337H20.3335ZM19.5002 18.667V19.417C20.3746 19.417 21.0835 18.7081 21.0835 17.8337L20.3335 17.8337H19.5835C19.5835 17.8797 19.5462 17.917 19.5002 17.917V18.667ZM20.1912 13.8093L20.7216 14.3396C20.3016 14.7596 19.5835 14.4621 19.5835 13.8682L20.3335 13.8682L21.0835 13.8682C21.0835 13.1258 20.1859 12.754 19.6609 13.2789L20.1912 13.8093ZM15.4758 18.5247L14.9454 17.9944C14.4205 18.5194 14.7923 19.417 15.5347 19.417L15.5347 18.667L15.5347 17.917C16.1286 17.917 16.4261 18.6351 16.0061 19.0551L15.4758 18.5247ZM18.6668 22.0003V22.7503H25.3335V22.0003V21.2503H18.6668V22.0003ZM23.6668 18.667V19.417H25.3335V18.667V17.917H23.6668V18.667ZM18.6668 25.3337V26.0837H25.3335V25.3337V24.5837H18.6668V25.3337Z"
                                                                            fill="#144A6C"
                                                                        />
                                                                        <defs>
                                                                            <linearGradient
                                                                                id="paint0_linear_237_2193"
                                                                                x1={22}
                                                                                y1={0}
                                                                                x2={22}
                                                                                y2={44}
                                                                                gradientUnits="userSpaceOnUse"
                                                                            >
                                                                                <stop stopColor="white" />
                                                                                <stop offset={1} stopColor="white" stopOpacity={0} />
                                                                            </linearGradient>
                                                                        </defs>
                                                                    </svg>

                                                                    {/* ...Your existing SVG code here... */}
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <h3 className="text-lg font-regular text-[#144A6C] text-start">
                                                                        Edit Quote
                                                                    </h3>

                                                                </div>
                                                            </div>

                                                            {/* Form */}
                                                            <form className="w-full max-w-4xl mx-auto mt-5">
                                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                        <label className="text-[#757575]" htmlFor="clinic-email">
                                                                            Doctor
                                                                        </label>
                                                                        <Listbox value={selectedClient} onChange={setSelectedClient}>
                                                                            <div className="mt-2 relative">
                                                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                    <span className="block truncate">
                                                                                        {selectedClient.name}
                                                                                    </span>
                                                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                        <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                    </span>
                                                                                </Listbox.Button>

                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                    {clients.map((client) => (
                                                                                        <Listbox.Option
                                                                                            key={client.id}
                                                                                            value={client}
                                                                                            className={({ active }) =>
                                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                }`
                                                                                            }
                                                                                        >
                                                                                            {({ selected }) => (
                                                                                                <>
                                                                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                        {client.name}
                                                                                                    </span>
                                                                                                    {selected && (
                                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                        <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                            Patient
                                                                        </label>
                                                                        <Listbox value={selectedPatient} onChange={setSelectedPatient}>
                                                                            <div className="mt-2 relative">
                                                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                    <span className="block truncate">
                                                                                        {selectedPatient.name}
                                                                                    </span>
                                                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                        <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                    </span>
                                                                                </Listbox.Button>

                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                    {patients.map((patient) => (
                                                                                        <Listbox.Option
                                                                                            key={patient.id}
                                                                                            value={patient}
                                                                                            className={({ active }) =>
                                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                }`
                                                                                            }
                                                                                        >
                                                                                            {({ selected }) => (
                                                                                                <>
                                                                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                        {patient.name}
                                                                                                    </span>
                                                                                                    {selected && (
                                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                    <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                        <label className="text-[#757575]" htmlFor="clinic-address">
                                                                            Treatment
                                                                        </label>
                                                                        <Listbox value={selectedCheckup} onChange={setSelectedCheckup}>
                                                                            <div className="mt-2 relative">
                                                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                    <span className="block truncate">{selectedCheckup.name}</span>
                                                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                        <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                    </span>
                                                                                </Listbox.Button>

                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                    {checkups.map((checkup) => (
                                                                                        <Listbox.Option
                                                                                            key={checkup.id}
                                                                                            value={checkup}
                                                                                            className={({ active }) =>
                                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                }`
                                                                                            }
                                                                                        >
                                                                                            {({ selected }) => (
                                                                                                <>
                                                                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                        {checkup.name}
                                                                                                    </span>
                                                                                                    {selected && (
                                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                        <label className="text-[#757575]" htmlFor="clinic-email">
                                                                            Visit Date
                                                                        </label>
                                                                        <input
                                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                            id="clinic-address"
                                                                            type="date"
                                                                        />
                                                                    </div>

                                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                        <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                            Next Visit Date
                                                                        </label>
                                                                        <input
                                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                            id="clinic-address"
                                                                            type="date"
                                                                        />

                                                                    </div>
                                                                </div>

                                                                <div className="w-full overflow-x-auto mt-3">
                                                                    <table className="min-w-full">
                                                                        <thead className="bg-gray-50 sticky top-0">
                                                                            <tr>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    Material Name
                                                                                </th>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    UOM
                                                                                </th>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    Quantity
                                                                                </th>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    Extra Qty
                                                                                </th>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    Extra Cost
                                                                                </th>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    Cost Without VAT
                                                                                </th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="bg-white divide-y divide-[#EAECF0]">
                                                                            {subscriptions.length === 0 ? (
                                                                                <tr>
                                                                                    <td
                                                                                        colSpan={8}
                                                                                        className="text-center py-8 text-gray-400 text-sm"
                                                                                    >
                                                                                        <div className="flex flex-col items-center justify-center">
                                                                                            <svg
                                                                                                className="w-10 h-10 text-gray-300 mb-2"
                                                                                                fill="none"
                                                                                                viewBox="0 0 24 24"
                                                                                            >
                                                                                                <path
                                                                                                    d="M12 9v4m0 4h.01"
                                                                                                    stroke="currentColor"
                                                                                                    strokeWidth={2}
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                />
                                                                                                <circle
                                                                                                    cx={12}
                                                                                                    cy={12}
                                                                                                    r={10}
                                                                                                    stroke="currentColor"
                                                                                                    strokeWidth={2}
                                                                                                />
                                                                                            </svg>
                                                                                            <p>No subscriptions found</p>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            ) : (
                                                                                subscriptions.map((sub) => (
                                                                                    <tr key={sub.id} className="hover:bg-gray-50">
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.user}
                                                                                        </td>
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.email}
                                                                                        </td>
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.plan}
                                                                                        </td>
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.startDate}
                                                                                        </td>
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.endDate}
                                                                                        </td>
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.date}
                                                                                        </td>

                                                                                    </tr>
                                                                                ))
                                                                            )}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div className="mt-3">
                                                                    <div className="flex">
                                                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                            <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                                Margin
                                                                            </label>
                                                                            <div className="flex gap-2">

                                                                                <Listbox value={selectedProfit} onChange={setSelectedProfit}>
                                                                                    <div className="relative mt-2">
                                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                            <span className="block truncate">{selectedProfit.name}</span>
                                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                            </span>
                                                                                        </Listbox.Button>

                                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                            {profits.map((profit) => (
                                                                                                <Listbox.Option
                                                                                                    key={profit.id}
                                                                                                    value={profit}
                                                                                                    className={({ active }) =>
                                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"}`
                                                                                                    }
                                                                                                >
                                                                                                    {({ selected }) => (
                                                                                                        <>
                                                                                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                                {profit.name}
                                                                                                            </span>
                                                                                                            {selected && (
                                                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                                </span>
                                                                                                            )}
                                                                                                        </>
                                                                                                    )}
                                                                                                </Listbox.Option>
                                                                                            ))}
                                                                                        </Listbox.Options>
                                                                                    </div>
                                                                                </Listbox>

                                                                                <input
                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                    id="clinic-address"
                                                                                    type="text" value="$"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                            <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                                Discount
                                                                            </label>
                                                                            <div className="flex gap-2">

                                                                                <Listbox value={selectedIncrease} onChange={setSelectedIncrease}>
                                                                                    <div className="relative mt-2">
                                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                            <span className="block truncate">
                                                                                                {selectedIncrease.name} — {selectedIncrease.discount}
                                                                                            </span>
                                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                            </span>
                                                                                        </Listbox.Button>

                                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                            {increase.map((item) => (
                                                                                                <Listbox.Option
                                                                                                    key={item.id}
                                                                                                    value={item}
                                                                                                    className={({ active }) =>
                                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                        }`
                                                                                                    }
                                                                                                >
                                                                                                    {({ selected }) => (
                                                                                                        <>
                                                                                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                                {item.name} — {item.discount}
                                                                                                            </span>
                                                                                                            {selected && (
                                                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                                </span>
                                                                                                            )}
                                                                                                        </>
                                                                                                    )}
                                                                                                </Listbox.Option>
                                                                                            ))}
                                                                                        </Listbox.Options>
                                                                                    </div>
                                                                                </Listbox>
                                                                                <input
                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                    id="clinic-address"
                                                                                    type="text" value="$"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mt03">
                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                                                        {/* Notes Box */}
                                                                        <div className="border border-gray-200 rounded-lg p-4">
                                                                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                                                                                Notes
                                                                            </label>
                                                                            <textarea
                                                                                id="notes"
                                                                                name="notes"
                                                                                rows={6}
                                                                                className="w-full rounded-md p-3 focus:outline-none"

                                                                            />
                                                                        </div>

                                                                        {/* Cost Summary Card */}
                                                                        <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
                                                                            <div className="space-y-3">
                                                                                <div className="flex justify-between text-sm text-gray-700">
                                                                                    <span>Cost</span>
                                                                                    <span>$100.00</span>
                                                                                </div>
                                                                                <div className="flex justify-between text-sm text-gray-700">
                                                                                    <span>Subtotal</span>
                                                                                    <span>$100.00</span>
                                                                                </div>
                                                                                <div className="flex justify-between text-sm text-gray-700">
                                                                                    <span>VAT</span>
                                                                                    <span>$28,016.00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between items-center">
                                                                                <span className="text-base font-semibold text-gray-900">
                                                                                    Total With VAT
                                                                                </span>
                                                                                <span className="text-lg font-bold text-gray-900">
                                                                                    $27,516.00
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    {/* Buttons */}
                                                    <div className="bg-white gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB] mt-5">
                                                        <button
                                                            type="button"
                                                            className="bg-[#144A6C] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                                                            onClick={() => {
                                                                setEditClinicModal(false);
                                                                setClinicModalAnimation(false);
                                                            }}
                                                        >
                                                            sss
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                                            onClick={() => {
                                                                setTimeout(() => {
                                                                    setEditClinicModal(false);
                                                                }, 500);
                                                                setClinicModalAnimation(false);
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
                            {ViewClinicModal && (
                                <div
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="dialog-title"
                                    className="relative z-10"
                                >
                                    <div className="fixed inset-0 bg-[#000]/60 backdrop-blur-md transition-opacity overflow-y-auto">
                                        <div className="flex items-center justify-center min-h-screen px-4 py-8 text-center">
                                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                                <div className="absolute inset-0"></div>
                                            </div>

                                            <div
                                                className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-4xl mx-auto 
            ${ClinicModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"}
            duration-500 ease-out`}
                                            >
                                                <div className="bg-white px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
                                                    <div className="sm:flex sm:items-start">
                                                        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                                            {/* Header */}
                                                            <div className="flex gap-1 border-b border-[#E5E7EB] pb-4 w-full">
                                                                <div className="user-icon">
                                                                    <svg
                                                                        width={44}
                                                                        height={44}
                                                                        viewBox="0 0 44 44"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <rect width={44} height={44} rx={22} fill="#F5FAFA" />
                                                                        <rect
                                                                            x="0.5"
                                                                            y="0.5"
                                                                            width={43}
                                                                            height={43}
                                                                            rx="21.5"
                                                                            stroke="url(#paint0_linear_237_2193)"
                                                                            strokeOpacity="0.3"
                                                                        />
                                                                        <path
                                                                            d="M18.0002 30.3337V29.5837H18.0002L18.0002 30.3337ZM26.0002 30.3337V31.0837V30.3337ZM28.6668 27.667H27.9168H28.6668ZM28.6668 16.3337H29.4168H28.6668ZM28.4852 14.577L29.1534 14.2365V14.2365L28.4852 14.577ZM26.0002 13.667L26.0002 12.917L26.0002 13.667ZM27.7568 13.8486L28.0973 13.1804L28.0973 13.1804L27.7568 13.8486ZM27.7568 30.152L28.0973 30.8203L27.7568 30.152ZM28.4852 29.4236L27.8169 29.0831L28.4852 29.4236ZM16.2435 30.152L16.584 29.4837L16.2435 30.152ZM15.3335 27.667H14.5835H15.3335ZM15.5152 29.4236L16.1834 29.0832L16.1834 29.0831L15.5152 29.4236ZM16.0835 18.667C16.0835 18.2528 15.7477 17.917 15.3335 17.917C14.9193 17.917 14.5835 18.2528 14.5835 18.667L16.0835 18.667ZM20.3335 12.917C19.9193 12.917 19.5835 13.2528 19.5835 13.667C19.5835 14.0812 19.9193 14.417 20.3335 14.417V12.917ZM15.4758 18.5247L14.9454 17.9944L15.4758 18.5247ZM20.1912 13.8093L20.7216 14.3396L20.1912 13.8093ZM15.5347 18.667L15.5347 19.417L15.5347 18.667ZM19.5002 18.667V17.917V18.667ZM20.3335 17.8337H19.5835H20.3335ZM20.3335 13.8682H21.0835V13.8682L20.3335 13.8682ZM18.6668 21.2503C18.2526 21.2503 17.9168 21.5861 17.9168 22.0003C17.9168 22.4145 18.2526 22.7503 18.6668 22.7503V21.2503ZM25.3335 22.7503C25.7477 22.7503 26.0835 22.4145 26.0835 22.0003C26.0835 21.5861 25.7477 21.2503 25.3335 21.2503V22.7503ZM23.6668 17.917C23.2526 17.917 22.9168 18.2528 22.9168 18.667C22.9168 19.0812 23.2526 19.417 23.6668 19.417V17.917ZM25.3335 19.417C25.7477 19.417 26.0835 19.0812 26.0835 18.667C26.0835 18.2528 25.7477 17.917 25.3335 17.917V19.417ZM18.6668 24.5837C18.2526 24.5837 17.9168 24.9194 17.9168 25.3337C17.9168 25.7479 18.2526 26.0837 18.6668 26.0837V24.5837ZM25.3335 26.0837C25.7477 26.0837 26.0835 25.7479 26.0835 25.3337C26.0835 24.9194 25.7477 24.5837 25.3335 24.5837V26.0837ZM18.0002 30.3337V31.0837H26.0002V30.3337V29.5837H18.0002V30.3337ZM28.6668 27.667H29.4168V16.3337H28.6668H27.9168V27.667H28.6668ZM28.6668 16.3337H29.4168C29.4168 15.8793 29.4174 15.4935 29.3916 15.1779C29.3651 14.8536 29.3071 14.5381 29.1534 14.2365L28.4852 14.577L27.8169 14.9175C27.8449 14.9724 27.8777 15.0685 27.8966 15.3001C27.9162 15.5404 27.9168 15.8546 27.9168 16.3337L28.6668 16.3337ZM26.0002 13.667V14.417C26.4792 14.417 26.7935 14.4176 27.0338 14.4372C27.2653 14.4561 27.3614 14.4889 27.4163 14.5169L27.7568 13.8486L28.0973 13.1804C27.7957 13.0267 27.4802 12.9687 27.1559 12.9422C26.8404 12.9164 26.4545 12.917 26.0002 12.917L26.0002 13.667ZM28.4852 14.577L29.1534 14.2365C28.9217 13.7818 28.552 13.4121 28.0973 13.1804L27.7568 13.8486L27.4163 14.5169C27.5888 14.6048 27.729 14.745 27.8169 14.9175L28.4852 14.577ZM26.0002 30.3337V31.0837C26.4545 31.0837 26.8404 31.0842 27.1559 31.0585C27.4802 31.032 27.7957 30.9739 28.0973 30.8203L27.7568 30.152L27.4163 29.4837C27.3614 29.5117 27.2653 29.5445 27.0338 29.5634C26.7935 29.5831 26.4792 29.5837 26.0002 29.5837V30.3337ZM28.6668 27.667H27.9168C27.9168 28.1461 27.9162 28.4603 27.8966 28.7006C27.8777 28.9321 27.8449 29.0282 27.8169 29.0831L28.4852 29.4236L29.1534 29.7641C29.3071 29.4625 29.3651 29.147 29.3916 28.8227C29.4174 28.5072 29.4168 28.1213 29.4168 27.667H28.6668ZM27.7568 30.152L28.0973 30.8203C28.552 30.5886 28.9217 30.2189 29.1534 29.7641L28.4852 29.4236L27.8169 29.0831C27.729 29.2556 27.5888 29.3959 27.4163 29.4837L27.7568 30.152ZM18.0002 30.3337L18.0002 29.5837C17.5211 29.5837 17.2069 29.5831 16.9666 29.5634C16.735 29.5445 16.6389 29.5117 16.584 29.4837L16.2435 30.152L15.903 30.8203C16.2046 30.9739 16.5201 31.032 16.8444 31.0585C17.16 31.0842 17.5458 31.0837 18.0002 31.0837V30.3337ZM15.3335 27.667H14.5835C14.5835 28.1213 14.5829 28.5072 14.6087 28.8227C14.6352 29.147 14.6932 29.4625 14.8469 29.7641L15.5152 29.4236L16.1834 29.0831C16.1554 29.0282 16.1226 28.9321 16.1037 28.7006C16.0841 28.4603 16.0835 28.1461 16.0835 27.667H15.3335ZM16.2435 30.152L16.584 29.4837C16.4115 29.3959 16.2713 29.2556 16.1834 29.0832L15.5152 29.4236L14.8469 29.7641C15.0786 30.2189 15.4483 30.5886 15.903 30.8203L16.2435 30.152ZM15.3335 18.667L14.5835 18.667L14.5835 27.667H15.3335H16.0835L16.0835 18.667H15.3335ZM26.0002 13.667L26.0002 12.917L20.3335 12.917V13.667V14.417L26.0002 14.417V13.667ZM15.4758 18.5247L16.0061 19.0551L20.7216 14.3396L20.1912 13.8093L19.6609 13.2789L14.9454 17.9944L15.4758 18.5247ZM15.5347 18.667L15.5347 19.417L19.5002 19.417V18.667V17.917L15.5347 17.917L15.5347 18.667ZM20.3335 17.8337H21.0835V13.8682H20.3335H19.5835V17.8337H20.3335ZM19.5002 18.667V19.417C20.3746 19.417 21.0835 18.7081 21.0835 17.8337L20.3335 17.8337H19.5835C19.5835 17.8797 19.5462 17.917 19.5002 17.917V18.667ZM20.1912 13.8093L20.7216 14.3396C20.3016 14.7596 19.5835 14.4621 19.5835 13.8682L20.3335 13.8682L21.0835 13.8682C21.0835 13.1258 20.1859 12.754 19.6609 13.2789L20.1912 13.8093ZM15.4758 18.5247L14.9454 17.9944C14.4205 18.5194 14.7923 19.417 15.5347 19.417L15.5347 18.667L15.5347 17.917C16.1286 17.917 16.4261 18.6351 16.0061 19.0551L15.4758 18.5247ZM18.6668 22.0003V22.7503H25.3335V22.0003V21.2503H18.6668V22.0003ZM23.6668 18.667V19.417H25.3335V18.667V17.917H23.6668V18.667ZM18.6668 25.3337V26.0837H25.3335V25.3337V24.5837H18.6668V25.3337Z"
                                                                            fill="#144A6C"
                                                                        />
                                                                        <defs>
                                                                            <linearGradient
                                                                                id="paint0_linear_237_2193"
                                                                                x1={22}
                                                                                y1={0}
                                                                                x2={22}
                                                                                y2={44}
                                                                                gradientUnits="userSpaceOnUse"
                                                                            >
                                                                                <stop stopColor="white" />
                                                                                <stop offset={1} stopColor="white" stopOpacity={0} />
                                                                            </linearGradient>
                                                                        </defs>
                                                                    </svg>

                                                                    {/* ...Your existing SVG code here... */}
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <h3 className="text-lg font-regular text-[#144A6C] text-start">
                                                                        Quote # 1248
                                                                    </h3>

                                                                </div>
                                                            </div>

                                                            {/* Form */}
                                                            <form className="w-full max-w-4xl mx-auto mt-5">
                                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                        <label className="text-[#757575]" htmlFor="clinic-email">
                                                                            Doctor
                                                                        </label>
                                                                        <Listbox value={selectedClient} onChange={setSelectedClient}>
                                                                            <div className="mt-2 relative">
                                                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                    <span className="block truncate">
                                                                                        {selectedClient.name}
                                                                                    </span>
                                                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                        <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                    </span>
                                                                                </Listbox.Button>

                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                    {clients.map((client) => (
                                                                                        <Listbox.Option
                                                                                            key={client.id}
                                                                                            value={client}
                                                                                            className={({ active }) =>
                                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                }`
                                                                                            }
                                                                                        >
                                                                                            {({ selected }) => (
                                                                                                <>
                                                                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                        {client.name}
                                                                                                    </span>
                                                                                                    {selected && (
                                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                        <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                            Patient
                                                                        </label>
                                                                        <Listbox value={selectedPatient} onChange={setSelectedPatient}>
                                                                            <div className="mt-2 relative">
                                                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                    <span className="block truncate">
                                                                                        {selectedPatient.name}
                                                                                    </span>
                                                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                        <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                    </span>
                                                                                </Listbox.Button>

                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                    {patients.map((patient) => (
                                                                                        <Listbox.Option
                                                                                            key={patient.id}
                                                                                            value={patient}
                                                                                            className={({ active }) =>
                                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                }`
                                                                                            }
                                                                                        >
                                                                                            {({ selected }) => (
                                                                                                <>
                                                                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                        {patient.name}
                                                                                                    </span>
                                                                                                    {selected && (
                                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                    <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                        <label className="text-[#757575]" htmlFor="clinic-address">
                                                                            Treatment
                                                                        </label>
                                                                        <Listbox value={selectedCheckup} onChange={setSelectedCheckup}>
                                                                            <div className="mt-2 relative">
                                                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                    <span className="block truncate">{selectedCheckup.name}</span>
                                                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                        <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                    </span>
                                                                                </Listbox.Button>

                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                    {checkups.map((checkup) => (
                                                                                        <Listbox.Option
                                                                                            key={checkup.id}
                                                                                            value={checkup}
                                                                                            className={({ active }) =>
                                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                }`
                                                                                            }
                                                                                        >
                                                                                            {({ selected }) => (
                                                                                                <>
                                                                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                        {checkup.name}
                                                                                                    </span>
                                                                                                    {selected && (
                                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                        <label className="text-[#757575]" htmlFor="clinic-email">
                                                                            Visit Date
                                                                        </label>
                                                                        <input
                                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                            id="clinic-address"
                                                                            type="date"
                                                                        />
                                                                    </div>

                                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                        <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                            Next Visit Date
                                                                        </label>
                                                                        <input
                                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                            id="clinic-address"
                                                                            type="date"
                                                                        />

                                                                    </div>
                                                                </div>

                                                                <div className="w-full overflow-x-auto mt-3">
                                                                    <table className="min-w-full">
                                                                        <thead className="bg-gray-50 sticky top-0">
                                                                            <tr>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    Material Name
                                                                                </th>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    UOM
                                                                                </th>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    Quantity
                                                                                </th>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    Extra Qty
                                                                                </th>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    Extra Cost
                                                                                </th>
                                                                                <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                    Cost Without VAT
                                                                                </th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="bg-white divide-y divide-[#EAECF0]">
                                                                            {subscriptions.length === 0 ? (
                                                                                <tr>
                                                                                    <td
                                                                                        colSpan={8}
                                                                                        className="text-center py-8 text-gray-400 text-sm"
                                                                                    >
                                                                                        <div className="flex flex-col items-center justify-center">
                                                                                            <svg
                                                                                                className="w-10 h-10 text-gray-300 mb-2"
                                                                                                fill="none"
                                                                                                viewBox="0 0 24 24"
                                                                                            >
                                                                                                <path
                                                                                                    d="M12 9v4m0 4h.01"
                                                                                                    stroke="currentColor"
                                                                                                    strokeWidth={2}
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                />
                                                                                                <circle
                                                                                                    cx={12}
                                                                                                    cy={12}
                                                                                                    r={10}
                                                                                                    stroke="currentColor"
                                                                                                    strokeWidth={2}
                                                                                                />
                                                                                            </svg>
                                                                                            <p>No subscriptions found</p>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            ) : (
                                                                                subscriptions.map((sub) => (
                                                                                    <tr key={sub.id} className="hover:bg-gray-50">
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.user}
                                                                                        </td>
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.email}
                                                                                        </td>
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.plan}
                                                                                        </td>
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.startDate}
                                                                                        </td>
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.endDate}
                                                                                        </td>
                                                                                        <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                            {sub.date}
                                                                                        </td>

                                                                                    </tr>
                                                                                ))
                                                                            )}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div className="mt-3">
                                                                    <div className="flex">
                                                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                            <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                                Margin
                                                                            </label>
                                                                            <div className="flex gap-2">

                                                                                <Listbox value={selectedProfit} onChange={setSelectedProfit}>
                                                                                    <div className="relative mt-2">
                                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                            <span className="block truncate">{selectedProfit.name}</span>
                                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                            </span>
                                                                                        </Listbox.Button>

                                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                            {profits.map((profit) => (
                                                                                                <Listbox.Option
                                                                                                    key={profit.id}
                                                                                                    value={profit}
                                                                                                    className={({ active }) =>
                                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"}`
                                                                                                    }
                                                                                                >
                                                                                                    {({ selected }) => (
                                                                                                        <>
                                                                                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                                {profit.name}
                                                                                                            </span>
                                                                                                            {selected && (
                                                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                                </span>
                                                                                                            )}
                                                                                                        </>
                                                                                                    )}
                                                                                                </Listbox.Option>
                                                                                            ))}
                                                                                        </Listbox.Options>
                                                                                    </div>
                                                                                </Listbox>

                                                                                <input
                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                    id="clinic-address"
                                                                                    type="text" value="$"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                            <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                                Discount
                                                                            </label>
                                                                            <div className="flex gap-2">

                                                                                <Listbox value={selectedIncrease} onChange={setSelectedIncrease}>
                                                                                    <div className="relative mt-2">
                                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                            <span className="block truncate">
                                                                                                {selectedIncrease.name} — {selectedIncrease.discount}
                                                                                            </span>
                                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                            </span>
                                                                                        </Listbox.Button>

                                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                            {increase.map((item) => (
                                                                                                <Listbox.Option
                                                                                                    key={item.id}
                                                                                                    value={item}
                                                                                                    className={({ active }) =>
                                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                        }`
                                                                                                    }
                                                                                                >
                                                                                                    {({ selected }) => (
                                                                                                        <>
                                                                                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                                {item.name} — {item.discount}
                                                                                                            </span>
                                                                                                            {selected && (
                                                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                                </span>
                                                                                                            )}
                                                                                                        </>
                                                                                                    )}
                                                                                                </Listbox.Option>
                                                                                            ))}
                                                                                        </Listbox.Options>
                                                                                    </div>
                                                                                </Listbox>
                                                                                <input
                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                    id="clinic-address"
                                                                                    type="text" value="$"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mt03">
                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                                                        {/* Notes Box */}
                                                                        <div className="border border-gray-200 rounded-lg p-4">
                                                                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                                                                                Notes
                                                                            </label>
                                                                            <textarea
                                                                                id="notes"
                                                                                name="notes"
                                                                                rows={6}
                                                                                className="w-full rounded-md p-3 focus:outline-none"

                                                                            />
                                                                        </div>

                                                                        {/* Cost Summary Card */}
                                                                        <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
                                                                            <div className="space-y-3">
                                                                                <div className="flex justify-between text-sm text-gray-700">
                                                                                    <span>Cost</span>
                                                                                    <span>$100.00</span>
                                                                                </div>
                                                                                <div className="flex justify-between text-sm text-gray-700">
                                                                                    <span>Subtotal</span>
                                                                                    <span>$100.00</span>
                                                                                </div>
                                                                                <div className="flex justify-between text-sm text-gray-700">
                                                                                    <span>VAT</span>
                                                                                    <span>$28,016.00</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between items-center">
                                                                                <span className="text-base font-semibold text-gray-900">
                                                                                    Total With VAT
                                                                                </span>
                                                                                <span className="text-lg font-bold text-gray-900">
                                                                                    $27,516.00
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    {/* Buttons */}
                                                    <div className="bg-white gap-2 py-3 flex justify-end border-t border-[#E5E7EB] mt-5">
                                                        <button
                                                            type="button"
                                                            className="bg-[#fff] pl-4 pr-4 py-2 text-[#EF2D2D] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                                            onClick={() => {
                                                                setTimeout(() => {
                                                                    setViewClinicModal(false);
                                                                }, 500);
                                                                setClinicModalAnimation(false);
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                                            onClick={() => {
                                                                setTimeout(() => {
                                                                    setViewClinicModal(false);
                                                                }, 500);
                                                                setClinicModalAnimation(false);
                                                            }}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                                            onClick={() => {
                                                                setTimeout(() => {
                                                                    setViewClinicModal(false);
                                                                }, 500);
                                                                setClinicModalAnimation(false);
                                                            }}
                                                        >
                                                            Send
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="bg-[#144A6C] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"

                                                            onClick={() => {
                                                                setTimeout(() => {
                                                                    setApprovedClinic(true);
                                                                }, 500);
                                                                setClinicModalAnimation(true);
                                                            }}
                                                        >
                                                            Approved
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {ApprovedClinic && (
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
                                                  ${ClinicModalAnimation
                                                        ? "scale-100 skew-y-0"
                                                        : "scale-0 skew-y-6"
                                                    }
                                                  duration-500 ease-out
                                                `}
                                            >
                                                <div className="bg-white  px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
                                                    <div className="sm:flex sm:items-start">
                                                        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                                            <div className="flex gap-1 border-b border-[#E5E7EB] pb-4 w-100">
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
                                                                            stroke="url(#paint0_linear_313_4903)"
                                                                            strokeOpacity="0.3"
                                                                        />
                                                                        <path
                                                                            d="M16.32 29.1367L16.6605 28.4684H16.6605L16.32 29.1367ZM14.8633 27.68L14.1951 28.0205H14.1951L14.8633 27.68ZM27.68 14.8633L28.0205 14.1951V14.1951L27.68 14.8633ZM29.1367 16.32L28.4684 16.6605V16.6605L29.1367 16.32ZM16.32 14.8633L16.6605 15.5316H16.6605L16.32 14.8633ZM14.8633 16.32L15.5316 16.6605V16.6605L14.8633 16.32ZM28.75 21.1667C28.75 21.5809 29.0858 21.9167 29.5 21.9167C29.9142 21.9167 30.25 21.5809 30.25 21.1667H29.5H28.75ZM21.1667 30.25C21.5809 30.25 21.9167 29.9142 21.9167 29.5C21.9167 29.0858 21.5809 28.75 21.1667 28.75V29.5V30.25ZM18.6667 17.9167C18.2525 17.9167 17.9167 18.2525 17.9167 18.6667C17.9167 19.0809 18.2525 19.4167 18.6667 19.4167V18.6667V17.9167ZM25.3333 19.4167C25.7475 19.4167 26.0833 19.0809 26.0833 18.6667C26.0833 18.2525 25.7475 17.9167 25.3333 17.9167V18.6667V19.4167ZM18.6667 21.25C18.2525 21.25 17.9167 21.5858 17.9167 22C17.9167 22.4142 18.2525 22.75 18.6667 22.75V22V21.25ZM25.3333 22.75C25.7475 22.75 26.0833 22.4142 26.0833 22C26.0833 21.5858 25.7475 21.25 25.3333 21.25V22V22.75ZM18.6667 24.5833C18.2525 24.5833 17.9167 24.9191 17.9167 25.3333C17.9167 25.7475 18.2525 26.0833 18.6667 26.0833V25.3333V24.5833ZM22 26.0833C22.4142 26.0833 22.75 25.7475 22.75 25.3333C22.75 24.9191 22.4142 24.5833 22 24.5833V25.3333V26.0833ZM23.8777 29.9138L24.5892 30.151V30.151L23.8777 29.9138ZM24.2633 28.7568L23.5518 28.5197V28.5197L24.2633 28.7568ZM24.6613 28.113L25.1916 28.6433L25.1916 28.6433L24.6613 28.113ZM28.5045 24.2698L27.9742 23.7394L27.9742 23.7394L28.5045 24.2698ZM30.5636 26.3288L31.0939 26.8592V26.8592L30.5636 26.3288ZM26.7204 30.172L26.19 29.6417V29.6417L26.7204 30.172ZM26.0765 30.57L26.3137 31.2815H26.3137L26.0765 30.57ZM24.9195 30.9556L25.1567 31.6672H25.1567L24.9195 30.9556ZM26.5093 30.3691L26.961 30.9678V30.9678L26.5093 30.3691ZM26.3471 30.4693L26.0136 29.7975L26.3471 30.4693ZM30.5636 24.2698L30.0332 24.8001L30.5636 24.2698ZM31.0596 24.8422L31.7316 24.5092V24.5092L31.0596 24.8422ZM31.0596 25.7564L31.7316 26.0894V26.0894L31.0596 25.7564ZM29.0769 23.7737L29.4099 24.4457H29.4099L29.0769 23.7737ZM29.9912 23.7737L29.6582 24.4457H29.6582L29.9912 23.7737ZM24.364 28.4862L25.0358 28.8198H25.0358L24.364 28.4862ZM24.4643 28.324L23.8655 27.8724L23.8655 27.8724L24.4643 28.324ZM23.6858 30.8355L24.3923 30.5836V30.5836L23.6858 30.8355ZM23.9978 31.1475L23.7459 31.8539L23.9978 31.1475ZM19.8333 14.5V15.25H24.1667V14.5V13.75H19.8333V14.5ZM14.5 24.1667H15.25V19.8333H14.5H13.75V24.1667H14.5ZM19.8333 29.5V28.75C18.8875 28.75 18.2233 28.7494 17.7051 28.7071C17.1956 28.6655 16.8937 28.5872 16.6605 28.4684L16.32 29.1367L15.9795 29.8049C16.4594 30.0494 16.9807 30.1529 17.5829 30.2021C18.1764 30.2506 18.9123 30.25 19.8333 30.25V29.5ZM14.5 24.1667H13.75C13.75 25.0877 13.7494 25.8236 13.7979 26.4171C13.8471 27.0193 13.9506 27.5406 14.1951 28.0205L14.8633 27.68L15.5316 27.3395C15.4128 27.1063 15.3345 26.8044 15.2929 26.2949C15.2506 25.7767 15.25 25.1125 15.25 24.1667H14.5ZM16.32 29.1367L16.6605 28.4684C16.1744 28.2208 15.7792 27.8256 15.5316 27.3395L14.8633 27.68L14.1951 28.0205C14.5865 28.7888 15.2112 29.4135 15.9795 29.8049L16.32 29.1367ZM24.1667 14.5V15.25C25.1125 15.25 25.7767 15.2506 26.2949 15.2929C26.8044 15.3345 27.1063 15.4128 27.3395 15.5316L27.68 14.8633L28.0205 14.1951C27.5406 13.9506 27.0193 13.8471 26.4171 13.7979C25.8236 13.7494 25.0877 13.75 24.1667 13.75V14.5ZM29.5 19.8333H30.25C30.25 18.9123 30.2506 18.1764 30.2021 17.5829C30.1529 16.9807 30.0494 16.4594 29.8049 15.9795L29.1367 16.32L28.4684 16.6605C28.5872 16.8937 28.6655 17.1956 28.7071 17.7051C28.7494 18.2233 28.75 18.8875 28.75 19.8333H29.5ZM27.68 14.8633L27.3395 15.5316C27.8256 15.7792 28.2208 16.1744 28.4684 16.6605L29.1367 16.32L29.8049 15.9795C29.4135 15.2112 28.7888 14.5865 28.0205 14.1951L27.68 14.8633ZM19.8333 14.5V13.75C18.9123 13.75 18.1764 13.7494 17.5829 13.7979C16.9807 13.8471 16.4594 13.9506 15.9795 14.1951L16.32 14.8633L16.6605 15.5316C16.8937 15.4128 17.1956 15.3345 17.7051 15.2929C18.2233 15.2506 18.8875 15.25 19.8333 15.25V14.5ZM14.5 19.8333H15.25C15.25 18.8875 15.2506 18.2233 15.2929 17.7051C15.3345 17.1956 15.4128 16.8937 15.5316 16.6605L14.8633 16.32L14.1951 15.9795C13.9506 16.4594 13.8471 16.9807 13.7979 17.5829C13.7494 18.1764 13.75 18.9123 13.75 19.8333H14.5ZM16.32 14.8633L15.9795 14.1951C15.2112 14.5865 14.5865 15.2112 14.1951 15.9795L14.8633 16.32L15.5316 16.6605C15.7792 16.1744 16.1744 15.7792 16.6605 15.5316L16.32 14.8633ZM29.5 19.8333H28.75V21.1667H29.5H30.25V19.8333H29.5ZM19.8333 29.5V30.25H21.1667V29.5V28.75H19.8333V29.5ZM18.6667 18.6667V19.4167H25.3333V18.6667V17.9167H18.6667V18.6667ZM18.6667 22V22.75H25.3333V22V21.25H18.6667V22ZM18.6667 25.3333V26.0833H22V25.3333V24.5833H18.6667V25.3333ZM23.8777 29.9138L24.5892 30.151L24.9749 28.994L24.2633 28.7568L23.5518 28.5197L23.1662 29.6767L23.8777 29.9138ZM24.6613 28.113L25.1916 28.6433L29.0348 24.8001L28.5045 24.2698L27.9742 23.7394L24.131 27.5826L24.6613 28.113ZM30.5636 26.3288L30.0332 25.7985L26.19 29.6417L26.7204 30.172L27.2507 30.7024L31.0939 26.8592L30.5636 26.3288ZM26.0765 30.57L25.8393 29.8585L24.6823 30.2441L24.9195 30.9556L25.1567 31.6672L26.3137 31.2815L26.0765 30.57ZM26.7204 30.172L26.19 29.6417C26.0733 29.7584 26.0636 29.7658 26.0576 29.7703L26.5093 30.3691L26.961 30.9678C27.0695 30.8859 27.1623 30.7908 27.2507 30.7024L26.7204 30.172ZM26.0765 30.57L26.3137 31.2815C26.4323 31.242 26.5589 31.2015 26.6806 31.1411L26.3471 30.4693L26.0136 29.7975C26.0068 29.8009 25.9959 29.8063 25.8393 29.8585L26.0765 30.57ZM26.5093 30.3691L26.0576 29.7703C26.0438 29.7807 26.0291 29.7899 26.0136 29.7975L26.3471 30.4693L26.6806 31.1411C26.7792 31.0921 26.8731 31.0341 26.961 30.9678L26.5093 30.3691ZM30.5636 24.2698L30.0332 24.8001C30.1796 24.9464 30.2671 25.0344 30.3293 25.104C30.3879 25.1696 30.3925 25.1852 30.3876 25.1752L31.0596 24.8422L31.7316 24.5092C31.5882 24.2197 31.3318 23.9773 31.0939 23.7394L30.5636 24.2698ZM30.5636 26.3288L31.0939 26.8592C31.3318 26.6213 31.5882 26.3789 31.7316 26.0894L31.0596 25.7564L30.3876 25.4234C30.3925 25.4134 30.3879 25.429 30.3293 25.4946C30.2671 25.5642 30.1796 25.6522 30.0332 25.7985L30.5636 26.3288ZM31.0596 24.8422L30.3876 25.1752C30.4264 25.2534 30.4264 25.3452 30.3876 25.4234L31.0596 25.7564L31.7316 26.0894C31.9783 25.5916 31.9783 25.007 31.7316 24.5092L31.0596 24.8422ZM28.5045 24.2698L29.0348 24.8001C29.1811 24.6538 29.2691 24.5662 29.3387 24.5041C29.4043 24.4454 29.4199 24.4408 29.4099 24.4457L29.0769 23.7737L28.7439 23.1017C28.4544 23.2452 28.212 23.5016 27.9742 23.7394L28.5045 24.2698ZM30.5636 24.2698L31.0939 23.7394C30.856 23.5016 30.6137 23.2452 30.3242 23.1017L29.9912 23.7737L29.6582 24.4457C29.6482 24.4408 29.6637 24.4454 29.7294 24.5041C29.799 24.5662 29.8869 24.6538 30.0332 24.8001L30.5636 24.2698ZM29.0769 23.7737L29.4099 24.4457C29.4881 24.407 29.5799 24.407 29.6582 24.4457L29.9912 23.7737L30.3242 23.1017C29.8263 22.855 29.2418 22.855 28.7439 23.1017L29.0769 23.7737ZM24.2633 28.7568L24.9749 28.994C25.027 28.8374 25.0324 28.8265 25.0358 28.8198L24.364 28.4862L23.6923 28.1527C23.6318 28.2744 23.5914 28.4011 23.5518 28.5197L24.2633 28.7568ZM24.6613 28.113L24.131 27.5826C24.0426 27.671 23.9474 27.7639 23.8655 27.8724L24.4643 28.324L25.063 28.7757C25.0675 28.7697 25.0749 28.76 25.1916 28.6433L24.6613 28.113ZM24.364 28.4862L25.0358 28.8198C25.0435 28.8043 25.0526 28.7895 25.063 28.7757L24.4643 28.324L23.8655 27.8724C23.7992 27.9602 23.7412 28.0541 23.6923 28.1527L24.364 28.4862ZM23.8777 29.9138L23.1662 29.6767C23.0871 29.914 23.0106 30.1411 22.9664 30.329C22.9249 30.5058 22.8735 30.7905 22.9794 31.0874L23.6858 30.8355L24.3923 30.5836C24.417 30.6529 24.4171 30.7053 24.4165 30.7202C24.4161 30.7316 24.4153 30.7203 24.4266 30.6721C24.4514 30.5668 24.5006 30.4167 24.5892 30.151L23.8777 29.9138ZM24.9195 30.9556L24.6823 30.2441C24.4167 30.3327 24.2666 30.3819 24.1612 30.4067C24.113 30.418 24.1017 30.4172 24.1131 30.4168C24.1281 30.4162 24.1804 30.4164 24.2497 30.4411L23.9978 31.1475L23.7459 31.8539C24.0429 31.9598 24.3275 31.9085 24.5043 31.8669C24.6922 31.8228 24.9194 31.7463 25.1567 31.6672L24.9195 30.9556ZM23.6858 30.8355L22.9794 31.0874C23.1069 31.445 23.3883 31.7264 23.7459 31.8539L23.9978 31.1475L24.2497 30.4411C24.3162 30.4648 24.3685 30.5171 24.3923 30.5836L23.6858 30.8355Z"
                                                                            fill="#144A6C"
                                                                        />
                                                                        <defs>
                                                                            <linearGradient
                                                                                id="paint0_linear_313_4903"
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
                                                                        Convert to Invoice
                                                                    </h3>

                                                                </div>
                                                                <hr />
                                                            </div>
                                                            <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between mt-6">
                                                                <div className="space-y-4">
                                                                    {/* Downpayment Row */}
                                                                    <div className="flex justify-between items-center">
                                                                        <span className="text-sm text-gray-700">Downpayment</span>
                                                                        <div className="flex items-center space-x-4">
                                                                            <label className="flex items-center space-x-1">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="downpayment"
                                                                                    value="yes"
                                                                                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                                                />
                                                                                <span className="text-sm text-gray-700">Yes</span>
                                                                            </label>
                                                                            <label className="flex items-center space-x-1">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="downpayment"
                                                                                    value="no"
                                                                                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                                                />
                                                                                <span className="text-sm text-gray-700">No</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>

                                                                    {/* Pending Amount Row */}
                                                                    <div className="flex justify-between text-sm text-gray-700">
                                                                        <span>Pending Amount</span>
                                                                        <span>$17,516.00</span>
                                                                    </div>
                                                                </div>

                                                                {/* Total */}
                                                                <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between items-center">
                                                                    <span className="text-base font-semibold text-gray-900">
                                                                        Total With VAT
                                                                    </span>
                                                                    <span className="text-lg font-bold text-gray-900">
                                                                        $27,516.00
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <form className="w-full max-w-4xl mx-auto mt-5">
                                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                    <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                        <label
                                                                            className="text-[#757575]"
                                                                            htmlFor="grid-address"
                                                                        >
                                                                            Method
                                                                        </label>
                                                                        <input
                                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                            id="grid-address"
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                    <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                        <label
                                                                            className="text-[#757575]"
                                                                            htmlFor="grid-address"
                                                                        >
                                                                            Check Number
                                                                        </label>
                                                                        <input
                                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                            id="grid-address"
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                    <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                        <label
                                                                            className="text-[#757575]"
                                                                            htmlFor="grid-address"
                                                                        >
                                                                            Date
                                                                        </label>
                                                                        <input
                                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                            id="grid-address"
                                                                            type="date"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                    <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                        <label
                                                                            className="text-[#757575]"
                                                                            htmlFor="grid-address"
                                                                        >
                                                                            Amount
                                                                        </label>
                                                                        <input
                                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                            id="grid-address"
                                                                            type="text"
                                                                        />
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
                                                                setApprovedClinic(false);
                                                                setClinicModalAnimation(false);
                                                            }}
                                                        >
                                                            Convert
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                                            onClick={() => {
                                                                setTimeout(() => {
                                                                    setApprovedClinic(false);
                                                                    setViewClinicModal(false);
                                                                }, 500);
                                                                setClinicModalAnimation(false);
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
                            {/* Table - White background, scrollable */}
                            <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
                                {/* Desktop Table */}
                                <div className="">
                                    <div className="card h-[calc(100vh-235px)] flex flex-col">
                                        <div className="card-body flex-1 flex flex-col overflow-hidden">
                                            <div className="flex gap-2">
                                                <div className="relative" style={{ width: "100%" }}>
                                                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search"
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        className="w-100 text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:[#E6E4F0] sm:w-64 bg-white text-sm border border-[#E6E4F0] focus:border-[#E6E4F0]"
                                                        style={{ width: "100%" }}
                                                    />
                                                </div>
                                                <div className="add_btn">
                                                    <button
                                                        onClick={() => {
                                                            setShowClinicModal(true);
                                                            setTimeout(
                                                                () => setClinicModalAnimation(true),
                                                                10
                                                            );
                                                        }}
                                                        className="bg-[#144A6C] pl-4 pr-6 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap"
                                                    >
                                                        <Plus className="w-6 h-6 text-white" />
                                                        <span className="text-base font-regular">
                                                            Quotations
                                                        </span>
                                                    </button>
                                                    {ShowClinicModal && (
                                                        <div
                                                            role="dialog"
                                                            aria-modal="true"
                                                            aria-labelledby="dialog-title"
                                                            className="relative z-10"
                                                        >
                                                            <div className="fixed inset-0 bg-[#000]/60 backdrop-blur-md transition-opacity overflow-y-auto">
                                                                <div className="flex items-center justify-center min-h-screen px-4 py-8 text-center">
                                                                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                                                        <div className="absolute inset-0"></div>
                                                                    </div>

                                                                    <div
                                                                        className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-4xl mx-auto 
            ${ClinicModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"}
            duration-500 ease-out`}
                                                                    >
                                                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
                                                                            <div className="sm:flex sm:items-start">
                                                                                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                                                                    {/* Header */}
                                                                                    <div className="flex gap-1 border-b border-[#E5E7EB] pb-4 w-full">
                                                                                        <div className="user-icon">
                                                                                            <svg
                                                                                                width={44}
                                                                                                height={44}
                                                                                                viewBox="0 0 44 44"
                                                                                                fill="none"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <rect width={44} height={44} rx={22} fill="#F5FAFA" />
                                                                                                <rect
                                                                                                    x="0.5"
                                                                                                    y="0.5"
                                                                                                    width={43}
                                                                                                    height={43}
                                                                                                    rx="21.5"
                                                                                                    stroke="url(#paint0_linear_237_2193)"
                                                                                                    strokeOpacity="0.3"
                                                                                                />
                                                                                                <path
                                                                                                    d="M18.0002 30.3337V29.5837H18.0002L18.0002 30.3337ZM26.0002 30.3337V31.0837V30.3337ZM28.6668 27.667H27.9168H28.6668ZM28.6668 16.3337H29.4168H28.6668ZM28.4852 14.577L29.1534 14.2365V14.2365L28.4852 14.577ZM26.0002 13.667L26.0002 12.917L26.0002 13.667ZM27.7568 13.8486L28.0973 13.1804L28.0973 13.1804L27.7568 13.8486ZM27.7568 30.152L28.0973 30.8203L27.7568 30.152ZM28.4852 29.4236L27.8169 29.0831L28.4852 29.4236ZM16.2435 30.152L16.584 29.4837L16.2435 30.152ZM15.3335 27.667H14.5835H15.3335ZM15.5152 29.4236L16.1834 29.0832L16.1834 29.0831L15.5152 29.4236ZM16.0835 18.667C16.0835 18.2528 15.7477 17.917 15.3335 17.917C14.9193 17.917 14.5835 18.2528 14.5835 18.667L16.0835 18.667ZM20.3335 12.917C19.9193 12.917 19.5835 13.2528 19.5835 13.667C19.5835 14.0812 19.9193 14.417 20.3335 14.417V12.917ZM15.4758 18.5247L14.9454 17.9944L15.4758 18.5247ZM20.1912 13.8093L20.7216 14.3396L20.1912 13.8093ZM15.5347 18.667L15.5347 19.417L15.5347 18.667ZM19.5002 18.667V17.917V18.667ZM20.3335 17.8337H19.5835H20.3335ZM20.3335 13.8682H21.0835V13.8682L20.3335 13.8682ZM18.6668 21.2503C18.2526 21.2503 17.9168 21.5861 17.9168 22.0003C17.9168 22.4145 18.2526 22.7503 18.6668 22.7503V21.2503ZM25.3335 22.7503C25.7477 22.7503 26.0835 22.4145 26.0835 22.0003C26.0835 21.5861 25.7477 21.2503 25.3335 21.2503V22.7503ZM23.6668 17.917C23.2526 17.917 22.9168 18.2528 22.9168 18.667C22.9168 19.0812 23.2526 19.417 23.6668 19.417V17.917ZM25.3335 19.417C25.7477 19.417 26.0835 19.0812 26.0835 18.667C26.0835 18.2528 25.7477 17.917 25.3335 17.917V19.417ZM18.6668 24.5837C18.2526 24.5837 17.9168 24.9194 17.9168 25.3337C17.9168 25.7479 18.2526 26.0837 18.6668 26.0837V24.5837ZM25.3335 26.0837C25.7477 26.0837 26.0835 25.7479 26.0835 25.3337C26.0835 24.9194 25.7477 24.5837 25.3335 24.5837V26.0837ZM18.0002 30.3337V31.0837H26.0002V30.3337V29.5837H18.0002V30.3337ZM28.6668 27.667H29.4168V16.3337H28.6668H27.9168V27.667H28.6668ZM28.6668 16.3337H29.4168C29.4168 15.8793 29.4174 15.4935 29.3916 15.1779C29.3651 14.8536 29.3071 14.5381 29.1534 14.2365L28.4852 14.577L27.8169 14.9175C27.8449 14.9724 27.8777 15.0685 27.8966 15.3001C27.9162 15.5404 27.9168 15.8546 27.9168 16.3337L28.6668 16.3337ZM26.0002 13.667V14.417C26.4792 14.417 26.7935 14.4176 27.0338 14.4372C27.2653 14.4561 27.3614 14.4889 27.4163 14.5169L27.7568 13.8486L28.0973 13.1804C27.7957 13.0267 27.4802 12.9687 27.1559 12.9422C26.8404 12.9164 26.4545 12.917 26.0002 12.917L26.0002 13.667ZM28.4852 14.577L29.1534 14.2365C28.9217 13.7818 28.552 13.4121 28.0973 13.1804L27.7568 13.8486L27.4163 14.5169C27.5888 14.6048 27.729 14.745 27.8169 14.9175L28.4852 14.577ZM26.0002 30.3337V31.0837C26.4545 31.0837 26.8404 31.0842 27.1559 31.0585C27.4802 31.032 27.7957 30.9739 28.0973 30.8203L27.7568 30.152L27.4163 29.4837C27.3614 29.5117 27.2653 29.5445 27.0338 29.5634C26.7935 29.5831 26.4792 29.5837 26.0002 29.5837V30.3337ZM28.6668 27.667H27.9168C27.9168 28.1461 27.9162 28.4603 27.8966 28.7006C27.8777 28.9321 27.8449 29.0282 27.8169 29.0831L28.4852 29.4236L29.1534 29.7641C29.3071 29.4625 29.3651 29.147 29.3916 28.8227C29.4174 28.5072 29.4168 28.1213 29.4168 27.667H28.6668ZM27.7568 30.152L28.0973 30.8203C28.552 30.5886 28.9217 30.2189 29.1534 29.7641L28.4852 29.4236L27.8169 29.0831C27.729 29.2556 27.5888 29.3959 27.4163 29.4837L27.7568 30.152ZM18.0002 30.3337L18.0002 29.5837C17.5211 29.5837 17.2069 29.5831 16.9666 29.5634C16.735 29.5445 16.6389 29.5117 16.584 29.4837L16.2435 30.152L15.903 30.8203C16.2046 30.9739 16.5201 31.032 16.8444 31.0585C17.16 31.0842 17.5458 31.0837 18.0002 31.0837V30.3337ZM15.3335 27.667H14.5835C14.5835 28.1213 14.5829 28.5072 14.6087 28.8227C14.6352 29.147 14.6932 29.4625 14.8469 29.7641L15.5152 29.4236L16.1834 29.0831C16.1554 29.0282 16.1226 28.9321 16.1037 28.7006C16.0841 28.4603 16.0835 28.1461 16.0835 27.667H15.3335ZM16.2435 30.152L16.584 29.4837C16.4115 29.3959 16.2713 29.2556 16.1834 29.0832L15.5152 29.4236L14.8469 29.7641C15.0786 30.2189 15.4483 30.5886 15.903 30.8203L16.2435 30.152ZM15.3335 18.667L14.5835 18.667L14.5835 27.667H15.3335H16.0835L16.0835 18.667H15.3335ZM26.0002 13.667L26.0002 12.917L20.3335 12.917V13.667V14.417L26.0002 14.417V13.667ZM15.4758 18.5247L16.0061 19.0551L20.7216 14.3396L20.1912 13.8093L19.6609 13.2789L14.9454 17.9944L15.4758 18.5247ZM15.5347 18.667L15.5347 19.417L19.5002 19.417V18.667V17.917L15.5347 17.917L15.5347 18.667ZM20.3335 17.8337H21.0835V13.8682H20.3335H19.5835V17.8337H20.3335ZM19.5002 18.667V19.417C20.3746 19.417 21.0835 18.7081 21.0835 17.8337L20.3335 17.8337H19.5835C19.5835 17.8797 19.5462 17.917 19.5002 17.917V18.667ZM20.1912 13.8093L20.7216 14.3396C20.3016 14.7596 19.5835 14.4621 19.5835 13.8682L20.3335 13.8682L21.0835 13.8682C21.0835 13.1258 20.1859 12.754 19.6609 13.2789L20.1912 13.8093ZM15.4758 18.5247L14.9454 17.9944C14.4205 18.5194 14.7923 19.417 15.5347 19.417L15.5347 18.667L15.5347 17.917C16.1286 17.917 16.4261 18.6351 16.0061 19.0551L15.4758 18.5247ZM18.6668 22.0003V22.7503H25.3335V22.0003V21.2503H18.6668V22.0003ZM23.6668 18.667V19.417H25.3335V18.667V17.917H23.6668V18.667ZM18.6668 25.3337V26.0837H25.3335V25.3337V24.5837H18.6668V25.3337Z"
                                                                                                    fill="#144A6C"
                                                                                                />
                                                                                                <defs>
                                                                                                    <linearGradient
                                                                                                        id="paint0_linear_237_2193"
                                                                                                        x1={22}
                                                                                                        y1={0}
                                                                                                        x2={22}
                                                                                                        y2={44}
                                                                                                        gradientUnits="userSpaceOnUse"
                                                                                                    >
                                                                                                        <stop stopColor="white" />
                                                                                                        <stop offset={1} stopColor="white" stopOpacity={0} />
                                                                                                    </linearGradient>
                                                                                                </defs>
                                                                                            </svg>

                                                                                            {/* ...Your existing SVG code here... */}
                                                                                        </div>
                                                                                        <div className="flex flex-col">
                                                                                            <h3 className="text-lg font-regular text-[#144A6C] text-start">
                                                                                                Add New Quote
                                                                                            </h3>
                                                                                            <span className="text-[#A1A5AA] font-regular">
                                                                                                Provide details to create quote
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>

                                                                                    {/* Form */}
                                                                                    <form className="w-full max-w-4xl mx-auto mt-5">
                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-email">
                                                                                                    Doctor
                                                                                                </label>
                                                                                                <Listbox value={selectedClient} onChange={setSelectedClient}>
                                                                                                    <div className="mt-2 relative">
                                                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                                            <span className="block truncate">
                                                                                                                {selectedClient.name}
                                                                                                            </span>
                                                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                                <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                                            </span>
                                                                                                        </Listbox.Button>

                                                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                                            {clients.map((client) => (
                                                                                                                <Listbox.Option
                                                                                                                    key={client.id}
                                                                                                                    value={client}
                                                                                                                    className={({ active }) =>
                                                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                                        }`
                                                                                                                    }
                                                                                                                >
                                                                                                                    {({ selected }) => (
                                                                                                                        <>
                                                                                                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                                                {client.name}
                                                                                                                            </span>
                                                                                                                            {selected && (
                                                                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                                                    Patient
                                                                                                </label>
                                                                                                <Listbox value={selectedPatient} onChange={setSelectedPatient}>
                                                                                                    <div className="mt-2 relative">
                                                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                                            <span className="block truncate">
                                                                                                                {selectedPatient.name}
                                                                                                            </span>
                                                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                                <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                                            </span>
                                                                                                        </Listbox.Button>

                                                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                                            {patients.map((patient) => (
                                                                                                                <Listbox.Option
                                                                                                                    key={patient.id}
                                                                                                                    value={patient}
                                                                                                                    className={({ active }) =>
                                                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                                        }`
                                                                                                                    }
                                                                                                                >
                                                                                                                    {({ selected }) => (
                                                                                                                        <>
                                                                                                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                                                {patient.name}
                                                                                                                            </span>
                                                                                                                            {selected && (
                                                                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-address">
                                                                                                    Treatment
                                                                                                </label>
                                                                                                <Listbox value={selectedCheckup} onChange={setSelectedCheckup}>
                                                                                                    <div className="mt-2 relative">
                                                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                                            <span className="block truncate">{selectedCheckup.name}</span>
                                                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                                <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                                            </span>
                                                                                                        </Listbox.Button>

                                                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                                            {checkups.map((checkup) => (
                                                                                                                <Listbox.Option
                                                                                                                    key={checkup.id}
                                                                                                                    value={checkup}
                                                                                                                    className={({ active }) =>
                                                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                                        }`
                                                                                                                    }
                                                                                                                >
                                                                                                                    {({ selected }) => (
                                                                                                                        <>
                                                                                                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                                                {checkup.name}
                                                                                                                            </span>
                                                                                                                            {selected && (
                                                                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-email">
                                                                                                    Visit Date
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-address"
                                                                                                    type="date"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                                                    Next Visit Date
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-address"
                                                                                                    type="date"
                                                                                                />

                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="w-full overflow-x-auto mt-3">
                                                                                            <table className="min-w-full">
                                                                                                <thead className="bg-gray-50 sticky top-0">
                                                                                                    <tr>
                                                                                                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                                            Material Name
                                                                                                        </th>
                                                                                                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                                            UOM
                                                                                                        </th>
                                                                                                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                                            Quantity
                                                                                                        </th>
                                                                                                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                                            Extra Qty
                                                                                                        </th>
                                                                                                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                                            Extra Cost
                                                                                                        </th>
                                                                                                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                                            Cost Without VAT
                                                                                                        </th>

                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody className="bg-white divide-y divide-[#EAECF0]">
                                                                                                    {subscriptions.length === 0 ? (
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                colSpan={8}
                                                                                                                className="text-center py-8 text-gray-400 text-sm"
                                                                                                            >
                                                                                                                <div className="flex flex-col items-center justify-center">
                                                                                                                    <svg
                                                                                                                        className="w-10 h-10 text-gray-300 mb-2"
                                                                                                                        fill="none"
                                                                                                                        viewBox="0 0 24 24"
                                                                                                                    >
                                                                                                                        <path
                                                                                                                            d="M12 9v4m0 4h.01"
                                                                                                                            stroke="currentColor"
                                                                                                                            strokeWidth={2}
                                                                                                                            strokeLinecap="round"
                                                                                                                            strokeLinejoin="round"
                                                                                                                        />
                                                                                                                        <circle
                                                                                                                            cx={12}
                                                                                                                            cy={12}
                                                                                                                            r={10}
                                                                                                                            stroke="currentColor"
                                                                                                                            strokeWidth={2}
                                                                                                                        />
                                                                                                                    </svg>
                                                                                                                    <p>No subscriptions found</p>
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    ) : (
                                                                                                        subscriptions.map((sub) => (
                                                                                                            <tr key={sub.id} className="hover:bg-gray-50">
                                                                                                                <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                                                    {sub.user}
                                                                                                                </td>
                                                                                                                <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                                                    {sub.email}
                                                                                                                </td>
                                                                                                                <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                                                    {sub.plan}
                                                                                                                </td>
                                                                                                                <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                                                    {sub.startDate}
                                                                                                                </td>
                                                                                                                <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                                                    {sub.endDate}
                                                                                                                </td>
                                                                                                                <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                                                                    {sub.date}
                                                                                                                </td>

                                                                                                            </tr>
                                                                                                        ))
                                                                                                    )}
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                        <div className="mt-3">
                                                                                            <div className="flex">
                                                                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                                                    <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                                                        Margin
                                                                                                    </label>
                                                                                                    <div className="flex gap-2">

                                                                                                        <Listbox value={selectedProfit} onChange={setSelectedProfit}>
                                                                                                            <div className="relative mt-2">
                                                                                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                                                    <span className="block truncate">{selectedProfit.name}</span>
                                                                                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                                        <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                                                    </span>
                                                                                                                </Listbox.Button>

                                                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                                                    {profits.map((profit) => (
                                                                                                                        <Listbox.Option
                                                                                                                            key={profit.id}
                                                                                                                            value={profit}
                                                                                                                            className={({ active }) =>
                                                                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"}`
                                                                                                                            }
                                                                                                                        >
                                                                                                                            {({ selected }) => (
                                                                                                                                <>
                                                                                                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                                                        {profit.name}
                                                                                                                                    </span>
                                                                                                                                    {selected && (
                                                                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                                                        </span>
                                                                                                                                    )}
                                                                                                                                </>
                                                                                                                            )}
                                                                                                                        </Listbox.Option>
                                                                                                                    ))}
                                                                                                                </Listbox.Options>
                                                                                                            </div>
                                                                                                        </Listbox>

                                                                                                        <input
                                                                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                            id="clinic-address"
                                                                                                            type="text" value="$"
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                                                    <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                                                        Discount
                                                                                                    </label>
                                                                                                    <div className="flex gap-2">

                                                                                                        <Listbox value={selectedIncrease} onChange={setSelectedIncrease}>
                                                                                                            <div className="relative mt-2">
                                                                                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                                                    <span className="block truncate">
                                                                                                                        {selectedIncrease.name} — {selectedIncrease.discount}
                                                                                                                    </span>
                                                                                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                                        <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                                                    </span>
                                                                                                                </Listbox.Button>

                                                                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                                                    {increase.map((item) => (
                                                                                                                        <Listbox.Option
                                                                                                                            key={item.id}
                                                                                                                            value={item}
                                                                                                                            className={({ active }) =>
                                                                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                                                }`
                                                                                                                            }
                                                                                                                        >
                                                                                                                            {({ selected }) => (
                                                                                                                                <>
                                                                                                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                                                        {item.name} — {item.discount}
                                                                                                                                    </span>
                                                                                                                                    {selected && (
                                                                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                                                        </span>
                                                                                                                                    )}
                                                                                                                                </>
                                                                                                                            )}
                                                                                                                        </Listbox.Option>
                                                                                                                    ))}
                                                                                                                </Listbox.Options>
                                                                                                            </div>
                                                                                                        </Listbox>
                                                                                                        <input
                                                                                                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                            id="clinic-address"
                                                                                                            type="text" value="$"
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="mt03">
                                                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                                                                                {/* Notes Box */}
                                                                                                <div className="border border-gray-200 rounded-lg p-4">
                                                                                                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                                                                                                        Notes
                                                                                                    </label>
                                                                                                    <textarea
                                                                                                        id="notes"
                                                                                                        name="notes"
                                                                                                        rows={6}
                                                                                                        className="w-full rounded-md p-3 focus:outline-none"

                                                                                                    />
                                                                                                </div>

                                                                                                {/* Cost Summary Card */}
                                                                                                <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
                                                                                                    <div className="space-y-3">
                                                                                                        <div className="flex justify-between text-sm text-gray-700">
                                                                                                            <span>Cost</span>
                                                                                                            <span>$100.00</span>
                                                                                                        </div>
                                                                                                        <div className="flex justify-between text-sm text-gray-700">
                                                                                                            <span>Subtotal</span>
                                                                                                            <span>$100.00</span>
                                                                                                        </div>
                                                                                                        <div className="flex justify-between text-sm text-gray-700">
                                                                                                            <span>VAT</span>
                                                                                                            <span>$28,016.00</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between items-center">
                                                                                                        <span className="text-base font-semibold text-gray-900">
                                                                                                            Total With VAT
                                                                                                        </span>
                                                                                                        <span className="text-lg font-bold text-gray-900">
                                                                                                            $27,516.00
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>

                                                                            {/* Buttons */}
                                                                            <div className="bg-white gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB] mt-5">
                                                                                <button
                                                                                    type="button"
                                                                                    className="bg-[#144A6C] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                                                                                    onClick={() => {
                                                                                        setShowClinicModal(false);
                                                                                        setClinicModalAnimation(false);
                                                                                    }}
                                                                                >
                                                                                    Add Quote
                                                                                </button>
                                                                                <button
                                                                                    type="button"
                                                                                    className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                                                                    onClick={() => {
                                                                                        setTimeout(() => {
                                                                                            setShowClinicModal(false);
                                                                                        }, 500);
                                                                                        setClinicModalAnimation(false);
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
                                            <div className="w-full overflow-x-auto mt-3">
                                                <table className="min-w-full">
                                                    <thead className="bg-gray-50 sticky top-0">
                                                        <tr>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                ID No
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Doctor
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Patient
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Treatment
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Quote Date
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Visit Date
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Treatment Fee
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Total Amount
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Expiry
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Status
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Actions
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-[#EAECF0]">
                                                        {subscriptions.length === 0 ? (
                                                            <tr>
                                                                <td
                                                                    colSpan={8}
                                                                    className="text-center py-8 text-gray-400 text-sm"
                                                                >
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <svg
                                                                            className="w-10 h-10 text-gray-300 mb-2"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path
                                                                                d="M12 9v4m0 4h.01"
                                                                                stroke="currentColor"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <circle
                                                                                cx={12}
                                                                                cy={12}
                                                                                r={10}
                                                                                stroke="currentColor"
                                                                                strokeWidth={2}
                                                                            />
                                                                        </svg>
                                                                        <p>No subscriptions found</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ) : (
                                                            subscriptions.map((sub) => (
                                                                <tr key={sub.id} className="hover:bg-gray-50"
                                                                    onClick={() => {
                                                                        setViewClinicModal(true);
                                                                        setTimeout(() =>
                                                                            setClinicModalAnimation(true), 10);
                                                                    }}>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        {sub.user}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        {sub.email}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        {sub.plan}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        {sub.startDate}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        {sub.endDate}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        {sub.date}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        ${sub.amount}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        {sub.treatment}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        {sub.total}
                                                                    </td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        {sub.expires}
                                                                    </td>

                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        <div className="flex items-center space-x-2">
                                                                            <button
                                                                                onClick={() => {
                                                                                    setEditClinicModal(true);
                                                                                    setTimeout(
                                                                                        () => setClinicModalAnimation(true),
                                                                                        10
                                                                                    );
                                                                                }}
                                                                                className="text-blue-600 hover:text-blue-800"

                                                                            >
                                                                                <svg
                                                                                    width={22}
                                                                                    height={23}
                                                                                    viewBox="0 0 22 23"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M3.21424 16.5816L3.92575 16.8188L3.21424 16.5816ZM4.06269 14.0363L3.35118 13.7991H3.35118L4.06269 14.0363ZM4.93817 12.6197L5.46849 13.1501L5.4685 13.1501L4.93817 12.6197ZM13.3932 4.16469L12.8629 3.63436V3.63436L13.3932 4.16469ZM17.9232 8.69468L18.4535 9.22501L17.9232 8.69468ZM9.46815 17.1497L8.93782 16.6194L8.93782 16.6194L9.46815 17.1497ZM8.05161 18.0252L8.28878 18.7367H8.28878L8.05161 18.0252ZM5.50626 18.8736L5.74343 19.5852H5.74343L5.50626 18.8736ZM9.00378 17.5832L8.5521 16.9844L8.5521 16.9844L9.00378 17.5832ZM8.64697 17.8037L8.31344 17.1319L8.64697 17.8037ZM19.0145 5.42399L18.3425 5.75701L18.3425 5.75701L19.0145 5.42399ZM19.0145 7.43538L18.3425 7.10237H18.3425L19.0145 7.43538ZM14.6525 3.07341L14.9855 3.74542L14.9855 3.74542L14.6525 3.07341ZM16.6639 3.07341L16.3309 3.74542V3.74542L16.6639 3.07341ZM4.2842 13.4409L4.95596 13.7745L4.95596 13.7745L4.2842 13.4409ZM4.50473 13.0841L3.90599 12.6324L3.90599 12.6324L4.50473 13.0841ZM2.79217 18.6094L2.08574 18.8613L2.79217 18.6094ZM3.47849 19.2957L3.22658 20.0022L3.22658 20.0022L3.47849 19.2957ZM12.791 4.7669C12.4981 4.47401 12.0233 4.47401 11.7304 4.7669C11.4375 5.05979 11.4375 5.53467 11.7304 5.82756L12.791 4.7669ZM16.2604 10.3575C16.5533 10.6504 17.0281 10.6504 17.321 10.3575C17.6139 10.0647 17.6139 9.58978 17.321 9.29689L16.2604 10.3575ZM3.21424 16.5816L3.92575 16.8188L4.77421 14.2734L4.06269 14.0363L3.35118 13.7991L2.50273 16.3445L3.21424 16.5816ZM4.93817 12.6197L5.4685 13.1501L13.9235 4.69502L13.3932 4.16469L12.8629 3.63436L4.40784 12.0894L4.93817 12.6197ZM17.9232 8.69468L17.3929 8.16435L8.93782 16.6194L9.46815 17.1497L9.99848 17.6801L18.4535 9.22501L17.9232 8.69468ZM8.05161 18.0252L7.81444 17.3137L5.26908 18.1621L5.50626 18.8736L5.74343 19.5852L8.28878 18.7367L8.05161 18.0252ZM9.46815 17.1497L8.93782 16.6194C8.69806 16.8592 8.62681 16.9281 8.5521 16.9844L9.00378 17.5832L9.45546 18.1819C9.63266 18.0482 9.78703 17.8915 9.99849 17.6801L9.46815 17.1497ZM8.05161 18.0252L8.28878 18.7367C8.57248 18.6421 8.78168 18.5742 8.98049 18.4754L8.64697 17.8037L8.31344 17.1319C8.22961 17.1735 8.13612 17.2065 7.81444 17.3137L8.05161 18.0252ZM9.00378 17.5832L8.5521 16.9844C8.47728 17.0409 8.39738 17.0902 8.31344 17.1319L8.64697 17.8037L8.98049 18.4754C9.14755 18.3925 9.30656 18.2942 9.45546 18.1819L9.00378 17.5832ZM17.9232 4.16469L17.3929 4.69502C18.0532 5.35534 18.2459 5.56203 18.3425 5.75701L19.0145 5.42399L19.6865 5.09098C19.453 4.61984 19.0282 4.20904 18.4535 3.63436L17.9232 4.16469ZM17.9232 8.69468L18.4535 9.22501C19.0282 8.65034 19.453 8.23954 19.6865 7.76839L19.0145 7.43538L18.3425 7.10237C18.2459 7.29734 18.0532 7.50404 17.3929 8.16435L17.9232 8.69468ZM19.0145 5.42399L18.3425 5.75701C18.5525 6.18087 18.5525 6.67851 18.3425 7.10237L19.0145 7.43538L19.6865 7.76839C20.1045 6.92487 20.1045 5.93451 19.6865 5.09098L19.0145 5.42399ZM13.3932 4.16469L13.9235 4.69502C14.5838 4.03471 14.7905 3.84204 14.9855 3.74542L14.6525 3.07341L14.3195 2.40139C13.8484 2.63486 13.4375 3.05969 12.8629 3.63436L13.3932 4.16469ZM17.9232 4.16469L18.4535 3.63436C17.8789 3.05969 17.4681 2.63487 16.9969 2.40139L16.6639 3.07341L16.3309 3.74542C16.5259 3.84204 16.7326 4.03471 17.3929 4.69502L17.9232 4.16469ZM14.6525 3.07341L14.9855 3.74542C15.4094 3.53538 15.907 3.53538 16.3309 3.74542L16.6639 3.07341L16.9969 2.40139C16.1534 1.98339 15.163 1.98339 14.3195 2.40139L14.6525 3.07341ZM4.06269 14.0363L4.77421 14.2734C4.88143 13.9518 4.91434 13.8583 4.95596 13.7745L4.2842 13.4409L3.61245 13.1074C3.51373 13.3062 3.44575 13.5154 3.35118 13.7991L4.06269 14.0363ZM4.93817 12.6197L4.40784 12.0894C4.19638 12.3009 4.03967 12.4552 3.90599 12.6324L4.50473 13.0841L5.10346 13.5358C5.15982 13.4611 5.22873 13.3898 5.46849 13.1501L4.93817 12.6197ZM4.2842 13.4409L4.95596 13.7745C4.99764 13.6905 5.04702 13.6106 5.10346 13.5358L4.50473 13.0841L3.90599 12.6324C3.79366 12.7813 3.69539 12.9403 3.61245 13.1074L4.2842 13.4409ZM3.21424 16.5816L2.50273 16.3445C2.32303 16.8836 2.17108 17.337 2.08557 17.7009C2.00268 18.0537 1.94406 18.464 2.08574 18.8613L2.79217 18.6094L3.49859 18.3575C3.50907 18.3869 3.47707 18.3366 3.5458 18.0441C3.61191 17.7627 3.7366 17.3863 3.92575 16.8188L3.21424 16.5816ZM5.50626 18.8736L5.26909 18.1621C4.70162 18.3513 4.32519 18.476 4.04382 18.5421C3.75133 18.6108 3.70101 18.5788 3.7304 18.5893L3.47849 19.2957L3.22658 20.0022C3.6239 20.1438 4.03418 20.0852 4.38695 20.0023C4.75085 19.9168 5.20433 19.7649 5.74343 19.5852L5.50626 18.8736ZM2.79217 18.6094L2.08574 18.8613C2.27553 19.3935 2.69435 19.8124 3.22658 20.0022L3.47849 19.2957L3.7304 18.5893C3.62226 18.5507 3.53716 18.4656 3.49859 18.3575L2.79217 18.6094ZM12.2607 5.29723L11.7304 5.82756L16.2604 10.3575L16.7907 9.82722L17.321 9.29689L12.791 4.7669L12.2607 5.29723Z"
                                                                                        fill="#144A6C"
                                                                                    />
                                                                                </svg>
                                                                            </button>
                                                                            <button
                                                                                className="text-red-600 hover:text-red-800"
                                                                                onClick={() => {
                                                                                    Swal.fire({
                                                                                        title: "Are you sure?",
                                                                                        text: "You won’t be able to revert this!",
                                                                                        icon: "warning",
                                                                                        showCancelButton: true,
                                                                                        confirmButtonColor: "#d33",
                                                                                        cancelButtonColor: "#3085d6",
                                                                                        confirmButtonText:
                                                                                            "Yes, delete it!",
                                                                                    }).then((result) => {
                                                                                        if (result.isConfirmed) {
                                                                                            // 👇 Call your delete function here
                                                                                            // handleDelete(doctor.id);

                                                                                            Swal.fire(
                                                                                                "Deleted!",
                                                                                                "Your Data Has Been Deleted.",
                                                                                                "success"
                                                                                            );
                                                                                        }
                                                                                    });
                                                                                }}
                                                                            >
                                                                                {/* Your SVG icon remains unchanged */}
                                                                                <svg
                                                                                    width={22}
                                                                                    height={23}
                                                                                    viewBox="0 0 22 23"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M17.318 16.6207L18.068 16.6274L17.318 16.6207ZM3.6665 4.83793C3.25229 4.83793 2.9165 5.17372 2.9165 5.58793C2.9165 6.00214 3.25229 6.33793 3.6665 6.33793V4.83793ZM18.3332 6.33793C18.7474 6.33793 19.0832 6.00214 19.0832 5.58793C19.0832 5.17372 18.7474 4.83793 18.3332 4.83793V6.33793ZM9.9165 9.2546C9.9165 8.84038 9.58072 8.5046 9.1665 8.5046C8.75229 8.5046 8.4165 8.84038 8.4165 9.2546H9.9165ZM8.4165 16.5879C8.4165 17.0021 8.75229 17.3379 9.1665 17.3379C9.58072 17.3379 9.9165 17.0021 9.9165 16.5879H8.4165ZM13.5832 9.2546C13.5832 8.84038 13.2474 8.5046 12.8332 8.5046C12.419 8.5046 12.0832 8.84038 12.0832 9.2546H13.5832ZM12.0832 16.5879C12.0832 17.0021 12.419 17.3379 12.8332 17.3379C13.2474 17.3379 13.5832 17.0021 13.5832 16.5879H12.0832ZM17.4165 5.58793L16.6665 5.58123L16.568 16.614L17.318 16.6207L18.068 16.6274L18.1665 5.59463L17.4165 5.58793ZM13.6515 20.2546V19.5046H8.24984V20.2546V21.0046H13.6515V20.2546ZM4.58317 5.58793H3.83317V16.5879H4.58317H5.33317V5.58793H4.58317ZM3.6665 5.58793V6.33793H4.58317V5.58793V4.83793H3.6665V5.58793ZM4.58317 5.58793V6.33793H7.33317V5.58793V4.83793H4.58317V5.58793ZM7.33317 5.58793V6.33793H14.6665V5.58793V4.83793H7.33317V5.58793ZM14.6665 5.58793V6.33793H17.4165V5.58793V4.83793H14.6665V5.58793ZM17.4165 5.58793V6.33793H18.3332V5.58793V4.83793H17.4165V5.58793ZM7.33317 5.18052H8.08317C8.08317 3.8753 9.30352 2.67126 10.9998 2.67126V1.92126V1.17126C8.64607 1.17126 6.58317 2.88567 6.58317 5.18052H7.33317ZM10.9998 1.92126V2.67126C12.6962 2.67126 13.9165 3.8753 13.9165 5.18052H14.6665H15.4165C15.4165 2.88567 13.3536 1.17126 10.9998 1.17126V1.92126ZM7.33317 5.18052H6.58317V5.58793H7.33317H8.08317V5.18052H7.33317ZM14.6665 5.18052H13.9165V5.58793H14.6665H15.4165V5.18052H14.6665ZM8.24984 20.2546V19.5046C6.63901 19.5046 5.33317 18.1988 5.33317 16.5879H4.58317H3.83317C3.83317 19.0272 5.81058 21.0046 8.24984 21.0046V20.2546ZM17.318 16.6207L16.568 16.614C16.5537 18.2146 15.2521 19.5046 13.6515 19.5046V20.2546V21.0046C16.0753 21.0046 18.0463 19.0511 18.068 16.6274L17.318 16.6207ZM9.1665 9.2546H8.4165V16.5879H9.1665H9.9165V9.2546H9.1665ZM12.8332 9.2546H12.0832V16.5879H12.8332H13.5832V9.2546H12.8332Z"
                                                                                        fill="#EF2D2D"
                                                                                    />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}


                    {selectedTab === 1 && (
                        <>
                            {/* Table - White background, scrollable */}
                            <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
                                {/* Desktop Table */}
                                <div className="">
                                    <div className="card h-[calc(100vh-235px)] flex flex-col">
                                        <div className="card-body flex-1 flex flex-col overflow-hidden">
                                            <div className="flex gap-2">
                                                <div className="relative" style={{ width: "100%" }}>
                                                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search"
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        className="w-100 text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:[#E6E4F0] sm:w-64 bg-white text-sm border border-[#E6E4F0] focus:border-[#E6E4F0]"
                                                        style={{ width: "100%" }}
                                                    />
                                                </div>
                                                <div className="add_btn">

                                                    {showExpenseModal && (
                                                        <div
                                                            role="dialog"
                                                            aria-modal="true"
                                                            aria-labelledby="dialog-title"
                                                            className="relative z-10"
                                                        >
                                                            <div className="fixed inset-0 bg-[#000]/60 backdrop-blur-md transition-opacity overflow-y-auto">
                                                                <div className="flex items-center justify-center min-h-screen px-4 py-8 text-center">
                                                                    <div
                                                                        className="fixed inset-0 transition-opacity"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <div className="absolute inset-0"></div>
                                                                    </div>

                                                                    <div
                                                                        className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-4xl mx-auto 
            ${expenseModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"}
            duration-500 ease-out`}
                                                                    >
                                                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
                                                                            <div className="sm:flex sm:items-start">
                                                                                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                                                                    {/* Header */}
                                                                                    <div className="flex gap-1 border-b border-[#E5E7EB] pb-4 w-full">
                                                                                        {/* Icon and Titles */}
                                                                                        <div className="user-icon">
                                                                                            <svg
                                                                                                width={44}
                                                                                                height={44}
                                                                                                viewBox="0 0 44 44"
                                                                                                fill="none"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <rect width={44} height={44} rx={22} fill="#F5FAFA" />
                                                                                                <rect
                                                                                                    x="0.5"
                                                                                                    y="0.5"
                                                                                                    width={43}
                                                                                                    height={43}
                                                                                                    rx="21.5"
                                                                                                    stroke="url(#paint0_linear_335_7330)"
                                                                                                    strokeOpacity="0.3"
                                                                                                />
                                                                                                <path
                                                                                                    d="M26.1663 18.666C26.1663 16.8251 24.674 15.3327 22.833 15.3327H21.1663C19.3254 15.3327 17.833 16.8251 17.833 18.666C17.833 20.507 19.3254 21.9993 21.1663 21.9993H22.833C24.674 21.9993 26.1663 23.4917 26.1663 25.3327C26.1663 27.1736 24.674 28.666 22.833 28.666H21.1663C19.3254 28.666 17.833 27.1736 17.833 25.3327M21.9997 13.666L21.9997 30.3327"
                                                                                                    stroke="#144A6C"
                                                                                                    strokeWidth="1.5"
                                                                                                    strokeLinecap="round"
                                                                                                />
                                                                                                <defs>
                                                                                                    <linearGradient
                                                                                                        id="paint0_linear_335_7330"
                                                                                                        x1={22}
                                                                                                        y1={0}
                                                                                                        x2={22}
                                                                                                        y2={44}
                                                                                                        gradientUnits="userSpaceOnUse"
                                                                                                    >
                                                                                                        <stop stopColor="white" />
                                                                                                        <stop offset={1} stopColor="white" stopOpacity={0} />
                                                                                                    </linearGradient>
                                                                                                </defs>
                                                                                            </svg>

                                                                                        </div>
                                                                                        <div className="flex flex-col">
                                                                                            <h3 className="text-lg font-regular text-[#144A6C] text-start">
                                                                                                Record Pyament
                                                                                            </h3>
                                                                                            <span className="text-[#A1A5AA] font-regular">
                                                                                                Provide details to Record Payment
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>

                                                                                    {/* Form Fields here, updated if needed */}
                                                                                    <form className="w-full max-w-4xl mx-auto mt-5">
                                                                                        <div className="flex flex-col gap-6">
                                                                                            <div className="flex justify-between">
                                                                                                {/* Expense Type */}
                                                                                                <div>
                                                                                                    <label className="block text-sm font-normal text-gray-700 mb-1">Expense Type</label>
                                                                                                    <div className="flex gap-4">
                                                                                                        <label className="inline-flex items-center">
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                name="expenseType"
                                                                                                                value="Fixed"
                                                                                                                className="form-radio text-blue-600"
                                                                                                            />
                                                                                                            <span className="ml-2 font-normal">Partial Payment</span>
                                                                                                        </label>
                                                                                                        <label className="inline-flex items-center">
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                name="expenseType"
                                                                                                                value="Variable"
                                                                                                                className="form-radio text-blue-600"
                                                                                                            />
                                                                                                            <span className="ml-2">Full Payment</span>
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </div>

                                                                                                {/* Occurrence */}
                                                                                                <div>
                                                                                                    <label className="block text-sm font-normal text-gray-700 mb-1">Pending Amount</label>
                                                                                                    <div className="flex gap-4">

                                                                                                        <h2 className="text-2xl text-[#475467] font-bold">$13,408.17</h2>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]">Method</label>
                                                                                                <Listbox value={selectedFrequency} onChange={setSelectedFrequency}>
                                                                                                    <div className="mt-2 relative">
                                                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                                            <span className="block truncate">{selectedFrequency.name}</span>
                                                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                                <ChevronDownIcon className="h-5 w-5 text-[#144A6C]" aria-hidden="true" />
                                                                                                            </span>
                                                                                                        </Listbox.Button>

                                                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                                            {frequencyOptions.map((frequency) => (
                                                                                                                <Listbox.Option
                                                                                                                    key={frequency.id}
                                                                                                                    value={frequency}
                                                                                                                    className={({ active }) =>
                                                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"}`
                                                                                                                    }
                                                                                                                >
                                                                                                                    {({ selected }) => (
                                                                                                                        <>
                                                                                                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                                                                                                {frequency.name}
                                                                                                                            </span>
                                                                                                                            {selected && (
                                                                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                                                                        {/* ✅ Conditionally render Check Number field only if selected is "Check" */}
                                                                                        {selectedFrequency.name === "Check" && (
                                                                                            <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                                <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                    <label className="text-[#757575]" htmlFor="check-number">Check Number</label>
                                                                                                    <input
                                                                                                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                        id="check-number"
                                                                                                        type="text"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        )}


                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-address">
                                                                                                    Date
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-address"
                                                                                                    type="date"
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-address">
                                                                                                    Amount
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-address"
                                                                                                    type="text"
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>

                                                                            {/* Buttons */}
                                                                            <div className="bg-white gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB] mt-5">
                                                                                <button
                                                                                    type="button"
                                                                                    className="bg-[#144A6C] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                                                                                    onClick={() => {
                                                                                        setShowExpenseModal(false);
                                                                                        setExpenseModalAnimation(false);
                                                                                    }}
                                                                                >
                                                                                    Add Record
                                                                                </button>
                                                                                <button
                                                                                    type="button"
                                                                                    className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                                                                    onClick={() => {
                                                                                        setTimeout(() => {
                                                                                            setShowExpenseModal(false);
                                                                                        }, 500);
                                                                                        setExpenseModalAnimation(false);
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
                                            <div className="w-full overflow-x-auto mt-3">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50 sticky top-0">
                                                        <tr>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">ID No</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Doctor</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Patient</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Treatment</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Invoice Date</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Total Amount</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Paid Amount</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Remaining</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Status</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                        {expenses.length === 0 ? (
                                                            <tr>
                                                                <td colSpan={9} className="text-center py-8 text-gray-400 text-sm">
                                                                    No expenses found
                                                                </td>
                                                            </tr>
                                                        ) : (
                                                            expenses.map((expense) => (
                                                                <tr key={expense.id} className="hover:bg-gray-50">
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{expense.id}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{expense.doctor}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{expense.patient}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{expense.treatment}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{expense.invoiceDate}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Rs {expense.totalAmount}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$ {expense.paidAmount}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$ {expense.remaining}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                        <span
                                                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${expense.remaining > 0
                                                                                ? "bg-[#FFF8F8] text-[#CE2D2D] border border-[#E43F33] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                                                                : "bg-[#F8FFF8] text-[#177606] border border-[#B7EFAB] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                                                                }`}
                                                                        >
                                                                            {expense.remaining > 0 ? "Unpaid" : "Paid"}
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        <div className="flex items-center space-x-2">
                                                                            <button
                                                                                className="text-blue-600 hover:text-blue-800" onClick={() => {
                                                                                    setShowExpenseModal(true);
                                                                                    setTimeout(() => setExpenseModalAnimation(true), 10);
                                                                                }}>
                                                                                <svg
                                                                                    width={24}
                                                                                    height={25}
                                                                                    viewBox="0 0 24 25"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M7.01344 12.0879L11.8808 12.0879M6.86563 11.5176L3.15356 4.83788C2.59273 3.82868 3.67268 2.70107 4.70559 3.21737L20.3507 11.0376C21.2164 11.4704 21.2164 12.7054 20.3507 13.1381L4.70559 20.9584C3.67268 21.4747 2.59272 20.3471 3.15356 19.3379L6.86563 12.6581C7.06271 12.3035 7.06271 11.8723 6.86563 11.5176Z"
                                                                                        stroke="#144A6C"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                    />
                                                                                </svg>

                                                                            </button>
                                                                            <button
                                                                                className="text-blue-600 hover:text-blue-800">
                                                                                <svg
                                                                                    width={24}
                                                                                    height={25}
                                                                                    viewBox="0 0 24 25"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.75 3.08789C12.75 2.67368 12.4142 2.33789 12 2.33789C11.5858 2.33789 11.25 2.67368 11.25 3.08789L12 3.08789L12.75 3.08789ZM11.25 14.0879C11.25 14.5021 11.5858 14.8379 12 14.8379C12.4142 14.8379 12.75 14.5021 12.75 14.0879H12H11.25ZM16.5303 12.6182C16.8232 12.3253 16.8232 11.8505 16.5303 11.5576C16.2374 11.2647 15.7626 11.2647 15.4697 11.5576L16 12.0879L16.5303 12.6182ZM12.7071 15.3808L12.1768 14.8505L12.7071 15.3808ZM11.2929 15.3808L11.8232 14.8505H11.8232L11.2929 15.3808ZM8.53033 11.5576C8.23744 11.2647 7.76256 11.2647 7.46967 11.5576C7.17678 11.8505 7.17678 12.3253 7.46967 12.6182L8 12.0879L8.53033 11.5576ZM3.75 16.0879C3.75 15.6737 3.41421 15.3379 3 15.3379C2.58579 15.3379 2.25 15.6737 2.25 16.0879H3H3.75ZM21.75 16.0879C21.75 15.6737 21.4142 15.3379 21 15.3379C20.5858 15.3379 20.25 15.6737 20.25 16.0879H21H21.75ZM19.362 20.7609L19.0215 20.0927L19.362 20.7609ZM20.673 19.4499L21.3413 19.7904V19.7904L20.673 19.4499ZM3.32698 19.4499L2.65873 19.7904L3.32698 19.4499ZM4.63803 20.7609L4.29754 21.4292H4.29754L4.63803 20.7609ZM12 3.08789L11.25 3.08789L11.25 14.0879H12H12.75L12.75 3.08789L12 3.08789ZM16 12.0879L15.4697 11.5576L12.1768 14.8505L12.7071 15.3808L13.2374 15.9111L16.5303 12.6182L16 12.0879ZM11.2929 15.3808L11.8232 14.8505L8.53033 11.5576L8 12.0879L7.46967 12.6182L10.7626 15.9111L11.2929 15.3808ZM12.7071 15.3808L12.1768 14.8505C12.0791 14.9481 11.9209 14.9481 11.8232 14.8505L11.2929 15.3808L10.7626 15.9111C11.446 16.5945 12.554 16.5945 13.2374 15.9111L12.7071 15.3808ZM3 16.0879H2.25V16.2879H3H3.75V16.0879H3ZM7.8 21.0879V21.8379H16.2V21.0879V20.3379H7.8V21.0879ZM21 16.2879H21.75V16.0879H21H20.25V16.2879H21ZM16.2 21.0879V21.8379C17.0277 21.8379 17.6936 21.8385 18.2315 21.7945C18.7781 21.7499 19.2582 21.6555 19.7025 21.4292L19.362 20.7609L19.0215 20.0927C18.824 20.1933 18.5632 20.2624 18.1093 20.2995C17.6467 20.3373 17.0525 20.3379 16.2 20.3379V21.0879ZM21 16.2879H20.25C20.25 17.1403 20.2494 17.7346 20.2116 18.1972C20.1745 18.6511 20.1054 18.9119 20.0048 19.1094L20.673 19.4499L21.3413 19.7904C21.5676 19.3461 21.662 18.866 21.7066 18.3194C21.7506 17.7815 21.75 17.1156 21.75 16.2879H21ZM19.362 20.7609L19.7025 21.4292C20.4081 21.0696 20.9817 20.496 21.3413 19.7904L20.673 19.4499L20.0048 19.1094C19.789 19.5327 19.4448 19.8769 19.0215 20.0927L19.362 20.7609ZM3 16.2879H2.25C2.25 17.1156 2.24942 17.7815 2.29336 18.3194C2.33803 18.866 2.43238 19.3461 2.65873 19.7904L3.32698 19.4499L3.99524 19.1094C3.8946 18.9119 3.82546 18.6511 3.78838 18.1972C3.75058 17.7346 3.75 17.1403 3.75 16.2879H3ZM7.8 21.0879V20.3379C6.94755 20.3379 6.35331 20.3373 5.89068 20.2995C5.4368 20.2624 5.17604 20.1933 4.97852 20.0927L4.63803 20.7609L4.29754 21.4292C4.74175 21.6555 5.22189 21.7499 5.76853 21.7945C6.30641 21.8385 6.9723 21.8379 7.8 21.8379V21.0879ZM3.32698 19.4499L2.65873 19.7904C3.01825 20.496 3.59193 21.0696 4.29754 21.4292L4.63803 20.7609L4.97852 20.0927C4.55516 19.8769 4.21095 19.5327 3.99524 19.1094L3.32698 19.4499Z"
                                                                                        fill="#144A6C"
                                                                                    />
                                                                                </svg>

                                                                            </button>
                                                                            <button
                                                                                className="text-red-600 hover:text-red-800"
                                                                                onClick={() => {
                                                                                    Swal.fire({
                                                                                        title: "Are you sure?",
                                                                                        text: "You won’t be able to revert this!",
                                                                                        icon: "warning",
                                                                                        showCancelButton: true,
                                                                                        confirmButtonColor: "#d33",
                                                                                        cancelButtonColor: "#3085d6",
                                                                                        confirmButtonText:
                                                                                            "Yes, delete it!",
                                                                                    }).then((result) => {
                                                                                        if (result.isConfirmed) {
                                                                                            // 👇 Call your delete function here
                                                                                            // handleDelete(doctor.id);

                                                                                            Swal.fire(
                                                                                                "Deleted!",
                                                                                                "Your Data Has Been Deleted.",
                                                                                                "success"
                                                                                            );
                                                                                        }
                                                                                    });
                                                                                }}
                                                                            >
                                                                                {/* Your SVG icon remains unchanged */}
                                                                                <svg
                                                                                    width={22}
                                                                                    height={23}
                                                                                    viewBox="0 0 22 23"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M17.318 16.6207L18.068 16.6274L17.318 16.6207ZM3.6665 4.83793C3.25229 4.83793 2.9165 5.17372 2.9165 5.58793C2.9165 6.00214 3.25229 6.33793 3.6665 6.33793V4.83793ZM18.3332 6.33793C18.7474 6.33793 19.0832 6.00214 19.0832 5.58793C19.0832 5.17372 18.7474 4.83793 18.3332 4.83793V6.33793ZM9.9165 9.2546C9.9165 8.84038 9.58072 8.5046 9.1665 8.5046C8.75229 8.5046 8.4165 8.84038 8.4165 9.2546H9.9165ZM8.4165 16.5879C8.4165 17.0021 8.75229 17.3379 9.1665 17.3379C9.58072 17.3379 9.9165 17.0021 9.9165 16.5879H8.4165ZM13.5832 9.2546C13.5832 8.84038 13.2474 8.5046 12.8332 8.5046C12.419 8.5046 12.0832 8.84038 12.0832 9.2546H13.5832ZM12.0832 16.5879C12.0832 17.0021 12.419 17.3379 12.8332 17.3379C13.2474 17.3379 13.5832 17.0021 13.5832 16.5879H12.0832ZM17.4165 5.58793L16.6665 5.58123L16.568 16.614L17.318 16.6207L18.068 16.6274L18.1665 5.59463L17.4165 5.58793ZM13.6515 20.2546V19.5046H8.24984V20.2546V21.0046H13.6515V20.2546ZM4.58317 5.58793H3.83317V16.5879H4.58317H5.33317V5.58793H4.58317ZM3.6665 5.58793V6.33793H4.58317V5.58793V4.83793H3.6665V5.58793ZM4.58317 5.58793V6.33793H7.33317V5.58793V4.83793H4.58317V5.58793ZM7.33317 5.58793V6.33793H14.6665V5.58793V4.83793H7.33317V5.58793ZM14.6665 5.58793V6.33793H17.4165V5.58793V4.83793H14.6665V5.58793ZM17.4165 5.58793V6.33793H18.3332V5.58793V4.83793H17.4165V5.58793ZM7.33317 5.18052H8.08317C8.08317 3.8753 9.30352 2.67126 10.9998 2.67126V1.92126V1.17126C8.64607 1.17126 6.58317 2.88567 6.58317 5.18052H7.33317ZM10.9998 1.92126V2.67126C12.6962 2.67126 13.9165 3.8753 13.9165 5.18052H14.6665H15.4165C15.4165 2.88567 13.3536 1.17126 10.9998 1.17126V1.92126ZM7.33317 5.18052H6.58317V5.58793H7.33317H8.08317V5.18052H7.33317ZM14.6665 5.18052H13.9165V5.58793H14.6665H15.4165V5.18052H14.6665ZM8.24984 20.2546V19.5046C6.63901 19.5046 5.33317 18.1988 5.33317 16.5879H4.58317H3.83317C3.83317 19.0272 5.81058 21.0046 8.24984 21.0046V20.2546ZM17.318 16.6207L16.568 16.614C16.5537 18.2146 15.2521 19.5046 13.6515 19.5046V20.2546V21.0046C16.0753 21.0046 18.0463 19.0511 18.068 16.6274L17.318 16.6207ZM9.1665 9.2546H8.4165V16.5879H9.1665H9.9165V9.2546H9.1665ZM12.8332 9.2546H12.0832V16.5879H12.8332H13.5832V9.2546H12.8332Z"
                                                                                        fill="#EF2D2D"
                                                                                    />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

