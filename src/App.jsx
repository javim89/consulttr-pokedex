import React from "react";
import { Typography, Box } from "@mui/material";
import ProfileImage from "./assets/profile2.png";
import HomeLayout from "./layouts/HomeLayout";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import IconButton from "./components/Button/IconButton";
import { SearchIcon } from "./assets/icons";
import PokemonSection from "./sections/PokemonSection";

function App() {
  return (
    <HomeLayout>
      <Box mb="30px">
        <Header
          profileImage={ProfileImage}
          name="Kaiden Stormwood"
          profession="Pokemon Trainer"
          notifications={3}
        />
      </Box>
      <Box mb="30px">
        <Typography
          variant="h1"
          fontWeight={500}
          fontSize={28}
          lineHeight="41px"
        >
          Welcome to your trainer dashboard!
        </Typography>
      </Box>
      <Box
        mb="30px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Input placeholder="Quick Search" />
        </Box>
        <Box>
          <IconButton icon={<SearchIcon />} />
        </Box>
      </Box>
      <Box mb="30px">Pokemon kinds</Box>
      <Box mb="30px">
        <PokemonSection />
      </Box>
    </HomeLayout>
  );
}

export default App;
