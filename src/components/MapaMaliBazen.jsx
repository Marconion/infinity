import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import "./MapaVelikiBazen.css";
import { DateContext } from "../contexts/DateContext";
import { LegendaKrevetLazybag } from "./LegendaKrevetLazybag";

export const MapaMaliBazen = () => {
  const krevetiLevo = new Array(4).fill(0);
  const krevetiBazen = new Array(3).fill(0);
  const krevetiDesno = new Array(4).fill(0);
  //   const lazyBags = new Array(8).fill(0);
  const krevetiBazenLevo = new Array(2).fill(0);
  const krevetiBazenDesno = new Array(2).fill(0);

  const [selectedBeds, setSelectedBeds] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const { calendarValue } = useContext(DateContext);
  //   console.log(calendarValue);

  const bedPrice = 6000;
  const lazyBagPrice = 3000;

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

  return (
    <>
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
                  selectedBeds.includes(`kreveti-levo-${index}`)
                    ? "selected"
                    : ""
                }`}
                style={{ margin: 10 }}
                onClick={() => handleClick(index, "kreveti-levo")}></div>
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
                      selectedBeds.includes(`water-${index}`) ? "selected" : ""
                    }`}
                    onClick={() => handleClick(index, "water")}></div>
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
                        selectedBeds.includes(`water_levo-${index}`)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => handleClick(index, "water_levo")}></div>
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
                        selectedBeds.includes(`water_desno-${index}`)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => handleClick(index, "water_desno")}></div>
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
                {totalPrice} RSD
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
                  selectedBeds.includes(`krevet-desno-${index}`)
                    ? "selected"
                    : ""
                }`}
                style={{ margin: 10 }}
                onClick={() => handleClick(index, "krevet-desno")}></div>
            );
          })}
        </Stack>
      </Stack>

      {/* <Stack direction={"row"} justifyContent={"center"} mb={5}>
        <Typography variant="h6" sx={{ color: "secondary.main" }} mb={5}>
          Ukupna cena: {totalPrice} RSD
        </Typography>
      </Stack> */}
    </>
  );
};
