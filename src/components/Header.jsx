import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

const Header = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <LunchDiningIcon sx={{ m: 2 }} />
      <Typography variant="h5" sx={{ fontFamily: "cursive" }}>
        Melbourne Foodie
      </Typography>
    </div>
  );
};

export default Header;
