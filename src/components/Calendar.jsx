import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box, Stack } from "@mui/system";

export default function ActionBarComponentProps() {
  const today = new Date().toLocaleDateString("en-US");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        defaultValue={dayjs(today)}
        slotProps={{
          actionBar: {
            actions: ["today"],
          },
        }}
      />
    </LocalizationProvider>
  );
}
