import { React, useState, useContext, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import { DateContext } from "../contexts/DateContext";
import { PriceContext } from "../contexts/PriceContext";
import "./Placanje.css";

export const Placanje = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const { date } = useContext(DateContext);

  console.log(date);

  const { totalPrice } = useContext(PriceContext);

  // console.log(name, phone, note);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        {/* TITLE */}
        <Stack
          direction="column"
          spacing={2}
          alignItems={"center"}
          py={2}
          mb={0}>
          <Typography variant="h5" sx={{ color: "secondary.main" }}>
            Plaćanje
          </Typography>

          <Stack
            direction="column"
            spacing={2}
            alignItems={"center"}
            className="podaci">
            <Typography
              variant="h6"
              sx={{ color: "secondary.main", fontSize: "18px" }}>
              Datum: {date}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "secondary.main", fontSize: "18px" }}>
              Ukupna cena: {totalPrice} RSD
            </Typography>
          </Stack>

          {/* FORM */}
          <Stack
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off">
            <Stack
              sx={{ display: "flex", margin: "auto", flexDirection: "column" }}>
              <TextField
                required
                id="filled-required"
                label="Ime i prezime"
                variant="filled"
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                required
                id="filled-number"
                label="Broj telefona"
                type="tel"
                //   InputLabelProps={{
                //     shrink: true,
                //   }}
                variant="filled"
                onChange={(e) => setPhone(e.target.value)}
              />

              <TextField
                id="filled-helperText"
                label="Napomena"
                defaultValue=""
                // helperText="Napomena"
                variant="filled"
                onChange={(e) => setNote(e.target.value)}
              />
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </div>
  );
};
