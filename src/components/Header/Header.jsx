import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import HotelIcon from "@mui/icons-material/Hotel";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <LunchDiningIcon sx={{ mr: 2 }} />
        <HotelIcon sx={{ mr: 2 }} />
        <Typography variant="h5">Local Food & Shelter</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
