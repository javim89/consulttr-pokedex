import React from "react";
import { Box } from "@mui/material";
import Input from "../../components/Input/Input";
import IconButton from "../../components/Button/IconButton";
import { SearchIcon } from "../../assets/icons";

const SearchSection = () => (
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
);

export default SearchSection;
