"use client";

import { Search, Plus } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import dynamic from "next/dynamic";

const Apex = dynamic(() => import("../components/Apexchart"), {
    ssr: false,
});
const StackedAreaChart = dynamic(
    () => import("../components/StackedAreaChart"),
    {
        ssr: false,
    }
);

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
    status: "Active" | "Pending" | "Canceled";
}

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import DateCom from "../components/Datepicker";
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
            status: "Active",
        },
        {
            id: 2,
            user: "Jane Smith",
            email: "jane.smith@example.com",
            plan: "Basic",
            startDate: "2025-04-15",
            endDate: "2025-10-15",
            date: "01-12-2025",
            amount: 60.0,
            status: "Pending",
        },
        {
            id: 3,
            user: "Mike Johnson",
            email: "mike.j@example.com",
            plan: "Enterprise",
            startDate: "2024-08-01",
            endDate: "2025-12-31",
            date: "01-12-2025",
            amount: 499.99,
            status: "Canceled",
        },
    ];
    const toggleView = () => {
        setactivebtn((prev) => (prev === "list" ? "graph" : "list"));
    };

    const costTypes = [
        { id: 1, label: "Cash" },
        { id: 2, label: "Credit Card" },
        { id: 3, label: "Insurance" },
    ];
    const materialList = [
        { id: 1, name: "Gloves" },
        { id: 2, name: "Syringes" },
        { id: 3, name: "Bandages" },
        { id: 4, name: "Face Masks" },
    ];
    const treatments = [
        { id: 1, name: "package 1" },
        { id: 2, name: "package 2" },
        { id: 3, name: "package 3" },
    ];
    const expenses = [
        {
            id: 1,
            title: "INV-00295",
            category: "Alice Johnson",
            date: "Alice Johnson",
            amount: "Parent",
            dates: "18-08-2024",
            paid: "$ 1000",
        },
    ];

    const frequencyOptions = [
        { id: 1, name: "Daily" },
        { id: 2, name: "Weekly" },
        { id: 3, name: "Monthly" },
        { id: 4, name: "Yearly" },
    ];
    const [selectedFrequency, setSelectedFrequency] = useState(frequencyOptions[0]);

    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedCostType, setSelectedCostType] = useState(costTypes[0]);
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
    const tabs = ["Cash Flow", "Checks", "Subscriptions", "Expenses"];
    const [selectedUser, setSelectedUser] = useState(userList[0]);
    const [isRestockModalOpen, setIsRestockModalOpen] = useState(false);
    const [restockModalAnim, setRestockModalAnim] = useState(false);
    const [activebtn, setactivebtn] = useState("list");
    const [ShowClinicModal, setShowClinicModal] = useState(false);
    const [ClinicModalAnimation, setClinicModalAnimation] = useState(false);
    const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
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
                    <h1 className="text-3xl font-regular text-[#144A6C]">Financials</h1>
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
                            <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
                                <div className="card h-[calc(100vh-235px)] flex flex-col">
                                    <div className="card-body flex-1 flex flex-col overflow-hidden">
                                        <div className="content-inneres p-4">
                                            <div className="flex md:items-center justify-between md:flex-row flex-col items-start">
                                                <span className="text-[#475467]">View</span>
                                                <div className="flex gap-3 md:flex-row flex-col">
                                                    <div className="slect">
                                                        <div className="relative w-[170px]">
                                                            {/* Left-side calendar icon */}
                                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                <svg
                                                                    width="18"
                                                                    height="19"
                                                                    viewBox="0 0 18 19"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1.5 7.42057H16.5M5.66667 4.08724V0.753906M12.3333 4.08724V0.753906M6.83333 17.4206H11.1667C13.0335 17.4206 13.9669 17.4206 14.68 17.0573C15.3072 16.7377 15.8171 16.2277 16.1367 15.6005C16.5 14.8875 16.5 13.9541 16.5 12.0872V7.75391C16.5 5.88707 16.5 4.95364 16.1367 4.2406C15.8171 3.6134 15.3072 3.10346 14.68 2.78388C13.9669 2.42057 13.0335 2.42057 11.1667 2.42057H6.83333C4.96649 2.42057 4.03307 2.42057 3.32003 2.78388C2.69282 3.10346 2.18289 3.6134 1.86331 4.2406C1.5 4.95364 1.5 5.88706 1.5 7.75391V12.0872C1.5 13.9541 1.5 14.8875 1.86331 15.6005C2.18289 16.2277 2.69282 16.7377 3.32003 17.0573C4.03307 17.4206 4.96649 17.4206 6.83333 17.4206Z"
                                                                        stroke="#606061"
                                                                        strokeOpacity="0.7"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                    />
                                                                </svg>
                                                            </div>

                                                            <Select>
                                                                <SelectTrigger className="bg-[#fff] w-[170px] border border-[#F0F0F0] pl-10 pr-10 rounded-lg text-sm text-[#333] font-normal">
                                                                    <SelectValue placeholder="Monthly" />
                                                                </SelectTrigger>

                                                                <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm">
                                                                    <SelectItem
                                                                        value="monthly"
                                                                        className="text-sm font-normal py-2 px-3 pl-8 relative bg-[#fff] hover:bg-[#eee]"
                                                                        style={{ fontFamily: "Poppins" }}
                                                                    >
                                                                        Monthly
                                                                    </SelectItem>

                                                                    <SelectItem
                                                                        value="weekly"
                                                                        className="text-sm font-normal py-2 px-3 pl-8 relative bg-[#fff] hover:bg-[#eee]"
                                                                        style={{ fontFamily: "Poppins" }}
                                                                    >
                                                                        Weekly
                                                                    </SelectItem>

                                                                    <SelectItem
                                                                        value="yearly"
                                                                        className="text-sm font-normal py-2 px-3 pl-8 relative bg-[#fff] hover:bg-[#eee]"
                                                                        style={{ fontFamily: "Poppins" }}
                                                                    >
                                                                        Yearly
                                                                    </SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                    <div className="slect">
                                                        <DateCom />
                                                    </div>
                                                    <div className="slect">
                                                        <button
                                                            onClick={toggleView}
                                                            className={` w-[170px] border border-[#F0F0F0] pl-10 pr-10 pt-2 pb-2 rounded-lg text-sm text-[#144A6C] font-normal`}
                                                        >
                                                            {activebtn === "list"
                                                                ? "Graph View"
                                                                : "List View"}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {activebtn === "graph" && (
                                                <div>
                                                    <div className="flex justify-between gap-3 mt-4">
                                                        <div className="card" style={{ width: "100%" }}>
                                                            <div className="card-body">
                                                                <Apex />
                                                            </div>
                                                        </div>
                                                        <div className="card" style={{ width: "100%" }}>
                                                            <div className="card-body">
                                                                <StackedAreaChart />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activebtn === "list" && (
                                                <div className="flex-1 overflow-auto mt-4">
                                                    {/* Desktop Table */}
                                                    <div className="">
                                                        <div className="">
                                                            <div className="card-body flex-1 flex flex-col overflow-hidden">
                                                                <div
                                                                    className="h-full"
                                                                    style={{ height: "550px", overflowY: "auto" }}
                                                                >
                                                                    <div className="w-full overflow-x-auto mt-3">
                                                                        <table className="min-w-full">
                                                                            <thead className="bg-gray-50 sticky top-0">
                                                                                <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        Patients
                                                                                    </th>
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        August - 2025
                                                                                    </th>
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        July - 2025
                                                                                    </th>
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        June - 2025
                                                                                    </th>
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        May - 2025
                                                                                    </th>
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        April - 2025
                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody className="bg-white divide-y divide-[#EAECF0]">
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Total Patients
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Existing Patients
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        New Patients
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        06
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="w-full overflow-x-auto mt-3">
                                                                        <table className="min-w-full">
                                                                            <thead className="bg-gray-50 sticky top-0">
                                                                                <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        Income Statement
                                                                                    </th>
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        August - 2025
                                                                                    </th>
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        July - 2025
                                                                                    </th>
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        June - 2025
                                                                                    </th>
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        May - 2025
                                                                                    </th>
                                                                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                                        April - 2025
                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody className="bg-white divide-y divide-[#EAECF0]">
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        Sales
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 55
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Advancement
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        Total Sales
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Payments to other doctors and nurses
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Guards
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Scans
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Inputs
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Meals
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Dental Society
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        Fixed Expenses
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Rent
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Utilities
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Gasoline
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Maintenance
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Mortgage
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Cleaning
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Office Supplies
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Marketing
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Professional Services
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Others
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Wages
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        Cash Flow from Operations
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        CAPEX
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Machinery Sales
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Acquisitions
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        Cash Flow from Investments
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Increase in Debt
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Debt Payment
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Taxes
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        VAT balance
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        Interests
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-gray-50">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        Financing Cashflow
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467] font-bold">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>

                                                                                <tr className="bg-[#144A6C1A]">
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-[#475467] font-bold">
                                                                                        Final Cashflow
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-[#475467] font-bold">
                                                                                        $ 55
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-[#475467] font-bold">
                                                                                        $ 60
                                                                                    </td>
                                                                                    <td className="px-6 py-4 whitespace-nowrap text-lg   text-[#475467] font-bold">
                                                                                        $ 06
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
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
                                            <div className="relative">
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
                                            <div className="w-full overflow-x-auto mt-3">
                                                <table className="min-w-full">
                                                    <thead className="bg-gray-50 sticky top-0">
                                                        <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Check No
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Invoice No
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Check Date
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
                                                                Amount
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Status
                                                            </th>

                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                <svg
                                                                    width={24}
                                                                    height={25}
                                                                    viewBox="0 0 24 25"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M11.6248 11.7128H12.3748M11.6248 12.4628H12.3748M11.6248 4.71283H12.3748M11.6248 5.46283H12.3748M11.6248 18.7128H12.3748M11.6248 19.4628H12.3748M4.62476 11.7128H5.37476M4.62476 12.4628H5.37476M4.62476 4.71283H5.37476M4.62476 5.46283H5.37476M4.62476 18.7128H5.37476M4.62476 19.4628H5.37476M18.6248 11.7128H19.3748M18.6248 12.4628H19.3748M18.6248 4.71283H19.3748M18.6248 5.46283H19.3748M18.6248 18.7128H19.3748M18.6248 19.4628H19.3748M13 12.0879C13 12.6402 12.5523 13.0879 12 13.0879C11.4477 13.0879 11 12.6402 11 12.0879C11 11.5356 11.4477 11.0879 12 11.0879C12.5523 11.0879 13 11.5356 13 12.0879ZM13 5.08789C13 5.64018 12.5523 6.08789 12 6.08789C11.4477 6.08789 11 5.64018 11 5.08789C11 4.53561 11.4477 4.08789 12 4.08789C12.5523 4.08789 13 4.53561 13 5.08789ZM13 19.0879C13 19.6402 12.5523 20.0879 12 20.0879C11.4477 20.0879 11 19.6402 11 19.0879C11 18.5356 11.4477 18.0879 12 18.0879C12.5523 18.0879 13 18.5356 13 19.0879ZM6 12.0879C6 12.6402 5.55229 13.0879 5 13.0879C4.44772 13.0879 4 12.6402 4 12.0879C4 11.5356 4.44772 11.0879 5 11.0879C5.55229 11.0879 6 11.5356 6 12.0879ZM6 5.08789C6 5.64018 5.55229 6.08789 5 6.08789C4.44772 6.08789 4 5.64018 4 5.08789C4 4.53561 4.44772 4.08789 5 4.08789C5.55229 4.08789 6 4.53561 6 5.08789ZM6 19.0879C6 19.6402 5.55229 20.0879 5 20.0879C4.44772 20.0879 4 19.6402 4 19.0879C4 18.5356 4.44772 18.0879 5 18.0879C5.55229 18.0879 6 18.5356 6 19.0879ZM20 12.0879C20 12.6402 19.5523 13.0879 19 13.0879C18.4477 13.0879 18 12.6402 18 12.0879C18 11.5356 18.4477 11.0879 19 11.0879C19.5523 11.0879 20 11.5356 20 12.0879ZM20 5.08789C20 5.64018 19.5523 6.08789 19 6.08789C18.4477 6.08789 18 5.64018 18 5.08789C18 4.53561 18.4477 4.08789 19 4.08789C19.5523 4.08789 20 4.53561 20 5.08789ZM20 19.0879C20 19.6402 19.5523 20.0879 19 20.0879C18.4477 20.0879 18 19.6402 18 19.0879C18 18.5356 18.4477 18.0879 19 18.0879C19.5523 18.0879 20 18.5356 20 19.0879Z"
                                                                        stroke="#144A6C"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                    />
                                                                </svg>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-[#EAECF0]">
                                                        {filteredDoctors.length === 0 ? (
                                                            <tr>
                                                                <td className="text-center py-8 text-gray-400 text-sm col-span-4">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <svg
                                                                            className="w-10 h-10 text-gray-300 mb-2"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g
                                                                                id="SVGRepo_bgCarrier"
                                                                                strokeWidth={0}
                                                                            />
                                                                            <g
                                                                                id="SVGRepo_tracerCarrier"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <g id="SVGRepo_iconCarrier">
                                                                                {" "}
                                                                                <g id="style=stroke">
                                                                                    {" "}
                                                                                    <g id="error-box">
                                                                                        {" "}
                                                                                        <path
                                                                                            id="vector (Stroke)"
                                                                                            fillRule="evenodd"
                                                                                            clipRule="evenodd"
                                                                                            d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25H16C19.7279 1.25 22.75 4.27208 22.75 8V16C22.75 19.7279 19.7279 22.75 16 22.75H8C4.27208 22.75 1.25 19.7279 1.25 16V8ZM8 2.75C5.10051 2.75 2.75 5.10051 2.75 8V16C2.75 18.8995 5.10051 21.25 8 21.25H16C18.8995 21.25 21.25 18.8995 21.25 16V8C21.25 5.10051 18.8995 2.75 16 2.75H8Z"
                                                                                            fill="currentColor"
                                                                                        />{" "}
                                                                                        <path
                                                                                            id="vector (Stroke)_2"
                                                                                            fillRule="evenodd"
                                                                                            clipRule="evenodd"
                                                                                            d="M8.46967 8.46967C8.76257 8.17678 9.23744 8.17678 9.53033 8.46967L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7625 15.8232 14.4696 15.5303L8.46967 9.53033C8.17678 9.23743 8.17678 8.76256 8.46967 8.46967Z"
                                                                                            fill="currentColor"
                                                                                        />{" "}
                                                                                        <path
                                                                                            id="vector (Stroke)_3"
                                                                                            fillRule="evenodd"
                                                                                            clipRule="evenodd"
                                                                                            d="M15.5303 8.46967C15.8232 8.76257 15.8232 9.23744 15.5303 9.53033L9.53033 15.5303C9.23743 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7625 8.46967 14.4696L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
                                                                                            fill="currentColor"
                                                                                        />{" "}
                                                                                    </g>{" "}
                                                                                </g>{" "}
                                                                            </g>
                                                                        </svg>

                                                                        <p>No data found</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ) : (
                                                            filteredDoctors.map((doctor) => (
                                                                <tr
                                                                    key={doctor.id}
                                                                    className="hover:bg-gray-50"
                                                                >
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                        {doctor.id}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                        {doctor.fullName}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                        {doctor.specialty}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                        {doctor.phone}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                        {doctor.email}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                        {doctor.address}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                                                        {doctor.appointments}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                        <span
                                                                            className={`px-3 py-1 rounded-full text-xs font-medium ${doctor.status === "Cleared"
                                                                                ? "bg-[#F8FFF8] text-[#177606] border border-[#B7EFAB] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                                                                : doctor.status === "Unpaid"
                                                                                    ? "bg-[#FFF8F8] text-[#CE2D2D] border border-[#E43F33] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                                                                    : "bg-[#FFFDF8] text-[#766006] border border-[#EFD7AB] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                                                                }`}
                                                                        >
                                                                            {doctor.status}
                                                                        </span>
                                                                    </td>

                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        <div className="flex items-center space-x-2">
                                                                            <button
                                                                                className="text-blue-600 hover:text-blue-800"
                                                                                onClick={() => {
                                                                                    setIsOpen(true);
                                                                                    setTimeout(
                                                                                        () => setModalAnimation(true),
                                                                                        10
                                                                                    );
                                                                                }}
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

                    {selectedTab === 2 && (
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
                                                            Add Clinic
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
                                                                                                    stroke="url(#paint0_linear_0_7879)"
                                                                                                    strokeOpacity="0.3"
                                                                                                />
                                                                                                <path
                                                                                                    d="M14.5 29.5H15.3333M29.5 29.5H28.6667M15.3333 29.5V17.7C15.3333 16.5799 15.3333 16.0198 15.5513 15.592C15.7431 15.2157 16.049 14.9097 16.4254 14.718C16.8532 14.5 17.4132 14.5 18.5333 14.5H22.1333C23.2534 14.5 23.8135 14.5 24.2413 14.718C24.6176 14.9097 24.9236 15.2157 25.1153 15.592C25.3333 16.0198 25.3333 16.5799 25.3333 17.7V18.6667M15.3333 29.5H18.6667M25.3333 29.5V18.6667M25.3333 29.5H28.6667M25.3333 29.5H22M25.3333 18.6667H27.0667C27.6267 18.6667 27.9067 18.6667 28.1207 18.7757C28.3088 18.8715 28.4618 19.0245 28.5577 19.2127C28.6667 19.4266 28.6667 19.7066 28.6667 20.2667V29.5M20.3333 17.8333V21.1667M18.6667 19.5H22M18.6667 29.5V26.1C18.6667 25.5399 18.6667 25.2599 18.7757 25.046C18.8715 24.8578 19.0245 24.7049 19.2127 24.609C19.4266 24.5 19.7066 24.5 20.2667 24.5H20.4C20.9601 24.5 21.2401 24.5 21.454 24.609C21.6422 24.7049 21.7951 24.8578 21.891 25.046C22 25.2599 22 25.5399 22 26.1V29.5M18.6667 29.5H22"
                                                                                                    stroke="#144A6C"
                                                                                                    strokeWidth="1.5"
                                                                                                    strokeLinecap="round"
                                                                                                />
                                                                                                <defs>
                                                                                                    <linearGradient
                                                                                                        id="paint0_linear_0_7879"
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
                                                                                            {/* ...Your existing SVG code here... */}
                                                                                        </div>
                                                                                        <div className="flex flex-col">
                                                                                            <h3 className="text-lg font-regular text-[#144A6C] text-start">
                                                                                                Add New Clinic
                                                                                            </h3>
                                                                                            <span className="text-[#A1A5AA] font-regular">
                                                                                                Provide details to add a new clinic
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>

                                                                                    {/* Form */}
                                                                                    <form className="w-full max-w-4xl mx-auto mt-5">
                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-name">
                                                                                                    Name
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-name"
                                                                                                    type="text"
                                                                                                />
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-email">
                                                                                                    Email Address
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-email"
                                                                                                    type="email"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                                                    Phone Number
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-phone"
                                                                                                    type="tel"
                                                                                                />
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-address">
                                                                                                    Address
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-address"
                                                                                                    type="text"
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-address">
                                                                                                    Package
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
                                                                                    Add Clinic
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
                                                                Invoice Number
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                User
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                User Type
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Clinic
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Package
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Date
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                                                                Amount
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
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                                                        ${sub.amount}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                        <span
                                                                            className={`px-3 py-1 rounded-full text-xs font-medium ${sub.status === "Active"
                                                                                ? "bg-[#F8FFF8] text-[#177606] border border-[#B7EFAB] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                                                                : sub.status === "Canceled"
                                                                                    ? "bg-[#FFF8F8] text-[#CE2D2D] border border-[#E43F33] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                                                                    : "bg-[#FFFDF8] text-[#766006] border border-[#EFD7AB] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                                                                }`}
                                                                        >
                                                                            {sub.status}
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        <div className="flex items-center space-x-2">
                                                                            <button
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


                    {selectedTab === 3 && (
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
                                                    <button
                                                        onClick={() => {
                                                            setShowExpenseModal(true);
                                                            setTimeout(() => setExpenseModalAnimation(true), 10);
                                                        }}
                                                        className="bg-[#144A6C] pl-4 pr-6 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap"
                                                    >
                                                        <Plus className="w-6 h-6 text-white" />
                                                        <span className="text-base font-regular">Add Expense</span>
                                                    </button>

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
                                                                                                Record Expense
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
                                                                                                            <span className="ml-2 font-normal">Fixed</span>
                                                                                                        </label>
                                                                                                        <label className="inline-flex items-center">
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                name="expenseType"
                                                                                                                value="Variable"
                                                                                                                className="form-radio text-blue-600"
                                                                                                            />
                                                                                                            <span className="ml-2">Variable</span>
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </div>

                                                                                                {/* Occurrence */}
                                                                                                <div>
                                                                                                    <label className="block text-sm font-normal text-gray-700 mb-1">Occurrence</label>
                                                                                                    <div className="flex gap-4">
                                                                                                        <label className="inline-flex items-center">
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                name="occurrence"
                                                                                                                value="One-time"
                                                                                                                className="form-radio text-blue-600"
                                                                                                            />
                                                                                                            <span className="ml-2">One-time</span>
                                                                                                        </label>
                                                                                                        <label className="inline-flex items-center">
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                name="occurrence"
                                                                                                                value="Recurring"
                                                                                                                className="form-radio text-blue-600"
                                                                                                            />
                                                                                                            <span className="ml-2">Recurring</span>
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-name">
                                                                                                    Expense Name
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-name"
                                                                                                    type="text"
                                                                                                />
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-email">
                                                                                                    Email Address
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-email"
                                                                                                    type="email"
                                                                                                />
                                                                                            </div>

                                                                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-phone">
                                                                                                    Phone Number
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-phone"
                                                                                                    type="tel"
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-address">
                                                                                                    Frequency
                                                                                                </label>
                                                                                                <Listbox value={selectedFrequency} onChange={setSelectedFrequency}>
                                                                                                    <div className="mt-2 relative">
                                                                                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                                                                            <span className="block truncate">{selectedFrequency.name}</span>
                                                                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                                                <ChevronDownIcon
                                                                                                                    className="h-5 w-5 text-[#144A6C]"
                                                                                                                    aria-hidden="true"
                                                                                                                />
                                                                                                            </span>
                                                                                                        </Listbox.Button>

                                                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                                            {frequencyOptions.map((frequency) => (
                                                                                                                <Listbox.Option
                                                                                                                    key={frequency.id}
                                                                                                                    value={frequency}
                                                                                                                    className={({ active }) =>
                                                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#144A6C] text-white" : "text-gray-900"
                                                                                                                        }`
                                                                                                                    }
                                                                                                                >
                                                                                                                    {({ selected }) => (
                                                                                                                        <>
                                                                                                                            <span
                                                                                                                                className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                                                                                                    }`}
                                                                                                                            >
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
                                                                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                                                            <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                                                                <label className="text-[#757575]" htmlFor="clinic-address">
                                                                                                    Number of Period
                                                                                                </label>
                                                                                                <input
                                                                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                                                                    id="clinic-address"
                                                                                                    type="text"
                                                                                                />
                                                                                            </div>
                                                                                        </div>

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
                                                <table className="min-w-full">
                                                    <thead className="bg-gray-50 sticky top-0">
                                                        <tr>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Expense Type</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Expense Name</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Occurrence</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Frequency</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Date</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Amount</th>
                                                            <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-[#EAECF0]">
                                                        {expenses.length === 0 ? (
                                                            <tr>
                                                                <td colSpan={5} className="text-center py-8 text-gray-400 text-sm">
                                                                    <div className="flex flex-col items-center justify-center">
                                                                        <svg className="w-10 h-10 text-gray-300 mb-2" fill="none" viewBox="0 0 24 24">
                                                                            <path
                                                                                d="M12 9v4m0 4h.01"
                                                                                stroke="currentColor"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2} />
                                                                        </svg>
                                                                        <p>No expenses found</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ) : (
                                                            expenses.map((expense) => (
                                                                <tr key={expense.id} className="hover:bg-gray-50">
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{expense.title}</td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{expense.category}</td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{expense.date}</td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{expense.amount}</td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{expense.dates}</td>
                                                                    <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{expense.paid}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        <div className="flex items-center space-x-2">
                                                                            <button
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
                </div>
            </div>
        </>
    );
}

