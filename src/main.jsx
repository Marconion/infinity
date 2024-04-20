import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Galerija } from "./components/Galerija.jsx";
import { Kontakt } from "./components/Kontakt.jsx";
import { RezervacijePage } from "./components/ReservacijePage.jsx";
import { Ponuda } from "./components/Ponuda.jsx";
import { DateContext, DateProvider } from "./contexts/DateContext.jsx";
import { Home } from "./components/Home.jsx";
import { SelectedItemsContextProvider } from "./contexts/SelectedItemsContext.jsx";
import { PriceProvider } from "./contexts/PriceContext.jsx";
import { TotalPersonsProvider } from "./contexts/TotalPersonsContext.jsx";
import { FormInputProvider } from "./contexts/FormInputContext.jsx";
import { PhoneErrorProvider } from "./contexts/PhoneErrorContext.jsx";
import { FormRefProvider } from "./contexts/FormRefContext.jsx";
// import { SubmitFormProvider } from "./contexts/SubmitFormContext.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5DEBD7",
      text: "#1679AB",
    },
    secondary: {
      main: "#074173",
      button: "#C5FF95",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ponuda",
    element: <Ponuda />,
  },
  {
    path: "/rezervacije",
    element: <RezervacijePage />,
  },
  {
    path: "/galerija",
    element: <Galerija />,
  },
  {
    path: "/kontakt",
    element: <Kontakt />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DateProvider>
        <PriceProvider>
          <SelectedItemsContextProvider>
            <TotalPersonsProvider>
              <FormInputProvider>
                <PhoneErrorProvider>
                  <FormRefProvider>
                    <RouterProvider router={router} />
                  </FormRefProvider>
                </PhoneErrorProvider>
              </FormInputProvider>
            </TotalPersonsProvider>
          </SelectedItemsContextProvider>
        </PriceProvider>
      </DateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
