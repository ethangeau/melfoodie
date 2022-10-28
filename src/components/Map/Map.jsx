import React from "react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import GoogleMapReact from "google-map-react";

export default function Map({ setCoords, setBounds, coords }) {
  const isMobile = useMediaQuery("(min-width:600px)");
  const defaultCenter = { lat: -37.8033482, lng: 144.9609289 };

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultCenter}
        center={coords}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
}
