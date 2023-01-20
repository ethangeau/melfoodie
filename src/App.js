import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";

import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import { getSpots } from "./api";
import NewMap from "./components/NewMap";
import Weather from "./components/Weather";
import SpotDetail from "./components/SpotDetail";
import { getSpotDetail } from "./api";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [spots, setSpots] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);

  const [displayDetail, setDisplayDetail] = useState(false);
  const [selectedSpotId, setSelectedSpotId] = useState(null);
  const [spotDetail, setSpotDetail] = useState([]);

  const [type, setType] = useState("Restaurant");
  const [rating, setRating] = useState(0);

  const [page, setPage] = useState(1);
  const [isNextLoading, setIsNextLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setNextPageToken(null);
    setRating(0);
    setDisplayDetail(false);
    setSpotDetail([]);
    getSpots(type.toLowerCase(), nextPageToken).then((data) => {
      setSpots(data.results);
      setNextPageToken(data.next_page_token);
      setFilteredSpots([]);
      setIsLoading(false);
    });
  }, [type]);

  useEffect(() => {
    getSpotDetail(selectedSpotId).then((data) => {
      setSpotDetail(data);
    });
  }, [selectedSpotId]);

  useEffect(() => {
    const filtered = spots?.filter((spot) => Number(spot.rating) > rating);
    setFilteredSpots(filtered);
  }, [rating]);

  useEffect(() => {
    if (!nextPageToken && page > 1) {
      setHasNextPage(false);
      return;
    }
    setIsNextLoading(true);
    getSpots(type.toLowerCase(), nextPageToken).then((data) => {
      setSpots([...spots, ...data.results]);
      setNextPageToken(data.next_page_token);
      setIsNextLoading(false);
    });
  }, [page]);

  return (
    <>
      <CssBaseline />
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} md={3}>
          <Header />
          <MenuBar
            spots={filteredSpots?.length ? filteredSpots : spots}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            selectedSpotId={selectedSpotId}
            setSelectedSpotId={setSelectedSpotId}
            setDisplayDetail={setDisplayDetail}
            isNextLoading={isNextLoading}
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />
        </Grid>
        <Grid item xs={12} md={9} sx={{ position: "relative" }}>
          <NewMap
            spots={filteredSpots?.length ? filteredSpots : spots}
            selectedSpotId={selectedSpotId}
            setSelectedSpotId={setSelectedSpotId}
            setDisplayDetail={setDisplayDetail}
          />
          <Weather />
          {spotDetail && (
            <SpotDetail
              spotDetail={spotDetail}
              displayDetail={displayDetail}
              setDisplayDetail={setDisplayDetail}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
