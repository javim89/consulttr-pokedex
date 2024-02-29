import Pokemon from '../components/Pokemon/Pokemon.jsx';
import Pidgey from "../assets/pidgey.png";

export default {
  title: 'Pokemon/Pokemon',
  component: Pokemon,
};

export const Primary = {
  args: {
    name: "Pidgey",
    hp: "50",
    pokemonImage: Pidgey
  },
};

