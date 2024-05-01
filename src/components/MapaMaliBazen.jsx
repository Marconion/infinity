import React, { useContext, useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import "./MapaVelikiBazen.css";
import { DateContext } from "../contexts/DateContext";
import { LegendaKrevetLazybag } from "./LegendaKrevetLazybag";
import { PriceContext } from "../contexts/PriceContext";
import { SelectedItemsContext } from "../contexts/SelectedItemsContext";
import { TotalPersonsContext } from "../contexts/TotalPersonsContext";
import { Alert, Modal } from "@mui/material";

export const MapaMaliBazen = () => {
  {
    /* ARRAYS */
  }
  const krevetiLevo = new Array(4).fill(0);
  const krevetiBazen = new Array(3).fill(0);
  const krevetiDesno = new Array(4).fill(0);
  //   const lazyBags = new Array(8).fill(0);
  const krevetiBazenLevo = new Array(2).fill(0);
  const krevetiBazenDesno = new Array(2).fill(0);

  {
    /* STATES */
  }
  const [selectedBeds, setSelectedBeds] = useState([]);
  const [bedPersons, setBedPersons] = useState(0);
  const [reserved, setReserved] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [open, setOpen] = useState(false);

  {
    /* CONTEXTS */
  }
  const { price, setPrice } = useContext(PriceContext);
  const { totalPersons, setTotalPersons } = useContext(TotalPersonsContext);

  const { selected, setSelected } = useContext(SelectedItemsContext);
  const { date } = useContext(DateContext);

  console.log(date.toLocaleDateString("sr-Latn-RS"));
  // Fetch the data from the server
  useEffect(() => {
    fetch("https://infinity-server-9lxr.onrender.com/posts")
    // fetch("http://localhost:8050/posts")
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

  {
    /* TYPES */
  }
  const isBedType = (type) => ["ML", "MVT", "MVL", "MVD", "MD"].includes(type);

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
      setBedPersons(
        isBedType(type) ? (prevPersons) => prevPersons + 2 : bedPersons
      );
      setSelected((prevSelected) => [...prevSelected, itemId]);
    }
  };

  useEffect(() => {
    setTotalPersons(bedPersons);
  }, [bedPersons]);

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
      <Stack sx={{ height: "100vh" }}>
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
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Stack>
            {krevetiLevo.map((_, index) => {
              const itemId = `ML-${index}`;
              return (
                <div
                  key={index}
                  className={`krevet ${
                    selectedBeds.includes(itemId) ? "selected" : ""
                  } ${reserved.includes(itemId) ? "reserved" : ""}`}
                  style={{ margin: 10 }}
                  onClick={() => handleClick(index, "ML")}>
                  ML-{index}
                </div>
              );
            })}
          </Stack>
          <Stack direction={"column"}>
            <Stack className="bazen-mali">
              <Stack
                direction={"row"}
                mt={1}
                spacing={2}
                justifyContent={"center"}>
                {krevetiBazen.map((_, index) => {
                  const itemId = `MVT-${index}`;
                  return (
                    <div
                      key={index}
                      className={`krevet ${
                        selectedBeds.includes(itemId) ? "selected" : ""
                      } ${reserved.includes(itemId) ? "reserved" : ""} `}
                      onClick={() => handleClick(index, "MVT")}>
                      MVT-{index}
                    </div>
                  );
                })}
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"} mt={2}>
                <Stack
                  direction={"column"}
                  mt={1}
                  spacing={4}
                  justifyContent={"center"}>
                  {krevetiBazenLevo.map((_, index) => {
                    const itemId = `MVL-${index}`;
                    return (
                      <div
                        key={index}
                        className={`krevet ${
                          selectedBeds.includes(itemId) ? "selected" : ""
                        } ${reserved.includes(itemId) ? "reserved" : ""}`}
                        onClick={() => handleClick(index, "MVL")}>
                        MVL-{index}
                      </div>
                    );
                  })}
                </Stack>
                <Stack
                  direction={"column"}
                  mt={1}
                  spacing={4}
                  justifyContent={"center"}>
                  {krevetiBazenDesno.map((_, index) => {
                    const itemId = `MVD-${index}`;
                    return (
                      <div
                        key={index}
                        className={`krevet ${
                          selectedBeds.includes(itemId) ? "selected" : ""
                        } ${reserved.includes(itemId) ? "reserved" : ""}`}
                        onClick={() => handleClick(index, "MVD")}>
                        MVD-{index}
                      </div>
                    );
                  })}
                </Stack>
              </Stack>

              <Stack direction={"row"} justifyContent={"center"}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "primary.main",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                  mt={2}>
                  Ukupna cena: <br />
                  {price} RSD <br />(
                  {selectedBeds.length > 0
                    ? totalPersons +
                      (totalPersons === 2 ||
                      totalPersons === 3 ||
                      totalPersons === 4
                        ? " osobe"
                        : " osoba")
                    : "0 osoba"}
                  )
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            {krevetiDesno.map((_, index) => {
              const itemId = `MD-${index}`;
              return (
                <div
                  key={index}
                  className={`krevet ${
                    selectedBeds.includes(itemId) ? "selected" : ""
                  } ${reserved.includes(itemId) ? "reserved" : ""}`}
                  style={{ margin: 10 }}
                  onClick={() => handleClick(index, "MD")}>
                  MD-{index}
                </div>
              );
            })}
          </Stack>
        </Stack>

        {/* <Stack direction={"row"} justifyContent={"center"} mb={5}>
        <Typography variant="h6" sx={{ color: "secondary.main" }} mb={5}>
          Ukupna cena: {totalPrice} RSD
        </Typography>
      </Stack> */}
      </Stack>
    </>
  );
};
