import React from "react";
import HomeLayout from "./layouts/HomeLayout";
import PokemonSection from "./sections/Home/PokemonSection";
import FilterSection from "./sections/Home/FilterSection";
import HeaderSection from "./sections/Home/HeaderSection";
import TitleSection from "./sections/Home/TitleSection";
import SearchSection from "./sections/Home/SearchSection";
import PokemonProvider from "./context/PokemonContext";

function App() {
  return (
    <HomeLayout>
      <HeaderSection />
      <TitleSection />
      <SearchSection />
      <PokemonProvider>
        <FilterSection />
        <PokemonSection />
      </PokemonProvider>
    </HomeLayout>
  );
}

export default App;
