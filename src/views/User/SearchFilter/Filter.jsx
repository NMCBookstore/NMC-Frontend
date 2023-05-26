import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { useGetGenresQuery } from "../../../services/genresAPIs";
import { useGetSubGenresQuery } from "../../../services/subGenresAPIs";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

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
  const [id, setId] = useState(searchParams.get("genres_id") ? searchParams.get("genres_id") : 0);
  const { data: genres } = useGetGenresQuery();
  const { data: subGenres } = useGetSubGenresQuery(id, { skip: !id, refetchOnMountOrArgChange: true });
  const [genre, setGenre] = useState("");
  const [subgenre, setSubgenre] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState([1000, 10000000]);

  const handleGenreChange = (event) => {
    delete searchInfo.subgenres_id
    setGenre(event.target.value);
    if (event.target.value) {
      searchInfo["genres_id"] = event.target.value
    } else {
      delete searchInfo.genres_id
    }
    setId(searchInfo["genres_id"]);
    setSearchParams(searchInfo);
  };

  const handleSubgenreChange = (event) => {
    setSubgenre(event.target.value);
    if (event.target.value) {
      searchInfo["subgenres_id"] = event.target.value
    } else {
      delete searchInfo.genres_id
    }
    setSearchParams(searchInfo);
  };

  const handleChangePrice = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setPrice([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setPrice([clamped - minDistance, clamped]);
      }
    } else {
      setPrice(newValue);
    }
  };

  return (
    <Stack>
      <FormControl
        sx={{ width: "90%", zIndex: 1, marginBottom: 2 }}>
        <InputLabel id="genres-select-label">Genres</InputLabel>
        <Select
          labelId="genres-select-label"
          id="genres-select"
          value={searchParams.get("genres_id") ? searchParams.get("genres_id") : genre}
          label="Genres"
          onChange={handleGenreChange}
        >
          {genres?.map((item, index) => (
            <MenuItem key={item?.id} value={item?.id}>{item?.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        sx={{ width: "90%", zIndex: 1, marginBottom: 2 }}
        disabled={
          (searchParams.get("genres_id") ||
            genre ||
            searchParams.get("subgenres_id") ||
            subgenre)
            ? false : true
        }
      >
        <InputLabel id="subgenres-select-label">Subgenres</InputLabel>
        <Select
          labelId="subgenres-select-label"
          id="subgenres-select"
          value={searchParams.get("subgenres_id") ? searchParams.get("subgenres_id") : subgenre}
          label="Sub Genres"
          onChange={handleSubgenreChange}
        >
          {subGenres?.map((item, index) => (
            <MenuItem key={item?.id} value={item?.id}>{item?.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="h6">Rating Filter:</Typography>
      <Stack direction="row" alignItems="center">
        <Rating
          name="rating"
          defaultValue={0}
          value={searchParams.get("rating") ? searchParams.get("rating") : rating}
          onChange={(e) => {
            setRating(e.target.value)
            if (e.target.value !== 0) {
              searchInfo["rating"] = e.target.value
            } else {
              delete searchInfo.rating
            }
            setSearchParams(searchInfo)
          }}
        />
        <Tooltip
          title="Reset rating"
          sx={{
            color: "#7599cc",
            "&:hover": {
              color: "#93c7ff",
              transform: "rotate(360deg)"
            },
            transition: "all .5s linear",
          }}
          onClick={() => {
            setRating(0)
            delete searchInfo.rating
            setSearchParams(searchInfo)
          }}>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Tooltip>

      </Stack>

      <Box my={2} sx={{ width: "90%", display: "flex", flexWrap: "wrap" }}>
        <Typography variant="h6">Price Filter:</Typography>
        <Slider
          sx={{ color: "#000" }}
          getAriaLabel={() => "Temperature"}
          value={(searchParams.get("min_price") && searchParams.get("max_price")) ?
            [searchParams.get("min_price"), searchParams.get("max_price")] :
            price}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap={true}
          step={100000}
          marks
          min={0}
          max={1000000}
          defaultValue={0}
          onChange={(e) => {
            handleChangePrice(e, e.target.value, true);
            searchInfo["min_price"] = e.target.value[0];
            searchInfo["max_price"] = e.target.value[1];
            setSearchParams(searchInfo)
          }}
        />
      </Box>
    </Stack>
  );
}
