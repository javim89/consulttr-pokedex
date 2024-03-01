import React, { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Input from "../../components/Input/Input";
import IconButton from "../../components/Button/IconButton";
import { SearchIcon } from "../../assets/icons";
import PokemonDialogSection from "./PokemonDialogSection";
import { fetchPokemonByName } from "../../services/fetchPokemon";

const SearchSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [pokemonToSearch, setPokemonToSearch] = useState("");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["pokemon_searched"],
    queryFn: () => fetchPokemonByName(pokemonToSearch.toLowerCase()),
    enabled: false,
    retry: 2,
  });

  const searchPokemon = () => {
    if (
      data !== undefined &&
      data.name.toLowerCase() === pokemonToSearch.toLowerCase()
    ) {
      setOpenDialog(true);
      return;
    }
    if (pokemonToSearch !== "") {
      refetch();
    }
  };

  const handleOnChange = (value) => {
    setPokemonToSearch(value);
  };

  useEffect(() => {
    if (data !== undefined) {
      setOpenDialog(true);
    }
  }, [data]);
  return (
    <Box mb="30px">
      <Grid container spacing={4}>
        <Grid item xs={9} md={4}>
          <Input
            fullWidth
            placeholder="Quick Search"
            onChange={(e) => handleOnChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={3} md={2}>
          <IconButton icon={<SearchIcon />} onClick={() => searchPokemon()} />
        </Grid>
      </Grid>
      {(isLoading || error) && (
        <Grid container mt={2} ml={1}>
          <Grid item>
            <Typography>{isLoading && "Buscando pokemon... "}</Typography>
          </Grid>
          <Grid item>
            <Typography color="error">
              {error && "No encontramos pokemon "}
            </Typography>
          </Grid>
        </Grid>
      )}
      <PokemonDialogSection
        open={openDialog}
        close={() => setOpenDialog(false)}
        pokemon={data}
      />
    </Box>
  );
};

export default SearchSection;
