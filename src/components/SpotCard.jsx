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

export default function SpotCard({
  spot,
  selected,
  refProp,
  setSpotID,
  setDisplayDetail,
}) {
  const IMG_URL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photo_reference=${spot.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const handleOnClick = () => {
    setSpotID(spot.place_id);
    setDisplayDetail(true);
  };

  return (
    <Card
      raised
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: "1px",
      }}
      onClick={handleOnClick}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "75%" }}>
          <CardContent sx={{ pb: "10px !important" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", ml: "4px", mb: "0.5rem" }}
            >
              {spot.name}
            </Typography>
            <Box display="flex">
              <Typography variant="body2" sx={{ mx: "4px", mb: "0.3rem" }}>
                {parseFloat(spot.rating).toFixed(1)}
              </Typography>
              <Rating
                value={Number(spot.rating)}
                precision={0.1}
                readOnly
                size="small"
                sx={{ mr: "5px" }}
              />
              <Typography variant="body2">
                {spot.user_ratings_total} reviews
              </Typography>
            </Box>
            {spot.price_level && (
              <Typography variant="body2" sx={{ ml: "3px", mb: "0.3rem" }}>
                {"$".repeat(Number(spot.price_level))}
              </Typography>
            )}
            {spot.vicinity && (
              <Typography
                gutterBottom
                variant="body2"
                display="flex"
                alignItems="center"
              >
                <LocationOnIcon fontSize="small" sx={{ mr: "2px" }} />
                {spot.vicinity.split(",")[0]}
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
            src={spot.photos ? IMG_URL : spot.icon}
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
        {spot.types?.slice(0, 4).map((type) => (
          <Chip key={type} size="small" label={type} />
        ))}
      </Box>
    </Card>
  );
}
