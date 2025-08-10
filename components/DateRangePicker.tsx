'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Calendar } from '@/components/ui/calendar'; // shadcn calendar
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { DateRange } from 'react-day-picker';

export function DateRangePicker() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <div className="flex items-center space-x-4">
      {/* Dropdown with calendar icon */}
      <div className="relative w-[170px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <CalendarIcon className="w-4 h-4 text-[#606061]/70" />
        </div>
        <Select>
          <SelectTrigger className="w-[170px] border border-[#F0F0F0] pl-10 pr-10 rounded-lg text-sm text-[#333] font-normal font-poppins">
            <SelectValue placeholder="Monthly" />
          </SelectTrigger>
          <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins">
            <SelectItem
              value="monthly"
              className="text-sm font-normal py-2 px-3 pl-8 relative"
            >
              Monthly
            </SelectItem>
            <SelectItem
              value="weekly"
              className="text-sm font-normal py-2 px-3 pl-8 relative"
            >
              Weekly
            </SelectItem>
            <SelectItem
              value="yearly"
              className="text-sm font-normal py-2 px-3 pl-8 relative"
            >
              Yearly
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date Range Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            id="date"
            className={cn(
              "w-[270px] justify-start text-left font-poppins text-sm border border-[#F0F0F0] rounded-lg px-4 py-2",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 inline-block text-[#606061]/70" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'dd MMM yyyy')} – {format(date.to, 'dd MMM yyyy')}
                </>
              ) : (
                format(date.from, 'dd MMM yyyy')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
