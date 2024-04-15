import React from "react";
import NavBar from "./Navbar";
import { Typography, Stack } from "@mui/material";
import { Footer } from "./Footer";
import "../components/kontakt.css";
import water2 from "../assets/images/water (2).jpg";
import { motion } from "framer-motion";

export const Kontakt = () => {
  return (
    <div>
      <NavBar />
      {/* <img src={water2} alt="water2" className="grayscale" /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="grayscale">
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              padding: "20px",
              color: "white",
              textShadow: "1px 1px 8px #000000",
            }}>
            Lokacija i kontakt
          </Typography>
          <Stack
            spacing={2}
            py={4}
            sx={{ color: "white", textShadow: "1px 1px 8px #000000" }}>
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontSize: "15px" }}>
              Adresa: Izvorska 7a, Barajevo
            </Typography>
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontSize: "15px" }}>
              Telefon: 066 / 5333335
            </Typography>
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontSize: "15px" }}>
              Email: infinity@infinity.com
            </Typography>
          </Stack>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1419.4513692261307!2d20.42697307577849!3d44.63990480257722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a0d912dd8f3eb%3A0x47b0378123584899!2sInfinity%20Pool%20House!5e0!3m2!1ssr!2srs!4v1712773821244!5m2!1ssr!2srs"
            width={"80%"}
            height={"350px"}
            style={{
              border: 0,
              display: "flex",
              alignItems: "center",
              margin: "auto",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};
