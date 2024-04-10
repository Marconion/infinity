import React from "react";
import { Stack, Typography, Button } from "@mui/material";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Stack
      spacing={2}
      sx={{
        position: "fixed",
        py: 2,
        bottom: 0,
        backgroundColor: "primary.main",
        color: "white",
        width: "100%",
        textShadow: "1px 3px 5px black",
      }}>
      <Typography variant="body2" align="center">
        Infinity Pool House © {date} All rights reserved
      </Typography>
    </Stack>
  );
};
