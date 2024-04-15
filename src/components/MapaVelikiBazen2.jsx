import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import "./MapaVelikiBazen.css";
import { DateContext } from "../contexts/DateContext";

export const MapaVelikiBazen2 = () => {
  const krevetiLevo = new Array(10).fill(0);
  const krevetiBazen = new Array(4).fill(0);
  const krevetiDesno = new Array(10).fill(0);
  const lazyBags = new Array(8).fill(0);
  const krevetiBazenDole = new Array(2).fill(0);
  const krevetiDole = new Array(3).fill(0);

  const [selectedBeds, setSelectedBeds] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const { calendarValue } = useContext(DateContext);
  console.log(calendarValue);

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
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>
          {krevetiLevo.map((_, index) => {
            return (
              <div
                key={index}
                className={`krevet ${
                  selectedBeds.includes(`normal-${index}`) ? "selected" : ""
                }`}
                onClick={() => handleClick(index, "normal")}></div>
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
                      selectedBeds.includes(`water-${index}`) ? "selected" : ""
                    }`}
                    onClick={() => handleClick(index, "water")}></div>
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
                    selectedBeds.includes(`krevet-bazen-dole-${index}`)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleClick(index, "krevet-bazen-dole")}></div>
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
                onClick={() => handleClick(index, "lazyBag")}></div>
            );
          })}
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
                onClick={() => handleClick(index, "krevet-desno")}></div>
            );
          })}
        </Stack>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-around"} mx={8} mb={1}>
        {krevetiDole.map((_, index) => {
          return (
            <div
              key={index}
              className={`krevet ${
                selectedBeds.includes(`krevet-dole-${index}`) ? "selected" : ""
              }`}
              onClick={() => handleClick(index, "krevet-dole")}></div>
          );
        })}
      </Stack>
      <Stack direction={"row"} justifyContent={"center"} mb={5}>
        <Typography variant="h6" sx={{ color: "secondary.main" }} mb={5}>
          Ukupna cena: {totalPrice} RSD
        </Typography>
      </Stack>
    </>
  );
};
