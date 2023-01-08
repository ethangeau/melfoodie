import React from "react";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Rating,
  Typography,
  Link,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function SpotCard({ spot, selected, refProp }) {
  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (selected) console.log(selected);

  const handleOnClick = () => {
    console.log("reviews clicked");
  };

  return (
    <Card
      raised
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: "1px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "75%" }}>
          <CardContent sx={{ pb: "10px !important" }}>
            <Typography gutterBottom variant="h6">
              <Link
                href={spot.website}
                underline="hover"
                color="inherit"
                target="_blank"
              >
                {spot.name}
              </Link>
            </Typography>
            <Box display="flex">
              <Typography gutterBottom variant="body2" sx={{ mr: "2px" }}>
                {parseFloat(spot.rating).toFixed(1)}
              </Typography>
              <Rating
                value={Number(spot.rating)}
                precision={0.1}
                readOnly
                size="small"
                sx={{ mr: "2px" }}
              />
              <Typography
                gutterBottom
                variant="body2"
                onClick={handleOnClick}
                sx={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {spot.num_reviews} reviews
              </Typography>
            </Box>
            <Box display="flex">
              <Typography variant="body2" gutterBottom>
                {spot.price_level}
              </Typography>
            </Box>
            {spot.address && (
              <Typography
                gutterBottom
                variant="body2"
                display="flex"
                alignItems="center"
              >
                <LocationOnIcon fontSize="small" />
                {spot.address.split(",")[0]}
              </Typography>
            )}
            {spot.phone && (
              <Typography variant="body2" display="flex" alignItems="center">
                <PhoneIcon fontSize="small" sx={{ mr: "5px" }} /> {spot.phone}
              </Typography>
            )}
          </CardContent>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "25%",
            mt: 3,
          }}
        >
          <Avatar
            alt={spot.name}
            src={
              spot.photo
                ? spot.photo.images.large.url
                : "https://www.pexels.com/zh-cn/photo/225228/"
            }
            sx={{ width: 80, height: 80, borderRadius: 2 }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          mx: "1rem",
          mb: "5px",
        }}
      >
        {spot.cuisine?.slice(0, 4).map(({ key, name }) => (
          <Chip key={key} size="small" label={name} />
        ))}
      </Box>
    </Card>
  );
}
