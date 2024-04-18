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

  const { setDate } = useContext(DateContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  setDate(selectedDate.$d.toLocaleDateString("sr-Latn-RS"));
  // console.log(selectedDate.$d.toLocaleDateString("sr-Latn-RS"));

  return (
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
  );
}
