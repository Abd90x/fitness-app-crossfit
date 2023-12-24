import React from "react";
import Logo from "../assets/images/Logo-1.png";
import { Box, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box mt="80px" bgcolor="#292929" width="100%">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px" color="#FFF">
          Made with ❤️ by Abdellatif
        </Typography>
      </Stack>
    </Box>
  );
}
