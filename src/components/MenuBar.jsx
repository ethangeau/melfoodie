import React, { useState, useEffect, createRef } from "react";
import {
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Grid,
  CircularProgress,
} from "@mui/material";

import SpotCard from "./SpotCard";
import { types, ratings, cuisines } from "../constants/filterTypes";

const MenuBar = ({
  spots,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
  cuisine,
  setCuisine,
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
      {isLoading ? (
        <CircularProgress size="6rem" />
      ) : (
        <div style={{ margin: "10px" }}>
          <FormControl>
            <InputLabel>Type</InputLabel>
            <Select
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {types.map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Rating</InputLabel>
            <Select
              label="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              {ratings.map((r) => (
                <MenuItem key={r} value={r}>
                  {r}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Cuisine</InputLabel>
            <Select
              label="Cuisine"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              {cuisines.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid container sx={{ pl: 1, height: "80vh", overflow: "auto" }}>
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
        </div>
      )}
    </>
  );
};

export default MenuBar;
