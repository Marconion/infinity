// Admin.js
import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { Button, Stack, Typography } from "@mui/material";

export const Admin = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Replace with your actual API
    fetch("http://localhost:8050/posts")
      .then((response) => response.json())
      .then((data) => {
        const { users, ...postsData } = data;
        setReservations(postsData);
      });
  }, []);
  console.log(reservations.posts);

  // Replace with your actual API
  const handleDelete = async (id, userType) => {
    if (userType === "users") {
      alert("Cannot delete user posts");
      return;
    }

    const response = await fetch(`http://localhost:8050/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setReservations({
        ...reservations,
        posts: reservations.posts.filter(
          (reservation) => reservation.id !== id
        ),
      });
    } else {
      alert("Failed to delete reservation");
    }
  };

  return (
    <div>
      <NavBar />
      <Stack
        direction={"column"}
        display={"flex"}
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={1}
        m={3}>
        <Typography variant="h5">Brisanje rezervacija</Typography>
      </Stack>
      <Stack
        sx={{ m: 5 }}
        alignItems={"center"}
        justifyContent={"space-between"}>
        {reservations.posts &&
          reservations.posts
            .map((reservation) => ({
              ...reservation,
              date: new Date(reservation.date.split(".").reverse().join("-")),
            }))
            .sort((a, b) => a.date - b.date)
            .map(
              (reservation) =>
                reservation.userType !== "user" && (
                  <Stack
                    direction={"row"}
                    spacing={2}
                    p={1}
                    justifyContent={"space-between"}
                    sx={{ border: "1px solid black", width: "100%" }}
                    key={reservation.id}>
                    <Typography
                      variant="h5"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                      }}>
                      {reservation.date.toLocaleDateString()}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                      }}>
                      {reservation.name}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                      }}>
                      {reservation.phone}
                    </Typography>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={(event) => {
                        event.preventDefault();
                        handleDelete(reservation.id, reservation.userType);
                      }}>
                      Delete
                    </Button>
                  </Stack>
                )
            )}
      </Stack>
    </div>
  );
};
