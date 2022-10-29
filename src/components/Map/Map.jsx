import React from "react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Map({ setCoords, setBounds, coords, spots }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const defaultCenter = { lat: -37.8033482, lng: 144.9609289 };

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultCenter}
        center={coords}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {}}
      >
        {spots?.map((spot, i) => (
          <div key={i} lat={Number(spot.latitude)} lng={Number(spot.longitude)}>
            {isMobile ? (
              <LocationOnIcon color="primary" fontSize="large" />
            ) : (
              <Paper
                elevation={3}
                style={{ padding: "10px", cursor: "pointer" }}
              >
                <Typography variant="subtitle3" gutterBottom>
                  {spot.name}
                </Typography>
                <img
                  style={{ width: "80px" }}
                  src={
                    spot.photo
                      ? spot.photo.images.large.url
                      : "https://www.pexels.com/zh-cn/photo/225228/"
                  }
                  alt={spot.name}
                />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}
