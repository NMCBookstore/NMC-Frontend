import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

const genresOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.genresTitles,
});

const subGenresOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.genresTitles,
});

const genres = [
  { genresTitles: "Fiction", total: 100 },
  { genresTitles: "Children", total: 400 },
  { genresTitles: "Comic", total: 300 },
  { genresTitles: "Foreign languages", total: 400 },
  { genresTitles: "Psychology", total: 300 },
  { genresTitles: "Economy", total: 400 },
  { genresTitles: "Engineering", total: 300 },
];

const subGenres = [
  { subGenresTitle: "Sci-fi", total: 100 },
  { subGenresTitle: "Comedy", total: 200 },
  { subGenresTitle: "English", total: 300 },
  { subGenresTitle: "Self-help", total: 400 },
  { subGenresTitle: "Educate", total: 300 },
  { subGenresTitle: "Economic", total: 400 },
  { subGenresTitle: "IT-book", total: 300 },
];

const marks = [
  {
    value: 0,
    label: "0 VND",
  },
  {
    value: 150,
    label: "150.000 VND",
  },
  {
    value: 300,
    label: "300.000 VND",
  },
  {
    value: 500,
    label: "500.000 VND",
  },
  {
    value: 1000,
    label: "1.000.000 VND",
  },
];

function valuetext(value) {
  return `${value} VND`;
}

export default function Filter() {
  return (
    <Stack spacing={3} padding={2}>
      <Autocomplete
        disablePortal
        id="filter-demo"
        options={genres}
        getOptionLabel={(option) => option.genresTitles}
        genresOptions={genresOptions}
        sx={{ width: "90%" }}
        renderInput={(params) => <TextField {...params} label="Genres" />}
      />

      <Autocomplete
        disablePortal
        id="filter-demo2"
        options={subGenres}
        getOptionLabel={(option) => option.subGenresTitle}
        subGenresOptions={subGenresOptions}
        sx={{ width: "90%" }}
        renderInput={(params) => <TextField {...params} label="SubGenres" />}
      />

      <Box my={2} sx={{ width: "90%", display: "flex", flexWrap: "wrap" }}>
        <Slider
          sx={{ color: "black" }}
          aria-label="Custom marks"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
    </Stack>
  );
}
