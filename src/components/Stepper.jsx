import * as React from "react";
import { useState, useContext } from "react";
import { Box, Stack, Divider } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rezervacije } from "./Rezervacije";
import { Placanje } from "./Placanje";
import { Bazeni } from "./Bazeni";
import { PriceContext } from "../contexts/PriceContext";
import { SelectedItemsContext } from "../contexts/SelectedItemsContext";
import { FormInputContext } from "../contexts/FormInputContext";
import { PhoneErrorContext } from "../contexts/PhoneErrorContext";
import { FormRefContext } from "../contexts/FormRefContext";
import logo from "../assets/images/infinity-house-logo-1.png";

const steps = ["Datum", "Krevet ili lazybag", "Kontakt"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const { price, setPrice } = useContext(PriceContext);
  const { selected, setSelected } = useContext(SelectedItemsContext);
  const { areFieldsFilled, setAreFieldsFilled } = useContext(FormInputContext);
  const { phoneError } = useContext(PhoneErrorContext);
  const form = useContext(FormRefContext);

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
    setPrice(0);
    setSelected("");
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
    setSelected("");
    setPrice(0);
  };

  function redirectHome() {
    setTimeout(() => {
      window.location.href = "/infinity/#/";
    }, 4000);
  }

  // React.useEffect(() => {
  //   if (activeStep === steps.length) {
  //     redirectHome();
  //   }
  // });

  // function handlTest() {
  //   console.log("activeStep:", activeStep);
  //   console.log("selected.length:", selected.length);
  //   console.log("areFieldsFilled:", areFieldsFilled);
  //   console.log("phoneError:", phoneError);
  // }

  return (
    <Box
      // formRef={form}
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
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="napomena"
            mt={5}
            sx={{ boxShadow: "1px 1px 5px #000" }}>
            <Typography
              variant="h5"
              sx={{ my: 1, mb: 1 }}
              textAlign={"center"}
              textTransform={"uppercase"}>
              Rezervisali ste !
            </Typography>
            <Typography sx={{ my: 1 }} textAlign={"center"}>
              Hvala na poverenju !
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              mt: 3,
              mx: 3,
              fontStyle: "italic",
            }}
            textAlign={"center"}>
            Uskoro ćete biti preusmereni na početnu stranicu.
          </Typography>
          <Divider sx={{ mt: 3, mb: 3 }} />
          <Typography sx={{ mb: 1 }} textAlign={"center"}>
            Vaš "Infinity House"
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <img
              src={logo}
              alt="infinity-house-logo"
              style={{ width: "40%" }}
            />
          </Stack>
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
            {/* <Button onClick={handlTest}>Test</Button> */}

            <Button
              onClick={handleNext}
              disabled={
                (activeStep === 1 && selected.length === 0) ||
                (activeStep === steps.length - 1 && !areFieldsFilled) ||
                (activeStep === steps.length - 1 && phoneError)
              }>
              {activeStep === steps.length - 1 ? null : "Next"}
              {/* Store name, phone and note on next */}
            </Button>
          </Box>
          {activeStep === 0 ? <Rezervacije /> : null}
          {activeStep === 1 ? <Bazeni /> : null}
          {activeStep === 2 ? <Placanje /> : null}
        </React.Fragment>
      )}
    </Box>
  );
}
