import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ProfileImage from "./assets/profile2.png";
import HomeLayout from "./layouts/HomeLayout";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import IconButton from "./components/Button/IconButton";
import { SearchIcon } from "./assets/icons";
import PokemonSection from "./sections/PokemonSection";

function App() {
  const { ref, inView } = useInView();
  const [fetchNextPage, setFetchNextPage] = useState(false);

  useEffect(() => {
    setFetchNextPage(inView);
  }, [inView]);

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
        <PokemonSection fetchNextPage={fetchNextPage} />
      </Box>
      <Box ref={ref} />
    </HomeLayout>
  );
}

export default App;
