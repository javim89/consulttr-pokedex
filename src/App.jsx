import React from "react";
import { Snackbar } from "@mui/material";
import HomeLayout from "./layouts/HomeLayout";
import PokemonSection from "./sections/Home/PokemonSection";
import FilterSection from "./sections/Home/FilterSection";
import HeaderSection from "./sections/Home/HeaderSection";
import TitleSection from "./sections/Home/TitleSection";
import SearchSection from "./sections/Home/SearchSection";
import usePokemon from "./hooks/usePokemon";

function App() {
  const { openSnackBar, toogleSnackBar } = usePokemon();
  return (
    <HomeLayout>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackBar}
        message="Se agregaron 20 pokemons"
        autoHideDuration={1500}
        onClose={() => toogleSnackBar()}
      />
      <HeaderSection />
      <TitleSection />
      <SearchSection />
      <FilterSection />
      <PokemonSection />
    </HomeLayout>
  );
}

export default App;
