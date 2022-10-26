import React from "react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import GoogleMapReact from "google-map-react";

export default function Map() {
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };
  const defaultCenter = { lat: 37.8136, lng: 144.9631 };
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultCenter}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}
