import React from "react";
import { Grid } from "@mui/material";
import Input from "../../components/Input/Input";
import IconButton from "../../components/Button/IconButton";
import { SearchIcon } from "../../assets/icons";

const SearchSection = () => (
  <Grid container spacing={4} mb="30px">
    <Grid item>
      <Input placeholder="Quick Search" />
    </Grid>
    <Grid item>
      <IconButton icon={<SearchIcon />} />
    </Grid>
  </Grid>
);

export default SearchSection;
