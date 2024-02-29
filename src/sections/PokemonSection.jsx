import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import fetchPokemonList from "../services/fetchPokemonList";
import Pokemon from "../components/Pokemon/Pokemon";

function PokemonSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemonList,
  });

  if (isLoading) return "Loading";
  if (error) return "Error";

  return (
    <Grid container spacing={2}>
      {data.results.map((res, index) => (
        <Grid item xs={6} md={4} lg={3} key={res.name}>
          <Pokemon name={res.name} url={res.url} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PokemonSection;
