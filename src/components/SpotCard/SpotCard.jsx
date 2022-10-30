import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  Rating,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function SpotCard({ spot, selected, refProp }) {
  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (selected) console.log(selected);

  return (
    <Card>
      <CardMedia
        sx={{ height: 350 }}
        title={spot.name}
        image={
          spot.photo
            ? spot.photo.images.large.url
            : "https://www.pexels.com/zh-cn/photo/225228/"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {spot.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(spot.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            Based on {spot.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price Level</Typography>
          <Typography variant="subtitle1">{spot.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1">{spot.ranking}</Typography>
        </Box>
        {spot.address && (
          <Typography
            gutterBottom
            variant="body2"
            display="flex"
            justifyContent="space-between"
          >
            <LocationOnIcon />
            {spot.address}
          </Typography>
        )}
        {spot.phone && (
          <Typography
            variant="body2"
            display="flex"
            justifyContent="space-between"
          >
            <PhoneIcon /> {spot.phone}
          </Typography>
        )}
        {spot.cuisine?.map(({ key, name }) => (
          <Chip key={key} size="small" label={name} />
        ))}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(spot.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
}
