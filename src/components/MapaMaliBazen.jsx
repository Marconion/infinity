import React, { useContext, useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import "./MapaVelikiBazen.css";
import { DateContext } from "../contexts/DateContext";
import { LegendaKrevetLazybag } from "./LegendaKrevetLazybag";
import { PriceContext } from "../contexts/PriceContext";
import { SelectedItemsContext } from "../contexts/SelectedItemsContext";
import { TotalPersonsContext } from "../contexts/TotalPersonsContext";

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

  {
    /* CONTEXTS */
  }
  const { price, setPrice } = useContext(PriceContext);
  const { totalPersons, setTotalPersons } = useContext(TotalPersonsContext);

  const { selected, setSelected } = useContext(SelectedItemsContext);

  {
    /* CHECK WEEKEND */
  }
  const { date } = useContext(DateContext);
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

  return (
    <>
      <Stack sx={{ height: "100vh" }}>
        <LegendaKrevetLazybag />

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Stack>
            {krevetiLevo.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`krevet ${
                    selectedBeds.includes(`ML-${index}`) ? "selected" : ""
                  }`}
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
                  return (
                    <div
                      key={index}
                      className={`krevet ${
                        selectedBeds.includes(`MVT-${index}`) ? "selected" : ""
                      }`}
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
                    return (
                      <div
                        key={index}
                        className={`krevet ${
                          selectedBeds.includes(`MVL-${index}`)
                            ? "selected"
                            : ""
                        }`}
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
                    return (
                      <div
                        key={index}
                        className={`krevet ${
                          selectedBeds.includes(`MVD-${index}`)
                            ? "selected"
                            : ""
                        }`}
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
              return (
                <div
                  key={index}
                  className={`krevet ${
                    selectedBeds.includes(`MD-${index}`) ? "selected" : ""
                  }`}
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
