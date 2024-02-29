import React from "react";
import { Box, Button } from "@mui/material";
import pokemonTypes from "../constants/const";

function FilterSection() {
  return (
    <Box
      sx={{
        overflow: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {pokemonTypes.map((type) => (
        <Button
          variant="text"
          sx={{
            display: "inline-block",
            textAlign: "center",
            textDecoration: "none",
            color: "#ACACAC",
            padding: "14px",
            fontSize: "17px",
            fontWeight: 500,
          }}
        >
          {type.type}
        </Button>
      ))}
    </Box>
  );
}

export default FilterSection;
