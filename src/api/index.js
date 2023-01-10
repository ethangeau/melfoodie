import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_PROXY_SERVER_URL}/https://maps.googleapis.com/maps/api/place`;
const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export const getSpots = async (type, nextPageToken) => {
  try {
    if (nextPageToken) {
      const response = await axios.get(`${BASE_URL}/nearbysearch/json`, {
        params: {
          location: `${process.env.REACT_APP_MEL_LAT},${process.env.REACT_APP_MEL_LON}`,
          radius: 3000,
          type: type,
          key: key,
          pagetoken: nextPageToken,
        },
      });
      return response.data;
    }
    const response = await axios.get(`${BASE_URL}/nearbysearch/json`, {
      params: {
        location: `${process.env.REACT_APP_MEL_LAT},${process.env.REACT_APP_MEL_LON}`,
        radius: 3000,
        type: type,
        key: key,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpotDetail = async (spotID) => {
  try {
    const response = await axios.get(`${BASE_URL}/details/json`, {
      params: {
        place_id: spotID,
        fields:
          "name,rating,formatted_phone_number,reviews,editorial_summary,website,opening_hours,user_ratings_total,vicinity",
        key: key,
      },
    });
    const {
      data: { result },
    } = response;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getWeather = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_WEATHER_API_URL, {
      params: {
        lat: Number(process.env.REACT_APP_MEL_LAT),
        lon: Number(process.env.REACT_APP_MEL_LON),
        units: "metric",
        appid: process.env.REACT_APP_WEATHER_API_KEY,
      },
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};
