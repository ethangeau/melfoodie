import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";

import Header from "./components/Header";
import Map from "./components/Map";
import MenuBar from "./components/MenuBar";
import { getSpots } from "./api";
import NewMap from "./components/NewMap";
import Weather from "./components/Weather";
import Search from "./components/Search";
import Reviews from "./components/Reviews";

const App = () => {
  const [spots, setSpots] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);
  console.log(spots);

  const [childClicked, setChildClicked] = useState(null);

  // const [coords, setCoords] = useState({});
  // const [bounds, setBounds] = useState({});

  const [type, setType] = useState("Restaurant");
  const [rating, setRating] = useState("All");
  const [cuisine, setCuisine] = useState("All");

  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoords({ lat: latitude, lng: longitude });
  //       console.log(latitude, longitude);
  //     }
  //   );
  // }, []);

  useEffect(() => {
    const filtered = spots?.filter((spot) => Number(spot.rating) > rating);
    setFilteredSpots(filtered);
  }, [rating]);

  useEffect(() => {
    const filtered = spots?.filter((cuisine) => {});
    setFilteredSpots(filtered);
  }, [cuisine]);

  useEffect(() => {
    setIsLoading(true);
    getSpots(type).then((data) => {
      setSpots(data);
      setFilteredSpots([]);
      setIsLoading(false);
    });
  }, [type]);

  return (
    <>
      <CssBaseline />
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} md={3}>
          <Header />
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
        <Grid item xs={12} md={9} sx={{ position: "relative" }}>
          <Reviews />
          <Search />
          <Weather />
          <NewMap />
        </Grid>
      </Grid>
    </>
  );
};

export default App;

{
  /* <Map
spots={filteredSpots?.length ? filteredSpots : spots}
setChildClicked={setChildClicked}
/> */
}
