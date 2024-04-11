import React from "react";
import { Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "@mui/material";

export const SocialLinks = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Link
        href="https://www.instagram.com/infinity_poolhouse/"
        sx={{ color: "white" }}>
        <InstagramIcon sx={{ fontSize: 18 }} />
      </Link>
      <Link
        href="https://www.facebook.com/infinitypoolhouse/"
        sx={{ color: "white" }}>
        <FacebookIcon sx={{ fontSize: 18 }} />
      </Link>
      {/* <EmailIcon sx={{ fontSize: 18 }} /> */}
      <Link href="tel:+381665333335" sx={{ color: "white" }}>
        <LocalPhoneIcon sx={{ fontSize: 18 }} />
      </Link>
    </Stack>
  );
};
