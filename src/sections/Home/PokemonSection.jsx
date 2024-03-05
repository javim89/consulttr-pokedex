import React, { useEffect } from "react";

import { Grid, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Pokemon from "../../components/Pokemon/Pokemon";
import usePokemon from "../../hooks/usePokemon";

const PokemonSection = () => {
  const { ref, inView } = useInView();
  const { filteredPokemons, fetchNextPokemons, error, isFetchingPokemons } =
    usePokemon();

  useEffect(() => {
    if (inView) {
      fetchNextPokemons();
    }
  }, [inView]);

  if (error) return "Error";

  return (
    <Box mb="30px">
      <Grid container spacing={2}>
        {filteredPokemons.map((pokemon, index) => (
          <Grid item xs={6} md={4} lg={3} key={pokemon.name}>
            <Pokemon
              name={pokemon.name}
              hp={pokemon.hp}
              pokemonImage={pokemon.pokemonImage}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
      <div ref={ref}>{isFetchingPokemons && "Loading..."}</div>
    </Box>
  );
};

export default PokemonSection;
