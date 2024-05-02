import React from "react";
import NavBar from "./Navbar";
import { Typography, Stack } from "@mui/material";
import { Footer } from "./Footer";
import "../components/kontakt.css";
import vector1 from "../assets/design_images/Vector 1.png";
import { motion } from "framer-motion";

export const Kontakt = () => {
  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <img src={vector1} alt="infinity pool house" className="vector-top" />
        <div>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              padding: "20px",
              color: "secondary.main",
              mt: 1,
            }}>
            Lokacija i kontakt
          </Typography>
          <Stack spacing={2} pt={2} pb={3} sx={{ color: "secondary.main" }}>
            <Typography variant="body2" style={{ textAlign: "center" }}>
              Adresa: Izvorska 7a, Barajevo
            </Typography>
            <Typography variant="body2" style={{ textAlign: "center" }}>
              Telefon: 066 / 5333335
            </Typography>
            <Typography variant="body2" style={{ textAlign: "center" }}>
              Email: infinity@infinity.com
            </Typography>
          </Stack>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1419.4513692261307!2d20.42697307577849!3d44.63990480257722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a0d912dd8f3eb%3A0x47b0378123584899!2sInfinity%20Pool%20House!5e0!3m2!1ssr!2srs!4v1712773821244!5m2!1ssr!2srs"
            width={"80%"}
            height={"350px"}
            style={{
              border: "2px solid #5DEBD7",
              display: "flex",
              alignItems: "center",
              margin: "auto",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
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
