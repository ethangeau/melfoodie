import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const API_HOST = "travel-advisor.p.rapidapi.com";

const getSpots = async (sw, ne) => {
  try {
    const response = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    });
    const {
      data: { data },
    } = response;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getSpots;
