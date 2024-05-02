import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { Button, Grid, Stack, Typography } from "@mui/material";

export const Admin = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:8050/posts")
    fetch("https://infinity-server-9lxr.onrender.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const { users, ...postsData } = data;
        setReservations(postsData);
      });
  }, []);
  console.log(reservations.posts);

  const handleDelete = async (id, userType) => {
    if (userType === "users") {
      alert("Cannot delete user posts");
      return;
    }

    const response = await fetch(
      `https://infinity-server-9lxr.onrender.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );

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
        sx={{ m: 1 }}
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
                  <Grid
                    spacing={2}
                    p={0.5}
                    justifyContent={"space-between"}
                    sx={{ border: "1px solid black", width: "100%" }}
                    key={reservation.id}>
                    <Grid
                      container
                      justifyContent={"space-between"}
                      //   item
                      xs={12}>
                      <Grid item xs={4}>
                        <Typography
                          variant="h5"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            m: 1,
                          }}>
                          {reservation.date.toLocaleDateString()}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          variant="h5"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            m: 1,
                          }}>
                          {reservation.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          variant="h5"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            m: 1,
                          }}>
                          Tel: {reservation.phone}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          variant="h5"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            m: 1,
                          }}>
                          <div
                            style={{
                              border: "1px solid black",
                              borderRadius: "5px",
                              padding: "3px",
                              backgroundColor: "#C5FF95",
                            }}>
                            {reservation.selected.join(", ")}
                          </div>
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            fontSize: "12px",
                            m: 1,
                          }}
                          onClick={(event) => {
                            event.preventDefault();
                            handleDelete(reservation.id, reservation.userType);
                          }}>
                          Delete
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                )
            )}
      </Stack>
    </div>
  );
};
