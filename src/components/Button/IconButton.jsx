import React from 'react';
import { IconButton as MUIIconButton } from "@mui/material"
import { styled } from '@mui/material/styles';
/**
 * Primary UI component for user interaction
 */

const MyStyledIconButton = styled(MUIIconButton)(({ theme }) => ({
  backgroundColor: '#652ca8', // Cambiar el color de fondo al pasar el ratón
  border: "1px solid #2F2F45",
  borderRadius: "15px",
  '&:hover': {
    backgroundColor: "#8a38f5",
  },
}));
export const IconButton = ({ icon, ...props }) => {
  return (
    <MyStyledIconButton
      {...props}
    >
      {icon}
    </MyStyledIconButton>
  );
};
