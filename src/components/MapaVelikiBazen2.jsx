import React, { useContext, useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
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

  const [selectedBeds, setSelectedBeds] = useState([]);
  const { price, setPrice } = useContext(PriceContext);
  const { setSelected } = useContext(SelectedItemsContext);
  const [lbPersons, setLbPersons] = useState(0);
  const [bedPersons, setBedPersons] = useState(0);
  const { totalPersons, setTotalPersons } = useContext(TotalPersonsContext);

  {
    /* CHECK WEEKEND */
  }
  const { date } = useContext(DateContext);
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;

  {
    /* CENE */
  }
  const bedPrice = isWeekend ? 6000 : 5000;
  const lazyBagPrice = isWeekend ? 3000 : 2500;

  const isBedType = (type) => ["VL", "VV", "VBD", "VD", "V"].includes(type);

  const handleClick = (index, type) => {
    const itemId = `${type}-${index}`;

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

  // console.log(selectedBeds);

  return (
    <>
      <LegendaKrevetLazybag />

      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>
          {krevetiLevo.map((_, index) => {
            return (
              <div
                key={index}
                className={`krevet ${
                  selectedBeds.includes(`VL-${index}`) ? "selected" : ""
                }`}
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
                return (
                  <div
                    key={index}
                    className={`krevet ${
                      selectedBeds.includes(`VV-${index}`) ? "selected" : ""
                    }`}
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
                {price} RSD <br />
                {selectedBeds.length + lazyBags.length > 0
                  ? totalPersons +
                    (totalPersons === 2 ||
                    totalPersons === 3 ||
                    totalPersons === 4
                      ? " osobe"
                      : " osoba")
                  : "none"}
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
              return (
                <div
                  key={index}
                  className={`krevet ${
                    selectedBeds.includes(`VBD-${index}`) ? "selected" : ""
                  }`}
                  onClick={() => handleClick(index, "VBD")}>
                  VBD-{index}
                </div>
              );
            })}
          </Stack>
        </Stack>
        <Stack>
          {lazyBags.map((_, index) => {
            return (
              <div
                key={index}
                className={`lazyBag ${
                  selectedBeds.includes(`LB-${index}`) ? "selected" : ""
                }`}
                onClick={() => handleClick(index, "LB")}>
                LB-{index}
              </div>
            );
          })}
        </Stack>
        <Stack>
          {krevetiDesno.map((_, index) => {
            return (
              <div
                key={index}
                className={`krevet ${
                  selectedBeds.includes(`VD-${index}`) ? "selected" : ""
                }`}
                onClick={() => handleClick(index, "VD")}>
                VD-{index}
              </div>
            );
          })}
        </Stack>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-around"} mx={0} mb={12}>
        {krevetiDole.map((_, index) => {
          return (
            <div
              key={index}
              className={`krevet ${
                selectedBeds.includes(`V-${index}`) ? "selected" : ""
              }`}
              onClick={() => handleClick(index, "V")}>
              V-{index}
            </div>
          );
        })}
      </Stack>
    </>
  );
};
