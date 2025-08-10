"use client";
import { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";

interface AppointmentPickerProps {
  slotsByDate: {
    [date: string]: string[];
  };
}

export default function AppointmentPicker({ slotsByDate }: AppointmentPickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const renderHeader = () => (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        &lt;
      </button>
      <div className="text-lg font-semibold">{format(currentMonth, "MMMM yyyy")}</div>
      <button
        onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        &gt;
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = new Date();
    const startDate = startOfWeek(date, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-sm font-medium text-gray-500">
          {format(addDays(startDate, i), "EEE")}
        </div>
      );
    }
    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const dateStr = format(cloneDay, "yyyy-MM-dd");
        const isSelected = selectedDate && isSameDay(cloneDay, selectedDate);
        const hasSlots = slotsByDate[dateStr]?.length > 0;
        days.push(
          <button
            key={day.toString()}
            onClick={() => setSelectedDate(cloneDay)}
            className={`w-10 h-10 mx-auto flex items-center justify-center rounded-full
              ${!isSameMonth(cloneDay, monthStart) ? "text-gray-400" : ""}
              ${isSelected ? "bg-teal-800 text-white" : hasSlots ? "hover:bg-gray-200" : ""}
            `}
          >
            {format(cloneDay, "d")}
          </button>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 mb-1">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const renderTimeSlots = () => {
    if (!selectedDate) return null;
    const dateStr = format(selectedDate, "yyyy-MM-dd");
    const slots = slotsByDate[dateStr] || [];

    if (slots.length === 0) {
      return (
        <div className="mt-4 text-sm text-gray-500">
          No slots available for this date.
        </div>
      );
    }

    return (
      <div className="mt-4">
        <h3 className="text-sm font-medium mb-2">
          {format(selectedDate, "EEEE, do MMMM")}
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {slots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`border rounded px-2 py-1 text-sm bg-[#fff]
                ${selectedTime === time ? "bg-[#fff] text-[#000]" : "hover:bg-[#CEE5E4]"}
              `}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-6">
      <div className="p-4" style={{ width: '100%' }}>
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
      <div className="p-4 border rounded bg-[#F9FAFB]" style={{ width: '100%' }}>
        {renderTimeSlots()}
      </div>
    </div>
  );
}
