// Calendar.jsx
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DateContext } from "../contexts/DateContext";

export default function Calendar() {
  const today = new Date().toLocaleDateString("en-US");

  const [selectedDate, setSelectedDate] = useState(dayjs(today));

  const { setDate } = useContext(DateContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setDate(selectedDate.$d);
    // setDate(selectedDate.$d.toLocaleDateString("sr-Latn-RS"));
  }, [selectedDate, setDate]);

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
