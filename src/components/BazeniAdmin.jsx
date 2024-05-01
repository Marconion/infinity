import React from "react";
import { motion } from "framer-motion";
import BazeniTabs from "./BazeniTabs";
import BazeniTabsAdmin from "./BazeniTabsAdmin";

export const BazeniAdmin = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <BazeniTabsAdmin />
    </motion.div>
  );
};
