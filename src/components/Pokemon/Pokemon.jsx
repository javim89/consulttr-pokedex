import React from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import PokeBackgroundGreen from "../../assets/poke_background_green.png";
import PokeBackgroundOrange from "../../assets/poke_background_orange.png";
import PokeBackgroundBlue from "../../assets/poke_background_blue.png";
import PokeBackgroundRed from "../../assets/poke_background_red.png";
import PokeShadow from "../../assets/poke_shadow.png";
import { fetchPokemon } from "../../services/fetchPokemon";
import capitalizeString from "../../utils";

const backgrounds = [
  PokeBackgroundGreen,
  PokeBackgroundOrange,
  PokeBackgroundBlue,
  PokeBackgroundRed,
];

const Pokemon = ({ name, url, index }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`pokemon_${name}`],
    queryFn: () => fetchPokemon(url),
  });

  if (error) return "error";

  return (
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
        {isLoading ? (
          <Skeleton
            variant="circular"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.80)",
            }}
            width={100}
            height={120}
          />
        ) : (
          <img
            src={data.sprites.front_default}
            alt="pokemon img"
            height={206}
            width={166}
          />
        )}
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
            HP{" "}
            {isLoading ? (
              <Skeleton
                variant="text"
                sx={{
                  display: "inline-block",
                  width: "60%",
                  backgroundColor: "rgba(255, 255, 255, 0.80)",
                }}
              />
            ) : (
              data?.stats[0]?.base_stat || "0"
            )}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Pokemon;
