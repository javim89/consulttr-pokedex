/* eslint-disable prettier/prettier */
import React, { createContext, useReducer, useMemo, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import fetchPokemonList from "../services/fetchPokemonList";
import { fetchPokemon } from "../services/fetchPokemon";

export const PokemonContext = createContext();

const initalState = {
  pokemons: [],
  filteredPokemons: [],
  filtersSelected: [],
  openSnackBar: false
};

const toogleFilters = (state, type) => {
  const isSelected = state.filtersSelected.find(
    (filterType) => filterType === type,
  );

  return isSelected
    ? state.filtersSelected.filter((filterType) => filterType !== type)
    : [...state.filtersSelected, type.toLowerCase()];
};

const filterPokemons = (state) => {
  const filteredPokemons =
    state.filtersSelected.length >= 1
      ? state.pokemons.filter((pokemon) =>
        pokemon.types.some((type) => state.filtersSelected.includes(type)),
      )
      : state.pokemons;
  return filteredPokemons;
};

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "FILTER_TYPES":
      return {
        ...state,
        filtersSelected: toogleFilters(state, action.payload),
      };
    case "UPDATE_FILTER_POKEMONS":
      return {
        ...state,
        filteredPokemons: filterPokemons(state),
      };
    case "TOOGLE_SNACK_BAR":
      return {
        ...state,
        openSnackBar: !state.openSnackBar
      };
    default:
      return state;
  }
};

const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initalState);

  const {
    data: dataPokemons,
    isFetching: isFetchingPokemons,
    error: errorPokemons,
    fetchNextPage: fetchNextPokemons,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: ({ pageParam }) => fetchPokemonList({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => lastPage.next ? lastPageParam + 1 : null,
  });

  const toogleSnackBar = () => {
    dispatch({
      type: "TOOGLE_SNACK_BAR"
    })
  }

  const setPokemons = (pokemons) => {
    dispatch({
      type: "SET_POKEMONS",
      payload: pokemons,
    });
    dispatch({
      type: "UPDATE_FILTER_POKEMONS",
    });
    toogleSnackBar()
  };

  const toogleFilterSelected = (type) => {
    dispatch({
      type: "FILTER_TYPES",
      payload: type,
    });
    dispatch({
      type: "UPDATE_FILTER_POKEMONS",
    });
  };

  useEffect(() => {
    const getPokemonsData = async (pages) => {
      const promises = pages[dataPokemons.pages.length - 1].results.map(
        async (result) => {
          const pokemon = await fetchPokemon(result.url);
          return {
            ...result,
            pokemonImage: pokemon.sprites.front_default,
            hp: pokemon.stats[0]?.base_stat,
            types: pokemon.types.map((type) => type.type.name),
          };
        },
      );

      const detailedData = await Promise.all(promises);
      setPokemons([...state.pokemons, ...detailedData]);
    };

    if (dataPokemons?.pages) {
      getPokemonsData(dataPokemons?.pages);
    }
  }, [dataPokemons]);

  const contextValue = useMemo(
    () => ({
      ...state,
      setPokemons,
      toogleFilterSelected,
      isFetchingPokemons,
      errorPokemons,
      fetchNextPokemons,
      hasNextPage,
      toogleSnackBar
    }),
    [
      state,
      setPokemons,
      toogleFilterSelected,
      isFetchingPokemons,
      errorPokemons,
      fetchNextPokemons,
      hasNextPage,
      toogleSnackBar
    ],
  );

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
