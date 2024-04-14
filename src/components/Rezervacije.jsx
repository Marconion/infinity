import { React, useState } from "react";
import { Stack, Typography } from "@mui/material";
import ActionBarComponentProps from "./Calendar";
import { motion } from "framer-motion";

export const Rezervacije = () => {
  return (
    <div>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <Stack
          direction="column"
          spacing={2}
          alignItems={"center"}
          py={2}
          mb={8}>
          <Typography variant="h5" sx={{ color: "secondary.main" }}>
            Izaberite datum
          </Typography>
          <ActionBarComponentProps />
        </Stack>
      </motion.div>
    </div>
  );
};
