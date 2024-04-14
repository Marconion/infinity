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
      <Footer />
    </div>
  );
};
