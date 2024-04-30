import { React, useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, Divider, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { motion } from "framer-motion";
import { DateContext } from "../contexts/DateContext";
import { PriceContext } from "../contexts/PriceContext";
import "./Placanje.css";
import { SelectedItemsContext } from "../contexts/SelectedItemsContext";
import { TotalPersonsContext } from "../contexts/TotalPersonsContext";
import { FormInputContext } from "../contexts/FormInputContext";
import { PhoneErrorContext } from "../contexts/PhoneErrorContext";
import emailjs from "@emailjs/browser";

export const Placanje = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const { phoneError, setPhoneError } = useContext(PhoneErrorContext);
  const { areFieldsFilled, setAreFieldsFilled } = useContext(FormInputContext);
  const { date } = useContext(DateContext);
  const { selected } = useContext(SelectedItemsContext);
  const { totalPersons } = useContext(TotalPersonsContext);

  const { price } = useContext(PriceContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (name.trim() && phone.trim()) {
      setAreFieldsFilled(true);
    } else {
      setAreFieldsFilled(false);
    }
  }, [name, phone]);

  const handlePhoneChange = (e) => {
    const phone = e.target.value;

    setPhone(phone);

    // Validate phone number
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (phone.trim() === "") {
      setPhoneError(false);
    } else if (!phoneRegex.test(phone)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();

    // Create an object with the data
    const data = {
      name,
      date: date.toLocaleDateString("sr-Latn-RS"),
      phone,
      selected,
      note,
    };

    // Make a POST request to your server
    fetch("http://localhost:8050/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        sendEmail();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // SEND EMAIL
  const form = useRef();

  const sendEmail = (e) => {
    // emailjs
    //   .sendForm("service_31s5ofe", "template_merzmk9", form.current, {
    //     publicKey: "rzg-IM__5DhzYYJ9U",
    //   })
    //   .then(
    //     () => {
    console.log("SUCCESS!");
    navigate("/potvrda");
    // },
    // (error) => {
    // console.log("FAILED...", error.text);
    // }
    // );
  };

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
            Potvrda
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
              <Stack
                direction="column"
                className="napomena"
                mb={2}
                alignItems={"center"}>
                <Typography
                  variant="h6"
                  sx={{ color: "secondary.main", fontSize: "15px" }}>
                  Napomena
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "secondary.main", fontSize: "12px" }}>
                  Rezervacije se čuvaju do 11:30h
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "secondary.main", fontSize: "12px" }}>
                  * Kreveti na vodi nemaju suncobrane
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* FORM */}
          <Stack
            onSubmit={handleSubmit}
            component="form"
            ref={form}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off">
            <Stack
              sx={{
                display: "flex",
                margin: "auto",
                flexDirection: "column",
              }}>
              <TextField
                required
                id="filled-required"
                label="Ime i prezime"
                name="username"
                variant="filled"
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                required
                id="filled-number"
                label="Broj telefona"
                type="tel"
                name="phone"
                //   InputLabelProps={{
                //     shrink: true,
                //   }}
                variant="filled"
                error={phoneError}
                helperText={phoneError ? "Unesite ispravan broj telefona" : ""}
                onChange={handlePhoneChange}
              />

              <TextField
                id="filled-helperText"
                label="Napomena"
                defaultValue=""
                name="note"
                multiline="true"
                spellCheck="false"
                helperText="* Unesite dodatne informacije poput vremena dolaska, posebnih zahteva itd."
                variant="filled"
                onChange={(e) => setNote(e.target.value)}
              />

              {/* Hidden fields for additional data */}
              <input
                type="hidden"
                name="date"
                value={date.toLocaleDateString("sr-Latn-RS")}
              />
              <input type="hidden" name="price" value={price} />
              <input
                type="hidden"
                name="selected"
                value={selected.join(", ")}
              />
              <input type="hidden" name="totalPersons" value={totalPersons} />
              <Button
                type="submit"
                variant="contained"
                disabled={!areFieldsFilled || phoneError}>
                Potvrdi
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </div>
  );
};
