import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
export default function Navbar() {
  return (
    <Stack
      direction={"row"}
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
      px={"20px"}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "120px", height: "82px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#292929",
            borderBottom: "3px solid #EEFF00",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#292929" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}
