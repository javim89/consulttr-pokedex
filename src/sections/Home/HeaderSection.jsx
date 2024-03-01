import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import ProfileImage from "../../assets/profile2.png";

const HeaderSection = () => (
  <Box mb="30px">
    <Header
      profileImage={ProfileImage}
      name="Kaiden Stormwood"
      profession="Pokemon Trainer"
      notifications={3}
    />
  </Box>
);

export default HeaderSection;
