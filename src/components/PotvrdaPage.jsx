import React from "react";
import { Stack, Container, Typography, Divider } from "@mui/material";
import NavBar from "./Navbar";
import { Footer } from "./Footer";
import logo from "../assets/images/infinity-house-logo-1.png";
import vector1 from "../assets/design_images/Vector 1.png";
import { ScrollToTop } from "./ScrollToTop";

export const PotvrdaPage = () => {
  function redirectHome() {
    setTimeout(() => {
      window.location.href = "/infinity/#/";
    }, 4000);
  }

  React.useEffect(() => {
    redirectHome();
  });

  return (
    <Stack sx={{ height: "100vh" }}>
      <ScrollToTop />
      <NavBar />
      <img src={vector1} alt="infinity pool house" className="vector-top" />
      <Container>
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
          <img src={logo} alt="infinity-house-logo" style={{ width: "40%" }} />
        </Stack>
      </Container>
      <img src={vector1} alt="infinity pool house" className="vector-bottom" />
      <Footer />
    </Stack>
  );
};
