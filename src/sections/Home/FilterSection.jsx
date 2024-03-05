import React from "react";
import { Box, Button, Typography } from "@mui/material";
import pokemonTypes from "../../constants/const";
import usePokemon from "../../hooks/usePokemon";

const FilterSection = () => {
  const { toogleFilterSelected, filtersSelected } = usePokemon();

  return (
    <Box mb="30px">
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
            onClick={() => toogleFilterSelected(type.type.toLocaleLowerCase())}
            key={type.type}
          >
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: 500,
                color:
                  filtersSelected.indexOf(type.type.toLowerCase()) === -1
                    ? "#ACACAC"
                    : "white",
                textDecoration:
                  filtersSelected.indexOf(type.type.toLowerCase()) === -1
                    ? "none"
                    : "underline",
                textUnderlineOffset: "8px",
                textDecorationThickness: "3px",
              }}
            >
              {type.type}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default FilterSection;
