import { React } from "react";
import NavBar from "./Navbar";
import { Footer } from "./Footer";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Ponuda = () => {
  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
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
            mb: 15,
            px: 3,
            color: "secondary.main",
          }}>
          U našoj ponudi imamo udobne krevete za dve osobe sa suncobranima ili
          baldahinima po ceni od 6000 dinara vikendom, dok radnim danima cena
          iznosi 5000 dinara. Idealni su za savršen odmor i relaksaciju pod
          vedrim nebom.
          <br />
          <br />
          Takođe, možete uživati u opuštenom ambijentu našeg bazena uz
          lazybag-ove po ceni od 3000 dinara po osobi vikendom i 2500 dinara
          radnim danima.
          <br />
          <br />
          Nudimo i mesto u našem kafiću po ceni od 3000 dinara vikendom, odnosno
          2500 dinara radnim danima, gde možete uživati u ukusnim napicima i
          opuštenoj atmosferi.
          <br />
          <br />
          Pored toga, imamo bogatu ponudu hrane na bazenu, tako da možete
          uživati u obrocima dok se opuštate pored vode. Dođite i uživajte u
          potpunom iskustvu relaksacije i gastronomske raznovrsnosti.
        </Typography>
      </motion.div>
      <Footer />
    </div>
  );
};
