import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Rezervacije } from "./components/Rezervacije.jsx";
import { Galerija } from "./components/Galerija.jsx";
import { Kontakt } from "./components/Kontakt.jsx";
import { RezervacijePage } from "./components/ReservacijePage.jsx";

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
});

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
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
      <RouterProvider router={router} />
      {/* <App /> */}
    </ThemeProvider>
  </React.StrictMode>
);
