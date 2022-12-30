import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";

import Header from "./components/Header";
import Map from "./components/Map";
import MenuBar from "./components/MenuBar";
import getSpots from "./api";

const App = () => {
  const [spots, setSpots] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);
  console.log(spots);

  const [childClicked, setChildClicked] = useState(null);
  console.log({ childClicked });

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  console.log({ bounds });

  const [type, setType] = useState("Restaurant");
  const [rating, setRating] = useState("All");
  const [cuisine, setCuisine] = useState("All");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
        console.log(latitude, longitude);
      }
    );
  }, []);

  useEffect(() => {
    const filtered = spots?.filter((spot) => Number(spot.rating) > rating);
    setFilteredSpots(filtered);
  }, [spots, rating]);

  useEffect(() => {
    setIsLoading(true);
    getSpots(type, bounds.sw, bounds.ne).then((data) => {
      setSpots(data);
      setFilteredSpots([]);
      setIsLoading(false);
    });
  }, [type, coords, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={2.5}>
          <MenuBar
            spots={filteredSpots?.length ? filteredSpots : spots}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            cuisine={cuisine}
            setCuisine={setCuisine}
          />
        </Grid>
        <Grid item xs={12} md={9.5}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            spots={filteredSpots?.length ? filteredSpots : spots}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
