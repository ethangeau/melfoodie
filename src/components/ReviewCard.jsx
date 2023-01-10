import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Rating,
  Button,
} from "@mui/material";

const ReviewCard = ({ review }) => {
  const {
    author_name,
    profile_photo_url,
    rating,
    text,
    relative_time_description,
  } = review;
  const [isOverflowVisible, setIsOverflowVisible] = useState(false);

  const handleMoreClick = () => {
    setIsOverflowVisible(!isOverflowVisible);
  };

  const style = isOverflowVisible
    ? null
    : {
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
      };

  return (
    <Card raised>
      <CardHeader
        avatar={
          <Avatar
            alt={author_name && author_name[0].toUpperCase()}
            src={profile_photo_url}
          />
        }
        title={author_name}
        subheader={relative_time_description}
      />
      <CardContent sx={{ py: 0 }}>
        <Rating value={Number(rating)} size="small" readOnly />
        <Typography variant="body2" color="text.secondary" sx={style}>
          {text}
        </Typography>
        <Button
          onClick={handleMoreClick}
          sx={{
            textTransform: "none",
            justifyContent: "flex-start",
            m: 0,
            p: 0,
          }}
        >
          {isOverflowVisible ? "Less" : "More"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
