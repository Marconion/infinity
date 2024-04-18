import "../App.css";
import React, { useContext } from "react";
import { Stack, Typography, Button } from "@mui/material";
import naslovnaSlika from "../assets/images/Infinity-1.jpg";
import misli from "../assets/misli";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Opis } from "../components/Opis";
import { Footer } from "./Footer";
import { PriceContext } from "../contexts/PriceContext";
import { SelectedItemsContext } from "../contexts/SelectedItemsContext";

export const Home = () => {
  const matches = useMediaQuery("(max-width:768px)");

  const randomIndex = Math.floor(Math.random() * misli.length);

  const { setPrice } = useContext(PriceContext);
  const { setSelected } = useContext(SelectedItemsContext);

  function handleClick() {
    setPrice(0);
    setSelected([]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <Stack>
        <Stack className="image-container">
          <img
            className="naslovna-slika"
            src={naslovnaSlika}
            alt="infinity pool house"
          />
          <Typography
            variant="h5"
            className="misli"
            sx={{
              fontSize: matches ? "14px" : "25px",
              fontStyle: "italic",
            }}>
            "{misli[randomIndex].text}
            " <br />
            <br />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}>
              <Link to="/rezervacije">
                <Button variant="outlined" onClick={handleClick}>
                  Rezerviši
                </Button>
              </Link>
            </motion.div>
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          alignItems={"center"}
          pb={15}
          px={5}>
          <Opis />
        </Stack>
      </Stack>
      <Footer />
    </motion.div>
  );
};
