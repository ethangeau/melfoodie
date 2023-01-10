import React from "react";
import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleKeyPress = () => {};

  return (
    <div
      style={{
        position: "absolute",
        top: "1rem",
        left: "1rem",
        zIndex: 1,
        backgroundColor: "#fff",
      }}
    >
      <TextField
        onKeyDown={handleKeyPress}
        name="search"
        value={search}
        placeholder="name"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          width: "15rem",
        }}
      />
    </div>
  );
};

export default Search;
