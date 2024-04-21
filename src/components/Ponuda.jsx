import { React } from "react";
import NavBar from "./Navbar";
import { Footer } from "./Footer";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../assets/images/infinity-house-logo-1.png";
import vector1 from "../assets/design_images/Vector 1.png";

export const Ponuda = () => {
  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <img src={vector1} alt="infinity pool house" className="vector-top" />
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mt: 5, color: "secondary.main" }}>
          Naša ponuda
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 3,
            mb: 2,
            px: 3,
            color: "secondary.main",
          }}>
          U našoj ponudi imamo udobne krevete za dve osobe sa suncobranima ili
          baldahinima po ceni od <span className="span">6000 dinara</span>{" "}
          vikendom, dok radnim danima cena iznosi{" "}
          <span className="span">5000 dinara</span>. Idealni su za savršen odmor
          i relaksaciju pod vedrim nebom.
          <br />
          <br />
          Takođe, možete uživati u opuštenom ambijentu našeg bazena uz
          lazybag-ove po ceni od <span className="span">3000 dinara</span> po
          osobi vikendom i <span className="span">2500 dinara</span> radnim
          danima.
          <br />
          <br />
          Nudimo i mesto u našem kafiću po ceni od{" "}
          <span className="span">3000 dinara</span> vikendom, odnosno{" "}
          <span className="span">2500 dinara</span> radnim danima, gde možete
          uživati u ukusnim napicima i opuštenoj atmosferi.
          <br />
          <br />
          Pored toga, imamo bogatu ponudu hrane na bazenu, tako da možete
          uživati u obrocima dok se opuštate pored vode. Dođite i uživajte u
          potpunom iskustvu relaksacije i gastronomske raznovrsnosti.
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={1}>
          <img
            src={logo}
            alt="infinity-house-logo"
            style={{ width: "40%", marginBottom: "120px" }}
          />
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
