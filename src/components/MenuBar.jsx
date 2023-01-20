import React, { useState, useEffect, createRef } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Grid,
  CircularProgress,
} from "@mui/material";

import SpotCard from "./SpotCard";
import { types, ratings } from "../constants/filterTypes";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

const MenuBar = ({
  spots,
  isLoading,
  type,
  setType,
  rating,
  setRating,
  selectedSpotId,
  setSelectedSpotId,
  setDisplayDetail,
  isNextLoading,
  page,
  setPage,
  hasNextPage,
}) => {
  return (
    <>
      {isLoading ? (
        <CircularProgress size="6rem" />
      ) : (
        <div style={{ margin: "10px" }}>
          <FormControl size="small" sx={{ minWidth: "125px" }}>
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
          <FormControl size="small" sx={{ minWidth: "85px" }}>
            <InputLabel>Rating</InputLabel>
            <Select
              label="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              {ratings.map((r) => (
                <MenuItem key={r} value={r}>
                  {r === 0 ? "All" : `${r} +`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid container sx={{ height: "82vh", overflow: "auto" }}>
            {spots?.map((spot, i) => (
              <Grid item key={i} xs={12}>
                <SpotCard
                  spot={spot}
                  selectedSpotId={selectedSpotId}
                  setSelectedSpotId={setSelectedSpotId}
                  setDisplayDetail={setDisplayDetail}
                />
              </Grid>
            ))}
            {isNextLoading && (
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <CircularProgress size="3rem" />
              </Grid>
            )}
            {hasNextPage && (
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <UnfoldMoreIcon
                  fontSize="large"
                  onClick={() => {
                    setPage(page + 1);
                  }}
                />
              </Grid>
            )}
          </Grid>
        </div>
      )}
    </>
  );
};

export default MenuBar;
