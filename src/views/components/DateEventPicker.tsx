/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
// import dynamic from "next/dynamic";
import { Box } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Calendar } from "@/components/ui/calendar";

const DateEventPicker = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Box>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="date-picker-event"
        />
      </Box>
    </>
  );
};

export default DateEventPicker;
