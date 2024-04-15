import * as React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import naslovnaSlika from "../assets/images/infinity-house-logo-1.png";
import { Link } from "react-router-dom";
import vector1 from "../assets/design_images/Vector 1.png";
import ImageIcon from "@mui/icons-material/Image";
import HomeIcon from "@mui/icons-material/Home";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { motion } from "framer-motion";

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          zIndex: -1,
        }}>
        <img
          src={vector1}
          alt="infinity pool house"
          style={{ width: "100%" }}
        />
      </Box>
      <Stack spacing={2} sx={{ m: 4 }}>
        <img
          src={naslovnaSlika}
          alt="infinity pool house"
          style={{ width: "100%", margin: "10px 0 30px" }}
        />
        <Link to="/">
          <Button>
            <Stack direction="row" spacing={1} alignItems={"center"}>
              <HomeIcon />
              <Typography variant="h7">Home</Typography>
            </Stack>
          </Button>
        </Link>
        <Divider />
        <Link to="/ponuda">
          <Button>
            <Stack direction="row" spacing={1} alignItems={"center"}>
              <LocalOfferIcon />
              <Typography variant="h7">Ponuda</Typography>
            </Stack>
          </Button>
        </Link>
        <Divider />
        <Link to="/galerija">
          <Button>
            <Stack direction="row" spacing={1} alignItems={"center"}>
              <ImageIcon />
              <Typography variant="h7">Galerija</Typography>
            </Stack>
          </Button>
        </Link>
        <Divider />
        <Link to="/rezervacije">
          <Button>
            <Stack direction="row" spacing={1} alignItems={"center"}>
              <BeenhereIcon />
              <Typography variant="h7">Rezervacije</Typography>
            </Stack>
          </Button>
        </Link>
        <Divider />
        <Link to="/kontakt">
          <Button>
            <Stack direction="row" spacing={1} alignItems={"center"}>
              <ConnectWithoutContactIcon />
              <Typography variant="h7">Kontakt</Typography>
            </Stack>
          </Button>
        </Link>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          transform: "rotate(180deg)",
          zIndex: -1,
        }}>
        <img
          src={vector1}
          alt="infinity pool house"
          style={{ width: "100%" }}
        />
      </Box>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 0 }}
        onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
