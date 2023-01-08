import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [displayReviews, setDisplayReviews] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "ethan",
      rating: "4",
      time: "1-7-2020",
      text: "Fantastic restaurant. It was our first time here trying their chef selection menu. The quality of pasta is great and the sauce is rich with layers of flavors. We were really impressed by their dessert. ",
    },
    {
      id: 2,
      name: "James",
      rating: "3",
      time: "1-3-2022",
      text: "It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu.It was our first time here trying their chef selection menu. The quality of pasta is great and the sauce is rich with layers of flavors. We were really impressed by their dessert. ",
    },
    {
      id: 3,
      name: "John",
      rating: "5",
      time: "5-3-2022",
      text: "Great restaurant and delicious food with amazing atmosphere. Our waitress was absolutely amazing and attentive. It was our first time here trying their chef selection menu. The quality of pasta is great and the sauce is rich with layers of flavors. We were really impressed by their dessert. ",
    },
    {
      id: 4,
      name: "John",
      rating: "5",
      time: "5-3-2022",
      text: "Great restaurant and delicious food with amazing atmosphere. Our waitress was absolutely amazing and attentive. It was our first time here trying their chef selection menu. The quality of pasta is great and the sauce is rich with layers of flavors. We were really impressed by their dessert. ",
    },
  ];

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
