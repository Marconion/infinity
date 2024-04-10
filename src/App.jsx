import "./App.css";
import { Container, Stack, Typography, Button } from "@mui/material";
import NavBar from "./components/Navbar";
import naslovnaSlika from "./assets/images/Infinity-1.jpg";
import misli from "./assets/misli";
import { Content } from "./components/Content";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Footer } from "./components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            <Link to="/rezervacije">
              <Button variant="outlined" sx={{ m: 1 }}>
                Rezerviši
              </Button>
            </Link>
          </Typography>
        </Stack>
        {/* <Content /> */}
        <Footer />
      </Stack>
    </>
  );
}

export default App;
