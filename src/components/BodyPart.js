import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../assets/icons/gym.png";
function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #EEFF00" : "",
        backgroundColor: "#292929",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({
          top: document.getElementById("exercises").offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize={"24px"}
        fontWeight={"bold"}
        color={"#EEFF00"}
        textTransform={"capitalize"}
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
