import React, { useContext, useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";

import "./MapaVelikiBazen.css";
import { DateContext } from "../contexts/DateContext";
import { LegendaKrevetLazybag } from "./LegendaKrevetLazybag";
import { PriceContext } from "../contexts/PriceContext";
import { SelectedItemsContext } from "../contexts/SelectedItemsContext";
import { TotalPersonsContext } from "../contexts/TotalPersonsContext";

export const MapaVelikiBazen2 = () => {
  const types = ["VL", "VV", "VBD", "VD", "V", "LB"];
  {
    /* KREVETI I LAZYBAGS */
  }
  const krevetiLevo = new Array(8).fill(0);
  const krevetiBazen = new Array(4).fill(0);
  const krevetiDesno = new Array(8).fill(0);
  const lazyBags = new Array(8).fill(0);
  const krevetiBazenDole = new Array(2).fill(0);
  const krevetiDole = new Array(5).fill(0);

  // STATES
  const [lbPersons, setLbPersons] = useState(0);
  const [bedPersons, setBedPersons] = useState(0);
  const [selectedBeds, setSelectedBeds] = useState([]);
  const [reserved, setReserved] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [open, setOpen] = useState(false);

  // CONTEXTS
  const { price, setPrice } = useContext(PriceContext);
  const { setSelected } = useContext(SelectedItemsContext);
  const { totalPersons, setTotalPersons } = useContext(TotalPersonsContext);
  const { date } = useContext(DateContext);

  console.log(date.toLocaleDateString("sr-Latn-RS"));
  // Fetch the data from the server
  useEffect(() => {
    // fetch("https://infinity-server-9lxr.onrender.com/posts")
    fetch("http://localhost:8050/posts")
      .then((response) => response.json())
      .then((data) => {
        // Filter the data based on the selected date
        const filteredData = data.posts.filter(
          (post) => post.date === date.toLocaleDateString("sr-Latn-RS")
        );
        console.log(filteredData);

        // Flatten the array and set the reserved state
        const flattenedData = filteredData.map((item) => item.selected).flat();
        setReserved([...reserved, ...flattenedData]);
        console.log(filteredData);
        setIsLoading(false);
      });
  }, []); // Add date as a dependency
  console.log(reserved);

  useEffect(() => {
    if (showAlert) {
      setOpen(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        setOpen(false);
      }, 2000);

      // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  {
    /* CHECK WEEKEND */
  }
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;

  {
    /* CENE */
  }
  const bedPrice = isWeekend ? 6000 : 5000;
  const lazyBagPrice = isWeekend ? 3000 : 2500;

  const isBedType = (type) => ["VL", "VV", "VBD", "VD", "V"].includes(type);

  const handleClick = (index, type) => {
    const itemId = `${type}-${index}`;

    // If the item is reserved, don't allow it to be selected
    if (reserved.includes(itemId)) {
      setShowAlert(true);
      return;
    }

    if (selectedBeds.includes(itemId)) {
      setSelectedBeds(selectedBeds.filter((item) => item !== itemId));
      setPrice(
        (prevPrice) => prevPrice - (type === "LB" ? lazyBagPrice : bedPrice)
      );
      setLbPersons(
        type === "LB" ? (prevPersons) => prevPersons - 1 : lbPersons
      );
      setBedPersons(
        isBedType(type) ? (prevPersons) => prevPersons - 2 : bedPersons
      );

      // Remove item from selected state
      setSelected((prevSelected) =>
        prevSelected.filter((item) => item !== itemId)
      );
    } else {
      setSelectedBeds([...selectedBeds, itemId]);
      setPrice(
        (prevPrice) => prevPrice + (type === "LB" ? lazyBagPrice : bedPrice)
      );
      setLbPersons(
        type === "LB" ? (prevPersons) => prevPersons + 1 : lbPersons
      );
      setBedPersons(
        isBedType(type) ? (prevPersons) => prevPersons + 2 : bedPersons
      );

      // Add item to selected state
      setSelected((prevSelected) => [...prevSelected, itemId]);
    }
  };

  useEffect(() => {
    setTotalPersons(lbPersons + bedPersons);
  }, [lbPersons, bedPersons]);

  if (isLoading)
    return (
      <Stack
        alignItems={"center"}
        justifyContent={"space-around"}
        height={"70vh"}>
        <Typography variant="h5" sx={{ color: "secondary.main" }}>
          Loading...
        </Typography>
      </Stack>
    );

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-modal-title"
        aria-describedby="alert-modal-description">
        <Alert severity="info">Ovaj krevet je već rezervisan!</Alert>
      </Modal>
      <LegendaKrevetLazybag />
      <Typography
        variant="h5"
        sx={{
          color: "secondary.main",
          fontSize: "12px",
          textAlign: "center",
          pb: 2,
        }}>
        * kreveti na vodi nemaju suncobrane
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>
          {krevetiLevo.map((_, index) => {
            const itemId = `VL-${index}`;
            return (
              <div
                key={index}
                className={`krevet ${
                  selectedBeds.includes(itemId) ? "selected" : ""
                } ${reserved.includes(itemId) ? "reserved" : ""}`}
                onClick={() => handleClick(index, "VL")}>
                VL-{index}
              </div>
            );
          })}
        </Stack>
        <Stack direction={"column"}>
          <Stack className="bazen">
            <Stack mt={3} spacing={5}>
              {krevetiBazen.map((_, index) => {
                const itemId = `VV-${index}`;
                return (
                  <div
                    key={index}
                    className={`krevet ${
                      selectedBeds.includes(itemId) ? "selected" : ""
                    } ${reserved.includes(itemId) ? "reserved" : ""}`}
                    onClick={() => handleClick(index, "VV")}>
                    VV-{index}
                  </div>
                );
              })}
            </Stack>
            <Stack direction={"row"} justifyContent={"center"}>
              <Typography
                variant="h6"
                sx={{
                  color: "primary.main",
                  fontSize: "12px",
                  textAlign: "center",
                }}
                mt={4}>
                Ukupna cena: <br />
                {price} RSD <br />(
                {selectedBeds.length + lazyBags.length > 0
                  ? totalPersons +
                    (totalPersons === 2 ||
                    totalPersons === 3 ||
                    totalPersons === 4
                      ? " osobe"
                      : " osoba")
                  : "none"}
                )
                <br />
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            mt={2}
            mx={2}>
            {krevetiBazenDole.map((_, index) => {
              const itemId = `VBD-${index}`;
              return (
                <div
                  key={index}
                  className={`krevet ${
                    selectedBeds.includes(itemId) ? "selected" : ""
                  } ${reserved.includes(itemId) ? "reserved" : ""}`}
                  onClick={() => handleClick(index, "VBD")}>
                  VBD-{index}
                </div>
              );
            })}
          </Stack>
        </Stack>
        <Stack>
          {lazyBags.map((_, index) => {
            const itemId = `LB-${index}`;
            return (
              <div
                key={index}
                className={`lazyBag ${
                  selectedBeds.includes(itemId) ? "selected" : ""
                } ${reserved.includes(itemId) ? "reserved" : ""}`}
                onClick={() => handleClick(index, "LB")}>
                LB-{index}
              </div>
            );
          })}
        </Stack>
        <Stack>
          {krevetiDesno.map((_, index) => {
            const itemId = `VD-${index}`;
            return (
              <div
                key={index}
                className={`krevet ${
                  selectedBeds.includes(itemId) ? "selected" : ""
                } ${reserved.includes(itemId) ? "reserved" : ""}`}
                onClick={() => handleClick(index, "VD")}>
                VD-{index}
              </div>
            );
          })}
        </Stack>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-around"} mx={0} mb={12}>
        {krevetiDole.map((_, index) => {
          const itemId = `V-${index}`;
          return (
            <div
              key={index}
              className={`krevet ${
                selectedBeds.includes(itemId) ? "selected" : ""
              } ${reserved.includes(itemId) ? "reserved" : ""}`}
              onClick={() => handleClick(index, "V")}>
              V-{index}
            </div>
          );
        })}
      </Stack>
    </>
  );
};
