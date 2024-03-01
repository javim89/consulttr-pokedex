import React, { createContext, useReducer, useMemo } from "react";

export const PokemonContext = createContext();

const initalState = {
  pokemons: [],
  filteredPokemons: [],
  filtersSelected: [],
};

const toogleFilters = (state, type) => {
  const isSelected = state.filtersSelected.find(
    (filterType) => filterType === type,
  );

  return isSelected
    ? state.filtersSelected.filter((filterType) => filterType !== type)
    : [...state.filtersSelected, type];
};

const filterPokemons = (state) => state.pokemons;

const addPokemonInformation = (state, pokemonData) => {
  const pokemons = state.pokemons.map((pokemon) => {
    if (pokemon.name === pokemonData.name) {
      return {
        ...pokemon,
        ...pokemonData,
      };
    }
    return pokemon;
  });
  return pokemons;
};

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        filteredPokemons: action.payload,
      };
    case "FILTER_TYPES":
      return {
        ...state,
        filtersSelected: toogleFilters(state, action.payload),
        filteredPokemons: filterPokemons(state),
      };
    case "ADD_POKEMON_INFORMATION":
      return {
        ...state,
        pokemons: addPokemonInformation(state, action.payload),
      };
    default:
      return state;
  }
};

const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initalState);

  const setPokemons = (pokemons) => {
    dispatch({
      type: "SET_POKEMONS",
      payload: pokemons,
    });
  };

  const toogleFilterSelected = (type) => {
    dispatch({
      type: "FILTER_TYPES",
      payload: type,
    });
  };

  const addPokemonData = (pokemonData) => {
    dispatch({
      type: "ADD_POKEMON_INFORMATION",
      payload: pokemonData,
    });
  };

  const contextValue = useMemo(
    () => ({ ...state, setPokemons, toogleFilterSelected, addPokemonData }),
    [state, setPokemons, toogleFilterSelected, addPokemonData],
  );

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
