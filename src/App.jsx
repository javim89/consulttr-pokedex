import ProfileImage from "./assets/profile2.png";
import HomeLayout from "./layouts/HomeLayout.jsx"
import Header from "./components/Header/Header.jsx"
import { Typography, Box } from "@mui/material";
import Input from "./components/Input/Input.jsx";
import IconButton from "./components/Button/IconButton.jsx";
import { SearchIcon } from "./assets/icons.jsx";

function App() {
  return (
    <HomeLayout>
      <Box mb={"30px"}>
        <Header
          profileImage={ProfileImage}
          name={"Kaiden Stormwood"}
          profession={"Pokemon Trainer"}
          notifications={3}
        />
      </Box>
      <Box mb={"30px"}>
        <Typography variant="h1" fontWeight={500} fontSize={28} lineHeight={"41px"}>Welcome to your trainer dashboard!</Typography>
      </Box>
      <Box mb={"30px"} sx={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <Box>
          <Input placeholder="Quick Search" />
        </Box>
        <Box>
          <IconButton icon={<SearchIcon />} />
        </Box>
      </Box>
    </HomeLayout>)
}

export default App
