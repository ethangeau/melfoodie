import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";

import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import MenuBar from "./components/MenuBar/MenuBar";
import getSpots from "./api";

const App = () => {
  const [spots, setSpots] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
        console.log(latitude, longitude);
      }
    );
  }, []);

  useEffect(() => {
    getSpots(bounds.sw, bounds.ne).then((data) => {
      setSpots(data);
    });
  }, [coords, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <MenuBar spots={spots} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoords={setCoords} setBounds={setBounds} coords={coords} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
