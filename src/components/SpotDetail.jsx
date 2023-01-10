import React from "react";
import { Typography, Link, Grid, Box, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";
import ReviewCard from "./ReviewCard";

export default function SpotDetail({
  spotDetail,
  displayDetail,
  setDisplayDetail,
}) {
  return (
    <>
      {displayDetail && (
        <Grid
          container
          sx={{
            maxWidth: 350,
            position: "absolute",
            top: "3rem",
            left: "1rem",
            zIndex: 1,
            backgroundColor: "#fff",
            borderRadius: "0.5rem",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: "1rem",
              py: "0.5rem",
            }}
          >
            <Link href={spotDetail.website} target="_blank" color="inherit">
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {spotDetail.name}
              </Typography>
            </Link>
            <CloseIcon
              onClick={() => setDisplayDetail(false)}
              sx={{ cursor: "pointer" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ px: "1rem", pb: "0.5rem" }}>
              {spotDetail.editorial_summary?.overview}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ px: "10px" }}>
            {spotDetail.vicinity && (
              <Typography
                gutterBottom
                variant="body2"
                display="flex"
                alignItems="center"
              >
                <LocationOnIcon fontSize="small" sx={{ mr: "2px" }} />
                {spotDetail.vicinity.split(",")[0]}
              </Typography>
            )}
          </Grid>
          <Grid container sx={{ px: "10px" }}>
            <Typography
              gutterBottom
              variant="body2"
              display="flex"
              alignItems="center"
            >
              <PhoneIcon fontSize="small" sx={{ mr: "2px" }} />
              {spotDetail.formatted_phone_number}
            </Typography>
          </Grid>
          <Box display="flex" sx={{ mx: "1rem", mb: "0.3rem" }}>
            <Typography variant="body2">
              {parseFloat(spotDetail.rating).toFixed(1)}
            </Typography>
            <Rating
              value={Number(spotDetail.rating)}
              precision={0.1}
              readOnly
              size="small"
              sx={{ mr: "5px" }}
            />
            <Typography variant="body2">
              {spotDetail.user_ratings_total} reviews
            </Typography>
          </Box>
          <Grid item xs={12} sx={{ maxHeight: "60vh", overflow: "auto" }}>
            {spotDetail.reviews?.map((review, idx) => (
              <Grid item xs={12} key={idx}>
                <ReviewCard key={idx} review={review} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
}
