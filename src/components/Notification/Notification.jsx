import { Badge, Button, Box } from "@mui/material";
import { NotificationIcon } from "../../assets/icons";
const Notification = ({ cant }) => {
  return (
    <Box
      sx={{
        width: 40,
        height: 39,
        borderRadius: "24px",
        backgroundColor: "#652ca8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Badge badgeContent={cant} color="error" sx={{
        "& .MuiBadge-badge": {
          width: 16,
          height: 16,
          minWidth: 16
        }
      }}>
        <NotificationIcon />
      </Badge>
    </Box>
  )
}

export default Notification;