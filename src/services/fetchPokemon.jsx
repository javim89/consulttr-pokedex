import axios from "axios";

const fetchPokemon = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

const fetchPokemonByName = async (pokemon) => {
  const res = await axios.get(
    `${import.meta.env.VITE_POKE_API_URL}/pokemon/${pokemon}`,
  );
  return res.data;
};

export { fetchPokemon, fetchPokemonByName };
