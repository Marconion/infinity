import { React, useState, useContext, useEffect } from "react";
import { Stack, Typography, Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import { DateContext } from "../contexts/DateContext";
import { PriceContext } from "../contexts/PriceContext";
import "./Placanje.css";
import { SelectedItemsContext } from "../contexts/SelectedItemsContext";
import { TotalPersonsContext } from "../contexts/TotalPersonsContext";
import { FormInputContext } from "../contexts/FormInputContext";

export const Placanje = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const { setAreFieldsFilled } = useContext(FormInputContext);

  const { date } = useContext(DateContext);
  const { selected } = useContext(SelectedItemsContext);
  const { totalPersons } = useContext(TotalPersonsContext);

  // console.log(date.toLocaleDateString("sr-Latn-RS"));
  // console.log(selected);

  const { price } = useContext(PriceContext);

  // console.log(name, phone, note);

  useEffect(() => {
    if (name.trim() && phone.trim()) {
      setAreFieldsFilled(true);
    } else {
      setAreFieldsFilled(false);
    }
  }, [name, phone]);

  // console.log(areFieldsFilled);

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
          mb={10}>
          <Typography variant="h5" sx={{ color: "secondary.main" }}>
            Plaćanje
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            alignItems={"center"}
            textAlign={"center"}
            className="podaci">
            <Stack direction="column" spacing={2}>
              <Typography variant="body2" sx={{ color: "secondary.main" }}>
                Datum:
                <Typography variant="body2" sx={{ color: "secondary.main" }}>
                  {date.toLocaleDateString("sr-Latn-RS")}
                </Typography>
              </Typography>
              <Divider
                variant="middle"
                sx={{ color: "black", width: "100%" }}
              />
              <Typography variant="body2" sx={{ color: "secondary.main" }}>
                Ukupna cena:
                <Typography variant="body2" sx={{ color: "secondary.main" }}>
                  {price} RSD
                </Typography>
              </Typography>
            </Stack>
            <Divider
              variant="middle"
              orientation="vertical"
              sx={{ color: "black", height: "120px" }}
            />
            <Stack direction="column" spacing={2}>
              <Typography
                variant="body2"
                sx={{
                  color: "secondary.main",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}>
                Odabrali ste
              </Typography>
              <Stack direction={"column"} alignItems={"center"}>
                {selected.map((item) => {
                  return (
                    <>
                      <Typography
                        variant="body2"
                        sx={{ color: "secondary.main", fontStyle: "italic" }}>
                        {item}
                      </Typography>
                    </>
                  );
                })}
                <Typography
                  variant="body2"
                  sx={{ color: "secondary.main", fontStyle: "italic" }}>
                  ({totalPersons}{" "}
                  {totalPersons === 2 ||
                  totalPersons === 3 ||
                  totalPersons === 4
                    ? " osobe"
                    : " osoba"}
                  )
                </Typography>
              </Stack>
            </Stack>
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
