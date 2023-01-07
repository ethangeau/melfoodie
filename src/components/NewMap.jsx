import { useState, useMemo, useCallback, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import React from "react";

function NewMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapRef = useRef();
  const center = useMemo(
    () => ({
      lat: Number(process.env.REACT_APP_MEL_LAT),
      lng: Number(process.env.REACT_APP_MEL_LON),
    }),
    []
  );

  const options = useMemo(
    () => ({
      mapId: "2b18e7883e8d00dc",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <>
      {isLoaded ? (
        <>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={center}
            zoom={15}
            onLoad={onLoad}
            options={options}
          ></GoogleMap>
        </>
      ) : (
        <h1>Google Map is loading</h1>
      )}
    </>
  );
}

export default NewMap;
