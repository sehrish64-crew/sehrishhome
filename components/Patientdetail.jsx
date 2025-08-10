"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import ClinicalNoteEditor from "./Ckeditor";
import PrescriptionSection from "./PrescriptionSection";
import React from "react";

export default function Patientdetail() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    "Details",
    "Background",
    "Current Illness",
    "Dental Exam",
    "Dx & Tx Plan",
    "Evolution",
    "Quotes",
  ];
  const [sections, setSections] = useState([{}]);

  const addSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index + 1, 0, {}); // insert after current
    setSections(newSections);
  };

  const removeSection = (index) => {
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
  };
  const filteredQuotes = [
    {
      id: 1,
      doctor: "Johnsie Jock",
      treatment: "palate expansion",
      quoteDate: "06-02-2025",
      visitDate: "2025-08-05",
      discount: "15%",
      treatmentFee: 12000,
      totalAmount: 10200,
      expiry: "2025-08-20",
    },
    {
      id: 2,
      doctor: "Johnsie Jock",
      treatment: "palate expansion",
      quoteDate: "06-02-2025",
      visitDate: "2025-08-05",
      discount: "15%",
      treatmentFee: 12000,
      totalAmount: 10200,
      expiry: "2025-08-20",
    },
    {
      id: 3,
      doctor: "Johnsie Jock",
      treatment: "palate expansion",
      quoteDate: "06-02-2025",
      visitDate: "2025-08-05",
      discount: "15%",
      treatmentFee: 12000,
      totalAmount: 10200,
      expiry: "2025-08-20",
    },
    {
      id: 4,
      doctor: "Johnsie Jock",
      treatment: "palate expansion",
      quoteDate: "06-02-2025",
      visitDate: "2025-08-05",
      discount: "15%",
      treatmentFee: 12000,
      totalAmount: 10200,
      expiry: "2025-08-20",
    },
    {
      id: 5,
      doctor: "Johnsie Jock",
      treatment: "palate expansion",
      quoteDate: "06-02-2025",
      visitDate: "2025-08-05",
      discount: "15%",
      treatmentFee: 12000,
      totalAmount: 10200,
      expiry: "2025-08-20",
    },
  ];

  const filteredDoctors = [
    {
      id: "D001",
      fullName: "Surgical Scissors",
      visitReason: "Regions",
      lastVisit: "palate expansion",
    },
    {
      id: "D002",
      fullName: "Surgical Scissors",
      visitReason: "Regions",
      lastVisit: "palate expansion",
    },
    {
      id: "D003",
      fullName: "Surgical Scissors",
      visitReason: "Regions",
      lastVisit: "palate expansion",
    },
    {
      id: "D004",
      fullName: "Surgical Scissors",
      visitReason: "Regions",
      lastVisit: "palate expansion",
    },
    {
      id: "D005",
      fullName: "Surgical Scissors",
      visitReason: "Regions",
      lastVisit: "palate expansion",
    },
  ];
  const openSlots = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes - Light" },
    { id: 3, name: "Yes - Heavy" },
  ];
  const specialties = [
    { id: 1, name: "Cardiologist" },
    { id: 2, name: "Dermatologist" },
    { id: 3, name: "Neurologist" },
    { id: 4, name: "Pediatrician" },
    { id: 5, name: "Orthopedic Surgeon" },
    { id: 6, name: "Psychiatrist" },
  ];
  const treatments = [
    { id: 1, name: "Sporadically" },
    { id: 2, name: "Always" },
    { id: 3, name: "Never" },
  ];
  const lunchTimeSlots = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes - Light" },
    { id: 3, name: "Yes - Heavy" },
  ];
  const mealOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes - Light" },
    { id: 3, name: "Yes - Heavy" },
  ];
  const snackSlotOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes - Light" },
    { id: 3, name: "Yes - Heavy" },
  ];
  const dinnerSlotOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes - Light" },
    { id: 3, name: "Yes - Heavy" },
  ];
  const FrequencytwoOptions = [
    { id: 1, name: "Sporadically" },
    { id: 2, name: "Always" },
    { id: 3, name: "Never" },
  ];
  const FrequencythreeOptions = [
    { id: 1, name: "Sporadically" },
    { id: 2, name: "Always" },
    { id: 3, name: "Never" },
  ];
  const FrequencyfourOptions = [
    { id: 1, name: "Sporadically" },
    { id: 2, name: "Always" },
    { id: 3, name: "Never" },
  ];
  const FrequencyfiveOptions = [
    { id: 1, name: "Sporadically" },
    { id: 2, name: "Always" },
    { id: 3, name: "Never" },
  ];
  const activities = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];

  const smokeOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];
  const alcoholOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];
  const teethOptions = [
    { id: 1, name: "Never" },
    { id: 2, name: "1 times/day" },
    { id: 3, name: "2 times/day" },
    { id: 4, name: "3 times/day" },
  ];
  const flossOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes" },
  ];
  const hygieneOptions = [
    { id: 1, name: "Not Appropriate" },
    { id: 2, name: "Appropriate" },
  ];

  const nailBitingOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes" },
  ];
  const objectBitingOptions = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes" },
  ];

  const observationOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];
  const surgeryOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];
  const options = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
  ];
  const bloodTypeOptions = [
    { id: 1, name: "A+" },
    { id: 2, name: "A-" },
    { id: 3, name: "B+" },
    { id: 4, name: "B-" },
    { id: 5, name: "AB+" },
    { id: 6, name: "AB-" },
    { id: 7, name: "O+" },
    { id: 8, name: "O-" },
    { id: 9, name: "Either" },
  ];
  const pregnancyOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
    { id: 3, name: "Not sure" },
  ];
  const breastfeedingOptions = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
    { id: 3, name: "Not applicable" },
  ];
  const asaOptions = [
    { id: 1, name: "ASA I - Healthy patient" },
    { id: 2, name: "ASA II - Mild systemic disease" },
    { id: 3, name: "ASA III - Severe systemic disease" },
    { id: 4, name: "ASA IV - Severe systemic disease (life-threatening)" },
    { id: 5, name: "ASA V - Moribund patient not expected to survive" },
  ];
  const eyeOptions = [
    { id: 1, name: "Normal Vision" },
    { id: 2, name: "Wears Glasses" },
    { id: 3, name: "Wears Contact Lenses" },
    { id: 4, name: "Color Blindness" },
    { id: 5, name: "Blurred Vision" },
    { id: 6, name: "Recent Eye Surgery" },
  ];
  const earOptions = [
    { id: 1, name: "Normal Hearing" },
    { id: 2, name: "Hearing Loss" },
    { id: 3, name: "Tinnitus (Ringing)" },
    { id: 4, name: "Ear Pain" },
    { id: 5, name: "Ear Discharge" },
    { id: 6, name: "Uses Hearing Aid" },
  ];
  const noseOptions = [
    { id: 1, name: "Normal" },
    { id: 2, name: "Nasal Congestion" },
    { id: 3, name: "Runny Nose" },
    { id: 4, name: "Bleeding" },
    { id: 5, name: "Loss of Smell" },
    { id: 6, name: "Nasal Polyps" },
  ];
  const throatOptions = [
    { id: 1, name: "Normal" },
    { id: 2, name: "Sore Throat" },
    { id: 3, name: "Tonsillitis" },
    { id: 4, name: "Hoarseness" },
    { id: 5, name: "Difficulty Swallowing" },
    { id: 6, name: "Throat Infection" },
  ];
  const treatmentPlans = [
    { id: 1, name: "Teeth Cleaning" },
    { id: 2, name: "Root Canal" },
    { id: 3, name: "Braces (Orthodontics)" },
    { id: 4, name: "Dental Implants" },
    { id: 5, name: "Teeth Whitening" },
  ];

  const zones = [
    { id: 1, name: "Upper Left Molar" },
    { id: 2, name: "Upper Right Molar" },
    { id: 3, name: "Lower Left Incisor" },
    { id: 4, name: "Tooth #11" },
    { id: 5, name: "Tooth #36" },
  ];
  const treatmentAreas = [
    { id: 1, name: "Upper Right (UR)" },
    { id: 2, name: "Upper Left (UL)" },
    { id: 3, name: "Lower Right (LR)" },
    { id: 4, name: "Lower Left (LL)" },
  ];
  const locations = [
    { id: 1, name: "US" },
    { id: 2, name: "UK" },
    { id: 3, name: "AUR" },
    { id: 4, name: "EUR" },
    { id: 5, name: "PAK" },
    { id: 6, name: "KU" },
  ];
  const [clinicalNote, setClinicalNote] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [ModalAnimation, setModalAnimation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(treatmentAreas[0]);
  const [selectedPlan, setSelectedPlan] = useState(treatmentPlans[0]);
  const [selectedZone, setSelectedZone] = useState(zones[0]);
  const [selectedThroat, setSelectedThroat] = useState(null);
  const [selectedNose, setSelectedNose] = useState(null);
  const [selectedEars, setSelectedEars] = useState(null);
  const [selectedEyes, setSelectedEyes] = useState(null);
  const [selectedASA, setSelectedASA] = useState(null);
  const [selectedBreastfeeding, setSelectedBreastfeeding] = useState(null);
  const [selectedPregnancy, setSelectedPregnancy] = useState(null);
  const [selectedBloodType, setSelectedBloodType] = useState(
    bloodTypeOptions[0]
  );
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0]);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedSurgery, setSelectedSurgery] = useState(null);
  const [selectedObservation, setSelectedObservation] = useState(null);
  const [selectedObjectBiting, setSelectedObjectBiting] = useState(null);
  const [selectedNailBiting, setSelectedNailBiting] = useState(null);
  const [selectedLunchSlot, setSelectedLunchSlot] = useState(lunchTimeSlots[0]);
  const [selectedSlot, setSelectedSlot] = useState(openSlots[0]);
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [selectedMeal, setSelectedMeal] = useState(mealOptions[0]);
  const [selectedSnackSlot, setSelectedSnackSlot] = useState(
    snackSlotOptions[0]
  );
  const [selectedDinnerSlot, setSelectedDinnerSlot] = useState(
    dinnerSlotOptions[0]
  );
  const [Frequencytwo, setFrequencytwo] = useState(FrequencytwoOptions[0]);
  const [Frequencythree, setFrequencythree] = useState(
    FrequencythreeOptions[0]
  );
  const [Frequencyfour, setFrequencyfour] = useState(FrequencyfourOptions[0]);
  const [Frequencyfive, setFrequencyfive] = useState(FrequencyfiveOptions[0]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedSmoke, setSelectedSmoke] = useState(null);
  const [selectedAlcohol, setSelectedAlcohol] = useState(null);
  const [selectedTeeth, setSelectedTeeth] = useState(null);
  const [selectedFloss, setSelectedFloss] = useState(null);
  const [selectedHygiene, setSelectedHygiene] = useState(null);
  return (
    <div className="overflow-y-auto">
      <div className="mt-6">
        <div className="">
          {/* Left Panel */}
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
                <div className="bg-white rounded-xl shadow p-6">
                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">General Info</h3>
                  </div>
                  <hr />
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Ful Name:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Email:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Cell Phone:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Emergency contact:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Relationship:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Referred by:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Birthdate:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="datepicker"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Gender:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Marital status:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Spatiality:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Level of education:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Dominant hand:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Street:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          City:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Zip code:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Address:
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
              </>
            )}
            {selectedTab === 1 && (
              <div className="bg-white rounded-xl shadow p-6 overflow-y-auto">
                <div className="">
                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">Family History</h3>
                  </div>
                  <hr />
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Current Status of Mother:
                        </label>
                        <div className="flex items-center space-x-10 mt-4">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="status"
                              value="alive"
                              className="peer hidden"
                              checked
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-[#144A6C] flex items-center justify-center peer-checked:before:content-[''] peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:rounded-full peer-checked:before:bg-[#144A6C]"></div>
                            <span className="ml-2 text-[#475467]">Alive</span>
                          </label>

                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="status"
                              value="deceased"
                              className="peer hidden"
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-[#144A6C] flex items-center justify-center peer-checked:before:content-[''] peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:rounded-full peer-checked:before:bg-[#144A6C]"></div>
                            <span className="ml-2 text-[#475467]">
                              Deceased
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Please list any known illnesses or medical conditions:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                    <div
                      className="flex gap-4 flex-col md:flex-row mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Current Status of Father:
                        </label>
                        <div className="flex items-center space-x-10 mt-4">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="statuss"
                              value="alive"
                              className="peer hidden"
                              checked
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-[#144A6C] flex items-center justify-center peer-checked:before:content-[''] peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:rounded-full peer-checked:before:bg-[#144A6C]"></div>
                            <span className="ml-2 text-[#475467]">Alive</span>
                          </label>

                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="statuss"
                              value="deceased"
                              className="peer hidden"
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-[#144A6C] flex items-center justify-center peer-checked:before:content-[''] peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:rounded-full peer-checked:before:bg-[#144A6C]"></div>
                            <span className="ml-2 text-[#475467]">
                              Deceased
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Please list any known illnesses or medical conditions:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4 flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Children:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Please list any known illnesses or medical conditions:
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-area mt-4 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Personal Pathological History
                    </h3>
                  </div>
                  <hr />
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Notes
                        </label>
                        <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="form-area mt-4 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Personal Pathological History
                    </h3>
                  </div>
                  <hr />

                  <div className="mt-3 mb-4">
                    <label htmlFor="">Diet:</label>
                  </div>
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Breakfast
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
                                  className={({ active }) =>
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Frequency
                        </label>
                        <Listbox
                          value={selectedTreatment}
                          onChange={setSelectedTreatment}
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
                              {treatments.map((treatment) => (
                                <Listbox.Option
                                  key={treatment.id}
                                  value={treatment}
                                  className={({ active }) =>
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
                                        {treatment.name}
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

                    <div
                      className="flex gap-4 flex-col md:flex-row mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Lunch
                        </label>
                        <Listbox
                          value={selectedLunchSlot}
                          onChange={setSelectedLunchSlot}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedLunchSlot.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {lunchTimeSlots.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Frequency
                        </label>
                        <Listbox
                          value={Frequencyfive}
                          onChange={setFrequencyfive}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {Frequencyfive.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {FrequencyfiveOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
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

                    <div
                      className="flex gap-4 flex-col md:flex-row mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Meal:
                        </label>
                        <Listbox
                          value={selectedMeal}
                          onChange={setSelectedMeal}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedMeal.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {mealOptions.map((meal) => (
                                <Listbox.Option
                                  key={meal.id}
                                  value={meal}
                                  className={({ active }) =>
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
                                        {meal.name}
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Frequency
                        </label>
                        <Listbox
                          value={Frequencytwo}
                          onChange={setFrequencytwo}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {Frequencytwo.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {FrequencytwoOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
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

                    <div
                      className="flex gap-4 flex-col md:flex-row mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Snack:
                        </label>
                        <Listbox
                          value={selectedSnackSlot}
                          onChange={setSelectedSnackSlot}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedSnackSlot.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {snackSlotOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Frequency
                        </label>
                        <Listbox
                          value={Frequencythree}
                          onChange={setFrequencythree}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {Frequencythree.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {FrequencythreeOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
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

                    <div
                      className="flex gap-4 flex-col md:flex-row mt-4"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Dinner:
                        </label>
                        <Listbox
                          value={selectedDinnerSlot}
                          onChange={setSelectedDinnerSlot}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedDinnerSlot.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {dinnerSlotOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Frequency
                        </label>
                        <Listbox
                          value={Frequencyfour}
                          onChange={setFrequencyfour}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {Frequencyfour.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {FrequencyfourOptions.map((slot) => (
                                <Listbox.Option
                                  key={slot.id}
                                  value={slot}
                                  className={({ active }) =>
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
                  </div>

                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Observations
                        </label>
                        <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mb-4">
                    <label htmlFor="">Dwelling:</label>
                  </div>
                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Housing description:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Rooms
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Services
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Vaccines:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Personal hygiene:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="mt-3 mb-4">
                    <label htmlFor="">Habits:</label>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Do you do sports or physical activities?
                      </label>
                      <Listbox
                        value={selectedActivity}
                        onChange={setSelectedActivity}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedActivity?.name || "Select Activity"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {activities.map((activity) => (
                              <Listbox.Option
                                key={activity.id}
                                value={activity}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {activity.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Do you smoke?
                      </label>
                      <Listbox
                        value={selectedSmoke}
                        onChange={setSelectedSmoke}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedSmoke?.name || "Select Smoke Status"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {smokeOptions.map((option) => (
                              <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {option.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Do you consume alcohol?
                      </label>
                      <Listbox
                        value={selectedAlcohol}
                        onChange={setSelectedAlcohol}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedAlcohol?.name ||
                                "Select Alcohol Consumption"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {alcoholOptions.map((option) => (
                              <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {option.name}
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

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        How often do you brush your teeth?
                      </label>

                      <Listbox
                        value={selectedTeeth}
                        onChange={setSelectedTeeth}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedTeeth?.name || "Select Teeth Brush time"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {teethOptions.map((option) => (
                              <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {option.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Do you floss?
                      </label>
                      <Listbox
                        value={selectedFloss}
                        onChange={setSelectedFloss}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedFloss?.name || "Select Flossing Habit"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {flossOptions.map((option) => (
                              <Listbox.Option
                                key={option.id}
                                value={option}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {option.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Oral hygiene techniques
                      </label>
                      <Listbox
                        value={selectedHygiene}
                        onChange={setSelectedHygiene}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedHygiene?.name ||
                                "Select Hygiene Technique"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {hygieneOptions.map((technique) => (
                              <Listbox.Option
                                key={technique.id}
                                value={technique}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {technique.name}
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

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Nail biting
                      </label>
                      <Listbox
                        value={selectedNailBiting}
                        onChange={setSelectedNailBiting}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedNailBiting?.name ||
                                "Select Nail Biting Habit"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {nailBitingOptions.map((habit) => (
                              <Listbox.Option
                                key={habit.id}
                                value={habit}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {habit.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Biting objects
                      </label>
                      <Listbox
                        value={selectedObjectBiting}
                        onChange={setSelectedObjectBiting}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedObjectBiting?.name ||
                                "Select Object Biting Habit"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {objectBitingOptions.map((habit) => (
                              <Listbox.Option
                                key={habit.id}
                                value={habit}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {habit.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Observations
                      </label>
                      <Listbox
                        value={selectedObservation}
                        onChange={setSelectedObservation}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedObservation?.name ||
                                "Select Observation"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {observationOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Personal History Notes
                        </label>
                        <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Surgical history
                    </h3>
                  </div>
                  <hr />
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Previous hospitalizations
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Surgical history
                        </label>
                        <Listbox
                          value={selectedSurgery}
                          onChange={setSelectedSurgery}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedSurgery?.name ||
                                  "Select Surgical History"}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {surgeryOptions.map((item) => (
                                <Listbox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
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
                                        {item.name}
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Complications
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Have you ever had a blood transfusion?
                        </label>
                        <Listbox
                          value={selectedOption}
                          onChange={setSelectedOption}
                        >
                          <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedOption.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {options.map((option) => (
                                <Listbox.Option
                                  key={option.id}
                                  value={option}
                                  className={({ active }) =>
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
                                        {option.name}
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
                              ))}
                            </Listbox.Options>
                          </div>
                        </Listbox>
                      </div>
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Blood type
                        </label>
                        <Listbox
                          value={selectedBloodType}
                          onChange={setSelectedBloodType}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedBloodType?.name || "Select Blood Type"}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {bloodTypeOptions.map((item) => (
                                <Listbox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
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
                                        {item.name}
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Have you had any adverse reactions to anesthesia?
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Gynecological-obstetric history
                    </h3>
                  </div>
                  <hr />

                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label className="text-[#757575]">
                          Start of menstruation
                        </label>

                        <div className="mt-2 relative w-full">
                          <input
                            id="datepicker"
                            type="text"
                            className="block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                            placeholder="Select date"
                          />

                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.25 7.5H15.75M6 4.5V1.5M12 4.5V1.5M7.05 16.5H10.95C12.6302 16.5 13.4702 16.5 14.112 16.173C14.6765 15.8854 15.1354 15.4265 15.423 14.862C15.75 14.2202 15.75 13.3802 15.75 11.7V7.8C15.75 6.11984 15.75 5.27976 15.423 4.63803C15.1354 4.07354 14.6765 3.6146 14.112 3.32698C13.4702 3 12.6302 3 10.95 3H7.05C5.36984 3 4.52976 3 3.88803 3.32698C3.32354 3.6146 2.8646 4.07354 2.57698 4.63803C2.25 5.27976 2.25 6.11984 2.25 7.8V11.7C2.25 13.3802 2.25 14.2202 2.57698 14.862C2.8646 15.4265 3.32354 15.8854 3.88803 16.173C4.52976 16.5 5.36984 16.5 7.05 16.5Z"
                                stroke="#A1A5AA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Are you pregnant?
                        </label>
                        <Listbox
                          value={selectedPregnancy}
                          onChange={setSelectedPregnancy}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedPregnancy?.name ||
                                  "Are you currently pregnant?"}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {pregnancyOptions.map((item) => (
                                <Listbox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
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
                                        {item.name}
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Previous pregnancies
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Are you Breasfeeding?
                        </label>
                        <Listbox
                          value={selectedBreastfeeding}
                          onChange={setSelectedBreastfeeding}
                        >
                          <div className="mt-2 relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                              <span className="block truncate">
                                {selectedBreastfeeding?.name ||
                                  "Are you currently breastfeeding?"}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-[#144A6C]"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {breastfeedingOptions.map((item) => (
                                <Listbox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
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
                                        {item.name}
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
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Observation
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Perinatal history
                    </h3>
                  </div>
                  <hr />

                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Size at birth
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>

                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Birth weight
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Gestation period
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>

                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Type of delivery
                        </label>
                        <input
                          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                          id="grid-address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6" style={{ width: "100%" }}>
                    <div
                      className="flex gap-4 flex-col md:flex-row"
                      style={{ width: "100%" }}
                    >
                      <div className="field" style={{ width: "100%" }}>
                        <label
                          className="text-[#757575]"
                          htmlFor="grid-address"
                        >
                          Notes
                        </label>
                        <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 2 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Current condition</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Description of the condition for which you are
                        consulting:
                      </label>
                      <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Location:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Start:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Duration:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Quality:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Severity:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Relieving and/or exacerbating factors:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Associated signs and symptoms:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="datepicker"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Are you under medical care/treatment?
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Reason:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Doctor’s Name:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Location/Institution:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Phone:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Last visit:
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
            )}

            {selectedTab === 3 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Vital Signs</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Weight:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Height:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Blood Pressure:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Temperature
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Heartrate:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Respiratory rate
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        ASA Classification
                      </label>
                      <Listbox value={selectedASA} onChange={setSelectedASA}>
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedASA?.name || "Select ASA Classification"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {asaOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">Head</h3>
                  </div>
                  <hr />
                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Eyes:
                      </label>
                      <Listbox value={selectedEyes} onChange={setSelectedEyes}>
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedEyes?.name || "Select Eye Condition"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {eyeOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Ears:
                      </label>
                      <Listbox value={selectedEars} onChange={setSelectedEars}>
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedEars?.name || "Select Ear Condition"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {earOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                  <div
                    className="mt-4 flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Nose:
                      </label>
                      <Listbox value={selectedNose} onChange={setSelectedNose}>
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedNose?.name || "Select Nose Condition"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {noseOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Throat:
                      </label>
                      <Listbox
                        value={selectedThroat}
                        onChange={setSelectedThroat}
                      >
                        <div className="mt-2 relative">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                            <span className="block truncate">
                              {selectedThroat?.name ||
                                "Select Throat Condition"}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-[#144A6C]"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {throatOptions.map((item) => (
                              <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                    ? "bg-[#144A6C] text-white"
                                    : "text-gray-900"
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${selected ? "font-medium" : "font-normal"
                                        }`}
                                    >
                                      {item.name}
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
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">
                    bg-white rounded-xl shadow p-6iopulmonary
                  </h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Chest Pain:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Hypertension:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Palpitations
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Dyspnea:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Cough:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Wheezing:
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Hemoptysis
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Vomica
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">
                    Abdomen & Urogenital
                  </h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Abdominal Pain
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Diarrhea/Constipation
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Nausea/Vomiting
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Difficulty Swallowing
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Kidney Diseases
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Urinary Issues
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">
                    Neuromuscular & Skin
                  </h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Muscle/Joint pain
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Headache
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Paresthesia
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Seizures
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Anxiety/Depression
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Itching
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Skin lesions
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Endocrine</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Diabetes
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Hyper/Hypothyroidism
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Contraceptive methods
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Adrenal Issues
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Hematologic</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Anemia
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Bleeding
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Petechiae
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Use of Anticoagulants
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Hemophilia
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Immunologic</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Allergies
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Anaphylaxis
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Lymph node inflammation
                      </label>
                      <input
                        className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                        id="grid-address"
                        type="text"
                      />
                    </div>
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Other Immunologic Diseases
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
            )}

            {selectedTab === 4 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">Diagnosis</h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Description
                      </label>
                      <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                    </div>
                  </div>
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">
                    General treatment plan
                  </h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    style={{ width: "100%" }}
                  >
                    <div className="field" style={{ width: "100%" }}>
                      <label className="text-[#757575]" htmlFor="grid-address">
                        Description
                      </label>
                      <textarea className="row-span-2 w-full p-4 rounded-lg border border-[#E1E6ED] focus:outline-none focus:ring-1 focus:ring-[#E1E6ED] focus:border-[#E1E6ED]] text-sm text-gray-700 resize-none"></textarea>
                    </div>
                  </div>
                </div>

                <div className="form-area mt-3 mb-2">
                  <h3 className="text-[#475467] text-1xl">
                    Specific treatment plans
                  </h3>
                </div>
                <hr />
                <div className="mt-6" style={{ width: "100%" }}>
                  <div className="list_icon">
                    <ul className="list-[auto] pl-5">
                      <li className="fw-[100] text-[#475467]">
                        Select a name for the treatment plan.
                      </li>
                      <li className="fw-[100] text-[#475467]">
                        Specify the area where a treatment will be added to the
                        plan
                      </li>
                      <li className="fw-[100] text-[#475467]">
                        Search for the treatment and select it from the list to
                        add it.
                      </li>
                      <li className="fw-[100] text-[#475467]">
                        Repeat steps 2 and 3 until the plan is complete
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2 w-100 justify-between mt-4">
                  <div className="planes">
                    <label className="text-[#757575]" htmlFor="grid-address">
                      Treatment Plan
                    </label>
                    <Listbox value={selectedPlan} onChange={setSelectedPlan}>
                      <div className="relative">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#144A6C] focus:border-[#144A6C] sm:text-sm">
                          <span className="block truncate">
                            {selectedPlan.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ChevronDownIcon
                              className="h-5 w-5 text-[#144A6C]"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {treatmentPlans.map((plan) => (
                            <Listbox.Option
                              key={plan.id}
                              value={plan}
                              className={({ active }) =>
                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active
                                  ? "bg-[#144A6C] text-white"
                                  : "text-gray-900"
                                }`
                              }
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? "font-medium" : "font-normal"
                                      }`}
                                  >
                                    {plan.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                  </div>
                  <div className="planes">
                    <label className="text-[#757575]" htmlFor="grid-address">
                      Zone/Tooth
                    </label>
                    <Listbox value={selectedZone} onChange={setSelectedZone}>
                      <div className="relative">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#144A6C] focus:border-[#144A6C] sm:text-sm">
                          <span className="block truncate">
                            {selectedZone.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ChevronDownIcon
                              className="h-5 w-5 text-[#144A6C]"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {zones.map((zone) => (
                            <Listbox.Option
                              key={zone.id}
                              value={zone}
                              className={({ active }) =>
                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active
                                  ? "bg-[#144A6C] text-white"
                                  : "text-gray-900"
                                }`
                              }
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? "font-medium" : "font-normal"
                                      }`}
                                  >
                                    {zone.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                  </div>
                  <div className="planes">
                    <label className="text-[#757575]" htmlFor="grid-address">
                      Treatment
                    </label>
                    <Listbox value={selectedArea} onChange={setSelectedArea}>
                      <div className="relative">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#144A6C] focus:border-[#144A6C] sm:text-sm">
                          <span className="block truncate">
                            {selectedArea.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ChevronDownIcon
                              className="h-5 w-5 text-[#144A6C]"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {treatmentAreas.map((area) => (
                            <Listbox.Option
                              key={area.id}
                              value={area}
                              className={({ active }) =>
                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active
                                  ? "bg-[#144A6C] text-white"
                                  : "text-gray-900"
                                }`
                              }
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? "font-medium" : "font-normal"
                                      }`}
                                  >
                                    {area.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="w-full overflow-x-auto mt-3">
                    <table className="min-w-full">
                      <thead className="bg-gray-50 sticky top-0">
                        <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            ID No
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Treatment Plan
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Zone Tooth
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Treatment
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.62476 8.71283H9.37476M8.62476 9.46283H9.37476M8.62476 1.71283H9.37476M8.62476 2.46283H9.37476M8.62476 15.7128H9.37476M8.62476 16.4628H9.37476M1.62476 8.71283H2.37476M1.62476 9.46283H2.37476M1.62476 1.71283H2.37476M1.62476 2.46283H2.37476M1.62476 15.7128H2.37476M1.62476 16.4628H2.37476M15.6248 8.71283H16.3748M15.6248 9.46283H16.3748M15.6248 1.71283H16.3748M15.6248 2.46283H16.3748M15.6248 15.7128H16.3748M15.6248 16.4628H16.3748M10 9.08789C10 9.64018 9.55228 10.0879 9 10.0879C8.44772 10.0879 8 9.64018 8 9.08789C8 8.53561 8.44772 8.08789 9 8.08789C9.55228 8.08789 10 8.53561 10 9.08789ZM10 2.08789C10 2.64018 9.55228 3.08789 9 3.08789C8.44772 3.08789 8 2.64018 8 2.08789C8 1.53561 8.44772 1.08789 9 1.08789C9.55228 1.08789 10 1.53561 10 2.08789ZM10 16.0879C10 16.6402 9.55228 17.0879 9 17.0879C8.44772 17.0879 8 16.6402 8 16.0879C8 15.5356 8.44772 15.0879 9 15.0879C9.55228 15.0879 10 15.5356 10 16.0879ZM3 9.08789C3 9.64018 2.55229 10.0879 2 10.0879C1.44772 10.0879 1 9.64018 1 9.08789C1 8.53561 1.44772 8.08789 2 8.08789C2.55229 8.08789 3 8.53561 3 9.08789ZM3 2.08789C3 2.64018 2.55229 3.08789 2 3.08789C1.44772 3.08789 1 2.64018 1 2.08789C1 1.53561 1.44772 1.08789 2 1.08789C2.55229 1.08789 3 1.53561 3 2.08789ZM3 16.0879C3 16.6402 2.55229 17.0879 2 17.0879C1.44772 17.0879 1 16.6402 1 16.0879C1 15.5356 1.44772 15.0879 2 15.0879C2.55229 15.0879 3 15.5356 3 16.0879ZM17 9.08789C17 9.64018 16.5523 10.0879 16 10.0879C15.4477 10.0879 15 9.64018 15 9.08789C15 8.53561 15.4477 8.08789 16 8.08789C16.5523 8.08789 17 8.53561 17 9.08789ZM17 2.08789C17 2.64018 16.5523 3.08789 16 3.08789C15.4477 3.08789 15 2.64018 15 2.08789C15 1.53561 15.4477 1.08789 16 1.08789C16.5523 1.08789 17 1.53561 17 2.08789ZM17 16.0879C17 16.6402 16.5523 17.0879 16 17.0879C15.4477 17.0879 15 16.6402 15 16.0879C15 15.5356 15.4477 15.0879 16 15.0879C16.5523 15.0879 17 15.5356 17 16.0879Z"
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
                            <td
                              colSpan={7}
                              className="text-center py-8 text-gray-400 text-sm"
                            >
                              <div className="flex flex-col items-center justify-center">
                                <svg
                                  className="w-10 h-10 text-gray-300 mb-2"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25H16C19.7279 1.25 22.75 4.27208 22.75 8V16C22.75 19.7279 19.7279 22.75 16 22.75H8C4.27208 22.75 1.25 19.7279 1.25 16V8Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M8.46967 8.46967C8.76257 8.17678 9.23744 8.17678 9.53033 8.46967L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7625 15.8232 14.4696 15.5303L8.46967 9.53033C8.17678 9.23743 8.17678 8.76256 8.46967 8.46967Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M15.5303 8.46967C15.8232 8.76257 15.8232 9.23744 15.5303 9.53033L9.53033 15.5303C9.23743 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7625 8.46967 14.4696L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <p>No data found</p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          filteredDoctors.map((doctor) => (
                            <tr key={doctor.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.fullName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.visitReason}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.lastVisit}
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center space-x-2">
                                  <button className="text-blue-600 hover:text-blue-800">
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
                                        confirmButtonText: "Yes, delete it!",
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
            )}
            {selectedTab === 5 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex md:flex-row flex-col justify-between mb-2 items-center">
                  <div className="form-area mt-3 mb-2">
                    <h3 className="text-[#475467] text-1xl">
                      Evolution Notes{" "}
                    </h3>
                  </div>
                  <div className="corner-btn">
                    <div className="flex gap-2">
                      <button className="border border-[#F0F0F0] rounded-lg flex flex-row gap-2 py-2 px-4 text-[#606061B2]">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9536 0.837891H2.04636C1.3304 0.837891 0.75 1.41829 0.75 2.13425C0.75 2.47807 0.886581 2.8078 1.1297 3.05092L5.66421 7.58544C6.03929 7.96051 6.25 8.46922 6.25 8.99965V13.3518C6.25 14.1094 6.67801 14.8019 7.35557 15.1407L11.0264 16.9761C11.3588 17.1423 11.75 16.9006 11.75 16.5289V8.99965C11.75 8.46922 11.9607 7.96051 12.3358 7.58544L16.8703 3.05092C17.1134 2.8078 17.25 2.47807 17.25 2.13425C17.25 1.41829 16.6696 0.837891 15.9536 0.837891Z"
                            stroke="#606061"
                            stroke-opacity="0.7"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                        Filter
                      </button>
                      <button
                        className="border border-[#F0F0F0] rounded-lg flex flex-row gap-2 py-2 px-4 text-[#144A6C]"
                        onClick={() => {
                          setIsOpen(true);
                          setTimeout(() => setModalAnimation(true), 10);
                        }}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 7.08789V11.0879M11 11.0879V15.0879M11 11.0879H15M11 11.0879H7M21 11.0879C21 16.6107 16.5228 21.0879 11 21.0879C5.47715 21.0879 1 16.6107 1 11.0879C1 5.56504 5.47715 1.08789 11 1.08789C16.5228 1.08789 21 5.56504 21 11.0879Z"
                            stroke="#144A6C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                        Add
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
                                              stroke="url(#paint0_linear_203_714)"
                                              strokeOpacity="0.3"
                                            />
                                            <path
                                              d="M18.6673 22.9165C18.2531 22.9165 17.9173 23.2523 17.9173 23.6665C17.9173 24.0807 18.2531 24.4165 18.6673 24.4165V22.9165ZM20.334 24.4165C20.7482 24.4165 21.084 24.0807 21.084 23.6665C21.084 23.2523 20.7482 22.9165 20.334 22.9165V24.4165ZM18.6673 19.5832C18.2531 19.5832 17.9173 19.919 17.9173 20.3332C17.9173 20.7474 18.2531 21.0832 18.6673 21.0832V19.5832ZM23.6673 21.0832C24.0815 21.0832 24.4173 20.7474 24.4173 20.3332C24.4173 19.919 24.0815 19.5832 23.6673 19.5832V21.0832ZM18.6673 16.2498C18.2531 16.2498 17.9173 16.5856 17.9173 16.9998C17.9173 17.4141 18.2531 17.7498 18.6673 17.7498V16.2498ZM23.6673 17.7498C24.0815 17.7498 24.4173 17.4141 24.4173 16.9998C24.4173 16.5856 24.0815 16.2498 23.6673 16.2498V17.7498ZM26.2507 20.3332C26.2507 20.7474 26.5864 21.0832 27.0007 21.0832C27.4149 21.0832 27.7507 20.7474 27.7507 20.3332H26.2507ZM20.334 29.4165C20.7482 29.4165 21.084 29.0807 21.084 28.6665C21.084 28.2523 20.7482 27.9165 20.334 27.9165V29.4165ZM16.2324 28.4789L16.5781 27.8133L16.5781 27.8133L16.2324 28.4789ZM15.5216 27.7681L14.8561 28.1139L14.8561 28.1139L15.5216 27.7681ZM26.1023 13.8541L25.7565 14.5197L25.7565 14.5197L26.1023 13.8541ZM26.813 14.5649L26.1474 14.9106V14.9106L26.813 14.5649ZM16.2324 13.8541L15.8866 13.1886V13.1886L16.2324 13.8541ZM15.5216 14.5649L14.8561 14.2191H14.8561L15.5216 14.5649ZM23.6674 25.4165C23.2532 25.4165 22.9174 25.7523 22.9174 26.1665C22.9174 26.5807 23.2532 26.9165 23.6674 26.9165V25.4165ZM28.6674 26.9165C29.0816 26.9165 29.4174 26.5807 29.4174 26.1665C29.4174 25.7523 29.0816 25.4165 28.6674 25.4165V26.9165ZM26.9173 23.6665C26.9173 23.2523 26.5815 22.9165 26.1673 22.9165C25.7531 22.9165 25.4173 23.2523 25.4173 23.6665H26.9173ZM25.4173 28.6664C25.4173 29.0806 25.7531 29.4164 26.1673 29.4164C26.5815 29.4164 26.9173 29.0806 26.9173 28.6664H25.4173ZM18.6673 23.6665V24.4165H20.334V23.6665V22.9165H18.6673V23.6665ZM18.6673 20.3332V21.0832H23.6673V20.3332V19.5832H18.6673V20.3332ZM18.6673 16.9998V17.7498H23.6673V16.9998V16.2498H18.6673V16.9998ZM18.0173 13.6665V14.4165H24.3173V13.6665V12.9165H18.0173V13.6665ZM27.0007 16.3498H26.2507V20.3332H27.0007H27.7507V16.3498H27.0007ZM20.334 28.6665V27.9165H18.0173V28.6665V29.4165H20.334V28.6665ZM15.334 25.9832H16.084V16.3498H15.334H14.584V25.9832H15.334ZM18.0173 28.6665V27.9165C17.5302 27.9165 17.2106 27.9159 16.9664 27.8956C16.7312 27.8761 16.6338 27.8422 16.5781 27.8133L16.2324 28.4789L15.8866 29.1444C16.1921 29.3031 16.5126 29.3631 16.8423 29.3905C17.163 29.4171 17.5553 29.4165 18.0173 29.4165V28.6665ZM15.334 25.9832H14.584C14.584 26.4452 14.5834 26.8375 14.61 27.1582C14.6374 27.4878 14.6974 27.8083 14.8561 28.1139L15.5216 27.7681L16.1872 27.4224C16.1582 27.3667 16.1244 27.2693 16.1049 27.034C16.0846 26.7898 16.084 26.4703 16.084 25.9832H15.334ZM16.2324 28.4789L16.5781 27.8133C16.4107 27.7263 16.2742 27.5898 16.1872 27.4224L15.5216 27.7681L14.8561 28.1139C15.0854 28.5552 15.4452 28.9151 15.8866 29.1444L16.2324 28.4789ZM24.3173 13.6665V14.4165C24.8045 14.4165 25.124 14.4171 25.3682 14.4374C25.6034 14.4569 25.7008 14.4908 25.7565 14.5197L26.1023 13.8541L26.448 13.1886C26.1425 13.0299 25.822 12.9699 25.4923 12.9425C25.1717 12.9159 24.7793 12.9165 24.3173 12.9165V13.6665ZM27.0007 16.3498H27.7507C27.7507 15.8879 27.7513 15.4955 27.7246 15.1748C27.6972 14.8452 27.6373 14.5247 27.4786 14.2191L26.813 14.5649L26.1474 14.9106C26.1764 14.9663 26.2102 15.0637 26.2298 15.299C26.25 15.5432 26.2507 15.8627 26.2507 16.3498H27.0007ZM26.1023 13.8541L25.7565 14.5197C25.924 14.6067 26.0605 14.7432 26.1474 14.9106L26.813 14.5649L27.4786 14.2191C27.2493 13.7778 26.8894 13.4179 26.448 13.1886L26.1023 13.8541ZM18.0173 13.6665V12.9165C17.5553 12.9165 17.163 12.9159 16.8423 12.9425C16.5126 12.9699 16.1921 13.0299 15.8866 13.1886L16.2324 13.8541L16.5781 14.5197C16.6338 14.4908 16.7312 14.4569 16.9664 14.4374C17.2106 14.4171 17.5302 14.4165 18.0173 14.4165V13.6665ZM15.334 16.3498H16.084C16.084 15.8627 16.0846 15.5432 16.1049 15.299C16.1244 15.0637 16.1582 14.9663 16.1872 14.9106L15.5216 14.5649L14.8561 14.2191C14.6974 14.5247 14.6374 14.8452 14.61 15.1748C14.5834 15.4955 14.584 15.8879 14.584 16.3498H15.334ZM16.2324 13.8541L15.8866 13.1886C15.4452 13.4179 15.0854 13.7778 14.8561 14.2191L15.5216 14.5649L16.1872 14.9106C16.2742 14.7432 16.4107 14.6067 16.5781 14.5197L16.2324 13.8541ZM23.6674 26.1665V26.9165H28.6674V26.1665V25.4165H23.6674V26.1665ZM26.1673 23.6665H25.4173L25.4173 28.6664H26.1673H26.9173L26.9173 23.6665H26.1673Z"
                                              fill="#144A6C"
                                            />
                                            <defs>
                                              <linearGradient
                                                id="paint0_linear_203_714"
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
                                            Add New Notes
                                          </h3>
                                          <span className="text-[#A1A5AA] font-regular">
                                            Provide details to add a new Note
                                          </span>
                                        </div>
                                        <hr />
                                      </div>
                                      <form className="w-full max-w-4xl mx-auto mt-5">
                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                            <label
                                              className="text-[#757575]"
                                              htmlFor="grid-address"
                                            >
                                              Attended by:
                                            </label>
                                            <input
                                              className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                              id="grid-address"
                                              type="text"
                                            />
                                          </div>

                                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                            <label
                                              className="text-[#757575]"
                                              htmlFor="grid-category"
                                            >
                                              Reason for Consultation
                                            </label>
                                            <input
                                              className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                              id="grid-address"
                                              type="text"
                                            />
                                          </div>
                                        </div>

                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                            <label
                                              className="text-[#757575]"
                                              htmlFor="grid-category"
                                            >
                                              Specialty
                                            </label>
                                            <Listbox
                                              value={selectedSpecialty}
                                              onChange={setSelectedSpecialty}
                                            >
                                              <div className="mt-2 relative">
                                                <Listbox.Button
                                                  id="specialty-select"
                                                  className="relative w-full cursor-default rounded-md bg-white py-3 pl-4 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] sm:text-sm"
                                                >
                                                  <span className="block truncate">
                                                    {selectedSpecialty.name}
                                                  </span>
                                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronDownIcon
                                                      className="h-5 w-5 text-[#144A6C]"
                                                      aria-hidden="true"
                                                    />
                                                  </span>
                                                </Listbox.Button>

                                                <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                  {specialties.map(
                                                    (specialty) => (
                                                      <Listbox.Option
                                                        key={specialty.id}
                                                        value={specialty}
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
                                                              {specialty.name}
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
                                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                            <label
                                              className="text-[#757575]"
                                              htmlFor="grid-category"
                                            >
                                              Location
                                            </label>
                                            <Listbox
                                              value={selectedLocation}
                                              onChange={setSelectedLocation}
                                            >
                                              <div className="mt-2 relative">
                                                <Listbox.Button
                                                  id="location-select"
                                                  className="relative w-full cursor-default rounded-md bg-white py-3 pl-4 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] sm:text-sm"
                                                >
                                                  <span className="block truncate">
                                                    {selectedLocation.name}
                                                  </span>
                                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronDownIcon
                                                      className="h-5 w-5 text-[#144A6C]"
                                                      aria-hidden="true"
                                                    />
                                                  </span>
                                                </Listbox.Button>

                                                <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                  {locations.map((location) => (
                                                    <Listbox.Option
                                                      key={location.id}
                                                      value={location}
                                                      className={({ active }) =>
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
                                                            {location.name}
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
                                                  ))}
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
                                              Clinical note
                                            </label>
                                            <ClinicalNoteEditor />
                                          </div>
                                        </div>

                                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                          <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                            <label
                                              className="text-[#757575]"
                                              htmlFor="grid-category"
                                            >
                                              Activity and date of next
                                              appointment:
                                            </label>
                                            <input
                                              className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                              id="grid-address"
                                              type="text"
                                            />
                                          </div>
                                        </div>

                                        <div className="mt-5">
                                          <div className="border border-[#EBEBEB] md-shadow rounded-xl pl-4 pr-4 pb-4 pt-3">
                                            <div class="form-area mt-3 mb-2">
                                              <h3 class="text-[#757575] text-1xl">
                                                Somatometry and Vital Signs
                                              </h3>
                                            </div>
                                            <hr />
                                            <div className="flex mt-4 gap-4">
                                              <div className="box">
                                                <label
                                                  className="text-[#757575]"
                                                  htmlFor="grid-category"
                                                >
                                                  Weight
                                                </label>
                                                <input
                                                  className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                  id="grid-address"
                                                  type="text"
                                                  placeholder="Kg"
                                                />
                                              </div>

                                              <div className="box">
                                                <label
                                                  className="text-[#757575]"
                                                  htmlFor="grid-category"
                                                >
                                                  Pulse
                                                </label>
                                                <input
                                                  className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                  id="grid-address"
                                                  type="text"
                                                  placeholder="bpm"
                                                />
                                              </div>

                                              <div className="box">
                                                <label
                                                  className="text-[#757575]"
                                                  htmlFor="grid-category"
                                                >
                                                  Height/size
                                                </label>
                                                <input
                                                  className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                  id="grid-address"
                                                  type="text"
                                                  placeholder="cm"
                                                />
                                              </div>

                                              <div className="box">
                                                <label
                                                  className="text-[#757575]"
                                                  htmlFor="grid-category"
                                                >
                                                  Respiratory rate
                                                </label>
                                                <input
                                                  className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                  id="grid-address"
                                                  type="text"
                                                  placeholder="rpm"
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
                                          </div>
                                        </div>

                                        <div className="mt-5">
                                          {sections.map((_, index) => (
                                            <PrescriptionSection
                                              key={index}
                                              isRemovable={index !== 0}
                                              showAddButton={index === 0} // 👈 Add only in first section
                                              onAdd={() => addSection(index)}
                                              onRemove={() =>
                                                removeSection(index)
                                              }
                                            />
                                          ))}
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
                                      Add Notes
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
                </div>
                <hr />

                <div className="mt-5">
                  <div className="card">
                    <div className="space-y-4 text-sm text-[#4F4F4F]">
                      {/* Header */}
                      <div className="bg-[#88C8CE14] border border-[#88C8CE61] rounded-lg p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-[#6B7280] font-medium">Date:</p>
                          <p>July 23, 2025 (05:17)</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">
                            Specialty:
                          </p>
                          <p>Diagnosis</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">
                            Location:
                          </p>
                          <p>New York</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">
                            Reason for consultation:
                          </p>
                          <p>test</p>
                        </div>
                      </div>

                      {/* Vitals */}
                      <div className="card">
                        <p className="text-[#144A6C] font-semibold mb-2">
                          Somatometry and vital signs:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          <p>Height: 33cm</p>
                          <p>Temperature: 2°C</p>
                          <p>Blood pressure: 33/33mmHg</p>
                          <p>Pulse: 33bpm</p>
                          <p>Respiratory rate: 2rpm</p>
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="card">
                        <p className="text-[#144A6C] font-semibold mb-2">
                          Note:
                        </p>
                        <p>
                          The patient came to the appointment for a restorative
                          procedure. <br />
                          Under local anesthesia, carious tissue was removed
                          from teeth 2.4, 2.5, 2.6, and 2.7. <br />
                          The cavities were prepared using etching acid and
                          adhesive, and filled with BL flowable resin.
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="bg-[#144A6C0A] border border-[#144A6C3D] rounded-lg p-4 flex flex-col md:flex-row justify-between text-sm">
                        <p>Next Appointment: July 23, 2025 (05:17)</p>
                        <p className="md:text-right">
                          Attended by: John Oliver
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="card">
                    <div className="space-y-4 text-sm text-[#4F4F4F]">
                      {/* Header */}
                      <div className="bg-[#88C8CE14] border border-[#88C8CE61] rounded-lg p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-[#6B7280] font-medium">Date:</p>
                          <p>July 23, 2025 (05:17)</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">
                            Specialty:
                          </p>
                          <p>Diagnosis</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">
                            Location:
                          </p>
                          <p>New York</p>
                        </div>
                        <div>
                          <p className="text-[#6B7280] font-medium">
                            Reason for consultation:
                          </p>
                          <p>test</p>
                        </div>
                      </div>

                      {/* Vitals */}
                      <div className="card">
                        <p className="text-[#144A6C] font-semibold mb-2">
                          Somatometry and vital signs:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          <p>Height: 33cm</p>
                          <p>Temperature: 2°C</p>
                          <p>Blood pressure: 33/33mmHg</p>
                          <p>Pulse: 33bpm</p>
                          <p>Respiratory rate: 2rpm</p>
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="card">
                        <p className="text-[#144A6C] font-semibold mb-2">
                          Note:
                        </p>
                        <p>
                          The patient came to the appointment for a restorative
                          procedure. <br />
                          Under local anesthesia, carious tissue was removed
                          from teeth 2.4, 2.5, 2.6, and 2.7. <br />
                          The cavities were prepared using etching acid and
                          adhesive, and filled with BL flowable resin.
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="bg-[#144A6C0A] border border-[#144A6C3D] rounded-lg p-4 flex flex-col md:flex-row justify-between text-sm">
                        <p>Next Appointment: July 23, 2025 (05:17)</p>
                        <p className="md:text-right">
                          Attended by: John Oliver
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedTab === 6 && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="mt-5">
                  <div className="w-full overflow-x-auto mt-3">
                    <table className="min-w-full">
                      <thead className="bg-gray-50 sticky top-0">
                        <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            ID No
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Doctor
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
                            Discount
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
                        {filteredQuotes.length === 0 ? (
                          <tr>
                            <td
                              colSpan={5}
                              className="text-center py-8 text-gray-400 text-sm"
                            >
                              <div className="flex flex-col items-center justify-center">
                                <svg
                                  className="w-10 h-10 text-gray-300 mb-2"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path d="..." fill="currentColor" />
                                </svg>
                                <p>No quotes found</p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          filteredQuotes.map((quote) => (
                            <tr key={quote.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{quote.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{quote.doctor}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{quote.treatment}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{quote.quoteDate}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{quote.visitDate}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{quote.discount}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{quote.treatmentFee}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{quote.totalAmount}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{quote.expiry}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                <div className="flex items-center space-x-2">
                                  <button className="text-blue-600 hover:text-blue-800"><svg
                                    width={18}
                                    height={19}
                                    viewBox="0 0 18 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.21424 14.5816L1.92575 14.8188L1.21424 14.5816ZM2.06269 12.0363L1.35118 11.7991H1.35118L2.06269 12.0363ZM2.93817 10.6197L3.46849 11.1501L3.4685 11.1501L2.93817 10.6197ZM11.3932 2.16469L10.8629 1.63436V1.63436L11.3932 2.16469ZM15.9232 6.69468L16.4535 7.22501L15.9232 6.69468ZM7.46815 15.1497L6.93782 14.6194L6.93782 14.6194L7.46815 15.1497ZM6.05161 16.0252L6.28878 16.7367H6.28878L6.05161 16.0252ZM3.50626 16.8736L3.74343 17.5852H3.74343L3.50626 16.8736ZM7.00378 15.5832L6.5521 14.9844L6.5521 14.9844L7.00378 15.5832ZM6.64697 15.8037L6.31344 15.1319L6.64697 15.8037ZM17.0145 3.42399L16.3425 3.75701L16.3425 3.75701L17.0145 3.42399ZM17.0145 5.43538L16.3425 5.10237H16.3425L17.0145 5.43538ZM12.6525 1.07341L12.9855 1.74542L12.9855 1.74542L12.6525 1.07341ZM14.6639 1.07341L14.3309 1.74542V1.74542L14.6639 1.07341ZM2.2842 11.4409L2.95596 11.7745L2.95596 11.7745L2.2842 11.4409ZM2.50473 11.0841L1.90599 10.6324L1.90599 10.6324L2.50473 11.0841ZM0.792166 16.6094L0.0857373 16.8613L0.792166 16.6094ZM1.47849 17.2957L1.22658 18.0022L1.22658 18.0022L1.47849 17.2957ZM10.791 2.7669C10.4981 2.47401 10.0233 2.47401 9.73037 2.7669C9.43748 3.05979 9.43748 3.53467 9.73037 3.82756L10.791 2.7669ZM14.2604 8.35755C14.5533 8.65044 15.0281 8.65044 15.321 8.35755C15.6139 8.06465 15.6139 7.58978 15.321 7.29689L14.2604 8.35755ZM1.21424 14.5816L1.92575 14.8188L2.77421 12.2734L2.06269 12.0363L1.35118 11.7991L0.50273 14.3445L1.21424 14.5816ZM2.93817 10.6197L3.4685 11.1501L11.9235 2.69502L11.3932 2.16469L10.8629 1.63436L2.40784 10.0894L2.93817 10.6197ZM15.9232 6.69468L15.3929 6.16435L6.93782 14.6194L7.46815 15.1497L7.99848 15.6801L16.4535 7.22501L15.9232 6.69468ZM6.05161 16.0252L5.81444 15.3137L3.26908 16.1621L3.50626 16.8736L3.74343 17.5852L6.28878 16.7367L6.05161 16.0252ZM7.46815 15.1497L6.93782 14.6194C6.69806 14.8592 6.62681 14.9281 6.5521 14.9844L7.00378 15.5832L7.45546 16.1819C7.63266 16.0482 7.78703 15.8915 7.99849 15.6801L7.46815 15.1497ZM6.05161 16.0252L6.28878 16.7367C6.57248 16.6421 6.78168 16.5742 6.98049 16.4754L6.64697 15.8037L6.31344 15.1319C6.22961 15.1735 6.13612 15.2065 5.81444 15.3137L6.05161 16.0252ZM7.00378 15.5832L6.5521 14.9844C6.47728 15.0409 6.39738 15.0902 6.31344 15.1319L6.64697 15.8037L6.98049 16.4754C7.14755 16.3925 7.30656 16.2942 7.45546 16.1819L7.00378 15.5832ZM15.9232 2.16469L15.3929 2.69502C16.0532 3.35534 16.2459 3.56203 16.3425 3.75701L17.0145 3.42399L17.6865 3.09098C17.453 2.61984 17.0282 2.20904 16.4535 1.63436L15.9232 2.16469ZM15.9232 6.69468L16.4535 7.22501C17.0282 6.65034 17.453 6.23954 17.6865 5.76839L17.0145 5.43538L16.3425 5.10237C16.2459 5.29734 16.0532 5.50404 15.3929 6.16435L15.9232 6.69468ZM17.0145 3.42399L16.3425 3.75701C16.5525 4.18087 16.5525 4.67851 16.3425 5.10237L17.0145 5.43538L17.6865 5.76839C18.1045 4.92487 18.1045 3.93451 17.6865 3.09098L17.0145 3.42399ZM11.3932 2.16469L11.9235 2.69502C12.5838 2.03471 12.7905 1.84204 12.9855 1.74542L12.6525 1.07341L12.3195 0.401393C11.8484 0.634865 11.4375 1.05969 10.8629 1.63436L11.3932 2.16469ZM15.9232 2.16469L16.4535 1.63436C15.8789 1.05969 15.4681 0.634865 14.9969 0.401393L14.6639 1.07341L14.3309 1.74542C14.5259 1.84204 14.7326 2.03471 15.3929 2.69502L15.9232 2.16469ZM12.6525 1.07341L12.9855 1.74542C13.4094 1.53538 13.907 1.53538 14.3309 1.74542L14.6639 1.07341L14.9969 0.401393C14.1534 -0.0166101 13.163 -0.0166101 12.3195 0.401393L12.6525 1.07341ZM2.06269 12.0363L2.77421 12.2734C2.88143 11.9518 2.91434 11.8583 2.95596 11.7745L2.2842 11.4409L1.61245 11.1074C1.51373 11.3062 1.44575 11.5154 1.35118 11.7991L2.06269 12.0363ZM2.93817 10.6197L2.40784 10.0894C2.19638 10.3009 2.03967 10.4552 1.90599 10.6324L2.50473 11.0841L3.10346 11.5358C3.15982 11.4611 3.22873 11.3898 3.46849 11.1501L2.93817 10.6197ZM2.2842 11.4409L2.95596 11.7745C2.99764 11.6905 3.04702 11.6106 3.10346 11.5358L2.50473 11.0841L1.90599 10.6324C1.79366 10.7813 1.69539 10.9403 1.61245 11.1074L2.2842 11.4409ZM1.21424 14.5816L0.50273 14.3445C0.323031 14.8836 0.171079 15.337 0.08557 15.7009C0.00267547 16.0537 -0.0559448 16.464 0.0857373 16.8613L0.792166 16.6094L1.49859 16.3575C1.50907 16.3869 1.47707 16.3366 1.5458 16.0441C1.61191 15.7627 1.7366 15.3863 1.92575 14.8188L1.21424 14.5816ZM3.50626 16.8736L3.26909 16.1621C2.70162 16.3513 2.32519 16.476 2.04382 16.5421C1.75133 16.6108 1.70101 16.5788 1.7304 16.5893L1.47849 17.2957L1.22658 18.0022C1.6239 18.1438 2.03418 18.0852 2.38695 18.0023C2.75085 17.9168 3.20433 17.7649 3.74343 17.5852L3.50626 16.8736ZM0.792166 16.6094L0.0857373 16.8613C0.275527 17.3935 0.694353 17.8124 1.22658 18.0022L1.47849 17.2957L1.7304 16.5893C1.62226 16.5507 1.53716 16.4656 1.49859 16.3575L0.792166 16.6094ZM10.2607 3.29723L9.73037 3.82756L14.2604 8.35755L14.7907 7.82722L15.321 7.29689L10.791 2.7669L10.2607 3.29723Z"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
