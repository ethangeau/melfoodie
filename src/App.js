import React from "react";
import { CssBaseline, Grid } from "@mui/material";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import MenuBar from "./components/MenuBar/MenuBar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <MenuBar />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
