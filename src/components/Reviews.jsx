import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [displayReviews, setDisplayReviews] = useState(false);
  return (
    <>
      {displayReviews && (
        <Grid
          container
          sx={{
            maxWidth: 350,
            position: "absolute",
            top: "5rem",
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
            <Typography variant="h6">Reviews</Typography>
            <CloseIcon
              onClick={() => setDisplayReviews(false)}
              sx={{ cursor: "pointer" }}
            />
          </Grid>
          <Grid item xs={12} sx={{ maxHeight: "75vh", overflow: "auto" }}>
            {reviews.map((review) => (
              <Grid item xs={12} key={review.id}>
                <ReviewCard key={review.id} review={review} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Reviews;
