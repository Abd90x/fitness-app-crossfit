import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ExerciseCard({ exercise, handelClick }) {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      style={{
        background: "#FFF",

        overflow: "hidden",
      }}
      onClick={handelClick}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        style={{ maxWidth: "100%", marginBottom: "10px" }}
      />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#292929",
            background: "#EEFF00",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",

            ":hover": {
              color: "#EEFF00",
              backgroundColor: "#292929",
            },
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#292929",
            background: "transparent",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            border: "2px solid #EEFF00",
            ":hover": {
              color: "#EEFF00",
              backgroundColor: "#292929",
            },
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml={"21px"}
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard;
