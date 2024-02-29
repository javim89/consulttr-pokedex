import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const MyStyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root.MuiOutlinedInput-root": {
    backgroundColor: "#652ca8", // Cambiar el color de fondo
    borderRadius: 15, // Agregar un border radius de 15
    width: 283,
    "& input": {
      color: "white", // Cambiar el color del texto
      border: "2px solid #3D3179",
      borderRadius: 15, // Agregar un border radius de 15
    },
    "& input::placeholder": {
      color: "white", // Cambiar el color del placeholder
      opacity: "88%",
    },
  },
}));

function Input({ ...props }) {
  return <MyStyledTextField {...props} />;
}

export default Input;
