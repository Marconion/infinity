import * as React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rezervacije } from "./Rezervacije";
import { Placanje } from "./Placanje";
import { Bazeni } from "./Bazeni";
import { DateContext } from "../contexts/DateContext";
import { PriceContext } from "../contexts/PriceContext";
import { SelectedItemsContext } from "../contexts/SelectedItemsContext";

const steps = ["Datum", "Krevet ili lazybag", "Kontakt"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  // const [calendarValue, setCalendarValue] = useState(
  //   new Date().toLocaleDateString("sr-Latn-rs")
  // );

  const [selectedItems, setSelectedItems] = useState([]);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setTotalPrice(0);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <PriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      <SelectedItemsContext.Provider
        value={{ selectedItems, setSelectedItems }}>
        <Box
          sx={{
            width: "91%",
            display: "flex",
            position: "relative",
            flexDirection: "column",
            p: 2,
            justifyContent: "space-evenly",
          }}>
          <Stepper activeStep={activeStep} sx={{ mt: 0, pt: 0 }}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>
                    <Typography fontSize={"11px"}>{label}</Typography>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Rezervisali ste. Hvala na poverenju !
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pt: 2,
                }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}>
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
                </Button>
            )} */}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  {/* Store name, phone and note on next */}
                </Button>
              </Box>
              {activeStep === 0 ? <Rezervacije /> : null}
              {activeStep === 1 ? <Bazeni /> : null}
              {activeStep === 2 ? <Placanje /> : null}
            </React.Fragment>
          )}
        </Box>
      </SelectedItemsContext.Provider>
    </PriceContext.Provider>
  );
}
