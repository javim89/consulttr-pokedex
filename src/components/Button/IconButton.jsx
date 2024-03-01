import React from "react";
import { IconButton as MUIIconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyStyledIconButton = styled(MUIIconButton)(() => ({
  backgroundColor: "#604e9b",
  border: "1px solid #2F2F45",
  borderRadius: "18px",
  width: 60,
  height: 60,
  "&:hover": {
    backgroundColor: "#8a38f5",
  },
}));

const IconButton = ({ icon, ...props }) => (
  <MyStyledIconButton {...props}>{icon}</MyStyledIconButton>
);

export default IconButton;
