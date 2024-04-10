import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/images/infinity-house-logo-2.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import SideMenu from "./Drawer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBar() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ position: "sticky", top: 0 }}>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <motion.img
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
              src={logo}
              alt="logo"
              height={matches ? "30" : "50"}
            />
          </Link>
          <SideMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
