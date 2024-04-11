import "./App.css";
import { Container, Stack, Typography, Button, Divider } from "@mui/material";
import NavBar from "./components/Navbar";
import naslovnaSlika from "./assets/images/Infinity-1.jpg";
import misli from "./assets/misli";
import { Content } from "./components/Content";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Footer } from "./components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Opis } from "./components/Opis";

function App() {
  const matches = useMediaQuery("(max-width:768px)");

  const randomIndex = Math.floor(Math.random() * misli.length);
  return (
    <>
      <NavBar />
      <Stack>
        <Stack className="image-container">
          <img
            className="naslovna-slika"
            src={naslovnaSlika}
            alt="infinity pool house"
          />
          <Typography
            variant="h5"
            className="misli"
            sx={{ fontSize: matches ? "14px" : "25px" }}>
            "{misli[randomIndex].text}
            " <br />
            <br />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}>
              <Link to="/rezervacije">
                <Button variant="outlined">Rezerviši</Button>
              </Link>
            </motion.div>
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          alignItems={"center"}
          pb={15}
          px={5}>
          <Opis />
        </Stack>
        <Footer />
      </Stack>
    </>
  );
}

export default App;
