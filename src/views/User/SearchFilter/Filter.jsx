import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import { useGetSearchQuery } from "../../../services/searchAPI";
import { Link } from "react-router-dom";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useGetSubGenresQuery } from "../../../services/subGenresAPIs";
import { Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

const minDistance = 10;

function valuetext(value) {
  return `${value} VND`;
}

const stars = [
  { label: "1 star", value: 1 },
  { label: "2 star", value: 2 },
  { label: "3 star", value: 3 },
  { label: "4 star", value: 4 },
  { label: "5 star", value: 5 },
];

export default function Filter({
  searchInfo,
  searchParams,
  setSearchParams,
}) {
  const [value2, setValue2] = useState([1000, 10000000]);
  const [id, setId] = useState(0);
  const { data: genres } = useGetGenresQuery();
  const { data: subGenres } = useGetSubGenresQuery(id, { skip: !id });

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Stack>
      <Autocomplete
        disablePortal
        id="filter-demo"
        onChange={(e, option) => {
          e.stopPropagation();
          searchInfo["genres_id"] = option?.id;
          setId(searchInfo["genres_id"]);
        }}
        options={genres}
        getOptionLabel={(option) => option?.name}
        sx={{ width: "90%", zIndex: 1, marginBottom: 2 }}
        renderInput={(params) => <TextField {...params} label="Genres" />}
      />

      <Autocomplete
        key={id}
        disablePortal
        id="filter-demo2"
        onChange={(e, option) => {
          searchInfo["subgenres_id"] = option?.id;
        }}
        options={subGenres ? subGenres : []}
        getOptionLabel={(option) => option?.name}
        sx={{ width: "90%", zIndex: 1, marginBottom: 2 }}
        renderInput={(params) => <TextField {...params} label="SubGenres" />}
      />

      <Typography variant="h6">
        Rating Filter:
      </Typography>
      <Rating
        name="rating"
        defaultValue={1}
        onChange={(e) => {
          searchInfo["rating"] = e.target.value
        }}
      />

      <Box my={2} sx={{ width: "90%", display: "flex", flexWrap: "wrap" }}>
        <Typography variant="h6">
          Price Filter:
        </Typography>
        <Slider
          sx={{ color: "#000" }}
          getAriaLabel={() => "Temperature"}
          value={value2}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap={true}
          step={100000}
          marks
          min={0}
          max={1000000}
          defaultValue={1000}
          onChange={(e) => {
            handleChange2(e, e.target.value, true);
            searchInfo["min_price"] = e.target.value[0];
            searchInfo["max_price"] = e.target.value[1];
          }}
        />
      </Box>
      {/* <Link to={`/search-filter?page_id=${page_id}&page_size=${page_size}${text ? '&text=' + text : ''}&min_price=1000&max_price=10000000&rating=0`} style={{ textDecoration: "none", marginTop: 8 }}> */}
      {/* <Link style={{ textDecoration: "none", marginTop: 8 }}> */}
        <Button
          onClick={() => {
            console.log(searchInfo)
            setSearchParams(searchInfo)
          }}
          variant="contained"
          sx={{
            backgroundColor: "#2b7de9",
            "&:hover": {
              background: "#6aa4ef",
            },
          }}
        >
          Apply Filter
        </Button>
      {/* </Link> */}
    </Stack>
  );
}
