import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function ExerciseVideos({ exerciseVideos, name }) {
  if (!exerciseVideos.length) return "Loading...";

  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="20px">
        Watch{" "}
        <span
          style={{
            color: "#EEFF00",
            textTransform: "capitalize",
            background: "#292929",
            padding: "2px 4px",
            borderRadius: "5px",
          }}
        >
          {name}
        </span>{" "}
        Exercise Videos
      </Typography>
      <Stack
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "10px", xs: 0 } }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}{" "}
                <span
                  style={{
                    fontSize: "14px",
                    color: "#888",
                    marginLeft: "5px",
                  }}
                >
                  {item.video.viewCountText}
                </span>
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
