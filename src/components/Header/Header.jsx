import React from 'react';
import { Box, Avatar, Typography } from "@mui/material";
import Notification from '../Notification/Notification.jsx';

const Header = ({ profileImage, name, profession, notifications }) => (
  <Box sx={{
    display: "flex",
    alignItems: "center",
    width: "350px",
    justifyContent: "space-between"
  }}>
    <Box sx={{
      display: "flex",
      gap: "12px",
      alignItems: "center"
    }}>
      <Box>
        <Avatar src={profileImage} sx={{
          width: 50,
          height: 50,
          border: "1px solid #3D3179"
        }} />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: "column",
      }}>
        <Box>
          <Typography variant={"span"} fontSize={19} fontWeight={500}>{name}</Typography>
        </Box>
        <Box>
          <Typography variant={"span"} fontSize={15} fontWeight={500} sx={{
            opacity: "42%"
          }}>{profession}</Typography>
        </Box>
      </Box>
    </Box>
    <Box>
      <Notification cant={notifications} />
    </Box>
  </Box>
);

export default Header;