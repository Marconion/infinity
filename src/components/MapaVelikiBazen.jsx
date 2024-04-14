import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MapaVelikiBazen = () => {
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = (event) => {
    // Get the coordinates of the click relative to the image
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Update the position of the overlay
    setOverlayPosition({ x, y });
    // Show the overlay
    setShowOverlay(true);
  };

  const handleOverlayClick = () => {
    // Hide the overlay when clicked
    setShowOverlay(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}>
      <Stack direction="column" spacing={2} alignItems={"center"} py={2} mb={0}>
        <Typography variant="h5" sx={{ color: "secondary.main" }}>
          Izaberite mesto
        </Typography>
      </Stack>
      <div
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
        onClick={handleClick}>
        {/* Main Image */}
        <img
          src="https://via.placeholder.com/300x400"
          alt="Clickable Image"
          //   style={{ width: "150", height: "800" }}
        />
        {showOverlay && (
          <img
            src="https://via.placeholder.com/100"
            alt="Overlay Image"
            style={{
              position: "absolute",
              left: overlayPosition.x,
              top: overlayPosition.y,
              transform: "translate(0%, -50%)",
              width: "50px",
              height: "50px",
              zIndex: 1, // Ensure overlay is above main image
              filter:
                "brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(7499%) hue-rotate(0deg) brightness(100%) contrast(100%)",
            }}
            onClick={handleOverlayClick}
          />
        )}
      </div>
    </motion.div>
  );
};

export default MapaVelikiBazen;
