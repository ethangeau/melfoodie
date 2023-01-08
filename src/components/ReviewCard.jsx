import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Button,
} from "@mui/material";

const ReviewCard = ({ review }) => {
  const { name, rating, time, text } = review;
  const [isOverflowVisible, setIsOverflowVisible] = useState(false);

  const handleMoreClick = () => {
    setIsOverflowVisible(!isOverflowVisible);
  };

  const style = isOverflowVisible
    ? null
    : {
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
      };

  return (
    <Card raised>
      <CardHeader
        avatar={<Avatar>{name[0].toUpperCase()}</Avatar>}
        title={name}
        subheader={time}
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
