import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const MyStyledTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root.MuiOutlinedInput-root": {
    backgroundColor: "#604e9b",
    borderRadius: 15,
    "& input": {
      color: "white",
      border: "2px solid #3D3179",
      borderRadius: 15,
    },
    "& input::placeholder": {
      color: "white",
      opacity: "88%",
    },
  },
}));

const Input = ({ ...props }) => <MyStyledTextField {...props} />;

export default Input;
