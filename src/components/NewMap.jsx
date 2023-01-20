import { useState, useMemo, useCallback, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import React from "react";

function NewMap({
  spots,
  selectedSpotId,
  setSelectedSpotId,
  setDisplayDetail,
}) {
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
          >
            {spots?.map((spot) => (
              <Marker
                key={spot.place_id}
                position={{
                  lat: spot.geometry.location.lat,
                  lng: spot.geometry.location.lng,
                }}
                icon={{
                  url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=80&photo_reference=${spot.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
                  scaledSize:
                    spot.place_id === selectedSpotId
                      ? { width: 80, height: 80 }
                      : { width: 40, height: 40 },
                }}
                onClick={() => {
                  setSelectedSpotId(spot.place_id);
                  setDisplayDetail(true);
                }}
              />
            ))}
          </GoogleMap>
        </>
      ) : (
        <h1>Google Map is loading</h1>
      )}
    </>
  );
}

export default NewMap;
