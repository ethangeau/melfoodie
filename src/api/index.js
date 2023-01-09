import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export const getSpots = async (type) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        location: "-37.8120457,144.9600149",
        radius: 3000,
        type: type,
        key: key,
      },
    });
    const {
      data: { results },
    } = response;

    return results;
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

// const API_HOST = "travel-advisor.p.rapidapi.com";

// export const getSpots = async (type) => {
//   try {
//     const response = await axios.get(
//       `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
//       {
//         params: {
//           bl_latitude: -37.82644,
//           tr_latitude: -37.803993,
//           bl_longitude: 144.942759,
//           tr_longitude: 144.97938,
//         },
//         headers: {
//           "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//           "X-RapidAPI-Host": API_HOST,
//         },
//       }
//     );
//     const {
//       data: { data },
//     } = response;

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
