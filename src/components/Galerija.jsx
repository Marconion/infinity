import React from "react";
import NavBar from "./Navbar";
import { Footer } from "./Footer";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GalerijaTabs from "./GalerijaTabs";
import vector1 from "../assets/design_images/Vector 1.png";

export const Galerija = () => {
  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <img src={vector1} alt="infinity pool house" className="vector-top" />
        <Stack direction="column" spacing={2} alignItems={"center"} py={5}>
          <Typography variant="h3" sx={{ color: "secondary.main" }}>
            Galerija
          </Typography>
          <GalerijaTabs />
        </Stack>
        <img
          src={vector1}
          alt="infinity pool house"
          className="vector-bottom"
        />
      </motion.div>
      <Footer />
    </div>
  );
};
