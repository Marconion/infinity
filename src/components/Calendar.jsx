import * as React from "react";
import { useContext } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DateContext } from "../contexts/DateContext";

export default function ActionBarComponentProps() {
  const today = new Date().toLocaleDateString("en-US");

  const [selectedDate, setSelectedDate] = React.useState(dayjs(today));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  console.log(selectedDate.$d.toLocaleDateString("sr-Latn-RS"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateContext.Provider value={[selectedDate, setSelectedDate]}>
        <StaticDatePicker
          defaultValue={dayjs(today)}
          onChange={handleDateChange}
          slotProps={{
            actionBar: {
              actions: ["today"],
            },
          }}
        />
      </DateContext.Provider>
    </LocalizationProvider>
  );
}
