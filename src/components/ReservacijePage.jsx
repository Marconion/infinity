import { React, useState } from "react";
import NavBar from "./Navbar";
import { Footer } from "./Footer";
import { Stack, Typography, Button } from "@mui/material";
import ActionBarComponentProps from "./Calendar";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";
import HorizontalLinearStepper from "./Stepper";

export const RezervacijePage = () => {
  return (
    <div>
      <NavBar />
      <HorizontalLinearStepper />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <Stack
          direction="column"
          spacing={2}
          alignItems={"center"}
          py={5}
          mb={5}>
          {/* <Typography variant="h3" sx={{ color: "secondary.main" }}>
            Rezervacije
          </Typography> */}
          <Stack
            direction="column"
            spacing={2}
            alignItems={"center"}
            pb={5}></Stack>
        </Stack>
      </motion.div>
      <Footer />
    </div>
  );
};
