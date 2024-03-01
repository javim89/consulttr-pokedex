import * as React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import capitalizeString from "../../utils";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    backgroundColor: "#121212",
  },
}));

const PokemonDialogSection = ({ open, close, pokemon }) => (
  <BootstrapDialog
    onClose={close}
    aria-labelledby="customized-dialog-title"
    open={open}
    fullWidth
  >
    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
      {pokemon && capitalizeString(pokemon?.name)}
    </DialogTitle>
    <DialogContent dividers>
      <Box display="flex" justifyContent="center">
        <img
          src={pokemon?.sprites.front_default}
          alt="pokemon img"
          height={206}
          width={166}
        />
      </Box>
      <Box>
        <Typography>{`Weight: ${pokemon?.weight}`}</Typography>
      </Box>
      <Box mb={3}>
        <Typography>Type:</Typography>
        <Stack direction="row" spacing={2}>
          {pokemon?.types.map((type) => (
            <Chip label={type.type.name} variant="outlined" />
          ))}
        </Stack>
      </Box>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={close}>
        Close
      </Button>
    </DialogActions>
  </BootstrapDialog>
);

export default PokemonDialogSection;
