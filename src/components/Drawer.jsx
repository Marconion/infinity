import * as React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import naslovnaSlika from "../assets/images/infinity-house-logo-1.png";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack spacing={2} sx={{ m: 4 }}>
        <img
          src={naslovnaSlika}
          alt="infinity pool house"
          style={{ width: "100%", margin: "10px 0 30px" }}
        />
        <Link to="/">
          <Button>
            <Typography variant="h7">Home</Typography>
          </Button>
        </Link>
        <Divider />
        <Link to="/galerija">
          <Button>
            <Typography variant="h7">Galerija</Typography>
          </Button>
        </Link>
        <Divider />
        <Link to="/rezervacije">
          <Button>
            <Typography variant="h7">Rezervacije</Typography>
          </Button>
        </Link>
        <Divider />
        <Link to="/kontakt">
          <Button>
            <Typography variant="h7">Kontakt</Typography>
          </Button>
        </Link>
      </Stack>
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
