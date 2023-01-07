import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import moment from "moment";
import "moment-timezone";
import { getWeather } from "../api";

const Weather = () => {
  const [hourlyData, setHourlyData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    getWeather().then((data) => {
      setHourlyData(data);
    });
  }, []);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const convertToAEST = (date) => {
    const utcMoment = moment.utc(date, "YYYY-MM-DD HH:mm:ss");
    utcMoment.tz("Australia/Melbourne");
    return utcMoment.format("YYYY-MM-DD HH:mm");
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "1rem",
        right: "6rem",
        zIndex: 1,
        background: `linear-gradient(to bottom left, #5BC0F8, #c4eaf5)`,
        borderRadius: "20px",
      }}
    >
      <List sx={{ width: "100%", maxWidth: "360px" }}>
        {hourlyData.list ? (
          isExpanded ? (
            hourlyData.list.slice(0, 6).map((hour, index) => (
              <ListItem key={hour.dt}>
                <ListItemAvatar>
                  <Avatar
                    alt="Hour"
                    src={`icons/${hour.weather[0].icon}.png`}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${convertToAEST(hour.dt_txt)}: ${Math.round(
                    hour.main.temp
                  )}°C`}
                  secondary={hour.weather[0].description}
                />
                {index === 0 && (
                  <IconButton onClick={handleExpandClick}>
                    <UnfoldLessIcon />
                  </IconButton>
                )}
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt="Hour"
                  src={`icons/${hourlyData.list[0].weather[0].icon}.png`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${convertToAEST(
                  hourlyData.list[0].dt_txt
                )}: ${Math.round(hourlyData.list[0].main.temp)}°C`}
                secondary={hourlyData.list[0].weather[0].description}
              />
              <IconButton onClick={handleExpandClick}>
                <UnfoldMoreIcon />
              </IconButton>
            </ListItem>
          )
        ) : (
          <ListItem>
            <ListItemText primary="Loading..." />
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default Weather;
