import React from "react";
// import dynamic from "next/dynamic";

import { Box } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { Calendar } from "@/components/ui/calendar";

const DateEventPicker = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  // const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Custom formatter to display only the first letter of day names
  const customWeekdayFormatter = (day: Date) => {
    return day.toLocaleDateString("en-US", { weekday: "short" }).charAt(0);
  };

  return (
    <>
      <Box>
        <Calendar
          className="!bg-transparent date-picker-event"
          mode="single"
          selected={date}
          onSelect={setDate}
     
          formatters={{ formatWeekdayName: customWeekdayFormatter }}
          // showOutsideDays={false}
          
        />
      </Box>
    </>
  );
};

export default DateEventPicker;
