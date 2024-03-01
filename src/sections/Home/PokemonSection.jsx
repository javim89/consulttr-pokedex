import React, { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Grid, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import fetchPokemonList from "../../services/fetchPokemonList";
import Pokemon from "../../components/Pokemon/Pokemon";
import usePokemon from "../../hooks/usePokemon";

const PokemonSection = () => {
  const { ref, inView } = useInView();
  const [fetchNextPage, setFetchNextPage] = useState(false);
  const { setPokemons, filteredPokemons } = usePokemon();
  useEffect(() => {
    setFetchNextPage(inView);
  }, [inView]);

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

  if (error) return "Error";

  return (
    <Box mb="30px">
      <Grid container spacing={2}>
        {filteredPokemons.map((res, index) => (
          <Grid item xs={6} md={4} lg={3} key={res.name}>
            <Pokemon name={res.name} url={res.url} index={index} />
          </Grid>
        ))}
      </Grid>
      <div ref={ref}>{isLoading && "Loading..."}</div>
    </Box>
  );
};

export default PokemonSection;
