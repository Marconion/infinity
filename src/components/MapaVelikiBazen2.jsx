import React from "react";
import { Stack } from "@mui/material";
import "./MapaVelikiBazen.css";

export const MapaVelikiBazen2 = () => {
  const krevetiLevo = new Array(10).fill(0);
  const krevetiBazen = new Array(4).fill(0);
  const krevetiDesno = new Array(10).fill(0);
  const lazyBags = new Array(8).fill(0);
  const krevetiBazenDole = new Array(2).fill(0);
  const krevetiDole = new Array(3).fill(0);

  const [selectedBed, setSelectedBed] = React.useState(null);

  const handleClick = (index, type) => {
    console.log(`Clicked on ${type} bed number ${index + 1}`);
    setSelectedBed(`${type}-${index}`);
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
                  selectedBed === `normal-${index}` ? "selected" : ""
                }`}
                onClick={() => handleClick(index, "normal")}></div>
            );
          })}
        </Stack>
        <Stack mt={5} spacing={5}>
          {krevetiBazen.map((_, index) => {
            return (
              <div
                key={index}
                className={`krevet ${
                  selectedBed === `water-${index}` ? "selected" : ""
                }`}
                onClick={() => handleClick(index, "water")}></div>
            );
          })}
        </Stack>
        <Stack direction={"column"}>
          <Stack className="bazen"></Stack>
          <Stack direction={"row"} justifyContent={"space-between"} mt={2}>
            {krevetiBazenDole.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`krevet ${
                    selectedBed === `krevet-bazen-dole-${index}`
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
            return <div key={index} className="lazyBag"></div>;
          })}
        </Stack>
        <Stack>
          {krevetiDesno.map((_, index) => {
            return (
              <div
                key={index}
                className={`krevet ${
                  selectedBed === `krevet-desno-${index}` ? "selected" : ""
                }`}
                onClick={() => handleClick(index, "krevet-desno")}></div>
            );
          })}
        </Stack>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-around"} mx={5} mb={10}>
        {krevetiDole.map((_, index) => {
          return (
            <div
              key={index}
              className={`krevet ${
                selectedBed === `krevet-dole-${index}` ? "selected" : ""
              }`}
              onClick={() => handleClick(index, "krevet-dole")}></div>
          );
        })}
      </Stack>
    </>
  );
};
