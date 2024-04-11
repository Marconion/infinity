import React from "react";
import { Typography, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";

export const Opis = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems={"center"}
      py={5}
      sx={{ color: "secondary.main" }}>
      <Divider sx={{ width: "300px" }} />
      <Typography variant="body1" align="center">
        Uživajte u beskrajnom luksuzu i opuštanju u "Infinity Pool House", oazi
        elegancije koja se nalazi u predivnom pejzažu Lipovice, nedaleko od
        Beograda. Naš impresivan bazen sa beskonačnim rubom pruža nezaboravno
        iskustvo uz pogled na prirodu i prostranstvo neba. Okruženi tišinom i
        mirisima prirode, gosti mogu uživati u privatnosti i udobnosti dok se
        uranjaju u kristalno čiste vode našeg bazena. Infinity Pool House -
        mesto gde svaka kap vode stvara čaroliju uživanja i izvanrednog
        iskustva. Dodatno, obezbeđen je parking za 40 automobila, pružajući
        praktičnost i sigurnost za sve naše goste.
      </Typography>
      <Divider sx={{ width: "300px" }} />
    </Stack>
  );
};
