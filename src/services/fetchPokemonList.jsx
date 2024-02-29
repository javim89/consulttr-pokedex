import axios from "axios";

const fetchPokemonList = async ({ page = 1 }) => {
  const res = await axios.get(`${import.meta.env.VITE_POKE_API_URL}/pokemon`, {
    params: {
      limit: 20,
      offset: (page - 1) * 20,
      id: 1,
    },
  });

  return res.data;
};

export default fetchPokemonList;
