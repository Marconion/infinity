import React from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import { SocialLinks } from "./SocialLinks";
import vector2 from "../assets/design_images/Vector 2.png";
import vector3 from "../assets/design_images/Vector 3.png";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <Stack
        spacing={0.5}
        sx={{
          position: "fixed",
          py: 1,
          bottom: 0,
          backgroundColor: "primary.main",
          color: "white",
          width: "100%",
          zIndex: 1000,
        }}>
        <Stack direction="row" justifyContent="center">
          <SocialLinks />
        </Stack>
        <Typography variant="body2" align="center" fontSize={"11px"}>
          Infinity Pool House © {date} All rights reserved
        </Typography>
      </Stack>
    </>
  );
};
