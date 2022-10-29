import React, { useState, useEffect, createRef } from "react";
import {
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Grid,
} from "@mui/material";

import SpotCard from "../SpotCard/SpotCard";

const MenuBar = ({
  spots,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const [eleRefs, setEleRefs] = useState([]);

  useEffect(() => {
    setEleRefs((refs) =>
      Array(spots?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [spots]);

  return (
    <>
      <Typography variant="h5">Restaurant and Hotel Discovery</Typography>
      {isLoading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <>
          <FormControl>
            <InputLabel>Type</InputLabel>
            <Select
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Rating</InputLabel>
            <Select
              label="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={3}>Above 4.0</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3}>
            {spots?.map((spot, i) => (
              <Grid item key={i} xs={12}>
                <SpotCard
                  spot={spot}
                  selected={Number(childClicked) === i}
                  refProp={eleRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default MenuBar;
