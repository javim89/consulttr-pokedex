import React from "react";
import HomeLayout from "./layouts/HomeLayout";
import PokemonSection from "./sections/Home/PokemonSection";
import FilterSection from "./sections/Home/FilterSection";
import HeaderSection from "./sections/Home/HeaderSection";
import TitleSection from "./sections/Home/TitleSection";
import SearchSection from "./sections/Home/SearchSection";

function App() {
  return (
    <HomeLayout>
      <HeaderSection />
      <TitleSection />
      <SearchSection />
      <FilterSection />
      <PokemonSection />
    </HomeLayout>
  );
}

export default App;
