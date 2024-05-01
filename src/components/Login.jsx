// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import { Button, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://infinity-server-9lxr.onrender.com/login",
      // "http://localhost:8050/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      setIsLoggedIn(true);
      if (data.success) {
        history("/admin"); // Redirect to the new page
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("An error occurred");
    }
  };

  return (
    <>
      <NavBar />
      <Stack sx={{ mt: 5 }} />
      <Stack
        onSubmit={handleSubmit}
        component="form"
        // ref={form}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <Stack
          sx={{
            display: "flex",
            margin: "auto",
            flexDirection: "column",
          }}>
          <TextField
            required
            id="filled-required"
            label="Username"
            name="username"
            variant="filled"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <TextField
            required
            type="password"
            label="Password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Potvrdi
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
