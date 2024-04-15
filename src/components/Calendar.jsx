// Calendar.jsx
import React, { useState } from "react";
import { useContext } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DateContext } from "../contexts/DateContext";

export default function ActionBarComponentProps() {
  const today = new Date().toLocaleDateString("en-US");

  const [selectedDate, setSelectedDate] = useState(dayjs(today));

  const [calendarValue, setCalendarValue] = useState(dayjs(today));
  useContext(DateContext).setCalendarValue = setCalendarValue;

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCalendarValue(date);
  };
  console.log(selectedDate.$d.toLocaleDateString("sr-Latn-RS"));

  return (
    <DateContext.Provider value={{ calendarValue, setCalendarValue }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          defaultValue={dayjs(today)}
          onChange={handleDateChange}
          slotProps={{
            actionBar: {
              actions: ["today"],
            },
          }}
        />
      </LocalizationProvider>
    </DateContext.Provider>
  );
}
