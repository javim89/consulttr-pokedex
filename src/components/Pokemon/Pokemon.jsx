import react from "react";
import PokeBackgroundGreen from "../../assets/poke_background_green.png";
import { Box, Typography } from "@mui/material";
import Pidgey from "../../assets/pidgey.png";
import PokeShadow from "../../assets/poke_shadow.png";

const Pokemon = ({ name, hp }) => {
  return (
    <Box
      sx={{
        width: "166px",
        height: "206px",
        backgroundImage: `url(${PokeBackgroundGreen})`,
        backgroundRepeat: "no-repeat",
        position: "relative"
      }}
    >
      <Box
        sx={{
          width: "144px",
          height: "143px",
          backgroundImage: `url(${PokeShadow})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "absolute",
          top: "51px",
          left: "4px"
        }}>
      </Box>
      <Box>
        <img src={Pidgey} />
      </Box>
      <Box sx={{
        position: "absolute",
        top: "139px",
        left: "12px",
        color: "white"
      }}>
        <div>
          <Typography fontWeight={500} fontSize={19.51} variant="span">{name}</Typography>
        </div>
        <div>
          <Typography fontWeight={500} fontSize={16} variant="span">HP{hp}</Typography>
        </div>
      </Box>
    </Box>
  )
};

export default Pokemon;