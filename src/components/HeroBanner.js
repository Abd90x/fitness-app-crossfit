import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";
export default function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position={"relative"}
    >
      <Typography
        color="#EEFF00"
        fontWeight="400"
        fontSize="28px"
        style={{ textShadow: "2px 2px 1px #292929" }}
        ml="20px"
      >
        Crossfit Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
        ml="20px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography ml="20px" fontSize={"22px"} lineHeight={"35px"} mb={3}>
        Check ouy the most effective exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        sx={{
          backgroundColor: "#EEFF00",
          padding: "10px",
          marginLeft: "20px",
          color: "#292929",
          ":hover": { backgroundColor: "#292929", color: "#EEFF00" },
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontSize={"200px"}
        fontWeight={600}
        color={"#EEFF00"}
        mt={3}
        sx={{ opacity: 0.3, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="Hero Banner"
        className="hero-banner-img"
      />
    </Box>
  );
}
