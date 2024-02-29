import axios from "axios";

const fetchPokemon = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

export default fetchPokemon;
