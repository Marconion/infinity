// Admin.js
import React, { useState, useEffect } from "react";

export const Admin = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Replace with your actual API
    fetch("https://your-api.com/reservations")
      .then((response) => response.json())
      .then((data) => setReservations(data));
  }, []);

  const handleDelete = async (id) => {
    // Replace with your actual API
    const response = await fetch(`https://your-api.com/reservations/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setReservations(
        reservations.filter((reservation) => reservation.id !== id)
      );
    } else {
      alert("Failed to delete reservation");
    }
  };

  return (
    <div>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <p>{reservation.name}</p>
          <button onClick={() => handleDelete(reservation.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
