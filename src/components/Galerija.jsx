import React from "react";
import NavBar from "./Navbar";
import { Footer } from "./Footer";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GalerijaTabs from "./GalerijaTabs";

export const Galerija = () => {
  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <Stack direction="column" spacing={2} alignItems={"center"} py={5}>
          <Typography variant="h3" sx={{ color: "secondary.main" }}>
            Galerija
          </Typography>
          <GalerijaTabs />
        </Stack>
      </motion.div>
      <Footer />
    </div>
  );
};
