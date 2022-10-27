import React, { useState } from "react";
import {
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Grid,
} from "@mui/material";

import SpotCard from "../SpotCard/SpotCard";

const MenuBar = () => {
  const [type, setType] = useState("restaurant");
  const [rating, setRating] = useState("");

  const spots = [{ name: "Steak" }, { name: "Burger" }, { name: "Pizza" }];

  return (
    <>
      <Typography variant="h5">Restaurant and Hotel Discovery</Typography>
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Select
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurant">Restaurant</MenuItem>
          <MenuItem value="hotel">Hotel</MenuItem>
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
            <SpotCard spot={spot} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MenuBar;
