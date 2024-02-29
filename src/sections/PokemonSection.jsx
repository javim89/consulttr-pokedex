import React, { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import fetchPokemonList from "../services/fetchPokemonList";
import Pokemon from "../components/Pokemon/Pokemon";

function PokemonSection({ fetchNextPage }) {
  const [pokemons, setPokemons] = useState([]);
  const {
    data,
    isLoading,
    error,
    fetchNextPage: fetchNextPokemons,
  } = useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: ({ pageParam }) => fetchPokemonList({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
      lastPageParam + 1,
  });

  useEffect(() => {
    if (data?.pages) {
      setPokemons(data?.pages.flatMap((poke) => poke.results));
    }
  }, [data]);

  useEffect(() => {
    if (fetchNextPage) {
      fetchNextPokemons();
    }
  }, [fetchNextPage]);

  console.log(pokemons);

  if (isLoading) return "Loading";
  if (error) return "Error";

  return (
    <Grid container spacing={2}>
      {pokemons.map((res, index) => (
        <Grid item xs={6} md={4} lg={3} key={res.name}>
          <Pokemon name={res.name} url={res.url} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PokemonSection;
