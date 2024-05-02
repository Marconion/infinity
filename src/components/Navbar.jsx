import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Stack, Button, Typography, Divider } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/images/infinity-house-logo-2.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import SideMenu from "./Drawer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBar() {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Box sx={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <motion.img
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
              src={logo}
              alt="logo"
              height={matches ? "30" : "50"}
            />
          </Link>
          {!matches && (
            <Stack direction={"row"}>
              <Link to="/">
                <Button>
                  <Typography variant="h7" sx={{ color: "white" }}>
                    Home
                  </Typography>
                </Button>
              </Link>
              <Divider />
              <Link to="/ponuda">
                <Button>
                  <Typography variant="h7" sx={{ color: "white" }}>
                    Ponuda
                  </Typography>
                </Button>
              </Link>
              <Divider />
              <Link to="/galerija">
                <Button>
                  <Typography variant="h7" sx={{ color: "white" }}>
                    Galerija
                  </Typography>
                </Button>
              </Link>
              <Divider />
              <Link to="/rezervacije">
                <Button>
                  <Typography variant="h7" sx={{ color: "white" }}>
                    Rezervacije
                  </Typography>
                </Button>
              </Link>
              <Divider />
              <Link to="/kontakt">
                <Button>
                  <Typography variant="h7" sx={{ color: "white" }}>
                    Kontakt
                  </Typography>
                </Button>
              </Link>
            </Stack>
          )}

          {matches && <SideMenu />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
