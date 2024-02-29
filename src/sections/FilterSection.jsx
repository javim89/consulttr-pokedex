import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import pokemonTypes from "../constants/const";

function FilterSection() {
  const [filtersSelected, setFiltersSelected] = useState([]);

  const toogleFilter = (type) => {
    const isSelected = filtersSelected.find(
      (filterType) => filterType === type,
    );
    if (isSelected) {
      setFiltersSelected(
        filtersSelected.filter((filterType) => filterType !== type),
      );
      return;
    }
    setFiltersSelected([...filtersSelected, type]);
  };
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
          }}
          onClick={() => toogleFilter(type.type)}
          key={type.type}
        >
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: 500,
              color:
                filtersSelected.indexOf(type.type) === -1 ? "#ACACAC" : "white",
              textDecoration:
                filtersSelected.indexOf(type.type) === -1
                  ? "none"
                  : "underline",
              textUnderlineOffset: "6px",
              textDecorationThickness: "3px",
            }}
          >
            {type.type}
          </Typography>
        </Button>
      ))}
    </Box>
  );
}

export default FilterSection;
