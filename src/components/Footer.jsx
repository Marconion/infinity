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
        spacing={2}
        sx={{
          position: "fixed",
          py: 2,
          bottom: 0,
          backgroundColor: "primary.main",
          color: "white",
          width: "100%",
        }}>
        <Stack direction="row" justifyContent="center">
          <SocialLinks />
        </Stack>
        <Typography variant="body2" align="center">
          Infinity Pool House © {date} All rights reserved
        </Typography>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: -250,
            right: -280,
            transform: "rotate(0deg) scale(0.5)",
            zIndex: -1,
          }}>
          <img src={vector2} alt="vector2" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: -200,
            left: -185,
            transform: "rotate(240deg) scale(0.5)",
            zIndex: -2,
          }}>
          <img src={vector3} alt="vector2" />
        </Box> */}
      </Stack>
    </>
  );
};
