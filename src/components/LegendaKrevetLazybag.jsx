import React from "react";
import { Stack, Typography } from "@mui/material";

export const LegendaKrevetLazybag = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignitems={"center"}
      mb={1}>
      <Stack direction={"row"}>
        <Typography
          variant="h6"
          sx={{ color: "secondary.main" }}
          // my={1}
          fontSize={"12px"}
          display={"flex"}
          alignItems={"center"}
          mx={1}>
          Krevet
        </Typography>
        <div
          className="krevet"
          style={{
            width: "15px",
            height: "15px",
            border: "1px solid black",
          }}></div>
      </Stack>
      <Stack direction={"row"}>
        <Typography
          variant="h6"
          sx={{ color: "secondary.main" }}
          // my={1}
          fontSize={"12px"}
          display={"flex"}
          alignItems={"center"}
          mx={1}>
          Lazy bag
        </Typography>
        <div
          className="lazyBag"
          style={{
            width: "15px",
            height: "15px",
            border: "1px solid black",
          }}></div>
      </Stack>
    </Stack>
  );
};
