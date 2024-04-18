import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import "./MapaVelikiBazen.css";
import { DateContext } from "../contexts/DateContext";
import { LegendaKrevetLazybag } from "./LegendaKrevetLazybag";
import { PriceContext } from "../contexts/PriceContext";
import { SelectedItemsContext } from "../contexts/SelectedItemsContext";

export const MapaVelikiBazen2 = () => {
  {
    /* KREVETI I LAZYBAGS */
  }
  const krevetiLevo = new Array(10).fill(0);
  const krevetiBazen = new Array(4).fill(0);
  const krevetiDesno = new Array(10).fill(0);
  const lazyBags = new Array(8).fill(0);
  const krevetiBazenDole = new Array(2).fill(0);
  const krevetiDole = new Array(3).fill(0);

  const [selectedBeds, setSelectedBeds] = React.useState([]);
  const { totalPrice, setTotalPrice } = useContext(PriceContext);
  const { setSelected } = useContext(SelectedItemsContext);

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

  const handleClick = (index, type) => {
    const itemId = `${type}-${index}`;

    if (selectedBeds.includes(itemId)) {
      setSelectedBeds(selectedBeds.filter((item) => item !== itemId));
      setTotalPrice(
        (prevPrice) =>
          prevPrice - (type === "lazyBag" ? lazyBagPrice : bedPrice)
      );
    } else {
      setSelectedBeds([...selectedBeds, itemId]);
      setTotalPrice(
        (prevPrice) =>
          prevPrice + (type === "lazyBag" ? lazyBagPrice : bedPrice)
      );
    }
  };
  console.log(selectedBeds);
  setSelected(selectedBeds);

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
                  selectedBeds.includes(`KL-${index}`) ? "selected" : ""
                }`}
                onClick={() => handleClick(index, "KL")}>
                KL-{index}
              </div>
            );
          })}
        </Stack>
        <Stack direction={"column"}>
          <Stack className="bazen">
            <Stack mt={5} spacing={5}>
              {krevetiBazen.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`krevet ${
                      selectedBeds.includes(`KV-${index}`) ? "selected" : ""
                    }`}
                    onClick={() => handleClick(index, "KV")}>
                    KV-{index}
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
                {totalPrice} RSD
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
                    selectedBeds.includes(`KBD-${index}`) ? "selected" : ""
                  }`}
                  onClick={() => handleClick(index, "KBD")}>
                  KBD-{index}
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
                  selectedBeds.includes(`lazyBag-${index}`) ? "selected" : ""
                }`}
                onClick={() => handleClick(index, "lazyBag")}>
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
                  selectedBeds.includes(`KD-${index}`) ? "selected" : ""
                }`}
                onClick={() => handleClick(index, "KD")}>
                KD-{index}
              </div>
            );
          })}
        </Stack>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-around"} mx={8} mb={12}>
        {krevetiDole.map((_, index) => {
          return (
            <div
              key={index}
              className={`krevet ${
                selectedBeds.includes(`K-${index}`) ? "selected" : ""
              }`}
              onClick={() => handleClick(index, "K")}>
              K-{index}
            </div>
          );
        })}
      </Stack>
      {/* <Stack direction={"row"} justifyContent={"center"} mb={5}>
        <Typography variant="h6" sx={{ color: "secondary.main" }} mb={5}>
          Ukupna cena: {totalPrice} RSD
        </Typography>
      </Stack> */}
    </>
  );
};
