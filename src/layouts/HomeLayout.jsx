import React from "react";
import { Box } from "@mui/material";

function HomeLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
      }}
    >
      {children}
    </Box>
  );
}

export default HomeLayout;
