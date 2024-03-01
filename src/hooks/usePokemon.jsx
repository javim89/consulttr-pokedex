import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const usePokemon = () => useContext(PokemonContext);

export default usePokemon;
