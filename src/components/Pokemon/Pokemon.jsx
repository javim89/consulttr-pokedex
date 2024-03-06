import React from "react";
import { Box, Typography, Grow } from "@mui/material";
import PokeBackgroundGreen from "../../assets/poke_background_green.png";
import PokeBackgroundOrange from "../../assets/poke_background_orange.png";
import PokeBackgroundBlue from "../../assets/poke_background_blue.png";
import PokeBackgroundRed from "../../assets/poke_background_red.png";
import PokeShadow from "../../assets/poke_shadow.png";
import capitalizeString from "../../utils";

const backgrounds = [
  PokeBackgroundGreen,
  PokeBackgroundOrange,
  PokeBackgroundBlue,
  PokeBackgroundRed,
];

const Pokemon = ({ name, hp, pokemonImage, index }) => (
  <Grow in style={{ transformOrigin: "0 0 0" }} timeout={1000}>
    <Box
      sx={{
        width: "166px",
        height: "206px",
        backgroundImage: `url(${backgrounds[index % backgrounds.length]})`,
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "144px",
          height: "143px",
          backgroundImage: `url(${PokeShadow})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "absolute",
          top: "51px",
          left: "4px",
        }}
      />
      <Box
        sx={{
          width: "166px",
          height: "206px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={pokemonImage} alt="pokemon img" height={206} width={166} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "139px",
          left: "12px",
          color: "white",
        }}
      >
        <div>
          <Typography fontWeight={500} fontSize={19.51} variant="span">
            {capitalizeString(name)}
          </Typography>
        </div>
        <div>
          <Typography fontWeight={500} fontSize={16} variant="span">
            HP {hp}
          </Typography>
        </div>
      </Box>
    </Box>
  </Grow>
);

export default Pokemon;
