import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <LunchDiningIcon sx={{ mr: 2 }} />
        <Typography variant="h5">Melbourne Foodie</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
